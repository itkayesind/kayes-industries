import React from 'react';
import { Cpu, Atom, ShieldCheck, Handshake, ArrowUpRight } from 'lucide-react';

export const ValuePillars: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      number: "01",
      title: "India's Only Fully Automatic Facility",
      description: "Automated hydraulic cold pressing, computer-controlled vacuum & hot-press sintering lines eliminate manual variation for 100% repeatable diamond density and bonding integrity.",
      highlight: "Automated Sintering & Induction"
    },
    {
      icon: Atom,
      number: "02",
      title: "Custom Metallurgical Matrix Formulations",
      description: "Proprietary alloy binders blending bronze, cobalt, copper, and polyimide resins formulated specifically for your workpiece hardness, spindle power, and feed velocity.",
      highlight: "Soft / Medium / Hard Bonds"
    },
    {
      icon: ShieldCheck,
      number: "03",
      title: "Micron-Grade QA & Dynamic Balancing",
      description: "Every wheel undergoes optical microscope matrix inspection and electronic dynamic balancing to eliminate spindle runout, prevent glass micro-chipping, and protect machine bearings.",
      highlight: "ISO 9001:2000 Certified"
    },
    {
      icon: Handshake,
      number: "04",
      title: "30+ Years Techno-Commercial Heritage",
      description: "Founded and led by D. Kamal Nathan in Chennai, India, offering direct engineering consultation, custom tool drawings from scratch, and reliable worldwide dispatch.",
      highlight: "Turnkey Tool Engineering"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-brand-700 uppercase mb-2">
              <span className="w-6 h-px bg-brand-600"></span>
              Engineering Superiority
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Global Manufacturers Choose <span className="font-serif italic font-normal text-brand-900">KAYES</span>
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md mt-4 md:mt-0 leading-relaxed">
            Combining state-of-the-art superabrasive synthesis with automated manufacturing to solve the toughest cutting and grinding challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.title}
                className="blueprint-card rounded-xl p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-slate-900 text-white flex items-center justify-center shadow-sm group-hover:bg-brand-900 transition-colors">
                      <Icon className="w-6 h-6 text-sky-400" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-brand-600 transition-colors">
                      {pillar.number}
                    </span>
                  </div>

                  <span className="inline-block text-[11px] font-mono font-semibold text-brand-700 bg-brand-50 px-2 py-0.5 rounded mb-2">
                    {pillar.highlight}
                  </span>

                  <h3 className="text-base font-bold text-slate-900 tracking-tight mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium group-hover:text-slate-900 transition-colors">
                  <span>Factory Standard</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
