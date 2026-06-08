// Routes for Task resource
import express from "express";
import * as TaskController from "../controllers/tarefaController.js";

const router = express.Router();

// GET /tasks - listar todos
router.get("/tasks", TaskController.listar);

// GET /tasks/:id - buscar por id
router.get("/tasks/:id", TaskController.buscarPorId);

// POST /tasks - criar
router.post("/tasks", TaskController.criar);

// PUT /tasks/:id - atualizar (substituição parcial/total conforme body)
router.put("/tasks/:id", TaskController.atualizar);

// DELETE /tasks/:id - excluir
router.delete("/tasks/:id", TaskController.excluir);

export default router;
