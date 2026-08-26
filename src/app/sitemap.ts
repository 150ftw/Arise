import type { MetadataRoute } from "next";

const BASE_URL = "https://www.iconpowersolutions.com";

const routes = [
  "",
  "/about",
  "/capabilities",
  "/products",
  "/solutions",
  "/financials",
  "/presence",
  "/customers",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
