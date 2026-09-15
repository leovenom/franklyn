import type { Market } from "./types";
import { getCopy } from "./index";

/** Resolve nav path under /br or /pt */
export function marketHref(market: Market, href: string): string {
  const home = getCopy(market).homePath;
  if (href.startsWith("/#")) return `${home}${href.slice(1)}`;
  // Case detail pages are shared portfolio demos (not duplicated per market)
  if (href.startsWith("/cases/")) return href;
  if (href === "/cases") return `${home}/cases`;
  if (href.startsWith("/") && !href.startsWith(home)) return `${home}${href}`;
  return href;
}
