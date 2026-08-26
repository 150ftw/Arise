import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { IndiaMap } from "@/components/presence/IndiaMap";
import { WorldMap } from "@/components/presence/WorldMap";
import { RegionBoxes } from "@/components/presence/RegionBoxes";
import { indiaRegionBoxes } from "@/lib/data/presence";

export const metadata: Metadata = {
  title: "Global Presence",
  description: "Icon Power Solutions' PAN India service network and international presence across six countries.",
};

export default function PresencePage() {
  return (
    <>
      <PageHero
        eyebrow="Presence Across India & Globally (2001–2026)"
        title="PAN India service support, six countries of operations"
        description="From our Manesar headquarters, Icon Power Solutions supports deployments across every region of India and international customers in defence and telecom."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="India" title="Presence across India" />
          <p className="mt-3 max-w-2xl text-xs text-brand-steel-600">
            State highlights are derived from the city list below and approximate a few coverage-area cities to
            neighbouring states — confirm exact service boundaries with Icon Power before treating this as authoritative.
          </p>
          <div className="mt-10">
            <IndiaMap />
          </div>
          <div className="mt-12">
            <RegionBoxes boxes={indiaRegionBoxes} />
          </div>
        </Container>
      </section>

      <section className="bg-brand-paper py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Global" title="International presence" description="Operations and delivery across six countries." />
          <div className="mt-10">
            <WorldMap />
          </div>
        </Container>
      </section>

      <CtaBanner title="Deploying outside these regions?" description="Talk to us about extending service and delivery support." />
    </>
  );
}
