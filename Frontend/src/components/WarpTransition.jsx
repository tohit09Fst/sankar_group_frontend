import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Compass } from 'lucide-react';

export default function WarpTransition({ isWarping, targetLabel }) {
  return (
    <AnimatePresence>
      {isWarping && (
        <motion.div
          key="warp-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[45] pointer-events-none flex items-center justify-center overflow-hidden"
        >
          {/* 1. Chromatic Dark Vignette Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[3px]" />

          {/* 2. Hyperspace Laser Stretch Streaks (Vertical Warp Lines) */}
          <div className="absolute inset-0 flex justify-around pointer-events-none">
            {[...Array(14)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: '-100%', opacity: 0, scaleY: 0.5 }}
                animate={{
                  y: ['-100%', '200%'],
                  opacity: [0, 0.9, 0],
                  scaleY: [1, 2.5, 1],
                }}
                transition={{
                  duration: 0.45,
                  repeat: 1,
                  delay: i * 0.02,
                  ease: 'easeInOut',
                }}
                className="w-[1.5px] h-64 bg-gradient-to-b from-transparent via-red-500 to-transparent shadow-[0_0_12px_#ef4444]"
                style={{
                  left: `${(i / 14) * 100}%`,
                }}
              />
            ))}
          </div>

          {/* 3. Center Holographic Warp Reticle */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0, filter: 'blur(8px)' }}
            animate={{ scale: [0.7, 1.08, 1], opacity: 1, filter: 'blur(0px)' }}
            exit={{ scale: 1.3, opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center select-none"
          >
            {/* Outer Expanding Laser Pulse Ring */}
            <motion.div
              animate={{ scale: [1, 1.8], opacity: [0.8, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, ease: 'easeOut' }}
              className="absolute -inset-6 rounded-full border border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.7)]"
            />

            {/* Glowing Capsule Pill */}
            <div className="relative px-6 py-3 rounded-2xl bg-[#0a0f18]/95 border-2 border-red-500 shadow-[0_0_35px_rgba(239,68,68,0.7)] flex items-center gap-3 backdrop-blur-xl">
              <div className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/50 flex items-center justify-center text-red-400">
                <Zap className="w-4 h-4 animate-bounce" />
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-red-400 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                  HYPERSPACE WARP ENGAGED
                </span>

                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-white font-sans text-sm sm:text-base font-extrabold tracking-wide">
                    REROUTING TO
                  </span>
                  <span className="px-2 py-0.5 rounded bg-red-500 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_10px_#ef4444]">
                    {targetLabel || 'DESTINATION'}
                  </span>
                </div>
              </div>
            </div>

            {/* Velocity Subtitle */}
            <div className="mt-3 flex items-center gap-2 font-mono text-[10px] text-slate-300 bg-black/60 px-3 py-1 rounded-full border border-white/10">
              <Compass className="w-3 h-3 text-red-400 animate-spin" />
              <span>TRANSIT PROTOCOL // QUANTUM VECTOR LOCK</span>
            </div>
          </motion.div>

          {/* 4. Horizontal Optical Flare Sweep */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: [0, 1.5, 0], opacity: [0, 0.8, 0] }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="absolute inset-x-0 top-1/2 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_20px_#ffffff]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

