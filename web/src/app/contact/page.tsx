import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageLayout } from "@/components/PageLayout";
import { getCopy, getFormCopy } from "@/lib/copy";
import { buildMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/request-locale";
import { CONTACT_EMAIL } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const page = getCopy(locale).pages.contact;
  return buildMetadata({
    title: page.meta.title,
    description: page.meta.description,
    keywords: page.meta.keywords,
    path: "/contact",
    locale,
  });
}

export default async function ContactPage() {
  const locale = await getRequestLocale();
  const copy = getCopy(locale);
  const formCopy = getFormCopy(locale);
  const page = copy.pages.contact;
  const { diagnosis } = copy.home;

  return (
    <PageLayout
      title={page.title}
      description={page.description}
      breadcrumbs={[{ label: page.breadcrumb, href: "/contact" }]}
    >
      <p>
        {page.intro.split("{{email}}").map((part, index, parts) => (
          <span key={index}>
            {part}
            {index < parts.length - 1 && (
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            )}
          </span>
        ))}
      </p>

      <h2>{page.nextSteps}</h2>
      <ol className="space-y-4">
        {diagnosis.flow.map((step) => (
          <li key={step.num} className="sticker-card p-4">
            <p className="font-display font-bold text-franklyn-ink">
              {step.num}. {step.title}
            </p>
            <p className="mt-1 text-sm text-franklyn-muted">{step.desc}</p>
          </li>
        ))}
      </ol>

      <p className="mt-6 text-sm text-franklyn-muted">
        {page.scoreDetail}{" "}
        <Link href="/#diagnostico">{page.scoreLinkLabel}</Link>.
      </p>

      <h2 id="formulario">{page.formTitle}</h2>
      <p className="text-sm text-franklyn-muted">
        {formCopy.quick.intro}. {page.formIntro}
      </p>
      <ContactForm />
    </PageLayout>
  );
}
