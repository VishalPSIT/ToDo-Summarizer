require('dotenv').config();
const { CohereClientV2 } = require('cohere-ai');

const cohere = new CohereClientV2({
  token: process.env.COHERE_API_KEY,
});
async function generateSummary(todos) {
  const prompt = `Summarize and motivate the following to-do list:\n${todos.map(t => "- " + t.text).join("\n")}`;

  try {
    const response = await cohere.chat({
      model: 'command-a-03-2025',
      messages: [{ role: 'user', content: prompt }],
    });

    console.log('Cohere response:', response);
    console.log('Content:', response.message.content);

    const content = response.message.content;
    let summaryText;

    if (Array.isArray(content) && content.length > 0) {
      summaryText = content[0].text;
    } else if (typeof content === 'string') {
      summaryText = content;
    } else {
      summaryText = '';
    }

    return summaryText.trim();

  } catch (error) {
    console.error('Error generating summary:', error);
    throw error;
  }
}

module.exports = { generateSummary };