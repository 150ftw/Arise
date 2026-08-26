import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PillarGrid } from "@/components/solutions/PillarGrid";
import { HubDiagram } from "@/components/solutions/HubDiagram";
import { PSIMDiagram } from "@/components/solutions/PSIMDiagram";
import { AcronymGrid } from "@/components/solutions/AcronymGrid";
import {
  solutionPillars,
  criticalSectors,
  dataCentreObjectives,
  dataCentreHubItems,
  voiceDataFeatures,
  cctvFeatures,
  commandControlFeatures,
  securitySuiteAcronyms,
  networkingFeatures,
} from "@/lib/data/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "System integration for security & surveillance, data centres, voice & data, networking and critical infrastructure sectors.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="System Integrator"
        title="Solutions for critical infrastructure"
        description="Icon Power Solutions integrates security, communications, power and data-centre systems for public safety, defence, banking, transport and utility programs."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Solutions offering" title="Eight integrated solution pillars" />
          <div className="mt-10">
            <PillarGrid pillars={solutionPillars} />
          </div>
        </Container>
      </section>

      <section className="bg-brand-navy-950 py-20 sm:py-24">
        <Container>
          <SectionHeading tone="light" align="center" eyebrow="Key focused area" title="Built for critical infrastructure sectors" />
          <div className="mt-10">
            <HubDiagram centerLabel="Critical" centerSublabel="Infrastructure" items={criticalSectors} tone="dark" />
          </div>
        </Container>
      </section>

      <section id="data-centre" className="scroll-mt-28 bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading eyebrow="Data Centre Solution" title="Tier III/IV architecture, built for uptime" />
              <BulletList items={dataCentreObjectives} className="mt-8" />
            </Reveal>
            <Reveal delay={0.1}>
              <HubDiagram centerLabel="Data Center" items={dataCentreHubItems} tone="light" />
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="voice-data" className="scroll-mt-28 bg-brand-paper py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="IP-PABX, Voice & Data Solutions" title="World-class IP exchange, partnered with ALCATEL-LUCENT" description={voiceDataFeatures.intro} />
          <div className="mt-10 max-w-3xl">
            <BulletList items={voiceDataFeatures.points} />
          </div>
        </Container>
      </section>

      <section id="cctv" className="scroll-mt-28 bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="CCTV System"
                title="IP camera security, from OEM partners"
                description="Bullet, PTZ and PTZ Dome cameras, capacity and features customized to the deployment."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <BulletList items={cctvFeatures} />
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="command-control" className="scroll-mt-28 bg-brand-navy-950 py-20 sm:py-24">
        <Container>
          <SectionHeading
            tone="light"
            align="center"
            eyebrow="Central Command & Control System"
            title="Situational Awareness Matters"
            description={commandControlFeatures.intro}
          />
          <div className="mt-12">
            <PSIMDiagram inputs={commandControlFeatures.integratedSystems} outputs={commandControlFeatures.outputs} />
          </div>
          <Reveal className="mx-auto mt-12 max-w-3xl border border-white/10 bg-brand-navy-900/60 p-8">
            <h3 className="text-sm font-semibold tracking-wide text-brand-accent-400 uppercase">Video Analytics</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {commandControlFeatures.videoAnalytics.map((v) => (
                <span key={v} className="border border-white/15 px-3 py-1.5 text-xs text-white/75">
                  {v}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="security-surveillance" className="scroll-mt-28 bg-brand-paper py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Security & Surveillance Solutions Offering" title="A full acronym suite for public-safety deployments" align="center" />
          <div className="mt-10">
            <AcronymGrid items={securitySuiteAcronyms} />
          </div>
        </Container>
      </section>

      <section id="networking" className="scroll-mt-28 bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Networking & Video Conference (LAN, WAN, WiFi & GEPON)"
            title="Distributed MCU architecture for large-scale video conferencing"
          />
          <div className="mt-10 max-w-3xl">
            <BulletList items={networkingFeatures} />
          </div>
        </Container>
      </section>

      <CtaBanner title="Planning a critical-infrastructure deployment?" description="Talk to our system integration team about your project scope." />
    </>
  );
}
