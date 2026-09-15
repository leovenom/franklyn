export const CODEKIDS = {
  name: "CodeKids",
  tagline: "Programação para crianças de 7 a 14 anos",
  description:
    "Rede de escolas de programação com currículo modular Scratch → Python → Web. 3 unidades próprias, NPS 62, expansão via franquias.",
  score: 55,
  verdict: "Franquear",
  investment: "R$ 180.000 – 240.000",
  investmentEur: "€ 30.000 – 40.000",
  fee: "R$ 72.000",
  feeEur: "€ 12.000",
  royalty: "8%",
  marketingFund: "2%",
  payback: "16–20 meses",
  units: 3,
  targetUnits: 20,
  contactEmail: "franquias@codekids.com.br",
} as const;

export const codekidsTrilhas = [
  {
    name: "Scratch",
    ages: "7–10 anos",
    desc: "Jogos, animações e lógica visual — primeira trilha da jornada.",
  },
  {
    name: "Python",
    ages: "10–13 anos",
    desc: "Automação, dados e primeiros algoritmos com código real.",
  },
  {
    name: "Web",
    ages: "12–14 anos",
    desc: "HTML, CSS e JavaScript — sites e projetos publicados.",
  },
] as const;

export const codekidsDeliverables = [
  { title: "COF completa", desc: "Circular de Oferta de Franquia — Lei 13.966/2019" },
  { title: "15 SOPs operacionais", desc: "Abertura turma, captação B2B, onboarding e mais" },
  { title: "Manual do franqueado", desc: "120+ páginas — operação, marketing, financeiro" },
  { title: "Portal EAD", desc: "Certificação de instrutores + trilhas aluno" },
  { title: "Landing captação", desc: "Página de franqueados + sequência e-mail" },
  { title: "Modelo financeiro", desc: "3 cenários (conservador, base, otimista)" },
] as const;

export const codekidsStats = [
  { label: "Faturamento/unidade", value: "R$ 800k/ano" },
  { label: "EBITDA unidade", value: "~22%" },
  { label: "NPS pais", value: "62" },
  { label: "Alunos/turma", value: "8–12" },
] as const;
