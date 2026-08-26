"use client";

import { useState } from "react";

type Node = { label: string; description: string };

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

export function PSIMDiagram({ inputs, outputs }: { inputs: Node[]; outputs: Node[] }) {
  const [active, setActive] = useState<{ side: "in" | "out"; index: number } | null>(null);
  const inputYs = nodesY(inputs.length);
  const outputYs = nodesY(outputs.length);
  const activeNode = active ? (active.side === "in" ? inputs[active.index] : outputs[active.index]) : null;

  return (
    <div className="flex flex-col items-center gap-6">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="mx-auto w-full max-w-3xl"
        role="img"
        aria-label="PSIM situational awareness diagram — hover a subsystem for details"
      >
        {inputYs.map((y, i) => {
          const isActive = active?.side === "in" && active.index === i;
          const isDimmed = active !== null && !isActive;
          return (
            <path
              key={`in-${i}`}
              d={`M ${COL_X + NODE_W} ${y} C ${CENTER_X - 60} ${y}, ${CENTER_X - 60} ${CENTER_Y}, ${CENTER_X - 58} ${CENTER_Y}`}
              fill="none"
              stroke={isActive ? "#16AFE2" : "#e2e8f0"}
              strokeWidth={isActive ? 2.4 : 1.2}
              opacity={isDimmed ? 0.35 : 1}
              style={{ transition: "all 200ms ease-out" }}
            />
          );
        })}
        {outputYs.map((y, i) => {
          const isActive = active?.side === "out" && active.index === i;
          const isDimmed = active !== null && !isActive;
          return (
            <path
              key={`out-${i}`}
              d={`M ${WIDTH - COL_X - NODE_W} ${y} C ${CENTER_X + 60} ${y}, ${CENTER_X + 60} ${CENTER_Y}, ${CENTER_X + 58} ${CENTER_Y}`}
              fill="none"
              stroke={isActive ? "#C4703A" : "#e2e8f0"}
              strokeWidth={isActive ? 2.4 : 1.2}
              opacity={isDimmed ? 0.35 : 1}
              style={{ transition: "all 200ms ease-out" }}
            />
          );
        })}

        {inputs.map((node, i) => {
          const isActive = active?.side === "in" && active.index === i;
          return (
            <g
              key={node.label}
              transform={`translate(${COL_X}, ${inputYs[i] - NODE_H / 2})`}
              onMouseEnter={() => setActive({ side: "in", index: i })}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive({ side: "in", index: i })}
              onBlur={() => setActive(null)}
              tabIndex={0}
              role="button"
              aria-label={node.label}
              className="cursor-default outline-none"
            >
              <rect
                width={NODE_W}
                height={NODE_H}
                rx={2}
                fill="#ffffff"
                stroke={isActive ? "#16AFE2" : "#e2e8f0"}
                strokeWidth={isActive ? 1.6 : 1}
                style={{ transition: "stroke 200ms ease-out" }}
              />
              <text x={NODE_W / 2} y={NODE_H / 2 + 4} textAnchor="middle" className="fill-brand-navy-800 text-[11px] font-medium">
                {node.label}
              </text>
            </g>
          );
        })}

        {outputs.map((node, i) => {
          const isActive = active?.side === "out" && active.index === i;
          return (
            <g
              key={node.label}
              transform={`translate(${WIDTH - COL_X - NODE_W}, ${outputYs[i] - NODE_H / 2})`}
              onMouseEnter={() => setActive({ side: "out", index: i })}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive({ side: "out", index: i })}
              onBlur={() => setActive(null)}
              tabIndex={0}
              role="button"
              aria-label={node.label}
              className="cursor-default outline-none"
            >
              <rect
                width={NODE_W}
                height={NODE_H}
                rx={2}
                fill="#ffffff"
                stroke={isActive ? "#C4703A" : "#e2e8f0"}
                strokeWidth={isActive ? 1.6 : 1}
                style={{ transition: "stroke 200ms ease-out" }}
              />
              <text x={NODE_W / 2} y={NODE_H / 2 + 4} textAnchor="middle" className="fill-brand-navy-800 text-[11px] font-medium">
                {node.label}
              </text>
            </g>
          );
        })}

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

      <div className="flex h-14 max-w-xl items-center justify-center px-6 text-center">
        {activeNode ? (
          <p className="text-sm leading-6 text-white/75">
            <span className="font-semibold text-white">{activeNode.label}</span> — {activeNode.description}
          </p>
        ) : (
          <p className="font-mono text-xs tracking-wide text-white/35 uppercase">Hover a subsystem for details</p>
        )}
      </div>
    </div>
  );
}
