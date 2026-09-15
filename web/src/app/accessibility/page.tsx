import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Accessibility",
  description:
    "Compromisso da Franklyn com acessibilidade digital (WCAG 2.1). Recursos, limitações conhecidas e canal de feedback.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <PageLayout
      title="Accessibility"
      description="Nosso compromisso com acesso inclusivo"
      breadcrumbs={[{ label: "Accessibility", href: "/accessibility" }]}
    >
      <p>
        A Franklyn busca conformidade com as WCAG 2.1 nível AA. Trabalhamos continuamente para
        tornar franklyn.com.br utilizável por todas as pessoas.
      </p>
      <h2>Recursos implementados</h2>
      <ul>
        <li>Link &quot;Pular para o conteúdo&quot; no topo de cada página</li>
        <li>Estrutura semântica com headings hierárquicos únicos por página</li>
        <li>Texto alternativo em imagens e logo</li>
        <li>Contraste de cores adequado e foco visível em elementos interativos</li>
        <li>Suporte a <code>prefers-reduced-motion</code> nas animações</li>
        <li>Navegação por teclado nos formulários e menus</li>
      </ul>
      <h2>Limitações conhecidas</h2>
      <p>Alguns PDFs gerados pelo navegador podem não ser totalmente acessíveis. Entre em contato para versões alternativas.</p>
      <h2>Feedback</h2>
      <p>
        Encontrou uma barreira? Escreva para{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-franklyn-accent hover:underline">{CONTACT_EMAIL}</a>
        {" "}com assunto &quot;Accessibility&quot;. Ou use nossa página de{" "}
        <Link href="/contact" className="text-franklyn-accent hover:underline">Contact us</Link>.
      </p>
    </PageLayout>
  );
}
