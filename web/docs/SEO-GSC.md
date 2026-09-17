# Google Search Console + Sitemap — Franklyn

## URLs geradas automaticamente

| Recurso | URL |
|---------|-----|
| Sitemap | `{SITE_URL}/sitemap.xml` |
| Robots | `{SITE_URL}/robots.txt` |

Substitua `{SITE_URL}` pelo valor de `NEXT_PUBLIC_SITE_URL` (ex.: `https://franklyn-web-eight.vercel.app` ou `https://franklyn.pt`).

O sitemap inclui **22 rotas** (Portugal only) com prioridades e `lastModified` dinâmico.

---

## 1. Variáveis Vercel (obrigatório antes do GSC)

No dashboard Vercel → **Settings → Environment Variables**:

| Variável | Exemplo |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | `https://franklyn.pt` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | seu e-mail real |

Redeploy após salvar.

Teste no browser:
- `https://SEU-DOMINIO/sitemap.xml` — lista de URLs
- `https://SEU-DOMINIO/robots.txt` — deve apontar para o sitemap

---

## 2. Verificar propriedade no Google Search Console

1. Aceda a [Google Search Console](https://search.google.com/search-console)
2. **Adicionar propriedade** → **Prefixo do URL**
3. URL: domínio de produção (ex.: `https://franklyn.pt`)
4. Método recomendado: **Etiqueta HTML**

Copie o valor do atributo `content` da meta tag:

```html
<meta name="google-site-verification" content="ABC123xyz..." />
```

5. Na Vercel, adicione:

```
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=ABC123xyz...
```

6. Redeploy → volte ao GSC → **Verificar**

> Alternativa: verificação via DNS TXT no domínio customizado.

---

## 3. Submeter o sitemap

No GSC, menu **Sitemaps**:

```
sitemap.xml
```

(URL completa: `https://SEU-DOMINIO/sitemap.xml`)

Estado esperado: **Sucesso** em algumas horas (até 48h na primeira vez).

---

## 4. Pedir indexação das páginas principais

GSC → **Inspeção de URL** → cole cada URL → **Solicitar indexação**:

Prioridade alta:
- `/`
- `/contact`
- `/cases`
- `/guia/leis-franquia`
- `/guia/modelo-escala`
- `/cases/codekids`

---

## 5. Monitorizar (primeiras 2 semanas)

| Relatório GSC | O que ver |
|---------------|-----------|
| **Páginas** | Quantas URLs foram indexadas |
| **Desempenho** | Impressões e cliques por query |
| **Experiência** | Core Web Vitals (mobile) |
| **Sitemaps** | Erros ou 404 |

---

## 6. Redirects legados

`/br` e `/pt` redirecionam para `/` (301). Não submeta URLs `/br/*` ou `/pt/*` ao GSC — use apenas rotas na raiz.

---

## Checklist rápido

- [ ] `NEXT_PUBLIC_SITE_URL` correto na Vercel
- [ ] `/sitemap.xml` acessível publicamente
- [ ] `/robots.txt` referencia o sitemap
- [ ] Propriedade verificada no GSC
- [ ] Sitemap submetido
- [ ] Indexação pedida para `/`, `/contact`, `/cases`
