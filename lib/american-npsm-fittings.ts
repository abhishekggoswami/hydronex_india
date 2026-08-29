export interface NPSMFittingProduct {
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
    dn?: string
    dash: string
    a?: number
    c?: number
    s1?: number
    s2?: number
    s?: number
    h?: number
  }[]
  partTableAlt?: any
  tableNote?: string
}

export const americanNPSMFittings: NPSMFittingProduct[] = [
  {
    id: 1,
    slug: "21698d-90-npsm-female-reusable-fitting-21698dr5",
    name: "21698D 90° NPSM FEMALE REUSABLE FITTING -21698DR5",
    shortName: "21698D 90° NPSM Female Reusable",
    code: "21698DR5",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21698D%2090%C2%B0%20NPSM%20FEMALE%20REUSABLE%20FITTING%20-216%2098DR5-sT8kAE9aOAvWQINpEp3IoS8jTp3D8k.png",
    description:
      "90° NPSM female reusable fitting with 60° cone seat. Designed for hydraulic and fluid conveying systems requiring reliable leak-free connections in tight spaces.",
    material: "carbon steel, stainless steel, brass",
    surfaceTreat: "galvanize Yellow Zinc, Black Zinc, Cr6 free Zinc, and Nickel",
    application:
      "widely used in the hydraulic and fluid conveying system of machinery, oilfield, mine, building, transportation, food, and other industries.",
    features: [
      "90° angle configuration for space-efficient layouts",
      "NPSM standard 60° cone seat design",
      "Reusable fitting for cost-effective maintenance",
      "High resistance to vibration and pressure cycling",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "NPSM (American National Pipe Straight Mechanical)" },
      { label: "Design", value: "90° Female Reusable Fitting" },
      { label: "Cone Angle", value: "60°" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel, Brass" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTable: [
      { partNo: "21698D-04-04(R5)", threadE: "1/4\"X18", dn: "6", dash: "4", a: 38.5, b: 4.6, h: 40.5, s1: 14, s2: 19 },
      { partNo: "21698D-06-05(R5)", threadE: "3/8\"X18", dn: "8", dash: "5", a: 43.4, b: 6, h: 43, s1: 14, s2: 22 },
      { partNo: "21698D-06-06(R5)", threadE: "3/8\"X18", dn: "10", dash: "6", a: 44.8, b: 6, h: 45.3, s1: 17, s2: 22 },
      { partNo: "21698D-08-08(R5)", threadE: "1/2\"X14", dn: "12", dash: "8", a: 53, b: 7.5, h: 53.2, s1: 19, s2: 27 },
      { partNo: "21698D-12-10(R5)", threadE: "3/4\"X14", dn: "16", dash: "10", a: 66.5, b: 8.9, h: 53.5, s1: 24, s2: 32 },
      { partNo: "21698D-12-12(R5)", threadE: "3/4\"X14", dn: "20", dash: "12", a: 79.5, b: 8.9, h: 69.1, s1: 27, s2: 32 },
      { partNo: "21698D-16-16(R5)", threadE: "1\" X11.5", dn: "25", dash: "16", a: 86.5, b: 10.5, h: 75, s1: 32, s2: 41 },
      { partNo: "21698D-20-20W(R5)", threadE: "1.1/4\"X11.5", dn: "32", dash: "20", a: 100.5, b: 11.2, h: 86, s1: 41, s2: 50 },
      { partNo: "21698D-24-24W(R5)", threadE: "1.1/2\"X11.5", dn: "40", dash: "24", a: 108, b: 11.2, h: 101.5, s1: 46, s2: 55 },
      { partNo: "21698D-32-32W(R5)", threadE: "2\" X11.5", dn: "50", dash: "32", a: 128.8, b: 11.2, h: 124.5, s1: 65, s2: 70 },
    ],
  },
  {
    id: 2,
    slug: "90-npsm-female-60-cone-21691",
    name: "90°NPSM FEMALE 60°CONE (21691)",
    shortName: "90° NPSM Female 60° Cone",
    code: "21691",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/90%C2%B0NPSM%20FEMALE%2060%C2%B0CONE%20%2821691%29-MP0r4rpFHFSykgBj0OBwXLDyikBhBO.png",
    description:
      "90° NPSM female fitting with 60° cone seat. Provides reliable sealing for 90° angle hydraulic connections with standard NPSM threading.",
    material: "carbon steel, stainless steel, brass",
    surfaceTreat: "galvanize Yellow Zinc, Black Zinc, Cr6 free Zinc, and Nickel",
    application:
      "widely used in the hydraulic and fluid conveying system of machinery, oilfield, mine, building, transportation, food, and other industries.",
    features: [
      "90° female configuration for right-angle connections",
      "NPSM 60° cone seat for leak-free sealing",
      "Consistent with American hydraulic standards",
      "Excellent vibration resistance",
      "Multiple material options",
    ],
    specs: [
      { label: "Standard", value: "NPSM (American National Pipe Straight Mechanical)" },
      { label: "Design", value: "90° Female Fitting" },
      { label: "Cone Angle", value: "60°" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel, Brass" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTable: [
      { partNo: "21691-04-04", threadE: "1/4\"X18", dn: "6", dash: "04", c: 4.6, s: 19, h: 40.5 },
      { partNo: "21691-06-04", threadE: "3/8\"X18", dn: "6", dash: "04", c: 6, s: 22, h: 37.7 },
      { partNo: "21691-06-05", threadE: "3/8\"X18", dn: "8", dash: "05", c: 6, s: 22, h: 40.7 },
      { partNo: "21691-06-06", threadE: "3/8\"X18", dn: "10", dash: "06", c: 6, s: 22, h: 45.3 },
      { partNo: "21691-08-08", threadE: "1/2\"X14", dn: "12", dash: "08", c: 7.5, s: 27, h: 53.2 },
      { partNo: "21691-12-10", threadE: "1/2\"X14", dn: "16", dash: "10", c: 8.9, s: 32, h: 53.5 },
      { partNo: "21691-12-12", threadE: "3/4\"X14", dn: "20", dash: "12", c: 8.9, s: 32, h: 69.1 },
      { partNo: "21691-16-12T", threadE: "1\" X11.5", dn: "20", dash: "12", c: 10.5, s: 41, h: 64.5 },
      { partNo: "21691-16-16", threadE: "1\" X11.5", dn: "25", dash: "16", c: 10.5, s: 41, h: 75 },
      { partNo: "21691-20-20", threadE: "1.1/4\"X11.5", dn: "32", dash: "20", c: 11.2, s: 50, h: 86 },
      { partNo: "21691-24-24", threadE: "1.1/2\"X11.5", dn: "38", dash: "24", c: 11.2, s: 55, h: 101.5 },
      { partNo: "21691-32-32", threadE: "2\" X11.5", dn: "51", dash: "32", c: 11.2, s: 70, h: 124.5 },
    ],
  },
  {
    id: 3,
    slug: "45-npsm-female-60-cone-21641",
    name: "45°NPSM FEMALE 60°CONE (21641)",
    shortName: "45° NPSM Female 60° Cone",
    code: "21641",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/45%C2%B0NPSM%20FEMALE%2060%C2%B0CONE%20%2821641%29-8Dbw238id5xAALxZSFzOZXBFM8z9Np.png",
    description:
      "45° NPSM female fitting with 60° cone seat. Ideal for angled connections in hydraulic systems requiring the American NPSM standard.",
    material: "carbon steel, stainless steel, brass",
    surfaceTreat: "galvanize Yellow Zinc, Black Zinc, Cr6 free Zinc, and Nickel",
    application:
      "widely used in the hydraulic and fluid conveying system of machinery, oilfield, mine, building, transportation, food, and other industries.",
    features: [
      "45° angle configuration for flexible routing",
      "NPSM 60° cone seat for reliable sealing",
      "Compact design for space-constrained applications",
      "High-quality cone seat machining",
      "Available in multiple material grades",
    ],
    specs: [
      { label: "Standard", value: "NPSM (American National Pipe Straight Mechanical)" },
      { label: "Design", value: "45° Female Fitting" },
      { label: "Cone Angle", value: "60°" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel, Brass" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTable: [
      { partNo: "21641-04-04", threadE: "1/4\"X18", dn: "6", dash: "04", c: 4.6, s: 19, h: 23 },
      { partNo: "21641-06-06", threadE: "3/8\"X18", dn: "10", dash: "06", c: 6, s: 22, h: 24.9 },
      { partNo: "21641-08-08", threadE: "1/2\"X14", dn: "12", dash: "08", c: 7.5, s: 27, h: 27.7 },
      { partNo: "21641-12-12", threadE: "3/4\"X14", dn: "20", dash: "12", c: 8.9, s: 32, h: 34 },
      { partNo: "21641-16-16", threadE: "1\" X11.5", dn: "25", dash: "16", c: 10.5, s: 41, h: 35 },
      { partNo: "21641-20-20", threadE: "1.1/4\"X11.5", dn: "32", dash: "20", c: 11.2, s: 50, h: 39.3 },
      { partNo: "21641-24-24", threadE: "1.1/2\"X11.5", dn: "38", dash: "24", c: 11.2, s: 55, h: 44.4 },
      { partNo: "21641-32-32", threadE: "2\" X11.5", dn: "51", dash: "32", c: 11.2, s: 70, h: 63.4 },
    ],
  },
  {
    id: 4,
    slug: "21611d-female-npsm-60-cone-seat",
    name: "21611D FEMALE NPSM (60º CONE SEAT)",
    shortName: "21611D Female NPSM 60° Cone",
    code: "21611D",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21611D%20FEMALE%20NPSM%20%2860%C2%BA%20CONE%20SEAT%29-zpHWKoanAndii2wfsdkvrIHkaE23sO.png",
    description:
      "Straight NPSM female fitting with 60° cone seat. High-performance connector for direct NPSM connections in hydraulic and fluid systems.",
    material: "carbon steel, stainless steel, brass",
    surfaceTreat: "galvanize Yellow Zinc, Black Zinc, Cr6 free Zinc, and Nickel",
    application:
      "widely used in the hydraulic and fluid conveying system of machinery, oilfield, mine, building, transportation, food, and other industries.",
    features: [
      "Straight female NPSM configuration",
      "Precision 60° cone seat for superior sealing",
      "Manufactured to American NPSM standards",
      "High resistance to vibration and pressure cycling",
      "Available in carbon steel and stainless steel",
    ],
    specs: [
      { label: "Standard", value: "NPSM (American National Pipe Straight Mechanical)" },
      { label: "Design", value: "Straight Female Fitting" },
      { label: "Cone Angle", value: "60°" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel, Brass" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTableAlt: [
      { sinoPulsePartNo: "21611D-2-4F", parkerPartNo: "10743-2-4", thread: "1/8x27", hoseID: "1/4", a: 43, w: "9/16", h: "9/16", b: 24 },
      { sinoPulsePartNo: "21611D-4-4F", parkerPartNo: "10743-4-4", thread: "1/4x18", hoseID: "1/4", a: 44, w: "11/16", h: "9/16", b: 25 },
      { sinoPulsePartNo: "21611D-6-6F", parkerPartNo: "10743-6-6", thread: "3/8x18", hoseID: "3/8", a: 53, w: "7/8", h: "11/16", b: 27 },
      { sinoPulsePartNo: "21611D-8-8F", parkerPartNo: "10743-8-8", thread: "1/2x14", hoseID: "1/2", a: 59, w: "1", h: "15/16", b: 27 },
      { sinoPulsePartNo: "21611D-12-12F", parkerPartNo: "10743-12-12", thread: "3/4x14", hoseID: "3/4", a: 69, w: "1-1/4", h: "1-1/16", b: 37 },
      { sinoPulsePartNo: "21611D-16-16F", parkerPartNo: "10743-16-16", thread: "1x11-1/2", hoseID: "1", a: 78, w: "1-1/2", h: "1-3/8", b: 37 },
      { sinoPulsePartNo: "21611D-20-20F", parkerPartNo: "10743-20-20", thread: "1-1/4x11-1/2", hoseID: "1-1/4", a: 83, w: "1-7/8", h: "1-7/8", b: 40 },
    ],
  },
  {
    id: 5,
    slug: "npsm-female-60-cone-21611",
    name: "NPSM FEMALE 60°CONE (21611)",
    shortName: "NPSM Female 60° Cone",
    code: "21611",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NPSM%20FEMALE%2060%C2%B0CONE%20%2821611%29-swAPWHsivv5zz9u5wMpSOdxkALLDqF.png",
    description:
      "NPSM female fitting with 60° cone seat. Straight configuration provides reliable sealing for standard NPSM hydraulic connections.",
    material: "carbon steel, stainless steel, brass",
    surfaceTreat: "galvanize Yellow Zinc, Black Zinc, Cr6 free Zinc, and Nickel",
    application:
      "widely used in the hydraulic and fluid conveying system of machinery, oilfield, mine, building, transportation, food, and other industries.",
    features: [
      "Standard NPSM female design",
      "60° cone seat for leak-free performance",
      "Straight configuration for direct connections",
      "Engineered for demanding hydraulic applications",
      "Multiple material and finish options",
    ],
    specs: [
      { label: "Standard", value: "NPSM (American National Pipe Straight Mechanical)" },
      { label: "Design", value: "Straight Female Fitting" },
      { label: "Cone Angle", value: "60°" },
      { label: "Materials Available", value: "Carbon Steel, Stainless Steel, Brass" },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining operations",
      "Industrial hydraulic systems",
    ],
    partTable: [
      { partNo: "21611-04-04", threadE: "1/4\"X18", dn: "6", dash: "04", c: 4.6, s: 19 },
      { partNo: "21611-04-06", threadE: "1/4\"X18", dn: "10", dash: "06", c: 4.6, s: 19 },
      { partNo: "21611-06-04", threadE: "3/8\"X18", dn: "6", dash: "04", c: 6, s: 22 },
      { partNo: "21611-06-05", threadE: "3/8\"X18", dn: "8", dash: "05", c: 6, s: 22 },
      { partNo: "21611-06-06", threadE: "3/8\"X18", dn: "10", dash: "06", c: 6, s: 22 },
      { partNo: "21611-08-08", threadE: "1/2\"X14", dn: "12", dash: "08", c: 7.5, s: 27 },
      { partNo: "21611-12-10", threadE: "3/4\"X14", dn: "16", dash: "10", c: 8.9, s: 32 },
      { partNo: "21611-12-12", threadE: "3/4\"X14", dn: "20", dash: "12", c: 8.9, s: 32 },
      { partNo: "21611-16-12T", threadE: "1\" X11.5", dn: "20", dash: "12", c: 10.5, s: 41 },
      { partNo: "21611-16-16", threadE: "1\" X11.5", dn: "25", dash: "16", c: 10.5, s: 41 },
      { partNo: "21611-20-20", threadE: "1.1/4\"X11.5", dn: "32", dash: "20", c: 11.2, s: 50 },
      { partNo: "21611-24-20T", threadE: "1.1/2\"X11.5", dn: "32", dash: "20", c: 11.2, s: 55 },
      { partNo: "21611-24-24", threadE: "1.1/2\"X11.5", dn: "38", dash: "24", c: 11.2, s: 55 },
      { partNo: "21611-32-32", threadE: "2\" X11.5", dn: "51", dash: "32", c: 11.2, s: 70 },
    ],
  },
]
