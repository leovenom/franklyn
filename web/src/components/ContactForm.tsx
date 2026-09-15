"use client";

import { FormEvent, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato Franklyn — ${name}`);
    const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\n${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4" aria-label="Formulário de contato">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-franklyn-ink">Nome</label>
        <input
          id="name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-md border border-franklyn-border px-4 py-2.5 text-sm focus:border-franklyn-accent focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-franklyn-ink">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-md border border-franklyn-border px-4 py-2.5 text-sm focus:border-franklyn-accent focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-franklyn-ink">Mensagem</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full rounded-md border border-franklyn-border px-4 py-2.5 text-sm focus:border-franklyn-accent focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-franklyn-accent px-6 py-3 text-sm font-semibold text-white hover:bg-franklyn-accent-dark"
      >
        Enviar mensagem
      </button>
    </form>
  );
}
