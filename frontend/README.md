# Front-end AV1 DSW

Aplicação React que consome a API de tarefas em Node.js + Express + Prisma + MySQL.

## Executar o projeto

1. Instale as dependências:

```bash
cd frontend
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra o endereço exibido pelo Vite (normalmente `http://localhost:5173`).

> O backend deve estar rodando em `http://localhost:3000` para que o front-end funcione.

## Estrutura principal

- `src/App.jsx` - entrada principal do React
- `src/pages/HomePage.jsx` - página principal do projeto
- `src/components/TaskForm.jsx` - formulário de tarefas
- `src/components/TaskList.jsx` - listagem de tarefas
- `src/services/taskService.js` - chamadas à API

## API utilizada

O front-end consome as rotas:

- `GET /tasks`
- `POST /tasks`
- `PUT /tasks/:id`
- `DELETE /tasks/:id`

## Variáveis de ambiente

- `frontend/.env` contém a URL da API:

```env
VITE_API_URL=http://localhost:3000
```

## Tecnologias

- React
- Vite
- Tailwind CSS
- JavaScript

## Observações

- Inicie o backend antes do frontend.
- Se a API estiver em outra porta, atualize `frontend/.env`.
