const SIZE = 520;
const CENTER = SIZE / 2;
const RADIUS = 205;
const NODE_R = 62;

export function HubDiagram({
  centerLabel,
  centerSublabel,
  items,
  tone = "dark",
}: {
  centerLabel: string;
  centerSublabel?: string;
  items: string[];
  tone?: "dark" | "light";
}) {
  const nodeFill = tone === "dark" ? "fill-brand-navy-800" : "fill-white";
  const nodeStroke = tone === "dark" ? "stroke-white/15" : "stroke-brand-line";
  const nodeText = tone === "dark" ? "fill-white" : "fill-brand-navy-900";
  const lineStroke = tone === "dark" ? "stroke-white/15" : "stroke-brand-line";
  const centerFill = tone === "dark" ? "fill-brand-accent-500" : "fill-brand-navy-900";
  const centerText = tone === "dark" ? "fill-brand-navy-950" : "fill-white";

  const positions = items.map((label, i) => {
    const angle = (i / items.length) * Math.PI * 2 - Math.PI / 2;
    const x = CENTER + RADIUS * Math.cos(angle);
    const y = CENTER + RADIUS * Math.sin(angle);
    return { label, x, y };
  });

  return (
    <div className="w-full">
      {/* Mobile-Friendly Grid (< sm screens) */}
      <div className="block sm:hidden">
        <div className="rounded-xl border border-brand-accent-500/30 bg-brand-navy-900 p-5 text-center shadow-lg">
          <span className="rounded-full bg-brand-accent-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-brand-accent-400 uppercase">
            Focus Domain
          </span>
          <h4 className="mt-2 text-xl font-bold text-white">{centerLabel}</h4>
          {centerSublabel ? (
            <p className="text-xs text-brand-accent-300">{centerSublabel}</p>
          ) : null}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          {items.map((item, i) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-brand-navy-900/60 p-3 text-xs font-semibold text-white/90"
            >
              <span className="font-mono text-[10px] text-brand-accent-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="truncate">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop/Tablet Radial SVG Diagram (>= sm screens) */}
      <div className="hidden sm:block">
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="mx-auto w-full max-w-lg"
          role="img"
          aria-label={`${centerLabel} diagram`}
        >
          {positions.map((p, i) => (
            <line
              key={`line-${i}`}
              x1={CENTER}
              y1={CENTER}
              x2={p.x}
              y2={p.y}
              className={lineStroke}
              strokeWidth={1.5}
            />
          ))}

          <circle cx={CENTER} cy={CENTER} r={78} className={centerFill} />
          <text
            x={CENTER}
            y={CENTER - 6}
            textAnchor="middle"
            className={`${centerText} text-[15px] font-semibold`}
          >
            {centerLabel}
          </text>
          {centerSublabel ? (
            <text
              x={CENTER}
              y={CENTER + 14}
              textAnchor="middle"
              className={`${centerText} text-[10px] opacity-80`}
            >
              {centerSublabel}
            </text>
          ) : null}

          {positions.map((p, i) => {
            const words = p.label.split(" ");
            return (
              <g key={i}>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={NODE_R}
                  className={`${nodeFill} ${nodeStroke}`}
                  strokeWidth={1}
                />
                <text
                  x={p.x}
                  y={p.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={`${nodeText} text-[11px] font-medium`}
                >
                  {words.map((w, wi) => (
                    <tspan key={wi} x={p.x} dy={wi === 0 ? -((words.length - 1) * 6) : 12}>
                      {w}
                    </tspan>
                  ))}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
