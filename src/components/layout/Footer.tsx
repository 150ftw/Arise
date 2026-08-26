import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { company } from "@/lib/data/company";
import { primaryNav } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-navy-950 text-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Logo tone="light" />
          <p className="max-w-xs text-sm leading-6 text-white/60">{company.tagline}</p>
          <p className="text-xs font-semibold tracking-[0.14em] text-brand-accent-400 uppercase">
            {company.certification} · {company.yearsExperience} years
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-white/80">Sitemap</span>
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-white/60 transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="text-sm text-white/60 transition-colors hover:text-white">
            Contact
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-white/80">Contact</span>
          <p className="text-sm leading-6 text-white/60">
            {company.address.line1}
            <br />
            {company.address.line2}
          </p>
          <a href={`mailto:${company.email}`} className="text-sm text-white/60 transition-colors hover:text-white">
            {company.email}
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-white/80">Phone</span>
          {company.phones.map((phone) => (
            <a key={phone} href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="text-sm text-white/60 transition-colors hover:text-white">
              {phone}
            </a>
          ))}
          <a
            href={`https://${company.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            {company.website}
          </a>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col gap-2 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>Manesar, Gurugram, Haryana, India</p>
        </Container>
      </div>
    </footer>
  );
}
