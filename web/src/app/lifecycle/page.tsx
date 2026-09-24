import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { LifecycleDiagram } from "@/components/LifecycleDiagram";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Lifecycle do lead",
  description: "Organograma Franklyn × Send Studio · uso interno e LinkedIn.",
  path: "/lifecycle",
  noIndex: true,
});

export default function LifecyclePage() {
  return (
    <>
      <main id="main-content">
        <LifecycleDiagram />
      </main>
      <Footer />
    </>
  );
}
