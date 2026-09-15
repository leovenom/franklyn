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
          <p className="text-xs font-semibold uppercase tracking-widest text-franklyn-accent">
            Brand kit · processo Franklyn
          </p>
          <h2 className="mt-2 font-serif text-2xl font-normal italic tracking-tight md:text-3xl">
            Moodboard & identidade — {kit.name}
          </h2>
        </div>
        <div className="flex flex-wrap gap-1">
          {STEPS.map((step, i) => (
            <span
              key={step}
              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                i === 4
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-franklyn-bg text-franklyn-muted"
              }`}
            >
              {i + 1}. {step}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-12">
        {/* Mood + sensory — large bento cell */}
        <div className="rounded-2xl border border-franklyn-border bg-white p-6 lg:col-span-5 lg:row-span-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-franklyn-muted">Mood capture</p>
          <p className="mt-3 text-sm leading-relaxed text-franklyn-muted">{kit.mood}</p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-franklyn-muted">
            Sensory translation
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {kit.sensory.map((word) => (
              <span
                key={word}
                className="rounded-full border border-franklyn-border bg-franklyn-bg px-3 py-1 text-xs font-medium"
              >
                {word}
              </span>
            ))}
          </div>
          <ul className="mt-6 space-y-2 border-t border-franklyn-border pt-4 text-xs text-franklyn-muted">
            {kit.moodboardNotes.map((note) => (
              <li key={note} className="flex gap-2">
                <span className="text-franklyn-accent">→</span>
                {note}
              </li>
            ))}
          </ul>
        </div>

        {/* Palette swatches */}
        <div className="rounded-2xl border border-franklyn-border bg-white p-6 lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-franklyn-muted">Paleta</p>
          <div className="mt-4 grid grid-cols-5 gap-2">
            {kit.palette.map((c) => (
              <div key={c.hex} className="text-center">
                <div
                  className="aspect-square w-full rounded-lg border border-black/5 shadow-sm"
                  style={{ backgroundColor: c.hex }}
                />
                <p className="mt-1.5 text-[10px] font-medium leading-tight">{c.name}</p>
                <p className="font-mono text-[9px] text-franklyn-muted">{c.hex}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="rounded-2xl border border-franklyn-border bg-white p-6 lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-franklyn-muted">Tipografia</p>
          <ul className="mt-4 space-y-4">
            {kit.typography.map((t) => (
              <li key={t.role}>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-franklyn-muted">{t.role}</p>
                <p className="mt-1 text-sm font-medium">{t.sample}</p>
                <p className="text-xs text-franklyn-muted">{t.font}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Concept sketching — mock cards bento */}
        <div className="rounded-2xl border border-franklyn-border bg-franklyn-bg p-6 lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-widest text-franklyn-muted">
            Concept sketching · aplicações
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {kit.applications.map((app, i) => (
              <div
                key={app.label}
                className="group rounded-xl border border-franklyn-border bg-white p-4 transition hover:border-franklyn-accent hover:shadow-md"
              >
                <div
                  className="mb-3 flex h-16 items-center justify-center rounded-lg text-xs font-semibold text-white"
                  style={{ backgroundColor: kit.palette[i % kit.palette.length]?.hex ?? "#1a1a1a" }}
                >
                  {app.label}
                </div>
                <p className="text-sm font-medium">{app.label}</p>
                <p className="mt-1 text-xs text-franklyn-muted">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Refinement deliverable */}
        <div className="rounded-2xl border-2 border-franklyn-accent bg-white p-6 lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-franklyn-accent">
            Refinement + feedback · entrega final
          </p>
          <p className="mt-3 font-serif text-xl italic">{kit.tagline}</p>
          <ul className="mt-4 space-y-2 text-sm text-franklyn-muted">
            <li className="flex gap-2">
              <span className="text-emerald-600">✓</span> Brand kit PDF + arquivos editáveis
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-600">✓</span> Manual de uso da marca (rede)
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-600">✓</span> Templates captação + unidade piloto
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-600">✓</span> Aprovado pós-rodada com fundador
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
