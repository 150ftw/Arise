"use client";

import { useState } from "react";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { CaseStudyModal } from "@/components/case-studies/CaseStudyModal";
import type { CaseStudy } from "@/lib/data/caseStudies";

const categories = [
  "All",
  "Defence & Aerospace",
  "Telecom & Energy",
  "Smart Cities & Security",
  "Rail & Transit",
] as const;

export function CaseStudiesExplorer({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const filtered =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.sector === activeCategory);

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-brand-line pb-6">
        {categories.map((cat) => {
          const count =
            cat === "All"
              ? caseStudies.length
              : caseStudies.filter((cs) => cs.sector === cat).length;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                activeCategory === cat
                  ? "bg-brand-navy-950 text-white shadow-sm"
                  : "bg-white text-brand-steel-600 hover:bg-brand-paper hover:text-brand-navy-900 border border-brand-line"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] font-mono ${
                  activeCategory === cat
                    ? "bg-white/20 text-white"
                    : "bg-brand-paper text-brand-steel-600"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Cards Grid */}
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((caseStudy) => (
          <CaseStudyCard
            key={caseStudy.id}
            caseStudy={caseStudy}
            onSelect={(cs) => setSelectedCaseStudy(cs)}
          />
        ))}
      </div>

      {/* Deep-Dive Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </div>
  );
}
