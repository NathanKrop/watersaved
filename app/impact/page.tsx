import Image from "next/image";
import { ImpactCounter } from "@/components/impact-counter";
import { CtaLink } from "@/components/cta-link";
import { impactGoals, newsPosts } from "@/lib/data/content";
import { formatDate } from "@/lib/format";

export const metadata = { title: "Impact" };

const annualReports = [
  { year: 2025, title: "2025 Annual Report", note: "Full financials and hectare-by-hectare progress." },
  { year: 2024, title: "2024 Annual Report", note: "First year reporting across five counties." },
  { year: 2023, title: "2023 Annual Report", note: "Baseline data for the current 2030 goals." },
];

export default function ImpactPage() {
  return (
    <>
      <section className="relative bg-forest-900 text-mist-50 overflow-hidden">
        <Image
          src="/img/MVIMG_20260603_130623.jpg"
          alt="Impact of restoration work"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-forest-900/60" />
        <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16">
          <p className="text-sm text-forest-300">Impact</p>
          <h1 className="mt-2 font-display text-4xl text-mist-50 max-w-2xl text-balance">
            Where we stand, on the way to 2030.
          </h1>
          <p className="mt-5 text-forest-300 max-w-2xl">
            These are our organisation-wide commitments across all six counties, not any single
            project&apos;s target. Every figure links to how it was measured.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-10 sm:grid-cols-2">
          {impactGoals.map((goal) => (
            <ImpactCounter key={goal.label} goal={goal} />
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-mist-100">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-sm uppercase tracking-[0.18em] text-clay-700">Our measurement approach</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl text-forest-900">We track what changes, not just what gets distributed.</h2>
          <p className="mt-4 max-w-3xl text-ink-soft">A seedling count is a starting point, not proof of restoration. Our reporting follows the work from inputs and activities through to survival, vegetation recovery, livelihoods and stronger local stewardship.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Assess & plan", "Map sites, record baseline conditions and agree priorities with communities and partners."],
              ["Restore", "Track seedlings, training, protected areas, farm practices and local organisations supported."],
              ["Monitor", "Check tree survival, vegetation recovery, soil and water indicators, and maintenance needs over time."],
              ["Learn & report", "Share methods, results, financial summaries, partner roles and feedback channels clearly."],
            ].map(([title, body], index) => (
              <div key={title} className="bg-paper p-5">
                <p className="text-sm text-clay-700">0{index + 1}</p>
                <h3 className="mt-3 font-display text-xl text-forest-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl border-l-2 border-clay-600 pl-4 text-sm leading-relaxed text-ink-soft">Figures are published with their date, geography, definition and verification method. We distinguish Save Kenya Water Towers’ results from wider partner or national programme targets, and report survival and ecological outcomes alongside planting activity.</p>
        </div>
      </section>

      <section className="border-t border-line bg-mist-100">
        <div className="mx-auto max-w-6xl px-5 py-16 grid gap-10 lg:grid-cols-[1fr_256px]">
          <div>
            <h2 className="font-display text-3xl text-forest-900">Annual reports</h2>
            <p className="mt-2 text-ink-soft max-w-xl">
              Independently reviewed before publication, including full financial statements.
            </p>
            <ul className="mt-8 divide-y divide-line border-t border-line">
              {annualReports.map((report) => (
                <li key={report.year} className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="font-medium text-forest-900">{report.title}</p>
                    <p className="text-sm text-ink-soft">{report.note}</p>
                  </div>
                  <span className="text-sm text-forest-500 underline underline-offset-4 whitespace-nowrap">
                    Download PDF
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative hidden lg:block overflow-hidden">
            <Image
              src="/img/WhatsApp Image 2026-09-10 at 1.08.50 PM (1).jpeg"
              alt="Field team reviewing data"
              fill
              sizes="256px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-2xl text-forest-900">Recent announcements</h2>
        <ul className="mt-6 divide-y divide-line">
          {newsPosts.slice(0, 3).map((n) => (
            <li key={n.slug} className="py-4">
              <p className="text-xs text-ink-soft">{formatDate(n.publishedAt)}</p>
              <p className="mt-1 font-medium text-forest-900">{n.title}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <CtaLink href="/donate">Help us reach these goals faster</CtaLink>
        </div>
      </section>
    </>
  );
}
