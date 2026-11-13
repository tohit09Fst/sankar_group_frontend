import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function HeroLeft({ onOpenDemo, onOpenPlatform }) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle pulse on Next-Gen badge glow
      gsap.to('.badge-pulse', {
        boxShadow: '0 0 22px rgba(239, 68, 68, 0.7), inset 0 0 10px rgba(239, 68, 68, 0.3)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Neon aura pulse on primary button
      gsap.to('.cta-red-aura', {
        boxShadow: '0 0 32px rgba(239, 68, 68, 0.85), 0 0 12px rgba(255, 90, 90, 0.55)',
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col justify-center items-start w-full lg:w-[48%] xl:w-[46%] z-20 select-none">
      
      {/* 1. NEXT-GEN CYBER DEFENSE Badge */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-2.5 sm:mb-3"
      >
        <div className="badge-pulse inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-red-500/80 bg-red-950/30 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.45)]">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping opacity-85" />
          <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase text-red-400">
            NEXT-GEN CYBER DEFENSE
          </span>
        </div>
      </motion.div>

      {/* 2. Main Headline */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-0.5"
      >
        <h1 className="font-sans font-extrabold tracking-[-0.035em] text-white">
          <span className="block text-3xl sm:text-4xl md:text-[42px] lg:text-[44px] xl:text-[48px] leading-[1.08] text-white/95">
            SENTINEL —
          </span>
          <span className="block text-3xl sm:text-4xl md:text-[42px] lg:text-[44px] xl:text-[48px] leading-[1.08] text-white">
            Your Digital World.
          </span>
          <span className="block text-3xl sm:text-4xl md:text-[42px] lg:text-[44px] xl:text-[48px] leading-[1.08] text-white">
            Under Control.
          </span>
        </h1>
      </motion.div>

      {/* 3. Subtitle Description */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="mt-3 sm:mt-3.5 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-[430px] font-normal"
      >
        Protect your business with intelligent AI-powered security. Detect threats, 
        monitor your infrastructure, and stay ahead of cyber risks with one powerful platform.
      </motion.p>

      {/* 4. Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 sm:mt-5 flex flex-wrap items-center gap-3 sm:gap-3.5"
      >
        {/* Explore Platform (Red Neon Pill Button matching reference image) */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onOpenPlatform('Explore Platform')}
          className="cta-red-aura group relative px-6 py-2.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white glass-button-red flex items-center justify-center cursor-pointer select-none"
        >
          <span>Explore Platform</span>
        </motion.button>

        {/* Watch Demo (Translucent Dark Pill matching reference image) */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpenDemo}
          className="group relative px-6 py-2.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium text-white/90 glass-button-dark flex items-center justify-center cursor-pointer select-none"
        >
          <span>Watch Demo</span>
        </motion.button>
      </motion.div>

      {/* 5. Metrics & Trust Row */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 sm:mt-7 w-full"
      >
        {/* Trust Header */}
        <div className="text-[11px] font-mono tracking-wider text-slate-400 mb-1">
          Trust
        </div>

        {/* 3 Metric Columns */}
        <div className="grid grid-cols-3 gap-3 sm:gap-5 pt-0.5 max-w-[450px]">
          {/* Stat 1: 99.9% */}
          <div className="space-y-0.5">
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans">
              99.9%
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-400 leading-tight">
              Threat Detection Accuracy
            </div>
          </div>

          {/* Stat 2: 24/7 */}
          <div className="space-y-0.5">
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans">
              24/7
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-400 leading-tight">
              Security Monitoring
            </div>
          </div>

          {/* Stat 3: 10M+ */}
          <div className="space-y-0.5">
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans">
              10M+
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-400 leading-tight">
              Threat Signals Analyzed
            </div>
          </div>
        </div>

        {/* Footnote */}
        <div className="mt-2 text-[10px] text-slate-500 font-mono tracking-tight">
          *Demo metrics
        </div>
      </motion.div>

    </div>
  );
}
