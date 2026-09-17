"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { getCopy } from "@/lib/copy";
import { SITE_NAME } from "@/lib/site";
import { Button } from "./ui/Button";

function isActive(pathname: string, href: string) {
  if (href.startsWith("/#")) return false;
  const path = href.split("#")[0];
  if (!path || path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function Nav() {
  const pathname = usePathname();
  const copy = getCopy();
  const { homePath, contactPath, navLinks, home } = {
    homePath: copy.homePath,
    contactPath: copy.contactPath,
    navLinks: copy.navLinks,
    home: copy.home,
  };

  const reduceMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const linkClass = (href: string) =>
    `nav-link rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      isActive(pathname, href)
        ? "bg-franklyn-tertiary/30 text-franklyn-ink"
        : "text-franklyn-muted hover:text-franklyn-ink"
    }`;

  return (
    <>
      <m.header
        initial={reduceMotion ? false : { opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
        className="fixed inset-x-0 top-0 z-50 pt-3"
      >
        <div className="page-shell">
          <nav
            className="sticker-card flex min-h-14 items-center justify-between gap-3 px-3 py-2 md:min-h-16 md:px-5"
            aria-label="Principal"
          >
            <Link href={homePath} className="font-display shrink-0 text-base font-bold text-franklyn-ink md:text-lg">
              {SITE_NAME}
            </Link>

            <div className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-2 lg:flex">
              <Link href={contactPath} className={linkClass(contactPath)}>
                {home.nav.contact}
              </Link>
              <Button href={`${homePath}#contato`} size="sm" showArrow>
                {home.nav.cta}
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="chip rounded-md p-2 lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label="Abrir menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </nav>
        </div>
      </m.header>
      <div className="h-[4.75rem] md:h-[5.25rem]" aria-hidden />

      <AnimatePresence>
        {mobileOpen && (
          <>
            <m.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-franklyn-ink/25 lg:hidden"
              aria-label="Fechar menu"
              onClick={() => setMobileOpen(false)}
            />
            <m.div
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.34, 1.56, 0.64, 1] }}
              className="sticker-card fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col shadow-pop lg:hidden"
            >
              <div className="flex items-center justify-between border-b-2 border-franklyn-border px-5 py-4">
                <span className="font-display text-base font-bold text-franklyn-ink">{SITE_NAME}</span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="chip rounded-md p-2"
                  aria-label="Fechar menu"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-4 py-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`nav-link block rounded-md px-3 py-3 text-base font-medium ${
                      isActive(pathname, link.href) ? "bg-franklyn-tertiary/30 text-franklyn-ink" : "text-franklyn-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href={contactPath}
                  onClick={() => setMobileOpen(false)}
                  className={`nav-link block rounded-md px-3 py-3 text-base font-medium ${
                    isActive(pathname, contactPath) ? "bg-franklyn-tertiary/30 text-franklyn-ink" : "text-franklyn-muted"
                  }`}
                >
                  {home.nav.contact}
                </Link>
              </div>
              <div className="border-t-2 border-franklyn-border p-4">
                <Button href={`${homePath}#contato`} size="lg" showArrow className="w-full" onClick={() => setMobileOpen(false)}>
                  {home.nav.cta}
                </Button>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
