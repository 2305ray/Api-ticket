# Api-ticket

API de gerenciamento de tickets de suporte, feita em JavaScript puro usando apenas o módulo `http` nativo do Node (sem framework tipo Express). Tem um sistema de rotas e um "banco de dados" próprios, escritos do zero, e persiste os dados direto em um arquivo JSON.

## 🚀 Tecnologias utilizadas

- Node.js
- JavaScript (ESM)
- Módulo `http` nativo do Node (sem framework)
- Arquivo JSON como banco de dados (`src/database/db.json`)

## 📦 Como rodar o projeto

```bash
# clone o repositório
git clone https://github.com/2305ray/Api-ticket.git
cd Api-ticket

# instale as dependências
npm install

# rode em modo desenvolvimento
npm run dev
```

O servidor sobe em `http://localhost:4000`.

### Rotas disponíveis

- `POST /tickets` — cria um novo ticket
- `GET /tickets` — lista os tickets
- `PUT /tickets/:id` — atualiza um ticket
- `PATCH /tickets/:id/close` — fecha (atualiza status de) um ticket
- `DELETE /tickets/:id` — remove um ticket

## 📁 Estrutura

O projeto tem uma arquitetura própria, sem framework: `src/server.ts` cria o servidor http puro, `src/middlewares` cuida do parse do JSON e do roteamento, `src/Routes` define as rotas de tickets, `src/Controllers/tickets` tem a lógica de cada ação (create, index, update, updateStatus, remove) e `src/database/database.js` implementa um mini banco de dados que lê e escreve no arquivo `db.json`.
