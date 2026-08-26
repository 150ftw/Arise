"use client";

import Image from "next/image";
import type { CaseStudy } from "@/lib/data/caseStudies";

export function CaseStudyCard({
  caseStudy,
  onSelect,
}: {
  caseStudy: CaseStudy;
  onSelect: (cs: CaseStudy) => void;
}) {
  return (
    <article className="group flex flex-col justify-between overflow-hidden border border-brand-line bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-accent-500/50 hover:shadow-md">
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-brand-paper">
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/70 via-transparent to-transparent" />
          <div className="absolute top-3 left-3">
            <span className="rounded-full border border-white/20 bg-brand-navy-950/80 px-3 py-1 font-mono text-[10px] font-semibold text-brand-accent-400 backdrop-blur-sm uppercase">
              {caseStudy.sector}
            </span>
          </div>
          <div className="absolute right-3 bottom-3 left-3">
            <p className="text-[11px] font-medium text-white/80">{caseStudy.location}</p>
          </div>
        </div>

        <div className="p-6">
          <p className="text-[11px] font-semibold tracking-wide text-brand-accent-600 uppercase">
            Client: {caseStudy.client}
          </p>
          <h3 className="mt-2 text-lg font-semibold leading-snug text-brand-navy-950 transition-colors group-hover:text-brand-accent-600">
            {caseStudy.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-brand-steel-600">
            {caseStudy.summary}
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3 border-t border-brand-line pt-4">
            {caseStudy.impact.slice(0, 2).map((imp) => (
              <div key={imp.label} className="flex flex-col">
                <span className="font-mono text-base font-bold text-brand-navy-950">{imp.metric}</span>
                <span className="text-[10px] text-brand-steel-600 line-clamp-1">{imp.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-brand-line bg-brand-paper/50 px-6 py-3.5">
        <button
          type="button"
          onClick={() => onSelect(caseStudy)}
          className="inline-flex w-full items-center justify-between text-xs font-semibold tracking-wide text-brand-navy-900 transition-colors group-hover:text-brand-accent-600 uppercase"
        >
          <span>View Mission Brief</span>
          <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </article>
  );
}
