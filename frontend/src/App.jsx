import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import SummaryButton from './components/SummaryButton';
import { getTodos, addTodo, deleteTodo } from './api';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  const handleAdd = async (text) => {
    await addTodo(text);
    loadTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  return (
    <div className="max-w-180 mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Todo Summary Assignment</h1>
      <AddTodo onAdd={handleAdd} />
      <TodoList todos={todos} onDelete={handleDelete} />
      <div className="mt-6 flex justify-center">
        <SummaryButton />
      </div>
    </div>
  );
}

export default App;
