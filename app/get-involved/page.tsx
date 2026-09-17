import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Get Involved" };

const tracks = [
  {
    href: "/get-involved/volunteer",
    title: "Volunteer",
    desc: "Join a planting day, a fence-repair crew, or a nursery shift on a Saturday.",
  },
  {
    href: "/get-involved/partner",
    title: "Partner with us",
    desc: "For funders, NGOs, and government agencies working on catchment protection.",
  },
  {
    href: "/get-involved#fundraise",
    title: "Fundraise for us",
    desc: "Run a birthday fundraiser, a school drive, or a community harambee.",
  },
  {
    href: "/events",
    title: "Attend an event",
    desc: "See what's coming up across all six counties.",
  },
];

const partnerCategories = [
  {
    category: "Government & Public Institutions",
    partners: [
      { name: "Government of Kenya", desc: "National policy and regulatory framework for forest and water-tower protection." },
      { name: "Kenya Forest Service", desc: "Public-sector partner responsible for forest management, protection and community forest governance." },
      { name: "Kenya Forestry Research Institute", desc: "Research and technical partner supporting evidence-based restoration and forestry practices." },
      { name: "County Government of Baringo", desc: "County-level partner supporting landscape coordination, restoration and community development." },
      { name: "County Government of Elgeyo-Marakwet", desc: "County-level partner supporting landscape coordination, restoration and community development." },
      { name: "Kenya National Highways Authority", desc: "Public infrastructure stakeholder relevant to road corridors, land management and environmental safeguards." },
      { name: "Eldowas", desc: "Water and sanitation partner supporting water-related infrastructure and services." },
    ],
  },
  {
    category: "International Development & Conservation",
    partners: [
      { name: "Food and Agriculture Organization of the United Nations", desc: "Technical and programme partner supporting forest and farm producer restoration initiatives." },
      { name: "BMZ", desc: "Development cooperation partner supporting restoration and sustainable landscape management." },
      { name: "World Resources Institute", desc: "Knowledge and restoration partner supporting landscape data, monitoring and restoration planning." },
      { name: "Bezos Earth Fund", desc: "Philanthropic partner supporting large-scale nature-based solutions and restoration finance." },
      { name: "One Tree Planted", desc: "Restoration-support and finance partner connected with tree-growing and African landscape restoration." },
      { name: "TerraFund for AFR100", desc: "Restoration finance partner connected with the African landscape restoration initiative." },
      { name: "AFR100", desc: "Pan-African restoration initiative supporting country-level commitments to restore degraded land." },
    ],
  },
  {
    category: "Research & Knowledge",
    partners: [
      { name: "University of Eldoret", desc: "Knowledge and research partner supporting training, research and local technical capacity." },
      { name: "Kenya Forestry Research Institute", desc: "Research partner providing scientific grounding for restoration methodology and species selection." },
    ],
  },
  {
    category: "Community, Agriculture & Civil Society",
    partners: [
      { name: "Conservation Alliance of Kenya", desc: "Conservation partner supporting environmental collaboration and advocacy." },
      { name: "Cereal Growers Association", desc: "Agricultural partner connecting restoration with farmer organisations, food security and sustainable production." },
      { name: "Scope Intervention", desc: "Community development partner supporting local capacity and social inclusion in restoration work." },
      { name: "Access", desc: "Civil society partner supporting community engagement and grassroots mobilisation." },
    ],
  },
];

const PARTNER_LOGOS = [
  { file: "CAOK.jpeg", label: "Conservation Alliance of Kenya" },
  { file: "CGA.jpeg", label: "Cereal Growers Association" },
  { file: "FAO.jpeg", label: "Food and Agriculture Organization" },
  { file: "Image (3).jpeg", label: "" },
  { file: "Image (4).jpeg", label: "" },
  { file: "Image (5).jpeg", label: "" },
  { file: "Image 1 (1).jpeg", label: "" },
  { file: "Image 1 (2).jpeg", label: "" },
  { file: "Image 1.jpeg", label: "" },
  { file: "Image 11.jpeg", label: "" },
  { file: "Image 14.jpeg", label: "" },
  { file: "Image 15.jpeg", label: "" },
  { file: "Image 18.jpeg", label: "" },
  { file: "Image 19.jpeg", label: "" },
  { file: "Image 2.jpeg", label: "" },
  { file: "Image 20.jpeg", label: "" },
  { file: "Image 4.jpeg", label: "" },
  { file: "Image 5.jpeg", label: "" },
  { file: "Image.jpeg", label: "" },
  { file: "images.jpeg", label: "" },
  { file: "SKWT.png", label: "Save Kenya Water Towers" },
];

export default function GetInvolvedPage() {
  return (
    <>
      <section className="relative bg-forest-900 text-mist-50 overflow-hidden">
        <Image
          src="/img/new/pexels-yunustug-38197486.jpg"
          alt="Volunteers at a community planting day"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-forest-900/60" />
        <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16">
          <p className="text-sm text-forest-300">Get involved</p>
          <h1 className="mt-2 font-display text-4xl text-mist-50 max-w-2xl text-balance">
            There&apos;s more than one way to help.
          </h1>
          <p className="mt-5 text-forest-300 max-w-2xl">
            Money matters, but so does time, land access, local knowledge, and a phone number to
            call when a fence line is cut.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-2 pb-16 grid gap-px bg-line sm:grid-cols-2">
        {tracks.map((track) => (
          <Link key={track.href} href={track.href} className="group bg-paper p-8 hover:bg-forest-900 transition-colors">
            <p className="font-display text-2xl text-forest-900 group-hover:text-mist-50 transition-colors">
              {track.title}
            </p>
            <p className="mt-2 text-sm text-ink-soft group-hover:text-forest-300 transition-colors">
              {track.desc}
            </p>
          </Link>
        ))}
      </section>

      {/* Partners section */}
      <section id="partners" className="border-t border-line bg-mist-100 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-sm uppercase tracking-[0.18em] text-clay-700">Our partners</p>
          <h2 className="mt-3 font-display text-3xl text-forest-900 max-w-2xl">
            Protecting Kenya&apos;s water towers requires cooperation across communities, government, research and conservation.
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
            Partners contribute technical expertise, research, funding, policy support, community mobilisation,
            restoration materials and local knowledge. The exact role of each organisation is confirmed on a
            project-by-project basis.
          </p>

          {/* Logo grid */}
          <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-7">
            {PARTNER_LOGOS.map((logo) => (
              <div
                key={logo.file}
                className="relative flex h-20 items-center justify-center bg-white border border-line px-3 py-2"
              >
                <Image
                  src={`/logo/partners%20logo/${encodeURIComponent(logo.file)}`}
                  alt={logo.label}
                  fill
                  sizes="(min-width: 1024px) 14vw, (min-width: 640px) 20vw, 33vw"
                  className="object-contain p-2"
                />
              </div>
            ))}
          </div>

          {/* Partner categories */}
          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            {partnerCategories.map((cat) => (
              <div key={cat.category}>
                <p className="text-xs uppercase tracking-[0.16em] text-clay-700 border-b border-line pb-2">{cat.category}</p>
                <ul className="mt-4 space-y-4">
                  {cat.partners.map((p) => (
                    <li key={p.name}>
                      <p className="font-medium text-forest-900 text-sm">{p.name}</p>
                      <p className="mt-0.5 text-sm text-ink-soft leading-relaxed">{p.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs text-ink-soft max-w-2xl border-t border-line pt-6">
            Partner relationships vary by project and may include funding, technical assistance, research, policy
            coordination, implementation and community mobilisation. Logos are displayed with permission and reflect
            current or recent collaboration.
          </p>
        </div>
      </section>

      <section id="fundraise" className="border-t border-line scroll-mt-20">
        <div className="mx-auto max-w-3xl px-5 py-16">
          <h2 className="font-display text-2xl text-forest-900">Fundraise for us</h2>
          <p className="mt-3 text-ink-soft">
            If you&apos;d like to run your own campaign — a birthday fundraiser, a school tree
            drive, a community harambee — we&apos;ll give you a toolkit with our logo, suggested
            copy, and a dedicated project page to point people to.
          </p>
          <Link href="/contact" className="mt-5 inline-block text-sm text-forest-500 underline underline-offset-4">
            Get the fundraising toolkit →
          </Link>
        </div>
      </section>
    </>
  );
}

