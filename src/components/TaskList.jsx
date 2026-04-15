import TaskItem from "./TaskItem";

export default function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <div className="list">
      {tasks.length === 0 ? (
        <p className="empty">No tasks yet. Add one!</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))
      )}
    </div>
  );
}