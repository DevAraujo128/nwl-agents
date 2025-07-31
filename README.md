# Let Me Ask

Este é um projeto fullstack que permite a criação de salas de perguntas e respostas com integração de IA para geração de respostas e transcrição de áudios. O sistema utiliza React no frontend e Fastify com Drizzle ORM no backend, além de integração com a API Gemini da Google para IA.

## Tecnologias Utilizadas

- **Frontend:** React, Vite, TailwindCSS, TanStack Query, Zod, Radix UI, Lucide Icons
- **Backend:** Fastify, Drizzle ORM, PostgreSQL (com pgvector), Zod, Google Gemini API
- **Dev Tools:** TypeScript, Biome, Docker, Drizzle Kit

## Organização do Projeto

- `web/` — Frontend em React + Vite
  - `src/components` — Componentes reutilizáveis de UI e formulários
  - `src/pages` — Páginas principais (criar sala, sala, gravação de áudio)
  - `src/http` — Hooks para integração com a API
  - `src/lib` — Utilitários e helpers
- `api/` — Backend em Fastify
  - `src/http/routes` — Rotas da API (criar sala, perguntas, upload de áudio)
  - `src/db` — Conexão, seed e schemas do banco de dados
  - `src/services` — Integração com IA Gemini
- `docker-compose.yml` — Configuração do banco PostgreSQL com pgvector

## Estrutura de Funcionalidades

- **CRUD de Salas:** Criação, listagem e navegação entre salas.
- **Perguntas e Respostas:** Envio de perguntas, geração de respostas automáticas via IA.
- **Gravação e Transcrição de Áudio:** Upload de áudio, transcrição automática e uso como contexto para respostas.
- **Persistência:** Dados armazenados em PostgreSQL, com embeddings para busca semântica.

## Como Executar

1. **Clone o repositório:**
   ```sh
   git clone <url-do-repositorio>
