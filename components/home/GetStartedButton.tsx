"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GetStartedButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Link 
        href="/converter" 
        className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-full inline-flex items-center space-x-2 text-lg transition-colors shadow-md"
      >
        <span>Get started</span>
        <ArrowRight size={20} />
      </Link>
    </motion.div>
  );
} 