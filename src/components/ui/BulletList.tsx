export function BulletList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-col gap-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-brand-navy-800">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent-500" />
          {item}
        </li>
      ))}
    </ul>
  );
}
