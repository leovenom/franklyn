import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageLayout } from "@/components/PageLayout";
import { getCopy } from "@/lib/copy";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT_EMAIL } from "@/lib/site";

const copy = getCopy();

export const metadata: Metadata = buildMetadata({
  title: "Contacto e diagnóstico gratuito",
  description:
    "Marque 45 minutos com a Franklyn. Score 0–70, recomendação franca, sem compromisso. Resposta em 2 dias úteis.",
  keywords: [
    "contacto franchising Portugal",
    "diagnóstico franqueabilidade",
    "consultoria franchising Lisboa",
  ],
  path: "/contact",
});

export default function ContactPage() {
  const { diagnosis } = copy.home;

  return (
    <PageLayout
      title="Marcar diagnóstico gratuito"
      description="45 minutos para perceber se faz sentido franquiciar e o que falta fazer se ainda não estiver pronto."
      breadcrumbs={[{ label: "Contacto", href: "/contact" }]}
    >
      <p>
        Envie e-mail para{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> ou use o formulário. Trabalhamos remoto em
        Portugal: Lisboa, Porto ou outra região, tanto faz para a primeira conversa.
      </p>

      <h2>O que acontece a seguir</h2>
      <ol className="space-y-4">
        {diagnosis.flow.map((step) => (
          <li key={step.num} className="sticker-card p-4">
            <p className="font-display font-bold text-franklyn-ink">
              {step.num}. {step.title}
            </p>
            <p className="mt-1 text-sm text-franklyn-muted">{step.desc}</p>
          </li>
        ))}
      </ol>

      <p className="mt-6 text-sm text-franklyn-muted">
        Detalhe dos critérios e faixas de score na{" "}
        <Link href="/#diagnostico">secção diagnóstico</Link>.
      </p>

      <h2>Formulário</h2>
      <ContactForm />
    </PageLayout>
  );
}
