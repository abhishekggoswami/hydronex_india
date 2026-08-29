export interface SSCorrugatedTeflon {
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
  partTable?: Array<Record<string, any>>
  quickStats: Array<{ label: string; value: string }>
}

export const ssCorrugatedTeflon: SSCorrugatedTeflon[] = [
  {
    slug: "ss-corrugated-flexible-hoses",
    name: "S. S. Corrugated Flexible Hoses",
    shortName: "S. S. Corrugated Flexible Hoses",
    tagline: "Stainless Steel Corrugated Flexible Hose",
    image: "/images/ss-corrugated-teflon-hoses/ss-corrugated-flexible-hoses.png",
    standard: "Industrial Grade",
    description:
      "Stainless Steel corrugated flexible hoses offered from size 6mm NB (1/4\") to 200mm NB (8\"). The annular corrugated hose body provides the flexibility and pressure tight core of the assembly. Hydronex manufactures high flexible close-pitch hoses for special applications. These hoses feature superior corrosion and chemical resistance, ideal for applications requiring durability in diverse industrial environments including food processing, pharmaceutical, and extreme temperature conditions.",
    features: [
      "Size range from 6mm NB (1/4\") to 200mm NB (8\")",
      "Annular Corrugated hose body for flexibility & pressure tight core",
      "Material: 304/316 Grade Stainless Steel",
      "Superior corrosion and chemical resistance",
      "Available in three pressure ratings: Without Braid, Single Braid, Double Braid",
      "High flexible close-pitch hoses for special applications",
    ],
    specs: [
      { label: "Material", value: "304/316 Grade Stainless Steel" },
      { label: "Construction", value: "Annular Corrugated Flexible" },
      { label: "Size Range", value: "6mm NB (1/4\") to 200mm NB (8\")" },
      { label: "Pressure Ratings", value: "Without Braid, Single Braid, Double Braid" },
      { label: "Corrosion Resistance", value: "Excellent" },
      { label: "Temperature Range", value: "-50°C to +200°C" },
    ],
    applications: ["Food processing", "Pharmaceutical", "Chemical transfer", "High-temperature applications", "Corrosive environments"],
    partTableType: "sscorrugated",
    partTable: [
      { partNo: "1/4\"", nominalBoreMM: 6, minBendRadiusStaticMM: 25, minBendRadiusFlexingMM: 100, withoutBraidMaxPressure: 4, withoutBraidTestPressure: 6, singleBraidMaxPressure: 100, singleBraidTestPressure: 150, doubleBraidMaxPressure: 160, doubleBraidTestPressure: 240 },
      { partNo: "3/8\"", nominalBoreMM: 10, minBendRadiusStaticMM: 40, minBendRadiusFlexingMM: 150, withoutBraidMaxPressure: 4, withoutBraidTestPressure: 6, singleBraidMaxPressure: 90, singleBraidTestPressure: 135, doubleBraidMaxPressure: 144, doubleBraidTestPressure: 216 },
      { partNo: "1/2\"", nominalBoreMM: 12, minBendRadiusStaticMM: 50, minBendRadiusFlexingMM: 200, withoutBraidMaxPressure: 3, withoutBraidTestPressure: 4.5, singleBraidMaxPressure: 80, singleBraidTestPressure: 120, doubleBraidMaxPressure: 128, doubleBraidTestPressure: 192 },
      { partNo: "5/8\"", nominalBoreMM: 16, minBendRadiusStaticMM: 50, minBendRadiusFlexingMM: 200, withoutBraidMaxPressure: 3, withoutBraidTestPressure: 4.5, singleBraidMaxPressure: 70, singleBraidTestPressure: 105, doubleBraidMaxPressure: 112, doubleBraidTestPressure: 168 },
      { partNo: "3/4\"", nominalBoreMM: 20, minBendRadiusStaticMM: 70, minBendRadiusFlexingMM: 200, withoutBraidMaxPressure: 2, withoutBraidTestPressure: 3, singleBraidMaxPressure: 64, singleBraidTestPressure: 96, doubleBraidMaxPressure: 102, doubleBraidTestPressure: 153 },
      { partNo: "1\"", nominalBoreMM: 25, minBendRadiusStaticMM: 90, minBendRadiusFlexingMM: 200, withoutBraidMaxPressure: 2, withoutBraidTestPressure: 3, singleBraidMaxPressure: 50, singleBraidTestPressure: 75, doubleBraidMaxPressure: 80, doubleBraidTestPressure: 120 },
      { partNo: "1.1/4\"", nominalBoreMM: 32, minBendRadiusStaticMM: 110, minBendRadiusFlexingMM: 250, withoutBraidMaxPressure: 1.5, withoutBraidTestPressure: 2.3, singleBraidMaxPressure: 40, singleBraidTestPressure: 60, doubleBraidMaxPressure: 64, doubleBraidTestPressure: 96 },
      { partNo: "1.1/2\"", nominalBoreMM: 40, minBendRadiusStaticMM: 130, minBendRadiusFlexingMM: 250, withoutBraidMaxPressure: 1.5, withoutBraidTestPressure: 2.3, singleBraidMaxPressure: 30, singleBraidTestPressure: 45, doubleBraidMaxPressure: 48, doubleBraidTestPressure: 92 },
      { partNo: "2\"", nominalBoreMM: 50, minBendRadiusStaticMM: 175, minBendRadiusFlexingMM: 350, withoutBraidMaxPressure: 1, withoutBraidTestPressure: 1.5, singleBraidMaxPressure: 28, singleBraidTestPressure: 42, doubleBraidMaxPressure: 44, doubleBraidTestPressure: 66 },
      { partNo: "2.1/2\"", nominalBoreMM: 65, minBendRadiusStaticMM: 200, minBendRadiusFlexingMM: 410, withoutBraidMaxPressure: 1, withoutBraidTestPressure: 1.5, singleBraidMaxPressure: 24, singleBraidTestPressure: 36, doubleBraidMaxPressure: 38, doubleBraidTestPressure: 57 },
      { partNo: "3\"", nominalBoreMM: 80, minBendRadiusStaticMM: 205, minBendRadiusFlexingMM: 450, withoutBraidMaxPressure: 1, withoutBraidTestPressure: 1.5, singleBraidMaxPressure: 18, singleBraidTestPressure: 27, doubleBraidMaxPressure: 28, doubleBraidTestPressure: 42 },
      { partNo: "4\"", nominalBoreMM: 100, minBendRadiusStaticMM: 230, minBendRadiusFlexingMM: 560, withoutBraidMaxPressure: 0.8, withoutBraidTestPressure: 1.2, singleBraidMaxPressure: 16, singleBraidTestPressure: 24, doubleBraidMaxPressure: 26, doubleBraidTestPressure: 39 },
      { partNo: "5\"", nominalBoreMM: 125, minBendRadiusStaticMM: 280, minBendRadiusFlexingMM: 660, withoutBraidMaxPressure: 0.6, withoutBraidTestPressure: 0.9, singleBraidMaxPressure: 12, singleBraidTestPressure: 18, doubleBraidMaxPressure: 20, doubleBraidTestPressure: 30 },
      { partNo: "6\"", nominalBoreMM: 150, minBendRadiusStaticMM: 320, minBendRadiusFlexingMM: 816, withoutBraidMaxPressure: 0.6, withoutBraidTestPressure: 0.9, singleBraidMaxPressure: 10, singleBraidTestPressure: 15, doubleBraidMaxPressure: 16, doubleBraidTestPressure: 24 },
      { partNo: "8\"", nominalBoreMM: 200, minBendRadiusStaticMM: 435, minBendRadiusFlexingMM: 1015, withoutBraidMaxPressure: 0.5, withoutBraidTestPressure: 0.75, singleBraidMaxPressure: 8, singleBraidTestPressure: 12, doubleBraidMaxPressure: 12, doubleBraidTestPressure: 18 },
    ],
    quickStats: [
      { label: "Size Range", value: "6mm (1/4\") to 200mm (8\")" },
      { label: "Material", value: "Stainless Steel 304/316" },
      { label: "Pressure Options", value: "Without/Single/Double Braid" },
      { label: "Temperature Range", value: "-50°C to +200°C" },
    ],
  },
  {
    slug: "ptfe-teflon-hose",
    name: "PTFE (TEFLON HOSE)",
    shortName: "PTFE (TEFLON HOSE)",
    tagline: "Chemical & High Temperature Resistant PTFE Hose",
    image: "/images/ss-corrugated-teflon-hoses/ptfe-teflon-hose.png",
    standard: "ASTM D6775",
    description:
      "Polytetrafluoroethylene (PTFE) is an engineered fluoropolymer with outstanding resistance to chemicals - one of its primary attributes. The Hydronex PTFE (TEFLON HOSE) features a broad temperature range of -100°F to 500°F (-73°C to 260°C), making this hose material suitable for the majority of fluid and ambient temperature conditions found in industry. Ideal for pharmaceutical, chemical processing, and laboratory applications where purity and chemical compatibility are critical.",
    features: [
      "Material: Virgin PTFE (Polytetrafluoroethylene)",
      "Engineered fluoropolymer with exceptional chemical resistance",
      "Outstanding resistance to virtually all chemicals",
      "Extreme temperature range: -100°F to 500°F (-73°C to 260°C)",
      "FDA approved for food and pharmaceutical use",
      "Non-stick inner surface for optimal flow and reduced buildup",
    ],
    specs: [
      { label: "Material", value: "Virgin PTFE (Polytetrafluoroethylene)" },
      { label: "Type", value: "Engineered Fluoropolymer" },
      { label: "Chemical Resistance", value: "Exceptional - All Chemicals" },
      { label: "Temperature Range", value: "-100°F to 500°F (-73°C to 260°C)" },
      { label: "FDA Approved", value: "Yes" },
      { label: "Standard", value: "ASTM D6775" },
    ],
    applications: ["Pharmaceutical processing", "Chemical laboratories", "Food & beverage", "High-purity applications", "Extreme temperature environments", "Chemical transfer lines"],
    partTableType: "ptfe",
    partTable: [
      { partNo: "3/16\"", nominalIdMM: 5.10, wallThicknessMM: 0.90, nominalOdMM: 8.05, workingPressureBAR: 264, burstPressureBAR: 793, minBendRadiusMM: 64, uom: "Meter" },
      { partNo: "1/4\"", nominalIdMM: 6.70, wallThicknessMM: 0.75, nominalOdMM: 9.34, workingPressureBAR: 224, burstPressureBAR: 672, minBendRadiusMM: 76, uom: "Meter" },
      { partNo: "5/16\"", nominalIdMM: 8.40, wallThicknessMM: 0.65, nominalOdMM: 11.05, workingPressureBAR: 207, burstPressureBAR: 621, minBendRadiusMM: 102, uom: "Meter" },
      { partNo: "3/8\"", nominalIdMM: 10.30, wallThicknessMM: 0.65, nominalOdMM: 13.40, workingPressureBAR: 183, burstPressureBAR: 552, minBendRadiusMM: 127, uom: "Meter" },
      { partNo: "1/2\"", nominalIdMM: 13.40, wallThicknessMM: 0.90, nominalOdMM: 16.60, workingPressureBAR: 161, burstPressureBAR: 483, minBendRadiusMM: 152, uom: "Meter" },
      { partNo: "5/8\"", nominalIdMM: 16.60, wallThicknessMM: 0.90, nominalOdMM: 19.85, workingPressureBAR: 114, burstPressureBAR: 345, minBendRadiusMM: 178, uom: "Meter" },
      { partNo: "3/4\"", nominalIdMM: 19.80, wallThicknessMM: 1.00, nominalOdMM: 23.15, workingPressureBAR: 103, burstPressureBAR: 310, minBendRadiusMM: 203, uom: "Meter" },
      { partNo: "7/8\"", nominalIdMM: 22.10, wallThicknessMM: 1.00, nominalOdMM: 25.35, workingPressureBAR: 92, burstPressureBAR: 276, minBendRadiusMM: 229, uom: "Meter" },
      { partNo: "1\"", nominalIdMM: 26.10, wallThicknessMM: 1.20, nominalOdMM: 29.75, workingPressureBAR: 80, burstPressureBAR: 241, minBendRadiusMM: 305, uom: "Meter" },
    ],
    quickStats: [
      { label: "Temperature Range", value: "-100°F to 500°F (-73°C to 260°C)" },
      { label: "Chemical Resistance", value: "Universal" },
      { label: "Max. Working Pressure", value: "264 BAR (3/16\" size)" },
      { label: "Standard", value: "ASTM D6775" },
    ],
  },
]

export const getSSCorrugatedTeflon = (slug: string) => {
  return ssCorrugatedTeflon.find((hose) => hose.slug === slug)
}

export const getAllSlugs = () => {
  return ssCorrugatedTeflon.map((hose) => ({ params: { slug: hose.slug } }))
}
