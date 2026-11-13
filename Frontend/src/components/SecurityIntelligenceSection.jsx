import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { Activity, Shield, Terminal, Zap, CheckCircle2, Radio, Server } from 'lucide-react';

export default function SecurityIntelligenceSection() {
  const containerRef = useRef(null);
  const orbRef = useRef(null);
  const canvasRef = useRef(null);
  const [activeTab, setActiveTab] = useState('Live Logs');

  // Smooth mouse tilt spring physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 160 };
  const rotateX = useSpring(useTransform(y, [-300, 300], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(x, [-300, 300], [-6, 6]), springConfig);

  // Parallax tracking
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

      if (orbRef.current) {
        gsap.to(orbRef.current, {
          x: offsetX * 0.02,
          y: offsetY * 0.02,
          duration: 0.7,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  // Background flowing cyber particle wave (Canvas)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Particle field simulating the red and white digital dust wave
    const particles = [];
    const count = 80;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height * 0.55 + (Math.random() - 0.5) * 160,
        size: Math.random() * 2.2 + 0.6,
        speedX: (Math.random() * 0.7 + 0.2) * (Math.random() > 0.5 ? 1 : -1),
        speedY: (Math.random() - 0.5) * 0.3,
        color: Math.random() > 0.45 ? 'rgba(239, 68, 68, ' : 'rgba(255, 255, 255, ',
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowBlur = p.color.includes('239') ? 8 : 4;
        ctx.shadowColor = p.color.includes('239') ? '#ef4444' : '#ffffff';
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  const tickerItems = [
    'SYSTEM STATUS — ALL SYSTEMS OPERATIONAL',
    'AI THREAT DETECTION — ACTIVE',
    'NETWORK MONITORING — ENABLED',
    'SECURITY ENGINE — RUNNING',
    'CLOUD PROTECTION — ONLINE',
    'NEURAL PERIMETER — SECURED',
    'ZERO-DAY AUDIT — 0 VULNERABILITIES',
    'QUANTUM ENCRYPTION — SYNCHRONIZED',
  ];

  return (
    <section
      id="security-ticker-section"
      ref={containerRef}
      className="relative w-full min-h-screen bg-transparent text-slate-100 flex flex-col justify-between overflow-hidden pt-12 pb-8 select-none"
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

        {/* Top-Left "DATA TRACKER V2.4" Label */}
        <div className="absolute top-3 left-4 flex flex-col gap-1">
          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium">
            DATA TRACKER V2.4
          </span>
          <div className="flex items-center gap-1">
            <div className="h-[2px] w-5 bg-red-500 rounded-full" />
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


        {/* Bottom-Left Corner Bracket & "LIVE LOGS" Label */}
        <div className="absolute -bottom-[1px] -left-[1px]">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" className="text-white/40">
            <path d="M1 20V32C1 38.0751 5.92487 43 12 43H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="1" cy="20" r="1.5" fill="currentColor" />
            <circle cx="24" cy="43" r="1.5" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-3.5 left-4 hidden sm:flex flex-col gap-0.5">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400">
            LIVE LOGS
          </span>
          <div className="h-[1px] w-12 bg-white/10" />
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

      {/* 1. TOP TICKER HEADER */}
      <div className="relative z-20 w-full pt-1">
        {/* Ticker Subtitle Label */}
        <div className="text-center mb-1.5">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] text-slate-400 font-medium">
            Security Intelligence Ticker
          </span>
        </div>

        {/* Glowing Red Infinite Scrolling Ticker Band */}
        <div className="relative w-full overflow-hidden py-1.5 bg-black/40 border-y border-red-500/35 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
          {/* Neon Glow Lines */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-85" />
          <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-85" />

          {/* Marquee Content */}
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex items-center gap-8 whitespace-nowrap w-max"
          >
            {[...tickerItems, ...tickerItems].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-200">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 2. HEADLINE & SUBTITLE (CENTERED) */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center mt-4 sm:mt-6">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[50px] font-extrabold tracking-[-0.03em] leading-tight text-white"
        >
          Your{' '}
          <span className="text-[#f43f5e] drop-shadow-[0_0_25px_rgba(244,63,94,0.7)] font-black">
            Security.
          </span>{' '}
          Always in Motion.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed"
        >
          Stay informed with a unified view of your digital security environment and important system activity.
        </motion.p>
      </div>

      {/* 3. CENTRAL 3D SENTINEL ORB & HOLOGRAPHIC TELEMETRY RIBBON */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex-1 flex items-center justify-center min-h-[360px] sm:min-h-[420px]">
        {/* Canvas for Digital Dust Wave */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-60" />

        {/* Ambient Red Glow in Center */}
        <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-red-600/30 via-red-500/15 to-transparent blur-[90px] pointer-events-none" />

        {/* 3D Interactive Perspective Core */}
        <motion.div
          ref={orbRef}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative w-full max-w-[850px] flex items-center justify-center cursor-pointer"
        >
          {/* Main 3D Sentinel Orb Image */}
          <div className="relative z-20 w-[260px] sm:w-[320px] md:w-[360px] lg:w-[400px] flex items-center justify-center">
            <motion.img
              src="/sentinel-3d-orb.png"
              alt="Sentinel 3D Cyber Core Orb"
              className="w-full h-auto object-contain filter drop-shadow-[0_15px_35px_rgba(239,68,68,0.25)] pointer-events-none"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          {/* LEFT HOLOGRAPHIC CARD: "SYSTEM STATUS" Waveform */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 w-40 sm:w-52 p-3 rounded-xl bg-[#0c101a]/90 backdrop-blur-md border border-red-500/40 shadow-[0_0_20px_rgba(239,68,68,0.2)] hidden sm:block pointer-events-auto"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                SYSTEM STATUS
              </span>
              <span className="font-mono text-[9px] text-emerald-400">99.98%</span>
            </div>

            {/* Live SVG Heartbeat Waveform */}
            <div className="h-10 sm:h-12 w-full bg-black/40 rounded border border-white/5 flex items-center justify-center px-1 overflow-hidden">
              <svg viewBox="0 0 100 40" className="w-full h-full text-red-500">
                <path
                  d="M0 20 L20 20 L25 10 L30 32 L35 8 L40 24 L45 18 L50 20 L70 20 L75 14 L80 26 L85 20 L100 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="filter drop-shadow-[0_0_6px_#ef4444]"
                />
              </svg>
            </div>
            <div className="mt-1.5 flex justify-between text-[8px] font-mono text-slate-400">
              <span>LATENCY: 0.12ms</span>
              <span className="text-emerald-400">NOMINAL</span>
            </div>
          </motion.div>

          {/* TOP TELEMETRY PILL BADGES */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-3 py-1 rounded-full bg-black/85 border border-white/15 backdrop-blur-md text-[10px] font-mono text-slate-300 shadow-lg pointer-events-none"
          >
            <Shield className="w-3.5 h-3.5 text-red-400" />
            <span className="text-white font-semibold">53</span>
            <span className="text-slate-500">|</span>
            <span className="text-white font-semibold">43</span>
            <span className="text-slate-500">|</span>
            <span className="text-emerald-400 font-semibold">90%</span>
          </motion.div>

          {/* RIGHT HOLOGRAPHIC CARD: "SECURITY ENGINE" & LIVE LOGS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 w-44 sm:w-56 p-3 rounded-xl bg-[#0c101a]/90 backdrop-blur-md border border-white/15 shadow-[0_0_20px_rgba(0,0,0,0.5)] hidden sm:block pointer-events-auto"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                <Server className="w-3 h-3 text-red-400" />
                SECURITY ENGINE
              </span>
              <span className="font-mono text-[9px] text-red-400 animate-pulse">● RUNNING</span>
            </div>

            {/* Selector Tabs: Live Logs / Scans / AI Scans */}
            <div className="grid grid-cols-3 gap-1 mb-2 text-[8px] font-mono bg-black/50 p-1 rounded">
              {['Live Logs', 'Scans', 'AI Scans'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-0.5 rounded transition-colors text-center ${
                    activeTab === tab ? 'bg-red-500 text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Monospace Log Lines */}
            <div className="h-12 bg-black/60 rounded p-1.5 font-mono text-[8px] text-slate-300 space-y-1 overflow-hidden border border-white/5">
              <div className="flex justify-between text-emerald-400">
                <span>192.168.1.104</span>
                <span>TLS_1.3 OK</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>PORT_8443</span>
                <span>SYN_ACK</span>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      <div className="h-2" />
    </section>
  );
}
