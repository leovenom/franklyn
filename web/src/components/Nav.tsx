"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import { getCopy, type Market } from "@/lib/copy";
import { marketHref } from "@/lib/copy/paths";
import { SITE_NAME } from "@/lib/site";

export function Nav({ market = "br" }: { market?: Market }) {
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const copy = getCopy(market);
  const home = copy.homePath;

  const navLinks = copy.navLinks.map((link) => ({
    ...link,
    href: marketHref(market, link.href),
  }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <m.header
      initial={reduceMotion ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className={`sticky top-0 z-50 border-b transition-colors duration-300 backdrop-blur-md ${
        scrolled
          ? "border-franklyn-navy/20 bg-franklyn-navy/95 shadow-lg shadow-black/10"
          : "border-franklyn-border bg-franklyn-bg/90"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Principal">
        <Link
          href={home}
          className={`flex items-center gap-2 text-lg font-bold tracking-tight ${scrolled ? "text-white" : ""}`}
        >
          <img src="/logo.svg" alt={`${SITE_NAME} logo`} width={28} height={28} className="h-7 w-7" />
          {SITE_NAME}
          <span
            className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase ${
              scrolled ? "bg-franklyn-gold/20 text-franklyn-gold" : "bg-franklyn-dark text-white"
            }`}
          >
            {copy.home.nav.marketLabel}
          </span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hidden text-sm lg:inline ${
                scrolled ? "text-white/70 hover:text-white" : "text-franklyn-muted hover:text-franklyn-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={copy.contactPath}
            className={`hidden text-sm md:inline ${
              scrolled ? "text-white/70 hover:text-white" : "text-franklyn-muted hover:text-franklyn-ink"
            }`}
          >
            {copy.home.nav.contact}
          </Link>
          <Link
            href={`${home}#contato`}
            className="rounded-md bg-franklyn-accent px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-franklyn-accent-dark"
          >
            {copy.home.nav.cta}
          </Link>
        </div>
      </nav>
    </m.header>
  );
}
