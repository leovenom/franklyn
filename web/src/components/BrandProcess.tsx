"use client";

import { m } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { SectionHeader } from "./SectionHeader";
import type { HomeCopy } from "@/lib/copy";

const cellSpan = [
  "lg:col-span-4 lg:row-span-2",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-6",
  "lg:col-span-6",
];

export function BrandProcess({ copy }: { copy: HomeCopy["brandProcess"] }) {
  return (
    <section id="marca" className="border-y border-franklyn-border bg-franklyn-bg px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label={copy.label} title={copy.title} desc={copy.desc} />
        <m.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-12"
        >
          {copy.items.map((step, i) => (
            <m.div
              key={step.title}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4 }}
              className={`group rounded-2xl border border-franklyn-border bg-white p-6 transition hover:border-franklyn-accent hover:shadow-lg hover:shadow-franklyn-accent/5 ${cellSpan[i] ?? ""}`}
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-franklyn-navy text-sm font-bold text-franklyn-gold">
                {i + 1}
              </span>
              <h3 className="mt-4 font-semibold text-franklyn-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-franklyn-muted">{step.desc}</p>
              {step.output && (
                <p className="mt-4 border-t border-franklyn-border pt-4 text-xs font-medium text-franklyn-accent opacity-0 transition group-hover:opacity-100">
                  {step.output}
                </p>
              )}
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
