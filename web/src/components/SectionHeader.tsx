"use client";

import { m } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export function SectionHeader({ label, title, desc }: { label: string; title: string; desc: string }) {
  return (
    <m.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
      <p className="text-xs font-semibold uppercase tracking-widest text-franklyn-accent">{label}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-3 max-w-xl text-franklyn-muted">{desc}</p>
    </m.div>
  );
}
