"use client";

import { m } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import type { HomeCopy } from "@/lib/copy";

export function TrustBar({ items }: { items: HomeCopy["trust"] }) {
  return (
    <section className="border-b border-franklyn-border bg-white px-6 py-8">
      <m.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4"
      >
        {items.map((item, i) => (
          <m.div key={item.label} variants={fadeUp} custom={i} className="text-center">
            <p className="text-2xl font-bold tabular-nums text-franklyn-accent md:text-3xl">{item.value}</p>
            <p className="mt-1 text-xs text-franklyn-muted md:text-sm">{item.label}</p>
          </m.div>
        ))}
      </m.div>
    </section>
  );
}
