"use client";

import { useState } from "react";
import { uiuxProjects } from "@/data/uiux";
import { useMediaModal } from "@/lib/MediaModalContext";
import Reveal from "@/components/ui/Reveal";

function Cover({ id, title, onPlay }: { id: string; title: string; onPlay: () => void }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-pine-900">
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/images/uiux/${id}/cover.jpg`}
          alt={`${title} preview`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-pine-900 to-ink text-paper/80">
          <span className="font-display text-4xl font-semibold tracking-tight">
            {title.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]?.toUpperCase()).join("")}
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-paper/50">UI/UX</span>
        </div>
      )}
      <button
        type="button"
        aria-label={`Watch walkthrough of ${title}`}
        onClick={onPlay}
        className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/35 group-hover:opacity-100 focus-visible:opacity-100"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-paper text-lg text-pine-900 shadow-card">▶</span>
      </button>
    </div>
  );
}

export default function UIUXSection() {
  const { open } = useMediaModal();

  return (
    <section id="ui-ux" className="section-pad border-t border-ink/8 bg-paper-dim/40">
      <div className="container-content">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-display font-semibold">UI/UX Design</h2>
          <p className="mt-3 text-ink/60">
            Interface and prototype work that supports my development — designed in Figma and
            Adobe XD, with a focus on user-centered, accessible design.
          </p>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {uiuxProjects.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 80}
              className="h-full"
            >
             <div className="group h-full rounded-xl2 border border-ink/10 bg-white/70 overflow-hidden flex flex-col transition-all hover:border-pine-300 hover:-translate-y-1 hover:shadow-card">
              <Cover
                id={p.id}
                title={p.title}
                onPlay={() =>
                  open(
                    p.videos.map((v) => ({ type: "video" as const, title: v.title, src: v.src })),
                    0,
                    p.title
                  )
                }
              />
              <div className="p-6 flex flex-1 flex-col">
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed flex-1">{p.description}</p>
              <button
                type="button"
                onClick={() =>
                  open(
                    p.videos.map((v) => ({ type: "video" as const, title: v.title, src: v.src })),
                    0,
                    p.title
                  )
                }
                className="mt-5 text-sm font-medium text-pine-600 hover:text-pine-700 inline-flex items-center gap-1.5 self-start"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M3 1.5L11 6.5L3 11.5V1.5Z" fill="currentColor" />
                </svg>
                Watch Walkthrough
              </button>
              </div>
             </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}