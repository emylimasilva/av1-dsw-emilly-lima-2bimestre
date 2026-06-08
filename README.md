# AV1 DSW - Projeto de Tarefas

Este projeto é a avaliação AV1 de Desenvolvimento de Sistemas WEB (DSW) e contém o backend e o frontend integrados.

## Estrutura do repositório

```
api-base-2bimestre/
├── backend/
├── frontend/
└── README.md
```

## Tecnologias utilizadas

- Backend:
  - Node.js
  - Express
  - Prisma ORM
  - MySQL
- Frontend:
  - React
  - Vite
  - Tailwind CSS
  - JavaScript

## Como rodar o projeto

### 1. Iniciar o backend

```bash
cd backend
npm install
npm run dev
```

O backend será iniciado em `http://localhost:3000`.

### 2. Iniciar o frontend

```bash
cd frontend
npm install
npm run dev
```

O frontend será iniciado em `http://localhost:5173` (ou outra porta informada pelo Vite).

> Antes de iniciar o frontend, certifique-se de que o backend já esteja rodando.

## Banco de dados

O backend usa MySQL via Prisma. A conexão é configurada em `backend/.env` com a variável:

```env
DATABASE_URL="mysql://root:@localhost:3306/db_DSW_Emilly_Lima_3TIB"
```

### Importante

- O servidor MySQL deve estar em execução na máquina local.
- O backend usa a tabela `Task` definida em `backend/prisma/schema.prisma`.

## Detalhes do backend

- Arquivos principais:
  - `backend/src/app.js`
  - `backend/src/server.js`
  - `backend/src/controllers/tarefaController.js`
  - `backend/src/models/tarefaModel.js`
  - `backend/src/routes/tarefaRoutes.js`
  - `backend/src/config/prisma.js`
- Rotas principais:
  - `GET /tasks`
  - `GET /tasks/:id`
  - `POST /tasks`
  - `PUT /tasks/:id`
  - `DELETE /tasks/:id`

## Detalhes do frontend

- Arquivos principais:
  - `frontend/src/App.jsx`
  - `frontend/src/pages/HomePage.jsx`
  - `frontend/src/components/TaskForm.jsx`
  - `frontend/src/components/TaskList.jsx`
  - `frontend/src/services/taskService.js`
- A aplicação consome a API do backend para listar, criar, editar e excluir tarefas.

## Observações finais

- O projeto já está pronto para entrega da AV1.
- Basta iniciar o backend e o frontend seguindo os passos acima.
- Se necessário, ajuste o banco de dados local antes de rodar.
