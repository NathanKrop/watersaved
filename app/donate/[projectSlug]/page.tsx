import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/lib/data/projects";
import { DonateWidget } from "@/components/donate-widget";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { formatKes } from "@/lib/format";

export function generateStaticParams() {
  return projects.map((p) => ({ projectSlug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ projectSlug: string }> }) {
  const { projectSlug } = await params;
  const project = getProjectBySlug(projectSlug);
  return { title: project ? `Donate to ${project.name}` : "Donate" };
}

export default async function ProjectDonatePage({ params }: { params: Promise<{ projectSlug: string }> }) {
  const { projectSlug } = await params;
  const project = getProjectBySlug(projectSlug);
  if (!project) notFound();

  const raisedPercent = Math.min(100, Math.round((project.donationRaisedKes / project.donationGoalKes) * 100));

  return (
    <section className="mx-auto max-w-6xl px-5 pt-16 pb-20 grid gap-12 lg:grid-cols-2 items-start">
      <div>
        <Link href={`/projects/${project.slug}`} className="text-sm text-forest-500 underline underline-offset-4">
          ← About {project.name}
        </Link>
        <p className="mt-4 text-sm text-forest-500">Donate to a specific site</p>
        <h1 className="mt-1 font-display text-4xl text-forest-900 max-w-lg text-balance">
          Support indigenous tree growing in {project.name}.
        </h1>
        <p className="mt-5 text-ink-soft max-w-lg">{project.summary}</p>

        <div className="mt-8">
          <PhotoPlaceholder
            src={project.image}
            alt={`${project.name} restoration work`}
            caption={project.name}
            aspect="wide"
          />
        </div>

        <div className="mt-6">
          <div className="flex justify-between text-sm text-ink-soft">
            <span>{formatKes(project.donationRaisedKes)} raised</span>
            <span>{raisedPercent}% of {formatKes(project.donationGoalKes)}</span>
          </div>
          <div className="mt-2 h-1.5 bg-mist-100">
            <div className="h-1.5 bg-clay-600" style={{ width: `${raisedPercent}%` }} />
          </div>
        </div>
      </div>

      <DonateWidget projectSlug={project.slug} projectName={project.name} />
    </section>
  );
}
