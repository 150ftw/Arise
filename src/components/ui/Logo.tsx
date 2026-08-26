import Link from "next/link";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 44" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="2.5" r="1.6" className="fill-brand-accent-500" />
      <path d="M20 6 L4 40 H20 Z" className="fill-brand-steel-400" />
      <path d="M24 8 L42 40 H10 Z" className="fill-brand-accent-500" />
    </svg>
  );
}

export function Logo({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const primary = tone === "light" ? "text-white" : "text-brand-navy-900";
  const secondary = tone === "light" ? "text-white/70" : "text-brand-steel-600";

  return (
    <Link href="/" className={`group inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
      <span className="flex flex-col leading-tight">
        <span className={`text-sm font-bold tracking-wide sm:text-base ${primary}`}>ICON POWER</span>
        <span className={`text-[11px] font-medium tracking-wide sm:text-xs ${secondary}`}>SOLUTIONS PVT. LTD.</span>
      </span>
    </Link>
  );
}
