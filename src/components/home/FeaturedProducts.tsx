"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Eye, Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { findProduct } from "@/lib/data/products";

const allFeatured = [
  { category: "leoch-energy-storage", product: "48v-communication-lithium-battery", group: "storage" },
  { category: "cooling-cabinets", product: "hex-ip65-cabinet", group: "enclosures" },
  { category: "modular-pps", product: "modular-pps-version-2", group: "pps" },
  { category: "rack-integration", product: "plc-controlled-rack-system", group: "racks" },
  { category: "smart-rack", product: "smart-rack-row-based", group: "racks" },
  { category: "submarine-power-systems", product: "submarine-power-distribution", group: "defence" },
  { category: "outdoor-dc-power-supply", product: "outdoor-dc-power-supply", group: "pps" },
  { category: "voltage-regulation", product: "digital-voltage-regulator", group: "pps" },
]
  .map(({ category, product, group }) => {
    const found = findProduct(category, product);
    return found ? { ...found, group } : null;
  })
  .filter((entry): entry is NonNullable<typeof entry> => entry !== null);

const FILTER_TABS = [
  { id: "all", label: "All Architectures" },
  { id: "pps", label: "PPS & Power Supplies" },
  { id: "racks", label: "Smart Racks & Integration" },
  { id: "storage", label: "Energy Storage" },
  { id: "defence", label: "Defence & Submarine" },
];

export function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = activeTab === "all"
    ? allFeatured
    : allFeatured.filter((item) => item.group === activeTab);

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Products & Systems"
            title="Custom-manufactured, not off a shelf"
            description="Energy storage, rectifiers, modular PPS, rack integration, smart racks, submarine power systems and outdoor field equipment."
          />
          <Button href="/products" variant="secondary" className="w-fit shrink-0">
            View All 24+ Systems
          </Button>
        </div>

        {/* Interactive Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-brand-line pb-4">
          {FILTER_TABS.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                  active
                    ? "bg-brand-navy-900 text-white shadow-sm"
                    : "bg-brand-paper text-brand-navy-900 hover:bg-brand-line"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Animated Grid */}
        <motion.div
          layout
          className="mt-6 grid grid-cols-2 gap-px overflow-hidden border border-brand-line bg-brand-line sm:grid-cols-4"
        >
          <AnimatePresence>
            {filtered.map(({ category, product }) => (
              <motion.div
                key={product.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="flex h-full flex-col bg-white"
              >
                <Link
                  href={`/products#${category.slug}`}
                  className="group flex h-full flex-col justify-between"
                >
                  <div className="relative aspect-square overflow-hidden bg-brand-paper">
                    <Image
                      src={product.images[0].src}
                      alt={product.images[0].alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-navy-900 text-white shadow-md">
                        <Eye className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between border-t border-brand-line p-4">
                    <div>
                      <p
                        className="line-clamp-1 text-[11px] font-semibold tracking-wide text-brand-accent-600 uppercase"
                        title={category.title}
                      >
                        {category.title}
                      </p>
                      <h3
                        className="mt-1 line-clamp-2 text-sm leading-5 font-semibold text-brand-navy-900 transition-colors group-hover:text-brand-accent-600"
                        title={product.name}
                      >
                        {product.name}
                      </h3>
                    </div>

                    <div className="mt-4 flex items-center gap-1 font-mono text-[11px] font-semibold text-brand-steel-600 transition-transform group-hover:translate-x-1 group-hover:text-brand-accent-600">
                      <span>Explore specs</span>
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
