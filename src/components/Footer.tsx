import React from 'react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/company';
import { Download, Phone, Mail, Globe, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const info: unknown = COMPANY_INFO;
  let gstinLabel = 'GSTIN: Available on request';
  let cinLabel: string | undefined;
  if (info && typeof info === 'object' && 'gstin' in info) {
    const v = info.gstin;
    if (typeof v === 'string' && v) gstinLabel = `GSTIN: ${v}`;
  }
  if (info && typeof info === 'object' && 'cin' in info) {
    const v = info.cin;
    if (typeof v === 'string' && v) cinLabel = `CIN: ${v}`;
  }
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-3.5">
            <div className="inline-block">
              <BrandLogo variant="full" theme="dark" />
            </div>
            <p className="text-white text-xs font-bold tracking-[0.12em] font-brand uppercase">
              KAYES INDUSTRIES PVT LTD
            </p>
            <p className="text-slate-400 text-xs max-w-sm leading-relaxed font-sans">
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
            <ul className="space-y-2 text-xs text-slate-400 font-sans">
              <li><a href="/#industries-overview" className="hover:text-white transition-colors">Industries &amp; R&amp;D</a></li>
              <li><a href="/products#catalogue" className="hover:text-white transition-colors">Product Catalogue</a></li>
              <li><a href="/products/profiles#wheel-types" className="hover:text-white transition-colors">ISO Wheel Types (Page 5)</a></li>
              <li><a href="/#grit-matrix" className="hover:text-white transition-colors">Grit &amp; Micron Matrix</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">Corporate Heritage</a></li>
              <li><a href="/contact#inquiry" className="hover:text-white transition-colors">Request a Quote</a></li>
              <li>
                <a
                  href={COMPANY_INFO.contacts.catalogPdf}
                  download="Kayes-Catalogue.pdf"
                  aria-label="Download PDF Catalogue"
                  className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5 mt-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF Catalogue (4.2 MB)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-5 space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.15em] font-brand">
              Registered Plant &amp; Sales Desk
            </h4>
            <div className="space-y-2.5 text-slate-400 text-xs font-sans">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_INFO.address.full}</span>
              </div>
              <div className="flex flex-wrap gap-3 text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-800">
                <span>{gstinLabel}</span>
                {cinLabel && <span>{cinLabel}</span>}
                <a href="https://www.google.com/maps?q=13.03969955444336,80.23731231689453&z=17&hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 underline">View on Maps →</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <span>
                  Sales / WhatsApp: <a href={`tel:${COMPANY_INFO.contacts.mobile.replace(/[^0-9+]/g, '')}`} aria-label={`Call ${COMPANY_INFO.contacts.mobile}`} className="text-white hover:underline font-mono font-semibold">{COMPANY_INFO.contacts.mobile}</a>
                  {' / '}
                  <a href={`tel:${COMPANY_INFO.contacts.secondaryMobile.replace(/[^0-9+]/g, '')}`} aria-label={`Call ${COMPANY_INFO.contacts.secondaryMobile}`} className="text-slate-300 hover:underline font-mono">{COMPANY_INFO.contacts.secondaryMobile}</a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <span>
                  <a href={`mailto:${COMPANY_INFO.contacts.emails[0]}`} aria-label={`Email ${COMPANY_INFO.contacts.emails[0]}`} className="text-white hover:underline font-mono">{COMPANY_INFO.contacts.emails[0]}</a>
                  {' / '}
                  <a href={`mailto:${COMPANY_INFO.contacts.emails[1]}`} aria-label={`Email ${COMPANY_INFO.contacts.emails[1]}`} className="text-slate-300 hover:underline font-mono">{COMPANY_INFO.contacts.emails[1]}</a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <a href={COMPANY_INFO.website} target="_blank" rel="noopener noreferrer" aria-label="Visit KAYES Industries website" className="text-white hover:underline font-mono">
                  {COMPANY_INFO.domain}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="font-brand tracking-wider">
            &copy; {new Date().getFullYear()} KAYES INDUSTRIES PVT LTD. All rights reserved.
          </div>
          <div className="font-mono">
            Chennai, India &bull; <a href={COMPANY_INFO.website} className="hover:text-slate-300">{COMPANY_INFO.domain}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
