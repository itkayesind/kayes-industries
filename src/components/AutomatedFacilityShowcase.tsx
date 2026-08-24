import React from 'react';
import { 
  Cpu, 
  ShieldCheck, 
  Gauge, 
  Flame, 
  Workflow, 
  Sparkles, 
  CheckCircle, 
  ArrowRight,
  Maximize2
} from 'lucide-react';

export const AutomatedFacilityShowcase: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Raw Diamond Particle Assay",
      desc: "Laser diffraction particle size distribution (PSD) and magnetic susceptibility screening of HPHT synthetic diamond crystals.",
      icon: Sparkles
    },
    {
      step: "02",
      title: "Automated Cold Pressing",
      desc: "Hydraulic multi-cavity automated powder compaction ensuring homogeneous diamond distribution throughout the matrix.",
      icon: Gauge
    },
    {
      step: "03",
      title: "Computerized Hot-Press Sintering",
      desc: "Programmable temperature and pressure ramping in controlled atmosphere furnaces for maximum metallurgical bonding density.",
      icon: Flame
    },
    {
      step: "04",
      title: "5-Axis CNC Profiling",
      desc: "Micro-machining of core wheel blanks and EDM profile dressing to achieve exact radii on pencil edge and bevel wheels.",
      icon: Cpu
    },
    {
      step: "05",
      title: "Electronic Dynamic Balancing",
      desc: "Computerized dual-plane balancing (< 0.002 mm runout) eliminating high-speed vibration and protecting client machine spindles.",
      icon: Workflow
    },
    {
      step: "06",
      title: "ISO 9001 Quality Release",
      desc: "100% optical microscope rim inspection, hardness verification, and serialization prior to global packaging and dispatch.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="facility" className="py-20 bg-[#F8F9FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-brand-700 uppercase mb-3 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
            <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
            Automated Manufacturing Benchmark
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            India&apos;s Only Fully Automatic Diamond Tooling Facility
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            By eliminating manual variability through computerized sintering, automated cold pressing, and electronic dynamic balancing, KAYES guarantees identical cutting performance from the first tool to the ten-thousandth.
          </p>
        </div>

        {/* 6-Step Manufacturing Process Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.step}
                className="blueprint-card rounded-2xl p-6 bg-white flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-slate-900 text-white group-hover:bg-brand-900 transition-colors">
                      STAGE {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center border border-sky-100 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Automated Quality Check</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Factory Credential Hero Banner */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-15 pointer-events-none">
            <img 
              src="/images/brand/kays-flyer.jpg" 
              alt="Facility Flyer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase block mb-2">
              ISO 9001:2000 CERTIFIED QUALITY GUARANTEE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4">
              &quot;Nothing is too tough for us... Production of special diamond tools&quot;
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Whether you require custom grooving wheels for high-speed glass lines, multi-diameter core drill sets, or special form dressers, our engineering team manufactures custom toolings precisely matched to your machine parameters.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#rfq"
                className="px-6 py-3 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Request Custom Production Run</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+919841279658"
                className="px-5 py-3 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all inline-flex items-center gap-2"
              >
                <span>Direct Plant Line: +91 9841279658</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
