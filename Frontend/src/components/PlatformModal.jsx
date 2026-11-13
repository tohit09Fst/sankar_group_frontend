import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Cpu, Network, Lock, Sparkles, Check } from 'lucide-react';

export default function PlatformModal({ isOpen, onClose, activeSection }) {
  if (!isOpen) return null;

  const features = [
    {
      icon: Cpu,
      title: 'Autonomous Red Teaming',
      desc: 'Continuous ethical AI agents simulating zero-day attacks across your perimeter before adversaries can find them.',
    },
    {
      icon: ShieldCheck,
      title: 'Real-Time Neural Firewall',
      desc: 'Sub-millisecond packet and query inspection, thwarting prompt injections, data exfiltration, and unauthorized access.',
    },
    {
      icon: Network,
      title: 'Decentralized Threat Graph',
      desc: 'Collaborative threat intelligence connecting 10M+ daily signals into actionable defensive rulesets.',
    },
    {
      icon: Lock,
      title: 'Quantum-Resistant Encryption',
      desc: 'Future-proof cryptographic barriers designed to protect sensitive mission-critical enterprise secrets.',
    },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0d111a] border border-white/15 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#121722] border-b border-white/10">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-red-500" />
              <h3 className="text-sm font-semibold text-white tracking-wide uppercase font-mono">
                SENTINEL PLATFORM — {activeSection || 'OVERVIEW'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-white">
                Next-Generation Threat Mitigation Architecture
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Sentinel unites continuous autonomous penetration testing with instant edge-level AI defense to make your infrastructure impenetrable.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {features.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-red-500/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 text-red-400" />
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1">{feat.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Quick Benefits list */}
            <div className="pt-2 border-t border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sub-millisecond real-time latency</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>SOC2 Type II & ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Automated compliance reporting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero-day vulnerability discovery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 px-6 py-4 bg-[#10141e] border-t border-white/10">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-red-600 hover:bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all"
            >
              Deploy Sentinel Agent
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

