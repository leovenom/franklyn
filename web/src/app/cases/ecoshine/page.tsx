import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Case EcoShine: ajustar antes",
  description:
    "Case EcoShine: lavagem móvel, 48/70. Ainda não passa no crivo. Plano de pivot de 90 dias antes de franquiciar.",
  path: "/cases/ecoshine",
});

const scores = [
  { name: "Replicabilidade", score: 9 },
  { name: "Margem", score: 6 },
  { name: "Marca", score: 4 },
  { name: "Demanda", score: 7 },
  { name: "Documentação", score: 6 },
  { name: "Supply chain", score: 8 },
  { name: "Regulação", score: 8 },
];

const pivotSteps = [
  { title: "App + assinatura", desc: "100 assinantes · NPS > 60 · churn < 8%" },
  { title: "B2B condomínios", desc: "5 contratos recorrentes em 90 dias" },
  { title: "3 vans próprias", desc: "Porto, Braga e Coimbra, sem terceirização" },
];

export default function EcoShineCasePage() {
  return (
    <>
      <main id="main-content" className="page-shell pb-16 pt-6">
        <Link href="/cases" className="text-sm text-franklyn-muted hover:text-franklyn-accent">
          ← Cases
        </Link>

        <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-600">Case · pivot</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">EcoShine</h1>
            <p className="mt-2 text-lg text-franklyn-muted">Lavagem ecológica móvel</p>
          </div>
          <div className="sticker-card-featured px-6 py-4 text-center">
            <p className="font-display text-3xl tabular-nums text-franklyn-ink">48/70</p>
            <p className="mt-1 text-sm font-medium text-amber-600">Ajustar antes</p>
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm">
          <p className="font-medium text-amber-950">Veredicto Franklyn</p>
          <p className="mt-1 text-amber-900/80">
            Operacionalmente replicável, mas marca commodity e margem frágil.{" "}
            <strong>Não contratar EU Standard ainda</strong>. Pivot de 90 dias primeiro.
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Scores detalhados</h2>
          <ul className="mt-4 space-y-2">
            {scores.map((s) => (
              <li key={s.name} className="flex justify-between rounded-lg sticker-card px-4 py-3 text-sm">
                <span>{s.name}</span>
                <span className="font-semibold tabular-nums">{s.score}/10</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Plano pivot 90 dias</h2>
          <p className="mt-2 text-sm text-franklyn-muted">
            Consultoria Franklyn € 4.200 · meta score 52+/70 → EU Light
          </p>
          <ol className="mt-4 space-y-3">
            {pivotSteps.map((step, i) => (
              <li key={step.title} className="rounded-xl sticker-card p-5">
                <span className="text-xs font-semibold text-franklyn-accent">Alavanca {i + 1}</span>
                <p className="mt-1 font-medium">{step.title}</p>
                <p className="mt-1 text-sm text-franklyn-muted">{step.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">SOPs pré-franquia (3)</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {["Operação van diária", "Assinatura e app", "Captação condomínio B2B"].map((s) => (
              <li key={s} className="rounded-lg sticker-card px-4 py-3">
                ✓ {s}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-franklyn-muted">
            <code className="rounded bg-franklyn-surface px-1">clients/cases/ecoshine/</code>
          </p>
        </section>

        <section className="mt-12 rounded-xl sticker-card p-6">
          <h2 className="font-semibold">Modelo se pivot funcionar</h2>
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <div><dt className="text-franklyn-muted">Taxa/van</dt><dd className="font-semibold">€ 8.000</dd></div>
            <div><dt className="text-franklyn-muted">Investimento/van</dt><dd className="font-semibold">€ 20.000–30.000</dd></div>
          </dl>
        </section>

        <p className="mt-12 text-sm text-franklyn-muted">
          Compare{" "}
          <Link href="/cases/codekids" className="font-medium text-franklyn-accent hover:underline">CodeKids (franquear)</Link>
          {" "}·{" "}
          <Link href="/#contato" className="font-medium text-franklyn-accent hover:underline">diagnóstico gratuito</Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
