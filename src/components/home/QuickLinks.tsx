import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { quickLinks } from "@/lib/data/company";

export function QuickLinks() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-px overflow-hidden border border-brand-line bg-brand-line sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href} className="group relative flex aspect-[4/5] flex-col justify-end bg-brand-navy-950">
              <Image
                src={link.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover opacity-60 transition-all duration-300 group-hover:scale-105 group-hover:opacity-45"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950 via-brand-navy-950/50 to-transparent" />
              <div className="relative flex flex-col gap-2 p-6">
                <h3 className="text-lg font-semibold text-white">{link.title}</h3>
                <p className="text-sm leading-6 text-white/70">{link.description}</p>
                <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-brand-accent-400 uppercase">
                  Learn more
                  <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 transition-transform group-hover:translate-x-1">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
