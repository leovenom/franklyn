"use client";

import { m } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { SectionHeader } from "./SectionHeader";
import type { HomeCopy } from "@/lib/copy";

export function Agents({ copy }: { copy: HomeCopy["agents"] }) {
  return (
    <section id="agentes" className="border-y border-franklyn-border bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label={copy.label} title={copy.title} desc={copy.desc} />
        <m.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {copy.items.map((agent, i) => (
            <m.div
              key={agent.name}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4 }}
              className="rounded-lg border border-franklyn-border bg-franklyn-bg p-5"
            >
              <p className="text-sm font-semibold">{agent.name}</p>
              <p className="mt-1 text-xs text-franklyn-muted">{agent.desc}</p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
