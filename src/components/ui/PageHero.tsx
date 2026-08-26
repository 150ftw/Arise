import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-brand-line bg-brand-navy-950 py-20 sm:py-24">
      <Container>
        <div className="flex max-w-3xl flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <span className="h-[3px] w-6 bg-brand-accent-500" />
            <span className="text-xs font-semibold tracking-[0.16em] text-brand-accent-400 uppercase">{eyebrow}</span>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h1>
          {description ? <p className="text-lg leading-8 text-white/65">{description}</p> : null}
        </div>
      </Container>
    </section>
  );
}
