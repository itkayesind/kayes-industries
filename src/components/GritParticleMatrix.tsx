import React, { useState } from 'react';
import { Check, Award, Sparkles } from 'lucide-react';

export const GritParticleMatrix: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState(0);

  const gritStages = [
    {
      title: "Coarse Calibration & Stock Roughing",
      meshRange: "Mesh #50 - #80",
      micronRange: "300 µm - 180 µm",
      application: "Aggressive stock removal, stone calibration, initial glass bevel roughing, heavy refractory sectioning.",
      recommendedBonds: ["Hard Sintered Bronze/Cobalt", "Heavy Electroplated Matrix"],
      finishRa: "Ra > 3.2 µm",
      materialRemovalRate: "Maximum MRR (Ultra-Aggressive)"
    },
    {
      title: "Commercial Shaping & Pencil Edging",
      meshRange: "Mesh #100 - #220",
      micronRange: "150 µm - 63 µm",
      application: "Standard automotive & architectural glass pencil edging (1FF6Y), carbide toolroom roughing, stone seam squaring.",
      recommendedBonds: ["Continuous Metal Bond", "Phenolic Resin Matrix", "Multi-Layer Electroplated"],
      finishRa: "Ra 1.6 µm - 0.8 µm",
      materialRemovalRate: "High Balance of Form Retention & Speed"
    },
    {
      title: "Fine Pre-Polishing & Honing",
      meshRange: "Mesh #300 - #600",
      micronRange: "50 µm - 30 µm",
      application: "Carbide insert clearance honing, hydraulic cylinder bore micro-honing, CR-39 optical pre-polishing.",
      recommendedBonds: ["Polyimide Heat-Resistant Resin", "Fine Sintered Metal"],
      finishRa: "Ra 0.4 µm - 0.2 µm",
      materialRemovalRate: "Controlled Micro-Stock Removal"
    },
    {
      title: "Satin Finish & Micro-Finishing",
      meshRange: "Mesh #800 - #1500",
      micronRange: "20 µm - 10 µm",
      application: "Granite & marble edge satin hone, ceramic seal ring finishing, carbide tool cutting edge micro-prep.",
      recommendedBonds: ["Elastic Resin Matrix", "Copper-Clad Synthetic Diamond"],
      finishRa: "Ra 0.1 µm - 0.05 µm",
      materialRemovalRate: "Precision Finishing / Ultra-Low Friction"
    },
    {
      title: "Optical Mirror Buffing & Micron Pastes",
      meshRange: "Mesh #3000 / Micron (0.25 - 6µm)",
      micronRange: "0.25 µm - 6 µm",
      application: "Die & mold optical mirror polishing, semiconductor silicon wafer lapping, ophthalmic lens finishing.",
      recommendedBonds: ["Diamond Lapping Compound (Syringe)", "Ultra-Fine Resin Buff"],
      finishRa: "Ra < 0.02 µm (Optical Mirror)",
      materialRemovalRate: "Sub-Micron Surface Planarization"
    }
  ];

  const abrasiveTypes = [
    {
      name: "Synthetic Diamond (HPHT)",
      crystalStructure: "Cubo-octahedral monocrystal",
      knoopHardness: "80,000 N/mm² (Mohs 10)",
      thermalConductivity: "2,000 W/m·K",
      primarySuitability: "Glass, Carbide, Ceramics, Stone, Refractory, Quartz"
    },
    {
      name: "Cubic Boron Nitride (CBN)",
      crystalStructure: "Sphalerite cubic crystal",
      knoopHardness: "45,000 N/mm² (Mohs 9.8)",
      thermalConductivity: "1,300 W/m·K (Inert to Fe)",
      primarySuitability: "Hardened Tool Steels (HRC 45-65), High-Speed Steel (HSS)"
    },
    {
      name: "PCD (Polycrystalline Diamond)",
      crystalStructure: "Randomly oriented sintered diamond",
      knoopHardness: "Extreme abrasion resistance & toughness",
      thermalConductivity: "540 W/m·K",
      primarySuitability: "High-silicon aluminum, Carbon Fiber (CFRP), Non-ferrous alloys"
    }
  ];

  return (
    <section id="grit-matrix" className="py-24 bg-[#FAF9F6] border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal-on-scroll">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-6 h-px bg-slate-400"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 font-brand">
                Surface Preparation Metallurgy &bull; Particle Matrix
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight font-brand">
              Diamond Grit &amp; Micron Progression
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3.5 leading-relaxed font-sans">
              From coarse #50 stock roughing down to 0.25-micron optical mirror planarization. Explore bond matrices, surface roughness ($R_a$), and mineralogical characteristics.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex-shrink-0">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-[11px] font-mono text-slate-700 shadow-2xs">
              <Award className="w-3.5 h-3.5 text-cyan-700" />
              <span>HPHT Calibrated Friability</span>
            </span>
          </div>
        </div>

        {/* Interactive Stepper progression card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xl mb-10 reveal-on-scroll">
          
          {/* Header of Active Step */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-4">
            <div>
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Active Progression Stage 0{selectedStage + 1} of 05
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-brand">
                {gritStages[selectedStage].title}
              </h3>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-slate-100 text-slate-900 border border-slate-200 shadow-2xs">
                {gritStages[selectedStage].meshRange}
              </span>
              <span className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold bg-cyan-50 text-cyan-900 border border-cyan-200">
                {gritStages[selectedStage].micronRange}
              </span>
            </div>
          </div>

          {/* Stepper Buttons (Clean Light Theme) */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            {gritStages.map((st, idx) => {
              const isActive = selectedStage === idx;
              return (
                <button
                  key={st.title}
                  onClick={() => setSelectedStage(idx)}
                  className={`p-4 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between cursor-pointer ${
                    isActive
                      ? 'bg-white border-2 border-slate-900 text-slate-950 shadow-md ring-2 ring-slate-900/5'
                      : 'bg-[#FAF9F6] border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-slate-900' : 'text-slate-400'}`}>
                      STAGE 0{idx + 1}
                    </span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-bold ${
                      isActive ? 'bg-slate-900 text-white' : 'bg-slate-200/80 text-slate-700'
                    }`}>
                      {st.meshRange.split(' ')[1]}
                    </span>
                  </div>
                  <div className={`text-xs leading-snug ${isActive ? 'font-bold text-slate-950' : 'font-semibold text-slate-700'}`}>
                    {st.title.split(' ')[0]} {st.title.split(' ')[1]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Technical Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#FAF9F6] rounded-2xl p-6 border border-slate-200">
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                Typical Operation & Scope
              </span>
              <p className="text-xs text-slate-700 leading-relaxed font-sans">
                {gritStages[selectedStage].application}
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                Recommended Bond Matrices
              </span>
              <div className="space-y-1.5">
                {gritStages[selectedStage].recommendedBonds.map((b) => (
                  <div key={b} className="flex items-center gap-2 text-xs font-medium text-slate-800">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                Surface Roughness & Removal Rate
              </span>
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Surface Finish:</span>
                  <span className="font-bold text-slate-900">{gritStages[selectedStage].finishRa}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">MRR Rate:</span>
                  <span className="font-bold text-cyan-900">{gritStages[selectedStage].materialRemovalRate}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Superabrasive Physical Properties Reference Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-on-scroll">
          {abrasiveTypes.map((mat) => (
            <div key={mat.name} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900 font-brand">{mat.name}</h4>
                <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="py-1 border-b border-slate-100 flex justify-between">
                  <span className="text-slate-500">Crystal:</span>
                  <span className="text-slate-800 text-right truncate max-w-[60%]">{mat.crystalStructure}</span>
                </div>
                <div className="py-1 border-b border-slate-100 flex justify-between">
                  <span className="text-slate-500">Hardness:</span>
                  <span className="font-semibold text-slate-900 text-right">{mat.knoopHardness}</span>
                </div>
                <div className="py-1 border-b border-slate-100 flex justify-between">
                  <span className="text-slate-500">Thermal:</span>
                  <span className="font-semibold text-cyan-900 text-right">{mat.thermalConductivity}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-600">
                <strong className="text-slate-800 font-semibold block mb-0.5 font-brand">Optimized Workpieces:</strong>
                {mat.primarySuitability}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
