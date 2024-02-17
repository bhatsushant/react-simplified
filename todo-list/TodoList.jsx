import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [taskName, setTaskName] = useState("");
  const [task, setTask] = useState([]);

  const handleNewTask = () => {
    if (taskName === "") return;
    setTask((currentTask) => [
      ...currentTask,
      { name: taskName, completed: false, id: crypto.randomUUID() },
    ]);
  };

  const deleteTask = (taskId) => {
    setTask((currTask) => currTask.filter((t) => t.id !== taskId));
  };

  const toggleTask = (taskId, completed) => {
    setTask((currTask) => {
      return currTask.map((t) => {
        if (t.id === taskId) return { ...t, completed };
        return t;
      });
    });
  };

  return (
    <>
      {task.map((currTask) => (
        <TodoItem
          key={currTask.id}
          {...currTask}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
      <div>
        <label htmlFor="addTask">Add Task: </label>
        <input
          type="text"
          name="addTask"
          id="addTask"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type="button" onClick={handleNewTask}>
          Add Task
        </button>
      </div>
    </>
  );
};

export default TodoList;
