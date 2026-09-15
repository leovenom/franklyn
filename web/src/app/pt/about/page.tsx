import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { buildMetadata } from "@/lib/metadata";
import { COMPANY, CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Sobre a Franklyn — Consultoria de Franchising Portugal",
  description:
    "Metodologia Franklyn: score honesto, 8 especialistas, dossier APF e expansão em Portugal. Diagnóstico gratuito antes de qualquer pacote.",
  keywords: [
    "sobre Franklyn",
    "consultoria franchising Portugal",
    "como funciona franqueabilidade",
    "código deontológico APF",
  ],
  path: "/pt/about",
  market: "pt",
});

export default function PtAboutPage() {
  return (
    <PageLayout
      market="pt"
      title="Sobre a Franklyn"
      description="Consultoria de franchising com método, velocidade e honestidade comercial — foco Portugal."
      breadcrumbs={[{ label: "Sobre", href: "/pt/about" }]}
    >
      <p>
        A <strong>Franklyn</strong> transforma negócios replicáveis em redes de franchising escaláveis — ou
        diz claramente quando ainda não é hora. Combinamos metodologia com oito especialistas alinhados:
        franchising, operações, marketing, jurídico, financeiro, comercial, RH e expansão.
      </p>
      <h2>Missão</h2>
      <p>{COMPANY.tagline}</p>
      <p>
        Democratizamos franchising de qualidade com diagnóstico gratuito, score transparente (0–70) e valores
        claros em <strong>euro (€)</strong>.
      </p>
      <h2>Foco Portugal</h2>
      <p>
        Atendimento remoto-first em Portugal: dossier conforme Código Deontológico APF, contratos em
        português europeu, conformidade RGPD e expansão por região (Norte, Centro, Lisboa, Algarve).
      </p>
      <h2>Por que somos diferentes</h2>
      <p>
        Publicamos cases com score 38/70 — negócios que ainda não devem franquiciar. Isso protege a sua marca
        e constrói confiança com franchisees futuros.
      </p>
      <h2>Guias</h2>
      <ul>
        <li>
          <Link href="/pt/guia/leis-franquia" className="text-franklyn-accent hover:underline">
            Legislação de franchising — APF e boa-fé
          </Link>
        </li>
        <li>
          <Link href="/pt/guia/modelo-escala" className="text-franklyn-accent hover:underline">
            Modelo de escala — 4 ondas
          </Link>
        </li>
      </ul>
      <h2>Contacto</h2>
      <p>
        <Link href="/pt/contact" className="text-franklyn-accent hover:underline">
          Marcar diagnóstico gratuito
        </Link>
        {" "}— {CONTACT_EMAIL}
      </p>
    </PageLayout>
  );
}
