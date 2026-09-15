import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/PrintButton";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Proposta comercial",
  description:
    "Pacotes Franklyn: Starter, Growth, Scale (Brasil) e EU Light/Standard. Valores em R$ e EUR. Diagnóstico gratuito.",
  path: "/proposta",
});

export default function PropostaPage() {
  return (
    <>
      <div className="no-print fixed inset-x-0 top-0 z-50 flex justify-between bg-neutral-900 px-6 py-3 text-white">
        <Link href="/" className="text-sm text-neutral-400 hover:text-white">
          ← Voltar ao site
        </Link>
        <PrintButton />
      </div>
      <main id="main-content" className="mx-auto max-w-[210mm] bg-white px-8 py-24 print:py-0 md:px-14">
        <article>
          <section className="min-h-[240mm] print:min-h-[257mm] print:break-after-page">
            <p className="text-3xl font-bold">Franklyn</p>
            <h1 className="mt-16 text-4xl font-bold tracking-tight">Proposta Comercial v1.0</h1>
            <p className="mt-4 text-neutral-600">€1 = R$ 6,00 ref. · Brasil ~80% · Europa PT/ES ~20%</p>
            <p className="mt-24 text-sm text-neutral-500">{CONTACT_EMAIL}</p>
          </section>
          <section className="print:break-before-page">
            <h2 className="border-b-2 border-neutral-900 pb-2 text-xl font-bold">Pacotes Brasil</h2>
            <ul className="my-4 list-disc space-y-2 pl-5 text-neutral-600">
              <li><strong>Starter</strong> — R$ 80.000 (€ 13.300)</li>
              <li><strong>Growth</strong> — R$ 150.000 (€ 25.000)</li>
              <li><strong>Scale</strong> — R$ 250.000 (€ 41.700)</li>
            </ul>
            <h2 className="mt-10 border-b-2 border-neutral-900 pb-2 text-xl font-bold">Pacotes Europa</h2>
            <ul className="my-4 list-disc space-y-2 pl-5 text-neutral-600">
              <li><strong>EU Light</strong> — € 12.000</li>
              <li><strong>EU Standard</strong> — € 25.000</li>
            </ul>
            <p className="mt-8 text-sm text-neutral-500">
              Detalhes completos em{" "}
              <Link href="/contact" className="text-franklyn-accent hover:underline">Contact us</Link>.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
