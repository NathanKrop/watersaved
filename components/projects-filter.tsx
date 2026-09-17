"use client";

import { useMemo, useState } from "react";
import { projects } from "@/lib/data/projects";
import { counties } from "@/lib/data/counties";
import { programmes } from "@/lib/data/programmes";
import { ProjectCard } from "@/components/project-card";
import type { ProjectStatus } from "@/lib/types";

const STATUS_OPTIONS: { value: ProjectStatus | "all"; label: string }[] = [
  { value: "all", label: "All statuses" },
  { value: "active", label: "Active" },
  { value: "planned", label: "Planned" },
  { value: "completed", label: "Completed" },
];

export function ProjectsFilter() {
  const [county, setCounty] = useState("all");
  const [programme, setProgramme] = useState("all");
  const [status, setStatus] = useState<ProjectStatus | "all">("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (county !== "all" && p.countySlug !== county) return false;
      if (programme !== "all" && !p.programmeSlugs.includes(programme as never)) return false;
      if (status !== "all" && p.status !== status) return false;
      if (query && !p.name.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
  }, [county, programme, status, query]);

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-4">
        <input
          type="search"
          placeholder="Search projects…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-line px-3 py-2 text-sm bg-paper"
          aria-label="Search projects"
        />
        <select
          value={county}
          onChange={(e) => setCounty(e.target.value)}
          className="border border-line px-3 py-2 text-sm bg-paper"
          aria-label="Filter by county"
        >
          <option value="all">All counties</option>
          {counties.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
        <select
          value={programme}
          onChange={(e) => setProgramme(e.target.value)}
          className="border border-line px-3 py-2 text-sm bg-paper"
          aria-label="Filter by programme"
        >
          <option value="all">All programmes</option>
          {programmes.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.shortName}
            </option>
          ))}
        </select>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as ProjectStatus | "all")}
          className="border border-line px-3 py-2 text-sm bg-paper"
          aria-label="Filter by status"
        >
          {STATUS_OPTIONS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <p className="mt-4 text-sm text-ink-soft">
        {filtered.length} project{filtered.length === 1 ? "" : "s"}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-ink-soft">No projects match those filters yet.</p>
      )}
    </div>
  );
}
