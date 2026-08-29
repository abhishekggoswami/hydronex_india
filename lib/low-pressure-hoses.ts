export interface LowPressureHoseProduct {
  slug: string
  name: string
  shortName: string
  tagline: string
  image: string
  standard: string
  description: string
  features: string[]
  specs: Array<{ label: string; value: string }>
  applications: string[]
  partTableType?: string
  partTable?: any[]
  quickStats: Array<{ label: string; value: string }>
}

export const lowPressureHoses: LowPressureHoseProduct[] = [
  {
    slug: "pvc-braided-hose",
    name: "PVC BRAIDED HOSE",
    shortName: "PVC BRAIDED HOSE",
    tagline: "High Tenacity Yarn Reinforced Air & Pneumatic Hose",
    image: "/images/low-pressure-hoses/pvc-braided-hose.png",
    standard: "EN 559 / DIN 73211",
    description:
      "The Hydronex PVC BRAIDED HOSE is reinforced with high tenacity yarn to meet the pressure requirements for general construction work, road building, and tunneling applications. Engineered for use in metallic and non-metallic ore mines, structural shops with chipping, grinding, and reverting application service stations. Perfect for tyre inflation, pneumatic tools in industries, and heavy duty suction and delivery of water and chemicals.",
    features: [
      "Reinforced with high tenacity yarn for superior durability",
      "PVC tube with braided reinforcement",
      "Rated for general construction and pneumatic applications",
      "Suitable for tyre inflation and pneumatic tool use",
      "Heavy duty suction and delivery capability",
      "Weather resistant outer cover",
      "Available in sizes 5mm to 75mm",
    ],
    specs: [
      { label: "Tube", value: "PVC" },
      { label: "Reinforcement", value: "High Tenacity Yarn Braid" },
      { label: "Cover", value: "Weather Resistant PVC" },
      { label: "Standard", value: "EN 559 / DIN 73211" },
      { label: "Working Pressure", value: "6 - 25 kg/cm2 at 30°C" },
      { label: "Size Range", value: "5mm - 75mm" },
    ],
    applications: ["General construction work", "Road building", "Tunneling", "Ore mines", "Tyre inflation", "Pneumatic tools", "Suction and delivery of water and chemicals"],
    partTableType: "pvcbraided",
    partTable: [
      { sizeMM: 5, wallThicknessMM: 2.5, workingPressureKgcm2: 15, standardLengthsMtrs: "50/100/200" },
      { sizeMM: 6, wallThicknessMM: 3.0, workingPressureKgcm2: 25, standardLengthsMtrs: "50/100" },
      { sizeMM: 8, wallThicknessMM: 3.0, workingPressureKgcm2: 25, standardLengthsMtrs: "50/100" },
      { sizeMM: 10, wallThicknessMM: 3.5, workingPressureKgcm2: 25, standardLengthsMtrs: "50/100" },
      { sizeMM: 12, wallThicknessMM: 3.5, workingPressureKgcm2: 20, standardLengthsMtrs: "50/100" },
      { sizeMM: 15, wallThicknessMM: 3.5, workingPressureKgcm2: 20, standardLengthsMtrs: "30/50/100" },
      { sizeMM: 20, wallThicknessMM: 4.0, workingPressureKgcm2: 20, standardLengthsMtrs: "30/50/100/2000" },
      { sizeMM: 25, wallThicknessMM: 4.8, workingPressureKgcm2: 15, standardLengthsMtrs: "30/50/100" },
      { sizeMM: 31, wallThicknessMM: 4.8, workingPressureKgcm2: 15, standardLengthsMtrs: "30/50/100" },
      { sizeMM: 40, wallThicknessMM: 5.0, workingPressureKgcm2: 15, standardLengthsMtrs: "30/50/100" },
      { sizeMM: 45, wallThicknessMM: 5.5, workingPressureKgcm2: 10, standardLengthsMtrs: "30/50/100" },
      { sizeMM: 50, wallThicknessMM: 6.0, workingPressureKgcm2: 10, standardLengthsMtrs: "30/50/100" },
      { sizeMM: 58, wallThicknessMM: 6.5, workingPressureKgcm2: 8, standardLengthsMtrs: "30/50" },
      { sizeMM: 63, wallThicknessMM: 7.0, workingPressureKgcm2: 8, standardLengthsMtrs: "30/50" },
      { sizeMM: 75, wallThicknessMM: 8.0, workingPressureKgcm2: 6, standardLengthsMtrs: "20/30" },
    ],
    quickStats: [
      { label: "Reinforcement", value: "High Tenacity Yarn" },
      { label: "Pressure Range", value: "6 - 25 kg/cm2 at 30°C" },
      { label: "Size Range", value: "5mm - 75mm" },
      { label: "Standard", value: "EN 559 / DIN 73211" },
    ],
  },
  {
    slug: "lp-hose",
    name: "LP HOSE",
    shortName: "LP HOSE",
    tagline: "Metal Braided Low & High Pressure Hose",
    image: "/images/low-pressure-hoses/lp-hose.png",
    standard: "SAE J343",
    description:
      "The Hydronex LP HOSE is a versatile metal braided hose available in two pressure types: Low and High. The Low type features extruded rubber tubing resistant to petroleum-based fuel and lubricants with metallic GI braided cover, identified by a yellow Vestan band. The High type is further strengthened by Vulcanized Rayon Braided reinforcement between the rubber tubing and outer metal braiding, identified by a red Vestan band. Both types operate at -40°C to +90°C, making them suitable for demanding industrial applications.",
    features: [
      "Available in Low and High pressure variants",
      "Extruded rubber tubing resistant to petroleum-based fuel and lubricants",
      "Metallic GI braided outer cover for durability",
      "Vulcanized Rayon Braiding (High type) for enhanced strength",
      "Vestan band identification system (Yellow for Low, Red for High)",
      "Temperature range: -40°C to +90°C",
      "Available in 5 sizes: 1/4\", 3/8\", 1/2\", 3/4\", 1\"",
    ],
    specs: [
      { label: "Type Low - Tube", value: "Extruded rubber, fuel/lubricant resistant" },
      { label: "Type Low - Cover", value: "Metallic GI Braided" },
      { label: "Type Low - Identification", value: "Yellow Vestan band" },
      { label: "Type High - Tube", value: "Extruded rubber with Vulcanized Rayon Braid reinforcement" },
      { label: "Type High - Cover", value: "Metallic outer braiding" },
      { label: "Type High - Identification", value: "Red Vestan band" },
      { label: "Temperature Range", value: "-40°C to +90°C" },
      { label: "Standard", value: "SAE J343" },
    ],
    applications: ["Automotive fuel lines", "Petroleum transfer", "Lubricant delivery", "Industrial hydraulic systems", "Heavy equipment", "High-pressure applications"],
    partTableType: "lphose",
    partTable: [
      { size: "1/4\"", lowPSI: 427, highPSI: 782 },
      { size: "3/8\"", lowPSI: 356, highPSI: 711 },
      { size: "1/2\"", lowPSI: 284, highPSI: 640 },
      { size: "3/4\"", lowPSI: 213, highPSI: 427 },
      { size: "1\"", lowPSI: 213, highPSI: 400 },
    ],
    quickStats: [
      { label: "Type Low Pressure", value: "427 - 213 PSI (1/4\" - 1\")" },
      { label: "Type High Pressure", value: "782 - 400 PSI (1/4\" - 1\")" },
      { label: "Temperature Range", value: "-40°C to +90°C" },
      { label: "Standard", value: "SAE J343" },
    ],
  },
]

export function getLowPressureHoseBySlug(slug: string) {
  return lowPressureHoses.find((hose) => hose.slug === slug)
}

export function searchLowPressureHoses(query: string) {
  const q = query.toLowerCase()
  return lowPressureHoses.filter(
    (hose) =>
      hose.name.toLowerCase().includes(q) ||
      hose.shortName.toLowerCase().includes(q) ||
      hose.description.toLowerCase().includes(q) ||
      hose.applications.some((app) => app.toLowerCase().includes(q))
  )
}
