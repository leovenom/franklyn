#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "→ npm install"
npm install

echo "→ npm run build"
npm run build

echo ""
echo "✓ Build OK"
echo ""
echo "Próximo passo — deploy:"
echo "  npx vercel --prod"
echo ""
echo "Variáveis no Vercel:"
echo "  NEXT_PUBLIC_SITE_URL=https://franklyn.com.br"
echo "  NEXT_PUBLIC_CONTACT_EMAIL=seu@email.com"
