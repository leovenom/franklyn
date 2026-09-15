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
        className="mx-auto max-w-3xl rounded-2xl bg-franklyn-dark px-8 py-16 text-center text-white"
      >
        <h2 className="text-3xl font-semibold">{copy.title}</h2>
        <p className="mx-auto mt-4 max-w-md text-neutral-400">{copy.sub}</p>
        <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={copy.placeholder}
            aria-label={copy.placeholder}
            className="flex-1 rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-franklyn-accent focus:outline-none"
          />
          <m.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-md bg-franklyn-accent px-6 py-3 text-sm font-semibold text-white"
          >
            {copy.button}
          </m.button>
        </form>
        <p className="mt-4 text-xs text-neutral-500">{copy.fine}</p>
      </m.div>
    </section>
  );
}
