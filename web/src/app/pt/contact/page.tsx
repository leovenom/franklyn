import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageLayout } from "@/components/PageLayout";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contacto — Diagnóstico gratuito de franchising",
  description:
    "Marque o seu diagnóstico gratuito com a Franklyn Portugal. Score 0–70, dossier APF, sem compromisso. Resposta em 2 dias úteis.",
  keywords: [
    "contacto consultoria franchising",
    "diagnóstico franquicia Portugal",
    "consultoria franchising Lisboa",
  ],
  path: "/pt/contact",
  market: "pt",
});

export default function PtContactPage() {
  return (
    <PageLayout
      market="pt"
      title="Marcar diagnóstico gratuito"
      description="45 minutos · score 0–70 · recomendação honesta sobre franquiciar, ajustar ou aguardar."
      breadcrumbs={[{ label: "Contacto", href: "/pt/contact" }]}
    >
      <p>
        Escreva para{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-franklyn-accent hover:underline">
          {CONTACT_EMAIL}
        </a>{" "}
        ou use o formulário abaixo. Atendimento remoto-first em Portugal.
      </p>
      <h2>Formulário</h2>
      <ContactForm />
    </PageLayout>
  );
}
