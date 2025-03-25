"use client";

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';
import { motion } from 'framer-motion';

// 支持的图片格式
const ACCEPTED_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/avif',
  'image/bmp',
  'image/tiff'
];

// 最大文件大小 (10MB)
const MAX_FILE_SIZE = 10 * 1024 * 1024;

interface UploadZoneProps {
  onFilesAdded: (files: File[]) => void;
}

export default function UploadZone({ onFilesAdded }: UploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // 过滤出图片文件
    const imageFiles = acceptedFiles.filter(file => file.type.startsWith('image/'));
    if (imageFiles.length > 0) {
      onFilesAdded(imageFiles);
    }
    setIsDragging(false);
  }, [onFilesAdded]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': []
    },
    onDragEnter: () => setIsDragging(true),
    onDragLeave: () => setIsDragging(false)
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <div 
        {...getRootProps()} 
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200 ${
          isDragActive 
            ? 'border-primary bg-primary/5' 
            : 'border-gray-300 hover:border-primary/50 hover:bg-gray-50'
        }`}
      >
        <input {...getInputProps()} />
        
        <div className="flex flex-col items-center justify-center">
          {isDragActive ? (
            <div className="flex flex-col items-center">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4"
              >
                <Upload className="text-primary" size={32} />
              </motion.div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Drop Your Images Here
              </h3>
              <p className="text-gray-500 mb-4">
                Release to upload
              </p>
            </div>
          ) : (
            <>
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Upload className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Drag & Drop Your Images Here
              </h3>
              <p className="text-gray-500 mb-4">
                Or click to browse your files
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">JPG</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">PNG</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">WEBP</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">TIFF</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">BMP</span>
              </div>
              <button className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-full transition-colors shadow-sm">
                Select Images
              </button>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
} 
