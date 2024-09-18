import React from "react";
import "../App.css"

const ToDoItem = ({
  todo,
  toggleComplete,
  deleteTodo,
  startEditing,
  editId,
  editText,
  setEditText,
  saveEdit,
}) => {
  return (
    <li className="flex items-center justify-between mt-3 bg-white p-3 rounded-lg shadow">
      {editId === todo.id ? (
        <div>
          <input
            className="border p-1"
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button
            className="ml-2 text-green-600"
            onClick={saveEdit}
          >
            Save
          </button>
        </div>
      ) : (
        <>
          <div>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            <span
              className={`italic ml-2 ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.task}
            </span>
          </div>
          <div>
            <button
              className="text-yellow-500"
              onClick={() => startEditing(todo.id, todo.task)}
            >
              Edit
            </button>
            <button
              className="ml-2 text-red-500"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default ToDoItem;
