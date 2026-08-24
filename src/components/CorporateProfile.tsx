import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { MapPin, Phone, Mail, MessageSquare, Sparkles } from 'lucide-react';
import { LiquidButton } from './ui/liquid-glass-button';

export const CorporateProfile: React.FC = () => {
  const handleContactExecutive = () => {
    window.open(COMPANY_INFO.contacts.whatsappLink, '_blank');
  };

  return (
    <section id="about" className="py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 -left-24 w-80 h-80 bg-amber-50/70 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title with Scroll Reveal */}
        <div className="max-w-3xl mb-14 reveal-on-scroll">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-6 h-px bg-slate-400"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 font-brand">
              Corporate Profile &amp; Heritage &bull; Catalogue Page 2
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight font-brand">
            Three Decades of Engineering
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Chief Executive Card with Scroll Reveal */}
          <div className="lg:col-span-4 bg-[#FAF9F6] rounded-2xl border border-slate-200 p-6 sm:p-7 text-center shadow-2xs reveal-on-scroll reveal-delay-1 group">
            <div className="w-40 h-52 mx-auto rounded-xl overflow-hidden bg-slate-100 mb-5 border-2 border-white shadow-xs relative">
              <img
                src={COMPANY_INFO.executive.image}
                alt={COMPANY_INFO.executive.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <h3 className="text-lg font-bold text-slate-900 font-brand">
              {COMPANY_INFO.executive.name}
            </h3>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-5 font-brand">
              {COMPANY_INFO.executive.title}
            </span>

            <div className="pt-4 border-t border-slate-200/70 space-y-2.5 text-xs text-left text-slate-600">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                <span className="leading-snug">{COMPANY_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                <span>{COMPANY_INFO.contacts.mobile}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                <span>{COMPANY_INFO.contacts.emails[0]}</span>
              </div>
            </div>
          </div>

          {/* Letter / Company Statement with Scroll Reveal */}
          <div className="lg:col-span-8 bg-[#FAF9F6] rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-2xs space-y-5 text-sm text-slate-700 leading-relaxed reveal-on-scroll reveal-delay-2">
            <p>
              From a very humble beginning, <strong>KAYES INDUSTRIES PVT LTD</strong> has today grown into an advanced corporation with automated CNC sintering facilities and a qualified techno-commercial team.
            </p>

            <p>
              KAYES develops, manufactures and markets diamond toolings to serve cutting and grinding applications across all glass sectors: architectural glass, automotive glass, watch crystals, scientific test-ware, container bottles, home appliances, and solar photovoltaic panels.
            </p>

            {/* R&D Highlight Callout */}
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/90 text-xs text-amber-950 flex items-start gap-3 shadow-2xs">
              <Sparkles className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5 animate-spin" style={{ animationDuration: '9s' }} />
              <div>
                <strong className="font-semibold block mb-0.5 font-brand uppercase tracking-wider text-[11px]">Advanced R&amp;D Expansion:</strong>
                KAYES INDUSTRIES PVT LTD is actively venturing into the <strong>ceramic and semiconductor processing industries</strong>, backed by a separate dedicated R&amp;D team engineering sub-micron diamond dicing blades and precision wafer grinding matrices.
              </div>
            </div>

            <p>
              With decades of direct service to our industrial customers and wide technical expertise in synthetic and natural diamond metallurgy, we engineer bespoke toolings matched precisely to your CNC machinery, spindle RPMs, and workpiece specifications.
            </p>

            <div className="pt-5 border-t border-slate-200/80 flex flex-wrap gap-4 items-center justify-between">
              <div>
                <span className="text-sm font-bold text-slate-900 block font-brand tracking-wider">D. KAMAL NATHAN</span>
                <span className="text-xs text-slate-500 font-brand">Chief Executive &bull; KAYES INDUSTRIES PVT LTD</span>
              </div>

              <LiquidButton
                onClick={handleContactExecutive}
                size="sm"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-950 text-white hover:bg-slate-800 transition-all shadow-xs tracking-wide cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Contact Executive Desk</span>
              </LiquidButton>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
