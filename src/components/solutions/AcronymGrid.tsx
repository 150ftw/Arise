import { Reveal } from "@/components/ui/Reveal";

export function AcronymGrid({ items }: { items: { code: string; name: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {items.map((item, i) => (
        <Reveal key={item.code} delay={(i % 5) * 0.05}>
          <div className="flex h-full flex-col gap-2 border border-brand-line bg-white p-5">
            <span className="text-lg font-bold tracking-tight text-brand-accent-600">{item.code}</span>
            <span className="text-sm leading-5 text-brand-steel-600">{item.name}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
