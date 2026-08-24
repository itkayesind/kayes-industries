import React, { useState } from 'react';
import { 
  Building2, 
  Car, 
  Layers, 
  Wrench, 
  Glasses, 
  ArrowRight, 
  Check, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export const IndustrySolutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const sectors = [
    {
      id: "glass",
      name: "Glass Pre-Processing",
      icon: Building2,
      subtitle: "Automotive, Architectural & Appliance Glass",
      heroImage: "/images/products/flyer-glass-wheels-array.jpg",
      challenge: "High edge chipping, slow feed rates, micro-cracks leading to furnace breakage during glass tempering.",
      kayesSolution: "Direct-sintered bronze-cobalt pencil edging wheels and thin-wall internal water-cooled core drills calibrated for feed speeds up to 12 m/min with chip-free edge retention.",
      keyProducts: [
        "1FF6Y & 1EE6Y Pencil Edging Wheels",
        "Sintered Core Drills with G 1/2\" Belgian Shank",
        "1A1R Precision Glass Cut-off Wheels",
        "Continuous Rim Chamfer Discs"
      ],
      targetMachines: "Bavelloni, Bovone, Bottero, Biesse, Schiatti, Lisec"
    },
    {
      id: "automotive",
      name: "Automotive Manufacturing",
      icon: Car,
      subtitle: "Powertrain, Glass & Component Machining",
      heroImage: "/images/products/pcd-cbn-turning-tools.jpg",
      challenge: "Excessive tool wear on high-silicon aluminum castings and frequent machine downtime during hard steel turning.",
      kayesSolution: "Ultra-hard PCD inserts for high-speed aluminum piston and wheel turning, alongside PCBN inserts delivering mirror-like finishes on hardened gears (HRC 55-65), eliminating secondary grinding.",
      keyProducts: [
        "ISO Standard PCD Turning & Milling Inserts",
        "PCBN Hard Part Turning Inserts",
        "Diamond Profile Dressing Rollers",
        "Automotive Curved Glass Edgers"
      ],
      targetMachines: "CNC Lathes, Machining Centers, Cylindrical Grinders"
    },
    {
      id: "stone",
      name: "Stone, Granite & Refractory",
      icon: Layers,
      subtitle: "Quarrying, Bridge Saws & Heavy Civil Coring",
      heroImage: "/images/products/diamond-saws-spare-segments.jpg",
      challenge: "Segment detachment under heavy thermal load, saw blade deflection in hard quartz granite, slow foundation drilling.",
      kayesSolution: "Laser-welded diamond saw blades up to 3.0 meters (120\") and heavy-duty core drill barrels up to 900mm with custom segment metallurgy designed for specific Mohs hardness.",
      keyProducts: [
        "Large Diameter Saws (100mm to 3000mm)",
        "Industrial Core Drills (6mm to 900mm)",
        "8-Stage Flexible Polishing Discs (#50 to #3000)",
        "Segmented & Turbo Dry Blades"
      ],
      targetMachines: "Bridge Saws, Multi-Blade Block Cutters, Core Drilling Rigs"
    },
    {
      id: "toolroom",
      name: "Toolroom & Precision Machining",
      icon: Wrench,
      subtitle: "Solid Carbide, Tool & Cutter Resharpening",
      heroImage: "/images/products/resin-bonded-grinding-wheels.jpg",
      challenge: "Carbide cutting edge micro-chipping, thermal discoloration, poor surface roughness on cutting flutes.",
      kayesSolution: "Phenolic and polyimide resin bonded 11V9 and 12A2 wheels providing resilient vibration damping, delivering Ra < 0.05 µm finish with rapid stock removal.",
      keyProducts: [
        "11V9 70° Flaring Cup Resin Wheels",
        "12A2 Dish Sharpening Wheels",
        "CBN High-Speed Jig Mounted Points",
        "Single-Point & Multi-Point Diamond Dressers"
      ],
      targetMachines: "Walter, ANCA, Rollomatic, Vollmer, Surface Grinders"
    },
    {
      id: "optics",
      name: "Ophthalmic Optics & CR-39",
      icon: Glasses,
      subtitle: "Prescription Lenses, CR-39 & Mineral Glass",
      heroImage: "/images/products/optical-diamond-generators.jpg",
      challenge: "Surface crazing, wheel loading from organic resin swarf, inaccurate toric curve radii.",
      kayesSolution: "Electrodeposited and metal-bonded generator wheels engineered with high diamond exposure and heavy coolant clearance slots for free-cutting toric and spherical lens curve generation.",
      keyProducts: [
        "Optical Diamond Generator Cups (35mm to 90mm)",
        "Mineral & Polycarbonate Edging Wheels",
        "Micron-Graded Diamond Lapping Pastes (0.25µm - 6µm)",
        "Precision Optical Bevel Discs"
      ],
      targetMachines: "Satisloh, LOH, Coburn, Nidek, Briot, Essilor"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-brand-700 uppercase mb-2">
              <span className="w-6 h-px bg-brand-600"></span>
              Sector Applications
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Turnkey Tooling Across Global Industries
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mt-3 md:mt-0 leading-relaxed">
            Engineered solutions solving high wear, micro-chipping, and cycle-time bottlenecks for specialized manufacturing sectors.
          </p>
        </div>

        {/* Industry Sector Tab Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-slate-100">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center gap-2.5 whitespace-nowrap border ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-sky-400' : 'text-slate-500'}`} />
                <span>{sec.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Sector Showcase Card */}
        <div className="bg-slate-50/70 rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Context, Challenge & KAYES Solution */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-700 uppercase tracking-wider mb-1">
                  <span>Sector Profile</span>
                  <span>&bull;</span>
                  <span>{sectors[activeTab].subtitle}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  {sectors[activeTab].name}
                </h3>
              </div>

              {/* Challenge Box */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs">
                <span className="font-mono font-bold text-amber-700 uppercase block mb-1">
                  Common Manufacturing Bottleneck
                </span>
                <p className="text-slate-600 leading-relaxed">
                  {sectors[activeTab].challenge}
                </p>
              </div>

              {/* KAYES Solution */}
              <div className="bg-sky-50/60 p-4 rounded-xl border border-sky-200 text-xs">
                <span className="font-mono font-bold text-sky-900 uppercase block mb-1">
                  The KAYES Engineering Approach
                </span>
                <p className="text-slate-800 leading-relaxed">
                  {sectors[activeTab].kayesSolution}
                </p>
              </div>

              {/* Key Products Checklist */}
              <div>
                <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider block mb-2">
                  Primary Tooling Deployed
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {sectors[activeTab].keyProducts.map((p) => (
                    <div key={p} className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white p-2 rounded-lg border border-slate-200">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span className="truncate">{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Machine Compatibility */}
              <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-200 flex items-center justify-between">
                <span>Machine Compatibility: <strong className="text-slate-800">{sectors[activeTab].targetMachines}</strong></span>
                <a href="#catalog" className="text-brand-700 font-bold hover:underline inline-flex items-center gap-1">
                  <span>Browse Catalog</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Hero Sector Image Preview */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md group">
                <img
                  src={sectors[activeTab].heroImage}
                  alt={sectors[activeTab].name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-wider mb-1">
                    Industry Proven
                  </span>
                  <p className="text-base font-bold text-white leading-tight">
                    {sectors[activeTab].subtitle}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
