"use client";

import { useEffect } from "react";
import { useMediaModal } from "@/lib/MediaModalContext";
import type { Project } from "@/data/projects";

export default function ProjectDetailsModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const { open } = useMediaModal();

  useEffect(() => {
    if (!project) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  const blocks: { label: string; body?: string }[] = [
    { label: "Overview", body: project.overview },
    { label: "Problem / Purpose", body: project.problem },
    { label: "Solution", body: project.solution },
    { label: "My Contribution", body: project.contribution },
  ];

  return (
    <div
      className="fixed inset-0 z-[1060] flex items-start md:items-center justify-center p-0 md:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-details-title"
    >
      <div
        className="fixed inset-0 bg-ink/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative bg-paper w-full md:max-w-2xl md:rounded-xl2 shadow-lift min-h-screen md:min-h-0 md:my-10">
        <div className="sticky top-0 bg-paper/95 backdrop-blur border-b border-ink/10 flex items-start justify-between gap-4 px-6 md:px-8 py-5 z-10">
          <div>
            <span className="mono text-[10px] uppercase tracking-wider text-pine-600 px-2.5 py-1 rounded-full bg-pine-100">
              {project.category}
            </span>
            <h2 id="project-details-title" className="font-display text-2xl font-semibold mt-3">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="h-9 w-9 shrink-0 rounded-full bg-ink/[0.06] hover:bg-ink/10 flex items-center justify-center transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="px-6 md:px-8 py-8 space-y-8">
          {blocks
            .filter((b) => b.body)
            .map((b) => (
              <div key={b.label}>
                <h3 className="mono text-xs uppercase tracking-wider text-ink/45 mb-2">{b.label}</h3>
                <p className="text-ink/75 leading-relaxed">{b.body}</p>
              </div>
            ))}

          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="mono text-xs uppercase tracking-wider text-ink/45 mb-3">Features</h3>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {project.features.map((f, i) => (
                  <li key={i} className="text-sm text-ink/75 flex gap-2">
                    <span className="text-pine-500 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.technologies.length > 0 && (
            <div>
              <h3 className="mono text-xs uppercase tracking-wider text-ink/45 mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="mono text-xs px-2.5 py-1.5 rounded-md bg-ink/[0.05] text-ink/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-3 pt-2">
            {project.videos.length > 0 && (
              <button
                type="button"
                onClick={() =>
                  open(
                    project.videos.map((v) => ({ type: "video" as const, title: v.title, src: v.src, poster: v.poster })),
                    0,
                    project.title
                  )
                }
                className="inline-flex items-center gap-2 rounded-full bg-ink text-paper text-sm px-5 py-2.5 hover:bg-pine-600 transition-colors"
              >
                Watch Demo
              </button>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 text-sm px-5 py-2.5 hover:border-ink/40 transition-colors"
              >
                GitHub
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 text-sm px-5 py-2.5 hover:border-ink/40 transition-colors"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
