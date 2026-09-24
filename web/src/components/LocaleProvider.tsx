"use client";

import { Suspense, createContext, useContext } from "react";
import { getCopy, getFormCopy } from "@/lib/copy";
import type { FormCopy } from "@/lib/copy/form";
import type { MarketCopy } from "@/lib/copy/types";
import type { Locale } from "@/lib/locale";

const LocaleContext = createContext<Locale>("pt");

export function LocaleProvider({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}

export function useCopy(): MarketCopy {
  return getCopy(useLocale());
}

export function useFormCopy(): FormCopy {
  return getFormCopy(useLocale());
}

/** Wraps children that use useSearchParams (e.g. LanguageSwitcher) under Suspense. */
export function LocaleProviderBoundary({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <LocaleProvider locale={locale}>
      <Suspense fallback={null}>{children}</Suspense>
    </LocaleProvider>
  );
}
