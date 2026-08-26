// Highlights spec-like tokens (voltages, ranges, percentages, counts) within
// a feature line so numbers read the way they would on a datasheet, without
// rewriting the underlying content into fabricated key/value pairs.
const SPEC_TOKEN =
  /(-?\d[\d,]*\.?\d*\s?(?:°C|KVA|kVA|kW|kV|kHz|Hz|VAC|VDC|Cr|mm|dB|min|hrs?|yrs?|%|V|A|W|U)\b|\b\d[\d,]*\.?\d*\b)/g;

function SpecLine({ text }: { text: string }) {
  const parts = text.split(SPEC_TOKEN);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="font-semibold text-brand-copper-400">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

export function SpecReadout({ items, open }: { items: string[]; open: boolean }) {
  return (
    <div className="border border-brand-navy-700 bg-brand-navy-950 p-4">
      <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-2.5">
        <span className="rail-dot h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent-500" />
        <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-white/50 uppercase">
          Specifications
        </span>
      </div>
      <ul className="flex flex-col gap-2">
        {items.map((item, i) => (
          <li
            key={item}
            className="flex items-start gap-2 font-mono text-[12px] leading-5 text-white/75 transition-all duration-300"
            style={{
              transitionDelay: open ? `${i * 35}ms` : "0ms",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(-2px)",
            }}
          >
            <span className="mt-1.5 h-1 w-1 shrink-0 bg-brand-accent-500" />
            <SpecLine text={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
