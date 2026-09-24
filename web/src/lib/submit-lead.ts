import { CONTACT_EMAIL } from "@/lib/site";
import { formatLeadNotes, type LeadProfile } from "@/lib/lead-profile";
import type { Locale } from "@/lib/locale";

export type SubmitLeadInput = {
  type: "diagnostico" | "contacto";
  email: string;
  name?: string;
  message?: string;
  consentContact?: boolean;
  profile?: LeadProfile;
  website?: string;
  locale?: Locale;
};

export type SubmitLeadResult =
  | { ok: true; via: "crm" }
  | { ok: true; via: "mailto" }
  | { ok: false; error: string };

function buildMailtoBody(input: SubmitLeadInput): string {
  if (input.profile) {
    return formatLeadNotes(input.profile, input.type, typeof window !== "undefined" ? window.location.pathname : "/");
  }

  if (input.type === "contacto") {
    return `Nome: ${input.name}\nE-mail: ${input.email}\n\n${input.message ?? ""}`;
  }

  return [
    `Nome: ${input.name ?? ""}`,
    `E-mail: ${input.email}`,
    "",
    "Pedido de diagnóstico gratuito (formulário rápido).",
    "Consentimento RGPD: sim",
  ].join("\n");
}

function mailtoFallback(input: SubmitLeadInput): SubmitLeadResult {
  const subject =
    input.type === "diagnostico"
      ? encodeURIComponent("Diagnóstico Franklyn: Portugal")
      : encodeURIComponent(`Contato Franklyn: ${input.name ?? ""}`);

  const body = encodeURIComponent(buildMailtoBody(input));

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  return { ok: true, via: "mailto" };
}

export async function submitLead(input: SubmitLeadInput): Promise<SubmitLeadResult> {
  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...input,
        page: window.location.pathname,
      }),
    });

    if (response.ok) {
      return { ok: true, via: "crm" };
    }

    const data = (await response.json().catch(() => null)) as { code?: string; error?: string } | null;

    if (response.status === 503 && data?.code === "CRM_NOT_CONFIGURED") {
      return mailtoFallback(input);
    }

    return { ok: false, error: data?.error ?? "Não foi possível enviar. Tente novamente." };
  } catch {
    return mailtoFallback(input);
  }
}
