"use client";

import { useState } from "react";
import { ProductGallery } from "@/components/products/ProductGallery";
import { SpecReadout } from "@/components/products/SpecReadout";
import type { Product } from "@/lib/data/products";

export function ProductCard({ product }: { product: Product }) {
  const [hovering, setHovering] = useState(false);
  const [pinned, setPinned] = useState(false);
  const open = hovering || pinned;

  return (
    <article
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="flex h-full flex-col gap-5 border border-brand-line bg-brand-paper p-5"
    >
      <ProductGallery images={product.images} name={product.name} />

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base font-semibold text-brand-navy-900">{product.name}</h3>
          <button
            type="button"
            onClick={() => setPinned((p) => !p)}
            aria-expanded={open}
            aria-label={`${open ? "Hide" : "Show"} specifications for ${product.name}`}
            className="flex shrink-0 items-center gap-1 font-mono text-[10px] font-semibold tracking-wide text-brand-accent-600 uppercase"
          >
            {open ? "Hide" : "Specs"}
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className={`h-3 w-3 transition-transform duration-300 ${open ? "-rotate-180" : ""}`}
            >
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div
          className="grid transition-[grid-template-rows] duration-300 ease-out"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <SpecReadout items={product.features} open={open} />
          </div>
        </div>
      </div>
    </article>
  );
}
