require('dotenv').config();
const axios = require('axios');

async function postToSlack(message) {
  await axios.post(process.env.SLACK_WEBHOOK_URL, {
    text: `📝 *Todo Summary:*\n${message}`,
  });
}

module.exports = { postToSlack };
