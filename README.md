# Maria Zourob — Portfolio

A Next.js + TypeScript + Tailwind CSS portfolio built from your real CV. No invented
projects, experience, or metrics — everything text-based comes straight from
`mariacv.pdf`. Video demos and the graphic design gallery are wired up with real
filenames/paths but need the actual media files added (see below).

## 1. Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. This project was written but **not build-tested**
in the environment it was generated in (no internet access there), so the first
thing to do after `npm install` is run `npm run build` once to catch any issue on
your machine — I did not have that chance.

```bash
npm run build   # sanity check for TypeScript/build errors
```

If anything errors, paste it back to me and I'll fix it immediately.

## 2. Add your videos

Video data lives in one place: `data/projects.ts` (and `data/uiux.ts` for the
UI/UX walkthroughs). Each project has a `videos` array like:

```ts
videos: [
  { title: "Admin Dashboard", src: "/videos/alhitham/Admin.MP4" },
]
```

The `src` path maps directly to a file in `public/videos/<project-id>/`. Folders
already exist for every project (currently empty, with a `.gitkeep`) — just drop
your actual video files in with matching names, e.g.:

```
public/videos/alhitham/Admin.MP4
public/videos/alhitham/Questions.mp4
public/videos/alhitham/TelegramBgService.mp4
```

If your real filenames differ, either rename the files to match `data/projects.ts`,
or update the `src` values in that file — either works. Nothing else needs to
change; the modal, counter, and Previous/Next navigation all read from this array
automatically and stay scoped to that project only.

**Sham Stack Website** currently has an empty `videos: []` — add entries the same
way once you have a demo recorded.

## 3. Add graphic design images

Drop images into `public/images/graphic-design/`, then list them in
`data/uiux.ts`:

```ts
export const graphicDesignItems: GraphicDesignItem[] = [
  { id: "poster-1", title: "Event Poster", image: "/images/graphic-design/poster-1.jpg" },
];
```

The gallery and lightbox (with the same Previous/Next modal used for videos) will
pick them up automatically. Until you add entries, the section shows a clean
"coming soon" placeholder instead of breaking.

## 4. Fill in project links / screenshots

Per project in `data/projects.ts`, you can optionally add:

- `github`: real repo URL (omit the field entirely if there isn't one — never a
  placeholder link)
- `liveDemo`: real deployed URL (same rule)
- `images`: array of screenshot paths in `public/images/projects/<project-id>/`

## 5. Content you may want to double check

A few projects (`Creativo`, `Serenity`) were named with a demo video in your brief
but have no description in your CV — I left them with a neutral placeholder
description and no invented tech stack. Fill in `shortDescription`,
`technologies`, `overview`, etc. in `data/projects.ts` once you have the details,
same shape as the other projects.

## Project structure

```
app/                 Next.js App Router — layout, globals.css, page.tsx
components/
  sections/           Navbar, Hero, About, Skills, Experience, Education, Contact, Footer
  projects/           ProjectsSection, ProjectCard, ProjectFilter, ProjectDetailsModal
  ui/                 MediaModal (the reusable Bootstrap-powered video/image modal)
data/                 profile.ts, experience.ts, education.ts, projects.ts, uiux.ts
  — all real content lives here, not in components
lib/                  MediaModalContext.tsx — shared state for the video/image modal
public/
  images/profile/     your headshot (already straightened + cropped)
  images/graphic-design/  drop gallery images here
  videos/<project-id>/    drop demo videos here (folders pre-created)
  cv/                 your CV, served for the Download CV button
```

## Notes on the video/lightbox modal

- Uses Bootstrap 5's Modal JS (loaded via CDN in `app/layout.tsx`) for real
  Escape-key and backdrop-click handling — but none of Bootstrap's CSS is
  imported globally, so it never fights Tailwind. All modal visual styling is
  custom, scoped in `app/globals.css`.
- Video elements only mount while the modal is open (see `MediaModal.tsx`), so
  nothing preloads on page load and playback stops the instant it closes.
- Previous/Next navigation is scoped to whatever array you pass into
  `open(items, index, groupTitle)` — a project's own videos, or the graphic
  design gallery — so it never crosses between projects.

## Deployment

Any standard Next.js host works (Vercel is the simplest — connect the repo and
it deploys automatically). Just make sure your video files aren't enormous;
consider compressing anything over ~30–50MB before adding it to `public/videos`,
since large files in `public/` get bundled into the deployment.
