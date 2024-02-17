import React from "react";
import "./todoItem.css";

const TodoItem = ({ id, name, completed, toggleTask, deleteTask }) => {
  return (
    <div>
      <input
        data-list-item-checkbox
        type="checkbox"
        name="task"
        id="task"
        checked={completed}
        onChange={(e) => toggleTask(id, e.target.checked)}
      />
      <span data-list-item-text>{name}</span>
      <button type="button" onClick={() => deleteTask(id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
