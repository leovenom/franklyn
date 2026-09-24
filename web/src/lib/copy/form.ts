export type FormCopy = {
  sections: Record<"contact" | "business" | "ambition" | "notes" | "legal", string>;
  fields: {
    name: { label: string; placeholder: string };
    email: { label: string; placeholder: string };
    phone: { label: string; placeholder: string };
    role: { label: string; placeholder: string };
    businessName: { label: string; placeholder: string };
    companyTaxId: { label: string; placeholder: string; hint: string };
    sector: { label: string; placeholder: string };
    units: { label: string; placeholder: string };
    operationsYears: { label: string; placeholder: string };
    revenueBand: { label: string; placeholder: string };
    region: { label: string; placeholder: string };
    goal: { label: string; placeholder: string };
    horizon: { label: string; placeholder: string };
    hasFranchisees: { label: string; placeholder: string };
    message: { label: string; placeholder: string };
  };
  options: {
    sectors: string[];
    units: string[];
    years: string[];
    revenue: string[];
    regions: string[];
    goals: string[];
    horizons: string[];
    roles: string[];
    franchisees: string[];
  };
  validation: {
    nameRequired: string;
    emailRequired: string;
    phoneRequired: string;
    roleRequired: string;
    businessNameRequired: string;
    companyTaxIdRequired: string;
    companyTaxIdInvalid: string;
    sectorRequired: string;
    unitsRequired: string;
    operationsYearsRequired: string;
    revenueRequired: string;
    regionRequired: string;
    goalRequired: string;
    horizonRequired: string;
    franchiseesRequired: string;
    consentContactRequired: string;
    consentRepresentRequired: string;
  };
  consent: {
    contact: string;
    represent: string;
    privacyLink: string;
  };
  quick: {
    intro: string;
    fullLink: string;
    fullHref: string;
  };
  submit: {
    quick: string;
    full: string;
    loading: string;
  };
  success: {
    quick: string;
    full: string;
  };
  why: {
    title: string;
    marketing: string;
    legal: string;
  };
};

export const formCopy: FormCopy = {
  sections: {
    contact: "Quem contacta",
    business: "O negócio",
    ambition: "Ambição de rede",
    notes: "Contexto extra",
    legal: "Legal e privacidade",
  },
  fields: {
    name: { label: "Nome completo", placeholder: "Ana Silva" },
    email: { label: "E-mail profissional", placeholder: "ana@empresa.pt" },
    phone: { label: "Telefone", placeholder: "+351 912 345 678" },
    role: { label: "Cargo na empresa", placeholder: "Selecionar" },
    businessName: { label: "Marca / nome comercial", placeholder: "Ex.: Grão & Cia" },
    companyTaxId: {
      label: "NIF da empresa",
      placeholder: "Ex.: 501 234 567",
      hint: "Número de identificação fiscal da entidade que pretende franquiciar.",
    },
    sector: { label: "Setor", placeholder: "Selecionar" },
    units: { label: "Unidades em operação (próprias)", placeholder: "Selecionar" },
    operationsYears: { label: "Há quanto tempo opera?", placeholder: "Selecionar" },
    revenueBand: { label: "Faturação anual", placeholder: "Selecionar" },
    region: { label: "Região principal hoje", placeholder: "Selecionar" },
    goal: { label: "O que procura agora?", placeholder: "Selecionar" },
    horizon: { label: "Horizonte para abrir rede", placeholder: "Selecionar" },
    hasFranchisees: { label: "Já tem franchisees?", placeholder: "Selecionar" },
    message: {
      label: "Algo relevante para a primeira conversa?",
      placeholder: "Ex.: 2 lojas em Lisboa, margem ~18%, manual ainda informal…",
    },
  },
  options: {
    sectors: [
      "Restauração / café",
      "Retail",
      "Serviços",
      "Saúde / estética",
      "Educação / formação",
      "Fitness / wellness",
      "Tecnologia / software",
      "Outro",
    ],
    units: ["0 (só projeto)", "1", "2–3", "4–10", "10+"],
    years: ["< 1 ano", "1–3 anos", "3–5 anos", "5+ anos"],
    revenue: ["< € 250k", "€ 250k – 500k", "€ 500k – 1M", "€ 1M – 3M", "> € 3M"],
    regions: [
      "Norte",
      "Centro",
      "Lisboa e Vale",
      "Alentejo",
      "Algarve",
      "Todo Portugal",
      "Internacional (foco PT)",
    ],
    goals: [
      "Perceber se está pronto para franquiciar",
      "Preparar dossier e captar franchisees",
      "Ajustar modelo antes de escalar",
      "Só informação inicial",
    ],
    horizons: ["6 meses", "12 meses", "18+ meses", "Ainda não sei"],
    roles: [
      "Fundador(a)",
      "CEO / Direção geral",
      "Operações",
      "Comercial / expansão",
      "Jurídico / compliance",
      "Outro",
    ],
    franchisees: ["Sim", "Não", "Em preparação"],
  },
  validation: {
    nameRequired: "Nome obrigatório.",
    emailRequired: "E-mail obrigatório.",
    phoneRequired: "Telefone obrigatório.",
    roleRequired: "Cargo obrigatório.",
    businessNameRequired: "Nome da marca obrigatório.",
    companyTaxIdRequired: "NIF da empresa obrigatório.",
    companyTaxIdInvalid: "NIF inválido. Indique 9 dígitos válidos.",
    sectorRequired: "Setor obrigatório.",
    unitsRequired: "Unidades obrigatório.",
    operationsYearsRequired: "Tempo de operação obrigatório.",
    revenueRequired: "Faturação anual obrigatória.",
    regionRequired: "Região obrigatória.",
    goalRequired: "Objetivo obrigatório.",
    horizonRequired: "Horizonte obrigatório.",
    franchiseesRequired: "Indique se já tem franchisees.",
    consentContactRequired: "Aceite o contacto e a política de privacidade.",
    consentRepresentRequired: "Confirme que pode representar a empresa.",
  },
  consent: {
    contact:
      "Aceito ser contactado(a) para agendar o diagnóstico e autorizo o tratamento dos dados para este pedido, conforme a",
    represent:
      "Confirmo que tenho poderes para falar em nome desta empresa sobre franchising e expansão.",
    privacyLink: "Política de Privacidade",
  },
  quick: {
    intro: "2 minutos · dados para prepararmos o diagnóstico",
    fullLink: "Formulário completo para franchising",
    fullHref: "/contact#formulario",
  },
  submit: {
    quick: "Marcar diagnóstico",
    full: "Enviar pedido de diagnóstico",
    loading: "A enviar…",
  },
  success: {
    quick: "Obrigado, recebemos o seu pedido. Entramos em contacto em breve.",
    full: "Pedido enviado. Respondemos em 2 dias úteis com data para a chamada de 45 minutos.",
  },
  why: {
    title: "Porque pedimos estes dados",
    marketing:
      "Marketing: perceber setor, maturidade e ambição de rede antes da call — para a conversa ser útil, não genérica.",
    legal:
      "Legal: NIF para identificar a entidade, confirmação de representação e base RGPD para contacto. O diagnóstico não substitui advogado nem dossier APF.",
  },
};
