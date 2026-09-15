import { Breadcrumbs } from "./Breadcrumbs";
import type { Market } from "@/lib/copy";

type SubpageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  market?: Market;
  breadcrumbs?: { label: string; href: string }[];
};

export function SubpageHero({ eyebrow, title, description, market = "br", breadcrumbs }: SubpageHeroProps) {
  return (
    <div className="border-b border-franklyn-border bg-hero-mesh hero-pattern">
      <div className="mx-auto max-w-4xl px-6 pb-10 pt-10 md:pb-12 md:pt-12">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} market={market} />}
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-widest text-franklyn-accent">{eyebrow}</p>
        )}
        <h1 className="mt-3 font-serif text-3xl font-normal tracking-tight md:text-4xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-franklyn-muted">{description}</p>
        )}
      </div>
    </div>
  );
}
