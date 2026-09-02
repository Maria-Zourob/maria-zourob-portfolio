// Sourced directly from Maria's CV. Do not invent responsibilities or dates.

export type ExperienceItem = {
  id: string;
  role: string;
  org: string;
  date: string;
  location: string;
  points: string[];
  current?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    id: "sham-stack",
    role: "Full Stack Developer",
    org: "Sham Stack",
    date: "Apr 2026 – Present",
    location: "Gaza, Palestine · Remote",
    current: true,
    points: [
      "Contributing to full-stack web development using ASP.NET Core, C#, SQL Server, JavaScript, and modern UI technologies.",
      "Developing and maintaining scalable web features while collaborating with the development team using Git and GitHub.",
      "Applying clean coding and architectural practices across frontend and backend development.",
    ],
  },
  {
    id: "mckinsey",
    role: "McKinsey Forward Program Participant",
    org: "McKinsey & Company",
    date: "Apr 2026 – Present",
    location: "Remote",
    current: true,
    points: [
      "Participating in a professional development program focused on leadership, problem-solving, communication, and adaptability.",
      "Developing future-ready skills through structured learning and practical activities.",
    ],
  },
  {
    id: "bytebloom",
    role: "Software Engineer Intern",
    org: "ByteBloom Academy",
    date: "Jun 2026 – Sep 2026",
    location: "Remote",
    points: [
      "Participating in an intensive software engineering program focused on problem-solving, clean code, algorithms, and software architecture.",
      "Developing Kotlin-based programming solutions and applying software engineering best practices through practical team projects.",
      "Following professional Git workflows and collaborative development practices.",
    ],
  },
  {
    id: "freelance",
    role: "Junior Full Stack Developer",
    org: "Freelance",
    date: "Aug 2024 – Present",
    location: "Remote",
    current: true,
    points: [
      "Developed and delivered web and mobile applications using ASP.NET Core, C#, Entity Framework Core, REST APIs, and Flutter.",
      "Built responsive interfaces using React.js, HTML, CSS, and Tailwind CSS.",
      "Implemented authentication using JWT and managed projects using Git and GitHub.",
    ],
  },
  {
    id: "unrwa",
    role: "Back-End Developer Intern",
    org: "UNRWA",
    date: "May 2025 – Jun 2025",
    location: "Remote",
    points: [
      "Completed a field training internship under the mentorship of Eng. Zakaria Abu Salmiya.",
      "Developed backend services and RESTful APIs using ASP.NET Core and designed SQL Server databases.",
      "Worked on improving application performance, scalability, and data management.",
    ],
  },
];
