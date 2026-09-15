import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { BrandKitShowcase } from "@/components/BrandKitShowcase";
import { graoBrandKit } from "@/lib/brand-kits/grao-ecia";
import { GRAO_E_CIA, graoDeliverables, graoFormatos, graoStats } from "@/lib/grao-ecia";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Case Grão & Cia",
  description:
    "Case Franklyn: café especializado, score 52/70, COF, 5 SOPs core, 2 formatos de loja e landing de captação.",
  path: "/cases/grao-e-cia",
});

const sops = [
  "01 — Abertura da loja",
  "02 — Fechamento e caixa",
  "03 — Estoque e reposição",
  "04 — Preparo de bebidas (padronização)",
  "05 — Turnos e escala barista",
];

export default function GraoCasePage() {
  return (
    <>
      <Nav market="br" />
      <main id="main-content" className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/br/cases" className="text-sm text-franklyn-muted hover:text-franklyn-accent">
          ← Cases
        </Link>

        <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-franklyn-accent">Case #2 · food</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">{GRAO_E_CIA.name}</h1>
            <p className="mt-2 text-lg text-franklyn-muted">{GRAO_E_CIA.tagline}</p>
          </div>
          <div className="rounded-xl bg-franklyn-dark px-6 py-4 text-center text-white">
            <p className="text-3xl font-bold tabular-nums">{GRAO_E_CIA.score}/70</p>
            <p className="mt-1 text-sm text-sky-400">{GRAO_E_CIA.verdict}</p>
          </div>
        </div>

        <p className="mt-8 max-w-2xl text-franklyn-muted">
          Demo <strong>Starter → Growth</strong>: documentação core antes da captação. Diferente do CodeKids
          (Growth direto), Grão & Cia precisava fechar gaps de SOPs e definir formatos antes de franquear.
        </p>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Números do negócio</h2>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {graoStats.map((s) => (
              <div key={s.label} className="rounded-xl border border-franklyn-border bg-white p-4">
                <dt className="text-xs text-franklyn-muted">{s.label}</dt>
                <dd className="mt-1 text-lg font-semibold">{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <BrandKitShowcase kit={graoBrandKit} />

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Dois formatos de loja</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {graoFormatos.map((f) => (
              <div
                key={f.name}
                className={`rounded-xl border p-5 ${f.active ? "border-franklyn-accent bg-white" : "border-franklyn-border bg-franklyn-bg opacity-80"}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{f.name}</h3>
                  {f.active && (
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                      Fase 1
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-franklyn-muted">{f.area} · {f.capex}</p>
                <p className="mt-2 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Entregáveis Franklyn (Starter)</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {graoDeliverables.map((d) => (
              <li key={d.title} className="rounded-xl border border-franklyn-border bg-white p-4">
                <p className="font-medium">{d.title}</p>
                <p className="mt-1 text-sm text-franklyn-muted">{d.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">SOPs core (5/12)</h2>
          <ol className="mt-4 space-y-2">
            {sops.map((s) => (
              <li key={s} className="flex items-center gap-3 rounded-lg border border-franklyn-border bg-white px-4 py-3 text-sm">
                <span className="font-mono text-franklyn-accent">✓</span>
                {s}
              </li>
            ))}
          </ol>
          <p className="mt-3 text-sm text-franklyn-muted">
            Documentos em <code className="rounded bg-franklyn-bg px-1">clients/cases/grao-e-cia/sops/</code>
          </p>
        </section>

        <section className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm">
          <p className="font-medium text-amber-950">Condição para Growth</p>
          <p className="mt-1 text-amber-900/80">
            3ª unidade piloto operada 60 dias sem fundador no bar · score documentação ≥ 8/10.
          </p>
        </section>

        <section className="mt-12 rounded-xl border-2 border-franklyn-accent bg-white p-8">
          <h2 className="text-xl font-semibold">Ver demo ao vivo</h2>
          <p className="mt-2 text-franklyn-muted">Landing de captação — formato Compacta para interior.</p>
          <Link
            href="/cases/grao-e-cia/franquia"
            className="mt-6 inline-block rounded-md bg-franklyn-accent px-6 py-3 text-sm font-semibold text-white hover:bg-franklyn-accent-dark"
          >
            Abrir landing Grão & Cia →
          </Link>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Investimento Compacta</h2>
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
                  <td className="px-4 py-3">{GRAO_E_CIA.fee}</td>
                  <td className="px-4 py-3">{GRAO_E_CIA.feeEur}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Investimento total</td>
                  <td className="px-4 py-3">{GRAO_E_CIA.investment}</td>
                  <td className="px-4 py-3">{GRAO_E_CIA.investmentEur}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Royalties + marketing</td>
                  <td className="px-4 py-3">{GRAO_E_CIA.royalty} + {GRAO_E_CIA.marketingFund}</td>
                  <td className="px-4 py-3">—</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Payback</td>
                  <td className="px-4 py-3">{GRAO_E_CIA.payback}</td>
                  <td className="px-4 py-3">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <p className="mt-12 text-sm text-franklyn-muted">
          Compare com{" "}
          <Link href="/cases/codekids" className="font-medium text-franklyn-accent hover:underline">
            CodeKids (flagship Growth)
          </Link>
          {" "}ou{" "}
          <Link href="/br#contato" className="font-medium text-franklyn-accent hover:underline">
            agende diagnóstico grátis
          </Link>
          .
        </p>
      </main>
      <Footer market="br" />
    </>
  );
}
