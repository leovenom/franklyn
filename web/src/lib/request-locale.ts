import { cookies, headers } from "next/headers";
import { DEFAULT_LOCALE, LOCALE_COOKIE, type Locale, isLocale } from "@/lib/locale";

export async function getRequestLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const fromCookie = cookieStore.get(LOCALE_COOKIE)?.value;
  if (isLocale(fromCookie)) return fromCookie;

  const headerStore = await headers();
  const fromHeader = headerStore.get("x-franklyn-locale");
  if (isLocale(fromHeader)) return fromHeader;

  return DEFAULT_LOCALE;
}
