export interface ProductItem {
  id: string;
  name: string;
  pageRef: string;
  category: 'glass' | 'semiconductor' | 'toolroom' | 'stone' | 'abrasives';
  categoryName: string;
  image: string;
  summary: string;
  features: string[];
  specs: { label: string; value: string }[];
  shapes?: string[];
  targetSectors?: string[];
}

export const CATALOG_PRODUCTS: ProductItem[] = [
  {
    id: "glass-edging-wheels",
    name: "Segmented & Continuous Metal Bonded Edging Wheels",
    pageRef: "Catalogue Page 3 & WhatsApp Assets",
    category: "glass",
    categoryName: "Glass Industry",
    image: "/images/products/glass-edging-wheels-studio.jpg",
    summary: "Precision metal-bonded diamond edging and pencil bevelling wheels (POS 1, POS 2, Spectrum series). Produces chip-free radial, flat with arris, and custom profiles on all glass types.",
    features: [
      "Optimized bronze and cobalt bond matrices for aggressive feed rates",
      "Available in segmented rim (POS 1) and continuous rim (POS 2)",
      "Engineered for architectural, automotive, appliance, and solar glass edging"
    ],
    specs: [
      { label: "Profiles", value: "Pencil (1FF6Y), Flat with Arris (1EE6Y, 1LL6Y, 1DD6Y)" },
      { label: "Bond Matrix", value: "Sintered Bronze-Cobalt Alloy" },
      { label: "Machine Compatibility", value: "Bavelloni, Bovone, Bottero, Biesse, CNC Lines" }
    ],
    shapes: ["1FF6Y", "1EE6Y", "1LL6Y", "1DD6Y", "1A1"],
    targetSectors: ["Architectural Glass", "Automotive Glass", "Appliance Glass", "Solar Panels"]
  },
  {
    id: "glass-core-drills-milling",
    name: "Sintered Diamond Glass Core Drills & CNC Milling Bits",
    pageRef: "Catalogue Page 3",
    category: "glass",
    image: "/images/products/drills/kayes-drills-09.jpeg",
    summary: "High-precision thin-wall diamond core drills with 1/2\" standard Belgian threaded shanks and internal water coolant flush for fast, clean, and chip-free glass drilling.",
    features: [
      "Thin-wall sintered diamond crown minimizes cutting resistance",
      "Internal water coolant flow prevents thermal cracking",
      "CNC router bits for sink cutouts, hinge notches, and edge trimming"
    ],
    specs: [
      { label: "Diameter Range", value: "3 mm to 150 mm (Core Drills)" },
      { label: "Peripheral Speed", value: "approx. 5 m/sec" },
      { label: "Shank Fitting", value: "1/2\" Gas / Belgian Shank / M14" }
    ],
    shapes: ["3A2 Core Drill", "CNC Router Bits"],
    targetSectors: ["Architectural Façades", "Automotive Glass", "Scientific Glassware", "Glass Bottles"]
  },
  {
    id: "polishing-rubber-resin-wheels",
    name: "Glass Edge Polishing Discs & Wheels (BD-8 & 10S40)",
    pageRef: "New Production Line",
    category: "glass",
    categoryName: "Glass Industry",
    image: "/images/products/polishing-wheels-studio.jpg",
    summary: "Terracotta rubber composite (BD-8) and cerium-impregnated resin cup wheels (10S40) delivering brilliant optical clarity and high-gloss finishes on processed glass edges.",
    features: [
      "BD-8 series for resilient edge polishing and elimination of micro-scratches",
      "High temperature stability under continuous coolant flow",
      "Long service life on multi-head straight line edging machines"
    ],
    specs: [
      { label: "Standard Sizes", value: "150 x 22 x 15 mm, 200 x 25 x 76.2 mm" },
      { label: "Grit Formulations", value: "Roughness 1500 / 3500 RPM max" },
      { label: "Wheel Types", value: "BD-8 Polishing, 10S40 Cup Wheels" }
    ],
    shapes: ["Cup Wheels", "Peripheral Discs"],
    targetSectors: ["Appliance Glass", "Architectural Glass", "Watch Crystals"]
  },
  {
    id: "solar-architectural-slitters",
    name: "Diamond Slitting & Cut-Off Wheels for Solar & Flat Glass",
    pageRef: "Catalogue Page 3",
    category: "glass",
    categoryName: "Glass Industry",
    image: "/images/products/solar-architectural-slitters.jpg",
    summary: "Precision continuous rim and slotted diamond slitting discs (1A1R, 1A1) engineered for high-speed linear slitting of solar photovoltaic glass, thick architectural panels, and quartz tubing.",
    features: [
      "Ultra-thin kerf reduces material kerf-loss and edge flaking",
      "Sintered diamond layer directly bonded to steel core for true running",
      "Available with dampening copper pins for low-noise high-speed slitting"
    ],
    specs: [
      { label: "Diameters", value: "100 mm to 350 mm" },
      { label: "Thickness", value: "0.8 mm to 2.5 mm" },
      { label: "Coolant", value: "Wet cutting with water/water-soluble oil" }
    ],
    shapes: ["1A1R", "1A1"],
    targetSectors: ["Solar Photovoltaic Glass", "Architectural Glass", "Scientific Glass"]
  },
  {
    id: "semiconductor-ceramic-tools",
    name: "Semiconductor Wafer Dicing & Advanced Ceramic Grinding Tools",
    pageRef: "KAYES R&D Division",
    category: "semiconductor",
    categoryName: "Semiconductor & Ceramic (R&D)",
    image: "/images/products/semiconductor-ceramic-tools.jpg",
    summary: "Developed by our dedicated R&D division for ultra-precision back-grinding, edge profiling, and micro-dicing of silicon wafers, technical ceramics (alumina, zirconia), and quartz substrates.",
    features: [
      "Ultra-fine micron diamond abrasive matrices (D1 to D15)",
      "High rigidity hubs for sub-micron dicing precision (< 0.03 mm kerf)",
      "Specialized for semiconductor packaging, piezo ceramics, and optical sensors"
    ],
    specs: [
      { label: "Abrasive Micron Range", value: "0.5 µm to 15 µm" },
      { label: "Kerf Widths", value: "Down to 0.03 mm" },
      { label: "Target Materials", value: "Silicon Wafers, Alumina, Zirconia, Silicon Nitride, Quartz" }
    ],
    shapes: ["Hubbed Dicing Blades", "Micro-Grit Cup Wheels", "Diamond Lapping Pads"],
    targetSectors: ["Semiconductor Processing", "Technical Ceramics", "Micro-Optics"]
  },
  {
    id: "watch-optical-lens-tools",
    name: "Watch Glass, Sapphire & Optical Lens Generator Wheels",
    pageRef: "Catalogue Page 3",
    category: "glass",
    categoryName: "Glass Industry",
    image: "/images/products/optical-watch-glass-tools.jpg",
    summary: "Miniature diamond generator cups and bevel wheels designed for watch glass, sapphire crystals, ophthalmic CR-39/mineral lenses, and scientific test-ware.",
    features: [
      "Well-exposed micron diamonds for free cutting and minimal surface crazing",
      "Metal-bonded and electrodeposited options for glass and organic resins",
      "Tight radius tolerances for spherical and toric curve generation"
    ],
    specs: [
      { label: "Diameter Sizes", value: "10 mm to 90 mm" },
      { label: "Bond Formulations", value: "Fine Metal Bond & Electrodeposited" },
      { label: "Materials", value: "Sapphire, Mineral Glass, CR-39, Polycarbonate" }
    ],
    shapes: ["6A2", "11A2", "12A2", "Bevel Wheels"],
    targetSectors: ["Watch Glass", "Ophthalmic Optics", "Scientific Glassware"]
  },
  {
    id: "resin-bonded-grinding-wheels",
    name: "Resin Bonded Grinding Wheels (Toolroom)",
    pageRef: "Catalogue Page 4",
    category: "toolroom",
    categoryName: "Toolroom & Precision",
    image: "/images/products/resin-bonded-grinding-wheels.jpg",
    summary: "Cost-effective resin bonded wheels (11V9, 12A2, 1A1) for sharpening carbide tipped tools and precision toolroom grinding.",
    features: [
      "Resilient resin matrix dampens machine vibration",
      "Free-cutting action prevents thermal micro-cracking of carbide edges",
      "Available in standard 70° flaring cup and dish shapes"
    ],
    specs: [
      { label: "Bond Type", value: "Phenolic / Polyimide Resin" },
      { label: "Key Profiles", value: "11V9 (Flaring Cup), 12A2 (Dish), 1A1 (Straight)" }
    ],
    shapes: ["11V9", "12A2", "1A1", "6A2", "4B2"],
    targetSectors: ["Toolroom Machining", "Carbide Tool Resharpening"]
  },
  {
    id: "superabrasive-diamond-powders",
    name: "Synthetic & Natural Diamond Powders",
    pageRef: "Catalogue Page 7",
    category: "abrasives",
    categoryName: "Diamond Abrasives",
    image: "/images/products/superabrasive-diamond-powders.jpg",
    summary: "HPHT synthesized diamond powders with calibrated crystal strength and particle size distribution for surface preparation and lapping.",
    features: [
      "Synthesized from carbon and metal catalysts at ultra-high pressures",
      "Available in mesh and sub-micron gradings",
      "Used across glass, ceramic, automotive, and electronics industries"
    ],
    specs: [
      { label: "Synthesis", value: "HPHT Monocrystal & Micronized Diamond" },
      { label: "Catalysts", value: "Iron, chromium, cobalt, nickel" }
    ],
    shapes: ["Loose Powders", "Syringe Lapping Pastes"],
    targetSectors: ["Die & Mold Polishing", "Glass Pre-Processing", "Ceramics"]
  }
];
