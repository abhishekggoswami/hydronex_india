export interface STCouplerRow {
  partNoBrass: string
  partNoStainless: string
  threadNPT: string
  overallLengthIn: number | string
  wrenchFlatIn: number | string
  largestDiaIn: number | string
}

export interface STNippleRow {
  partNoBrass: string
  partNoStainless: string
  partNoSteel: string
  threadNPT: string
  dOverallIn: number | string
  eOverallIn: number | string
  fHexIn: number | string
  gLargestDiaIn: number | string
}

export interface STPerformanceRow {
  sizeMm: string
  sizeInch: string
  flowRate: string
  pressureBrass: string
  pressureSteel: string
  pressureStainless: string
}

export interface STDetailRow {
  bodySize: string
  pressureBrass: string
  pressureSteel: string
  pressureOther: string
  flowRateL: string | number
  tempRange: string
}

export interface StraightThroughCoupling {
  id: number
  code: string
  name: string
  slug: string
  image: string
  description: string
  material: string
  surfaceTreat: string
  application: string
  features: string[]
  specs: Array<{ label: string; value: string }>
  techSpecs: string[]
  applications: string[]

  // Coupler Female Thread
  couplerFemaleDiagram: string
  couplerFemaleTable: STCouplerRow[]

  // Coupler Male Thread
  couplerMaleDiagram: string
  couplerMaleTable: STCouplerRow[]

  // Nipple Female Thread
  nippleFemaleDiagram: string
  nippleFemaleTable: STNippleRow[]

  // Nipple Male Thread
  nippleMaleDiagram: string
  nippleMaleTable: STNippleRow[]

  // Performance table
  performanceTable: STPerformanceRow[]

  // Detail spec table
  detailTable: STDetailRow[]
}

export const straightThroughCouplings: StraightThroughCoupling[] = [
  {
    id: 1,
    code: "ST-001",
    name: "STRAIGHT THROUGH COUPLINGS / INDUSTRIAL INTERCHANGE",
    slug: "straight-through-couplings",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Straight%20Through%20Couplings-WFB3XCi8UlwnhTMIKmrxbJYnbUuRnG.png",
    description:
      "Industrial interchange straight-through quick couplings designed for uninterrupted hydraulic flow paths. Available in Brass, Steel, and Stainless Steel, these couplings conform to ISO 7241-2 and are built for reliable performance across a wide range of industrial applications.",
    material: "Brass / Steel / Stainless Steel",
    surfaceTreat: "Natural / Zinc Plated / Passivated",
    application: "Industrial machinery, fluid transfer systems, US market interchange applications",
    features: [
      "Connexion by pulling back the sleeve",
      "Disconnection by pulling back the female sleeve",
      "Connexion under pressure is not allowed",
      "Disconnection under pressure not allowed",
      "Interchangeability Us Market",
    ],
    techSpecs: [
      "Brass",
      "NBR",
      "Backup ring in PTFE",
      "-25°C to +125°C (-13°F to +257°F)",
      "According to ISO 7241-2",
    ],
    specs: [
      { label: "Standard", value: "ISO 7241-2" },
      { label: "Material", value: "Brass / Steel / SS" },
      { label: "Seal Material", value: "NBR" },
      { label: "Temperature Range", value: "-25°C to +125°C" },
    ],
    applications: [
      "Industrial fluid transfer systems",
      "US market interchange applications",
      "Manufacturing equipment",
      "General industrial hydraulics",
    ],

    couplerFemaleDiagram:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8xZqpUYuKJV10A93wyn3EOT11XixoZ.png",
    couplerFemaleTable: [
      { partNoBrass: "ST1SF", partNoStainless: "ST1SF-304", threadNPT: '1/8"', overallLengthIn: 1.06, wrenchFlatIn: 0.56, largestDiaIn: 0.69 },
      { partNoBrass: "ST2SF", partNoStainless: "ST2SF-304", threadNPT: '1/4"', overallLengthIn: 1.54, wrenchFlatIn: 0.81, largestDiaIn: 0.94 },
      { partNoBrass: "ST3SF", partNoStainless: "ST3SF-304", threadNPT: '3/8"', overallLengthIn: 1.59, wrenchFlatIn: 1,    largestDiaIn: 1.16 },
      { partNoBrass: "ST4SF", partNoStainless: "ST4SF-304", threadNPT: '1/2"', overallLengthIn: 1.98, wrenchFlatIn: 1.13, largestDiaIn: 1.3  },
      { partNoBrass: "ST6SF", partNoStainless: "ST6SF-304", threadNPT: '3/4"', overallLengthIn: 2.15, wrenchFlatIn: 1.44, largestDiaIn: 1.66 },
      { partNoBrass: "ST8SF", partNoStainless: "ST8SF-304", threadNPT: '1"',   overallLengthIn: 2.43, wrenchFlatIn: 1.75, largestDiaIn: 2.02 },
      { partNoBrass: "ST10SF", partNoStainless: "",          threadNPT: '1-1/4"', overallLengthIn: 2.44, wrenchFlatIn: 2,  largestDiaIn: 2.51 },
      { partNoBrass: "ST12SF", partNoStainless: "",          threadNPT: '1-1/2"', overallLengthIn: 2.88, wrenchFlatIn: 2.5, largestDiaIn: 3 },
    ],

    couplerMaleDiagram:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-F6Ultya6E6ZlQLfKMV6LVs8LWYl7d1.png",
    couplerMaleTable: [
      { partNoBrass: "ST1SM", partNoStainless: "ST1SM-304", threadNPT: '1/8"', overallLengthIn: 1.06, wrenchFlatIn: 0.56, largestDiaIn: 0.69 },
      { partNoBrass: "ST2SM", partNoStainless: "ST2SM-304", threadNPT: '1/4"', overallLengthIn: 1.69, wrenchFlatIn: 0.81, largestDiaIn: 0.81 },
      { partNoBrass: "ST3SM", partNoStainless: "ST3SM-304", threadNPT: '3/8"', overallLengthIn: 1.75, wrenchFlatIn: 1,    largestDiaIn: 1.16 },
      { partNoBrass: "ST4SM", partNoStainless: "ST4SM-304", threadNPT: '1/2"', overallLengthIn: 1.94, wrenchFlatIn: 1.13, largestDiaIn: 1.3  },
      { partNoBrass: "ST6SM", partNoStainless: "",           threadNPT: '3/4"', overallLengthIn: 2.17, wrenchFlatIn: 1.44, largestDiaIn: 1.66 },
      { partNoBrass: "ST8SM", partNoStainless: "",           threadNPT: '1"',   overallLengthIn: 2.53, wrenchFlatIn: 1.75, largestDiaIn: 2.02 },
    ],

    nippleFemaleDiagram:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9TdlEkjDxbCeJm1AaDRs8YdYNrG7u2.png",
    nippleFemaleTable: [
      { partNoBrass: "ST1PF", partNoStainless: "ST1PF-304", partNoSteel: "ST1PF-S",  threadNPT: '1/8"',   dOverallIn: 0.98, eOverallIn: 0.57, fHexIn: 0.56, gLargestDiaIn: 0.65 },
      { partNoBrass: "ST2PF", partNoStainless: "ST2PF-304", partNoSteel: "ST2PF-S",  threadNPT: '1/4"',   dOverallIn: 1.46, eOverallIn: 0.74, fHexIn: 0.5,  gLargestDiaIn: 0.87 },
      { partNoBrass: "ST3PF", partNoStainless: "ST3PF-304", partNoSteel: "ST3PF-S",  threadNPT: '3/8"',   dOverallIn: 1.62, eOverallIn: 0.96, fHexIn: 1.38, gLargestDiaIn: 1.59 },
      { partNoBrass: "ST4PF", partNoStainless: "ST4PF-304", partNoSteel: "ST4PF-S",  threadNPT: '1/2"',   dOverallIn: 1.85, eOverallIn: 0.95, fHexIn: 1.13, gLargestDiaIn: 1.3  },
      { partNoBrass: "ST6PF", partNoStainless: "",           partNoSteel: "ST6PF-S",  threadNPT: '3/4"',   dOverallIn: 2.15, eOverallIn: 1.09, fHexIn: 1.38, gLargestDiaIn: 1.59 },
      { partNoBrass: "ST8PF", partNoStainless: "",           partNoSteel: "ST8PF-S",  threadNPT: '1"',     dOverallIn: 2.35, eOverallIn: 1.18, fHexIn: 1.63, gLargestDiaIn: 1.88 },
      { partNoBrass: "ST10PF", partNoStainless: "",          partNoSteel: "ST10PF-S", threadNPT: '1.1/4"', dOverallIn: 2.38, eOverallIn: 1.11, fHexIn: 2,    gLargestDiaIn: 2.31 },
      { partNoBrass: "ST12PF", partNoStainless: "",          partNoSteel: "ST12PF-S", threadNPT: '1.1/2"', dOverallIn: 2.81, eOverallIn: 1.17, fHexIn: 2.38, gLargestDiaIn: 2.74 },
    ],

    nippleMaleDiagram:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CsCRtlaopXp7GVkwkKbzrVCCVjOBhe.png",
    nippleMaleTable: [
      { partNoBrass: "ST1PM", partNoStainless: "ST1PM-304", partNoSteel: "ST1PM-S",  threadNPT: '1/8"', dOverallIn: 1.04, eOverallIn: 0.63, fHexIn: 0.44, gLargestDiaIn: 0.59 },
      { partNoBrass: "ST2PM", partNoStainless: "ST2PM-304", partNoSteel: "ST2PM-S",  threadNPT: '1/4"', dOverallIn: 1.53, eOverallIn: 0.81, fHexIn: 0.56, gLargestDiaIn: 0.65 },
      { partNoBrass: "ST3PM", partNoStainless: "ST3PM-304", partNoSteel: "ST3PM-S",  threadNPT: '3/8"', dOverallIn: 1.69, eOverallIn: 0.86, fHexIn: 0.69, gLargestDiaIn: 0.79 },
      { partNoBrass: "ST4PM", partNoStainless: "ST4PM-304", partNoSteel: "ST4PM-S",  threadNPT: '1/2"', dOverallIn: 1.94, eOverallIn: 1.01, fHexIn: 0.88, gLargestDiaIn: 1.01 },
      { partNoBrass: "ST6PM", partNoStainless: "",           partNoSteel: "ST6PM-S",  threadNPT: '3/4"', dOverallIn: 2.19, eOverallIn: 1.11, fHexIn: 1.06, gLargestDiaIn: 1.23 },
      { partNoBrass: "ST8PM", partNoStainless: "",           partNoSteel: "ST8PM-S",  threadNPT: '1"',   dOverallIn: 2.51, eOverallIn: 1.34, fHexIn: 1.38, gLargestDiaIn: 1.59 },
    ],

    performanceTable: [
      { sizeMm: "3",    sizeInch: '1/8"',    flowRate: "3 (0.81)",    pressureBrass: "17 (2500)",  pressureSteel: "18 (2600)",  pressureStainless: "29 (4200)"  },
      { sizeMm: "6.3",  sizeInch: '1/4"',    flowRate: "6 (0.62)",    pressureBrass: "35 (5200)",  pressureSteel: "38 (5500)",  pressureStainless: "46 (6700)"  },
      { sizeMm: "10",   sizeInch: '3/8"',    flowRate: "12 (3.24)",   pressureBrass: "18 (2700)",  pressureSteel: "25 (3500)",  pressureStainless: "38 (5500)"  },
      { sizeMm: "12.5", sizeInch: '1/2"',    flowRate: "12 (3.24)",   pressureBrass: "15 (2200)",  pressureSteel: "19 (2700)",  pressureStainless: "21 (3000)"  },
      { sizeMm: "20",   sizeInch: '3/4"',    flowRate: "28 (7.56)",   pressureBrass: "11.7 (1700)", pressureSteel: "19 (2700)", pressureStainless: "21 (3000)"  },
      { sizeMm: "25",   sizeInch: '1"',      flowRate: "50 (13.5)",   pressureBrass: "8.3 (1200)", pressureSteel: "14 (2000)",  pressureStainless: "11.7 (1700)"},
      { sizeMm: "31.5", sizeInch: '1 1/4"',  flowRate: "76 (20.52)",  pressureBrass: "11.7 (1700)", pressureSteel: "–",         pressureStainless: "–"          },
      { sizeMm: "40",   sizeInch: '1 1/2"',  flowRate: "100 (27)",    pressureBrass: "9.6 (1400)", pressureSteel: "–",          pressureStainless: "–"          },
    ],

    detailTable: [
      { bodySize: '1/8"',   pressureBrass: "2500", pressureSteel: "2600", pressureOther: "4200", flowRateL: 3,   tempRange: "-20 to +125" },
      { bodySize: '1/4"',   pressureBrass: "5200", pressureSteel: "5500", pressureOther: "6700", flowRateL: 6,   tempRange: "-20 to +125" },
      { bodySize: '3/8"',   pressureBrass: "2700", pressureSteel: "3500", pressureOther: "5500", flowRateL: 12,  tempRange: "-20 to +125" },
      { bodySize: '1/2"',   pressureBrass: "2200", pressureSteel: "2700", pressureOther: "3000", flowRateL: 12,  tempRange: "-20 to +125" },
      { bodySize: '3/4"',   pressureBrass: "1700", pressureSteel: "2700", pressureOther: "1700", flowRateL: 28,  tempRange: "-20 to +125" },
      { bodySize: '1"',     pressureBrass: "1200", pressureSteel: "2000", pressureOther: "–",    flowRateL: 50,  tempRange: "-20 to +125" },
      { bodySize: '1-1/4"', pressureBrass: "1700", pressureSteel: "–",    pressureOther: "–",    flowRateL: 76,  tempRange: "-20 to +125" },
      { bodySize: '1-1/2"', pressureBrass: "1400", pressureSteel: "–",    pressureOther: "–",    flowRateL: 100, tempRange: "-20 to +125" },
    ],
  },
]
