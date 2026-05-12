# AGENTS.md — luan-web-portfolio

## Visão Geral

Site pessoal / portfólio do Luan dos Santos, construído com **Next.js 16 (App Router)** e **React 19**. O projeto usa **TypeScript**, **SCSS Modules** para estilização e segue tokens de design inspirados no Material Design 3.

O projeto está em fase inicial — a página principal exibe apenas um placeholder "Em breve".

## Stack & Ferramentas

| Categoria       | Tecnologia                          |
| --------------- | ----------------------------------- |
| Framework       | Next.js 16 (App Router, Turbopack)  |
| UI              | React 19, React DOM 19              |
| Linguagem       | TypeScript 6                        |
| Estilização     | SCSS Modules (sass)                 |
| Ícones          | Remix Icon (remixicon)              |
| Linter/Format   | Biome 2                             |
| Testes          | Jest 29 + Testing Library + jsdom   |

## Estrutura do Projeto

```
src/
├── app/                  # App Router (layout, page, globals)
│   ├── layout.tsx        # Root layout (Inter font, lang pt-br)
│   ├── page.tsx          # Home page
│   ├── page.module.scss
│   └── globals.scss
├── components/           # Componentes reutilizáveis
├── styles/
│   ├── colors/           # Paleta Material Design 3 (light, dark, hc, mc)
│   ├── tokens/           # Design tokens (sizes, margins, paddings)
│   └── fonts/            # Configuração de fontes
├── utils/                # Utilitários (formatClassName, etc.)
```

## Convenções

### Código

- **Componentes**: um diretório por componente dentro de `src/components/`, com barrel export (`index.ts`).
- **Estilização**: SCSS Modules (`*.module.scss`). Nunca usar CSS inline.
- **Imports de componentes**: usar barrel exports — `import { X } from '@/components'`.
- **Imports de utils**: usar barrel exports — `import { x } from '@/utils'`.
- **Path aliases**: `@/components/*`, `@/pages/*`, `@/styles/*` (definidos no `tsconfig.json`).
- **Classes CSS compostas**: usar a util `formatClassName()` para combinar classes.
- **Design tokens**: usar as variáveis SCSS de `src/styles/tokens/` e `src/styles/colors/` em vez de valores hardcoded.
- **Idioma do site**: Português brasileiro (`lang="pt-br"`).

### Linting & Formatação

- Usar **Biome** (não ESLint/Prettier).
- Aspas simples em JS/TS (`quoteStyle: "single"`).
- Semicolons apenas quando necessário (`semicolons: "asNeeded"`).
- Indentação com espaços em JSON.
- Comandos: `npm run lint`, `npm run lint:fix`, `npm run format`, `npm run format:fix`.

### Testes

- Framework: **Jest** com `jest-environment-jsdom`.
- Setup: `jest.setup.js` (importa `@testing-library/jest-dom`).
- Comandos: `npm test` (watch), `npm run test:ci` (CI).

### Build & Dev

- `npm run dev` — dev server com Turbopack.
- `npm run build` — build de produção.
- `npm run start` — serve o build.
