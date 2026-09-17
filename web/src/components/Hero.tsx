"use client";

import { m, useReducedMotion } from "framer-motion";
import { popIn, stagger } from "@/lib/motion";
import { scores } from "@/lib/data";
import type { HomeCopy } from "@/lib/copy";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { LeadForm } from "./ui/LeadForm";

export function Hero({
  copy,
  cta,
}: {
  copy: HomeCopy["hero"];
  cta: HomeCopy["cta"];
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pb-20 pt-12 md:pb-32 md:pt-20">
      <div className="page-shell">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <m.div
            variants={stagger}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            className="relative"
          >
            <div className="hero-circle" aria-hidden />
            {copy.eyebrow && (
              <m.div variants={popIn} custom={0}>
                <Badge dot variant="accent">
                  {copy.eyebrow}
                </Badge>
              </m.div>
            )}

            <m.h1
              variants={popIn}
              custom={copy.eyebrow ? 1 : 0}
              id="hero-heading"
              className="font-display mt-6 text-balance text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.08] tracking-tight text-franklyn-ink"
            >
              {copy.h1}{" "}
              {copy.h1Accent && (
                <span className="text-franklyn-accent">{copy.h1Accent}</span>
              )}
            </m.h1>

            <m.p variants={popIn} custom={copy.eyebrow ? 2 : 1} className="mt-6 max-w-prose text-lg text-franklyn-muted">
              {copy.sub}
            </m.p>

            <m.div variants={popIn} custom={copy.eyebrow ? 3 : 2} className="mt-8 max-w-md">
              <LeadForm placeholder={cta.placeholder} button={cta.button} fine={cta.fine} layout="inline" />
            </m.div>

            <m.div variants={popIn} custom={copy.eyebrow ? 4 : 3} className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/cases" variant="secondary" size="sm">
                {copy.ctaSecondary}
              </Button>
            </m.div>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative"
          >
            <div className="dot-grid absolute inset-0 -z-10 rounded-card opacity-60" aria-hidden />
            <div className="blob-mask sticker-card-featured relative p-6 md:p-8">
              <div className="absolute -right-3 -top-3 flex h-14 w-14 items-center justify-center rounded-full border-2 border-franklyn-ink bg-franklyn-tertiary font-display text-xs font-bold text-franklyn-ink shadow-pop">
                0–70
              </div>
              <p className="label-caps text-franklyn-muted">{copy.scoreTitle ?? "Scores do portefólio"}</p>
              <ul className="mt-4 divide-y-2 divide-franklyn-border">
                {scores.map((s) => (
                  <li key={s.name} className="flex items-center justify-between py-3 text-sm">
                    <span className="text-franklyn-muted">{s.name}</span>
                    <span className="font-display tabular-nums text-franklyn-accent">{s.score}</span>
                  </li>
                ))}
              </ul>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
