import {
  addNewsletterSubscriber,
  getString,
  isValidEmail,
  readJsonRecord,
} from "@/lib/server/get-involved";

export async function POST(request: Request) {
  const body = await readJsonRecord(request);
  if (!body) {
    return Response.json({ error: "Please provide a valid email and name." }, { status: 400 });
  }

  const name = getString(body, "name", { required: true, maxLength: 150 });
  const email = getString(body, "email", { required: true, maxLength: 254 });
  if (!name || !email || !isValidEmail(email) || body.consent !== true) {
    return Response.json(
      { error: "Provide a valid name and email and confirm your consent." },
      { status: 400 },
    );
  }

  const newsletterStatus = await addNewsletterSubscriber({ email, name });
  if (newsletterStatus === "not_configured") {
    return Response.json(
      { error: "Newsletter subscriptions are not configured yet." },
      { status: 503 },
    );
  }
  if (newsletterStatus === "failed") {
    return Response.json(
      { error: "We could not subscribe you. Please try again later." },
      { status: 502 },
    );
  }

  return Response.json({ newsletterStatus });
}
