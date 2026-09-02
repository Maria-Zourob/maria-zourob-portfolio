import Image from "next/image";
import { profile } from "@/data/profile";

const mainTech = [
  "ASP.NET Core",
  "C#",
  "SQL Server",
  "React.js",
  "REST APIs",
  "Entity Framework Core",
];

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* quiet background texture — a single restrained gesture, not decoration piled on */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-pine-100/60 blur-3xl"
      />

      <div className="container-content grid md:grid-cols-[1.15fr_0.85fr] gap-14 md:gap-10 items-center">
        <div>
          <p
            className="mono text-xs tracking-widest text-pine-600 mb-5 opacity-0 animate-fade-up"
            style={{ animationDelay: "60ms" }}
          >
            {profile.location} · currently @ Sham Stack
          </p>

          <h1
            className="text-4xl sm:text-5xl md:text-[3.4rem] leading-[1.08] font-display font-semibold text-ink opacity-0 animate-fade-up"
            style={{ animationDelay: "140ms" }}
          >
            {profile.name}
          </h1>

          <p
            className="mt-4 text-xl md:text-2xl text-pine-600 font-display font-medium opacity-0 animate-fade-up"
            style={{ animationDelay: "220ms" }}
          >
            {profile.role} <span className="text-ink/40">— {profile.roleLine}</span>
          </p>

          <p
            className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ink/70 opacity-0 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            {profile.summary}
          </p>

          <div
            className="mt-7 flex flex-wrap gap-2 opacity-0 animate-fade-up"
            style={{ animationDelay: "380ms" }}
          >
            {mainTech.map((t) => (
              <span
                key={t}
                className="mono text-xs px-3 py-1.5 rounded-full border border-ink/12 bg-white/60 text-ink/70 transition-colors hover:border-pine-400 hover:text-ink"
              >
                {t}
              </span>
            ))}
          </div>

          <div
            className="mt-10 flex flex-wrap items-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "460ms" }}
          >
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-ink text-paper px-6 py-3.5 text-sm font-medium transition-all hover:bg-pine-600 active:scale-95"
            >
              View My Work
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-sm font-medium text-ink transition-all hover:border-ink/40 hover:-translate-y-0.5 active:scale-95"
            >
              Download CV
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 1V9M7 9L3.5 5.5M7 9L10.5 5.5M1.5 11.5H12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center text-sm font-medium text-ink/70 hover:text-ink px-2 py-3.5 transition-colors"
            >
              Contact Me →
            </a>
          </div>
        </div>

        <div
          className="relative mx-auto md:mx-0 w-full max-w-[360px] opacity-0 animate-fade-up"
          style={{ animationDelay: "260ms" }}
        >
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-xl2 border border-pine-300/50"
          />
          <div className="relative rounded-xl2 overflow-hidden shadow-lift bg-pine-100 transition-transform duration-500 hover:-translate-y-1">
            <Image
              src={profile.photo}
              alt={`${profile.name}, Full Stack Developer`}
              width={720}
              height={786}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-ink text-paper rounded-xl px-4 py-3 shadow-lift">
            <p className="mono text-[10px] uppercase tracking-wider text-pine-200">Full Stack</p>
            <p className="text-sm font-medium">Backend-leaning developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
