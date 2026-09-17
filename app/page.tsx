import Link from "next/link";
import Image from "next/image";
import { ContourLines } from "@/components/contour-lines";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { CtaLink } from "@/components/cta-link";
import { newsPosts } from "@/lib/data/content";
import { formatDate } from "@/lib/format";

const responseAreas = [
  {
    number: "01",
    title: "Landscape Restoration & Ecosystem Health",
    body: "Restore indigenous forest, riverbanks, soils and water sources using the right intervention for each ecological zone.",
    href: "/programmes/agroforestry-reforestation",
  },
  {
    number: "02",
    title: "Policy & Governance",
    body: "Support participatory plans, boundary protection, coordination and evidence-informed land-use decisions.",
    href: "/programmes",
  },
  {
    number: "03",
    title: "Social Inclusion",
    body: "Ensure women, youth, forest users and marginalised groups participate in decisions and benefit from the work.",
    href: "/programmes/gender-intergenerational-equity",
  },
  {
    number: "04",
    title: "Livelihoods",
    body: "Support enterprises — nurseries, agroforestry, coffee, beekeeping, clean energy — that reduce pressure on forests.",
    href: "/programmes/regenerative-agriculture",
  },
  {
    number: "05",
    title: "Food Security",
    body: "Promote climate-smart farming, soil and water conservation and diversified household production.",
    href: "/programmes/regenerative-agriculture",
  },
  {
    number: "06",
    title: "Community Development",
    body: "Build local organisations, skills, monitoring systems and leadership so restoration continues beyond a project cycle.",
    href: "/programmes/education-awareness",
  },
];

export default function Home() {
  const latestNews = newsPosts.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest-900 text-mist-50 overflow-hidden">
        <Image
          src="/img/IMG_0526.jpeg"
          alt="Highland forest catchment in Kenya"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-forest-900/65" />
        <div className="relative z-10 mx-auto max-w-6xl px-5 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <p className="text-sm uppercase tracking-[0.18em] text-mist-50">Save Kenya Water Towers</p>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.98] max-w-4xl text-balance text-paper">
            Restore the forests. Secure the water. Strengthen the communities.
          </h1>
          <p className="mt-7 max-w-2xl text-mist-50 text-lg leading-relaxed">
            Kenya&apos;s water towers feed rivers, farms, homes and livelihoods. We work with communities
            and partners to restore degraded landscapes, protect water sources and build nature-positive
            incomes across Kenya&apos;s Rift Valley.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CtaLink href="/donate">Donate to restoration</CtaLink>
            <CtaLink href="/impact" variant="secondary" className="border-forest-300 text-mist-50 hover:bg-mist-50 hover:text-forest-900">
              Explore our impact
            </CtaLink>
          </div>
          <p className="mt-8 text-xs uppercase tracking-[0.14em] text-mist-50">
            Community-led restoration <span aria-hidden="true">•</span> Indigenous ecosystems <span aria-hidden="true">•</span> Measurable impact
          </p>
        </div>
        <ContourLines animate className="absolute -bottom-1 left-0 w-full h-24 text-forest-500" />
      </section>

      {/* Photo feature strip */}
      <section className="border-t border-line bg-forest-900">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-2 lg:grid-cols-[2fr_1fr] lg:grid-rows-2 lg:h-[600px]">
            {/* Large left image — spans full height */}
            <div className="group relative lg:row-span-2 overflow-hidden">
              <Image
                src="/img/new/pexels-nyar-kaheti-76506250-8614553.jpg"
                alt="Forest restoration work"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-xs uppercase tracking-widest text-clay-500">In the field</p>
                <p className="mt-1 font-display text-2xl text-paper">Where restoration begins — with the people who live there</p>
              </div>
            </div>
            {/* Top-right */}
            <div className="group relative overflow-hidden">
              <Image
                src="/img/MVIMG_20260603_113312.jpg"
                alt="Community planting day"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent" />
              <p className="absolute bottom-0 left-0 p-4 font-display text-lg text-paper">Community first</p>
            </div>
            {/* Bottom-right */}
            <div className="group relative overflow-hidden">
              <Image
                src="/img/MVIMG_20260603_130618.jpg"
                alt="Landscape and water catchment"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <p className="font-display text-lg text-paper">Holding the landscape together</p>
                <p className="mt-0.5 text-sm text-forest-300">Healthy vegetation anchors soils, regulates water and sustains livelihoods.</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-forest-300">Nurseries, farms, forest patrols, and community days.</p>
            <Link href="/where-we-work" className="text-sm text-clay-500 underline underline-offset-4">See where we work &rarr;</Link>
          </div>
        </div>
      </section>

      {/* The crisis */}
      <section className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-clay-700">Why this matters</p>
            <p className="mt-4 font-display text-3xl leading-tight text-forest-900 sm:text-4xl">
              Kenya&apos;s water towers cover just 2% of the country&apos;s land area — and supply an estimated 75% of its renewable surface water.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Five upland forest blocks intercept rain-bearing clouds off the Indian Ocean before the rest of the country sees them. Their elevation, their soils and their root systems store, filter and release water that feeds rivers, fills reservoirs and irrigates farmland far downstream.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              When these forests are degraded — through encroachment, charcoal cutting, unmanaged grazing — the consequences travel downstream: harder water access, soil erosion, flooding, landslides and the loss of productive land. The response must restore the whole landscape, not simply plant trees.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Independent economic valuations have put the annual value of Kenya&apos;s major water towers at hundreds of millions of dollars to the national economy — through irrigation, piped water and hydropower. Protecting them is not a conservation luxury. It is infrastructure maintenance.
            </p>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/img/new/pexels-timon-cornelissen-241844481-14078245.jpg"
              alt="Forest canopy and water catchment"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["75%", "approximate share of Kenya's renewable surface water associated with the five major water towers"],
            ["2%", "of Kenya's total land area covered by the five water towers — a small footprint with an outsized hydrological role"],
            ["68%", "of Kenya's population had at least basic drinking-water service nationally (KDHS 2022)"],
            ["56%", "of the rural population had at least basic drinking-water service (KDHS 2022)"],
          ].map(([value, label]) => (
            <div key={label} className="bg-mist-50 p-6">
              <p className="font-display text-5xl text-forest-900">{value}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our response */}
      <section className="border-t border-line bg-mist-100">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.18em] text-clay-700">Our response</p>
            <h2 className="mt-3 font-display text-3xl text-forest-900">Restoration lasts when ecology, livelihoods and governance move together.</h2>
            <p className="mt-3 text-ink-soft leading-relaxed">
              Restoring a water tower is not just about growing trees. It means healthy ecosystems, fair policy,
              included communities, stronger livelihoods, reliable food and resilient neighbourhoods — together.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {responseAreas.map((area) => (
              <Link key={area.number} href={area.href} className="group border border-line bg-mist-50 p-6 hover:bg-forest-900 transition-colors">
                <p className="text-sm text-clay-700 group-hover:text-clay-600">{area.number}</p>
                <h3 className="mt-5 font-display text-xl text-forest-900 group-hover:text-mist-50 transition-colors">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft group-hover:text-forest-300 transition-colors">{area.body}</p>
              </Link>
            ))}
          </div>
          <Link href="/projects" className="mt-8 inline-block text-sm text-forest-500 underline underline-offset-4">Explore Our Work &rarr;</Link>
        </div>
      </section>

      {/* Featured project */}
      <section className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <PhotoPlaceholder
            src="/img/IMG_0833.jpeg"
            alt="Community nursery seedlings"
            caption="Community nursery seedlings — the starting point for landscape restoration"
            aspect="wide"
          />
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-clay-700">Featured project</p>
            <h2 className="mt-3 font-display text-3xl text-forest-900">Community-Led Restoration and Improved Landscape Management</h2>
            <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
              <div><dt className="font-medium text-forest-900">County</dt><dd className="mt-1 text-ink-soft">Elgeyo-Marakwet</dd></div>
              <div><dt className="font-medium text-forest-900">Partners</dt><dd className="mt-1 text-ink-soft">FAO, BMZ, AFR100</dd></div>
            </dl>
            <p className="mt-6 text-ink-soft leading-relaxed">
              Along a highland escarpment overlooking the Kerio Valley, decades of encroachment have pushed the forest boundary upward, degrading indigenous cover and weakening the water catchment that communities below depend on.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Working with FAO and its partners, we are restoring this landscape through three interlinked components: reviewing and strengthening forest governance instruments, developing an integrated landscape management plan, and supporting community-led restoration through agroforestry and assisted natural regeneration.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Farm Forest Producer Organisations are integrating indigenous trees and coffee into farms while protecting natural regrowth in degraded areas — connecting ecological recovery with household livelihoods.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            ["01", "Strengthen forest governance", "Review and update participatory forest management plans and forest management agreements — the institutional foundation for equitable, lasting restoration."],
            ["02", "Develop a landscape management plan", "Coordinate land use, boundary protection and resource management across forest, farmland and water resources using an integrated landscape approach."],
            ["03", "Restore through agroforestry and ANR", "Support producer organisations with indigenous trees, coffee systems and assisted natural regeneration matched to ecological zones and community priorities."],
          ].map(([number, title, body]) => (
            <div key={number} className="border-t-2 border-forest-700 pt-4">
              <p className="text-sm text-clay-700">{number}</p>
              <h3 className="mt-3 font-display text-xl text-forest-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
            </div>
          ))}
        </div>
        <Link href="/projects/spencer-line-restoration" className="mt-8 inline-block text-sm text-forest-500 underline underline-offset-4">Read the full project &rarr;</Link>
      </section>

      {/* Our story */}
      <section className="border-t border-line bg-clay-100">
        <div className="relative overflow-hidden">
          <Image
            src="/img/new/pexels-feitenhenrique-33363890.jpg"
            alt="Forest restoration landscape"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-20"
          />
          <div className="relative mx-auto max-w-6xl px-5 py-16">
            <p className="text-sm uppercase tracking-[0.18em] text-clay-700">Our story</p>
            <p className="mt-4 max-w-3xl font-display text-3xl leading-tight text-forest-900">We started because healthy forests and healthy communities cannot be separated.</p>
            <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
              Founded in 2010, we work directly with the communities who farm the forest edge — because no fence outlasts a community that doesn&apos;t see the point of it. Today we operate across six counties in Kenya&apos;s Rift Valley and are a member of the Kenya Climate Change Working Group.
            </p>
            <p className="mt-3 max-w-2xl text-ink-soft leading-relaxed">
              Save Kenya Water Towers is an independent, registered NGO in Kenya. We are not affiliated with the former Kenya Water Towers Agency, a government body whose mandate expired and was dissolved in December 2024.
            </p>
            <Link href="/who-we-are" className="mt-6 inline-block text-sm text-forest-500 underline underline-offset-4">Read Our Story &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Voices + Partners */}
      <section className="mx-auto max-w-6xl px-5 py-16 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-clay-700">Voices from the ground</p>
          <blockquote className="mt-4 font-display text-3xl leading-tight text-forest-900">&ldquo;Before, we walked three hours for water. Now the spring near our village runs again.&rdquo;</blockquote>
          <p className="mt-5 text-sm text-ink-soft">&mdash; Community member, Elgeyo-Marakwet County</p>
          <div className="mt-8 relative aspect-video overflow-hidden">
            <Image
              src="/img/new/pexels-ian-panelo-31371429.jpg"
              alt="Community members"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-clay-700">Built on partnership</p>
          <h2 className="mt-3 font-display text-2xl text-forest-900">Restoration at scale requires cooperation across communities, government, science and finance.</h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            We work alongside the Food and Agriculture Organization of the United Nations, BMZ, AFR100,
            Kenya Forest Service, Kenya Forestry Research Institute, the University of Eldoret, the
            World Resources Institute and others &mdash; each contributing technical expertise, funding,
            policy support or community mobilisation to the landscapes we share.
          </p>
          <p className="mt-3 text-ink-soft leading-relaxed">
            Together, these partnerships have helped us reach six counties, support hundreds of
            households, and build the governance foundations that make restoration last.
          </p>
          <Link href="/get-involved#partners" className="mt-5 inline-block text-sm text-forest-500 underline underline-offset-4">
            Meet our partners &rarr;
          </Link>
        </div>
      </section>

      {/* How it works pathway */}
      <section className="border-t border-line bg-forest-900 text-mist-50">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-sm uppercase tracking-[0.18em] text-clay-600">How it works</p>
          <h2 className="mt-3 font-display text-3xl text-paper max-w-xl">From degraded land to living forest &mdash; a clear pathway.</h2>
          <div className="mt-10 grid gap-px bg-forest-700 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["Assess", "Map degraded areas, identify ecological zones and understand community land use and priorities."],
              ["Plan", "Develop participatory forest management plans and integrated landscape strategies with communities."],
              ["Restore", "Plant indigenous species, protect natural regeneration, rehabilitate riverbanks and soils."],
              ["Monitor", "Track tree survival, spring flow, household income and vegetation recovery over time."],
              ["Learn", "Publish results, refine methods and share knowledge with partners and communities."],
            ].map(([step, desc]) => (
              <div key={step} className="bg-forest-900 p-6">
                <p className="font-display text-xl text-clay-500">{step}</p>
                <p className="mt-3 text-sm text-forest-300 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest news */}
      <section className="border-t border-line bg-mist-100">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-clay-700">Latest news & updates</p>
              <h2 className="mt-3 font-display text-3xl text-forest-900">The work is moving.</h2>
            </div>
            <Link href="/news" className="text-sm text-forest-500 underline underline-offset-4">View All News &rarr;</Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {latestNews.map((news) => (
              <Link key={news.slug} href={`/news/${news.slug}`} className="border border-line bg-mist-50 p-6 hover:border-forest-700 transition-colors">
                <p className="text-xs text-ink-soft">{formatDate(news.publishedAt)}</p>
                <h3 className="mt-3 font-display text-xl text-forest-900">{news.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{news.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-900 text-mist-50">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-4xl">Restoring these landscapes takes all of us.</h2>
          <div className="mt-8 grid gap-px bg-forest-700 sm:grid-cols-3">
            {[
              ["/donate", "Donate", "Fund forest restoration and clean water access", "Donate &rarr;"],
              ["/get-involved/partner", "Partner With Us", "Bring your organisation into the work", "Become a Partner &rarr;"],
              ["/get-involved/volunteer", "Join Our Team", "Careers and volunteer opportunities", "View Careers &rarr;"],
            ].map(([href, title, body, action]) => (
              <Link key={href} href={href} className="bg-forest-900 p-6 hover:bg-forest-700 transition-colors">
                <p className="font-display text-2xl">{title}</p>
                <p className="mt-2 text-sm text-forest-300">{body}</p>
                <p className="mt-6 text-sm text-clay-600" dangerouslySetInnerHTML={{ __html: action }} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

