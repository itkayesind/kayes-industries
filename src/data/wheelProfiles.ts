export interface WheelProfile {
  code: string;
  name: string;
  category: 'cup' | 'peripheral' | 'internal' | 'special';
  description: string;
  typicalBond: string;
  primaryUses: string[];
  keyDimensions: string[];
  svgType: string;
}

export const WHEEL_PROFILES: WheelProfile[] = [
  {
    code: "6A2",
    name: "Plain Cup Wheel",
    category: "cup",
    description: "Flat-faced cup wheel designed for face grinding on carbide tools, surface grinders, and cutter grinders with broad contact area.",
    typicalBond: "Resin & Metal Bond",
    primaryUses: ["Carbide face milling cutter sharpening", "Toolroom surface grinding", "Ceramic seal ring face lapping"],
    keyDimensions: ["Outer Diameter (D)", "Abrasive Layer Width (W)", "Abrasive Depth (X)", "Total Height (T)", "Bore (H)"],
    svgType: "cup-plain"
  },
  {
    code: "11A2",
    name: "Flare Cup Wheel",
    category: "cup",
    description: "Flared angled body providing spindle and arbor clearance when grinding close to shoulders and milling cutter flutes.",
    typicalBond: "Resin Bond",
    primaryUses: ["Milling cutter perimeter sharpening", "Reamer relief angle grinding", "Endmill face grinding"],
    keyDimensions: ["Outer Diameter (D)", "Flaring Angle (K)", "Abrasive Rim (W)", "Abrasive Depth (X)", "Bore (H)"],
    svgType: "cup-flare"
  },
  {
    code: "12A2",
    name: "Dish Wheel",
    category: "cup",
    description: "Shallow dish profile designed for grinding between teeth on gear cutters, circular saws, and closely spaced tool flutes.",
    typicalBond: "Resin Bond",
    primaryUses: ["Circular saw carbide tip relief", "Gear hob sharpening", "Broach tooth grinding"],
    keyDimensions: ["Outer Diameter (D)", "Dish Angle (E)", "Rim Width (W)", "Depth (X)", "Bore (H)"],
    svgType: "dish"
  },
  {
    code: "11B2",
    name: "Angle Flare Cup Wheel",
    category: "cup",
    description: "Steep angle flare cup with angled backplate for extreme clearance during multi-axis tool resharpening.",
    typicalBond: "Resin & Metal Bond",
    primaryUses: ["Multi-axis CNC cutter grinding", "Specialty lathe tool relief", "Inserted tooth cutters"],
    keyDimensions: ["Outer Diameter (D)", "Body Angle (K)", "Rim Thickness (W)", "Rim Depth (X)"],
    svgType: "cup-angle-flare"
  },
  {
    code: "11C9",
    name: "L Flare Cup Wheel",
    category: "cup",
    description: "Flared cup with recessed L-stepped backing for enhanced coolant access and swarf discharge during heavy toolroom stock removal.",
    typicalBond: "Resin Bond",
    primaryUses: ["Heavy duty carbide tool grinding", "Staggered tooth side milling cutters"],
    keyDimensions: ["Diameter (D)", "Step Width (L)", "Flaring Angle", "Bore (H)"],
    svgType: "cup-l-flare"
  },
  {
    code: "11Y9",
    name: "Angle L Flare Cup Wheel",
    category: "cup",
    description: "Precision cup wheel combining L-flange clearance with specialized face angles for high-rake cutting tool geometries.",
    typicalBond: "Resin Bond",
    primaryUses: ["Deep flute clearance grinding", "High-rake carbide form tools"],
    keyDimensions: ["Diameter (D)", "Angle", "Rim Depth (X)", "Bore (H)"],
    svgType: "cup-angle-l"
  },
  {
    code: "6A9",
    name: "Corner Cup Wheel",
    category: "cup",
    description: "Cup wheel with an angular outer edge suited for simultaneous face and corner radius grinding.",
    typicalBond: "Metal & Resin Bond",
    primaryUses: ["Shoulder and face grinding", "Carbide insert corner radii"],
    keyDimensions: ["Diameter (D)", "Corner Angle", "Rim (W)", "Depth (X)"],
    svgType: "cup-corner"
  },
  {
    code: "11V9",
    name: "Angle Corner Cup (70° Flaring Cup)",
    category: "cup",
    description: "The premier standard wheel for CNC 5-axis tool and cutter grinders. Features a 70° flare angle providing optimal clearance.",
    typicalBond: "Phenolic / Polyimide Resin",
    primaryUses: ["CNC endmill and drill flute clearance", "Gundrill sharpening", "Tungsten carbide router bit grinding"],
    keyDimensions: ["Diameter (D=75, 100, 125, 150mm)", "Flare Angle (70°)", "Rim Thickness (W=2, 3, 5mm)", "Bore (H=20, 31.75mm)"],
    svgType: "cup-11v9"
  },
  {
    code: "6A2S",
    name: "Segmented Cup Wheel",
    category: "cup",
    description: "Cup wheel with segmented abrasive rim for aggressive stock removal with inter-segment water flushing channels.",
    typicalBond: "Metal Bond",
    primaryUses: ["Stone & granite face calibrating", "Refractory block squaring", "Heavy ceramic plate grinding"],
    keyDimensions: ["Diameter (D)", "Segment Width", "Segment Height", "Number of Segments"],
    svgType: "cup-segmented"
  },
  {
    code: "9A3",
    name: "Double Cup Wheel",
    category: "cup",
    description: "Double recessed cup wheel allowing grinding access on both opposing faces without dismounting the wheel.",
    typicalBond: "Resin & Metal Bond",
    primaryUses: ["Opposed face parallel grinding", "Specialized dual-spindle machinery"],
    keyDimensions: ["Diameter (D)", "Double Recess Depths", "Abrasive Width", "Bore (H)"],
    svgType: "cup-double"
  },
  {
    code: "1A1",
    name: "Straight Cylindrical Peripheral Wheel",
    category: "peripheral",
    description: "The universal straight peripheral grinding wheel for OD cylindrical, centerless, and flat surface grinding.",
    typicalBond: "Metal, Resin & Electroplated",
    primaryUses: ["Cylindrical OD grinding of carbide rods", "Surface grinding of hard alloys", "Glass straight line edging"],
    keyDimensions: ["Outer Diameter (D)", "Wheel Thickness (T)", "Abrasive Layer Depth (X)", "Bore (H)"],
    svgType: "straight-1a1"
  },
  {
    code: "3A1",
    name: "Straight Wheel with Raised Hub (One Side)",
    category: "peripheral",
    description: "Peripheral wheel with a reinforced one-side hub for rigid mounting and side clearance during step grinding.",
    typicalBond: "Metal & Resin",
    primaryUses: ["Step grinding on carbide punches", "Shoulder plunge grinding"],
    keyDimensions: ["Diameter (D)", "Thickness (T)", "Hub Diameter (J)", "Hub Extension (K)"],
    svgType: "straight-hub-single"
  },
  {
    code: "14A1",
    name: "Straight Wheel with Raised Hub (Both Sides)",
    category: "peripheral",
    description: "Double-sided raised hub offering symmetrical clamping rigidity for high-load slotting and cut-off tasks.",
    typicalBond: "Metal Bond",
    primaryUses: ["Deep slot grinding in hard steel", "Rigid OD plunge grinding"],
    keyDimensions: ["Diameter (D)", "Core Thickness", "Dual Hub Diameters", "Bore (H)"],
    svgType: "straight-hub-double"
  },
  {
    code: "1FF1",
    name: "Straight Wheel with Full Radius (R)",
    category: "peripheral",
    description: "Peripheral wheel featuring a precise semi-circular convex edge profile for grinding smooth concave radii.",
    typicalBond: "Metal & Resin",
    primaryUses: ["Glass pencil edging", "Bearing race groove grinding", "Turbine blade root fillets"],
    keyDimensions: ["Diameter (D)", "Radius (R)", "Thickness (T)", "Bore (H)"],
    svgType: "radius-1ff1"
  },
  {
    code: "1A1R",
    name: "Precision Cut-Off & Slitting Wheel",
    category: "peripheral",
    description: "Ultra-thin continuous or notched rim wheel for high-precision sectioning, glass cut-off, and wafer dicing.",
    typicalBond: "Metal & Resin",
    primaryUses: ["Thick architectural glass cutting", "Carbide rod cutoff", "Quartz tube sectioning"],
    keyDimensions: ["Diameter (D=100-350mm)", "Thickness (T=0.8-2.2mm)", "Depth (X)", "Bore (H)"],
    svgType: "cutoff-1a1r"
  },
  {
    code: "1EE1",
    name: "V-Face Double Angle Wheel",
    category: "peripheral",
    description: "Peripheral wheel with a symmetrical V-shaped cutting edge for grooving, beveling, and thread grinding.",
    typicalBond: "Resin & Metal",
    primaryUses: ["Double bevel glass edging", "V-grooving in ceramics", "Thread and rack form grinding"],
    keyDimensions: ["Diameter (D)", "Included Angle (V)", "Thickness (T)", "Bore (H)"],
    svgType: "vface-1ee1"
  },
  {
    code: "1V1",
    name: "Single Angle Straight Wheel",
    category: "peripheral",
    description: "Peripheral wheel with an asymmetrical single-side angular chamfer face.",
    typicalBond: "Metal & Resin",
    primaryUses: ["Chamfering glass sheet perimeters", "Angular slot grinding", "Dovetail cutter relief"],
    keyDimensions: ["Diameter (D)", "Bevel Angle (V)", "Thickness (T)", "Bore (H)"],
    svgType: "angle-1v1"
  },
  {
    code: "4B2",
    name: "One-Side V-Face Wheel",
    category: "peripheral",
    description: "Offset V-face wheel providing high clearance on one flank while shaping acute angles on the opposing flank.",
    typicalBond: "Resin Bond",
    primaryUses: ["Carbide saw blade tipping", "Acute angle tool resharpening"],
    keyDimensions: ["Diameter (D)", "Angle", "Thickness (T)", "Bore (H)"],
    svgType: "vface-4b2"
  },
  {
    code: "1E6Q",
    name: "Sandwich V-Face Wheel",
    category: "peripheral",
    description: "Laminated multi-layer sandwich design ensuring sharp V-profile retention without tip rounding during extended wear.",
    typicalBond: "Metal Bond",
    primaryUses: ["Automotive glass chamfering", "Precision micro-grooving"],
    keyDimensions: ["Diameter (D)", "Included Angle", "Sandwich Layer Thickness"],
    svgType: "sandwich-1e6q"
  },
  {
    code: "1FF6Y",
    name: "Multi-Groove Pencil-Edge Wheel",
    category: "special",
    description: "Industry-standard automotive and architectural glass edging wheel with calibrated pencil radius grooves (1FF6Y, 1EE6Y, 1LL6Y, 1DD6Y).",
    typicalBond: "Special Sintered Metal Alloy",
    primaryUses: ["Automotive side & rear glass edging", "Architectural balustrade profiling", "Mirror beveling"],
    keyDimensions: ["Diameter (D=150, 175, 200mm)", "Glass Thickness (3-25mm)", "Bore (H=22, 50mm)"],
    svgType: "pencil-1ff6y"
  },
  {
    code: "1A1 / 1A8",
    name: "Internal Grinding Pin",
    category: "internal",
    description: "Small diameter cylindrical diamond and CBN pins for precision bore finishing on internal grinding machines.",
    typicalBond: "Electroplated & Vitrified/Resin",
    primaryUses: ["Carbide die bore grinding", "Fuel injector nozzle finishing", "Miniature ball bearing raceways"],
    keyDimensions: ["Pin Diameter (d=0.5-25mm)", "Abrasive Length (L)", "Bore or Shank"],
    svgType: "internal-pin"
  },
  {
    code: "W",
    name: "Internal Pin with Integral Hardened Shaft",
    category: "internal",
    description: "Mounted point with integral hardened steel mandrel for high-rigidity jig grinding up to 100,000 RPM.",
    typicalBond: "Electroplated & CBN",
    primaryUses: ["High-speed jig grinding", "Die cavity internal profiling", "HSS punch finishing"],
    keyDimensions: ["Head Diameter (0.8-20mm)", "Shank Diameter (3mm, 6mm, 1/8\", 1/4\")", "Overall Length"],
    svgType: "shaft-mounted-w"
  },
  {
    code: "3A2",
    name: "Sintered Core Drill Bit",
    category: "special",
    description: "Thin-wall hollow diamond core bit with internal water passage for chip-free drilling in glass, quartz, and stone.",
    typicalBond: "Sintered Bronze/Cobalt Matrix",
    primaryUses: ["Glass door hinge drilling", "Automotive mirror mount holes", "Ceramic tile coring"],
    keyDimensions: ["Outer Diameter (4-150mm)", "Wall Thickness (0.8-1.2mm)", "Shank (Belgian / 1/2\" Gas)"],
    svgType: "core-drill-3a2"
  },
  {
    code: "HH1",
    name: "Diamond Hand Stone",
    category: "special",
    description: "Handheld rectangular diamond abrasive block for manual dressing, deburring, and stone edge softening.",
    typicalBond: "Electroplated & Sintered",
    primaryUses: ["Manual glass edge arris breaking", "Mold cavity touch-ups", "Tile edge dressing"],
    keyDimensions: ["Length (100-200mm)", "Width (25-50mm)", "Abrasive Thickness"],
    svgType: "hand-stone-hh1"
  },
  {
    code: "H",
    name: "Precision Honing Stone",
    category: "special",
    description: "Diamond and CBN honing sticks for hydraulic cylinder, engine bore, and compressor bore mirror finishing.",
    typicalBond: "Metal & Resin",
    primaryUses: ["Engine cylinder block honing", "Hydraulic valve spool honing", "Gear bore finishing"],
    keyDimensions: ["Length (50-150mm)", "Width (6-16mm)", "Height (6-16mm)", "Grit (#120 to #1200)"],
    svgType: "honing-stone-h"
  }
];
