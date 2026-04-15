import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    addTask(text);
    setText("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task..."
      />
      <button type="submit">Add</button>
    </form>
  );
}