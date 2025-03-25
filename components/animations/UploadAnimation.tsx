"use client";

import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';

export default function UploadAnimation() {
  return (
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
  );
} 
