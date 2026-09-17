import Link from "next/link";
import { getCopy } from "@/lib/copy";
import { JsonLd } from "./JsonLd";
import { breadcrumbJsonLd } from "@/lib/metadata";

type Crumb = { label: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const home = getCopy().homePath;
  const schemaItems = [{ name: "Home", path: home }, ...items.map((i) => ({ name: i.label, path: i.href }))];

  return (
    <nav aria-label="Breadcrumb">
      <JsonLd data={breadcrumbJsonLd(schemaItems)} />
      <ol className="flex flex-wrap items-center gap-2 text-caption text-franklyn-subtle">
        <li>
          <Link href={home} className="nav-link">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={`${i}-${item.href}`} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {i === items.length - 1 ? (
              <span className="text-franklyn-muted" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="nav-link">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
