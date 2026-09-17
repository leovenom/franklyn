# Go-live Franklyn — checklist

## 1. Build local

```bash
cd /Users/leonardt/franklyn/web
cp .env.example .env.local
npm install
npm run build
npm run dev   # smoke test em localhost:3000
```

### URLs para testar

- http://localhost:3000/ — home LP + captura de leads
- http://localhost:3000/contact
- http://localhost:3000/cases
- http://localhost:3000/guia/leis-franquia
- http://localhost:3000/cases/codekids/franquia
- http://localhost:3000/sitemap.xml · http://localhost:3000/robots.txt
- http://localhost:3000/pt → redirect 301 para `/`
- http://localhost:3000/br → redirect 301 para `/`

## 2. Deploy Vercel

```bash
cd /Users/leonardt/franklyn/web
npx vercel --prod
```

No dashboard Vercel → **Settings → Environment Variables**:

| Variável | Valor |
|----------|-------|
| `NEXT_PUBLIC_SITE_URL` | `https://franklyn.pt` (ou URL Vercel temporária) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | e-mail real |

Redeploy após setar variáveis.

## 3. Domínio

Ver [web/DEPLOY.md](web/DEPLOY.md) — DNS para `franklyn.pt`.

## 4. Google Search Console + SEO

Guia completo: [web/docs/SEO-GSC.md](web/docs/SEO-GSC.md)

1. `NEXT_PUBLIC_SITE_URL` correto na Vercel
2. Verificar `/sitemap.xml` e `/robots.txt`
3. GSC → adicionar propriedade → `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
4. Submeter `sitemap.xml`
5. Pedir indexação de `/`, `/contact`, `/cases`, `/guia/leis-franquia`

## 5. Pós-deploy

- [ ] OG preview (LinkedIn Post Inspector)
- [ ] Formulário hero + CTA (mailto) testado em mobile
- [ ] Trocar `contato@franklyn.pt` por e-mail real quando existir
- [ ] Formspree/Resend para captura de leads (fase 2)
