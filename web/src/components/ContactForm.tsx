"use client";

import { FormEvent, useState } from "react";
import { submitLead } from "@/lib/submit-lead";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const result = await submitLead({ type: "contacto", email, name, message });

    if (result.ok) {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      return;
    }

    setStatus("error");
    setErrorMessage(result.error);
  }

  if (status === "success") {
    return (
      <p className="sticker-card mt-8 px-4 py-3 text-body font-medium text-franklyn-ink">
        Mensagem enviada. Obrigado, respondemos o mais rápido possível.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5" aria-label="Formulário de contato">
      <div>
        <label htmlFor="name" className="ds-label">
          Nome
        </label>
        <Input
          id="name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={status === "loading"}
          className="mt-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="ds-label">
          E-mail
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="mt-2"
        />
      </div>
      <div>
        <label htmlFor="message" className="ds-label">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={status === "loading"}
          className="ds-input mt-2 resize-y"
        />
      </div>
      {status === "error" && errorMessage && (
        <p className="text-caption text-red-600" role="alert">
          {errorMessage}
        </p>
      )}
      <Button type="submit" showArrow disabled={status === "loading"}>
        {status === "loading" ? "A enviar…" : "Enviar mensagem"}
      </Button>
    </form>
  );
}
