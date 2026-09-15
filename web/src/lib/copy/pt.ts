import type { MarketCopy } from "./types";
import { plansEU } from "@/lib/data";

export const copyPT: MarketCopy = {
  htmlLang: "pt-PT",
  ogLocale: "pt_PT",
  homePath: "/pt",
  contactPath: "/pt/contact",
  otherMarketPath: "/br",
  otherMarketLabel: "Brasil →",
  defaultPricingMarket: "eu",
  plansBR: [],
  plansEU,
  navLinks: [
    { href: "/#como", label: "Como funciona" },
    { href: "/#pacotes", label: "Pacotes" },
    { href: "/cases", label: "Cases" },
    { href: "/about", label: "Sobre" },
  ],
  home: {
    meta: {
      title: "Consultoria de Franchising — Diagnóstico Gratuito",
      description:
        "Saiba se o seu negócio está pronto para franquiciar em Portugal. Score 0–70, dossier APF, SOPs e captação. Diagnóstico gratuito.",
      keywords: [
        "consultoria franchising Portugal",
        "franquiciar negócio",
        "código deontológico APF",
        "diagnóstico franqueabilidade",
        "expansão franchising Portugal",
      ],
    },
    nav: {
      cta: "Diagnóstico gratuito",
      contact: "Contacto",
      marketLabel: "Portugal",
    },
    hero: {
      eyebrow: "Portugal · valores em €",
      h1: "O seu negócio está pronto para",
      h1Accent: "franquiciar?",
      sub: "Score honesto em 7 critérios. Dossier APF, manual, SOPs e captação — do diagnóstico ao primeiro franchisee em Portugal.",
      ctaPrimary: "Marcar diagnóstico gratuito",
      ctaSecondary: "Ver cases com scores",
      scoreTitle: "Portefólio — scores reais",
    },
    trust: [
      { value: "45 min", label: "Diagnóstico gratuito" },
      { value: "0–70", label: "Score transparente" },
      { value: "APF", label: "Código Deontológico" },
      { value: "8", label: "Especialistas por área" },
    ],
    steps: {
      label: "Como funciona",
      title: "Do score ao primeiro franchisee",
      desc: "Metodologia para restauração, serviços, educação e saúde — foco mercado português.",
      items: [
        { num: "01", title: "Diagnóstico gratuito", desc: "45 min · 7 critérios · franquiciar, ajustar ou aguardar." },
        { num: "02", title: "Estruturação", desc: "Dossier APF, manual, SOPs, financeiro em €." },
        { num: "03", title: "Lançamento", desc: "Landing, CRM, scripts, primeiros candidatos." },
        { num: "04", title: "Escala", desc: "Exclusividade, master franchise, regiões PT." },
      ],
    },
    honesty: {
      label: "Diferencial Franklyn",
      title: "Dizemos não quando é preciso",
      desc: "Nem todo negócio deve franquiciar já. Cases com score 38/70 — honestidade que protege a sua marca.",
      cta: "Ver todos os cases →",
    },
    brandProcess: {
      label: "Identidade de rede",
      title: "Da essência ao manual visual",
      desc: "Processo de marca incluído nos pacotes EU Standard — replicável em toda a rede.",
      items: [
        {
          title: "Mood capture",
          desc: "Imersão na essência do negócio: referências visuais, tom de voz, público-alvo e ambiente desejado na unidade.",
          output: "Entrega: brief sensorial + moodboard inicial",
        },
        {
          title: "Sensory translation",
          desc: "Traduzir o mood em paleta, textura, ritmo espacial e linguagem sensorial — o que o franchisee deve sentir ao abrir.",
          output: "Entrega: direcção cromática + princípios de ambiente",
        },
        {
          title: "Concept sketching",
          desc: "Exploração rápida de logótipo, tipografia, aplicações e peças de captação em rascunho — múltiplas direcções.",
          output: "Entrega: 2–3 conceitos visuais",
        },
        {
          title: "Refinement",
          desc: "Escolher direcção vencedora, refinar sistema visual, manual de uso da marca e templates para franchisees.",
          output: "Entrega: brand kit + manual de identidade",
        },
        {
          title: "Feedback",
          desc: "Rodadas com fundador e franchisees piloto antes de congelar — garante replicabilidade sem perder personalidade local.",
          output: "Entrega: versão final aprovada para dossier e captação",
        },
      ],
    },
    agents: {
      label: "Cobertura completa",
      title: "8 especialistas, um contrato",
      desc: "Franchising, operações, marketing, jurídico, financeiro, comercial, RH e expansão.",
      items: [
        { name: "Franchising", desc: "Modelo, dossier, royalties, território" },
        { name: "Operações", desc: "SOPs, qualidade, auditoria" },
        { name: "Marketing", desc: "Marca, landing, captação" },
        { name: "Jurídico", desc: "Contratos PT, RGPD, UE" },
        { name: "Financeiro", desc: "Unit economics, payback €" },
        { name: "Comercial", desc: "Pipeline, qualificação, fechamento" },
        { name: "RH", desc: "Formação franchisee e EAD" },
        { name: "Expansão", desc: "Mapa PT e master franchise" },
      ],
    },
    pricing: {
      label: "Investimento",
      title: "Pacotes em euro (€)",
      desc: "Diagnóstico sempre gratuito. Contrato em EUR. Remoto-first.",
      brTab: "",
      euTab: "Portugal (€)",
      footnote: "Diagnóstico gratuito antes de qualquer pacote.",
      propostaLink: "Proposta comercial (PDF)",
      ctaPlan: "Pedir proposta",
    },
    faq: {
      label: "Perguntas frequentes",
      title: "Antes de marcar",
      desc: "Respostas directas para o mercado português.",
      items: [
        {
          q: "O diagnóstico é mesmo gratuito?",
          a: "Sim. 45 minutos, score 0–70 e recomendação honesta. Sem cartão, sem obrigação.",
        },
        {
          q: "Existe COF em Portugal como no Brasil?",
          a: "Não há lei equivalente à Lei 13.966. Entrega-se dossier completo em prazo razoável (15–30 dias) + Código APF. Ver /pt/guia/leis-franquia.",
        },
        {
          q: "Quanto tempo até lançar?",
          a: "EU Light: 6–8 semanas. EU Standard: 8–10 semanas até captação.",
        },
        {
          q: "O que inclui o EU Standard?",
          a: "Manual PT, funil comercial, SOPs core, plano de mercado e 4 meses retainer.",
        },
        {
          q: "Garantem venda de franchising?",
          a: "Não — garantimos método e clareza. Captação depende do segmento e execução.",
        },
      ],
    },
    cta: {
      title: "Descubra o seu score em 45 minutos",
      sub: "Gratuito · online · remoto-first",
      placeholder: "O seu melhor e-mail",
      button: "Marcar diagnóstico",
      fine: "Resposta em 2 dias úteis · RGPD",
    },
    footer: {
      tagline: "Consultoria de franchising · Portugal · Valores em €",
    },
  },
};
