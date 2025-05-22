import React, { useState } from 'react';
import { summarizeTodos } from '../api';

function SummaryButton() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState('');

  const handleClick = async () => {
    setStatus('');
    setSummary('');
    setLoading(true);
    setStatus('Summarizing and sending to Slack...');

    try {
      const res = await summarizeTodos();

      if (res.success) {
        setSummary(res.summary || 'No summary returned.');
        setStatus('Summary sent to Slack successfully.');
      } else {
        setStatus('Failed to send summary to Slack.');
      }
    } catch (err) {
      console.error(err);
      setStatus('An error occurred while sending the summary.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 text-center">
      <button
        onClick={handleClick}
        disabled={loading}
        className={`px-6 py-3 rounded-lg font-semibold transition
          ${
            loading
              ? 'bg-gray-400 cursor-not-allowed text-gray-700'
              : 'bg-purple-600 hover:bg-purple-700 text-white'
          }`}
      >
        Summarize & Send to Slack
      </button>

      {status && (
        <p
          className={`mt-3 text-sm text-gray-800`}
          role="alert"
        >
          {status}
        </p>
      )}

      {summary && (
        <div className="mt-4 p-4 border border-gray-300 rounded bg-gray-50 text-left text-gray-900 max-h-48 overflow-auto whitespace-pre-wrap">
          {summary}
        </div>
      )}
    </div>
  );
}

export default SummaryButton;
