import type { Metadata } from "next";
import { CasesList } from "@/components/CasesList";
import { Footer } from "@/components/Footer";
import { SubpageHero } from "@/components/SubpageHero";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Cases de franqueabilidade",
  description:
    "Scores reais de 38 a 55/70. Incluímos negócios que ainda não recomendamos franquiciar. Exemplos fictícios com metodologia Franklyn.",
  keywords: [
    "score franqueabilidade",
    "cases franchising Portugal",
    "exemplos franquia",
  ],
  path: "/cases",
});

export default function CasesPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Portefólio"
        title="Cases de franqueabilidade"
        description="Negócios fictícios com scores publicados, incluindo os que ainda não passam no crivo. Valores em euro."
        breadcrumbs={[{ label: "Cases", href: "/cases" }]}
      />
      <main id="main-content" className="page-shell pb-16 pt-4">
        <CasesList hideHeader />
      </main>
      <Footer />
    </>
  );
}
