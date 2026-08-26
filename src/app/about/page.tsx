import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { StatCard } from "@/components/about/StatCard";
import { company, strategicPillars } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "About",
  description: `${company.shortName} — state-of-the-art infrastructure, ${company.yearsExperience} years of experience and ${company.certification}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company Overview"
        title="State-of-the-art infrastructure, built over 25 years"
        description="Advanced technology and a highly experienced workforce, spanning design, manufacturing and delivery centres with domestic and global sales presence."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div className="flex flex-col gap-4">
              <SectionHeading
                eyebrow="Who we are"
                title={`${company.shortName}, since ${company.established}`}
                description="Power electronics, electrical and mechanical designing and manufacturing, with two design, manufacturing and delivery centres and a domestic and global sales presence."
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <StatCard value={company.employeeCount} label="Employees" />
              <StatCard value={company.manufacturingShare} label="In manufacturing" />
              <StatCard value={company.certification} label="Quality certification" />
              <StatCard value={company.serviceSupport} label="Service coverage" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-brand-paper py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Strategic pillars" title="Built for backward integration and scale" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {strategicPillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-3 border border-brand-line bg-white p-6">
                  <span className="text-sm font-mono font-semibold text-brand-accent-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-semibold text-brand-navy-900">{pillar.title}</h3>
                  <p className="text-sm leading-6 text-brand-steel-600">{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
