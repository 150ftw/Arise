export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const titleColor = tone === "light" ? "text-white" : "text-brand-navy-900";
  const descColor = tone === "light" ? "text-white/70" : "text-brand-steel-600";
  const eyebrowColor = tone === "light" ? "text-brand-accent-400" : "text-brand-accent-600";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignClass}`}>
      {eyebrow ? (
        <div className={`flex items-center gap-2.5 ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-[3px] w-6 bg-brand-accent-500" />
          <span className={`text-xs font-semibold tracking-[0.14em] uppercase ${eyebrowColor}`}>{eyebrow}</span>
        </div>
      ) : null}
      <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${titleColor}`}>{title}</h2>
      {description ? <p className={`text-base leading-7 sm:text-lg sm:leading-8 ${descColor}`}>{description}</p> : null}
    </div>
  );
}
