export interface HighTemperatureHoseProduct {
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

export const highTemperatureHoses: HighTemperatureHoseProduct[] = [
  {
    slug: "airwater-hose-is-446-type-1-ht",
    name: "AirWater Hose IS 446 – Type -1",
    shortName: "AirWater Hose IS 446 – Type -1",
    tagline: "Pneumatic & Water Application Hose",
    image: "/images/high-temperature-hoses/airwater-hose-is-446-type-1-hightemp.png",
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
    slug: "exceed-sae-100-r1-at-type-s",
    name: "EXCEED SAE 100 R1 AT TYPE S, EN 853 – 1SN ISO 1436-1",
    shortName: "EXCEED SAE 100 R1 AT TYPE S, EN 853 – 1SN ISO 1436-1",
    tagline: "Extreme High Temperature Hydraulic Hose",
    image: "/images/high-temperature-hoses/exceed-sae-100-r1-at-type-s.png",
    standard: "SAE 100 R1 AT / EN 853 – 1SN ISO 1436-1",
    description:
      "The Hydronex EXCEED SAE 100 R1 AT TYPE S is an extreme high-temperature hydraulic hose engineered for the most demanding high-temperature hydraulic applications. Featuring elastomer tube resistant to hydraulic fluids and single braid high tensile steel wire reinforcement, with MSHA-approved cover. Designed to maintain performance under sustained high-temperature conditions from -40°C to +150°C, making it ideal for steel mills, foundries, and extreme temperature industrial environments.",
    features: [
      "Tube: Elastomer, resistant to hydraulic fluids",
      "Reinforcement: One braid of high tensile steel wire",
      "Cover: Elastomer, MSHA Approved",
      "Temperature Range (Medium): -40°C to +150°C",
      "Extreme high-temperature capability with superior durability",
      "Suitable for the most demanding industrial applications",
    ],
    specs: [
      { label: "Tube", value: "Elastomer, resistant to hydraulic fluids" },
      { label: "Reinforcement", value: "One braid of high tensile steel wire" },
      { label: "Cover", value: "Elastomer, MSHA Approved" },
      { label: "Temperature Range", value: "-40°C to +150°C" },
      { label: "Standard", value: "SAE 100 R1 AT / EN 853 – 1SN ISO 1436-1" },
      { label: "Pressure Class", value: "SAE 100 R1 AT" },
    ],
    applications: ["Steel mills", "Foundries", "High-temperature hydraulic systems", "Heat treatment facilities", "Extreme pressure & temperature environments"],
    partTableType: "exceed",
    partTable: [
      { partNo: "R1-1/4\"", dn: 6, hoseIdMm: 6.4, hoseIdIn: 0.25, hoseOdMm: 13.5, hoseOdIn: 0.53, workingPressureBar: 225, workingPressurePsi: 3250, minBendRadiusMm: 100, minBendRadiusIn: 3.94, uom: "Feet" },
      { partNo: "R1-3/8\"", dn: 10, hoseIdMm: 9.7, hoseIdIn: 0.38, hoseOdMm: 17.5, hoseOdIn: 0.69, workingPressureBar: 215, workingPressurePsi: 3125, minBendRadiusMm: 125, minBendRadiusIn: 5.12, uom: "Feet" },
      { partNo: "R1-1/2\"", dn: 12, hoseIdMm: 12.7, hoseIdIn: 0.5, hoseOdMm: 20.6, hoseOdIn: 0.81, workingPressureBar: 175, workingPressurePsi: 2550, minBendRadiusMm: 180, minBendRadiusIn: 7.09, uom: "Feet" },
      { partNo: "R1-5/8\"", dn: 16, hoseIdMm: 16, hoseIdIn: 0.63, hoseOdMm: 23.9, hoseOdIn: 0.94, workingPressureBar: 140, workingPressurePsi: 2050, minBendRadiusMm: 205, minBendRadiusIn: 8, uom: "Feet" },
      { partNo: "R1-3/4\"", dn: 19, hoseIdMm: 19.1, hoseIdIn: 0.75, hoseOdMm: 27.7, hoseOdIn: 1.09, workingPressureBar: 125, workingPressurePsi: 1800, minBendRadiusMm: 240, minBendRadiusIn: 9.45, uom: "Feet" },
      { partNo: "R1-1\"", dn: 25, hoseIdMm: 25.4, hoseIdIn: 1, hoseOdMm: 35.8, hoseOdIn: 1.41, workingPressureBar: 90, workingPressurePsi: 1300, minBendRadiusMm: 300, minBendRadiusIn: 11.81, uom: "Feet" },
      { partNo: "R1-1.1/4\"", dn: 31, hoseIdMm: 31.8, hoseIdIn: 1.25, hoseOdMm: 43.9, hoseOdIn: 1.73, workingPressureBar: 65, workingPressurePsi: 950, minBendRadiusMm: 420, minBendRadiusIn: 16.54, uom: "Feet" },
      { partNo: "R1-1.1/2\"", dn: 38, hoseIdMm: 38.1, hoseIdIn: 1.5, hoseOdMm: 50.6, hoseOdIn: 1.99, workingPressureBar: 50, workingPressurePsi: 725, minBendRadiusMm: 500, minBendRadiusIn: 19.69, uom: "Feet" },
      { partNo: "R1-2\"", dn: 51, hoseIdMm: 50.8, hoseIdIn: 2, hoseOdMm: 64, hoseOdIn: 2.52, workingPressureBar: 40, workingPressurePsi: 580, minBendRadiusMm: 630, minBendRadiusIn: 24.8, uom: "Feet" },
    ],
    quickStats: [
      { label: "Temperature Range", value: "-40°C to +150°C" },
      { label: "Max. Working Pressure", value: "225 BAR (3,250 PSI)" },
      { label: "Cover", value: "MSHA Approved Elastomer" },
      { label: "Standard", value: "SAE 100 R1 AT / EN 853 – 1SN ISO 1436-1" },
    ],
  },
]

export function getHighTemperatureHoseBySlug(slug: string): HighTemperatureHoseProduct | undefined {
  return highTemperatureHoses.find((h) => h.slug === slug)
}
