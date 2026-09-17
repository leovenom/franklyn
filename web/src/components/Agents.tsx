"use client";

import { m } from "framer-motion";
import { popIn, stagger } from "@/lib/motion";
import { SectionHeader } from "./SectionHeader";
import type { HomeCopy } from "@/lib/copy";
import { Card } from "./ui/Card";
import { Section } from "./ui/Section";

const badgeStyles = [
  "bg-franklyn-accent text-white",
  "bg-franklyn-secondary text-white",
  "bg-franklyn-tertiary text-franklyn-ink",
  "bg-franklyn-quaternary text-white",
  "bg-teal-600 text-white",
  "bg-orange-500 text-white",
  "bg-sky-500 text-white",
  "bg-indigo-600 text-white",
];

export function Agents({ copy }: { copy: HomeCopy["agents"] }) {
  return (
    <Section id="agentes">
      <SectionHeader label={copy.label} title={copy.title} desc={copy.desc} centered />
      <m.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {copy.items.map((agent, i) => (
          <m.div key={agent.name} variants={popIn} custom={i}>
            <Card hover padding="sm" className="relative h-full pt-8">
              <div
                className={`hover-wiggle absolute -top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-franklyn-ink ${badgeStyles[i] ?? badgeStyles[0]} font-display text-xs font-bold shadow-pop`}
              >
                {String(i + 1)}
              </div>
              <p className="text-sm font-medium text-franklyn-ink">{agent.name}</p>
              <p className="mt-1 text-caption text-franklyn-muted">{agent.desc}</p>
            </Card>
          </m.div>
        ))}
      </m.div>
    </Section>
  );
}
