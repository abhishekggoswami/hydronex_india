export interface IndustrialHoseProduct {
  slug: string
  name: string
  shortName: string
  tagline: string
  image: string
  standard: string
  description: string
  features: string[]
  specs: { label: string; value: string }[]
  applications: string[]
  quickStats?: { label: string; value: string }[]
  partTable?: Array<{
    partNo: string
    dn: number
    hoseIdMm: number
    hoseIdIn?: number
    hoseOdMm: number
    hoseOdIn?: number
    workingPressureBar?: number
    workingPressurePsi?: number
    minBendRadiusMm: number
    minBendRadiusIn?: number
    uom: string
  }>
  partTableType?: string
}

export const industrialHoses: IndustrialHoseProduct[] = [
  {
    slug: "rock-drill-hose-is-446-type-3-wire-braided",
    name: "ROCK DRILL HOSE (IS 446 TYPE -3) WIRE BRAIDED",
    shortName: "ROCK DRILL HOSE (IS 446 TYPE -3) WIRE BRAIDED",
    tagline: "High Pressure Pneumatic Rock Drill Hose",
    image: "/images/industrial-hoses/rock-drill-hose-is-446-type-3.png",
    standard: "IS 446 Type -3",
    description:
      "The Hydronex ROCK DRILL HOSE (IS 446 TYPE -3) WIRE BRAIDED is engineered for high-pressure pneumatic applications in rock drilling operations. Constructed with synthetic rubber tube and reinforced with two braid of high tensile steel wire, featuring oil resistance for extended durability. Suitable for demanding drilling applications with consistent 35 BAR working pressure across all sizes.",
    features: [
      "Tube: Synthetic rubber with oil resistance",
      "Reinforcement: Two braid of high tensile steel wire",
      "Cover: Oil, weather & abrasion resistant synthetic rubber",
      "Temperature Range (Medium): -40°C to +70°C",
      "Suitable for high pressure pneumatic application",
      "Oil resistant for extended equipment life",
    ],
    specs: [
      { label: "Tube", value: "Synthetic rubber with oil resistance" },
      { label: "Reinforcement", value: "Two braid of high tensile steel wire" },
      { label: "Cover", value: "Oil, weather & abrasion resistant synthetic rubber" },
      { label: "Temperature Range", value: "-40°C to +70°C" },
      { label: "Standard", value: "IS 446 Type -3" },
      { label: "Application", value: "High Pressure Pneumatic" },
    ],
    applications: ["Rock drilling", "Pneumatic rock breakers", "High-pressure pneumatic systems", "Mining equipment"],
    partTableType: "rockdrill",
    partTable: [
      { partNo: 'RDH-1/2"', dn: 12, hoseIdMm: 12.7, hoseIdIn: 0.5, hoseOdMm: 21.2, hoseOdIn: undefined, workingPressureBar: 35, workingPressurePsi: 500, minBendRadiusMm: 180, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'RDH-5/8"', dn: 16, hoseIdMm: 15.9, hoseIdIn: 0.62, hoseOdMm: 24.0, hoseOdIn: undefined, workingPressureBar: 35, workingPressurePsi: 500, minBendRadiusMm: 200, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'RDH-3/4"', dn: 19, hoseIdMm: 19, hoseIdIn: 0.75, hoseOdMm: 27.7, hoseOdIn: undefined, workingPressureBar: 35, workingPressurePsi: 500, minBendRadiusMm: 240, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'RDH-1"', dn: 25, hoseIdMm: 25.4, hoseIdIn: 1, hoseOdMm: 25.7, hoseOdIn: undefined, workingPressureBar: 35, workingPressurePsi: 500, minBendRadiusMm: 300, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'RDH-1.1/4"', dn: 31, hoseIdMm: 31.8, hoseIdIn: 1.25, hoseOdMm: 43.0, hoseOdIn: undefined, workingPressureBar: 35, workingPressurePsi: 500, minBendRadiusMm: 420, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'RDH-1.1/2"', dn: 38, hoseIdMm: 38.1, hoseIdIn: 1.5, hoseOdMm: 50.5, hoseOdIn: undefined, workingPressureBar: 35, workingPressurePsi: 500, minBendRadiusMm: 500, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'RDH-2"', dn: 51, hoseIdMm: 50.8, hoseIdIn: 2, hoseOdMm: 63.5, hoseOdIn: undefined, workingPressureBar: 35, workingPressurePsi: 500, minBendRadiusMm: 630, minBendRadiusIn: undefined, uom: "Meter" },
    ],
    quickStats: [
      { label: "Max. Working Pressure", value: "35 BAR" },
      { label: "Max. Working Pressure", value: "500 PSI" },
      { label: "Min. Burst Pressure", value: "138 BAR (2000 PSI)" },
      { label: "Temperature Range", value: "-40°C to +70°C" },
    ],
  },
  {
    slug: "sand-blast-hose-supreme",
    name: "SAND BLAST HOSE - SUPREME",
    shortName: "SAND BLAST HOSE - SUPREME",
    tagline: "Premium Sand & Shot Blasting Solution",
    image: "/images/industrial-hoses/sand-blast-hose-supreme.png",
    standard: "Industrial Sand Blast",
    description:
      "The Hydronex SAND BLAST HOSE - SUPREME is a premium-grade hose specifically designed for sand and shot blasting applications. Engineered with synthetic rubber tube and reinforced with one/two braid of high tensile steel wire with two copper flexi wires for superior conductivity and durability. Perfect for surface preparation, cleaning operations, and abrasive applications.",
    features: [
      "Tube: Synthetic rubber with extreme abrasion resistance",
      "Reinforcement: One / Two braid of high tensile steel wire with two copper flexi wire",
      "Cover: Weather & abrasion resistant synthetic rubber",
      "Temperature Range (Medium): -40°C to +70°C",
      "Superior conductivity with copper flexi wire",
      "Recommended for Sand & Shot Blasting Application",
    ],
    specs: [
      { label: "Tube", value: "Synthetic rubber with extreme abrasion resistance" },
      { label: "Reinforcement", value: "One / Two braid of high tensile steel wire with two copper flexi wire" },
      { label: "Cover", value: "Weather & abrasion resistant synthetic rubber" },
      { label: "Temperature Range", value: "-40°C to +70°C" },
      { label: "Application", value: "Sand & Shot Blasting" },
      { label: "Available Sizes", value: "3/4\", 1\", 1.1/4\", 1.1/2\"" },
    ],
    applications: ["Sand blasting", "Shot blasting", "Surface preparation", "Metal cleaning", "Industrial abrasive applications"],
    partTableType: "sandblast",
    partTable: [
      { partNo: 'SB-3/4"', dn: 19, hoseIdMm: 19, hoseIdIn: undefined, hoseOdMm: 33.2, hoseOdIn: undefined, workingPressureBar: 12, workingPressurePsi: 175, minBendRadiusMm: 178, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'SB-1"', dn: 25, hoseIdMm: 25.4, hoseIdIn: 1, hoseOdMm: 39.2, hoseOdIn: undefined, workingPressureBar: 12, workingPressurePsi: 175, minBendRadiusMm: 229, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'SB-1.1/4"', dn: 31, hoseIdMm: 31.8, hoseIdIn: 1.25, hoseOdMm: 48.2, hoseOdIn: undefined, workingPressureBar: 12, workingPressurePsi: 175, minBendRadiusMm: 254, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'SB-1.1/2"', dn: 38, hoseIdMm: 38.1, hoseIdIn: 1.5, hoseOdMm: 56.2, hoseOdIn: undefined, workingPressureBar: 12, workingPressurePsi: 175, minBendRadiusMm: 304, minBendRadiusIn: undefined, uom: "Meter" },
    ],
    quickStats: [
      { label: "Application", value: "Sand & Shot Blasting" },
      { label: "Max. Working Pressure", value: "12 BAR" },
      { label: "Min. Burst Pressure", value: "48 BAR (700 PSI)" },
      { label: "Temperature Range", value: "-40°C to +70°C" },
    ],
  },
  {
    slug: "carbon-free-hose-furnace-coolant",
    name: "CARBON FREE HOSE FURNACE COOLENT APPLICATION",
    shortName: "CARBON FREE HOSE FURNACE COOLENT APPLICATION",
    tagline: "Furnace Coolant Hose - Carbon Free",
    image: "/images/industrial-hoses/carbon-free-hose-furnace-coolant.png",
    standard: "Industrial Furnace Application",
    description:
      "The Hydronex CARBON FREE HOSE is specially designed for furnace coolant applications in high-temperature industrial environments. Constructed with synthetic rubber tube in cream colour and reinforced with one yarn braid, featuring green color abrasion & weather resistant synthetic rubber cover. Ideal for steel mills, foundries, and high-temperature operations where maintaining coolant purity is critical.",
    features: [
      "Tube: Synthetic rubber, Cream Colour",
      "Reinforcement: One Yarn Braided construction",
      "Cover: Green colour abrasion & weather resistant synthetic rubber",
      "Temperature Range (Medium): -40°C to +80°C",
      "Suitable for furnace coolant applications",
      "Prevents carbon buildup and residue",
    ],
    specs: [
      { label: "Tube", value: "Synthetic rubber, Cream Colour" },
      { label: "Reinforcement", value: "One Yarn Braided construction" },
      { label: "Cover", value: "Green colour abrasion & weather resistant synthetic rubber" },
      { label: "Temperature Range", value: "-40°C to +80°C" },
      { label: "Application", value: "Furnace Coolant" },
      { label: "Standard", value: "Industrial Furnace Application" },
    ],
    applications: ["Furnace cooling systems", "Steel mills", "Foundries", "Heat treatment facilities"],
    partTableType: "carbonfree",
    partTable: [
      { partNo: 'CF-1/2"', dn: 12, hoseIdMm: 12.7, hoseIdIn: 0.5, hoseOdMm: 21.5, hoseOdIn: undefined, workingPressureBar: 17.2, workingPressurePsi: 250, minBendRadiusMm: 100, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'CF-5/8"', dn: 16, hoseIdMm: 15.9, hoseIdIn: 0.625, hoseOdMm: 26.0, hoseOdIn: undefined, workingPressureBar: 17.2, workingPressurePsi: 250, minBendRadiusMm: 125, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'CF-3/4', dn: 19, hoseIdMm: 19, hoseIdIn: 0.75, hoseOdMm: 30.5, hoseOdIn: undefined, workingPressureBar: 17.2, workingPressurePsi: 250, minBendRadiusMm: 150, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'CF-1"', dn: 25, hoseIdMm: 25.4, hoseIdIn: 1, hoseOdMm: 37.5, hoseOdIn: undefined, workingPressureBar: 17.2, workingPressurePsi: 250, minBendRadiusMm: 177, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'CF-1.1/4"', dn: 31, hoseIdMm: 31.8, hoseIdIn: 1.25, hoseOdMm: 45.2, hoseOdIn: undefined, workingPressureBar: 17.2, workingPressurePsi: 250, minBendRadiusMm: 225, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'CF-1.1/2"', dn: 38, hoseIdMm: 38.1, hoseIdIn: 1.5, hoseOdMm: 53.5, hoseOdIn: undefined, workingPressureBar: 17.2, workingPressurePsi: 250, minBendRadiusMm: 300, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'CF-2"', dn: 51, hoseIdMm: 50.8, hoseIdIn: 2, hoseOdMm: 66.0, hoseOdIn: undefined, workingPressureBar: 13.8, workingPressurePsi: 200, minBendRadiusMm: 400, minBendRadiusIn: undefined, uom: "Meter" },
    ],
    quickStats: [
      { label: "Max. Working Pressure", value: "17.2 BAR (250 PSI) for most sizes" },
      { label: "Max. Working Pressure", value: "13.8 BAR (200 PSI) for 2\" size" },
      { label: "Min. Burst Pressure", value: "69 BAR (1000 PSI) / 55.2 BAR (800 PSI)" },
      { label: "Temperature Range", value: "-40°C to +80°C" },
    ],
  },
  {
    slug: "airwater-hose-is-446-type-1",
    name: "AirWater Hose IS 446 – Type -1",
    shortName: "AirWater Hose IS 446 – Type -1",
    tagline: "Pneumatic & Water Application Hose",
    image: "/images/industrial-hoses/airwater-hose-is-446-type-1.png",
    standard: "IS 446 Type -1",
    description:
      "The Hydronex AirWater Hose IS 446 – Type -1 is designed for versatile pneumatic and water applications in industrial settings. Built with synthetic rubber tube resistant to hydraulic fluids and reinforced with one yarn braid for durability. Suitable for different pneumatic and water applications with variable pressure ratings (14 BAR for smaller sizes, 12 BAR for larger sizes).",
    features: [
      "Tube: Synthetic rubber, resistant to hydraulic fluids",
      "Reinforcement: One Yarn Braided construction",
      "Cover: Oil, weather & abrasion resistant synthetic rubber",
      "Temperature Range (Medium): -40°C to +70°C",
      "Suitable for pneumatic and water applications",
      "Available in 10 sizes from 1/4\" to 2\"",
    ],
    specs: [
      { label: "Tube", value: "Synthetic rubber, resistant to hydraulic fluids" },
      { label: "Reinforcement", value: "One Yarn Braided construction" },
      { label: "Cover", value: "Oil, weather & abrasion resistant synthetic rubber" },
      { label: "Temperature Range", value: "-40°C to +70°C" },
      { label: "Standard", value: "IS 446 Type -1" },
      { label: "Application", value: "Pneumatic & Water" },
    ],
    applications: ["Pneumatic tools", "Water transfer applications", "Industrial workshops", "General pneumatic systems"],
    partTableType: "airwater",
    partTable: [
      { partNo: 'AW-1/4"', dn: 6, hoseIdMm: 6.4, hoseIdIn: 0.25, hoseOdMm: 12.8, hoseOdIn: undefined, workingPressureBar: 14, workingPressurePsi: 200, minBendRadiusMm: 65, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'AW-5/16"', dn: 8, hoseIdMm: 7.9, hoseIdIn: 0.31, hoseOdMm: 14.4, hoseOdIn: undefined, workingPressureBar: 14, workingPressurePsi: 200, minBendRadiusMm: 75, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'AW-3/8"', dn: 10, hoseIdMm: 9.5, hoseIdIn: 0.375, hoseOdMm: 16.1, hoseOdIn: undefined, workingPressureBar: 14, workingPressurePsi: 200, minBendRadiusMm: 75, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'AW-1/2"', dn: 12, hoseIdMm: 12.7, hoseIdIn: 0.5, hoseOdMm: 19.6, hoseOdIn: undefined, workingPressureBar: 14, workingPressurePsi: 200, minBendRadiusMm: 100, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'AW-5/8"', dn: 16, hoseIdMm: 15.9, hoseIdIn: 0.625, hoseOdMm: 23.1, hoseOdIn: undefined, workingPressureBar: 14, workingPressurePsi: 200, minBendRadiusMm: 125, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'AW-3/4', dn: 19, hoseIdMm: 19, hoseIdIn: 0.75, hoseOdMm: 26.6, hoseOdIn: undefined, workingPressureBar: 14, workingPressurePsi: 200, minBendRadiusMm: 150, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'AW-1"', dn: 25, hoseIdMm: 25.4, hoseIdIn: 1, hoseOdMm: 33.5, hoseOdIn: undefined, workingPressureBar: 14, workingPressurePsi: 200, minBendRadiusMm: 177, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'AW-1.1/4"', dn: 31, hoseIdMm: 31.8, hoseIdIn: 1.25, hoseOdMm: 43.5, hoseOdIn: undefined, workingPressureBar: 12, workingPressurePsi: 175, minBendRadiusMm: 225, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'AW-1.1/2"', dn: 38, hoseIdMm: 38.1, hoseIdIn: 1.5, hoseOdMm: 50.0, hoseOdIn: undefined, workingPressureBar: 12, workingPressurePsi: 175, minBendRadiusMm: 300, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'AW-2"', dn: 51, hoseIdMm: 50.8, hoseIdIn: 2, hoseOdMm: 65.0, hoseOdIn: undefined, workingPressureBar: 12, workingPressurePsi: 175, minBendRadiusMm: 400, minBendRadiusIn: undefined, uom: "Meter" },
    ],
    quickStats: [
      { label: "Max. Working Pressure", value: "14 BAR (smaller sizes)" },
      { label: "Max. Working Pressure", value: "12 BAR (larger sizes)" },
      { label: "Min. Burst Pressure", value: "55.2 / 48.3 BAR (800 / 700 PSI)" },
      { label: "Temperature Range", value: "-40°C to +70°C" },
    ],
  },
  {
    slug: "pneumatic-tool-hose-is-446-type-2",
    name: "PNEUMATIC TOOL HOSE IS 446 – Type - 2",
    shortName: "PNEUMATIC TOOL HOSE IS 446 – Type - 2",
    tagline: "Pneumatic & Water Application Hose",
    image: "/images/industrial-hoses/pneumatic-tool-hose-is-446-type-2.png",
    standard: "IS 446 Type -2",
    description:
      "The Hydronex PNEUMATIC TOOL HOSE IS 446 – Type - 2 is designed for versatile pneumatic and water applications in industrial settings. Built with synthetic rubber tube resistant to hydraulic fluids and reinforced with one yarn braid for durability. Suitable for different pneumatic and water applications with consistent 14 BAR working pressure across all sizes.",
    features: [
      "Tube: Synthetic rubber, resistant to hydraulic fluids",
      "Reinforcement: One Yarn Braided construction",
      "Cover: Oil, weather & abrasion resistant synthetic rubber",
      "Temperature Range (Medium): -40°C to +70°C",
      "Suitable for pneumatic and water applications",
      "Available in 10 sizes from 1/4\" to 2\"",
    ],
    specs: [
      { label: "Tube", value: "Synthetic rubber, resistant to hydraulic fluids" },
      { label: "Reinforcement", value: "One Yarn Braided construction" },
      { label: "Cover", value: "Oil, weather & abrasion resistant synthetic rubber" },
      { label: "Temperature Range", value: "-40°C to +70°C" },
      { label: "Standard", value: "IS 446 Type -2" },
      { label: "Application", value: "Pneumatic & Water" },
    ],
    applications: ["Pneumatic tools", "Water transfer applications", "Industrial workshops", "General pneumatic systems"],
    partTableType: "pneumatic",
    partTable: [
      { partNo: 'PT-1/4"', dn: 6, hoseIdMm: 6.4, hoseIdIn: 0.25, hoseOdMm: 12.8, hoseOdIn: undefined, workingPressureBar: 14, workingPressurePsi: 200, minBendRadiusMm: 65, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'PT-5/16"', dn: 8, hoseIdMm: 7.9, hoseIdIn: 0.31, hoseOdMm: 14.4, hoseOdIn: undefined, workingPressureBar: 14, workingPressurePsi: 200, minBendRadiusMm: 75, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'PT-3/8"', dn: 10, hoseIdMm: 9.5, hoseIdIn: 0.375, hoseOdMm: 16.1, hoseOdIn: undefined, workingPressureBar: 14, workingPressurePsi: 200, minBendRadiusMm: 75, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'PT-1/2"', dn: 12, hoseIdMm: 12.7, hoseIdIn: 0.5, hoseOdMm: 19.6, hoseOdIn: undefined, workingPressureBar: 14, workingPressurePsi: 200, minBendRadiusMm: 100, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'PT-5/8"', dn: 16, hoseIdMm: 15.9, hoseIdIn: 0.625, hoseOdMm: 23.1, hoseOdIn: undefined, workingPressureBar: 14, workingPressurePsi: 200, minBendRadiusMm: 125, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'PT 3/4', dn: 19, hoseIdMm: 19, hoseIdIn: 0.75, hoseOdMm: 26.6, hoseOdIn: undefined, workingPressureBar: 14, workingPressurePsi: 200, minBendRadiusMm: 150, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'PT-1"', dn: 25, hoseIdMm: 25.4, hoseIdIn: 1, hoseOdMm: 33.5, hoseOdIn: undefined, workingPressureBar: 14, workingPressurePsi: 200, minBendRadiusMm: 177, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'PT-1.1/4"', dn: 31, hoseIdMm: 31.8, hoseIdIn: 1.25, hoseOdMm: 43.5, hoseOdIn: undefined, workingPressureBar: 14, workingPressurePsi: 200, minBendRadiusMm: 225, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'PT-1.1/2"', dn: 38, hoseIdMm: 38.1, hoseIdIn: 1.5, hoseOdMm: 50.0, hoseOdIn: undefined, workingPressureBar: 14, workingPressurePsi: 200, minBendRadiusMm: 300, minBendRadiusIn: undefined, uom: "Meter" },
      { partNo: 'PT-2"', dn: 51, hoseIdMm: 50.8, hoseIdIn: 2, hoseOdMm: 65.0, hoseOdIn: undefined, workingPressureBar: 14, workingPressurePsi: 200, minBendRadiusMm: 400, minBendRadiusIn: undefined, uom: "Meter" },
    ],
    quickStats: [
      { label: "Max. Working Pressure", value: "14 BAR" },
      { label: "Max. Working Pressure", value: "200 PSI" },
      { label: "Min. Burst Pressure", value: "55.2 BAR (800 PSI)" },
      { label: "Temperature Range", value: "-40°C to +70°C" },
    ],
  },
]

export function getIndustrialHoseBySlug(slug: string): IndustrialHoseProduct | undefined {
  return industrialHoses.find((h) => h.slug === slug)
}
