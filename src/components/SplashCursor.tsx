// SplashCursor.tsx
import React, { useEffect, useRef } from "react";
import { createFluid } from "../utils/fluid"; // fluid.ts la irukum

const SplashCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const fluid = createFluid(canvas);

    // Handle screen resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    // ✅ For Desktop Mouse
    const handleMouseMove = (e: MouseEvent) => {
      fluid.splash(e.clientX, e.clientY);
    };

    // ✅ For Mobile Touch (Extra)
    const handleTouchMove = (e: TouchEvent) => {
      // e.touches = list of fingers on screen
      // We’ll take the first finger only
      const touch = e.touches[0];
      if (touch) {
        fluid.splash(touch.clientX, touch.clientY);
      }
    };
    // Add event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove); // Desktop
    window.addEventListener("touchmove", handleTouchMove); // Mobile
  

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      fluid.update();
      fluid.draw(ctx);
      requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 pointer-events-none"
    />
  );
};

export default SplashCursor;
