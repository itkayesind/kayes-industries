import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { APPLICATION_IMAGES } from '../data/company';

export const ApplicationsShowcase: React.FC = () => {
  const [selected, setSelected] = useState<typeof APPLICATION_IMAGES[0] | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    if (selected) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [selected]);

  return (
    <>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {APPLICATION_IMAGES.map((app) => (
          <div key={app.code} className="group border border-slate-200 rounded-2xl overflow-hidden bg-white hover:border-slate-300 hover:shadow-md transition-all flex flex-col">
            <button onClick={() => setSelected(app)} className="relative aspect-[4/3] bg-slate-900 overflow-hidden text-left w-full">
              <img src={app.src} alt={app.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur text-slate-700 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border border-slate-200 shadow-xs">
                {app.code}
              </div>
            </button>
            <div className="p-3.5 flex flex-col flex-grow justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-600 font-mono">{app.sectorName}</div>
                <div className="text-sm font-bold text-slate-900 font-brand mt-0.5 line-clamp-1">{app.title}</div>
                <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">{app.desc}</p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <a href={app.sectorId === 'architectural' ? '/products/industry/architecture' : app.sectorId === 'automotive' ? '/products/industry/automotive' : app.sectorId === 'solar' ? '/products/family/grinding' : app.sectorId === 'scientific' ? '/products/industry/watch' : app.sectorId === 'semiconductor' ? '/products/family/custom' : app.sectorId === 'appliance' ? '/products/family/diamond-wheels' : app.sectorId === 'bottles' ? '/products/family/custom' : '/products/family/diamond-wheels'} className="text-slate-700 font-semibold hover:underline">
                  Tooling &rarr;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setSelected(null)}>
          <button onClick={() => setSelected(null)} aria-label="Close" className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-slate-100">
            <X className="w-5 h-5" />
          </button>
          <div className="max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <img src={selected.src} alt={selected.title} className="w-full max-h-[65vh] object-contain bg-slate-50" />
            <div className="p-4 bg-white border-t border-slate-200">
              <div className="text-xs font-mono font-bold text-slate-500">{selected.code} — {selected.sectorName}</div>
              <div className="text-sm font-bold text-slate-900 mt-1">{selected.title}</div>
              <p className="text-xs text-slate-600 mt-1">{selected.desc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
