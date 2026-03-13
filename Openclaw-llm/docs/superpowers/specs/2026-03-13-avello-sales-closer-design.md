# Avello Sales Closer — Design Spec

**Data:** 2026-03-13
**Status:** Aprovado
**Plataforma:** OpenClaw Gateway (bot.agenteflowia.com)

---

## 1. Objetivo

Criar um agente no OpenClaw chamado `sales-closer` que:
1. Detecta leads do Avello que cadastraram mas nao pagaram
2. Inicia sequencia de mensagens de conversao via WhatsApp (5 etapas)
3. Conversa como humano, tira duvidas, explica beneficios
4. Escala para o Andre (humano) quando nao souber responder
5. Posta conteudo de valor no grupo do Telegram automaticamente

## 2. Contexto

### Avello
- SaaS/marketplace com 18.000+ templates de automacao (n8n, chatbots, prompts, etc)
- Planos: Starter R$14,90/ano | Premium R$39/ano | Pro R$97/ano
- Leads se cadastram no Supabase mas nao finalizam o pagamento
- Tem grupo ativo no Telegram + WhatsApp dos leads no cadastro

### OpenClaw
- Gateway de multi-agentes rodando em bot.agenteflowia.com (VPS Hostinger)
- 10 agentes ja configurados (main, automation-expert, copywriter, traffic-manager, etc)
- WhatsApp via Baileys (nativo), Telegram via Bot API
- Plugins customizados via api.registerTool()
- Cron jobs para tarefas periodicas

## 3. Arquitetura

```
Supabase (Avello DB)                OpenClaw Gateway
+------------------+               +---------------------------+
| auth.users       |               |                           |
| lead_outreach    |<--REST API--->| Plugin: supabase_leads    |
| conversa_lead    |               |                           |
+------------------+               | Agent: sales-closer       |
                                   |   SOUL.md (personalidade) |
                                   |   Skills (conversao)      |
                                   |   Tools (supabase, etc)   |
                                   |                           |
                                   | Channels:                 |
                                   |   WhatsApp (Baileys)      |
                                   |   Telegram (Bot API)      |
                                   |                           |
                                   | Cron Jobs:                |
                                   |   lead_scanner (5 min)    |
                                   |   telegram_poster (2x/dia)|
                                   +---------------------------+
```

## 4. Componentes

### 4.1 Agente: sales-closer

Criado via: `openclaw agents add sales-closer`

**SOUL.md (Personalidade):**
- Nome: Consultor Avello (sem nome robótico)
- Tom: amigavel, informal, consultivo
- Usa emoji com moderacao
- Conhece todos os beneficios, precos, cases do Avello
- Sabe rebater objecoes comuns
- Objetivo: converter lead em pagante
- Nunca pressiona demais
- Se o lead pedir pra parar, respeita imediatamente

**Model:** GPT-4o ou equivalente (precisa de raciocinio bom para vendas)

### 4.2 Tabelas Supabase (Avello)

#### lead_outreach
| Coluna | Tipo | Descricao |
|--------|------|-----------|
| id | uuid PK | ID unico |
| user_id | uuid FK -> auth.users | Referencia ao cadastro |
| nome | text | Nome do lead |
| whatsapp | text | Numero WhatsApp |
| email | text | Email do cadastro |
| plano_interesse | text | starter/premium/pro |
| status | enum | novo, boas_vindas, nutricao, convertido, desistiu, expirado, escalado |
| etapa_atual | int | 1-5 (qual msg da sequencia) |
| ultima_interacao | timestamptz | Ultimo contato |
| proximo_contato | timestamptz | Quando enviar proxima msg |
| contexto_conversa | jsonb | Contexto/memoria da conversa com IA |
| motivo_escalonamento | text | Motivo de passar pro humano (quando aplicavel) |
| created_at | timestamptz | Data de criacao |
| updated_at | timestamptz | Ultima atualizacao |

#### conversa_lead
| Coluna | Tipo | Descricao |
|--------|------|-----------|
| id | uuid PK | ID unico |
| lead_id | uuid FK -> lead_outreach | Referencia ao lead |
| direcao | enum | enviada, recebida |
| remetente | text | agente, lead, humano |
| mensagem | text | Conteudo da mensagem |
| tipo | enum | texto, audio, imagem |
| created_at | timestamptz | Timestamp |

#### telegram_posts
| Coluna | Tipo | Descricao |
|--------|------|-----------|
| id | uuid PK | ID unico |
| tipo | enum | dica, case, promo, conteudo |
| conteudo | text | Texto do post |
| midia_url | text | URL de imagem/video (opcional) |
| status | enum | pendente, enviado, erro |
| agendar_para | timestamptz | Quando postar |
| enviado_em | timestamptz | Quando foi enviado |
| created_at | timestamptz | Data de criacao |

### 4.3 Plugin: supabase_leads

Plugin OpenClaw registrado via api.registerTool() com as ferramentas:

**buscar_leads_novos**
- Query: leads onde status='novo' AND proximo_contato <= now()
- Retorna: lista de leads prontos para contato

**atualizar_lead**
- Atualiza status, etapa_atual, proximo_contato, contexto_conversa
- Chamado apos cada interacao

**buscar_historico**
- Retorna ultimas N mensagens da conversa_lead
- Usado para dar contexto ao agente antes de responder

**registrar_mensagem**
- Insere nova mensagem na conversa_lead
- Chamado em cada msg enviada ou recebida

**buscar_posts_pendentes**
- Query: telegram_posts onde status='pendente' AND agendar_para <= now()

**marcar_post_enviado**
- Atualiza status do post para 'enviado'

### 4.4 Canais

**WhatsApp:**
- Numero dedicado para vendas do Avello
- Binding: channel=whatsapp, roteado para sales-closer
- Config dmPolicy: allowlist (apenas leads do banco) ou pairing

**Telegram:**
- Bot criado via BotFather
- Adicionado ao grupo do Avello como admin
- requireMention: false (posta sem precisar de mencao)

### 4.5 Cron Jobs

**lead_scanner (a cada 5 minutos):**
```
1. Chama supabase_leads.buscar_leads_novos()
2. Para cada lead retornado:
   a. Carrega historico da conversa
   b. Determina mensagem baseada na etapa_atual
   c. Envia via WhatsApp
   d. Atualiza lead (proxima etapa + proximo_contato)
   e. Registra mensagem no historico
```

**telegram_poster (a cada 12 horas):**
```
1. Chama supabase_leads.buscar_posts_pendentes()
2. Para cada post:
   a. Envia via Telegram Bot API
   b. Marca como enviado
```

### 4.6 Trigger Supabase (Deteccao de Novos Leads)

```sql
-- Funcao que roda a cada 5 minutos via pg_cron
-- Verifica users cadastrados ha 30+ min sem pagamento
-- Insere em lead_outreach com status='novo'
```

Alternativa: webhook do Supabase dispara diretamente para o OpenClaw quando um user e criado.

## 5. Sequencia de Conversao (5 Etapas)

### Etapa 1 — BOAS-VINDAS (30 min apos cadastro)
- Mensagem calorosa de boas-vindas
- Pergunta se pode ajudar a explorar os templates
- Tom: amigavel, sem pressao

### Etapa 2 — VALOR (24h depois)
- Envia 1 template gratis ou dica pratica
- Mostra potencial de faturamento (R$500+/mes)
- Tom: educativo, generoso

### Etapa 3 — PROVA SOCIAL (48h depois)
- Case de sucesso real ou depoimento
- Identifica com a situacao do lead
- Tom: inspirador

### Etapa 4 — URGENCIA (96h / ~4 dias)
- Lembrete do preco de lancamento (R$39 -> R$97)
- Contador de membros (faltam X para fechar)
- Tom: informativo, urgente sem ser agressivo

### Etapa 5 — ULTIMA CHANCE (7 dias)
- Despedida respeitosa
- Deixa o link disponivel
- Tom: leve, sem pressao
- Status -> 'expirado' (encerra sequencia)

**Em TODAS as etapas:** se o lead responder, o agente entra em modo conversa livre usando IA, tirando duvidas e direcionando para o pagamento.

## 6. Handoff Humano (Escalonamento)

### Cenarios de Escalonamento
O agente passa a conversa para o Andre quando:
1. Lead faz pergunta tecnica complexa que foge do escopo
2. Lead pede desconto especial ou negociacao customizada
3. Lead reclama ou demonstra irritacao/frustacao
4. IA nao tem confianca suficiente na resposta
5. Lead pede explicitamente para falar com humano
6. Conversa esta em loop (3+ msgs sem progresso)

### Fluxo de Escalonamento
```
1. Agente detecta necessidade de escalonamento
2. Envia ao lead: "Vou chamar alguem da equipe pra te ajudar melhor! :)"
3. Notifica Andre via WhatsApp pessoal:
   "LEAD PRECISA DE ATENCAO
    Nome: [nome]
    WhatsApp: [numero]
    Motivo: [descricao]
    Ultimas msgs: [contexto]"
4. Atualiza lead: status='escalado', motivo_escalonamento=[motivo]
5. IA pausa para esse lead (nao responde mais automaticamente)
6. Andre responde direto ao lead
7. Para devolver ao agente: comando /ia retomar [lead_id]
```

### Tool: pausar_ia
- Marca lead como 'escalado'
- Para todas as mensagens automaticas
- Registra motivo no banco

### Tool: retomar_ia
- Retorna lead ao status anterior
- IA volta a responder automaticamente
- Carrega contexto da conversa humana

## 7. Posts no Telegram

### Tipos de Conteudo
1. **Dicas** — tutoriais rapidos de automacao/IA
2. **Cases** — historias de sucesso de usuarios do Avello
3. **Promos** — ofertas especiais, countdowns de preco
4. **Conteudo** — novidades do mercado, trends de IA

### Geracao
Opcao A: Posts pre-escritos agendados manualmente (tabela telegram_posts)
Opcao B: Geracao automatica via IA baseada nos templates do Avello

### Frequencia
- 2 posts por dia (manha e tarde)
- Variacao de tipos para nao cansar

## 8. Metricas de Sucesso

| Metrica | Target |
|---------|--------|
| Taxa de resposta (etapa 1) | > 30% |
| Taxa de conversao total | > 10% |
| Tempo medio ate conversao | < 5 dias |
| Taxa de escalonamento | < 20% |
| Leads desistentes | < 30% |
| Posts Telegram / semana | 14 |

## 9. Dependencias

- [ ] Acesso ao Supabase do Avello (project ID, API keys)
- [ ] Numero WhatsApp dedicado para vendas
- [ ] Bot Telegram criado via BotFather
- [ ] API key da OpenClaw para configuracao via CLI
- [ ] Modelo LLM definido (GPT-4o recomendado)
- [ ] Cases de sucesso reais para a sequencia
- [ ] Tabela de objecoes comuns e respostas

## 10. Fases de Implementacao

### Fase 1: Infraestrutura (banco + agente)
- Criar tabelas no Supabase do Avello
- Criar agente sales-closer no OpenClaw
- Configurar SOUL.md com personalidade de vendas

### Fase 2: Plugin + Tools
- Desenvolver plugin supabase_leads
- Registrar todas as tools (buscar, atualizar, historico, etc)
- Testar conexao Supabase <-> OpenClaw

### Fase 3: WhatsApp
- Configurar canal WhatsApp no sales-closer
- Configurar bindings/routing
- Testar envio/recepcao de mensagens

### Fase 4: Sequencia de Conversao
- Implementar cron job lead_scanner
- Configurar as 5 etapas com templates
- Implementar logica de escalonamento humano
- Testar fluxo completo com lead de teste

### Fase 5: Telegram
- Configurar bot e canal Telegram
- Implementar cron job telegram_poster
- Criar primeiros posts de conteudo

### Fase 6: Validacao
- Testar com 5-10 leads reais
- Ajustar tom/timing baseado em feedback
- Monitorar metricas
