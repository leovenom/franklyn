export const GRAO_E_CIA = {
  name: "Grão & Cia",
  tagline: "Café especializado · third wave",
  description:
    "Rede de cafeterias compactas com blend exclusivo e micro-torrefação. 2 unidades SP, formato Compacta para cidades 200k+.",
  score: 52,
  verdict: "Franquear c/ ajustes",
  investment: "R$ 360.000 – 540.000",
  investmentEur: "€ 60.000 – 90.000",
  fee: "R$ 90.000 – 120.000",
  feeEur: "€ 15.000 – 20.000",
  royalty: "5%",
  marketingFund: "1,5%",
  payback: "20–24 meses",
  ticket: "R$ 28",
  units: 2,
  targetUnits: 8,
} as const;

export const graoFormatos = [
  {
    name: "Compacta",
    area: "40–60 m²",
    capex: "R$ 360k – 540k",
    desc: "Foco expansão — shoppings, ruas secundárias, cidades 200k+ hab.",
    active: true,
  },
  {
    name: "Flagship",
    area: "80–120 m²",
    capex: "R$ 720k – 960k",
    desc: "Experiência completa — reservada SP capital na fase 1.",
    active: false,
  },
] as const;

export const graoDeliverables = [
  { title: "COF rascunho", desc: "Compacta + Flagship · torrefação central" },
  { title: "5 SOPs core", desc: "Abertura, fechamento, estoque, bar, turnos" },
  { title: "2 formatos de loja", desc: "CAPEX e perfil definidos" },
  { title: "Fichas técnicas bebidas", desc: "Espresso, cappuccino, latte — spec rede" },
  { title: "Landing captação", desc: "Página franqueados + copy" },
  { title: "Modelo financeiro", desc: "Compacta vs Flagship · R$/€" },
] as const;

export const graoStats = [
  { label: "Faturamento/unidade", value: "R$ 1,2 M/ano" },
  { label: "Ticket médio", value: "R$ 28" },
  { label: "EBITDA Compacta", value: "12–16%" },
  { label: "Clientes/dia", value: "180–220" },
] as const;
