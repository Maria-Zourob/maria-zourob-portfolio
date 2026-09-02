import { techStack } from "@/data/profile";
import Reveal from "@/components/ui/Reveal";

const groups: { label: string; items: string[]; note: string }[] = [
  { label: "Backend", items: techStack.backend, note: "primary focus" },
  { label: "Frontend", items: techStack.frontend, note: "" },
  { label: "Database", items: techStack.database, note: "" },
  { label: "Mobile", items: techStack.mobile, note: "" },
  { label: "Tools & Practices", items: techStack.tools, note: "" },
  { label: "UI/UX", items: techStack.uiux, note: "" },
  { label: "Data & Reporting", items: techStack.data, note: "" },
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-pine-900 text-paper">
      <div className="container-content">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-display font-semibold">Technology Stack</h2>
          <p className="mt-3 text-paper/60">
            The languages, frameworks, and tools I actually build with — grouped by where they sit
            in the stack.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 60} className={g.label === "Backend" ? "lg:col-span-1 relative" : "relative"}>
              {g.label === "Backend" && (
                <span className="mono text-[10px] uppercase tracking-wider text-amber-soft absolute -top-5 left-0">
                  primary focus
                </span>
              )}
              <h3 className="font-display text-lg font-medium border-b border-paper/15 pb-3">
                {g.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="mono text-xs px-3 py-1.5 rounded-full border border-paper/15 text-paper/80 transition-colors hover:border-paper/40 hover:text-paper"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
