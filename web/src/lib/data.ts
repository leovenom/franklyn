import { CONTACT_EMAIL } from "./site";

export { CONTACT_EMAIL };

export type Plan = {
  name: string;
  price: string;
  eur: string;
  featured: boolean;
  tag?: string;
  items: string[];
};

export const scores = [
  { name: "CodeKids (educação)", score: "55/70", tone: "good" as const },
  { name: "Grão & Cia (café)", score: "52/70", tone: "good" as const },
  { name: "EcoShine (serviços)", score: "48/70", tone: "warn" as const },
  { name: "DermaPure (estética)", score: "44/70", tone: "warn" as const },
  { name: "Pulse Box (fitness)", score: "38/70", tone: "bad" as const },
];

export const plansEU: Plan[] = [
  {
    name: "EU Light",
    price: "€ 12.000",
    eur: "6–8 semanas · remoto",
    featured: false,
    items: [
      "Diagnóstico completo + score",
      "5 SOPs prioritários",
      "Checklist dossier APF",
      "One-pager para candidatos",
    ],
  },
  {
    name: "EU Standard",
    price: "€ 25.000",
    eur: "8–10 semanas",
    featured: true,
    tag: "Mais pedido",
    items: [
      "Manual do franchisee (PT)",
      "Funil comercial + scripts",
      "SOPs core + plano de mercado",
      "4 meses de acompanhamento",
    ],
  },
];
