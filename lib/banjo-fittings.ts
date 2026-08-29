export interface BanjoFitting {
  id: number
  slug: string
  name: string
  code: string
  image: string
  description: string
  material: string
  surfaceTreat: string
  features: string[]
  applications: string[]
  partTable?: Array<{
    [key: string]: string | number | undefined
  }>
}

export const banjoFittings: BanjoFitting[] = [
  {
    id: 1,
    slug: "bsp-banjo-720b",
    name: "BSP BANJO (720B)",
    code: "720B",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BSP%20BANJO%20%28720B%29-qQ31ew10APqd6Oh6WpwsYqmR5ehG49.png",
    description: "BSP Banjo fitting with parallel thread design for reliable connections in hydraulic systems. Features threaded connection with 90-degree elbow configuration.",
    material: "carbon steel, stainless steel, brass",
    surfaceTreat: "galvanize Yellow Zinc, Black Zinc, Cr6 free Zinc, and Nickel",
    features: ["BSP Standard", "90° Elbow Design", "Parallel Threads", "Compact Form Factor"],
    applications: ["Hydraulic systems", "High-pressure applications", "Industrial equipment"],
    partTable: [
      { partNo: "720B-02", threadE: "G1/8\"X28", a: 29.5, b: 4.8, c: 4.8, s: 14 },
      { partNo: "720B-04", threadE: "G1/4\"X19", a: 28.5, b: 6, c: 6, s: 19 },
      { partNo: "720B-06", threadE: "G3/8\"X19", a: 38.5, b: 9, c: 7, s: 22 },
      { partNo: "720B-08", threadE: "G1/2\"X14", a: 44, b: 13, c: 8.5, s: 27 },
      { partNo: "720B-10", threadE: "G5/8\"X14", a: 48.5, b: 15, c: 10, s: 30 },
      { partNo: "720B-12", threadE: "G3/4\"X14", a: 56, b: 18, c: 10, s: 32 },
      { partNo: "720B-16", threadE: "G1\"X11", a: 68.5, b: 22, c: 13, s: 41 },
    ],
  },
  {
    id: 2,
    slug: "bsp-banjo-72011",
    name: "BSP BANJO (72011)",
    code: "72011",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BSP%20BANJO%2872011%29-TXXSWKdTbUleZZeYlbtlFus0Oi9XYG.png",
    description: "BSP Banjo connector with metric thread compatibility. Features tapered design for secure connections and high-pressure hydraulic applications.",
    material: "carbon steel, stainless steel, brass",
    surfaceTreat: "galvanize Yellow Zinc, Black Zinc, Cr6 free Zinc, and Nickel",
    features: ["BSP Standard", "Tapered Connection", "High Pressure Rated", "Metric Compatible"],
    applications: ["Hydraulic systems", "Fluid transfer", "Industrial machinery"],
    partTable: [
      { partNo: "72011-04-04", threadE: "G1/4\"X19", dn: 6, dash: "04", d: 13.3, sfD: 24, h: 15 },
      { partNo: "72011-06-05", threadE: "G3/8\"X19", dn: 8, dash: "05", d: 16.7, sfD: 29, h: 20 },
      { partNo: "72011-06-06", threadE: "G3/8\"X19", dn: 10, dash: "06", d: 16.7, sfD: 29, h: 20 },
      { partNo: "72011-08-06", threadE: "G1/2\"X14", dn: 10, dash: "06", d: 21, sfD: 38, h: 25 },
      { partNo: "72011-08-08", threadE: "G1/2\"X14", dn: 12, dash: "08", d: 21, sfD: 38, h: 25 },
      { partNo: "72011-10-10", threadE: "G5/8\"X14", dn: 16, dash: "10", d: 23, sfD: 40, h: 27 },
      { partNo: "72011-12-12", threadE: "G3/4\"X14", dn: 20, dash: "12", d: 26.5, sfD: 48, h: 31 },
      { partNo: "72011-16-16", threadE: "G1\"X11", dn: 25, dash: "16", d: 33.3, sfD: 60, h: 42 },
    ],
  },
  {
    id: 3,
    slug: "metric-banjo-70011",
    name: "METRIC BANJO (70011)",
    code: "70011",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/METRIC%20BANJO%20%2870011%29-1MYHdCVIChqmdr5kUIibrYjBd644FD.png",
    description: "Metric banjo fitting with DIN standard compliance. Features optimized design for hydraulic system connections with metric thread specifications.",
    material: "carbon steel, stainless steel, brass",
    surfaceTreat: "galvanize Yellow Zinc, Black Zinc, Cr6 free Zinc, and Nickel",
    features: ["Metric Standard", "DIN Compliant", "Optimized Design", "High Durability"],
    applications: ["Hydraulic systems", "Automotive applications", "Industrial equipment"],
    partTable: [
      { partNo: "70011-12-04", boltThread: "M12X1.5", dn: 6, dash: "04", d: 12, sfD: 20, h: 12 },
      { partNo: "70011-12-05", boltThread: "M12X1.5", dn: 8, dash: "05", d: 12, sfD: 20, h: 12 },
      { partNo: "70011-12-06", boltThread: "M12X1.5", dn: 10, dash: "06", d: 12, sfD: 20, h: 12 },
      { partNo: "70011-14-04", boltThread: "M14X1.5", dn: 6, dash: "04", d: 14, sfD: 24, h: 14 },
      { partNo: "70011-14-05", boltThread: "M14X1.5", dn: 8, dash: "05", d: 14, sfD: 24, h: 14 },
      { partNo: "70011-14-06", boltThread: "M14X1.5", dn: 10, dash: "06", d: 14, sfD: 24, h: 14 },
      { partNo: "70011-16-06", boltThread: "M16X1.5", dn: 10, dash: "06", d: 16, sfD: 28, h: 16 },
      { partNo: "70011-18-06", boltThread: "M18X1.5", dn: 10, dash: "06", d: 18, sfD: 32, h: 20 },
      { partNo: "70011-18-08", boltThread: "M18X1.5", dn: 12, dash: "08", d: 18, sfD: 32, h: 20 },
      { partNo: "70011-22-08", boltThread: "M22X1.5", dn: 12, dash: "08", d: 22, sfD: 39, h: 25 },
      { partNo: "70011-22-10", boltThread: "M22X1.5", dn: 16, dash: "10", d: 22, sfD: 39, h: 25 },
      { partNo: "70011-26-12", boltThread: "M26X1.5", dn: 20, dash: "12", d: 26, sfD: 46, h: 30 },
    ],
  },
  {
    id: 4,
    slug: "metric-banjo-700m",
    name: "METRIC BANJO (700M)",
    code: "700M",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/METRIC%20BANJO%20%28700M%29-2I6WEo6w8jL8oxQl8B9m3q7qoP8HHK.png",
    description: "Metric banjo fitting with enhanced sealing design. Provides reliable connections with metric thread compatibility and advanced seal configuration.",
    material: "carbon steel, stainless steel, brass",
    surfaceTreat: "galvanize Yellow Zinc, Black Zinc, Cr6 free Zinc, and Nickel",
    features: ["Metric Standard", "Enhanced Sealing", "Compact Design", "High Pressure Rated"],
    applications: ["Hydraulic systems", "High-pressure applications", "Industrial machinery"],
    partTable: [
      { partNo: "700M-10", threadE: "M10X1", a: 19, b: 5.5, c: 6, s: 14 },
      { partNo: "700M-12", threadE: "M12X1.5", a: 24, b: 7, c: 6, s: 17 },
      { partNo: "700M-14", threadE: "M14X1.5", a: 26, b: 9, c: 6, s: 19 },
      { partNo: "700M-16", threadE: "M16X1.5", a: 28, b: 11, c: 6, s: 22 },
      { partNo: "700M-18", threadE: "M18X1.5", a: 32, b: 13, c: 6, s: 24 },
      { partNo: "700M-22", threadE: "M22X1.5", a: 39, b: 16, c: 7, s: 27 },
      { partNo: "700M-26", threadE: "M26X1.5", a: 45, b: 20, c: 7, s: 32 },
      { partNo: "700M-30", threadE: "M30X1.5", a: 51, b: 24, c: 7, s: 36 },
    ],
  },
  {
    id: 5,
    slug: "700m-banjo-bolt-din-metric-thread",
    name: "700M BANJO BOLT DIN METRIC THREAD",
    code: "700M-BOLT",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/700M%20BANJO%20BOLT%20DIN%20METRIC%20THREAD-LfKc0IIVxJkHgxJRUwsfN87NNz24Rg.png",
    description: "DIN metric thread banjo bolt for hydraulic connections. Features metric thread specification with optimized clamping mechanism for secure assembly.",
    material: "carbon steel, stainless steel, brass",
    surfaceTreat: "galvanize Yellow Zinc, Black Zinc, Cr6 free Zinc, and Nickel",
    features: ["DIN Metric Thread", "700M Specification", "Clamping Design", "Reliable Fastening"],
    applications: ["Hydraulic system assembly", "High-pressure connections", "Industrial applications"],
    partTable: [
      { partNo: "700M-10", thread: "M10×1", dash: 10, a: 19, b: 5.5, c: 6, s1: 14 },
      { partNo: "700M-12", thread: "M12×1.5", dash: 12, a: 24, b: 7, c: 6, s1: 17 },
      { partNo: "700M-14", thread: "M14×1.5", dash: 14, a: 26, b: 9, c: 6, s1: 19 },
      { partNo: "700M-16", thread: "M16×1.5", dash: 16, a: 28, b: 11, c: 6, s1: 22 },
      { partNo: "700M-18", thread: "M18×1.5", dash: 18, a: 32, b: 13, c: 6, s1: 24 },
      { partNo: "700M-22", thread: "M22×1.5", dash: 22, a: 39, b: 16, c: 7, s1: 27 },
      { partNo: "700M-26", thread: "M26×1.5", dash: 26, a: 45, b: 20, c: 7, s1: 32 },
      { partNo: "700M-30", thread: "M30×1.5", dash: 30, a: 51, b: 24, c: 7, s1: 36 },
    ],
  },
  {
    id: 6,
    slug: "70011f-din-metric-banjo",
    name: "70011F DIN METRIC BANJO",
    code: "70011F",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/70011F%20DIN%20METRIC%20BANJO-I9pmtVTbxKSXnpzP4et3S8Qml9Xygh.png",
    description: "DIN metric banjo connector with advanced design features. Provides excellent sealing characteristics and reliable performance in hydraulic systems.",
    material: "carbon steel, stainless steel, brass",
    surfaceTreat: "galvanize Yellow Zinc, Black Zinc, Cr6 free Zinc, and Nickel",
    features: ["DIN Standard", "Metric Thread", "Advanced Design", "Metal-to-Metal Sealing"],
    applications: ["Hydraulic systems", "Industrial equipment", "High-pressure applications"],
    partTable: [
      { sinoPulsePartNo: "70011F-10-4", parkerPartNo: "14943-10-4", r: 10, hoseID: "1/4", a: 47, b: 24 },
      { sinoPulsePartNo: "70011F-12-4", parkerPartNo: "14943-12-4", r: 12, hoseID: "1/4", a: 47, b: 25 },
      { sinoPulsePartNo: "70011F-14-5", parkerPartNo: "14943-14-5", r: 14, hoseID: "5/16", a: 51, b: 27 },
      { sinoPulsePartNo: "70011F-16-6", parkerPartNo: "14943-16-6", r: 16, hoseID: "3/8", a: 58, b: 29 },
      { sinoPulsePartNo: "70011F-18-8", parkerPartNo: "14943-18-8", r: 18, hoseID: "1/2", a: 66, b: 31 },
      { sinoPulsePartNo: "70011F-22-10", parkerPartNo: "14943-22-10", r: 22, hoseID: "5/8", a: 74, b: 35 },
      { sinoPulsePartNo: "70011F-26-12", parkerPartNo: "14943-26-12", r: 26, hoseID: "3/4", a: 78, b: 39 },
    ],
  },
]

export function getBanjoFittingBySlug(slug: string): BanjoFitting | undefined {
  return banjoFittings.find((fitting) => fitting.slug === slug)
}

export function getAllBanjoFittingSlugs(): string[] {
  return banjoFittings.map((fitting) => fitting.slug)
}
