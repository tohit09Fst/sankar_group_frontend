import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, Terminal, Activity } from 'lucide-react';

const bootLogs = [
  'INITIALIZING SENTINEL NEURAL KERNEL v4.9.2...',
  'DECRYPTING 4096-BIT QUANTUM ACCESS TOKENS...',
  'MOUNTING HYPERVISOR THREAT DETECTION ARRAY...',
  'SYNCHRONIZING GLOBAL SATELLITE RADAR SENSORS...',
  'CALIBRATING AI RED TEAMING AUTONOMOUS AGENTS...',
  'ESTABLISHING ZERO-TRUST SOCKET... [AUTHENTICATED]',
  'SECURITY COMMAND CENTER: SYSTEM ARMED & READY',
];

export default function CyberLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [currentLogIdx, setCurrentLogIdx] = useState(0);
  const [isFinishing, setIsFinishing] = useState(false);

  useEffect(() => {
    // Progress counter animation from 0 to 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Smooth organic curve
        const step = prev < 25 ? 2 : prev < 70 ? 3 : prev < 90 ? 4 : 2;
        return Math.min(prev + step, 100);
      });
    }, 32);

    return () => clearInterval(interval);
  }, []);

  // Update terminal logs as progress climbs
  useEffect(() => {
    const logIdx = Math.min(
      Math.floor((progress / 100) * bootLogs.length),
      bootLogs.length - 1
    );
    setCurrentLogIdx(logIdx);

    if (progress === 100) {
      const finishTimer = setTimeout(() => {
        setIsFinishing(true);
        const completeTimer = setTimeout(() => {
          onComplete();
        }, 500);
        return () => clearTimeout(completeTimer);
      }, 250);
      return () => clearTimeout(finishTimer);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!isFinishing ? (
        <motion.div
          key="cyber-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[#05070b] flex flex-col items-center justify-between p-6 sm:p-10 select-none overflow-hidden"
        >
          {/* Cyber Perspective Grid Background */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(239,68,68,0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(239,68,68,0.2) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Central Radial Red Glow Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-red-600/15 blur-[120px] pointer-events-none" />

          {/* Top HUD Status Bar */}
          <div className="relative z-10 w-full max-w-4xl flex items-center justify-between font-mono text-[10px] text-slate-400 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span className="text-white font-bold tracking-wider">
                SENTINEL // SYSTEM_BOOT
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-slate-500 hidden sm:inline">MEM: 64.2 GB ALLOCATED</span>
              <span className="text-emerald-400">ENCRYPTION: AES-256</span>
            </div>
          </div>

          {/* Centerpiece: Spinning Cyber Reticle & Emblem */}
          <div className="relative z-10 flex flex-col items-center my-auto">
            {/* Outer Rotating Laser Rings */}
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center">
              
              {/* Outer Ring with Dashes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-red-500/40"
              />

              {/* Middle Counter-Rotating Ring with Brackets */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-3 rounded-full border-2 border-t-red-500 border-r-transparent border-b-white/20 border-l-transparent shadow-[0_0_20px_rgba(239,68,68,0.4)]"
              />

              {/* Inner Glowing Reticle */}
              <motion.div
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-7 rounded-full bg-[#0d121c] border border-red-500/60 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.5)]"
              >
                {/* Center Sentinel Shield Emblem */}
                <div className="relative flex flex-col items-center justify-center text-red-500">
                  <Shield className="w-14 h-14 sm:w-16 sm:h-16 stroke-[1.5] fill-red-500/20 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
                  <Lock className="w-5 h-5 absolute text-white" />
                </div>
              </motion.div>

              {/* Laser Scan Pulse Moving Across Center */}
              <motion.div
                animate={{ y: [-70, 70] }}
                transition={{ duration: 1.4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                className="absolute inset-x-4 h-[2px] bg-gradient-to-r from-transparent via-red-400 to-transparent shadow-[0_0_10px_#ef4444]"
              />
            </div>

            {/* Percentage Readout */}
            <div className="mt-8 flex items-baseline gap-2">
              <span className="font-mono text-4xl sm:text-5xl font-black text-white tracking-tight">
                {progress}
              </span>
              <span className="font-mono text-xl sm:text-2xl text-red-400 font-bold">
                %
              </span>
            </div>

            {/* Subtext */}
            <div className="mt-1 font-mono text-[11px] tracking-[0.25em] uppercase text-slate-400 font-medium">
              VERIFYING SYSTEM PROTOCOLS
            </div>

            {/* High-Tech Progress Bar */}
            <div className="mt-5 w-64 sm:w-80 h-2 rounded-full bg-[#111724] border border-white/10 p-[2px] overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-red-600 via-rose-500 to-red-400 shadow-[0_0_15px_#ef4444]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          {/* Bottom Live Terminal Telemetry Box */}
          <div className="relative z-10 w-full max-w-2xl bg-[#090e18]/90 border border-white/10 rounded-xl p-3.5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pb-2 border-b border-white/5 mb-2">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-red-400" />
                <span>TERMINAL_OUTPUT // BOOT_SEQUENCE</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <Activity className="w-3 h-3 animate-pulse" />
                <span>ACTIVE</span>
              </div>
            </div>

            {/* Log Stream */}
            <div className="font-mono text-xs text-slate-300 flex items-center gap-2 min-h-[22px]">
              <span className="text-red-400 font-bold">&gt;</span>
              <span className="truncate">{bootLogs[currentLogIdx]}</span>
            </div>
          </div>

        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

