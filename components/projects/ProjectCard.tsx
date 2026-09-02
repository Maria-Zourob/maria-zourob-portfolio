"use client";

import { useMediaModal } from "@/lib/MediaModalContext";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  onViewDetails,
  featured = false,
}: {
  project: Project;
  onViewDetails: (id: string) => void;
  featured?: boolean;
}) {
  const { open } = useMediaModal();
  const hasVideos = project.videos.length > 0;

  return (
    <article
      className={`group rounded-xl2 border border-ink/10 bg-white/70 transition-all duration-300 hover:border-pine-300 hover:-translate-y-1 hover:shadow-card flex flex-col ${
        featured ? "p-7 md:p-8" : "p-6"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="mono text-[10px] uppercase tracking-wider text-pine-600 px-2.5 py-1 rounded-full bg-pine-100">
          {project.category}
        </span>
        {featured && (
          <span className="mono text-[10px] uppercase tracking-wider text-amber">Featured</span>
        )}
      </div>

      <h3 className={`font-display font-semibold mt-4 ${featured ? "text-2xl" : "text-lg"}`}>
        {project.title}
      </h3>
      <p className={`mt-2 text-ink/65 leading-relaxed ${featured ? "text-[0.98rem]" : "text-sm"}`}>
        {project.shortDescription}
      </p>

      {project.technologies.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, featured ? 8 : 4).map((t) => (
            <span key={t} className="mono text-[11px] px-2 py-1 rounded-md bg-ink/[0.05] text-ink/60">
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto pt-6 flex items-center gap-4">
        <button
          type="button"
          onClick={() => onViewDetails(project.id)}
          className="text-sm font-medium text-ink hover:text-pine-600 transition-colors inline-flex items-center gap-1 group/link"
        >
          View Project
          <span className="transition-transform group-hover/link:translate-x-0.5">→</span>
        </button>
        {hasVideos && (
          <button
            type="button"
            onClick={() =>
              open(
                project.videos.map((v) => ({ type: "video" as const, title: v.title, src: v.src, poster: v.poster })),
                0,
                project.title
              )
            }
            className="text-sm font-medium text-pine-600 hover:text-pine-700 transition-colors inline-flex items-center gap-1.5"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M3 1.5L11 6.5L3 11.5V1.5Z" fill="currentColor" />
            </svg>
            Watch Demo
          </button>
        )}
      </div>
    </article>
  );
}
