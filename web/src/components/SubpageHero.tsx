import { Breadcrumbs } from "./Breadcrumbs";
import { Badge } from "./ui/Badge";

type SubpageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href: string }[];
};

export function SubpageHero({ eyebrow, title, description, breadcrumbs }: SubpageHeroProps) {
  return (
    <div className="page-shell pb-10 pt-10 md:pb-12 md:pt-12">
      {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
      {eyebrow && <Badge className="mt-6">{eyebrow}</Badge>}
      <h1 className="font-display mt-4 text-balance text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.12] text-franklyn-ink">
        {title}
      </h1>
      {description && <p className="mt-4 max-w-prose text-lg text-franklyn-muted">{description}</p>}
    </div>
  );
}
