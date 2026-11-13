import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { 
  Shield, 
  CheckCircle2, 
  User, 
  Mail, 
  Building2, 
  Users, 
  MessageSquare, 
  ArrowRight, 
  Lock, 
  ChevronDown, 
  Terminal, 
  Activity 
} from 'lucide-react';

export default function ContactFooterSection({ onOpenPlatform, onOpenDemo }) {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    companySize: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.contact-badge-glow', {
        boxShadow: '0 0 24px rgba(239, 68, 68, 0.7), inset 0 0 10px rgba(239, 68, 68, 0.3)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.workEmail) return;

    setIsSubmitting(true);

    // Simulate encrypted API dispatch
    setTimeout(() => {
      const generatedId = `REQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      workEmail: '',
      companyName: '',
      companySize: '',
      message: '',
    });
    setIsSubmitted(false);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="contact-section"
      ref={sectionRef}
      className="relative w-full bg-transparent text-slate-100 flex flex-col justify-between overflow-hidden pt-10 sm:pt-14 pb-8 px-4 sm:px-8 md:px-12 lg:px-16 select-none"
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
            COMMUNICATION // ENCRYPTED_SOCKET
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

      {/* Ambient Red Glow */}
      <div className="absolute top-[10%] right-[10%] w-[600px] h-[400px] rounded-full bg-gradient-to-b from-red-600/12 via-red-500/6 to-transparent blur-[140px] pointer-events-none" />

      {/* ====================================================
          PART 1: CONTACT & DEMO REQUEST FORM
          ==================================================== */}
      <div className="relative z-10 w-full max-w-6xl mx-auto mb-16 sm:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Description, Trust Highlights */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* LET'S SECURE YOUR FUTURE Badge */}
            <div className="mb-4">
              <div className="contact-badge-glow inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/80 bg-red-950/25 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping opacity-80" />
                <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-red-400">
                  LET'S SECURE YOUR FUTURE
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-[-0.03em] leading-tight text-white">
              Take Control of Your{' '}
              <span className="text-[#f43f5e] drop-shadow-[0_0_25px_rgba(244,63,94,0.7)] font-black block sm:inline">
                Digital Security.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-xs sm:text-sm md:text-[15px] text-slate-400 leading-relaxed">
              Ready to take control of your digital security? Connect with our team and discover how SENTINEL can help your business stay informed, prepared, and protected.
            </p>

            {/* Enterprise Highlights / Trust Cards */}
            <div className="mt-8 space-y-3 w-full">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center border border-red-500/30 shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white font-sans">Dedicated Security Architects</div>
                  <div className="text-[11px] text-slate-400 font-mono">Tailored threat profiling for your infrastructure</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shrink-0">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white font-sans">Simulated SOC Command Center</div>
                  <div className="text-[11px] text-slate-400 font-mono">Live telemetry analysis & automated red-teaming</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30 shrink-0">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white font-sans">Rapid Threat Vector Assessment</div>
                  <div className="text-[11px] text-slate-400 font-mono">2-hour guaranteed briefing response SLA</div>
                </div>
              </div>
            </div>

            {/* Quick Status Pill */}
            <div className="mt-6 flex items-center gap-2 text-[10px] font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>DISPATCH SOCKET ACTIVE // 256-BIT AES ENCRYPTED</span>
            </div>
          </div>

          {/* Right Column: Glassmorphic Cyber Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-gradient-to-b from-[#121929]/95 via-[#0d131f]/95 to-[#070a10]/98 border border-white/10 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl">
              {/* Top Accent Specular Highlight */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-red-400" />
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                          DEMO REQUEST PROTOCOL
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">
                        CONFIDENTIAL // V2.8
                      </span>
                    </div>

                    {/* Row 1: Full Name & Work Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#080d16] border border-white/10 focus:border-red-500 focus:ring-1 focus:ring-red-500 text-xs text-white placeholder-slate-600 outline-none transition-all font-sans"
                          />
                        </div>
                      </div>

                      {/* Work Email */}
                      <div>
                        <label className="block text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                          Work Email *
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="email"
                            name="workEmail"
                            required
                            value={formData.workEmail}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#080d16] border border-white/10 focus:border-red-500 focus:ring-1 focus:ring-red-500 text-xs text-white placeholder-slate-600 outline-none transition-all font-sans"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Company Name & Company Size Dropdown */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Company Name */}
                      <div>
                        <label className="block text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                          Company Name
                        </label>
                        <div className="relative">
                          <Building2 className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="Acme Corp"
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#080d16] border border-white/10 focus:border-red-500 focus:ring-1 focus:ring-red-500 text-xs text-white placeholder-slate-600 outline-none transition-all font-sans"
                          />
                        </div>
                      </div>

                      {/* Company Size (Dropdown) */}
                      <div>
                        <label className="block text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                          Company Size
                        </label>
                        <div className="relative">
                          <Users className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <select
                            name="companySize"
                            value={formData.companySize}
                            onChange={handleChange}
                            className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#080d16] border border-white/10 focus:border-red-500 focus:ring-1 focus:ring-red-500 text-xs text-white placeholder-slate-600 outline-none transition-all font-sans appearance-none cursor-pointer"
                          >
                            <option value="" disabled className="bg-[#080d16] text-slate-500">
                              Select Company Size...
                            </option>
                            <option value="1-10" className="bg-[#080d16] text-white">1 - 10 employees</option>
                            <option value="11-50" className="bg-[#080d16] text-white">11 - 50 employees</option>
                            <option value="51-200" className="bg-[#080d16] text-white">51 - 200 employees</option>
                            <option value="201-1000" className="bg-[#080d16] text-white">201 - 1,000 employees</option>
                            <option value="1000+" className="bg-[#080d16] text-white">1,000+ employees (Enterprise)</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* What are you looking to protect? (Message Textarea) */}
                    <div>
                      <label className="block text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                        What are you looking to protect?
                      </label>
                      <div className="relative">
                        <MessageSquare className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                        <textarea
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Describe your security focus (e.g., hybrid cloud nodes, API endpoint vulnerabilities, SOC incident response)..."
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#080d16] border border-white/10 focus:border-red-500 focus:ring-1 focus:ring-red-500 text-xs text-white placeholder-slate-600 outline-none transition-all font-sans resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button: Request a Demo */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white glass-button-red shadow-[0_0_25px_rgba(239,68,68,0.5)] hover:shadow-[0_0_35px_rgba(239,68,68,0.8)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 select-none"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Encrypting & Dispatching Request...</span>
                          </>
                        ) : (
                          <>
                            <span>Request a Demo</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Privacy notice */}
                    <p className="text-[10px] text-center text-slate-500 font-mono pt-1">
                      🔒 Zero spam promise. Your information is securely handled according to enterprise cybersecurity standards.
                    </p>
                  </motion.form>
                ) : (
                  /* Success Message Confirmation Screen */
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-8 px-4 text-center flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                      <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
                    </div>

                    <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-bold mb-3">
                      CONFIRMATION // {submissionId}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Request Confirmed!
                    </h3>

                    {/* EXACT SUCCESS MESSAGE FROM USER PROMPT */}
                    <p className="text-sm sm:text-base text-slate-200 max-w-md mx-auto leading-relaxed font-sans mb-6">
                      Thank you for reaching out! Your demo request has been submitted successfully.
                    </p>

                    <div className="p-4 rounded-xl bg-[#090d15] border border-white/5 max-w-sm w-full text-left font-mono text-xs text-slate-400 mb-6 space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Contact:</span>
                        <span className="text-white">{formData.fullName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Email:</span>
                        <span className="text-white">{formData.workEmail}</span>
                      </div>
                      {formData.companyName && (
                        <div className="flex justify-between">
                          <span className="text-slate-500">Company:</span>
                          <span className="text-white">{formData.companyName}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-slate-500">SLA Dispatch:</span>
                        <span className="text-emerald-400">Within 2 Hours</span>
                      </div>
                    </div>

                    <button
                      onClick={resetForm}
                      className="px-5 py-2 rounded-full text-xs font-mono text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
                    >
                      ← Submit Another Request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      {/* ====================================================
          PART 2: FOOTER (BRAND, TAGLINE, LINKS, COPYRIGHT)
          ==================================================== */}
      <div className="relative z-10 w-full max-w-6xl mx-auto pt-10 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand & Tagline Column */}
          <div className="col-span-2 flex flex-col items-start pr-4">
            {/* Brand Logo */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 shadow-[0_0_12px_rgba(239,68,68,0.4)]">
                <Shield className="w-4 h-4 fill-red-500/30" />
              </div>
              <span className="font-sans text-lg font-black tracking-wider text-white">
                SENTINEL
              </span>
            </div>

            {/* Footer Tagline (from prompt) */}
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed font-sans mb-4">
              Intelligent Security. Stronger Businesses. A Safer Digital Future.
            </p>

            {/* SOC Operational Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-mono text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>SYSTEMS OPERATIONAL // ALL NODES VERIFIED</span>
            </div>
          </div>

          {/* Column 1: Product */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-red-500" />
              Product
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-sans">
              <li>
                <button
                  onClick={() => onOpenPlatform && onOpenPlatform('Overview')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Platform
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('features-section')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing-section')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('dashboard-preview-section')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-red-500" />
              Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-sans">
              <li>
                <button
                  onClick={() => onOpenPlatform && onOpenPlatform('AI Threat Detection')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Threat Detection
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPlatform && onOpenPlatform('Network Protection')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Network Security
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPlatform && onOpenPlatform('Smart Risk Analysis')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Risk Analysis
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPlatform && onOpenPlatform('Global Visibility')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Cloud Security
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Social */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-red-500" />
              Resources
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-sans mb-5">
              <li>
                <button
                  onClick={() => onOpenPlatform && onOpenPlatform('Documentation')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Documentation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPlatform && onOpenPlatform('Security Guides')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Security Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq-section')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact-section')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>

            {/* Social Links */}
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-red-500" />
              Social
            </h4>
            <div className="flex items-center gap-3 text-xs text-slate-400 font-sans">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-400 transition-colors flex items-center gap-1"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-400 transition-colors flex items-center gap-1"
              >
                GitHub
              </a>
              <span>•</span>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-400 transition-colors flex items-center gap-1"
              >
                X
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Security Protocol */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 SENTINEL. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Security Statement</span>
          </div>
        </div>

      </div>

      {/* Spacer */}
      <div className="h-2" />
    </footer>
  );
}

