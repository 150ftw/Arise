import { Reveal } from "@/components/ui/Reveal";
import { ProductGallery } from "@/components/products/ProductGallery";
import type { Product } from "@/lib/data/products";

export function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="flex h-full flex-col gap-5 border border-brand-line bg-brand-paper p-5">
        <ProductGallery images={product.images} name={product.name} />
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-brand-navy-900">{product.name}</h3>
          <ul className="flex flex-col gap-2">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm leading-6 text-brand-steel-600">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-accent-500" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  );
}
