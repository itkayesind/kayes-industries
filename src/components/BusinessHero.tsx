import React from 'react';
import { ArrowRight, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const BusinessHero: React.FC = () => {
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-slate-600 bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5">
              <Award className="w-3.5 h-3.5" /> {COMPANY_INFO.certification} • {COMPANY_INFO.facilityHighlight}
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-slate-900 leading-[1.1] font-brand">
              Precision Diamond Tools<br />for Glass & Ceramics
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              {COMPANY_INFO.motto} KAYES INDUSTRIES PVT LTD manufactures superabrasive grinding wheels, drills and polishing systems for architectural, automotive, solar and semiconductor lines - compatible with Bavelloni, Bottero, Biesse, Schiatti and Indian made machines.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/products" className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white text-sm font-semibold rounded-xl px-6 h-11 hover:bg-slate-800 transition-colors">
                View Products <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/contact" className="inline-flex items-center justify-center text-sm font-semibold border border-slate-200 hover:border-slate-300 rounded-xl px-6 h-11 transition-colors">
                Contact Sales
              </a>
              <a href={COMPANY_INFO.contacts.catalogPdf} download className="inline-flex items-center justify-center text-sm font-medium text-slate-600 hover:text-slate-900 px-3 h-11">
                Download Catalogue →
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-xs text-slate-500">
              <span>Chennai, India</span>
              <span>•</span>
              <span>{COMPANY_INFO.contacts.mobile}</span>
              <span>•</span>
              <span>{COMPANY_INFO.contacts.emails[0]}</span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6">
              <img src="/images/products/kayes-superabrasives-full-showcase.jpg" alt="KAYES diamond tools showcase" className="w-full h-auto rounded-xl object-cover border border-slate-200" />
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="bg-white border border-slate-200 rounded-xl py-3">
                  <div className="text-lg font-bold text-slate-900">150+</div>
                  <div className="text-[11px] text-slate-500">Tool Variants</div>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl py-3">
                  <div className="text-lg font-bold text-slate-900">13</div>
                  <div className="text-[11px] text-slate-500">Machine OEMs</div>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl py-3">
                  <div className="text-lg font-bold text-slate-900">ISO</div>
                  <div className="text-[11px] text-slate-500">9001:2015</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
