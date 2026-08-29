import React, { useState } from 'react';
import { WHEEL_PROFILES, type WheelProfile } from '../data/wheelProfiles';
import { Search, Compass, ArrowRight, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { LiquidButton } from './ui/liquid-glass-button';

const ProfileDiagram: React.FC<{ code: string }> = ({ code }) => {
  const c = code.toUpperCase();
  let path = "M10 10 H70 V30 H10 Z";
  let note = "D×H";
  if (c.startsWith("6A2") || c.startsWith("6A9")) { path = "M15 8 H65 V18 H55 V32 H25 V18 H15 Z"; note = "D×W×H cup"; }
  else if (c.startsWith("11A2") || c.startsWith("11V9") || c.startsWith("11B2")) { path = "M20 8 L60 8 L65 32 L15 32 Z"; note = "D×W×H flare"; }
  else if (c.startsWith("12A2")) { path = "M18 12 L62 12 L60 28 L20 28 Z"; note = "D×W×H dish"; }
  else if (c.startsWith("1A1") && !c.includes("F")) { path = "M10 14 H70 V26 H10 Z"; note = "D×T×H"; }
  else if (c.includes("FF") || c.includes("EE")) { path = "M10 14 H60 C70 14 70 26 60 26 H10 Z"; note = "D×R×H"; }
  else if (c.startsWith("3A2")) { path = "M25 10 H55 V30 H45 V15 H35 V30 H25 Z"; note = "OD×ID×H drill"; }
  else if (c.startsWith("14A1") || c.startsWith("3A1")) { path = "M10 14 H70 V18 H60 V26 H20 V18 H10 Z"; note = "D×T×H hub"; }
  else if (c.startsWith("9A3")) { path = "M15 8 H65 V14 H55 V26 H25 V14 H15 Z"; note = "D×W×H double"; }
  else if (c.startsWith("W")) { path = "M30 5 L50 5 L50 35 L30 35 Z M35 35 L35 38 L45 38 L45 35 Z"; note = "d×L shank"; }
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-2 flex items-center justify-center gap-2">
      <svg width="88" height="36" viewBox="0 0 80 40" className="text-slate-800">
        <path d={path} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="40" cy="20" r="1.2" fill="currentColor" opacity="0.3" />
      </svg>
      <span className="text-[10px] font-mono text-slate-500">{note}</span>
    </div>
  );
};

export const WheelProfilesBlueprint: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const categories = [
    { id: 'all', label: 'All Profiles' },
    { id: 'cup', label: 'Cup & Dish Wheels' },
    { id: 'peripheral', label: 'Peripheral & Edging' },
    { id: 'special', label: 'Glass & Special Shapes' },
    { id: 'internal', label: 'Internal Pins & Honing' },
  ];

  const filteredProfiles = WHEEL_PROFILES.filter((p) => {
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.primaryUses.some((u) => u.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCat && matchesSearch;
  });

  const handleInquireProfile = (profile: WheelProfile) => {
    const text = encodeURIComponent(
      `Hello KAYES INDUSTRIES PVT LTD, I need a technical quotation for ISO Wheel Type: ${profile.code} (${profile.name}) with custom dimensions.`
    );
    window.open(`https://wa.me/919841279658?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const handleOpenPage5 = () => {
    window.open('/images/brand/kayes-flyer.jpg', '_blank');
  };

  const handleScrollToInquiry = () => {
    const rfqSection = document.getElementById('inquiry');
    if (rfqSection) {
      rfqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="wheel-types" className="py-16 sm:py-20 bg-[#FAF9F6] text-slate-900 border-b border-slate-200 relative overflow-hidden">
      
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 reveal-on-scroll">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-px bg-slate-400"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 font-brand">
                ISO 6104 / FEPA Standards &bull; Catalogue Page 5
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight font-brand">
              ISO Wheel Profiles Directory
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed font-sans">
              Comprehensive geometrical designation schematics based on ISO manufacturing protocols. Standard dimensions ($D \times T \times W \times X \times H$) and custom multi-profile wheel designs.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3 flex-wrap">
            <LiquidButton
              onClick={handleOpenPage5}
              variant="outline"
              size="sm"
              className="text-slate-800 border-slate-300 hover:bg-white cursor-pointer"
            >
              <Compass className="w-4 h-4 text-slate-700" />
              <span>Page 5 Scan</span>
            </LiquidButton>

            <LiquidButton
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
              aria-controls="wheel-grid"
              size="sm"
              className="text-slate-950 font-bold cursor-pointer"
            >
              <span>{isExpanded ? 'Collapse Directory' : 'Expand Directory (20+ Types)'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </LiquidButton>
          </div>
        </div>

        {/* Collapsed Teaser Preview Strip - shown when collapsed */}
        {!isExpanded && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 reveal-on-scroll">
            <div className="space-y-2 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                <span className="text-xs font-mono font-bold uppercase text-slate-900">
                  20+ Standard ISO Geometries Available
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl font-sans">
                Browse standard profiles for glass edging, carbide sharpening, and CNC machining. Includes detailed FEPA dimensions ($D \times T \times W \times X \times H$) and bond matrix designations.
              </p>
              <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start pt-1">
                {['1FF6Y (Double Pencil)', '11V9 (Flaring Cup)', '6A2 (Face Grinder)', '1A1 (Straight Peripheral)', '14A1 (Double Hub)', '3A2 (Core Drills)'].map((code) => (
                  <span key={code} className="text-[11px] font-mono font-semibold bg-[#FAF9F6] border border-slate-200 px-2.5 py-1 rounded-lg text-slate-800">
                    {code}
                  </span>
                ))}
              </div>
            </div>

            <LiquidButton
              onClick={() => setIsExpanded(true)}
              aria-expanded={isExpanded}
              aria-controls="wheel-grid"
              size="lg"
              className="text-slate-950 font-bold whitespace-nowrap cursor-pointer shadow-md"
            >
              <span>Explore All ISO Wheel Types</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </LiquidButton>
          </div>
        )}

        {/* Directory Toolbar + Grid - progressive */}
        <div className="space-y-8 animate-fade-in mt-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    aria-pressed={selectedCategory === cat.id}
                    aria-label={`Filter ${cat.label}`}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                      selectedCategory === cat.id
                        ? 'bg-corporate-900 text-white border-corporate-900 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-900'
                    }`}
                  >
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
              <div className="relative w-full lg:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search code (e.g. 1FF6Y, 11V9, 6A2)..."
                  aria-label="Search wheel profiles"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-white border border-slate-200 focus:ring-2 focus:ring-slate-900 outline-none text-slate-900 placeholder:text-slate-400 transition-all shadow-2xs"
                />
              </div>
            </div>

            {/* Clean Profile Cards Grid */}
            <div id="wheel-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(isExpanded ? filteredProfiles : filteredProfiles.slice(0,6)).map((profile) => (
                <div
                  key={profile.code}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Header with ISO Code Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-mono font-extrabold text-slate-950 tracking-wide">
                          {profile.code}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-bold">
                          ISO 6104
                        </span>
                      </div>

                      <span className="text-[11px] font-mono text-cyan-800 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded-md font-semibold">
                        {profile.typicalBond}
                      </span>
                    </div>

                    {/* Engineering Profile Diagram - alongside dims, replicating PDF */}
                    <ProfileDiagram code={profile.code} />

                    {/* Profile Name & Description */}
                    <div>
                      <h3 className="text-base font-bold text-slate-900 font-brand group-hover:text-slate-950 transition-colors">
                        {profile.name}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-sans line-clamp-2">
                        {profile.description}
                      </p>
                    </div>

                    {/* Key Applications */}
                    <div className="space-y-1 pt-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-brand block">
                        Typical Applications
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {profile.primaryUses.slice(0, 2).map((use, i) => (
                          <span key={i} className="text-[10px] font-mono bg-[#FAF9F6] text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Dimension Parameters */}
                    <div className="space-y-1 pt-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-brand block">
                        Key Dimension Parameters
                      </span>
                      <div className="text-[11px] font-mono text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100 leading-snug">
                        {profile.keyDimensions.slice(0, 3).join(' • ')}
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-6 border-t border-slate-100 flex items-center gap-2 mt-4">
                    <LiquidButton
                      onClick={() => handleInquireProfile(profile)}
                      size="sm"
                      className="flex-1 text-slate-950 font-semibold cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Inquire {profile.code}</span>
                    </LiquidButton>

                    <LiquidButton
                      onClick={handleScrollToInquiry}
                      variant="outline"
                      size="sm"
                      className="px-3 text-slate-700 hover:text-slate-950 border-slate-200 cursor-pointer"
                      title="Request Custom Requisition"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </LiquidButton>
                  </div>
                </div>
              ))}
            </div>

            {/* Progressive Toggle */}
            <div className="flex justify-center pt-4">
              {!isExpanded ? (
                filteredProfiles.length>6 && (
                  <LiquidButton
                    onClick={() => setIsExpanded(true)}
                    aria-expanded={isExpanded}
                    aria-controls="wheel-grid"
                    size="sm"
                    className="text-slate-950 font-bold cursor-pointer"
                  >
                    <span>Show {filteredProfiles.length-6} more</span>
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </LiquidButton>
                )
              ) : (
                <LiquidButton
                  onClick={() => setIsExpanded(false)}
                  aria-expanded={isExpanded}
                  aria-controls="wheel-grid"
                  variant="outline"
                  size="sm"
                  className="text-slate-700 hover:text-slate-950 border-slate-300 cursor-pointer"
                >
                  <span>Collapse Directory</span>
                  <ChevronUp className="w-4 h-4 ml-1" />
                </LiquidButton>
              )}
            </div>
        </div>

      </div>
    </section>
  );
};
