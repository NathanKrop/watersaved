import Image from "next/image";
import Link from "next/link";
import { counties } from "@/lib/data/counties";
import { getProjectsByCounty } from "@/lib/data/projects";
import { ProjectCard } from "@/components/project-card";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { primaryLocation } from "@/lib/data/location";
import { marakwetPhotos } from "@/lib/data/marakwet-photos";
import { newPhotos } from "@/lib/data/new-photos";

export const metadata = {
  title: `${primaryLocation.name} and connected landscapes`,
  description: `${primaryLocation.description} See our connected county projects and field work.`,
};

const fieldNotes = [
  { src: marakwetPhotos.community, title: "In the field", alt: "Community members gathered beside a forest planting area", copy: "Restoration work on the ground, season after season." },
  { src: marakwetPhotos.nursery, title: "Growing the canopy", alt: "Young seedlings growing in planting bags", copy: "Indigenous seedlings raised close to the landscapes they will restore." },
  { src: marakwetPhotos.landscape, title: "Walking the line", alt: "Green highland vegetation and trees", copy: "Care and presence protect the living landscape." },
  { src: marakwetPhotos.gathering, title: "Community first", alt: "A community gathering in a highland restoration landscape", copy: "Restoration works when it belongs to everyone." },
  { src: marakwetPhotos.restoration, title: "Restoration takes hold", alt: "Restoration planting on red highland soil", copy: "Practical work that keeps fertile soil and vegetation on the farm." },
  { src: marakwetPhotos.species, title: "Learning outdoors", alt: "A local plant species documented in the field", copy: "Local knowledge guides the species that return to the landscape." },
  { src: marakwetPhotos.trees, title: "Rooted locally", alt: "Young trees growing in a local landscape", copy: "Local action is the foundation of lasting change." },
  { src: marakwetPhotos.orchard, title: "Nature-positive futures", alt: "Fruit trees growing on a cultivated highland plot", copy: "Restoration supports both ecological health and daily life." },
  { src: marakwetPhotos.fieldwork, title: "Leadership in practice", alt: "Fieldwork taking place among local vegetation", copy: "Guiding restoration with purpose and accountability." },
  { src: marakwetPhotos.communityWork, title: "Shared momentum", alt: "People working together in a restoration setting", copy: "Every gathering begins with listening and learning." },
  { src: marakwetPhotos.mountain, title: "Looking ahead", alt: "Highland mountain landscape framed by trees", copy: "New catchments, new partnerships, the same shared purpose." },
  { src: marakwetPhotos.seedlings, title: "Forest stewards", alt: "Seedlings and vegetation ready for restoration work", copy: "Protection depends on people who show up, season after season." },
];

export default function WhereWeWorkPage() {
  return (
    <>
      <section className="relative bg-forest-900 text-mist-50 overflow-hidden">
        <Image
          src={marakwetPhotos.highlands}
          alt="Forest and escarpment landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-forest-900/60" />
        <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16">
          <p className="text-sm text-forest-300">Where we work</p>
          <h1 className="mt-2 font-display text-4xl text-mist-50 max-w-2xl text-balance">
            Elgeyo-Marakwet first. Connected landscapes beyond.
          </h1>
          <p className="mt-5 text-forest-300 max-w-2xl">
            Our home landscape runs from Iten and the Cherangani escarpment down toward the Kerio Valley.
            From there, our work follows the water into connected counties and communities.
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
          src={marakwetPhotos.fieldView}
          alt="A Marakwet highland field landscape"
          caption="A Marakwet highland field landscape"
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
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {fieldNotes.map((note) => (
              <figure key={note.src} className="group relative aspect-[4/3] overflow-hidden bg-forest-700">
                <Image
                  src={note.src}
                  alt={note.alt}
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
          <div className="mt-12 border-t border-forest-700/60 pt-10">
            <p className="text-sm uppercase tracking-[0.18em] text-clay-600">Visual archive</p>
            <h3 className="mt-3 font-display text-2xl text-paper">More ways to see the work.</h3>
            <div className="mt-6 grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              {newPhotos.map(([src, alt]) => (
                <figure key={src} className="relative aspect-[4/3] overflow-hidden rounded-[1.1rem] bg-forest-700">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

