import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline-light";

const variants: Record<Variant, string> = {
  primary: "bg-brand-accent-500 text-brand-navy-950 hover:bg-brand-accent-400",
  secondary: "bg-brand-navy-900 text-white hover:bg-brand-navy-800",
  "outline-light": "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/5",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-[13px] font-semibold tracking-wide uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent-500 ${variants[variant]} ${className}`}
    >
      {children}
      <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}
