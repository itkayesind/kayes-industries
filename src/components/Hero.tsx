import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { ChevronDown, ArrowRight, ShieldCheck } from 'lucide-react';
import { ElegantPatternBg } from './ui/elegant-dark-pattern';

export const Hero: React.FC = () => {
  const handleScrollDown = () => {
    const nextSection = document.getElementById('industries-overview');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="brand-hero" className="w-full relative">
      <ElegantPatternBg theme="dark" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Top Status Tag */}
        <div className="w-full max-w-7xl flex items-center justify-between text-xs text-slate-400 animate-top-reveal">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span className="font-medium text-slate-200">{COMPANY_INFO.certification}</span>
          </div>
          <div className="hidden sm:block text-slate-500 font-mono">
            Chennai, India &bull; Direct Factory Dispatch
          </div>
        </div>

        {/* Middle Brand Entity - Pure Centered Brand Presentation */}
        <div className="my-auto text-center max-w-3xl px-4 py-6 flex flex-col items-center">
          
          {/* Pure Diamond Logo Emblem & Brand Title with Long Staggered Entrance */}
          <div className="animate-brand-reveal flex flex-col items-center">
            {/* Pure Faceted Diamond Emblem (No Text) */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white/10 backdrop-blur-md p-3 flex items-center justify-center mb-6 shadow-2xl border border-white/20 relative group">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-white flex items-center justify-center p-2.5 shadow-inner">
                <img
                  src="/images/brand/kays-diamond-icon.png"
                  alt="KAYS Diamond Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Luxury ambient cyan/platinum glow ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-cyan-500/30 opacity-60 blur-md -z-10 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Fancy Brand Name (Cinzel Roman Luxury Typography) */}
            <div className="space-y-2 mb-4">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[0.12em] text-white font-brand uppercase drop-shadow-sm">
                KAYS
              </h1>
              <div className="text-xs sm:text-base lg:text-lg font-semibold tracking-[0.35em] text-slate-300 font-brand uppercase">
                INDUSTRIES PVT LTD
              </div>
            </div>
          </div>

          {/* Subtitle / Core Statement appearing with smooth delay */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-xl mx-auto leading-relaxed mb-8 animate-subtext-reveal font-sans">
            Diamond Cutting &amp; Grinding Tools for the <strong className="text-white">Glass Industry</strong>, <strong className="text-white">Technical Ceramics</strong> &amp; <strong className="text-white">Semiconductor Processing</strong>.
          </p>

          {/* Only One Button: View Product Catalogue (Appears after the main brand name) */}
          <div className="animate-button-reveal">
            <a
              href="#catalog"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-white text-slate-950 hover:bg-slate-100 transition-all shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] tracking-wide btn-luxury cursor-pointer"
            >
              <span>View Product Catalogue</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </a>
          </div>

        </div>

        {/* Bottom Assisted Scroll Indicator (Appears last) */}
        <div className="w-full flex flex-col items-center justify-center pb-2 animate-scroll-reveal">
          <button
            onClick={handleScrollDown}
            className="group flex flex-col items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors focus:outline-none cursor-pointer"
            aria-label="Scroll to explore"
          >
            <span className="text-[11px] font-medium tracking-wider uppercase font-brand">Scroll to explore</span>
            <div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-xs flex items-center justify-center group-hover:border-white/50 transition-colors shadow-2xs animate-bounce-slow">
              <ChevronDown className="w-4 h-4 text-slate-300" />
            </div>
          </button>
        </div>
      </ElegantPatternBg>
    </section>
  );
};
