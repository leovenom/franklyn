"use client";

import { m } from "framer-motion";
import { getCopy } from "@/lib/copy";
import { popIn, stagger } from "@/lib/motion";
import { Card } from "./ui/Card";
import { Section } from "./ui/Section";

export function FeatureHighlights() {
  const features = getCopy().home.features;

  return (
    <Section>
      <m.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-3"
      >
        {features.map((f, i) => (
          <m.div key={f.title} variants={popIn} custom={i}>
            <Card hover header={f.title} headerColor={f.color} padding="md" className="h-full">
              <p className="text-sm leading-relaxed text-franklyn-muted">{f.desc}</p>
            </Card>
          </m.div>
        ))}
      </m.div>
    </Section>
  );
}
