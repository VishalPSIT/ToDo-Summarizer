const supabase = require('./supabaseClient');

async function getTodos() {
  const { data, error } = await supabase.from('todos').select('*');
  if (error) {
    throw error;
  }
  return data || [];
}

async function addTodo(text) {
  const { data, error } = await supabase
    .from('todos')
    .insert([{ text }])
    .select();

  if (error) throw error;
  return data[0];
}

async function deleteTodo(id) {
  const { error } = await supabase
    .from('todos')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

module.exports = { getTodos, addTodo, deleteTodo };
