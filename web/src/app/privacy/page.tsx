import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { PrivacyContent, getPrivacyMeta } from "@/components/legal/PrivacyContent";
import { buildMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/request-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const privacy = getPrivacyMeta(locale);
  return buildMetadata({
    title: privacy.title,
    description: privacy.description,
    path: "/privacy",
    locale,
  });
}

export default async function PrivacyPage() {
  const locale = await getRequestLocale();
  const privacy = getPrivacyMeta(locale);

  return (
    <PageLayout
      title={privacy.title}
      description={privacy.updated}
      breadcrumbs={[{ label: privacy.breadcrumb, href: "/privacy" }]}
    >
      <PrivacyContent locale={locale} />
    </PageLayout>
  );
}
