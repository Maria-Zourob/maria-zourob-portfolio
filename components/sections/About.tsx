import { profile } from "@/data/profile";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-ink/8">
      <div className="container-content grid md:grid-cols-[0.4fr_0.6fr] gap-10 md:gap-16">
        <Reveal>
          <h2 className="text-3xl font-display font-semibold">About</h2>
          <p className="mt-3 text-ink/60 max-w-xs">
            A quick look at how I got here and how I like to build software.
          </p>
        </Reveal>

        <Reveal delay={120} className="space-y-5 text-[1.05rem] leading-relaxed text-ink/75 max-w-2xl">
          <p>
            I'm a Full Stack Developer based in Gaza, Palestine, working mainly with{" "}
            <strong className="text-ink font-medium">ASP.NET Core, C#, and SQL Server</strong> on
            the backend, paired with React.js and modern CSS tooling on the frontend. Most of my
            experience has come through freelance projects and team-based development, building
            complete applications rather than isolated pieces.
          </p>
          <p>
            I'm currently a Full Stack Developer at <strong className="text-ink font-medium">Sham Stack</strong>,
            while also taking part in the McKinsey Forward Program and a software engineering
            internship at ByteBloom Academy. Before that, I trained as a Back-End Developer Intern
            at UNRWA, where I focused on building RESTful APIs and designing SQL Server databases.
          </p>
          <p>
            I care about clean architecture and code that's easy for a team to maintain, not just
            code that works. I also have a background in UI/UX design — Figma, Adobe XD, and
            Photoshop — which helps me turn designs into functional interfaces without losing the
            original intent, and gives me a practical sense of how backend decisions shape the
            experience on the frontend.
          </p>
          <p>
            I'm currently pursuing a Bachelor's in Intelligent Systems and Computer Engineering at
            Al-Aqsa University, after completing a Diploma in Software and Database Technology at
            the Gaza Training Center (UNRWA) with a GPA of 91.62/100.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
