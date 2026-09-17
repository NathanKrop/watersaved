export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pt-16 pb-20 prose-like">
      <p className="text-sm text-forest-500">Legal</p>
      <h1 className="mt-2 font-display text-4xl text-forest-900">Privacy Policy</h1>
      <div className="mt-8 space-y-5 text-ink-soft max-w-[65ch]">
        <p>
          This page outlines a placeholder structure to be reviewed by counsel before launch, in
          line with Kenya&apos;s Data Protection Act, 2019. It should cover, at minimum:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>What personal data we collect (contact forms, donations, newsletter, volunteer applications) and why.</li>
          <li>The legal basis for processing each category of data, including consent capture for newsletter sign-ups.</li>
          <li>How long we retain donor, applicant, and subscriber data.</li>
          <li>Third parties data is shared with (payment processors, email providers) and safeguards in place.</li>
          <li>How a person can request access to, correction of, or deletion of their data.</li>
          <li>Contact details for our designated data protection contact.</li>
        </ul>
        <p>Last reviewed: [date]. Replace this page with counsel-approved copy before launch.</p>
      </div>
    </article>
  );
}
