import Image from "next/image";
import { ProjectsFilter } from "@/components/projects-filter";
import { getProjects } from "@/lib/sanity/content";
import { sitePhotos } from "@/lib/data/site-photos";
import { PhotoCarousel } from "@/components/photo-carousel";
import { projectsGallery } from "@/lib/data/photo-galleries";

export const metadata = { title: "Projects" };

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <section className="relative bg-forest-900 text-mist-50 overflow-hidden">
        <Image
          src={sitePhotos.projectsHero}
          alt="Every forest, every spring, every farm-edge site"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-forest-900/60" />
        <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-12">
          <p className="text-sm text-forest-300">Project database</p>
          <h1 className="mt-2 font-display text-4xl text-mist-50 max-w-2xl text-balance">
            Every forest, every spring, every farm-edge site.
          </h1>
          <p className="mt-5 text-forest-300 max-w-2xl">
            Filter by county, programme, or status — or search a site by name.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 pt-10 pb-16">
        <div className="mt-8">
          <ProjectsFilter projects={projects} />
        </div>
      </section>
      <section className="border-t border-line bg-mist-100">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="font-display text-3xl text-forest-900">Restoration across the landscape</h2>
          <PhotoCarousel photos={projectsGallery} label="Project field photos" direction="left" />
        </div>
      </section>
    </>
  );
}
