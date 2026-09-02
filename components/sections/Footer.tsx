import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-ink/8 py-10">
      <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink/55">
        <div className="text-center sm:text-left">
          <p className="font-display font-medium text-ink">{profile.name}</p>
          <p>{profile.role}</p>
        </div>

        <div className="flex items-center gap-5">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-ink transition-colors">
            Email
          </a>
        </div>

        <p>© {new Date().getFullYear()} Maria Zourob. All rights reserved.</p>
      </div>
    </footer>
  );
}
