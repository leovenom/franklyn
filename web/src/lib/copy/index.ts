export { copy as copyPt } from "./pt";
export { copy as copyEn } from "./en";
export type { HomeCopy, MarketCopy, NavLink } from "./types";

import { copy as copyPt } from "./pt";
import { copy as copyEn } from "./en";
import { formCopy as formCopyPt } from "./form";
import { formCopyEn } from "./form-en";
import type { FormCopy } from "./form";
import type { Locale } from "@/lib/locale";

export function getCopy(locale: Locale = "pt") {
  return locale === "en" ? copyEn : copyPt;
}

export function getFormCopy(locale: Locale = "pt"): FormCopy {
  return locale === "en" ? formCopyEn : formCopyPt;
}

/** Default export for legacy imports */
export const copy = copyPt;
