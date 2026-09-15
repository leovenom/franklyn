import type { MarketCopy } from "./types";
import { plansBR } from "@/lib/data";

export const copyBR: MarketCopy = {
  htmlLang: "pt-BR",
  ogLocale: "pt_BR",
  homePath: "/br",
  contactPath: "/br/contact",
  otherMarketPath: "/pt",
  otherMarketLabel: "Portugal →",
  defaultPricingMarket: "br",
  plansBR,
  plansEU: [],
  navLinks: [
    { href: "/#como", label: "Como funciona" },
    { href: "/#marca", label: "Marca" },
    { href: "/#pacotes", label: "Pacotes" },
    { href: "/cases", label: "Cases" },
    { href: "/about", label: "Sobre" },
  ],
  home: {
    meta: {
      title: "Consultoria de Franquias — Diagnóstico Grátis em 45 Min",
      description:
        "Descubra se seu negócio está pronto para franquear no Brasil. Score 0–70, COF Lei 13.966, SOPs e captação. Diagnóstico gratuito.",
      keywords: [
        "consultoria de franquias",
        "franquear meu negócio",
        "COF circular oferta franquia",
        "Lei 13.966",
        "diagnóstico franqueabilidade",
        "expansão franquias Brasil",
      ],
    },
    nav: {
      cta: "Diagnóstico grátis",
      contact: "Contato",
      marketLabel: "Brasil",
    },
    hero: {
      eyebrow: "Brasil · valores em R$",
      h1: "Seu negócio está pronto para",
      h1Accent: "franquear?",
      sub: "Score honesto em 7 critérios. COF, manual, SOPs e captação — do diagnóstico ao primeiro franqueado no Brasil.",
      ctaPrimary: "Agendar diagnóstico grátis",
      ctaSecondary: "Ver cases com scores",
      scoreTitle: "Portfolio — score real",
    },
    trust: [
      { value: "45 min", label: "Diagnóstico gratuito" },
      { value: "0–70", label: "Score transparente" },
      { value: "COF", label: "Lei 13.966/2019" },
      { value: "8", label: "Especialistas por setor" },
    ],
    steps: {
      label: "Como funciona",
      title: "Do score ao primeiro franqueado",
      desc: "Metodologia para educação, food, serviços e saúde — foco expansão Brasil.",
      items: [
        { num: "01", title: "Diagnóstico grátis", desc: "45 min · 7 critérios · franquear, ajustar ou esperar." },
        { num: "02", title: "Estruturação", desc: "COF Lei 13.966, manual, SOPs, financeiro em R$." },
        { num: "03", title: "Lançamento", desc: "Landing, CRM, scripts, primeiros candidatos." },
        { num: "04", title: "Escala", desc: "Mapa de exclusividade, master franchise, novos estados." },
      ],
    },
    honesty: {
      label: "Diferencial Franklyn",
      title: "A gente diz não quando precisa",
      desc: "Nem todo negócio deve franquear agora. Cases com score 38/70 — honestidade que protege sua marca.",
      cta: "Ver todos os cases →",
    },
    brandProcess: {
      label: "Identidade de rede",
      title: "Da essência ao manual visual",
      desc: "Processo de marca incluído nos pacotes Growth e Scale — replicável em toda a rede.",
      items: [
        {
          title: "Mood capture",
          desc: "Imersão na essência do negócio: referências visuais, tom de voz, público-alvo e ambiente desejado na unidade.",
          output: "Entrega: brief sensorial + moodboard inicial",
        },
        {
          title: "Sensory translation",
          desc: "Traduzir o mood em paleta, textura, ritmo espacial e linguagem sensorial — o que o franqueado deve sentir ao abrir.",
          output: "Entrega: direção cromática + princípios de ambiente",
        },
        {
          title: "Concept sketching",
          desc: "Exploração rápida de logotipo, tipografia, aplicações e peças de captação em rascunho — múltiplas direções.",
          output: "Entrega: 2–3 conceitos visuais",
        },
        {
          title: "Refinement",
          desc: "Escolher direção vencedora, refinar sistema visual, manual de uso da marca e templates para franqueados.",
          output: "Entrega: brand kit + manual de identidade",
        },
        {
          title: "Feedback",
          desc: "Rodadas com fundador e franqueados piloto antes de congelar — garante replicabilidade sem perder personalidade local.",
          output: "Entrega: versão final aprovada para COF e captação",
        },
      ],
    },
    agents: {
      label: "Cobertura completa",
      title: "8 especialistas, um só contrato",
      desc: "Franquia, operações, marketing, jurídico, financeiro, comercial, RH e expansão.",
      items: [
        { name: "Franquia", desc: "Modelo, COF, royalties, território" },
        { name: "Operações", desc: "SOPs, qualidade, auditoria" },
        { name: "Marketing", desc: "Marca, landing, captação" },
        { name: "Jurídico", desc: "Contratos BR, INPI, compliance" },
        { name: "Financeiro", desc: "Unit economics, payback R$" },
        { name: "Comercial", desc: "Pipeline, qualificação, fechamento" },
        { name: "RH", desc: "Treinamento franqueado e EAD" },
        { name: "Expansão", desc: "Mapa nacional e master franchise" },
      ],
    },
    pricing: {
      label: "Investimento",
      title: "Pacotes em real (R$)",
      desc: "Diagnóstico sempre gratuito. Contrato em BRL. Referência € indicativa nos pacotes.",
      brTab: "Brasil (R$)",
      euTab: "",
      footnote: "Diagnóstico gratuito antes de qualquer pacote.",
      propostaLink: "Baixar proposta comercial (PDF)",
      ctaPlan: "Quero proposta",
    },
    faq: {
      label: "Perguntas frequentes",
      title: "Antes de agendar",
      desc: "Respostas diretas para o mercado brasileiro.",
      items: [
        {
          q: "O diagnóstico é realmente gratuito?",
          a: "Sim. 45 minutos, score 0–70 e recomendação honesta. Sem cartão, sem compromisso.",
        },
        {
          q: "O que é a COF?",
          a: "Circular de Oferta de Franquia — documento obrigatório pela Lei 13.966, entregue 10 dias antes de assinar ou pagar. Veja /br/guia/leis-franquia.",
        },
        {
          q: "Quanto tempo leva para lançar?",
          a: "Starter: 6–8 semanas. Growth: 10–14 semanas até captação. Depende do gap de documentação.",
        },
        {
          q: "O que inclui o Growth?",
          a: "Manual + 15 SOPs, COF rascunho, CRM, EAD, landing de captação, financeiro e 6 meses retainer.",
        },
        {
          q: "Vocês garantem venda de franquias?",
          a: "Não — garantimos método e clareza. Captação depende do segmento e da execução.",
        },
      ],
    },
    cta: {
      title: "Descubra seu score em 45 minutos",
      sub: "Gratuito · online · você sai sabendo se franqueia agora, depois ou nunca",
      placeholder: "Seu melhor e-mail",
      button: "Agendar diagnóstico",
      fine: "Resposta em até 2 dias úteis · LGPD",
    },
    footer: {
      tagline: "Consultoria de franquias · Brasil · Valores em R$",
    },
  },
};
