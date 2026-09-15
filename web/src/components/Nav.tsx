"use client";

import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { getCopy, type Market } from "@/lib/copy";
import { marketHref } from "@/lib/copy/paths";
import { SITE_NAME } from "@/lib/site";

export function Nav({ market = "br" }: { market?: Market }) {
  const reduceMotion = useReducedMotion();
  const copy = getCopy(market);
  const home = copy.homePath;

  const navLinks = copy.navLinks.map((link) => ({
    ...link,
    href: marketHref(market, link.href),
  }));

  return (
    <m.header
      initial={reduceMotion ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="sticky top-0 z-50 border-b border-franklyn-border bg-franklyn-bg/90 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Principal">
        <Link href={home} className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <img src="/logo.svg" alt={`${SITE_NAME} logo`} width={28} height={28} className="h-7 w-7" />
          {SITE_NAME}
          <span className="rounded-full bg-franklyn-dark px-2 py-0.5 text-[10px] font-semibold uppercase text-white">
            {copy.home.nav.marketLabel}
          </span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hidden text-sm text-franklyn-muted hover:text-franklyn-ink lg:inline"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={copy.contactPath}
            className="hidden text-sm text-franklyn-muted hover:text-franklyn-ink md:inline"
          >
            {copy.home.nav.contact}
          </Link>
          <Link
            href={`${home}#contato`}
            className="rounded-md bg-franklyn-accent px-4 py-2 text-sm font-semibold text-white hover:bg-franklyn-accent-dark"
          >
            {copy.home.nav.cta}
          </Link>
        </div>
      </nav>
    </m.header>
  );
}
