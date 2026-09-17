import { ImageResponse } from "next/og";
import { COMPANY, SITE_NAME } from "@/lib/site";

export const alt = `${SITE_NAME}: Franqueie e escale seu negócio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0f1419",
          color: "#faf9f7",
        }}
      >
        <div style={{ fontSize: 28, color: "#c45a2a", fontWeight: 600, marginBottom: 24 }}>
          {SITE_NAME}
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.15, maxWidth: 900 }}>
          {COMPANY.tagline}
        </div>
        <div style={{ fontSize: 24, color: "#9ca3af", marginTop: 32 }}>
          Brasil · Europa PT/ES · Diagnóstico gratuito
        </div>
      </div>
    ),
    { ...size },
  );
}
