# SOP-05 — Fechamento mensal e KPIs

| Campo | Valor |
|-------|-------|
| **Versão** | 1.0 |
| **Owner** | Franqueado (operacional) + Coordenador (dados) |
| **Frequência** | Mensal |
| **SLA** | Relatório enviado à franqueadora até **dia 5** do mês seguinte |

## Objetivo

Consolidar performance da unidade, calcular royalties, identificar desvios e acionar planos de correção.

## Calendário

| Dia | Ação |
|-----|------|
| D-3 (último dia útil do mês) | Freeze matrículas/churn no CRM |
| D1–D3 | Conciliação financeira |
| D4 | Montagem dashboard |
| **D5** | Envio relatório franqueadora + pagamento royalties |

## Passos

### 1. Conciliação receita (D1–D3)
1. Exportar faturamento bruto do ERP/CRM
2. Conciliar com extrato bancário (PIX, cartão, boleto)
3. Separar receitas:
   - Mensalidades recorrentes
   - Matrículas novas (taxa opcional)
   - B2B escolas
   - Eventos/workshops
4. **Excluir** de base royalty: reembolsos, estornos, impostos (conforme contrato)

### 2. Métricas operacionais (D3)

Preencher planilha **CK-METRICAS-MENSAL**:

| KPI | Fórmula | Meta unidade |
|-----|---------|--------------|
| Alunos ativos (EOM) | Matrículas ativas último dia | Crescimento +5%/mês (mês 6+) |
| Matrículas novas | Count mês | ≥ 8 (mês 6+) |
| Churn | Cancelamentos / base início mês | ≤ 3%/mês |
| NPS pais | Média respostas mês | ≥ 55 |
| Ocupação turmas | Alunos / capacidade | 75–90% |
| Aulas canceladas | Count | 0 |
| CAC blended | Marketing + comercial / novas matrículas | < R$ 350 |
| LTV estimado | Ticket × tempo médio permanência | > R$ 2.800 |

### 3. Despesas e EBITDA (D3–D4)
1. Lançar despesas fixas + variáveis (folha, aluguel, marketing local)
2. Calcular EBITDA operacional
3. Comparar vs modelo financeiro (cenário base COF)

### 4. Royalties e fundo marketing (D4)
```
Base royalty = Faturamento bruto elegível (item VII contrato)
Royalties (8%) = Base × 0,08
Fundo marketing (2%) = Base × 0,02
Taxa tecnologia = R$ 890 (fixo)
Total franqueadora = Royalties + Fundo + Taxa tech
```

### 5. Envio e pagamento (D5)
1. Upload relatório no portal franqueadora
2. Anexar: extrato conciliação, print dashboard CRM, comprovante DARF se aplicável
3. PIX/boleto royalties — vencimento dia 5
4. Call 15 min franqueado se **2+ KPIs** abaixo meta por 2 meses consecutivos

## Semáforo de performance

| Status | Critério | Ação |
|--------|----------|------|
| 🟢 Verde | ≥ 80% KPIs na meta | Manter |
| 🟡 Amarelo | 60–79% KPIs na meta | Plano ação 30 dias |
| 🔴 Vermelho | < 60% KPIs na meta | Visita franqueadora + plano 15 dias |

## Plano de ação (template)

1. KPI crítico identificado
2. Causa raiz (5 porquês)
3. Ações 3/15/30 dias
4. Owner e evidência

## Evidências

- Planilha CK-METRICAS-MENSAL assinada
- Comprovante pagamento royalties
- Print portal envio OK

## KPIs da rede (franqueadora)

| Métrica | Meta rede |
|---------|-----------|
| Unidades reportando no prazo | 100% |
| Inadimplência royalties | < 2% |
| Unidades vermelho consecutivo 3 meses | 0 (intervenção) |

## Exceções

- Mês inauguração: relatório simplificado (matrículas + despesas only)
- Unidade em reforma: suspensão royalties até go-live (cláusula contrato)
