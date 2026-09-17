"use client";

import { m } from "framer-motion";
import { popIn, stagger } from "@/lib/motion";
import { SectionHeader } from "./SectionHeader";
import type { HomeCopy } from "@/lib/copy";
import { Section } from "./ui/Section";

export function Steps({ copy }: { copy: HomeCopy["steps"] }) {
  return (
    <Section id="como">
      <SectionHeader label={copy.label} title={copy.title} desc={copy.desc} centered />
      <m.ol
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-14 grid gap-4 md:grid-cols-3"
      >
        {copy.items.map((step, i) => (
          <m.li key={step.num} variants={popIn} custom={i}>
            <div className="sticker-card-hover h-full p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-franklyn-ink bg-franklyn-accent font-display text-sm font-bold text-white shadow-pop">
                {step.num}
              </span>
              <h3 className="mt-4 font-display font-bold text-franklyn-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-franklyn-muted">{step.desc}</p>
            </div>
          </m.li>
        ))}
      </m.ol>
    </Section>
  );
}
