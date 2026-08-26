import { productCategories } from "@/lib/data/products";
import { solutionPillars } from "@/lib/data/solutions";

export const primaryNav = [
  { href: "/about", label: "About" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/products", label: "Products", mega: "products" as const },
  { href: "/solutions", label: "Solutions", mega: "solutions" as const },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/presence", label: "Presence" },
  { href: "/customers", label: "Customers" },
  { href: "/financials", label: "Why Icon Power" },
];

export const productMegaMenu = productCategories.map((c) => ({
  href: `/products#${c.slug}`,
  label: c.title,
}));

export const solutionsMegaMenu = solutionPillars.map((s) => ({
  href: `/solutions#${s.slug}`,
  label: s.title,
}));
