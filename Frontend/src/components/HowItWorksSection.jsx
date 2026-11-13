import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { Link2, Radar, ShieldAlert, Zap, ArrowRight, CheckCircle2, Server, Terminal, Radio } from 'lucide-react';

/* ========================================================
   STEP 1 VISUAL: Data Ingestion & Cloud Connector
   ======================================================== */
function StepVisualConnect() {
  return (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden">
      {/* Laser connection lines */}
      <svg className="absolute inset-0 w-full h-full text-red-500/30" viewBox="0 0 160 100">
        <line x1="20" y1="50" x2="80" y2="50" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="80" y1="50" x2="140" y2="25" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="80" y1="50" x2="140" y2="75" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="80" cy="50" r="3" fill="#ef4444" className="filter drop-shadow-[0_0_6px_#ef4444]" />
      </svg>

      {/* Central Connector Node */}
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-11 h-11 rounded-xl bg-gradient-to-tr from-red-950 via-[#161d2d] to-red-600/30 border border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)] flex items-center justify-center"
      >
        <Link2 className="w-5 h-5 text-red-400" />
      </motion.div>

      {/* Left Source Node */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded bg-black/60 border border-white/10 font-mono text-[7px] text-slate-300">
        API / CLOUD
      </div>

      {/* Right Target Nodes */}
      <div className="absolute right-3 top-4 px-1.5 py-0.5 rounded bg-black/60 border border-white/10 font-mono text-[7px] text-slate-300">
        K8S // VPC
      </div>
      <div className="absolute right-3 bottom-4 px-1.5 py-0.5 rounded bg-black/60 border border-white/10 font-mono text-[7px] text-slate-300">
        DB / SECRETS
      </div>
    </div>
  );
}

/* ========================================================
   STEP 2 VISUAL: Radar Sweep & Activity Telemetry
   ======================================================== */
function StepVisualMonitor() {
  return (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden">
      {/* Radar Sweep Dial */}
      <div className="relative w-24 h-24 rounded-full border border-red-500/30 flex items-center justify-center">
        {/* Concentric rings */}
        <div className="w-16 h-16 rounded-full border border-red-500/20" />
        <div className="w-8 h-8 rounded-full border border-red-500/20" />

        {/* Rotating Radar Sweep Line */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 flex items-center justify-center origin-center pointer-events-none"
        >
          <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent to-red-500 filter drop-shadow-[0_0_4px_#ef4444]" />
        </motion.div>

        {/* Pulsing Ping Blips */}
        <div className="absolute top-4 left-6 w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
        <div className="absolute bottom-6 right-5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <div className="absolute top-8 right-7 w-1 h-1 rounded-full bg-white" />

        {/* Center Node */}
        <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_#ef4444]" />
      </div>

      <div className="absolute top-2 right-4 font-mono text-[7px] text-emerald-400">
        ● 24/7 STREAMING
      </div>
    </div>
  );
}

/* ========================================================
   STEP 3 VISUAL: AI Neural Threat Detection Filter
   ======================================================== */
function StepVisualThreat() {
  return (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden">
      {/* Neural Matrix Grid */}
      <svg className="absolute inset-0 w-full h-full text-red-500/25" viewBox="0 0 160 100">
        <path d="M20 50 Q 80 15 140 50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M20 50 Q 80 85 140 50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="80" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Center Threat Interception Shield */}
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-11 h-11 rounded-xl bg-gradient-to-tr from-red-950 via-[#18131d] to-red-600/40 border border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.7)] flex items-center justify-center"
      >
        <ShieldAlert className="w-5 h-5 text-red-400" />
      </motion.div>

      {/* Tag: Threat Flagged & Mitigated */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-red-950/80 border border-red-500/40 font-mono text-[7px] text-red-300">
        CVE-2026 ZERO-DAY: BLOCKED
      </div>
    </div>
  );
}

/* ========================================================
   STEP 4 VISUAL: Automated Neural Defense & Response
   ======================================================== */
function StepVisualRespond() {
  return (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden">
      {/* Terminal background line */}
      <div className="w-32 h-20 rounded-lg bg-black/60 border border-emerald-500/30 p-1.5 flex flex-col justify-between font-mono text-[7px]">
        <div className="flex items-center justify-between text-emerald-400 border-b border-white/5 pb-1">
          <span>RESP_ENGINE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>
        <div className="space-y-0.5 text-slate-300">
          <div className="text-emerald-300">✓ QUARANTINED</div>
          <div className="text-slate-400">ISOLATION: 0.02ms</div>
          <div className="text-white">RULES APPLIED: 12</div>
        </div>
        <div className="flex justify-between text-slate-500 text-[6px]">
          <span>STATUS: SECURE</span>
          <span className="text-emerald-400">100% RESOLVED</span>
        </div>
      </div>
    </div>
  );
}

const stepsData = [
  {
    step: '01',
    title: 'Connect Your Infrastructure',
    description: 'Connect your business systems and supported data sources to SENTINEL.',
    tag: 'INTEGRATION',
    metric: 'ONE-CLICK SETUP',
    visual: StepVisualConnect,
  },
  {
    step: '02',
    title: 'Monitor Activity',
    description: 'View security events and infrastructure activity in one centralized workspace.',
    tag: 'OBSERVABILITY',
    metric: 'REAL-TIME 24/7',
    visual: StepVisualMonitor,
  },
  {
    step: '03',
    title: 'Detect Potential Threats',
    description: 'Analyze suspicious patterns and highlight activities that may require attention.',
    tag: 'DETECTION',
    metric: 'AI RED TEAMING',
    visual: StepVisualThreat,
  },
  {
    step: '04',
    title: 'Analyze & Respond',
    description: 'Review risk insights and take informed security actions.',
    tag: 'MITIGATION',
    metric: 'AUTONOMOUS',
    visual: StepVisualRespond,
  },
];

function StepCard({ item, index }) {
  const cardRef = useRef(null);

  // Smooth tilt springs
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 22, stiffness: 180 };
  const rotateX = useSpring(useTransform(y, [-150, 150], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(x, [-150, 150], [-6, 6]), springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Visual = item.visual;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
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

      {/* Cyber Card Body */}
      <div className="relative w-full h-full rounded-2xl bg-gradient-to-b from-[#131926]/95 via-[#0d121c]/95 to-[#070a10]/98 border border-white/10 group-hover:border-red-500/60 shadow-[0_12px_35px_rgba(0,0,0,0.7)] group-hover:shadow-[0_15px_40px_rgba(239,68,68,0.3)] transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
        
        {/* Top Edge Specular White Highlight */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:via-red-400 transition-colors" />

        {/* Corner Tech Bevel Notch (Bottom-Right) */}
        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-red-500/40 group-hover:border-red-400 transition-colors pointer-events-none" />

        {/* 1. Step Header: Step Number & Sub-Tag */}
        <div className="relative z-10 flex items-start justify-between border-b border-white/10 pb-2.5">
          <div className="space-y-0.5">
            <span className="font-mono text-[8px] text-red-400 tracking-wider font-semibold block">
              STEP {item.step} // {item.tag}
            </span>
            <span className="font-mono text-[9px] text-slate-400 font-medium">
              {item.metric}
            </span>
          </div>
          {/* Big Prominent Number */}
          <span className="font-sans text-2xl sm:text-3xl font-black text-slate-400 group-hover:text-red-400 transition-colors tracking-tight">
            {item.step}
          </span>
        </div>

        {/* 2. Step Visual Graphic */}
        <div className="relative my-2 w-full flex items-center justify-center">
          <Visual />
        </div>

        {/* 3. Step Content (Title & Description) */}
        <div className="relative z-10 pt-2 border-t border-white/5 space-y-1.5">
          <h3 className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-red-400 transition-colors">
            {item.title}
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed font-normal">
            {item.description}
          </p>

          <div className="pt-2 flex items-center justify-between text-[9px] font-mono text-slate-500 border-t border-white/[0.04]">
            <span className="text-slate-400">PIPELINE</span>
            <span className="text-red-400 font-bold group-hover:text-white transition-colors flex items-center gap-1">
              READY <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
            </span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default function HowItWorksSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.how-badge-glow', {
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
      id="how-it-works-section"
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

        {/* Top-Left HUD Tag */}
        <div className="absolute top-3 left-4 flex flex-col gap-1">
          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium">
            WORKFLOW PIPELINE // V4.0
          </span>
          <div className="flex items-center gap-1">
            <div className="h-[2px] w-6 bg-red-500 rounded-full" />
            <div className="h-[1px] w-6 bg-white/20" />
          </div>
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
        {/* SIMPLE. INTELLIGENT. EFFECTIVE. Badge */}
        <div className="mb-3.5">
          <div className="how-badge-glow inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/80 bg-red-950/25 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.4)]">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping opacity-80" />
            <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-red-400">
              SIMPLE. INTELLIGENT. EFFECTIVE.
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-[-0.03em] leading-tight text-white">
          Security That Works{' '}
          <span className="text-[#f43f5e] drop-shadow-[0_0_25px_rgba(244,63,94,0.7)] font-black">
            Smarter.
          </span>
        </h2>

        {/* Subtitle / Description */}
        <p className="mt-3 text-xs sm:text-sm md:text-[15px] text-slate-400 max-w-2xl mx-auto leading-relaxed">
          SENTINEL simplifies cybersecurity through a streamlined process that helps teams monitor, 
          understand, and respond to potential security risks.
        </p>
      </div>

      {/* 2. Grid of Four Steps Connected in Sequence */}
      <div className="relative z-10 w-full max-w-7xl mx-auto mt-8 sm:mt-10 px-2 sm:px-4">
        {/* Connecting Laser Guide Line across cards (Desktop) */}
        <div className="absolute top-1/2 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent hidden lg:block pointer-events-none" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {stepsData.map((item, idx) => (
            <StepCard key={item.step} item={item} index={idx} />
          ))}
        </div>
      </div>

      {/* Spacer at bottom */}
      <div className="h-4" />
    </section>
  );
}

