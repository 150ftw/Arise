"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { primaryNav, productMegaMenu, solutionsMegaMenu } from "@/lib/nav";
import { company } from "@/lib/data/company";

const megaContent: Record<string, { href: string; label: string }[]> = {
  products: productMegaMenu,
  solutions: solutionsMegaMenu,
};

export function Header() {
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="h-[3px] bg-gradient-to-r from-brand-navy-900 via-brand-accent-500 to-brand-accent-400" />
      <div className="hidden border-b border-brand-line bg-brand-navy-950 lg:block">
        <Container className="flex items-center justify-between py-2 text-xs text-white/60">
          <span>{company.certification} &middot; PAN India &amp; Global Service Support</span>
          <div className="flex items-center gap-6">
            <a href={`tel:${company.phones[0].replace(/[^\d+]/g, "")}`} className="hover:text-white">
              {company.phones[0]}
            </a>
            <a href={`mailto:${company.email}`} className="hover:text-white">
              {company.email}
            </a>
            <Link href="/financials" className="hover:text-white">
              Why Icon Power
            </Link>
          </div>
        </Container>
      </div>

      <div className="border-b border-brand-line">
        <Container className="flex items-center justify-between py-4">
          <Logo />

          <nav className="hidden items-stretch lg:flex" onMouseLeave={() => setOpenMega(null)}>
            {primaryNav.map((item) => (
              <div key={item.href} className="relative flex" onMouseEnter={() => setOpenMega(item.mega ?? null)}>
                <Link
                  href={item.href}
                  className="flex items-center px-4 text-sm font-medium text-brand-navy-800 transition-colors hover:text-brand-accent-600"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-brand-navy-900 bg-brand-navy-900 px-5 py-2.5 text-xs font-semibold tracking-wide text-white uppercase transition-colors hover:bg-brand-navy-800"
            >
              Contact Us
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center p-2 text-brand-navy-900 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </Container>
      </div>

      {openMega ? (
        <div
          className="absolute inset-x-0 top-full hidden border-b border-brand-line bg-white shadow-[0_16px_24px_-8px_rgba(10,37,64,0.12)] lg:block"
          onMouseEnter={() => setOpenMega(openMega)}
          onMouseLeave={() => setOpenMega(null)}
        >
          <Container className="grid grid-cols-4 gap-x-8 gap-y-3 py-8">
            {megaContent[openMega].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpenMega(null)}
                className="border-l-2 border-transparent py-1 pl-4 text-sm font-medium text-brand-navy-800 transition-colors hover:border-brand-accent-500 hover:text-brand-accent-600"
              >
                {link.label}
              </Link>
            ))}
          </Container>
        </div>
      ) : null}

      {mobileOpen ? (
        <div className="border-b border-brand-line bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-brand-line py-3 text-base font-medium text-brand-navy-900"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex items-center justify-center bg-brand-navy-900 px-5 py-3 text-xs font-semibold tracking-wide text-white uppercase"
            >
              Contact Us
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
