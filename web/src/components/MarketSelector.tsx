import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export function MarketSelector() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <img src="/logo.svg" alt={`${SITE_NAME} logo`} width={48} height={48} className="h-12 w-12" />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">{SITE_NAME}</h1>
      <p className="mt-3 max-w-md text-center text-franklyn-muted">
        Consultoria de franquias. Escolha o seu mercado — conteúdo, moeda e legislação específicos.
      </p>
      <div className="mt-12 grid w-full max-w-lg gap-4 sm:grid-cols-2">
        <Link
          href="/br"
          hrefLang="pt-BR"
          className="group rounded-2xl border-2 border-franklyn-accent bg-white p-8 text-center shadow-sm transition hover:shadow-md"
        >
          <p className="text-3xl">🇧🇷</p>
          <p className="mt-4 text-xl font-semibold">Brasil</p>
          <p className="mt-2 text-sm text-franklyn-muted">
            COF Lei 13.966 · valores em R$ · expansão nacional
          </p>
          <p className="mt-4 text-sm font-semibold text-franklyn-accent group-hover:underline">Entrar →</p>
        </Link>
        <Link
          href="/pt"
          hrefLang="pt-PT"
          className="group rounded-2xl border border-franklyn-border bg-white p-8 text-center shadow-sm transition hover:border-franklyn-accent hover:shadow-md"
        >
          <p className="text-3xl">🇵🇹</p>
          <p className="mt-4 text-xl font-semibold">Portugal</p>
          <p className="mt-2 text-sm text-franklyn-muted">
            Código APF · valores em € · remoto-first
          </p>
          <p className="mt-4 text-sm font-semibold text-franklyn-accent group-hover:underline">Entrar →</p>
        </Link>
      </div>
      <p className="mt-10 text-xs text-franklyn-muted">© 2026 {SITE_NAME}</p>
    </div>
  );
}
