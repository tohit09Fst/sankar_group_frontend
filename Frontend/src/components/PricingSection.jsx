import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { Check, ArrowRight, Sparkles, Building2, User, Users } from 'lucide-react';

const pricingPlans = [
  {
    id: 'starter',
    name: 'STARTER',
    badge: null,
    subtitle: 'For individuals exploring smarter security.',
    priceMonthly: '$49',
    priceAnnual: '$39',
    period: '/ month',
    features: [
      'Basic security dashboard',
      'Limited event monitoring',
      'Basic risk insights',
      'Community support',
    ],
    ctaText: 'Get Started',
    isPopular: false,
    icon: User,
  },
  {
    id: 'professional',
    name: 'PROFESSIONAL',
    badge: 'MOST POPULAR',
    subtitle: 'For growing teams and businesses.',
    priceMonthly: '$249',
    priceAnnual: '$199',
    period: '/ month',
    features: [
      'Advanced threat analytics',
      'Real-time monitoring interface',
      'Network activity insights',
      'Priority support',
      'Custom alerts',
    ],
    ctaText: 'Choose Professional',
    isPopular: true,
    icon: Users,
  },
  {
    id: 'enterprise',
    name: 'ENTERPRISE',
    badge: null,
    subtitle: 'For organizations with advanced requirements.',
    priceMonthly: 'Custom',
    priceAnnual: 'Custom',
    period: '',
    features: [
      'Enterprise security insights',
      'Custom integrations',
      'Advanced reporting',
      'Dedicated support',
      'Flexible deployment options',
    ],
    ctaText: 'Contact Sales',
    isPopular: false,
    icon: Building2,
  },
];

function PricingCard({ plan, isAnnual, onSelect, index }) {
  const cardRef = useRef(null);

  // 3D Parallax tilt spring physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 22, stiffness: 180 };
  const rotateX = useSpring(useTransform(y, [-150, 150], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(x, [-150, 150], [-5, 5]), springConfig);

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

  const Icon = plan.icon;
  const currentPrice = isAnnual ? plan.priceAnnual : plan.priceMonthly;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ y: -8, scale: plan.isPopular ? 1.03 : 1.02 }}
      className={`relative flex flex-col justify-between rounded-2xl cursor-pointer select-none ${
        plan.isPopular ? 'z-20' : 'z-10'
      }`}
    >
      {/* Outer Glow (Stronger on Popular Plan) */}
      <div
        className={`absolute inset-0 rounded-2xl transition-opacity duration-500 blur-xl pointer-events-none ${
          plan.isPopular
            ? 'bg-gradient-to-b from-red-600/25 via-red-600/15 to-transparent opacity-80 group-hover:opacity-100'
            : 'bg-gradient-to-b from-white/5 to-transparent opacity-0 hover:opacity-100'
        }`}
      />

      {/* Card Body */}
      <div
        className={`relative w-full h-full rounded-2xl bg-gradient-to-b from-[#131926]/95 via-[#0d121c]/95 to-[#070a10]/98 border shadow-[0_15px_40px_rgba(0,0,0,0.7)] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
          plan.isPopular
            ? 'border-red-500/80 shadow-[0_0_30px_rgba(239,68,68,0.25)]'
            : 'border-white/10 hover:border-white/30'
        }`}
      >
        {/* Top Edge Specular White Highlight */}
        <div
          className={`absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent ${
            plan.isPopular ? 'via-red-400 opacity-90' : 'opacity-40'
          }`}
        />

        {/* Popular Badge */}
        {plan.badge && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-[10px] font-mono font-bold text-white uppercase tracking-wider shadow-[0_0_15px_rgba(239,68,68,0.6)] flex items-center gap-1.5 border border-red-300/40">
            <Sparkles className="w-3 h-3" />
            <span>{plan.badge}</span>
          </div>
        )}

        <div>
          {/* Plan Header */}
          <div className="flex items-center justify-between mb-3 pt-1">
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  plan.isPopular
                    ? 'bg-red-500/20 text-red-400 border border-red-500/40'
                    : 'bg-white/5 text-slate-300 border border-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>
              <h3 className="font-sans text-base sm:text-lg font-black text-white tracking-wide">
                {plan.name}
              </h3>
            </div>
            <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">
              TIER // {plan.id.toUpperCase()}
            </span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed min-h-[36px]">
            {plan.subtitle}
          </p>

          {/* Price Display */}
          <div className="my-5 pb-5 border-b border-white/10 flex items-baseline gap-1.5">
            <span className="text-3xl sm:text-4xl font-black text-white font-sans tracking-tight">
              {currentPrice}
            </span>
            {plan.period && (
              <span className="text-xs font-mono text-slate-400">{plan.period}</span>
            )}
          </div>

          {/* Features List */}
          <div className="space-y-3 mb-6">
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
              INCLUDED CAPABILITIES:
            </div>
            <ul className="space-y-2.5">
              {plan.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      plan.isPopular
                        ? 'bg-red-500/20 text-red-400 border border-red-500/40'
                        : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    }`}
                  >
                    <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                  </div>
                  <span className="leading-tight">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <button
            onClick={() => onSelect(plan.name)}
            className={`w-full py-3 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              plan.isPopular
                ? 'glass-button-red text-white shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)]'
                : 'glass-button-dark text-white/90 hover:text-white border border-white/20 hover:border-white/40'
            }`}
          >
            <span>{plan.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </motion.div>
  );
}

export default function PricingSection({ onOpenPlatform }) {
  const [isAnnual, setIsAnnual] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.pricing-badge-glow', {
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
      id="pricing-section"
      ref={sectionRef}
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
            PRICING TIERS // ENCRYPTED
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

      {/* 1. Header Area: Badge, Headline, Subtitle, Billing Toggle */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center pt-2">
        {/* SIMPLE & TRANSPARENT PRICING Badge */}
        <div className="mb-3.5">
          <div className="pricing-badge-glow inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/80 bg-red-950/25 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.4)]">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping opacity-80" />
            <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-red-400">
              SIMPLE & TRANSPARENT PRICING
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-[-0.03em] leading-tight text-white">
          Security That Scales{' '}
          <span className="text-[#f43f5e] drop-shadow-[0_0_25px_rgba(244,63,94,0.7)] font-black">
            With You.
          </span>
        </h2>

        {/* Subtitle / Description */}
        <p className="mt-3 text-xs sm:text-sm md:text-[15px] text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Choose a plan that matches your security requirements and scale your protection as your business grows.
        </p>

        {/* Monthly / Annual Billing Toggle Switch */}
        <div className="mt-6 flex items-center gap-3 p-1 rounded-full bg-[#111624] border border-white/10 text-xs font-mono">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-4 py-1.5 rounded-full transition-all ${
              !isAnnual
                ? 'bg-red-600 text-white font-bold shadow-[0_0_12px_rgba(239,68,68,0.5)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
              isAnnual
                ? 'bg-red-600 text-white font-bold shadow-[0_0_12px_rgba(239,68,68,0.5)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>Annual</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
              SAVE 20%
            </span>
          </button>
        </div>
      </div>

      {/* 2. Grid of Three Pricing Plan Cards */}
      <div className="relative z-10 w-full max-w-6xl mx-auto mt-8 sm:mt-10 px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6 lg:gap-8 items-stretch">
          {pricingPlans.map((plan, idx) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              isAnnual={isAnnual}
              onSelect={(planName) => onOpenPlatform && onOpenPlatform(planName)}
              index={idx}
            />
          ))}
        </div>
      </div>

      {/* Spacer at bottom */}
      <div className="h-4" />
    </section>
  );
}
