import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/PrintButton";
import { getCopy } from "@/lib/copy";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT_EMAIL } from "@/lib/site";

const copy = getCopy();

export const metadata: Metadata = buildMetadata({
  title: "Proposta comercial",
  description:
    "Pacotes Franklyn para Portugal: EU Light (€ 12.000) e EU Standard (€ 25.000). Diagnóstico gratuito antes de qualquer contrato.",
  path: "/proposta",
});

export default function PropostaPage() {
  const { plansEU, home } = copy;

  return (
    <>
      <div className="no-print fixed inset-x-0 top-0 z-50 flex justify-between border-b-2 border-franklyn-ink bg-franklyn-canvas px-6 py-3">
        <Link href="/" className="text-sm font-medium text-franklyn-muted hover:text-franklyn-ink">
          ← Voltar ao site
        </Link>
        <PrintButton />
      </div>
      <main id="main-content" className="mx-auto max-w-[210mm] bg-white px-8 py-24 print:py-0 md:px-14">
        <article className="text-franklyn-ink">
          <section className="min-h-[240mm] print:min-h-[257mm] print:break-after-page">
            <p className="font-display text-3xl font-bold">Franklyn</p>
            <h1 className="font-display mt-16 text-4xl font-bold tracking-tight">Proposta comercial</h1>
            <p className="mt-4 text-franklyn-muted">
              Consultoria de franchising · Portugal · valores em euro (€)
            </p>
            <p className="mt-8 max-w-prose text-franklyn-muted">{home.diagnosis.desc}</p>
            <p className="mt-24 text-sm text-franklyn-subtle">{CONTACT_EMAIL}</p>
          </section>

          <section className="print:break-before-page">
            <h2 className="font-display border-b-2 border-franklyn-ink pb-2 text-xl font-bold">Pacotes</h2>
            <p className="mt-4 text-sm text-franklyn-muted">{home.pricing.desc}</p>
            <ul className="my-6 space-y-6">
              {plansEU.map((plan) => (
                <li key={plan.name} className="border-2 border-franklyn-border p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-display text-lg font-bold">{plan.name}</p>
                    <p className="font-display text-2xl">{plan.price}</p>
                  </div>
                  <p className="mt-1 text-sm text-franklyn-subtle">{plan.eur}</p>
                  {plan.tag && (
                    <p className="mt-2 inline-block rounded-pill bg-franklyn-tertiary px-2 py-0.5 text-xs font-bold">
                      {plan.tag}
                    </p>
                  )}
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-franklyn-muted">
                    {plan.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <h2 className="font-display mt-10 border-b-2 border-franklyn-ink pb-2 text-xl font-bold">
              Diagnóstico gratuito
            </h2>
            <ol className="my-4 list-decimal space-y-2 pl-5 text-sm text-franklyn-muted">
              {home.diagnosis.flow.map((step) => (
                <li key={step.num}>
                  <strong className="text-franklyn-ink">{step.title}</strong>: {step.desc}
                </li>
              ))}
            </ol>

            <p className="mt-8 text-sm text-franklyn-muted">
              Marque em{" "}
              <Link href="/contact" className="font-medium text-franklyn-accent underline">
                /contact
              </Link>{" "}
              ou escreva para {CONTACT_EMAIL}.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
