import React, { useState } from 'react';
import { COMPANY_INFO, type GlassSector } from '../data/company';
import { MessageSquare, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { LiquidButton } from './ui/liquid-glass-button';

export const IndustriesOverview: React.FC = () => {
  const [selectedSectorId, setSelectedSectorId] = useState<string>(COMPANY_INFO.glassSectors[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Sectors' },
    { id: 'flat', label: 'Flat & Automotive' },
    { id: 'precision', label: 'Precision & Watch Glass' },
    { id: 'industrial', label: 'Solar & Containers' },
    { id: 'advanced', label: 'Semiconductor & Ceramics (R&D)' },
  ];

  const filteredSectors = COMPANY_INFO.glassSectors.filter((s) => {
    if (selectedCategory === 'all') return true;
    return s.category === selectedCategory;
  });

  const activeSector = COMPANY_INFO.glassSectors.find((s) => s.id === selectedSectorId) || COMPANY_INFO.glassSectors[0];

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
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
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
              Precision-calibrated diamond formulations and bond matrices engineered for high-volume automated processing lines and custom craft across all glass and technical material sectors.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex-shrink-0">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-[11px] font-mono text-slate-700 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-700" />
              <span>ISO 9001:2000 Certified Quality</span>
            </span>
          </div>
        </div>

        {/* Filter Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none reveal-on-scroll">
          {categories.map((cat) => (
            <LiquidButton
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                const firstMatch = COMPANY_INFO.glassSectors.find(
                  (s) => cat.id === 'all' || s.category === cat.id
                );
                if (firstMatch) setSelectedSectorId(firstMatch.id);
              }}
              size="sm"
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-slate-950 text-white shadow-xs'
                  : 'bg-white/80 text-slate-700 border border-slate-200/90 hover:border-slate-300 hover:text-slate-950'
              }`}
            >
              {cat.id === 'advanced' && <Sparkles className="w-3 h-3 text-amber-400 mr-1" />}
              <span>{cat.label}</span>
            </LiquidButton>
          ))}
        </div>

        {/* Distinctive Split-Screen Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch reveal-on-scroll">
          
          {/* Main Visual Stage (Active Sector Preview) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden flex flex-col justify-between group">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-950 overflow-hidden">
              <img
                src={activeSector.image}
                alt={activeSector.name}
                key={activeSector.id}
                className="w-full h-full object-cover transition-all duration-700 ease-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Badges on Visual Stage */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md ${
                  activeSector.category === 'advanced'
                    ? 'bg-amber-900/90 text-amber-200 border border-amber-500/40'
                    : 'bg-slate-950/80 text-white border border-white/20'
                }`}>
                  {activeSector.category === 'advanced' && <Sparkles className="w-3 h-3 inline mr-1 text-amber-300" />}
                  {activeSector.tag}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-mono text-cyan-300 uppercase tracking-widest block mb-1">
                  Active Focus Sector
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-brand tracking-wide">
                  {activeSector.name}
                </h3>
              </div>
            </div>

            {/* Active Sector Details & Specs Bar */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow space-y-6">
              <p className="text-sm text-slate-700 leading-relaxed font-sans">
                {activeSector.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-slate-200/80 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-brand block">
                    Recommended Tooling
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-900 block">
                    {activeSector.tooling}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-slate-200/80 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-brand block">
                    Manufacturing Quality
                  </span>
                  <span className="text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    High-Feed Diamond Matrix
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <LiquidButton
                  onClick={() => handleInquireSector(activeSector)}
                  size="lg"
                  className="w-full sm:flex-1 text-slate-950 font-semibold cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire for {activeSector.name.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </LiquidButton>

                <LiquidButton
                  onClick={handleScrollToInquiry}
                  size="lg"
                  className="w-full sm:w-auto text-slate-700 hover:text-slate-950 border border-slate-200 cursor-pointer"
                >
                  <span>Custom Requisition</span>
                </LiquidButton>
              </div>
            </div>
          </div>

          {/* Interactive Sector Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="px-2 pb-1 flex items-center justify-between text-xs text-slate-500 font-brand uppercase tracking-wider">
              <span>Select Application Sector</span>
              <span>{filteredSectors.length} Sectors</span>
            </div>

            <div className="space-y-2.5 flex-grow overflow-y-auto max-h-[680px] pr-1">
              {filteredSectors.map((sector) => {
                const isActive = sector.id === activeSector.id;
                const isAdvanced = sector.category === 'advanced';

                return (
                  <button
                    key={sector.id}
                    onClick={() => setSelectedSectorId(sector.id)}
                    className={`w-full p-4 rounded-2xl text-left transition-all duration-300 border flex items-center justify-between group cursor-pointer ${
                      isActive
                        ? 'bg-white border-slate-900 shadow-md ring-1 ring-slate-900/10'
                        : 'bg-white/60 hover:bg-white border-slate-200/80 hover:border-slate-300 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200">
                        <img
                          src={sector.image}
                          alt={sector.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                            isAdvanced ? 'bg-amber-100 text-amber-900' : 'bg-slate-100 text-slate-600'
                          }`}>
                            {sector.tag}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 font-brand group-hover:text-slate-950">
                          {sector.name}
                        </h4>
                        <span className="text-[11px] font-mono text-slate-500 line-clamp-1">
                          {sector.tooling}
                        </span>
                      </div>
                    </div>

                    <div className={`p-1.5 rounded-lg transition-transform ${
                      isActive ? 'bg-slate-900 text-white translate-x-1' : 'text-slate-400 group-hover:text-slate-700'
                    }`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
