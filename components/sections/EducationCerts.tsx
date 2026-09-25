import { education, certifications } from "@/data/education";
import Reveal from "@/components/ui/Reveal";

export default function EducationCerts() {
  return (
    <section id="education" className="section-pad border-t border-ink/8 bg-paper-dim/40">
      <div className="container-content grid lg:grid-cols-2 gap-16 lg:items-start">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-3xl font-display font-semibold">Education</h2>
          <div className="mt-8 space-y-8">
            {education.map((e) => (
              <div key={e.id} className="border-l-2 border-pine-400 pl-5 transition-colors hover:border-amber">
                <h3 className="font-display text-lg font-semibold">{e.degree}</h3>
                <p className="text-pine-600 mt-1">{e.institution}</p>
                <p className="mono text-xs text-ink/45 mt-1.5">{e.date}</p>
                {e.detail && <p className="text-sm text-ink/60 mt-1">{e.detail}</p>}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <h2 className="text-3xl font-display font-semibold">Certifications</h2>
          <ul className="mt-8 space-y-4">
            {certifications.map((c) => (
              <li
                key={c.id}
                className="flex items-start justify-between gap-4 pb-4 border-b border-ink/8 transition-colors hover:border-pine-400"
              >
                <div>
                  <p className="font-medium text-ink">{c.name}</p>
                  {c.org && <p className="text-sm text-ink/55 mt-0.5">{c.org}</p>}
                </div>
                <span className="mono text-xs text-ink/45 whitespace-nowrap pt-0.5">{c.date}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
