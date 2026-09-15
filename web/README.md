# Franklyn Web

Next.js 15 · React 19 · Tailwind · Framer Motion (LazyMotion)

## Setup

```bash
cd web
cp .env.example .env.local
npm install
npm run dev
```

## Rotas principais

| Rota | Descrição |
|------|-----------|
| `/` | Home BR (conversão) |
| `/pt` | Home Portugal (pt-PT) |
| `/pt/contact` | Contacto PT |
| `/cases` | Portfolio scores |
| `/cases/codekids` | Case flagship + `/franquia` |
| `/cases/grao-e-cia` | Case food + `/franquia` |
| `/cases/ecoshine` | Ajustar antes |
| `/cases/dermapure` | Pessoa-chave |
| `/cases/pulse-box` | Não franquear |
| `/guia/leis-franquia` | Lei 13.966 + PT |
| `/guia/modelo-escala` | 4 ondas |
| `/contact` · `/about` · `/proposta` | Institucional |

## SEO

- Copy BR/PT em `src/lib/copy/`
- hreflang `/` ↔ `/pt`
- FAQ schema na home
- `/sitemap.xml` · `/robots.txt` · `/llms.txt`

## Deploy

[DEPLOY.md](./DEPLOY.md) · [GO-LIVE.md](../GO-LIVE.md)

```bash
npm run build
npx vercel --prod
```
