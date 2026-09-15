import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { buildMetadata } from "@/lib/metadata";
import { COMPANY, CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description:
    "Termos de uso do site Franklyn: condições de acesso, propriedade intelectual e limitação de responsabilidade.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PageLayout
      title="Terms of Use"
      description="Última atualização: 15 de setembro de 2026"
      breadcrumbs={[{ label: "Terms of Use", href: "/terms" }]}
    >
      <p>
        Ao acessar franklyn.com.br, você concorda com estes termos. Se não concordar, não utilize o site.
      </p>
      <h2>Serviços</h2>
      <p>
        O site apresenta informações sobre consultoria em franquias da {COMPANY.legalName}.
        Contratos de prestação de serviços são formalizados separadamente por escrito.
      </p>
      <h2>Propriedade intelectual</h2>
      <p>
        Conteúdo, marca e materiais são propriedade da Franklyn ou licenciados. Reprodução não
        autorizada é proibida.
      </p>
      <h2>Isenção</h2>
      <p>
        Diagnósticos e conteúdos informativos não constituem assessoria jurídica, contábil ou
        garantia de resultado. Decisões de franqueamento são de responsabilidade do cliente.
      </p>
      <h2>Lei aplicável</h2>
      <p>Foro: Comarca de São Paulo, SP, Brasil, salvo disposição contratual diversa em projetos EU.</p>
      <h2>Contato</h2>
      <p>
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-franklyn-accent hover:underline">{CONTACT_EMAIL}</a>
        {" "}· <Link href="/privacy" className="text-franklyn-accent hover:underline">Privacy Policy</Link>
      </p>
    </PageLayout>
  );
}
