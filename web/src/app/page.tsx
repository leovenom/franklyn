import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { HomeSections } from "@/components/HomeSections";
import { getCopy } from "@/lib/copy";
import { buildMetadata } from "@/lib/metadata";

const copy = getCopy();

export const metadata: Metadata = buildMetadata({
  title: copy.home.meta.title,
  description: copy.home.meta.description,
  keywords: copy.home.meta.keywords,
  path: "/",
});

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
