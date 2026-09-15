import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { buildMetadata } from "@/lib/metadata";
import { COMPANY, CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Sobre a Franklyn — Consultoria de Franquias Brasil",
  description:
    "Metodologia Franklyn: score honesto, 8 especialistas, COF Lei 13.966 e expansão nacional. Diagnóstico gratuito antes de qualquer pacote.",
  keywords: [
    "sobre Franklyn",
    "consultoria franquias São Paulo",
    "como funciona franqueabilidade",
    "COF circular oferta franquia",
  ],
  path: "/br/about",
  market: "br",
});

export default function BrAboutPage() {
  return (
    <PageLayout
      market="br"
      title="Sobre a Franklyn"
      description="Consultoria de franquias com método, velocidade e honestidade comercial — foco Brasil."
      breadcrumbs={[{ label: "Sobre", href: "/br/about" }]}
    >
      <p>
        A <strong>Franklyn</strong> transforma negócios replicáveis em redes de franquia escaláveis — ou
        diz claramente quando ainda não é hora. Combinamos metodologia de franchising com oito especialistas
        alinhados: franquia, operações, marketing, jurídico, financeiro, comercial, RH e expansão.
      </p>
      <h2>Missão</h2>
      <p>{COMPANY.tagline}</p>
      <p>
        Democratizamos franquias de qualidade com diagnóstico gratuito, score transparente (0–70) e valores
        claros em <strong>real (R$)</strong>.
      </p>
      <h2>Foco Brasil</h2>
      <p>
        Expansão ativa no mercado brasileiro: COF conforme Lei 13.966/2019, captação nacional, mapa de
        exclusividade por município e master franchise por estado.
      </p>
      <h2>Por que somos diferentes</h2>
      <p>
        Publicamos cases com score 38/70 — negócios que ainda não devem franquear. Isso protege sua marca e
        constrói confiança com franqueados futuros.
      </p>
      <h2>Guias</h2>
      <ul>
        <li>
          <Link href="/br/guia/leis-franquia" className="text-franklyn-accent hover:underline">
            Leis de franquia — Lei 13.966 e COF
          </Link>
        </li>
        <li>
          <Link href="/br/guia/modelo-escala" className="text-franklyn-accent hover:underline">
            Modelo de escala — 4 ondas
          </Link>
        </li>
      </ul>
      <h2>Contato</h2>
      <p>
        <Link href="/br/contact" className="text-franklyn-accent hover:underline">
          Agendar diagnóstico grátis
        </Link>
        {" "}— {CONTACT_EMAIL}
      </p>
    </PageLayout>
  );
}
