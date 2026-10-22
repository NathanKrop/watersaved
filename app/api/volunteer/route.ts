import {
  addNewsletterSubscriber,
  getNewsletterConsent,
  readJsonRecord,
  getString,
  isValidEmail,
  saveApplication,
} from "@/lib/server/get-involved";

export async function POST(request: Request) {
  const body = await readJsonRecord(request);
  if (!body) {
    return Response.json({ error: "Please submit a valid application." }, { status: 400 });
  }

  const fullName = getString(body, "full_name", { required: true, maxLength: 150 });
  const phone = getString(body, "phone", { required: true, maxLength: 40 });
  const email = getString(body, "email", { required: true, maxLength: 254 });
  const county = getString(body, "county", { required: true, maxLength: 100 });
  const availability = getString(body, "availability", { maxLength: 500 });
  const skills = getString(body, "skills", { maxLength: 2000 });
  const motivation = getString(body, "motivation", { required: true, maxLength: 5000 });
  const newsletterOptIn = getNewsletterConsent(body);

  if (
    !fullName ||
    !phone ||
    !email ||
    !isValidEmail(email) ||
    !county ||
    availability === null ||
    skills === null ||
    !motivation ||
    newsletterOptIn === null
  ) {
    return Response.json({ error: "Check the application fields and try again." }, { status: 400 });
  }

  try {
    await saveApplication("volunteer_applications", {
      full_name: fullName,
      phone,
      email: email.toLowerCase(),
      county,
      availability: availability || null,
      skills: skills || null,
      motivation,
      newsletter_opt_in_at: newsletterOptIn ? new Date().toISOString() : null,
    });
  } catch (error) {
    console.error(
      "Unable to save volunteer application.",
      error instanceof Error ? error.message : "Unknown storage error.",
    );
    return Response.json(
      { error: "We could not save your application. Please try again later." },
      { status: 503 },
    );
  }

  const newsletterStatus = newsletterOptIn
    ? await addNewsletterSubscriber({ email, name: fullName })
    : "not_requested";

  return Response.json({ applicationSaved: true, newsletterStatus });
}
