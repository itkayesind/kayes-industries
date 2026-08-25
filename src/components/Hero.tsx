import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { ChevronDown, ArrowRight, ShieldCheck } from 'lucide-react';
import { ElegantPatternBg } from './ui/elegant-dark-pattern';
import { LiquidButton } from './ui/liquid-glass-button';

export const Hero: React.FC = () => {
  const handleScrollDown = () => {
    const nextSection = document.getElementById('industries-overview');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToCatalog = () => {
    const catalogSection = document.getElementById('catalog');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="brand-hero" className="w-full relative">
      <ElegantPatternBg theme="light" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Top Status Tag */}
        <div className="w-full max-w-7xl flex items-center justify-between text-xs text-slate-500 animate-top-reveal">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-700" />
            <span className="font-semibold text-slate-800">{COMPANY_INFO.certification}</span>
          </div>
          <div className="hidden sm:block text-slate-500 font-mono">
            Chennai, India &bull; Direct Factory Dispatch
          </div>
        </div>

        {/* Middle Brand Entity - Pure Centered Brand Presentation */}
        <div className="my-auto text-center max-w-3xl px-4 py-6 flex flex-col items-center">
          
          {/* Pure Diamond Logo Emblem & Brand Title with Expanded Staggered Entrance */}
          <div className="flex flex-col items-center">
            {/* Pure Faceted Diamond Emblem - emblemEntrance (earliest) */}
            <div className="animate-emblem-reveal w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-slate-900/5 backdrop-blur-md p-3 flex items-center justify-center mb-6 shadow-xl border border-slate-200/80 relative group will-change-transform">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-white flex items-center justify-center p-2 shadow-xs border border-slate-100">
                <img
                  src="/images/brand/kays-logo-1x1.svg"
                  alt="KAYS Diamond Emblem"
                  className="w-full h-full object-contain"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width="112"
                  height="112"
                />
              </div>
              {/* Luxury ambient glow ring - also expanded with glowPulse */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-slate-300/40 via-cyan-500/20 to-slate-300/40 opacity-40 blur-md -z-10 group-hover:opacity-80 transition-opacity animate-pulse-glow" style={{ animation: 'glowPulse 3.2s ease-in-out 1.8s infinite' }} />
            </div>

            {/* Fancy Brand Name - titleTrackingReveal (staggered after emblem) */}
            <div className="animate-title-reveal space-y-2 mb-4">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[0.12em] text-slate-950 font-brand uppercase drop-shadow-xs">
                KAYS
              </h1>
              <div className="text-xs sm:text-base lg:text-lg font-semibold tracking-[0.35em] text-slate-600 font-brand uppercase">
                INDUSTRIES PVT LTD
              </div>
            </div>
          </div>

          {/* Subtitle / Core Statement appearing with smooth delay */}
          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-xl mx-auto leading-relaxed mb-8 animate-subtext-reveal font-sans">
            Diamond Cutting &amp; Grinding Tools for the <strong className="text-slate-950 font-semibold">Glass Industry</strong>, <strong className="text-slate-950 font-semibold">Technical Ceramics</strong> &amp; <strong className="text-slate-950 font-semibold">Semiconductor Processing</strong>.
          </p>

          {/* Liquid Glass Button: View Product Catalogue */}
          <div className="animate-button-reveal">
            <LiquidButton
              onClick={handleScrollToCatalog}
              size="xl"
              aria-label="View product catalogue"
              className="text-slate-950 font-semibold tracking-wide cursor-pointer"
            >
              <span>View Product Catalogue</span>
              <ArrowRight className="w-4 h-4 text-slate-950 ml-1" />
            </LiquidButton>
          </div>

        </div>

        {/* Bottom Scroll Indicator - Pure Elegant Text */}
        <div className="w-full flex flex-col items-center justify-center pb-4 animate-scroll-reveal">
          <button
            type="button"
            onClick={handleScrollDown}
            aria-label="Scroll to industries overview"
            className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer select-none group"
          >
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase font-brand">
              Scroll to explore
            </span>
            <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors animate-bounce-slow" />
          </button>
        </div>
      </ElegantPatternBg>
    </section>
  );
};
