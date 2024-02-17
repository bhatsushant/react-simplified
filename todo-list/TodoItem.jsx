import React from "react";

const TodoItem = ({ id, name, completed, toggleTask, deleteTask }) => {
  return (
    <div>
      <input
        type="checkbox"
        name="task"
        id="task"
        checked={completed}
        onChange={(e) => toggleTask(id, e.target.checked)}
      />
      <span>{name}</span>
      <button type="button" onClick={() => deleteTask(id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
