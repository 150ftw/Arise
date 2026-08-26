import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/products/ProductCard";
import type { ProductCategory } from "@/lib/data/products";

export function CategorySection({ category, index }: { category: ProductCategory; index: number }) {
  const isPhotoGallery = category.products.length === 1 && category.products[0].images.length > 4;

  return (
    <section
      id={category.slug}
      className={`scroll-mt-[112px] py-16 sm:py-20 ${index % 2 === 1 ? "bg-brand-paper" : "bg-white"}`}
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow={`Products · ${String(index + 1).padStart(2, "0")}`} title={category.title} description={category.intro} />

        {isPhotoGallery ? (
          <div className="mt-10 flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {category.products[0].images.map((img) => (
                <div key={img.src} className="relative aspect-square overflow-hidden bg-brand-paper ring-1 ring-brand-line">
                  <Image src={img.src} alt={img.alt} fill sizes="220px" className="object-contain p-3" />
                </div>
              ))}
            </div>
            <div className="max-w-2xl border border-brand-line bg-brand-paper p-6">
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {category.products[0].features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm leading-6 text-brand-navy-800">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-accent-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
