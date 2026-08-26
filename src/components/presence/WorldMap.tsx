"use client";

import { useEffect, useRef, useState } from "react";
import worldMap from "@svg-maps/world";
import { globalPresenceCountries } from "@/lib/data/presence";

type Location = { id: string; name: string; path: string };
type Point = { x: number; y: number };

const HQ_COUNTRY_ID = "in";

function HQMarker({ point }: { point: Point }) {
  return (
    <g>
      <circle cx={point.x} cy={point.y} r="7" className="fill-brand-accent-500/25 animate-ping" style={{ transformOrigin: `${point.x}px ${point.y}px` }} />
      <circle cx={point.x} cy={point.y} r="3.2" className="fill-brand-navy-900 stroke-white" strokeWidth="1" />
    </g>
  );
}

function ConnectorLine({ from, to }: { from: Point; to: Point }) {
  const length = Math.hypot(to.x - from.x, to.y - from.y);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setDrawn(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <path
      d={`M ${from.x} ${from.y} L ${to.x} ${to.y}`}
      fill="none"
      stroke="#16AFE2"
      strokeWidth={1.1}
      strokeLinecap="round"
      style={{
        strokeDasharray: length,
        strokeDashoffset: drawn ? 0 : length,
        transition: "stroke-dashoffset 650ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    />
  );
}

export function WorldMap() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hqPoint, setHqPoint] = useState<Point | null>(null);
  const [activePoint, setActivePoint] = useState<Point | null>(null);
  const pathRefs = useRef<Record<string, SVGPathElement | null>>({});

  const locations = worldMap.locations as Location[];
  const highlightIds = new Set(globalPresenceCountries.map((c) => c.id));
  const activeCountry = globalPresenceCountries.find((c) => c.id === activeId);

  useEffect(() => {
    const hqEl = pathRefs.current[HQ_COUNTRY_ID];
    if (!hqEl) return;
    const box = hqEl.getBBox();
    setHqPoint({ x: box.x + box.width / 2, y: box.y + box.height / 2 });
  }, []);

  function handleEnter(id: string) {
    setActiveId(id);
    const el = pathRefs.current[id];
    if (el) {
      const box = el.getBBox();
      setActivePoint({ x: box.x + box.width / 2, y: box.y + box.height / 2 });
    }
  }

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
                ref={(el) => {
                  pathRefs.current[loc.id] = el;
                }}
                d={loc.path}
                onMouseEnter={() => isHighlighted && handleEnter(loc.id)}
                onMouseLeave={() => isHighlighted && setActiveId(null)}
                onClick={() => isHighlighted && handleEnter(loc.id)}
                aria-label={isHighlighted ? loc.name : undefined}
                className={[
                  "transition-colors duration-150 cursor-pointer",
                  isHighlighted ? "fill-brand-accent-500 hover:fill-brand-accent-600" : "fill-brand-line/70",
                  isActive ? "fill-brand-navy-900" : "",
                ].join(" ")}
                stroke="#ffffff"
                strokeWidth={0.6}
              />
            );
          })}

          {hqPoint && activePoint && activeId ? <ConnectorLine key={activeId} from={activePoint} to={hqPoint} /> : null}
          {hqPoint ? <HQMarker point={hqPoint} /> : null}
        </svg>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <span className="inline-flex items-center gap-1.5 pr-2 text-xs text-brand-steel-600">
          <span className="h-2 w-2 shrink-0 rounded-full bg-brand-navy-900" />
          Manesar HQ
        </span>
        {globalPresenceCountries.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => handleEnter(c.id)}
            onMouseEnter={() => handleEnter(c.id)}
            onMouseLeave={() => setActiveId(null)}
            className={`border px-3 py-1 text-xs font-medium transition-colors sm:px-4 sm:py-1.5 sm:text-sm ${
              activeCountry?.id === c.id
                ? "border-brand-navy-900 bg-brand-navy-900 text-white"
                : "border-brand-line bg-white text-brand-navy-800 hover:bg-brand-paper"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );
}
