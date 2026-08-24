import React, { useState } from 'react';
import { WHEEL_PROFILES, type WheelProfile } from '../data/wheelProfiles';
import { Search, Compass, ArrowRight, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { LiquidButton } from './ui/liquid-glass-button';

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
    window.open(`https://wa.me/919150025540?text=${text}`, '_blank');
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
    <section id="wheel-types" className="py-20 bg-[#FAF9F6] text-slate-900 border-b border-slate-200 relative overflow-hidden">
      
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
              size="sm"
              className="text-slate-950 font-bold cursor-pointer"
            >
              <span>{isExpanded ? 'Collapse Directory' : 'Expand Directory (20+ Types)'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </LiquidButton>
          </div>
        </div>

        {/* Collapsed Teaser Preview Strip */}
        {!isExpanded ? (
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
              size="lg"
              className="text-slate-950 font-bold whitespace-nowrap cursor-pointer shadow-md"
            >
              <span>Explore All ISO Wheel Types</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </LiquidButton>
          </div>
        ) : (
          /* Expanded Full Directory */
          <div className="space-y-8 animate-fade-in">
            {/* Toolbar: Category Pills & Search */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
                {categories.map((cat) => (
                  <LiquidButton
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    size="sm"
                    className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-slate-950 text-white shadow-xs'
                        : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:text-slate-950'
                    }`}
                  >
                    <span>{cat.label}</span>
                  </LiquidButton>
                ))}
              </div>

              <div className="relative w-full lg:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search code (e.g. 1FF6Y, 11V9, 6A2)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-white border border-slate-200 focus:ring-2 focus:ring-slate-900 outline-none text-slate-900 placeholder:text-slate-400 transition-all shadow-2xs"
                />
              </div>
            </div>

            {/* Clean Profile Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProfiles.map((profile) => (
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

            {/* Bottom Collapse Button */}
            <div className="flex justify-center pt-4">
              <LiquidButton
                onClick={() => setIsExpanded(false)}
                variant="outline"
                size="sm"
                className="text-slate-700 hover:text-slate-950 border-slate-300 cursor-pointer"
              >
                <span>Collapse Directory</span>
                <ChevronUp className="w-4 h-4 ml-1" />
              </LiquidButton>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
