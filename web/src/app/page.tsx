import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { MarketSelector } from "@/components/MarketSelector";
import { Nav } from "@/components/Nav";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Escolha seu mercado",
  description: `${SITE_NAME} — consultoria de franquias no Brasil e Portugal. Selecione Brasil (R$, COF) ou Portugal (€, APF).`,
  path: "/",
  noIndex: false,
});

export default function RootPage() {
  return (
    <>
      <Nav market="global" />
      <main id="main-content">
        <MarketSelector />
      </main>
      <Footer market="global" />
    </>
  );
}
