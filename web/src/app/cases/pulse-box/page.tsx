import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Case Pulse Box — Não franquear (score 38/70)",
  description:
    "Case Franklyn: academia boutique com score 38/70. Quando a resposta certa é licenciamento, não franquia. Pulse Method™ como alternativa.",
  keywords: [
    "não franquear academia",
    "score franqueabilidade baixo",
    "licenciamento vs franquia fitness",
    "consultoria franquias honesta",
  ],
  path: "/cases/pulse-box",
});

const scores = [
  { name: "Replicabilidade", score: 5, warn: true },
  { name: "Margem", score: 5, warn: true },
  { name: "Marca", score: 6 },
  { name: "Demanda", score: 7 },
  { name: "Documentação", score: 4, warn: true },
  { name: "Supply chain", score: 5 },
  { name: "Regulação", score: 6 },
];

export default function PulseBoxCasePage() {
  return (
    <>
      <Nav market="br" />
      <main id="main-content" className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/br/cases" className="text-sm text-franklyn-muted hover:text-franklyn-accent">
          ← Cases
        </Link>

        <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-red-600">Case · honestidade</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">Pulse Box</h1>
            <p className="mt-2 text-lg text-franklyn-muted">Academia boutique · crossfit / funcional · Itaim-SP</p>
          </div>
          <div className="rounded-xl bg-franklyn-dark px-6 py-4 text-center text-white">
            <p className="text-3xl font-bold tabular-nums">38/70</p>
            <p className="mt-1 text-sm text-red-400">Não franquear ainda</p>
          </div>
        </div>

        <blockquote className="mt-8 border-l-4 border-franklyn-accent pl-5 text-lg italic text-franklyn-ink">
          &ldquo;Score honesto: às vezes a resposta certa é não franquear ainda.&rdquo;
        </blockquote>

        <div className="mt-8 rounded-lg border border-red-200 bg-red-50 p-5 text-sm">
          <p className="font-medium text-red-950">Por que não COF?</p>
          <p className="mt-1 text-red-900/80">
            Coach fundador <strong>é o produto</strong>. Payback &gt; 30 meses. CAPEX box 200 m²+ inviável.
            Franquia full custaria R$ 200k+ — unit economics não sustenta taxa premium.
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Scores detalhados</h2>
          <ul className="mt-4 space-y-2">
            {scores.map((s) => (
              <li key={s.name} className="flex justify-between rounded-lg border border-franklyn-border bg-white px-4 py-3 text-sm">
                <span>{s.name}</span>
                <span className={`font-semibold tabular-nums ${s.warn ? "text-red-600" : ""}`}>{s.score}/10</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Alternativa: licenciamento Pulse Method™</h2>
          <p className="mt-2 text-sm text-franklyn-muted">
            Licenciar método para academias <strong>já existentes</strong> — sem abrir boxes novos.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border-2 border-red-200 bg-red-50/50 p-5 opacity-75">
              <p className="text-xs font-bold uppercase text-red-700">Franquia — não recomendado</p>
              <p className="mt-2 text-2xl font-bold line-through">R$ 200.000+</p>
              <p className="mt-1 text-sm text-franklyn-muted">Payback &gt; 30 meses</p>
            </div>
            <div className="rounded-xl border-2 border-emerald-500 bg-white p-5 shadow-md">
              <p className="text-xs font-bold uppercase text-emerald-700">Licenciamento — recomendado</p>
              <p className="mt-2 text-2xl font-bold">R$ 30.000</p>
              <p className="mt-1 text-sm text-franklyn-muted">+ 3% royalty · payback 8–14 meses</p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Entregáveis Franklyn (R$ 55.000)</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              "Manual Pulse Method + fichas WOD",
              "Certificação coach PB-COACH-L1 (40h)",
              "Contrato licença (não franquia)",
              "Landing parceiros B2B + deck comercial",
              "Piloto 1 academia parceira",
            ].map((item) => (
              <li key={item} className="rounded-lg border border-franklyn-border bg-white px-4 py-3">
                ✓ {item}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-franklyn-muted">
            Docs: <code className="rounded bg-franklyn-bg px-1">clients/cases/pulse-box/</code>
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Quando reavaliar franquia</h2>
          <ol className="mt-4 space-y-2 text-sm">
            {[
              "2ª unidade com coach formado internamente (não fundador)",
              "Payback < 24 meses · layout < 200 m²",
              "5+ academias licenciadas · NPS > 55",
              "Score reavaliação ≥ 45/70",
            ].map((step, i) => (
              <li key={step} className="flex gap-3 rounded-lg border border-franklyn-border bg-white px-4 py-3">
                <span className="font-bold text-franklyn-accent">{i + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12 rounded-xl border border-franklyn-border bg-franklyn-bg p-8 text-center">
          <p className="text-sm font-medium text-franklyn-muted">Este case existe para provar uma coisa</p>
          <p className="mt-2 text-xl font-semibold">
            A Franklyn protege sua marca — mesmo quando a venda é dizer <em>não</em>.
          </p>
          <Link
            href="/br#contato"
            className="mt-6 inline-block rounded-md bg-franklyn-accent px-6 py-3 text-sm font-semibold text-white hover:bg-franklyn-accent-dark"
          >
            Quero meu score honesto →
          </Link>
        </section>

        <p className="mt-12 text-sm text-franklyn-muted">
          Compare{" "}
          <Link href="/cases/codekids" className="font-medium text-franklyn-accent hover:underline">
            CodeKids (55/70 — franquear)
          </Link>
          {" "}·{" "}
          <Link href="/cases/ecoshine" className="font-medium text-franklyn-accent hover:underline">
            EcoShine (48/70 — ajustar)
          </Link>
        </p>
      </main>
      <Footer market="br" />
    </>
  );
}
