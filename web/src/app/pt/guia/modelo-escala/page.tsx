import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Modelo de escala de franchising — 4 ondas (Portugal)",
  description:
    "Como escalar franchising em Portugal: piloto, regional e master franchise. Gates, KPIs e anti-padrões — metodologia Franklyn.",
  keywords: [
    "como escalar franchising",
    "expansão franchising Portugal",
    "primeiro franchisee",
    "master franchise Portugal",
  ],
  path: "/pt/guia/modelo-escala",
  market: "pt",
});

export default function PtModeloEscalaPage() {
  return (
    <PageLayout
      market="pt"
      title="Modelo de escala — 4 ondas"
      description="Do diagnóstico à rede nacional em Portugal. Gates de go/no-go em cada fase."
      breadcrumbs={[
        { label: "Guia", href: "/pt/guia/modelo-escala" },
        { label: "Modelo de escala", href: "/pt/guia/modelo-escala" },
      ]}
    >
      <p>
        Escala não é abrir unidades rápido — é <strong>replicar margem com churn baixo</strong>. A Franklyn
        estrutura expansão em quatro ondas, com gates claros antes de acelerar captação.
      </p>

      <h2>Gates de score (diagnóstico)</h2>
      <ul>
        <li><strong>≥ 49/70</strong> — Franquiciar (Onda 0+)</li>
        <li><strong>35–48</strong> — Ajustar antes (pivot, 2ª unidade, docs)</li>
        <li><strong>&lt; 35</strong> — Não franquiciar (licenciamento ou aguardar)</li>
      </ul>

      <h2>Onda 0 — Fundação (semanas 1–14)</h2>
      <p>Rede franchisável no papel + captação pronta.</p>
      <ul>
        <li>Dossier APF</li>
        <li>Manual + 15 SOPs · modelo financeiro em €</li>
        <li>Landing captação · CRM · EAD franchisee</li>
        <li>Mapa exclusividade v1</li>
      </ul>
      <p>
        <strong>Pacote</strong>: EU Standard € 25.000 · Gate: dossier revisado por advogado PT.
      </p>

      <h2>Onda 1 — Piloto (meses 4–9)</h2>
      <p>1–3 franchisees validam sem fundador na operação.</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-franklyn-border text-left">
              <th className="py-2 pr-4">KPI</th>
              <th className="py-2">Meta</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-franklyn-border">
            <tr><td className="py-2 pr-4">Tempo abertura</td><td className="py-2">&lt; 90 dias</td></tr>
            <tr><td className="py-2 pr-4">NPS franchisees</td><td className="py-2">≥ 50</td></tr>
            <tr><td className="py-2 pr-4">EBITDA unidade</td><td className="py-2">≥ 18%</td></tr>
            <tr><td className="py-2 pr-4">Churn piloto</td><td className="py-2">0</td></tr>
          </tbody>
        </table>
      </div>
      <p>Gate: 2 unidades break-even → Onda 2.</p>

      <h2>Onda 2 — Regional (meses 10–24)</h2>
      <ul>
        <li><strong>Unit</strong>: 1 franchisee / concelho ou zona</li>
        <li><strong>Multi-unit</strong>: mesmo operador 2–3 territórios</li>
        <li><strong>Master PT</strong>: Norte, Centro, Lisboa, Algarve</li>
      </ul>
      <p>Gate: 8+ unidades · churn &lt; 5%/ano · royalties cobrem franchisador.</p>

      <h2>Onda 3 — Nacional (meses 25–48)</h2>
      <p>Meta 20–50 unidades. Franchisador self-sustaining.</p>
      <ul>
        <li>Mix receita: taxas 40–50% · royalties 35–45%</li>
        <li>Equipa rede: qualidade, expansão, marketing central, tech</li>
        <li><strong>Pacote Scale</strong>: € 42.000 · portal franchisee · retainer 12m</li>
      </ul>

      <h2>Anti-padrões</h2>
      <ul>
        <li>Dossier antes de score ≥ 49 → rede frágil</li>
        <li>Captação sem piloto → franchisees despreparados</li>
        <li>Fundador forever → não escala</li>
      </ul>
      <p>
        Ver cases:{" "}
        <Link href="/cases/codekids" className="text-franklyn-accent hover:underline">CodeKids (55)</Link>
        {" · "}
        <Link href="/cases/pulse-box" className="text-franklyn-accent hover:underline">Pulse Box (38)</Link>
      </p>

      <div className="rounded-xl border border-franklyn-accent bg-franklyn-bg p-6">
        <p className="font-semibold text-franklyn-ink">Qual onda é a sua?</p>
        <p className="mt-2 text-sm">Diagnóstico gratuito em 45 min — saiba se está na Onda 0 ou ainda no ajuste.</p>
        <Link href="/pt#contato" className="mt-4 inline-block text-sm font-semibold text-franklyn-accent hover:underline">
          Marcar diagnóstico →
        </Link>
      </div>
    </PageLayout>
  );
}
