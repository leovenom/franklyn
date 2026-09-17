export const GRAO_E_CIA = {
  name: "Grão & Cia",
  tagline: "Café especializado · third wave",
  description:
    "Rede de cafeterias compactas com blend exclusivo e micro-torrefação. 2 unidades em Lisboa no formato Compacta para cidades 200k+.",
  score: 52,
  verdict: "Franquiciar c/ ajustes",
  investment: "€ 60.000 – 90.000",
  fee: "€ 15.000 – 20.000",
  royalty: "5%",
  marketingFund: "1,5%",
  payback: "20–24 meses",
  ticket: "€ 4,50",
  units: 2,
  targetUnits: 8,
} as const;

export const graoFormatos = [
  {
    name: "Compacta",
    area: "40–60 m²",
    capex: "€ 60k – 90k",
    desc: "Foco expansão: shoppings, ruas secundárias, cidades 200k+ hab.",
    active: true,
  },
  {
    name: "Flagship",
    area: "80–120 m²",
    capex: "€ 120k – 160k",
    desc: "Experiência completa, reservada a Lisboa na fase 1.",
    active: false,
  },
] as const;

export const graoDeliverables = [
  { title: "Dossier APF", desc: "Compacta + Flagship · torrefação central" },
  { title: "5 SOPs core", desc: "Abertura, fechamento, estoque, bar, turnos" },
  { title: "2 formatos de loja", desc: "CAPEX e perfil definidos" },
  { title: "Fichas técnicas bebidas", desc: "Espresso, cappuccino, latte: spec rede" },
  { title: "Landing captação", desc: "Página franchisees + copy" },
  { title: "Modelo financeiro", desc: "Compacta vs Flagship em €" },
] as const;

export const graoStats = [
  { label: "Faturamento/unidade", value: "€ 200k/ano" },
  { label: "Ticket médio", value: "€ 4,50" },
  { label: "EBITDA Compacta", value: "12–16%" },
  { label: "Clientes/dia", value: "180–220" },
] as const;
