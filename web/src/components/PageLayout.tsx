import type { Market } from "@/lib/copy";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Breadcrumbs } from "./Breadcrumbs";

type PageLayoutProps = {
  title: string;
  description?: string;
  breadcrumbs: { label: string; href: string }[];
  market?: Market;
  children: React.ReactNode;
};

export function PageLayout({ title, description, breadcrumbs, market = "br", children }: PageLayoutProps) {
  return (
    <>
      <Nav market={market} />
      <main id="main-content" className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <Breadcrumbs items={breadcrumbs} market={market} />
        <header className="mb-10 border-b border-franklyn-border pb-8">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
          {description && <p className="mt-3 text-lg text-franklyn-muted">{description}</p>}
        </header>
        <article className="prose-franklyn space-y-6 text-franklyn-muted [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-franklyn-ink [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-franklyn-ink [&_li]:ml-5 [&_li]:list-disc [&_p]:leading-relaxed [&_ul]:space-y-2">
          {children}
        </article>
      </main>
      <Footer market={market} />
    </>
  );
}
