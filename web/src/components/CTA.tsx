"use client";

import { m } from "framer-motion";
import { popIn } from "@/lib/motion";
import type { HomeCopy } from "@/lib/copy";
import { Badge } from "./ui/Badge";
import { Card } from "./ui/Card";
import { LeadForm } from "./ui/LeadForm";
import { Section } from "./ui/Section";

export function CTA({ copy }: { copy: HomeCopy["cta"] }) {
  return (
    <Section id="contato">
      <m.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={popIn} className="mx-auto max-w-prose">
        <Card featured padding="lg" className="relative text-center">
          <Badge dot variant="accent">
            Diagnóstico gratuito
          </Badge>
          <h2 className="font-display mt-5 text-balance text-[clamp(1.75rem,3vw,2.25rem)] text-franklyn-ink">
            {copy.title}
          </h2>
          <p className="mt-3 text-franklyn-muted">{copy.sub}</p>
          <div className="mx-auto mt-8 max-w-sm">
            <LeadForm placeholder={copy.placeholder} button={copy.button} fine={copy.fine} layout="stacked" />
          </div>
        </Card>
      </m.div>
    </Section>
  );
}
