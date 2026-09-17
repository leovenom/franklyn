"use client";

import { m } from "framer-motion";
import { popIn, stagger } from "@/lib/motion";
import type { HomeCopy } from "@/lib/copy";

export function TrustBar({ items }: { items: HomeCopy["trust"] }) {
  return (
    <section className="py-10">
      <div className="page-shell">
        <m.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="sticker-card grid grid-cols-2 gap-6 p-6 md:grid-cols-4 md:gap-0 md:divide-x-2 md:divide-franklyn-border"
        >
          {items.map((item, i) => (
            <m.div key={item.label} variants={popIn} custom={i} className="text-center md:px-6">
              <p className="font-display text-3xl tabular-nums text-franklyn-ink md:text-4xl">{item.value}</p>
              <p className="label-caps mt-2 text-franklyn-subtle">{item.label}</p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
