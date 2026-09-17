import type { BrandKit } from "./types";

export const codekidsBrandKit: BrandKit = {
  name: "CodeKids",
  tagline: "Criar com código, confiança para pais, diversão para crianças",
  mood:
    "Tech-forward e acolhedor. Sala de aula luminosa e colaborativa, com futuro que parece alcançável e nunca intimidador.",
  sensory: ["Curiosidade", "Segurança", "Jogo", "Descoberta", "Comunidade"],
  palette: [
    { name: "Indigo core", hex: "#4F46E5" },
    { name: "Sky glow", hex: "#38BDF8" },
    { name: "Mint success", hex: "#34D399" },
    { name: "Ink dark", hex: "#0F172A" },
    { name: "Cloud white", hex: "#F8FAFC" },
  ],
  typography: [
    { role: "Display", font: "Rounded sans: bold", sample: "CodeKids" },
    { role: "Body", font: "DM Sans: regular", sample: "Aprender programação brincando." },
    { role: "Code", font: "JetBrains Mono", sample: "print('Olá, mundo!')" },
  ],
  applications: [
    { label: "Logo lockup", desc: "Ícone + wordmark horizontal e stacked" },
    { label: "Uniforme instrutor", desc: "Camiseta indigo + badge turma" },
    { label: "Material sala", desc: "Posters trilha Scratch → Python → Web" },
    { label: "Landing franquia", desc: "Hero split + CTA captação" },
  ],
  moodboardNotes: [
    "Referências: classrooms STEM, Notion kids, Duolingo trust",
    "Evitar: neon agressivo, estética gaming adulto",
    "Ambiente: mesas modulares, luz natural, telas laterais",
  ],
};
