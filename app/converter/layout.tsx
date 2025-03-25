// 转换器布局 

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ConverterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link 
          href="/" 
          className="inline-flex items-center text-primary hover:text-primary-light transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>
      </div>
      {children}
    </div>
  );
} 
