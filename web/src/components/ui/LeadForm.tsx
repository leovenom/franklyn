"use client";

import { FormEvent, useState } from "react";
import { submitLead } from "@/lib/submit-lead";
import { Button } from "./Button";
import { Input } from "./Input";

type LeadFormProps = {
  placeholder: string;
  button: string;
  fine?: string;
  layout?: "inline" | "stacked";
  className?: string;
};

export function LeadForm({ placeholder, button, fine, layout = "inline", className = "" }: LeadFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const result = await submitLead({ type: "diagnostico", email });

    if (result.ok) {
      setStatus("success");
      setEmail("");
      return;
    }

    setStatus("error");
    setErrorMessage(result.error);
  }

  const isInline = layout === "inline";

  if (status === "success") {
    return (
      <div className={className}>
        <p className="sticker-card px-4 py-3 text-body font-medium text-franklyn-ink">
          Obrigado, recebemos o seu pedido. Entramos em contacto em breve.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className={
          isInline
            ? "sticker-card flex flex-col gap-2 p-2 sm:flex-row sm:items-center"
            : "flex flex-col gap-3"
        }
      >
        <Input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          disabled={status === "loading"}
          className={isInline ? "sm:flex-1 sm:border-slate-200 sm:shadow-none sm:focus:shadow-none" : ""}
        />
        <Button
          type="submit"
          size={isInline ? "md" : "lg"}
          showArrow
          disabled={status === "loading"}
          className={isInline ? "sm:shrink-0" : "w-full"}
        >
          {status === "loading" ? "A enviar…" : button}
        </Button>
      </form>
      {status === "error" && errorMessage && (
        <p className="mt-3 text-caption text-red-600" role="alert">
          {errorMessage}
        </p>
      )}
      {fine && (
        <p className={`mt-3 text-caption text-franklyn-subtle ${isInline ? "text-center sm:text-left" : "text-center"}`}>
          {fine}
        </p>
      )}
    </div>
  );
}
