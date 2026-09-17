"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { popIn } from "@/lib/motion";
import { scores } from "@/lib/data";
import type { HomeCopy } from "@/lib/copy";
import { Badge } from "./ui/Badge";
import { Card } from "./ui/Card";
import { Section } from "./ui/Section";

const scoreTone = {
  good: "text-emerald-600",
  warn: "text-amber-600",
  bad: "text-red-600",
};

export function Honesty({ copy, casesPath = "/cases" }: { copy: HomeCopy["honesty"]; casesPath?: string }) {
  return (
    <Section>
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={popIn}
        className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
      >
        <div>
          <Badge>{copy.label}</Badge>
          <h2 className="font-display mt-5 text-balance text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.12] text-franklyn-ink">
            {copy.title}
          </h2>
          <p className="mt-4 text-lg text-franklyn-muted">{copy.desc}</p>
          <Link href={casesPath} className="nav-link mt-6 inline-flex font-medium text-franklyn-accent">
            {copy.cta} →
          </Link>
        </div>
        <Card hover padding="lg">
          <p className="label-caps text-franklyn-subtle">Scores reais</p>
          <ul className="mt-4 divide-y-2 divide-franklyn-border">
            {scores.map((s) => (
              <li key={s.name} className="flex items-center justify-between py-3 text-sm">
                <span className="text-franklyn-muted">{s.name}</span>
                <span className={`font-display tabular-nums font-bold ${scoreTone[s.tone]}`}>{s.score}</span>
              </li>
            ))}
          </ul>
          <p className="chip mt-4 w-full justify-center text-center text-caption">
            Incluímos scores baixos, honestidade que protege a sua marca.
          </p>
        </Card>
      </m.div>
    </Section>
  );
}
