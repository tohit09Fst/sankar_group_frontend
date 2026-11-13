import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { Shield, Eye, Activity, Network, BarChart3, Radio, Cpu, Lock, CheckCircle2, Zap } from 'lucide-react';

/* ========================================================
   VISUAL 1: Animated Cybernetic Eye (AI Threat Detection)
   ======================================================== */
function VisualCyberEye() {
  return (
    <div className="relative w-full h-44 flex items-center justify-center overflow-hidden">
      {/* Background Neural Circuit Traces */}
      <svg className="absolute inset-0 w-full h-full text-red-500/30" viewBox="0 0 200 150">
        <path d="M10 75 H50 L70 30 H110" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M190 75 H150 L130 120 H90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M30 120 L60 95 H90" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <path d="M170 30 L140 55 H110" fill="none" stroke="currentColor" strokeWidth="0.8" />
        {/* Pulsing Junction Dots */}
        <circle cx="70" cy="30" r="2" fill="#ef4444" className="animate-ping" />
        <circle cx="130" cy="120" r="2" fill="#ef4444" />
        <circle cx="60" cy="95" r="1.5" fill="#ef4444" />
        <circle cx="140" cy="55" r="1.5" fill="#ef4444" />
      </svg>

      {/* "AI SCAN" HUD Reticle Box */}
      <div className="absolute top-2 left-6 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded border border-red-500/40 bg-black/60 font-mono text-[8px] text-red-400">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
        <span>AI SCAN</span>
      </div>

      {/* Target Reticle Brackets around Eye */}
      <div className="absolute inset-x-8 inset-y-4 border border-red-500/20 rounded pointer-events-none">
        <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-red-500" />
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-red-500" />
        <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-red-500" />
        <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-red-500" />
      </div>

      {/* The 3D Cybernetic Metallic Eye */}
      <motion.div
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-36 h-24 flex items-center justify-center"
      >
        <svg viewBox="0 0 160 100" className="w-full h-full filter drop-shadow-[0_0_12px_rgba(239,68,68,0.5)]">
          <defs>
            <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ff4d4d" />
              <stop offset="60%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#7f1d1d" />
            </radialGradient>
            <linearGradient id="chromeBevel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="40%" stopColor="#64748b" />
              <stop offset="70%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>

          {/* Outer Chrome Eye Shell Contour */}
          <path
            d="M 10 50 Q 80 0 150 50 Q 80 100 10 50 Z"
            fill="url(#chromeBevel)"
            stroke="#94a3b8"
            strokeWidth="1.8"
            className="filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          />

          {/* Inner Titanium Eyelid Margin */}
          <path
            d="M 22 50 Q 80 15 138 50 Q 80 85 22 50 Z"
            fill="#0b0f19"
            stroke="#ef4444"
            strokeWidth="0.8"
            opacity="0.8"
          />

          {/* Iris Outer Ring */}
          <circle cx="80" cy="50" r="28" fill="#151b28" stroke="#ef4444" strokeWidth="1.5" />
          
          {/* Animated Glowing Red Pupil/Iris Core */}
          <circle cx="80" cy="50" r="18" fill="url(#eyeGlow)" className="animate-pulse" />
          <circle cx="80" cy="50" r="10" fill="#000000" stroke="#fecaca" strokeWidth="0.8" />
          
          {/* Specular White Light Reflection on Lens */}
          <ellipse cx="75" cy="45" rx="4" ry="2.5" fill="#ffffff" opacity="0.9" />
          <circle cx="85" cy="54" r="1.5" fill="#ffffff" opacity="0.6" />

          {/* Red Laser Scanning Beam (horizontal) */}
          <motion.line
            x1="30"
            y1="50"
            x2="130"
            y2="50"
            stroke="#ff3b5c"
            strokeWidth="1.5"
            animate={{ opacity: [0.3, 0.9, 0.3], y1: [35, 65, 35], y2: [35, 65, 35] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            strokeDasharray="6 4"
            className="filter drop-shadow-[0_0_6px_#ff2a4d]"
          />
        </svg>
      </motion.div>
    </div>
  );
}

/* ========================================================
   VISUAL 2: 3D Tilted Dashboard Tablet (Real-Time Monitoring)
   ======================================================== */
function VisualDashboard() {
  return (
    <div className="relative w-full h-44 flex items-center justify-center overflow-hidden">
      {/* Orbiting Satellite Rings around the Tablet */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg viewBox="0 0 200 150" className="w-full h-full opacity-40">
          <ellipse cx="100" cy="80" rx="80" ry="32" fill="none" stroke="#ef4444" strokeWidth="0.8" strokeDasharray="4 6" />
          <circle cx="45" cy="70" r="3" fill="#ef4444" className="filter drop-shadow-[0_0_4px_#ef4444]" />
          <circle cx="155" cy="90" r="2.5" fill="#ffffff" />
        </svg>
      </div>

      {/* 3D Tilted Dashboard Tablet Frame */}
      <motion.div
        animate={{ y: [0, -4, 0], rotateX: [18, 22, 18], rotateY: [-14, -10, -14] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d', perspective: 600 }}
        className="relative z-10 w-44 h-28 rounded-xl bg-gradient-to-br from-[#1c2436] via-[#101624] to-[#080b12] border border-white/20 shadow-[0_15px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(239,68,68,0.25)] p-2 flex flex-col justify-between"
      >
        {/* Tablet Topbar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-1">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            <span className="font-mono text-[7px] text-white/80 uppercase tracking-wider font-bold">TELEMETRY HUD</span>
          </div>
          <span className="font-mono text-[7px] text-emerald-400">99.9% LIVE</span>
        </div>

        {/* Oscillating Live Waveform */}
        <div className="w-full h-11 bg-black/50 rounded p-1 flex items-center justify-center overflow-hidden border border-white/5">
          <svg viewBox="0 0 100 35" className="w-full h-full text-red-500">
            <path
              d="M0 20 Q 15 5, 25 20 T 45 10 T 60 25 T 75 15 T 90 28 L 100 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="filter drop-shadow-[0_0_6px_#ef4444]"
            />
          </svg>
        </div>

        {/* Bottom Metrics Bar & Circular Dial */}
        <div className="flex items-center justify-between pt-1">
          {/* Mini Equalizer Bars */}
          <div className="flex items-end gap-[2px] h-3">
            <div className="w-1 h-2 bg-red-500/80 rounded-[0.5px]" />
            <div className="w-1 h-3 bg-red-500 rounded-[0.5px] animate-pulse" />
            <div className="w-1 h-1.5 bg-red-500/60 rounded-[0.5px]" />
            <div className="w-1 h-2.5 bg-emerald-400 rounded-[0.5px]" />
          </div>

          {/* Mini Circular Gauge (85%) */}
          <div className="flex items-center gap-1 font-mono text-[7px] text-slate-300">
            <div className="relative w-3.5 h-3.5 rounded-full border border-red-500/40 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-red-500" />
            </div>
            <span>85% CPU</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ========================================================
   VISUAL 3: Isometric Matrix Grid (Network Protection)
   ======================================================== */
function VisualNetworkProtection() {
  return (
    <div className="relative w-full h-44 flex items-center justify-center overflow-hidden">
      {/* 3D Isometric Grid Backdrop */}
      <svg className="absolute inset-0 w-full h-full text-white/10" viewBox="0 0 200 150">
        <defs>
          <pattern id="isoGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 20 M 0 0 L 20 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#isoGrid)" opacity="0.3" />

        {/* Red Laser Data Links */}
        <line x1="100" y1="75" x2="45" y2="45" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="3 3" className="filter drop-shadow-[0_0_4px_#ef4444]" />
        <line x1="100" y1="75" x2="155" y2="45" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="3 3" className="filter drop-shadow-[0_0_4px_#ef4444]" />
        <line x1="100" y1="75" x2="45" y2="105" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="3 3" className="filter drop-shadow-[0_0_4px_#ef4444]" />
        <line x1="100" y1="75" x2="155" y2="105" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="3 3" className="filter drop-shadow-[0_0_4px_#ef4444]" />
      </svg>

      {/* Central Microchip Core */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-12 h-12 rounded-lg bg-gradient-to-tr from-red-950 via-[#182030] to-red-600/30 border border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.6)] flex items-center justify-center"
      >
        <Cpu className="w-6 h-6 text-red-400" />
      </motion.div>

      {/* 4 Corner Defensive Chrome Shields */}
      {/* Top Left Shield */}
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-7 left-10 z-20 flex flex-col items-center"
      >
        <div className="w-8 h-9 rounded-md bg-gradient-to-b from-slate-200 via-slate-400 to-slate-700 p-0.5 shadow-lg border border-white/50 flex items-center justify-center">
          <Shield className="w-4 h-4 text-slate-900 fill-slate-300" />
        </div>
      </motion.div>

      {/* Top Right Node */}
      <motion.div
        animate={{ y: [0, 3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-7 right-10 z-20 flex flex-col items-center"
      >
        <div className="w-7 h-7 rounded bg-[#131b2c] border border-white/20 shadow-md flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_6px_#ef4444]" />
        </div>
      </motion.div>

      {/* Bottom Left Shield */}
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        className="absolute bottom-7 left-10 z-20 flex flex-col items-center"
      >
        <div className="w-8 h-9 rounded-md bg-gradient-to-b from-slate-200 via-slate-400 to-slate-700 p-0.5 shadow-lg border border-white/50 flex items-center justify-center">
          <Shield className="w-4 h-4 text-slate-900 fill-slate-300" />
        </div>
      </motion.div>

      {/* Bottom Right Shield */}
      <motion.div
        animate={{ y: [0, 3, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
        className="absolute bottom-7 right-10 z-20 flex flex-col items-center"
      >
        <div className="w-8 h-9 rounded-md bg-gradient-to-b from-slate-200 via-slate-400 to-slate-700 p-0.5 shadow-lg border border-white/50 flex items-center justify-center">
          <Shield className="w-4 h-4 text-slate-900 fill-slate-300" />
        </div>
      </motion.div>
    </div>
  );
}

/* ========================================================
   VISUAL 4: 3D Holographic Bar Chart & Platform (Risk Analysis)
   ======================================================== */
function VisualRiskAnalysis() {
  return (
    <div className="relative w-full h-44 flex items-center justify-center overflow-hidden">
      {/* Background Line Graph & Telemetry Grid */}
      <svg className="absolute inset-0 w-full h-full text-red-500/20" viewBox="0 0 200 150">
        <line x1="20" y1="120" x2="180" y2="120" stroke="currentColor" strokeWidth="0.8" />
        <line x1="20" y1="90" x2="180" y2="90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
        <line x1="20" y1="60" x2="180" y2="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
        
        {/* Floating Red Area Chart */}
        <path
          d="M 25 105 Q 50 60 70 85 T 110 45 T 145 70 T 175 40"
          fill="none"
          stroke="#ef4444"
          strokeWidth="1.5"
          className="filter drop-shadow-[0_0_6px_rgba(239,68,68,0.7)]"
        />
      </svg>

      {/* 3D Isometric Dark Glass Platform with 3D Glowing Pillar Bars */}
      <div 
        style={{ perspective: 500 }}
        className="relative z-10 flex items-end justify-center gap-2 sm:gap-2.5 pb-2"
      >
        {/* Bar 1 */}
        <motion.div
          animate={{ height: ['40px', '55px', '40px'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="w-3.5 rounded-t bg-gradient-to-t from-slate-700 to-slate-300 shadow-md border-t border-white/60"
        />

        {/* Bar 2 (Neon Crimson) */}
        <motion.div
          animate={{ height: ['65px', '85px', '65px'] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          className="w-3.5 rounded-t bg-gradient-to-t from-red-900 via-red-600 to-red-400 shadow-[0_0_12px_rgba(239,68,68,0.8)] border-t border-red-300"
        />

        {/* Bar 3 (Tallest Frosted White) */}
        <motion.div
          animate={{ height: ['80px', '100px', '80px'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          className="w-4 rounded-t bg-gradient-to-t from-slate-600 via-slate-200 to-white shadow-[0_0_15px_rgba(255,255,255,0.4)] border-t border-white"
        />

        {/* Bar 4 (Neon Crimson) */}
        <motion.div
          animate={{ height: ['50px', '75px', '50px'] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
          className="w-3.5 rounded-t bg-gradient-to-t from-red-900 via-red-600 to-red-400 shadow-[0_0_12px_rgba(239,68,68,0.8)] border-t border-red-300"
        />

        {/* Bar 5 */}
        <motion.div
          animate={{ height: ['35px', '48px', '35px'] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          className="w-3.5 rounded-t bg-gradient-to-t from-slate-700 to-slate-400 shadow-md border-t border-white/60"
        />
      </div>

      {/* Floating Severity Tags at top right */}
      <div className="absolute top-2 right-4 z-20 flex flex-col gap-1 font-mono text-[7px]">
        <div className="px-1.5 py-0.5 rounded bg-red-950/80 border border-red-500/40 text-red-400">
          RISK: 0.02%
        </div>
        <div className="px-1.5 py-0.5 rounded bg-black/60 border border-white/10 text-slate-300">
          SEV: LOW
        </div>
      </div>
    </div>
  );
}

/* ========================================================
   FEATURE CARDS CONFIGURATION
   ======================================================== */
const featuresConfig = [
  {
    id: '01',
    topCode: 'SYS.DET // AI-SCAN',
    topTitle: 'AI Threat Detection',
    visual: VisualCyberEye,
    title: 'AI Threat Detection',
    subtitle: 'Identify suspicious patterns and potential threats using intelligent detection technology.',
    meta: { key: 'ACCURACY', val: '99.9%' },
  },
  {
    id: '02',
    topCode: 'SYS.MON // TELEMETRY',
    topTitle: 'Real-Time Monitoring',
    visual: VisualDashboard,
    title: 'Real-Time Monitoring',
    subtitle: 'Monitor security events and infrastructure activity through a centralized dashboard.',
    meta: { key: 'LATENCY', val: '0.04ms' },
  },
  {
    id: '03',
    topCode: 'SYS.NET // DEFENSE',
    topTitle: 'Network Protection',
    visual: VisualNetworkProtection,
    title: 'Network Protection',
    subtitle: 'Gain visibility into connected systems and identify potential network vulnerabilities.',
    meta: { key: 'PERIMETER', val: 'ACTIVE' },
  },
  {
    id: '04',
    topCode: 'SYS.RSK // ANALYTICS',
    topTitle: 'Smart Risk Analysis',
    visual: VisualRiskAnalysis,
    title: 'Smart Risk Analysis',
    subtitle: 'Understand security risks through clear insights, severity indicators, and analytics.',
    meta: { key: 'AUDIT', val: 'OPTIMAL' },
  },
];

/* ========================================================
   INDIVIDUAL HIGH-TECH CYBERNETIC CARD COMPONENT
   ======================================================== */
function CodeCyberCard({ item, index }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Parallax tilt spring physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 22, stiffness: 190 };
  const rotateX = useSpring(useTransform(y, [-150, 150], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(x, [-150, 150], [-6, 6]), springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const VisualComponent = item.visual;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative flex flex-col justify-between rounded-2xl cursor-pointer select-none"
    >
      {/* Outer Neon Glow on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-600/0 via-red-600/15 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />

      {/* Cyber Card Body with Beveled Corners and Metallic Rim */}
      <div className="relative w-full h-full rounded-2xl bg-gradient-to-b from-[#131926]/95 via-[#0d121c]/95 to-[#070a10]/98 border border-white/10 group-hover:border-red-500/60 shadow-[0_12px_35px_rgba(0,0,0,0.7)] group-hover:shadow-[0_15px_40px_rgba(239,68,68,0.3)] transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
        
        {/* Top Edge Specular White Highlight */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:via-red-400 transition-colors" />

        {/* Corner Tech Bevel Notch (Bottom-Right) */}
        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-red-500/40 group-hover:border-red-400 transition-colors pointer-events-none" />

        {/* 1. CARD HEADER */}
        <div className="relative z-10 flex items-start justify-between border-b border-white/10 pb-2.5">
          <div className="space-y-0.5">
            <span className="font-mono text-[8px] text-slate-400 tracking-wider block">
              {item.topCode}
            </span>
            <h4 className="font-sans text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
              {item.topTitle}
            </h4>
          </div>
          {/* Big Prominent Number */}
          <span className="font-sans text-xl sm:text-2xl font-black text-slate-400 group-hover:text-red-400 transition-colors tracking-tight">
            {item.id}
          </span>
        </div>

        {/* 2. CARD MIDDLE: ANIMATED 3D VISUAL */}
        <div className="relative my-2 w-full flex items-center justify-center">
          <VisualComponent />
        </div>

        {/* 3. CARD FOOTER: TITLE, DESCRIPTION & TELEMETRY */}
        <div className="relative z-10 pt-2 border-t border-white/5 space-y-1.5">
          <h3 className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-red-400 transition-colors">
            {item.title}
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed font-normal">
            {item.subtitle}
          </p>

          {/* Micro Telemetry Footer */}
          <div className="pt-2 flex items-center justify-between text-[9px] font-mono text-slate-500 border-t border-white/[0.04]">
            <span className="text-slate-400">{item.meta.key}</span>
            <span className="text-red-400 font-bold group-hover:text-white transition-colors">
              {item.meta.val}
            </span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

/* ========================================================
   MAIN FEATURES SECTION
   ======================================================== */
export default function FeaturesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.capabilities-badge-glow', {
        boxShadow: '0 0 24px rgba(239, 68, 68, 0.7), inset 0 0 10px rgba(239, 68, 68, 0.3)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="features-section"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-transparent text-slate-100 flex flex-col justify-between overflow-hidden py-10 sm:py-14 px-4 sm:px-8 md:px-12 lg:px-14 select-none"
    >
      {/* Reticle Viewport Framing */}
      <div className="pointer-events-none absolute inset-3 sm:inset-5 md:inset-6 rounded-2xl sm:rounded-3xl z-30">
        {/* Top-Left Corner Bracket */}
        <div className="absolute -top-[1px] -left-[1px]">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" className="text-white/40">
            <path d="M1 24V12C1 5.92487 5.92487 1 12 1H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="1" cy="24" r="1.5" fill="currentColor" />
            <circle cx="24" cy="1" r="1.5" fill="currentColor" />
          </svg>
        </div>

        {/* Top-Right Corner Bracket */}
        <div className="absolute -top-[1px] -right-[1px]">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" className="text-white/40">
            <path d="M43 24V12C43 5.92487 38.0751 1 32 1H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="43" cy="24" r="1.5" fill="currentColor" />
            <circle cx="20" cy="1" r="1.5" fill="currentColor" />
          </svg>
        </div>


        {/* Bottom-Left Corner Bracket */}
        <div className="absolute -bottom-[1px] -left-[1px]">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" className="text-white/40">
            <path d="M1 20V32C1 38.0751 5.92487 43 12 43H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="1" cy="20" r="1.5" fill="currentColor" />
            <circle cx="24" cy="43" r="1.5" fill="currentColor" />
          </svg>
        </div>

        {/* Bottom-Right Corner Bracket */}
        <div className="absolute -bottom-[1px] -right-[1px]">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" className="text-white/40">
            <path d="M43 20V32C43 38.0751 38.0751 43 32 43H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="43" cy="20" r="1.5" fill="currentColor" />
            <circle cx="20" cy="43" r="1.5" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Ambient Red Glow in Background */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-gradient-to-b from-red-600/15 via-red-500/10 to-transparent blur-[120px] pointer-events-none" />

      {/* 1. Header Area: Badge, Headline, Subtitle */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center pt-2">
        {/* POWERFUL SECURITY CAPABILITIES Badge */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3.5"
        >
          <div className="capabilities-badge-glow inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/80 bg-red-950/25 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.4)]">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping opacity-80" />
            <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-red-400">
              POWERFUL SECURITY CAPABILITIES
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-[-0.03em] leading-tight text-white"
        >
          Everything You Need to Stay Protected.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 text-xs sm:text-sm md:text-[15px] text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          Advanced security capabilities designed to help your business identify risks,
          monitor activity, and maintain control over its digital infrastructure.
        </motion.p>
      </div>

      {/* 2. Grid of 4 Custom Code-Built 3D Cybernetic Cards */}
      <div className="relative z-10 w-full max-w-7xl mx-auto mt-8 sm:mt-10 px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {featuresConfig.map((item, idx) => (
            <CodeCyberCard key={item.id} item={item} index={idx} />
          ))}
        </div>
      </div>

      {/* Spacer at bottom */}
      <div className="h-4" />
    </section>
  );
}
