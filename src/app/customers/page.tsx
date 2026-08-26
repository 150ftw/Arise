import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { domesticCustomers, globalCustomers } from "@/lib/data/customers";

export const metadata: Metadata = {
  title: "Customers",
  description: "Domestic and global customers of Icon Power Solutions across defence, telecom and industrial sectors.",
};

function CustomerList({ items }: { items: { name: string }[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((c) => (
        <div
          key={c.name}
          className="flex items-center border border-brand-line bg-white px-5 py-4 text-sm font-medium text-brand-navy-800"
        >
          {c.name}
        </div>
      ))}
    </div>
  );
}

export default function CustomersPage() {
  return (
    <>
      <PageHero
        eyebrow="Icon Customers"
        title="Trusted by defence, telecom and industrial leaders"
        description="From the Indian Army and DRDO to global defence primes — Icon Power Solutions builds for organizations where reliability is non-negotiable."
      />

      <section className="border-b border-brand-line bg-brand-paper py-4">
        <Container>
          <p className="text-xs leading-5 text-brand-steel-600">
            TODO(client): the source company profile displays customer logos. Publishing third-party trademarks needs
            explicit permission from each organization and from Icon Power — shown here as a wordmark list until
            approved logo assets are confirmed.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Domestic" title="Domestic customers" />
              <div className="mt-8">
                <CustomerList items={domesticCustomers} />
              </div>
            </div>
            <div>
              <SectionHeading eyebrow="Global" title="Global customers" />
              <div className="mt-8">
                <CustomerList items={globalCustomers} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner title="Join a growing list of critical-infrastructure partners" />
    </>
  );
}
