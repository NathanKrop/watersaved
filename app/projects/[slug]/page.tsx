import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/lib/data/projects";
import { counties } from "@/lib/data/counties";
import { programmes } from "@/lib/data/programmes";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { DonateWidget } from "@/components/donate-widget";
import { formatNumber, formatKes, formatDate } from "@/lib/format";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return { title: project?.name ?? "Project" };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const county = counties.find((c) => c.slug === project.countySlug);
  const projectProgrammes = programmes.filter((p) => project.programmeSlugs.includes(p.slug));
  const raisedPercent = Math.min(
    100,
    Math.round((project.donationRaisedKes / project.donationGoalKes) * 100)
  );

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-6">
        <Link href="/projects" className="text-sm text-forest-500 underline underline-offset-4">
          ← All projects
        </Link>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <p className="text-sm text-forest-500">
            {county?.name} · {project.status === "active" ? "Active" : project.status === "planned" ? "Planned" : "Completed"}
          </p>
        </div>
        <h1 className="mt-2 font-display text-4xl text-forest-900 max-w-3xl text-balance">{project.name}</h1>
        <p className="mt-4 text-lg text-ink-soft max-w-2xl">{project.summary}</p>
      </section>

      <div className="mx-auto max-w-6xl px-5">
        <PhotoPlaceholder
          src={project.image}
          alt={`${project.name} restoration work in ${county?.name ?? "Kenya"}`}
          caption={`${project.name}, ${county?.name}`}
          aspect="wide"
        />
      </div>

      <section className="mx-auto max-w-6xl px-5 py-14 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="space-y-4 text-ink-soft">
            {project.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-line pt-8">
            <div>
              <p className="font-display text-2xl text-forest-900">
                {formatNumber(project.hectaresAchieved)}
              </p>
              <p className="text-xs text-ink-soft">of {formatNumber(project.hectaresTarget)} ha restored</p>
            </div>
            <div>
              <p className="font-display text-2xl text-forest-900">{formatNumber(project.treesPlanted)}</p>
              <p className="text-xs text-ink-soft">trees planted</p>
            </div>
            <div>
              <p className="font-display text-2xl text-forest-900">{formatNumber(project.householdsEngaged)}</p>
              <p className="text-xs text-ink-soft">households engaged</p>
            </div>
            <div>
              <p className="font-display text-2xl text-forest-900">{formatDate(project.startDate)}</p>
              <p className="text-xs text-ink-soft">work began</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {projectProgrammes.map((p) => (
              <Link
                key={p.slug}
                href={`/programmes/${p.slug}`}
                className="text-xs px-3 py-1 border border-line text-ink-soft hover:border-forest-700 hover:text-forest-900"
              >
                {p.shortName}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6">
            <div className="flex justify-between text-sm text-ink-soft">
              <span>{formatKes(project.donationRaisedKes)} raised</span>
              <span>{raisedPercent}%</span>
            </div>
            <div className="mt-2 h-1.5 bg-mist-100">
              <div className="h-1.5 bg-clay-600" style={{ width: `${raisedPercent}%` }} />
            </div>
            <p className="mt-1 text-xs text-ink-soft">Goal: {formatKes(project.donationGoalKes)}</p>
          </div>
          <DonateWidget projectSlug={project.slug} projectName={project.name} />
        </div>
      </section>
    </>
  );
}
