import type { MetadataRoute } from "next";
import { site, caseStudies } from "@/content/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const live = caseStudies.filter((c) => c.status === "live").map((c) => ({ url: `${site.url}/work/${c.slug}` }));
  return [{ url: site.url, changeFrequency: "monthly", priority: 1 }, ...live];
}
