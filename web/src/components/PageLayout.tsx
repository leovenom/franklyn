import { Footer } from "./Footer";
import { Breadcrumbs } from "./Breadcrumbs";

type PageLayoutProps = {
  title: string;
  description?: string;
  breadcrumbs: { label: string; href: string }[];
  children: React.ReactNode;
};

export function PageLayout({ title, description, breadcrumbs, children }: PageLayoutProps) {
  return (
    <>
      <div className="page-shell pb-10 pt-6 md:pb-14 md:pt-8">
        <Breadcrumbs items={breadcrumbs} />
        <header className="sticker-card mt-6 p-8">
          <h1 className="font-display text-balance text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.12] text-franklyn-ink">
            {title}
          </h1>
          {description && <p className="mt-4 max-w-prose text-lg text-franklyn-muted">{description}</p>}
        </header>
      </div>
      <main id="main-content" className="page-shell pb-16">
        <article className="sticker-card p-8 text-franklyn-muted [&_a]:font-medium [&_a]:text-franklyn-accent [&_a]:underline [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-franklyn-ink [&_h3]:mt-6 [&_h3]:font-display [&_h3]:text-franklyn-ink [&_li]:ml-5 [&_li]:list-disc [&_p]:leading-relaxed [&_strong]:text-franklyn-ink [&_ul]:space-y-2">
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}
