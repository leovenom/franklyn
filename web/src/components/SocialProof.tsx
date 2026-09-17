"use client";

import { getCopy } from "@/lib/copy";

export function SocialProof() {
  const { label, segments } = getCopy().home.socialProof;
  const row = [...segments, ...segments];

  return (
    <section className="overflow-hidden py-8" aria-label="Segmentos atendidos">
      <div className="page-shell mb-4 text-center">
        <p className="label-caps text-franklyn-subtle">{label}</p>
      </div>
      <div className="overflow-hidden border-y-2 border-franklyn-border bg-white py-3">
        <div className="marquee">
          {[0, 1].map((set) => (
            <div key={set} className="marquee-group" aria-hidden={set === 1 ? true : undefined}>
              {row.map((name, i) => (
                <span key={`${set}-${name}-${i}`} className="chip shrink-0 whitespace-nowrap">
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
