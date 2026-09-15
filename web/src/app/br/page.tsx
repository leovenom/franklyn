import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { HomeSections } from "@/components/HomeSections";
import { Nav } from "@/components/Nav";
import { getCopy } from "@/lib/copy";
import { buildMetadata } from "@/lib/metadata";

const copy = getCopy("br");

export const metadata: Metadata = buildMetadata({
  title: copy.home.meta.title,
  description: copy.home.meta.description,
  keywords: copy.home.meta.keywords,
  path: "/br",
  market: "br",
});

export default function BrasilHomePage() {
  return (
    <>
      <Nav market="br" />
      <main id="main-content">
        <HomeSections market="br" />
      </main>
      <Footer market="br" />
    </>
  );
}
