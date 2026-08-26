import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { FinancialChart } from "@/components/financials/FinancialChart";
import { financialHighlights } from "@/lib/data/financials";

export const metadata: Metadata = {
  title: "Why Icon Power",
  description: "Financial health, banking relationships and repayment history for Icon Power Solutions Pvt. Ltd.",
};

export default function FinancialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Icon Power"
        title="A financially stable manufacturing partner"
        description="Four years of consistent revenue growth, backed by a clean banking relationship and zero financial defaults."
      />

      <section className="bg-brand-paper py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Financial health"
            title="Revenue, net profit and tangible networth — FY22-23 to FY25-26"
            description="Figures approximated from the company profile; to be confirmed against audited statements before external distribution."
          />
          <Reveal className="mt-10">
            <FinancialChart />
          </Reveal>
          <p className="mt-3 text-xs text-brand-steel-600">
            TODO(client): confirm exact revenue / net profit / tangible networth figures for each fiscal year before publishing.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {financialHighlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-2 border border-brand-line bg-brand-paper p-8">
                  <h3 className="text-lg font-semibold text-brand-navy-900">{item.title}</h3>
                  <p className="text-sm leading-6 text-brand-steel-600">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner title="Evaluating Icon Power as a supplier?" description="Request our financial statements and banking references directly." />
    </>
  );
}
