export type CaseVerdictTone = "success" | "info" | "warning" | "danger";

export type PortfolioCase = {
  slug: string;
  name: string;
  segment: string;
  score: number;
  verdict: string;
  verdictTone: CaseVerdictTone;
  package: string;
  highlight: boolean;
  detailUrl: string;
  flagship?: boolean;
};

export const portfolioCases: PortfolioCase[] = [
  {
    slug: "codekids",
    name: "CodeKids",
    segment: "Programação para crianças",
    score: 55,
    verdict: "Franquiciar",
    verdictTone: "success",
    package: "EU Standard: € 25.000",
    highlight: true,
    detailUrl: "/cases/codekids",
    flagship: true,
  },
  {
    slug: "grao-e-cia",
    name: "Grão & Cia",
    segment: "Café especializado",
    score: 52,
    verdict: "Franquiciar c/ ajustes",
    verdictTone: "info",
    package: "EU Light → EU Standard",
    highlight: true,
    detailUrl: "/cases/grao-e-cia",
    flagship: true,
  },
  {
    slug: "ecoshine",
    name: "EcoShine",
    segment: "Lavagem ecológica móvel",
    score: 48,
    verdict: "Ajustar antes",
    verdictTone: "warning",
    package: "Consultoria pivot € 4.200",
    highlight: false,
    detailUrl: "/cases/ecoshine",
  },
  {
    slug: "dermapure",
    name: "DermaPure",
    segment: "Estética facial",
    score: 44,
    verdict: "Ajustar antes",
    verdictTone: "warning",
    package: "Preparação € 7.500",
    highlight: false,
    detailUrl: "/cases/dermapure",
  },
  {
    slug: "pulse-box",
    name: "Pulse Box",
    segment: "Academia boutique",
    score: 38,
    verdict: "Não franquiciar ainda",
    verdictTone: "danger",
    package: "Licenciamento € 9.200",
    highlight: false,
    detailUrl: "/cases/pulse-box",
  },
];
