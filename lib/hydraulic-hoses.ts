export interface HoseSpec {
  label: string
  value: string
}

export interface PartTableRow {
  partNo: string
  dn: number
  /** mm */
  hoseIdMm: number
  /** inches — used for SAE R1-style tables */
  hoseIdIn?: number
  /** mm */
  hoseOdMm: number
  /** inches — used for SAE R1-style tables */
  hoseOdIn?: number
  workingPressureBar?: number
  workingPressurePsi?: number
  maxWorkingPressureBar?: number
  maxWorkingPressurePsi?: number
  minBurstPressureBar?: number
  minBurstPressurePsi?: number
  /** mm */
  minBendRadiusMm: number
  /** inches — optional */
  minBendRadiusIn?: number
  uom: string
}

/**
 * "jack" — HOSE ID/OD (mm only), Max Working Pressure, Min Burst Pressure, Min Bend Radius (mm only)
 * "r1"   — Nominal ID/OD (mm + in), Working Pressure, Min Bend Radius (mm + in), no burst pressure
 */
export type PartTableType = "jack" | "r1"

export interface HoseProduct {
  slug: string
  name: string
  shortName: string
  tagline: string
  image: string
  standard: string
  description: string
  features: string[]
  specs: HoseSpec[]
  applications: string[]
  /** Optional verified part-number table from datasheet */
  partTable?: PartTableRow[]
  /** Which column layout to use for the part table */
  partTableType?: PartTableType
  /** Optional highlight note from datasheet */
  highlight?: string
  /** Verified quick-stats for the dark strip — only set when sourced from datasheet */
  quickStats?: { label: string; value: string }[]
}

export const hydraulicHoses: HoseProduct[] = [
  {
    slug: "sae-100-r1",
    name: "SAE 100 R1 – Single Wire Braided Hydraulic Hose",
    shortName: "SAE 100 R1",
    tagline: "Single Wire Braided",
    image: "/images/hydraulic-hoses/sae-100-r1.png",
    standard: "",
    description:
      "The Hydronex SAE 100 R1 is a single wire braided hydraulic hose built with a synthetic rubber tube resistant to hydraulic fluids, reinforced with one braid of high tensile steel wire, and finished with an oil, weather, and abrasion resistant synthetic rubber cover. It is available in 10 sizes from 1/4\" to 2\", with working pressures ranging from 40 to 225 BAR, and operates across a temperature range of -40°C to +100°C (MAX 120°C intermittent).",
    features: [
      "Tube: Synthetic rubber, resistant to hydraulic fluids",
      "Reinforcement: One braid of high tensile steel wire",
      "Cover: Oil, weather & abrasion resistant synthetic rubber",
      "Temperature Range (Medium): -40°C to +100°C (MAX 120°C Intermittent)",
    ],
    specs: [
      { label: "Tube", value: "Synthetic rubber, resistant to hydraulic fluids" },
      { label: "Reinforcement", value: "One braid of high tensile steel wire" },
      { label: "Cover", value: "Oil, weather & abrasion resistant synthetic rubber" },
      { label: "Temperature Range (Medium)", value: "-40°C to +100°C (MAX 120°C Intermittent)" },
    ],
    applications: [],
    partTableType: "r1",
    partTable: [
      { partNo: 'R1-1/4"',   dn: 6,  hoseIdMm: 6.4,  hoseIdIn: 0.25, hoseOdMm: 14.1, hoseOdIn: 0.56, workingPressureBar: 225, workingPressurePsi: 3250,  minBendRadiusMm: 100, minBendRadiusIn: 3.94, uom: "Meter" },
      { partNo: 'R1-5/16"',  dn: 8,  hoseIdMm: 7.9,  hoseIdIn: 0.31, hoseOdMm: 15.7, hoseOdIn: 0.62, workingPressureBar: 215, workingPressurePsi: 3125,  minBendRadiusMm: 115, minBendRadiusIn: 4.53, uom: "Meter" },
      { partNo: 'R1-3/8"',   dn: 10, hoseIdMm: 9.5,  hoseIdIn: 0.38, hoseOdMm: 18.1, hoseOdIn: 0.71, workingPressureBar: 180, workingPressurePsi: 2600,  minBendRadiusMm: 130, minBendRadiusIn: 5.12, uom: "Meter" },
      { partNo: 'R1-1/2"',   dn: 12, hoseIdMm: 12.7, hoseIdIn: 0.5,  hoseOdMm: 21.4, hoseOdIn: 0.84, workingPressureBar: 160, workingPressurePsi: 2300,  minBendRadiusMm: 180, minBendRadiusIn: 7.09, uom: "Meter" },
      { partNo: 'R1-5/8"',   dn: 16, hoseIdMm: 15.9, hoseIdIn: 0.62, hoseOdMm: 24.5, hoseOdIn: 0.96, workingPressureBar: 130, workingPressurePsi: 1900,  minBendRadiusMm: 200, minBendRadiusIn: 7.87, uom: "Meter" },
      { partNo: 'R1-3/4"',   dn: 19, hoseIdMm: 19,   hoseIdIn: 0.75, hoseOdMm: 28.5, hoseOdIn: 1.12, workingPressureBar: 105, workingPressurePsi: 1525,  minBendRadiusMm: 240, minBendRadiusIn: 9.45, uom: "Meter" },
      { partNo: 'R1-1"',     dn: 25, hoseIdMm: 25.4, hoseIdIn: 1,    hoseOdMm: 36.6, hoseOdIn: 1.44, workingPressureBar: 88,  workingPressurePsi: 1275,  minBendRadiusMm: 300, minBendRadiusIn: 11.81, uom: "Meter" },
      { partNo: 'R1-1.1/4"', dn: 31, hoseIdMm: 31.8, hoseIdIn: 1.25, hoseOdMm: 44.8, hoseOdIn: 1.76, workingPressureBar: 63,  workingPressurePsi: 925,   minBendRadiusMm: 420, minBendRadiusIn: 16.54, uom: "Meter" },
      { partNo: 'R1-1.1/2"', dn: 38, hoseIdMm: 38.1, hoseIdIn: 1.5,  hoseOdMm: 52.1, hoseOdIn: 2.05, workingPressureBar: 50,  workingPressurePsi: 725,   minBendRadiusMm: 500, minBendRadiusIn: 19.69, uom: "Meter" },
      { partNo: 'R1-2"',     dn: 51, hoseIdMm: 50.8, hoseIdIn: 2,    hoseOdMm: 65.5, hoseOdIn: 2.58, workingPressureBar: 40,  workingPressurePsi: 580,   minBendRadiusMm: 630, minBendRadiusIn: 24.8,  uom: "Meter" },
    ],
    quickStats: [
      { label: "Max. Working Pressure", value: "225 BAR" },
      { label: "Max. Working Pressure", value: "3,250 PSI" },
      { label: "Temperature Range", value: "-40°C to +100°C" },
      { label: "Available Sizes", value: "1/4\" – 2\"" },
    ],
  },
  {
    slug: "sae-100-r2",
    name: "SAE 100 R2 AT / EN 853 – 2SN (Double Wire Braided)",
    shortName: "SAE 100 R2 AT",
    tagline: "Double Wire Braided",
    image: "/images/hydraulic-hoses/sae-100-r2.png",
    standard: "",
    description:
      "The Hydronex SAE 100 R2 AT is a double wire braided hydraulic hose constructed with a synthetic rubber tube resistant to hydraulic fluids, reinforced with two braids of high tensile steel wire, and finished with an oil, weather, and abrasion resistant synthetic rubber cover. Available in 10 sizes from 1/4\" to 2\", with working pressures ranging from 80 to 400 BAR, it operates across a temperature range of -40°C to +100°C (MAX 120°C intermitted).",
    features: [
      "Tube: Synthetic rubber, resistant to hydraulic fluids",
      "Reinforcement: Two braid of high tensile steel wire",
      "Cover: Oil, weather & abrasion resistant synthetic rubber",
      "Temperature Range (Medium): -40°C to +100°C (MAX 120°C Intermitted)",
    ],
    specs: [
      { label: "Tube", value: "Synthetic rubber, resistant to hydraulic fluids" },
      { label: "Reinforcement", value: "Two braid of high tensile steel wire" },
      { label: "Cover", value: "Oil, weather & abrasion resistant synthetic rubber" },
      { label: "Temperature Range (Medium)", value: "-40°C to +100°C (MAX 120°C Intermitted)" },
    ],
    applications: [],
    partTableType: "r1",
    partTable: [
      { partNo: 'R2-1/4"',   dn: 6,  hoseIdMm: 6.4,  hoseIdIn: 0.25, hoseOdMm: 15.7, hoseOdIn: 0.62, workingPressureBar: 400, workingPressurePsi: 5800, minBendRadiusMm: 100, minBendRadiusIn: 3.94,  uom: "Meter" },
      { partNo: 'R2-5/16"',  dn: 8,  hoseIdMm: 7.9,  hoseIdIn: 0.31, hoseOdMm: 17.3, hoseOdIn: 0.68, workingPressureBar: 350, workingPressurePsi: 5100, minBendRadiusMm: 115, minBendRadiusIn: 4.53,  uom: "Meter" },
      { partNo: 'R2-3/8"',   dn: 10, hoseIdMm: 9.5,  hoseIdIn: 0.38, hoseOdMm: 19.7, hoseOdIn: 0.78, workingPressureBar: 330, workingPressurePsi: 4800, minBendRadiusMm: 130, minBendRadiusIn: 5.12,  uom: "Meter" },
      { partNo: 'R2-1/2"',   dn: 12, hoseIdMm: 12.7, hoseIdIn: 0.5,  hoseOdMm: 23,   hoseOdIn: 0.91, workingPressureBar: 275, workingPressurePsi: 4000, minBendRadiusMm: 180, minBendRadiusIn: 7.09,  uom: "Meter" },
      { partNo: 'R2-5/8"',   dn: 16, hoseIdMm: 15.9, hoseIdIn: 0.62, hoseOdMm: 26.2, hoseOdIn: 1.03, workingPressureBar: 250, workingPressurePsi: 3650, minBendRadiusMm: 200, minBendRadiusIn: 7.87,  uom: "Meter" },
      { partNo: 'R2-3/4"',   dn: 19, hoseIdMm: 19,   hoseIdIn: 0.75, hoseOdMm: 30.1, hoseOdIn: 1.19, workingPressureBar: 215, workingPressurePsi: 3125, minBendRadiusMm: 240, minBendRadiusIn: 9.45,  uom: "Meter" },
      { partNo: 'R2-1"',     dn: 25, hoseIdMm: 25.4, hoseIdIn: 1,    hoseOdMm: 38.9, hoseOdIn: 1.53, workingPressureBar: 165, workingPressurePsi: 2400, minBendRadiusMm: 300, minBendRadiusIn: 11.81, uom: "Meter" },
      { partNo: 'R2-1.1/4"', dn: 31, hoseIdMm: 31.8, hoseIdIn: 1.25, hoseOdMm: 49.5, hoseOdIn: 1.95, workingPressureBar: 125, workingPressurePsi: 1800, minBendRadiusMm: 420, minBendRadiusIn: 16.54, uom: "Meter" },
      { partNo: 'R2-1.1/2"', dn: 38, hoseIdMm: 38.1, hoseIdIn: 1.5,  hoseOdMm: 55.9, hoseOdIn: 2.2,  workingPressureBar: 90,  workingPressurePsi: 1300, minBendRadiusMm: 500, minBendRadiusIn: 19.69, uom: "Meter" },
      { partNo: 'R2-2"',     dn: 51, hoseIdMm: 50.8, hoseIdIn: 2,    hoseOdMm: 68.6, hoseOdIn: 2.7,  workingPressureBar: 80,  workingPressurePsi: 1150, minBendRadiusMm: 630, minBendRadiusIn: 24.8,  uom: "Meter" },
    ],
    quickStats: [
      { label: "Max. Working Pressure", value: "400 BAR" },
      { label: "Max. Working Pressure", value: "5,800 PSI" },
      { label: "Temperature Range", value: "-40°C to +100°C" },
      { label: "Available Sizes", value: "1/4\" – 2\"" },
    ],
  },
  {
    slug: "sae-100-r3",
    name: "SAE 100 R3 – Double Textile Braided Hydraulic Hose",
    shortName: "SAE 100 R3",
    tagline: "Double Textile Braided",
    image: "/images/hydraulic-hoses/sae-100-r3.png",
    standard: "",
    description:
      "The Hydronex SAE 100 R3 is a double textile braided hydraulic hose built with a synthetic rubber tube resistant to hydraulic fluids, reinforced with two textile braids, and finished with an oil, weather, and abrasion resistant synthetic rubber cover. Available in 7 sizes from 1/4\" to 1\", with working pressures ranging from 39 to 87 BAR, it operates across a temperature range of -40°C to +100°C and is suitable for use with petroleum and water based hydraulic fluids.",
    features: [
      "Tube: Synthetic rubber, resistant to hydraulic fluids",
      "Reinforcement: Two Textile Braided",
      "Cover: Oil, weather & abrasion resistant synthetic rubber",
      "Temperature Range (Medium): -40°C to +100°C",
    ],
    specs: [
      { label: "Tube", value: "Synthetic rubber, resistant to hydraulic fluids" },
      { label: "Reinforcement", value: "Two Textile Braided" },
      { label: "Cover", value: "Oil, weather & abrasion resistant synthetic rubber" },
      { label: "Temperature Range (Medium)", value: "-40°C to +100°C" },
    ],
    applications: [],
    highlight: "Suitable for use with petroleum & water based hydraulic fluids.",
    partTableType: "jack",
    partTable: [
      { partNo: 'R1-1/4"',    dn: 6,  hoseIdMm: 6.4,  hoseOdMm: 14.8, maxWorkingPressureBar: 87, maxWorkingPressurePsi: 1262, minBurstPressureBar: 348, minBurstPressurePsi: 5048, minBendRadiusMm: 75,  uom: "Meter" },
      { partNo: 'R1-5/16"',   dn: 8,  hoseIdMm: 7.9,  hoseOdMm: 17.3, maxWorkingPressureBar: 84, maxWorkingPressurePsi: 1218, minBurstPressureBar: 336, minBurstPressurePsi: 4872, minBendRadiusMm: 100, uom: "Meter" },
      { partNo: 'R1-3/8"',    dn: 10, hoseIdMm: 9.5,  hoseOdMm: 19.0, maxWorkingPressureBar: 78, maxWorkingPressurePsi: 1131, minBurstPressureBar: 312, minBurstPressurePsi: 4524, minBendRadiusMm: 100, uom: "Meter" },
      { partNo: 'R1-1/2"',    dn: 12, hoseIdMm: 12.7, hoseOdMm: 23.8, maxWorkingPressureBar: 70, maxWorkingPressurePsi: 1015, minBurstPressureBar: 280, minBurstPressurePsi: 4060, minBendRadiusMm: 125, uom: "Meter" },
      { partNo: 'R1-5/8"',    dn: 16, hoseIdMm: 15.9, hoseOdMm: 26.9, maxWorkingPressureBar: 61, maxWorkingPressurePsi: 885,  minBurstPressureBar: 244, minBurstPressurePsi: 3540, minBendRadiusMm: 140, uom: "Meter" },
      { partNo: 'R1-3/4"**',  dn: 19, hoseIdMm: 19,   hoseOdMm: 31.5, maxWorkingPressureBar: 52, maxWorkingPressurePsi: 754,  minBurstPressureBar: 208, minBurstPressurePsi: 3016, minBendRadiusMm: 150, uom: "Meter" },
      { partNo: 'R1-1"***',   dn: 25, hoseIdMm: 25.4, hoseOdMm: 28.0, maxWorkingPressureBar: 39, maxWorkingPressurePsi: 566,  minBurstPressureBar: 156, minBurstPressurePsi: 2264, minBendRadiusMm: 205, uom: "Meter" },
    ],
    quickStats: [
      { label: "Max. Working Pressure", value: "87 BAR" },
      { label: "Max. Working Pressure", value: "1,262 PSI" },
      { label: "Temperature Range", value: "-40°C to +100°C" },
      { label: "Available Sizes", value: "1/4\" – 1\"" },
    ],
  },
  {
    slug: "sae-100-r6",
    name: "SAE 100 R6 – Single Textile Braided Hydraulic Hose",
    shortName: "SAE 100 R6",
    tagline: "Single Textile Braided",
    image: "/images/hydraulic-hoses/sae-100-r6.png",
    standard: "",
    description:
      "The Hydronex SAE 100 R6 is a single textile braided hydraulic hose built with a synthetic rubber tube resistant to hydraulic fluids, reinforced with one textile braid, and finished with an oil, weather, and abrasion resistant synthetic rubber cover. Available in 11 sizes from 1/4\" to 2\", with working pressures ranging from 14 to 28 BAR, it operates across a temperature range of -40°C to +100°C and is also available in high temperature versions up to 1350°C and intermittent 1490°C in both Black and Blue colour.",
    features: [
      "Tube: Synthetic rubber, resistant to hydraulic fluids",
      "Reinforcement: One Textile Braided",
      "Cover: Oil, weather & abrasion resistant synthetic rubber",
      "Temperature Range (Medium): -40°C to +100°C",
    ],
    specs: [
      { label: "Tube", value: "Synthetic rubber, resistant to hydraulic fluids" },
      { label: "Reinforcement", value: "One Textile Braided" },
      { label: "Cover", value: "Oil, weather & abrasion resistant synthetic rubber" },
      { label: "Temperature Range (Medium)", value: "-40°C to +100°C" },
    ],
    applications: [],
    highlight: "Also available in high temperature up to 1350 C & Intermittent 1490 C in both Black & Blue Colour.",
    partTableType: "jack",
    partTable: [
      { partNo: 'R1-1/4"',     dn: 6,  hoseIdMm: 6.4,  hoseOdMm: 13.0, maxWorkingPressureBar: 28, maxWorkingPressurePsi: 406, minBurstPressureBar: 112, minBurstPressurePsi: 1624, minBendRadiusMm: 65,  uom: "Meter" },
      { partNo: 'R1-5/16"',    dn: 8,  hoseIdMm: 7.9,  hoseOdMm: 14.2, maxWorkingPressureBar: 28, maxWorkingPressurePsi: 406, minBurstPressureBar: 112, minBurstPressurePsi: 1624, minBendRadiusMm: 75,  uom: "Meter" },
      { partNo: 'R1-3/8"',     dn: 10, hoseIdMm: 9.5,  hoseOdMm: 15.7, maxWorkingPressureBar: 28, maxWorkingPressurePsi: 406, minBurstPressureBar: 112, minBurstPressurePsi: 1624, minBendRadiusMm: 75,  uom: "Meter" },
      { partNo: 'R1-1/2"',     dn: 12, hoseIdMm: 12.7, hoseOdMm: 19.7, maxWorkingPressureBar: 28, maxWorkingPressurePsi: 406, minBurstPressureBar: 112, minBurstPressurePsi: 1624, minBendRadiusMm: 100, uom: "Meter" },
      { partNo: 'R1-5/8"',     dn: 16, hoseIdMm: 15.9, hoseOdMm: 23.2, maxWorkingPressureBar: 24, maxWorkingPressurePsi: 348, minBurstPressureBar: 96,  minBurstPressurePsi: 1392, minBendRadiusMm: 125, uom: "Meter" },
      { partNo: 'R1-3/4"**',   dn: 19, hoseIdMm: 19,   hoseOdMm: 26.0, maxWorkingPressureBar: 21, maxWorkingPressurePsi: 305, minBurstPressureBar: 84,  minBurstPressurePsi: 1220, minBendRadiusMm: 150, uom: "Meter" },
      { partNo: 'R6-7/8"**',   dn: 22, hoseIdMm: 22,   hoseOdMm: 29.5, maxWorkingPressureBar: 15, maxWorkingPressurePsi: 218, minBurstPressureBar: 60,  minBurstPressurePsi: 872,  minBendRadiusMm: 165, uom: "Meter" },
      { partNo: 'R1-1"**',     dn: 25, hoseIdMm: 25.4, hoseOdMm: 33.1, maxWorkingPressureBar: 15, maxWorkingPressurePsi: 218, minBurstPressureBar: 60,  minBurstPressurePsi: 872,  minBendRadiusMm: 177, uom: "Meter" },
      { partNo: 'R1-1.1/4"**', dn: 31, hoseIdMm: 31.8, hoseOdMm: 43.0, maxWorkingPressureBar: 14, maxWorkingPressurePsi: 203, minBurstPressureBar: 56,  minBurstPressurePsi: 812,  minBendRadiusMm: 225, uom: "Meter" },
      { partNo: 'R1-1.1/2"**', dn: 38, hoseIdMm: 38.1, hoseOdMm: 50.5, maxWorkingPressureBar: 14, maxWorkingPressurePsi: 203, minBurstPressureBar: 56,  minBurstPressurePsi: 812,  minBendRadiusMm: 300, uom: "Meter" },
      { partNo: 'R1-2"**',     dn: 51, hoseIdMm: 50.8, hoseOdMm: 63.5, maxWorkingPressureBar: 14, maxWorkingPressurePsi: 203, minBurstPressureBar: 56,  minBurstPressurePsi: 812,  minBendRadiusMm: 400, uom: "Meter" },
    ],
    quickStats: [
      { label: "Max. Working Pressure", value: "28 BAR" },
      { label: "Max. Working Pressure", value: "406 PSI" },
      { label: "Temperature Range", value: "-40°C to +100°C" },
      { label: "Available Sizes", value: "1/4\" – 2\"" },
    ],
  },
  {
    slug: "exceed-en-857-2sc",
    name: "EXCEED EN 857 – 2SC (Extra High Pressure)",
    shortName: "EXCEED EN 857 2SC",
    tagline: "Extra High Pressure",
    image: "/images/hydraulic-hoses/exceed-en-857-2sc.png",
    standard: "",
    description:
      "The Hydronex EXCEED EN 857 2SC is an extra high pressure hydraulic hose built with a synthetic rubber tube resistant to hydraulic fluids, reinforced with two braids of high tensile steel wire, and finished with a DURA TUFF Synthetic, MSHA Approved cover. Available in 10 sizes from 1/4\" to 2\", with working pressures ranging from 110 to 450 BAR, it operates across a temperature range of -40°C to +126°C.",
    features: [
      "Tube: Synthetic Rubber, resistant to hydraulic fluids",
      "Reinforcement: Two braid of high tensile steel wire",
      "Cover: DURA TUFF Synthetic, MSHA Approved",
      "Temperature Range (Medium): -40°C to +126°C",
    ],
    specs: [
      { label: "Tube", value: "Synthetic Rubber, resistant to hydraulic fluids" },
      { label: "Reinforcement", value: "Two braid of high tensile steel wire" },
      { label: "Cover", value: "DURA TUFF Synthetic, MSHA Approved" },
      { label: "Temperature Range (Medium)", value: "-40°C to +126°C" },
    ],
    applications: [],
    partTableType: "r1",
    partTable: [
      { partNo: 'EHP-1/4"',   dn: 6,  hoseIdMm: 6.4,  hoseIdIn: 0.25, hoseOdMm: 14.2, hoseOdIn: 0.56, workingPressureBar: 450, workingPressurePsi: 6525, minBendRadiusMm: 33,  minBendRadiusIn: 1.3,  uom: "Meter" },
      { partNo: 'EHP-5/16"',  dn: 8,  hoseIdMm: 7.9,  hoseIdIn: 0.31, hoseOdMm: 16,   hoseOdIn: 0.63, workingPressureBar: 400, workingPressurePsi: 5800, minBendRadiusMm: 38,  minBendRadiusIn: 1.5,  uom: "Meter" },
      { partNo: 'EHP-3/8"',   dn: 10, hoseIdMm: 9.5,  hoseIdIn: 0.38, hoseOdMm: 18.3, hoseOdIn: 0.72, workingPressureBar: 400, workingPressurePsi: 5800, minBendRadiusMm: 42,  minBendRadiusIn: 1.65, uom: "Meter" },
      { partNo: 'EHP-1/2"',   dn: 12, hoseIdMm: 12.7, hoseIdIn: 0.5,  hoseOdMm: 21.5, hoseOdIn: 0.85, workingPressureBar: 360, workingPressurePsi: 5220, minBendRadiusMm: 60,  minBendRadiusIn: 2.36, uom: "Meter" },
      { partNo: 'EHP-5/8"',   dn: 16, hoseIdMm: 15.9, hoseIdIn: 0.62, hoseOdMm: 24.7, hoseOdIn: 0.97, workingPressureBar: 350, workingPressurePsi: 5075, minBendRadiusMm: 68,  minBendRadiusIn: 2.68, uom: "Meter" },
      { partNo: 'EHP-3/4"',   dn: 19, hoseIdMm: 19,   hoseIdIn: 0.75, hoseOdMm: 28.6, hoseOdIn: 1.13, workingPressureBar: 330, workingPressurePsi: 4785, minBendRadiusMm: 80,  minBendRadiusIn: 3.15, uom: "Meter" },
      { partNo: 'EHP-1"',     dn: 25, hoseIdMm: 25.4, hoseIdIn: 1,    hoseOdMm: 36.6, hoseOdIn: 1.44, workingPressureBar: 280, workingPressurePsi: 4060, minBendRadiusMm: 150, minBendRadiusIn: 5.9,  uom: "Meter" },
      { partNo: 'EHP-1.1/4"', dn: 31, hoseIdMm: 31.8, hoseIdIn: 1.25, hoseOdMm: 44.3, hoseOdIn: 1.74, workingPressureBar: 172, workingPressurePsi: 2500, minBendRadiusMm: 210, minBendRadiusIn: 8.27, uom: "Meter" },
      { partNo: 'EHP-1.1/2"', dn: 38, hoseIdMm: 38.1, hoseIdIn: 1.5,  hoseOdMm: 52.8, hoseOdIn: 2.08, workingPressureBar: 138, workingPressurePsi: 2000, minBendRadiusMm: 250, minBendRadiusIn: 9.84, uom: "Meter" },
      { partNo: 'EHP-2"',     dn: 51, hoseIdMm: 50.8, hoseIdIn: 2,    hoseOdMm: 65.5, hoseOdIn: 2.58, workingPressureBar: 110, workingPressurePsi: 1600, minBendRadiusMm: 315, minBendRadiusIn: 12.4, uom: "Meter" },
    ],
    quickStats: [
      { label: "Max. Working Pressure", value: "450 BAR" },
      { label: "Max. Working Pressure", value: "6,525 PSI" },
      { label: "Temperature Range", value: "-40°C to +126°C" },
      { label: "Available Sizes", value: "1/4\" – 2\"" },
    ],
  },
  {
    slug: "jack-hose-725-bar",
    name: "Jack Hose – 725 Bar Working Pressure",
    shortName: "Jack Hose 725 Bar",
    tagline: "Ultra-High Pressure",
    image: "/images/hydraulic-hoses/jack-hose-725-bar.png",
    standard: "",
    description:
      "The Hydronex Jack Hose is purpose-built for hydraulic jacking systems, delivering a maximum working pressure of 725 BAR (10,513 PSI). Its tube is made from synthetic rubber resistant to hydraulic fluids, reinforced with two braids of high tensile steel wire, and finished with an oil, weather, and abrasion resistant synthetic rubber cover. Available in 1/4\" and 3/8\" sizes, it operates across a temperature range of -40°C to +50°C.",
    features: [
      "Tube: Synthetic rubber, resistant to hydraulic fluids",
      "Reinforcement: Two braid of high tensile steel wire",
      "Cover: Oil, weather & abrasion resistant synthetic rubber",
      "Temperature Range (Medium): -40°C to +50°C",
      "Max. Working Pressure: 725 BAR / 10,513 PSI",
      "Ideal for hydraulic jacking systems",
    ],
    specs: [
      { label: "Tube", value: "Synthetic rubber, resistant to hydraulic fluids" },
      { label: "Reinforcement", value: "Two braid of high tensile steel wire" },
      { label: "Cover", value: "Oil, weather & abrasion resistant synthetic rubber" },
      { label: "Temperature Range (Medium)", value: "-40°C to +50°C" },
    ],
    applications: [],
    highlight: "Ideal for hydraulic jacking system.",
    partTableType: "jack",
    partTable: [
      {
        partNo: 'JACK-1/4"',
        dn: 12,
        hoseIdMm: 6.4,
        hoseOdMm: 14.2,
        maxWorkingPressureBar: 725,
        maxWorkingPressurePsi: 10513,
        minBurstPressureBar: 1450,
        minBurstPressurePsi: 21025,
        minBendRadiusMm: 100,
        uom: "Meter",
      },
      {
        partNo: 'JACK-3/8"',
        dn: 16,
        hoseIdMm: 9.5,
        hoseOdMm: 17.5,
        maxWorkingPressureBar: 725,
        maxWorkingPressurePsi: 10513,
        minBurstPressureBar: 1450,
        minBurstPressurePsi: 21025,
        minBendRadiusMm: 130,
        uom: "Meter",
      },
    ],
    quickStats: [
      { label: "Max. Working Pressure", value: "725 BAR" },
      { label: "Max. Working Pressure", value: "10,513 PSI" },
      { label: "Min. Burst Pressure", value: "1,450 BAR" },
      { label: "Temperature Range", value: "-40°C to +50°C" },
    ],
  },
]

export function getHoseBySlug(slug: string): HoseProduct | undefined {
  return hydraulicHoses.find((h) => h.slug === slug)
}
