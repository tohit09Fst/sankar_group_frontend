import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { 
  ShieldCheck, AlertTriangle, Activity, Server, Radio, 
  ArrowRight, CheckCircle2, ShieldAlert, RefreshCw
} from 'lucide-react';

export default function DashboardPreviewSection({ onOpenPlatform }) {
  const [activeTab, setActiveTab] = useState('Overview');
  const [refreshSeed, setRefreshSeed] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.command-badge-glow', {
        boxShadow: '0 0 24px rgba(239, 68, 68, 0.7), inset 0 0 10px rgba(239, 68, 68, 0.3)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      gsap.to('.dashboard-btn-aura', {
        boxShadow: '0 0 32px rgba(239, 68, 68, 0.85), 0 0 12px rgba(255, 90, 90, 0.55)',
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    });

    return () => ctx.revert();
  }, []);

  const weeklyData = [
    { day: 'Mon', value: 42, height: '42%' },
    { day: 'Tue', value: 68, height: '68%' },
    { day: 'Wed', value: 35, height: '35%' },
    { day: 'Thu', value: 85, height: '85%' },
    { day: 'Fri', value: 52, height: '52%' },
    { day: 'Sat', value: 24, height: '24%' },
    { day: 'Sun', value: 18, height: '18%' },
  ];

  const recentAlerts = [
    { id: 'ALT-8841', type: 'DDoS Probe Mitigated', severity: 'HIGH', time: '2m ago', status: 'Quarantined', ip: '192.168.4.12' },
    { id: 'ALT-8840', type: 'Zero-Day Injection Prevented', severity: 'CRITICAL', time: '8m ago', status: 'Blocked', ip: '10.0.82.114' },
    { id: 'ALT-8839', type: 'Anomalous Token Request', severity: 'MED', time: '14m ago', status: 'Verified', ip: '172.16.0.45' },
    { id: 'ALT-8838', type: 'TLS 1.3 Key Rotation', severity: 'LOW', time: '22m ago', status: 'Completed', ip: 'gateway.internal' },
  ];

  return (
    <section
      id="dashboard-preview-section"
      ref={containerRef}
      className="relative w-full min-h-screen bg-transparent text-slate-100 flex flex-col justify-between overflow-hidden py-10 sm:py-14 px-4 sm:px-8 md:px-12 lg:px-16 select-none"
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
            COMMAND CENTER // HUD V3.8
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
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-b from-red-600/15 via-red-500/10 to-transparent blur-[130px] pointer-events-none" />

      {/* 1. HEADER AREA: BADGE, HEADLINE, SUBTITLE */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center pt-2">
        {/* YOUR SECURITY COMMAND CENTER Badge */}
        <div className="mb-3.5">
          <div className="command-badge-glow inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/80 bg-red-950/25 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.4)]">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping opacity-80" />
            <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-red-400">
              YOUR SECURITY COMMAND CENTER
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-[-0.03em] leading-tight text-white">
          Complete Visibility.{' '}
          <span className="text-[#f43f5e] drop-shadow-[0_0_25px_rgba(244,63,94,0.7)] font-black">
            Total Control.
          </span>
        </h2>

        {/* Subtitle / Description */}
        <p className="mt-3 text-xs sm:text-sm md:text-[15px] text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Manage your security environment from one intelligent dashboard. Track security events, 
          analyze threats, review alerts, and understand infrastructure health with actionable insights.
        </p>
      </div>

      {/* 2. THE HIGH-TECH COMMAND CENTER DASHBOARD CONTAINER */}
      <div className="relative z-10 w-full max-w-6xl mx-auto mt-8 sm:mt-10">
        
        {/* Outer Glass Dashboard Shell */}
        <div className="relative rounded-2xl bg-gradient-to-b from-[#111726]/95 via-[#0c101a]/95 to-[#06090f]/98 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(239,68,68,0.15)] overflow-hidden">
          
          {/* Top Specular Glass Reflection */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />

          {/* DASHBOARD TOP BAR */}
          <div className="px-5 py-3.5 bg-[#141a29]/80 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
            {/* Left: Brand & Demo Tag */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-red-600/20 border border-red-500/40 flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
                </div>
                <span className="font-mono text-xs font-bold text-white tracking-wider">
                  SENTINEL_DASHBOARD // OS
                </span>
              </div>
              <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 font-semibold">
                ● DEMO STREAM
              </span>
            </div>

            {/* Right: Interactive Dashboard Tabs */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-black/50 border border-white/10 text-xs font-mono">
              {['Overview', 'Threats', 'Network', 'Analytics'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    activeTab === tab
                      ? 'bg-red-600 text-white font-bold shadow-[0_0_12px_rgba(239,68,68,0.5)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* DASHBOARD BODY CONTENT */}
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">

            {/* TOP ROW: 3 KEY WIDGETS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* WIDGET 1: SECURITY SCORE */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                    SECURITY SCORE
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">OPTIMAL</span>
                </div>
                
                {/* Score Number & Circular Dial Visual */}
                <div className="flex items-center justify-between py-1">
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-white font-sans tracking-tight">
                      94<span className="text-xl text-slate-400 font-normal">/100</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Infrastructure hardened against external attack vectors.
                    </div>
                  </div>

                  {/* Circular Progress Meter */}
                  <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#1e293b"
                        strokeWidth="3.2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="3.2"
                        strokeDasharray="94, 100"
                        className="filter drop-shadow-[0_0_6px_#ef4444]"
                      />
                    </svg>
                    <span className="absolute font-mono text-[11px] font-bold text-white">94%</span>
                  </div>
                </div>
              </div>

              {/* WIDGET 2: THREAT SEVERITY */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                    THREAT SEVERITY
                  </span>
                  <span className="text-[10px] font-mono text-red-400">ACTIVE AUDIT</span>
                </div>

                {/* 4 Severity Levels Grid */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="p-2 rounded bg-white/[0.03] border border-white/5 flex items-center justify-between">
                    <span className="text-xs text-red-400 font-bold">Critical</span>
                    <span className="font-mono text-xs font-bold text-white">0</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.03] border border-white/5 flex items-center justify-between">
                    <span className="text-xs text-amber-400 font-bold">High</span>
                    <span className="font-mono text-xs font-bold text-white">2</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.03] border border-white/5 flex items-center justify-between">
                    <span className="text-xs text-blue-400 font-bold">Medium</span>
                    <span className="font-mono text-xs font-bold text-white">5</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.03] border border-white/5 flex items-center justify-between">
                    <span className="text-xs text-emerald-400 font-bold">Low</span>
                    <span className="font-mono text-xs font-bold text-white">14</span>
                  </div>
                </div>
              </div>

              {/* WIDGET 3: NETWORK HEALTH */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                    NETWORK HEALTH
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">● 99.98% NOMINAL</span>
                </div>

                <div className="space-y-2 pt-1 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-[11px] text-slate-400">Global Endpoints:</span>
                    <span className="text-white font-bold">1,024 Nodes Online</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-[11px] text-slate-400">Packet Inspection Latency:</span>
                    <span className="text-emerald-400 font-bold">0.038ms</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-[11px] text-slate-400">Threat Mitigation Rate:</span>
                    <span className="text-red-400 font-bold">100% Intercepted</span>
                  </div>
                </div>
              </div>

            </div>

            {/* BOTTOM ROW: THREAT ACTIVITY (WEEKLY CHART) & RECENT ALERTS */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              
              {/* WIDGET 4: THREAT ACTIVITY (WEEKLY CHART) - 2 Cols */}
              <div className="lg:col-span-2 p-4 rounded-xl bg-black/40 border border-white/10 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                    THREAT ACTIVITY — WEEKLY
                  </span>
                  <span className="font-mono text-[10px] text-red-400">7-DAY VOLUME</span>
                </div>

                {/* Animated Weekly Bar Chart */}
                <div className="h-36 flex items-end justify-between gap-2 pt-4 px-2 border-b border-white/10">
                  {weeklyData.map((d, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: d.height }}
                        transition={{ duration: 0.8, delay: 0.1 * i }}
                        className={`w-full max-w-[28px] rounded-t ${
                          i === 3 || i === 1
                            ? 'bg-gradient-to-t from-red-900 via-red-600 to-red-400 shadow-[0_0_10px_rgba(239,68,68,0.7)]'
                            : 'bg-gradient-to-t from-slate-800 to-slate-400'
                        }`}
                      />
                      <span className="font-mono text-[9px] text-slate-400">{d.day}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex justify-between text-[10px] font-mono text-slate-500">
                  <span>AVG: 45 SIGNALS / DAY</span>
                  <span className="text-emerald-400">NO ZERO-DAY IMPACT</span>
                </div>
              </div>

              {/* WIDGET 5: RECENT ALERTS & ACTIVITY OVERVIEW - 3 Cols */}
              <div className="lg:col-span-3 p-4 rounded-xl bg-black/40 border border-white/10 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                    RECENT ALERTS & ACTIVITY OVERVIEW
                  </span>
                  <span className="font-mono text-[9px] text-slate-400">AUTO-REFRESH: 5s</span>
                </div>

                {/* Event Alert Rows */}
                <div className="space-y-2 h-40 overflow-y-auto pr-1">
                  {recentAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className="p-2 rounded-lg bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-colors flex items-center justify-between gap-2 font-mono text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[8px] font-bold px-1.5 py-0.5 rounded ${
                            alert.severity === 'CRITICAL'
                              ? 'bg-red-950 text-red-400 border border-red-500/50'
                              : alert.severity === 'HIGH'
                              ? 'bg-amber-950 text-amber-400 border border-amber-500/50'
                              : alert.severity === 'MED'
                              ? 'bg-blue-950 text-blue-400 border border-blue-500/50'
                              : 'bg-emerald-950 text-emerald-400 border border-emerald-500/50'
                          }`}
                        >
                          {alert.severity}
                        </span>
                        <div>
                          <div className="text-[11px] text-white font-medium">{alert.type}</div>
                          <div className="text-[9px] text-slate-500">{alert.ip}</div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-[10px] text-emerald-400 font-bold">{alert.status}</div>
                        <div className="text-[9px] text-slate-500">{alert.time}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-slate-500">
                  <span>AUDIT TRAIL: 24/7 ENCRYPTED</span>
                  <span className="text-slate-400 hover:text-white cursor-pointer">VIEW ALL LOGS →</span>
                </div>
              </div>

            </div>

          </div>

          {/* DASHBOARD FOOTER BAR */}
          <div className="px-5 py-3 bg-[#0d121c] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* Required Simulation Disclaimer Notice */}
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-slate-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span>*All dashboard values and events are simulated demonstration data for preview purposes.</span>
            </div>

            {/* Explore Dashboard CTA Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onOpenPlatform && onOpenPlatform('Command Center Dashboard')}
              className="dashboard-btn-aura px-5 py-2 rounded-full text-xs font-semibold text-white glass-button-red flex items-center gap-2 cursor-pointer select-none"
            >
              <span>Explore Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>

        </div>

      </div>

      {/* Spacer at bottom */}
      <div className="h-4" />
    </section>
  );
}

