import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { AppNav } from "@/components/AppNav";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/metadata";
import { COMPANY, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { email: false, address: false, telephone: false },
  icons: { icon: "/logo.svg", apple: "/logo.svg" },
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: COMPANY.description,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  ...(googleVerification ? { verification: { google: googleVerification } } : {}),
};

export const viewport: Viewport = {
  themeColor: "#FFFDF5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={`${outfit.variable} ${plusJakarta.variable}`}>
      <head>
        <JsonLd data={websiteJsonLd()} />
        <JsonLd data={localBusinessJsonLd()} />
      </head>
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:border-2 focus:border-franklyn-ink focus:bg-franklyn-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar para o conteúdo
        </a>
        <SiteShell>
          <AppNav />
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
