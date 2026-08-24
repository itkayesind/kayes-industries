import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const IndustriesOverview: React.FC = () => {
  return (
    <section id="industries-overview" className="py-24 bg-[#FAF9F6] border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Ambient background soft light */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <div className="max-w-3xl mb-16 reveal-on-scroll">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-6 h-px bg-slate-400"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 font-brand">
              Sector Directory &bull; Glass &amp; Advanced Materials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight font-brand">
            Industrial Diamond Tooling
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3.5 leading-relaxed">
            Engineered for high-volume automated processing lines and custom fabrication across every glass sector, with a dedicated R&amp;D team developing custom tools for advanced ceramics and semiconductor processing.
          </p>
        </div>

        {/* 4 High-Res Visual Product Highlights with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="corporate-card rounded-2xl p-4 bg-white flex flex-col justify-between shadow-2xs border-slate-200 group reveal-on-scroll reveal-delay-1">
            <div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-4 border border-slate-100 relative">
                <img
                  src="/images/products/glass-edging-wheels-studio.jpg"
                  alt="Glass Edging Wheels"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] block mb-1 font-brand">
                Glass Pre-Processing
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug font-sans group-hover:text-slate-800">
                Pencil Edging &amp; Beveling Wheels
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Segmented (POS 1) and continuous (POS 2) wheels for automotive, architectural, and appliance glass.
              </p>
            </div>
            <div className="pt-3.5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-mono text-slate-500 text-[11px]">1FF6Y / 1EE6Y</span>
              <a href="#catalog" className="text-slate-900 font-semibold hover:underline inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                <span>Catalogue</span>
                <ArrowRight className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          <div className="corporate-card rounded-2xl p-4 bg-white flex flex-col justify-between shadow-2xs border-slate-200 group reveal-on-scroll reveal-delay-2">
            <div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-4 border border-slate-100 relative">
                <img
                  src="/images/products/glass-core-drills-studio.jpg"
                  alt="Diamond Core Drills"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] block mb-1 font-brand">
                Precision Drilling
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug font-sans group-hover:text-slate-800">
                Sintered Core Drills &amp; Routers
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Internal water coolant flow for clean, chip-free drilling from 3mm to 150mm and CNC router bits.
              </p>
            </div>
            <div className="pt-3.5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-mono text-slate-500 text-[11px]">3A2 / 1/2&quot; Shank</span>
              <a href="#catalog" className="text-slate-900 font-semibold hover:underline inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                <span>Catalogue</span>
                <ArrowRight className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          <div className="corporate-card rounded-2xl p-4 bg-white flex flex-col justify-between shadow-2xs border-slate-200 group reveal-on-scroll reveal-delay-3">
            <div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-4 border border-slate-100 relative">
                <img
                  src="/images/products/polishing-wheels-studio.jpg"
                  alt="Glass Polishing Wheels"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] block mb-1 font-brand">
                Edge Polishing
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug font-sans group-hover:text-slate-800">
                BD-8 &amp; 10S40 Polishing Wheels
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Terracotta rubber and resin composite discs delivering mirror-like optical clarity on glass edges.
              </p>
            </div>
            <div className="pt-3.5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-mono text-slate-500 text-[11px]">BD-8 / 10S40</span>
              <a href="#catalog" className="text-slate-900 font-semibold hover:underline inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                <span>Catalogue</span>
                <ArrowRight className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          <div className="corporate-card rounded-2xl p-4 bg-white flex flex-col justify-between shadow-2xs border-amber-200/80 group reveal-on-scroll reveal-delay-4">
            <div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-4 border border-slate-100 relative">
                <img
                  src="/images/products/semiconductor-ceramic-tools.jpg"
                  alt="Semiconductor & Ceramic Tooling"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              <span className="text-[10px] font-bold text-amber-700 uppercase tracking-[0.15em] block mb-1 font-brand flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-600 animate-spin" style={{ animationDuration: '8s' }} />
                <span>Dedicated R&amp;D Division</span>
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug font-sans group-hover:text-slate-800">
                Semiconductor &amp; Ceramic Dicing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ultra-fine micron diamond blades and grinding wheels for silicon wafers and advanced ceramics.
              </p>
            </div>
            <div className="pt-3.5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-mono text-amber-800 font-semibold text-[11px]">Sub-0.03mm Kerf</span>
              <a href="#catalog" className="text-slate-900 font-semibold hover:underline inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                <span>Catalogue</span>
                <ArrowRight className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Complete Glass & Materials Scope Grid with Scroll Reveal */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-xs reveal-on-scroll">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-brand">
                Glass Applications We Serve
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Calibrated diamond formulations and bond matrices for every glass composition:
              </p>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              ISO 9001:2000 Quality Assurance
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMPANY_INFO.glassSectors.map((sector) => (
              <div 
                key={sector.name} 
                className="p-4 rounded-xl bg-[#FAF9F6] border border-slate-200/80 hover:border-slate-300 hover:bg-white transition-all duration-300 hover:shadow-2xs"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-700 flex-shrink-0" />
                  <h4 className="text-xs font-bold text-slate-900 font-sans">{sector.name}</h4>
                </div>
                <p className="text-[11px] text-slate-600 pl-5 leading-relaxed">
                  {sector.desc}
                </p>
              </div>
            ))}

            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 hover:bg-amber-50 transition-colors">
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
                <h4 className="text-xs font-bold text-amber-950 font-sans">Technical Ceramics &amp; Silicon Wafers</h4>
              </div>
              <p className="text-[11px] text-amber-900/90 pl-5 leading-relaxed">
                Dedicated R&amp;D team engineering custom formulations for dicing, lapping, and wafer thinning.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
