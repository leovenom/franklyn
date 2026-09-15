import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageLayout } from "@/components/PageLayout";
import { buildMetadata } from "@/lib/metadata";
import { COMPANY, CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contato — Diagnóstico gratuito de franqueabilidade",
  description:
    "Agende diagnóstico grátis em 45 min. Score 0–70, COF Lei 13.966, sem compromisso. Resposta em até 2 dias úteis.",
  keywords: [
    "contato consultoria franquias",
    "diagnóstico franqueabilidade grátis",
    "como franquear meu negócio",
    "consultoria franquias São Paulo",
  ],
  path: "/br/contact",
  market: "br",
});

export default function BrContactPage() {
  return (
    <PageLayout
      market="br"
      title="Agendar diagnóstico gratuito"
      description="45 minutos · score 0–70 · você sai sabendo se franqueia agora, depois ou nunca."
      breadcrumbs={[{ label: "Contato", href: "/br/contact" }]}
    >
      <p>
        Escreva para{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-franklyn-accent hover:underline">
          {CONTACT_EMAIL}
        </a>{" "}
        ou use o formulário abaixo.
      </p>
      <h2>Endereço</h2>
      <p>
        {COMPANY.address.streetAddress}
        <br />
        {COMPANY.address.addressLocality}, {COMPANY.address.addressRegion} {COMPANY.address.postalCode}
        <br />
        {COMPANY.address.addressCountry}
      </p>
      <h2>Formulário</h2>
      <ContactForm />
    </PageLayout>
  );
}
