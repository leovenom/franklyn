import Link from "next/link";
import type { BrandKit } from "@/lib/brand-kits/types";

type BrandKitLandingSectionProps = {
  kit: BrandKit;
  casePath: string;
  accentClass?: string;
  mutedClass?: string;
  borderClass?: string;
};

export function BrandKitLandingSection({
  kit,
  casePath,
  accentClass = "text-indigo-600",
  mutedClass = "text-slate-600",
  borderClass = "border-indigo-100",
}: BrandKitLandingSectionProps) {
  const primary = kit.palette[0]?.hex ?? "#4F46E5";
  const secondary = kit.palette[1]?.hex ?? "#38BDF8";

  return (
    <section id="marca" className={`border-t ${borderClass} px-6 py-20`}>
      <div className="mx-auto max-w-5xl">
        <p className={`text-center text-xs font-semibold uppercase tracking-widest ${accentClass}`}>
          Identidade de rede
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold">A marca que você replica</h2>
        <p className={`mx-auto mt-4 max-w-2xl text-center text-sm ${mutedClass}`}>{kit.mood}</p>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className={`rounded-2xl border ${borderClass} bg-white p-6 lg:col-span-4`}>
            <p className="text-xs font-semibold uppercase tracking-widest opacity-60">Paleta aprovada</p>
            <div className="mt-4 flex gap-2">
              {kit.palette.map((c) => (
                <div key={c.hex} className="flex-1 text-center">
                  <div
                    className="aspect-square rounded-lg border border-black/5 shadow-sm"
                    style={{ backgroundColor: c.hex }}
                  />
                  <p className="mt-1 font-mono text-[9px] opacity-50">{c.hex}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`rounded-2xl border ${borderClass} bg-white p-6 lg:col-span-4`}>
            <p className="text-xs font-semibold uppercase tracking-widest opacity-60">Sensory translation</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {kit.sensory.map((word) => (
                <span
                  key={word}
                  className="rounded-full px-3 py-1 text-xs font-medium"
                  style={{ backgroundColor: `${primary}15`, color: primary }}
                >
                  {word}
                </span>
              ))}
            </div>
            <p className="mt-5 font-serif text-lg italic leading-snug">{kit.tagline}</p>
          </div>

          <div className={`rounded-2xl border ${borderClass} bg-white p-6 lg:col-span-4`}>
            <p className="text-xs font-semibold uppercase tracking-widest opacity-60">Tipografia</p>
            <ul className="mt-4 space-y-3">
              {kit.typography.map((t) => (
                <li key={t.role}>
                  <p className="text-[10px] font-semibold uppercase opacity-50">{t.role}</p>
                  <p className="text-sm font-medium">{t.sample}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className={`rounded-2xl border ${borderClass} p-6 lg:col-span-8`} style={{ backgroundColor: `${primary}08` }}>
            <p className="text-xs font-semibold uppercase tracking-widest opacity-60">
              Concept sketching · materiais incluídos
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {kit.applications.map((app) => (
                <div key={app.label} className={`rounded-xl border ${borderClass} bg-white p-4`}>
                  <div
                    className="mb-3 flex h-12 items-center justify-center rounded-lg text-xs font-bold text-white"
                    style={{ background: `linear-gradient(135deg, ${primary}, ${secondary})` }}
                  >
                    {app.label}
                  </div>
                  <p className="text-sm font-medium">{app.label}</p>
                  <p className={`mt-1 text-xs ${mutedClass}`}>{app.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="flex flex-col justify-center rounded-2xl p-6 text-white lg:col-span-4"
            style={{ backgroundColor: primary }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
              Refinement + feedback
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/90">
              <li>✓ Brand kit PDF + arquivos editáveis</li>
              <li>✓ Manual de uso da marca</li>
              <li>✓ Templates captação e unidade</li>
              <li>✓ Aprovado com fundador</li>
            </ul>
            <Link
              href={casePath}
              className="mt-6 inline-block text-sm font-semibold text-white underline underline-offset-4 hover:text-white/80"
            >
              Ver moodboard completo →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
