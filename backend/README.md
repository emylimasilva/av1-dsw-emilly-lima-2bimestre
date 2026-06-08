# Backend AV1 DSW

API REST para gerenciamento de tarefas, desenvolvida com **Node.js**, **Express**, **Prisma** e **MySQL**.

## Estrutura do Projeto

```
backend/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── config/
│   │   └── prisma.js
│   ├── controllers/
│   │   └── tarefaController.js
│   ├── models/
│   │   └── tarefaModel.js
│   ├── routes/
│   │   └── tarefaRoutes.js
│   ├── app.js
│   └── server.js
├── .env
├── package.json
└── README.md
```

## Como executar

1. Instale as dependências:

```bash
cd backend
npm install
```

2. Configure o arquivo `.env` com a URL do banco:

```env
DATABASE_URL="mysql://root:@localhost:3306/db_DSW_Emilly_Lima_3TIB"
```

3. Inicie o servidor:

```bash
npm run dev
```

O backend será iniciado em `http://localhost:3000`.

## Endpoints da API

- `GET /tasks` - listar todas as tarefas
- `GET /tasks/:id` - buscar tarefa por ID
- `POST /tasks` - criar nova tarefa
- `PUT /tasks/:id` - atualizar tarefa
- `DELETE /tasks/:id` - excluir tarefa

## Como a API funciona

O projeto usa o padrão MVC:

- `src/controllers/tarefaController.js` - recebe requisições e retorna respostas
- `src/models/tarefaModel.js` - executa operações no banco com Prisma
- `src/routes/tarefaRoutes.js` - define as rotas da API
- `src/config/prisma.js` - configura a conexão com o Prisma

## Tecnologias

- Node.js
- Express
- Prisma ORM
- MySQL
- JavaScript

## Observações

- O backend retorna dados em JSON
- O servidor está conectado ao MySQL via Prisma
- Use o Postman ou Insomnia para testar as rotas

Este projeto é ideal para entender:

- ✅ Como estruturar uma API REST
- ✅ O que é e como aplicar o padrão MVC
- ✅ Separação de responsabilidades
- ✅ Boas práticas de organização de código
- ✅ Como preparar um projeto para crescer

---

Desenvolvido para fins educacionais 🎓
