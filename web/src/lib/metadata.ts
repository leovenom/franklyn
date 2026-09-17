import type { Metadata } from "next";
import { getCopy } from "./copy";
import { COMPANY, SITE_NAME, SITE_URL } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path,
  noIndex,
  keywords = [],
}: PageMeta): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const ogTitle = path === "/" ? `${SITE_NAME} | ${title}` : `${title} | ${SITE_NAME}`;
  const copy = getCopy();

  return {
    title: path === "/" ? { absolute: ogTitle } : title,
    description,
    keywords: keywords.length > 0 ? keywords : copy.home.meta.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: copy.ogLocale,
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

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: COMPANY.description,
    inLanguage: "pt-PT",
    publisher: {
      "@type": "Organization",
      name: COMPANY.legalName,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: COMPANY.name,
    description: COMPANY.description,
    url: SITE_URL,
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contato@franklyn.pt",
    telephone: COMPANY.phone,
    image: `${SITE_URL}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      ...COMPANY.address,
    },
    areaServed: { "@type": "Country", name: "Portugal" },
    priceRange: "€€",
    sameAs: COMPANY.sameAs,
    knowsAbout: [
      "Consultoria de franchising",
      "Franqueabilidade",
      "Dossier APF",
      "Captação de franchisees",
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
      acceptedAnswer: { "@type": "Answer", text: item.a },
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
