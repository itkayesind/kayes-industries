export interface GlassSectorToolImage {
  title: string;
  desc: string;
  src: string;
}

export interface ApplicationImage {
  code: string;
  title: string;
  desc: string;
  src: string;
  sectorId: string;
  sectorName: string;
  category: 'flat' | 'precision' | 'advanced' | 'industrial';
}

export interface GlassSector {
  id: string;
  name: string;
  category: 'flat' | 'precision' | 'advanced' | 'industrial';
  desc: string;
  tooling: string;
  toolList?: string[];
  image: string;
  toolImages?: GlassSectorToolImage[];
  applications?: ApplicationImage[];
  tag: string;
}

export interface CompanyInfo {
  name: string;
  entity: string;
  tagline: string;
  certification: string;
  facilityHighlight: string;
  motto: string;
  website: string;
  domain: string;
  gstin?: string;
  clients?: string[];
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
    full: string;
  };
  contacts: {
    mobile: string;
    salesMobile: string;
    secondaryMobile: string;
    phoneOffice1: string;
    phoneOffice2: string;
    phoneOffice3: string;
    fax: string;
    emails: string[];
    whatsappLink: string;
    catalogPdf: string;
  };
  executive: {
    name: string;
    title: string;
    image: string;
  };
  glassSectors: GlassSector[];
}

export const APPLICATION_IMAGES: ApplicationImage[] = [
  {
    code: "ARCH-INT-01",
    title: "Frameless Glass Shower Enclosure",
    desc: "Frameless tempered safety glass door with polished chrome hinges and water-jet arrissed edges in luxury bathroom setting.",
    src: "/images/applications/ARCH-INT-01.jpg",
    sectorId: "architectural",
    sectorName: "Architectural Glass",
    category: "flat"
  },
  {
    code: "ARCH-INT-02",
    title: "Office Glass Partition System",
    desc: "Frameless acoustic glass partition walls with slim anodized aluminium channels in a modern corporate office interior.",
    src: "/images/applications/ARCH-INT-02.jpg",
    sectorId: "architectural",
    sectorName: "Architectural Glass",
    category: "flat"
  },
  {
    code: "AUTO-01",
    title: "Laminated Automotive Windshield",
    desc: "Premium laminated automotive safety glass windshield with chip-free pencil-ground edge perimeter under studio lighting.",
    src: "/images/applications/AUTO-01.jpg",
    sectorId: "automotive",
    sectorName: "Automotive Glass",
    category: "flat"
  },
  {
    code: "AUTO-02",
    title: "Tempered Side Door Window",
    desc: "Curved automotive side door glass with precision chamfered edge and polished radius corners isolated on white.",
    src: "/images/applications/AUTO-02.jpg",
    sectorId: "automotive",
    sectorName: "Automotive Glass",
    category: "flat"
  },
  {
    code: "SOLAR-01",
    title: "Solar Photovoltaic Panel Array",
    desc: "High-efficiency monocrystalline solar PV module array with textured anti-reflective glass and extruded aluminium frame.",
    src: "/images/applications/SOLAR-01.jpg",
    sectorId: "solar",
    sectorName: "Solar Photovoltaic Glass",
    category: "industrial"
  },
  {
    code: "SOLAR-02",
    title: "Anti-Reflective Solar Glass Sheet",
    desc: "Macro close-up of anti-reflective coated solar glass sheet showing continuous diamond seamed arris edge geometry.",
    src: "/images/applications/SOLAR-02.jpg",
    sectorId: "solar",
    sectorName: "Solar Photovoltaic Glass",
    category: "industrial"
  },
  {
    code: "SEMI-01",
    title: "300mm Silicon Wafer (Microchips)",
    desc: "300mm ultra-pure monocrystalline silicon wafer patterned with microscopic integrated circuits in cleanroom environment.",
    src: "/images/applications/SEMI-01.jpg",
    sectorId: "semiconductor",
    sectorName: "Semiconductors & Ceramics",
    category: "advanced"
  },
  {
    code: "SEMI-02",
    title: "SIM Card Microchip Contacts",
    desc: "Extreme macro of precision gold-plated contact pads and microchip etched traces for smart cards and SIM modules.",
    src: "/images/applications/SEMI-02.jpg",
    sectorId: "semiconductor",
    sectorName: "Semiconductors & Ceramics",
    category: "advanced"
  },
  {
    code: "CERAM-01",
    title: "High-Voltage Ceramic Insulator",
    desc: "Heavy-duty brown vitrified porcelain disc insulator for high-voltage power transmission line suspension.",
    src: "/images/applications/CERAM-01.jpg",
    sectorId: "semiconductor",
    sectorName: "Semiconductors & Ceramics",
    category: "advanced"
  },
  {
    code: "CERAM-02",
    title: "Alumina Ceramic Substrates & Blocks",
    desc: "High-purity white technical alumina (Al2O3) ceramic substrate tiles, wear blocks, and precision ground cylinders.",
    src: "/images/applications/CERAM-02.jpg",
    sectorId: "semiconductor",
    sectorName: "Semiconductors & Ceramics",
    category: "advanced"
  },
  {
    code: "APPL-01",
    title: "Induction Cooktop Glass Surface",
    desc: "Top-down view of black tempered ceramic-glass 4-zone induction hob surface with chamfered perimeter edges.",
    src: "/images/applications/APPL-01.jpg",
    sectorId: "appliance",
    sectorName: "Appliance Glass",
    category: "flat"
  },
  {
    code: "APPL-02",
    title: "4-Burner Gas Stove Tempered Glass",
    desc: "Heavy-duty thermal-resistant black tempered glass top panel with cast iron pan supports in contemporary kitchen.",
    src: "/images/applications/APPL-02.jpg",
    sectorId: "appliance",
    sectorName: "Appliance Glass",
    category: "flat"
  },
  {
    code: "APPL-03",
    title: "Borosilicate Glass Cookware Set",
    desc: "Transparent thermal shock resistant borosilicate glass casserole dish, measuring jug, and mixing bowl on marble counter.",
    src: "/images/applications/APPL-03.jpg",
    sectorId: "appliance",
    sectorName: "Appliance Glass",
    category: "flat"
  },
  {
    code: "BOTTLE-01",
    title: "Beverage Glass Bottles (Flint/Green/Amber)",
    desc: "Trio of empty beverage glass bottles in clear flint, emerald green, and amber brown with precision ground finishes.",
    src: "/images/applications/BOTTLE-01.jpg",
    sectorId: "bottles",
    sectorName: "Glass Bottles & Containers",
    category: "industrial"
  },
  {
    code: "BOTTLE-02",
    title: "Luxury Perfume & Cosmetic Glass",
    desc: "Heavy-base crystal clear perfume bottle with faceted stopper and cosmetic cream glass jar under luxury studio lighting.",
    src: "/images/applications/BOTTLE-02.jpg",
    sectorId: "bottles",
    sectorName: "Glass Bottles & Containers",
    category: "industrial"
  },
  {
    code: "LAB-01",
    title: "Borosilicate Laboratory Glassware",
    desc: "Scientific laboratory borosilicate beakers, quartz tubing, and precision ground glass joint tapers on slate lab bench.",
    src: "/images/applications/LAB-01.jpg",
    sectorId: "scientific",
    sectorName: "Scientific & Lab Glass",
    category: "precision"
  }
];

export const COMPANY_INFO: CompanyInfo = {
  name: "KAYES INDUSTRIES PVT LTD",
  entity: "KAYES INDUSTRIES PVT LTD",
  tagline: "Industrial Diamond Cutting & Grinding Tools",
  certification: "ISO 9001:2015 Certified Manufacturer",
  facilityHighlight: "Only Manufacturer in India with Fully Automatic Facility",
  motto: "Precision machined to exact tolerances. Built to run at full speed. Guaranteed to satisfy.",
  website: "https://www.kayesind.com",
  domain: "www.kayesind.com",
  gstin: "GSTIN: 33AABCK... (Available on request)",
  clients: ["Bavelloni", "Bovone", "Bottero", "Biesse", "Schiatti", "Lisec", "Deeway", "HanGlastech", "Sunkon", "Deeman", "Lining", "Hisung", "Golive"],
  address: {
    street: "18-B, North Phase, SIDCO Industrial Estate, Ambattur",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    pincode: "600 098",
    full: "18-B, North Phase, SIDCO Industrial Estate, Ambattur, Chennai - 600 098, India"
  },
  contacts: {
    mobile: "+91-9150025540",
    salesMobile: "+91-9150025540",
    secondaryMobile: "+91 98412 79658",
    phoneOffice1: "2625 0005",
    phoneOffice2: "2625 0006",
    phoneOffice3: "2625 0007",
    fax: "+91-44-2624 3302",
    emails: ["sales@kayesind.com", "kn@kayesind.com", "kayes98@gmail.com"],
    whatsappLink: "https://wa.me/919150025540?text=Hello%20KAYES%20INDUSTRIES%20PVT%20LTD,%20I%20would%20like%20to%20inquire%20about%20your%20diamond%20tooling%20solutions.",
    catalogPdf: "/docs/Kayes-Diamond-Tools-Catalogue.pdf"
  },
  executive: {
    name: "D. Kamal Nathan",
    title: "Chief Executive",
    image: "/images/products/kamal-nathan-chief-executive.jpg"
  },
  glassSectors: [
    {
      id: "architectural",
      name: "Architectural Glass",
      category: "flat",
      desc: "Monolithic, laminated, and double-glazed façade glass edge processing, arrissing, and water-jet coring.",
      tooling: "Metal & Resin Cup Wheels, Rubber & Cerium Wheels, Drills, Milling Tools, and Polishing Tools",
      toolList: [
        "Metal & Resin cup wheel",
        "Rubber and cerium wheels",
        "Drills",
        "Milling tools",
        "Polishing tools"
      ],
      image: "/images/industries/architectural-glass.jpg",
      applications: [
        APPLICATION_IMAGES[0], // ARCH-INT-01
        APPLICATION_IMAGES[1]  // ARCH-INT-02
      ],
      toolImages: [
        {
          title: "Metal & Resin Cup Wheels",
          desc: "Diamond metal cup wheel & fine resin cup wheel for flat edging and arrissing",
          src: "/images/products/architectural-glass-cup-wheels.jpg"
        },
        {
          title: "Rubber & Cerium Wheels",
          desc: "BD-8 rubber composite & cerium oxide wheels for brilliant high-gloss edge finish",
          src: "/images/products/rubber-cerium-polishing-wheels.jpg"
        },
        {
          title: "Drills & Milling Tools",
          desc: "Sintered thin-wall core drills (1/2\" Gas) & CNC diamond router milling bits",
          src: "/images/products/glass-drills-milling-tools.jpg"
        },
        {
          title: "Tooling Showcase",
          desc: "Complete architectural glass tooling suite with polished edge architectural glass",
          src: "/images/products/architectural-glass-tooling-showcase.jpg"
        }
      ],
      tag: "Façade & Double Glazing"
    },
    {
      id: "automotive",
      name: "Automotive Glass",
      category: "flat",
      desc: "Windshield, side-lite, and back-lite contour CNC pencil edging for high-speed robotic automotive float lines.",
      tooling: "Position 1 & 2 Segmented Diamond Wheels, Fine Resin Arrissing Wheels, Profilers",
      toolList: [
        "Position 1 Metal Bonded Roughing Wheels",
        "Position 2 Fine Metal Profile Wheels",
        "Resin Bonded Finishing Wheels",
        "Polishing & Arrissing Tools"
      ],
      image: "/images/industries/automotive-glass.jpg",
      applications: [
        APPLICATION_IMAGES[2], // AUTO-01
        APPLICATION_IMAGES[3]  // AUTO-02
      ],
      toolImages: [
        {
          title: "Pencil Edging & Profiling",
          desc: "Multi-radius CNC contour wheels for automotive float glass arrissing",
          src: "/images/products/pencil-edging-bevelling-wheels.jpg"
        },
        {
          title: "Metal Bonded Wheels",
          desc: "High-speed continuous rim and segmented edging wheels",
          src: "/images/products/metal-bonded-edging-wheels.jpg"
        }
      ],
      tag: "Robotic Float Lines"
    },
    {
      id: "watch-glass",
      name: "Watch Glass & Sapphire",
      category: "precision",
      desc: "High-precision chamfering, miniature beveling, facet edging, and surface lapping for luxury watch crystals.",
      tooling: "Sub-Micron Diamond Wheels & Polishing Slurries",
      toolList: [
        "Optical Diamond Generators",
        "Micro-Chamfering Wheels",
        "Fine Diamond Lapping Powders",
        "High-Precision Edge Slitters"
      ],
      image: "/images/industries/watch-sapphire-glass.jpg",
      toolImages: [
        {
          title: "Optical Watch Glass Tools",
          desc: "Sub-micron diamond generators and bevel tools for sapphire crystal",
          src: "/images/products/optical-watch-glass-tools.jpg"
        },
        {
          title: "Superabrasive Diamond Powders",
          desc: "Precision graded micron diamond powders for optical lapping",
          src: "/images/products/superabrasive-diamond-powders.jpg"
        }
      ],
      tag: "Sapphire & Quartz"
    },
    {
      id: "solar",
      name: "Solar Photovoltaic Glass",
      category: "industrial",
      desc: "High-speed continuous slitting, seaming, and corner rounding for anti-reflective solar PV glass panels.",
      tooling: "Slotted Diamond Cut-Off Discs & Edge Grinders",
      toolList: [
        "Continuous Diamond Slitters",
        "Double-Arris Seaming Wheels",
        "High-Speed Corner Rounders",
        "Segmented Grinding Discs"
      ],
      image: "/images/industries/solar-photovoltaic-glass.jpg",
      applications: [
        APPLICATION_IMAGES[4], // SOLAR-01
        APPLICATION_IMAGES[5]  // SOLAR-02
      ],
      toolImages: [
        {
          title: "Solar Architectural Slitters",
          desc: "Continuous high-speed slitting discs and seaming wheels",
          src: "/images/products/solar-architectural-slitters.jpg"
        },
        {
          title: "Glass Cut-Off Wheels",
          desc: "Electroplated and sintered diamond cut-off blades",
          src: "/images/products/glass-cutoff-wheels.jpg"
        }
      ],
      tag: "PV Module Manufacturing"
    },
    {
      id: "scientific",
      name: "Scientific & Lab Glass",
      category: "precision",
      desc: "Precision machining of borosilicate test-ware, quartz tubing, ground glass joint taper grinding, and coring.",
      tooling: "Sintered Thin-Wall Core Drills & Profile Wheels",
      toolList: [
        "Sintered Thin-Wall Drills (1/2\" Gas)",
        "Ground Glass Joint Taper Grinders",
        "Quartz Tubing Cutters",
        "Fine Lapping Mandrels"
      ],
      image: "/images/industries/scientific-laboratory-glass.jpg",
      applications: [
        APPLICATION_IMAGES[15] // LAB-01
      ],
      toolImages: [
        {
          title: "Precision Core Drills",
          desc: "Thin-wall diamond core drills for borosilicate lab testware",
          src: "/images/products/glass-core-drills-studio.jpg"
        },
        {
          title: "Glass Cut-Off Discs",
          desc: "Precision cut-off wheels for quartz and laboratory tubing",
          src: "/images/products/glass-cutoff-wheels.jpg"
        }
      ],
      tag: "Borosilicate & Quartz"
    },
    {
      id: "semiconductor",
      name: "Semiconductors & Ceramics",
      category: "advanced",
      desc: "Dedicated R&D team developing sub-micron diamond dicing blades and grinding matrices for silicon wafers & alumina ceramics.",
      tooling: "Cleanroom Dicing Blades & Wafer Thinning Wheels",
      toolList: [
        "Ultra-Thin Dicing Blades",
        "Wafer Edge Grinding Wheels",
        "Alumina Ceramic Finishing Stones",
        "CBN & Diamond Mounted Points"
      ],
      image: "/images/industries/semiconductor-ceramics.jpg",
      applications: [
        APPLICATION_IMAGES[6], // SEMI-01
        APPLICATION_IMAGES[7], // SEMI-02
        APPLICATION_IMAGES[8], // CERAM-01
        APPLICATION_IMAGES[9]  // CERAM-02
      ],
      toolImages: [
        {
          title: "Semiconductor Ceramic Tools",
          desc: "Sub-micron diamond dicing and grinding wheels for silicon & alumina",
          src: "/images/products/semiconductor-ceramic-tools.jpg"
        },
        {
          title: "CBN & Diamond Points",
          desc: "Precision mounted points and micro-grinding pins",
          src: "/images/products/cbn-diamond-mounted-points.jpg"
        }
      ],
      tag: "Dedicated R&D Division"
    },
    {
      id: "appliance",
      name: "Appliance Glass",
      category: "flat",
      desc: "Induction cooktop ceramic-glass, oven doors, and refrigerator shelving requiring clean edge arrissing.",
      tooling: "Continuous Rim CNC Profile Wheels & Drills",
      toolList: [
        "Continuous Rim CNC Profile Wheels",
        "Bevel Arrissing Diamonds",
        "Water-Jet Core Drills",
        "Resin Chamfering Tools"
      ],
      image: "/images/industries/appliance-glass.jpg",
      applications: [
        APPLICATION_IMAGES[10], // APPL-01
        APPLICATION_IMAGES[11], // APPL-02
        APPLICATION_IMAGES[12]  // APPL-03
      ],
      toolImages: [
        {
          title: "CNC Glass Profile Tools",
          desc: "High-precision edge grinding and arrissing wheels for cooktops",
          src: "/images/products/glass-edging-wheels-studio.jpg"
        },
        {
          title: "Resin Grinding Wheels",
          desc: "Fine resin bond wheels for smooth chip-free edge finish",
          src: "/images/products/resin-bonded-grinding-wheels.jpg"
        }
      ],
      tag: "Ceramic-Glass Cooktops"
    },
    {
      id: "bottles",
      name: "Glass Bottles & Containers",
      category: "industrial",
      desc: "High-volume container neck profiling, mold maintenance trimming, and bottom facet edging.",
      tooling: "Electroplated & Metal Bonded Profile Tools",
      toolList: [
        "Container Neck Profiling Wheels",
        "Mold Maintenance Diamond Files",
        "Bottom Facet Edging Discs",
        "Electroplated Dressing Tools"
      ],
      image: "/images/products/flyer-glass-wheels-array.jpg",
      applications: [
        APPLICATION_IMAGES[13], // BOTTLE-01
        APPLICATION_IMAGES[14]  // BOTTLE-02
      ],
      toolImages: [
        {
          title: "Flyer Glass Wheels",
          desc: "Comprehensive array of metal bonded profiling tools for container glass",
          src: "/images/products/flyer-glass-wheels-array.jpg"
        },
        {
          title: "Diamond Hand Files",
          desc: "Precision electroplated diamond files for container mold touch-up",
          src: "/images/products/diamond-hand-files-lapping.jpg"
        }
      ],
      tag: "High-Volume Packaging"
    }
  ]
};
