import type { Metadata } from "next";
import Link from "next/link";
import { GraoFooter } from "@/components/grao/GraoFooter";
import { GraoNav } from "@/components/grao/GraoNav";
import { GRAO_E_CIA, graoFormatos } from "@/lib/grao-ecia";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Grão & Cia — Seja franqueado",
  description:
    "Franquia Grão & Cia: café especializado formato Compacta. Investimento R$ 360–540k, blend exclusivo, torrefação central.",
  path: "/cases/grao-e-cia/franquia",
});

export default function GraoFranquiaPage() {
  return (
    <div className="min-h-screen bg-[#faf7f2] text-amber-950">
      <GraoNav />
      <main id="main-content">
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-800">
              Expansão 2026 · Cidades 200k+
            </p>
            <h1 className="mt-4 font-serif text-4xl font-normal italic tracking-tight md:text-5xl">
              Café especializado,{" "}
              <span className="not-italic font-bold text-amber-950">formato que escala</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-amber-900/70">
              {GRAO_E_CIA.description} Meta: {GRAO_E_CIA.targetUnits} unidades Compacta em 36 meses.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="#contato"
                className="rounded-lg bg-amber-900 px-8 py-3 text-sm font-semibold text-amber-50 shadow-lg shadow-amber-900/20 hover:bg-amber-950"
              >
                Quero ser franqueado
              </Link>
              <Link
                href="#formatos"
                className="rounded-lg border border-amber-300 bg-white px-8 py-3 text-sm font-semibold text-amber-950 hover:bg-amber-50"
              >
                Ver formatos
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-amber-100 bg-white px-6 py-12">
          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-4">
            {[
              { n: "2", label: "Unidades SP" },
              { n: "R$ 28", label: "Ticket médio" },
              { n: "5%", label: "Royalties" },
              { n: "220", label: "Clientes/dia (meta)" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-amber-900">{s.n}</p>
                <p className="mt-1 text-sm text-amber-900/60">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="formatos" className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold">Dois formatos, uma marca</h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-amber-900/70">
              Fase 1: expansão via Compacta. Flagship reservada a SP capital.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {graoFormatos.map((f) => (
                <article
                  key={f.name}
                  className={`rounded-2xl border p-8 ${f.active ? "border-amber-400 bg-white shadow-md" : "border-amber-100 bg-amber-50/50"}`}
                >
                  {f.active && (
                    <span className="rounded-full bg-amber-900 px-3 py-1 text-xs font-semibold text-amber-50">
                      Aberto para franqueados
                    </span>
                  )}
                  <h3 className="mt-4 text-2xl font-bold">{f.name}</h3>
                  <p className="mt-1 text-amber-800">{f.area}</p>
                  <p className="mt-2 text-lg font-semibold">{f.capex}</p>
                  <p className="mt-4 text-sm text-amber-900/70">{f.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-amber-900 px-6 py-20 text-amber-50">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold">O que você recebe</h2>
            <ul className="mt-12 grid gap-4 md:grid-cols-2">
              {[
                "Blend exclusivo Grão Signature — torrefação central",
                "Treinamento barista 80h + certificação GC-BAR-L1",
                "Fichas técnicas — espresso, cappuccino, latte art",
                "5 SOPs core + manual franqueado",
                "Supply hub — cups, xaropes, insumos homologados",
                "Campanhas nacionais (fundo marketing 1,5%)",
              ].map((item) => (
                <li key={item} className="flex gap-3 rounded-xl bg-amber-800/50 p-5 text-sm">
                  <span className="text-amber-300">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="investimento" className="px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold">Investimento Compacta</h2>
            <p className="mt-4 text-center text-amber-900/60">Valores em R$ · € ref. €1 = R$ 6,00</p>
            <div className="mt-10 overflow-hidden rounded-2xl border border-amber-200 bg-white">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-amber-50">
                  <tr>
                    <td className="px-6 py-4 text-amber-900/70">Taxa de franquia</td>
                    <td className="px-6 py-4 text-right font-semibold">{GRAO_E_CIA.fee}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-amber-900/70">Royalties</td>
                    <td className="px-6 py-4 text-right font-semibold">{GRAO_E_CIA.royalty}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-amber-900/70">Fundo marketing</td>
                    <td className="px-6 py-4 text-right font-semibold">{GRAO_E_CIA.marketingFund}</td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td className="px-6 py-4 font-semibold">Investimento total</td>
                    <td className="px-6 py-4 text-right text-lg font-bold text-amber-900">{GRAO_E_CIA.investment}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-amber-900/70">Payback estimado</td>
                    <td className="px-6 py-4 text-right font-semibold">{GRAO_E_CIA.payback}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="contato" className="px-6 py-20">
          <div className="mx-auto max-w-xl rounded-2xl border border-amber-200 bg-white p-8 text-center shadow-lg">
            <h2 className="text-2xl font-bold">Candidate-se</h2>
            <p className="mt-3 text-sm text-amber-900/70">
              Interesse em cidades 200k+ hab. Retorno em 48h úteis.
            </p>
            <form className="mt-8 space-y-4 text-left" action="#" method="post">
              <div>
                <label htmlFor="nome" className="block text-xs font-medium text-amber-900/70">Nome</label>
                <input id="nome" name="nome" type="text" className="mt-1 w-full rounded-lg border border-amber-200 px-4 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" />
              </div>
              <div>
                <label htmlFor="cidade" className="block text-xs font-medium text-amber-900/70">Cidade de interesse</label>
                <input id="cidade" name="cidade" type="text" placeholder="Ex.: Ribeirão Preto, SP" className="mt-1 w-full rounded-lg border border-amber-200 px-4 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" />
              </div>
              <button type="submit" className="w-full rounded-lg bg-amber-900 py-3 text-sm font-semibold text-amber-50 hover:bg-amber-950">
                Enviar candidatura
              </button>
            </form>
            <p className="mt-6 text-xs text-amber-900/50">
              Demo fictícia ·{" "}
              <Link href="/cases/grao-e-cia" className="text-amber-800 hover:underline">Case Franklyn</Link>
            </p>
          </div>
        </section>
      </main>
      <GraoFooter />
    </div>
  );
}
