import React from "react";

export default function (props) {
  
  return (
    <div
      style={{
        textDecoration: props.completed
          ? "line-through solid rgb(0, 0, 0)"
          : "none",
      }}
      className="list"
    >
      <h3>{props.taskName}</h3>
      <button className="edit" onClick={() => props.editTask(props.task)}>Edit</button>
      <button className="delete" onClick={() => props.deleteTask(props.id)}>Delete</button>
      <button onClick={() => props.completeTask(props.id)}>Done</button>
      
    </div>
  );
}
