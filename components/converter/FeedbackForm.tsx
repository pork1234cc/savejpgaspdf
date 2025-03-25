"use client";

import { ExternalLink } from 'lucide-react';

export default function FeedbackForm() {
  // 使用您的 Google 表单嵌入链接
  const googleFormUrl = "https://docs.google.com/forms/d/1AUcDnq8zfNox4EfFa-liRF3ECk1O-OYn-2fjQnEGmVE/viewform?embedded=true";
  
  return (
    <div className="shadow-md rounded-lg p-4 sm:p-6 border border-gray-100">
      
      
      
      
    
      
      <div className="mt-3 sm:mt-4 text-center">
        <a 
          href={googleFormUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-primary hover:underline text-sm sm:text-base"
        >
          <ExternalLink size={16} />
          Open form in new window
        </a>
      </div>
    </div>
  );
} 