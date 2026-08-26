import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { CategoryQuickNav } from "@/components/products/CategoryQuickNav";
import { CategorySection } from "@/components/products/CategorySection";
import { SystemDiagramSection } from "@/components/products/SystemDiagramSection";
import { productCategories } from "@/lib/data/products";
import { solarDiagram, powerManagementDiagram } from "@/lib/data/diagrams";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Custom power electronics manufacturing — energy storage, rectifiers, modular PPS, rack integration, smart racks, submarine power systems and custom wire harnesses.",
};

const quickNavItems = [
  ...productCategories.map((c) => ({ slug: c.slug, title: c.title })),
  { slug: "solar-power-solution", title: "Solar Based Power Solution" },
  { slug: "power-management-system", title: "Complete Power Management System" },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Custom Products Manufacturing"
        title="Products engineered to spec, not off a shelf"
        description="From 48V lithium energy storage to submarine power distribution — every product line below is customizable to the customer's system architecture."
      />
      <CategoryQuickNav items={quickNavItems} />
      {productCategories.map((category, i) => (
        <CategorySection key={category.slug} category={category} index={i} />
      ))}
      <SystemDiagramSection
        id="solar-power-solution"
        index={productCategories.length}
        eyebrow="System Architecture"
        title="Solar Based Power Solution"
        description="Solar PV module, charge controller, energy management system and battery bank, with DC 48V LED lighting and fan output — remotely monitored via NMS over Ethernet."
        diagram={solarDiagram}
        points={[
          "Solar PV module and charge controller",
          "Energy Management System monitors and controls Mains, DG and Solar utility grids",
          "Battery bank with DC 48V LED light and fan for air circulation",
          "Master Controller with LCD and keys for simple interface",
        ]}
      />
      <SystemDiagramSection
        id="power-management-system"
        index={productCategories.length + 1}
        eyebrow="System Architecture"
        title="Complete Power Management System"
        description="DG and Mains feed a central Power Management System, regulated through a digital voltage regulator and modular UPS with battery backup, distributed to load with full remote monitoring."
        diagram={powerManagementDiagram}
        tone="white"
        points={[
          "62.5 KVA DG and Mains input, via Class B surge protection",
          "Digital Voltage Regulator with isolation transformer, via Class C surge protection",
          "Modular UPS 40kW (2+1) with dedicated battery bank",
          "AC distribution box with bypass switch for maintenance",
          "Console for remote monitoring via NMS Ethernet connectivity",
        ]}
      />
      <CtaBanner title="Need a customized power system?" description="Share your specification and our engineering team will scope a build." />
    </>
  );
}
