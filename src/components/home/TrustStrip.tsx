import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { domesticCustomers, globalCustomers } from "@/lib/data/customers";

const names = [...domesticCustomers, ...globalCustomers].map((c) => c.name);
const track = [...names, ...names];

export function TrustStrip() {
  return (
    <section className="border-y border-brand-line bg-brand-paper py-14">
      <Container>
        <div className="flex items-center gap-2.5">
          <span className="h-[3px] w-6 bg-brand-accent-500" />
          <p className="text-xs font-semibold tracking-[0.14em] text-brand-steel-600 uppercase">
            On the grid with defence, telecom and critical infrastructure
          </p>
        </div>
      </Container>

      <div className="relative mt-7 overflow-hidden border-y border-brand-line">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-brand-paper to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-brand-paper to-transparent sm:w-28" />

        <div className="rail-track flex w-max items-stretch">
          {track.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex shrink-0 items-center gap-3 border-r border-brand-line bg-white px-6 py-4"
            >
              <span
                className="rail-dot h-1.5 w-1.5 shrink-0 rounded-full bg-brand-steel-400"
                style={{ animationDelay: `${(i % names.length) * 0.18}s` }}
              />
              <span className="text-sm font-semibold whitespace-nowrap text-brand-navy-800">{name}</span>
            </div>
          ))}
        </div>
      </div>

      <Container>
        <Link
          href="/customers"
          className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent-600 hover:text-brand-accent-500"
        >
          View all customers
          <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </Container>
    </section>
  );
}
