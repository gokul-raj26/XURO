import { useState, useEffect } from 'react';
import { CursorState } from '../types';

export const useCursor = () => {
  const [cursor, setCursor] = useState<Omit<CursorState, "x" | "y">>({
    isHovering: false,
    isClicking: false,
  });

  useEffect(() => {
    const handleDown = () => {
      setCursor(prev => ({ ...prev, isClicking: true }));
    };

    const handleUp = () => {
      setCursor(prev => ({ ...prev, isClicking: false }));
    };

    // 🖱️ Mouse events
    document.addEventListener('mousedown', handleDown);
    document.addEventListener('mouseup', handleUp);

    // 📱 Touch events
    document.addEventListener('touchstart', handleDown);
    document.addEventListener('touchend', handleUp);

    return () => {
      document.removeEventListener('mousedown', handleDown);
      document.removeEventListener('mouseup', handleUp);
      document.removeEventListener('touchstart', handleDown);
      document.removeEventListener('touchend', handleUp);
    };
  }, []);

  const setHovering = (isHovering: boolean) => {
    setCursor(prev => ({ ...prev, isHovering }));
  };

  return { cursor, setHovering };
};
