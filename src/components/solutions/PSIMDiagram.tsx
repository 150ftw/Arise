const WIDTH = 760;
const HEIGHT = 460;
const CENTER_X = WIDTH / 2;
const CENTER_Y = HEIGHT / 2;
const COL_X = 92;
const NODE_W = 168;
const NODE_H = 30;

function nodesY(count: number) {
  const gap = HEIGHT / (count + 1);
  return Array.from({ length: count }, (_, i) => gap * (i + 1));
}

export function PSIMDiagram({ inputs, outputs }: { inputs: string[]; outputs: string[] }) {
  const inputYs = nodesY(inputs.length);
  const outputYs = nodesY(outputs.length);

  return (
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="mx-auto w-full max-w-3xl" role="img" aria-label="PSIM situational awareness diagram">
      {inputYs.map((y, i) => (
        <path
          key={`in-${i}`}
          d={`M ${COL_X + NODE_W} ${y} C ${CENTER_X - 60} ${y}, ${CENTER_X - 60} ${CENTER_Y}, ${CENTER_X - 58} ${CENTER_Y}`}
          fill="none"
          className="stroke-brand-line"
          strokeWidth={1.2}
        />
      ))}
      {outputYs.map((y, i) => (
        <path
          key={`out-${i}`}
          d={`M ${WIDTH - COL_X - NODE_W} ${y} C ${CENTER_X + 60} ${y}, ${CENTER_X + 60} ${CENTER_Y}, ${CENTER_X + 58} ${CENTER_Y}`}
          fill="none"
          className="stroke-brand-line"
          strokeWidth={1.2}
        />
      ))}

      {inputs.map((label, i) => (
        <g key={label} transform={`translate(${COL_X}, ${inputYs[i] - NODE_H / 2})`}>
          <rect width={NODE_W} height={NODE_H} rx={2} className="fill-white stroke-brand-line" strokeWidth={1} />
          <text x={NODE_W / 2} y={NODE_H / 2 + 4} textAnchor="middle" className="fill-brand-navy-800 text-[11px] font-medium">
            {label}
          </text>
        </g>
      ))}

      {outputs.map((label, i) => (
        <g key={label} transform={`translate(${WIDTH - COL_X - NODE_W}, ${outputYs[i] - NODE_H / 2})`}>
          <rect width={NODE_W} height={NODE_H} rx={2} className="fill-white stroke-brand-line" strokeWidth={1} />
          <text x={NODE_W / 2} y={NODE_H / 2 + 4} textAnchor="middle" className="fill-brand-navy-800 text-[11px] font-medium">
            {label}
          </text>
        </g>
      ))}

      <circle cx={CENTER_X} cy={CENTER_Y} r={54} className="fill-brand-navy-900" />
      <text x={CENTER_X} y={CENTER_Y - 6} textAnchor="middle" className="fill-brand-accent-400 text-[13px] font-bold">
        SAM
      </text>
      <text x={CENTER_X} y={CENTER_Y + 12} textAnchor="middle" className="fill-white/70 text-[8px]">
        <tspan x={CENTER_X} dy={0}>
          Situational
        </tspan>
        <tspan x={CENTER_X} dy={10}>
          Awareness Matters
        </tspan>
      </text>
    </svg>
  );
}
