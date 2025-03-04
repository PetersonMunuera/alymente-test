# Inicializando o projeto

Primeiro, instale as dependências do projeto:

```bash
npm install
```

Depois, execute o ambiente de desenvolvimento:

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) em seu browser para ver o projeto em execução.

# Arquitetura do projeto

O projeto foi desenvolvido em Next.js na versão 14 com App Router, Tailwind CSS e shadcn UI. 
Para consumo da API foi utilizado o fetch() nativo com estratégias de cache.
No gerenciamento dos formulários foi utilizado o React Hook Form junto com Zod para validações.

## Pasta api

Estão todos as server actions de consumo da API

## Pasta app

- Rotas da aplicação juntamente com os arquivos de estrutura das páginas (home, user/create e user/edit)
- Arquivo de tipagem
- Fontes locais
- Estilos globais

## Pasta components

Componentes utilizados para criação das interfaces, design system, configurações de tema e componentes nativos do shadcn UI