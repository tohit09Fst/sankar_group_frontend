import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldAlert, CheckCircle2, Terminal, Play, RotateCcw, AlertTriangle } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  const [logs, setLogs] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [threatScore, setThreatScore] = useState(0);

  const initialLogs = [
    { type: 'info', text: 'Initializing SENTINEL AI Red Teaming Engine v4.2...' },
    { type: 'info', text: 'Scanning external surface attack vectors: 1,024 nodes verified.' },
    { type: 'warn', text: '[SIMULATION] Injecting zero-day adversarial payload to test neural perimeter.' },
    { type: 'danger', text: '[ATTACK DETECTED] CVE-2026-X: Prompt Hijacking & Privilege Escalation Attempt.' },
    { type: 'success', text: '[SHIELD ACTIVE] Sentinel Neural Firewall intercepted and quarantined vector.' },
    { type: 'success', text: '[SYSTEM SAFE] Threat mitigated in 0.038ms. Defense model updated autonomously.' },
  ];

  useEffect(() => {
    if (isOpen) {
      setLogs([]);
      setIsRunning(true);
      setThreatScore(12);

      let step = 0;
      const interval = setInterval(() => {
        if (step < initialLogs.length) {
          const currentLog = initialLogs[step];
          setLogs((prev) => [...prev, currentLog]);
          if (step === 3) setThreatScore(88);
          if (step === 5) setThreatScore(0);
          step++;
        } else {
          setIsRunning(false);
          clearInterval(interval);
        }
      }, 700);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  const restartSimulation = () => {
    setLogs([]);
    setIsRunning(true);
    setThreatScore(15);
    let step = 0;
    const interval = setInterval(() => {
      if (step < initialLogs.length) {
        setLogs((prev) => [...prev, initialLogs[step]]);
        if (step === 3) setThreatScore(94);
        if (step === 5) setThreatScore(0);
        step++;
      } else {
        setIsRunning(false);
        clearInterval(interval);
      }
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0d111a] border border-white/15 rounded-2xl shadow-2xl overflow-hidden font-mono"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#121722] border-b border-white/10">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-red-500" />
              <span className="text-xs font-semibold text-white tracking-wide">
                SENTINEL AI RED TEAMING — LIVE SANDBOX
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Status HUD bar */}
          <div className="grid grid-cols-3 gap-2 px-5 py-3 bg-[#0a0d14] border-b border-white/5 text-[11px]">
            <div>
              <span className="text-slate-500">DEFENSE STATUS: </span>
              <span className="text-emerald-400 font-bold">OPTIMAL</span>
            </div>
            <div>
              <span className="text-slate-500">THREAT RISK: </span>
              <span className={threatScore > 50 ? 'text-red-400 font-bold' : 'text-emerald-400 font-bold'}>
                {threatScore}%
              </span>
            </div>
            <div className="text-right">
              <span className="text-slate-500">LATENCY: </span>
              <span className="text-white">0.038ms</span>
            </div>
          </div>

          {/* Terminal Console Body */}
          <div className="p-5 h-72 overflow-y-auto space-y-2.5 text-xs bg-[#080a0f]">
            {logs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-start gap-2"
              >
                {log.type === 'info' && <span className="text-cyan-400">[*]</span>}
                {log.type === 'warn' && <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />}
                {log.type === 'danger' && <ShieldAlert className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />}
                {log.type === 'success' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />}
                <span
                  className={
                    log.type === 'danger'
                      ? 'text-red-400 font-bold'
                      : log.type === 'success'
                      ? 'text-emerald-300'
                      : log.type === 'warn'
                      ? 'text-amber-300'
                      : 'text-slate-300'
                  }
                >
                  {log.text}
                </span>
              </motion.div>
            ))}

            {isRunning && (
              <div className="flex items-center gap-2 text-slate-500 pt-2 animate-pulse text-[11px]">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span>Simulating adversarial vectors...</span>
              </div>
            )}
          </div>

          {/* Footer Controls */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#10141e] border-t border-white/10">
            <button
              onClick={restartSimulation}
              disabled={isRunning}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors disabled:opacity-40"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Rerun Attack Simulation
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg text-xs font-sans font-medium text-white bg-red-600 hover:bg-red-500 transition-colors shadow-[0_0_15px_rgba(239,68,68,0.4)]"
            >
              Close Sandbox
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

