# Franklyn — Playbook de Agentes

Agentes especializados por setor. Invoque a skill relevante ou peça delegação ao agente principal.

## Princípios

- **Cliente primeiro**: todo output serve um negócio real em franqueamento.
- **Replicabilidade**: se não pode ser ensinado em 30 dias, não é franqueável ainda.
- **Unit economics**: margem, payback e royalties antes de escala.
- **Compliance**: jurídico revisa antes de publicar COF ou contratos (BR: Lei 13.966 · PT: APF).

## Fluxo típico de um cliente

```
Diagnóstico → Estruturação → Documentação → Lançamento → Escala
     │              │               │              │           │
  Franquia +    Franquia +      Operações +    Marketing +  Expansão +
  Financeiro    Jurídico        RH             Comercial    Financeiro
```

Ver [docs/modelo-escala.md](docs/modelo-escala.md) · [docs/leis-franquia-br-pt.md](docs/leis-franquia-br-pt.md)

## Quando usar cada agente

| Situação | Agente |
|----------|--------|
| "Esse negócio dá franquia?" | `franklyn-franquia` + `franklyn-financeiro` |
| Criar manual de operações | `franklyn-operacoes` |
| COF, contrato de franquia | `franklyn-juridico` |
| Campanha para captar franqueados | `franklyn-marketing` + `franklyn-comercial` |
| Treinamento de franqueados | `franklyn-rh` |
| Abrir nova região / master | `franklyn-expansao` |

## Formato de entrega por cliente

```
clients/<nome>/
├── brief.md
├── diagnostico.md
├── proposta.md
├── cof-outline.md      # se flagship
├── sops/
└── manual-franqueado/  # se Growth
```

## Comandos úteis

- *"Rode diagnóstico de franqueabilidade para [negócio]"*
- *"Monte pipeline comercial para [cliente]"*
- *"Estruture royalties e taxas para [modelo]"*
- *"Crie SOP de abertura de unidade para [cliente]"*
- *"Planeje expansão BR/PT para [marca]"*
