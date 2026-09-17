import type { BrandKit } from "./types";

export const graoBrandKit: BrandKit = {
  name: "Grão & Cia",
  tagline: "Café especializado, calor artesanal, escala compacta",
  mood:
    "Premium acessível. Torrefação artesanal, luz da manhã e bairro que reconhece a marca, sem parecer corporativo frio.",
  sensory: ["Aroma", "Calor", "Ritual", "Vizinhança", "Origem"],
  palette: [
    { name: "Espresso", hex: "#292524" },
    { name: "Amber roast", hex: "#B45309" },
    { name: "Cream foam", hex: "#FAF7F2" },
    { name: "Olive accent", hex: "#4D7C0F" },
    { name: "Copper warm", hex: "#C2410C" },
  ],
  typography: [
    { role: "Display", font: "Instrument Serif: italic", sample: "Grão & Cia" },
    { role: "Body", font: "DM Sans: regular", sample: "Blend exclusivo, torra central." },
    { role: "Label", font: "DM Sans: caps tracking", sample: "COMPACTA · 45m²" },
  ],
  applications: [
    { label: "Fachada Compacta", desc: "Letreiro serif + vitrine warm" },
    { label: "Copo take-away", desc: "Pattern grão + logo mínimo" },
    { label: "Cardápio bar", desc: "Hierarquia drinks + origem" },
    { label: "Landing franquia", desc: "Editorial cream + investimento" },
  ],
  moodboardNotes: [
    "Referências: % Arabica neighborhood, local roasters PT/BR",
    "Evitar: Starbucks clone, preto total sem calor",
    "Ambiente: madeira clara, ilha bar central, aroma visível",
  ],
};
