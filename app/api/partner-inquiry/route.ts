import {
  addNewsletterSubscriber,
  getNewsletterConsent,
  getString,
  isValidEmail,
  readJsonRecord,
  saveApplication,
} from "@/lib/server/get-involved";

const partnershipTypes = new Set([
  "Funding partner",
  "Technical/NGO partner",
  "Government agency",
  "Corporate partner",
  "Other",
]);

export async function POST(request: Request) {
  const body = await readJsonRecord(request);
  if (!body) {
    return Response.json({ error: "Please submit a valid partnership inquiry." }, { status: 400 });
  }

  const organisationName = getString(body, "org_name", { required: true, maxLength: 200 });
  const contactName = getString(body, "contact_name", { required: true, maxLength: 150 });
  const email = getString(body, "email", { required: true, maxLength: 254 });
  const partnershipType = getString(body, "partnership_type", { required: true, maxLength: 80 });
  const message = getString(body, "message", { required: true, maxLength: 5000 });
  const newsletterOptIn = getNewsletterConsent(body);

  if (
    !organisationName ||
    !contactName ||
    !email ||
    !isValidEmail(email) ||
    !partnershipType ||
    !partnershipTypes.has(partnershipType) ||
    !message ||
    newsletterOptIn === null
  ) {
    return Response.json({ error: "Check the inquiry fields and try again." }, { status: 400 });
  }

  try {
    await saveApplication("partner_applications", {
      org_name: organisationName,
      contact_name: contactName,
      email: email.toLowerCase(),
      partnership_type: partnershipType,
      message,
      newsletter_opt_in_at: newsletterOptIn ? new Date().toISOString() : null,
    });
  } catch (error) {
    console.error(
      "Unable to save partnership inquiry.",
      error instanceof Error ? error.message : "Unknown storage error.",
    );
    return Response.json(
      { error: "We could not save your inquiry. Please try again later." },
      { status: 503 },
    );
  }

  const newsletterStatus = newsletterOptIn
    ? await addNewsletterSubscriber({ email, name: contactName })
    : "not_requested";

  return Response.json({ applicationSaved: true, newsletterStatus });
}
