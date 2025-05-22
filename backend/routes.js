const express = require('express');
const { getTodos, addTodo, deleteTodo } = require('./db');
const { generateSummary } = require('./openai');
const { postToSlack } = require('./slack');
const router = express.Router();

router.get('/todos', async (req, res) => {
  try {
    const todos = await getTodos();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
});

router.post('/todos', async (req, res) => {
  try {
    const todo = await addTodo(req.body.text);
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/todos/:id', async (req, res) => {
  try {
    await deleteTodo(parseInt(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// router.post('/summarize', async (req, res) => {
//   try {
//     const todos = getTodos().filter(t => !t.done);
//     const summary = await generateSummary(todos);
//     await postToSlack(summary);
//     res.json({ success: true, message: 'Summary posted to Slack', summary });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Failed to summarize or send' });
//   }
// });
router.post('/summarize', async (req, res) => {
  try {
    const todos = await getTodos(); 
    const pendingTodos = todos.filter(t => !t.done);

    const summary = await generateSummary(pendingTodos);
    await postToSlack(summary);

    res.json({ success: true, message: 'Summary posted to Slack', summary });
  } catch (error) {
    console.error("Summarize route failed:", error);
    res.status(500).json({ success: false, message: 'Failed to summarize or send' });
  }
});



module.exports = router;
