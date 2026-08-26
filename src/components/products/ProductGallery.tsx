"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductImage } from "@/lib/data/products";

export function ProductGallery({ images, name }: { images: ProductImage[]; name: string }) {
  const [active, setActive] = useState(0);
  const current = images[active];

  return (
    <div className="flex flex-col gap-2">
      <div className="relative aspect-[4/3] overflow-hidden bg-white ring-1 ring-brand-line">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-4"
        />
      </div>
      {images.length > 1 ? (
        <div className="flex gap-2">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1} of ${name}`}
              className={`relative h-14 w-14 shrink-0 overflow-hidden ring-1 transition-all ${
                active === i ? "ring-2 ring-brand-accent-500" : "ring-brand-line opacity-70 hover:opacity-100"
              }`}
            >
              <Image src={img.src} alt="" fill sizes="56px" className="object-contain p-1" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
