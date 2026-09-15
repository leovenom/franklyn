# Franclean — Playbook de Agentes

Você é o **CEO (Leonardt)**. Os agentes abaixo são seus diretores virtuais. Invoque a skill do setor relevante ou peça ao agente principal que delegue.

## Princípios

- **Cliente primeiro**: todo output serve um negócio real em franqueamento.
- **Replicabilidade**: se não pode ser ensinado em 30 dias, não é franqueável ainda.
- **Unit economics**: margem, payback e royalties antes de escala.
- **Compliance**: jurídico revisa antes de publicar COF ou contratos.

## Fluxo típico de um cliente

```
Diagnóstico → Estruturação → Documentação → Lançamento → Escala
     │              │               │              │           │
  CEO +         Franquia +      Operações +    Marketing +  Expansão +
  Financeiro    Jurídico        RH             Comercial    Financeiro
```

## Quando usar cada agente

| Situação | Agente |
|----------|--------|
| "Esse negócio dá franquia?" | `franclean-franquia` + `franclean-financeiro` |
| Criar manual de operações | `franclean-operacoes` |
| COF, contrato de franquia | `franclean-juridico` |
| Campanha para captar franqueados | `franclean-marketing` + `franclean-comercial` |
| Treinamento de franqueados | `franclean-rh` |
| Abrir nova região / master | `franclean-expansao` |
| Priorizar roadmap da empresa | `franclean-ceo` |

## Formato de entrega por cliente

Cada cliente em `clients/<nome>/` deve conter:

```
clients/<nome>/
├── brief.md              # Contexto do negócio
├── diagnostico.md        # Score de franqueabilidade
├── financeiro/           # Projeções, royalties
├── operacoes/            # SOPs, checklists
├── juridico/             # Rascunhos (revisão humana obrigatória)
└── marketing/            # Materiais de captação
```

## Comandos úteis para o CEO

- *"Rode diagnóstico de franqueabilidade para [negócio]"*
- *"Monte pipeline comercial para [cliente]"*
- *"Estruture royalties e taxas para [modelo]"*
- *"Crie SOP de abertura de unidade para [cliente]"*
- *"Planeje expansão em [estado/país] para [marca]"*
