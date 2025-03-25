"use client";

import { useEffect, useState } from 'react';
import { X, GripVertical, MoveUp, MoveDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface ImageListProps {
  images: File[];
  onRemoveImage: (index: number) => void;
  onReorderImages: (sourceIndex: number, destinationIndex: number) => void;
}

export default function ImageList({ 
  images, 
  onRemoveImage, 
  onReorderImages 
}: ImageListProps) {
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  // 解决 hydration 问题
  useEffect(() => {
    setMounted(true);
  }, []);

  // 生成预览URL
  useEffect(() => {
    const urls = images.map(image => URL.createObjectURL(image));
    setPreviewUrls(urls);
    
    // 清理函数
    return () => {
      urls.forEach(url => URL.revokeObjectURL(url));
    };
  }, [images]);

  // 移动图片
  const moveImage = (index: number, direction: 'up' | 'down') => {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex >= 0 && newIndex < images.length) {
      onReorderImages(index, newIndex);
    }
  };

  return (
    <div className="shadow-md rounded-lg p-6 border border-gray-100">
      <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
        Images ({images.length})
        {mounted && images.length > 1 && (
          <span className="ml-2 text-xs text-gray-500 font-normal">
            (Use arrows to reorder)
          </span>
        )}
      </h3>
      
      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
        {images.map((image, index) => (
          <motion.div
            key={`${image.name}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex items-center bg-gray-50 rounded-md p-2 border border-gray-200"
          >
            <div className="mr-2 text-gray-400">
              <GripVertical size={20} />
            </div>
            
            <div className="h-12 w-12 relative rounded overflow-hidden mr-3 flex-shrink-0">
              {previewUrls[index] && (
                <img 
                  src={previewUrls[index]} 
                  alt={`Preview ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            
            <div className="flex-grow min-w-0">
              <p className="text-sm font-medium truncate text-gray-700">{image.name}</p>
              <p className="text-xs text-gray-500">
                {(image.size / 1024).toFixed(1)} KB
              </p>
            </div>
            
            {mounted && images.length > 1 && (
              <div className="flex flex-col mr-2">
                <button
                  onClick={() => moveImage(index, 'up')}
                  disabled={index === 0}
                  className={`p-1 ${index === 0 ? 'text-gray-300' : 'text-gray-500 hover:text-primary'} transition-colors`}
                  aria-label="Move up"
                >
                  <MoveUp size={16} />
                </button>
                <button
                  onClick={() => moveImage(index, 'down')}
                  disabled={index === images.length - 1}
                  className={`p-1 ${index === images.length - 1 ? 'text-gray-300' : 'text-gray-500 hover:text-primary'} transition-colors`}
                  aria-label="Move down"
                >
                  <MoveDown size={16} />
                </button>
              </div>
            )}
            
            <button
              onClick={() => onRemoveImage(index)}
              className="ml-2 p-1 text-gray-500 hover:text-red-500 transition-colors"
              aria-label="Remove image"
            >
              <X size={18} />
            </button>
          </motion.div>
        ))}
      </div>
      
      {images.length === 0 && (
        <p className="text-gray-500 text-center py-4">No images added yet</p>
      )}
    </div>
  );
} 
