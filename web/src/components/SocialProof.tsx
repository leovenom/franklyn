"use client";

import { m } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const segments = [
  "Educação STEM",
  "Food & beverage",
  "Serviços móveis",
  "Estética & saúde",
  "Fitness boutique",
];

export function SocialProof({ market = "br" }: { market?: "br" | "pt" }) {
  const label =
    market === "pt"
      ? "Metodologia aplicada em 5 segmentos"
      : "Metodologia validada em 5 segmentos";

  return (
    <section className="border-b border-franklyn-border bg-franklyn-navy px-6 py-6" aria-label="Segmentos atendidos">
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mx-auto max-w-6xl"
      >
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-franklyn-gold/80">
          {label}
        </p>
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {segments.map((name) => (
            <li
              key={name}
              className="text-sm font-medium tracking-wide text-white/40 transition hover:text-white/70"
            >
              {name}
            </li>
          ))}
        </ul>
      </m.div>
    </section>
  );
}
