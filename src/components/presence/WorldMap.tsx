"use client";

import { useState } from "react";
import worldMap from "@svg-maps/world";
import { globalPresenceCountries } from "@/lib/data/presence";

type Location = { id: string; name: string; path: string };

export function WorldMap() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const locations = worldMap.locations as Location[];
  const highlightIds = new Set(globalPresenceCountries.map((c) => c.id));
  const activeCountry = globalPresenceCountries.find((c) => c.id === activeId);

  return (
    <div className="flex flex-col gap-6">
      <div className="border border-brand-line bg-white p-4">
        <svg viewBox={worldMap.viewBox} className="w-full" role="img" aria-label="World map, Icon Power global presence">
          {locations.map((loc) => {
            const isHighlighted = highlightIds.has(loc.id);
            const isActive = activeId === loc.id;
            return (
              <path
                key={loc.id}
                d={loc.path}
                onMouseEnter={() => isHighlighted && setActiveId(loc.id)}
                onMouseLeave={() => isHighlighted && setActiveId(null)}
                aria-label={isHighlighted ? loc.name : undefined}
                className={[
                  "transition-colors duration-150",
                  isHighlighted ? "fill-brand-accent-500 cursor-default" : "fill-brand-line/70",
                  isActive ? "fill-brand-navy-900" : "",
                ].join(" ")}
                stroke="#ffffff"
                strokeWidth={0.6}
              />
            );
          })}
        </svg>
      </div>

      <div className="flex flex-wrap gap-3">
        {globalPresenceCountries.map((c) => (
          <span
            key={c.id}
            onMouseEnter={() => setActiveId(c.id)}
            onMouseLeave={() => setActiveId(null)}
            className={`cursor-default border px-4 py-1.5 text-sm font-medium transition-colors ${
              activeCountry?.id === c.id
                ? "border-brand-navy-900 bg-brand-navy-900 text-white"
                : "border-brand-line bg-white text-brand-navy-800"
            }`}
          >
            {c.name}
          </span>
        ))}
      </div>
    </div>
  );
}
