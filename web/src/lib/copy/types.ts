import type { Plan } from "@/lib/data";

export type HomeCopy = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  nav: {
    cta: string;
    contact: string;
    marketLabel: string;
  };
  hero: {
    eyebrow?: string;
    h1: string;
    h1Accent?: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scoreTitle?: string;
  };
  trust: { value: string; label: string }[];
  diagnosis: {
    label: string;
    title: string;
    desc: string;
    flow: { num: string; title: string; desc: string }[];
    criteriaTitle: string;
    criteria: string[];
    outcomesTitle: string;
    outcomes: { range: string; title: string; desc: string; tone: "success" | "warning" | "danger" }[];
    cta: string;
  };
  steps: {
    label: string;
    title: string;
    desc: string;
    items: { num: string; title: string; desc: string }[];
  };
  honesty: {
    label: string;
    title: string;
    desc: string;
    cta: string;
  };
  agents: {
    label: string;
    title: string;
    desc: string;
    items: { name: string; desc: string }[];
  };
  brandProcess: {
    label: string;
    title: string;
    desc: string;
    items: { title: string; desc: string; output?: string }[];
  };
  pricing: {
    label: string;
    title: string;
    desc: string;
    euTab: string;
    footnote: string;
    propostaLink: string;
    ctaPlan: string;
  };
  faq: {
    label: string;
    title: string;
    desc: string;
    items: { q: string; a: string }[];
  };
  cta: {
    title: string;
    sub: string;
    placeholder: string;
    button: string;
    fine: string;
  };
  footer: {
    tagline: string;
  };
  features: {
    title: string;
    desc: string;
    color: "violet" | "pink" | "amber";
  }[];
  socialProof: {
    label: string;
    segments: string[];
  };
};

export type NavLink = { href: string; label: string };

export type MarketCopy = {
  home: HomeCopy;
  navLinks: NavLink[];
  plansEU: Plan[];
  defaultPricingMarket: "eu";
  htmlLang: string;
  ogLocale: string;
  contactPath: string;
  homePath: string;
};
