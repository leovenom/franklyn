# Deploy Franklyn Web

## Variáveis de ambiente (obrigatório em produção)

Copie `.env.example` para `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://franklyn.pt
NEXT_PUBLIC_CONTACT_EMAIL=contato@franklyn.pt
```

Alimentam canonical tags, sitemap, robots, Open Graph e schema LocalBusiness.

## Send Studio CRM (leads)

Formulários do hero e `/contact` → `POST /api/leads` → [Send Studio](https://send-studio.vercel.app) (`POST /api/contacts`).

Repo CRM: `leovenom/send-studio` (local: `~/resend-studio`).

| Variável | Onde | Descrição |
|----------|------|-----------|
| `SEND_STUDIO_API_TOKEN` | Franklyn Vercel + `.env.local` | Mesmo valor que `STUDIO_ACCESS_TOKEN` no projeto Send Studio |
| `SEND_STUDIO_API_URL` | Opcional | Default: `https://send-studio.vercel.app` |

**Activar:**

1. Send Studio (Vercel) → Environment Variables → `STUDIO_ACCESS_TOKEN` = string longa aleatória
2. Franklyn → `SEND_STUDIO_API_TOKEN` = **o mesmo valor**
3. Redeploy nos dois projetos

```bash
# Local Franklyn
echo 'SEND_STUDIO_API_TOKEN=seu-token' >> .env.local
echo 'SEND_STUDIO_API_URL=http://localhost:3001' >> .env.local  # se Send Studio local
npm run dev

# Teste Franklyn (dev a correr)
curl -s -X POST http://localhost:3000/api/leads \
  -H 'Content-Type: application/json' \
  -d '{"type":"diagnostico","email":"teste@exemplo.pt","website":""}'
```

No Send Studio, o lead aparece em **Contacts** com `company` tipo `Franklyn · diagnostico · /` (ou mensagem no contacto).

## Domínio customizado (Vercel)

1. Deploy: `npm run build && npx vercel --prod`
2. Vercel → Project → **Settings → Domains**
3. Adicione `franklyn.pt` e `www.franklyn.pt`
4. Configure DNS no registrador (instruções na Vercel)
5. Atualize `NEXT_PUBLIC_SITE_URL` para o domínio final
6. Redeploy

## SEO incluído

- `/sitemap.xml` — 22 rotas PT
- `/robots.txt`
- `/llms.txt` — em `public/`
- Favicon + Open Graph image
- JSON-LD WebSite + ProfessionalService
- Breadcrumbs + canonical por página
- 404 customizado
- Redirects 301: `/br/*` e `/pt/*` → raiz

## Comandos

```bash
npm install
npm run dev
npm run build
npm run deploy
```
