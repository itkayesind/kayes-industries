import React, { useState } from 'react';
import { WHEEL_PROFILES, type WheelProfile } from '../data/wheelProfiles';
import { Search, Compass, ArrowRight, MessageSquare } from 'lucide-react';
import { LiquidButton } from './ui/liquid-glass-button';

export const WheelProfilesBlueprint: React.FC = () => {
  const [selectedProfileCode, setSelectedProfileCode] = useState<string>(WHEEL_PROFILES[0].code);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProfiles = WHEEL_PROFILES.filter((p) => {
    return (
      p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.primaryUses.some((u) => u.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const activeProfile = WHEEL_PROFILES.find((p) => p.code === selectedProfileCode) || WHEEL_PROFILES[0];

  const handleInquireProfile = (profile: WheelProfile) => {
    const text = encodeURIComponent(
      `Hello KAYES INDUSTRIES PVT LTD, I need a technical quotation for ISO Wheel Type: ${profile.code} (${profile.name}) with standard dimensions.`
    );
    window.open(`https://wa.me/919841279658?text=${text}`, '_blank');
  };

  const handleOpenPage5 = () => {
    window.open('/images/brand/kays-flyer.jpg', '_blank');
  };

  const handleScrollToInquiry = () => {
    const rfqSection = document.getElementById('inquiry');
    if (rfqSection) {
      rfqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="wheel-types" className="py-24 bg-[#080D1A] text-slate-100 border-b border-slate-800 relative overflow-hidden">
      
      {/* Millimeter CAD Blueprint Grid Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal-on-scroll">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-6 h-px bg-cyan-400"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400 font-brand">
                ISO 6104 / FEPA Standards &bull; Catalogue Page 5
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-brand">
              ISO Wheel Profiles Blueprint
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3.5 leading-relaxed font-sans">
              Comprehensive geometrical designation schematics based on ISO manufacturing protocols. Standard dimensions ($D \times T \times W \times X \times H$) and custom multi-profile wheel designs.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <LiquidButton
              onClick={handleOpenPage5}
              variant="outline"
              size="sm"
              className="text-cyan-300 border-cyan-500/30 hover:bg-cyan-950/40 cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span>Original Page 5 Scan</span>
            </LiquidButton>
          </div>
        </div>

        {/* CAD Blueprint Workbench Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch reveal-on-scroll">
          
          {/* Left Column: Interactive Technical Schematic Stage */}
          <div className="lg:col-span-7 bg-[#0E1726]/90 backdrop-blur-md rounded-3xl border border-cyan-900/40 p-6 sm:p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            
            {/* Top Coordinate Bar */}
            <div className="flex items-center justify-between border-b border-cyan-950 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping-slow" />
                <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider font-bold">
                  Schematic Inspector &bull; ISO {activeProfile.code}
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                FEPA Reference Matrix
              </span>
            </div>

            {/* Profile Geometric Visual Representation */}
            <div className="my-auto py-6">
              <div className="w-full aspect-[16/9] sm:aspect-[2/1] rounded-2xl bg-[#060A12] border border-cyan-950/80 p-6 flex flex-col items-center justify-center relative overflow-hidden group">
                
                {/* Millimeter Subgrid */}
                <div 
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(to right, #00ffff 1px, transparent 1px), linear-gradient(to bottom, #00ffff 1px, transparent 1px)`,
                    backgroundSize: '16px 16px'
                  }}
                />

                {/* Profile Title & Geometry Graphic */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                  <div className="text-4xl sm:text-5xl font-mono font-extrabold text-cyan-400 tracking-wider">
                    {activeProfile.code}
                  </div>
                  <div className="text-sm font-semibold text-slate-200 font-brand uppercase tracking-widest">
                    {activeProfile.name}
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
                    <span>{activeProfile.typicalBond}</span>
                  </div>
                </div>

                {/* Dimension parameter callouts */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-cyan-950/60 pt-2">
                  <span>D: Diameter</span>
                  <span>T: Thickness</span>
                  <span>W: Diamond Rim</span>
                  <span>X: Impregnation Depth</span>
                  <span>H: Bore (Arbor)</span>
                </div>
              </div>
            </div>

            {/* Detailed Parameters Panel */}
            <div className="space-y-4 pt-6 border-t border-cyan-950">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#060A12] border border-cyan-950 space-y-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Key Industrial Applications
                  </span>
                  <span className="text-xs font-semibold text-slate-200 block truncate">
                    {activeProfile.primaryUses.join(', ')}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#060A12] border border-cyan-950 space-y-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Key Dimension Parameters
                  </span>
                  <span className="text-xs font-mono text-cyan-300 block truncate">
                    {activeProfile.keyDimensions.join(', ')}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <LiquidButton
                  onClick={() => handleInquireProfile(activeProfile)}
                  size="lg"
                  className="w-full sm:flex-1 bg-cyan-500/20 text-cyan-200 border-cyan-400/40 hover:bg-cyan-500/30 font-semibold cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request RFQ for {activeProfile.code}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </LiquidButton>

                <LiquidButton
                  onClick={handleScrollToInquiry}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-slate-300 hover:text-white border-slate-700 cursor-pointer"
                >
                  <span>Custom Dimension Profile</span>
                </LiquidButton>
              </div>
            </div>

          </div>

          {/* Right Column: Searchable Profile Selector Matrix */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            
            {/* Search Input for Wheel Profiles */}
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search profile (e.g. 1FF6Y, 11V9, Cup)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl text-xs bg-[#0E1726] border border-cyan-950 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
              />
            </div>

            {/* Profile Selection List */}
            <div className="space-y-2 flex-grow overflow-y-auto max-h-[620px] pr-1">
              {filteredProfiles.map((profile) => {
                const isActive = profile.code === activeProfile.code;

                return (
                  <button
                    key={profile.code}
                    onClick={() => setSelectedProfileCode(profile.code)}
                    className={`w-full p-4 rounded-2xl text-left transition-all duration-200 border flex items-center justify-between group cursor-pointer ${
                      isActive
                        ? 'bg-cyan-950/40 border-cyan-400/80 shadow-lg ring-1 ring-cyan-400/20'
                        : 'bg-[#0E1726]/60 hover:bg-[#0E1726] border-cyan-950/60 hover:border-cyan-900/80'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-base font-mono font-bold text-cyan-300">
                          {profile.code}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-slate-400 border border-cyan-950">
                          ISO 6104
                        </span>
                      </div>
                      <h4 className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                        {profile.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                        {profile.description}
                      </p>
                    </div>

                    <div className={`p-2 rounded-xl transition-all ${
                      isActive ? 'bg-cyan-400 text-slate-950' : 'text-slate-500 group-hover:text-cyan-300'
                    }`}>
                      <ArrowRight className="w-4 h-4" />
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
