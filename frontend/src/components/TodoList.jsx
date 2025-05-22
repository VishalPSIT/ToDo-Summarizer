import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDelete }) {
  if (todos.length === 0)
    return (
      <p className="text-center text-gray-500 italic text-lg mt-10">
        No todos yet!
      </p>
    );

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 rounded-xl shadow-md flex flex-col space-y-4 font-sans">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TodoList;

