import type { Metadata } from "next";
import { CasesList } from "@/components/CasesList";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Cases de franqueabilidade — Portugal",
  description: "Portefólio Franklyn Portugal: scores 0–70 com veredicto honesto.",
  path: "/pt/cases",
  market: "pt",
});

export default function PtCasesPage() {
  return (
    <>
      <Nav market="pt" />
      <main id="main-content" className="mx-auto max-w-4xl px-6 py-16">
        <CasesList market="pt" />
      </main>
      <Footer market="pt" />
    </>
  );
}
