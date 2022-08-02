import React from "react";

export default function EditForm({
  handleEditFormSubmit,
  handleEditChange,
  currentTodo,
  setIsEditing,
}) {
  return (
    <form onSubmit={handleEditFormSubmit}>
      <h3>Edit Task</h3>
      <textarea
        className="editTask"
        placeholder="edit the task"
        value={currentTodo.taskName}
        onChange={handleEditChange}
      />
      <button className="saveTask" type="submit">
        Save
      </button>
      <button onClick={() => setIsEditing(false)}>Cancel</button>
    </form>
  );
}
