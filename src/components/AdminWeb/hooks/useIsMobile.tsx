import * as React from 'react';

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(
    window.matchMedia('(max-width: 768px)').matches,
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}
