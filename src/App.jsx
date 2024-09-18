// src/App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
// import "./App.css"

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [error, setError] = useState(""); // State to hold the error message
  // Add a new to-do item
  const addTodo = () => {
    const trimmedTask = newTask.trim(); // Remove leading/trailing spaces

    if (!trimmedTask) {
      setError("Task is required"); // Show error if task is empty
      return;
    }

    // Check for duplicate tasks (case-insensitive)
    const isDuplicate = todos.some(
      (todo) => todo.task.toLowerCase() === trimmedTask.toLowerCase()
    );

    if (isDuplicate) {
      setError("Task already exists"); // Show error if task is duplicate
      return;
    }

    // If valid, add the task
    setTodos([
      ...todos,
      { id: Date.now(), task: trimmedTask, completed: false },
    ]);
    setNewTask("");
    setError(""); // Clear error
  };

  // const addTodo = () => {
  //   if (!newTask) return; // Do not add empty tasks
  //   setTodos([...todos, { id: Date.now(), task: newTask, completed: false }]);
  //   setNewTask("");
  // };

  // Mark a to-do item as completed
  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Delete a to-do item
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Edit a to-do item
  const startEditing = (id, task) => {
    setEditId(id);
    setEditText(task);
  };

  const saveEdit = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === editId ? { ...todo, task: editText } : todo
      )
    );
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <Header />
      <div className="mt-6">
        <input
          type="text"
          className={`p-2 border ${
            error ? "border-red-500" : "border-gray-400"
          } rounded w-full`}
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        {error && <p className="text-red-500 mt-1">{error}</p>}{" "}
        {/* Error message */}
        <button
          onClick={addTodo}
          className="mt-2 p-2 bg-blue-500 text-white rounded"
        >
          Add Task
        </button>
      </div>
      <ToDoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        startEditing={startEditing}
        editId={editId}
        editText={editText}
        setEditText={setEditText}
        saveEdit={saveEdit}
      />
    </div>
  );
};

export default App;
