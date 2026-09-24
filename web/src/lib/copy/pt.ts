import type { MarketCopy } from "./types";
import { plansEU } from "@/lib/data";

export const copy: MarketCopy = {
  locale: "pt",
  htmlLang: "pt-PT",
  ogLocale: "pt_PT",
  homePath: "/",
  contactPath: "/contact",
  defaultPricingMarket: "eu",
  plansEU,
  ui: {
    skipToContent: "Saltar para o conteúdo",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    navMenu: "Menu de navegação",
    navigation: "Navegação",
    legal: "Legal",
    language: "Idioma",
  },
  footerLinks: [
    { href: "/guia/leis-franquia", label: "Legislação APF" },
    { href: "/guia/modelo-escala", label: "Modelo de escala" },
    { href: "/proposta", label: "Proposta comercial" },
  ],
  legalNav: [
    { href: "/privacy", label: "Privacidade" },
    { href: "/cookies", label: "Cookies" },
    { href: "/terms", label: "Termos" },
    { href: "/security", label: "Segurança" },
    { href: "/accessibility", label: "Acessibilidade" },
    { href: "/do-not-sell", label: "Não vender dados" },
  ],
  pages: {
    contact: {
      meta: {
        title: "Contacto e diagnóstico gratuito",
        description:
          "Marque 45 minutos com a Franklyn. Score 0–70, recomendação franca, sem compromisso. Resposta em 2 dias úteis.",
        keywords: [
          "contacto franchising Portugal",
          "diagnóstico franqueabilidade",
          "consultoria franchising Lisboa",
        ],
      },
      title: "Marcar diagnóstico gratuito",
      description:
        "45 minutos para perceber se faz sentido franquiciar e o que falta fazer se ainda não estiver pronto.",
      breadcrumb: "Contacto",
      intro:
        "Envie e-mail para {{email}} ou preencha o formulário abaixo. Trabalhamos remoto em Portugal: Lisboa, Porto ou outra região, tanto faz para a primeira conversa.",
      nextSteps: "O que acontece a seguir",
      scoreDetail: "Detalhe dos critérios e faixas de score na",
      scoreLinkLabel: "secção diagnóstico",
      formTitle: "Formulário de qualificação",
      formIntro:
        "Os dados ajudam-nos a preparar a conversa de 45 minutos e cumprir o RGPD.",
    },
  },
  navLinks: [
    { href: "/#diagnostico", label: "Diagnóstico" },
    { href: "/#como", label: "Como funciona" },
    { href: "/#marca", label: "Marca" },
    { href: "/#pacotes", label: "Pacotes" },
    { href: "/cases", label: "Cases" },
    { href: "/about", label: "Sobre" },
  ],
  home: {
    meta: {
      title: "Consultoria de franchising em Portugal",
      description:
        "A Franklyn ajuda a perceber se o seu negócio aguenta replicar: score 0–70, dossier APF e apoio até ao primeiro franchisee. Diagnóstico gratuito, 45 min.",
      keywords: [
        "consultoria franchising Portugal",
        "franquiciar negócio Portugal",
        "dossier APF",
        "diagnóstico franqueabilidade",
        "captação franchisees",
      ],
    },
    nav: {
      cta: "Marcar diagnóstico",
      contact: "Contacto",
      marketLabel: "Portugal",
    },
    hero: {
      h1: "Bora franquiciar",
      h1Accent: "o seu negócio?",
      sub: "Em 45 minutos avaliamos o seu (score de 0–70) e dizemos-lhe se está na hora de escalar.",
      ctaPrimary: "Marcar diagnóstico gratuito",
      ctaSecondary: "Ver cases reais",
      scoreTitle: "Scores do portefólio",
    },
    trust: [
      { value: "45 min", label: "Primeira conversa" },
      { value: "0–70", label: "Score publicado" },
      { value: "APF", label: "Dossier alinhado" },
      { value: "8", label: "Áreas no mesmo projeto" },
    ],
    diagnosis: {
      label: "Diagnóstico gratuito",
      title: "Como funciona a primeira conversa",
      desc: "45 minutos, online, sem compromisso. No fim sabe onde está e se faz sentido avançar.",
      flow: [
        {
          num: "1",
          title: "Marca",
          desc: "Formulário de qualificação ou e-mail. Respondemos em 2 dias úteis com data para a chamada.",
        },
        {
          num: "2",
          title: "Conversa",
          desc: "Videochamada de 45 min. Falamos do modelo, números, operação e ambição de rede.",
        },
        {
          num: "3",
          title: "Score",
          desc: "Avaliamos 7 critérios e calculamos um score de 0 a 70, na hora ou no dia seguinte.",
        },
        {
          num: "4",
          title: "Veredicto",
          desc: "Franquiciar, ajustar antes de captar, ou esperar. Sem vendas agressivas.",
        },
      ],
      criteriaTitle: "Os 7 critérios",
      criteria: [
        "Replicabilidade",
        "Margem",
        "Marca",
        "Demanda",
        "Documentação",
        "Supply chain",
        "Regulação",
      ],
      outcomesTitle: "O que o score significa",
      outcomes: [
        {
          range: "≥ 49/70",
          title: "Franquiciar",
          desc: "Negócio pronto para dossier, captação e primeiros candidatos.",
          tone: "success",
        },
        {
          range: "35–48",
          title: "Ajustar antes",
          desc: "Há potencial, mas faltam SOPs, piloto ou margem. Fechamos gaps primeiro.",
          tone: "warning",
        },
        {
          range: "< 35",
          title: "Aguardar",
          desc: "Ainda cedo para franquia. Licenciamento, mais lojas próprias ou pivot.",
          tone: "danger",
        },
      ],
      cta: "Marcar diagnóstico",
    },
    steps: {
      label: "Depois do score",
      title: "Três fases até ao primeiro franchisee",
      desc: "Só entramos aqui se o diagnóstico der verde ou amarelo e quiser avançar.",
      items: [
        {
          num: "01",
          title: "Documentação",
          desc: "Manual, SOPs, números em euro e dossier para a APF.",
        },
        {
          num: "02",
          title: "Captação",
          desc: "Landing, CRM e roteiro de conversa com candidatos.",
        },
        {
          num: "03",
          title: "Rede",
          desc: "Exclusividades, master franchise e mapa por região.",
        },
      ],
    },
    honesty: {
      label: "Sem filtro",
      title: "Publicamos scores baixos",
      desc: "Temos cases a 38/70: negócios onde ainda não recomendamos franquiciar. Preferimos perder um contrato a estragar uma marca.",
      cta: "Ver todos os cases",
    },
    brandProcess: {
      label: "Marca de rede",
      title: "Identidade que o franchisee consegue usar",
      desc: "Nos pacotes EU Standard, a marca nasce pronta para manual, loja e captação. Não fica só no moodboard.",
      items: [
        {
          title: "Imersão",
          desc: "Conversamos com quem opera o negócio: cliente típico, tom de voz, referências visuais, o que não pode mudar de loja para loja.",
          output: "Brief + moodboard inicial",
        },
        {
          title: "Tradução sensorial",
          desc: "Cor, luz, materiais e ritmo do espaço: o que o franchisee deve sentir ao abrir a unidade.",
          output: "Paleta + princípios de ambiente",
        },
        {
          title: "Rascunhos",
          desc: "Duas ou três direções de logótipo, tipografia e peças de captação antes de escolher uma linha.",
          output: "Conceitos visuais comparáveis",
        },
        {
          title: "Refino",
          desc: "Sistema fechado: manual de marca, templates e regras de uso para a rede.",
          output: "Brand kit + manual",
        },
        {
          title: "Validação",
          desc: "Rodada com fundador (e piloto, se existir) antes de ir para o dossier.",
          output: "Versão final aprovada",
        },
      ],
    },
    agents: {
      label: "Equipa",
      title: "Oito áreas, um projeto",
      desc: "Franchising, operações, marketing, jurídico, financeiro, comercial, RH e expansão, todos alinhados desde o diagnóstico.",
      items: [
        { name: "Franchising", desc: "Modelo, royalties, território" },
        { name: "Operações", desc: "SOPs, qualidade, auditorias" },
        { name: "Marketing", desc: "Marca, landing, captação" },
        { name: "Jurídico", desc: "Contratos PT, RGPD" },
        { name: "Financeiro", desc: "Unit economics, payback" },
        { name: "Comercial", desc: "Pipeline e fecho" },
        { name: "RH", desc: "Formação de franchisees" },
        { name: "Expansão", desc: "Mapa PT e master" },
      ],
    },
    pricing: {
      label: "Pacotes",
      title: "Valores em euro",
      desc: "O diagnóstico é sempre gratuito. Só avançamos para pacote se o score o justificar.",
      euTab: "Portugal (€)",
      footnote: "Sem compromisso na primeira conversa.",
      propostaLink: "Ver proposta (PDF)",
      ctaPlan: "Pedir proposta",
    },
    faq: {
      label: "FAQ",
      title: "O que costumam perguntar",
      desc: "Respostas curtas. Se faltar algo, escreva-nos.",
      items: [
        {
          q: "O diagnóstico é gratuito mesmo?",
          a: "Sim. São 45 minutos, score 0–70 e uma recomendação franca. Não pedimos cartão nem assinatura.",
        },
        {
          q: "O que exige a lei em Portugal?",
          a: "Informação completa em boa-fé antes de contratos vinculativos (alinhada ao Código Deontológico da APF). Entregamos dossier nesse espírito. Detalhe em /guia/leis-franquia.",
        },
        {
          q: "Quanto tempo demora?",
          a: "EU Light: 6–8 semanas. EU Standard: 8–10 semanas até estar pronto a captar candidatos.",
        },
        {
          q: "O que vem no EU Standard?",
          a: "Manual em português, funil comercial, SOPs core, plano de mercado e 4 meses de acompanhamento.",
        },
        {
          q: "Garantem que vendo franquias?",
          a: "Não. Garantimos método, documentação e clareza. A captação depende do segmento, preço e execução sua.",
        },
      ],
    },
    cta: {
      title: "Quer saber o score?",
      sub: "45 minutos · online · sem compromisso",
      namePlaceholder: "O seu nome",
      placeholder: "E-mail profissional",
      button: "Marcar diagnóstico",
      fine: "Respondemos em 2 dias úteis",
    },
    footer: {
      tagline: "Consultoria de franchising · Portugal",
    },
    features: [
      {
        title: "Diagnóstico em 45 min",
        desc: "Sete critérios, score de 0 a 70. No fim sabe se avança, ajusta ou espera.",
        color: "violet",
      },
      {
        title: "Dossier pronto para APF",
        desc: "Manual, SOPs e números em euro: o pacote que o candidato espera ver.",
        color: "pink",
      },
      {
        title: "Até ao primeiro candidato",
        desc: "Landing, CRM e guião de conversa no mesmo fluxo.",
        color: "amber",
      },
    ],
    socialProof: {
      label: "Segmentos onde já aplicámos o método",
      segments: [
        "Educação STEM",
        "Café & restauração",
        "Serviços móveis",
        "Estética",
        "Fitness",
        "Retail",
      ],
    },
  },
};
