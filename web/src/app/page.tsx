import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { HomeSections } from "@/components/HomeSections";
import { getCopy } from "@/lib/copy";
import { buildMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/request-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const copy = getCopy(locale);
  return buildMetadata({
    title: copy.home.meta.title,
    description: copy.home.meta.description,
    keywords: copy.home.meta.keywords,
    path: "/",
    locale,
  });
}

export default function HomePage() {
  return (
    <>
      <main id="main-content">
        <HomeSections />
      </main>
      <Footer />
    </>
  );
}
