export const SITEMAP_PRIORITIES: Record<string, number> = {
  "/": 1,
  "/contact": 0.9,
  "/cases": 0.85,
  "/about": 0.75,
  "/guia/leis-franquia": 0.85,
  "/guia/modelo-escala": 0.85,
  "/cases/codekids": 0.8,
  "/cases/grao-e-cia": 0.8,
  "/proposta": 0.65,
};

export const SITEMAP_CHANGE_FREQ = (
  path: string,
): "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" => {
  if (path === "/") return "weekly";
  if (path.startsWith("/cases/")) return "monthly";
  return "monthly";
};
