"use client";

import { useState } from "react";
import indiaMap from "@svg-maps/india";
import { indiaStateHighlights, headquartersStateId } from "@/lib/data/presence";

type Location = { id: string; name: string; path: string };

export function IndiaMap() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const locations = indiaMap.locations as Location[];
  const activeLocation = locations.find((l) => l.id === activeId);
  const activeCities = activeId ? indiaStateHighlights[activeId] : undefined;

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
      <div className="flex-1 border border-brand-line bg-white p-4">
        <svg viewBox={indiaMap.viewBox} className="w-full" role="img" aria-label="Map of India, Icon Power presence">
          {locations.map((loc) => {
            const isHighlighted = Boolean(indiaStateHighlights[loc.id]);
            const isHq = loc.id === headquartersStateId;
            const isActive = activeId === loc.id;
            return (
              <path
                key={loc.id}
                d={loc.path}
                onMouseEnter={() => setActiveId(loc.id)}
                onFocus={() => setActiveId(loc.id)}
                tabIndex={isHighlighted ? 0 : -1}
                aria-label={loc.name}
                className={[
                  "cursor-default outline-none transition-colors duration-150",
                  isHighlighted ? "fill-brand-accent-500" : "fill-brand-line/70",
                  isActive && isHighlighted ? "fill-brand-navy-900" : "",
                  isHq ? "fill-brand-navy-900" : "",
                ].join(" ")}
                stroke="#ffffff"
                strokeWidth={1}
              />
            );
          })}
        </svg>
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-brand-steel-600">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-navy-900" /> Headquarters (Manesar, Haryana)
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-accent-500" /> Service presence
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-line" /> No listed presence
          </span>
        </div>
      </div>

      <div className="w-full shrink-0 border border-brand-line bg-brand-paper p-6 lg:w-72">
        {activeLocation && activeCities ? (
          <>
            <h3 className="text-base font-semibold text-brand-navy-900">{activeLocation.name}</h3>
            <ul className="mt-3 flex flex-col gap-1.5 text-sm text-brand-steel-600">
              {activeCities.map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <h3 className="text-base font-semibold text-brand-navy-900">Hover a state</h3>
            <p className="mt-2 text-sm leading-6 text-brand-steel-600">
              Highlighted states show Icon Power&rsquo;s service locations. Hover or focus a state to see the cities covered.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
