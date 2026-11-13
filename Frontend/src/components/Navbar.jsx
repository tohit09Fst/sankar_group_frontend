import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenDemo, onOpenPlatform, onNavigate }) {
  const [activeTab, setActiveTab] = useState('SENTINEL');

  const scrollToSection = (id, label) => {
    if (onNavigate) {
      onNavigate(id, label);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (id, label) => {
    setActiveTab(id);
    if (id === 'SENTINEL') {
      if (onNavigate) {
        onNavigate('hero-section', 'SENTINEL CORE');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (id === 'Features') {
      scrollToSection('features-section', 'FEATURES');
    } else if (id === 'How It Works') {
      scrollToSection('how-it-works-section', 'HOW IT WORKS');
    } else if (id === 'Dashboard') {
      scrollToSection('dashboard-preview-section', 'DASHBOARD');
    } else if (id === 'Global Intel') {
      scrollToSection('digital-earth-section', 'GLOBAL INTEL');
    } else if (id === 'Pricing') {
      scrollToSection('pricing-section', 'PRICING');
    } else if (id === 'FAQ') {
      scrollToSection('faq-section', 'FAQ');
    } else if (id === 'Contact') {
      scrollToSection('contact-section', 'CONTACT US');
    }
  };

  const navItems = [
    { id: 'SENTINEL', label: 'SENTINEL' },
    { id: 'Features', label: 'Features' },
    { id: 'How It Works', label: 'How It Works' },
    { id: 'Dashboard', label: 'Dashboard' },
    { id: 'Global Intel', label: 'Global Intel' },
    { id: 'Pricing', label: 'Pricing' },
    { id: 'FAQ', label: 'FAQ' },
    { id: 'Contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-[70] pt-3 sm:pt-4 px-3 sm:px-4 flex justify-center items-center pointer-events-none">
      {/* Desktop Floating Pill Navigation */}
      <motion.nav 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-pill pointer-events-auto rounded-full p-1 sm:p-1.5 flex items-center justify-between gap-1 shadow-[0_10px_35px_rgba(0,0,0,0.6)] border border-white/10 max-w-[96vw] overflow-x-auto"
      >
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id, item.label)}
                className={`relative px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-medium transition-all duration-300 outline-none select-none whitespace-nowrap ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 rounded-full bg-[#161c28] border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5 tracking-wide">
                  {item.id === 'SENTINEL' && (
                    <Shield className="w-3.5 h-3.5 text-red-500 fill-red-500/20" />
                  )}
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Get Started Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onOpenPlatform('Get Started')}
          className="relative ml-1 px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-medium text-white border border-white/25 hover:border-white/50 bg-gradient-to-r from-white/5 to-white/10 hover:from-white/10 hover:to-white/20 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] cursor-pointer whitespace-nowrap"
        >
          <span className="relative z-10 flex items-center gap-1">
            Get Started
            <ChevronRight className="w-3 h-3 opacity-70" />
          </span>
        </motion.button>
      </motion.nav>
    </header>
  );
}
