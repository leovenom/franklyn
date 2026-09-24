import type { Locale } from "@/lib/locale";

export type TermsCopy = {
  meta: { title: string; description: string };
  title: string;
  updated: string;
  breadcrumb: string;
  privacyLink: string;
};

export function getTermsCopy(locale: Locale): TermsCopy {
  if (locale === "en") {
    return {
      meta: {
        title: "Terms of Use",
        description:
          "Terms of use for the Franklyn website: access conditions, intellectual property and liability limits (Portugal / EU).",
      },
      title: "Terms of Use",
      updated: "Last updated: 22 September 2026",
      breadcrumb: "Terms",
      privacyLink: "Privacy Policy",
    };
  }

  return {
    meta: {
      title: "Termos de Utilização",
      description:
        "Termos de utilização do site Franklyn: condições de acesso, propriedade intelectual e limitação de responsabilidade (Portugal / UE).",
    },
    title: "Termos de Utilização",
    updated: "Última atualização: 22 de setembro de 2026",
    breadcrumb: "Termos",
    privacyLink: "Política de Privacidade",
  };
}
