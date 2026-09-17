"use client";

import { m } from "framer-motion";
import { popIn, stagger } from "@/lib/motion";
import { SectionHeader } from "./SectionHeader";
import type { HomeCopy } from "@/lib/copy";
import { Card } from "./ui/Card";
import { Section } from "./ui/Section";

const headerColors = ["violet", "pink", "amber", "mint", "sky"] as const;

export function BrandProcess({ copy }: { copy: HomeCopy["brandProcess"] }) {
  return (
    <Section id="marca">
      <SectionHeader label={copy.label} title={copy.title} desc={copy.desc} centered />
      <m.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {copy.items.map((step, i) => (
          <m.div key={step.title} variants={popIn} custom={i}>
            <Card
              hover
              header={step.title}
              headerColor={headerColors[i % headerColors.length]}
              padding="md"
              className="h-full"
            >
              <p className="text-caption leading-relaxed text-franklyn-muted">{step.desc}</p>
              {step.output && (
                <p className="chip mt-3 w-full text-caption">{step.output}</p>
              )}
            </Card>
          </m.div>
        ))}
      </m.div>
    </Section>
  );
}
