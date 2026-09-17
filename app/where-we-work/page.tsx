import Image from "next/image";
import Link from "next/link";
import { counties } from "@/lib/data/counties";
import { getProjectsByCounty } from "@/lib/data/projects";
import { ProjectCard } from "@/components/project-card";
import { PhotoPlaceholder } from "@/components/photo-placeholder";

export const metadata = { title: "Where We Work" };

export default function WhereWeWorkPage() {
  return (
    <>
      <section className="relative bg-forest-900 text-mist-50 overflow-hidden">
        <Image
          src="/img/IMG_20260617_173557(1).jpg"
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
    </>
  );
}
