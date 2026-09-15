import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Notice",
  description:
    "Como a Franklyn utiliza cookies e tecnologias similares no site. Preferências e opt-out.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <PageLayout
      title="Cookie Notice"
      description="Última atualização: 15 de setembro de 2026"
      breadcrumbs={[{ label: "Cookie Notice", href: "/cookies" }]}
    >
      <p>
        Utilizamos cookies estritamente necessários para funcionamento do site e, com consentimento,
        cookies analíticos para entender uso agregado.
      </p>
      <h2>Tipos de cookies</h2>
      <ul>
        <li><strong>Essenciais</strong> — sessão, segurança, preferências de idioma</li>
        <li><strong>Analíticos</strong> — métricas anônimas de tráfego (somente após consentimento)</li>
      </ul>
      <h2>Gerenciar preferências</h2>
      <p>
        Você pode bloquear cookies no navegador. Isso pode afetar funcionalidades do site.
        Para dados pessoais, consulte nossa <Link href="/privacy" className="text-franklyn-accent hover:underline">Privacy Policy</Link>.
      </p>
    </PageLayout>
  );
}
