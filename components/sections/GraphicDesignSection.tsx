"use client";

import Image from "next/image";
import { graphicDesignItems } from "@/data/uiux";
import { useMediaModal } from "@/lib/MediaModalContext";
import Reveal from "@/components/ui/Reveal";

export default function GraphicDesignSection() {
  const { open } = useMediaModal();

  const mediaItems = graphicDesignItems.map((g) => ({
    type: "image" as const,
    title: g.title,
    src: g.image,
  }));

  return (
    <section id="graphic-design" className="section-pad border-t border-ink/8">
      <div className="container-content">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-display font-semibold">Graphic Design</h2>
          <p className="mt-3 text-ink/60">
            A small selection of graphic design work, kept separate from my software projects.
          </p>
        </Reveal>

        {graphicDesignItems.length === 0 ? (
          <Reveal delay={100} className="mt-10 rounded-xl2 border border-dashed border-ink/15 p-12 text-center">
            <p className="text-ink/50 text-sm">
              Gallery images will appear here once added to{" "}
              <code className="mono text-xs bg-ink/[0.06] px-1.5 py-0.5 rounded">
                /public/images/graphic-design
              </code>{" "}
              and listed in{" "}
              <code className="mono text-xs bg-ink/[0.06] px-1.5 py-0.5 rounded">data/uiux.ts</code>.
            </p>
          </Reveal>
        ) : (
          <div className="mt-10 columns-2 md:columns-3 gap-4 [&>*]:mb-4">
            {graphicDesignItems.map((item, i) => (
              <Reveal key={item.id} delay={(i % 6) * 70} className="break-inside-avoid">
                <button
                  type="button"
                  onClick={() => open(mediaItems, i, "Graphic Design")}
                  className="block w-full rounded-xl overflow-hidden border border-ink/10 transition-all hover:border-pine-300 hover:-translate-y-0.5 hover:shadow-card group"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={800}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
