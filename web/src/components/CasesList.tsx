import Link from "next/link";
import type { Market } from "@/lib/copy";
import { portfolioCases } from "@/lib/cases";

const toneClass = {
  success: "text-emerald-700 bg-emerald-50",
  info: "text-sky-700 bg-sky-50",
  warning: "text-amber-700 bg-amber-50",
  danger: "text-red-700 bg-red-50",
};

export function CasesList({ market, hideHeader = false }: { market: Market; hideHeader?: boolean }) {
  const home = market === "br" ? "/br" : "/pt";

  return (
    <>
      {!hideHeader && (
        <>
          <p className="text-xs font-semibold uppercase tracking-widest text-franklyn-accent">Portfolio</p>
          <h1 className="mt-3 font-serif text-4xl font-normal tracking-tight">Cases de franqueabilidade</h1>
        </>
      )}

      <ul className={`space-y-4 ${hideHeader ? "" : "mt-12"}`}>
        {portfolioCases.map((c) => {
          const verdict = market === "pt" && c.verdictPT ? c.verdictPT : c.verdict;
          const pkg = market === "pt" ? c.packagePT : c.package;
          const segment = market === "pt" && c.segmentPT ? c.segmentPT : c.segment;

          return (
            <li
              key={c.slug}
              className={`rounded-2xl border p-6 transition hover:shadow-md ${c.highlight ? "border-franklyn-accent/50 bg-white shadow-sm ring-1 ring-franklyn-accent/10" : "border-franklyn-border bg-white hover:border-franklyn-accent/20"}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  {c.flagship && (
                    <span className="mb-2 inline-block rounded-full bg-franklyn-accent/10 px-2 py-0.5 text-xs font-semibold text-franklyn-accent">
                      Flagship
                    </span>
                  )}
                  <h2 className="text-xl font-semibold">
                    <Link href={c.detailUrl} className="hover:text-franklyn-accent">
                      {c.name} →
                    </Link>
                  </h2>
                  <p className="mt-1 text-sm text-franklyn-muted">{segment}</p>
                </div>
                <p className="text-2xl font-bold tabular-nums">{c.score}/70</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${toneClass[c.verdictTone]}`}>
                  {verdict}
                </span>
                <span className="rounded-full bg-franklyn-bg px-3 py-1 text-xs text-franklyn-muted">{pkg}</span>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="mt-12 text-sm text-franklyn-muted">
        {market === "br" ? "Quer um diagnóstico?" : "Quer um diagnóstico?"}{" "}
        <Link href={`${home}#contato`} className="font-medium text-franklyn-accent hover:underline">
          {market === "br" ? "Agende gratuitamente" : "Marque gratuitamente"}
        </Link>
      </p>
    </>
  );
}
