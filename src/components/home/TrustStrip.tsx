import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { domesticCustomers, globalCustomers } from "@/lib/data/customers";

export function TrustStrip() {
  const featured = [...domesticCustomers.slice(0, 6), ...globalCustomers.slice(0, 3)];

  return (
    <section className="border-y border-brand-line bg-brand-paper py-14">
      <Container>
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold tracking-[0.14em] text-brand-steel-600 uppercase">
            Trusted across defence, telecom and critical infrastructure
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {featured.map((c) => (
              <span key={c.name} className="text-base font-semibold text-brand-navy-800/70">
                {c.name}
              </span>
            ))}
          </div>
          <Link href="/customers" className="text-sm font-semibold text-brand-accent-600 hover:text-brand-accent-500">
            View all customers →
          </Link>
        </div>
      </Container>
    </section>
  );
}
