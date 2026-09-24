"use client";

import Link from "next/link";
import { useCopy } from "@/components/LocaleProvider";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export function Footer() {
  const copy = useCopy();
  const navItems = [...copy.navLinks, ...copy.footerLinks];

  return (
    <footer className="border-t-2 border-franklyn-ink bg-white py-14">
      <div className="page-shell grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-sm font-bold text-franklyn-ink">{SITE_NAME}</p>
          <p className="mt-2 text-caption leading-relaxed text-franklyn-muted">{copy.home.footer.tagline}</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="nav-link mt-3 inline-flex text-caption font-medium text-franklyn-accent">
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="md:col-span-1 lg:col-span-2">
          <p className="label-caps text-franklyn-subtle">{copy.ui.navigation}</p>
          <ul className="mt-3 grid gap-1.5 text-caption sm:grid-cols-2">
            {navItems.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="nav-link text-franklyn-muted">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label-caps text-franklyn-subtle">{copy.ui.legal}</p>
          <ul className="mt-3 space-y-1.5 text-caption">
            {copy.legalNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="nav-link text-franklyn-muted">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="page-shell mt-10 border-t-2 border-franklyn-border pt-6">
        <p className="text-center text-caption text-franklyn-subtle sm:text-left">
          © {new Date().getFullYear()} {SITE_NAME}
        </p>
      </div>
    </footer>
  );
}
