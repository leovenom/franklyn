# SOP-03 — Substituição de instrutor

| Campo | Valor |
|-------|-------|
| **Versão** | 1.0 |
| **Owner** | Coordenador regional |
| **Gatilho** | Ausência, desligamento ou indisponibilidade do instrutor titular |
| **SLA** | **≤ 48h** — aula não pode ser cancelada (exceto force majeure) |

## Objetivo

Manter continuidade pedagógica e experiência do aluno quando o instrutor titular não puder ministrar a aula.

## Tipos de ausência

| Tipo | Exemplos | SLA |
|------|----------|-----|
| **Pontual** | Doença, emergência | Substituto em ≤ 48h |
| **Temporária** | Licença 1–4 semanas | Substituto fixo + handover |
| **Definitiva** | Demissão | Substituto em ≤ 5 dias úteis + recrutamento |

## Passos — ausência pontual

### 1. Notificação (T-0)
1. Instrutor titular avisa coordenador com **≥ 24h antecedência** quando possível
2. Registrar no sistema: turma, data, motivo (código interno)
3. Se < 24h: classificar **urgente** — acionar pool imediato

### 2. Alocação substituto (T-0 a T-24h)
1. Consultar **pool instrutores** — ordem:
   - Instrutor backup já certificado na mesma trilha
   - Instrutor outra turma (mesmo horário livre)
   - Coordenador (último recurso — máx. 2x/trimestre por turma)
2. Confirmar disponibilidade por WhatsApp + registro CRM
3. Enviar plano de aula da sessão (portal EAD — módulo da semana)

### 3. Comunicação (T-24h)
1. Se substituto ≠ titular: mensagem template **CK-SUBSTITUICAO** aos pais
2. Conteúdo: nome substituto, certificação, mesma dinâmica de aula
3. **Não** mencionar motivo médico/pessoal do titular

### 4. Execução e handback
1. Substituto registra presença e observações no portal
2. Titular recebe resumo em ≤ 24h pós-aula
3. Se 2+ substituições consecutivas: acionar recrutamento (tipo temporária)

## Passos — desligamento definitivo

1. **D-0**: RH instrutores — desativar acesso portal
2. **D-1 a D-5**: Recrutar via banco CodeKids + LinkedIn local
3. **Handover obrigatório** (se titular cooperativo):
   - Status cada aluno (módulo, dificuldades)
   - Dinâmica da turma
   - Contatos pais sensíveis
4. **D-5 máx.**: Novo instrutor certificado assume
5. Comunicação franqueado → pais: continuidade garantida

## Pool de instrutores

Manter mínimo **2 instrutores certificados por trilha ativa** na unidade.

| Trilha | Certificação EAD | Validade |
|--------|------------------|----------|
| Scratch | CK-INS-SCR-L1 | 12 meses |
| Python | CK-INS-PYT-L1 | 12 meses |
| Web | CK-INS-WEB-L1 | 12 meses |

## Evidências

- Log substituição no CRM
- Presença registrada portal
- Comunicação pais arquivada

## KPIs

- Taxa aulas canceladas por falta instrutor: **0%** (meta)
- Tempo médio alocação substituto: **< 12h**
- NPS pós-substituição vs baseline: **Δ ≤ 5 pts**

## Exceções

| Situação | Ação |
|----------|------|
| Nenhum substituto disponível | Aula remota síncrona 45 min (conteúdo reduzido) — pré-aprovado franqueadora |
| Force majeure (blackout, etc.) | Remarcar em até 7 dias — comunicação CK-FORCE-MAJEURE |
