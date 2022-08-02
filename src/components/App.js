import React, { useState } from "react";
import "./../styles/App.css";
import AddTodoForm from "./AddTodoForm";
import EditForm from "./EditForm";
import Tasks from "./Tasks";

function App() {
  const [newTask, setNewTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      taskName: newTask,
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      completed: false,
    };
    setTodoList([...todoList, task]), setNewTask("");
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

  const editTask = (task) => {
    setIsEditing(true);
	setCurrentTodo({...task})
	
  };

  const handleEditChange = (e)=>{
	setCurrentTodo({...currentTodo, taskName: e.target.value});
	
  }

  const handleEditFormSubmit = (e)=>{
	e.preventDefault();
	handleSave(currentTodo.id, currentTodo);
  }

  const handleSave = (id, updataedTodo)=>{
	const updatedItem = todoList.map((todo)=>{
		return todo.id == id ? updataedTodo : todo;
	});
	setIsEditing(false);
	setTodoList(updatedItem);
  }

  return (
    <div id="main">
      {isEditing ? (
        <EditForm
		currentTodo = {currentTodo}
		handleEditChange = {handleEditChange}
		handleEditFormSubmit = {handleEditFormSubmit}
		setIsEditing={setIsEditing}
		/>
      ) : (
        <AddTodoForm
          newTask={newTask}
          addTask={addTask}
          handleChange={handleChange}
        />
      )}
      <div>
        {todoList.map((task) => {
          return (
            <Tasks
              taskName={task.taskName}
              id={task.id}
			  task = {task}
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
