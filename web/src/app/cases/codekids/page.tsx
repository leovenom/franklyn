import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { BrandKitShowcase } from "@/components/BrandKitShowcase";
import { codekidsBrandKit } from "@/lib/brand-kits/codekids";
import { CODEKIDS, codekidsDeliverables, codekidsStats } from "@/lib/codekids";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Case CodeKids — flagship",
  description:
    "Case flagship Franklyn: educação STEM, score 55/70, COF, 5 SOPs operacionais e landing de captação de franqueados.",
  path: "/cases/codekids",
});

const sops = [
  "01 — Abertura de turma",
  "02 — Captação em escolas (B2B)",
  "03 — Substituição de instrutor",
  "04 — Onboarding aluno e pais",
  "05 — Fechamento mensal e KPIs",
];

export default function CodeKidsCasePage() {
  return (
    <>
      <Nav market="br" />
      <main id="main-content" className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/br/cases" className="text-sm text-franklyn-muted hover:text-franklyn-accent">
          ← Cases
        </Link>

        <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-franklyn-accent">Case flagship</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">{CODEKIDS.name}</h1>
            <p className="mt-2 text-lg text-franklyn-muted">{CODEKIDS.tagline}</p>
          </div>
          <div className="rounded-xl bg-franklyn-dark px-6 py-4 text-center text-white">
            <p className="text-3xl font-bold tabular-nums">{CODEKIDS.score}/70</p>
            <p className="mt-1 text-sm text-emerald-400">{CODEKIDS.verdict}</p>
          </div>
        </div>

        <p className="mt-8 max-w-2xl text-franklyn-muted">
          Demo premium do pacote <strong>Growth (R$ 150.000)</strong>: COF rascunho, 5 SOPs operacionais
          prioritários e landing de captação de franqueados — prontos para apresentação comercial.
        </p>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Números do negócio</h2>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {codekidsStats.map((s) => (
              <div key={s.label} className="rounded-xl border border-franklyn-border bg-white p-4">
                <dt className="text-xs text-franklyn-muted">{s.label}</dt>
                <dd className="mt-1 text-lg font-semibold">{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <BrandKitShowcase kit={codekidsBrandKit} />

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Entregáveis Franklyn</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {codekidsDeliverables.map((d) => (
              <li key={d.title} className="rounded-xl border border-franklyn-border bg-white p-4">
                <p className="font-medium">{d.title}</p>
                <p className="mt-1 text-sm text-franklyn-muted">{d.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Manual do franqueado</h2>
          <div className="mt-4 rounded-xl border border-franklyn-border bg-white p-6">
            <p className="font-medium">Capítulos 1–3 completos</p>
            <p className="mt-2 text-sm text-franklyn-muted">
              Cap. 1: visão e modelo · Cap. 2: equipe · Cap. 3: infraestrutura, layout, equipamentos, checklist 90 dias.
            </p>
            <p className="mt-3 text-sm text-franklyn-muted">
              <code className="rounded bg-franklyn-bg px-1">clients/cases/codekids/manual-franqueado/</code>
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">SOPs incluídos (amostra 5/15)</h2>
          <ol className="mt-4 space-y-2">
            {sops.map((s) => (
              <li key={s} className="flex items-center gap-3 rounded-lg border border-franklyn-border bg-white px-4 py-3 text-sm">
                <span className="font-mono text-franklyn-accent">✓</span>
                {s}
              </li>
            ))}
          </ol>
          <p className="mt-3 text-sm text-franklyn-muted">
            Documentos completos em <code className="rounded bg-franklyn-bg px-1">clients/cases/codekids/sops/</code>
          </p>
        </section>

        <section className="mt-12 rounded-xl border-2 border-franklyn-accent bg-white p-8">
          <h2 className="text-xl font-semibold">Ver demo ao vivo</h2>
          <p className="mt-2 text-franklyn-muted">
            Landing de captação de franqueados — como o candidato veria a oportunidade CodeKids.
          </p>
          <Link
            href="/cases/codekids/franquia"
            className="mt-6 inline-block rounded-md bg-franklyn-accent px-6 py-3 text-sm font-semibold text-white hover:bg-franklyn-accent-dark"
          >
            Abrir landing CodeKids →
          </Link>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Modelo financeiro (resumo COF)</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-franklyn-border">
            <table className="w-full text-sm">
              <thead className="bg-franklyn-bg">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Item</th>
                  <th className="px-4 py-3 text-left font-semibold">BRL</th>
                  <th className="px-4 py-3 text-left font-semibold">EUR ref.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-franklyn-border">
                <tr>
                  <td className="px-4 py-3">Taxa de franquia</td>
                  <td className="px-4 py-3">{CODEKIDS.fee}</td>
                  <td className="px-4 py-3">{CODEKIDS.feeEur}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Investimento total</td>
                  <td className="px-4 py-3">{CODEKIDS.investment}</td>
                  <td className="px-4 py-3">{CODEKIDS.investmentEur}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Royalties + fundo marketing</td>
                  <td className="px-4 py-3">{CODEKIDS.royalty} + {CODEKIDS.marketingFund}</td>
                  <td className="px-4 py-3">—</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Payback estimado</td>
                  <td className="px-4 py-3">{CODEKIDS.payback}</td>
                  <td className="px-4 py-3">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <p className="mt-12 text-sm text-franklyn-muted">
          Quer um case assim para seu negócio?{" "}
          <Link href="/br#contato" className="font-medium text-franklyn-accent hover:underline">
            Agende diagnóstico grátis
          </Link>
        </p>
      </main>
      <Footer market="br" />
    </>
  );
}
