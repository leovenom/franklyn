# Deploy Franklyn Web

## Variáveis de ambiente (obrigatório em produção)

Copie `.env.example` para `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://franklyn.pt
NEXT_PUBLIC_CONTACT_EMAIL=leonardt@outlook.com
```

Alimentam canonical tags, sitemap, robots, Open Graph e schema LocalBusiness.

## Send Studio CRM (leads)

Formulários do hero e `/contact` → `POST /api/leads` → [Send Studio prod](https://send-studio-prod.vercel.app) (`POST /api/contacts`).

Repo CRM: `leovenom/send-studio` (local: `~/resend-studio`).

| Variável | Onde | Descrição |
|----------|------|-----------|
| `SEND_STUDIO_API_TOKEN` | Franklyn Vercel + `.env.local` | Mesmo valor que `STUDIO_ACCESS_TOKEN` no projeto Send Studio |
| `SEND_STUDIO_API_URL` | Opcional | Default: `https://send-studio-prod.vercel.app` |

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
npm run deploy   # requer: vercel login (uma vez) ou VERCEL_TOKEN no CI
```

### Deploy a partir da máquina local

1. `npm run build` — confirmar exit 0
2. `npx vercel login` — se ainda não autenticado
3. `npm run deploy` — produção (`franklyn-web` · project link em `.vercel/project.json`)

**Nota:** O código novo tem de estar commitado se usar Git deploy na Vercel; com CLI, o upload é o working tree local (inclui alterações não commitadas).

### Variáveis na Vercel (Franklyn)

Confirmar em **Project → Settings → Environment Variables**:

- `SEND_STUDIO_API_TOKEN` (= `STUDIO_ACCESS_TOKEN` no Send Studio prod)
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CONTACT_EMAIL`
