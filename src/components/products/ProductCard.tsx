import React from "react";

interface Props {
  familyId: string;
  label: string;
  shortDesc: string;
  heroImage: string;
  profiles: string[];
  href: string;
}

export const ProductFamilyCard: React.FC<Props> = ({ label, shortDesc, heroImage, profiles, href }) => {
  return (
    <a href={href} className="group border border-slate-200 rounded-2xl overflow-hidden bg-white hover:border-slate-300 hover:shadow-md transition-all flex flex-col">
      <div className="h-36 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <img src={heroImage} alt={label} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" loading="lazy" />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm font-bold text-slate-900 group-hover:text-slate-700">{label}</h3>
        <p className="mt-1 text-xs text-slate-600 line-clamp-2 leading-relaxed">{shortDesc}</p>
        <div className="mt-3 flex flex-wrap gap-1">
          {profiles.slice(0, 4).map((p) => (
            <span key={p} className="text-[10px] font-mono bg-slate-50 border border-slate-200 rounded-full px-1.5 py-0.5">{p}</span>
          ))}
          {profiles.length > 4 && <span className="text-[10px] text-slate-400">+{profiles.length - 4}</span>}
        </div>
        <span className="mt-3 text-xs font-semibold text-slate-900 group-hover:underline">View details &rarr;</span>
      </div>
    </a>
  );
};
