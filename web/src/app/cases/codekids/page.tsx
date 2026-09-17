import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { BrandKitShowcase } from "@/components/BrandKitShowcase";
import { Button } from "@/components/ui/Button";
import { codekidsBrandKit } from "@/lib/brand-kits/codekids";
import { CODEKIDS, codekidsDeliverables, codekidsStats } from "@/lib/codekids";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Case CodeKids: flagship",
  description:
    "Case CodeKids: educação STEM, score 55/70, exemplo de pacote EU Standard com dossier APF, SOPs e landing de captação.",
  path: "/cases/codekids",
});

const sops = [
  "01 · Abertura de turma",
  "02 · Captação em escolas (B2B)",
  "03 · Substituição de instrutor",
  "04 · Onboarding aluno e pais",
  "05 · Fechamento mensal e KPIs",
];

export default function CodeKidsCasePage() {
  return (
    <>
      <main id="main-content" className="page-shell pb-16 pt-6">
        <Link href="/cases" className="nav-link text-sm text-franklyn-muted">
          ← Cases
        </Link>

        <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="label-caps text-franklyn-accent">Case flagship</p>
            <h1 className="font-display mt-2 text-4xl text-franklyn-ink">{CODEKIDS.name}</h1>
            <p className="mt-2 text-lg text-franklyn-muted">{CODEKIDS.tagline}</p>
          </div>
          <div className="sticker-card-featured rounded-card px-6 py-4 text-center">
            <p className="font-display text-3xl tabular-nums text-franklyn-ink">{CODEKIDS.score}/70</p>
            <p className="mt-1 text-sm text-emerald-600">{CODEKIDS.verdict}</p>
          </div>
        </div>

        <p className="mt-8 max-w-2xl text-franklyn-muted">
          Demo premium do pacote <strong className="text-franklyn-ink">EU Standard (€ 25.000)</strong>: dossier APF,
          5 SOPs operacionais prioritários e landing de captação de franchisees, prontos para apresentação comercial.
        </p>

        <section className="mt-12">
          <h2 className="font-display text-xl text-franklyn-ink">Números do negócio</h2>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {codekidsStats.map((s) => (
              <div key={s.label} className="sticker-card rounded-card p-4">
                <dt className="text-xs text-franklyn-muted">{s.label}</dt>
                <dd className="mt-1 text-lg font-medium text-franklyn-ink">{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <BrandKitShowcase kit={codekidsBrandKit} />

        <section className="mt-12">
          <h2 className="font-display text-xl text-franklyn-ink">Entregáveis Franklyn</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {codekidsDeliverables.map((d) => (
              <li key={d.title} className="sticker-card rounded-card p-4">
                <p className="font-medium text-franklyn-ink">{d.title}</p>
                <p className="mt-1 text-sm text-franklyn-muted">{d.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl text-franklyn-ink">Manual do franchisee</h2>
          <div className="sticker-card mt-4 rounded-card p-6">
            <p className="font-medium text-franklyn-ink">Capítulos 1–3 completos</p>
            <p className="mt-2 text-sm text-franklyn-muted">
              Cap. 1: visão e modelo · Cap. 2: equipa · Cap. 3: infraestrutura, layout, equipamentos, checklist 90
              dias.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl text-franklyn-ink">SOPs incluídos (amostra 5/15)</h2>
          <ol className="mt-4 space-y-2">
            {sops.map((s) => (
              <li key={s} className="sticker-card flex items-center gap-3 rounded-card px-4 py-3 text-sm">
                <span className="font-mono text-franklyn-accent">✓</span>
                {s}
              </li>
            ))}
          </ol>
        </section>

        <section className="sticker-card-featured mt-12 rounded-card border border-franklyn-accent/30 p-8">
          <h2 className="font-display text-xl text-franklyn-ink">Ver demo ao vivo</h2>
          <p className="mt-2 text-franklyn-muted">
            Landing de captação de franchisees, como o candidato veria a oportunidade CodeKids.
          </p>
          <Button href="/cases/codekids/franquia" className="mt-6">
            Abrir landing CodeKids →
          </Button>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl text-franklyn-ink">Modelo financeiro (resumo dossier)</h2>
          <div className="sticker-card mt-4 overflow-x-auto rounded-card">
            <table className="w-full text-sm">
              <thead className="bg-franklyn-surface">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-franklyn-ink">Item</th>
                  <th className="px-4 py-3 text-left font-medium text-franklyn-ink">Valor (€)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-franklyn-border">
                <tr>
                  <td className="px-4 py-3 text-franklyn-muted">Taxa de franchising</td>
                  <td className="px-4 py-3 text-franklyn-ink">{CODEKIDS.fee}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-franklyn-muted">Investimento total</td>
                  <td className="px-4 py-3 text-franklyn-ink">{CODEKIDS.investment}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-franklyn-muted">Royalties + fundo marketing</td>
                  <td className="px-4 py-3 text-franklyn-ink">
                    {CODEKIDS.royalty} + {CODEKIDS.marketingFund}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-franklyn-muted">Payback estimado</td>
                  <td className="px-4 py-3 text-franklyn-ink">{CODEKIDS.payback}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <p className="mt-12 text-sm text-franklyn-muted">
          Quer um case assim para o seu negócio?{" "}
          <Link href="/#contato" className="nav-link text-franklyn-accent">
            Marque diagnóstico gratuito
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
