"use client";

import { FormEvent, useState } from "react";
import { m } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { CONTACT_EMAIL } from "@/lib/data";
import type { HomeCopy } from "@/lib/copy";
import type { Market } from "@/lib/copy";

export function CTA({ copy, market = "br" }: { copy: HomeCopy["cta"]; market?: Market }) {
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject =
      market === "pt"
        ? encodeURIComponent("Diagnóstico Franklyn — Portugal")
        : encodeURIComponent("Diagnóstico Franklyn — Brasil");
    const body = encodeURIComponent(
      market === "pt"
        ? `E-mail: ${email}\n\nGostaria de marcar diagnóstico gratuito.`
        : `E-mail: ${email}\n\nGostaria de agendar diagnóstico gratuito.`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contato" className="px-6 py-20">
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl bg-franklyn-navy px-8 py-16 text-center text-white shadow-2xl shadow-franklyn-navy/25"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-franklyn-gold/10 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-franklyn-accent/15 blur-3xl" aria-hidden />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-widest text-franklyn-gold/90">Sem compromisso</p>
          <h2 className="mt-3 font-serif text-3xl font-normal md:text-4xl">{copy.title}</h2>
          <p className="mx-auto mt-4 max-w-md text-neutral-400">{copy.sub}</p>
          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={copy.placeholder}
              aria-label={copy.placeholder}
              className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-neutral-500 backdrop-blur-sm focus:border-franklyn-gold focus:outline-none focus:ring-2 focus:ring-franklyn-gold/30"
            />
            <m.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-lg bg-franklyn-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-franklyn-accent/30 hover:bg-franklyn-accent-dark"
            >
              {copy.button}
            </m.button>
          </form>
          <p className="mt-4 text-xs text-neutral-500">{copy.fine}</p>
        </div>
      </m.div>
    </section>
  );
}
