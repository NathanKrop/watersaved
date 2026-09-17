import { notFound } from "next/navigation";
import Link from "next/link";
import { programmes, getProgrammeBySlug } from "@/lib/data/programmes";
import { getProjectsByProgramme } from "@/lib/data/projects";
import { stories } from "@/lib/data/content";
import { ProjectCard } from "@/components/project-card";
import { StoryCard } from "@/components/story-card";
import { CtaLink } from "@/components/cta-link";

export function generateStaticParams() {
  return programmes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const programme = getProgrammeBySlug(slug);
  return { title: programme?.name ?? "Programme" };
}

export default async function ProgrammeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const programme = getProgrammeBySlug(slug);
  if (!programme) notFound();

  const relatedProjects = getProjectsByProgramme(programme.slug);
  const relatedStories = stories.filter((s) => s.relatedProgrammeSlug === programme.slug);

  return (
    <>
      <section className="mx-auto max-w-4xl px-5 pt-16 pb-10">
        <Link href="/programmes" className="text-sm text-forest-500 underline underline-offset-4">
          ← All programmes
        </Link>
        <h1 className="mt-4 font-display text-4xl text-forest-900 text-balance">{programme.name}</h1>
        <p className="mt-5 text-lg text-ink-soft">{programme.summary}</p>
        <div className="mt-8 space-y-4 text-ink-soft">
          {programme.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <div className="mt-8">
          <CtaLink href="/donate">Donate toward {programme.shortName.toLowerCase()}</CtaLink>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="border-t border-line bg-mist-100">
          <div className="mx-auto max-w-6xl px-5 py-14">
            <h2 className="font-display text-2xl text-forest-900">Projects using this approach</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedStories.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="font-display text-2xl text-forest-900">Related stories</h2>
          <div className="mt-6 grid gap-10 sm:grid-cols-2">
            {relatedStories.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
