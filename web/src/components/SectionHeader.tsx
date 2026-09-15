"use client";

import { m } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export function SectionHeader({ label, title, desc }: { label: string; title: string; desc: string }) {
  return (
    <m.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
      <p className="text-xs font-semibold uppercase tracking-widest text-franklyn-accent">{label}</p>
      <h2 className="mt-3 font-serif text-3xl font-normal tracking-tight md:text-4xl">{title}</h2>
      <p className="mt-3 max-w-xl leading-relaxed text-franklyn-muted">{desc}</p>
    </m.div>
  );
}
