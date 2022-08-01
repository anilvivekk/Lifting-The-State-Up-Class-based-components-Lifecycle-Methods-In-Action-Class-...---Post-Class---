import React, { useState } from "react";
import "./../styles/App.css";
import Tasks from "./Tasks";

function App() {
  const [newTask, setNewTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      taskName: newTask,
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  const editTask = (id)=>{

  }

  return (
    <div id="main">
      <h1>Todo App</h1>
      <textarea id="task" placeholder="type task" onChange={handleChange} />
      <button id="btn" onClick={addTask}>
        Add
      </button>
      <div >
        {todoList.map((task) => {
          return (
            <Tasks
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
			  editTask={editTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
