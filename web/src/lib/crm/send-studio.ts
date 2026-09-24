import {
  buildCompanyLabel,
  formatLeadNotes,
  type LeadProfile,
} from "@/lib/lead-profile";

const DEFAULT_API_URL = "https://send-studio-prod.vercel.app";

export type LeadType = "diagnostico" | "contacto";

export type SubmitLeadInput = {
  type: LeadType;
  email: string;
  name?: string;
  message?: string;
  page?: string;
  profile?: LeadProfile;
};

type SendStudioContact = {
  id: string;
  email: string;
  name: string;
  company: string | null;
  locale: string;
  phone?: string | null;
};

export function isSendStudioConfigured(): boolean {
  return Boolean(process.env.SEND_STUDIO_API_TOKEN?.trim());
}

function getApiUrl(): string {
  return (process.env.SEND_STUDIO_API_URL?.trim() || DEFAULT_API_URL).replace(/\/$/, "");
}

function getToken(): string {
  const token = process.env.SEND_STUDIO_API_TOKEN?.trim();
  if (!token) {
    throw new Error("SEND_STUDIO_NOT_CONFIGURED");
  }
  return token;
}

function deriveName(email: string, name?: string, profile?: LeadProfile): string {
  const fromProfile = profile?.name?.trim();
  if (fromProfile) return fromProfile;

  const trimmed = name?.trim();
  if (trimmed) return trimmed;

  const local = email.split("@")[0]?.replace(/[._-]+/g, " ").trim();
  return local || "Lead Franklyn";
}

function buildCompany(input: SubmitLeadInput): string {
  if (input.profile) {
    const headline = buildCompanyLabel(input.profile);
    const notes = formatLeadNotes(input.profile, input.type, input.page);
    return `${headline}\n\n${notes}`;
  }

  const parts = [`Franklyn · ${input.type}`, input.page || "/"];
  if (input.name?.trim()) {
    parts.push(`Contacto: ${input.name.trim()}`);
  }
  if (input.message?.trim()) {
    parts.push(input.message.trim().slice(0, 160));
  }
  return parts.join(" · ");
}

function buildPhone(input: SubmitLeadInput): string | undefined {
  const phone = input.profile?.phone?.trim();
  return phone || undefined;
}

export async function submitLeadToSendStudio(input: SubmitLeadInput): Promise<{ personId?: string }> {
  const payload: Record<string, string> = {
    email: input.email.trim().toLowerCase(),
    name: deriveName(input.email, input.name, input.profile),
    company: buildCompany(input),
    locale: "pt-BR",
  };

  const phone = buildPhone(input);
  if (phone) {
    payload.phone = phone;
  }

  let response: Response;
  try {
    response = await fetch(`${getApiUrl()}/api/contacts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    const detail = error instanceof Error ? error.message : "network error";
    throw new Error(`SEND_STUDIO_NETWORK: ${detail}`);
  }

  const text = await response.text().catch(() => "");
  let data: SendStudioContact | null = null;
  if (text) {
    try {
      data = JSON.parse(text) as SendStudioContact;
    } catch {
      data = null;
    }
  }

  if (!response.ok) {
    const snippet = text.slice(0, 200) || response.statusText;
    throw new Error(`SEND_STUDIO_HTTP_${response.status}: ${snippet}`);
  }

  if (!data?.id) {
    throw new Error("SEND_STUDIO_NO_CONTACT_ID");
  }

  return { personId: data.id };
}
