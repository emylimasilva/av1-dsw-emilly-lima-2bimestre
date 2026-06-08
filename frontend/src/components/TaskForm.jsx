import { useEffect, useState } from "react";

export default function TaskForm({ task, onSave, onCancel, saving }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description || "");
      setCompleted(task.completed ?? false);
    } else {
      setTitle("");
      setDescription("");
      setCompleted(false);
    }
  }, [task]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim()) return;

    onSave({
      title: title.trim(),
      description: description.trim(),
      completed,
    });
  };

  return (
    <section className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/30">
      <h2 className="mb-4 text-2xl font-semibold text-slate-50">
        {task ? "Editar tarefa" : "Cadastrar nova tarefa"}
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="block space-y-2">
          <span className="text-sm font-medium text-slate-300">Título</span>
          <input
            className="w-full rounded-2xl border border-slate-700 bg-slate-950/50 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Ex: Estudar React"
          />
        </label>

        <label className="block space-y-2">
          <span className="text-sm font-medium text-slate-300">Descrição</span>
          <textarea
            className="w-full rounded-2xl border border-slate-700 bg-slate-950/50 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Detalhes da tarefa (opcional)"
            rows={3}
          />
        </label>

        <label className="flex items-center gap-3 text-sm text-slate-300">
          <input
            type="checkbox"
            checked={completed}
            onChange={(event) => setCompleted(event.target.checked)}
            className="h-4 w-4 rounded border-slate-600 bg-slate-950 text-cyan-400 focus:ring-cyan-300"
          />
          Marcar como concluída
        </label>

        <div className="flex flex-wrap gap-3 pt-4">
          <button
            type="submit"
            className="rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            disabled={saving}
          >
            {saving ? "Salvando..." : task ? "Atualizar" : "Cadastrar"}
          </button>
          <button
            type="button"
            className="rounded-2xl border border-slate-700 bg-slate-950/80 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
            onClick={onCancel}
          >
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
}
