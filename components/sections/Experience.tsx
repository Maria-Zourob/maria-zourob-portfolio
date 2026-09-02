import { experience } from "@/data/experience";
import Reveal from "@/components/ui/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section-pad border-t border-ink/8">
      <div className="container-content">
        <Reveal className="max-w-xl mb-14">
          <h2 className="text-3xl font-display font-semibold">Experience</h2>
          <p className="mt-3 text-ink/60">Where I've worked and what I've been building.</p>
        </Reveal>

        <ol className="relative border-l border-ink/12 ml-2 space-y-12">
          {experience.map((item, i) => (
            <li key={item.id} className="ml-8 relative">
              <span
                className={`absolute -left-[39px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-paper ${
                  item.current ? "bg-amber" : "bg-pine-400"
                }`}
              />
              <Reveal delay={i * 70}>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-xl font-semibold">{item.role}</h3>
                  <span className="text-ink/40">·</span>
                  <span className="text-pine-600 font-medium">{item.org}</span>
                </div>
                <p className="mono text-xs text-ink/45 mt-1.5">
                  {item.date} — {item.location}
                </p>
                <ul className="mt-4 space-y-2 max-w-2xl">
                  {item.points.map((p, i2) => (
                    <li key={i2} className="text-ink/70 leading-relaxed pl-4 relative">
                      <span className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full bg-ink/30" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
