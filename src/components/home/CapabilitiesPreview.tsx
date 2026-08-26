import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { capabilities } from "@/lib/data/capabilities";

export function CapabilitiesPreview() {
  return (
    <section className="bg-brand-paper py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Capabilities"
            title="Design, build and qualify — under one roof"
            description="Backward-integrated engineering and manufacturing across five disciplines, from new product design through mission-critical qualification testing."
          />
          <Button href="/capabilities" variant="secondary" className="w-fit shrink-0">
            All Capabilities
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {capabilities.map((capability, i) => (
            <Reveal key={capability.slug} delay={(i % 5) * 0.06} className="h-full">
              <div className="flex h-full flex-col gap-4 border border-brand-line bg-white p-6">
                <span className="text-sm font-mono font-semibold text-brand-accent-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-semibold text-brand-navy-900">{capability.title}</h3>
                <p className="text-sm leading-6 text-brand-steel-600">{capability.summary}</p>
                <ul className="mt-auto flex flex-col gap-1.5 border-t border-brand-line pt-4">
                  {capability.items.slice(0, 3).map((item) => (
                    <li key={item} className="text-xs leading-5 text-brand-steel-600">
                      {item}
                    </li>
                  ))}
                  {capability.items.length > 3 ? (
                    <li className="text-xs font-medium text-brand-accent-600">
                      +{capability.items.length - 3} more
                    </li>
                  ) : null}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
