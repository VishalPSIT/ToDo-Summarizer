import axios from 'axios';

const API_BASE = 'https://todo-summarizer-7xv7.onrender.com';

export async function getTodos() {
  const res = await axios.get(`${API_BASE}/todos`);
  return res.data;
}

export async function addTodo(text) {
  const res = await axios.post(`${API_BASE}/todos`, { text });
  return res.data;
}

export async function deleteTodo(id) {
  await axios.delete(`${API_BASE}/todos/${id}`);
}

export async function summarizeTodos() {
  const res = await axios.post(`${API_BASE}/summarize`);
  return res.data;
}
