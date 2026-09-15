"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { SectionHeader } from "./SectionHeader";
import type { HomeCopy } from "@/lib/copy";
import type { Plan } from "@/lib/data";

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
      variants={fadeUp}
      custom={index}
      className={`relative flex flex-col rounded-xl border p-7 ${plan.featured ? "border-franklyn-accent shadow-lg shadow-franklyn-accent/10" : "border-franklyn-border"} bg-white`}
    >
      {plan.tag && (
        <span className="absolute -top-2.5 left-5 rounded bg-franklyn-accent px-2.5 py-0.5 text-[10px] font-bold uppercase text-white">
          {plan.tag}
        </span>
      )}
      <p className="text-xs font-semibold uppercase tracking-widest text-franklyn-muted">{plan.name}</p>
      <p className="mt-2 text-2xl font-bold">{plan.price}</p>
      <p className="mt-1 text-sm text-franklyn-muted">{plan.eur}</p>
      <ul className="my-6 flex-1 space-y-2">
        {plan.items.map((item) => (
          <li key={item} className="text-sm text-franklyn-muted before:mr-2 before:text-franklyn-accent before:content-['✓']">
            {item}
          </li>
        ))}
      </ul>
      <Link
        href={`${homePath}#contato`}
        className={`block rounded-md py-2.5 text-center text-sm font-semibold ${plan.featured ? "bg-franklyn-accent text-white hover:bg-franklyn-accent-dark" : "border border-franklyn-border hover:border-franklyn-ink"}`}
      >
        {ctaLabel}
      </Link>
    </m.div>
  );
}

export function Pricing({
  copy,
  plans,
  homePath = "/br",
}: {
  copy: HomeCopy["pricing"];
  plans: Plan[];
  homePath?: string;
}) {
  const gridClass = plans.length >= 3 ? "lg:grid-cols-3" : "max-w-2xl lg:grid-cols-2";

  return (
    <section id="pacotes" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label={copy.label} title={copy.title} desc={copy.desc} />
        <m.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`mt-10 grid gap-5 ${gridClass}`}
        >
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} ctaLabel={copy.ctaPlan} homePath={homePath} />
          ))}
        </m.div>
        <p className="mt-8 text-sm text-franklyn-muted">
          {copy.footnote}{" "}
          <Link href="/proposta" className="font-medium text-franklyn-accent hover:underline">
            {copy.propostaLink}
          </Link>
        </p>
      </div>
    </section>
  );
}
