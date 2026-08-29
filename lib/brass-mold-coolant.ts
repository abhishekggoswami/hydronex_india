export interface BMCLCouplerRow {
  partNo: string
  threadBSPP: string
  overallLengthMm: number | string
  exposedLengthMm: number | string
  hexSizeMm: number | string
}

export interface BMCLDetailRow {
  bodySize: string
  ratedPressureBar: number | string
  material: string
  tempRange: string
}

// Nipple Female Pipe Thread (6-col)
export interface BMCLNippleFemaleRow {
  partNo: string
  threadSize: string
  overallLengthD: number | string
  overallLengthE: number | string
  hexSize: number | string
  largestDia: number | string
}

// Male Pipe Thread nipple (8-col)
export interface BMCLNippleMaleRow {
  partNo: string
  threadSize: string
  overallLengthD: number | string
  overallLengthE: number | string
  hexSizeF: number | string
  largestDiaG: number | string
  largestDiaA: number | string
  recessB: number | string
}

// Sub Assemblies V-series (5-col: Part No / Thread / A / B / C)
export interface BMCLSubAssemblyVRow {
  partNo: string
  threadSize: string
  largestDiaA: number | string
  recessB: number | string
  hexSizeC: number | string
}

// Male Pipe Thread V-variant (6-col: Part No / Thread / D / E / F / G)
export interface BMCLMalePipeVRow {
  partNo: string
  threadSize: string
  overallLengthD: number | string
  overallLengthE: number | string
  hexSizeF: number | string
  largestDiaG: number | string
}

// Performance table (7-col)
export interface BMCLPerformanceRow {
  sizeMm: string
  sizeInch: string
  workingPressure: string
  flowRate: string
  burstP1: string
  burstP2: string
  burstP3: string
}

export interface BrassMoldCoolantProduct {
  id: number
  code: string
  name: string
  slug: string
  image: string
  description: string
  material: string
  application: string
  features: string[]
  techSpecs: string[]
  specs: Array<{ label: string; value: string }>

  // Coupler - Straight
  couplerStraightDiagram: string
  couplerStraightTable: BMCLCouplerRow[]

  // Coupler - 45 Degree
  coupler45Diagram: string
  coupler45Table: BMCLCouplerRow[]

  // Coupler - 90 Degree
  coupler90Diagram: string
  coupler90Table: BMCLCouplerRow[]

  // Sub Assemblies (coupler hose-barb style)
  subAssemblyDiagram: string
  subAssemblyTable: BMCLCouplerRow[]

  // Nipples - Female Pipe Thread (6-col)
  nippleFemDiagram: string
  nippleFemTable: BMCLNippleFemaleRow[]

  // Nipples - Male Pipe Thread (8-col)
  nippleMaleDiagram: string
  nippleMaleTable: BMCLNippleMaleRow[]

  // Sub Assemblies V-series (5-col A/B/C)
  subAssemblyVDiagram: string
  subAssemblyVTable: BMCLSubAssemblyVRow[]

  // Male Pipe Thread V-variant (6-col)
  malePipeVDiagram: string
  malePipeVTable: BMCLMalePipeVRow[]

  // Performance table (7-col)
  performanceTable: BMCLPerformanceRow[]

  // Detail spec table
  detailTable: BMCLDetailRow[]
}

export const brassMoldCoolantProducts: BrassMoldCoolantProduct[] = [
  {
    id: 1,
    code: "BMCL-001",
    name: "Brass Mold Coolant-Line Quick Couplers / D-M-E Parker And Poster Interchange",
    slug: "brass-mold-coolant-line",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brass%20Mold%20Coolant-Line%20Quick%20Couplers%20D-M-E%20Parker%20And%20Poster%20Interchange-Qjzipso2uDTR7uSTAVIbBrdbn2lrCL.png",
    description:
      "Brass Mold Coolant-Line Quick Couplers designed for D-M-E, Parker and Poster interchange applications. Available in straight, 45° and 90° configurations to suit any mold coolant routing requirement. Manufactured from brass for excellent corrosion resistance and reliable performance in demanding injection mold cooling circuits.",
    material: "Brass",
    application: "Injection mold cooling systems, D-M-E / Parker / Poster interchange",
    features: [
      "Connexion by pulling back the sleeve",
      "Disconnection by pulling back the female sleeve",
      "Connexion under pressure not allowed",
      "Disconnection under pressure not allowed",
      "Interchangeability Us Market",
    ],
    techSpecs: [
      "Brass",
      "SILICONE (Viton is available on request)",
      "-68°C to +205°C",
      "According to ISO 7241-2",
    ],
    specs: [
      { label: "Standard",   value: "ISO 7241-2" },
      { label: "Material",   value: "Brass" },
      { label: "Seal",       value: "Silicone / Viton" },
      { label: "Temp. Range", value: "-68°C to +205°C" },
    ],

    // ── Coupler - Straight ──────────────────────────────────────────────
    couplerStraightDiagram:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wDIKqAtOSF4mwaMukjNtwaPoX7EZtw.png",
    couplerStraightTable: [
      { partNo: "PC204", threadBSPP: '1/4"',  overallLengthMm: 2.1,  exposedLengthMm: 0.62, hexSizeMm: 0.71 },
      { partNo: "PC205", threadBSPP: '5/16"', overallLengthMm: 2.1,  exposedLengthMm: 0.62, hexSizeMm: 0.71 },
      { partNo: "PC206", threadBSPP: '3/8"',  overallLengthMm: 2.1,  exposedLengthMm: 0.62, hexSizeMm: 0.71 },
      { partNo: "PC306", threadBSPP: '3/8"',  overallLengthMm: 3.01, exposedLengthMm: 0.88, hexSizeMm: 0.96 },
      { partNo: "PC308", threadBSPP: '1/2"',  overallLengthMm: 3.15, exposedLengthMm: 0.88, hexSizeMm: 0.96 },
      { partNo: "PC504", threadBSPP: '1/2"',  overallLengthMm: 3.55, exposedLengthMm: 1.12, hexSizeMm: 1.3  },
      { partNo: "PC506", threadBSPP: '3/4"',  overallLengthMm: 3.8,  exposedLengthMm: 1.12, hexSizeMm: 1.21 },
    ],

    // ── Coupler - 45 Degree ─────────────────────────────────────────────
    coupler45Diagram:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ttQUyfVChmNAIAvuB0tB6VGxd6JMJf.png",
    coupler45Table: [
      { partNo: "PC224", threadBSPP: '1/4"',  overallLengthMm: 2.67, exposedLengthMm: 0.56, hexSizeMm: 0.71 },
      { partNo: "PC225", threadBSPP: '5/16"', overallLengthMm: 2.69, exposedLengthMm: 0.56, hexSizeMm: 0.71 },
      { partNo: "PC226", threadBSPP: '3/8"',  overallLengthMm: 2.71, exposedLengthMm: 0.56, hexSizeMm: 0.71 },
      { partNo: "PC326", threadBSPP: '3/8"',  overallLengthMm: 3.65, exposedLengthMm: 0.88, hexSizeMm: 0.96 },
      { partNo: "PC328", threadBSPP: '1/2"',  overallLengthMm: 3.69, exposedLengthMm: 0.88, hexSizeMm: 0.96 },
      { partNo: "PC524", threadBSPP: '1/2"',  overallLengthMm: 4.18, exposedLengthMm: 1.12, hexSizeMm: 1.3  },
      { partNo: "PC526", threadBSPP: '3/4"',  overallLengthMm: 4.56, exposedLengthMm: 1.12, hexSizeMm: 1.21 },
    ],

    // ── Coupler - 90 Degree ─────────────────────────────────────────────
    coupler90Diagram:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-N7VYn4My5kids8V9HAvlOQhozeigE7.png",
    coupler90Table: [
      { partNo: "PC214", threadBSPP: '1/4"',  overallLengthMm: 1.78, exposedLengthMm: 0.56, hexSizeMm: 0.71 },
      { partNo: "PC215", threadBSPP: '5/16"', overallLengthMm: 1.78, exposedLengthMm: 0.56, hexSizeMm: 0.71 },
      { partNo: "PC216", threadBSPP: '3/8"',  overallLengthMm: 1.78, exposedLengthMm: 0.56, hexSizeMm: 0.71 },
      { partNo: "PC316", threadBSPP: '3/8"',  overallLengthMm: 2.78, exposedLengthMm: 0.88, hexSizeMm: 0.96 },
      { partNo: "PC318", threadBSPP: '1/2"',  overallLengthMm: 2.78, exposedLengthMm: 0.88, hexSizeMm: 0.96 },
      { partNo: "PC514", threadBSPP: '1/2"',  overallLengthMm: 3.5,  exposedLengthMm: 1.12, hexSizeMm: 1.3  },
      { partNo: "PC516", threadBSPP: '3/4"',  overallLengthMm: 3.5,  exposedLengthMm: 1.12, hexSizeMm: 1.21 },
    ],

    // ── Sub Assemblies ──────────────────────────────────────────────────
    subAssemblyDiagram:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ee15WnJMEryVcs1nWp9b8x1yPuv1yJ.png",
    subAssemblyTable: [
      { partNo: "PC200", threadBSPP: '1/8"',       overallLengthMm: 1.78, exposedLengthMm: 0.56, hexSizeMm: 0.71 },
      { partNo: "PC300", threadBSPP: '1/4"-3/8"',  overallLengthMm: 1.78, exposedLengthMm: 0.56, hexSizeMm: 0.71 },
      { partNo: "PC500", threadBSPP: '1/2"',        overallLengthMm: 1.78, exposedLengthMm: 0.56, hexSizeMm: 0.71 },
    ],

    // ── Nipples - Female Pipe Thread (6-col) ────────────────────────────
    nippleFemDiagram:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jboGem3Y7DOVgGEQOgR4L0Gj1vOqVF.png",
    nippleFemTable: [
      { partNo: "MP251F", threadSize: '1/8"',  overallLengthD: 0.97, overallLengthE: 0.58, hexSize: 0.58, largestDia: 0.5  },
      { partNo: "MP252F", threadSize: '1/4"',  overallLengthD: 1.28, overallLengthE: 0.89, hexSize: 0.72, largestDia: 0.63 },
      { partNo: "MP253F", threadSize: '3/8"',  overallLengthD: 1.41, overallLengthE: 1.02, hexSize: 0.87, largestDia: 0.75 },
      { partNo: "MP352F", threadSize: '1/4"',  overallLengthD: 1.48, overallLengthE: 0.88, hexSize: 0.72, largestDia: 0.63 },
      { partNo: "MP353F", threadSize: '3/8"',  overallLengthD: 1.58, overallLengthE: 0.98, hexSize: 0.87, largestDia: 0.75 },
    ],

    // ── Male Pipe Thread (8-col) ─────────────────────────────────────────
    nippleMaleDiagram:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-m6JdvbA2ZY2LC4LYxaPOWA6RpVsDoI.png",
    nippleMaleTable: [
      { partNo: "PN251", threadSize: '1/8"',  overallLengthD: 0.94, overallLengthE: 0.54, hexSizeF: 0.44, largestDiaG: 0.51, largestDiaA: 0.69, recessB: 0.69 },
      { partNo: "PN252", threadSize: '1/4"',  overallLengthD: 1.13, overallLengthE: 0.74, hexSizeF: 0.56, largestDiaG: 0.67, largestDiaA: 0.84, recessB: 0.94 },
      { partNo: "PN253", threadSize: '3/8"',  overallLengthD: 1.19, overallLengthE: 0.79, hexSizeF: 0.69, largestDiaG: 0.79, largestDiaA: 1.0,  recessB: 0.94 },
      { partNo: "PN352", threadSize: '1/4"',  overallLengthD: 1.34, overallLengthE: 0.74, hexSizeF: 0.56, largestDiaG: 0.65, largestDiaA: 1.0,  recessB: 1.09 },
      { partNo: "PN353", threadSize: '3/8"',  overallLengthD: 1.38, overallLengthE: 0.78, hexSizeF: 0.69, largestDiaG: 0.59, largestDiaA: 1.0,  recessB: 1.13 },
      { partNo: "PN354", threadSize: '1/2"',  overallLengthD: 1.59, overallLengthE: 0.99, hexSizeF: 0.88, largestDiaG: 1.01, largestDiaA: 1.19, recessB: 1.25 },
      { partNo: "PN554", threadSize: '1/2"',  overallLengthD: 1.69, overallLengthE: 0.92, hexSizeF: 0.88, largestDiaG: 1.01, largestDiaA: 1.25, recessB: 1.5  },
      { partNo: "PN556", threadSize: '3/4"',  overallLengthD: 1.75, overallLengthE: 0.99, hexSizeF: 1.12, largestDiaG: 1.3,  largestDiaA: 1.5,  recessB: 1.56 },
    ],

    // ── Sub Assemblies V-series (5-col A/B/C) ───────────────────────────
    subAssemblyVDiagram:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MzPRdhSSx4CtFPo8G2oppo6BbTLjWL.png",
    subAssemblyVTable: [
      { partNo: "PC200V", threadSize: '1/8"',       largestDiaA: 1.15, recessB: 0.56, hexSizeC: 0.71 },
      { partNo: "PC300V", threadSize: '1/4"',        largestDiaA: 1.84, recessB: 0.88, hexSizeC: 0.96 },
    ],

    // ── Male Pipe Thread V-variant (6-col) ───────────────────────────────
    malePipeVDiagram:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sl72nfnK8hwdB7J1vBQfv0G0TWURY0.png",
    malePipeVTable: [
      { partNo: "PN252V", threadSize: '1/4"', overallLengthD: 1.13, overallLengthE: 0.74, hexSizeF: 0.56, largestDiaG: 0.67 },
      { partNo: "PN352V", threadSize: '1/4"', overallLengthD: 1.34, overallLengthE: 0.74, hexSizeF: 0.56, largestDiaG: 0.65 },
      { partNo: "PN353V", threadSize: '3/8"', overallLengthD: 1.38, overallLengthE: 1.38, hexSizeF: 0.69, largestDiaG: 0.59 },
    ],

    // ── Performance Table (7-col) ────────────────────────────────────────
    performanceTable: [
      { sizeMm: "6.3",  sizeInch: '1/4"', workingPressure: "15 (2175)", flowRate: "16 (4.2)",  burstP1: "45 (6525)", burstP2: "45 (6525)", burstP3: "45 (6525)" },
      { sizeMm: "10",   sizeInch: '3/8"', workingPressure: "15 (2175)", flowRate: "25 (6.6)",  burstP1: "45 (6525)", burstP2: "45 (6525)", burstP3: "45 (6525)" },
      { sizeMm: "12.5", sizeInch: '1/2"', workingPressure: "15 (2175)", flowRate: "60 (15.9)", burstP1: "45 (6525)", burstP2: "45 (6525)", burstP3: "45 (6525)" },
    ],

    // ── Detail Spec Table ───────────────────────────────────────────────
    detailTable: [
      { bodySize: '1/4"', ratedPressureBar: 15, material: "Brass", tempRange: "-20°C to +125°C" },
      { bodySize: '3/8"', ratedPressureBar: 15, material: "Brass", tempRange: "-20°C to +125°C" },
      { bodySize: '1/2"', ratedPressureBar: 15, material: "Brass", tempRange: "-20°C to +125°C" },
    ],
  },
]
