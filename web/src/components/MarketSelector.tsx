import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

const markets = [
  {
    href: "/br",
    hrefLang: "pt-BR",
    flag: "🇧🇷",
    name: "Brasil",
    desc: "COF Lei 13.966 · valores em R$ · expansão nacional",
    featured: true,
    stats: ["45 min diagnóstico", "Score 0–70", "COF Lei 13.966"],
  },
  {
    href: "/pt",
    hrefLang: "pt-PT",
    flag: "🇵🇹",
    name: "Portugal",
    desc: "Código APF · valores em € · remoto-first",
    featured: false,
    stats: ["45 min diagnóstico", "Score 0–70", "Dossier APF"],
  },
] as const;

export function MarketSelector() {
  return (
    <div className="relative flex min-h-[calc(100vh-4.25rem)] flex-col">
      <section className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-16">
        <div className="pointer-events-none absolute inset-0 bg-hero-mesh hero-pattern" aria-hidden />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-franklyn-accent">
            Consultoria de franquias
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal tracking-tight md:text-5xl lg:text-6xl">
            Escolha o seu <em className="italic text-franklyn-accent">mercado</em>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-franklyn-muted">
            Conteúdo, moeda e legislação específicos — sem misturar Brasil e Portugal na mesma página.
          </p>
        </div>

        <div className="relative mt-14 grid w-full max-w-2xl gap-5 sm:grid-cols-2">
          {markets.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              hrefLang={m.hrefLang}
              className={`group relative overflow-hidden rounded-2xl border bg-white p-8 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                m.featured
                  ? "border-franklyn-accent/40 ring-1 ring-franklyn-accent/20"
                  : "border-franklyn-border hover:border-franklyn-accent/30"
              }`}
            >
              {m.featured && (
                <span className="absolute right-4 top-4 rounded-full bg-franklyn-accent/10 px-2.5 py-0.5 text-[10px] font-bold uppercase text-franklyn-accent">
                  Principal
                </span>
              )}
              <p className="text-4xl">{m.flag}</p>
              <p className="mt-5 text-2xl font-semibold tracking-tight">{m.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-franklyn-muted">{m.desc}</p>
              <ul className="mt-5 space-y-1.5 border-t border-franklyn-border pt-5">
                {m.stats.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-xs text-franklyn-muted">
                    <span className="text-franklyn-accent">✓</span>
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-franklyn-accent group-hover:gap-2 transition-all">
                Entrar
                <span aria-hidden>→</span>
              </p>
            </Link>
          ))}
        </div>

        <p className="relative mt-12 text-center text-xs text-franklyn-muted">
          {SITE_NAME} · Diagnóstico gratuito em ambos os mercados
        </p>
      </section>
    </div>
  );
}
