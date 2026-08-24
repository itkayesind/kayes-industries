import React from 'react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/company';
import { Download } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3.5">
            <div className="inline-block">
              <BrandLogo variant="full" theme="dark" />
            </div>
            <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
              {COMPANY_INFO.motto}
            </p>
            <p className="text-slate-500 text-[11px] font-brand tracking-wider uppercase">
              {COMPANY_INFO.certification} &bull; {COMPANY_INFO.facilityHighlight}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.15em] font-brand">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#industries-overview" className="hover:text-white transition-colors">Industries &amp; R&amp;D</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Product Catalogue</a></li>
              <li><a href="#wheel-types" className="hover:text-white transition-colors">ISO Wheel Types (Page 5)</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Corporate Heritage</a></li>
              <li><a href="#inquiry" className="hover:text-white transition-colors">Request a Quote</a></li>
              <li>
                <a
                  href={COMPANY_INFO.contacts.catalogPdf}
                  download="Kayes-Catalogue.pdf"
                  className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5 mt-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF Catalogue (4.2 MB)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.15em] font-brand">
              Registered Plant &amp; Office
            </h4>
            <div className="space-y-2 text-slate-400 text-xs">
              <div className="leading-relaxed">{COMPANY_INFO.address.full}</div>
              <div>Tel: {COMPANY_INFO.contacts.phoneOffice1} / {COMPANY_INFO.contacts.phoneOffice2}</div>
              <div>HP / WhatsApp: <a href={`tel:${COMPANY_INFO.contacts.mobile}`} className="text-white hover:underline font-mono">{COMPANY_INFO.contacts.mobile}</a></div>
              <div>Email: <a href={`mailto:${COMPANY_INFO.contacts.emails[0]}`} className="text-white hover:underline font-mono">{COMPANY_INFO.contacts.emails[0]}</a></div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="font-brand tracking-wider">
            &copy; {new Date().getFullYear()} KAYES INDUSTRIES PVT LTD. All rights reserved.
          </div>
          <div className="font-mono">
            Chennai, India &bull; www.kayesind.com
          </div>
        </div>

      </div>
    </footer>
  );
};
