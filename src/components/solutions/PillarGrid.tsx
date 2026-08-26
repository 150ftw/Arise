import {
  ShieldCheck,
  Phone,
  Zap,
  Sun,
  Network,
  PlugZap,
  Video,
  Server,
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
    <div className="grid divide-y divide-brand-line border border-brand-line sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
      {pillars.map((pillar, i) => {
        const Icon = icons[pillar.slug] ?? Server;
        return (
          <Reveal key={pillar.slug} delay={(i % 4) * 0.06} className="h-full flex flex-col">
            <div className="flex h-full flex-col gap-5 p-7">
              <Icon className="h-6 w-6 text-brand-accent-600" strokeWidth={1.6} />
              <h3 className="text-sm leading-5 font-semibold text-brand-navy-900">{pillar.title}</h3>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
