import Link from "next/link";
import { getCopy, type Market } from "@/lib/copy";
import { marketHref } from "@/lib/copy/paths";
import { LEGAL_NAV, SITE_NAME } from "@/lib/site";

export function Footer({ market = "br" }: { market?: Market }) {
  const copy = getCopy(market);

  const navItems = [
    ...copy.navLinks.map((link) => ({
      href: marketHref(market, link.href),
      label: link.label,
    })),
    { href: marketHref(market, "/guia/leis-franquia"), label: "Leis de franquia" },
    { href: marketHref(market, "/guia/modelo-escala"), label: "Modelo de escala" },
    { href: "/proposta", label: "Proposta comercial" },
  ];

  return (
    <footer className="border-t border-franklyn-border bg-white px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-franklyn-ink">{SITE_NAME}</p>
          <p className="mt-2 text-sm text-franklyn-muted">{copy.home.footer.tagline}</p>
          <Link
            href={copy.otherMarketPath}
            className="mt-4 inline-block text-sm font-medium text-franklyn-accent hover:underline"
            hrefLang={market === "br" ? "pt-PT" : "pt-BR"}
          >
            {copy.otherMarketLabel}
          </Link>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-franklyn-muted">Navegação</p>
          <ul className="mt-3 space-y-2 text-sm">
            {navItems.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-franklyn-muted hover:text-franklyn-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-franklyn-muted">Legal</p>
          <ul className="mt-3 space-y-2 text-sm">
            {LEGAL_NAV.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-franklyn-muted hover:text-franklyn-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-center text-xs text-franklyn-muted">
        © 2026 {SITE_NAME}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
