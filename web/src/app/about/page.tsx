import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { buildMetadata } from "@/lib/metadata";
import { COMPANY, CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Sobre a Franklyn",
  description:
    "Quem somos: consultoria de franchising em Portugal, score 0–70 publicado e dossier APF. Dizemos não quando o negócio ainda não está pronto.",
  keywords: [
    "Franklyn consultoria",
    "franchising Portugal",
    "franqueabilidade",
    "dossier APF",
  ],
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageLayout
      title="Sobre a Franklyn"
      description="Franchising com método e honestidade comercial quando ainda não é altura de escalar."
      breadcrumbs={[{ label: "Sobre", href: "/about" }]}
    >
      <p>
        A <strong>Franklyn</strong> nasceu de uma frustração simples: muita gente vende franquia antes do negócio
        aguentar ser replicado. Nós começamos pelo contrário: score de 0 a 70 e recomendação clara. Só depois
        passamos à documentação, marca e captação.
      </p>
      <h2>O que fazemos</h2>
      <p>{COMPANY.tagline}</p>
      <p>
        Trabalhamos em português europeu, com valores em euro e dossier alinhado à APF. A equipa cobre franchising,
        operações, marketing, jurídico, financeiro, comercial, RH e expansão no mesmo projeto.
      </p>
      <h2>Portugal em primeiro lugar</h2>
      <p>
        Atendimento remoto em todo o país. Contratos e manuais em pt-PT, conformidade RGPD, mapa por região (Norte,
        Centro, Lisboa, Algarve) quando faz sentido para o modelo.
      </p>
      <h2>Porque publicamos scores baixos</h2>
      <p>
        Temos cases a 38/70 no site: negócios onde ainda não recomendamos franquiciar. Isso poupa-lhe dinheiro e
        protege a marca quando chegar a altura de abrir a rede.
      </p>
      <h2>Guias úteis</h2>
      <ul>
        <li>
          <Link href="/guia/leis-franquia">Legislação de franchising: APF e boa-fé</Link>
        </li>
        <li>
          <Link href="/guia/modelo-escala">Modelo de escala: 4 ondas</Link>
        </li>
      </ul>
      <h2>Falar connosco</h2>
      <p>
        <Link href="/contact">Marcar diagnóstico gratuito</Link>, {CONTACT_EMAIL}
      </p>
    </PageLayout>
  );
}
