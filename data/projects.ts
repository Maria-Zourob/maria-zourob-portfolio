// Central project data source. Add/remove/reorder projects and videos here only —
// no project content should ever be hard-coded inside components.
//
// IMPORTANT: video `src` paths point to /public/videos/<project-id>/<filename>.
// Copy your real video files into those folders using the exact filenames below
// (or update the paths here to match whatever you name them).

export type ProjectVideo = {
  title: string;
  src: string;
  poster?: string;
};

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  category: "Full Stack" | "Frontend" | "Backend" | "Other";
  featured: boolean;
  technologies: string[];
  overview?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  contribution?: string;
  github?: string;
  liveDemo?: string;
  images?: string[];
  videos: ProjectVideo[];
};

export const projects: Project[] = [
  {
    id: "batikha-media-management",
    title: "Batikha Media Group — Internal Management System",
    shortDescription:
      "A complete internal management system built in one week for Batikha Media Group, covering projects, tasks, team, and workflows.",
    category: "Full Stack",
    featured: true,
    technologies: ["Next.js", "Docker", "CI/CD", "Git", "REST APIs"],
    overview:
      "A complete internal management system built in one week for Batikha Media Group, designed to help the team manage projects, tasks, team members, and workflows from one place. The project covered Frontend, Backend, UI/UX, APIs, Authentication, Git workflow, Docker, and CI/CD, built as a 3-person team.",
    solution:
      "Built as a bilingual (Arabic/English, RTL/LTR) system with dark/light mode, a Jira-inspired drag-and-drop task board, dynamic project progress tracking tied to task completion, and AI-assisted task planning.",
    features: [
      "Dashboard — overview of projects, tasks, team members, statuses, and progress",
      "Project management — create, edit, delete projects; assign members; set deadlines; progress dynamically tied to task completion",
      "Task management — Jira-inspired drag & drop between statuses, with assigned member, deadline, details, and notes per task",
      "Team management — add, activate, deactivate members; filter by name, status, and type",
      "Arabic / English with full RTL / LTR support",
      "Dark / light mode",
      "AI task suggestions — generates a full task plan for a project, reviewable and editable before creation",
    ],
    contribution:
      "Frontend Development & UI/UX — interfaces, user experience, API integration, and interactive features, as part of a 3-person team built in one week. Backend, APIs, Docker, and CI/CD were built by a teammate, under the guidance of a supervising engineer on requirements, task breakdown, and Git workflow.",
    liveDemo: "https://batikha.site/",
    videos: [
      { title: "Batikha Media Group — Walkthrough", src: "/videos/batikha-media/Overview.mp4" },
    ],
  },
  {
    id: "dental-clinic",
    title: "Dental Clinic Management System",
    shortDescription:
      "Arabic RTL full-stack platform for a dental clinic with scheduling, billing, and an interactive dental chart.",
    category: "Full Stack",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    overview:
      "A full-stack, Arabic RTL dental clinic management platform built for Emad Saqr Dental Clinic, covering scheduling, patient records, billing, and clinic analytics.",
    solution:
      "Built with Next.js, TypeScript, Tailwind CSS, and Supabase (PostgreSQL, Auth, Storage, Realtime), with role-based access control enforced through Row Level Security.",
    features: [
      "Role-based access control with Row Level Security",
      "Interactive dental chart",
      "Appointment scheduling with conflict detection",
      "Billing with printable receipts",
      "Analytics dashboard",
    ],
    contribution: "Full Stack Developer — designed and built the entire application end to end.",
    videos: [
      { title: "Dental Clinic — Overview", src: "/videos/dental-clinic/Overview.mp4" },
    ],
  },
  {
    id: "sham-stack-website",
    title: "Sham Stack Website",
    shortDescription:
      "The company's web platform, built as a team using ASP.NET Core MVC with responsive UI sections.",
    category: "Full Stack",
    featured: true,
    technologies: ["ASP.NET Core MVC", "C#", "SQL Server", "Tailwind CSS", "JavaScript"],
    overview: "The company web platform for Sham Stack, developed collaboratively within a team-based Git workflow.",
    solution: "Implemented responsive UI sections and backend functionality using ASP.NET Core MVC, C#, and SQL Server.",
    features: ["Responsive UI sections", "Backend functionality integrated with the team's shared codebase"],
    contribution: "Full Stack Developer — team project, contributed frontend sections and backend functionality.",
    videos: [],
  },
  {
    id: "alhitham",
    title: "Al-Haitham Educational Platform",
    shortDescription: "An educational web platform with responsive interfaces backed by ASP.NET Core.",
    category: "Full Stack",
    featured: true,
    technologies: ["ASP.NET Core", "C#", "Entity Framework Core", "SQL Server"],
    overview: "An educational web platform integrating backend functionality with structured database design.",
    solution: "Built responsive interfaces integrating backend functionality and database structures using ASP.NET Core, C#, and Entity Framework Core.",
    contribution: "Full Stack Developer.",
    videos: [
      { title: "Admin Dashboard", src: "/videos/alhitham/Admin.MP4" },
      { title: "Questions / Question Management", src: "/videos/alhitham/Questions.mp4" },
      { title: "Telegram Background Service", src: "/videos/alhitham/TelegramBgService.mp4" },
    ],
  },
  {
    id: "blog-platform",
    title: "College Blog Platform",
    shortDescription: "A full-stack blogging platform with authentication, articles, comments, and categories.",
    category: "Full Stack",
    featured: true,
    technologies: ["ASP.NET Core MVC", "Entity Framework Core", "SQL Server"],
    overview: "A full-stack blogging platform built for college use.",
    solution: "Implemented authentication, role-based authorization, article management, comments, and categories using ASP.NET Core MVC and Entity Framework Core.",
    features: ["Authentication & role-based authorization", "Article management", "Comments", "Categories"],
    contribution: "Full Stack Developer.",
    videos: [
      { title: "Blog Platform — Part 1", src: "/videos/blog-platform/Blog-P1.mp4" },
      { title: "Blog Platform — Part 2", src: "/videos/blog-platform/Blog-P2.mp4" },
    ],
  },
  {
    id: "inventory-dashboard",
    title: "Inventory & Sales Management Dashboard",
    shortDescription: "A full-stack inventory and sales dashboard with analytics and a responsive admin interface.",
    category: "Full Stack",
    featured: false,
    technologies: ["React", "Tailwind CSS", "ASP.NET Core Web API", "Entity Framework Core", "SQL Server"],
    overview: "A full-stack inventory and sales management dashboard for tracking products and processing sales.",
    solution:
      "Implemented product management, sales processing, JWT authentication, analytics, and a responsive admin interface with dark mode, using a 3-tier architecture.",
    features: [
      "Product management",
      "Sales processing",
      "JWT authentication",
      "Analytics",
      "Dark mode admin interface",
      "3-tier architecture",
    ],
    contribution: "Full Stack Developer.",
    videos: [{ title: "Inventory Dashboard — Overview", src: "/videos/inventory-dashboard/Inventory-Dashboard.mp4" }],
  },
  {
    id: "linkedin-workshop",
    title: "LinkedIn Profile Upgrade Workshop",
    shortDescription: "An interactive site for a LinkedIn profile workshop, polished across screen sizes.",
    category: "Frontend",
    featured: false,
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    overview: "An interactive LinkedIn profile workshop website.",
    solution: "Built responsive layouts and client-side interactions, polished across screen sizes.",
    contribution: "Full Stack Developer.",
    videos: [{ title: "LinkedIn Workshop — Overview", src: "/videos/linkedin-workshop/Linkedin.mp4" }],
  },
  {
    id: "bootstrap-project",
    title: "Bootstrap Project",
    shortDescription: "A frontend project built with Bootstrap.",
    category: "Frontend",
    featured: false,
    technologies: ["Bootstrap", "HTML", "CSS", "JavaScript"],
    videos: [{ title: "Bootstrap Project — Overview", src: "/videos/bootstrap-project/BootstrapProject.mp4" }],
  },
  {
    id: "creativo",
    title: "Creativo",
    shortDescription: "Project details to be added.",
    category: "Frontend",
    featured: false,
    technologies: [],
    videos: [{ title: "Creativo — Overview", src: "/videos/creativo/Creativo.mp4" }],
  },
  {
    id: "serenity",
    title: "Serenity",
    shortDescription: "Project details to be added.",
    category: "Frontend",
    featured: false,
    technologies: [],
    videos: [{ title: "Serenity — Overview", src: "/videos/serenity/Serenity.mp4" }],
  },
  {
    id: "wpf-multiply-game",
    title: "WPF Multiply Game",
    shortDescription: "A desktop game built with WPF.",
    category: "Other",
    featured: false,
    technologies: ["C#", "WPF"],
    videos: [{ title: "WPF Multiply Game — Overview", src: "/videos/wpf-multiply-game/WPF-Multiply-Game.mp4" }],
  },
  {
    id: "movie-catalog-api",
    title: "MovieCatalogAPI",
    shortDescription:
      "A personal project building a movie catalog REST API with ASP.NET Core and SQL Server.",
    category: "Backend",
    featured: false,
    technologies: ["ASP.NET Core", "C#", "SQL Server"],
    overview: "An individual, self-directed project to build a RESTful API for managing a movie catalog.",
    contribution: "Built independently as a personal/learning project.",
    github: "https://github.com/Maria-Zourob/MovieCatalogAPI",
    videos: [],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const allProjects = projects;

export const filterCategories = ["All", "Full Stack", "Frontend", "Backend", "Other"] as const;
