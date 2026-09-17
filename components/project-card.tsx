import Link from "next/link";
import { PhotoPlaceholder } from "./photo-placeholder";
import { counties } from "@/lib/data/counties";
import { formatNumber } from "@/lib/format";
import type { Project } from "@/lib/types";

const statusLabel: Record<Project["status"], string> = {
  active: "Active",
  completed: "Completed",
  planned: "Planned",
};

export function ProjectCard({ project }: { project: Project }) {
  const county = counties.find((c) => c.slug === project.countySlug);
  return (
    <Link href={`/projects/${project.slug}`} className="group block border border-line hover:border-forest-500 transition-colors">
      <PhotoPlaceholder src={project.image} caption={`${project.name}, ${county?.name ?? ""}`} tone={project.status === "planned" ? "mist" : "forest"} />
      <div className="p-5">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs text-forest-500">{county?.name}</p>
          <span className="text-xs text-ink-soft">{statusLabel[project.status]}</span>
        </div>
        <h3 className="mt-1 font-display text-xl text-forest-900 group-hover:text-clay-600 transition-colors">
          {project.name}
        </h3>
        <p className="mt-2 text-sm text-ink-soft line-clamp-3">{project.summary}</p>
        <p className="mt-3 text-xs text-ink-soft">
          {formatNumber(project.hectaresAchieved)} / {formatNumber(project.hectaresTarget)} hectares restored
        </p>
      </div>
    </Link>
  );
}

