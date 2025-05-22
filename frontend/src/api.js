import axios from 'axios';

const API_BASE = 'http://localhost:3000';

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
