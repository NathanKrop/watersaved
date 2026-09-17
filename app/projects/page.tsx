import Image from "next/image";
import { ProjectsFilter } from "@/components/projects-filter";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <section className="relative bg-forest-900 text-mist-50 overflow-hidden">
        <Image
          src="/img/WhatsApp Image 2026-09-10 at 1.08.51 PM.jpeg"
          alt="Every forest, every spring, every farm-edge site"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-forest-900/60" />
        <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16">
          <p className="text-sm text-forest-300">Project database</p>
          <h1 className="mt-2 font-display text-4xl text-mist-50 max-w-2xl text-balance">
            Every forest, every spring, every farm-edge site.
          </h1>
          <p className="mt-5 text-forest-300 max-w-2xl">
            Filter by county, programme, or status — or search a site by name.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 pt-10 pb-20">
        <p className="mt-1 text-xs text-ink-soft">
          This filter runs over the site&apos;s project data client-side; wire it to
          <code className="mx-1">GET /api/projects</code> once the backend is live for full
          pagination and search.
        </p>
        <div className="mt-8">
          <ProjectsFilter />
        </div>
      </section>
    </>
  );
}
