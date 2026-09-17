"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { popIn, stagger } from "@/lib/motion";
import { SectionHeader } from "./SectionHeader";
import type { HomeCopy } from "@/lib/copy";
import type { Plan } from "@/lib/data";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { Section } from "./ui/Section";

function CheckIcon() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-franklyn-quaternary text-franklyn-ink">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M5 12l5 5L20 7" />
      </svg>
    </span>
  );
}

function PlanCard({
  plan,
  index,
  ctaLabel,
  homePath,
}: {
  plan: Plan;
  index: number;
  ctaLabel: string;
  homePath: string;
}) {
  return (
    <m.div
      variants={popIn}
      custom={index}
      className={`relative h-full ${plan.featured ? "z-10 lg:scale-110" : ""}`}
    >
      {plan.tag && (
        <Badge
          variant="accent"
          className="absolute -top-4 left-1/2 z-20 -translate-x-1/2 rotate-[-8deg] bg-franklyn-tertiary text-franklyn-ink shadow-pop"
        >
          {plan.tag}
        </Badge>
      )}
      <Card featured={plan.featured} hover={!plan.featured} padding="lg" className="flex h-full flex-col">
        <p className="text-sm font-medium text-franklyn-muted">{plan.name}</p>
        <p className="font-display mt-2 text-4xl text-franklyn-ink">{plan.price}</p>
        <p className="mt-1 text-caption text-franklyn-subtle">{plan.eur}</p>
        <ul className="my-6 flex-1 space-y-3 border-t-2 border-franklyn-border pt-6">
          {plan.items.map((item) => (
            <li key={item} className="flex gap-2 text-caption text-franklyn-muted">
              <CheckIcon />
              {item}
            </li>
          ))}
        </ul>
        <Button href={`${homePath}#contato`} variant={plan.featured ? "primary" : "secondary"} showArrow={plan.featured} className="w-full">
          {ctaLabel}
        </Button>
      </Card>
    </m.div>
  );
}

export function Pricing({
  copy,
  plans,
  homePath = "/",
}: {
  copy: HomeCopy["pricing"];
  plans: Plan[];
  homePath?: string;
}) {
  return (
    <Section id="pacotes">
      <SectionHeader label={copy.label} title={copy.title} desc={copy.desc} centered />
      <m.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto mt-12 grid max-w-4xl items-center gap-6 lg:grid-cols-2 lg:gap-8"
      >
        {plans.map((plan, i) => (
          <PlanCard key={plan.name} plan={plan} index={i} ctaLabel={copy.ctaPlan} homePath={homePath} />
        ))}
      </m.div>
      <p className="mt-10 text-center text-caption text-franklyn-muted">
        {copy.footnote}{" "}
        <Link href="/proposta" className="nav-link font-medium text-franklyn-accent">
          {copy.propostaLink}
        </Link>
      </p>
    </Section>
  );
}
