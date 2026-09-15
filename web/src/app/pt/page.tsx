import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { HomeSections } from "@/components/HomeSections";
import { Nav } from "@/components/Nav";
import { getCopy } from "@/lib/copy";
import { buildMetadata } from "@/lib/metadata";

const copy = getCopy("pt");

export const metadata: Metadata = buildMetadata({
  title: copy.home.meta.title,
  description: copy.home.meta.description,
  keywords: copy.home.meta.keywords,
  path: "/pt",
  market: "pt",
});

export default function PortugalHomePage() {
  return (
    <>
      <Nav market="pt" />
      <main id="main-content">
        <HomeSections market="pt" />
      </main>
      <Footer market="pt" />
    </>
  );
}
