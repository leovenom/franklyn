import Link from "next/link";
import { getCopy, type Market } from "@/lib/copy";
import { JsonLd } from "./JsonLd";
import { breadcrumbJsonLd } from "@/lib/metadata";

type Crumb = { label: string; href: string };

export function Breadcrumbs({
  items,
  market = "br",
  homeHref,
}: {
  items: Crumb[];
  market?: Market;
  homeHref?: string;
}) {
  const home = homeHref ?? getCopy(market).homePath;
  const schemaItems = [{ name: "Home", path: home }, ...items.map((i) => ({ name: i.label, path: i.href }))];

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <JsonLd data={breadcrumbJsonLd(schemaItems)} />
      <ol className="flex flex-wrap items-center gap-2 text-sm text-franklyn-muted">
        <li>
          <Link href={home} className="hover:text-franklyn-ink">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {i === items.length - 1 ? (
              <span className="font-medium text-franklyn-ink" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-franklyn-ink">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
