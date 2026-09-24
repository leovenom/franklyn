/** Central site configuration — update NEXT_PUBLIC_SITE_URL for custom domain */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://franklyn.pt";

export const SITE_NAME = "Franklyn";

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "leonardt@outlook.com";

export const COMPANY = {
  name: "Franklyn",
  legalName: "Franklyn Consultoria em Franchising, Unipessoal Lda.",
  tagline: "Franquiciar com método e dizer não quando ainda não é altura.",
  description:
    "Consultoria de franchising em Portugal. Diagnóstico gratuito, score 0–70, dossier APF e apoio até à captação do primeiro franchisee.",
  locale: "pt_PT",
  address: {
    streetAddress: "Av. da Liberdade, 100",
    addressLocality: "Lisboa",
    addressRegion: "Lisboa",
    postalCode: "1250-096",
    addressCountry: "PT",
  },
  phone: "+351-21-000-0000",
  sameAs: [
    "https://www.linkedin.com/company/franklyn",
    "https://instagram.com/franklyn",
  ],
};

export const LEGAL_NAV = [
  { href: "/privacy", label: "Privacidade" },
  { href: "/cookies", label: "Cookies" },
  { href: "/terms", label: "Termos" },
  { href: "/security", label: "Segurança" },
  { href: "/accessibility", label: "Acessibilidade" },
  { href: "/do-not-sell", label: "Não vender dados" },
] as const;

export const ALL_ROUTES = [
  "/",
  "/contact",
  "/about",
  "/cases",
  "/guia/leis-franquia",
  "/guia/modelo-escala",
  "/cases/codekids",
  "/cases/codekids/franquia",
  "/cases/grao-e-cia",
  "/cases/grao-e-cia/franquia",
  "/cases/ecoshine",
  "/cases/dermapure",
  "/cases/pulse-box",
  "/proposta",
  "/privacy",
  "/cookies",
  "/do-not-sell",
  "/accessibility",
  "/security",
  "/terms",
] as const;
