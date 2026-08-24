import React, { useState } from 'react';
import { Sparkles, Layers, Sliders, ShieldCheck, Check, ArrowRight } from 'lucide-react';

export const GritParticleMatrix: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState(0);

  const gritStages = [
    {
      title: "Coarse Calibration & Roughing",
      meshRange: "Mesh #50 to #80",
      micronRange: "300 µm to 180 µm",
      application: "Aggressive stock removal, stone calibration, initial glass bevel roughing, heavy refractory sectioning.",
      recommendedBonds: ["Hard Sintered Metal", "Electrodeposited Matrix"],
      finishRa: "Ra > 3.2 µm",
      materialRemovalRate: "Maximum MRR (Ultra-Aggressive)"
    },
    {
      title: "Commercial Shaping & Edging",
      meshRange: "Mesh #100 to #220",
      micronRange: "150 µm to 63 µm",
      application: "Standard glass pencil edging (1FF6Y), carbide toolroom roughing, stone seam squaring, drill bit coring.",
      recommendedBonds: ["Medium Metal Bond", "Phenolic Resin Bond", "Electroplated"],
      finishRa: "Ra 1.6 µm - 0.8 µm",
      materialRemovalRate: "High Balance of Stock Removal & Form Retention"
    },
    {
      title: "Fine Pre-Polishing & Honing",
      meshRange: "Mesh #300 to #600",
      micronRange: "50 µm to 30 µm",
      application: "Carbide insert clearance honing, hydraulic cylinder bore micro-honing, CR-39 optical pre-polishing.",
      recommendedBonds: ["Polyimide Resin Bond", "Fine Metal Bond"],
      finishRa: "Ra 0.4 µm - 0.2 µm",
      materialRemovalRate: "Controlled Micro-Stock Removal"
    },
    {
      title: "Satin & High-Gloss Finishing",
      meshRange: "Mesh #800 to #1500",
      micronRange: "20 µm to 10 µm",
      application: "Granite & marble edge satin hone, ceramic seal ring finishing, carbide tool cutting edge prep.",
      recommendedBonds: ["Elastic Resin Bond", "Copper-Clad Diamond"],
      finishRa: "Ra 0.1 µm - 0.05 µm",
      materialRemovalRate: "Precision Finishing / Low Friction"
    },
    {
      title: "Optical Mirror Buffing & Micron Pastes",
      meshRange: "Mesh #3000 / Micron (0.25 - 6µm)",
      micronRange: "0.25 µm to 6 µm",
      application: "Die & mold optical mirror polishing, semiconductor silicon wafer lapping, ophthalmic lens finishing.",
      recommendedBonds: ["Syringe Lapping Paste", "Ultra-Fine Resin Buff"],
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
      thermalConductivity: "1,300 W/m·K (Inert to Iron up to 1300°C)",
      primarySuitability: "Hardened Tool Steels (HRC 45-65), High-Speed Steel (HSS), Chilled Cast Iron"
    },
    {
      name: "PCD (Polycrystalline Diamond)",
      crystalStructure: "Randomly oriented sintered diamond mass",
      knoopHardness: "Extreme abrasion resistance & toughness",
      thermalConductivity: "540 W/m·K",
      primarySuitability: "High-silicon aluminum, Carbon Fiber (CFRP), Copper/Brass alloys"
    }
  ];

  return (
    <section id="grit-matrix" className="py-20 bg-[#FBFBFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-brand-700 uppercase mb-2">
              <span className="w-6 h-px bg-brand-600"></span>
              Surface Preparation Metallurgy
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Superabrasive Grit & Particle Matrix
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mt-3 md:mt-0 leading-relaxed">
            From rough #50 block saw calibration down to 0.25-micron optical mirror suspensions. Synthesized at ultra-high HPHT conditions with calibrated friability.
          </p>
        </div>

        {/* Stage Slider Navigator */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm mb-12">
          
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100 flex-wrap gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                PROGRESSION SEQUENCE (ROUGH TO MIRROR)
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {gritStages[selectedStage].title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-slate-900 text-white">
                {gritStages[selectedStage].meshRange}
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-sky-50 text-sky-800 border border-sky-200">
                {gritStages[selectedStage].micronRange}
              </span>
            </div>
          </div>

          {/* Interactive Stepper Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-8">
            {gritStages.map((st, idx) => (
              <button
                key={st.title}
                onClick={() => setSelectedStage(idx)}
                className={`p-3 rounded-xl text-left transition-all border flex flex-col justify-between ${
                  selectedStage === idx
                    ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono font-bold ${selectedStage === idx ? 'text-sky-300' : 'text-slate-400'}`}>
                    0{idx + 1}
                  </span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    selectedStage === idx ? 'bg-slate-800 text-sky-200' : 'bg-slate-200/80 text-slate-600'
                  }`}>
                    {st.meshRange.split(' ')[1]}
                  </span>
                </div>
                <div className="text-xs font-semibold leading-snug line-clamp-2">
                  {st.title.split(' ')[0]} {st.title.split(' ')[1]}
                </div>
              </button>
            ))}
          </div>

          {/* Stage Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50/70 rounded-xl p-6 border border-slate-200">
            <div>
              <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Typical Operation & Scope
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">
                {gritStages[selectedStage].application}
              </p>
            </div>

            <div>
              <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Recommended Bond Matrices
              </span>
              <div className="space-y-1">
                {gritStages[selectedStage].recommendedBonds.map((b) => (
                  <div key={b} className="flex items-center gap-2 text-xs font-medium text-slate-800">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Surface Roughness & Removal Rate
              </span>
              <div className="space-y-1 text-xs font-mono">
                <div className="flex justify-between py-0.5 border-b border-slate-200">
                  <span className="text-slate-500">Surface Roughness:</span>
                  <span className="font-bold text-slate-900">{gritStages[selectedStage].finishRa}</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-500">Stock Removal:</span>
                  <span className="font-bold text-brand-700 truncate max-w-[55%]">{gritStages[selectedStage].materialRemovalRate}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Superabrasive Physical Properties Reference Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-600"></span>
            <h3 className="text-lg font-bold text-slate-900 font-sans">
              Superabrasive Mineralogical & Thermal Characteristics
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {abrasiveTypes.map((mat) => (
              <div key={mat.name} className="blueprint-card rounded-xl p-5 border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-slate-900">{mat.name}</h4>
                  <span className="w-2 h-2 rounded-full bg-sky-500"></span>
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
                    <span className="font-semibold text-brand-700 text-right">{mat.thermalConductivity}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-600">
                  <strong className="text-slate-800 font-semibold block mb-0.5">Optimized Workpieces:</strong>
                  {mat.primarySuitability}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
