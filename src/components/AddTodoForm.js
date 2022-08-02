import React from "react";

export default function ({ newTask, handleChange, addTask }) {
  return (
    <div>
      <h1>Todo App</h1>
      <textarea
        id="task"
        value={newTask}
        placeholder="type task"
        onChange={handleChange}
      />
      <button
        id="btn"
        onClick={addTask}
        disabled={newTask === "" ? true : false}
      >
        Add
      </button>
    </div>
  );
}
