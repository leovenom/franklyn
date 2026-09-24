export type Locale = "pt" | "en";

export const LOCALE_COOKIE = "franklyn_locale";
export const DEFAULT_LOCALE: Locale = "pt";
export const SUPPORTED_LOCALES: Locale[] = ["pt", "en"];

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "pt" || value === "en";
}

/** Prefer Portuguese when browser lists both; otherwise English if primary tag is en. */
export function detectLocaleFromAcceptLanguage(header: string | null): Locale {
  if (!header) return DEFAULT_LOCALE;

  const tags = header
    .split(",")
    .map((part) => part.trim().split(";")[0]?.toLowerCase())
    .filter(Boolean);

  let sawPortuguese = false;

  for (const tag of tags) {
    if (tag === "pt" || tag.startsWith("pt-")) {
      sawPortuguese = true;
      return "pt";
    }
    if (tag === "en" || tag.startsWith("en-")) {
      return sawPortuguese ? "pt" : "en";
    }
  }

  return DEFAULT_LOCALE;
}

export function localeHtmlLang(locale: Locale): string {
  return locale === "en" ? "en-GB" : "pt-PT";
}

export function localeOgLocale(locale: Locale): string {
  return locale === "en" ? "en_GB" : "pt_PT";
}
