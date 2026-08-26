import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { CaseStudiesExplorer } from "@/components/case-studies/CaseStudiesExplorer";
import { caseStudies } from "@/lib/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies & Mission Deployments",
  description:
    "Explore real-world engineering case studies of Icon Power Solutions across high-altitude defense, submarine naval power, telecom storage, and Tier-III data centers.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Mission Deployments"
        title="Field-proven engineering across mission-critical sectors"
        description="From the sub-zero peaks of Ladakh to subsea naval systems and nationwide telecom networks — explore how Icon Power Solutions solves high-stakes power and infrastructure challenges."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <CaseStudiesExplorer caseStudies={caseStudies} />
        </Container>
      </section>

      <CtaBanner title="Have a mission-critical power or rack requirement?" />
    </>
  );
}
