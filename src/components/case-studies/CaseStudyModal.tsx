"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle2, ShieldCheck, MapPin, Building2 } from "lucide-react";
import type { CaseStudy } from "@/lib/data/caseStudies";

export function CaseStudyModal({
  caseStudy,
  onClose,
}: {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-brand-navy-950/80 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-brand-line bg-white shadow-2xl">
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-brand-line bg-brand-navy-950 px-6 py-4 text-white">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-brand-accent-500/20 px-3 py-0.5 font-mono text-[11px] font-semibold text-brand-accent-400 uppercase">
              {caseStudy.sector}
            </span>
            <span className="text-xs text-white/60">Mission Case Brief #{caseStudy.id.toUpperCase()}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left Column: Narrative */}
            <div className="space-y-6">
              <div>
                <h2 id="case-study-title" className="text-2xl font-bold tracking-tight text-brand-navy-950 sm:text-3xl">
                  {caseStudy.title}
                </h2>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-brand-steel-600">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Building2 className="h-3.5 w-3.5 text-brand-accent-600" />
                    {caseStudy.client}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-brand-accent-600" />
                    {caseStudy.location}
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-brand-line bg-brand-paper p-5">
                <h3 className="text-xs font-semibold tracking-wide text-brand-navy-900 uppercase">
                  Project Summary
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-steel-600">
                  {caseStudy.summary}
                </p>
              </div>

              <div className="space-y-4">
                <div className="border-l-2 border-brand-accent-500 pl-4">
                  <h4 className="text-xs font-bold text-brand-navy-950 uppercase">Operational Challenge</h4>
                  <p className="mt-1 text-sm leading-relaxed text-brand-steel-600">{caseStudy.challenge}</p>
                </div>
                <div className="border-l-2 border-emerald-500 pl-4">
                  <h4 className="text-xs font-bold text-brand-navy-950 uppercase">Icon Power Solution</h4>
                  <p className="mt-1 text-sm leading-relaxed text-brand-steel-600">{caseStudy.solution}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold tracking-wide text-brand-navy-900 uppercase">
                  Technologies & Standards
                </h4>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {caseStudy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-brand-line bg-white px-2.5 py-1 text-xs font-medium text-brand-navy-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Image & Technical Specs */}
            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-brand-line bg-brand-paper">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  fill
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Impact Metrics */}
              <div className="rounded-xl border border-brand-accent-500/30 bg-brand-accent-500/5 p-5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-brand-accent-600" />
                  <h4 className="text-xs font-bold tracking-wide text-brand-navy-950 uppercase">
                    Validated Mission Results
                  </h4>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  {caseStudy.impact.map((imp) => (
                    <div key={imp.label} className="rounded-lg bg-white p-3 shadow-2xs">
                      <p className="font-mono text-lg font-bold text-brand-accent-600">{imp.metric}</p>
                      <p className="mt-1 text-[10px] leading-tight text-brand-steel-600">{imp.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="rounded-xl border border-brand-line bg-brand-paper p-5">
                <h4 className="text-xs font-bold tracking-wide text-brand-navy-900 uppercase">
                  Technical Specifications
                </h4>
                <dl className="mt-3 divide-y divide-brand-line text-xs">
                  {caseStudy.specifications.map((spec) => (
                    <div key={spec.label} className="flex items-center justify-between py-2">
                      <dt className="font-medium text-brand-steel-600">{spec.label}</dt>
                      <dd className="font-mono font-semibold text-brand-navy-900">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-brand-line bg-brand-paper px-6 py-4">
          <div className="flex items-center gap-2 text-xs text-brand-steel-600">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span>AS9100D & ISO 9001 Certified Deployment</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-brand-steel-600 hover:text-brand-navy-900"
            >
              Close
            </button>
            <a
              href="/contact"
              className="rounded-md bg-brand-navy-950 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-navy-800"
            >
              Discuss Similar Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
