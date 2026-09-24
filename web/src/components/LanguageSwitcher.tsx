"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useLocale } from "./LocaleProvider";
import type { Locale } from "@/lib/locale";

const LABELS: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function hrefFor(target: Locale) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", target);
    const query = params.toString();
    return query ? `${pathname}?${query}` : `${pathname}?lang=${target}`;
  }

  return (
    <div className="flex items-center gap-1 rounded-md border-2 border-franklyn-border bg-white p-0.5">
      {(["pt", "en"] as const).map((target) => (
        <a
          key={target}
          href={hrefFor(target)}
          hrefLang={target === "en" ? "en-GB" : "pt-PT"}
          lang={target === "en" ? "en" : "pt"}
          aria-current={locale === target ? "true" : undefined}
          className={`rounded px-2 py-1 font-display text-xs font-bold transition-colors ${
            locale === target
              ? "bg-franklyn-accent text-white"
              : "text-franklyn-muted hover:text-franklyn-ink"
          }`}
        >
          {LABELS[target]}
        </a>
      ))}
    </div>
  );
}
