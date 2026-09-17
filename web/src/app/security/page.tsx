import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Security",
  description:
    "Práticas de segurança da Franklyn: HTTPS, headers, proteção de dados e reporte de vulnerabilidades.",
  path: "/security",
});

export default function SecurityPage() {
  return (
    <PageLayout
      title="Security"
      description="Como protegemos dados e infraestrutura"
      breadcrumbs={[{ label: "Security", href: "/security" }]}
    >
      <p>
        A segurança dos dados de clientes e visitantes é prioridade. Aplicamos controles técnicos
        e organizacionais proporcionais ao risco.
      </p>
      <h2>Infraestrutura</h2>
      <ul>
        <li>HTTPS em todas as páginas (TLS 1.2+)</li>
        <li>Hospedagem em provedor certificado (Vercel)</li>
        <li>Headers: X-Content-Type-Options, X-Frame-Options, Referrer-Policy</li>
        <li>Source maps desativados em produção</li>
        <li>Header X-Powered-By removido</li>
      </ul>
      <h2>Dados</h2>
      <p>
        Formulários enviam leads para o Send Studio (CRM próprio) via API server-side; token nunca exposto no browser.
        Fallback mailto se o CRM não estiver configurado.
        Projetos de consultoria seguem contratos com confidencialidade e acesso restrito.
      </p>
      <h2>Reporte de vulnerabilidades</h2>
      <p>
        Responsible disclosure:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-franklyn-accent hover:underline">{CONTACT_EMAIL}</a>
        {" "}assunto &quot;Security Report&quot;. Resposta em até 72 horas úteis.
      </p>
      <p>
        Consulte também nossa <Link href="/privacy" className="text-franklyn-accent hover:underline">Privacy Policy</Link>.
      </p>
    </PageLayout>
  );
}
