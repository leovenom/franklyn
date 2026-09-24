"use client";

import { m } from "framer-motion";
import { popIn, stagger } from "@/lib/motion";
import { Badge } from "./ui/Badge";
import { Card } from "./ui/Card";

const TECH_FLOW = [
  { label: "Visitante", sub: "franklyn.pt", badge: "bg-franklyn-tertiary text-franklyn-ink" },
  { label: "LeadForm", sub: "React · validação e-mail", badge: "bg-franklyn-accent text-white" },
  { label: "/api/leads", sub: "Franklyn server · token seguro", badge: "bg-franklyn-accent text-white ring-2 ring-franklyn-ink" },
  { label: "Send Studio", sub: "POST /api/contacts", badge: "bg-sky-500 text-white" },
  { label: "Contacts", sub: "Turso · UI CRM", badge: "bg-franklyn-quaternary text-franklyn-ink" },
  { label: "Leonardt", sub: "leonardt@outlook.com", badge: "bg-franklyn-secondary text-white" },
] as const;

const LIFECYCLE = [
  { num: "1", title: "Captura", desc: "E-mail no hero ou /contact", timing: "Instantâneo" },
  { num: "2", title: "API Franklyn", desc: "Validação server-side → CRM", timing: "< 1 s" },
  { num: "3", title: "Send Studio", desc: "Contacto tagueado franklyn-web", timing: "< 2 s" },
  { num: "4", title: "Confirmação", desc: "«Recebemos o seu pedido»", timing: "Imediato" },
  { num: "5", title: "Resposta", desc: "E-mail para marcar chamada", timing: "≤ 2 dias úteis" },
  { num: "6", title: "Diagnóstico", desc: "Videochamada 45 min · score 0–70", timing: "45 min" },
  { num: "7", title: "Veredicto", desc: "Franquiciar · Ajustar · Aguardar", timing: "Na hora ou D+1" },
  { num: "8", title: "Entrega", desc: "Doc → Captação → Rede", timing: "6–10 semanas" },
] as const;

const VERDICTS = [
  { range: "≥ 49/70", title: "Franquiciar", desc: "Dossier APF e primeiros candidatos", header: "feature-header-violet" },
  { range: "35–48", title: "Ajustar", desc: "SOPs, piloto ou margem primeiro", header: "feature-header-amber" },
  { range: "< 35", title: "Aguardar", desc: "Licenciamento ou pivot", header: "feature-header-pink" },
] as const;

const LINKEDIN_COPY = `De visitante a lead qualificado — site Franklyn ligado ao CRM Send Studio.

Stack: Next.js → /api/leads → Send Studio (Resend + Turso) → diagnóstico 45 min + score 0–70.

O visitante deixa o e-mail no hero. Em segundos entra no CRM com tags e origem. Depois é conversa humana, veredicto honesto, e só então dossier APF.

#franchising #nextjs #product #portugal #crm`;

function FlowArrow({ dashed = false }: { dashed?: boolean }) {
  return (
    <div className="flex flex-col items-center py-1" aria-hidden>
      <div className={`h-6 w-0.5 ${dashed ? "border-l-2 border-dashed border-franklyn-subtle bg-transparent" : "bg-franklyn-ink"}`} />
      <span className="text-franklyn-ink">↓</span>
    </div>
  );
}

export function LifecycleDiagram() {
  return (
    <div className="relative overflow-hidden pb-20 pt-10 md:pb-28 md:pt-14">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <div className="page-shell relative">
        <div className="mx-auto max-w-prose text-center">
          <Badge dot variant="accent">
            Franklyn × Send Studio
          </Badge>
          <h1 className="font-display mt-5 text-balance text-[clamp(1.75rem,4vw,3rem)] leading-[1.1] text-franklyn-ink">
            Lifecycle do lead
          </h1>
          <p className="mt-4 text-lg text-franklyn-muted">
            Do e-mail no site ao diagnóstico · organograma para LinkedIn
          </p>
        </div>

        <m.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid gap-4 sm:grid-cols-3"
        >
          {[
            { value: "< 3 s", label: "Até ao CRM" },
            { value: "2 dias", label: "Resposta humana" },
            { value: "45 min", label: "Diagnóstico" },
          ].map((stat, i) => (
            <m.div key={stat.label} variants={popIn} custom={i} className="sticker-card p-5 text-center">
              <p className="font-display text-3xl text-franklyn-accent">{stat.value}</p>
              <p className="mt-1 text-sm text-franklyn-muted">{stat.label}</p>
            </m.div>
          ))}
        </m.div>

        <m.section
          variants={popIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="sticker-card-featured relative mt-12 overflow-hidden p-6 md:p-10"
        >
          <p className="label-caps text-franklyn-muted">Organograma técnico</p>
          <h2 className="font-display mt-2 text-xl text-franklyn-ink md:text-2xl">Fluxo de dados</h2>

          <div className="mx-auto mt-8 flex max-w-xs flex-col items-center">
            {TECH_FLOW.map((node, i) => (
              <div key={node.label} className="flex w-full flex-col items-center">
                <div className="sticker-card w-full p-4 text-center">
                  <span
                    className={`inline-flex rounded-pill border-2 border-franklyn-ink px-3 py-1 font-display text-xs font-bold shadow-[2px_2px_0px_0px_#1E293B] ${node.badge}`}
                  >
                    {node.label}
                  </span>
                  <p className="mt-2 text-caption text-franklyn-muted">{node.sub}</p>
                </div>
                {i < TECH_FLOW.length - 1 && <FlowArrow />}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
            <div className="chip text-franklyn-muted">Fallback tracejado</div>
            <span className="hidden text-franklyn-subtle sm:inline">→</span>
            <div className="chip">mailto → leonardt@outlook.com</div>
            <span className="hidden text-franklyn-subtle sm:inline">(se CRM off)</span>
          </div>
        </m.section>

        <m.section
          variants={popIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12"
        >
          <p className="label-caps text-center text-franklyn-muted">Lifecycle do utilizador</p>
          <h2 className="font-display mt-2 text-center text-xl text-franklyn-ink md:text-2xl">8 fases</h2>

          <m.ol
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {LIFECYCLE.map((step, i) => (
              <m.li key={step.num} variants={popIn} custom={i}>
                <div className="sticker-card-hover relative h-full p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-franklyn-ink bg-franklyn-accent font-display text-xs font-bold text-white shadow-pop">
                    {step.num}
                  </span>
                  <h3 className="mt-3 font-display font-bold text-franklyn-ink">{step.title}</h3>
                  <p className="mt-1 text-sm text-franklyn-muted">{step.desc}</p>
                  <p className="chip mt-3 w-fit text-[10px]">{step.timing}</p>
                </div>
              </m.li>
            ))}
          </m.ol>
        </m.section>

        <m.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-4 md:grid-cols-3"
        >
          {VERDICTS.map((v, i) => (
            <m.div key={v.range} variants={popIn} custom={i}>
              <Card padding="md" className="h-full overflow-hidden p-0">
                <div className={v.header}>
                  {v.range} · {v.title}
                </div>
                <p className="p-5 text-sm leading-relaxed text-franklyn-muted">{v.desc}</p>
              </Card>
            </m.div>
          ))}
        </m.div>

        <m.section
          variants={popIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="sticker-card mt-12 p-6 md:p-8"
        >
          <p className="label-caps text-franklyn-muted">Copy LinkedIn</p>
          <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-franklyn-muted">{LINKEDIN_COPY}</p>
        </m.section>

        <p className="mt-8 text-center text-caption text-franklyn-subtle">
          Screenshot esta página para o post · franklyn.pt/lifecycle
        </p>
      </div>
    </div>
  );
}
