"use client";

import { m } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { SectionHeader } from "./SectionHeader";
import type { HomeCopy } from "@/lib/copy";

export function Steps({ copy }: { copy: HomeCopy["steps"] }) {
  return (
    <section id="como" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label={copy.label} title={copy.title} desc={copy.desc} />
        <m.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {copy.items.map((step, i) => (
            <m.div
              key={step.num}
              variants={fadeUp}
              custom={i}
              className="rounded-2xl border border-transparent p-4 transition hover:border-franklyn-border hover:bg-white hover:shadow-sm"
            >
              <p className="font-serif text-4xl text-franklyn-accent/30">{step.num}</p>
              <h3 className="mt-3 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-franklyn-muted">{step.desc}</p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
