export interface GlossaryTerm {
  term: string;
  category: 'Abrasives' | 'Bonding Systems' | 'Machining & Tooling' | 'Quality & Standards';
  shortDef: string;
  fullExplanation: string;
  relatedTerms: string[];
}

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: "Superabrasives",
    category: "Abrasives",
    shortDef: "Ultra-hard abrasive materials including diamond and Cubic Boron Nitride (CBN) exhibiting Knoop hardness > 40,000 N/mm².",
    fullExplanation: "Superabrasives represent the pinnacle of cutting and grinding materials. Unlike conventional abrasives (aluminum oxide or silicon carbide), diamond (carbon) and CBN (boron nitride) maintain sharp cutting crystal edges at extreme pressures, dramatically accelerating material removal rates and extending tool lifespans by up to 100x.",
    relatedTerms: ["Diamond", "CBN", "PCD", "Friability"]
  },
  {
    term: "PCD (Polycrystalline Diamond)",
    category: "Machining & Tooling",
    shortDef: "A synthesized mass of randomly orientated diamond particles sintered with a metallic catalyst at HPHT onto a tungsten carbide substrate.",
    fullExplanation: "PCD tools combine the diamond's unparalleled hardness and wear resistance with the toughness and shock resistance of cemented tungsten carbide. PCD excels in high-speed turning and milling of non-ferrous alloys (aluminum, brass, bronze), graphite, carbon-fiber reinforced plastics (CFRP), and abrasive ceramics.",
    relatedTerms: ["PCBN", "Tungsten Carbide", "Turning Tools"]
  },
  {
    term: "PCBN (Polycrystalline Cubic Boron Nitride)",
    category: "Machining & Tooling",
    shortDef: "The second hardest known material after diamond, engineered for machining hardened ferrous steels and chilled cast irons.",
    fullExplanation: "Unlike diamond, which reacts chemically with iron at temperatures above 700°C to form iron carbide, CBN is chemically inert to iron up to 1300°C. PCBN inserts enable hard part turning (HPT) of hardened gear steels (HRC 45-65), replacing costly and slow cylindrical grinding processes.",
    relatedTerms: ["PCD", "Hard Part Turning", "Mounted Points"]
  },
  {
    term: "Metal Bond (Sintered)",
    category: "Bonding Systems",
    shortDef: "A powder metallurgy matrix where diamond particles are held by bronze, cobalt, nickel, or steel alloys sintered under pressure.",
    fullExplanation: "Metal bonded diamond tools provide the highest mechanical retention and wear resistance. Ideal for aggressive grinding of glass, optical materials, stone, tile, and quartz. Sintered metal tools hold complex profiles (like pencil edging and beveling) through long production runs with high form stability.",
    relatedTerms: ["Resin Bond", "Electroplated", "Pencil Edging"]
  },
  {
    term: "Resin Bond (Phenolic / Polyimide)",
    category: "Bonding Systems",
    shortDef: "Thermosetting resin matrix that provides resilient, vibration-damped grinding with superior surface finish.",
    fullExplanation: "Resin bonded wheels feature elastic compliance that cushions the impact between abrasive grains and brittle workpieces like tungsten carbide and technical ceramics. They provide free-cutting action, excellent thermal dissipation, and deliver surface roughness Ra values below 0.05 µm.",
    relatedTerms: ["Metal Bond", "11V9 Wheel", "Toolroom Grinding"]
  },
  {
    term: "Electrodeposited (Electroplated)",
    category: "Bonding Systems",
    shortDef: "A single layer of diamond crystals mechanically locked to a precision-machined steel blank using an electroplated nickel matrix.",
    fullExplanation: "Electroplated diamond tooling offers 100% diamond crystal protrusion, allowing free cutting without wheel dressing. It is ideal for complex 3D profiles, optical generators, core drills, and mounted points where maintaining precise geometry without tool dressing is vital.",
    relatedTerms: ["Mounted Points", "Optical Generators", "Metal Bond"]
  },
  {
    term: "Diamond Concentration (C-Value)",
    category: "Quality & Standards",
    shortDef: "The volumetric proportion of diamond crystals in the abrasive layer, where C100 represents 4.4 carats per cubic centimeter (25% by volume).",
    fullExplanation: "Concentration affects cutting pressure, wheel life, and power consumption. Low concentration (C50/C75) is optimal for wide contact areas and soft resin bonds, while high concentration (C100/C125) is engineered for narrow contact rims, heavy plunge grinding, and extended tool longevity.",
    relatedTerms: ["Mesh Size", "Carat Weight", "Superabrasives"]
  },
  {
    term: "Mesh Size & Micron Grading",
    category: "Abrasives",
    shortDef: "Standardized sizing classification for diamond crystals based on US Standard sieves (Mesh) or laser diffraction (Microns).",
    fullExplanation: "Mesh sizes (e.g. 60/80 for roughing, 120/140 for medium, 230/270 for finishing) define particle diameters greater than 40 microns. Finer particles below 40 microns are classified in micron grades (e.g., 0.5µm to 45µm) and used in lapping compounds and polishing discs.",
    relatedTerms: ["Polishing Pads", "Lapping Compound", "Superabrasives"]
  },
  {
    term: "Wheel Truing and Dressing",
    category: "Machining & Tooling",
    shortDef: "Truing restores concentricity and geometric profile; dressing strips away bond matrix to expose fresh sharp diamond points.",
    fullExplanation: "Over extended grinding runs, abrasive wheels may become loaded with swarf or lose geometric concentricity. Precision single-point or multi-point diamond dressers are used to restore wheel runout to within microns and condition the abrasive face for maximum cutting efficiency.",
    relatedTerms: ["Diamond Dressers", "1A1 Wheel", "Concentration"]
  },
  {
    term: "Swarf & Coolant Clearance",
    category: "Machining & Tooling",
    shortDef: "The rapid evacuation of microscopic glass/metal ground chips from the cutting zone via continuous coolant pressure.",
    fullExplanation: "Efficient swarf removal prevents abrasive wheel loading, reduces friction heat, and protects against workpiece micro-cracking. KAYES tools feature engineered internal water slots, hollow drill cores, and swarf ejection channels.",
    relatedTerms: ["Core Drills", "Pencil Edging", "Cut-Off Wheels"]
  },
  {
    term: "Friability Index",
    category: "Quality & Standards",
    shortDef: "The propensity of a diamond crystal to micro-fracture under cutting stress, exposing new razor-sharp cutting facets.",
    fullExplanation: "Controlled friability is crucial: high-impact tough crystals (low friability) are chosen for saw blades and metal bonds, while self-sharpening micro-friable crystals (high friability) are utilized in resin bonded wheels for carbide toolroom grinding.",
    relatedTerms: ["Synthetic Diamond", "Resin Bond", "Metal Bond"]
  },
  {
    term: "ISO 9001:2000 Manufacturing Protocol",
    category: "Quality & Standards",
    shortDef: "International standard governing rigorous quality assurance across raw material assay, automated sintering, and dynamic balancing.",
    fullExplanation: "KAYES Industries operates under strict ISO protocols. Every batch of synthetic diamond is tested for particle distribution and magnetic purity. Finished wheels undergo computerized dynamic balance testing to eliminate high-speed spindle runout.",
    relatedTerms: ["Dynamic Balancing", "Automatic Facility"]
  }
];
