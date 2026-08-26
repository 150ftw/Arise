import { Hero } from "@/components/home/Hero";
import { QuickLinks } from "@/components/home/QuickLinks";
import { AboutSnapshot } from "@/components/home/AboutSnapshot";
import { CapabilitiesPreview } from "@/components/home/CapabilitiesPreview";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { SolutionsPreview } from "@/components/home/SolutionsPreview";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { WhyIconPowerBand } from "@/components/home/WhyIconPowerBand";
import { TrustStrip } from "@/components/home/TrustStrip";
import { CtaBanner } from "@/components/ui/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <AboutSnapshot />
      <CapabilitiesPreview />
      <FeaturedProducts />
      <SolutionsPreview />
      <CaseStudiesSection />
      <WhyIconPowerBand />
      <TrustStrip />
      <CtaBanner />
    </>
  );
}
