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
    body: "Rebuilding indigenous forest cover to stabilize water towers, prevent landslides, and restore natural water cycles.",
    href: "/programmes/agroforestry-reforestation",
  },
  {
    number: "02",
    title: "Policy Advocacy & Development",
    body: "Working with government and stakeholders to shape land-use and conservation policy that protects these landscapes for the long term.",
    href: "/programmes",
  },
  {
    number: "03",
    title: "Social Inclusion",
    body: "Ensuring the communities most affected by land degradation, often the most marginalized, have a voice in restoration decisions.",
    href: "/programmes/gender-intergenerational-equity",
  },
  {
    number: "04",
    title: "Livelihood Improvement",
    body: "Helping communities build sustainable incomes that do not come at the forest's expense.",
    href: "/programmes/regenerative-agriculture",
  },
  {
    number: "05",
    title: "Food Security",
    body: "Strengthening food systems that are resilient to the droughts, landslides, and water shortages degraded landscapes cause.",
    href: "/programmes/regenerative-agriculture",
  },
  {
    number: "06",
    title: "Community Development",
    body: "Building local capacity so restoration is led by local communities, and lasts beyond our presence.",
    href: "/programmes/education-awareness",
  },
];

export default function Home() {
  const latestNews = newsPosts.slice(0, 3);

  return (
    <>
      <section className="relative bg-forest-900 text-mist-50 overflow-hidden">
        <Image
          src="/img/IMG_0526.jpeg"
          alt="Forest-covered escarpment above the Kerio Valley"
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
            incomes across the North Rift.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CtaLink href="/donate">Donate</CtaLink>
            <CtaLink href="/impact" variant="secondary" className="border-forest-300 text-mist-50 hover:bg-mist-50 hover:text-forest-900">
              See Our Impact
            </CtaLink>
          </div>
          <p className="mt-8 text-xs uppercase tracking-[0.14em] text-mist-50">
            Community-led restoration <span aria-hidden="true">•</span> Indigenous ecosystems <span aria-hidden="true">•</span> Measurable impact
          </p>
        </div>
        <ContourLines animate className="absolute -bottom-1 left-0 w-full h-24 text-forest-500" />
      </section>

      {/* Stylish 3-image feature strip */}
      <section className="border-t border-line bg-forest-900">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-4 lg:grid-cols-[2fr_1fr_1fr] lg:grid-rows-2">
            {/* Large feature image */}
            <div className="group relative lg:row-span-2 overflow-hidden">
              <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full min-h-[320px]">
                <Image
                  src="/img/MVIMG_20260603_113312.jpg"
                  alt="Kesup Forest escarpment"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-xs uppercase tracking-widest text-clay-500">Kesup Forest</p>
                  <p className="mt-1 font-display text-2xl text-paper">A living escarpment above the Kerio Valley</p>
                </div>
              </div>
            </div>
            {/* Top-right */}
            <div className="group relative overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/img/IMG_20260617_173433.jpg"
                  alt="Community planting day"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent" />
                <p className="absolute bottom-0 left-0 p-4 font-display text-lg text-paper">Community first</p>
              </div>
            </div>
            {/* Middle-right */}
            <div className="group relative overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/img/MVIMG_20260603_130933.jpg"
                  alt="From the field"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent" />
                <p className="absolute bottom-0 left-0 p-4 font-display text-lg text-paper">From the field</p>
              </div>
            </div>
            {/* Bottom-right spanning 2 cols */}
            <div className="group relative overflow-hidden lg:col-span-2">
              <div className="relative aspect-video">
                <Image
                  src="/img/WhatsApp Image 2026-09-10 at 1.08.51 PM (2).jpeg"
                  alt="Shared momentum"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="font-display text-lg text-paper">Shared momentum</p>
                  <p className="mt-0.5 text-sm text-forest-300">Every gathering begins with listening and learning.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-forest-300">Nurseries, farms, forest patrols, and community days.</p>
            <Link href="/where-we-work" className="text-sm text-clay-500 underline underline-offset-4">See where we work &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.18em] text-clay-700">The crisis</p>
          <p className="mt-4 font-display text-3xl leading-tight text-forest-900 sm:text-4xl">
            Kenya&apos;s water towers are natural infrastructure: they store, filter and release water, anchor soils, and support biodiversity and local economies.
          </p>
          <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
            When forests and riverbanks are degraded, communities face harder water access, erosion, flooding and the loss of productive land. The response must restore the whole landscape — not simply plant trees.
          </p>
        </div>
        <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["75%", "approximate share of Kenya’s water resources associated with the five major water towers"],
            ["68%", "of Kenya’s population had at least basic drinking-water service in 2022"],
            ["56%", "of the rural population had at least basic drinking-water service in 2022"],
            ["27,000 ha", "restoration and improved-management target of the wider FAO-led AFR100 programme by 2027"],
          ].map(([value, label]) => (
            <div key={label} className="bg-mist-50 p-6">
              <p className="font-display text-5xl text-forest-900">{value}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-mist-100">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.18em] text-clay-700">Our response</p>
            <h2 className="mt-3 font-display text-3xl text-forest-900">Restoration works when the whole system is healthy.</h2>
            <p className="mt-3 text-ink-soft leading-relaxed">
              Restoring a water tower isn&apos;t just about growing trees. It means healthy ecosystems, fair policy,
              included communities, stronger livelihoods, reliable food, and resilient neighbourhoods - together.
            </p>
            <p className="mt-3 text-ink-soft">Here&apos;s how we work:</p>
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

      <section className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <PhotoPlaceholder
            src="/img/IMG_0833.jpeg"
            alt="Indigenous seedlings growing in a community nursery"
            caption="Community nursery seedlings supporting restoration along the Spencer Line"
            aspect="wide"
          />
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-clay-700">Featured project</p>
            <h2 className="mt-3 font-display text-3xl text-forest-900">Community-Led Restoration and Improved Landscape Management Along the Spencer Line, Kerio Valley, Elgeyo-Marakwet Escarpment</h2>
            <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
              <div><dt className="font-medium text-forest-900">Location</dt><dd className="mt-1 text-ink-soft">Elgeyo-Marakwet County</dd></div>
              <div><dt className="font-medium text-forest-900">Partners</dt><dd className="mt-1 text-ink-soft">BMZ, FAO, AFR100</dd></div>
            </dl>
            <p className="mt-6 text-ink-soft leading-relaxed">
              The Spencer Line marks the historic boundary between forest and farmland along the Elgeyo-Marakwet escarpment, overlooking the Kerio Valley. Decades of encroachment have pushed this boundary upward, degrading indigenous forest cover and weakening the water catchment that communities in the valley below depend on.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Working with FAO and its partners, we are restoring this landscape through three interlinked components: stronger forest governance, an integrated management plan, and community-led restoration through agroforestry and assisted natural regeneration.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            ["01", "Review and update the Kipkabus PFMP & FMA", "Establishing the governance foundation for equitable and sustainable forest management."],
            ["02", "Develop the Spencer Line Management Plan", "Coordinating land use, boundary protection, and resource management across the wider landscape."],
            ["03", "Restore through agroforestry and ANR", "Supporting farm forest producer organisations with indigenous trees, coffee, and natural regeneration."],
          ].map(([number, title, body]) => (
            <div key={number} className="border-t-2 border-forest-700 pt-4">
              <p className="text-sm text-clay-700">{number}</p>
              <h3 className="mt-3 font-display text-xl text-forest-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
            </div>
          ))}
        </div>
        <Link href="/projects/spencer-line-restoration" className="mt-8 inline-block text-sm text-forest-500 underline underline-offset-4">Read the full story &rarr;</Link>
      </section>

      <section className="border-t border-line bg-clay-100">
        <div className="relative overflow-hidden">
          <Image
            src="/img/MVIMG_20260616_163701.jpg"
            alt="Forest restoration work in the North Rift"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-20"
          />
          <div className="relative mx-auto max-w-6xl px-5 py-16">
            <p className="text-sm uppercase tracking-[0.18em] text-clay-700">Our story</p>
          <p className="mt-4 max-w-3xl font-display text-3xl leading-tight text-forest-900">We started because healthy forests and healthy communities cannot be separated.</p>
          <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">Today we work across the North Rift region, restoring landscapes and rebuilding the systems that let communities and nature thrive together.</p>
            <Link href="/who-we-are" className="mt-6 inline-block text-sm text-forest-500 underline underline-offset-4">Read Our Story &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-clay-700">Voices from the ground</p>
          <blockquote className="mt-4 font-display text-3xl leading-tight text-forest-900">&ldquo;Before, we walked three hours for water. Now the spring near our village runs again.&rdquo;</blockquote>
          <p className="mt-5 text-sm text-ink-soft">&mdash; Community member, Elgeyo-Marakwet County</p>
          <div className="mt-8 relative aspect-video overflow-hidden">
            <Image
              src="/img/WhatsApp Image 2026-09-10 at 1.08.51 PM (1).jpeg"
              alt="Community members at a spring"
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

      <section className="border-t border-line bg-forest-900 text-mist-50">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-sm uppercase tracking-[0.18em] text-clay-600">How it works</p>
          <h2 className="mt-3 font-display text-3xl text-paper max-w-xl">From degraded land to living forest &mdash; a clear pathway.</h2>
          <div className="mt-10 grid gap-px bg-forest-700 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["Assess", "Map degraded hotspots, identify ecological zones and understand community land use."],
              ["Plan", "Develop participatory forest management plans and integrated landscape management strategies."],
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

      <section className="bg-forest-900 text-mist-50">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-4xl">Restoring these landscapes takes all of us.</h2>
          <div className="mt-8 grid gap-px bg-forest-700 sm:grid-cols-3">
            {[
              ["/donate", "Donate", "Fund forest restoration and clean water access", "Donate &rarr;"],
              ["/get-involved/partner", "Partner With Us", "Bring your organization into the work", "Become a Partner &rarr;"],
              ["/get-involved/volunteer", "Join Our Team", "Careers and volunteer opportunities", "View Careers &rarr;"],
            ].map(([href, title, body, action]) => (
              <Link key={href} href={href} className="bg-forest-900 p-6 hover:bg-forest-700 transition-colors">
                <p className="font-display text-2xl">{title}</p>
                <p className="mt-2 text-sm text-forest-300">{body}</p>
                <p className="mt-6 text-sm text-clay-600">{action}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
