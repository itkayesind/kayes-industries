import React from 'react';
import { COMPANY_INFO } from '../data/company';

const SECTOR_FAMILY_MAP: Record<string, string> = {
  architectural: 'diamond-wheels',
  automotive: 'diamond-wheels',
  'watch-glass': 'custom',
  solar: 'grinding',
  semiconductor: 'custom',
  appliance: 'grinding',
  bottles: 'custom',
  scientific: 'custom',
};


export const HomeIndustriesTeaser: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500">Industries We Serve</p>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 font-brand leading-tight">Precision tools for every glass</h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">Eight sectors, one promise — micron tolerances, high-speed durability, guaranteed satisfaction. Tap an industry to see its tools.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {COMPANY_INFO.glassSectors.slice(0,4).map((s) => (
            <div key={s.id} className="group border border-slate-200 rounded-[20px] overflow-hidden bg-white hover:border-slate-300 hover:shadow-lg transition-all flex flex-col">
              <div className="relative">
                <img src={s.image} alt={s.name} className="w-full h-56 sm:h-64 object-cover" />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-slate-700 border border-slate-200">{s.tag}</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 font-brand">{s.name}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-2">{s.desc}</p>
                <a href={`/products/family/${SECTOR_FAMILY_MAP[s.id] || 'diamond-wheels'}`} className="mt-4 inline-flex items-center text-sm font-semibold text-slate-900 hover:underline">View tools →</a>
              </div>
            </div>
          ))}
        </div>
        <details className="mt-6 group">
          <summary className="list-none inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 cursor-pointer">Show all 8 industries <span className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center group-open:rotate-180 transition-transform">↓</span></summary>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPANY_INFO.glassSectors.slice(4).map((s) => (
              <div key={s.id} className="group border border-slate-200 rounded-[20px] overflow-hidden bg-white hover:border-slate-300 hover:shadow-lg transition-all flex flex-col">
                <div className="relative">
                  <img src={s.image} alt={s.name} className="w-full h-56 object-cover" />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-slate-700 border border-slate-200">{s.tag}</div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 font-brand">{s.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-2">{s.desc}</p>
                  <a href={`/products/family/${SECTOR_FAMILY_MAP[s.id] || 'diamond-wheels'}`} className="mt-4 inline-flex text-sm font-semibold text-slate-900 hover:underline">View tools →</a>
                </div>
              </div>
            ))}
          </div>
        </details>
        <div className="mt-8 flex justify-center">
          <a href="/products" className="inline-flex items-center justify-center text-base font-semibold bg-slate-900 text-white rounded-xl px-8 h-12 hover:bg-slate-800">View All Products</a>
        </div>
      </div>
    </section>
  );
};
