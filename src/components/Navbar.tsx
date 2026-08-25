import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/company';
import { Phone, Mail, Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { LiquidButton } from './ui/liquid-glass-button';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Industries', href: '#industries-overview' },
    { label: 'Catalogue', href: '#catalog' },
    { label: 'ISO Profiles', href: '#wheel-types' },
    { label: 'Heritage', href: '#about' },
    { label: 'Inquiry & RFQ', href: '#inquiry' },
  ];

  const handleScrollToInquiry = () => {
    const rfq = document.getElementById('inquiry');
    if (rfq) {
      rfq.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadPdf = () => {
    const link = document.createElement('a');
    link.href = COMPANY_INFO.contacts.catalogPdf;
    link.download = 'Kayes-Diamond-Tools-Catalogue.pdf';
    link.click();
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Top Luxury Dispatch Bar */}
      <div className="bg-[#FAF9F6] text-slate-600 text-[11px] py-1.5 px-4 sm:px-8 border-b border-slate-200/60 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-medium">
          <div className="flex items-center gap-3">
            <span className="text-slate-900 font-semibold tracking-wider font-brand uppercase text-[10px]">
              {COMPANY_INFO.certification}
            </span>
            <span className="text-slate-300">&bull;</span>
            <span className="text-slate-500 font-sans">
              Only Manufacturer in India with Fully Automatic Facility
            </span>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <a 
              href={`tel:${COMPANY_INFO.contacts.mobile}`}
              className="flex items-center gap-1.5 text-slate-700 hover:text-slate-950 transition-colors"
            >
              <Phone className="w-3 h-3 text-slate-400" />
              <span>{COMPANY_INFO.contacts.mobile}</span>
            </a>
            <span className="text-slate-300">/</span>
            <a 
              href={`mailto:${COMPANY_INFO.contacts.emails[0]}`}
              className="flex items-center gap-1.5 text-slate-700 hover:text-slate-950 transition-colors"
            >
              <Mail className="w-3 h-3 text-slate-400" />
              <span>{COMPANY_INFO.contacts.emails[0]}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav role="navigation" aria-label="Primary" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        <a href="#brand-hero" className="focus:outline-none">
          <BrandLogo />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-600 hover:text-slate-950 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <LiquidButton
            onClick={handleDownloadPdf}
            size="sm"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>PDF (4.2 MB)</span>
          </LiquidButton>

          <LiquidButton
            onClick={handleScrollToInquiry}
            size="sm"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-950 text-white hover:bg-slate-800 transition-all shadow-xs tracking-wider uppercase cursor-pointer"
          >
            <span>Request Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
          </LiquidButton>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <LiquidButton
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            size="icon"
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 border border-slate-200 cursor-pointer"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </LiquidButton>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-slate-200 bg-white p-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-bold uppercase tracking-wider text-slate-800 py-2 border-b border-slate-100"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2.5">
            <LiquidButton
              onClick={() => {
                setMobileMenuOpen(false);
                handleDownloadPdf();
              }}
              size="sm"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-100 text-xs font-medium text-slate-800 border border-slate-200 cursor-pointer w-full"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF Catalogue</span>
            </LiquidButton>
            <LiquidButton
              onClick={() => {
                setMobileMenuOpen(false);
                handleScrollToInquiry();
              }}
              size="sm"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-950 text-xs font-semibold text-white uppercase tracking-wider cursor-pointer w-full"
            >
              <span>Request Quote</span>
            </LiquidButton>
          </div>
        </div>
      )}
    </header>
  );
};
