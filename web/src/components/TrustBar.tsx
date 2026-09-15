"use client";

import { m, useReducedMotion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import type { HomeCopy } from "@/lib/copy";

export function TrustBar({ items }: { items: HomeCopy["trust"] }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-b border-franklyn-border bg-white px-6 py-10">
      <m.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4"
      >
        {items.map((item, i) => (
          <m.div key={item.label} variants={fadeUp} custom={i} className="text-center">
            <m.p
              className="text-3xl font-bold tabular-nums text-franklyn-navy md:text-4xl"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              {item.value}
            </m.p>
            <p className="mt-2 text-xs font-medium uppercase tracking-wide text-franklyn-muted md:text-sm">
              {item.label}
            </p>
          </m.div>
        ))}
      </m.div>
    </section>
  );
}
