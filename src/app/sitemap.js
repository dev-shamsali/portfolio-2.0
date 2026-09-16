import { PRIMARY_DOMAIN } from "@/lib/seo";

export default function sitemap() {
  const routes = ["", "/about", "/contact"];

  return routes.map((route) => ({
    url: `${PRIMARY_DOMAIN}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
