"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { scores } from "@/lib/data";
import type { HomeCopy } from "@/lib/copy";

const scoreColor = { good: "text-emerald-400", warn: "text-amber-400", bad: "text-red-400" };

export function Hero({
  copy,
  homePath = "/br",
}: {
  copy: HomeCopy["hero"];
  homePath?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-franklyn-border bg-hero-mesh hero-pattern px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <m.div variants={stagger} initial="hidden" animate="visible">
          <m.span
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-franklyn-border bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-franklyn-accent backdrop-blur-sm"
          >
            {copy.eyebrow}
          </m.span>
          <m.h1
            variants={fadeUp}
            custom={1}
            className="mt-6 font-serif text-4xl font-normal leading-[1.15] tracking-tight md:text-5xl lg:text-[3.25rem]"
          >
            {copy.h1}{" "}
            <em className="font-serif italic text-franklyn-accent">{copy.h1Accent}</em>
          </m.h1>
          <m.p variants={fadeUp} custom={2} className="mt-5 max-w-lg text-lg leading-relaxed text-franklyn-muted">
            {copy.sub}
          </m.p>
          <m.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`${homePath}#contato`}
              className="rounded-md bg-franklyn-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-franklyn-accent/25 transition hover:bg-franklyn-accent-dark hover:shadow-xl"
            >
              {copy.ctaPrimary}
            </Link>
            <Link
              href={`${homePath}/cases`}
              className="rounded-md border border-franklyn-border bg-white/80 px-6 py-3.5 text-sm font-semibold backdrop-blur-sm transition hover:border-franklyn-ink hover:bg-white"
            >
              {copy.ctaSecondary}
            </Link>
          </m.div>
        </m.div>

        <m.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="relative rounded-2xl border border-franklyn-navy/20 bg-franklyn-navy p-8 text-white shadow-2xl shadow-franklyn-navy/20"
        >
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-franklyn-gold/20 blur-2xl" aria-hidden />
          <h2 className="text-xs font-semibold uppercase tracking-widest text-franklyn-gold/90">
            {copy.scoreTitle}
          </h2>
          <ul className="mt-6 divide-y divide-white/10">
            {scores.map((s, i) => (
              <m.li
                key={s.name}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="flex justify-between py-3.5 text-sm"
              >
                <span className="text-white/80">{s.name}</span>
                <span className={`font-bold tabular-nums ${scoreColor[s.tone]}`}>{s.score}</span>
              </m.li>
            ))}
          </ul>
        </m.div>
      </div>
    </section>
  );
}
