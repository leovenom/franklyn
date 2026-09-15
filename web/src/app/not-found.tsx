import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Página não encontrada",
  description: "A página solicitada não existe. Volte ao início ou entre em contato com a Franklyn.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main-content" className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-franklyn-accent">Erro 404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Página não encontrada</h1>
        <p className="mt-4 text-franklyn-muted">
          O endereço pode estar incorreto ou a página foi movida.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-md bg-franklyn-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-franklyn-accent-dark">
            Ir para o início
          </Link>
          <Link href="/br/contact" className="rounded-md border border-franklyn-border px-5 py-2.5 text-sm font-semibold hover:border-franklyn-ink">
            Fale conosco
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
