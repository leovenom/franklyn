# Deploy Franklyn Web

## Variáveis de ambiente (obrigatório em produção)

Copie `.env.example` para `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://franklyn.com.br
NEXT_PUBLIC_CONTACT_EMAIL=contato@franklyn.com.br
```

Isso alimenta canonical tags, sitemap, robots, Open Graph e schema LocalBusiness.

## Domínio customizado (Vercel)

1. Deploy: `npm run build && npx vercel --prod`
2. Vercel → Project → **Settings → Domains**
3. Adicione `franklyn.com.br` e `www.franklyn.com.br`
4. Configure DNS no registrador:
   - `A` → `76.76.21.21`
   - `CNAME www` → `cname.vercel-dns.com`
5. Atualize `NEXT_PUBLIC_SITE_URL` para o domínio final
6. Redeploy

## SEO incluído

- `/sitemap.xml` — gerado automaticamente
- `/robots.txt` — gerado automaticamente
- `/llms.txt` — em `public/`
- Favicon + Open Graph image
- JSON-LD LocalBusiness / ProfessionalService
- Breadcrumbs + canonical por página
- 404 customizado

## Comandos

```bash
npm install
npm run dev
npm run build
npm run deploy
```
