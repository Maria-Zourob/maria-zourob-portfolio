"use client";

import { useMemo, useState } from "react";
import { allProjects, featuredProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import ProjectDetailsModal from "./ProjectDetailsModal";
import Reveal from "@/components/ui/Reveal";

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [detailsId, setDetailsId] = useState<string | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? allProjects : allProjects.filter((p) => p.category === filter)),
    [filter]
  );

  const selectedProject = allProjects.find((p) => p.id === detailsId) ?? null;

  return (
    <section id="projects" className="section-pad border-t border-ink/8">
      <div className="container-content">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-display font-semibold">Featured Projects</h2>
          <p className="mt-3 text-ink/60">
            The projects that best represent how I build — full stack, from schema to UI.
          </p>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <ProjectCard project={p} onViewDetails={setDetailsId} featured />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-display font-semibold">All Projects</h3>
            <p className="mt-2 text-ink/60">Everything else I've built and shipped.</p>
          </div>
          <ProjectFilter active={filter} onChange={setFilter} />
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <div key={p.id} className="animate-fade-up" style={{ animationDelay: `${(i % 6) * 60}ms` }}>
              <ProjectCard project={p} onViewDetails={setDetailsId} />
            </div>
          ))}
        </div>
      </div>

      <ProjectDetailsModal project={selectedProject} onClose={() => setDetailsId(null)} />
    </section>
  );
}
