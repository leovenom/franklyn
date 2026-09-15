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

export const steps = [
  { num: "01", title: "Diagnóstico", desc: "Score 0–70 em 7 critérios. Gratuito." },
  { num: "02", title: "Estruturação", desc: "COF, manual, SOPs, financeiro R$/€." },
  { num: "03", title: "Lançamento", desc: "Landing, pipeline, primeiros franqueados." },
  { num: "04", title: "Escala", desc: "Mapa BR, master franchise, PT/ES seletivo." },
];

export const agents = [
  { name: "Franquia", desc: "Modelo, COF, royalties" },
  { name: "Operações", desc: "SOPs, qualidade" },
  { name: "Marketing", desc: "Marca, captação" },
  { name: "Jurídico", desc: "Contratos BR/EU" },
  { name: "Financeiro", desc: "Unit economics R$/€" },
  { name: "Comercial", desc: "Pipeline, fechamento" },
  { name: "RH", desc: "Treinamento, EAD" },
  { name: "Expansão", desc: "Territórios BR · PT/ES" },
];

export const plansBR: Plan[] = [
  {
    name: "Starter",
    price: "R$ 80.000",
    eur: "€ 13.300 ref. · 6–8 semanas",
    featured: false,
    items: ["Modelo taxas e royalties", "5 SOPs + checklist", "Rascunho COF", "Landing (copy)"],
  },
  {
    name: "Growth",
    price: "R$ 150.000",
    eur: "€ 25.000 ref. · 10–14 semanas",
    featured: true,
    tag: "Mais vendido",
    items: ["Manual + 15 SOPs", "COF + NDA", "CRM + EAD", "Retainer 6 meses"],
  },
  {
    name: "Scale",
    price: "R$ 250.000",
    eur: "€ 41.700 ref. · 14–18 semanas",
    featured: false,
    items: ["Mapa nacional", "Master franchise", "Retainer 12 meses", "Portal franqueado"],
  },
];

export const plansEU: Plan[] = [
  {
    name: "EU Light",
    price: "€ 12.000",
    eur: "R$ 72.000 ref. · remoto",
    featured: false,
    items: ["Diagnóstico EU", "5 SOPs", "Checklist PT/ES", "One-pager bilíngue"],
  },
  {
    name: "EU Standard",
    price: "€ 25.000",
    eur: "R$ 150.000 ref. · 8–10 sem",
    featured: true,
    tag: "PT / ES",
    items: ["Manual PT/ES", "Comercial + funil", "Plano 2 mercados", "Retainer 4 meses"],
  },
];
