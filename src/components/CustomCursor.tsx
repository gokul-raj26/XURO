import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../hooks/useCursor';

const CustomCursor: React.FC = () => {
  const { cursor } = useCursor();

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursor.x - 8,
          y: cursor.y - 8,
        }}
        animate={{
          scale: cursor.isClicking ? 0.8 : cursor.isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        <div className="w-full h-full bg-white rounded-full" />
      </motion.div>

      {/* Trailing cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-40"
        style={{
          x: cursor.x - 16,
          y: cursor.y - 16,
        }}
        animate={{
          scale: cursor.isHovering ? 1.2 : 1,
          opacity: cursor.isHovering ? 0.6 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <div className="w-full h-full border-2 border-blue-400 rounded-full blur-sm" />
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-30"
        style={{
          x: cursor.x - 24,
          y: cursor.y - 24,
        }}
        animate={{
          scale: cursor.isHovering ? 1.5 : 1,
          opacity: cursor.isHovering ? 0.4 : 0.1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg" />
      </motion.div>
    </>
  );
};

export default CustomCursor;