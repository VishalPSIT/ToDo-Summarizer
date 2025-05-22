import React from 'react';
import { MdDelete } from 'react-icons/md';

function TodoItem({ todo, onDelete }) {
  return (
    <div className="flex justify-between items-center p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white">
      <span className="text-gray-900 font-medium text-lg">{todo.text}</span>
      <button
        onClick={() => onDelete(todo.id)}
        className="p-2 rounded-full hover:bg-red-100 transition-colors"
        aria-label="Delete todo"
      >
        <MdDelete className="h-6 w-6 text-red-500 hover:text-red-700" />
      </button>
    </div>
  );
}

export default TodoItem;
