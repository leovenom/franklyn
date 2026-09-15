import type { Metadata, Viewport } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessJsonLd } from "@/lib/metadata";
import { COMPANY, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { email: false, address: false, telephone: false },
  icons: { icon: "/logo.svg", apple: "/logo.svg" },
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: COMPANY.description,
};

export const viewport: Viewport = {
  themeColor: "#c45a2a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <head>
        <JsonLd data={localBusinessJsonLd()} />
      </head>
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-franklyn-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
