import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Leis de franquia no Brasil — Lei 13.966 e COF",
  description:
    "Guia Franklyn Brasil: COF obrigatória (10 dias), conteúdo mínimo, sanções e checklist compliance para franquear no Brasil.",
  keywords: [
    "lei franquia Brasil",
    "Lei 13.966 COF",
    "circular oferta franquia",
    "compliance franquia Brasil",
  ],
  path: "/br/guia/leis-franquia",
  market: "br",
});

export default function BrLeisFranquiaPage() {
  return (
    <PageLayout
      market="br"
      title="Leis de franquia — Brasil"
      description="COF, prazos, sanções e checklist compliance. Referência — não substitui advogado."
      breadcrumbs={[
        { label: "Guia", href: "/br/guia/leis-franquia" },
        { label: "Leis de franquia", href: "/br/guia/leis-franquia" },
      ]}
    >
      <p>
        No Brasil, a <strong>Lei 13.966/2019</strong> regula a franquia empresarial. O descumprimento do
        prazo ou conteúdo da COF gera <strong>anulabilidade</strong> do contrato e restituição de taxas.
      </p>

      <h2>Lei 13.966/2019 — o essencial</h2>
      <p>
        Franquia = autorização de uso de marca + método operacional, com remuneração, sem vínculo
        empregatício. O franqueador deve entregar a <strong>COF</strong> (Circular de Oferta de Franquia)
        em português, de forma objetiva.
      </p>

      <h3>Conteúdo obrigatório da COF</h3>
      <ul>
        <li>Histórico e qualificação do franqueador (CNPJ)</li>
        <li>Balanços dos 2 últimos exercícios</li>
        <li>Litígios relevantes · perfil do franqueado ideal</li>
        <li>Investimento total, taxa, royalties, fundo marketing</li>
        <li>Lista de franqueados e desligados (24 meses)</li>
        <li>Território · fornecedores obrigatórios</li>
        <li>Situação da marca no INPI</li>
        <li>Minuta do contrato-padrão</li>
      </ul>

      <h3>Prazo e sanções</h3>
      <p>
        <strong>Prazo mínimo</strong>: 10 dias antes de contrato, pré-contrato ou qualquer pagamento.
        Descumprimento → anulabilidade + restituição + perdas e danos.
      </p>

      <h2>Checklist Franklyn (Brasil)</h2>
      <ul>
        <li>Score de franqueabilidade ≥ 49/70</li>
        <li>COF revisada por advogado especializado</li>
        <li>Marca registrada ou em processo no INPI</li>
        <li>Manual operacional + SOPs validados em unidade piloto</li>
        <li>Modelo financeiro com payback realista em R$</li>
      </ul>

      <div className="rounded-xl border border-franklyn-accent bg-franklyn-bg p-6">
        <p className="font-semibold text-franklyn-ink">Precisa de COF?</p>
        <p className="mt-2 text-sm">
          Comece pelo diagnóstico gratuito — score ≥ 49/70 para seguir com pacote Growth.
        </p>
        <Link href="/br#contato" className="mt-4 inline-block text-sm font-semibold text-franklyn-accent hover:underline">
          Agendar diagnóstico →
        </Link>
      </div>

      <p className="text-xs">
        Referência:{" "}
        <a
          href="http://planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/l13966.htm"
          className="text-franklyn-accent hover:underline"
          rel="noopener noreferrer"
        >
          Lei 13.966/2019
        </a>
      </p>
    </PageLayout>
  );
}
