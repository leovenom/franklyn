import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/contact", destination: "/br/contact", permanent: true },
      { source: "/about", destination: "/br/about", permanent: true },
      { source: "/cases", destination: "/br/cases", permanent: true },
      { source: "/guia/leis-franquia", destination: "/br/guia/leis-franquia", permanent: true },
      { source: "/guia/modelo-escala", destination: "/br/guia/modelo-escala", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
