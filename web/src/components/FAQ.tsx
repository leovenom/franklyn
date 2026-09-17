"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { popIn } from "@/lib/motion";
import { SectionHeader } from "./SectionHeader";
import type { HomeCopy } from "@/lib/copy";
import { Section } from "./ui/Section";

export function FAQ({ copy }: { copy: HomeCopy["faq"] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <div className="mx-auto max-w-prose">
        <SectionHeader label={copy.label} title={copy.title} desc={copy.desc} centered />
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={popIn}
          className="mt-10 space-y-3"
        >
          {copy.items.map((item, i) => (
            <div
              key={item.q}
              className={`sticker-card overflow-hidden transition-shadow ${open === i ? "shadow-pop-accent" : ""}`}
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-franklyn-ink"
                aria-expanded={open === i}
              >
                {item.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-franklyn-ink bg-franklyn-tertiary font-display text-sm font-bold">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="border-t-2 border-franklyn-border px-5 py-4 text-sm leading-relaxed text-franklyn-muted">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </m.div>
      </div>
    </Section>
  );
}
