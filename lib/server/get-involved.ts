import { createHash } from "node:crypto";

type JsonRecord = Record<string, unknown>;

type NewsletterSubscriber = {
  email: string;
  name: string;
};

export type NewsletterStatus = "not_requested" | "pending" | "not_configured" | "failed";

export function isJsonRecord(value: unknown): value is JsonRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function readJsonRecord(request: Request): Promise<JsonRecord | null> {
  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > 16_000) {
    return null;
  }

  let text: string;
  try {
    text = await request.text();
  } catch {
    return null;
  }
  if (text.length > 16_000) {
    return null;
  }

  try {
    const value: unknown = JSON.parse(text);
    return isJsonRecord(value) ? value : null;
  } catch {
    return null;
  }
}

export function getString(
  value: JsonRecord,
  key: string,
  options: { required?: boolean; maxLength: number },
): string | null {
  const field = value[key];
  if (field === undefined || field === null || field === "") {
    return options.required ? null : "";
  }
  if (typeof field !== "string") {
    return null;
  }

  const normalized = field.trim();
  if (normalized.length > options.maxLength || (options.required && normalized.length === 0)) {
    return null;
  }

  return normalized;
}

export function isValidEmail(email: string): boolean {
  return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function getNewsletterConsent(value: JsonRecord): boolean | null {
  const consent = value.newsletter_opt_in;
  if (consent === undefined) {
    return false;
  }
  return typeof consent === "boolean" ? consent : null;
}

export async function saveApplication(
  table: "volunteer_applications" | "partner_applications",
  application: Record<string, string | null>,
): Promise<void> {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Supabase application storage is not configured.");
  }

  let baseUrl: URL;
  try {
    baseUrl = new URL(supabaseUrl);
  } catch {
    throw new Error("SUPABASE_URL must be a valid URL.");
  }
  if (baseUrl.protocol !== "https:" && baseUrl.hostname !== "localhost") {
    throw new Error("SUPABASE_URL must use HTTPS.");
  }

  const response = await fetch(new URL(`/rest/v1/${table}`, baseUrl), {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(application),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Supabase application storage returned HTTP ${response.status}.`);
  }
}

export async function addNewsletterSubscriber(
  subscriber: NewsletterSubscriber,
): Promise<NewsletterStatus> {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const serverPrefix = apiKey?.match(/-(us\d+)$/)?.[1];
  if (!apiKey || !audienceId || !serverPrefix) {
    return "not_configured";
  }

  const email = subscriber.email.toLowerCase();
  const subscriberHash = createHash("md5").update(email).digest("hex");
  const names = subscriber.name.split(/\s+/);
  const firstName = names.shift() ?? "";
  const lastName = names.join(" ");

  try {
    const response = await fetch(
      `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${encodeURIComponent(audienceId)}/members/${subscriberHash}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Basic ${Buffer.from(`watersaved:${apiKey}`).toString("base64")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status_if_new: "pending",
          status: "pending",
          merge_fields: { FNAME: firstName, LNAME: lastName },
        }),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      console.error("Mailchimp subscription request failed.", response.status);
      return "failed";
    }
    return "pending";
  } catch (error) {
    console.error(
      "Mailchimp subscription request failed.",
      error instanceof Error ? error.message : "Unknown network error.",
    );
    return "failed";
  }
}
