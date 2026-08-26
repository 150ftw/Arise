type FlowNode = {
  id: string;
  label: string;
  sublabel?: string;
  x: number;
  y: number;
  w?: number;
  h?: number;
  accent?: boolean;
};

type FlowEdge = {
  from: string;
  to: string;
  dashed?: boolean;
  label?: string;
};

export function FlowDiagram({
  nodes,
  edges,
  width,
  height,
}: {
  nodes: FlowNode[];
  edges: FlowEdge[];
  width: number;
  height: number;
}) {
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="mx-auto w-full max-w-4xl" role="img" aria-label="System flow diagram">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" className="fill-brand-accent-500" />
        </marker>
      </defs>

      {edges.map((edge, i) => {
        const from = byId[edge.from];
        const to = byId[edge.to];
        if (!from || !to) return null;
        const fw = from.w ?? 150;
        const fh = from.h ?? 52;
        const tw = to.w ?? 150;
        const th = to.h ?? 52;

        const fx = from.x + fw / 2;
        const fy = from.y + fh / 2;
        const tx = to.x + tw / 2;
        const ty = to.y + th / 2;

        return (
          <g key={i}>
            <line
              x1={fx}
              y1={fy}
              x2={tx}
              y2={ty}
              className="stroke-brand-steel-400"
              strokeWidth={1.4}
              strokeDasharray={edge.dashed ? "5 4" : undefined}
              markerEnd="url(#arrow)"
            />
          </g>
        );
      })}

      {nodes.map((node) => {
        const w = node.w ?? 150;
        const h = node.h ?? 52;
        return (
          <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
            <rect
              width={w}
              height={h}
              rx={2}
              className={node.accent ? "fill-brand-navy-900" : "fill-white stroke-brand-line"}
              strokeWidth={node.accent ? 0 : 1}
            />
            <text
              x={w / 2}
              y={node.sublabel ? h / 2 - 6 : h / 2 + 4}
              textAnchor="middle"
              className={`text-[11px] font-semibold ${node.accent ? "fill-white" : "fill-brand-navy-900"}`}
            >
              {node.label}
            </text>
            {node.sublabel ? (
              <text x={w / 2} y={h / 2 + 12} textAnchor="middle" className={`text-[9px] ${node.accent ? "fill-white/70" : "fill-brand-steel-600"}`}>
                {node.sublabel}
              </text>
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}
