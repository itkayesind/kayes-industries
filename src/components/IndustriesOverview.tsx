import React, { useState, useMemo } from 'react';
import { COMPANY_INFO, type GlassSector } from '../data/company';
import { Sparkles, MessageSquare, ArrowRight, Layers } from 'lucide-react';
import { LiquidButton } from './ui/liquid-glass-button';

export const IndustriesOverview: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Sectors' },
    { id: 'flat', label: 'Flat & Automotive' },
    { id: 'precision', label: 'Precision & Watch Glass' },
    { id: 'industrial', label: 'Solar & Containers' },
    { id: 'advanced', label: 'Semiconductors & Ceramics (R&D)' }
  ];

  const filteredSectors = useMemo(() => {
    if (selectedFilter === 'all') return COMPANY_INFO.glassSectors;
    return COMPANY_INFO.glassSectors.filter(s => s.category === selectedFilter);
  }, [selectedFilter]);

  const handleInquireSector = (sector: GlassSector) => {
    const text = encodeURIComponent(
      `Hello KAYES INDUSTRIES PVT LTD, I would like to inquire about tooling specifications and supply for: ${sector.name} (${sector.tooling}).`
    );
    window.open(`https://wa.me/919841279658?text=${text}`, '_blank');
  };

  const handleScrollToInquiry = () => {
    const rfqSection = document.getElementById('inquiry');
    if (rfqSection) {
      rfqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="industries-overview" className="py-24 bg-[#FAF9F6] border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Ambient background soft glow */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal-on-scroll">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-6 h-px bg-slate-400"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 font-brand">
                Sector Applications &bull; Glass &amp; Advanced Materials
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight font-brand">
              Industries We Serve
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3.5 leading-relaxed">
              Custom-calibrated diamond formulations and bond matrices engineered for high-volume automated lines and precision craft across every glass and advanced material sector.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex-shrink-0">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] font-mono text-slate-600 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-slate-400" />
              <span>ISO 9001:2000 Certified Quality</span>
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 scrollbar-none reveal-on-scroll">
          {filterTabs.map((tab) => (
            <LiquidButton
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              size="sm"
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-slate-950 text-white shadow-xs'
                  : 'bg-white/80 text-slate-700 border border-slate-200/90 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              {tab.id === 'advanced' && <Sparkles className="w-3 h-3 text-amber-400 mr-1" />}
              <span>{tab.label}</span>
            </LiquidButton>
          ))}
        </div>

        {/* Photographic Visual Sector Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSectors.map((sector, idx) => {
            const isAdvanced = sector.category === 'advanced';
            return (
              <div
                key={sector.id}
                className={`corporate-card rounded-2xl overflow-hidden flex flex-col justify-between bg-white shadow-2xs group reveal-on-scroll reveal-delay-${(idx % 4) + 1} ${
                  isAdvanced ? 'border-amber-300/80 ring-1 ring-amber-200/60' : 'border-slate-200/90'
                }`}
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-100">
                    <img
                      src={sector.image}
                      alt={sector.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                    {/* Sector Tag Badge */}
                    <span className={`absolute bottom-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-xs ${
                      isAdvanced 
                        ? 'bg-amber-900/90 text-amber-100 border border-amber-500/40'
                        : 'bg-slate-900/85 text-white border border-white/20'
                    }`}>
                      {isAdvanced && <Sparkles className="w-2.5 h-2.5 inline mr-1 text-amber-300" />}
                      {sector.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-slate-900 mb-1.5 font-brand tracking-wide group-hover:text-slate-800">
                      {sector.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {sector.desc}
                    </p>

                    {/* Recommended Tooling Tag */}
                    <div className="p-2.5 rounded-lg bg-[#FAF9F6] border border-slate-200/70 mb-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-brand">
                        Recommended Tooling
                      </span>
                      <span className="text-[11px] font-mono font-semibold text-slate-800 block mt-0.5">
                        {sector.tooling}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-5 pt-0">
                  <LiquidButton
                    onClick={() => handleInquireSector(sector)}
                    size="sm"
                    className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold bg-white/80 hover:bg-slate-950 hover:text-white text-slate-800 border border-slate-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>Inquire for {sector.name.split(' ')[0]}</span>
                    <ArrowRight className="w-3 h-3 ml-0.5 opacity-60" />
                  </LiquidButton>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Application Concierge Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-6 reveal-on-scroll">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-brand">
              Require Custom Diamond Formulations for Special Materials?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our engineering team formulates bespoke metal, resin, and electroplated bonds to match your machinery RPMs, feed rates, and tolerance requirements.
            </p>
          </div>
          <LiquidButton
            onClick={handleScrollToInquiry}
            size="lg"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold bg-slate-950 text-white hover:bg-slate-800 transition-all shadow-xs tracking-wide whitespace-nowrap cursor-pointer"
          >
            <span>Request Custom Requisition</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
          </LiquidButton>
        </div>

      </div>
    </section>
  );
};
