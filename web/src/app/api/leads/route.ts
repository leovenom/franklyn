import { NextResponse } from "next/server";
import { isSendStudioConfigured, submitLeadToSendStudio, type LeadType } from "@/lib/crm/send-studio";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LeadBody = {
  type?: LeadType;
  email?: string;
  name?: string;
  message?: string;
  page?: string;
  website?: string;
};

function isLeadType(value: unknown): value is LeadType {
  return value === "diagnostico" || value === "contacto";
}

export async function POST(request: Request) {
  let body: LeadBody;

  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return NextResponse.json({ error: "Pedido inválido." }, { status: 400 });
  }

  if (body.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  if (!isLeadType(body.type)) {
    return NextResponse.json({ error: "Tipo de formulário inválido." }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
  }

  if (body.type === "contacto") {
    if (!body.name?.trim()) {
      return NextResponse.json({ error: "Nome obrigatório." }, { status: 400 });
    }
    if (!body.message?.trim()) {
      return NextResponse.json({ error: "Mensagem obrigatória." }, { status: 400 });
    }
  }

  if (!isSendStudioConfigured()) {
    return NextResponse.json({ error: "CRM não configurado.", code: "CRM_NOT_CONFIGURED" }, { status: 503 });
  }

  try {
    const result = await submitLeadToSendStudio({
      type: body.type,
      email,
      name: body.name?.trim(),
      message: body.message?.trim(),
      page: body.page?.trim(),
    });

    return NextResponse.json({ ok: true, personId: result.personId ?? null });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro desconhecido";
    console.error("[api/leads] Send Studio error:", message);
    return NextResponse.json({ error: "Não foi possível enviar. Tente novamente." }, { status: 502 });
  }
}
