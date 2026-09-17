/** Resolve anchor links against home path */
export function siteHref(href: string, home = "/"): string {
  if (href.startsWith("/#")) return `${home}${href.slice(1)}`;
  return href;
}
