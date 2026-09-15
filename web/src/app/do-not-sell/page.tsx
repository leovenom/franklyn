import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Do Not Sell My Personal Information",
  description:
    "Franklyn não vende dados pessoais. Informações para residentes da Califórnia (CCPA/CPRA).",
  path: "/do-not-sell",
});

export default function DoNotSellPage() {
  return (
    <PageLayout
      title="Do Not Sell My Personal Information"
      description="CCPA / CPRA disclosure"
      breadcrumbs={[{ label: "Do Not Sell", href: "/do-not-sell" }]}
    >
      <p>
        <strong>A Franklyn não vende nem compartilha dados pessoais por remuneração</strong> conforme
        definido pela California Consumer Privacy Act (CCPA) e CPRA.
      </p>
      <h2>Seus direitos (Califórnia)</h2>
      <ul>
        <li>Saber quais dados coletamos</li>
        <li>Solicitar exclusão</li>
        <li>Opt-out de &quot;sale&quot; ou &quot;sharing&quot; — não aplicável pois não vendemos dados</li>
        <li>Não discriminação por exercer direitos</li>
      </ul>
      <h2>Como exercer direitos</h2>
      <p>
        Envie e-mail para{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-franklyn-accent hover:underline">{CONTACT_EMAIL}</a>
        {" "}com assunto &quot;CCPA Request&quot;. Resposta em até 45 dias.
      </p>
      <p>
        Veja também nossa <Link href="/privacy" className="text-franklyn-accent hover:underline">Privacy Policy</Link>.
      </p>
    </PageLayout>
  );
}
