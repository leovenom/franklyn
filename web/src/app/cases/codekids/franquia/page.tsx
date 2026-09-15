import type { Metadata } from "next";
import Link from "next/link";
import { BrandKitLandingSection } from "@/components/BrandKitLandingSection";
import { CodeKidsFooter } from "@/components/codekids/CodeKidsFooter";
import { CodeKidsNav } from "@/components/codekids/CodeKidsNav";
import { codekidsBrandKit } from "@/lib/brand-kits/codekids";
import { CODEKIDS, codekidsTrilhas } from "@/lib/codekids";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "CodeKids — Seja franqueado",
  description:
    "Franquia CodeKids: programação para crianças. Investimento R$ 180–240k, 3 unidades próprias, currículo modular e portal EAD.",
  path: "/cases/codekids/franquia",
});

export default function CodeKidsFranquiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white text-slate-900">
      <CodeKidsNav />
      <main id="main-content">
        {/* Hero */}
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Expansão 2026 · Sudeste e interior
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Ensine crianças a{" "}
              <em className="font-serif italic text-indigo-600">criar</em> com código
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              {CODEKIDS.description} Meta: {CODEKIDS.targetUnits} unidades em 24 meses.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="#contato"
                className="rounded-lg bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700"
              >
                Quero ser franqueado
              </Link>
              <Link
                href="#investimento"
                className="rounded-lg border border-indigo-200 bg-white px-8 py-3 text-sm font-semibold text-indigo-700 hover:bg-indigo-50"
              >
                Ver investimento
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-indigo-100 bg-white px-6 py-12">
          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-4">
            {[
              { n: "3", label: "Unidades próprias" },
              { n: "62", label: "NPS pais" },
              { n: "22%", label: "EBITDA médio" },
              { n: "96", label: "Alunos/unidade (meta m12)" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-indigo-600">{s.n}</p>
                <p className="mt-1 text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trilhas */}
        <section id="trilhas" className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold">Currículo modular</h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-slate-600">
              Trilha progressiva — do Scratch ao JavaScript. Portal EAD certifica instrutores.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {codekidsTrilhas.map((t, i) => (
                <article
                  key={t.name}
                  className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm"
                >
                  <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                    Trilha {i + 1}
                  </span>
                  <h3 className="mt-4 text-xl font-bold">{t.name}</h3>
                  <p className="mt-1 text-sm text-indigo-600">{t.ages}</p>
                  <p className="mt-3 text-sm text-slate-600">{t.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Por que franquear */}
        <section className="bg-indigo-600 px-6 py-20 text-white">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold">Por que CodeKids escala</h2>
            <ul className="mt-12 grid gap-6 md:grid-cols-2">
              {[
                "Operação delegada — coordenador + instrutor certificado, baixa dependência do fundador",
                "Demanda STEM sub-atendida no interior — municípios 50k+ habitantes",
                "Kits low-cost, material digital — margem EBITDA 18–22%",
                "Captação B2B em escolas — 15–30% das matrículas via parcerias",
              ].map((item) => (
                <li key={item} className="flex gap-3 rounded-xl bg-indigo-500/50 p-5 text-sm leading-relaxed">
                  <span className="text-indigo-200">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Investimento */}
        <section id="investimento" className="px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold">Investimento</h2>
            <p className="mt-4 text-center text-slate-600">Valores em R$ · € ref. €1 = R$ 6,00</p>
            <div className="mt-10 overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-sm">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-indigo-50">
                  <tr>
                    <td className="px-6 py-4 text-slate-600">Taxa de franquia</td>
                    <td className="px-6 py-4 text-right font-semibold">{CODEKIDS.fee}</td>
                    <td className="hidden px-6 py-4 text-right text-slate-400 sm:table-cell">{CODEKIDS.feeEur}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-600">Royalties</td>
                    <td className="px-6 py-4 text-right font-semibold">{CODEKIDS.royalty} faturamento</td>
                    <td className="hidden px-6 py-4 sm:table-cell" />
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-600">Fundo de marketing</td>
                    <td className="px-6 py-4 text-right font-semibold">{CODEKIDS.marketingFund}</td>
                    <td className="hidden px-6 py-4 sm:table-cell" />
                  </tr>
                  <tr className="bg-indigo-50">
                    <td className="px-6 py-4 font-semibold">Investimento total</td>
                    <td className="px-6 py-4 text-right text-lg font-bold text-indigo-700">{CODEKIDS.investment}</td>
                    <td className="hidden px-6 py-4 text-right text-slate-500 sm:table-cell">{CODEKIDS.investmentEur}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-600">Payback estimado</td>
                    <td className="px-6 py-4 text-right font-semibold">{CODEKIDS.payback}</td>
                    <td className="hidden px-6 py-4 sm:table-cell" />
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-center text-xs text-slate-400">
              Território exclusivo · 1 município ou raio 15 km · Contrato 10 anos
            </p>
          </div>
        </section>

        <BrandKitLandingSection
          kit={codekidsBrandKit}
          casePath="/cases/codekids"
          accentClass="text-indigo-600"
          mutedClass="text-slate-600"
          borderClass="border-indigo-100"
        />

        {/* Suporte */}
        <section className="border-t border-indigo-100 bg-slate-50 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold">O que você recebe</h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Manual do franqueado + 15 SOPs",
                "Treinamento 40h presencial + EAD",
                "Portal certificação instrutores",
                "CRM + scripts comerciais",
                "Campanhas nacionais (fundo 2%)",
                "Checklist abertura 90 dias",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-indigo-100 bg-white px-5 py-4 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contato" className="px-6 py-20">
          <div className="mx-auto max-w-xl rounded-2xl border border-indigo-200 bg-white p-8 text-center shadow-lg">
            <h2 className="text-2xl font-bold">Candidate-se à franquia</h2>
            <p className="mt-3 text-sm text-slate-600">
              Preencha o formulário — retorno em até 48h úteis. COF entregue 10 dias antes da assinatura.
            </p>
            <form className="mt-8 space-y-4 text-left" action="#" method="post">
              <div>
                <label htmlFor="nome" className="block text-xs font-medium text-slate-600">
                  Nome completo
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-slate-600">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="voce@email.com"
                />
              </div>
              <div>
                <label htmlFor="cidade" className="block text-xs font-medium text-slate-600">
                  Cidade de interesse
                </label>
                <input
                  id="cidade"
                  name="cidade"
                  type="text"
                  className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Ex.: Campinas, SP"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Enviar candidatura
              </button>
            </form>
            <p className="mt-6 text-xs text-slate-400">
              Demo fictícia · Case portfolio{" "}
              <Link href="/cases/codekids" className="text-indigo-600 hover:underline">
                Franklyn
              </Link>
            </p>
          </div>
        </section>
      </main>
      <CodeKidsFooter />
    </div>
  );
}
