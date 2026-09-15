"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { getCopy, type Market } from "@/lib/copy";
import { marketHref } from "@/lib/copy/paths";
import { GLOBAL_CTA, GLOBAL_CONTACT, GLOBAL_NAV_LINKS } from "@/lib/nav-global";
import { SITE_NAME } from "@/lib/site";

export type NavMarket = Market | "global";

type NavLinkItem = { href: string; label: string };

function linkClass(scrolled: boolean, mobile = false) {
  const base = mobile
    ? "block rounded-lg px-4 py-3 text-base font-medium"
    : "rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors";
  if (scrolled) {
    return mobile
      ? `${base} text-white/90 hover:bg-white/10`
      : `${base} text-white/75 hover:bg-white/10 hover:text-white`;
  }
  return mobile
    ? `${base} text-franklyn-ink hover:bg-franklyn-bg`
    : `${base} text-franklyn-muted hover:text-franklyn-ink`;
}

export function Nav({ market = "global" }: { market?: NavMarket }) {
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isGlobal = market === "global";
  const copy = isGlobal ? null : getCopy(market);
  const home = isGlobal ? "/" : copy!.homePath;

  const navLinks: NavLinkItem[] = isGlobal
    ? GLOBAL_NAV_LINKS
    : copy!.navLinks.map((link) => ({
        ...link,
        href: marketHref(market, link.href),
      }));

  const contactPath = isGlobal ? GLOBAL_CONTACT.href : copy!.contactPath;
  const contactLabel = isGlobal ? GLOBAL_CONTACT.label : copy!.home.nav.contact;
  const ctaHref = isGlobal ? GLOBAL_CTA.href : `${home}#contato`;
  const ctaLabel = isGlobal ? GLOBAL_CTA.label : copy!.home.nav.cta;
  const marketLabel = isGlobal ? null : copy!.home.nav.marketLabel;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const headerClass = scrolled
    ? "border-franklyn-navy/30 bg-franklyn-navy/97 shadow-lg shadow-black/15"
    : "border-franklyn-border/80 bg-franklyn-bg/85";

  const logoTextClass = scrolled ? "text-white" : "text-franklyn-ink";

  return (
    <>
      <m.header
        initial={reduceMotion ? false : { y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
        className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${headerClass}`}
      >
        <nav
          className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
          aria-label="Principal"
        >
          <Link href={home} className={`flex min-w-0 items-center gap-2.5 ${logoTextClass}`}>
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                scrolled ? "bg-franklyn-gold/20 ring-1 ring-franklyn-gold/30" : "bg-franklyn-navy ring-1 ring-franklyn-navy/10"
              }`}
            >
              <img src="/logo.svg" alt="" width={22} height={22} className="h-[22px] w-[22px]" />
            </span>
            <span className="truncate text-lg font-bold tracking-tight">{SITE_NAME}</span>
            {marketLabel && (
              <span
                className={`hidden rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase sm:inline ${
                  scrolled ? "bg-franklyn-gold/20 text-franklyn-gold" : "bg-franklyn-navy text-white"
                }`}
              >
                {marketLabel}
              </span>
            )}
            {isGlobal && (
              <span
                className={`hidden rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase sm:inline ${
                  scrolled ? "bg-white/10 text-white/80" : "bg-franklyn-accent/10 text-franklyn-accent"
                }`}
              >
                BR · PT
              </span>
            )}
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(scrolled)}>
                {link.label}
              </Link>
            ))}
            <span className="mx-1 h-4 w-px bg-current opacity-20" aria-hidden />
            <Link href={contactPath} className={linkClass(scrolled)}>
              {contactLabel}
            </Link>
            <Link
              href={ctaHref}
              className="ml-2 rounded-lg bg-franklyn-accent px-4 py-2 text-sm font-semibold text-white shadow-md shadow-franklyn-accent/20 transition hover:bg-franklyn-accent-dark hover:shadow-lg"
            >
              {ctaLabel}
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href={ctaHref}
              className="rounded-lg bg-franklyn-accent px-3 py-2 text-xs font-semibold text-white sm:text-sm"
            >
              {ctaLabel}
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className={`rounded-lg p-2.5 transition ${
                scrolled ? "text-white hover:bg-white/10" : "text-franklyn-ink hover:bg-franklyn-border/50"
              }`}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label="Abrir menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </nav>
      </m.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <m.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-franklyn-navy/60 backdrop-blur-sm lg:hidden"
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
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col bg-white shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-franklyn-border px-5 py-4">
                <span className="font-bold text-franklyn-ink">{SITE_NAME}</span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg p-2 text-franklyn-muted hover:bg-franklyn-bg"
                  aria-label="Fechar menu"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-3 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={linkClass(false, true)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href={contactPath}
                  onClick={() => setMobileOpen(false)}
                  className={linkClass(false, true)}
                >
                  {contactLabel}
                </Link>
                {!isGlobal && (
                  <Link
                    href={copy!.otherMarketPath}
                    onClick={() => setMobileOpen(false)}
                    className="mt-2 block rounded-lg border border-franklyn-border px-4 py-3 text-sm font-medium text-franklyn-accent"
                  >
                    {copy!.otherMarketLabel}
                  </Link>
                )}
              </div>
              <div className="border-t border-franklyn-border p-4">
                <Link
                  href={ctaHref}
                  onClick={() => setMobileOpen(false)}
                  className="block w-full rounded-lg bg-franklyn-accent py-3 text-center text-sm font-semibold text-white"
                >
                  {ctaLabel}
                </Link>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
