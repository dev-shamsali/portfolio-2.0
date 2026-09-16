import { PRIMARY_DOMAIN } from "@/lib/seo";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${PRIMARY_DOMAIN}/sitemap.xml`,
  };
}
