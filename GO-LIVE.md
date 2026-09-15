# Go-live Franklyn — checklist

## 1. Build local

```bash
cd /Users/leonardt/franklyn/web
cp .env.example .env.local
# Edite .env.local com e-mail real se tiver
npm install
npm run build
npm run dev   # smoke test em localhost:3000
```

### URLs para testar

- http://localhost:3000/ (BR)
- http://localhost:3000/pt (Portugal)
- http://localhost:3000/cases
- http://localhost:3000/guia/leis-franquia
- http://localhost:3000/cases/codekids/franquia
- http://localhost:3000/#contato

## 2. Deploy Vercel

```bash
cd /Users/leonardt/franklyn/web
npx vercel --prod
```

No dashboard Vercel → **Settings → Environment Variables**:

| Variável | Valor |
|----------|-------|
| `NEXT_PUBLIC_SITE_URL` | `https://franklyn.com.br` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | seu e-mail real |

Redeploy após setar variáveis.

## 3. Domínio

Ver [web/DEPLOY.md](web/DEPLOY.md) — DNS A + CNAME www.

## 4. Commit (se ainda não feito)

```bash
cd /Users/leonardt/franklyn
git add -A
git status
git commit -m "$(cat <<'EOF'
Launch Franklyn: site, cases portfolio, SEO BR/PT, and franchise guides.

Complete Next.js site with conversion copy, Portugal locale, five case studies,
legal/scaling docs, and deployment configuration.
EOF
)"
```

## 5. Pós-deploy

- [ ] OG preview (LinkedIn Post Inspector)
- [ ] Google Search Console — submit sitemap
- [ ] Trocar `contato@franklyn.com.br` por e-mail real quando existir
- [ ] Formulário: migrar de mailto para Formspree/Resend (fase 2)
