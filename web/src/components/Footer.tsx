import Link from "next/link";
import { getCopy } from "@/lib/copy";
import { marketHref } from "@/lib/copy/paths";
import { GLOBAL_NAV_LINKS } from "@/lib/nav-global";
import { CONTACT_EMAIL, LEGAL_NAV, SITE_NAME } from "@/lib/site";
import type { NavMarket } from "./Nav";

export function Footer({ market = "global" }: { market?: NavMarket }) {
  const isGlobal = market === "global";
  const copy = isGlobal ? null : getCopy(market);

  const brLinks = [
    { href: "/br", label: "Home Brasil" },
    { href: "/br/cases", label: "Cases" },
    { href: "/br/contact", label: "Contato" },
    { href: "/br/guia/leis-franquia", label: "Leis de franquia" },
  ];

  const ptLinks = [
    { href: "/pt", label: "Home Portugal" },
    { href: "/pt/cases", label: "Cases" },
    { href: "/pt/contact", label: "Contacto" },
    { href: "/pt/guia/leis-franquia", label: "Legislação" },
  ];

  const marketNavItems = isGlobal
    ? GLOBAL_NAV_LINKS
    : [
        ...copy!.navLinks.map((link) => ({
          href: marketHref(market, link.href),
          label: link.label,
        })),
        { href: marketHref(market, "/guia/leis-franquia"), label: "Leis de franquia" },
        { href: marketHref(market, "/guia/modelo-escala"), label: "Modelo de escala" },
        { href: "/proposta", label: "Proposta comercial" },
      ];

  return (
    <footer className="border-t border-franklyn-navy/20 bg-franklyn-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="text-xl font-bold tracking-tight">{SITE_NAME}</p>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            {isGlobal
              ? "Consultoria de franquias · Brasil e Portugal · Diagnóstico gratuito"
              : copy!.home.footer.tagline}
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-4 inline-block text-sm font-medium text-franklyn-gold hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          {!isGlobal && (
            <Link
              href={copy!.otherMarketPath}
              className="mt-3 block text-sm font-medium text-franklyn-gold hover:underline"
              hrefLang={market === "br" ? "pt-PT" : "pt-BR"}
            >
              {copy!.otherMarketLabel}
            </Link>
          )}
        </div>

        {isGlobal ? (
          <>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-franklyn-gold/80">Brasil</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {brLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/60 transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-franklyn-gold/80">Portugal</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {ptLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/60 transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <div className="md:col-span-1 lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-franklyn-gold/80">Navegação</p>
            <ul className="mt-4 grid gap-2.5 text-sm sm:grid-cols-2">
              {marketNavItems.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-franklyn-gold/80">Legal</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {LEGAL_NAV.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/60 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-white/40 sm:flex-row">
          <p>© 2026 {SITE_NAME}. Todos os direitos reservados.</p>
          {isGlobal && (
            <div className="flex gap-4">
              <Link href="/br" className="hover:text-white/70">
                🇧🇷 Brasil
              </Link>
              <Link href="/pt" className="hover:text-white/70">
                🇵🇹 Portugal
              </Link>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
