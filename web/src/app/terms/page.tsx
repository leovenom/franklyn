import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { TermsContent } from "@/components/legal/TermsContent";
import { getTermsCopy } from "@/lib/copy/legal/terms";
import { buildMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/request-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const terms = getTermsCopy(locale);
  return buildMetadata({
    title: terms.meta.title,
    description: terms.meta.description,
    path: "/terms",
    locale,
  });
}

export default async function TermsPage() {
  const locale = await getRequestLocale();
  const terms = getTermsCopy(locale);

  return (
    <PageLayout
      title={terms.title}
      description={terms.updated}
      breadcrumbs={[{ label: terms.breadcrumb, href: "/terms" }]}
    >
      <TermsContent locale={locale} />
    </PageLayout>
  );
}
