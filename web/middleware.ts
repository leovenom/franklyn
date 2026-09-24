import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  detectLocaleFromAcceptLanguage,
  isLocale,
} from "@/lib/locale";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const langParam = request.nextUrl.searchParams.get("lang");
  let locale = request.cookies.get(LOCALE_COOKIE)?.value;

  if (isLocale(langParam)) {
    locale = langParam;
    response.cookies.set(LOCALE_COOKIE, locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  } else if (!isLocale(locale)) {
    locale = detectLocaleFromAcceptLanguage(request.headers.get("accept-language"));
    response.cookies.set(LOCALE_COOKIE, locale ?? DEFAULT_LOCALE, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }

  response.headers.set("x-franklyn-locale", locale ?? DEFAULT_LOCALE);
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|logo.svg|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$).*)"],
};
