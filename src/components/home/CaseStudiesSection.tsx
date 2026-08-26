"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { CaseStudyModal } from "@/components/case-studies/CaseStudyModal";
import { caseStudies, type CaseStudy } from "@/lib/data/caseStudies";

export function CaseStudiesSection() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const featuredCaseStudies = caseStudies.slice(0, 3);

  return (
    <section className="border-t border-brand-line bg-white py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Case Studies"
            title="Field-proven in the most demanding environments"
            description="Explore real-world deployments engineered for extreme temperatures, maritime naval shock, and zero-fail Tier-III data centers."
          />
          <Button href="/case-studies" variant="secondary" className="w-fit shrink-0">
            All Case Studies
          </Button>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCaseStudies.map((cs) => (
            <CaseStudyCard
              key={cs.id}
              caseStudy={cs}
              onSelect={(item) => setSelectedCaseStudy(item)}
            />
          ))}
        </div>
      </Container>

      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
}
