import { Reveal } from "@/components/ui/Reveal";
import type { IndiaRegionBox } from "@/lib/data/presence";

export function RegionBoxes({ boxes }: { boxes: IndiaRegionBox[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {boxes.map((box, i) => (
        <Reveal key={box.title} delay={i * 0.06}>
          <div className="flex h-full flex-col gap-3 border border-brand-line bg-white p-6">
            <h3 className="text-sm font-semibold tracking-wide text-brand-navy-900 uppercase">{box.title}</h3>
            <p className="flex flex-wrap gap-x-1.5 gap-y-1 text-sm leading-6 text-brand-steel-600">
              {box.cities.map((city, ci) => (
                <span key={city}>
                  {city}
                  {ci < box.cities.length - 1 ? "," : ""}
                </span>
              ))}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
