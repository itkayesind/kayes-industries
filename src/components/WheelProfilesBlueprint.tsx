import React, { useState } from 'react';
import { WHEEL_PROFILES } from '../data/wheelProfiles';
import { Search, BookOpen, MessageSquare } from 'lucide-react';
import { LiquidButton } from './ui/liquid-glass-button';

export const WheelProfilesBlueprint: React.FC = () => {
  const [search, setSearch] = useState('');

  const filtered = WHEEL_PROFILES.filter(
    (p) =>
      p.code.toLowerCase().includes(search.toLowerCase()) ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleOpenPage5 = () => {
    window.open('/images/catalog/page_5.jpg', '_blank');
  };

  const handleScrollToInquiry = () => {
    const rfqSection = document.getElementById('inquiry');
    if (rfqSection) {
      rfqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="wheel-types" className="py-24 bg-[#FAF9F6] border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 reveal-on-scroll">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-6 h-px bg-slate-400"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 font-brand">
                Standard Technical Profiles &bull; Catalogue Page 5
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight font-brand">
              ISO Wheel Types Guide
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3.5 leading-relaxed">
              Standard grinding wheel profiles manufactured by KAYES. Custom engineered toolings are also manufactured against client technical drawings.
            </p>
          </div>

          <LiquidButton
            onClick={handleOpenPage5}
            size="sm"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold rounded-xl bg-white/80 text-slate-800 hover:bg-slate-100 border border-slate-200 shadow-2xs mt-4 md:mt-0 transition-all cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-slate-500" />
            <span>Original Catalogue Page 5 Scan</span>
          </LiquidButton>
        </div>

        {/* Search with Scroll Reveal */}
        <div className="mb-6 max-w-sm reveal-on-scroll reveal-delay-1">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search wheel code (e.g. 11V9, 6A2, 1FF6Y)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-3 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-slate-400 transition-all"
            />
          </div>
        </div>

        {/* Clean Luxury Reference Table with Scroll Reveal */}
        <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-2xs reveal-on-scroll reveal-delay-2">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-[#FAF9F6] text-slate-700 font-brand font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                <tr>
                  <th className="py-4 px-6 w-28">Type Code</th>
                  <th className="py-4 px-6">Standard Name</th>
                  <th className="py-4 px-6">Bond Formulation</th>
                  <th className="py-4 px-6">Typical Applications</th>
                  <th className="py-4 px-6 text-right">Inquiry</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans">
                {filtered.map((item) => (
                  <tr key={item.code} className="hover:bg-[#FAF9F6]/80 transition-colors duration-200">
                    <td className="py-4 px-6 font-mono font-bold text-slate-900">
                      {item.code}
                    </td>
                    <td className="py-4 px-6 font-medium text-slate-900">
                      {item.name}
                    </td>
                    <td className="py-4 px-6 text-slate-600 text-[11px]">
                      {item.typicalBond}
                    </td>
                    <td className="py-4 px-6 text-slate-600 text-[11px]">
                      {item.primaryUses.join(', ')}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href={`https://wa.me/919841279658?text=Hello%20KAYES%20INDUSTRIES%20PVT%20LTD,%20I%20would%20like%20to%20order%20Wheel%20Type%20${item.code}%20(${item.name}).`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-slate-900 hover:text-amber-800 font-semibold underline underline-offset-2 transition-colors cursor-pointer"
                      >
                        Inquire
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Custom Engineering Note with Scroll Reveal */}
        <div className="mt-6 p-6 rounded-2xl bg-white border border-slate-200/90 text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs reveal-on-scroll reveal-delay-3">
          <span>
            <strong className="text-slate-900 font-semibold font-brand uppercase tracking-wider">Custom Engineering:</strong> We engineer bespoke toolings matched precisely to your spindle speeds and workpiece drawings.
          </span>
          <LiquidButton
            onClick={handleScrollToInquiry}
            size="sm"
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-950 text-white hover:bg-slate-800 transition-all flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
          >
            <span>Submit Custom Requisition</span>
            <span>&rarr;</span>
          </LiquidButton>
        </div>

      </div>
    </section>
  );
};
