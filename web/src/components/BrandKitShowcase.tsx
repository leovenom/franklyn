import type { BrandKit } from "@/lib/brand-kits/types";

const STEPS = [
  "Mood capture",
  "Sensory translation",
  "Concept sketching",
  "Refinement",
  "Feedback",
];

export function BrandKitShowcase({ kit }: { kit: BrandKit }) {
  return (
    <section className="mt-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="label-caps text-franklyn-accent">Brand kit · processo Franklyn</p>
          <h2 className="font-display mt-2 text-2xl tracking-tight text-franklyn-ink md:text-3xl">
            Moodboard & identidade: {kit.name}
          </h2>
        </div>
        <div className="flex flex-wrap gap-1">
          {STEPS.map((step, i) => (
            <span
              key={step}
              className={`rounded-pill border-2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                i === 4
                  ? "border-franklyn-ink bg-franklyn-quaternary text-franklyn-ink"
                  : "chip text-franklyn-muted"
              }`}
            >
              {i + 1}. {step}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-12">
        <div className="sticker-card p-6 lg:col-span-5 lg:row-span-2">
          <p className="label-caps text-franklyn-muted">Mood capture</p>
          <p className="mt-3 text-sm leading-relaxed text-franklyn-muted">{kit.mood}</p>
          <p className="label-caps mt-5 text-franklyn-muted">Sensory translation</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {kit.sensory.map((word) => (
              <span key={word} className="chip text-xs">
                {word}
              </span>
            ))}
          </div>
          <ul className="mt-6 space-y-2 border-t-2 border-franklyn-border pt-4 text-xs text-franklyn-muted">
            {kit.moodboardNotes.map((note) => (
              <li key={note} className="flex gap-2">
                <span className="text-franklyn-accent">→</span>
                {note}
              </li>
            ))}
          </ul>
        </div>

        <div className="sticker-card p-6 lg:col-span-4">
          <p className="label-caps text-franklyn-muted">Paleta</p>
          <div className="mt-4 grid grid-cols-5 gap-2">
            {kit.palette.map((c) => (
              <div key={c.hex} className="text-center">
                <div
                  className="aspect-square w-full rounded-md border-2 border-franklyn-ink shadow-[2px_2px_0_0_#E2E8F0]"
                  style={{ backgroundColor: c.hex }}
                />
                <p className="mt-1.5 text-[10px] font-medium leading-tight text-franklyn-ink">{c.name}</p>
                <p className="text-[9px] text-franklyn-muted">{c.hex}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="sticker-card p-6 lg:col-span-3">
          <p className="label-caps text-franklyn-muted">Tipografia</p>
          <ul className="mt-4 space-y-4">
            {kit.typography.map((t) => (
              <li key={t.role}>
                <p className="text-[10px] font-bold uppercase tracking-wide text-franklyn-muted">{t.role}</p>
                <p className="mt-1 text-sm font-medium text-franklyn-ink">{t.sample}</p>
                <p className="text-xs text-franklyn-muted">{t.font}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="sticker-card bg-franklyn-surface p-6 lg:col-span-7">
          <p className="label-caps text-franklyn-muted">Concept sketching · aplicações</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {kit.applications.map((app, i) => (
              <div key={app.label} className="sticker-card-hover p-4">
                <div
                  className="mb-3 flex h-16 items-center justify-center rounded-md border-2 border-franklyn-ink text-xs font-bold text-white shadow-pop"
                  style={{ backgroundColor: kit.palette[i % kit.palette.length]?.hex ?? "#1a1a1a" }}
                >
                  {app.label}
                </div>
                <p className="text-sm font-medium text-franklyn-ink">{app.label}</p>
                <p className="mt-1 text-xs text-franklyn-muted">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="sticker-card-featured p-6 lg:col-span-5">
          <p className="label-caps text-franklyn-accent">Refinement + feedback · entrega final</p>
          <p className="font-display mt-3 text-xl text-franklyn-ink">{kit.tagline}</p>
          <ul className="mt-4 space-y-2 text-sm text-franklyn-muted">
            {[
              "Brand kit PDF + arquivos editáveis",
              "Manual de uso da marca (rede)",
              "Templates captação + unidade piloto",
              "Aprovado pós-rodada com fundador",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-franklyn-quaternary text-xs font-bold text-franklyn-ink">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
