const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

async function handleResponse(response) {
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(payload?.erro || "Erro ao conectar com a API");
  }
  return payload;
}

export async function getTasks() {
  const response = await fetch(`${API_BASE_URL}/tasks`);
  return handleResponse(response);
}

export async function createTask(task) {
  const response = await fetch(`${API_BASE_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return handleResponse(response);
}

export async function updateTask(id, data) {
  const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
}

export async function deleteTask(id) {
  const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: "DELETE",
  });
  return handleResponse(response);
}
