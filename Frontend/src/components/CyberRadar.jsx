import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'hero-section', label: 'SHIELD CORE', num: '01' },
  { id: 'security-ticker-section', label: 'LIVE INTEL', num: '02' },
  { id: 'features-section', label: 'CAPABILITIES', num: '03' },
  { id: 'digital-earth-section', label: 'GLOBAL INTEL', num: '04' },
  { id: 'how-it-works-section', label: 'WORKFLOW', num: '05' },
  { id: 'dashboard-preview-section', label: 'COMMAND SOC', num: '06' },
  { id: 'pricing-section', label: 'PRICING TIERS', num: '07' },
  { id: 'faq-section', label: 'KNOWLEDGE BASE', num: '08' },
  { id: 'contact-section', label: 'DISPATCH', num: '09' },
];

export default function CyberRadar({ onNavigate }) {
  const [activeSection, setActiveSection] = useState('hero-section');
  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.4;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id, label) => {
    if (onNavigate) {
      onNavigate(id, label);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-3 pointer-events-auto select-none">
      
      {/* Waypoint Radar Bar */}
      <div className="relative py-3 px-2 rounded-full bg-[#0a0f18]/80 border border-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col items-center gap-2.5">
        
        {/* Top Active Radar Scanner Blip */}
        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping mb-1" />

        {/* Vertical Rail Line */}
        <div className="absolute top-7 bottom-7 w-[1px] bg-gradient-to-b from-white/10 via-red-500/30 to-white/10 pointer-events-none" />

        {/* Waypoint Pips */}
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          const isHovered = hoveredSection === sec.id;

          return (
            <div
              key={sec.id}
              className="relative flex items-center justify-center group"
              onMouseEnter={() => setHoveredSection(sec.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {/* Tooltip Label (Floats out to the left) */}
              <div
                className={`absolute right-7 px-2.5 py-1 rounded-md bg-[#0e1422] border border-red-500/40 text-[9px] font-mono text-white whitespace-nowrap shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all duration-200 pointer-events-none flex items-center gap-1.5 ${
                  isActive || isHovered
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-2'
                }`}
              >
                <span className="text-red-400 font-bold">{sec.num}</span>
                <span className="text-slate-300 font-medium">// {sec.label}</span>
              </div>

              {/* Pip Button */}
              <button
                onClick={() => scrollTo(sec.id, sec.label)}
                aria-label={`Jump to ${sec.label}`}
                className={`relative w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'scale-125'
                    : 'scale-90 opacity-40 hover:opacity-100 hover:scale-110'
                }`}
              >
                {/* Outer Reticle Ring on Active */}
                {isActive && (
                  <motion.div
                    layoutId="activeRadarRing"
                    className="absolute inset-0 rounded-full border border-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}

                {/* Core Pip Dot */}
                <div
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                    isActive
                      ? 'bg-red-500 shadow-[0_0_8px_#ef4444]'
                      : 'bg-white/60 group-hover:bg-white'
                  }`}
                />
              </button>
            </div>
          );
        })}

        {/* Bottom Tag */}
        <span className="font-mono text-[7px] text-slate-500 tracking-tighter mt-1">
          RADAR
        </span>
      </div>
    </div>
  );
}

