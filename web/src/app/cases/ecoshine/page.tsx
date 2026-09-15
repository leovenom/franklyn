import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Case EcoShine — ajustar antes",
  description:
    "Case Franklyn: lavagem ecológica móvel, score 48/70. Plano pivot 90 dias antes de franquear — honestidade comercial.",
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
  { title: "3 vans próprias", desc: "Campinas, Santos, Sorocaba — sem terceirização" },
];

export default function EcoShineCasePage() {
  return (
    <>
      <Nav market="br" />
      <main id="main-content" className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/br/cases" className="text-sm text-franklyn-muted hover:text-franklyn-accent">
          ← Cases
        </Link>

        <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-600">Case · pivot</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">EcoShine</h1>
            <p className="mt-2 text-lg text-franklyn-muted">Lavagem ecológica móvel</p>
          </div>
          <div className="rounded-xl bg-franklyn-dark px-6 py-4 text-center text-white">
            <p className="text-3xl font-bold tabular-nums">48/70</p>
            <p className="mt-1 text-sm text-amber-400">Ajustar antes</p>
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm">
          <p className="font-medium text-amber-950">Veredicto Franklyn</p>
          <p className="mt-1 text-amber-900/80">
            Operacionalmente replicável, mas marca commodity e margem frágil.{" "}
            <strong>Não contratar Growth ainda</strong> — pivot de 90 dias primeiro.
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Scores detalhados</h2>
          <ul className="mt-4 space-y-2">
            {scores.map((s) => (
              <li key={s.name} className="flex justify-between rounded-lg border border-franklyn-border bg-white px-4 py-3 text-sm">
                <span>{s.name}</span>
                <span className="font-semibold tabular-nums">{s.score}/10</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Plano pivot 90 dias</h2>
          <p className="mt-2 text-sm text-franklyn-muted">
            Consultoria Franklyn R$ 25.000 · meta score 52+/70 → Starter
          </p>
          <ol className="mt-4 space-y-3">
            {pivotSteps.map((step, i) => (
              <li key={step.title} className="rounded-xl border border-franklyn-border bg-white p-5">
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
              <li key={s} className="rounded-lg border border-franklyn-border bg-white px-4 py-3">
                ✓ {s}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-franklyn-muted">
            <code className="rounded bg-franklyn-bg px-1">clients/cases/ecoshine/</code>
          </p>
        </section>

        <section className="mt-12 rounded-xl border border-franklyn-border bg-white p-6">
          <h2 className="font-semibold">Modelo se pivot funcionar</h2>
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <div><dt className="text-franklyn-muted">Taxa/van</dt><dd className="font-semibold">R$ 48.000 (€ 8.000)</dd></div>
            <div><dt className="text-franklyn-muted">Investimento/van</dt><dd className="font-semibold">R$ 120.000–180.000</dd></div>
          </dl>
        </section>

        <p className="mt-12 text-sm text-franklyn-muted">
          Compare{" "}
          <Link href="/cases/codekids" className="font-medium text-franklyn-accent hover:underline">CodeKids (franquear)</Link>
          {" "}·{" "}
          <Link href="/br#contato" className="font-medium text-franklyn-accent hover:underline">diagnóstico grátis</Link>
        </p>
      </main>
      <Footer market="br" />
    </>
  );
}
