import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { company, strategicPillars } from "@/lib/data/company";

export function AboutSnapshot() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Who we are"
              title={`${company.shortName}, since ${company.established}`}
              description="Power electronics, electrical and mechanical designing and manufacturing, with two design, manufacturing and delivery centres and a domestic and global sales presence. State-of-the-art infrastructure, advanced technology and a highly experienced workforce — 50% of our 150+ employees work directly in manufacturing."
            />
            <Button href="/about" variant="secondary" className="w-fit">
              About Icon Power
            </Button>
          </div>

          <div className="grid gap-px overflow-hidden border border-brand-line bg-brand-line sm:grid-cols-2">
            {strategicPillars.map((pillar, i) => (
              <div key={pillar.title} className="flex flex-col gap-2 bg-white p-6">
                <span className="text-sm font-mono font-semibold text-brand-accent-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-semibold text-brand-navy-900">{pillar.title}</h3>
                <p className="text-sm leading-6 text-brand-steel-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
