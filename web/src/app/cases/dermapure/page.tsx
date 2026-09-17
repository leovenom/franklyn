import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Case DermaPure: ajustar antes",
  description:
    "Case DermaPure: estética facial, 44/70. Margem boa, mas depende demasiado da fundadora. Plano antes de franquiciar.",
  path: "/cases/dermapure",
});

const scores = [
  { name: "Replicabilidade", score: 4, warn: true },
  { name: "Margem", score: 8 },
  { name: "Marca", score: 7 },
  { name: "Demanda", score: 8 },
  { name: "Documentação", score: 3, warn: true },
  { name: "Supply chain", score: 6 },
  { name: "Regulação", score: 8 },
];

const tiers = [
  { tier: "A", label: "Core franqueável", desc: "Biomédico certificado · limpeza, peelings leves, LED", color: "emerald" },
  { tier: "B", label: "Supervisão fundadora", desc: "Auditoria semanal · peelings médios", color: "amber" },
  { tier: "C", label: "Médico local", desc: "Toxina, preenchimento: fora do dossier base", color: "slate" },
];

export default function DermaPureCasePage() {
  return (
    <>
      <main id="main-content" className="page-shell pb-16 pt-6">
        <Link href="/cases" className="text-sm text-franklyn-muted hover:text-franklyn-accent">
          ← Cases
        </Link>

        <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-600">Case · pessoa-chave</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">DermaPure</h1>
            <p className="mt-2 text-lg text-franklyn-muted">Estética facial · Chiado, Lisboa</p>
          </div>
          <div className="sticker-card-featured px-6 py-4 text-center">
            <p className="font-display text-3xl tabular-nums text-franklyn-ink">44/70</p>
            <p className="mt-1 text-sm font-medium text-amber-600">Ajustar antes</p>
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm">
          <p className="font-medium text-amber-950">Veredicto Franklyn</p>
          <p className="mt-1 text-amber-900/80">
            EBITDA ~35%, mas fundadora executa procedimentos-chave.{" "}
            <strong>Franquia bloqueada</strong> até 2ª unidade provar delegação.
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Scores detalhados</h2>
          <ul className="mt-4 space-y-2">
            {scores.map((s) => (
              <li key={s.name} className="flex justify-between rounded-lg sticker-card px-4 py-3 text-sm">
                <span>{s.name}</span>
                <span className={`font-semibold tabular-nums ${s.warn ? "text-amber-600" : ""}`}>{s.score}/10</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Mapa de protocolos</h2>
          <p className="mt-2 text-sm text-franklyn-muted">Separar o que escala do que exige a fundadora ou médico local.</p>
          <div className="mt-4 space-y-3">
            {tiers.map((t) => (
              <div key={t.tier} className="rounded-xl sticker-card p-5">
                <span className="rounded-full bg-franklyn-bg px-2 py-0.5 text-xs font-bold">Tier {t.tier}</span>
                <p className="mt-2 font-medium">{t.label}</p>
                <p className="mt-1 text-sm text-franklyn-muted">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Plano desbloqueio (6–12 meses)</h2>
          <ol className="mt-4 space-y-3 text-sm">
            {[
              "Mapa protocolos Tier A/B/C + consultoria € 7.500 (8 semanas)",
              "2ª unidade com biomédico contratado, fundadora < 1 dia/semana",
              "EBITDA ≥ 25% sem procedimentos da fundadora",
              "Manual 100h + central compras insumos",
            ].map((step, i) => (
              <li key={step} className="flex gap-3 rounded-lg sticker-card px-4 py-3">
                <span className="font-bold text-franklyn-accent">{i + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">SOPs preparação (3)</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {["Limpeza profunda Tier A", "Contratação biomédico", "Abertura dia clínica"].map((s) => (
              <li key={s} className="rounded-lg sticker-card px-4 py-3">✓ {s}</li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-franklyn-muted">
            <code className="rounded bg-franklyn-bg px-1">clients/cases/dermapure/</code>
          </p>
        </section>

        <section className="mt-12 rounded-xl sticker-card p-6">
          <h2 className="font-semibold">Potencial pós-desbloqueio</h2>
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <div><dt className="text-franklyn-muted">Taxa franchising</dt><dd className="font-semibold">€ 25.000</dd></div>
            <div><dt className="text-franklyn-muted">Investimento clínica</dt><dd className="font-semibold">€ 80.000–120.000</dd></div>
          </dl>
        </section>

        <p className="mt-12 text-sm text-franklyn-muted">
          Compare{" "}
          <Link href="/cases/grao-e-cia" className="font-medium text-franklyn-accent hover:underline">Grão & Cia</Link>
          {" "}·{" "}
          <Link href="/#contato" className="font-medium text-franklyn-accent hover:underline">diagnóstico gratuito</Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
