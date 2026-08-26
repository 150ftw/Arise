import { Container } from "@/components/ui/Container";

export function CategoryQuickNav({ items }: { items: { slug: string; title: string }[] }) {
  return (
    <div className="sticky top-[64px] z-30 border-b border-brand-line bg-white">
      <Container>
        <nav className="scrollbar-none flex gap-6 overflow-x-auto">
          {items.map((item) => (
            <a
              key={item.slug}
              href={`#${item.slug}`}
              className="shrink-0 border-b-2 border-transparent py-3.5 text-xs font-semibold tracking-wide whitespace-nowrap text-brand-steel-600 uppercase transition-colors hover:border-brand-accent-500 hover:text-brand-navy-900"
            >
              {item.title}
            </a>
          ))}
        </nav>
      </Container>
    </div>
  );
}
