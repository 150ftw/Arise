import { Hero } from "@/components/home/Hero";
import { QuickLinks } from "@/components/home/QuickLinks";
import { InteractiveConfigurator } from "@/components/home/InteractiveConfigurator";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { StressTestSimulator } from "@/components/home/StressTestSimulator";
import { AboutSnapshot } from "@/components/home/AboutSnapshot";
import { CapabilitiesPreview } from "@/components/home/CapabilitiesPreview";
import { SolutionsPreview } from "@/components/home/SolutionsPreview";
import { WhyIconPowerBand } from "@/components/home/WhyIconPowerBand";
import { TrustStrip } from "@/components/home/TrustStrip";
import { CtaBanner } from "@/components/ui/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <InteractiveConfigurator />
      <FeaturedProducts />
      <StressTestSimulator />
      <AboutSnapshot />
      <CapabilitiesPreview />
      <SolutionsPreview />
      <WhyIconPowerBand />
      <TrustStrip />
      <CtaBanner />
    </>
  );
}
