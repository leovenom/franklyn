"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { scores } from "@/lib/data";
import type { HomeCopy } from "@/lib/copy";

const scoreColor = { good: "text-emerald-400", warn: "text-amber-400", bad: "text-red-400" };

export function Hero({
  copy,
  homePath = "/",
}: {
  copy: HomeCopy["hero"];
  homePath?: string;
}) {
  return (
    <section className="border-b border-franklyn-border px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <m.div variants={stagger} initial="hidden" animate="visible">
          <m.span variants={fadeUp} custom={0} className="text-xs font-semibold uppercase tracking-widest text-franklyn-accent">
            {copy.eyebrow}
          </m.span>
          <m.h1 variants={fadeUp} custom={1} className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            {copy.h1}{" "}
            <em className="font-serif italic text-franklyn-accent">{copy.h1Accent}</em>
          </m.h1>
          <m.p variants={fadeUp} custom={2} className="mt-5 max-w-lg text-lg text-franklyn-muted">
            {copy.sub}
          </m.p>
          <m.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`${homePath}#contato`}
              className="rounded-md bg-franklyn-accent px-6 py-3 text-sm font-semibold text-white shadow-md shadow-franklyn-accent/20 hover:bg-franklyn-accent-dark"
            >
              {copy.ctaPrimary}
            </Link>
            <Link
              href={`${homePath}/cases`}
              className="rounded-md border border-franklyn-border px-6 py-3 text-sm font-semibold hover:border-franklyn-ink"
            >
              {copy.ctaSecondary}
            </Link>
          </m.div>
        </m.div>
        <m.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl bg-franklyn-dark p-8 text-white"
        >
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">{copy.scoreTitle}</h2>
          <ul className="mt-6 divide-y divide-neutral-800">
            {scores.map((s, i) => (
              <m.li
                key={s.name}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="flex justify-between py-3 text-sm"
              >
                <span>{s.name}</span>
                <span className={`font-semibold ${scoreColor[s.tone]}`}>{s.score}</span>
              </m.li>
            ))}
          </ul>
        </m.div>
      </div>
    </section>
  );
}
