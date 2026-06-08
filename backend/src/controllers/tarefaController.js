import * as TaskModel from "../models/tarefaModel.js";

// Controllers para CRUD de Task

export async function listar(req, res) {
  try {
    const tasks = await TaskModel.listar();
    return res.json(tasks);
  } catch (error) {
    console.error("Erro ao listar tasks:", error);
    return res.status(500).json({ erro: "Erro interno" });
  }
}

export async function buscarPorId(req, res) {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).json({ erro: "ID inválido" });
  }

  try {
    const task = await TaskModel.buscarPorId(id);
    if (!task) return res.status(404).json({ erro: "Task não encontrada" });
    return res.json(task);
  } catch (error) {
    console.error("Erro ao buscar task:", error);
    return res.status(500).json({ erro: "Erro interno" });
  }
}

export async function criar(req, res) {
  const { title, description, completed } = req.body;

  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ erro: "Campo 'title' é obrigatório" });
  }

  try {
    const created = await TaskModel.criar({
      title: title.trim(),
      description: description ? String(description) : undefined,
      completed: typeof completed === "boolean" ? completed : undefined
    });
    return res.status(201).json(created);
  } catch (error) {
    console.error("Erro ao criar task:", error);
    return res.status(500).json({ erro: "Erro interno" });
  }
}

export async function atualizar(req, res) {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).json({ erro: "ID inválido" });
  }

  const { title, description, completed } = req.body;

  const data = {};
  if (title !== undefined) {
    if (typeof title !== "string" || title.trim() === "")
      return res.status(400).json({ erro: "title inválido" });
    data.title = title.trim();
  }
  if (description !== undefined) {
    data.description = description === null ? null : String(description);
  }
  if (completed !== undefined) {
    if (typeof completed !== "boolean")
      return res.status(400).json({ erro: "completed deve ser boolean" });
    data.completed = completed;
  }

  if (Object.keys(data).length === 0) {
    return res.status(400).json({ erro: "Nenhum campo para atualizar" });
  }

  try {
    const updated = await TaskModel.atualizar(id, data);
    if (!updated) return res.status(404).json({ erro: "Task não encontrada" });
    return res.json(updated);
  } catch (error) {
    console.error("Erro ao atualizar task:", error);
    return res.status(500).json({ erro: "Erro interno" });
  }
}

export async function excluir(req, res) {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).json({ erro: "ID inválido" });
  }

  try {
    const deleted = await TaskModel.excluir(id);
    if (!deleted) return res.status(404).json({ erro: "Task não encontrada" });
    return res.json(deleted);
  } catch (error) {
    console.error("Erro ao excluir task:", error);
    return res.status(500).json({ erro: "Erro interno" });
  }
}
