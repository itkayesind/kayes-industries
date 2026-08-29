import React, { useState, useEffect } from 'react';
import { WHEEL_PROFILES } from '../data/wheelProfiles';
import { CATALOG_PRODUCTS } from '../data/catalog';

const families = [
  { id: 'diamond-wheels', label: 'Diamond Wheels', desc: 'Cup, flare and dish wheels for edging & bevelling of flat glass. Metal and resin bonds for chip-free arrissing on high-speed lines.', longDesc: 'Metal & resin cup wheels (6A2, 9A3, 11A2, 12A2, 11V9) for straight-line and CNC edgers. Bore 22/50mm, thickness to suit glass 3-19mm. Compatible with Bavelloni, Bottero straight-line machines.', profiles: ['6A2','9A3','11A2','12A2','11V9','6A9'] },
  { id: 'drills', label: 'Drills', desc: 'Sintered thin-wall core drills & CNC milling bits for clean, chip-free drilling.', longDesc: '3A2 thin-wall core drills with 1/2" Gas (G½) Belgian shank and internal coolant. OD 4-150mm, wall 0.8-1.2mm for architectural, automotive and laboratory glass.', profiles: ['3A2'] },
  { id: 'grinding', label: 'Grinding Wheels', desc: 'Peripheral and cup grinding wheels for stock removal and shaping.', longDesc: 'Peripheral wheels 1A1, 3A1, 14A1 and slitting 1A1R (100-350mm). For seaming, slitting and edge grinding of solar and appliance glass.', profiles: ['1A1','3A1','14A1','1A1R'] },
  { id: 'polishing', label: 'Polishing Wheels', desc: 'Rubber, cerium and resin polish systems for brilliant high-gloss edge finish.', longDesc: 'BD-8 rubber, cerium oxide and resin polish wheels. 150x22x15 and 200x76.2mm, 8 grits from #50 to #3000 for final polish after cup wheels.', profiles: ['1FF1','1EE1'] },
  { id: 'resin-wheels', label: 'Resin Wheels', desc: 'Fine resin cup wheels for arrissing & fine finish.', longDesc: 'Resin bond fine resin cup wheels for arrissing and pencil-edge fine finishing. Low chipping on tempered and low-E glass.', profiles: ['1A1'] },
  { id: 'custom', label: 'Custom Tools', desc: 'Mounted points, stones, dressing tools & profiles made to drawing.', longDesc: 'W mounted points with shaft, HH1/H honing stones, dressers and bespoke profile wheels (4B2, 1E6Q, 1EE6Y) to customer drawing.', profiles: ['W','HH1','14A1','3A1'] },
];

export const ProductsFamiliesFiltered: React.FC = () => {
  const [selected, setSelected] = useState<string>('diamond-wheels');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const famParam = params.get('family') || params.get('category') || params.get('familyId');
    const hashRaw = window.location.hash.replace('#','').toLowerCase();
    const legacyHashMap: Record<string, string> = {
      architecture: 'diamond-wheels',
      automotive: 'diamond-wheels',
      watch: 'custom',
      'watch-glass': 'custom',
      custom: 'custom',
      'diamond-wheels': 'diamond-wheels',
      grinding: 'grinding',
      drills: 'drills',
      polishing: 'polishing',
      'resin-wheels': 'resin-wheels',
    };
    const hash = legacyHashMap[hashRaw] || hashRaw;
    // query param takes precedence over hash, so hash can be fallback for legacy links
    if (famParam && families.some(f => f.id === famParam)) {
      setSelected(famParam);
    } else if (hash && families.some(f => f.id === hash)) {
      setSelected(hash);
    }
  }, []);

  const family = families.find(f => f.id === selected) || families[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <aside className="lg:col-span-3">
        <div className="sticky top-[88px] border border-slate-200 rounded-2xl bg-white overflow-hidden">
          <div className="bg-slate-900 text-white px-4 py-3">
            <h2 className="text-sm font-semibold">Product Categories</h2>
            <p className="text-[11px] text-slate-300">Select to view — no scroll</p>
          </div>
          <nav className="p-2 space-y-1">
            {families.map((f) => (
              <button key={f.id} onClick={() => setSelected(f.id)} className={`w-full text-left block rounded-xl px-3 py-2.5 border transition-colors ${selected === f.id ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-transparent hover:bg-slate-50 hover:border-slate-200'}`}>
                <div className={`text-sm font-semibold ${selected === f.id ? 'text-white' : 'text-slate-900'}`}>{f.label}</div>
                <div className={`text-xs line-clamp-2 ${selected === f.id ? 'text-slate-300' : 'text-slate-500'}`}>{f.desc}</div>
                <div className="mt-1 flex flex-wrap gap-1">
                  {f.profiles.slice(0,3).map((p) => <span key={p} className={`text-[10px] font-mono rounded-full px-1.5 py-0.5 border ${selected === f.id ? 'bg-white/10 border-white/20 text-slate-200' : 'bg-slate-100 border-slate-200 text-slate-600'}`}>{p}</span>)}
                </div>
              </button>
            ))}
          </nav>
          <div className="border-t border-slate-200 p-3 bg-slate-50">
            <p className="text-xs text-slate-600">Showing only <span className="font-semibold text-slate-900">{family.label}</span> — no instant scroll.</p>
          </div>
        </div>
      </aside>

      <div className="lg:col-span-9">
        <section className="border border-slate-200 rounded-2xl bg-white overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-200 bg-slate-50">
            <h2 className="text-lg font-bold text-slate-900">{family.label}</h2>
            <p className="mt-1 text-sm text-slate-600">{family.longDesc}</p>
          </div>
          <div className="p-5">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-500">ISO Profiles & Stock</h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {family.profiles.map((p) => {
                const wp = WHEEL_PROFILES.find((w) => w.code === p);
                return <span key={p} className="text-xs font-mono bg-white border border-slate-200 rounded-full px-2.5 py-1">{p}{wp ? ` · ${wp.name}` : ''}</span>
              })}
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CATALOG_PRODUCTS.filter((prod) => {
                const map: Record<string, string[]> = {
                  'diamond-wheels': ['glass-edging-wheels','glass-core-drills-milling'],
                  'drills': ['glass-core-drills-milling'],
                  'grinding': ['glass-edging-wheels'],
                  'polishing': ['glass-edging-wheels'],
                  'resin-wheels': ['glass-edging-wheels'],
                  'custom': ['glass-core-drills-milling']
                };
                return (map[family.id] || []).includes(prod.id);
              }).slice(0,2).map((p) => (
                <div key={p.id} className="border border-slate-200 rounded-xl overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-36 object-cover border-b border-slate-200" />
                  <div className="p-3">
                    <div className="text-[11px] font-semibold uppercase text-slate-500">{p.categoryName}</div>
                    <div className="text-sm font-semibold text-slate-900 line-clamp-2">{p.name}</div>
                    <p className="mt-1 text-xs text-slate-600 line-clamp-2">{p.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <p className="mt-3 text-xs text-slate-500">Select another category on the left to view its products — no page jump.</p>
      </div>
    </div>
  );
};
