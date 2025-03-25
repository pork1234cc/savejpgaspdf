"use client";

import { Plus, Trash2, FileOutput, Loader } from 'lucide-react';
import { motion } from 'framer-motion';

interface ConversionControlsProps {
  imageCount: number;
  onAddMoreImages: () => void;
  onClearImages: () => void;
  onConvertToPdf: () => void;
  converting: boolean;
}

export default function ConversionControls({
  imageCount,
  onAddMoreImages,
  onClearImages,
  onConvertToPdf,
  converting
}: ConversionControlsProps) {
  return (
    <div className="shadow-md rounded-lg p-6 border border-gray-100">
      <div className="flex flex-wrap gap-4">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={onAddMoreImages}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-md transition-colors"
          disabled={converting}
        >
          <Plus size={18} />
          Add More Images
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={onClearImages}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-md transition-colors"
          disabled={converting || imageCount === 0}
        >
          <Trash2 size={18} />
          Clear All
        </motion.button>
      </div>
      
      <div className="mt-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onConvertToPdf}
          className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-4 px-6 rounded-md transition-colors shadow-sm"
          disabled={converting || imageCount === 0}
        >
          {converting ? (
            <>
              <Loader size={20} className="animate-spin" />
              Converting...
            </>
          ) : (
            <>
              <FileOutput size={20} />
              Convert to PDF
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
} 
