import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaBanner({
  title = "Talk to our engineering team",
  description = "From concept to qualified, field-deployed hardware — bring us your requirement.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-t border-white/10 bg-brand-navy-950">
      <Container className="flex flex-col items-start justify-between gap-8 py-16 sm:flex-row sm:items-center sm:py-20">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
          <p className="max-w-lg text-white/60">{description}</p>
        </div>
        <Button href="/contact" className="shrink-0">
          Contact Us
        </Button>
      </Container>
    </section>
  );
}
