export type BrandKit = {
  name: string;
  tagline: string;
  mood: string;
  sensory: string[];
  palette: { name: string; hex: string }[];
  typography: { role: string; font: string; sample: string }[];
  applications: { label: string; desc: string }[];
  moodboardNotes: string[];
};
