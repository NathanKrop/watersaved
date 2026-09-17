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

const fieldNotes = [
  { src: "/img/IMG_0528.jpeg", title: "Growing the canopy", copy: "Indigenous seedlings raised close to the landscapes they will restore." },
  { src: "/img/IMG_0532.jpeg", title: "Protecting headwaters", copy: "Forest-edge action that keeps water moving downstream." },
  { src: "/img/IMG_0533.jpeg", title: "Holding the soil", copy: "Healthier farms mean cleaner rivers and reservoirs." },
  { src: "/img/IMG_0840.jpeg", title: "Planting together", copy: "Local people lead every restoration season." },
  { src: "/img/IMG_0893.jpeg", title: "Learning outdoors", copy: "Young people building a lasting relationship with nature." },
  { src: "/img/IMG_0901.jpeg", title: "Looking ahead", copy: "New catchments, new partnerships, the same shared purpose." },
  { src: "/img/MVIMG_20260603_113312.jpg", title: "Kesup Forest", copy: "A living escarpment above the Kerio Valley." },
  { src: "/img/MVIMG_20260603_130618.jpg", title: "Walking the line", copy: "Care and presence protect old-growth forest." },
  { src: "/img/MVIMG_20260603_133646.jpg", title: "Terraces take hold", copy: "Practical work that keeps fertile soil on the farm." },
  { src: "/img/MVIMG_20260603_130933.jpg", title: "From the field", copy: "Stories told by the people doing the work." },
  { src: "/img/IMG_20260617_173433.jpg", title: "Community first", copy: "Restoration works when it belongs to everyone." },
  { src: "/img/WhatsApp Image 2026-09-10 at 1.08.51 PM (2).jpeg", title: "Shared momentum", copy: "Every gathering begins with listening and learning." },
  { src: "/img/MVIMG_20260603_113331.jpg", title: "Rooted locally", copy: "Local action is the foundation of lasting change." },
  { src: "/img/MVIMG_20260603_113345.jpg", title: "Restoring balance", copy: "Healthy vegetation helps land and water recover together." },
  { src: "/img/IMG_20260617_173430(1).jpg", title: "Nursery care", copy: "The next forest begins with patient, skilled work." },
  { src: "/img/IMG_20260617_173723(1).jpg", title: "Hands in the soil", copy: "Practical action connects people to place." },
  { src: "/img/IMG_20260617_173732(1).jpg", title: "Working together", copy: "Shared knowledge turns plans into progress." },
  { src: "/img/IMG_20260617_173557.jpg", title: "A connected watershed", copy: "What happens on the ridge matters far downstream." },
  { src: "/img/IMG_20260617_173639.jpg", title: "A day of action", copy: "Small, steady contributions build a larger restoration movement." },
  { src: "/img/IMG_20260617_173643.jpg", title: "Nature-positive futures", copy: "Restoration supports both ecological health and daily life." },
  { src: "/img/MVIMG_20260603_130623.jpg", title: "Evidence in action", copy: "Field observations guide where care is needed most." },
  { src: "/img/MVIMG_20260603_130627.jpg", title: "Stories worth sharing", copy: "Progress is best understood close to the landscape." },
  { src: "/img/MVIMG_20260617_104556.jpg", title: "Forest stewards", copy: "Protection depends on people who show up, season after season." },
  { src: "/img/PHOTO-2026-07-14-14-03-45.jpg", title: "Leadership in practice", copy: "Guiding restoration with purpose and accountability." },
  { src: "/img/PHOTO-2026-07-14-14-03-49.jpg", title: "Local expertise", copy: "Knowledge, coordination and care move the work forward." },
  { src: "/img/WhatsApp Image 2026-09-10 at 1.08.50 PM.jpeg", title: "On the ground", copy: "Conversations in the field shape better decisions." },
  { src: "/img/WhatsApp Image 2026-09-10 at 1.08.50 PM (1).jpeg", title: "Shared responsibility", copy: "Water security is a collective commitment." },
  { src: "/img/WhatsApp Image 2026-09-10 at 1.08.51 PM.jpeg", title: "Looking after place", copy: "Care for a catchment begins with care for each other." },
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

      <section className="border-t border-line bg-forest-900 text-mist-50">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.18em] text-clay-600">From the field</p>
            <h2 className="mt-3 font-display text-3xl text-paper sm:text-4xl">Every image carries a piece of the restoration story.</h2>
            <p className="mt-4 text-forest-300">Nurseries, farms, forest patrols, and community days: this is what collective care for a water tower looks like.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {fieldNotes.map((note) => (
              <figure key={note.src} className="group relative aspect-[4/3] overflow-hidden bg-forest-700">
                <Image src={note.src} alt={note.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/20 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-2xl text-paper">{note.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-mist-50">{note.copy}</p>
                </figcaption>
              </figure>
            ))}
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
          <p className="mt-5 text-sm text-ink-soft">- Community member, Elgeyo-Marakwet County</p>
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
          <p className="text-sm uppercase tracking-[0.18em] text-clay-700">Our partners</p>
          <p className="mt-4 max-w-xl font-display text-2xl text-forest-900">Working alongside government, communities, and partners to protect Kenya&apos;s water towers.</p>
          <div className="mt-8 grid grid-cols-2 gap-3 text-sm font-medium text-forest-700 sm:grid-cols-4">
            {["BMZ", "FAO", "AFR100", "Kenya Forest Service"].map((partner) => (
              <div key={partner} className="border border-line bg-mist-50 px-4 py-5">{partner}</div>
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
