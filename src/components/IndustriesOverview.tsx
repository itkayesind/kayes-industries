import React, { useState } from 'react';
import { COMPANY_INFO, type GlassSector } from '../data/company';
import { MessageSquare, ArrowRight, ShieldCheck, CheckCircle2, ChevronDown, Sparkles } from 'lucide-react';
import { LiquidButton } from './ui/liquid-glass-button';

export const IndustriesOverview: React.FC = () => {
  const [expandedSectorId, setExpandedSectorId] = useState<string | null>(COMPANY_INFO.glassSectors[0].id);
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

  const handleInquireSector = (sector: GlassSector) => {
    const text = encodeURIComponent(
      `Hello KAYES INDUSTRIES PVT LTD, I would like to inquire about tooling specifications and supply for: ${sector.name} (${sector.tooling}).`
    );
    window.open(`https://wa.me/919150025540?text=${text}`, "_blank", "noopener,noreferrer");
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
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
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
            <p className="text-sm sm:text-base text-slate-600 mt-3.5 leading-relaxed font-sans">
              Precision-calibrated diamond formulations and bond matrices engineered for high-volume automated processing lines and custom craft across all glass and technical material sectors.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex-shrink-0">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-[11px] font-mono text-slate-700 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-700" />
              <span>ISO 9001:2015 Certified Quality</span>
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
                if (firstMatch) setExpandedSectorId(firstMatch.id);
              }}
              aria-pressed={selectedCategory === cat.id}
              aria-label={`Filter ${cat.label}`}
              size="sm"
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-slate-950 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:text-slate-950'
              }`}
            >
              {cat.id === 'advanced' && <Sparkles className="w-3 h-3 text-amber-500 mr-1" />}
              <span>{cat.label}</span>
            </LiquidButton>
          ))}
        </div>

        {/* In-Place Expandable Sector Accordion Stack */}
        <div className="space-y-4 reveal-on-scroll">
          {filteredSectors.map((sector) => {
            const isExpanded = expandedSectorId === sector.id;
            const isAdvanced = sector.category === 'advanced';

            return (
              <div
                key={sector.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-white border-slate-300 shadow-lg ring-1 ring-slate-900/5'
                    : 'bg-white/80 hover:bg-white border-slate-200 shadow-2xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setExpandedSectorId(isExpanded ? null : sector.id)}
                  aria-expanded={isExpanded}
                  aria-controls={`sector-${sector.id}`}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200">
                      <img
                        src={sector.image}
                        alt={sector.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                          isAdvanced ? 'bg-amber-50 text-amber-900 font-mono border border-amber-200' : 'bg-slate-100 text-slate-700 font-mono'
                        }`}>
                          {isAdvanced && <Sparkles className="w-3 h-3 inline mr-1 text-amber-600" />}
                          {sector.tag}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 font-brand">
                        {sector.name}
                      </h3>
                      <span className="text-xs font-mono text-slate-500 line-clamp-1 mt-0.5">
                        Tooling: {sector.tooling}
                      </span>
                    </div>
                  </div>

                  <div className={`p-2 rounded-xl border transition-all duration-300 ${
                    isExpanded
                      ? 'bg-slate-900 text-white border-slate-900 rotate-180'
                      : 'bg-slate-50 text-slate-500 border-slate-200'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isExpanded && (
                  <div id={`sector-${sector.id}`} className="px-5 pb-6 sm:px-6 sm:pb-8 pt-0 border-t border-slate-100 animate-fade-in space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-5">
                      <div className="md:col-span-5 aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                        <img
                          src={sector.image}
                          alt={sector.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="md:col-span-7 space-y-4">
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                          {sector.desc}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-slate-200 space-y-1">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-brand block">
                              Recommended Tooling
                            </span>
                            <span className="text-xs font-mono font-bold text-slate-900 block">
                              {sector.tooling}
                            </span>
                          </div>

                          <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-slate-200 space-y-1">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-brand block">
                              Manufacturing Quality
                            </span>
                            <span className="text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              High-Feed Sintered Matrix
                            </span>
                          </div>
                        </div>

                        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                          <LiquidButton
                            onClick={() => handleInquireSector(sector)}
                            size="sm"
                            className="w-full sm:flex-1 text-slate-950 font-bold cursor-pointer"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>Inquire for {sector.name.split(' ')[0]}</span>
                            <ArrowRight className="w-3.5 h-3.5 ml-1" />
                          </LiquidButton>

                          <LiquidButton
                            onClick={handleScrollToInquiry}
                            variant="outline"
                            size="sm"
                            className="w-full sm:w-auto text-slate-700 hover:text-slate-950 border-slate-300 cursor-pointer"
                          >
                            <span>Custom Requisition</span>
                          </LiquidButton>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
