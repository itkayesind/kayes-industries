import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/company';

export const SmartHeader: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const telHref = `tel:${COMPANY_INFO.contacts.mobile.replace(/[\s-]/g, '')}`;

  return (
    <header
      role="navigation"
      aria-label="Primary navigation"
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0'
      }`}
    >
      <div className="mx-2 sm:mx-0 mt-2 sm:mt-0 bg-white/95 backdrop-blur-md border border-slate-200 sm:border-x-0 sm:border-t-0 rounded-2xl sm:rounded-none shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-3">
          <div className="min-w-0 flex-1">
            <BrandLogo variant="compact" />
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <a
              href={telHref}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{COMPANY_INFO.contacts.mobile}</span>
            </a>
            {/* Mobile icon-only tel */}
            <a
              href={telHref}
              aria-label={`Call ${COMPANY_INFO.contacts.mobile}`}
              className="inline-flex sm:hidden items-center justify-center w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-colors shadow-sm flex-shrink-0"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={COMPANY_INFO.contacts.catalogPdf}
              download="Kayes-Catalogue.pdf"
              className="inline-flex items-center justify-center gap-1 rounded-xl sm:rounded-2xl bg-corporate-900 text-white text-[11px] sm:text-xs font-semibold px-3 sm:px-3.5 h-8 sm:h-8 hover:bg-corporate-800 transition-colors whitespace-nowrap flex-shrink-0"
            >
              <span className="sm:hidden">Catalogue</span>
              <span className="hidden sm:inline">Download Catalogue</span>
            </a>
            <a
              href="#inquiry"
              className="hidden sm:inline-flex items-center justify-center text-xs font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 rounded-2xl px-3.5 h-8 transition-colors"
            >
              Inquiry
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
