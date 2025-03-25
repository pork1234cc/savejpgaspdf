"use client";

import { useEffect, useRef, useState } from 'react';
import { FileText, Download, Loader, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

interface PDFPreviewProps {
  pdfUrl: string | null;
  imageCount: number;
  converting: boolean;
}

export default function PDFPreview({ 
  pdfUrl, 
  imageCount, 
  converting 
}: PDFPreviewProps) {
  const [showPreview, setShowPreview] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);

  // 当PDF URL变化时，更新iframe
  useEffect(() => {
    if (pdfUrl && iframeRef.current) {
      iframeRef.current.src = pdfUrl;
    }
  }, [pdfUrl]);

  // 清理函数：当组件卸载时，释放Blob URL
  useEffect(() => {
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [pdfUrl]);

  // 处理下载
  const handleDownload = () => {
    if (!pdfUrl) return;
    
    // 创建临时链接并触发下载
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `converted-images-${new Date().toISOString().slice(0, 10)}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (converting) {
    return (
      <div className="shadow-md rounded-lg p-6 border border-gray-100 h-full flex flex-col items-center justify-center py-12">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mb-4 text-primary"
        >
          <Loader size={48} />
        </motion.div>
        <h3 className="text-lg font-medium mb-2 text-gray-700">Converting your images...</h3>
        <p className="text-gray-500 text-center">
          This may take a moment depending on the number and size of your images.
        </p>
      </div>
    );
  }

  if (!pdfUrl) {
    return (
      <div className="shadow-md rounded-lg p-6 border border-gray-100 h-full flex flex-col items-center justify-center py-12">
        <div className="mb-4 text-gray-400">
          <FileText size={48} />
        </div>
        <h3 className="text-lg font-medium mb-2 text-gray-700">PDF Preview</h3>
        <p className="text-gray-500 text-center">
          {imageCount > 0 
            ? "Click 'Convert to PDF' to generate your document" 
            : "Add images to generate a PDF"}
        </p>
      </div>
    );
  }

  return (
    <div className="shadow-md rounded-lg p-6 border border-gray-100 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-primary">
          Your PDF is Ready!
        </h3>
        <button 
          onClick={() => setShowPreview(!showPreview)}
          className="text-gray-500 hover:text-primary transition-colors"
          aria-label={showPreview ? "Hide preview" : "Show preview"}
        >
          {showPreview ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
      
      {showPreview ? (
        <div className="flex-grow bg-gray-50 rounded-md mb-4 overflow-hidden">
          <iframe 
            ref={iframeRef}
            src={pdfUrl}
            className="w-full h-full border-0"
            title="PDF Preview"
          />
        </div>
      ) : (
        <div className="flex-grow flex flex-col items-center justify-center py-6 bg-gray-50 rounded-md mb-4">
          <FileText size={64} className="text-primary mb-4" />
          <p className="text-gray-700 text-center">
            {imageCount} {imageCount === 1 ? 'image' : 'images'} converted successfully
          </p>
        </div>
      )}
      
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleDownload}
        className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-md transition-colors w-full shadow-sm"
      >
        <Download size={18} />
        Download PDF
      </motion.button>
    </div>
  );
} 
