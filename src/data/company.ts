export interface GlassSector {
  id: string;
  name: string;
  category: 'flat' | 'precision' | 'advanced' | 'industrial';
  desc: string;
  tooling: string;
  image: string;
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

export const COMPANY_INFO: CompanyInfo = {
  name: "KAYS INDUSTRIES PVT LTD",
  entity: "KAYES INDUSTRIES PVT LTD (Formerly KAYES ENTERPRISES)",
  tagline: "Industrial Diamond Cutting & Grinding Tools",
  certification: "ISO 9001:2000 Certified Manufacturer",
  facilityHighlight: "Only Manufacturer in India with Fully Automatic Facility",
  motto: "Precision Superabrasives for Glass, Ceramics & Semiconductor Processing",
  website: "https://www.kayesind.com",
  domain: "www.kayesind.com",
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
      tooling: "1FF6Y / 1EE6Y Pencil Edgers & Core Drills",
      image: "/images/industries/architectural-glass.jpg",
      tag: "Façade & Double Glazing"
    },
    {
      id: "automotive",
      name: "Automotive Glass",
      category: "flat",
      desc: "Windshield, side-lite, and back-lite contour CNC pencil edging for high-speed robotic automotive float lines.",
      tooling: "Position 1 & 2 Segmented Diamond Wheels",
      image: "/images/industries/automotive-glass.jpg",
      tag: "Robotic Float Lines"
    },
    {
      id: "watch-glass",
      name: "Watch Glass & Sapphire",
      category: "precision",
      desc: "High-precision chamfering, miniature beveling, facet edging, and surface lapping for luxury watch crystals.",
      tooling: "Sub-Micron Diamond Wheels & Polishing Slurries",
      image: "/images/industries/watch-sapphire-glass.jpg",
      tag: "Sapphire & Quartz"
    },
    {
      id: "solar",
      name: "Solar Photovoltaic Glass",
      category: "industrial",
      desc: "High-speed continuous slitting, seaming, and corner rounding for anti-reflective solar PV glass panels.",
      tooling: "Slotted Diamond Cut-Off Discs & Edge Grinders",
      image: "/images/industries/solar-photovoltaic-glass.jpg",
      tag: "PV Module Manufacturing"
    },
    {
      id: "scientific",
      name: "Scientific & Lab Glass",
      category: "precision",
      desc: "Precision machining of borosilicate test-ware, quartz tubing, ground glass joint taper grinding, and coring.",
      tooling: "Sintered Thin-Wall Core Drills & Profile Wheels",
      image: "/images/industries/scientific-laboratory-glass.jpg",
      tag: "Borosilicate & Quartz"
    },
    {
      id: "semiconductor",
      name: "Semiconductors & Ceramics",
      category: "advanced",
      desc: "Dedicated R&D team developing sub-micron diamond dicing blades and grinding matrices for silicon wafers & alumina ceramics.",
      tooling: "Cleanroom Dicing Blades & Wafer Thinning Wheels",
      image: "/images/industries/semiconductor-ceramics.jpg",
      tag: "Dedicated R&D Division"
    },
    {
      id: "appliance",
      name: "Appliance Glass",
      category: "flat",
      desc: "Induction cooktop ceramic-glass, oven doors, and refrigerator shelving requiring clean edge arrissing.",
      tooling: "Continuous Rim CNC Profile Wheels & Drills",
      image: "/images/products/glass-cutoff-wheels.jpg",
      tag: "Ceramic-Glass Cooktops"
    },
    {
      id: "bottles",
      name: "Glass Bottles & Containers",
      category: "industrial",
      desc: "High-volume container neck profiling, mold maintenance trimming, and bottom facet edging.",
      tooling: "Electroplated & Metal Bonded Profile Tools",
      image: "/images/products/flyer-glass-wheels-array.jpg",
      tag: "High-Volume Packaging"
    }
  ]
};
