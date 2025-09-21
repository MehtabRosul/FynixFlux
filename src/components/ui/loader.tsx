
import { motion } from 'framer-motion';

export function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div 
        className="w-12 h-12 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-lg flex items-center justify-center shadow-lg"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span className="text-white font-bold text-lg">F</span>
      </motion.div>
      <motion.p 
        className="text-muted-foreground"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Loading...
      </motion.p>
    </div>
  );
}
