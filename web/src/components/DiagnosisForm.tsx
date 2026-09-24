"use client";

import { FormEvent, useState } from "react";
import { useFormCopy, useLocale } from "@/components/LocaleProvider";
import { type LeadProfile, validateFullLead } from "@/lib/lead-profile";
import { submitLead } from "@/lib/submit-lead";
import { Button } from "./ui/Button";
import { ConsentField, PrivacyLink } from "./ui/ConsentField";
import { Input } from "./ui/Input";
import { Select } from "./ui/Select";

const emptyProfile = (): LeadProfile => ({
  name: "",
  email: "",
  phone: "",
  role: "",
  businessName: "",
  companyTaxId: "",
  sector: "",
  units: "",
  operationsYears: "",
  revenueBand: "",
  region: "",
  goal: "",
  horizon: "",
  hasFranchisees: "",
  message: "",
  consentContact: false,
  consentRepresent: false,
});

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="ds-label">
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display text-base font-bold text-franklyn-ink">{children}</h3>
  );
}

export function DiagnosisForm() {
  const locale = useLocale();
  const formCopy = useFormCopy();
  const [profile, setProfile] = useState<LeadProfile>(emptyProfile);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function update<K extends keyof LeadProfile>(key: K, value: LeadProfile[K]) {
    setProfile((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationError = validateFullLead(profile, formCopy.validation);
    if (validationError) {
      setStatus("error");
      setErrorMessage(validationError);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const result = await submitLead({
      type: "diagnostico",
      email: profile.email.trim(),
      name: profile.name.trim(),
      profile,
      website,
      locale,
    });

    if (result.ok) {
      setStatus("success");
      setProfile(emptyProfile());
      setWebsite("");
      return;
    }

    setStatus("error");
    setErrorMessage(result.error);
  }

  if (status === "success") {
    return (
      <p className="sticker-card mt-8 px-4 py-3 text-body font-medium text-franklyn-ink" role="status">
        {formCopy.success.full}
      </p>
    );
  }

  const { sections, fields, consent } = formCopy;

  return (
    <form
      id="formulario"
      onSubmit={handleSubmit}
      className="mt-8 space-y-10"
      aria-label="Formulário de diagnóstico para franchising"
    >
      <p className="text-sm text-franklyn-muted">{formCopy.quick.intro}</p>

      <fieldset className="space-y-5">
        <SectionTitle>{sections.contact}</SectionTitle>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="name" label={fields.name.label}>
            <Input
              id="name"
              name="name"
              required
              autoComplete="name"
              placeholder={fields.name.placeholder}
              value={profile.name}
              onChange={(e) => update("name", e.target.value)}
              disabled={status === "loading"}
            />
          </Field>
          <Field id="email" label={fields.email.label}>
            <Input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={fields.email.placeholder}
              value={profile.email}
              onChange={(e) => update("email", e.target.value)}
              disabled={status === "loading"}
            />
          </Field>
          <Field id="phone" label={fields.phone.label}>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder={fields.phone.placeholder}
              value={profile.phone}
              onChange={(e) => update("phone", e.target.value)}
              disabled={status === "loading"}
            />
          </Field>
          <Field id="role" label={fields.role.label}>
            <Select
              id="role"
              name="role"
              required
              value={profile.role}
              onChange={(e) => update("role", e.target.value)}
              disabled={status === "loading"}
            >
              <option value="">{fields.role.placeholder}</option>
              {formCopy.options.roles.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </Field>
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <SectionTitle>{sections.business}</SectionTitle>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="businessName" label={fields.businessName.label}>
            <Input
              id="businessName"
              name="businessName"
              required
              placeholder={fields.businessName.placeholder}
              value={profile.businessName}
              onChange={(e) => update("businessName", e.target.value)}
              disabled={status === "loading"}
            />
          </Field>
          <Field id="companyTaxId" label={fields.companyTaxId.label}>
            <Input
              id="companyTaxId"
              name="companyTaxId"
              required
              inputMode="numeric"
              autoComplete="off"
              placeholder={fields.companyTaxId.placeholder}
              value={profile.companyTaxId}
              onChange={(e) => update("companyTaxId", e.target.value)}
              disabled={status === "loading"}
              aria-describedby="companyTaxId-hint"
            />
            <p id="companyTaxId-hint" className="mt-1.5 text-caption text-franklyn-subtle">
              {fields.companyTaxId.hint}
            </p>
          </Field>
          <Field id="sector" label={fields.sector.label}>
            <Select
              id="sector"
              name="sector"
              required
              value={profile.sector}
              onChange={(e) => update("sector", e.target.value)}
              disabled={status === "loading"}
            >
              <option value="">{fields.sector.placeholder}</option>
              {formCopy.options.sectors.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </Field>
          <Field id="units" label={fields.units.label}>
            <Select
              id="units"
              name="units"
              required
              value={profile.units}
              onChange={(e) => update("units", e.target.value)}
              disabled={status === "loading"}
            >
              <option value="">{fields.units.placeholder}</option>
              {formCopy.options.units.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </Field>
          <Field id="operationsYears" label={fields.operationsYears.label}>
            <Select
              id="operationsYears"
              name="operationsYears"
              required
              value={profile.operationsYears}
              onChange={(e) => update("operationsYears", e.target.value)}
              disabled={status === "loading"}
            >
              <option value="">{fields.operationsYears.placeholder}</option>
              {formCopy.options.years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </Field>
          <Field id="revenueBand" label={fields.revenueBand.label}>
            <Select
              id="revenueBand"
              name="revenueBand"
              required
              value={profile.revenueBand}
              onChange={(e) => update("revenueBand", e.target.value)}
              disabled={status === "loading"}
            >
              <option value="">{fields.revenueBand.placeholder}</option>
              {formCopy.options.revenue.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </Field>
          <Field id="region" label={fields.region.label}>
            <Select
              id="region"
              name="region"
              required
              value={profile.region}
              onChange={(e) => update("region", e.target.value)}
              disabled={status === "loading"}
            >
              <option value="">{fields.region.placeholder}</option>
              {formCopy.options.regions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </Field>
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <SectionTitle>{sections.ambition}</SectionTitle>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="goal" label={fields.goal.label}>
            <Select
              id="goal"
              name="goal"
              required
              value={profile.goal}
              onChange={(e) => update("goal", e.target.value)}
              disabled={status === "loading"}
            >
              <option value="">{fields.goal.placeholder}</option>
              {formCopy.options.goals.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </Field>
          <Field id="horizon" label={fields.horizon.label}>
            <Select
              id="horizon"
              name="horizon"
              required
              value={profile.horizon}
              onChange={(e) => update("horizon", e.target.value)}
              disabled={status === "loading"}
            >
              <option value="">{fields.horizon.placeholder}</option>
              {formCopy.options.horizons.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </Field>
          <Field id="hasFranchisees" label={fields.hasFranchisees.label}>
            <Select
              id="hasFranchisees"
              name="hasFranchisees"
              required
              value={profile.hasFranchisees}
              onChange={(e) => update("hasFranchisees", e.target.value)}
              disabled={status === "loading"}
            >
              <option value="">{fields.hasFranchisees.placeholder}</option>
              {formCopy.options.franchisees.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </Field>
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <SectionTitle>{sections.notes}</SectionTitle>
        <Field id="message" label={fields.message.label}>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder={fields.message.placeholder}
            value={profile.message}
            onChange={(e) => update("message", e.target.value)}
            disabled={status === "loading"}
            className="ds-input resize-y"
          />
        </Field>
      </fieldset>

      <fieldset className="sticker-card space-y-4 p-5">
        <SectionTitle>{sections.legal}</SectionTitle>
        <ConsentField
          id="consentContact"
          checked={profile.consentContact}
          onChange={(checked) => update("consentContact", checked)}
          disabled={status === "loading"}
        >
          {consent.contact} <PrivacyLink />.
        </ConsentField>
        <ConsentField
          id="consentRepresent"
          checked={profile.consentRepresent}
          onChange={(checked) => update("consentRepresent", checked)}
          disabled={status === "loading"}
        >
          {consent.represent}
        </ConsentField>
      </fieldset>

      <div className="sticker-card space-y-3 p-5">
        <p className="font-display text-sm font-bold text-franklyn-ink">{formCopy.why.title}</p>
        <p className="text-caption text-franklyn-muted">{formCopy.why.marketing}</p>
        <p className="text-caption text-franklyn-muted">{formCopy.why.legal}</p>
      </div>

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

      {status === "error" && errorMessage && (
        <p className="text-caption text-red-600" role="alert">
          {errorMessage}
        </p>
      )}

      <Button type="submit" showArrow disabled={status === "loading"}>
        {status === "loading" ? formCopy.submit.loading : formCopy.submit.full}
      </Button>
    </form>
  );
}
