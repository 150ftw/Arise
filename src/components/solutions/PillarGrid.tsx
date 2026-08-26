import Link from "next/link";
import {
  ShieldCheck,
  Phone,
  Zap,
  Sun,
  Network,
  PlugZap,
  Video,
  Server,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import type { SolutionPillar } from "@/lib/data/solutions";

const icons: Record<string, LucideIcon> = {
  "security-surveillance": ShieldCheck,
  "voice-data": Phone,
  "surge-protection": Zap,
  "solar-power": Sun,
  networking: Network,
  "power-management": PlugZap,
  "video-conference": Video,
  "data-centre": Server,
};

export function PillarGrid({ pillars }: { pillars: SolutionPillar[] }) {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden border border-brand-line bg-brand-line sm:grid-cols-2 lg:grid-cols-4">
      {pillars.map((pillar, i) => {
        const Icon = icons[pillar.slug] ?? Server;
        return (
          <Reveal key={pillar.slug} delay={(i % 4) * 0.05} className="flex h-full flex-col">
            <Link
              href={`/solutions#${pillar.slug}`}
              className="group flex h-full flex-col justify-between bg-white p-6 transition-all duration-200 hover:bg-brand-paper sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center border border-brand-line bg-brand-paper transition-colors duration-200 group-hover:border-brand-navy-900 group-hover:bg-brand-navy-900">
                    <Icon className="h-5 w-5 text-brand-accent-600 transition-colors duration-200 group-hover:text-white" strokeWidth={1.75} />
                  </div>
                  <span className="font-mono text-xs font-semibold text-brand-steel-600/60 transition-colors group-hover:text-brand-accent-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-sm font-semibold leading-snug text-brand-navy-900 transition-colors group-hover:text-brand-accent-600">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-brand-steel-600">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold tracking-wide text-brand-accent-600 transition-transform duration-200 group-hover:translate-x-1 uppercase">
                <span>View details</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
