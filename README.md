# 📚 BookShelf - Sua Biblioteca Digital

Uma aplicação moderna e completa para gerenciar sua biblioteca pessoal de livros, construída com Next.js 15, React 19 e TypeScript.

## ✨ Funcionalidades

### 📖 Gerenciamento de Livros
- ✅ **Adicionar livros** com informações completas (título, autor, gênero, ano, páginas, avaliação, sinopse, capa)
- ✅ **Editar livros** existentes
- ✅ **Excluir livros** com confirmação
- ✅ **Visualizar detalhes** completos de cada livro
- ✅ **Status de leitura** (Quero Ler, Lendo, Lido, Pausado, Abandonado)

### 🔍 Busca e Filtros
- ✅ **Busca por texto** em título, autor, gênero ou sinopse
- ✅ **Filtro por gênero** dinamicamente atualizado
- ✅ **Filtros na URL** para compartilhamento
- ✅ **Limpeza de filtros** com um clique

### 📊 Dashboard
- ✅ **Estatísticas em tempo real** da biblioteca
- ✅ **Contadores por status** de leitura
- ✅ **Total de páginas lidas**
- ✅ **Avaliação média** dos livros

### 🎨 Sistema de Temas
- ✅ **Light Mode** (tema claro)
- ✅ **Dark Mode** (tema escuro) 
- ✅ **System Mode** (seguir preferência do sistema)
- ✅ **Persistência** da preferência no localStorage
- ✅ **Prevenção de FOUC** (Flash of Unstyled Content)
- ✅ **Transições suaves** entre temas

### 🚀 API REST Completa
- ✅ **GET /api/books** - Listar livros com filtros
- ✅ **POST /api/books** - Criar novo livro
- ✅ **GET /api/books/[id]** - Obter detalhes de um livro
- ✅ **PUT /api/books/[id]** - Atualizar livro
- ✅ **DELETE /api/books/[id]** - Excluir livro
- ✅ **GET /api/categories** - Listar gêneros
- ✅ **GET /api/stats** - Obter estatísticas

## 🛠️ Tecnologias

### Frontend
- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca para interfaces
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Framework CSS utility-first
- **shadcn/ui** - Componentes UI modernos

### Backend
- **Next.js API Routes** - APIs serverless
- **Server Actions** - Mutações no servidor
- **Server Components** - Renderização no servidor

### Arquitetura
- **App Router** - Novo sistema de roteamento do Next.js
- **Server Components** para data fetching
- **Client Components** para interatividade
- **Database abstraction** para fácil migração

## 🚦 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn ou pnpm

### Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/vitoriamignon/bookshelf.git
cd bookshelf
```

2. **Instale as dependências:**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Execute em modo desenvolvimento:**
```bash
npm run dev
# ou
yarn dev
# ou 
pnpm dev
```

4. **Abra o navegador:**
```
http://localhost:3000
```

### Build para produção

```bash
npm run build
npm run start
```

## 📁 Estrutura do Projeto

```
bookshelf/
├── app/
│   ├── api/                    # API Routes
│   │   ├── books/             # Endpoints de livros
│   │   ├── categories/        # Endpoints de categorias
│   │   └── stats/            # Endpoints de estatísticas
│   ├── components/           # Componentes React
│   │   ├── ui/              # Componentes base
│   │   └── forms/           # Formulários
│   ├── lib/                 # Utilitários e lógica
│   │   ├── actions.ts       # Server Actions
│   │   ├── database.ts      # Camada de dados
│   │   ├── storage.ts       # Storage local (legado)
│   │   ├── types.ts         # Tipos TypeScript
│   │   └── data.ts          # Dados iniciais
│   ├── library/             # Páginas da biblioteca
│   │   ├── [bookId]/        # Páginas dinâmicas do livro
│   │   └── add/             # Página de adicionar
│   ├── dashboard/           # Dashboard
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página inicial
├── public/                  # Arquivos estáticos
├── API_TESTING.md          # Guia de teste da API
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```


