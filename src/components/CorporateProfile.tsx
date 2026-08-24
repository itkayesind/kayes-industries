import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { Award, Phone, Mail, MapPin } from 'lucide-react';
import { LiquidButton } from './ui/liquid-glass-button';

export const CorporateProfile: React.FC = () => {
  const handleContactExecutive = () => {
    const text = encodeURIComponent(
      `Hello Mr. D. Kamal Nathan / KAYES INDUSTRIES, I am reaching out to discuss industrial tooling requirements for our manufacturing facility.`
    );
    window.open(`https://wa.me/919841279658?text=${text}`, '_blank');
  };

  return (
    <section id="about" className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      
      {/* Decorative luxury watermark */}
      <div className="absolute top-1/2 -right-40 -translate-y-1/2 w-[550px] h-[550px] opacity-[0.03] pointer-events-none select-none">
        <img
          src="/images/brand/kays-logo-1x1.svg"
          alt="Watermark"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 reveal-on-scroll">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-6 h-px bg-slate-400"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 font-brand">
              Corporate Heritage &bull; Catalogue Page 2
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight font-brand">
            Pioneering Precision Superabrasives
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3.5 leading-relaxed font-sans">
            Founded with an uncompromising commitment to precision engineering, KAYES INDUSTRIES PVT LTD operates high-temperature sintering presses and CNC automated balancing lines serving global glass fabricators.
          </p>
        </div>

        {/* Editorial Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center reveal-on-scroll">
          
          {/* Left Column: Executive Card & Plant Credentials */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Executive Portrait Card */}
            <div className="bg-[#FAF9F6] rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6 relative overflow-hidden group">
              
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-200 border-2 border-white shadow-md flex-shrink-0">
                  <img
                    src="/images/brand/executive-portrait.jpg"
                    alt={COMPANY_INFO.executive.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
                
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-brand">
                    {COMPANY_INFO.executive.name}
                  </h3>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-600 font-brand">
                    {COMPANY_INFO.executive.title}
                  </div>
                  <div className="text-[11px] font-mono text-cyan-800 mt-1">
                    Direct Procurement Authority
                  </div>
                </div>
              </div>

              {/* Quality & Certification Stamp */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 flex items-center gap-3.5 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 text-amber-700">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 font-brand">
                    {COMPANY_INFO.certification} Certified
                  </div>
                  <div className="text-[11px] text-slate-500 font-sans">
                    FEPA Dimension Standards &amp; Dynamic Balancing
                  </div>
                </div>
              </div>

              {/* Plant Facilities Details */}
              <div className="space-y-2 text-xs text-slate-600 font-sans pt-1">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{COMPANY_INFO.address.full}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span className="font-mono text-slate-900 font-semibold">{COMPANY_INFO.contacts.mobile}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span className="font-mono text-slate-700">{COMPANY_INFO.contacts.emails[0]}</span>
                </div>
              </div>

              <div className="pt-2">
                <LiquidButton
                  onClick={handleContactExecutive}
                  size="lg"
                  className="w-full text-slate-950 font-semibold cursor-pointer"
                >
                  <span>Connect with Executive Desk</span>
                </LiquidButton>
              </div>

            </div>

          </div>

          {/* Right Column: Editorial Letter & Stat Highlights */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Executive Letter Message */}
            <div className="space-y-5 text-slate-700 font-sans text-sm sm:text-base leading-relaxed">
              <div className="text-xs font-mono font-bold text-cyan-800 uppercase tracking-widest">
                DIRECTIVE FROM THE EXECUTIVE DESK
              </div>

              <p className="font-serif italic text-lg sm:text-xl text-slate-900 leading-snug border-l-2 border-slate-900 pl-4">
                &ldquo;Our commitment is measured in microns. We produce diamond tools that maintain profile geometry across tens of thousands of linear meters of high-speed glass processing.&rdquo;
              </p>

              <p>
                {COMPANY_INFO.executive.message}
              </p>

              <p className="text-xs sm:text-sm text-slate-600">
                {COMPANY_INFO.facilityHighlight} Our in-house sintering technology guarantees homogeneous diamond concentration, minimal edge chipping, and exceptional tool longevity across CNC double edgers, beveling lines, and optical lens curve generators.
              </p>
            </div>

            {/* 3-Stat Metric Counter Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200">
              
              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-slate-200/80 space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-slate-950 font-mono">
                  30+
                </div>
                <div className="text-xs font-semibold text-slate-700 font-brand">
                  Years of Heritage
                </div>
                <div className="text-[10px] text-slate-500 font-sans">
                  Direct factory service
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-slate-200/80 space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-slate-950 font-mono">
                  100%
                </div>
                <div className="text-xs font-semibold text-slate-700 font-brand">
                  Sintered In-House
                </div>
                <div className="text-[10px] text-slate-500 font-sans">
                  Automated press matrix
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-slate-200/80 space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-slate-950 font-mono">
                  50k+
                </div>
                <div className="text-xs font-semibold text-slate-700 font-brand">
                  Tools Delivered
                </div>
                <div className="text-[10px] text-slate-500 font-sans">
                  Across glass &amp; ceramics
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
