import React, { useState, useMemo, useEffect } from "react";
import { Search } from "lucide-react";
import { TOOL_FAMILIES } from "../../data/productFamilies";
import { WHEEL_PROFILES } from "../../data/wheelProfiles";

export const FamilySearch: React.FC = () => {
  const [q, setQ] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fam = params.get('family');
    const query = params.get('q') || params.get('search') || params.get('query');
    const hash = window.location.hash.replace('#','').toLowerCase();
    // family param takes precedence: prefill search so filtered shows relevant family
    if (fam && TOOL_FAMILIES.some(f => f.id === fam)) {
      setQ(fam);
      // scroll catalogue into view if hash indicates catalogue
      if (window.location.hash.includes('catalogue')) {
        setTimeout(() => document.getElementById('catalogue')?.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else if (query) {
      setQ(query);
    } else if (hash) {
      // legacy hash like #grinding or #diamond-wheels
      const legacyMap: Record<string, string> = {
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
      const mapped = legacyMap[hash] || hash;
      if (TOOL_FAMILIES.some(f => f.id === mapped)) setQ(mapped);
      else if (hash) setQ(hash);
    }
  }, []);

  const filtered = useMemo(() => {
    if (!q.trim()) return TOOL_FAMILIES;
    const s = q.toLowerCase();
    return TOOL_FAMILIES.filter(
      (f) =>
        f.id.toLowerCase().includes(s) ||
        f.label.toLowerCase().includes(s) ||
        f.shortDesc.toLowerCase().includes(s) ||
        f.longDesc.toLowerCase().includes(s) ||
        f.profiles.some((p) => p.toLowerCase().includes(s)) ||
        f.appCodes.some((c) => c.toLowerCase().includes(s)) ||
        (s.includes("appliance") && ["grinding", "diamond-wheels", "drills", "polishing", "resin-wheels"].includes(f.id)) ||
        (s.includes("cooktop") && ["grinding", "diamond-wheels"].includes(f.id)) ||
        (s.includes("appl-") && f.appCodes.some((c) => s.toUpperCase().includes(c)))
    );
  }, [q]);

  const profileHits = useMemo(() => {
    if (!q.trim()) return [];
    const s = q.toLowerCase();
    return WHEEL_PROFILES.filter((w) => w.code.toLowerCase().includes(s) || w.name.toLowerCase().includes(s)).slice(0, 6);
  }, [q]);

  return (
    <div>
      <div className="relative max-w-xl">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search families, ISO profiles or appliances (e.g. 6A2, appliance, cooktop, APPL-01)"
          className="w-full pl-10 pr-4 h-11 rounded-xl border border-slate-200 bg-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        />
      </div>

      {q && profileHits.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {profileHits.map((w) => (
            <a key={w.code} href="/products/profiles" className="text-xs font-mono bg-white border border-slate-200 rounded-full px-2.5 py-1 hover:border-slate-300">
              {w.code} · {w.name}
            </a>
          ))}
        </div>
      )}

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((f) => (
          <a key={f.id} href={`/products/family/${f.id}`} className="group border border-slate-200 rounded-2xl overflow-hidden bg-white hover:border-slate-300 hover:shadow-sm transition-all flex flex-col">
            <div className="h-32 bg-slate-50 border-b border-slate-200 overflow-hidden">
              <img src={f.heroImage} alt={f.label} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" loading="lazy" />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-slate-900">{f.label}</h3>
              <p className="mt-1 text-xs text-slate-600 line-clamp-2">{f.shortDesc}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {f.profiles.slice(0, 3).map((p) => (
                  <span key={p} className="text-[10px] font-mono bg-slate-50 border border-slate-200 rounded-full px-1.5 py-0.5">{p}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
        {filtered.length === 0 && <p className="col-span-full text-sm text-slate-500 py-6 text-center">No families match "{q}". Try 6A2, 11A2, polishing.</p>}
      </div>
    </div>
  );
};
