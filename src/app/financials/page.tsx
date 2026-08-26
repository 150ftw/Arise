import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { StatNumber } from "@/components/ui/StatNumber";
import { FinancialChart } from "@/components/financials/FinancialChart";
import { financialHighlights, financialHealth } from "@/lib/data/financials";

const latestYear = financialHealth[financialHealth.length - 1];

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
          <dl className="mt-10 grid grid-cols-3 divide-x divide-brand-line border border-brand-line bg-white">
            {[
              { label: `Revenue, FY ${latestYear.year}`, value: latestYear.revenue, prefix: "₹", suffix: "Cr", decimals: 0 },
              { label: `Net Profit, FY ${latestYear.year}`, value: latestYear.netProfit, prefix: "₹", suffix: "Cr", decimals: 1 },
              { label: `Tangible Networth, FY ${latestYear.year}`, value: latestYear.tangibleNetworth, prefix: "₹", suffix: "Cr", decimals: 1 },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 p-6">
                <dt className="font-mono text-2xl font-semibold text-brand-navy-900 sm:text-3xl">
                  <StatNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
                </dt>
                <dd className="text-xs leading-5 text-brand-steel-600">{stat.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6">
            <FinancialChart />
          </div>
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
