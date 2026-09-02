"use client";

import { uiuxProjects } from "@/data/uiux";
import { useMediaModal } from "@/lib/MediaModalContext";
import Reveal from "@/components/ui/Reveal";

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

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {uiuxProjects.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 80}
              className="rounded-xl2 border border-ink/10 bg-white/70 p-6 flex flex-col transition-all hover:border-pine-300 hover:-translate-y-1 hover:shadow-card"
            >
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
