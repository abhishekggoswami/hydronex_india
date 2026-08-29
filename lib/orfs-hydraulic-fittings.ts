export interface ORFSFittingProduct {
  id: number
  slug: string
  name: string
  shortName?: string
  code: string
  image?: string
  description?: string
  material?: string
  surfaceTreat?: string
  application?: string
  features?: string[]
  specs?: { label: string; value: string }[]
  applications?: string[]
  partTable?: {
    partNo: string
    threadE: string
    dn: number
    dash: string
    a?: number
    c: number
    s?: number
    s1?: number
    s2?: number
  }[]
  partTableAlt?: {
    sinoPulsePartNo: string
    parkerPartNo?: string
    thread?: string
    threadE?: string
    flangeSize?: string
    hoseID?: string
    dn?: number
    dash?: number
    a?: number
    c?: number
    h?: number
    e?: number
    w?: string
    s?: number
    s1?: number
    s2?: number
    b?: number
  }[]
  tableNote?: string
}

// ORFS (O-Ring Face Seal) Hydraulic Fittings — 26 products.
export const orfsHydraulicFittings: ORFSFittingProduct[] = [
  {
    id: 1,
    slug: "orfs-male-o-ring-seal-14211",
    name: "ORFS MALE O-RING SEAL (14211)",
    shortName: "ORFS Male O-Ring Seal 14211",
    code: "14211",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ORFS%20MALE%20O-RING%20SEAL%20%2814211%29-L1Q4FSqCEA6KqMvEGxb3yoK19eG32L.png",
    description:
      "Straight ORFS male O-ring seal hydraulic hose fitting. The flat sealing face with captive O-ring delivers leak-free, high-vibration-resistant connections for demanding high-pressure hydraulic systems.",
    material: "carbon steel, stainless steel, brass",
    surfaceTreat: "galvanize Yellow Zinc, Black Zinc, Cr6 free Zinc, and Nickel",
    application:
      "widely used in the hydraulic and fluid conveying system of machinery, oilfield, mine, building, transportation, food, and other industries.",
    features: [
      "O-Ring Face Seal (ORFS) design for superior leak-free sealing",
      "Excellent resistance to vibration and pressure cycling",
      "Flat face with captive O-ring per SAE J1453",
      "High-pressure rated for demanding hydraulic systems",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "ORFS / SAE J1453" },
      { label: "Design", value: "Straight Male O-Ring Seal" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel" },
      { label: "Sealing", value: "Flat Face with Captive O-Ring" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTable: [
      { partNo: "14211-04-04", threadE: "9/16″X18", dn: 6, dash: "04", c: 9.8, s: 17 },
      { partNo: "14211-06-04", threadE: "11/16″X16", dn: 6, dash: "04", c: 11.2, s: 19 },
      { partNo: "14211-06-06", threadE: "11/16″X16", dn: 10, dash: "06", c: 11.2, s: 19 },
      { partNo: "14211-08-06", threadE: "13/16″X16", dn: 10, dash: "06", c: 12.8, s: 22 },
      { partNo: "14211-08-08", threadE: "13/16″X16", dn: 12, dash: "08", c: 12.8, s: 22 },
      { partNo: "14211-08-10", threadE: "13/16″X16", dn: 16, dash: "10", c: 12.8, s: 22 },
      { partNo: "14211-10-08", threadE: "1″ X14", dn: 12, dash: "08", c: 15.5, s: 27 },
      { partNo: "14211-10-10", threadE: "1″ X14", dn: 16, dash: "10", c: 15.5, s: 27 },
      { partNo: "14211-12-08", threadE: "1.3/16″ X12", dn: 12, dash: "08", c: 17, s: 32 },
      { partNo: "14211-12-10", threadE: "1.3/16″ X12", dn: 16, dash: "10", c: 17, s: 32 },
      { partNo: "14211-12-12", threadE: "1.3/16″ X12", dn: 20, dash: "12", c: 17, s: 32 },
      { partNo: "14211-16-12", threadE: "1.7/16″ X12", dn: 20, dash: "12", c: 17.5, s: 38 },
      { partNo: "14211-16-16", threadE: "1.7/16″ X12", dn: 25, dash: "16", c: 17.5, s: 38 },
      { partNo: "14211-20-20", threadE: "1.11/16″ X12", dn: 32, dash: "20", c: 17.5, s: 46 },
      { partNo: "14211-24-24", threadE: "2″ X12", dn: 38, dash: "24", c: 17.5, s: 55 },
    ],
  },
  {
    id: 2,
    slug: "45-orfs-female-flat-seal-24241-t",
    name: "45° ORFS FEMALE FLAT SEAL (24241-T)",
    shortName: "45° ORFS Female Flat Seal 24241-T",
    code: "24241-T",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/45%C2%B0%20ORFS%20FEMALE%20FLAT%20SEAL%20%2824241-T%29-0fzr6YbUUVQb4wYGByFExNlAqmLRO3.png",
    description:
      "45° ORFS female flat seal hydraulic hose fitting. The angled elbow design with flat-face O-ring seal provides leak-free routing in tight spaces for high-pressure hydraulic applications.",
    material: "carbon steel, stainless steel, brass",
    surfaceTreat: "galvanize Yellow Zinc, Black Zinc, Cr6 free Zinc, and Nickel",
    application:
      "widely used in the hydraulic and fluid conveying system of machinery, oilfield, mine, building, transportation, food, and other industries.",
    features: [
      "45° elbow design for tight-space routing",
      "ORFS flat-face seal for leak-free connections",
      "Excellent vibration and pressure-cycle resistance",
      "Conforms to SAE J1453 / ISO 8434-3",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "ORFS / SAE J1453" },
      { label: "Design", value: "45° Female Flat Seal" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel" },
      { label: "Sealing", value: "Flat Face with O-Ring" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTable: [
      { partNo: "24241-16-16T", threadE: "1.7/16″ X12", dn: 25, dash: "16", c: 14.8, s: 41, h: 29.7 },
      { partNo: "24241-24-24T", threadE: "2″ X12", dn: 38, dash: "24", c: 14.8, s: 60, h: 37.7 },
    ],
  },
  {
    id: 3,
    slug: "45-orfs-female-flat-seal-24241",
    name: "45° ORFS FEMALE FLAT SEAL (24241)",
    shortName: "45° ORFS Female Flat Seal 24241",
    code: "24241",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/45%C2%B0%20ORFS%20FEMALE%20FLAT%20SEAL%20%2824241%29-3MS0ZS8zHMDpdDATePtH0rebupgvxV.png",
    description:
      "45° ORFS female flat seal hydraulic hose fitting. The angled swivel elbow with flat-face O-ring seal enables leak-free routing around obstructions in high-pressure hydraulic systems.",
    material: "carbon steel, stainless steel, brass",
    surfaceTreat: "galvanize Yellow Zinc, Black Zinc, Cr6 free Zinc, and Nickel",
    application:
      "widely used in the hydraulic and fluid conveying system of machinery, oilfield, mine, building, transportation, food, and other industries.",
    features: [
      "45° elbow design for routing around obstructions",
      "ORFS flat-face seal for leak-free connections",
      "High resistance to vibration and pressure cycling",
      "Conforms to SAE J1453 / ISO 8434-3",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "ORFS / SAE J1453" },
      { label: "Design", value: "45° Female Flat Seal" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel" },
      { label: "Sealing", value: "Flat Face with O-Ring" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTable: [
      { partNo: "24241-04-04", threadE: "9/16″X18", dn: 6, dash: "04", c: 8.5, s: 19, h: 23.4 },
      { partNo: "24241-06-06", threadE: "11/16″X16", dn: 10, dash: "06", c: 10, s: 22, h: 27.4 },
      { partNo: "24241-08-08", threadE: "13/16″X16", dn: 12, dash: "08", c: 11, s: 27, h: 30.4 },
      { partNo: "24241-10-10", threadE: "1″ X14", dn: 16, dash: "10", c: 13, s: 30, h: 34.9 },
      { partNo: "24241-12-12", threadE: "1.3/16″ X12", dn: 20, dash: "12", c: 15, s: 36, h: 39.5 },
      { partNo: "24241-20-20", threadE: "1.11/16″ X12", dn: 32, dash: "20", c: 15, s: 50, h: 46.1 },
    ],
  },
  {
    id: 4,
    slug: "14211f-male-orfs-flat-face-o-ring-iso12151-1-s",
    name: "14211F MALE ORFS FLAT FACE O-RING ISO12151-1-S",
    shortName: "14211F Male ORFS Flat Face O-Ring",
    code: "14211F",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14211F%20MALE%20ORFS%20FLAT%20FACE%20O-RING%20ISO12151-1-S-Y2nRxFRV7xuy48UNLzkx0WGrB7iEGd.png",
    description:
      "Straight ORFS male flat-face O-ring hydraulic hose fitting manufactured to ISO 12151-1. The flat sealing face with captive O-ring delivers reliable leak-free, high-vibration-resistant connections.",
    material: "carbon steel, stainless steel",
    surfaceTreat: "white zinc, yellow zinc, Cr6 free zinc",
    application:
      "widely used in the hydraulic and fluid conveying systems of construction machinery, agriculture, mining, and industrial equipment.",
    features: [
      "Male ORFS flat-face O-ring design",
      "Manufactured to ISO 12151-1 standard",
      "Superior leak-free sealing performance",
      "High resistance to vibration and pressure cycling",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "ORFS / ISO 12151-1" },
      { label: "Design", value: "Straight Male Flat Face O-Ring" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel" },
      { label: "Sealing", value: "Flat Face with Captive O-Ring" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTableAlt: [
      { sinoPulsePartNo: "14211F-4-4", parkerPartNo: "1JO43-4-4", thread: "9/16x18", hoseID: "1/4", a: 44, h: "5/8", b: 25 },
      { sinoPulsePartNo: "14211F-6-6", parkerPartNo: "1JO43-6-6", thread: "11/16x16", hoseID: "3/8", a: 53, h: "3/4", b: 27 },
      { sinoPulsePartNo: "14211F-8-6", parkerPartNo: "1JO43-8-6", thread: "13/16x16", hoseID: "3/8", a: 56, h: "7/8", b: 30 },
      { sinoPulsePartNo: "14211F-8-8", parkerPartNo: "1JO43-8-8", thread: "13/16x16", hoseID: "1/2", a: 61, h: "7/8", b: 30 },
      { sinoPulsePartNo: "14211F-10-8", parkerPartNo: "1JO43-10-8", thread: "1x14", hoseID: "1/2", a: 66, h: "1-1/16", b: 34 },
      { sinoPulsePartNo: "14211F-10-10", parkerPartNo: "1JO43-10-10", thread: "1x14", hoseID: "5/8", a: 69, h: "1-1/16", b: 34 },
      { sinoPulsePartNo: "14211F-12-10", parkerPartNo: "1JO43-12-10", thread: "1-3/16x12", hoseID: "5/8", a: 73, h: "1-1/4", b: 37 },
      { sinoPulsePartNo: "14211F-12-12", parkerPartNo: "1JO43-12-12", thread: "1-3/16x12", hoseID: "3/4", a: 74, h: "1-1/4", b: 37 },
      { sinoPulsePartNo: "14211F-16-12", parkerPartNo: "1JO43-16-12", thread: "1-7/16x12", hoseID: "3/4", a: 74, h: "1-1/2", b: 38 },
      { sinoPulsePartNo: "14211F-16-16", parkerPartNo: "1JO43-16-16", thread: "1-7/16x12", hoseID: "1", a: 84, h: "1-1/2", b: 42 },
      { sinoPulsePartNo: "14211F-20-20", parkerPartNo: "1JO43-20-20", thread: "1-11/16x12", hoseID: "1-1/4", a: 84, h: "1-3/4", b: 41 },
    ],
  },
  {
    id: 5,
    slug: "242221f-female-swivel-orfs-flat-face-22-5-elbow-iso-8434-3",
    name: "242221F FEMALE SWIVEL ORFS FLAT FACE 22.5° ELBOW ISO 8434-3",
    shortName: "242221F Female Swivel ORFS 22.5° Elbow",
    code: "242221F",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/242221F%20FEMALE%20SWIVEL%20ORFS%20FLAT%20FACE%2022.5%C2%B0%20ELBOW%20ISO%208434-3-atQw23lOrkhALkUpWuF3bqxkk8vlQw.png",
    description:
      "22.5° ORFS female swivel flat-face elbow hydraulic hose fitting per ISO 8434-3. The swivel nut and flat-face O-ring seal allow easy alignment and leak-free routing in confined spaces.",
    material: "carbon steel, stainless steel",
    surfaceTreat: "white zinc, yellow zinc, Cr6 free zinc",
    application:
      "widely used in the hydraulic and fluid conveying systems of construction machinery, agriculture, mining, and industrial equipment.",
    features: [
      "22.5° swivel elbow for precise alignment",
      "ORFS flat-face seal for leak-free connections",
      "Manufactured to ISO 8434-3 standard",
      "Swivel nut simplifies installation",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "ORFS / ISO 8434-3" },
      { label: "Design", value: "22.5° Female Swivel Flat Face Elbow" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel" },
      { label: "Sealing", value: "Flat Face with O-Ring" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTableAlt: [
      { sinoPulsePartNo: "24222IF-8-8", parkerPartNo: "1JC43-8-8", thread: "13/16x16", hoseID: "1/2", a: 78, e: 10, w: "15/16", b: 46 },
    ],
  },
  {
    id: 6,
    slug: "24211d-f-female-swivel-orfs-flat-face-short-iso-12151-1-swsa",
    name: "24211D-F FEMALE SWIVEL ORFS FLAT FACE -SHORT  ISO 12151-1 SWSA",
    shortName: "24211D-F Female Swivel ORFS Short",
    code: "24211D-F",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24211D-F%20FEMALE%20SWIVEL%20ORFS%20FLAT%20FACE%20-SHORT%20%20ISO%2012151-1%20SWSA-gYOixQ2XZTUqA5yPv25eLB4233Xb5X.png",
    description:
      "Straight ORFS female swivel flat-face hydraulic hose fitting (short, SWSA) per ISO 12151-1. The swivel nut with flat-face O-ring seal provides easy alignment and leak-free, high-pressure connections.",
    material: "carbon steel, stainless steel",
    surfaceTreat: "white zinc, yellow zinc, Cr6 free zinc",
    application:
      "widely used in the hydraulic and fluid conveying systems of construction machinery, agriculture, mining, and industrial equipment.",
    features: [
      "Female swivel ORFS flat-face design (short / SWSA)",
      "Manufactured to ISO 12151-1 standard",
      "Swivel nut simplifies installation and alignment",
      "Superior leak-free sealing under vibration",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "ORFS / ISO 12151-1 SWSA" },
      { label: "Design", value: "Straight Female Swivel Flat Face (Short)" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel" },
      { label: "Sealing", value: "Flat Face with O-Ring" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTableAlt: [
      { sinoPulsePartNo: "24211D-4-4F", parkerPartNo: "1JC43-4-4", thread: "9/16x18", hoseID: "1/4", a: 41, h: "9/16", w: "11/16", b: 22 },
      { sinoPulsePartNo: "24211D-4-4-F-SM", parkerPartNo: "1JC43-4-4-SM", thread: "9/16x18", hoseID: "1/4", a: 41, h: "17 mm", w: "17 mm", b: 22 },
      { sinoPulsePartNo: "24211D-4-6F", parkerPartNo: "1JC43-4-6", thread: "9/16x18", hoseID: "3/8", a: 48, h: "11/16", w: "11/16", b: 22 },
      { sinoPulsePartNo: "24211D-6-4F", parkerPartNo: "1JC43-6-4", thread: "11/16x16", hoseID: "1/4", a: 42, h: "11/16", w: "13/16", b: 23 },
      { sinoPulsePartNo: "24211D-6-4-F-SM", parkerPartNo: "1JC43-6-4-SM", thread: "11/16x16", hoseID: "1/4", a: 42, h: "17 mm", w: "22 mm", b: 23 },
      { sinoPulsePartNo: "24211D-6-5F", parkerPartNo: "1JC43-6-5", thread: "11/16x16", hoseID: "5/16", a: 42, h: "11/16", w: "13/16", b: 23 },
      { sinoPulsePartNo: "24211D-6-6F", parkerPartNo: "1JC43-6-6", thread: "11/16x16", hoseID: "3/8", a: 49, h: "11/16", w: "13/16", b: 23 },
      { sinoPulsePartNo: "24211D-6-6-F-SM", parkerPartNo: "1JC43-6-6-SM", thread: "11/16x16", hoseID: "3/8", a: 49, h: "19 mm", w: "22 mm", b: 23 },
      { sinoPulsePartNo: "24211D-8-6F", parkerPartNo: "1JC43-8-6", thread: "13/16x16", hoseID: "3/8", a: 51, h: "13/16", w: "15/16", b: 25 },
      { sinoPulsePartNo: "24211D-8-6-F-SM", parkerPartNo: "1JC43-8-6-SM", thread: "13/16x16", hoseID: "3/8", a: 51, h: "19 mm", w: "24 mm", b: 25 },
      { sinoPulsePartNo: "24211D-8-8F", parkerPartNo: "1JC43-8-8", thread: "13/16x16", hoseID: "1/2", a: 56, h: "13/16", w: "15/16", b: 24 },
      { sinoPulsePartNo: "24211D-8-8-F-SM", parkerPartNo: "1JC43-8-8-SM", thread: "13/16x16", hoseID: "1/2", a: 56, h: "22 mm", w: "24 mm", b: 24 },
      { sinoPulsePartNo: "24211D-10-8F", parkerPartNo: "1JC43-10-8", thread: "1x14", hoseID: "1/2", a: 58, h: "15/16", w: "1-1/8", b: 26 },
      { sinoPulsePartNo: "24211D-10-8-F-SM", parkerPartNo: "1JC43-10-8-SM", thread: "1x14", hoseID: "1/2", a: 58, h: "24 mm", w: "30 mm", b: 26 },
      { sinoPulsePartNo: "24211D-10-10F", parkerPartNo: "1JC43-10-10", thread: "1x14", hoseID: "5/8", a: 63, h: "15/16", w: "1-1/8", b: 27 },
      { sinoPulsePartNo: "24211D-10-10-F-SM", parkerPartNo: "1JC43-10-10-SM", thread: "1x14", hoseID: "5/8", a: 63, h: "24 mm", w: "30 mm", b: 27 },
      { sinoPulsePartNo: "24211D-12-8F", parkerPartNo: "1JC43-12-8", thread: "1-3/16x12", hoseID: "1/2", a: 63, h: "1-1/8", w: "1-3/8", b: 31 },
      { sinoPulsePartNo: "24211D-12-10F", parkerPartNo: "1JC43-12-10", thread: "1-3/16x12", hoseID: "5/8", a: 68, h: "1-1/8", w: "1-3/8", b: 31 },
      { sinoPulsePartNo: "24211D-12-10-SM", parkerPartNo: "1JC43-12-10-SM", thread: "1-3/16x12", hoseID: "5/8", a: 68, h: "32 mm", w: "36 mm", b: 31 },
      { sinoPulsePartNo: "24211D-12-12F", parkerPartNo: "1JC43-12-12", thread: "1-3/16x12", hoseID: "3/4", a: 68, h: "1-1/8", w: "1-3/8", b: 31 },
      { sinoPulsePartNo: "24211D-12-12-F-SM", parkerPartNo: "1JC43-12-12-SM", thread: "1-3/16x12", hoseID: "3/4", a: 68, h: "32 mm", w: "36 mm", b: 31 },
      { sinoPulsePartNo: "24211D-16-16F", parkerPartNo: "1JC43-16-16", thread: "1-7/16x12", hoseID: "1", a: 76, h: "1-5/16", w: "1-3/8", b: 35 },
      { sinoPulsePartNo: "24211D-16-12F", parkerPartNo: "1JC43-16-12", thread: "1-7/16x12", hoseID: "3/4", a: 72, h: "1-3/8", w: "1-5/8", b: 35 },
      { sinoPulsePartNo: "24211D-16-16F", parkerPartNo: "1JC43-16-16", thread: "1-7/16x12", hoseID: "1", a: 80, h: "1-3/8", w: "1-5/8", b: 39 },
      { sinoPulsePartNo: "24211D-20-20F", parkerPartNo: "1JC43-20-20", thread: "1-11/16x12", hoseID: "1-1/4", a: 83, h: "1-7/8", w: "1-7/8", b: 40 },
    ],
  },
  {
    id: 7,
    slug: "90-orfs-female-flat-seal-24291-t",
    name: "90° ORFS FEMALE FLAT SEAL (24291-T)",
    shortName: "90° ORFS Female Flat Seal 24291-T",
    code: "24291-T",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/90%C2%B0%20ORFS%20FEMALE%20FLAT%20SEAL%20%2824291-T%29-CUpEKivg6kVmzw07GrIsSNeuOMQGRv.png",
    description:
      "90° ORFS female flat seal hydraulic hose fitting. The right-angle elbow with flat-face O-ring seal enables compact, leak-free routing in tight hydraulic installations.",
    material: "carbon steel, stainless steel, brass",
    surfaceTreat: "galvanize Yellow Zinc, Black Zinc, Cr6 free Zinc, and Nickel",
    application:
      "widely used in the hydraulic and fluid conveying system of machinery, oilfield, mine, building, transportation, food, and other industries.",
    features: [
      "90° elbow design for compact right-angle routing",
      "ORFS flat-face seal for leak-free connections",
      "High resistance to vibration and pressure cycling",
      "Conforms to SAE J1453 / ISO 8434-3",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "ORFS / SAE J1453" },
      { label: "Design", value: "90° Female Flat Seal" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel" },
      { label: "Sealing", value: "Flat Face with O-Ring" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTable: [
      { partNo: "24291-16-16T", threadE: "1.7/16″ X12", dn: 25, dash: "16", c: 14.8, s: 41, h: 67.5 },
      { partNo: "24291-20-16T", threadE: "1.11/16″ X12", dn: 25, dash: "16", c: 15, s: 50, h: 67.5 },
      { partNo: "24291-24-24T", threadE: "2″ X12", dn: 38, dash: "24", c: 14.8, s: 60, h: 92 },
    ],
  },
  {
    id: 8,
    slug: "24211d-fl-female-swivel-orfs-flat-face-long-iso-12151-1-swsb",
    name: "24211D-FL FEMALE SWIVEL ORFS FLAT FACE -LONG  ISO 12151-1 SWSB",
    shortName: "24211D-FL Female Swivel ORFS Long",
    code: "24211D-FL",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24211D-FL%20FEMALE%20SWIVEL%20ORFS%20FLAT%20FACE%20-LONG%20%20ISO%2012151-1%20SWSB-VQo9avgcIcGmROGPpQ9lWrdYO6QO61.png",
    description:
      "Straight ORFS female swivel flat-face hydraulic hose fitting (long, SWSB) per ISO 12151-1. The extended swivel nut with flat-face O-ring seal provides easy alignment and leak-free, high-pressure connections.",
    material: "carbon steel, stainless steel",
    surfaceTreat: "white zinc, yellow zinc, Cr6 free zinc",
    application:
      "widely used in the hydraulic and fluid conveying systems of construction machinery, agriculture, mining, and industrial equipment.",
    features: [
      "Female swivel ORFS flat-face design (long / SWSB)",
      "Manufactured to ISO 12151-1 standard",
      "Swivel nut simplifies installation and alignment",
      "Superior leak-free sealing under vibration",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "ORFS / ISO 12151-1 SWSB" },
      { label: "Design", value: "Straight Female Swivel Flat Face (Long)" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel" },
      { label: "Sealing", value: "Flat Face with O-Ring" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTableAlt: [
      { sinoPulsePartNo: "24211D-4-4F", parkerPartNo: "1JS43-4-4", thread: "9/16x18", hoseID: "1/4", a: 53, h: "9/16", w: "11/16", b: 34 },
      { sinoPulsePartNo: "24211D-4-6F", parkerPartNo: "1JS43-4-6", thread: "9/16x18", hoseID: "3/8", a: 56, h: "11/16", w: "11/16", b: 30 },
      { sinoPulsePartNo: "24211D-6-4F", parkerPartNo: "1JS43-6-4", thread: "11/16x16", hoseID: "1/4", a: 54, h: "9/16", w: "13/16", b: 35 },
      { sinoPulsePartNo: "24211D-6-6F", parkerPartNo: "1JS43-6-6", thread: "11/16x16", hoseID: "3/8", a: 58, h: "11/16", w: "13/16", b: 32 },
      { sinoPulsePartNo: "24211D-6-8F", parkerPartNo: "1JS43-6-8", thread: "11/16x16", hoseID: "1/2", a: 64, h: "13/16", w: "13/16", b: 31 },
      { sinoPulsePartNo: "24211D-8-4F", parkerPartNo: "1JS43-8-4", thread: "13/16x16", hoseID: "1/4", a: 57, h: "11/16", w: "15/16", b: 38 },
      { sinoPulsePartNo: "24211D-8-6F", parkerPartNo: "1JS43-8-6", thread: "13/16x16", hoseID: "3/8", a: 64, h: "11/16", w: "15/16", b: 38 },
      { sinoPulsePartNo: "24211D-8-8F", parkerPartNo: "1JS43-8-8", thread: "13/16x16", hoseID: "1/2", a: 67, h: "13/16", w: "15/16", b: 35 },
      { sinoPulsePartNo: "24211D-8-10F", parkerPartNo: "1JS43-8-10", thread: "13/16x16", hoseID: "5/8", a: 72, h: "15/16", w: "15/16", b: 35 },
      { sinoPulsePartNo: "24211D-10-6F", parkerPartNo: "1JS43-10-6", thread: "1x14", hoseID: "3/8", a: 67, h: "11/16", w: "1-1/8", b: 41 },
      { sinoPulsePartNo: "24211D-10-8F", parkerPartNo: "1JS43-10-8", thread: "1x14", hoseID: "1/2", a: 73, h: "13/16", w: "1-1/8", b: 41 },
      { sinoPulsePartNo: "24211D-10-10F", parkerPartNo: "1JS43-10-10", thread: "1x14", hoseID: "5/8", a: 78, h: "15/16", w: "1-1/8", b: 42 },
      { sinoPulsePartNo: "24211D-10-12F", parkerPartNo: "1JS43-10-12", thread: "1x14", hoseID: "3/4", a: 78, h: "1-1/16", w: "1-1/8", b: 42 },
      { sinoPulsePartNo: "24211D-12-8F", parkerPartNo: "1JS43-12-8", thread: "1-3/16x12", hoseID: "1/2", a: 74, h: "15/16", w: "1-3/8", b: 42 },
      { sinoPulsePartNo: "24211D-12-10F", parkerPartNo: "1JS43-12-10", thread: "1-3/16x12", hoseID: "5/8", a: 81, h: "1-1/8", w: "1-3/8", b: 44 },
      { sinoPulsePartNo: "24211D-12-12F", parkerPartNo: "1JS43-12-12", thread: "1-3/16x12", hoseID: "3/4", a: 84, h: "1-1/8", w: "1-3/8", b: 47 },
      { sinoPulsePartNo: "24211D-12-16F", parkerPartNo: "1JS43-12-16", thread: "1-3/16x12", hoseID: "1", a: 90, h: "1-5/16", w: "1-3/8", b: 49 },
      { sinoPulsePartNo: "24211D-16-12F", parkerPartNo: "1JS43-16-12", thread: "1-7/16x12", hoseID: "3/4", a: 86, h: "1-3/8", w: "1-5/8", b: 49 },
      { sinoPulsePartNo: "24211D-16-16F", parkerPartNo: "1JS43-16-16", thread: "1-7/16x12", hoseID: "1", a: 92, h: "1-3/8", w: "1-5/8", b: 51 },
      { sinoPulsePartNo: "24211D-16-20F", parkerPartNo: "1JS43-16-20", thread: "1-7/16x12", hoseID: "1-1/4", a: 96, h: "1-3/4", w: "1-5/8", b: 53 },
      { sinoPulsePartNo: "24211D-20-16F", parkerPartNo: "1JS43-20-16", thread: "1-11/16x12", hoseID: "1", a: 92, h: "1-3/8", w: "1-7/8", b: 51 },
      { sinoPulsePartNo: "24211D-20-20F", parkerPartNo: "1JS43-20-20", thread: "1-11/16x12", hoseID: "1-1/4", a: 96, h: "1-3/4", w: "1-7/8", b: 53 },
      { sinoPulsePartNo: "24211D-24-20F", parkerPartNo: "1JS43-24-20", thread: "2x12", hoseID: "1-1/4", a: 99, h: "1-3/4", w: "2-1/4", b: 57 },
      { sinoPulsePartNo: "24211D-24-24F", parkerPartNo: "1JS43-24-24", thread: "2x12", hoseID: "1-1/2", a: 99, h: "1-7/8", w: "2-1/4", b: 65 },
    ],
  },
  {
    id: 9,
    slug: "orfs-female-flat-seal-24211-t",
    name: "ORFS FEMALE FLAT SEAL (24211-T)",
    shortName: "ORFS Female Flat Seal 24211-T",
    code: "24211-T",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ORFS%20FEMALE%20FLAT%20SEAL%20%2824211-T%29-HsRR0qjxOqz0cm7j3E1Bxe9cnzwAcB.png",
    description:
      "Straight ORFS female flat seal hydraulic hose fitting. The flat sealing face with O-ring delivers leak-free, high-vibration-resistant connections for demanding high-pressure hydraulic systems.",
    material: "carbon steel, stainless steel, brass",
    surfaceTreat: "galvanize Yellow Zinc, Black Zinc, Cr6 free Zinc, and Nickel",
    application:
      "widely used in the hydraulic and fluid conveying system of machinery, oilfield, mine, building, transportation, food, and other industries.",
    features: [
      "Straight female ORFS flat-face seal design",
      "Superior leak-free sealing performance",
      "High resistance to vibration and pressure cycling",
      "Conforms to SAE J1453",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "ORFS / SAE J1453" },
      { label: "Design", value: "Straight Female Flat Seal" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel" },
      { label: "Sealing", value: "Flat Face with O-Ring" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTable: [
      { partNo: "24211-06-04T", threadE: "11/16″X16", dn: 6, dash: "04", c: 10, s: 22 },
      { partNo: "24211-08-06T", threadE: "13/16″X16", dn: 10, dash: "06", c: 11, s: 27 },
      { partNo: "24211-12-08T", threadE: "1.3/16″ X12", dn: 12, dash: "08", c: 15, s: 36 },
      { partNo: "24211-12-06T", threadE: "1.3/16″ X12", dn: 10, dash: "06", c: 15, s: 36 },
      { partNo: "24211-16-12T", threadE: "1.7/16″ X12", dn: 20, dash: "12", c: 14.8, s: 41 },
      { partNo: "24211-16-16T", threadE: "1.7/16″ X12", dn: 25, dash: "16", c: 14.8, s: 41 },
      { partNo: "24211-24-24T", threadE: "2″ X12", dn: 38, dash: "24", c: 14.8, s: 60 },
    ],
  },
  {
    id: 10,
    slug: "90-orfs-female-flat-seal-24291",
    name: "90° ORFS FEMALE FLAT SEAL (24291)",
    shortName: "90° ORFS Female Flat Seal 24291",
    code: "24291",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/90%C2%B0%20ORFS%20FEMALE%20FLAT%20SEAL%20%2824291%29-krOXw2Ta4aIWpOMwTaUhUSulQCFhJd.png",
    description:
      "90° ORFS female flat seal hydraulic hose fitting. The right-angle swivel elbow with flat-face O-ring seal enables compact, leak-free routing in tight hydraulic installations.",
    material: "carbon steel, stainless steel, brass",
    surfaceTreat: "galvanize Yellow Zinc, Black Zinc, Cr6 free Zinc, and Nickel",
    application:
      "widely used in the hydraulic and fluid conveying system of machinery, oilfield, mine, building, transportation, food, and other industries.",
    features: [
      "90° elbow design for compact right-angle routing",
      "ORFS flat-face seal for leak-free connections",
      "High resistance to vibration and pressure cycling",
      "Conforms to SAE J1453 / ISO 8434-3",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "ORFS / SAE J1453" },
      { label: "Design", value: "90° Female Flat Seal" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel" },
      { label: "Sealing", value: "Flat Face with O-Ring" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTable: [
      { partNo: "24291-04-04", threadE: "9/16″X18", dn: 6, dash: "04", c: 8.5, s: 19, h: 41 },
      { partNo: "24291-06-06", threadE: "11/16″X16", dn: 10, dash: "06", c: 10, s: 22, h: 49.8 },
      { partNo: "24291-08-08", threadE: "13/16″X16", dn: 12, dash: "08", c: 11, s: 27, h: 57 },
      { partNo: "24291-10-10", threadE: "1″ X14", dn: 16, dash: "10", c: 13, s: 30, h: 66 },
      { partNo: "24291-12-12", threadE: "1.3/16″ X12", dn: 20, dash: "12", c: 15, s: 36, h: 77 },
      { partNo: "24291-20-20", threadE: "1.11/16″ X12", dn: 32, dash: "20", c: 15, s: 50, h: 96 },
    ],
  },
  {
    id: 11,
    slug: "24292f-female-swivel-orfs-flat-face-90-elbow-medium",
    name: "24292F FEMALE SWIVEL ORFS FLAT FACE 90° ELBOW - MEDIUM",
    shortName: "24292F Female Swivel ORFS 90° Elbow Medium",
    code: "24292F",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24292F%20FEMALE%20SWIVEL%20ORFS%20FLAT%20FACE%2090%C2%B0%20ELBOW%20-%20MEDIUM-RAeCiSJXnHgZ3ayBAZ5JNHe3EuqAdl.png",
    description:
      "90° ORFS female swivel flat-face elbow (medium drop) hydraulic hose fitting. The right-angle swivel design with flat-face O-ring seal enables compact, leak-free routing in tight hydraulic installations.",
    material: "carbon steel, stainless steel",
    surfaceTreat: "white zinc, yellow zinc, Cr6 free zinc",
    application:
      "widely used in the hydraulic and fluid conveying systems of construction machinery, agriculture, mining, and industrial equipment.",
    features: [
      "90° swivel elbow design (medium drop)",
      "ORFS flat-face seal for leak-free connections",
      "Swivel nut simplifies installation and alignment",
      "High resistance to vibration and pressure cycling",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "ORFS / SAE J1453" },
      { label: "Design", value: "90° Female Swivel Flat Face Elbow (Medium)" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel" },
      { label: "Sealing", value: "Flat Face with O-Ring" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTableAlt: [
      { sinoPulsePartNo: "24292F-8-8M", parkerPartNo: "1J571-8-8", thread: "13/16x16", hoseID: "1/2", a: 66, e: 41, w: "15/16", b: 35 },
      { sinoPulsePartNo: "24292F-10-10M", parkerPartNo: "1J571-10-10", thread: "1x14", hoseID: "5/8", a: 73, e: 47, w: "1-1/8", b: 41 },
      { sinoPulsePartNo: "24292F-12-12M", parkerPartNo: "1J571-12-12", thread: "1-3/16x12", hoseID: "3/4", a: 89, e: 58, w: "1-3/8", b: 54 },
    ],
  },
  {
    id: 12,
    slug: "24292f-female-swivel-orfs-flat-face-90-elbow-short-drop-iso-12151-1-swes90",
    name: "24292F FEMALE SWIVEL ORFS FLAT FACE 90° ELBOW - SHORT DROP  ISO 12151-1 SWES90",
    shortName: "24292F Female Swivel ORFS 90° Elbow Short Drop",
    code: "24292F",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24292F%20FEMALE%20SWIVEL%20ORFS%20FLAT%20FACE%2090%C2%B0%20ELBOW%20-%20SHORT%20DROP%20%20ISO%2012151-1%20SWES90-t8UGb2kJNR9wbwr6vO9aZ04r04aM3T.png",
    description:
      "90° ORFS female swivel flat-face elbow (short drop, SWES90) per ISO 12151-1. The right-angle swivel design with flat-face O-ring seal enables compact, leak-free routing in tight hydraulic installations.",
    material: "carbon steel, stainless steel",
    surfaceTreat: "white zinc, yellow zinc, Cr6 free zinc",
    application:
      "widely used in the hydraulic and fluid conveying systems of construction machinery, agriculture, mining, and industrial equipment.",
    features: [
      "90° swivel elbow design (short drop / SWES90)",
      "ORFS flat-face seal for leak-free connections",
      "Manufactured to ISO 12151-1 standard",
      "High resistance to vibration and pressure cycling",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "ORFS / ISO 12151-1 SWES90" },
      { label: "Design", value: "90° Female Swivel Flat Face Elbow (Short Drop)" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel" },
      { label: "Sealing", value: "Flat Face with O-Ring" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTableAlt: [
      { sinoPulsePartNo: "24292F-6-6S", parkerPartNo: "1J971-6-6", thread: "11/16x16", hoseID: "3/8", a: 56, e: 23, w: "13/16", b: 33 },
      { sinoPulsePartNo: "24292F-8-8S", parkerPartNo: "1J971-8-8", thread: "13/16x16", hoseID: "1/2", a: 66, e: 29, w: "15/16", b: 35 },
      { sinoPulsePartNo: "24292F-10-8S", parkerPartNo: "1J971-10-8", thread: "1x14", hoseID: "1/2", a: 70, e: 32, w: "1-1/8", b: 39 },
      { sinoPulsePartNo: "24292F-10-10S", parkerPartNo: "1J971-10-10", thread: "1x14", hoseID: "5/8", a: 73, e: 32, w: "1-1/8", b: 41 },
      { sinoPulsePartNo: "24292F-10-12S", parkerPartNo: "1J971-10-12", thread: "1x14", hoseID: "3/4", a: 78, e: 32, w: "1-1/8", b: 43 },
      { sinoPulsePartNo: "24292F-12-10S", parkerPartNo: "1J971-12-10", thread: "1-3/16x12", hoseID: "5/8", a: 86, e: 48, w: "1-3/8", b: 55 },
      { sinoPulsePartNo: "24292F-12-12S", parkerPartNo: "1J971-12-12", thread: "1-3/16x12", hoseID: "3/4", a: 89, e: 48, w: "1-3/8", b: 54 },
      { sinoPulsePartNo: "24292F-16-16S", parkerPartNo: "1J971-16-16", thread: "1-7/16x12", hoseID: "1", a: 111, e: 56, w: "1-5/8", b: 66 },
      { sinoPulsePartNo: "24292F-20-20S", parkerPartNo: "1J971-20-20", thread: "1-11/16x12", hoseID: "1-1/4", a: 123, e: 64, w: "1-7/8", b: 81 },
      { sinoPulsePartNo: "24292F-24-24S", parkerPartNo: "1J971-24-24", thread: "2x12", hoseID: "1-1/2", a: 158, e: 68, w: "2-1/4", b: 102 },
    ],
  },
  {
    id: 13,
    slug: "14212f-male-orfs-flat-face-o-ring-iso12151-1-s",
    name: "14212F MALE ORFS FLAT FACE O-RING ISO12151-1-S",
    shortName: "14212F Male ORFS Flat Face O-Ring",
    code: "14212F",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14212F%20MALE%20ORFS%20FLAT%20FACE%20O-RING%20ISO12151-1-S-3lMYSodFUfe8KSAC69RroO2CtndCWP.png",
    description:
      "Straight ORFS male flat-face O-ring hydraulic hose fitting manufactured to ISO 12151-1. The flat sealing face with captive O-ring delivers reliable leak-free, high-vibration-resistant connections.",
    material: "carbon steel, stainless steel",
    surfaceTreat: "white zinc, yellow zinc, Cr6 free zinc",
    application:
      "widely used in the hydraulic and fluid conveying systems of construction machinery, agriculture, mining, and industrial equipment.",
    features: [
      "Male ORFS flat-face O-ring design",
      "Manufactured to ISO 12151-1 standard",
      "Superior leak-free sealing performance",
      "High resistance to vibration and pressure cycling",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "ORFS / ISO 12151-1" },
      { label: "Design", value: "Straight Male Flat Face O-Ring" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel" },
      { label: "Sealing", value: "Flat Face with Captive O-Ring" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTableAlt: [
      { sinoPulsePartNo: "14212F-8-8", parkerPartNo: "1JO71-8-8", thread: "13/16x16", hoseID: "1/2", a: 61, h: "7/8", b: 30 },
      { sinoPulsePartNo: "14212F-10-8", parkerPartNo: "1JO71-10-8", thread: "1x14", hoseID: "1/2", a: 66, h: "1-1/16", b: 36 },
      { sinoPulsePartNo: "14212F-10-10", parkerPartNo: "1JO71-10-10", thread: "1x14", hoseID: "5/8", a: 68, h: "1-1/16", b: 37 },
      { sinoPulsePartNo: "14212F-12-10", parkerPartNo: "1JO71-12-10", thread: "1-3/16x12", hoseID: "5/8", a: 71, h: "1-1/4", b: 39 },
      { sinoPulsePartNo: "14212F-12-12", parkerPartNo: "1JO71-12-12", thread: "1-3/16x12", hoseID: "3/4", a: 73, h: "1-1/4", b: 38 },
      { sinoPulsePartNo: "14212F-16-12", parkerPartNo: "1JO71-16-12", thread: "1-7/16x12", hoseID: "3/4", a: 74, h: "1-1/2", b: 39 },
      { sinoPulsePartNo: "14212F-16-16", parkerPartNo: "1JO71-16-16", thread: "1-7/16x12", hoseID: "1", a: 83, h: "1-1/2", b: 43 },
      { sinoPulsePartNo: "14212F-20-20", parkerPartNo: "1JO71-20-20", thread: "1-11/16x12", hoseID: "1-1/4", a: 84, h: "1-3/4", b: 42 },
      { sinoPulsePartNo: "14212F-24-24", parkerPartNo: "1JO71-24-24", thread: "2x12", hoseID: "1-1/2", a: 102, h: "2-1/8", b: 46 },
    ],
  },
  {
    id: 14,
    slug: "24242f-female-swivel-orfs-flat-face-45-elbow-iso-12151-1-swe45",
    name: "24242F FEMALE SWIVEL ORFS FLAT FACE 45° ELBOW ISO 12151-1 SWE45",
    shortName: "24242F Female Swivel ORFS 45° Elbow",
    code: "24242F",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24242F%20FEMALE%20SWIVEL%20ORFS%20FLAT%20FACE%2045%C2%B0%20ELBOW%20ISO%2012151-1%20SWE45-KdqCE46T1TYHupORLdyApgO9n6MQze.png",
    description:
      "45° ORFS female swivel flat-face elbow (SWE45) per ISO 12151-1. The angled swivel design with flat-face O-ring seal enables leak-free routing around obstructions in high-pressure hydraulic systems.",
    material: "carbon steel, stainless steel",
    surfaceTreat: "white zinc, yellow zinc, Cr6 free zinc",
    application:
      "widely used in the hydraulic and fluid conveying systems of construction machinery, agriculture, mining, and industrial equipment.",
    features: [
      "45° swivel elbow design (SWE45)",
      "ORFS flat-face seal for leak-free connections",
      "Manufactured to ISO 12151-1 standard",
      "Swivel nut simplifies installation and alignment",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "ORFS / ISO 12151-1 SWE45" },
      { label: "Design", value: "45° Female Swivel Flat Face Elbow" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel" },
      { label: "Sealing", value: "Flat Face with O-Ring" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTableAlt: [
      { sinoPulsePartNo: "24242F-6-6", parkerPartNo: "1J771-6-6", thread: "11/16x16", hoseID: "3/8", a: 59, e: 11, w: "13/16", b: 37 },
      { sinoPulsePartNo: "24242F-8-8", parkerPartNo: "1J771-8-8", thread: "13/16x16", hoseID: "1/2", a: 72, e: 15, w: "15/16", b: 41 },
      { sinoPulsePartNo: "24242F-10-8", parkerPartNo: "1J771-10-8", thread: "1x14", hoseID: "1/2", a: 74, e: 16, w: "1-1/8", b: 44 },
      { sinoPulsePartNo: "24242F-10-10", parkerPartNo: "1J771-10-10", thread: "1x14", hoseID: "5/8", a: 78, e: 16, w: "1-1/8", b: 46 },
      { sinoPulsePartNo: "24242F-12-12", parkerPartNo: "1J771-12-12", thread: "1-3/16x12", hoseID: "3/4", a: 92, e: 21, w: "1-3/8", b: 57 },
      { sinoPulsePartNo: "24242F-16-16", parkerPartNo: "1J771-16-16", thread: "1-7/16x12", hoseID: "1", a: 113, e: 24, w: "1-5/8", b: 68 },
      { sinoPulsePartNo: "24242F-20-20", parkerPartNo: "1J771-20-20", thread: "1-11/16x12", hoseID: "1-1/4", a: 121, e: 25, w: "1-7/8", b: 78 },
      { sinoPulsePartNo: "24242F-24-24", parkerPartNo: "1J771-24-24", thread: "2x12", hoseID: "1-1/2", a: 138, e: 27, w: "2-1/4", b: 82 },
    ],
  },
  {
    id: 15,
    slug: "24291f-m-female-swivel-orfs-flat-face-90-elbow-medium-drop-iso-12151-1-swsb",
    name: "24291F-M FEMALE SWIVEL ORFS FLAT FACE 90° ELBOW - MEDIUM DROP  ISO 12151-1 SWSB",
    shortName: "24291F-M Female Swivel ORFS 90° Elbow Medium Drop",
    code: "24291F-M",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24291F-M%20FEMALE%20SWIVEL%20ORFS%20FLAT%20FACE%2090%C2%B0%20ELBOW%20-%20MEDIUM%20DROP%20%20ISO%2012151-1%20SWSB-Wfhh73CBFAO5JFxBfc7cNUkatKlueV.png",
    description:
      "90° ORFS female swivel flat-face elbow (medium drop, SWSB) per ISO 12151-1. The right-angle swivel design with flat-face O-ring seal enables compact, leak-free routing in tight hydraulic installations.",
    material: "carbon steel, stainless steel",
    surfaceTreat: "white zinc, yellow zinc, Cr6 free zinc",
    application:
      "widely used in the hydraulic and fluid conveying systems of construction machinery, agriculture, mining, and industrial equipment.",
    features: [
      "90° swivel elbow design (medium drop / SWSB)",
      "ORFS flat-face seal for leak-free connections",
      "Manufactured to ISO 12151-1 standard",
      "High resistance to vibration and pressure cycling",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "ORFS / ISO 12151-1 SWSB" },
      { label: "Design", value: "90° Female Swivel Flat Face Elbow (Medium Drop)" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel" },
      { label: "Sealing", value: "Flat Face with O-Ring" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTableAlt: [
      { sinoPulsePartNo: "24291F-4-4M", parkerPartNo: "1J543-4-4", thread: "9/16x18", hoseID: "1/4", a: 53, e: 32, w: "11/16", b: 34 },
      { sinoPulsePartNo: "24291F-6-4M", parkerPartNo: "1J543-6-4", thread: "11/16x16", hoseID: "1/4", a: 54, e: 38, w: "13/16", b: 35 },
      { sinoPulsePartNo: "24291F-6-6M", parkerPartNo: "1J543-6-6", thread: "11/16x16", hoseID: "3/8", a: 61, e: 38, w: "13/16", b: 35 },
      { sinoPulsePartNo: "24291F-6-6-SM-M", parkerPartNo: "1J543-6-6-SM", thread: "11/16x16", hoseID: "3/8", a: 61, e: 38, w: "22 mm", b: 35 },
      { sinoPulsePartNo: "24291F-8-6M", parkerPartNo: "1J543-8-6", thread: "13/16x16", hoseID: "3/8", a: 63, e: 41, w: "15/16", b: 37 },
      { sinoPulsePartNo: "24291F-8-8M", parkerPartNo: "1J543-8-8", thread: "13/16x16", hoseID: "1/2", a: 66, e: 41, w: "15/16", b: 34 },
      { sinoPulsePartNo: "24291F-10-8M", parkerPartNo: "1J543-10-8", thread: "1x14", hoseID: "1/2", a: 70, e: 47, w: "1-1/8", b: 38 },
      { sinoPulsePartNo: "24291F-10-10M", parkerPartNo: "1J543-10-10", thread: "1x14", hoseID: "5/8", a: 75, e: 47, w: "1-1/8", b: 39 },
      { sinoPulsePartNo: "24291F-10-12M", parkerPartNo: "1J543-10-12", thread: "1x14", hoseID: "3/4", a: 79, e: 48, w: "1-1/8", b: 43 },
      { sinoPulsePartNo: "24291F-12-12M", parkerPartNo: "1J543-12-12", thread: "1-3/16x12", hoseID: "3/4", a: 89, e: 58, w: "1-3/8", b: 52 },
      { sinoPulsePartNo: "24291F-16-16M", parkerPartNo: "1J543-16-16", thread: "1-7/16x12", hoseID: "1", a: 123, e: 71, w: "1-5/8", b: 83 },
      { sinoPulsePartNo: "24291F-20-20M", parkerPartNo: "1J543-20-20", thread: "1-11/16x12", hoseID: "1-1/4", a: 124, e: 78, w: "1-7/8", b: 81 },
    ],
  },
  {
    id: 16,
    slug: "24212d-f-l-female-swivel-orfs-flat-face-long-iso-12151-1-swsb",
    name: "24212D-F-L FEMALE SWIVEL ORFS FLAT FACE -LONG  ISO 12151-1 SWSB",
    shortName: "24212D-F-L Female Swivel ORFS Long",
    code: "24212D-F-L",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24212D-F-L%20FEMALE%20SWIVEL%20ORFS%20FLAT%20FACE%20-LONG%20%20ISO%2012151-1%20SWSB-ozljGhuFPXSjgQiD05raGijxocZHkw.png",
    description:
      "Straight ORFS female swivel flat-face hydraulic hose fitting (long, SWSB) per ISO 12151-1. The extended swivel nut with flat-face O-ring seal provides easy alignment and leak-free, high-pressure connections.",
    material: "carbon steel, stainless steel",
    surfaceTreat: "white zinc, yellow zinc, Cr6 free zinc",
    application:
      "widely used in the hydraulic and fluid conveying systems of construction machinery, agriculture, mining, and industrial equipment.",
    features: [
      "Female swivel ORFS flat-face design (long / SWSB)",
      "Manufactured to ISO 12151-1 standard",
      "Swivel nut simplifies installation and alignment",
      "Superior leak-free sealing under vibration",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "ORFS / ISO 12151-1 SWSB" },
      { label: "Design", value: "Straight Female Swivel Flat Face (Long)" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel" },
      { label: "Sealing", value: "Flat Face with O-Ring" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTableAlt: [
      { sinoPulsePartNo: "24212D-6-6F-L", parkerPartNo: "1JS71-6-6", thread: "11/16x16", hoseID: "3/8", a: 58, h: "11/16", w: "13/16", b: 35 },
      { sinoPulsePartNo: "24212D-6-8F-L", parkerPartNo: "1JS71-6-8", thread: "11/16x16", hoseID: "1/2", a: 64, h: "13/16", w: "13/16", b: 33 },
      { sinoPulsePartNo: "24212D-8-8F-L", parkerPartNo: "1JS71-8-8", thread: "13/16x16", hoseID: "1/2", a: 67, h: "13/16", w: "15/16", b: 37 },
      { sinoPulsePartNo: "24212D-10-8F-L", parkerPartNo: "1JS71-10-8", thread: "1x14", hoseID: "1/2", a: 23, h: "13/16", w: "1-1/8", b: 43 },
      { sinoPulsePartNo: "24212D-10-10F-L", parkerPartNo: "1JS71-10-10", thread: "1x14", hoseID: "5/8", a: 76, h: "15/16", w: "1-1/8", b: 44 },
      { sinoPulsePartNo: "24212D-10-12F-L", parkerPartNo: "1JS71-10-12", thread: "1x14", hoseID: "3/4", a: 78, h: "1-1/16", w: "1-1/8", b: 43 },
      { sinoPulsePartNo: "24212D-12-10F-L", parkerPartNo: "1JS71-12-10", thread: "1-3/16x12", hoseID: "5/8", a: 79, h: "1-1/8", w: "1-3/8", b: 47 },
      { sinoPulsePartNo: "24212D-12-12F-L", parkerPartNo: "1JS71-12-12", thread: "1-3/16x12", hoseID: "3/4", a: 84, h: "1-1/16", w: "1-3/8", b: 49 },
      { sinoPulsePartNo: "24212D-16-12F-L", parkerPartNo: "1JS71-16-12", thread: "1-7/16x12", hoseID: "3/4", a: 86, h: "1-5/16", w: "1-5/8", b: 51 },
      { sinoPulsePartNo: "24212D-16-16F-L", parkerPartNo: "1JS71-16-16", thread: "1-7/16x12", hoseID: "1", a: 94, h: "1-5/16", w: "1-5/8", b: 49 },
      { sinoPulsePartNo: "24212D-20-16F-L", parkerPartNo: "1JS71-20-16", thread: "1-11/16x12", hoseID: "1", a: 92, h: "1-3/4", w: "1-7/8", b: 49 },
      { sinoPulsePartNo: "24212D-20-20F-L", parkerPartNo: "1JS71-20-20", thread: "1-11/16x12", hoseID: "1-1/4", a: 96, h: "1-3/4", w: "1-7/8", b: 53 },
      { sinoPulsePartNo: "24212D-24-24F-L", parkerPartNo: "1JS71-24-24", thread: "2x12", hoseID: "1-1/2", a: 114.6, h: "2", w: "2-1/4", b: 589 },
    ],
  },
  {
    id: 17,
    slug: "14211f-l-male-orfs-flat-face-bulkhead-without-locknut-with-o-ring-iso-8434-3-bh",
    name: "14211F-L MALE ORFS FLAT FACE BULKHEAD WITHOUT LOCKNUT WITH O-RING ISO 8434-3 - BH",
    shortName: "14211F-L Male ORFS Flat Face Bulkhead",
    code: "14211F-L",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14211F-L%20MALE%20ORFS%20FLAT%20FACE%20BULKHEAD%20WITHOUT%20LOCKNUT%20WITH%20O-RING%20ISO%208434-3%20-%20BH-7StW5vYMPYgljAo8KoNp5PEMRKxEBd.png",
    description:
      "Straight ORFS male flat-face bulkhead hydraulic hose fitting (without locknut, with O-ring) per ISO 8434-3. The bulkhead design enables panel mounting while the flat-face O-ring seal ensures leak-free connections.",
    material: "carbon steel, stainless steel",
    surfaceTreat: "white zinc, yellow zinc, Cr6 free zinc",
    application:
      "widely used in the hydraulic and fluid conveying systems of construction machinery, agriculture, mining, and industrial equipment.",
    features: [
      "Male ORFS flat-face bulkhead design (BH)",
      "Supplied without locknut, with O-ring",
      "Manufactured to ISO 8434-3 standard",
      "Enables panel / bulkhead mounting",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "ORFS / ISO 8434-3" },
      { label: "Design", value: "Straight Male Flat Face Bulkhead (BH)" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel" },
      { label: "Sealing", value: "Flat Face with O-Ring" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTableAlt: [
      { sinoPulsePartNo: "14211F-4-4L", parkerPartNo: "1JB43-4-4", thread: "9/16x18", hoseID: "1/4", a: 66, h: "5/8", b: 46 },
      { sinoPulsePartNo: "14211F-6-6L", parkerPartNo: "1JB43-6-6", thread: "11/16x16", hoseID: "3/8", a: 76, h: "3/4", b: 50 },
      { sinoPulsePartNo: "14211F-8-6L", parkerPartNo: "1JB43-8-6", thread: "13/16x16", hoseID: "3/8", a: 87, h: "7/8", b: 60 },
      { sinoPulsePartNo: "14211F-8-8L", parkerPartNo: "1JB43-8-8", thread: "13/16x16", hoseID: "1/2", a: 85, h: "7/8", b: 53 },
      { sinoPulsePartNo: "14211F-10-8L", parkerPartNo: "1JB43-10-8", thread: "1x14", hoseID: "1/2", a: 91, h: "1-1/16", b: 59 },
      { sinoPulsePartNo: "14211F-10-10L", parkerPartNo: "1JB43-10-10", thread: "1x14", hoseID: "5/8", a: 96, h: "1-1/16", b: 59 },
      { sinoPulsePartNo: "14211F-12-12L", parkerPartNo: "1JB43-12-12", thread: "1-3/16x12", hoseID: "3/4", a: 98, h: "1-1/4", b: 62 },
    ],
  },
  {
    id: 18,
    slug: "24212d-f-female-swivel-orfs-flat-face-short-iso-12151-1-swsa",
    name: "24212D-F FEMALE SWIVEL ORFS FLAT FACE -SHORT  ISO 12151-1 SWSA",
    shortName: "24212D-F Female Swivel ORFS Short",
    code: "24212D-F",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24212D-F%20FEMALE%20SWIVEL%20ORFS%20FLAT%20FACE%20-SHORT%20%20ISO%2012151-1%20SWSA-FVZFToc15fRriqvic1iZkqXhTtsiuW.png",
    description:
      "Straight ORFS female swivel flat-face hydraulic hose fitting (short, SWSA) per ISO 12151-1. The swivel nut with flat-face O-ring seal provides easy alignment and leak-free, high-pressure connections.",
    material: "carbon steel, stainless steel",
    surfaceTreat: "white zinc, yellow zinc, Cr6 free zinc",
    application:
      "widely used in the hydraulic and fluid conveying systems of construction machinery, agriculture, mining, and industrial equipment.",
    features: [
      "Female swivel ORFS flat-face design (short / SWSA)",
      "Manufactured to ISO 12151-1 standard",
      "Swivel nut simplifies installation and alignment",
      "Superior leak-free sealing under vibration",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "ORFS / ISO 12151-1 SWSA" },
      { label: "Design", value: "Straight Female Swivel Flat Face (Short)" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel" },
      { label: "Sealing", value: "Flat Face with O-Ring" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTableAlt: [
      { sinoPulsePartNo: "24212D-8-8F-S", parkerPartNo: "1JC71-8-8", thread: "13/16x16", hoseID: "1/2", a: 56, c: 11, h: "13/16", w: "15/16", b: 26 },
      { sinoPulsePartNo: "24212D-10-10F-S", parkerPartNo: "1JC71-10-10", thread: "1x14", hoseID: "5/8", a: 61, c: 12, h: "15/16", w: "1-1/8", b: 29 },
      { sinoPulsePartNo: "24212D-12-12F-S", parkerPartNo: "1JC71-12-12", thread: "1-3/16x12", hoseID: "3/4", a: 68, c: 14, h: "1-1/8", w: "1-3/8", b: 33 },
      { sinoPulsePartNo: "24212D-16-16F-S", parkerPartNo: "1JC71-16-16", thread: "1-7/16x12", hoseID: "1", a: 82, c: 14, h: "1-3/8", w: "1-5/8", b: 37 },
      { sinoPulsePartNo: "24212D-20-16F-S", parkerPartNo: "1JC71-20-16", thread: "1-11/16x12", hoseID: "1", a: 80, c: 15, h: "1-5/8", w: "1-7/8", b: 35 },
    ],
  },
  {
    id: 19,
    slug: "24291f-l-female-swivel-orfs-flat-face-90-elbow-long-drop-iso-12151-1-swel90",
    name: "24291F-L FEMALE SWIVEL ORFS FLAT FACE 90° ELBOW -LONG DROP  ISO 12151-1 SWEL90",
    shortName: "24291F-L Female Swivel ORFS 90° Elbow Long Drop",
    code: "24291F-L",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24291F-L%20FEMALE%20SWIVEL%20ORFS%20FLAT%20FACE%2090%C2%B0%20ELBOW%20-LONG%20DROP%20%20ISO%2012151-1%20SWEL90-S0C2wWB1zz5SB1LwzdlFkOyoABarou.png",
    description:
      "90° ORFS female swivel flat-face elbow (long drop, SWEL90) per ISO 12151-1. The right-angle swivel design with flat-face O-ring seal enables compact, leak-free routing in tight hydraulic installations.",
    material: "carbon steel, stainless steel",
    surfaceTreat: "white zinc, yellow zinc, Cr6 free zinc",
    application:
      "widely used in the hydraulic and fluid conveying systems of construction machinery, agriculture, mining, and industrial equipment.",
    features: [
      "90° swivel elbow design (long drop / SWEL90)",
      "ORFS flat-face seal for leak-free connections",
      "Manufactured to ISO 12151-1 standard",
      "High resistance to vibration and pressure cycling",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "ORFS / ISO 12151-1 SWEL90" },
      { label: "Design", value: "90° Female Swivel Flat Face Elbow (Long Drop)" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel" },
      { label: "Sealing", value: "Flat Face with O-Ring" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTableAlt: [
      { sinoPulsePartNo: "24291F-4-4L", parkerPartNo: "1JI43-4-4", thread: "9/16x18", hoseID: "1/4", a: 51, e: 46, w: "11/16", b: 32 },
      { sinoPulsePartNo: "24291F-6-4L", parkerPartNo: "1JI43-6-4", thread: "11/16x16", hoseID: "1/4", a: 57, e: 58, w: "13/16", b: 38 },
      { sinoPulsePartNo: "24291F-6-6L", parkerPartNo: "1JI43-6-6", thread: "11/16x16", hoseID: "3/8", a: 61, e: 54, w: "13/16", b: 35 },
      { sinoPulsePartNo: "24291F-8-6L", parkerPartNo: "1JI43-8-6", thread: "13/16x16", hoseID: "3/8", a: 62, e: 64, w: "15/16", b: 36 },
      { sinoPulsePartNo: "24291F-8-8L", parkerPartNo: "1JI43-8-8", thread: "13/16x16", hoseID: "1/2", a: 66, e: 64, w: "15/16", b: 34 },
      { sinoPulsePartNo: "24291F-8-8-SM-L", parkerPartNo: "1JI43-8-8-SM", thread: "13/16x16", hoseID: "1/2", a: 66, e: 64, w: "24 mm", b: 34 },
      { sinoPulsePartNo: "24291F-10-8L", parkerPartNo: "1JI43-10-8", thread: "1x14", hoseID: "1/2", a: 70, e: 71, w: "1-1/8", b: 38 },
      { sinoPulsePartNo: "24291F-10-10L", parkerPartNo: "1JI43-10-10", thread: "1x14", hoseID: "5/8", a: 75, e: 70, w: "1-1/8", b: 39 },
      { sinoPulsePartNo: "24291F-10-12L", parkerPartNo: "1JI43-10-12", thread: "1x14", hoseID: "3/4", a: 80, e: 70, w: "1-1/8", b: 44 },
      { sinoPulsePartNo: "24291F-12-12L", parkerPartNo: "1JI43-12-12", thread: "1-3/16x12", hoseID: "3/4", a: 89, e: 96, w: "1-3/8", b: 52 },
      { sinoPulsePartNo: "24291F-16-16L", parkerPartNo: "1JI43-16-16", thread: "1-7/16x12", hoseID: "1", a: 109, e: 114, w: "1-5/8", b: 68 },
      { sinoPulsePartNo: "24291F-20-20L", parkerPartNo: "1JI43-20-20", thread: "1-11/16x12", hoseID: "1-1/4", a: 123, e: 129, w: "1-7/8", b: 80 },
      { sinoPulsePartNo: "24291F-24-20L", parkerPartNo: "1JI43-24-20", thread: "2x12", hoseID: "1-1/4", a: 121, e: 141, w: "2-1/4", b: 79 },
    ],
  },
  {
    id: 20,
    slug: "24291f-female-swivel-orfs-flat-face-90-elbow-short-drop-iso-12151-1-swes90",
    name: "24291F FEMALE SWIVEL ORFS FLAT FACE 90° ELBOW - SHORT DROP  ISO 12151-1 SWES90",
    shortName: "24291F Female Swivel ORFS 90° Elbow Short Drop",
    code: "24291F",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24291F%20FEMALE%20SWIVEL%20ORFS%20FLAT%20FACE%2090%C2%B0%20ELBOW%20-%20SHORT%20DROP%20%20ISO%2012151-1%20SWES90-iz8IsfY9WQ36WfU8J6l22iMCCDheZR.png",
    description:
      "90° ORFS female swivel flat-face elbow (short drop, SWES90) per ISO 12151-1. The right-angle swivel design with flat-face O-ring seal enables compact, leak-free routing in tight hydraulic installations.",
    material: "carbon steel, stainless steel",
    surfaceTreat: "white zinc, yellow zinc, Cr6 free zinc",
    application:
      "widely used in the hydraulic and fluid conveying systems of construction machinery, agriculture, mining, and industrial equipment.",
    features: [
      "90° swivel elbow design (short drop / SWES90)",
      "ORFS flat-face seal for leak-free connections",
      "Manufactured to ISO 12151-1 standard",
      "High resistance to vibration and pressure cycling",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "ORFS / ISO 12151-1 SWES90" },
      { label: "Design", value: "90° Female Swivel Flat Face Elbow (Short Drop)" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel" },
      { label: "Sealing", value: "Flat Face with O-Ring" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTableAlt: [
      { sinoPulsePartNo: "24291F-4-4", parkerPartNo: "1J943-4-4", thread: "9/16x18", hoseID: "1/4", a: 45, e: 21, w: "11/16", b: 26 },
      { sinoPulsePartNo: "24291F-4-6", parkerPartNo: "1J943-4-6", thread: "9/16x18", hoseID: "3/8", a: 52, e: 21, w: "11/16", b: 26 },
      { sinoPulsePartNo: "24291F-6-4", parkerPartNo: "1J943-6-4", thread: "11/16x16", hoseID: "1/4", a: 49, e: 23, w: "13/16", b: 30 },
      { sinoPulsePartNo: "24291F-6-5", parkerPartNo: "1J943-6-5", thread: "11/16x16", hoseID: "5/16", a: 57, e: 23, w: "13/16", b: 38 },
      { sinoPulsePartNo: "24291F-6-6", parkerPartNo: "1J943-6-6", thread: "11/16x16", hoseID: "3/8", a: 56, e: 23, w: "13/16", b: 30 },
      { sinoPulsePartNo: "24291F-6-8", parkerPartNo: "1J943-6-8", thread: "11/16x16", hoseID: "1/2", a: 64, e: 23, w: "13/16", b: 32 },
      { sinoPulsePartNo: "24291F-8-4", parkerPartNo: "1J943-8-4", thread: "13/16x16", hoseID: "1/4", a: 58, e: 29, w: "15/16", b: 39 },
      { sinoPulsePartNo: "24291F-8-6", parkerPartNo: "1J943-8-6", thread: "13/16x16", hoseID: "3/8", a: 58, e: 29, w: "15/16", b: 32 },
      { sinoPulsePartNo: "24291F-8-8", parkerPartNo: "1J943-8-8", thread: "13/16x16", hoseID: "1/2", a: 66, e: 29, w: "15/16", b: 34 },
      { sinoPulsePartNo: "24291F-8-8-SM", parkerPartNo: "1J943-8-8-SM", thread: "13/16x16", hoseID: "1/2", a: 66, e: 29, w: "24 mm", b: 34 },
      { sinoPulsePartNo: "24291F-8-10", parkerPartNo: "1J943-8-10", thread: "13/16x16", hoseID: "5/8", a: 71, e: 29, w: "15/16", b: 35 },
      { sinoPulsePartNo: "24291F-10-8", parkerPartNo: "1J943-10-8", thread: "1x14", hoseID: "1/2", a: 70, e: 32, w: "1-1/8", b: 38 },
      { sinoPulsePartNo: "24291F-10-10", parkerPartNo: "1J943-10-10", thread: "1x14", hoseID: "5/8", a: 75, e: 32, w: "1-1/8", b: 39 },
      { sinoPulsePartNo: "24291F-10-10-SM", parkerPartNo: "1J943-10-10-SM", thread: "1x14", hoseID: "5/8", a: 75, e: 32, w: "30 mm", b: 39 },
      { sinoPulsePartNo: "24291F-10-12", parkerPartNo: "1J943-10-12", thread: "1x14", hoseID: "3/4", a: 78, e: 32, w: "1-1/8", b: 42 },
      { sinoPulsePartNo: "24291F-12-8", parkerPartNo: "1J943-12-8", thread: "1-3/16x12", hoseID: "1/2", a: 82, e: 48, w: "1-3/8", b: 50 },
      { sinoPulsePartNo: "24291F-12-10", parkerPartNo: "1J943-12-10", thread: "1-3/16x12", hoseID: "5/8", a: 89, e: 48, w: "1-3/8", b: 52 },
      { sinoPulsePartNo: "24291F-12-12", parkerPartNo: "1J943-12-12", thread: "1-3/16x12", hoseID: "3/4", a: 78, e: 48, w: "1-3/8", b: 52 },
      { sinoPulsePartNo: "24291F-12-16", parkerPartNo: "1J943-12-16", thread: "1-3/16x12", hoseID: "1", a: 99, e: 48, w: "1-3/8", b: 57 },
      { sinoPulsePartNo: "24291F-16-12", parkerPartNo: "1J943-16-12", thread: "1-7/16x12", hoseID: "3/4", a: 103, e: 56, w: "1-5/8", b: 67 },
      { sinoPulsePartNo: "24291F-16-16", parkerPartNo: "1J943-16-16", thread: "1-7/16x12", hoseID: "1", a: 109, e: 56, w: "1-5/8", b: 68 },
      { sinoPulsePartNo: "24291F-16-20", parkerPartNo: "1J943-16-20", thread: "1-7/16x12", hoseID: "1-1/4", a: 116, e: 56, w: "1-5/8", b: 73 },
      { sinoPulsePartNo: "24291F-20-16", parkerPartNo: "1J943-20-16", thread: "1-11/16x12", hoseID: "1", a: 118, e: 65, w: "1-7/8", b: 80 },
      { sinoPulsePartNo: "24291F-20-20", parkerPartNo: "1J943-20-20", thread: "1-11/16x12", hoseID: "1-1/4", a: 124, e: 64, w: "1-7/8", b: 81 },
      { sinoPulsePartNo: "24291F-24-20", parkerPartNo: "1J943-24-20", thread: "2x12", hoseID: "1-1/4", a: 126, e: 69, w: "2-1/4", b: 84 },
      { sinoPulsePartNo: "24291F-24-24", parkerPartNo: "1J943-24-24", thread: "2x12", hoseID: "1-1/2", a: 140, e: 68, w: "2-1/4", b: 105 },
    ],
  },
  {
    id: 21,
    slug: "28612f-female-swivel-orfs-flat-face-90-elbow-short-drop-iso-12151-1-swes90",
    name: "28612F FEMALE SWIVEL ORFS FLAT FACE 90° ELBOW - SHORT DROP  ISO 12151-1 SWES90",
    shortName: "28612F Female Swivel ORFS 90° Elbow Short Drop",
    code: "28612F",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/28612F%20FEMALE%20SWIVEL%20ORFS%20FLAT%20FACE%2090%C2%B0%20ELBOW%20-%20SHORT%20DROP%20%20ISO%2012151-1%20SWES90-r69cwQiTaxckIP8rSAN36F6SvgFcmx.png",
    description:
      "90° ORFS female swivel flat-face elbow (short drop, SWES90) per ISO 12151-1. The right-angle swivel design with flat-face O-ring seal enables compact, leak-free routing in tight hydraulic installations.",
    material: "carbon steel, stainless steel",
    surfaceTreat: "white zinc, yellow zinc, Cr6 free zinc",
    application:
      "widely used in the hydraulic and fluid conveying systems of construction machinery, agriculture, mining, and industrial equipment.",
    features: [
      "90° swivel elbow design (short drop / SWES90)",
      "ORFS flat-face seal for leak-free connections",
      "Manufactured to ISO 12151-1 standard",
      "High resistance to vibration and pressure cycling",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "ORFS / ISO 12151-1 SWES90" },
      { label: "Design", value: "90° Female Swivel Flat Face Elbow (Short Drop)" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel" },
      { label: "Sealing", value: "Flat Face with O-Ring" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTableAlt: [
      { sinoPulsePartNo: "28612D-24-10F", parkerPartNo: "1XU71-10-10", thread: "M24x1.5", hoseID: "5/8", a: 80, h: "30", w: "32", b: 49 },
      { sinoPulsePartNo: "28612D-30-12F", parkerPartNo: "1XU71-12-12", thread: "M30x1.5", hoseID: "3/4", a: 86, h: "32", w: "36", b: 51 },
      { sinoPulsePartNo: "28612D-33-16F", parkerPartNo: "1XU71-16-16", thread: "M33x1.5", hoseID: "1", a: 104, h: "36", w: "41", b: 59 },
      { sinoPulsePartNo: "28612D-36-20F", parkerPartNo: "1XU71-20-20", thread: "M36x1.5", hoseID: "1-1/2", a: 106, h: "46", w: "46", b: 64 },
      { sinoPulsePartNo: "28612D-42-24F", parkerPartNo: "1XU71-24-24", thread: "M42x1.5", hoseID: "1-1/2", a: 127, h: "50", w: "55", b: 71 },
    ],
  },
  {
    id: 22,
    slug: "24292f-l-female-swivel-orfs-flat-face-90-elbow-long",
    name: "24292F-L FEMALE SWIVEL ORFS FLAT FACE 90° ELBOW - LONG",
    shortName: "24292F-L Female Swivel ORFS 90° Elbow Long",
    code: "24292F-L",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24292F-L%20FEMALE%20SWIVEL%20ORFS%20FLAT%20FACE%2090%C2%B0%20ELBOW%20-%20LONG-Fyxk9xlVzArigaVkkVq6VD7Kc66NDz.png",
    description:
      "90° ORFS female swivel flat-face elbow (long drop) hydraulic hose fitting. The right-angle swivel design with flat-face O-ring seal enables compact, leak-free routing in tight hydraulic installations.",
    material: "carbon steel, stainless steel",
    surfaceTreat: "white zinc, yellow zinc, Cr6 free zinc",
    application:
      "widely used in the hydraulic and fluid conveying systems of construction machinery, agriculture, mining, and industrial equipment.",
    features: [
      "90° swivel elbow design (long drop)",
      "ORFS flat-face seal for leak-free connections",
      "Swivel nut simplifies installation and alignment",
      "High resistance to vibration and pressure cycling",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "ORFS / SAE J1453" },
      { label: "Design", value: "90° Female Swivel Flat Face Elbow (Long)" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel" },
      { label: "Sealing", value: "Flat Face with O-Ring" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTableAlt: [
      { sinoPulsePartNo: "24292F-6-6L", parkerPartNo: "1J171-6-6", thread: "11/16x16", hoseID: "3/8", a: 61, e: 54, w: "13/16", b: 38 },
      { sinoPulsePartNo: "24292F-8-8L", parkerPartNo: "1J171-8-8", thread: "13/16x16", hoseID: "1/2", a: 66, e: 64, w: "15/16", b: 35 },
      { sinoPulsePartNo: "24292F-10-10L", parkerPartNo: "1J171-10-10", thread: "1x14", hoseID: "5/8", a: 73, e: 70, w: "1-1/8", b: 41 },
      { sinoPulsePartNo: "24292F-12-12L", parkerPartNo: "1J171-12-12", thread: "1-3/16x12", hoseID: "3/4", a: 89, e: 96, w: "1-3/8", b: 54 },
      { sinoPulsePartNo: "24292F-16-12L", parkerPartNo: "1J171-16-12", thread: "1-7/16x12", hoseID: "3/4", a: 103, e: 114, w: "1-5/8", b: 68 },
      { sinoPulsePartNo: "24292F-16-16L", parkerPartNo: "1J171-16-16", thread: "1-7/16x12", hoseID: "1", a: 111, e: 114, w: "1-5/8", b: 66 },
      { sinoPulsePartNo: "24292F-20-20L", parkerPartNo: "1J171-20-20", thread: "1-11/16x12", hoseID: "1-1/4", a: 124, e: 129, w: "1-7/8", b: 81 },
      { sinoPulsePartNo: "24292F-24-24L", parkerPartNo: "1J171-24-24", thread: "2x12", hoseID: "1-1/2", a: 148, e: 141, w: "2-1/4", b: 92 },
    ],
  },
  {
    id: 23,
    slug: "24218-d-r5-orfs-female-flat-saet-double-hexagon-reusable-fitting-24218dr5",
    name: "24218 D-R5 ORFS FEMALE FLAT SAET DOUBLE HEXAGON REUSABLE FITTING 24218DR5",
    shortName: "24218 D-R5 ORFS Female Double Hexagon Reusable",
    code: "24218DR5",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24218%20D-R5%20ORFS%20FEMALE%20FLAT%20SAET%20DOUBLE%20HEXAGON%20REUSABLE%20FITTING%2024218DR5-695U0ESZXXecYoLgfnzUrKSDSA7rkj.png",
    description:
      "Straight ORFS female flat seat double hexagon reusable hydraulic hose fitting. The reusable double-hexagon design with flat-face O-ring seal allows field reassembly while delivering leak-free, high-pressure connections.",
    material: "carbon steel, stainless steel",
    surfaceTreat: "white zinc, yellow zinc, Cr6 free zinc",
    application:
      "widely used in the hydraulic and fluid conveying systems of construction machinery, agriculture, mining, and industrial equipment.",
    features: [
      "Reusable double hexagon (S1 / S2) design",
      "ORFS female flat seat for leak-free connections",
      "Field-reassemblable for easy maintenance",
      "High resistance to vibration and pressure cycling",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "ORFS / SAE J1453" },
      { label: "Design", value: "Straight Female Flat Seat Double Hexagon Reusable" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel" },
      { label: "Sealing", value: "Flat Face with O-Ring" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTable: [
      { partNo: "24218D-04-04(R5)", threadE: "9/16\"X18", dash: "4", a: 8.5, s1: 14, s2: 19 },
      { partNo: "24218D-04-05(R5)", threadE: "9/16\"X18", dash: "5", a: 8.5, s1: 14, s2: 19 },
      { partNo: "24218D-06-06(R5)", threadE: "11/16\"X16", dash: "6", a: 10, s1: 17, s2: 22 },
      { partNo: "24218D-08-08(R5)", threadE: "13/16\"X16", dash: "8", a: 11, s1: 19, s2: 27 },
      { partNo: "24218D-10-10(R5)", threadE: "1\"X14", dash: "10", a: 13.5, s1: 24, s2: 30 },
      { partNo: "24218D-12-12(R5)", threadE: "1.3/16\"X12", dash: "12", a: 15, s1: 30, s2: 36 },
      { partNo: "24218D-16-16(R5)", threadE: "1.7/16\"X12", dash: "16", a: 15, s1: 36, s2: 41 },
      { partNo: "24218D-20-20(R5)", threadE: "1. 11/16\"X12", dash: "20", a: 15, s1: 41, s2: 50 },
      { partNo: "24218D-24-24(R5)", threadE: "2\"X12", dash: "24", a: 16, s1: 50, s2: 60 },
    ],
  },
  {
    id: 24,
    slug: "24213w-orfs-female-flat-seat-iso12151-1-saej516-24213w",
    name: "24213W ORFS FEMALE FLAT SEAT ISO12151-1 -SAEJ516 -24213W",
    shortName: "24213W ORFS Female Flat Seat",
    code: "24213W",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24213W%20ORFS%20FEMALE%20FLAT%20SEAT%20ISO12151-1%20-SAEJ516%20-24213W-j9IgdyFy9yyUlZPijdKhG9CsNMrCda.png",
    description:
      "Straight ORFS female flat seat hydraulic hose fitting per ISO 12151-1 and SAE J516. The flat sealing seat with O-ring delivers leak-free, high-vibration-resistant connections for demanding high-pressure hydraulic systems.",
    material: "carbon steel, stainless steel",
    surfaceTreat: "white zinc, yellow zinc, Cr6 free zinc",
    application:
      "widely used in the hydraulic and fluid conveying systems of construction machinery, agriculture, mining, and industrial equipment.",
    features: [
      "Straight female ORFS flat seat design",
      "Manufactured to ISO 12151-1 / SAE J516 standards",
      "Superior leak-free sealing performance",
      "High resistance to vibration and pressure cycling",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "ORFS / ISO 12151-1 / SAE J516" },
      { label: "Design", value: "Straight Female Flat Seat" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel" },
      { label: "Sealing", value: "Flat Face with O-Ring" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTable: [
      { partNo: "P24213-12-12W", threadE: "1.3/16\"x12", dn: "20", dash: "12", a: 41, c: 15, s2: 36 },
      { partNo: "P24213-16-16W", threadE: "1.7/16\"x12", dn: "25", dash: "16", a: 44.4, c: 15, s2: 41 },
      { partNo: "P24213-20-20W", threadE: "1.11/16\"x12", dn: "32", dash: "20", a: 47.8, c: 15, s2: 50 },
      { partNo: "P24213-24-24W", threadE: "2\"x12", dn: "40", dash: "24", a: 48.2, c: 14.8, s2: 60 },
    ],
  },
  {
    id: 25,
    slug: "24243w-45-orfs-female-flat-seat-iso12151-1-saej516-24243w",
    name: "24243W 45° ORFS FEMALE FLAT SEAT ISO12151-1-SAEJ516 -24243W",
    shortName: "24243W 45° ORFS Female Flat Seat",
    code: "24243W",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24243W%2045%C2%B0%20ORFS%20FEMALE%20FLAT%20SEAT%20ISO12151-1-SAEJ516%20-24243W-HOIy1QDDuYL8tu1bzRL3kXRBipksSI.png",
    description:
      "45° ORFS female flat seat elbow hydraulic hose fitting per ISO 12151-1 and SAE J516. The angled design with flat-face O-ring seal enables leak-free routing around obstructions in high-pressure hydraulic systems.",
    material: "carbon steel, stainless steel",
    surfaceTreat: "white zinc, yellow zinc, Cr6 free zinc",
    application:
      "widely used in the hydraulic and fluid conveying systems of construction machinery, agriculture, mining, and industrial equipment.",
    features: [
      "45° elbow female ORFS flat seat design",
      "Manufactured to ISO 12151-1 / SAE J516 standards",
      "ORFS flat-face seal for leak-free connections",
      "High resistance to vibration and pressure cycling",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "ORFS / ISO 12151-1 / SAE J516" },
      { label: "Design", value: "45° Female Flat Seat Elbow" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel" },
      { label: "Sealing", value: "Flat Face with O-Ring" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTable: [
      { partNo: "P24243-12-12W", threadE: "1.3/16\"X12", dn: "20", dash: "12", a: 97.7, c: 15, s2: 36, h: 42 },
      { partNo: "P24243-16-16W", threadE: "1.7/16\"X12", dn: "25", dash: "16", a: 111, c: 15, s2: 41, h: 44.6 },
      { partNo: "P24243-20-20W", threadE: "1.11/16\"X12", dn: "32", dash: "20", a: 124, c: 15, s2: 50, h: 49 },
      { partNo: "P24243-24-24W", threadE: "2\"X12", dn: "40", dash: "24", a: 138.2, c: 14.8, s2: 60, h: 53.6 },
    ],
  },
  {
    id: 26,
    slug: "24293w-90-orfs-female-flat-seat-iso12151-1-saej516-24293w",
    name: "24293W 90° ORFS FEMALE FLAT SEAT ISO12151-1-SAEJ516 -24293W",
    shortName: "24293W 90° ORFS Female Flat Seat",
    code: "24293W",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24293W%2090%C2%B0%20ORFS%20FEMALE%20FLAT%20SEAT%20ISO12151-1-SAEJ516%20-24293W-4mLSJNXuYhG7LhDvUWRbFO3qdVq6aN.png",
    description:
      "90° ORFS female flat seat elbow hydraulic hose fitting per ISO 12151-1 and SAE J516. The right-angle design with flat-face O-ring seal enables compact, leak-free routing in tight hydraulic installations.",
    material: "carbon steel, stainless steel",
    surfaceTreat: "white zinc, yellow zinc, Cr6 free zinc",
    application:
      "widely used in the hydraulic and fluid conveying systems of construction machinery, agriculture, mining, and industrial equipment.",
    features: [
      "90° elbow female ORFS flat seat design",
      "Manufactured to ISO 12151-1 / SAE J516 standards",
      "ORFS flat-face seal for leak-free connections",
      "High resistance to vibration and pressure cycling",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "ORFS / ISO 12151-1 / SAE J516" },
      { label: "Design", value: "90° Female Flat Seat Elbow" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel" },
      { label: "Sealing", value: "Flat Face with O-Ring" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTable: [
      { partNo: "P24293-12-12W", threadE: "1.3/16\"X12", dn: "20", dash: "12", a: 73.8, c: 15, s2: 36, h: 80.5 },
      { partNo: "P24293-16-16W", threadE: "1.7/16\"X12", dn: "25", dash: "16", a: 88.9, c: 15, s2: 41, h: 88.5 },
      { partNo: "P24293-20-20W", threadE: "1.11/16\"X12", dn: "32", dash: "20", a: 105.8, c: 15, s2: 50, h: 100 },
      { partNo: "P24293-24-24W", threadE: "2\"X12", dn: "40", dash: "24", a: 123.2, c: 14.8, s2: 60, h: 114.5 },
    ],
  },
]
