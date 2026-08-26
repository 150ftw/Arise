import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PillarGrid } from "@/components/solutions/PillarGrid";
import { solutionPillars } from "@/lib/data/solutions";

export function SolutionsPreview() {
  return (
    <section className="bg-brand-paper py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="System Integrator"
            title="Solutions for critical infrastructure"
            description="Security, communications, power and data-centre systems integrated for public safety, defence, banking, transport and utility programs."
          />
          <Button href="/solutions" variant="secondary" className="w-fit shrink-0">
            All Solutions
          </Button>
        </div>
        <div className="mt-10 bg-white">
          <PillarGrid pillars={solutionPillars} />
        </div>
      </Container>
    </section>
  );
}
