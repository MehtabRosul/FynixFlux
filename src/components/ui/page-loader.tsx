'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader } from './loader';

interface PageLoaderProps {
  message?: string;
  showProgress?: boolean;
  progress?: number;
}

export function PageLoader({ 
  message = "Loading...", 
  showProgress = false, 
  progress = 0 
}: PageLoaderProps) {
  // Prevent body scroll during loading
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="absolute inset-0 z-50 bg-background flex flex-col items-center justify-center space-y-6" style={{ position: 'fixed' }}>
      <Loader />
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center space-y-2"
      >
        <p className="text-muted-foreground">{message}</p>
        
        {showProgress && (
          <div className="w-48 h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
}
