import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Página não encontrada",
  description: "A página solicitada não existe. Volte ao início ou entre em contacto com a Franklyn.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <>
      <main
        id="main-content"
        className="page-shell flex min-h-[60vh] flex-col items-center justify-center py-24 text-center"
      >
        <p className="label-caps text-franklyn-accent">Erro 404</p>
        <h1 className="font-display mt-4 text-4xl text-franklyn-ink">Página não encontrada</h1>
        <p className="mt-4 max-w-prose text-franklyn-muted">
          O endereço pode estar errado ou a página foi movida.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Ir para a home</Button>
          <Button href="/contact" variant="secondary">
            Contacto
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
