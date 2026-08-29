import React, { useState } from 'react';
import { COMPANY_INFO, type GlassSector } from '../data/company';
import {
  Building2,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Image as ImageIcon,
  Wrench,
  Layers
} from 'lucide-react';
import { LiquidButton } from './ui/liquid-glass-button';

const SECTOR_FAMILY_MAP: Record<string, string> = {
  architectural: 'diamond-wheels',
  automotive: 'diamond-wheels',
  'watch-glass': 'custom',
  solar: 'grinding',
  semiconductor: 'custom',
  appliance: 'grinding',
  bottles: 'custom',
  scientific: 'custom',
};


export const IndustriesOverview: React.FC = () => {
  const [expandedSectorId, setExpandedSectorId] = useState<string | null>(COMPANY_INFO.glassSectors[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImageMap, setActiveImageMap] = useState<Record<string, string>>({});

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
    window.open(`https://wa.me/919841279658?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const handleScrollToInquiry = () => {
    const rfqSection = document.getElementById('inquiry');
    if (rfqSection) {
      rfqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="industries-overview" className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-slate-200/80 relative overflow-hidden">
      
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
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setSelectedCategory(cat.id);
                const firstMatch = COMPANY_INFO.glassSectors.find(
                  (s) => cat.id === 'all' || s.category === cat.id
                );
                if (firstMatch) setExpandedSectorId(firstMatch.id);
              }}
              aria-pressed={selectedCategory === cat.id}
              aria-label={`Filter ${cat.label}`}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 cursor-pointer border ${
                selectedCategory === cat.id
                  ? 'bg-corporate-900 text-white border-corporate-900 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              {cat.id === 'advanced' && <Sparkles className="w-3 h-3 text-amber-500 mr-1" />}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* In-Place Expandable Sector Accordion Stack */}
        <div className="space-y-4 reveal-on-scroll">
          {filteredSectors.map((sector) => {
            const isExpanded = expandedSectorId === sector.id;
            const isAdvanced = sector.category === 'advanced';
            const currentMainImage = activeImageMap[sector.id] || sector.applications?.[0]?.src || sector.image;

            const activeApp = sector.applications?.find(a => a.src === currentMainImage);
            const activeTool = sector.toolImages?.find(t => t.src === currentMainImage);

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
                    <img
                      src={sector.applications?.[0]?.src || sector.image}
                      alt={sector.name}
                      loading="lazy"
                      decoding="async"
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl object-cover border border-slate-200 flex-shrink-0"
                    />
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
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-5">
                      
                      {/* Visual Showcase: Main Image & Gallery Strip */}
                      <div className="lg:col-span-5 space-y-3">
                        <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md group">
                          <img
                            src={currentMainImage}
                            alt={sector.name}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                          <div className="absolute bottom-3 left-3 right-3 text-white">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md text-[11px] font-semibold border border-white/20">
                              {activeApp ? (
                                <>
                                  <span className="font-mono text-cyan-300 font-bold">{activeApp.code}</span>
                                  <span>&bull; {activeApp.title}</span>
                                </>
                              ) : activeTool ? (
                                <>
                                  <Wrench className="w-3 h-3 text-amber-400" />
                                  <span>{activeTool.title}</span>
                                </>
                              ) : (
                                <>
                                  <Building2 className="w-3 h-3 text-cyan-400" />
                                  <span>{sector.name} Application</span>
                                </>
                              )}
                            </span>
                          </div>
                        </div>

                        {/* Interactive Gallery Thumbnails (Applications + Tools) */}
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono px-0.5">
                            <span className="flex items-center gap-1 font-bold text-slate-700 uppercase tracking-wider">
                              <ImageIcon className="w-3 h-3 text-cyan-700" /> Showcase Gallery
                            </span>
                            <span>Click to preview</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {/* Applications Thumbnails */}
                            {sector.applications?.map((app) => (
                              <button
                                key={app.code}
                                type="button"
                                onClick={() => setActiveImageMap(prev => ({ ...prev, [sector.id]: app.src }))}
                                className={`relative w-14 h-14 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                                  currentMainImage === app.src
                                    ? 'border-cyan-600 ring-2 ring-cyan-500/30 shadow-sm'
                                    : 'border-slate-200 opacity-70 hover:opacity-100'
                                }`}
                                title={`${app.code}: ${app.title}`}
                              >
                                <img
                                  src={app.src}
                                  alt={app.title}
                                  className="w-full h-full object-cover"
                                />
                                <span className="absolute bottom-0 inset-x-0 bg-black/70 text-[8px] font-mono font-bold text-white text-center py-0.5">
                                  {app.code}
                                </span>
                              </button>
                            ))}

                            {/* Tooling Thumbnails */}
                            {sector.toolImages?.map((tool, idx) => (
                              <button
                                key={`tool-${idx}`}
                                type="button"
                                onClick={() => setActiveImageMap(prev => ({ ...prev, [sector.id]: tool.src }))}
                                className={`relative w-14 h-14 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                                  currentMainImage === tool.src
                                    ? 'border-amber-500 ring-2 ring-amber-500/30 shadow-sm'
                                    : 'border-slate-200 opacity-70 hover:opacity-100'
                                }`}
                                title={`Tool: ${tool.title}`}
                              >
                                <img
                                  src={tool.src}
                                  alt={tool.title}
                                  className="w-full h-full object-cover"
                                />
                                <span className="absolute bottom-0 inset-x-0 bg-amber-950/80 text-[8px] font-mono text-amber-200 text-center py-0.5">
                                  TOOL
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Details & Tooling Specifications */}
                      <div className="lg:col-span-7 space-y-4">
                        <div>
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-brand mb-1">
                            Application Scope
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                            {sector.desc}
                          </p>
                        </div>

                        {/* Dedicated Recommended Tooling Display */}
                        <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-slate-200 space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider font-brand flex items-center gap-1.5">
                              <Wrench className="w-3.5 h-3.5 text-cyan-700" />
                              Recommended Tooling
                            </span>
                            <span className="text-[11px] font-semibold text-emerald-800 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              ISO 9001 Sintered Quality
                            </span>
                          </div>

                          {sector.toolList && sector.toolList.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                              {sector.toolList.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200/90 shadow-2xs text-xs font-medium text-slate-800"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 flex-shrink-0" />
                                  <span className="font-sans font-semibold text-slate-900">{item}</span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <span className="text-xs font-mono font-bold text-slate-900 block">
                              {sector.tooling}
                            </span>
                          )}
                        </div>

                        {/* Application Showcase Cards */}
                        {sector.applications && sector.applications.length > 0 && (
                          <div className="space-y-2">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-brand flex items-center gap-1">
                              <Layers className="w-3 h-3 text-cyan-600" />
                              Processed Products &amp; Applications
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {sector.applications.map((app) => (
                                <div
                                  key={app.code}
                                  onClick={() => setActiveImageMap(prev => ({ ...prev, [sector.id]: app.src }))}
                                  className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
                                    currentMainImage === app.src
                                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                                      : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                                  }`}
                                >
                                  <img
                                    src={app.src}
                                    alt={app.title}
                                    className="w-11 h-11 rounded-lg object-cover flex-shrink-0 border border-slate-200/50"
                                  />
                                  <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-1.5">
                                      <span className={`text-[9px] font-mono px-1 py-0.2 rounded font-bold ${
                                        currentMainImage === app.src ? 'bg-cyan-900/80 text-cyan-300' : 'bg-slate-100 text-slate-700'
                                      }`}>
                                        {app.code}
                                      </span>
                                      <span className={`text-xs font-bold font-brand truncate ${currentMainImage === app.src ? 'text-white' : 'text-slate-900'}`}>
                                        {app.title}
                                      </span>
                                    </div>
                                    <div className={`text-[10px] truncate mt-0.5 ${currentMainImage === app.src ? 'text-slate-300' : 'text-slate-500'}`}>
                                      {app.desc}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

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

                          <a
                            href={`/products/family/${SECTOR_FAMILY_MAP[sector.id] || 'diamond-wheels'}`}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-900 hover:bg-slate-50 hover:border-slate-400 transition-colors"
                          >
                            <Wrench className="w-3.5 h-3.5 text-slate-700" />
                            <span>View relevant tools</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>

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
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
