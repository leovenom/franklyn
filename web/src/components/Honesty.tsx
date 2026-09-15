"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { scores } from "@/lib/data";
import type { HomeCopy } from "@/lib/copy";

const scoreColor = { good: "text-emerald-600", warn: "text-amber-600", bad: "text-red-600" };

export function Honesty({ copy, casesPath = "/cases" }: { copy: HomeCopy["honesty"]; casesPath?: string }) {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <m.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-franklyn-accent">{copy.label}</p>
            <h2 className="mt-3 font-serif text-3xl font-normal tracking-tight md:text-4xl">{copy.title}</h2>
            <p className="mt-4 text-franklyn-muted">{copy.desc}</p>
            <Link href={casesPath} className="mt-6 inline-block text-sm font-semibold text-franklyn-accent hover:underline">
              {copy.cta}
            </Link>
          </div>
          <ul className="space-y-2 rounded-xl border border-franklyn-border bg-white p-6">
            {scores.map((s) => (
              <li key={s.name} className="flex justify-between border-b border-franklyn-border py-3 text-sm last:border-0">
                <span>{s.name}</span>
                <span className={`font-bold tabular-nums ${scoreColor[s.tone]}`}>{s.score}</span>
              </li>
            ))}
          </ul>
        </m.div>
      </div>
    </section>
  );
}
