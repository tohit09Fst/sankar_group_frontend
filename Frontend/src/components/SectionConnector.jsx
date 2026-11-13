import React from 'react';
import { motion } from 'framer-motion';

export default function SectionConnector({ nodeNum, nodeName, subtext }) {
  return (
    <div className="relative w-full py-8 sm:py-12 flex flex-col items-center justify-center overflow-hidden pointer-events-none select-none z-20">
      
      {/* Top Vertical Laser Line */}
      <div className="relative w-[2px] h-10 sm:h-14 bg-gradient-to-b from-transparent via-red-500/50 to-red-500">
        {/* Animated Traveling Data Packet */}
        <motion.div
          animate={{ y: [0, 48], opacity: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-[3px] w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]"
        />
      </div>

      {/* Central Cyber Node Beacon */}
      <div className="relative my-1 flex items-center gap-3">
        {/* Left Circuit Branch */}
        <div className="hidden sm:flex items-center">
          <div className="w-12 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-red-500/40" />
          <div className="w-1 h-1 rounded-full bg-red-400" />
        </div>

        {/* Central Glowing Capsule Pill */}
        <div className="relative px-3.5 py-1.5 rounded-full bg-[#0a0f18]/90 border border-red-500/50 backdrop-blur-md shadow-[0_0_20px_rgba(239,68,68,0.35)] flex items-center gap-2">
          {/* Pulsing Core Indicator */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>

          {/* Node Number */}
          <span className="font-mono text-[10px] font-bold text-red-400 tracking-wider">
            {nodeNum}
          </span>

          {/* Divider */}
          <span className="text-white/20 text-xs">|</span>

          {/* Node Name */}
          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-slate-300 font-medium">
            {nodeName}
          </span>

          {subtext && (
            <span className="hidden md:inline font-mono text-[8px] text-slate-500 uppercase tracking-widest pl-1">
              // {subtext}
            </span>
          )}
        </div>

        {/* Right Circuit Branch */}
        <div className="hidden sm:flex items-center">
          <div className="w-1 h-1 rounded-full bg-red-400" />
          <div className="w-12 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-red-500/40" />
        </div>
      </div>

      {/* Bottom Vertical Laser Line */}
      <div className="relative w-[2px] h-10 sm:h-14 bg-gradient-to-b from-red-500 via-red-500/50 to-transparent">
        {/* Animated Traveling Data Packet */}
        <motion.div
          animate={{ y: [0, 48], opacity: [0, 1, 0] }}
          transition={{ duration: 1.8, delay: 0.9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-[3px] w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]"
        />
      </div>

      {/* Ambient Red Glow Halo */}
      <div className="absolute w-48 h-20 rounded-full bg-red-600/10 blur-xl pointer-events-none" />
    </div>
  );
}

