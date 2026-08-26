import Image from "next/image";
import { ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { StatNumber } from "@/components/ui/StatNumber";
import { company, heroStats } from "@/lib/data/company";

export function Hero() {
  return (
    <section className="bg-brand-navy-950">
      <div className="grid lg:grid-cols-2">
        <div className="relative flex flex-col justify-center gap-6 overflow-hidden px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_620px_420px_at_20%_45%,rgba(6,26,45,0.75),transparent_70%)]" />

          <div className="relative flex flex-col gap-6">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 backdrop-blur-md w-fit">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[11px] font-medium tracking-wider text-white/80 uppercase">
                Facility Operational &middot; Since {company.established} &middot; {company.certification}
              </span>
            </div>

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
        </div>

        <div className="relative h-80 lg:h-auto min-h-[360px] overflow-hidden">
          <Image
            src="/images/products/hero-office-building.jpg"
            alt="Icon Power Solutions headquarters, IMT Manesar"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/60 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-brand-navy-950/20" />

          {/* Floating Glassmorphic Telemetry Chips */}
          <div className="absolute top-6 right-6 z-10 hidden sm:flex items-center gap-3 rounded-xl border border-white/20 bg-brand-navy-950/80 p-3.5 shadow-2xl backdrop-blur-md">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-accent-500/20 text-brand-accent-400">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] font-medium tracking-wide text-white/50 uppercase">Standards</p>
              <p className="text-xs font-semibold text-white">MIL-STD & ISO 9001:2015</p>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 z-10 hidden sm:flex items-center gap-3 rounded-xl border border-white/20 bg-brand-navy-950/80 p-3.5 shadow-2xl backdrop-blur-md">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] font-medium tracking-wide text-white/50 uppercase">Grid Reliability</p>
              <p className="text-xs font-semibold text-white">99.999% Mission Uptime</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <Container>
          <dl className="grid grid-cols-2 divide-x divide-y divide-white/10 sm:grid-cols-5 sm:divide-y-0">
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 px-6 py-6">
                <dt className="text-[11px] font-medium tracking-wide text-white/45 uppercase">{stat.label}</dt>
                <dd className="font-mono text-2xl font-semibold text-white">
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
