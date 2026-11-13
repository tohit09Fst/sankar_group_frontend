import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HudFrame from './components/HudFrame';
import BackgroundEffects from './components/BackgroundEffects';
import HeroLeft from './components/HeroLeft';
import HeroRight from './components/HeroRight';
import SecurityIntelligenceSection from './components/SecurityIntelligenceSection';
import FeaturesSection from './components/FeaturesSection';
import DigitalEarthSection from './components/DigitalEarthSection';
import HowItWorksSection from './components/HowItWorksSection';
import DashboardPreviewSection from './components/DashboardPreviewSection';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import ContactFooterSection from './components/ContactFooterSection';
import CyberRadar from './components/CyberRadar';
import CyberSpine from './components/CyberSpine';
import SectionConnector from './components/SectionConnector';
import CyberLoader from './components/CyberLoader';
import WarpTransition from './components/WarpTransition';
import DemoModal from './components/DemoModal';
import PlatformModal from './components/PlatformModal';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [platformModalState, setPlatformModalState] = useState({
    isOpen: false,
    section: 'Overview',
  });

  // Query parameter support for direct section viewing (?section=2, 3, 4, 5, 6, 7, 8, 9)
  const isSection2Direct = typeof window !== 'undefined' && window.location.search.includes('section=2');
  const isSection3Direct = typeof window !== 'undefined' && window.location.search.includes('section=3');
  const isSection4Direct = typeof window !== 'undefined' && window.location.search.includes('section=4');
  const isSection5Direct = typeof window !== 'undefined' && window.location.search.includes('section=5');
  const isSection6Direct = typeof window !== 'undefined' && window.location.search.includes('section=6');
  const isSection7Direct = typeof window !== 'undefined' && window.location.search.includes('section=7');
  const isSection8Direct = typeof window !== 'undefined' && window.location.search.includes('section=8');
  const isSection9Direct = typeof window !== 'undefined' && window.location.search.includes('section=9');

  const isAnyDirect = isSection2Direct || isSection3Direct || isSection4Direct || isSection5Direct || isSection6Direct || isSection7Direct || isSection8Direct || isSection9Direct;

  // Initial site bootloader state (only plays on initial full-page visit)
  const [isLoading, setIsLoading] = useState(!isAnyDirect);

  // Hyperspace / Stretch Warp Transition state on navigation
  const [warpState, setWarpState] = useState({
    isWarping: false,
    targetLabel: '',
  });

  const handleNavigate = (targetId, targetLabel) => {
    // 1. Trigger stretch warp effect
    setWarpState({
      isWarping: true,
      targetLabel: targetLabel || 'SECURITY SECTOR',
    });

    // 2. Smoothly scroll to target
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (targetId === 'hero-section') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 180);

    // 3. Complete warp and restore viewport
    setTimeout(() => {
      setWarpState({ isWarping: false, targetLabel: '' });
    }, 600);
  };

  // Track global mouse position for interactive background glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleOpenPlatform = (section = 'Overview') => {
    setPlatformModalState({
      isOpen: true,
      section,
    });
  };

  const handleClosePlatform = () => {
    setPlatformModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="relative w-full bg-[#07090e] text-slate-100 flex flex-col overflow-x-hidden selection:bg-red-500/30 selection:text-red-200">
      
      {/* 1. Initial Cyber System Bootloader Animation (Plays on initial entry) */}
      {isLoading && (
        <CyberLoader onComplete={() => setIsLoading(false)} />
      )}

      {/* 2. Hyperspace Stretch Warp Overlay on Nav Link Click */}
      <WarpTransition 
        isWarping={warpState.isWarping} 
        targetLabel={warpState.targetLabel} 
      />

      {/* Dynamic Cybernetic Background Ambient Glows & Grid */}
      <BackgroundEffects mousePos={mousePos} />

      {/* Floating Cyber Radar Nav (Mission Waypoints) */}
      {!isAnyDirect && (
        <CyberRadar onNavigate={handleNavigate} />
      )}

      {/* Illuminated Cyber Spine Data Conduit (Left Edge) */}
      {!isAnyDirect && <CyberSpine />}

      {/* Floating Capsule Navigation Bar */}
      <Navbar 
        onOpenDemo={() => setIsDemoOpen(true)}
        onOpenPlatform={handleOpenPlatform}
        onNavigate={handleNavigate}
      />

      {/* =========================================
          SESSION 1: HERO CYBER DEFENSE SHIELD
          ========================================= */}
      {!isAnyDirect && (
        <section 
          id="hero-section" 
          className="relative w-full min-h-screen flex items-center justify-center pt-20 pb-8 px-4 sm:px-8 md:px-12 lg:px-14"
        >
          {/* HUD Frame for Hero Section */}
          <HudFrame />

          <div className="relative z-10 w-full max-w-[1380px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            {/* Left Column: Text, Headline, Buttons, Metrics */}
            <HeroLeft 
              onOpenDemo={() => setIsDemoOpen(true)}
              onOpenPlatform={handleOpenPlatform}
            />

            {/* Right Column: 3D Sentinel Shield Centerpiece */}
            <HeroRight 
              mousePos={mousePos}
              onOpenDemo={() => setIsDemoOpen(true)}
            />
          </div>
        </section>
      )}

      {/* Connector: Hero -> Session 2 */}
      {!isAnyDirect && (
        <SectionConnector 
          nodeNum="NODE 01 // 02" 
          nodeName="TELEMETRY STREAM" 
          subtext="INTEL LINK ESTABLISHED"
        />
      )}

      {/* =========================================
          SESSION 2: SECURITY INTELLIGENCE TICKER & 3D CYBER ORB
          ========================================= */}
      {(!isAnyDirect || isSection2Direct) && (
        <SecurityIntelligenceSection />
      )}

      {/* Connector: Session 2 -> Session 3 */}
      {!isAnyDirect && (
        <SectionConnector 
          nodeNum="NODE 02 // 03" 
          nodeName="CAPABILITIES MATRIX" 
          subtext="AI RED TEAMING ACTIVE"
        />
      )}

      {/* =========================================
          SESSION 3: FEATURES (CODE-BUILT 3D CYBER CARDS)
          ========================================= */}
      {(!isAnyDirect || isSection3Direct) && (
        <FeaturesSection />
      )}

      {/* Connector: Session 3 -> Session 4 */}
      {!isAnyDirect && (
        <SectionConnector 
          nodeNum="NODE 03 // 04" 
          nodeName="ORBITAL SENSORS" 
          subtext="GLOBAL THREAT RADAR"
        />
      )}

      {/* =========================================
          SESSION 4: 3D DIGITAL EARTH (GLOBAL SECURITY INTELLIGENCE)
          ========================================= */}
      {(!isAnyDirect || isSection4Direct) && (
        <DigitalEarthSection 
          onOpenPlatform={handleOpenPlatform}
        />
      )}

      {/* Connector: Session 4 -> Session 5 */}
      {!isAnyDirect && (
        <SectionConnector 
          nodeNum="NODE 04 // 05" 
          nodeName="LOGIC PIPELINE" 
          subtext="4-PHASE INGESTION"
        />
      )}

      {/* =========================================
          SESSION 5: HOW IT WORKS (FOUR STEPS PIPELINE)
          ========================================= */}
      {(!isAnyDirect || isSection5Direct) && (
        <HowItWorksSection />
      )}

      {/* Connector: Session 5 -> Session 6 */}
      {!isAnyDirect && (
        <SectionConnector 
          nodeNum="NODE 05 // 06" 
          nodeName="COMMAND PROTOCOL" 
          subtext="SOC HUB SYNCHRONIZED"
        />
      )}

      {/* =========================================
          SESSION 6: DASHBOARD PREVIEW (COMMAND CENTER)
          ========================================= */}
      {(!isAnyDirect || isSection6Direct) && (
        <DashboardPreviewSection 
          onOpenPlatform={handleOpenPlatform}
        />
      )}

      {/* Connector: Session 6 -> Session 7 */}
      {!isAnyDirect && (
        <SectionConnector 
          nodeNum="NODE 06 // 07" 
          nodeName="SCALING TIERS" 
          subtext="ENCRYPTED ALLOCATION"
        />
      )}

      {/* =========================================
          SESSION 7: PRICING (STARTER, PROFESSIONAL, ENTERPRISE)
          ========================================= */}
      {(!isAnyDirect || isSection7Direct) && (
        <PricingSection 
          onOpenPlatform={handleOpenPlatform}
        />
      )}

      {/* Connector: Session 7 -> Session 8 */}
      {!isAnyDirect && (
        <SectionConnector 
          nodeNum="NODE 07 // 08" 
          nodeName="KNOWLEDGE BASE" 
          subtext="QUERY RESOLVER ONLINE"
        />
      )}

      {/* =========================================
          SESSION 8: FAQ (EVERYTHING YOU NEED TO KNOW)
          ========================================= */}
      {(!isAnyDirect || isSection8Direct) && (
        <FaqSection 
          onOpenDemo={() => setIsDemoOpen(true)}
          onOpenPlatform={handleOpenPlatform}
        />
      )}

      {/* Connector: Session 8 -> Session 9 */}
      {!isAnyDirect && (
        <SectionConnector 
          nodeNum="NODE 08 // 09" 
          nodeName="SECURE DISPATCH" 
          subtext="INCIDENT RESPONSE READY"
        />
      )}

      {/* =========================================
          SESSION 9: CONTACT & FOOTER (LET'S SECURE YOUR FUTURE)
          ========================================= */}
      {(!isAnyDirect || isSection9Direct) && (
        <ContactFooterSection 
          onOpenDemo={() => setIsDemoOpen(true)}
          onOpenPlatform={handleOpenPlatform}
        />
      )}

      {/* Interactive Modals */}
      <DemoModal 
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />

      <PlatformModal
        isOpen={platformModalState.isOpen}
        activeSection={platformModalState.section}
        onClose={handleClosePlatform}
      />

    </div>
  );
}
