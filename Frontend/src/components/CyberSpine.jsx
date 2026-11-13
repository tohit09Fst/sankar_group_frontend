import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CyberSpine() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(Math.max(window.scrollY / totalHeight, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-3 sm:left-5 xl:left-7 top-0 bottom-0 w-8 z-30 pointer-events-none hidden lg:flex flex-col items-center justify-center py-20 select-none">
      
      {/* Main Vertical Fiber Optic Track */}
      <div className="relative flex-1 w-[2px] bg-white/[0.06] rounded-full overflow-hidden flex flex-col items-center">
        
        {/* Scroll Energy Fill (Neon Red) */}
        <div 
          className="absolute top-0 inset-x-0 bg-gradient-to-b from-red-600 via-rose-500 to-red-400 rounded-full transition-all duration-150 ease-out shadow-[0_0_10px_#ef4444]"
          style={{ height: `${scrollProgress * 100}%` }}
        />

        {/* Traveling Laser Sparks */}
        <motion.div
          animate={{ y: ['-100%', '1000%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          className="absolute -left-[3px] w-2 h-12 bg-gradient-to-b from-transparent via-white to-transparent blur-[1px]"
        />

        {/* Active Scroll Reticle Head */}
        <div 
          className="absolute -left-[3px] w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#ffffff] transition-all duration-150"
          style={{ top: `calc(${scrollProgress * 100}% - 4px)` }}
        />
      </div>
    </div>
  );
}

