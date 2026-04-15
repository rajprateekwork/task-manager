export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className="task">
      <span
        className={task.done ? "done" : ""}
        onClick={() => toggleTask(task.id)}
      >
        {task.text}
      </span>

      <button onClick={() => deleteTask(task.id)}>❌</button>
    </div>
  );
}