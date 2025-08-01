# NWL Agents

Um sistema de agentes inteligentes que permite criar salas de conversação, fazer perguntas e processar áudio usando IA. O projeto consiste em uma API backend em Fastify com PostgreSQL e uma aplicação web frontend em React.

## 🚀 Funcionalidades

- **Criação de Salas**: Crie salas de conversação para organizar suas interações
- **Sistema de Perguntas**: Faça perguntas e receba respostas inteligentes
- **Processamento de Áudio**: Upload e processamento de arquivos de áudio
- **Interface Moderna**: Interface web responsiva e intuitiva
- **Integração com IA**: Utiliza Google Gemini para processamento de conteúdo

## 🛠️ Stack Tecnológica

### Backend (API)
- **Fastify** - Framework web rápido para Node.js
- **PostgreSQL** - Banco de dados relacional com pgvector
- **Drizzle ORM** - ORM TypeScript-first
- **Zod** - Validação de schemas
- **Google Gemini AI** - Processamento de IA
- **TypeScript** - Linguagem de programação

### Frontend (Web)
- **React 19** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **React Router** - Roteamento
- **React Query** - Gerenciamento de estado do servidor
- **React Hook Form** - Formulários
- **Radix UI** - Componentes acessíveis

### Infraestrutura
- **Docker Compose** - Orquestração de containers
- **PostgreSQL + pgvector** - Banco de dados com suporte a vetores

## 📁 Estrutura do Projeto

```
nwl-agents/
├── api/                    # Backend API
│   ├── src/
│   │   ├── db/            # Configuração do banco de dados
│   │   ├── http/routes/   # Rotas da API
│   │   └── services/      # Serviços (IA, etc.)
│   └── package.json
├── web/                   # Frontend React
│   ├── src/
│   │   ├── components/    # Componentes React
│   │   ├── pages/         # Páginas da aplicação
│   │   └── http/          # Hooks para API
│   └── package.json
└── docker-compose.yml     # Configuração Docker
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- PostgreSQL (via Docker)

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd nwl-agents
```

### 2. Configure o banco de dados

```bash
# Inicie o PostgreSQL com Docker
docker-compose up -d
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na pasta `api/`:

```env
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
PORT=3333
GOOGLE_API_KEY=sua-chave-api-do-google
```

### 4. Instale as dependências

```bash
# Backend
cd api
npm install

# Frontend
cd ../web
npm install
```

### 5. Execute as migrações do banco

```bash
cd api
npm run db:generete
```

### 6. Inicie os serviços

```bash
# Backend (em um terminal)
cd api
npm run dev

# Frontend (em outro terminal)
cd web
npm run dev
```

## 📖 Como Usar

1. **Acesse a aplicação**: Abra `http://localhost:5173` no navegador
2. **Crie uma sala**: Use o formulário na página inicial para criar uma nova sala
3. **Faça perguntas**: Dentro da sala, você pode fazer perguntas e receber respostas
4. **Processe áudio**: Use a funcionalidade de upload de áudio para processar arquivos

## 🔧 Scripts Disponíveis

### Backend (api/)
```bash
npm run dev          # Inicia o servidor em modo desenvolvimento
npm run start        # Inicia o servidor em produção
npm run db:seed      # Executa o seed do banco de dados
npm run db:generete  # Gera migrações do Drizzle
```

### Frontend (web/)
```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
```

## 🗄️ Banco de Dados

O projeto utiliza PostgreSQL com as seguintes tabelas principais:

- **rooms**: Salas de conversação
- **questions**: Perguntas e respostas
- **audio_chunks**: Chunks de áudio processados

## 🔌 Endpoints da API

- `GET /health` - Health check
- `GET /rooms` - Lista todas as salas
- `POST /rooms` - Cria uma nova sala
- `GET /rooms/:id/questions` - Lista perguntas de uma sala
- `POST /rooms/:id/questions` - Cria uma nova pergunta
- `POST /upload-audio` - Upload de arquivo de áudio

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença ISC. Veja o arquivo `LICENSE` para mais detalhes.
