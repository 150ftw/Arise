import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { findProduct } from "@/lib/data/products";

const featured = [
  { category: "leoch-energy-storage", product: "48v-communication-lithium-battery" },
  { category: "cooling-cabinets", product: "hex-ip65-cabinet" },
  { category: "modular-pps", product: "modular-pps-version-2" },
  { category: "rack-integration", product: "plc-controlled-rack-system" },
  { category: "smart-rack", product: "smart-rack-row-based" },
  { category: "submarine-power-systems", product: "submarine-power-distribution" },
  { category: "outdoor-dc-power-supply", product: "outdoor-dc-power-supply" },
  { category: "voltage-regulation", product: "digital-voltage-regulator" },
]
  .map(({ category, product }) => findProduct(category, product))
  .filter((entry): entry is NonNullable<typeof entry> => entry !== null);

export function FeaturedProducts() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Products"
            title="Custom-manufactured, not off a shelf"
            description="Energy storage, rectifiers, modular PPS, rack integration, smart racks, submarine power systems and outdoor field equipment."
          />
          <Button href="/products" variant="secondary" className="w-fit shrink-0">
            All Products
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-brand-line bg-brand-line sm:grid-cols-4">
          {featured.map(({ category, product }, i) => (
            <Reveal key={product.slug} delay={(i % 4) * 0.06}>
              <Link href={`/products#${category.slug}`} className="group flex flex-col bg-white">
                <div className="relative aspect-square overflow-hidden bg-brand-paper">
                  <Image
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="border-t border-brand-line px-4 py-4">
                  <p className="text-[11px] font-semibold tracking-wide text-brand-accent-600 uppercase">{category.title}</p>
                  <h3 className="mt-1 text-sm leading-5 font-semibold text-brand-navy-900">{product.name}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
