import Link from "next/link";
import { portfolioCases } from "@/lib/cases";
import { Card } from "./ui/Card";

const toneClass = {
  success: "text-emerald-700 bg-emerald-100 border-emerald-300",
  info: "text-sky-700 bg-sky-100 border-sky-300",
  warning: "text-amber-700 bg-amber-100 border-amber-300",
  danger: "text-red-700 bg-red-100 border-red-300",
};

export function CasesList({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <>
      {!hideHeader && (
        <>
          <p className="label-caps text-franklyn-accent">Portefólio</p>
          <h1 className="font-display mt-3 text-4xl text-franklyn-ink">Cases de franqueabilidade</h1>
        </>
      )}

      <ul className={`space-y-4 ${hideHeader ? "" : "mt-12"}`}>
        {portfolioCases.map((c) => (
          <li key={c.slug}>
            <Card hover padding="md" featured={c.highlight} className={c.highlight ? "" : ""}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  {c.flagship && (
                    <span className="chip mb-2 bg-franklyn-tertiary text-franklyn-ink">Flagship</span>
                  )}
                  <h2 className="text-lg font-medium">
                    <Link href={c.detailUrl} className="nav-link font-display font-bold text-franklyn-ink hover:text-franklyn-accent">
                      {c.name} →
                    </Link>
                  </h2>
                  <p className="mt-1 text-caption text-franklyn-muted">{c.segment}</p>
                </div>
                <p className="font-display text-2xl tabular-nums text-franklyn-ink">{c.score}/70</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className={`rounded-pill border-2 px-3 py-1 text-caption font-medium ${toneClass[c.verdictTone]}`}>
                  {c.verdict}
                </span>
                <span className="chip text-caption">{c.package}</span>
              </div>
            </Card>
          </li>
        ))}
      </ul>

      <p className="mt-12 text-caption text-franklyn-muted">
        Quer o score do seu negócio?{" "}
        <Link href="/#contato" className="nav-link font-medium text-franklyn-accent">
          Marque 45 minutos, é gratuito
        </Link>
      </p>
    </>
  );
}
