// src/components/ToDoList.jsx
import React from "react";
import ToDoItem from "./ToDoItem";
import "../App.css"


const ToDoList = ({
  todos,
  toggleComplete,
  deleteTodo,
  startEditing,
  editId,
  editText,
  setEditText,
  saveEdit,
}) => {
  return (
    <ul className="mt-6">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          startEditing={startEditing}
          editId={editId}
          editText={editText}
          setEditText={setEditText}
          saveEdit={saveEdit}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
