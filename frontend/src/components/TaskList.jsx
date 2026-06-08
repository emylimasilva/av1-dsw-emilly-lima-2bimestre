export default function TaskList({
  tasks,
  loading,
  error,
  onEdit,
  onToggle,
  onDelete,
}) {
  if (loading) {
    return <p className="text-slate-300">Carregando tarefas...</p>;
  }

  if (error) {
    return <p className="text-rose-400">{error}</p>;
  }

  if (tasks.length === 0) {
    return <p className="text-slate-300">Nenhuma tarefa cadastrada ainda.</p>;
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <article
          key={task.id}
          className="rounded-3xl border border-slate-700 bg-slate-900/80 p-5 shadow-xl shadow-slate-950/20"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-50">{task.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {task.description || "Sem descrição"}
              </p>
            </div>
            <span
              className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
                task.completed
                  ? "bg-emerald-500/15 text-emerald-300"
                  : "bg-slate-700/80 text-slate-200"
              }`}
            >
              {task.completed ? "Concluída" : "Pendente"}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              className="rounded-2xl bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-700"
              onClick={() => onEdit(task)}
            >
              Editar
            </button>
            <button
              className="rounded-2xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              onClick={() => onToggle(task)}
            >
              {task.completed ? "Marcar pendente" : "Marcar concluída"}
            </button>
            <button
              className="rounded-2xl bg-rose-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-rose-400"
              onClick={() => onDelete(task.id)}
            >
              Excluir
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
