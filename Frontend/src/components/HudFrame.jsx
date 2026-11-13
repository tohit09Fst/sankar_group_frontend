import React from 'react';

export default function HudFrame() {
  return (
    <div className="pointer-events-none absolute inset-0 z-30 select-none overflow-hidden p-3 sm:p-5 md:p-6">
      {/* Outer Border Contour with Subtle Tech Reticles */}
      <div className="relative w-full h-full rounded-2xl sm:rounded-3xl border border-white/[0.08]">

        {/* TOP LEFT HUD: Bracket & Status */}
        <div className="absolute -top-[1px] -left-[1px]">
          <svg width="44" height="44" viewBox="0 0 48 48" fill="none" className="text-white/40">
            <path
              d="M1 28V14C1 6.8203 6.8203 1 14 1H28"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="1" cy="28" r="1.5" fill="currentColor" />
            <circle cx="28" cy="1" r="1.5" fill="currentColor" />
          </svg>
        </div>

        {/* Top-Left Tag */}
        <div className="absolute top-3.5 left-4 flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-slate-400 font-medium">
              SENTINEL // PROTOCOL
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping opacity-75" />
          </div>
          <div className="flex items-center gap-1">
            <div className="h-[2px] w-6 bg-red-500/80 rounded-full" />
            <div className="h-[2px] w-2 bg-white/40 rounded-full" />
            <div className="h-[1px] w-8 bg-white/10" />
          </div>
        </div>

        {/* TOP RIGHT HUD: Bracket & Telemetry Matrix */}
        <div className="absolute -top-[1px] -right-[1px]">
          <svg width="44" height="44" viewBox="0 0 48 48" fill="none" className="text-white/40">
            <path
              d="M47 28V14C47 6.8203 41.1797 1 34 1H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="47" cy="28" r="1.5" fill="currentColor" />
            <circle cx="20" cy="1" r="1.5" fill="currentColor" />
          </svg>
        </div>

        {/* Top-Right Telemetry Widget */}
        <div className="absolute top-3 right-4 hidden sm:flex flex-col items-end gap-1 font-mono text-[9px] text-slate-400/80 border border-white/10 rounded px-2.5 py-1 bg-black/40 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">● LIVE</span>
            <span className="text-white/60">SYS: AGENT_ACTIVE</span>
            <span className="text-white/30">|</span>
            <span className="text-red-400">THREAT: 0</span>
          </div>
          <div className="flex items-center gap-1.5 text-[8px] text-slate-400">
            <span>NODE_LATENCY: 0.14ms</span>
            <div className="flex gap-[2px]">
              <div className="w-1 h-2 bg-emerald-500/80 rounded-[0.5px]" />
              <div className="w-1 h-2 bg-emerald-500/80 rounded-[0.5px]" />
              <div className="w-1 h-2 bg-emerald-500/60 rounded-[0.5px]" />
              <div className="w-1 h-2 bg-red-500/80 rounded-[0.5px] animate-pulse" />
            </div>
          </div>
        </div>


        {/* BOTTOM LEFT HUD: Bracket */}
        <div className="absolute -bottom-[1px] -left-[1px]">
          <svg width="44" height="44" viewBox="0 0 48 48" fill="none" className="text-white/40">
            <path
              d="M1 20V34C1 41.1797 6.8203 47 14 47H28"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="1" cy="20" r="1.5" fill="currentColor" />
            <circle cx="28" cy="47" r="1.5" fill="currentColor" />
          </svg>
        </div>

        {/* BOTTOM RIGHT HUD: Bracket */}
        <div className="absolute -bottom-[1px] -right-[1px]">
          <svg width="44" height="44" viewBox="0 0 48 48" fill="none" className="text-white/40">
            <path
              d="M47 20V34C47 41.1797 41.1797 47 34 47H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="47" cy="20" r="1.5" fill="currentColor" />
            <circle cx="20" cy="47" r="1.5" fill="currentColor" />
          </svg>
        </div>

      </div>
    </div>
  );
}
