"use client";

import { useEffect, useRef, useState } from "react";
import indiaMap from "@svg-maps/india";
import { indiaStateHighlights, headquartersStateId } from "@/lib/data/presence";

type Location = { id: string; name: string; path: string };
type Point = { x: number; y: number };

function HQMarker({ point }: { point: Point }) {
  return (
    <g>
      <circle cx={point.x} cy={point.y} r="10" className="fill-brand-accent-500/25 animate-ping" style={{ transformOrigin: `${point.x}px ${point.y}px` }} />
      <circle cx={point.x} cy={point.y} r="4.5" className="fill-brand-navy-900 stroke-white" strokeWidth="1.5" />
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
      strokeWidth={1.5}
      strokeLinecap="round"
      style={{
        strokeDasharray: length,
        strokeDashoffset: drawn ? 0 : length,
        transition: "stroke-dashoffset 550ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    />
  );
}

export function IndiaMap() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hqPoint, setHqPoint] = useState<Point | null>(null);
  const [activePoint, setActivePoint] = useState<Point | null>(null);
  const pathRefs = useRef<Record<string, SVGPathElement | null>>({});

  const locations = indiaMap.locations as Location[];
  const activeLocation = locations.find((l) => l.id === activeId);
  const activeCities = activeId ? indiaStateHighlights[activeId] : undefined;

  useEffect(() => {
    const hqEl = pathRefs.current[headquartersStateId];
    if (!hqEl) return;
    const box = hqEl.getBBox();
    // Nudge toward the north-east of Haryana's bounding box — Manesar sits
    // in that part of the state, closer to Gurugram/Delhi than the geometric centre.
    setHqPoint({ x: box.x + box.width * 0.62, y: box.y + box.height * 0.3 });
  }, []);

  function handleEnter(id: string) {
    setActiveId(id);
    if (id === headquartersStateId) {
      setActivePoint(null);
      return;
    }
    const el = pathRefs.current[id];
    if (el) {
      const box = el.getBBox();
      setActivePoint({ x: box.x + box.width / 2, y: box.y + box.height / 2 });
    }
  }

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
                ref={(el) => {
                  pathRefs.current[loc.id] = el;
                }}
                d={loc.path}
                onMouseEnter={() => handleEnter(loc.id)}
                onFocus={() => handleEnter(loc.id)}
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

          {hqPoint && activePoint && activeId !== headquartersStateId ? (
            <ConnectorLine key={activeId} from={hqPoint} to={activePoint} />
          ) : null}
          {hqPoint ? <HQMarker point={hqPoint} /> : null}
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
              Highlighted states show Icon Power&rsquo;s service locations, connected back to the Manesar
              headquarters. Hover or focus a state to see the cities covered.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
