import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { StatNumber } from "@/components/ui/StatNumber";
import { company, heroStats } from "@/lib/data/company";

export function Hero() {
  return (
    <section className="bg-brand-navy-950">
      <div className="grid lg:grid-cols-2">
        <div className="relative flex flex-col justify-center gap-6 overflow-hidden px-5 py-14 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_620px_420px_at_20%_45%,rgba(6,26,45,0.75),transparent_70%)]" />

          <div className="relative flex flex-col gap-5 sm:gap-6">
            <span className="text-xs font-semibold tracking-[0.18em] text-brand-accent-400 uppercase">
              Since {company.established} &middot; {company.certification}
            </span>
            <h1 className="text-3xl leading-tight font-semibold tracking-tight text-white sm:text-5xl sm:leading-[1.08]">
              {company.tagline}
            </h1>
            <p className="max-w-lg text-sm leading-relaxed text-white/70 sm:text-base sm:leading-7">
              Icon Power Solutions engineers and manufactures mission-critical power, rack and communication
              systems for defence, telecom and critical-infrastructure programs — {company.yearsExperience} years
              of design, manufacturing and delivery, PAN India and across six countries.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <Button href="/capabilities" className="w-full justify-center sm:w-auto">
                Explore Capabilities
              </Button>
              <Button href="/products" variant="outline-light" className="w-full justify-center sm:w-auto">
                Browse Products
              </Button>
            </div>
          </div>
        </div>

        <div className="relative h-64 sm:h-80 lg:h-auto">
          <Image
            src="/images/products/hero-office-building.jpg"
            alt="Icon Power Solutions headquarters, IMT Manesar"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/50 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-brand-navy-950/10" />
        </div>
      </div>

      <div className="border-t border-white/10">
        <Container>
          <dl className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-3 lg:grid-cols-5">
            {heroStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col gap-1 bg-brand-navy-950 p-4 sm:p-6 ${
                  i === heroStats.length - 1 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <dt className="text-[10px] font-medium tracking-wide text-white/50 uppercase sm:text-[11px]">
                  {stat.label}
                </dt>
                <dd className="font-mono text-xl font-semibold text-white sm:text-2xl">
                  {"number" in stat ? <StatNumber value={stat.number} suffix={stat.suffix} /> : stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}
