import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { 
  ChevronDown, 
  HelpCircle, 
  ArrowRight, 
  Search,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';

const faqItems = [
  {
    id: 1,
    num: '01',
    category: 'PLATFORM',
    question: 'What is SENTINEL?',
    answer:
      'SENTINEL is an AI-powered cybersecurity platform concept designed to provide centralized security monitoring and risk insights across your digital assets.',
    details: 'Simulated multi-layered architecture connecting endpoints, servers, and cloud accounts to provide real-time risk scores and telemetry.',
  },
  {
    id: 2,
    num: '02',
    category: 'AI ENGINE',
    question: 'How does AI threat detection work?',
    answer:
      'It analyzes activity patterns and highlights suspicious behavior that may require investigation.',
    details: 'Neural pattern recognition flags unauthorized access anomalies, zero-day signatures, and payload movements before escalation occurs.',
  },
  {
    id: 3,
    num: '03',
    category: 'INFRASTRUCTURE',
    question: 'Can SENTINEL monitor cloud infrastructure?',
    answer:
      'The platform concept supports visibility across connected infrastructure and compatible data sources.',
    details: 'Seamlessly aggregates telemetry from AWS, Azure, Google Cloud, on-prem Kubernetes clusters, and hybrid network nodes into one single pane.',
  },
  {
    id: 4,
    num: '04',
    category: 'PLANS & TEAMS',
    question: 'Is SENTINEL suitable for small businesses?',
    answer:
      'Yes, its proposed plans are designed for individuals, growing teams, and enterprise organizations.',
    details: 'From individual solo developers seeking peace of mind to enterprise SOC teams managing global infrastructure fleets.',
  },
  {
    id: 5,
    num: '05',
    category: 'TELEMETRY',
    question: 'Does SENTINEL provide real-time monitoring?',
    answer:
      'The Professional and Enterprise product concepts include continuous monitoring capabilities.',
    details: 'Sub-millisecond event streaming, active packet inspections, automated telemetry analysis, and instant alert dispatches.',
  },
  {
    id: 6,
    num: '06',
    category: 'DEMO & SUPPORT',
    question: 'Can I request a product demonstration?',
    answer:
      'Yes, visitors can submit a demo request through the contact section.',
    details: 'Experience a guided interactive session exploring the simulated SOC command dashboard and automated red teaming protocols.',
  },
];

export default function FaqSection({ onOpenDemo, onOpenPlatform }) {
  const [openItems, setOpenItems] = useState([1]); // First item open by default
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.faq-badge-glow', {
        boxShadow: '0 0 24px rgba(239, 68, 68, 0.7), inset 0 0 10px rgba(239, 68, 68, 0.3)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    return () => ctx.revert();
  }, []);

  const toggleItem = (id) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((i) => i !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  const expandAll = () => {
    setOpenItems(faqItems.map((f) => f.id));
  };

  const collapseAll = () => {
    setOpenItems([]);
  };

  // Filter items
  const filteredFaqs = faqItems.filter((item) => {
    const matchesFilter =
      activeFilter === 'ALL' ||
      (activeFilter === 'AI & PLATFORM' && (item.category === 'PLATFORM' || item.category === 'AI ENGINE')) ||
      (activeFilter === 'INFRASTRUCTURE' && (item.category === 'INFRASTRUCTURE' || item.category === 'TELEMETRY')) ||
      (activeFilter === 'BUSINESS & DEMO' && (item.category === 'PLANS & TEAMS' || item.category === 'DEMO & SUPPORT'));

    const matchesSearch =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <section
      id="faq-section"
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
            FAQ ARCHIVE // PROTOCOL_V4
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
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[720px] h-[360px] rounded-full bg-gradient-to-b from-red-600/12 via-red-500/8 to-transparent blur-[120px] pointer-events-none" />

      {/* 1. Header Area: Small Label, Headline, Description */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center pt-2">
        {/* GOT QUESTIONS? Small Label */}
        <div className="mb-3.5">
          <div className="faq-badge-glow inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/80 bg-red-950/25 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.4)]">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping opacity-80" />
            <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-red-400">
              GOT QUESTIONS?
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-[-0.03em] leading-tight text-white">
          Everything You Need to{' '}
          <span className="text-[#f43f5e] drop-shadow-[0_0_25px_rgba(244,63,94,0.7)] font-black">
            Know.
          </span>
        </h2>

        {/* Description */}
        <p className="mt-3 text-xs sm:text-sm md:text-[15px] text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Find answers to common questions about SENTINEL and how our platform helps businesses manage cybersecurity.
        </p>

        {/* Cyber Controls: Search Filter & Category Pills */}
        <div className="mt-6 w-full max-w-4xl flex flex-wrap items-center justify-between gap-3 px-2">
          {/* Search Input Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter questions..."
              className="w-full pl-9 pr-4 py-1.5 rounded-full bg-[#111624] border border-white/10 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/40 transition-all"
            />
          </div>

          {/* Quick Category Tabs */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-[#111624] border border-white/10 text-[11px] font-mono overflow-x-auto">
            {['ALL', 'AI & PLATFORM', 'INFRASTRUCTURE', 'BUSINESS & DEMO'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-red-600/90 text-white font-bold shadow-[0_0_10px_rgba(239,68,68,0.5)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Expand / Collapse All */}
          <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 ml-auto sm:ml-0">
            <button
              onClick={expandAll}
              className="hover:text-red-400 transition-colors cursor-pointer"
            >
              [Expand All]
            </button>
            <span>/</span>
            <button
              onClick={collapseAll}
              className="hover:text-red-400 transition-colors cursor-pointer"
            >
              [Collapse]
            </button>
          </div>
        </div>
      </div>

      {/* 2. Interactive Accordion Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto mt-8 sm:mt-10 px-2 sm:px-4">
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openItems.includes(faq.id);

            return (
              <motion.div
                key={faq.id}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`group relative rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-gradient-to-b from-[#141b29]/95 to-[#0b101a]/95 border border-red-500/60 shadow-[0_10px_30px_rgba(239,68,68,0.15)]'
                    : 'bg-[#0d121c]/80 hover:bg-[#121824]/90 border border-white/10 hover:border-white/25 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
                }`}
              >
                {/* Active Left Neon Accent Bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
                    isOpen
                      ? 'bg-gradient-to-b from-red-500 via-rose-500 to-red-600 shadow-[0_0_12px_rgba(239,68,68,0.8)]'
                      : 'bg-transparent group-hover:bg-white/20'
                  }`}
                />

                {/* Top Subtle Specular Highlight */}
                <div
                  className={`absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent ${
                    isOpen ? 'via-red-400/60' : 'opacity-20'
                  }`}
                />

                {/* Accordion Header / Trigger Button */}
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 flex-1">
                    {/* Index Monospace Tag */}
                    <div
                      className={`shrink-0 px-2.5 py-1 rounded-md font-mono text-xs font-bold transition-all duration-300 ${
                        isOpen
                          ? 'bg-red-500/20 text-red-400 border border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.3)]'
                          : 'bg-white/5 text-slate-400 border border-white/10'
                      }`}
                    >
                      {faq.num}
                    </div>

                    {/* Question Title & Category Badge */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 flex-1">
                      <h3
                        className={`text-sm sm:text-base md:text-[17px] font-semibold transition-colors duration-200 ${
                          isOpen ? 'text-white' : 'text-slate-200 group-hover:text-white'
                        }`}
                      >
                        {faq.question}
                      </h3>

                      <span className="inline-block w-fit font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10">
                        {faq.category}
                      </span>
                    </div>
                  </div>

                  {/* Toggle Chevron Icon */}
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'bg-red-500/20 text-red-400 rotate-180 border border-red-500/40 shadow-[0_0_12px_rgba(239,68,68,0.3)]'
                        : 'bg-white/5 text-slate-400 group-hover:text-white border border-white/10'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Body Content (Framer Motion Expandable) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 border-t border-white/5">
                        {/* Primary Answer from Prompt */}
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans font-medium">
                          {faq.answer}
                        </p>

                        {/* Extra Architectural Insight Box */}
                        <div className="mt-3.5 p-3.5 rounded-xl bg-[#090d15] border border-white/5 flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          <div className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-mono">
                            <span className="text-red-400 font-semibold">// ARCHITECTURE SPEC: </span>
                            {faq.details}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          {/* Empty State when Search Query has no matches */}
          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 rounded-2xl bg-[#0d121c]/60 border border-white/10">
              <HelpCircle className="w-10 h-10 text-slate-500 mx-auto mb-3" />
              <p className="text-sm text-slate-300 font-medium">No matching questions found.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilter('ALL');
                }}
                className="mt-3 text-xs font-mono text-red-400 hover:underline"
              >
                Reset search filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 3. Bottom Callout / Help Banner */}
      <div className="relative z-10 w-full max-w-4xl mx-auto mt-10 sm:mt-12 px-2 sm:px-4">
        <div className="relative rounded-2xl p-6 sm:p-7 bg-gradient-to-r from-[#121929]/90 via-[#0d131f]/90 to-[#121929]/90 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
          {/* Left Text */}
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0 hidden sm:flex">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white tracking-wide">
                Still have questions about SENTINEL?
              </h4>
              <p className="text-xs text-slate-400 mt-1 max-w-md">
                Request a guided product demonstration to inspect live simulated SOC telemetry and AI red-teaming.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenDemo}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-xs font-semibold text-white glass-button-red shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Request Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => onOpenPlatform && onOpenPlatform('Architecture FAQ')}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white glass-button-dark border border-white/15 hover:border-white/30 transition-all cursor-pointer whitespace-nowrap"
            >
              Explore Specs
            </button>
          </div>
        </div>
      </div>

      {/* Spacer at bottom */}
      <div className="h-4" />
    </section>
  );
}
