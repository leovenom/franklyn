import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Legislação de franchising em Portugal — APF e boa-fé",
  description:
    "Guia Franklyn Portugal: dossier de boa-fé, Código Deontológico APF, prazos e checklist compliance para franquiciar em Portugal.",
  keywords: [
    "franchising Portugal legislação",
    "código deontológico APF",
    "dossier franchising Portugal",
    "RGPD franchising",
  ],
  path: "/pt/guia/leis-franquia",
  market: "pt",
});

export default function PtLeisFranquiaPage() {
  return (
    <PageLayout
      market="pt"
      title="Legislação de franchising — Portugal"
      description="Boa-fé, dossier APF, prazos e checklist compliance. Referência — não substitui advogado."
      breadcrumbs={[
        { label: "Guia", href: "/pt/guia/leis-franquia" },
        { label: "Legislação", href: "/pt/guia/leis-franquia" },
      ]}
    >
      <p>
        Em Portugal não existe uma lei específica como a Lei 13.966 brasileira. O franchisador deve informar
        com <strong>boa-fé</strong> (Código Civil art. 227.º) antes de documentos vinculativos. A APF segue
        o <strong>Código Deontológico Europeu</strong>.
      </p>

      <h2>Código Deontológico APF</h2>
      <p>
        Informação escrita completa em prazo razoável (tipicamente 15–30 dias) + cópia do Código Deontológico.
        O incumprimento pode gerar responsabilidade pré-contratual (<em>culpa in contrahendo</em>).
      </p>

      <h3>Dossier recomendado</h3>
      <ul>
        <li>Identificação societária (NIF, RCS) e contas certificadas</li>
        <li>Descrição do sistema e investimento total em €</li>
        <li>Taxas, royalties, rede activa e cessados</li>
        <li>Contrato em português europeu</li>
        <li>Conformidade RGPD e regulamento vertical UE</li>
        <li>Marca registada no INPI PT ou EUIPO</li>
      </ul>

      <h2>Checklist Franklyn (Portugal)</h2>
      <ul>
        <li>Score de franqueabilidade ≥ 49/70</li>
        <li>Dossier revisado por advogado PT especializado</li>
        <li>Contrato adaptado à lei portuguesa e RGPD</li>
        <li>Manual + SOPs validados em unidade piloto</li>
        <li>Modelo financeiro com payback realista em €</li>
      </ul>

      <div className="rounded-xl border border-franklyn-accent bg-franklyn-bg p-6">
        <p className="font-semibold text-franklyn-ink">Precisa de dossier APF?</p>
        <p className="mt-2 text-sm">
          Comece pelo diagnóstico gratuito — score ≥ 49/70 para seguir com pacote EU Standard.
        </p>
        <Link href="/pt#contato" className="mt-4 inline-block text-sm font-semibold text-franklyn-accent hover:underline">
          Marcar diagnóstico →
        </Link>
      </div>

      <p className="text-xs">
        Referência:{" "}
        <a
          href="https://associacaofranchising.pt/legislacao-em-portugal/"
          className="text-franklyn-accent hover:underline"
          rel="noopener noreferrer"
        >
          APF Portugal
        </a>
      </p>
    </PageLayout>
  );
}
