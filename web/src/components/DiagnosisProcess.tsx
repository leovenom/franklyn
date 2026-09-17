"use client";

import { m } from "framer-motion";
import { popIn, stagger } from "@/lib/motion";
import type { HomeCopy } from "@/lib/copy";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { SectionHeader } from "./SectionHeader";
import { Section } from "./ui/Section";

const outcomeClass = {
  success: "feature-header-violet",
  warning: "feature-header-amber",
  danger: "bg-franklyn-secondary px-4 py-2 font-display text-sm font-bold text-white rounded-t-md",
};

export function DiagnosisProcess({ copy }: { copy: HomeCopy["diagnosis"] }) {
  return (
    <Section id="diagnostico">
      <SectionHeader label={copy.label} title={copy.title} desc={copy.desc} centered />

      <m.ol
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {copy.flow.map((step, i) => (
          <m.li key={step.num} variants={popIn} custom={i}>
            <div className="sticker-card-hover relative h-full p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-franklyn-ink bg-franklyn-tertiary font-display text-sm font-bold text-franklyn-ink shadow-pop">
                {step.num}
              </span>
              <h3 className="mt-4 font-display font-bold text-franklyn-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-franklyn-muted">{step.desc}</p>
            </div>
          </m.li>
        ))}
      </m.ol>

      <m.div
        variants={popIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="sticker-card mt-10 p-6 md:p-8"
      >
        <p className="label-caps text-franklyn-muted">{copy.criteriaTitle}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {copy.criteria.map((name) => (
            <li key={name} className="chip">
              {name}
            </li>
          ))}
        </ul>
      </m.div>

      <div className="mt-10">
        <p className="label-caps mb-4 text-center text-franklyn-muted">{copy.outcomesTitle}</p>
        <m.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 md:grid-cols-3"
        >
          {copy.outcomes.map((outcome, i) => (
            <m.div key={outcome.range} variants={popIn} custom={i}>
              <Card padding="md" className="h-full overflow-hidden p-0">
                <div className={outcomeClass[outcome.tone]}>
                  {outcome.range} · {outcome.title}
                </div>
                <p className="p-5 text-sm leading-relaxed text-franklyn-muted">{outcome.desc}</p>
              </Card>
            </m.div>
          ))}
        </m.div>
      </div>

      <m.div
        variants={popIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <Button href="/#contato" showArrow>
          {copy.cta}
        </Button>
      </m.div>
    </Section>
  );
}
