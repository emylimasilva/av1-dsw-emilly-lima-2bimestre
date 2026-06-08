import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../services/taskService";

export default function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [view, setView] = useState("list");
  const [saving, setSaving] = useState(false);

  const loadTasks = async () => {
    setLoading(true);
    setError("");

    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      setError(err.message || "Não foi possível carregar as tarefas.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleSave = async (taskData) => {
    setSaving(true);
    setError("");

    try {
      if (editingTask) {
        const updated = await updateTask(editingTask.id, taskData);
        setTasks((current) =>
          current.map((item) => (item.id === editingTask.id ? updated : item))
        );
      } else {
        const created = await createTask(taskData);
        setTasks((current) => [created, ...current]);
      }

      setEditingTask(null);
      setView("list");
    } catch (err) {
      setError(err.message || "Erro ao salvar a tarefa.");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setView("form");
  };

  const handleDelete = async (taskId) => {
    setError("");

    try {
      await deleteTask(taskId);
      setTasks((current) => current.filter((task) => task.id !== taskId));
    } catch (err) {
      setError(err.message || "Erro ao excluir a tarefa.");
    }
  };

  const handleToggle = async (task) => {
    setError("");

    try {
      const updated = await updateTask(task.id, {
        completed: !task.completed,
      });
      setTasks((current) =>
        current.map((item) => (item.id === task.id ? updated : item))
      );
    } catch (err) {
      setError(err.message || "Erro ao atualizar o status.");
    }
  };

  return (
    <div className="mx-auto min-h-screen max-w-6xl px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <header className="mb-8 rounded-[2rem] border border-slate-700 bg-slate-950/90 p-8 shadow-2xl shadow-slate-950/40">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
              Projeto AV1 DSW
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-50 sm:text-5xl">
              Gerenciador de tarefas
            </h1>
            <p className="mt-3 max-w-2xl text-slate-400">
              Uma interface React consumindo a API Node + Express + Prisma + MySQL.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className={`rounded-3xl px-5 py-3 text-sm font-semibold transition ${
                view === "list"
                  ? "bg-cyan-500 text-slate-950"
                  : "bg-slate-800 text-slate-100 hover:bg-slate-700"
              }`}
              onClick={() => {
                setView("list");
                setEditingTask(null);
              }}
            >
              Lista de tarefas
            </button>
            <button
              type="button"
              className={`rounded-3xl px-5 py-3 text-sm font-semibold transition ${
                view === "form"
                  ? "bg-cyan-500 text-slate-950"
                  : "bg-slate-800 text-slate-100 hover:bg-slate-700"
              }`}
              onClick={() => {
                setView("form");
                setEditingTask(null);
              }}
            >
              Adicionar tarefa
            </button>
          </div>
        </div>
      </header>

      <main className="space-y-8">
        {error && (
          <div className="rounded-3xl border border-rose-500/50 bg-rose-500/10 p-5 text-sm text-rose-200">
            {error}
          </div>
        )}

        {view === "form" ? (
          <TaskForm
            task={editingTask}
            onSave={handleSave}
            onCancel={() => {
              setEditingTask(null);
              setView("list");
            }}
            saving={saving}
          />
        ) : (
          <TaskList
            tasks={tasks}
            loading={loading}
            error={error}
            onEdit={handleEdit}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        )}
      </main>

      <footer className="mt-10 rounded-3xl border border-slate-700 bg-slate-900/80 p-6 text-sm text-slate-500 shadow-xl shadow-slate-950/10">
        <p>
          API: <span className="text-cyan-300">http://localhost:3000/tasks</span>
        </p>
      </footer>
    </div>
  );
}
