import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { Globe, ShieldCheck, ArrowRight, Server, Activity } from 'lucide-react';

const highlights = [
  {
    title: 'Global Network Visibility',
    description: 'Real-time traffic inspection and packet analysis across 140+ distributed edge cloud regions.',
    icon: Globe,
    metric: '140+ REGIONS',
  },
  {
    title: 'Connected Infrastructure Insights',
    description: 'Comprehensive automated topology mapping of multi-cloud architectures, APIs, and microservices.',
    icon: Server,
    metric: '100% VISIBILITY',
  },
  {
    title: 'Intelligent Threat Visualization',
    description: 'Dynamic graph-based attack surface modeling, zero-day threat vectors, and real-time blast radius analysis.',
    icon: ShieldCheck,
    metric: '0.04ms AUDIT',
  },
];

export default function DigitalEarthSection({ onOpenPlatform }) {
  const containerRef = useRef(null);
  const globeRef = useRef(null);
  const [pulseCount, setPulseCount] = useState(0);

  // Smooth mouse tilt spring physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 170 };
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

      if (globeRef.current) {
        gsap.to(globeRef.current, {
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.earth-badge-glow', {
        boxShadow: '0 0 22px rgba(239, 68, 68, 0.7), inset 0 0 10px rgba(239, 68, 68, 0.3)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      gsap.to('.earth-btn-aura', {
        boxShadow: '0 0 32px rgba(239, 68, 68, 0.85), 0 0 12px rgba(255, 90, 90, 0.55)',
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    });

    return () => ctx.revert();
  }, []);

  const triggerPulse = () => {
    setPulseCount((prev) => prev + 1);
  };

  return (
    <section
      id="digital-earth-section"
      ref={containerRef}
      className="relative w-full min-h-screen bg-transparent text-slate-100 flex items-center justify-center pt-16 pb-8 px-4 sm:px-8 md:px-12 lg:px-16 select-none overflow-hidden"
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
            GLOBAL INTELLIGENCE // NODE 01
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

      {/* Atmospheric Red Ambient Glow Behind Planet */}
      <div className="absolute top-1/2 right-[12%] -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-red-600/25 via-red-500/15 to-transparent blur-[110px] pointer-events-none" />

      {/* Main Two-Column Content Grid */}
      <div className="relative z-10 w-full max-w-[1380px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
        
        {/* =========================================
            LEFT COLUMN: TEXT, HIGHLIGHTS & CTA
            ========================================= */}
        <div className="flex flex-col justify-center items-start w-full lg:w-[48%] xl:w-[46%] z-20 select-none">
          
          {/* Small Label: GLOBAL SECURITY INTELLIGENCE */}
          <div className="mb-2">
            <div className="earth-badge-glow inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/80 bg-red-950/30 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.4)]">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping opacity-85" />
              <span className="font-mono text-[9px] sm:text-[10px] font-semibold tracking-[0.16em] uppercase text-red-400">
                GLOBAL SECURITY INTELLIGENCE
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h2 className="font-sans font-extrabold tracking-[-0.035em] text-white">
            <span className="block text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] xl:text-[42px] leading-[1.08] text-white">
              See the Bigger Picture.
            </span>
            <span className="block text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] xl:text-[42px] leading-[1.08] text-white">
              Secure Every{' '}
              <span className="text-[#f43f5e] drop-shadow-[0_0_25px_rgba(244,63,94,0.7)] font-black">
                Connection.
              </span>
            </span>
          </h2>

          {/* Description */}
          <p className="mt-2 text-xs sm:text-[13px] text-slate-400 leading-relaxed max-w-lg font-normal">
            Get a unified perspective of your connected digital environment. Visualize network activity, 
            understand potential exposure, and identify security concerns from one intelligent interface.
          </p>

          {/* Three Supporting Highlights */}
          <div className="mt-3.5 sm:mt-4 w-full space-y-2">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div
                  key={i}
                  className="group flex items-start gap-2.5 p-2 rounded-xl bg-gradient-to-r from-white/[0.04] to-transparent border border-white/10 hover:border-red-500/40 transition-all cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-lg bg-red-950/40 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-red-600/20 group-hover:border-red-500/60 transition-colors">
                    <Icon className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-white group-hover:text-red-300 transition-colors">
                        {h.title}
                      </h4>
                      <span className="font-mono text-[8px] text-red-400 font-semibold px-1.5 py-0.2 rounded bg-red-950/50 border border-red-500/20">
                        {h.metric}
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-slate-400 leading-tight">
                      {h.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Button: Discover Security Intelligence */}
          <div className="mt-4 sm:mt-5">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onOpenPlatform && onOpenPlatform('Global Intelligence')}
              className="earth-btn-aura group relative px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white glass-button-red flex items-center gap-2 cursor-pointer select-none"
            >
              <span>Discover Security Intelligence</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>

        </div>

        {/* =========================================
            RIGHT COLUMN: 3D DIGITAL CYBER EARTH GLOBE
            ========================================= */}
        <div className="relative flex items-center justify-center w-full lg:w-[52%] xl:w-[54%] z-20 select-none">
          <motion.div
            ref={globeRef}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[450px] sm:max-w-[490px] lg:max-w-[530px] aspect-square flex items-center justify-center cursor-pointer group"
            onClick={triggerPulse}
          >
            {/* Click Pulse Wave */}
            {pulseCount > 0 && (
              <motion.div
                key={pulseCount}
                initial={{ scale: 0.4, opacity: 0.9 }}
                animate={{ scale: 1.6, opacity: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="absolute w-[440px] h-[440px] rounded-full border-2 border-red-500 shadow-[0_0_35px_#ef4444] pointer-events-none"
              />
            )}

            {/* Rotating Outer Radar Rings (SVG) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
                viewBox="0 0 500 500"
                className="w-[98%] h-[98%] opacity-35"
              >
                <circle cx="250" cy="250" r="230" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="6 14" />
                <circle cx="250" cy="250" r="200" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" strokeDasharray="15 30" />
                {/* Orbital Satellite Node */}
                <circle cx="480" cy="250" r="4" fill="#ffffff" className="filter drop-shadow-[0_0_6px_#ffffff]" />
              </motion.svg>

              {/* Counter-Rotating Orbital Ring */}
              <motion.svg
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                viewBox="0 0 500 500"
                className="w-[88%] h-[88%] opacity-30 absolute"
              >
                <ellipse cx="250" cy="250" rx="220" ry="90" fill="none" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="8 12" />
                <circle cx="470" cy="250" r="3.5" fill="#ef4444" className="filter drop-shadow-[0_0_8px_#ef4444]" />
              </motion.svg>
            </div>

            {/* Main 3D Digital Earth Illustration */}
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.img
                src="/sentinel-digital-earth.png"
                alt="3D Digital Earth Global Security Intelligence"
                className="w-[85%] h-[85%] object-contain pointer-events-none filter drop-shadow-[0_20px_45px_rgba(239,68,68,0.35)]"
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>

            {/* Floating Telemetry Badge (Top Right) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              className="absolute -top-1 right-2 sm:right-6 glass-pill px-3 py-1.5 rounded-lg border border-red-500/40 shadow-[0_0_15px_rgba(239,68,68,0.25)] text-[10px] font-mono text-slate-200 hidden sm:flex items-center gap-1.5 pointer-events-none"
            >
              <Activity className="w-3.5 h-3.5 text-red-400" />
              <span>ACTIVE NODES: 142/142</span>
            </motion.div>

            {/* Floating Telemetry Badge (Bottom Left) */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="absolute bottom-4 left-2 sm:left-6 glass-pill px-3 py-1.5 rounded-lg border border-white/15 shadow-lg text-[10px] font-mono text-slate-200 hidden sm:flex items-center gap-1.5 pointer-events-none"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>DEFENSE MATRIX: OPTIMAL</span>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
