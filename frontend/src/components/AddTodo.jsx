import React, { useState } from 'react';

function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (!trimmedText) return;
    onAdd(trimmedText);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-6">
      <input
        type="text"
        placeholder="Add a todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-5 py-3 rounded-r-lg hover:bg-blue-600 transition"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;


