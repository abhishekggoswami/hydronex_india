export interface SpiralHoseProduct {
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

export const spiralHoses: SpiralHoseProduct[] = [
  {
    slug: "en-856-4sp",
    name: "MEET EXCEED EN 856 4SP",
    shortName: "MEET EXCEED EN 856 4SP",
    tagline: "Four Braid Spiral Hydraulic Hose",
    image: "/images/spiral-hoses/meet-exceed-en-856-4sp.png",
    standard: "EN 886 4SP",
    description:
      "The Hydronex MEET EXCEED EN 856 4SP is a premium four braid spiral hydraulic hose engineered for demanding high-pressure applications. Featuring a synthetic rubber tube resistant to hydraulic fluids, reinforced with four braids of high tensile steel wire, and protected by an oil, weather, and abrasion resistant synthetic rubber cover with MSHA approval. Available in five sizes with working pressures up to 445 BAR.",
    features: [
      "Tube: Synthetic rubber, resistant to hydraulic fluids",
      "Reinforcement: Four braid of high tensile steel wire",
      "Cover: Oil, weather & abrasion resistant synthetic rubber - MSHA Approved",
      "Temperature Range (Medium): -40°C to +100°C",
      "Available in sizes from 3/8\" to 1\"",
      "Working pressure range: 280-445 BAR",
    ],
    specs: [
      { label: "Tube", value: "Synthetic rubber, resistant to hydraulic fluids" },
      { label: "Reinforcement", value: "Four braid of high tensile steel wire" },
      { label: "Cover", value: "Oil, weather & abrasion resistant synthetic rubber - MSHA Approved" },
      { label: "Temperature Range", value: "-40°C to +100°C" },
      { label: "Standard", value: "EN 856 4SP" },
      { label: "Available Sizes", value: "3/8\", 1/2\", 5/8\", 3/4\", 1\"" },
      { label: "Working Pressure", value: "280-445 BAR (4,050-6,450 PSI)" },
    ],
    applications: ["Heavy construction equipment", "Mining machinery", "Agricultural hydraulics", "Industrial systems"],
    partTableType: "r1",
    partTable: [
      { partNo: '4SP-3/8"', dn: 10, hoseIdMm: 9.5, hoseIdIn: 0.38, hoseOdMm: 22.2, hoseOdIn: 0.87, workingPressureBar: 445, workingPressurePsi: 6450, minBendRadiusMm: 180, minBendRadiusIn: 7.09, uom: "Meter" },
      { partNo: '4SP-1/2"', dn: 12, hoseIdMm: 12.7, hoseIdIn: 0.5, hoseOdMm: 25.4, hoseOdIn: 1, workingPressureBar: 415, workingPressurePsi: 6000, minBendRadiusMm: 230, minBendRadiusIn: 9.06, uom: "Meter" },
      { partNo: '4SP-5/8"', dn: 16, hoseIdMm: 15.9, hoseIdIn: 0.62, hoseOdMm: 29, hoseOdIn: 1.14, workingPressureBar: 350, workingPressurePsi: 5100, minBendRadiusMm: 250, minBendRadiusIn: 9.84, uom: "Meter" },
      { partNo: '4SP-3/4"', dn: 19, hoseIdMm: 19, hoseIdIn: 0.75, hoseOdMm: 33, hoseOdIn: 1.3, workingPressureBar: 350, workingPressurePsi: 5100, minBendRadiusMm: 300, minBendRadiusIn: 11.81, uom: "Meter" },
      { partNo: '4SP-1"', dn: 25, hoseIdMm: 25.4, hoseIdIn: 1, hoseOdMm: 40.9, hoseOdIn: 1.61, workingPressureBar: 280, workingPressurePsi: 4050, minBendRadiusMm: 1120, minBendRadiusIn: 44, uom: "Meter" },
    ],
    quickStats: [
      { label: "Max. Working Pressure", value: "445 BAR" },
      { label: "Max. Working Pressure", value: "6,450 PSI" },
      { label: "Temperature Range", value: "-40°C to +100°C" },
      { label: "Bend Radius", value: "180-1120 mm depending on size" },
    ],
  },
  {
    slug: "en-856-4sh",
    name: "MEET EXCEED EN 856 4SH",
    shortName: "MEET EXCEED EN 856 4SH",
    tagline: "Four Braid Spiral Heavy Duty Hydraulic Hose",
    image: "/images/spiral-hoses/meet-exceed-en-856-4sh.png",
    standard: "EN 856 4SH",
    description:
      "The Hydronex MEET EXCEED EN 856 4SH is a premium four braid spiral heavy-duty hydraulic hose engineered for extreme high-pressure applications. Featuring a synthetic rubber tube resistant to hydraulic fluids, reinforced with four braids of high tensile steel wire, and protected by an oil, weather, and abrasion resistant synthetic rubber cover with MSHA approval. Available in five sizes with working pressures ranging from 250 to 420 BAR.",
    features: [
      "Tube: Synthetic rubber, resistant to hydraulic fluids",
      "Reinforcement: Four braid of high tensile steel wire",
      "Cover: Oil, weather & abrasion resistant synthetic rubber - MSHA Approved",
      "Temperature Range (Medium): -40°C to +100°C",
      "Available in sizes from 1/4\" to 1\"",
      "Working pressure range: 250-420 BAR",
    ],
    specs: [
      { label: "Tube", value: "Synthetic rubber, resistant to hydraulic fluids" },
      { label: "Reinforcement", value: "Four braid of high tensile steel wire" },
      { label: "Cover", value: "Oil, weather & abrasion resistant synthetic rubber - MSHA Approved" },
      { label: "Temperature Range", value: "-40°C to +100°C" },
      { label: "Standard", value: "EN 886 4SH" },
      { label: "Available Sizes", value: "1/4\", 1\", 6.6/4\", 6.6/T\", 1\"" },
      { label: "Working Pressure", value: "250-420 BAR (3,650-6,100 PSI)" },
    ],
    applications: ["Extreme pressure applications", "Heavy machinery", "Industrial hydraulic systems", "Demanding construction equipment"],
    partTableType: "r1",
    partTable: [
      { partNo: '4SH-1/4"', dn: 19, hoseIdMm: 19, hoseIdIn: 0.75, hoseOdMm: 33, hoseOdIn: 1.3, workingPressureBar: 420, workingPressurePsi: 6100, minBendRadiusMm: 280, minBendRadiusIn: 11.02, uom: "Meter" },
      { partNo: '4SH-6"', dn: 25, hoseIdMm: 25.4, hoseIdIn: 1, hoseOdMm: 39.9, hoseOdIn: 1.57, workingPressureBar: 380, workingPressurePsi: 5500, minBendRadiusMm: 340, minBendRadiusIn: 13.39, uom: "Meter" },
      { partNo: '4SH-6.6/4"', dn: 31, hoseIdMm: 31.8, hoseIdIn: 1.25, hoseOdMm: 47.1, hoseOdIn: 1.85, workingPressureBar: 350, workingPressurePsi: 5100, minBendRadiusMm: 460, minBendRadiusIn: 18.11, uom: "Meter" },
      { partNo: '4SH-6.6/T"', dn: 38, hoseIdMm: 38.1, hoseIdIn: 1.5, hoseOdMm: 55.1, hoseOdIn: 2.16, workingPressureBar: 290, workingPressurePsi: 4200, minBendRadiusMm: 560, minBendRadiusIn: 22.05, uom: "Meter" },
      { partNo: '4SH-1"', dn: 51, hoseIdMm: 50.8, hoseIdIn: 2, hoseOdMm: 69.7, hoseOdIn: 2.74, workingPressureBar: 250, workingPressurePsi: 3650, minBendRadiusMm: 700, minBendRadiusIn: 27.56, uom: "Meter" },
    ],
    quickStats: [
      { label: "Max. Working Pressure", value: "420 BAR" },
      { label: "Max. Working Pressure", value: "6,100 PSI" },
      { label: "Temperature Range", value: "-40°C to +100°C" },
      { label: "Bend Radius", value: "280-700 mm depending on size" },
    ],
  },
  {
    slug: "sae-100-r12",
    name: "SAE 100 R12 MEET EXCEED EN 856 4SH",
    shortName: "SAE 100 R12 MEET EXCEED EN 856 4SH",
    tagline: "Four Braid Spiral Hydraulic Hose - SAE/EN Compliant",
    image: "/images/spiral-hoses/sae-100-r12-meet-exceed-en-856-4sh.png",
    standard: "SAE 100 R12 / EN 886 4SH",
    description:
      "The Hydronex SAE 100 R12 MEET EXCEED EN 886 4SH is a premium four braid spiral hydraulic hose that meets both SAE J517 and EN 886 4SH specifications. Engineered for high-pressure applications with a synthetic rubber tube resistant to hydraulic fluids, reinforced with four braids of high tensile steel wire, and protected by an oil, weather, and abrasion resistant synthetic rubber cover with MSHA approval. Working pressures up to 448 BAR.",
    features: [
      "Tube: Synthetic rubber, resistant to hydraulic fluids",
      "Reinforcement: Four braid of high tensile steel wire",
      "Cover: Oil, weather & abrasion resistant synthetic rubber - MSHA Approved",
      "Temperature Range (Medium): -40°C to +100°C",
      "Meets SAE J517 and EN 886 4SH standards",
      "Available in sizes from 3/8\" to 1\"",
      "Working pressure range: 350-448 BAR",
    ],
    specs: [
      { label: "Tube", value: "Synthetic rubber, resistant to hydraulic fluids" },
      { label: "Reinforcement", value: "Four braid of high tensile steel wire" },
      { label: "Cover", value: "Oil, weather & abrasion resistant synthetic rubber - MSHA Approved" },
      { label: "Temperature Range", value: "-40°C to +100°C" },
      { label: "Standards", value: "SAE 100 R12 / EN 886 4SH" },
      { label: "Available Sizes", value: "3/8\", 1/2\", 5/8\", 3/4\", 1\"" },
      { label: "Working Pressure", value: "350-448 BAR (5,100-6,500 PSI)" },
    ],
    applications: ["Construction equipment", "Mining machinery", "Agricultural equipment", "Industrial hydraulic systems"],
    partTableType: "r12",
    partTable: [
      { partNo: 'R12-3/8"', dn: 10, hoseIdMm: 9.5, hoseIdIn: 0.38, hoseOdMm: 20.1, hoseOdIn: 0.79, workingPressureBar: 448, workingPressurePsi: 6500, minBendRadiusMm: 62.5, minBendRadiusIn: 2.5, uom: "Meter" },
      { partNo: 'R12-1/2"', dn: 12, hoseIdMm: 12.7, hoseIdIn: 0.5, hoseOdMm: 23.4, hoseOdIn: 0.92, workingPressureBar: 415, workingPressurePsi: 6000, minBendRadiusMm: 90, minBendRadiusIn: 3.5, uom: "Meter" },
      { partNo: 'R12-5/8"', dn: 16, hoseIdMm: 15.9, hoseIdIn: 0.62, hoseOdMm: 28.2, hoseOdIn: 1.11, workingPressureBar: 415, workingPressurePsi: 6000, minBendRadiusMm: 100, minBendRadiusIn: 4, uom: "Meter" },
      { partNo: 'R12-3/4"', dn: 19, hoseIdMm: 19, hoseIdIn: 0.75, hoseOdMm: 30.5, hoseOdIn: 1.2, workingPressureBar: 380, workingPressurePsi: 5500, minBendRadiusMm: 120, minBendRadiusIn: 4.75, uom: "Meter" },
      { partNo: 'R12-1"', dn: 25, hoseIdMm: 25.4, hoseIdIn: 1, hoseOdMm: 37.6, hoseOdIn: 1.48, workingPressureBar: 350, workingPressurePsi: 5100, minBendRadiusMm: 150, minBendRadiusIn: 6, uom: "Meter" },
    ],
    quickStats: [
      { label: "Max. Working Pressure", value: "448 BAR" },
      { label: "Max. Working Pressure", value: "6,500 PSI" },
      { label: "Temperature Range", value: "-40°C to +100°C" },
      { label: "Bend Radius", value: "62.5-150 mm depending on size" },
    ],
  },
  {
    slug: "sae-100-r13",
    name: "SAE 100 R13 Performance",
    shortName: "SAE 100 R13 Performance",
    tagline: "Four Braid Spiral High Performance Hydraulic Hose",
    image: "/images/spiral-hoses/sae-100-r13-performance.png",
    standard: "SAE 100 R13",
    description:
      "The Hydronex SAE 100 R13 Performance is a premium four braid spiral hydraulic hose engineered for high-pressure applications. Featuring a synthetic rubber tube resistant to hydraulic fluids, reinforced with four braids of high tensile steel wire, and protected by an oil, weather, and abrasion resistant synthetic rubber cover with MSHA approval. Consistent 350 BAR working pressure across all sizes.",
    features: [
      "Tube: Synthetic rubber, resistant to hydraulic fluids",
      "Reinforcement: Four braid of high tensile steel wire",
      "Cover: Oil, weather & abrasion resistant synthetic rubber - MSHA Approved",
      "Temperature Range (Medium): -40°C to +100°C",
      "Available in sizes from 1/2\" to 1\"",
      "Consistent working pressure: 350 BAR across all sizes",
    ],
    specs: [
      { label: "Tube", value: "Synthetic rubber, resistant to hydraulic fluids" },
      { label: "Reinforcement", value: "Four braid of high tensile steel wire" },
      { label: "Cover", value: "Oil, weather & abrasion resistant synthetic rubber - MSHA Approved" },
      { label: "Temperature Range", value: "-40°C to +100°C" },
      { label: "Standard", value: "SAE 100 R13" },
      { label: "Available Sizes", value: "1/2\", 5/8\", 3/4\", 1\"" },
      { label: "Working Pressure", value: "350 BAR (5,100 PSI)" },
    ],
    applications: ["Industrial hydraulic systems", "Heavy equipment", "Manufacturing machinery", "Performance-grade applications"],
    partTableType: "r13",
    partTable: [
      { partNo: 'R13-1/2"', dn: 12, hoseIdMm: 12.7, hoseIdIn: 0.5, hoseOdMm: 23, hoseOdIn: 0.91, workingPressureBar: 350, workingPressurePsi: 5100, minBendRadiusMm: 115, minBendRadiusIn: 4.53, uom: "Meter" },
      { partNo: 'R13-5/8"', dn: 16, hoseIdMm: 15.9, hoseIdIn: 0.62, hoseOdMm: 26.8, hoseOdIn: 1.06, workingPressureBar: 350, workingPressurePsi: 5100, minBendRadiusMm: 125, minBendRadiusIn: 4.92, uom: "Meter" },
      { partNo: 'R13-3/4"', dn: 19, hoseIdMm: 19, hoseIdIn: 0.75, hoseOdMm: 31.8, hoseOdIn: 1.25, workingPressureBar: 350, workingPressurePsi: 5100, minBendRadiusMm: 140, minBendRadiusIn: 5.51, uom: "Meter" },
      { partNo: 'R13-1"', dn: 25, hoseIdMm: 25.4, hoseIdIn: 1, hoseOdMm: 39.3, hoseOdIn: 1.55, workingPressureBar: 350, workingPressurePsi: 5100, minBendRadiusMm: 150, minBendRadiusIn: 5.91, uom: "Meter" },
    ],
    quickStats: [
      { label: "Max. Working Pressure", value: "350 BAR" },
      { label: "Max. Working Pressure", value: "5,100 PSI" },
      { label: "Temperature Range", value: "-40°C to +100°C" },
      { label: "Bend Radius", value: "115-150 mm depending on size" },
    ],
  },
  {
    slug: "sae-100-r15",
    name: "SAE 100 R15 Performance",
    shortName: "SAE 100 R15 Performance",
    tagline: "Six Wire Spiral Ultra High Pressure Hydraulic Hose",
    image: "/images/spiral-hoses/sae-100-r15-performance.png",
    standard: "SAE 100 R15",
    description:
      "The Hydronex SAE 100 R15 Performance is a premium six wire spiral hydraulic hose providing ultra-high pressure performance. Engineered with synthetic rubber tube resistant to hydraulic fluids, reinforced with multiple layers of high tensile steel wire, and protected by an oil, weather, and abrasion resistant synthetic rubber cover with MSHA approval. Maximum working pressure of 420 BAR across all sizes.",
    features: [
      "Tube: Synthetic rubber, resistant to hydraulic fluids",
      "Reinforcement: Multiple wire spiral construction for maximum pressure",
      "Cover: Oil, weather & abrasion resistant synthetic rubber - MSHA Approved",
      "Temperature Range (Medium): -40°C to +121°C",
      "Available in sizes from 1\" to 1.1/2\"",
      "Consistent working pressure: 420 BAR across all sizes",
    ],
    specs: [
      { label: "Tube", value: "Synthetic rubber, resistant to hydraulic fluids" },
      { label: "Reinforcement", value: "Multiple wire spiral construction" },
      { label: "Cover", value: "Oil, weather & abrasion resistant synthetic rubber - MSHA Approved" },
      { label: "Temperature Range", value: "-40°C to +121°C" },
      { label: "Standard", value: "SAE 100 R15" },
      { label: "Available Sizes", value: "1\", 1.1/4\", 1.1/2\"" },
      { label: "Working Pressure", value: "420 BAR (6,100 PSI)" },
    ],
    applications: ["Ultra high-pressure systems", "Heavy-duty industrial applications", "Hydraulic presses", "Performance-grade equipment"],
    partTableType: "r15",
    partTable: [
      { partNo: 'R15-1"', dn: 25, hoseIdMm: 25.4, hoseIdIn: 1, hoseOdMm: 38.7, hoseOdIn: 1.52, workingPressureBar: 420, workingPressurePsi: 6100, minBendRadiusMm: 330, minBendRadiusIn: 12.99, uom: "Meter" },
      { partNo: 'R15-1.1/4"', dn: 31, hoseIdMm: 31.8, hoseIdIn: 1.25, hoseOdMm: 49.8, hoseOdIn: 1.96, workingPressureBar: 420, workingPressurePsi: 6100, minBendRadiusMm: 445, minBendRadiusIn: 17.52, uom: "Meter" },
      { partNo: 'R15-1.1/2"', dn: 38, hoseIdMm: 38.1, hoseIdIn: 1.5, hoseOdMm: 57.3, hoseOdIn: 2.26, workingPressureBar: 420, workingPressurePsi: 6100, minBendRadiusMm: 530, minBendRadiusIn: 20.87, uom: "Meter" },
    ],
    quickStats: [
      { label: "Max. Working Pressure", value: "420 BAR" },
      { label: "Max. Working Pressure", value: "6,100 PSI" },
      { label: "Temperature Range", value: "-40°C to +121°C" },
      { label: "Bend Radius", value: "330-530 mm depending on size" },
    ],
  },
  {
    slug: "6sp-type-sae-100-r15en-45545-2-super-high-pressure",
    name: "6SP Type SAE 100 R15EN 45545-2, Super High Pressure Hydraulic Hose",
    shortName: "6SP Type SAE 100 R15EN 45545-2, Super High Pressure Hydraulic Hose",
    tagline: "Six Spiral Ultra High Performance Hydraulic Hose",
    image: "/images/spiral-hoses/6sp-type-sae-100-r15en-45545-2-super-high-pressure.png",
    standard: "SAE 100 R15 / EN 45545-2",
    description:
      "The Hydronex 6SP Type SAE 100 R15EN 45545-2 Super High Pressure Hydraulic Hose is a premium six spiral hose engineered for the most demanding extreme pressure applications. Featuring a synthetic rubber tube resistant to hydraulic fluids, reinforced with six spirals of high tensile steel wire, and protected by DURA TUFF cover. Delivers consistent 420 BAR working pressure with advanced performance specifications.",
    features: [
      "Tube: Synthetic rubber, resistant to hydraulic fluids",
      "Reinforcement: Six Spiral of high tensile steel wire",
      "Cover: DURA TUFF - advanced abrasion resistant synthetic rubber",
      "Temperature Range (Medium): -40°C to +100°C",
      "Maximum pressure performance with premium construction",
      "Available in sizes from 1.1/4\" to 2\"",
    ],
    specs: [
      { label: "Tube", value: "Synthetic rubber, resistant to hydraulic fluids" },
      { label: "Reinforcement", value: "Six Spiral of high tensile steel wire" },
      { label: "Cover", value: "DURA TUFF - advanced abrasion resistant synthetic rubber" },
      { label: "Temperature Range", value: "-40°C to +100°C" },
      { label: "Standard", value: "SAE 100 R15 / EN 45545-2" },
      { label: "Available Sizes", value: "1.1/4\", 1.1/2\", 2\"" },
      { label: "Working Pressure", value: "420 BAR (6,100 PSI)" },
    ],
    applications: ["Extreme pressure hydraulic systems", "Heavy-duty industrial machinery", "High-performance applications", "Specialized equipment requiring maximum durability"],
    partTableType: "6sp",
    partTable: [
      { partNo: '6SP-1.1/4"', dn: 31, hoseIdMm: 31.8, hoseIdIn: 1.25, hoseOdMm: 49.8, hoseOdIn: 1.96, workingPressureBar: 420, workingPressurePsi: 6100, minBendRadiusMm: 420, minBendRadiusIn: 16.5, uom: "Meter" },
      { partNo: '6SP-1.1/2"', dn: 38, hoseIdMm: 38.1, hoseIdIn: 1.5, hoseOdMm: 57.3, hoseOdIn: 2.26, workingPressureBar: 420, workingPressurePsi: 6100, minBendRadiusMm: 510, minBendRadiusIn: 20.8, uom: "Meter" },
      { partNo: '6SP-2"', dn: 51, hoseIdMm: 51.4, hoseIdIn: 2, hoseOdMm: 71.7, hoseOdIn: 2.82, workingPressureBar: 420, workingPressurePsi: 6100, minBendRadiusMm: 630, minBendRadiusIn: 24.8, uom: "Meter" },
    ],
    quickStats: [
      { label: "Max. Working Pressure", value: "420 BAR" },
      { label: "Max. Working Pressure", value: "6,100 PSI" },
      { label: "Temperature Range", value: "-40°C to +100°C" },
      { label: "Bend Radius", value: "420-630 mm depending on size" },
    ],
  },
]

export function getSpiralHoseBySlug(slug: string): SpiralHoseProduct | undefined {
  return spiralHoses.find((h) => h.slug === slug)
}
