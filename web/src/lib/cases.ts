export type CaseVerdictTone = "success" | "info" | "warning" | "danger";

export type PortfolioCase = {
  slug: string;
  name: string;
  segment: string;
  segmentPT?: string;
  score: number;
  verdict: string;
  verdictPT?: string;
  verdictTone: CaseVerdictTone;
  package: string;
  packagePT: string;
  highlight: boolean;
  detailUrl: string;
  flagship?: boolean;
};

export const portfolioCases: PortfolioCase[] = [
  {
    slug: "codekids",
    name: "CodeKids",
    segment: "Programação para crianças",
    segmentPT: "Programação para crianças",
    score: 55,
    verdict: "Franquear",
    verdictPT: "Franquiciar",
    verdictTone: "success",
    package: "Growth — R$ 150.000",
    packagePT: "EU Standard — € 25.000",
    highlight: true,
    detailUrl: "/cases/codekids",
    flagship: true,
  },
  {
    slug: "grao-e-cia",
    name: "Grão & Cia",
    segment: "Café especializado",
    segmentPT: "Café especializado",
    score: 52,
    verdict: "Franquear c/ ajustes",
    verdictPT: "Franquiciar c/ ajustes",
    verdictTone: "info",
    package: "Starter → Growth",
    packagePT: "EU Light → EU Standard",
    highlight: true,
    detailUrl: "/cases/grao-e-cia",
    flagship: true,
  },
  {
    slug: "ecoshine",
    name: "EcoShine",
    segment: "Lavagem ecológica móvel",
    segmentPT: "Lavagem ecológica móvel",
    score: 48,
    verdict: "Ajustar antes",
    verdictPT: "Ajustar antes",
    verdictTone: "warning",
    package: "Consultoria pivot R$ 25k",
    packagePT: "Consultoria pivot € 4.200",
    highlight: false,
    detailUrl: "/cases/ecoshine",
  },
  {
    slug: "dermapure",
    name: "DermaPure",
    segment: "Estética facial",
    segmentPT: "Estética facial",
    score: 44,
    verdict: "Ajustar antes",
    verdictPT: "Ajustar antes",
    verdictTone: "warning",
    package: "Preparação R$ 45k",
    packagePT: "Preparação € 7.500",
    highlight: false,
    detailUrl: "/cases/dermapure",
  },
  {
    slug: "pulse-box",
    name: "Pulse Box",
    segment: "Academia boutique",
    segmentPT: "Academia boutique",
    score: 38,
    verdict: "Não franquear ainda",
    verdictPT: "Não franquiciar ainda",
    verdictTone: "danger",
    package: "Licenciamento R$ 55k",
    packagePT: "Licenciamento € 9.200",
    highlight: false,
    detailUrl: "/cases/pulse-box",
  },
];
