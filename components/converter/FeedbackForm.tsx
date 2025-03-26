"use client";

import { useState } from 'react';
import { ExternalLink, Send, ThumbsUp } from 'lucide-react';

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加发送反馈的逻辑
    console.log('Feedback submitted:', feedback);
    setSubmitted(true);
    setFeedback('');
  };
  
  if (submitted) {
    return (
      <div className="shadow-md rounded-lg p-4 sm:p-6 border border-gray-100 text-center">
        <div className="flex justify-center mb-4">
          <ThumbsUp className="text-primary" size={48} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
        <p className="text-gray-600">Your feedback has been submitted successfully.</p>
      </div>
    );
  }
  
  return (
    <div className="shadow-md rounded-lg p-4 sm:p-6 border border-gray-100">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">
            Share your thoughts or suggestions
          </label>
          <textarea
            id="feedback"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="How can we improve our service?"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-md transition-colors"
          >
            <Send size={16} />
            Submit Feedback
          </button>
        </div>
      </form>
      
      <div className="mt-4 text-center">
        <a 
          href="https://docs.google.com/forms/d/1AUcDnq8zfNox4EfFa-liRF3ECk1O-OYn-2fjQnEGmVE/viewform?embedded=true" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-primary hover:underline text-sm"
        >
          <ExternalLink size={16} />
          Or use our detailed feedback form
        </a>
      </div>
    </div>
  );
} 