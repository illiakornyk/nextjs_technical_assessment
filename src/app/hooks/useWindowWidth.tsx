import { useState, useEffect } from 'react';

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    // Check if window is defined (i.e., we're in the browser)
    if (typeof window !== 'undefined') {
      // Set initial width
      setWindowWidth(window.innerWidth);

      // Handle resize
      const handleResize: () => void = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);

      // Clean up event listener on unmount
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowWidth;
};
