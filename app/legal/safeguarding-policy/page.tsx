export const metadata = { title: "Safeguarding Policy" };

export default function SafeguardingPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pt-16 pb-20">
      <p className="text-sm text-forest-500">Legal</p>
      <h1 className="mt-2 font-display text-4xl text-forest-900">Safeguarding Policy</h1>
      <div className="mt-8 space-y-5 text-ink-soft max-w-[65ch]">
        <p>
          We work in and around schools, community groups, and youth forest-scout programmes.
          This placeholder should be replaced with a full policy covering, at minimum:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Our commitment to protecting children and vulnerable adults in all our programmes.</li>
          <li>Staff and volunteer vetting requirements before working with schools or youth groups.</li>
          <li>Clear, accessible steps for reporting a concern, including anonymously.</li>
          <li>How reports are handled, escalated, and followed up.</li>
          <li>Our designated safeguarding lead and their contact details.</li>
        </ul>
        <p>Last reviewed: [date]. Have this reviewed by a safeguarding specialist before launch.</p>
      </div>
    </article>
  );
}

