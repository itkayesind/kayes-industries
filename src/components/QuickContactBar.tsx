import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/company';
import { MessageSquare, Phone, FileSpreadsheet, ArrowUp, ChevronUp, ChevronDown, ShieldCheck } from 'lucide-react';

export const QuickContactBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {isExpanded && (
        <div className="bg-slate-900/95 backdrop-blur-md text-white p-3 rounded-2xl border border-slate-700 shadow-2xl flex flex-col gap-2 animate-fadeIn max-w-xs">
          <div className="flex items-center justify-between gap-3 pb-2 border-b border-slate-800">
            <span className="text-[11px] font-mono font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Direct Plant Desk
            </span>
            <button 
              onClick={() => setIsExpanded(false)}
              className="text-slate-400 hover:text-white p-0.5"
              aria-label="Minimize desk widget"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          <a
            href={COMPANY_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact via WhatsApp"
            className="flex items-center gap-2.5 p-2 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white text-xs font-semibold transition-all shadow-sm group"
          >
            <div className="w-7 h-7 rounded-lg bg-emerald-700/80 flex items-center justify-center group-hover:scale-105 transition-transform">
              <MessageSquare className="w-4 h-4 text-emerald-200" />
            </div>
            <div>
              <div className="leading-none">WhatsApp Quick Desk</div>
              <span className="text-[10px] text-emerald-200 font-mono">{COMPANY_INFO.contacts.secondaryMobile}</span>
            </div>
          </a>

          <a
            href={`tel:+9144${COMPANY_INFO.contacts.phoneOffice1.replace(/[^0-9]/g, '')}`}
            aria-label="Call Technical Staff"
            className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-semibold transition-all border border-slate-700"
          >
            <div className="w-7 h-7 rounded-lg bg-slate-700 flex items-center justify-center">
              <Phone className="w-3.5 h-3.5 text-sky-400" />
            </div>
            <div>
              <div className="leading-none">Call Technical Staff</div>
              <span className="text-[10px] text-slate-400 font-mono">044-{COMPANY_INFO.contacts.phoneOffice1}</span>
            </div>
          </a>

          <a
            href="#inquiry"
            aria-label="Configure Tool RFQ"
            className="flex items-center gap-2.5 p-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition-all"
          >
            <div className="w-7 h-7 rounded-lg bg-sky-600/30 flex items-center justify-center">
              <FileSpreadsheet className="w-3.5 h-3.5 text-slate-950" />
            </div>
            <div>
              <div className="leading-none">Configure Tool RFQ</div>
              <span className="text-[10px] text-slate-800 font-mono">Custom Specs Sheet</span>
            </div>
          </a>
        </div>
      )}

      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          aria-label="Expand desk widget"
          className="p-3 rounded-2xl bg-slate-900 text-white border border-slate-700 shadow-2xl hover:bg-slate-800 transition-all flex items-center gap-2 font-mono text-xs font-bold"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Technical Desk</span>
          <ChevronUp className="w-4 h-4 text-sky-400" />
        </button>
      )}
    </div>
  );
};
