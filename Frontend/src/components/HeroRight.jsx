import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import gsap from 'gsap';

export default function HeroRight({ mousePos, onOpenDemo }) {
  const containerRef = useRef(null);
  const shieldRef = useRef(null);
  const [pulseCount, setPulseCount] = useState(0);

  // Smooth 3D tilt springs
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 26, stiffness: 170 };
  const rotateX = useSpring(useTransform(y, [-300, 300], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-300, 300], [-8, 8]), springConfig);

  // GSAP 3D mouse parallax tracking
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const offsetX = e.clientX - centerX;
      const offsetY = e.clientY - centerY;

      x.set(offsetX);
      y.set(offsetY);

      if (shieldRef.current) {
        gsap.to(shieldRef.current, {
          x: offsetX * 0.025,
          y: offsetY * 0.025,
          duration: 0.7,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  // Click on shield creates defense pulse
  const triggerPulse = () => {
    setPulseCount((prev) => prev + 1);
  };

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full lg:w-[52%] xl:w-[54%] h-full z-20 select-none py-2"
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {/* 3D Perspective Wrapper */}
      <motion.div
        ref={shieldRef}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[580px] xl:max-w-[620px] flex flex-col items-center justify-center cursor-pointer group"
        onClick={triggerPulse}
      >
        {/* Ambient Red Glow Behind Shield */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-red-600/40 via-red-500/25 to-transparent blur-[70px] animate-pulse-glow" />
        </div>

        {/* Expanding Defense Pulse Wave on Click */}
        {pulseCount > 0 && (
          <motion.div
            key={pulseCount}
            initial={{ scale: 0.3, opacity: 0.9 }}
            animate={{ scale: 1.6, opacity: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="absolute w-[420px] h-[420px] rounded-full border-2 border-red-500 shadow-[0_0_40px_#ef4444] pointer-events-none"
          />
        )}

        {/* Rotating Subtle Tech Rings (SVG Overlay) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
            viewBox="0 0 500 500"
            className="w-[96%] h-[96%] opacity-30"
          >
            <circle
              cx="250"
              cy="250"
              r="230"
              fill="none"
              stroke="#ef4444"
              strokeWidth="1"
              strokeDasharray="6 14"
            />
          </motion.svg>
        </div>

        {/* Newly Generated Photorealistic 3D Sentinel Shield Artwork */}
        <div className="relative w-full flex items-center justify-center">
          <motion.img
            src="/sentinel-3d-shield.png"
            alt="SENTINEL 3D Cyber Defense Shield"
            className="w-full h-auto max-h-[460px] sm:max-h-[500px] lg:max-h-[530px] object-contain pointer-events-none filter drop-shadow-[0_15px_40px_rgba(239,68,68,0.25)] transition-transform duration-300 group-hover:scale-[1.02]"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* "Hack yourself with AI Red Teaming" Headline Overlay across Pedestal */}
        <motion.div 
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
          className="relative -mt-10 sm:-mt-12 z-30 text-center pointer-events-none px-4"
        >
          <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] font-extrabold tracking-tight text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] leading-tight">
            Hack yourself
            <span className="block text-slate-100 font-bold drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              with AI Red Teaming
            </span>
          </h2>
        </motion.div>

        {/* Floating AI RED TEAMING Status Tag */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          className="absolute -top-2 right-4 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-red-500/40 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.25)] text-[10px] font-mono text-slate-200 pointer-events-none"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
          <span>NEURAL CORE: ONLINE</span>
        </motion.div>

      </motion.div>
    </div>
  );
}
