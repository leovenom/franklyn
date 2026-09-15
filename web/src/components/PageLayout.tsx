import type { Market } from "@/lib/copy";
import { Nav, type NavMarket } from "./Nav";
import { Footer } from "./Footer";
import { Breadcrumbs } from "./Breadcrumbs";

type PageLayoutProps = {
  title: string;
  description?: string;
  breadcrumbs: { label: string; href: string }[];
  market?: NavMarket;
  children: React.ReactNode;
};

export function PageLayout({
  title,
  description,
  breadcrumbs,
  market = "global",
  children,
}: PageLayoutProps) {
  const breadcrumbMarket: Market = market === "global" ? "br" : market;

  return (
    <>
      <Nav market={market} />
      <div className="border-b border-franklyn-border bg-hero-mesh hero-pattern">
        <div className="mx-auto max-w-3xl px-6 pb-10 pt-10 md:pb-14 md:pt-14">
          <Breadcrumbs
            items={breadcrumbs}
            market={breadcrumbMarket}
            homeHref={market === "global" ? "/" : undefined}
          />
          <header className="mt-6">
            <h1 className="font-serif text-3xl font-normal tracking-tight md:text-4xl lg:text-[2.75rem]">
              {title}
            </h1>
            {description && (
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-franklyn-muted">{description}</p>
            )}
          </header>
        </div>
      </div>
      <main id="main-content" className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <article className="prose-franklyn space-y-6 text-franklyn-muted [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-normal [&_h2]:text-franklyn-ink [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-franklyn-ink [&_li]:ml-5 [&_li]:list-disc [&_p]:leading-relaxed [&_ul]:space-y-2">
          {children}
        </article>
      </main>
      <Footer market={market} />
    </>
  );
}
