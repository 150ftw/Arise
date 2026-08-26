import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { domesticCustomers, globalCustomers, type Customer } from "@/lib/data/customers";

const row1Items = [...domesticCustomers, ...domesticCustomers];
const row2Items = [
  ...globalCustomers,
  ...domesticCustomers.slice().reverse(),
  ...globalCustomers,
  ...domesticCustomers.slice().reverse(),
];

function CustomerCard({ customer }: { customer: Customer }) {
  return (
    <div className="w-80 shrink-0 rounded-2xl border border-brand-line/80 bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-accent-400/40 hover:shadow-md sm:w-88">
      <div className="flex items-center gap-3.5">
        <div
          className={`h-11 w-11 shrink-0 rounded-full bg-gradient-to-br ${customer.gradient} flex items-center justify-center text-xs font-bold text-white shadow-inner`}
        >
          {customer.name.slice(0, 2).toUpperCase()}
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="truncate text-sm font-semibold text-brand-navy-900" title={customer.name}>
            {customer.name}
          </h4>
          <p className="truncate text-xs font-medium text-brand-steel-600/80">{customer.handle}</p>
        </div>
      </div>
      <p className="mt-3.5 line-clamp-2 text-xs leading-relaxed text-brand-steel-600">
        {customer.scope}
      </p>
    </div>
  );
}

export function TrustStrip() {
  return (
    <section className="relative overflow-hidden border-y border-brand-line bg-brand-paper py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-[3px] w-6 bg-brand-accent-500" />
              <p className="text-xs font-semibold tracking-[0.14em] text-brand-steel-600 uppercase">
                Trusted by Industry Leaders
              </p>
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-brand-navy-950 sm:text-3xl">
              On the grid with defence, telecom & critical infra
            </h2>
          </div>
          <Link
            href="/customers"
            className="group inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-brand-accent-600 hover:text-brand-accent-500 uppercase"
          >
            <span>All customers</span>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </Container>

      <div className="relative mt-10 space-y-4">
        {/* Left and right gradient masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-paper via-brand-paper/80 to-transparent sm:w-36" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-paper via-brand-paper/80 to-transparent sm:w-36" />

        {/* Row 1 - Forward */}
        <div className="flex overflow-hidden">
          <div className="marquee-forward marquee-track flex shrink-0 items-center gap-4 py-1">
            {row1Items.map((c, i) => (
              <CustomerCard key={`row1-${c.name}-${i}`} customer={c} />
            ))}
          </div>
        </div>

        {/* Row 2 - Reverse */}
        <div className="flex overflow-hidden">
          <div className="marquee-reverse marquee-track flex shrink-0 items-center gap-4 py-1">
            {row2Items.map((c, i) => (
              <CustomerCard key={`row2-${c.name}-${i}`} customer={c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
