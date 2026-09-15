import type { Metadata } from "next";
import { CasesList } from "@/components/CasesList";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { SubpageHero } from "@/components/SubpageHero";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Cases de franqueabilidade — Brasil",
  description: "Portfolio Franklyn Brasil: scores 0–70 em educação, food, serviços, estética e fitness.",
  path: "/br/cases",
  market: "br",
});

export default function BrCasesPage() {
  return (
    <>
      <Nav market="br" />
      <SubpageHero
        market="br"
        eyebrow="Portfolio"
        title="Cases de franqueabilidade"
        description="Negócios fictícios que demonstram diagnóstico honesto — incluindo scores baixos."
        breadcrumbs={[
          { label: "Cases", href: "/br/cases" },
        ]}
      />
      <main id="main-content" className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <CasesList market="br" hideHeader />
      </main>
      <Footer market="br" />
    </>
  );
}
