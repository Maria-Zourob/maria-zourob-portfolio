// Sourced directly from Maria's CV.

export type EducationItem = {
  id: string;
  degree: string;
  institution: string;
  date: string;
  detail?: string;
};

export const education: EducationItem[] = [
  {
    id: "aqsa",
    degree: "Bachelor of Intelligent Systems and Computer Engineering",
    institution: "Al-Aqsa University",
    date: "2025 – Present",
  },
  {
    id: "gtc",
    degree: "Diploma in Software and Database Technology",
    institution: "Gaza Training Center (GTC) – UNRWA",
    date: "2022 – 2025",
    detail: "GPA: 91.62 / 100",
  },
];

export type CertificationItem = {
  id: string;
  name: string;
  org: string;
  date: string;
};

export const certifications: CertificationItem[] = [
  { id: "cert-1", name: "AI Fluency: Framework & Foundations", org: "Anthropic", date: "Aug 2026" },
  { id: "cert-2", name: "Claude Code 101", org: "Anthropic", date: "Aug 2026" },
  { id: "cert-3", name: "Building with the Claude API", org: "Anthropic", date: "Aug 2026" },
  {
    id: "cert-4",
    name: "Introduction to Artificial Intelligence for Digital Freelancers",
    org: "International Trade Centre",
    date: "Aug 2026",
  },
  {
    id: "cert-5",
    name: "Selling Your Freelancing Services Online",
    org: "International Trade Centre",
    date: "Aug 2026",
  },
  { id: "cert-6", name: "Full-Stack Web Development & Data Analysis", org: "", date: "2025" },
  { id: "cert-7", name: "CCNA: Introduction to Networks", org: "Cisco", date: "2024" },
  { id: "cert-8", name: "PC Maintenance Essentials", org: "Cisco", date: "2022" },
];
