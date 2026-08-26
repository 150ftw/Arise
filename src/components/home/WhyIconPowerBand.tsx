import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { indiaRegionBoxes, globalPresenceCountries } from "@/lib/data/presence";
import { financialHealth } from "@/lib/data/financials";

const cityCount = new Set(indiaRegionBoxes.flatMap((box) => box.cities)).size;
const latestYear = financialHealth[financialHealth.length - 1];

const stats = [
  { value: `${cityCount}+`, label: "Cities served across India" },
  { value: String(globalPresenceCountries.length), label: "Countries of operation" },
  { value: `₹${latestYear.revenue}Cr`, label: `Revenue, FY ${latestYear.year}` },
  { value: "₹48Cr", label: "Working capital finance limit (Kotak Mahindra Bank)" },
  { value: "0", label: "Financial defaults in company history" },
  { value: "25+", label: "Years of design & manufacturing" },
];

export function WhyIconPowerBand() {
  return (
    <section className="bg-brand-navy-950 py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            tone="light"
            eyebrow="Why Icon Power"
            title="PAN India reach, financially stable, zero defaults"
            description="From Manesar, Icon Power Solutions serves defence, telecom and infrastructure customers across every region of India and six countries."
          />
          <div className="flex shrink-0 gap-3">
            <Button href="/presence" variant="outline-light" className="w-fit">
              Presence
            </Button>
            <Button href="/financials" variant="outline-light" className="w-fit">
              Financials
            </Button>
          </div>
        </div>

        <Reveal delay={0.1} className="mt-10">
          <dl className="grid grid-cols-2 divide-x divide-y divide-white/10 border border-white/10 sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2 p-6">
                <dt className="text-3xl font-semibold text-white">{stat.value}</dt>
                <dd className="text-xs leading-5 text-white/55">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
