/** Central site configuration — update NEXT_PUBLIC_SITE_URL for custom domain */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://franklyn.com.br";

export const SITE_NAME = "Franklyn";

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contato@franklyn.com.br";

export const COMPANY = {
  name: "Franklyn",
  legalName: "Franklyn Consultoria em Franquias Ltda.",
  tagline: "Franqueie e escale seu negócio — com inteligência.",
  description:
    "Consultoria de franquias no Brasil e Portugal. Diagnóstico gratuito, score 0–70, COF, SOPs e captação de franqueados. Dizemos não quando o negócio não está pronto.",
  locale: "pt_BR",
  currencyNote: "€1 = R$ 6,00 (referência indicativa)",
  address: {
    streetAddress: "Av. Paulista, 1000",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "01310-100",
    addressCountry: "BR",
  },
  phone: "+55-11-3000-0000",
  sameAs: [
    "https://www.linkedin.com/company/franklyn",
    "https://instagram.com/franklyn",
  ],
};

export const MAIN_NAV = [
  { href: "/#como", label: "Como funciona" },
  { href: "/#pacotes", label: "Pacotes" },
  { href: "/cases", label: "Cases" },
  { href: "/about", label: "Sobre" },
  { href: "/contact", label: "Contato" },
] as const;

export const LEGAL_NAV = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/cookies", label: "Cookie Notice" },
  { href: "/do-not-sell", label: "Do Not Sell My Personal Information" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/security", label: "Security" },
  { href: "/terms", label: "Terms of Use" },
] as const;

export const ALL_ROUTES = [
  "/",
  "/br",
  "/br/contact",
  "/br/about",
  "/br/cases",
  "/br/guia/leis-franquia",
  "/br/guia/modelo-escala",
  "/pt",
  "/pt/contact",
  "/pt/about",
  "/pt/cases",
  "/pt/guia/leis-franquia",
  "/pt/guia/modelo-escala",
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
