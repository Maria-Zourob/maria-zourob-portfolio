import { profile } from "@/data/profile";
import Reveal from "@/components/ui/Reveal";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: (
      <path d="M2 4h16v12H2V4Zm0 0 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s|-/g, "")}`,
    icon: (
      <path d="M4 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L13 12l5 2v3a2 2 0 0 1-2 2C8.5 19 1 11.5 1 5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/maria-zourob",
    href: profile.linkedin,
    icon: (
      <path d="M4 3.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM2.5 8.5h3V17h-3V8.5Zm5 0h2.9v1.15h.04c.4-.76 1.4-1.56 2.9-1.56 3.1 0 3.66 2.04 3.66 4.7V17h-3v-3.7c0-.9-.02-2.05-1.25-2.05-1.26 0-1.45.98-1.45 1.98V17h-3V8.5Z" fill="currentColor" />
    ),
  },
  {
    label: "GitHub",
    value: "github.com/Maria-Zourob",
    href: profile.github,
    icon: (
      <path d="M9 1a8 8 0 0 0-2.53 15.59c.4.08.55-.17.55-.38v-1.49c-2.23.48-2.7-1.08-2.7-1.08-.36-.93-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.8.06 1.23.83 1.23.83.72 1.23 1.87.88 2.33.67.07-.52.28-.88.51-1.08-1.78-.2-3.65-.89-3.65-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0 0 9 1Z" fill="currentColor" />
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-ink/8">
      <div className="container-content">
        <div className="grid md:grid-cols-[0.55fr_0.45fr] gap-14 items-start">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-display font-semibold leading-tight">
              Let's build something together.
            </h2>
            <p className="mt-4 text-ink/65 max-w-md leading-relaxed">
              I'm always open to discussing new projects, freelance work, or full-time
              opportunities. Reach out through any of the channels below.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center rounded-full bg-ink text-paper px-6 py-3.5 text-sm font-medium transition-all hover:bg-pine-600 active:scale-95"
            >
              Email Me
            </a>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.label === "Email" || l.label === "Phone" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="rounded-xl2 border border-ink/10 p-5 transition-all hover:border-pine-300 hover:-translate-y-0.5 flex items-start gap-3"
              >
                <svg width="18" height="18" viewBox="0 0 18 20" fill="none" className="mt-0.5 text-pine-600 shrink-0" aria-hidden="true">
                  {l.icon}
                </svg>
                <div className="min-w-0">
                  <p className="text-xs mono text-ink/45 uppercase tracking-wider">{l.label}</p>
                  <p className="text-sm text-ink/80 mt-0.5 truncate">{l.value}</p>
                </div>
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
