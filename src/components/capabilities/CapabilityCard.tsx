import { Reveal } from "@/components/ui/Reveal";
import type { Capability } from "@/lib/data/capabilities";

export function CapabilityCard({ capability, index }: { capability: Capability; index: number }) {
  return (
    <Reveal delay={(index % 3) * 0.08} className="h-full">
      <article className="flex h-full flex-col gap-6 border border-brand-line bg-white p-8">
        <div className="flex items-center justify-between border-b border-brand-line pb-5">
          <span className="text-sm font-mono font-semibold text-brand-accent-600">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-brand-navy-900">{capability.title}</h3>
          <p className="text-sm leading-6 text-brand-steel-600">{capability.summary}</p>
        </div>
        <ul className="flex flex-col gap-2.5 border-t border-brand-line pt-5">
          {capability.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-brand-navy-800">
              <svg viewBox="0 0 16 16" fill="none" className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-accent-500">
                <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}
