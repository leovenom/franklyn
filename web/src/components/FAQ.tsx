"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { SectionHeader } from "./SectionHeader";
import type { HomeCopy } from "@/lib/copy";

export function FAQ({ copy }: { copy: HomeCopy["faq"] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-franklyn-border bg-franklyn-bg px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <SectionHeader label={copy.label} title={copy.title} desc={copy.desc} />
        <m.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-10 space-y-3">
          {copy.items.map((item, i) => (
            <div key={item.q} className="overflow-hidden rounded-xl border border-franklyn-border bg-white">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold hover:bg-franklyn-bg/50"
                aria-expanded={open === i}
              >
                {item.q}
                <span className="shrink-0 text-franklyn-accent">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div className="border-t border-franklyn-border px-5 py-4 text-sm leading-relaxed text-franklyn-muted">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
