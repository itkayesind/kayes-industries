import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/company';
import { X } from 'lucide-react';

const toolImageMap: Record<string, Record<string, string>> = {
  'architectural': {
    'Metal & Resin cup wheel': '/images/products/architecture-glass-products/kayes-arch-03.jpeg',
    'Rubber and cerium wheels': '/images/products/architecture-glass-products/kayes-arch-10.jpeg',
    'Drills': '/images/products/architecture-glass-products/kayes-arch-04.jpeg',
    'Milling tools': '/images/products/architecture-glass-products/kayes-arch-05.jpeg',
    'Polishing tools': '/images/products/architecture-glass-products/kayes-arch-01.jpeg',
  },
  'automotive': {
    'Position 1 Metal Bonded Roughing Wheels': '/images/products/automotive-glass-products-pictures/kayes-auto-12.jpeg',
    'Position 2 Fine Metal Profile Wheels': '/images/products/automotive-glass-products-pictures/kayes-auto-16.jpeg',
    'Resin Bonded Finishing Wheels': '/images/products/automotive-glass-products-pictures/kayes-auto-14.jpeg',
    'Polishing & Arrissing Tools': '/images/products/automotive-glass-products-pictures/kayes-auto-28.jpeg',
  },
  'watch-glass': {
    'Optical Diamond Generators': '/images/products/watch-and-scientific-glass-product-images/kayes-watch-06.jpeg',
    'Micro-Chamfering Wheels': '/images/products/watch-and-scientific-glass-product-images/kayes-watch-13.jpeg',
    'Fine Diamond Lapping Powders': '/images/products/superabrasive-diamond-powders.jpg',
    'High-Precision Edge Slitters': '/images/products/watch-and-scientific-glass-product-images/kayes-watch-01.jpeg',
  },
  'solar': {
    'Slotted Diamond Cut-Off Discs': '/images/products/solar-architectural-slitters.jpg',
    'Edge Grinders': '/images/products/glass-cutoff-wheels.jpg',
  },
  'scientific': {
    'Sintered Thin-Wall Core Drills': '/images/products/watch-and-scientific-glass-product-images/kayes-watch-09.jpeg',
    'Profile Wheels': '/images/products/watch-and-scientific-glass-product-images/kayes-watch-15.jpeg',
  },
  'semiconductor': {
    'Cleanroom Dicing Blades': '/images/products/semiconductor-ceramic-tools.jpg',
    'Wafer Thinning Wheels': '/images/products/semiconductor-ceramic-tools.jpg',
  },
  'appliance': {
    'Continuous Rim CNC Profile Wheels': '/images/products/pencil-edging-bevelling-wheels.jpg',
    'Drills': '/images/products/sintered-glass-drill-bits.jpg',
  },
  'bottles': {
    'Electroplated & Metal Bonded Profile Tools': '/images/products/flyer-glass-wheels-array.jpg',
  },
};

export const HomeIndustriesTeaser: React.FC = () => {
  const [activeTool, setActiveTool] = useState<Record<string, string>>({});
  const [lightbox, setLightbox] = useState<{ src: string; title: string; desc: string } | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
    if (lightbox) { document.body.style.overflow = 'hidden'; window.addEventListener('keydown', onKey); }
    else { document.body.style.overflow = ''; }
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [lightbox]);

  return (
    <section className="py-10 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-brand">Industries We Serve</h2>
            <p className="mt-1 text-sm text-slate-600">Tap a tooling tag to see the matching WhatsApp product photo. Application thumbnails below show end products.</p>
          </div>
          <a href="/products" className="hidden sm:inline-flex text-sm font-semibold text-slate-700 hover:text-slate-900">View All Products →</a>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMPANY_INFO.glassSectors.map((s) => {
            const toolList = s.toolList || [];
            const selectedTool = activeTool[s.id] || toolList[0];
            const displayToolImage = (toolImageMap[s.id] && toolImageMap[s.id][selectedTool]) || s.toolImages?.[0]?.src || s.image;
            const displayToolDesc = s.toolImages?.find(t => t.title === selectedTool)?.desc || s.toolImages?.[0]?.desc || s.tooling;
            return (
              <div key={s.id} className="border border-slate-200 rounded-2xl overflow-hidden bg-white hover:border-slate-300 transition-colors flex flex-col">
                <div className="relative">
                  <img src={s.image} alt={s.name} className="w-full h-40 object-cover border-b border-slate-200" />
                  <div className="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-[11px] font-semibold text-slate-700 border border-slate-200">{s.tag}</div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-sm font-semibold text-slate-900">{s.name}</h3>
                  <p className="mt-1 text-xs text-slate-600 line-clamp-2">{s.desc}</p>
                  {s.applications && s.applications.length > 0 && (
                    <div className="mt-3">
                      <p className="text-[11px] font-semibold tracking-wide uppercase text-slate-500">Application Visuals</p>
                      <div className="mt-1.5 grid grid-cols-2 gap-2">
                        {s.applications.map((app) => (
                          <button key={app.code} onClick={() => setLightbox({ src: app.src, title: app.title, desc: app.desc })} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 text-left hover:border-slate-300 hover:shadow-sm transition-all group">
                            <img src={app.src} alt={app.title} className="w-full h-20 object-cover group-hover:opacity-90" loading="lazy" />
                            <div className="p-1.5">
                              <p className="text-[11px] font-medium text-slate-800 leading-tight line-clamp-1">{app.title}</p>
                              <p className="text-[10px] text-slate-500 line-clamp-1">{app.code}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  {toolList.length > 0 && (
                    <div className="mt-3">
                      <p className="text-[11px] font-semibold tracking-wide uppercase text-slate-500">Tooling — tap to view photo</p>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {toolList.map((tool) => (
                          <button key={tool} onClick={() => setActiveTool(prev => ({ ...prev, [s.id]: tool }))} className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${selectedTool === tool ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'}`}>{tool}</button>
                        ))}
                      </div>
                      <div className="mt-3 border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                        <img src={displayToolImage} alt={selectedTool} className="w-full h-32 object-cover" />
                        <div className="p-2">
                          <p className="text-xs font-medium text-slate-900">{selectedTool}</p>
                          <p className="text-[11px] text-slate-600 line-clamp-2">{displayToolDesc}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <p className="text-xs text-slate-500 line-clamp-1">{s.tooling}</p>
                    <a href={`/products#${s.id === 'architectural' ? 'architecture' : s.id === 'watch-glass' ? 'watch' : s.id === 'scientific' ? 'watch' : s.id === 'semiconductor' ? 'custom' : s.id === 'appliance' ? 'diamond-wheels' : s.id === 'bottles' ? 'custom' : s.id === 'solar' ? 'grinding' : s.id}`} className="mt-2 inline-flex text-xs font-semibold text-slate-900 hover:underline">View in Products →</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <a href="/products" className="sm:hidden mt-4 inline-flex text-sm font-semibold text-slate-700">View All Products →</a>
      </div>
      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} aria-label="Close" className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-slate-100"><X className="w-5 h-5" /></button>
          <div className="max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} className="w-full max-h-[65vh] object-contain bg-slate-50" />
            <div className="p-4 bg-white border-t border-slate-200"><div className="text-sm font-bold text-slate-900">{lightbox.title}</div><p className="text-xs text-slate-600 mt-1">{lightbox.desc}</p></div>
          </div>
        </div>
      )}
    </section>
  );
};
