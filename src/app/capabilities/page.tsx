import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { CapabilityCard } from "@/components/capabilities/CapabilityCard";
import { capabilities } from "@/lib/data/capabilities";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Engineering, harness manufacturing, mechanical services, mil-grade manufacturing and testing capabilities at Icon Power Solutions.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Design, build and qualify — under one roof"
        description="Backward-integrated engineering and manufacturing across five disciplines, from new product design through mission-critical qualification testing."
      />

      <section className="bg-brand-paper py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, i) => (
              <CapabilityCard key={capability.slug} capability={capability} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Have a mission-critical requirement?"
        description="Our engineering team scopes new product design, prototyping and qualification against MIL and industrial standards."
      />
    </>
  );
}
