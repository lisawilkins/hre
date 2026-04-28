import { useState, useEffect } from 'react';

export function useBreakpoint() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return {
    isNarrow: width < 600,
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isTabletDown: width < 1024,
    isDesktop: width >= 1024 && width < 1280,
    isDesktopUp: width >= 1024,
    isWide: width >= 1280,
  };
}
