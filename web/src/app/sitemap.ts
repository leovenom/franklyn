import type { MetadataRoute } from "next";
import { SITEMAP_CHANGE_FREQ, SITEMAP_PRIORITIES } from "@/lib/sitemap-config";
import { ALL_ROUTES, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ALL_ROUTES.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: SITEMAP_CHANGE_FREQ(path),
    priority: SITEMAP_PRIORITIES[path] ?? 0.6,
  }));
}
