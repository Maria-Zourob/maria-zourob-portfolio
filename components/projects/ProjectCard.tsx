"use client";

import { useState } from "react";
import { useMediaModal } from "@/lib/MediaModalContext";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  onViewDetails: (id: string) => void;
  featured?: boolean;
};

export default function ProjectCard({ project, onViewDetails, featured = false }: Props) {
  const { open } = useMediaModal();
  const [imgFailed, setImgFailed] = useState(false);

  const hasVideos = project.videos.length > 0;
  // Cover image: first image in `images`, else the first video's poster (if any).
  const cover = project.images?.[0] ?? project.videos[0]?.poster;
  const showCover = !!cover && !imgFailed;

  const maxTech = featured ? 8 : 4;
  const btnBase =
    "inline-flex items-center gap-1.5 text-sm font-medium transition-colors";

  return (
    <article
      className="group h-full rounded-xl2 border border-ink/10 bg-white/70 overflow-hidden transition-all duration-300 hover:border-pine-300 hover:-translate-y-1 hover:shadow-card flex flex-col"
    >
      {/* Cover */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-pine-900">
        {showCover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={cover}
            alt={`${project.title} preview`}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-pine-900 to-ink text-paper/80">
            <span className="font-display text-4xl font-semibold tracking-tight">
              {project.title
                .split(/\s+/)
                .filter(Boolean)
                .slice(0, 2)
                .map((w) => w[0]?.toUpperCase())
                .join("")}
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-paper/50">
              {project.category}
            </span>
          </div>
        )}

        {/* play overlay on hover, only if there is a video */}
        {hasVideos && (
          <button
            type="button"
            aria-label={`Watch demo of ${project.title}`}
            onClick={() =>
              open(
                project.videos.map((v) => ({
                  type: "video" as const,
                  title: v.title,
                  src: v.src,
                  poster: v.poster,
                })),
                0,
                project.title
              )
            }
            className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/35 group-hover:opacity-100 focus-visible:opacity-100"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-paper text-lg text-pine-900 shadow-card">
              ▶
            </span>
          </button>
        )}
      </div>

      {/* Body */}
      <div className={`flex flex-1 flex-col ${featured ? "p-7 md:p-8" : "p-6"}`}>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-pine-50 px-2.5 py-0.5 font-mono text-xs text-pine-700">
            {project.category}
          </span>
          {project.featured && (
            <span className="font-mono text-xs text-amber-600">★ Featured</span>
          )}
        </div>

        <h3 className="mt-3 font-display text-xl font-semibold text-ink">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/70">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, maxTech).map((t) => (
            <span
              key={t}
              className="rounded-md border border-ink/10 bg-paper px-2 py-0.5 font-mono text-xs text-ink/70"
            >
              {t}
            </span>
          ))}
          {project.technologies.length > maxTech && (
            <span className="px-1 py-0.5 font-mono text-xs text-ink/50">
              +{project.technologies.length - maxTech}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-6">
          <button
            type="button"
            onClick={() => onViewDetails(project.id)}
            className={`${btnBase} text-pine-700 hover:text-pine-900`}
          >
            View Project →
          </button>

          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnBase} text-ink/70 hover:text-ink`}
            >
              ↗ Live Demo
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnBase} text-ink/70 hover:text-ink`}
            >
              {"</>"} GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
