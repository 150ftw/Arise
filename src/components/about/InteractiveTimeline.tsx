"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle } from "lucide-react";
import { companyTimeline } from "@/lib/data/timelineAndTour";

export function InteractiveTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = companyTimeline[activeIndex];

  return (
    <div className="rounded-2xl border border-brand-line bg-white p-6 shadow-sm sm:p-8">
      {/* Top Year Stepper */}
      <div className="relative">
        {/* Connecting track line */}
        <div className="absolute top-5 left-6 right-6 hidden h-0.5 bg-brand-line sm:block" />
        <div
          className="absolute top-5 left-6 hidden h-0.5 bg-brand-accent-500 transition-all duration-300 sm:block"
          style={{
            width: `${(activeIndex / (companyTimeline.length - 1)) * 88}%`,
          }}
        />

        <div className="grid grid-cols-3 gap-2 sm:flex sm:justify-between">
          {companyTimeline.map((item, index) => {
            const isActive = index === activeIndex;
            const isPast = index < activeIndex;
            return (
              <button
                key={item.year}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative flex flex-col items-center gap-2 text-center"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-mono text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? "border-brand-navy-950 bg-brand-navy-950 text-white shadow-md scale-110"
                      : isPast
                      ? "border-brand-accent-500 bg-brand-accent-50 text-brand-accent-700"
                      : "border-brand-line bg-white text-brand-steel-600 hover:border-brand-steel-400"
                  }`}
                >
                  {item.year.replace("+", "")}
                </div>
                <span
                  className={`text-xs font-semibold tracking-wide transition-colors ${
                    isActive
                      ? "text-brand-navy-950"
                      : "text-brand-steel-600/70 group-hover:text-brand-navy-900"
                  }`}
                >
                  {item.category}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Milestone Card */}
      <div className="mt-8 rounded-xl border border-brand-line bg-brand-paper p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-3xl font-bold tracking-tight text-brand-accent-600">
              {current.year}
            </span>
            <span className="rounded-full bg-brand-navy-950 px-3 py-1 font-mono text-[10px] font-semibold text-brand-accent-400 uppercase">
              {current.badge}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={activeIndex === 0}
              onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
              aria-label="Previous milestone"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-line bg-white text-brand-navy-900 transition-colors hover:bg-brand-paper disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="font-mono text-xs text-brand-steel-600">
              {activeIndex + 1} / {companyTimeline.length}
            </span>
            <button
              type="button"
              disabled={activeIndex === companyTimeline.length - 1}
              onClick={() => setActiveIndex((prev) => Math.min(companyTimeline.length - 1, prev + 1))}
              aria-label="Next milestone"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-line bg-white text-brand-navy-900 transition-colors hover:bg-brand-paper disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <h3 className="mt-4 text-xl font-bold text-brand-navy-950 sm:text-2xl">
          {current.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-brand-steel-600">
          {current.description}
        </p>

        <div className="mt-6 border-t border-brand-line pt-5">
          <h4 className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-brand-navy-900 uppercase">
            <Sparkles className="h-3.5 w-3.5 text-brand-accent-600" />
            Key Achievements & Capabilities
          </h4>
          <ul className="mt-3 grid gap-2.5 sm:grid-cols-3">
            {current.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2 rounded-lg border border-brand-line/60 bg-white p-3 text-xs leading-5 text-brand-steel-600"
              >
                <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-accent-600" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
