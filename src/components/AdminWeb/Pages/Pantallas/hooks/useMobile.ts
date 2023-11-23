import { useEffect, useState } from "react";

export default function useMobile() {
    const [isMobile, setIsMobile] = useState(
        window.matchMedia('(max-width: 768px)').matches,
      );
    
      useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
    
        const handleResize = () => {
          setIsMobile(mediaQuery.matches);
        };
    
        mediaQuery.addEventListener('change', handleResize);
    
        return () => {
          mediaQuery.removeEventListener('change', handleResize);
        };
      }, []);

    return { isMobile }
}
