import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/company';
import { Menu, X, Phone, Download, ChevronDown } from 'lucide-react';

const PRODUCT_SUBS = [
  { label: 'Diamond Wheels', href: '/products#diamond-wheels' },
  { label: 'Drills', href: '/products#drills' },
  { label: 'Grinding Wheels', href: '/products#grinding' },
  { label: 'Polishing Wheels', href: '/products#polishing' },
  { label: 'Resin Wheels', href: '/products#resin-wheels' },
  { label: 'Custom Tools', href: '/products#custom' },
];

export const BusinessHeader: React.FC<{ isHomePage?: boolean }> = ({ isHomePage = false }) => {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [visible, setVisible] = useState(!isHomePage);
  const isHome = isHomePage;

  useEffect(() => {
    if (!isHome) return;
    const stored = sessionStorage.getItem('kayes-header-visible');
    if (stored === '1') {
      setVisible(true);
      return;
    }
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.85) {
        setVisible(true);
        sessionStorage.setItem('kayes-header-visible', '1');
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const telHref = `tel:${COMPANY_INFO.contacts.mobile.replace(/[\s-]/g, '')}`;
  const headerClass = isHome
    ? `fixed top-0 inset-x-0 z-40 bg-white border-b border-slate-200 transition-all duration-300 ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`
    : `sticky top-0 z-40 bg-white border-b border-slate-200`;

  return (
    <header className={headerClass} aria-hidden={isHome && !visible}>
      <div className="hidden md:block bg-slate-900 text-slate-300 text-[11px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-7 flex items-center justify-between">
          <span className="tracking-wide">ISO 9001:2015 Certified • Chennai, India • GST Available on Request</span>
          <span className="flex items-center gap-4">
            <a href={telHref} className="hover:text-white flex items-center gap-1.5"><Phone className="w-3 h-3" />{COMPANY_INFO.contacts.mobile}</a>
            <a href={`mailto:${COMPANY_INFO.contacts.emails[0]}`} className="hover:text-white">{COMPANY_INFO.contacts.emails[0]}</a>
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[64px] sm:h-[68px] flex items-center justify-between gap-4">
        <a href="/" className="flex items-center min-w-0">
          <BrandLogo />
        </a>

        <nav className="hidden md:flex items-center gap-1">
          <a href="/" className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-50">Home</a>
          <a href="/about" className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-50">About Us</a>
          <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
            <a href="/products" className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-50 flex items-center gap-1">
              Products <ChevronDown className={`w-3.5 h-3.5 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
            </a>
            {productsOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="w-56 bg-white border border-slate-200 rounded-2xl shadow-lg p-1.5">
                  {PRODUCT_SUBS.map((s) => (
                    <a key={s.label} href={s.href} className="block px-3 py-2 text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl">{s.label}</a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <a href="/contact" className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-50">Contact Us</a>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href={COMPANY_INFO.contacts.catalogPdf} download className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 border border-slate-200 hover:border-slate-300 rounded-xl px-3.5 h-9">
            <Download className="w-4 h-4" /> Catalogue
          </a>
          <a href="/contact" className="inline-flex items-center justify-center text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 rounded-xl px-5 h-9">Get Quote</a>
        </div>

        <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-xl border border-slate-200 text-slate-700">
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="px-4 py-3 flex flex-col gap-1">
            <a href="/" onClick={() => setOpen(false)} className="px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-xl">Home</a>
            <a href="/about" onClick={() => setOpen(false)} className="px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-xl">About Us</a>
            <div className="px-3 py-2">
              <div className="text-xs font-semibold tracking-widest uppercase text-slate-500">Products</div>
              <div className="mt-1 grid grid-cols-2 gap-1">
                {PRODUCT_SUBS.map((s) => (
                  <a key={s.label} href={s.href} onClick={() => setOpen(false)} className="text-sm text-slate-600 hover:text-slate-900 py-1">{s.label}</a>
                ))}
              </div>
              <a href="/products" onClick={() => setOpen(false)} className="mt-2 inline-flex text-xs font-semibold text-slate-900">View All →</a>
            </div>
            <a href="/contact" onClick={() => setOpen(false)} className="px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-xl">Contact Us</a>
            <div className="pt-3 mt-2 border-t border-slate-100 flex gap-2">
              <a href={COMPANY_INFO.contacts.catalogPdf} download className="flex-1 inline-flex items-center justify-center gap-1.5 text-sm font-semibold border border-slate-200 rounded-xl h-10">
                <Download className="w-4 h-4" /> Catalogue
              </a>
              <a href="/contact" className="flex-1 inline-flex items-center justify-center text-sm font-semibold bg-slate-900 text-white rounded-xl h-10">Get Quote</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
