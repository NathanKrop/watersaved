import Image from "next/image";
import Link from "next/link";
import { counties } from "@/lib/data/counties";
import { getProjectsByCounty } from "@/lib/data/projects";
import { ProjectCard } from "@/components/project-card";
import { PhotoPlaceholder } from "@/components/photo-placeholder";

export const metadata = { title: "Where We Work" };

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
  { src: "/img/whatsapp-5.jpeg", title: "Shared momentum", copy: "Every gathering begins with listening and learning." },
  { src: "/img/MVIMG_20260603_113331.jpg", title: "Rooted locally", copy: "Local action is the foundation of lasting change." },
  { src: "/img/MVIMG_20260603_113345.jpg", title: "Restoring balance", copy: "Healthy vegetation helps land and water recover together." },
  { src: "/img/IMG_20260617_173430b.jpg", title: "Nursery care", copy: "The next forest begins with patient, skilled work." },
  { src: "/img/IMG_20260617_173723b.jpg", title: "Hands in the soil", copy: "Practical action connects people to place." },
  { src: "/img/IMG_20260617_173732b.jpg", title: "Working together", copy: "Shared knowledge turns plans into progress." },
  { src: "/img/IMG_20260617_173639.jpg", title: "A day of action", copy: "Small, steady contributions build a larger restoration movement." },
  { src: "/img/IMG_20260617_173643.jpg", title: "Nature-positive futures", copy: "Restoration supports both ecological health and daily life." },
  { src: "/img/MVIMG_20260603_130623.jpg", title: "Evidence in action", copy: "Field observations guide where care is needed most." },
  { src: "/img/MVIMG_20260603_130627.jpg", title: "Stories worth sharing", copy: "Progress is best understood close to the landscape." },
  { src: "/img/MVIMG_20260617_104556.jpg", title: "Forest stewards", copy: "Protection depends on people who show up, season after season." },
  { src: "/img/PHOTO-2026-07-14-14-03-45.jpg", title: "Leadership in practice", copy: "Guiding restoration with purpose and accountability." },
  { src: "/img/PHOTO-2026-07-14-14-03-49.jpg", title: "Local expertise", copy: "Knowledge, coordination and care move the work forward." },
  { src: "/img/whatsapp-1.jpeg", title: "On the ground", copy: "Conversations in the field shape better decisions." },
  { src: "/img/whatsapp-2.jpeg", title: "Shared responsibility", copy: "Water security is a collective commitment." },
  { src: "/img/whatsapp-3.jpeg", title: "Looking after place", copy: "Care for a catchment begins with care for each other." },
];

export default function WhereWeWorkPage() {
  return (
    <>
      <section className="relative bg-forest-900 text-mist-50 overflow-hidden">
        <Image
          src="/img/new/pexels-maurizio-catalucci-1869702690-28664804.jpg"
          alt="Six counties, one connected watershed"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-forest-900/60" />
        <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16">
          <p className="text-sm text-forest-300">Where we work</p>
          <h1 className="mt-2 font-display text-4xl text-mist-50 max-w-2xl text-balance">
            Six counties, one connected watershed.
          </h1>
          <p className="mt-5 text-forest-300 max-w-2xl">
            Every project below sits somewhere on the Cherangani, Mt Elgon or Mau-adjacent water
            towers. Jump to a county to see what&apos;s happening there.
          </p>
          <nav className="mt-6 flex flex-wrap gap-2" aria-label="Jump to county">
            {counties.map((c) => (
              <a
                key={c.slug}
                href={`#${c.slug}`}
                className="px-3 py-1.5 text-sm border border-forest-500 text-forest-300 hover:border-mist-50 hover:text-mist-50"
              >
                {c.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5">
        <PhotoPlaceholder
          src="/img/IMG_20260617_173557.jpg"
          alt="The Cherangani escarpment, viewed from Iten"
          caption="The Cherangani escarpment, viewed from Iten"
          tone="mist"
          aspect="wide"
        />
      </div>

      {counties.map((county, i) => {
        const countyProjects = getProjectsByCounty(county.slug);
        return (
          <section
            key={county.slug}
            id={county.slug}
            className={`scroll-mt-20 border-t border-line ${i % 2 === 1 ? "bg-mist-100" : ""}`}
          >
            <div className="mx-auto max-w-6xl px-5 py-14">
              <div className="flex flex-wrap items-baseline gap-3 justify-between">
                <h2 className="font-display text-3xl text-forest-900">{county.name}</h2>
                <span className="text-xs text-forest-500">{county.stat}</span>
              </div>
              <p className="mt-3 max-w-2xl text-ink-soft">{county.summary}</p>

              {countyProjects.length > 0 ? (
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {countyProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              ) : (
                <p className="mt-6 text-sm text-ink-soft">
                  No active project pages yet for this county —{" "}
                  <Link href="/contact" className="underline underline-offset-2">
                    get in touch
                  </Link>{" "}
                  if you work here and want to partner with us.
                </p>
              )}
            </div>
          </section>
        );
      })}

      <section className="border-t border-line bg-forest-900">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.18em] text-clay-600">From the field</p>
            <h2 className="mt-3 font-display text-3xl text-paper">Every image carries a piece of the restoration story.</h2>
            <p className="mt-4 text-forest-300">Nurseries, farms, forest patrols, and community days: this is what collective care for a water tower looks like.</p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {fieldNotes.map((note) => (
              <figure key={note.src} className="group relative aspect-[4/3] overflow-hidden bg-forest-700">
                <Image
                  src={note.src}
                  alt={note.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-display text-lg text-paper leading-tight">{note.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-forest-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{note.copy}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

