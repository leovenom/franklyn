const DEFAULT_API_URL = "https://send-studio-prod.vercel.app";

export type LeadType = "diagnostico" | "contacto";

export type SubmitLeadInput = {
  type: LeadType;
  email: string;
  name?: string;
  message?: string;
  page?: string;
};

type SendStudioContact = {
  id: string;
  email: string;
  name: string;
  company: string | null;
  locale: string;
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

function deriveName(email: string, name?: string): string {
  const trimmed = name?.trim();
  if (trimmed) return trimmed;

  const local = email.split("@")[0]?.replace(/[._-]+/g, " ").trim();
  return local || "Lead Franklyn";
}

function buildCompany(input: SubmitLeadInput): string {
  const parts = [`Franklyn · ${input.type}`, input.page || "/"];
  if (input.message?.trim()) {
    parts.push(input.message.trim().slice(0, 160));
  }
  return parts.join(" · ");
}

async function studioRequest<T>(path: string, init: RequestInit = {}): Promise<{ ok: boolean; status: number; data: T }> {
  const response = await fetch(`${getApiUrl()}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
      ...init.headers,
    },
  });

  const text = await response.text().catch(() => "");
  let data = {} as T;
  if (text) {
    try {
      data = JSON.parse(text) as T;
    } catch {
      data = {} as T;
    }
  }

  return { ok: response.ok, status: response.status, data };
}

async function listContacts(): Promise<SendStudioContact[]> {
  const { ok, status, data } = await studioRequest<SendStudioContact[]>("/api/contacts");
  if (!ok) {
    throw new Error(`SEND_STUDIO_HTTP_${status}`);
  }
  return Array.isArray(data) ? data : [];
}

async function createContact(payload: {
  email: string;
  name: string;
  company: string;
  locale: "pt-BR";
}): Promise<SendStudioContact> {
  const { ok, status, data } = await studioRequest<SendStudioContact>("/api/contacts", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (!ok) {
    throw new Error(`SEND_STUDIO_HTTP_${status}`);
  }

  return data;
}

async function updateContact(
  id: string,
  payload: { name: string; company: string; locale: "pt-BR" },
): Promise<SendStudioContact> {
  const { ok, status, data } = await studioRequest<SendStudioContact>(`/api/contacts/${id}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });

  if (!ok) {
    throw new Error(`SEND_STUDIO_HTTP_${status}`);
  }

  return data;
}

async function upsertContact(payload: {
  email: string;
  name: string;
  company: string;
  locale: "pt-BR";
}): Promise<SendStudioContact> {
  try {
    return await createContact(payload);
  } catch {
    const existing = (await listContacts()).find((c) => c.email.toLowerCase() === payload.email.toLowerCase());
    if (!existing) {
      throw new Error("SEND_STUDIO_UPSERT_FAILED");
    }
    return updateContact(existing.id, payload);
  }
}

export async function submitLeadToSendStudio(input: SubmitLeadInput): Promise<{ personId?: string }> {
  const contact = await upsertContact({
    email: input.email.trim().toLowerCase(),
    name: deriveName(input.email, input.name),
    company: buildCompany(input),
    locale: "pt-BR",
  });

  return { personId: contact.id };
}
