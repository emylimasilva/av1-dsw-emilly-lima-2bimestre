import { prisma, Prisma } from "../config/prisma.js";

// CRUD usando Prisma para o modelo Task (schema.prisma)

/**
 * listar() - lista todos os registros
 */
export async function listar() {
  return await prisma.task.findMany({ orderBy: { id: "asc" } });
}

/**
 * buscarPorId(id) - busca um registro por ID
 */
export async function buscarPorId(id) {
  const tarefa = await prisma.task.findUnique({ where: { id } });
  return tarefa || null;
}

/**
 * criar(data) - cria um novo registro
 * data: { title, description, completed? }
 */
export async function criar(data) {
  const created = await prisma.task.create({ data });
  return created;
}

/**
 * atualizar(id, data) - atualiza parcialmente um registro
 * retorna null se não encontrado (tratamento P2025)
 */
export async function atualizar(id, data) {
  try {
    const updated = await prisma.task.update({ where: { id }, data });
    return updated;
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return null;
    }
    throw error;
  }
}

/**
 * excluir(id) - remove um registro
 * retorna null se não encontrado (P2025)
 */
export async function excluir(id) {
  try {
    const deleted = await prisma.task.delete({ where: { id } });
    return deleted;
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return null;
    }
    throw error;
  }
}
