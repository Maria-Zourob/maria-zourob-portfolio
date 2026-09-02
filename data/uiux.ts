// UI/UX Design Collection — sourced from CV: "Designed responsive interfaces and
// interactive prototypes for restaurant, café, and educational applications using
// Figma and Adobe XD. Applied user-centered design and accessibility principles."

export type UIUXProject = {
  id: string;
  title: string;
  description: string;
  videos: { title: string; src: string; poster?: string }[];
};

export const uiuxProjects: UIUXProject[] = [
  {
    id: "kids-edu-app",
    title: "Kids Education App",
    description: "A responsive prototype for an educational application, designed in Figma and Adobe XD.",
    videos: [{ title: "Kids Education App — Walkthrough", src: "/videos/ui-ux/Kids-edu-app.mp4" }],
  },
  {
    id: "cafe",
    title: "Cafe",
    description: "A responsive interface prototype for a café concept, designed in Figma and Adobe XD.",
    videos: [{ title: "Cafe — Walkthrough", src: "/videos/ui-ux/Cafe.mp4" }],
  },
  {
    id: "restaurant",
    title: "Restaurant",
    description: "A responsive interface prototype for a restaurant concept, designed in Figma and Adobe XD.",
    videos: [{ title: "Restaurant — Walkthrough", src: "/videos/ui-ux/Restaurant.mp4" }],
  },
];

// Graphic design gallery — add real image paths here once uploaded to
// /public/images/graphic-design/. Left empty until real assets are provided.
export type GraphicDesignItem = {
  id: string;
  title: string;
  image: string;
};

export const graphicDesignItems: GraphicDesignItem[] = [
  { id: "poster-1", title: "1", image: "/images/graphic-design/1.jpg" },
  { id: "poster-2", title: "2", image: "/images/graphic-design/2.jpg" },
  { id: "poster-3", title: "3", image: "/images/graphic-design/3.png" },
  { id: "poster-4", title: "4", image: "/images/graphic-design/4.jpg" },
  { id: "poster-5", title: "5", image: "/images/graphic-design/5.jpg" },
  { id: "poster-6", title: "6", image: "/images/graphic-design/6.jpg" },
  { id: "poster-7", title: "7", image: "/images/graphic-design/7.jpg" },
  { id: "poster-8", title: "8", image: "/images/graphic-design/8.jpg" },
  { id: "poster-9", title: "9", image: "/images/graphic-design/9.jpg" },
  { id: "poster-10", title: "10", image: "/images/graphic-design/10.jpg" },
];
