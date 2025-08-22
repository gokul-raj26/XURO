// MultiCursor.tsx
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MultiCursor() {
  // Mouse position trackers
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring configs for smooth trailing effect
  const fastSpring = { damping: 20, stiffness: 300 };   // Smallest + fastest
  const mediumSpring = { damping: 40, stiffness: 200 }; // Medium


  // Apply springs for each cursor
  const xFast = useSpring(mouseX, fastSpring);
  const yFast = useSpring(mouseY, fastSpring);

  const xMedium = useSpring(mouseX, mediumSpring);
  const yMedium = useSpring(mouseY, mediumSpring);


 
  // Update mouse/touch position on move
  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    // 🚀 Extra for mobile: Touch support
    const touchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX.set(e.touches[0].clientX);
        mouseY.set(e.touches[0].clientY);
      }
    };
    window.addEventListener("mousemove", move);
     window.addEventListener("touchmove", touchMove, { passive: false });
    return () => window.removeEventListener("mousemove", move);
     window.removeEventListener("touchmove", touchMove); // 👉 Extra
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Fast cursor - smallest ring */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 border-8  border-blue-500 rounded-full 
                   pointer-events-none z-50 ring-glow"
        style={{
          x: xFast,
          y: yFast,
          translateX: "-50%",
          translateY: "-50%",
          color: "#3b82f6", // matches Tailwind blue-500 (for glow color)
        }}
      />

      {/* Medium cursor - medium ring */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 border-[3px] border-purple-400 rounded-full 
                   opacity-70 pointer-events-none z-40 ring-glow"
        style={{
          x: xMedium,
          y: yMedium,
          translateX: "-50%",
          translateY: "-50%",
          color: "#a855f7", // matches Tailwind purple-400
        }}
      />

      
    </>
  );
}
