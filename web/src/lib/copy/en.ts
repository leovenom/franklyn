import type { MarketCopy } from "./types";
import { plansEU } from "@/lib/data";

export const copy: MarketCopy = {
  locale: "en",
  htmlLang: "en-GB",
  ogLocale: "en_GB",
  homePath: "/",
  contactPath: "/contact",
  defaultPricingMarket: "eu",
  plansEU,
  ui: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    navMenu: "Navigation menu",
    navigation: "Navigation",
    legal: "Legal",
    language: "Language",
  },
  footerLinks: [
    { href: "/guia/leis-franquia", label: "APF legislation" },
    { href: "/guia/modelo-escala", label: "Scale model" },
    { href: "/proposta", label: "Commercial proposal" },
  ],
  legalNav: [
    { href: "/privacy", label: "Privacy" },
    { href: "/cookies", label: "Cookies" },
    { href: "/terms", label: "Terms" },
    { href: "/security", label: "Security" },
    { href: "/accessibility", label: "Accessibility" },
    { href: "/do-not-sell", label: "Do not sell my data" },
  ],
  pages: {
    contact: {
      meta: {
        title: "Contact and free diagnosis",
        description:
          "Book 45 minutes with Franklyn. Score 0–70, honest recommendation, no commitment. Reply within 2 business days.",
        keywords: [
          "franchise consulting Portugal",
          "franchiseability diagnosis",
          "franchising consultant Lisbon",
        ],
      },
      title: "Book your free diagnosis",
      description:
        "45 minutes to see if franchising makes sense and what is still missing if you are not ready yet.",
      breadcrumb: "Contact",
      intro:
        "Send an email to {{email}} or complete the form below. We work remotely across Portugal — Lisbon, Porto or any region works for the first call.",
      nextSteps: "What happens next",
      scoreDetail: "Criteria and score bands are explained in the",
      scoreLinkLabel: "diagnosis section",
      formTitle: "Qualification form",
      formIntro: "This information helps us prepare the 45-minute call and meet GDPR requirements.",
    },
  },
  navLinks: [
    { href: "/#diagnostico", label: "Diagnosis" },
    { href: "/#como", label: "How it works" },
    { href: "/#marca", label: "Brand" },
    { href: "/#pacotes", label: "Packages" },
    { href: "/cases", label: "Cases" },
    { href: "/about", label: "About" },
  ],
  home: {
    meta: {
      title: "Franchise consulting in Portugal and Europe",
      description:
        "Franklyn helps you see if your business can scale: score 0–70, APF-aligned dossier and support until your first franchisee. Free 45-minute diagnosis.",
      keywords: [
        "franchise consulting Portugal",
        "franchise your business Europe",
        "APF dossier",
        "franchiseability diagnosis",
        "franchisee recruitment",
      ],
    },
    nav: {
      cta: "Book diagnosis",
      contact: "Contact",
      marketLabel: "Europe · €",
    },
    hero: {
      h1: "Ready to franchise",
      h1Accent: "your business?",
      sub: "In 45 minutes we assess your business (score 0–70) and tell you honestly if it is time to scale.",
      ctaPrimary: "Book free diagnosis",
      ctaSecondary: "See real cases",
      scoreTitle: "Portfolio scores",
    },
    trust: [
      { value: "45 min", label: "First conversation" },
      { value: "0–70", label: "Published score" },
      { value: "APF", label: "Aligned dossier" },
      { value: "8", label: "Areas in one project" },
    ],
    diagnosis: {
      label: "Free diagnosis",
      title: "How the first conversation works",
      desc: "45 minutes, online, no commitment. You leave knowing where you stand and whether it makes sense to move forward.",
      flow: [
        {
          num: "1",
          title: "Book",
          desc: "Qualification form or email. We reply within 2 business days with a call slot.",
        },
        {
          num: "2",
          title: "Conversation",
          desc: "45-minute video call. We discuss the model, numbers, operations and network ambition.",
        },
        {
          num: "3",
          title: "Score",
          desc: "We assess 7 criteria and calculate a score from 0 to 70, on the call or the next day.",
        },
        {
          num: "4",
          title: "Verdict",
          desc: "Franchise, fix gaps first, or wait. No hard selling.",
        },
      ],
      criteriaTitle: "The 7 criteria",
      criteria: [
        "Replicability",
        "Margin",
        "Brand",
        "Demand",
        "Documentation",
        "Supply chain",
        "Regulation",
      ],
      outcomesTitle: "What the score means",
      outcomes: [
        {
          range: "≥ 49/70",
          title: "Franchise",
          desc: "Business ready for dossier, recruitment and first candidates.",
          tone: "success",
        },
        {
          range: "35–48",
          title: "Fix first",
          desc: "Potential exists, but SOPs, pilot or margin need work. We close gaps first.",
          tone: "warning",
        },
        {
          range: "< 35",
          title: "Wait",
          desc: "Too early for franchising. Licensing, more company-owned units or pivot.",
          tone: "danger",
        },
      ],
      cta: "Book diagnosis",
    },
    steps: {
      label: "After the score",
      title: "Three phases until the first franchisee",
      desc: "We only enter here if the diagnosis is green or amber and you want to proceed.",
      items: [
        {
          num: "01",
          title: "Documentation",
          desc: "Manual, SOPs, figures in euro and dossier aligned with APF expectations.",
        },
        {
          num: "02",
          title: "Recruitment",
          desc: "Landing page, CRM and conversation playbook for candidates.",
        },
        {
          num: "03",
          title: "Network",
          desc: "Exclusivity, master franchise and regional map.",
        },
      ],
    },
    honesty: {
      label: "No filter",
      title: "We publish low scores",
      desc: "We have cases at 38/70: businesses where we still do not recommend franchising. We would rather lose a contract than damage a brand.",
      cta: "See all cases",
    },
    brandProcess: {
      label: "Network brand",
      title: "Identity franchisees can actually use",
      desc: "In EU Standard packages, the brand is ready for manual, store and recruitment — not just a moodboard.",
      items: [
        {
          title: "Immersion",
          desc: "We talk to operators: typical customer, tone of voice, visual references, what cannot change from unit to unit.",
          output: "Brief + initial moodboard",
        },
        {
          title: "Sensory translation",
          desc: "Colour, light, materials and spatial rhythm: what the franchisee should feel when opening a unit.",
          output: "Palette + environment principles",
        },
        {
          title: "Drafts",
          desc: "Two or three logo, typography and recruitment directions before choosing one line.",
          output: "Comparable visual concepts",
        },
        {
          title: "Refinement",
          desc: "Closed system: brand manual, templates and usage rules for the network.",
          output: "Brand kit + manual",
        },
        {
          title: "Validation",
          desc: "Review with founder (and pilot, if any) before the dossier.",
          output: "Approved final version",
        },
      ],
    },
    agents: {
      label: "Team",
      title: "Eight areas, one project",
      desc: "Franchising, operations, marketing, legal, finance, sales, HR and expansion — aligned from diagnosis.",
      items: [
        { name: "Franchising", desc: "Model, royalties, territory" },
        { name: "Operations", desc: "SOPs, quality, audits" },
        { name: "Marketing", desc: "Brand, landing, recruitment" },
        { name: "Legal", desc: "EU contracts, GDPR" },
        { name: "Finance", desc: "Unit economics, payback" },
        { name: "Sales", desc: "Pipeline and closing" },
        { name: "HR", desc: "Franchisee training" },
        { name: "Expansion", desc: "Portugal map and master" },
      ],
    },
    pricing: {
      label: "Packages",
      title: "Prices in euro",
      desc: "Diagnosis is always free. We only move to a package if the score justifies it.",
      euTab: "Europe (€)",
      footnote: "No commitment on the first conversation.",
      propostaLink: "View proposal (PDF)",
      ctaPlan: "Request proposal",
    },
    faq: {
      label: "FAQ",
      title: "Common questions",
      desc: "Short answers. If something is missing, write to us.",
      items: [
        {
          q: "Is the diagnosis really free?",
          a: "Yes. 45 minutes, score 0–70 and an honest recommendation. No card or subscription required.",
        },
        {
          q: "What does EU / Portuguese law require?",
          a: "Full pre-contractual information in good faith (aligned with APF standards). We deliver dossiers in that spirit. Details at /guia/leis-franquia.",
        },
        {
          q: "How long does it take?",
          a: "EU Light: 6–8 weeks. EU Standard: 8–10 weeks until you are ready to recruit candidates.",
        },
        {
          q: "What is included in EU Standard?",
          a: "Manual, sales funnel, core SOPs, market plan and 4 months of support.",
        },
        {
          q: "Do you guarantee franchise sales?",
          a: "No. We guarantee method, documentation and clarity. Recruitment depends on segment, price and your execution.",
        },
      ],
    },
    cta: {
      title: "Want to know your score?",
      sub: "45 minutes · online · no commitment",
      namePlaceholder: "Your name",
      placeholder: "Work email",
      button: "Book diagnosis",
      fine: "We reply within 2 business days",
    },
    footer: {
      tagline: "Franchise consulting · Portugal & Europe",
    },
    features: [
      {
        title: "45-minute diagnosis",
        desc: "Seven criteria, score 0 to 70. You know whether to proceed, adjust or wait.",
        color: "violet",
      },
      {
        title: "APF-ready dossier",
        desc: "Manual, SOPs and figures in euro: what candidates expect to see.",
        color: "pink",
      },
      {
        title: "Through to first candidate",
        desc: "Landing page, CRM and call script in one flow.",
        color: "amber",
      },
    ],
    socialProof: {
      label: "Segments where we have applied the method",
      segments: [
        "STEM education",
        "Café & food service",
        "Mobile services",
        "Aesthetics",
        "Fitness",
        "Retail",
      ],
    },
  },
};
