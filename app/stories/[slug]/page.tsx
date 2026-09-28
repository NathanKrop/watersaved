import { notFound } from "next/navigation";
import Link from "next/link";
import { stories } from "@/lib/data/stories";
import { getProjectBySlug } from "@/lib/data/projects";
import { getProgrammeBySlug } from "@/lib/data/programmes";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { CtaLink } from "@/components/cta-link";
import { formatDate } from "@/lib/format";

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);
  return { title: story?.title ?? "Story" };
}

export default async function StoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);
  if (!story) notFound();

  const relatedProject = story.relatedProjectSlug ? getProjectBySlug(story.relatedProjectSlug) : undefined;
  const relatedProgramme = story.relatedProgrammeSlug ? getProgrammeBySlug(story.relatedProgrammeSlug) : undefined;

  return (
    <article className="mx-auto max-w-3xl px-5 pt-16 pb-20">
      <Link href="/stories" className="text-sm text-forest-500 underline underline-offset-4">
        ← All stories
      </Link>
      <p className="mt-6 text-sm text-ink-soft">
        {story.publishedAt ? formatDate(story.publishedAt) : "Date not listed"} · {story.author}
      </p>
      <h1 className="mt-2 font-display text-4xl text-forest-900 text-balance">{story.title}</h1>
      <p className="mt-4 text-lg text-ink-soft">{story.dek}</p>

      <div className="mt-8">
        <PhotoPlaceholder
          src={story.image}
          alt={story.title}
          caption={story.title}
          aspect="wide"
        />
      </div>

      {story.images && story.images.length > 1 && (
        <div className="mt-5 grid grid-cols-2 gap-4">
          {story.images.slice(1).map((image) => (
            <PhotoPlaceholder key={image} src={image} alt={story.title} caption={story.title} aspect="video" />
          ))}
        </div>
      )}

      <div className="mt-10 space-y-5 text-lg leading-relaxed text-ink max-w-[65ch]">
        {story.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {(relatedProject || relatedProgramme) && (
        <div className="mt-12 border-t border-line pt-8 flex flex-wrap gap-4">
          {relatedProject && (
            <CtaLink href={`/donate/${relatedProject.slug}`}>Donate to {relatedProject.name}</CtaLink>
          )}
          {relatedProgramme && (
            <CtaLink href={`/programmes/${relatedProgramme.slug}`} variant="secondary">
              More on {relatedProgramme.shortName}
            </CtaLink>
          )}
        </div>
      )}
    </article>
  );
}
