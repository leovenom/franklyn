import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT_EMAIL, COMPANY } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Política de privacidade da Franklyn: como coletamos, usamos e protegemos seus dados pessoais (LGPD e GDPR).",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageLayout
      title="Privacy Policy"
      description="Última atualização: 15 de setembro de 2026"
      breadcrumbs={[{ label: "Privacy Policy", href: "/privacy" }]}
    >
      <p>
        A {COMPANY.legalName} (&quot;Franklyn&quot;, &quot;nós&quot;) respeita sua privacidade. Esta política
        descreve como tratamos dados pessoais no site e nos serviços de consultoria em franquias.
      </p>
      <h2>Dados que coletamos</h2>
      <ul>
        <li>Nome, e-mail e mensagem enviados via formulário de contato</li>
        <li>Dados de navegação (cookies: ver <Link href="/cookies" className="text-franklyn-accent hover:underline">Cookie Notice</Link>)</li>
        <li>Informações comerciais fornecidas voluntariamente em diagnósticos e projetos</li>
      </ul>
      <h2>Finalidade</h2>
      <p>Responder solicitações, prestar serviços contratados, melhorar o site e cumprir obrigações legais.</p>
      <h2>Base legal (LGPD / GDPR)</h2>
      <p>Consentimento, execução de contrato ou legítimo interesse, conforme aplicável.</p>
      <h2>Compartilhamento</h2>
      <p>Não vendemos dados pessoais. Compartilhamos apenas com provedores essenciais (hospedagem, e-mail) sob contrato.</p>
      <h2>Seus direitos</h2>
      <p>Acesso, correção, exclusão, portabilidade e oposição. California residents: see <Link href="/do-not-sell" className="text-franklyn-accent hover:underline">Do Not Sell</Link>.</p>
      <h2>Contato DPO</h2>
      <p><a href={`mailto:${CONTACT_EMAIL}`} className="text-franklyn-accent hover:underline">{CONTACT_EMAIL}</a></p>
    </PageLayout>
  );
}
