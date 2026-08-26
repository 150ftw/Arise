import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { company, heroStats } from "@/lib/data/company";

export function Hero() {
  return (
    <section className="bg-brand-navy-950">
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-6 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
          <span className="text-xs font-semibold tracking-[0.18em] text-brand-accent-400 uppercase">
            Since {company.established} &middot; {company.certification}
          </span>
          <h1 className="text-4xl leading-[1.08] font-semibold tracking-tight text-white sm:text-5xl">
            {company.tagline}
          </h1>
          <p className="max-w-lg text-base leading-7 text-white/65">
            Icon Power Solutions engineers and manufactures mission-critical power, rack and communication
            systems for defence, telecom and critical-infrastructure programs — {company.yearsExperience} years
            of design, manufacturing and delivery, PAN India and across six countries.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href="/capabilities">Explore Capabilities</Button>
            <Button href="/products" variant="outline-light">
              Browse Products
            </Button>
          </div>
        </div>

        <div className="relative h-72 lg:h-auto">
          <Image
            src="/images/products/hero-office-building.jpg"
            alt="Icon Power Solutions headquarters, IMT Manesar"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/40 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-brand-navy-950/10" />
        </div>
      </div>

      <div className="border-t border-white/10">
        <Container>
          <dl className="grid grid-cols-2 divide-x divide-y divide-white/10 sm:grid-cols-5 sm:divide-y-0">
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 px-6 py-6">
                <dt className="text-[11px] font-medium tracking-wide text-white/45 uppercase">{stat.label}</dt>
                <dd className="text-2xl font-semibold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}
