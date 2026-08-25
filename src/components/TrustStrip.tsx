import React from 'react';
import { ShieldCheck, Cpu, Award, Truck } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  return (
    <section className="py-5 bg-white border-b border-slate-200">
      <div className="flex flex-wrap gap-4 justify-center md:justify-between items-center max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
          <ShieldCheck className="w-4 h-4 text-slate-600" />
          <span>ISO 9001:2015</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
          <Cpu className="w-4 h-4 text-slate-600" />
          <span>Fully Automatic Facility</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
          <Award className="w-4 h-4 text-slate-600" />
          <span>30+ Years Heritage</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
          <Truck className="w-4 h-4 text-slate-600" />
          <span>Direct Factory Dispatch (Chennai)</span>
        </div>
      </div>
    </section>
  );
};
