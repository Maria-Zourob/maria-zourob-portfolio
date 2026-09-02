"use client";

import { filterCategories } from "@/data/projects";

export default function ProjectFilter({
  active,
  onChange,
}: {
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
      {filterCategories.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isActive}
            type="button"
            onClick={() => onChange(cat)}
            className={`text-sm px-4 py-2 rounded-full border transition-colors ${
              isActive
                ? "bg-ink text-paper border-ink"
                : "border-ink/15 text-ink/65 hover:border-ink/35"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
