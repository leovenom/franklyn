"use client";

import { m } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { SectionHeader } from "./SectionHeader";
import type { HomeCopy } from "@/lib/copy";

export function BrandProcess({ copy }: { copy: HomeCopy["brandProcess"] }) {
  return (
    <section id="marca" className="border-y border-franklyn-border bg-franklyn-bg px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label={copy.label} title={copy.title} desc={copy.desc} />
        <m.ol
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 space-y-0"
        >
          {copy.items.map((step, i) => (
            <m.li
              key={step.title}
              variants={fadeUp}
              custom={i}
              className="relative flex gap-6 border-l border-franklyn-border pb-10 pl-8 last:pb-0"
            >
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-franklyn-accent text-xs font-bold text-white">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-franklyn-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-franklyn-muted">{step.desc}</p>
                {step.output && (
                  <p className="mt-2 text-xs font-medium text-franklyn-accent">{step.output}</p>
                )}
              </div>
            </m.li>
          ))}
        </m.ol>
      </div>
    </section>
  );
}
