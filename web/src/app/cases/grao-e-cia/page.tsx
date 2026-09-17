import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { BrandKitShowcase } from "@/components/BrandKitShowcase";
import { Button } from "@/components/ui/Button";
import { graoBrandKit } from "@/lib/brand-kits/grao-ecia";
import { GRAO_E_CIA, graoDeliverables, graoFormatos, graoStats } from "@/lib/grao-ecia";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Case Grão & Cia",
  description:
    "Case Grão & Cia: café especializado, 52/70. Caminho EU Light → Standard com SOPs e dois formatos de loja.",
  path: "/cases/grao-e-cia",
});

const sops = [
  "01 · Abertura da loja",
  "02 · Fechamento e caixa",
  "03 · Estoque e reposição",
  "04 · Preparo de bebidas (padronização)",
  "05 · Turnos e escala barista",
];

export default function GraoCasePage() {
  return (
    <>
      <main id="main-content" className="page-shell pb-16 pt-6">
        <Link href="/cases" className="nav-link text-sm text-franklyn-muted">
          ← Cases
        </Link>

        <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="label-caps text-franklyn-accent">Case #2 · food</p>
            <h1 className="font-display mt-2 text-4xl text-franklyn-ink">{GRAO_E_CIA.name}</h1>
            <p className="mt-2 text-lg text-franklyn-muted">{GRAO_E_CIA.tagline}</p>
          </div>
          <div className="sticker-card-featured rounded-card px-6 py-4 text-center">
            <p className="font-display text-3xl tabular-nums text-franklyn-ink">{GRAO_E_CIA.score}/70</p>
            <p className="mt-1 text-sm text-sky-600">{GRAO_E_CIA.verdict}</p>
          </div>
        </div>

        <p className="mt-8 max-w-2xl text-franklyn-muted">
          Demo <strong className="text-franklyn-ink">EU Light → EU Standard</strong>: documentação core antes da
          captação. Diferente do CodeKids (EU Standard direto), Grão & Cia precisava fechar gaps de SOPs e definir
          formatos antes de franquiciar.
        </p>

        <section className="mt-12">
          <h2 className="font-display text-xl text-franklyn-ink">Números do negócio</h2>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {graoStats.map((s) => (
              <div key={s.label} className="sticker-card rounded-card p-4">
                <dt className="text-xs text-franklyn-muted">{s.label}</dt>
                <dd className="mt-1 text-lg font-medium text-franklyn-ink">{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <BrandKitShowcase kit={graoBrandKit} />

        <section className="mt-12">
          <h2 className="font-display text-xl text-franklyn-ink">Dois formatos de loja</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {graoFormatos.map((f) => (
              <div
                key={f.name}
                className={`rounded-card p-5 ${
                  f.active
                    ? "sticker-card-featured border border-franklyn-accent/30"
                    : "sticker-card opacity-80"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-franklyn-ink">{f.name}</h3>
                  {f.active && (
                    <span className="rounded-pill bg-emerald-500/15 px-2 py-0.5 text-xs font-semibold text-emerald-400">
                      Fase 1
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-franklyn-muted">
                  {f.area} · {f.capex}
                </p>
                <p className="mt-2 text-sm text-franklyn-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl text-franklyn-ink">Entregáveis Franklyn (EU Light)</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {graoDeliverables.map((d) => (
              <li key={d.title} className="sticker-card rounded-card p-4">
                <p className="font-medium text-franklyn-ink">{d.title}</p>
                <p className="mt-1 text-sm text-franklyn-muted">{d.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl text-franklyn-ink">SOPs core (5/12)</h2>
          <ol className="mt-4 space-y-2">
            {sops.map((s) => (
              <li key={s} className="sticker-card flex items-center gap-3 rounded-card px-4 py-3 text-sm">
                <span className="font-mono text-franklyn-accent">✓</span>
                {s}
              </li>
            ))}
          </ol>
          <p className="mt-3 text-sm text-franklyn-muted">
            Documentos em{" "}
            <code className="rounded bg-franklyn-surface px-1 font-mono text-xs">clients/cases/grao-e-cia/sops/</code>
          </p>
        </section>

        <section className="sticker-card mt-8 border-amber-300 bg-amber-50 p-5 text-sm">
          <p className="font-display font-bold text-amber-900">Condição para EU Standard</p>
          <p className="mt-1 text-amber-800">
            3ª unidade piloto operada 60 dias sem fundador no bar · score documentação ≥ 8/10.
          </p>
        </section>

        <section className="sticker-card-featured mt-12 rounded-card border border-franklyn-accent/30 p-8">
          <h2 className="font-display text-xl text-franklyn-ink">Ver demo ao vivo</h2>
          <p className="mt-2 text-franklyn-muted">Landing de captação no formato Compacta para interior.</p>
          <Button href="/cases/grao-e-cia/franquia" className="mt-6">
            Abrir landing Grão & Cia →
          </Button>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl text-franklyn-ink">Investimento Compacta</h2>
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
                  <td className="px-4 py-3 text-franklyn-ink">{GRAO_E_CIA.fee}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-franklyn-muted">Investimento total</td>
                  <td className="px-4 py-3 text-franklyn-ink">{GRAO_E_CIA.investment}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-franklyn-muted">Royalties + marketing</td>
                  <td className="px-4 py-3 text-franklyn-ink">
                    {GRAO_E_CIA.royalty} + {GRAO_E_CIA.marketingFund}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-franklyn-muted">Payback</td>
                  <td className="px-4 py-3 text-franklyn-ink">{GRAO_E_CIA.payback}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <p className="mt-12 text-sm text-franklyn-muted">
          Compare com{" "}
          <Link href="/cases/codekids" className="nav-link text-franklyn-accent">
            CodeKids (flagship EU Standard)
          </Link>{" "}
          ou{" "}
          <Link href="/#contato" className="nav-link text-franklyn-accent">
            marque diagnóstico gratuito
          </Link>
          .
        </p>
      </main>
      <Footer />
    </>
  );
}
