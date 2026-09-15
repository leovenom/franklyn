import type { Metadata } from "next";
import { getCopy, type Market } from "./copy";
import { COMPANY, SITE_NAME, SITE_URL } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  keywords?: string[];
  market?: Market;
  alternatePath?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  noIndex,
  keywords = [],
  market = "br",
  alternatePath,
}: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogTitle = path === "/br" || path === "/pt" ? `${SITE_NAME} — ${title}` : `${title} | ${SITE_NAME}`;
  const copy = getCopy(market);

  const languages: Record<string, string> = {};
  if (path === "/br" || path === "/pt") {
    languages["pt-BR"] = `${SITE_URL}/br`;
    languages["pt-PT"] = `${SITE_URL}/pt`;
    languages["x-default"] = `${SITE_URL}/br`;
  } else if (alternatePath) {
    languages["pt-BR"] = market === "br" ? url : `${SITE_URL}${alternatePath}`;
    languages["pt-PT"] = market === "pt" ? url : `${SITE_URL}${alternatePath}`;
  }

  return {
    title: path === "/br" || path === "/pt" ? { absolute: ogTitle } : title,
    description,
    keywords: keywords.length > 0 ? keywords : copy.home.meta.keywords,
    alternates: {
      canonical: url,
      ...(Object.keys(languages).length > 0 ? { languages } : {}),
    },
    openGraph: {
      type: "website",
      locale: copy.ogLocale,
      alternateLocale: market === "br" ? "pt_PT" : "pt_BR",
      url,
      siteName: SITE_NAME,
      title: ogTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: COMPANY.name,
    description: COMPANY.description,
    url: SITE_URL,
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contato@franklyn.com.br",
    telephone: COMPANY.phone,
    image: `${SITE_URL}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      ...COMPANY.address,
    },
    areaServed: [
      { "@type": "Country", name: "Brazil" },
      { "@type": "Country", name: "Portugal" },
    ],
    priceRange: "$$",
    sameAs: COMPANY.sameAs,
    knowsAbout: [
      "Franchising",
      "Franquias",
      "Consultoria de expansão",
      "COF",
      "Circular de Oferta de Franquia",
    ],
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
