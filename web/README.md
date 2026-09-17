# Franklyn Web

Site de conversão (SaaS-style) para consultoria de franchising em **Portugal**.  
Next.js 15 · React 19 · Tailwind · Framer Motion (LazyMotion)

**Deploy:** [franklyn-web-eight.vercel.app](https://franklyn-web-eight.vercel.app) · domínio alvo `franklyn.pt`

---

## Overview

| | |
|---|---|
| **Mercado** | Portugal only · pt-PT · valores em € |
| **Objetivo** | Captura de leads — diagnóstico gratuito de franqueabilidade |
| **Home** | Landing page SaaS: hero + email inline, preview score, pricing, FAQ |
| **Design system** | Playful Geometric — Outfit + Plus Jakarta Sans, hard shadows, sticker cards, `src/components/ui/` |
| **Copy** | `src/lib/copy/pt.ts` — única fonte de texto (tom directo, pt-PT) |
| **SEO** | Sitemap, robots, JSON-LD, canonical, `/llms.txt` |

### Fluxo de conversão

1. Visitante chega à `/` → vê proposta de valor + formulário de email no hero
2. Nav e pricing repetem CTA → `#contato`
3. CTA final → `LeadForm` → `/api/leads` → **Send Studio CRM** (API própria)

### Redirects legados

`/br`, `/br/*`, `/pt`, `/pt/*` → rotas equivalentes na raiz (301).

---

## Setup

```bash
cd web
cp .env.example .env.local
npm install
npm run dev
```

Abrir [http://localhost:3000/](http://localhost:3000/)

---

## Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Home — LP captura de leads |
| `/contact` | Contacto + formulário |
| `/about` | Sobre a Franklyn PT |
| `/cases` | Portefólio scores 0–70 |
| `/cases/codekids` | Case flagship + [`/franquia`](./src/app/cases/codekids/franquia/) |
| `/cases/grao-e-cia` | Café + [`/franquia`](./src/app/cases/grao-e-cia/franquia/) |
| `/cases/ecoshine` | Pivot (48/70) |
| `/cases/dermapure` | Pessoa-chave (44/70) |
| `/cases/pulse-box` | Não franquiciar (38/70) |
| `/guia/leis-franquia` | Legislação APF |
| `/guia/modelo-escala` | Modelo 4 ondas |
| `/proposta` | Proposta comercial |
| `/privacy` · `/terms` · … | Legal |

Lista completa: `ALL_ROUTES` em `src/lib/site.ts`.

---

## Estrutura

```
src/
├── app/              # App Router (pages)
├── components/
│   ├── ui/           # Design system (Button, Card, LeadForm…)
│   ├── Hero.tsx      # Hero + preview diagnóstico
│   └── HomeSections.tsx
└── lib/
    ├── copy/pt.ts    # Copy Portugal
    ├── site.ts       # Config, rotas, legal nav
    └── metadata.ts   # SEO helpers
```

---

## Variáveis de ambiente

| Variável | Descrição |
|----------|-----------|
| `NEXT_PUBLIC_SITE_URL` | URL canónica (sitemap, OG, schema) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Fallback mailto se o CRM não estiver configurado |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | GSC (opcional) |
| `SEND_STUDIO_API_TOKEN` | Bearer token (= `STUDIO_ACCESS_TOKEN` no Send Studio) |
| `SEND_STUDIO_API_URL` | URL do Send Studio (default: `https://send-studio.vercel.app`) |

### Send Studio CRM

CRM próprio ([send-studio.vercel.app](https://send-studio.vercel.app), repo `leovenom/send-studio`).

1. Definir `STUDIO_ACCESS_TOKEN` no deploy Send Studio
2. Copiar o mesmo valor para `SEND_STUDIO_API_TOKEN` no Franklyn (local + Vercel)
3. Leads do hero e `/contact` → `POST /api/contacts` com origem em `company`

---

## SEO

- `/sitemap.xml` — 22 rotas, prioridades em `src/lib/sitemap-config.ts`
- `/robots.txt`
- `/llms.txt` — resumo para LLMs
- FAQ schema na home
- Guia GSC: [docs/SEO-GSC.md](./docs/SEO-GSC.md)

---

## Deploy

Ver [DEPLOY.md](./DEPLOY.md) e [GO-LIVE.md](../GO-LIVE.md).

```bash
npm run build
npx vercel --prod
```
