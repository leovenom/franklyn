import type { FormCopy } from "@/lib/copy/form";

export type ValidationMessages = FormCopy["validation"];

export type LeadProfile = {
  name: string;
  email: string;
  phone: string;
  role: string;
  businessName: string;
  companyTaxId: string;
  sector: string;
  units: string;
  operationsYears: string;
  revenueBand: string;
  region: string;
  goal: string;
  horizon: string;
  hasFranchisees: string;
  message?: string;
  consentContact: boolean;
  consentRepresent: boolean;
};

export type LeadProfileInput = Partial<LeadProfile> & {
  email: string;
  name?: string;
};

export function normalizeNif(value: string): string {
  return value.replace(/\s/g, "");
}

export function isValidPortugueseNif(value: string): boolean {
  const nif = normalizeNif(value);
  if (!/^\d{9}$/.test(nif)) return false;

  const digits = nif.split("").map(Number);
  const checkDigit = digits[8];
  let sum = 0;

  for (let i = 0; i < 8; i++) {
    sum += digits[i] * (9 - i);
  }

  const remainder = sum % 11;
  const expected = remainder < 2 ? 0 : 11 - remainder;
  return checkDigit === expected;
}

export function formatLeadNotes(profile: LeadProfile, type: string, page?: string): string {
  const lines = [
    `Franklyn · ${type} · ${page ?? "/"}`,
    "",
    "— Contacto —",
    `Nome: ${profile.name}`,
    `Cargo: ${profile.role}`,
    `E-mail: ${profile.email}`,
    `Telefone: ${profile.phone}`,
    "",
    "— Negócio —",
    `Marca: ${profile.businessName}`,
    `NIF: ${normalizeNif(profile.companyTaxId)}`,
    `Setor: ${profile.sector}`,
    `Unidades: ${profile.units}`,
    `Operação: ${profile.operationsYears}`,
    `Faturação: ${profile.revenueBand}`,
    `Região: ${profile.region}`,
    "",
    "— Ambição —",
    `Objetivo: ${profile.goal}`,
    `Horizonte: ${profile.horizon}`,
    `Franchisees ativos: ${profile.hasFranchisees}`,
  ];

  if (profile.message?.trim()) {
    lines.push("", "— Notas —", profile.message.trim());
  }

  return lines.join("\n");
}

export function buildCompanyLabel(profile: LeadProfile): string {
  return [profile.businessName, profile.sector, profile.units].filter(Boolean).join(" · ");
}

export function validateQuickLead(input: LeadProfileInput, messages: ValidationMessages): string | null {
  if (!input.name?.trim()) return messages.nameRequired;
  if (!input.email?.trim()) return messages.emailRequired;
  if (!input.consentContact) return messages.consentContactRequired;
  return null;
}

export function validateFullLead(profile: LeadProfile, messages: ValidationMessages): string | null {
  if (!profile.name.trim()) return messages.nameRequired;
  if (!profile.email.trim()) return messages.emailRequired;
  if (!profile.phone.trim()) return messages.phoneRequired;
  if (!profile.role.trim()) return messages.roleRequired;
  if (!profile.businessName.trim()) return messages.businessNameRequired;
  if (!profile.companyTaxId.trim()) return messages.companyTaxIdRequired;
  if (!isValidPortugueseNif(profile.companyTaxId)) return messages.companyTaxIdInvalid;
  if (!profile.sector.trim()) return messages.sectorRequired;
  if (!profile.units.trim()) return messages.unitsRequired;
  if (!profile.operationsYears.trim()) return messages.operationsYearsRequired;
  if (!profile.revenueBand.trim()) return messages.revenueRequired;
  if (!profile.region.trim()) return messages.regionRequired;
  if (!profile.goal.trim()) return messages.goalRequired;
  if (!profile.horizon.trim()) return messages.horizonRequired;
  if (!profile.hasFranchisees.trim()) return messages.franchiseesRequired;
  if (!profile.consentContact) return messages.consentContactRequired;
  if (!profile.consentRepresent) return messages.consentRepresentRequired;
  return null;
}
