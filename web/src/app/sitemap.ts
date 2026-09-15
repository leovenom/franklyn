import type { MetadataRoute } from "next";
import { ALL_ROUTES, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-15");

  const priorities: Record<string, number> = {
    "/": 1,
    "/br": 0.95,
    "/pt": 0.95,
    "/br/contact": 0.9,
    "/pt/contact": 0.9,
    "/br/cases": 0.85,
    "/pt/cases": 0.85,
    "/br/about": 0.75,
    "/pt/about": 0.75,
    "/br/guia/leis-franquia": 0.85,
    "/pt/guia/leis-franquia": 0.85,
    "/br/guia/modelo-escala": 0.85,
    "/pt/guia/modelo-escala": 0.85,
    "/proposta": 0.7,
  };

  return ALL_ROUTES.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" || path === "/br" || path === "/pt" ? "weekly" : "monthly",
    priority: priorities[path] ?? 0.6,
  }));
}
