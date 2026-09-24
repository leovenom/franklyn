"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useFormCopy, useLocale } from "@/components/LocaleProvider";
import { validateQuickLead } from "@/lib/lead-profile";
import { submitLead } from "@/lib/submit-lead";
import { Button } from "./Button";
import { ConsentField, PrivacyLink } from "./ConsentField";
import { Input } from "./Input";

type LeadFormProps = {
  placeholder?: string;
  namePlaceholder?: string;
  button?: string;
  fine?: string;
  layout?: "inline" | "stacked";
  className?: string;
};

export function LeadForm({
  placeholder,
  namePlaceholder,
  button,
  fine,
  layout = "inline",
  className = "",
}: LeadFormProps) {
  const locale = useLocale();
  const copy = useFormCopy();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consentContact, setConsentContact] = useState(false);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const emailPlaceholder = placeholder ?? copy.fields.email.placeholder;
  const nameFieldPlaceholder = namePlaceholder ?? copy.fields.name.placeholder;
  const submitLabel = button ?? copy.submit.quick;
  const fineText = fine ?? copy.quick.intro;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationError = validateQuickLead({ name, email, consentContact }, copy.validation);
    if (validationError) {
      setStatus("error");
      setErrorMessage(validationError);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const result = await submitLead({
      type: "diagnostico",
      email: email.trim(),
      name: name.trim(),
      consentContact: true,
      website,
      locale,
    });

    if (result.ok) {
      setStatus("success");
      setName("");
      setEmail("");
      setConsentContact(false);
      setWebsite("");
      return;
    }

    setStatus("error");
    setErrorMessage(result.error);
  }

  const isInline = layout === "inline";

  if (status === "success") {
    return (
      <div className={className}>
        <p className="sticker-card px-4 py-3 text-body font-medium text-franklyn-ink" role="status">
          {copy.success.quick}
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
            ? "sticker-card flex flex-col gap-3 p-3"
            : "flex flex-col gap-3"
        }
        aria-label={locale === "en" ? "Quick diagnosis request" : "Pedido rápido de diagnóstico"}
      >
        <div className={isInline ? "flex flex-col gap-2 sm:flex-row sm:items-center" : "flex flex-col gap-3"}>
          <Input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={nameFieldPlaceholder}
            aria-label={copy.fields.name.label}
            autoComplete="name"
            disabled={status === "loading"}
            className={isInline ? "sm:flex-1 sm:border-slate-200 sm:shadow-none sm:focus:shadow-none" : ""}
          />
          <Input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={emailPlaceholder}
            aria-label={copy.fields.email.label}
            autoComplete="email"
            disabled={status === "loading"}
            className={isInline ? "sm:flex-1 sm:border-slate-200 sm:shadow-none sm:focus:shadow-none" : ""}
          />
          {isInline && (
            <Button
              type="submit"
              size="md"
              showArrow
              disabled={status === "loading"}
              className="sm:shrink-0"
            >
              {status === "loading" ? copy.submit.loading : submitLabel}
            </Button>
          )}
        </div>

        <ConsentField
          id="quick-consent"
          checked={consentContact}
          onChange={setConsentContact}
          disabled={status === "loading"}
        >
          {copy.consent.contact} <PrivacyLink />.
        </ConsentField>

        {!isInline && (
          <Button type="submit" size="lg" showArrow disabled={status === "loading"} className="w-full">
            {status === "loading" ? copy.submit.loading : submitLabel}
          </Button>
        )}

        <input
          type="text"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="sr-only"
        />
      </form>

      {status === "error" && errorMessage && (
        <p className="mt-3 text-caption text-red-600" role="alert">
          {errorMessage}
        </p>
      )}

      {(fineText || copy.quick.fullLink) && (
        <p
          className={`mt-3 text-caption text-franklyn-subtle ${isInline ? "text-center sm:text-left" : "text-center"}`}
        >
          {fineText}
          {copy.quick.fullLink && (
            <>
              {" · "}
              <Link href={copy.quick.fullHref} className="font-medium text-franklyn-accent underline underline-offset-2">
                {copy.quick.fullLink}
              </Link>
            </>
          )}
        </p>
      )}
    </div>
  );
}
