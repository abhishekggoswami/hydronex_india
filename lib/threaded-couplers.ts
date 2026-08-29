export interface ThreadedCouplerProduct {
  id: number
  code: string
  name: string
  shortName: string
  slug: string
  image: string
  description: string
  material: string
  surfaceTreat: string
  application: string
  features: string[]
  specs: Array<{ label: string; value: string }>
  applications: string[]
  techSpecs?: string[]
  nippelDiagramImage?: string
  nippelTable?: Array<{
    partNo: string
    thread: string
    bspp?: string
    overallLength: number
    exposedLength?: number
    hexSize: number
    largestDiameter: number
    partNo2: string
    thread2: string
    bspp2?: string
    overallLength2: number
    exposedLength2?: number
    hexSize2: number
    largestDiameter2: number
  }>
  couplerDiagramImage?: string
  partTable?: Array<{
    partNo: string
    thread: string
    bspp?: string
    overallLength: number
    hexSize: number
    largestDiameter: number
    partNo2: string
    thread2: string
    overallLength2: number
    hexSize2: number
    largestDiameter2: number
  }>
  couplerSFFDiagramImage?: string
  qktlCouplerSFFTable?: Array<{
    partNo: string
    thread: string
    bspp?: string
    overallLength: number
    hexSize: number
    largestDiameter: number
    partNo2: string
    thread2: string
    overallLength2: number
    hexSize2: number
    largestDiameter2: number
  }>
  ratedPressureFlowTable?: Array<{
    size: string
    pressure: number
    flowRate: number
    tempRange: string
  }>
  dustProtectionTable?: Array<{
    size: string
    inch: string
    partNoPVC: string
    colorPVC: string
    partNoAluminum: string
    colorAluminum: string
    partNoPVC2?: string
    colorPVC2?: string
    partNoAluminum2?: string
  }>
  performanceTable?: Array<{
    size: string
    inch: string
    pressure: string
    flowRate: string
    burstP1: string
    burstP2: string
    burstP3: string
  }>
  kvvDetailTable?: Array<{
    size: string
    pressure: number
    flowRate: number
    material?: string
    sealMaterial?: string
    tempRange?: string
  }>
  qktfWingNutTable?: Array<{
    partNo: string
    thread: string
    bodySize: string
    overallLength: number
    exposedLength: number
    hexSize: number
  }>
  qktfWingNutDiagramImage?: string
  qktfMaleTable?: Array<{
    partNo: string
    thread: string
    bodySize: string
    overallLength: number
    exposedLength: number
    hexSize: number
  }>
  qktfMaleDiagramImage?: string
  qktfHexNutTable?: Array<{
    partNo: string
    thread: string
    bodySize: string
    overallLength: number
    exposedLength: number
    hexSize: number
  }>
  qktfHexNutDiagramImage?: string
  qktfDetailTable?: Array<{
    size: string
    pressure: number
    material: string
    sealMaterial: string
    tempRange: string
  }>
  kcvFemaleMetricTable?: Array<{
    partNo: string
    thread: string
    overallLength: number
    hexSize: number
    largestDiameter: number
  }>
  kcvFemaleDiagram2Image?: string
  kcvMaleMetricTable?: Array<{
    partNo: string
    thread: string
    overallLength: number
    hexSize: number
    largestDiameter: number
  }>
  kcvMaleDiagram2Image?: string
  ksgMaleTable?: Array<{
    partNo: string
    thread: string
    overallLength: number
    hexSize: number
    largestDiameter: number
  }>
  ksgMaleDiagramImage?: string
  ksgFemaleTable?: Array<{
    partNo: string
    thread: string
    overallLength: number
    hexSize: number
    largestDiameter: number
  }>
  ksgFemaleDiagramImage?: string
  ksgTableOrder?: 'male-first' | 'female-first'
  ksgTableUnit?: 'mm' | 'inch'
}

export const threadedCouplers: ThreadedCouplerProduct[] = [
  {
    id: 1,
    code: "QKTF-001",
    name: "Thread-To-Connect Under Pressure Couplings Qktf Series",
    shortName: "QKTF Series",
    slug: "thread-to-connect-under-pressure-couplings-qktf-series",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Thread-To-Connect%20Under%20Pressure%20Couplings%20Qktf%20Series-Mr9rNY1LjR43KCDWpBOlWw3NvNYtB1.png",
    description:
      "The QKTF Series Thread-To-Connect couplings are engineered for connection under pressure conditions. Featuring a brass body with wing-nut coupler design, these couplings provide reliable performance in demanding hydraulic systems that require live-line connections without pressure drop.",
    material: "Brass / Carbon Steel",
    surfaceTreat: "Zinc Plated",
    application: "Industrial hydraulics, live-line connections, field maintenance",
    features: [
      "Connexion by screwing together the two parts",
      "Disconnexion by unscrewing the two parts",
      "Shut off by fat valve",
      "Male and Female connectable under pressure",
      "Disconnexion under pressure allowed",
      "Interchangeability US Market",
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
      { label: "Body Material", value: "Carbon Steel / Brass" },
      { label: "Seal Material", value: "NBR" },
      { label: "Temperature Range", value: "-25°C to +125°C" },
    ],
    applications: [
      "Industrial hydraulic systems",
      "Field maintenance under pressure",
      "Agricultural machinery",
      "Construction equipment",
    ],
    qktfWingNutDiagramImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FRPixwDdPInybC0KVEBdLz8ESmFgLw.png",
    qktfWingNutTable: [
      { partNo: "QKTF 06-N04SF", thread: "NPT1/2",   bodySize: '3/4"',   overallLength: 3.22, exposedLength: 1.16, hexSize: 4.06 },
      { partNo: "QKTF 06-N06SF", thread: "NPT3/4",   bodySize: '3/4"',   overallLength: 3.22, exposedLength: 1.16, hexSize: 4.06 },
      { partNo: "QKTF 08-N08SF", thread: "NPT1",     bodySize: '1"',     overallLength: 3.87, exposedLength: 1.43, hexSize: 4.38 },
      { partNo: "QKTF 10-N10SF", thread: "NPT1 1/4", bodySize: '1 1/4"', overallLength: 4.16, exposedLength: 1.78, hexSize: 5.2  },
    ],
    qktfMaleDiagramImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gwvR08ldOFtmv7ZN6bMGZWdjjGIgz3.png",
    qktfMaleTable: [
      { partNo: "QKTF 06-N04HF", thread: "NPT1/2",   bodySize: '3/4"',   overallLength: 3.22, exposedLength: 1.16, hexSize: 1.75 },
      { partNo: "QKTF 06-N06HF", thread: "NPT3/4",   bodySize: '3/4"',   overallLength: 3.22, exposedLength: 1.16, hexSize: 1.75 },
      { partNo: "QKTF 08-N08HF", thread: "NPT1",     bodySize: '1"',     overallLength: 3.87, exposedLength: 1.43, hexSize: 2.13 },
      { partNo: "QKTF 10-N10HF", thread: "NPT1 1/4", bodySize: '1 1/4"', overallLength: 4.16, exposedLength: 1.78, hexSize: 2.5  },
    ],
    qktfHexNutDiagramImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mvTSMIxHHwfzh1Cms2pShNjJnIoxsA.png",
    qktfHexNutTable: [
      { partNo: "QKTF 06-N04HF", thread: "NPT1/2",   bodySize: '3/4"',   overallLength: 3.11, exposedLength: 1.62, hexSize: 1.18 },
      { partNo: "QKTF 06-N06HF", thread: "NPT3/4",   bodySize: '3/4"',   overallLength: 3.11, exposedLength: 1.62, hexSize: 1.18 },
      { partNo: "QKTF 08-N08HF", thread: "NPT1",     bodySize: '1"',     overallLength: 3.55, exposedLength: 1.88, hexSize: 1.56 },
      { partNo: "QKTF 10-N10HF", thread: "NPT1 1/4", bodySize: '1 1/4"', overallLength: 3.71, exposedLength: 2.13, hexSize: 1.88 },
    ],
    qktfDetailTable: [
      { size: '3/4"',   pressure: 200, material: "Carbon Steel / Brass", sealMaterial: "NBR (other material available on request)", tempRange: "-20°C to +80°C" },
      { size: '1"',     pressure: 200, material: "Carbon Steel / Brass", sealMaterial: "NBR (other material available on request)", tempRange: "-20°C to +80°C" },
      { size: '1-1/4"', pressure: 200, material: "Carbon Steel / Brass", sealMaterial: "NBR (other material available on request)", tempRange: "-20°C to +80°C" },
    ],
    dustProtectionTable: [
      { size: "12.5", inch: "1/2",   partNoPVC: "", colorPVC: "", partNoAluminum: "QKTF-10S", colorAluminum: "", partNoPVC2: "",  partNoAluminum2: "QKTB-10S" },
      { size: "20",   inch: "3/4",   partNoPVC: "", colorPVC: "", partNoAluminum: "QKTF-12S", colorAluminum: "", partNoPVC2: "",  partNoAluminum2: "QKTB-12S" },
      { size: "25",   inch: "1",     partNoPVC: "", colorPVC: "", partNoAluminum: "QKTF-16S", colorAluminum: "", partNoPVC2: "",  partNoAluminum2: "QKTB-16S" },
      { size: "32",   inch: "1 1/4", partNoPVC: "", colorPVC: "", partNoAluminum: "QKTF-20S", colorAluminum: "", partNoPVC2: "",  partNoAluminum2: "QKTB-20S" },
      { size: "40",   inch: "1 1/2", partNoPVC: "", colorPVC: "", partNoAluminum: "QKTF-24S", colorAluminum: "", partNoPVC2: "",  partNoAluminum2: "QKTB-24S" },
    ],
    performanceTable: [
      { size: "20", inch: '3/4"',   pressure: "25 (3625)", flowRate: "62 (16.5)",  burstP1: "100 (14500)", burstP2: "75 (10900)",  burstP3: "82 (11900)" },
      { size: "25", inch: '1"',     pressure: "23 (3350)", flowRate: "160 (42)",   burstP1: "130 (18850)", burstP2: "70 (10000)",  burstP3: "80 (11600)" },
      { size: "32", inch: '1 1/4"', pressure: "21 (3000)", flowRate: "220 (58)",   burstP1: "78 (11300)",  burstP2: "64 (9300)",   burstP3: "68 (9900)"  },
      { size: "40", inch: '1 1/2"', pressure: "20 (2900)", flowRate: "300 (79)",   burstP1: "60 (8700)",   burstP2: "60 (8700)",   burstP3: "62 (9000)"  },
    ],
  },
  {
    id: 2,
    code: "KSN-001",
    name: "Thread Locked Type Hydraulic Couplings(Steel) Ksn Series",
    shortName: "KSN Series",
    slug: "thread-locked-type-hydraulic-couplings-steel-ksn-series",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Thread%20Locked%20Type%20Hydraulic%20Couplings%28Steel%29%20Ksn%20Series-fGDvRVFBDJ1JNG9jy4FUEIz53B9WWV.png",
    description:
      "The KSN Series Thread Locked Type Hydraulic Couplings are manufactured from high-grade stainless steel, offering superior corrosion resistance and mechanical strength. The unique cross/wing-style coupler body provides multi-directional grip for secure thread-locked connections in harsh environments.",
    material: "Carbon Steel",
    surfaceTreat: "Zinc Plated",
    application: "Marine, chemical, food processing, high-corrosion environments",
    features: [
      "Connexion by screwing together the two parts",
      "Disconnexion by unscrewing the two parts",
      "Shut off by poppet valve",
      "Connectable under residual pressure",
      "Disconnexion under residual pressure",
      "Interchangeability according to Snaptite internal Standards",
    ],
    techSpecs: [
      "High grade carbon steel tempered or carbonitriTed for specific area",
      "NBR",
      "Backup ring in PTFE",
      "-25°C to +125°C (-13°F to +257°F)",
      "According to ISO 7241-2",
    ],
    specs: [
      { label: "Standard", value: "ISO 7241-2" },
      { label: "Body Material", value: "Carbon Steel" },
      { label: "Seal Material", value: "NBR" },
      { label: "Surface Treatment", value: "Zinc Plated" },
    ],
    applications: [
      "Marine and offshore equipment",
      "Chemical processing plants",
      "Food and beverage industry",
      "Pharmaceutical manufacturing",
    ],
    ksgTableOrder: 'female-first' as const,
    ksgTableUnit: 'inch' as const,
    ksgFemaleDiagramImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kevG705qqvUDIwyy9r1H5bttylPTWH.png",
    ksgFemaleTable: [
      { partNo: "KSN-N06SF", thread: "NPT3/4",   overallLength: 1.75, hexSize: 1.35, largestDiameter: 3.27 },
      { partNo: "KSN-N08SF", thread: "NPT1",     overallLength: 2.25, hexSize: 1.77, largestDiameter: 4.17 },
      { partNo: "KSN-N10SF", thread: "NPT1-1/4", overallLength: 2.62, hexSize: 2.14, largestDiameter: 5.36 },
      { partNo: "KSN-N12SF", thread: "NPT1-1/2", overallLength: 3.24, hexSize: 2.50, largestDiameter: 5.97 },
      { partNo: "KSN-N16SF", thread: "NPT2",     overallLength: 4.00, hexSize: 3.25, largestDiameter: 7.05 },
    ],
    ksgMaleDiagramImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dTqzPXBBHi189QOLawxcm3vv9cieqa.png",
    ksgMaleTable: [
      { partNo: "KSN-N06PF", thread: "NPT3/4",   overallLength: 2.84, hexSize: 1.87, largestDiameter: 1.35 },
      { partNo: "KSN-N08PF", thread: "NPT1",     overallLength: 3.45, hexSize: 2.75, largestDiameter: 1.77 },
      { partNo: "KSN-N10PF", thread: "NPT1-1/4", overallLength: 4.40, hexSize: 3.25, largestDiameter: 2.14 },
      { partNo: "KSN-N12PF", thread: "NPT1-1/2", overallLength: 5.04, hexSize: 3.75, largestDiameter: 2.50 },
      { partNo: "KSN-N16PF", thread: "NPT2",     overallLength: 6.07, hexSize: 4.75, largestDiameter: 3.25 },
    ],
    dustProtectionTable: [
      { size: "20", inch: "3/4",   partNoPVC: "",    colorPVC: "",       partNoAluminum: "CSN-3/4S",   colorAluminum: "", partNoPVC2: "",    colorPVC2: "",       partNoAluminum2: "PSN-3/4S"   },
      { size: "25", inch: "1",     partNoPVC: "",    colorPVC: "",       partNoAluminum: "CSN-1S",     colorAluminum: "", partNoPVC2: "",    colorPVC2: "Orange", partNoAluminum2: "PSN-1S"     },
      { size: "32", inch: "1 1/4", partNoPVC: "",    colorPVC: "",       partNoAluminum: "CSN-1 1/4S", colorAluminum: "", partNoPVC2: "",    colorPVC2: "Orange", partNoAluminum2: "PSN-1 1/4S" },
      { size: "40", inch: "1 1/2", partNoPVC: "",    colorPVC: "",       partNoAluminum: "CSN-1 1/2S", colorAluminum: "", partNoPVC2: "",    colorPVC2: "",       partNoAluminum2: "PSN-1 1/2S" },
      { size: "50", inch: "2",     partNoPVC: "",    colorPVC: "",       partNoAluminum: "CSN-2S",     colorAluminum: "", partNoPVC2: "",    colorPVC2: "",       partNoAluminum2: "PSN-2S"     },
    ],
    kvvDetailTable: [
      { size: '3/4"',   pressure: 730, flowRate: 55   },
      { size: '1"',     pressure: 630, flowRate: 100  },
      { size: '1-1/4"', pressure: 600, flowRate: 140  },
      { size: '1-1/2"', pressure: 400, flowRate: 300  },
      { size: '2"',     pressure: 350, flowRate: 1000 },
    ],
    performanceTable: [
      { size: "20", inch: '3/4"',   pressure: "73 (10600)", flowRate: "55 (14.7)",   burstP1: "220 (31900)", burstP2: "230 (33400)", burstP3: "230 (33400)" },
      { size: "25", inch: '1"',     pressure: "63 (9150)",  flowRate: "100 (26)",    burstP1: "240 (34800)", burstP2: "190 (27600)", burstP3: "190 (27600)" },
      { size: "32", inch: '1 1/4"', pressure: "60 (8700)",  flowRate: "140 (37)",    burstP1: "180 (26100)", burstP2: "180 (26100)", burstP3: "200 (29000)" },
      { size: "40", inch: '1 1/2"', pressure: "40 (5800)",  flowRate: "300 (79)",    burstP1: "150 (21800)", burstP2: "120 (17100)", burstP3: "150 (21800)" },
      { size: "50", inch: '2"',     pressure: "35 (5000)",  flowRate: "1000 (264)",  burstP1: "130 (18600)", burstP2: "130 (18600)", burstP3: "105 (15250)" },
    ],
  },
  {
    id: 3,
    code: "KVS-001",
    name: "Thread Locked Type Hydraulic Couplings(Steel) Kvs Series",
    shortName: "KVS Series",
    slug: "thread-locked-type-hydraulic-couplings-steel-kvs-series",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Thread%20Locked%20Type%20Hydraulic%20Couplings%28Steel%29%20Kvs%20Series-ZbkfkgQkktJP9CrDsYXWd9mbL939nd.png",
    description:
      "The KVS Series Thread Locked Type Hydraulic Couplings feature a robust steel construction with precision-knurled barrel coupler body for positive grip. Designed for high-cycle industrial applications, the KVS series delivers reliable thread-locked performance with excellent pressure and temperature resistance.",
    material: "Carbon Steel",
    surfaceTreat: "Zinc Plated / Phosphated",
    application: "Industrial machinery, hydraulic systems, manufacturing equipment",
    features: [
      "Connexion by screwing together the two parts",
      "Disconnexion by unscrewing the two parts",
      "Shut off by poppet valve",
      "Connectable under residual pressure",
      "Disconnexion under residual pressure",
      "Interchangeability according to Faster Internal Standards",
    ],
    techSpecs: [
      "High grade carbon steel tempered or carbonitride for specific stressed area",
      "NBR",
      "Backup ring in PTFE",
      "-25°C to +125°C (-13°F to +257°F)",
      "According to ISO 7241-2",
    ],
    specs: [
      { label: "Standard", value: "ISO 7241-2" },
      { label: "Body Material", value: "Carbon Steel" },
      { label: "Seal Material", value: "NBR" },
      { label: "Surface Treatment", value: "Zinc Plated" },
    ],
    applications: [
      "Industrial hydraulic machinery",
      "Manufacturing equipment",
      "Steel and metal processing",
      "General industrial applications",
    ],
    couplerDiagramImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sbCnhozlZObMF5yWIMYenS210iZ9x3.png",
    partTable: [
      { partNo: "KVS-02SF", thread: "G1/4",   overallLength: 68,  hexSize: 22,  largestDiameter: 30,  partNo2: "KVS-N02SF", thread2: "NPT1/4",   overallLength2: 2.68, hexSize2: 0.87, largestDiameter2: 1.18 },
      { partNo: "KVS-03SF", thread: "G3/8",   overallLength: 76,  hexSize: 30,  largestDiameter: 40,  partNo2: "KVS-N03SF", thread2: "NPT3/8",   overallLength2: 2.99, hexSize2: 1.18, largestDiameter2: 1.57 },
      { partNo: "KVS-04SF", thread: "G1/2",   overallLength: 87,  hexSize: 34,  largestDiameter: 45,  partNo2: "KVS-N04SF", thread2: "NPT1/2",   overallLength2: 3.43, hexSize2: 1.34, largestDiameter2: 1.77 },
      { partNo: "KVS-06SF", thread: "G3/4",   overallLength: 106, hexSize: 41,  largestDiameter: 55,  partNo2: "KVS-N06SF", thread2: "NPT3/4",   overallLength2: 4.17, hexSize2: 1.61, largestDiameter2: 2.17 },
      { partNo: "KVS-08SF", thread: "G1",     overallLength: 124, hexSize: 50,  largestDiameter: 60,  partNo2: "KVS-N08SF", thread2: "NPT1",     overallLength2: 4.88, hexSize2: 1.97, largestDiameter2: 2.36 },
      { partNo: "KVS-10SF", thread: "G1 1/4", overallLength: 153, hexSize: 65,  largestDiameter: 80,  partNo2: "KVS-N10SF", thread2: "NPT1 1/4", overallLength2: 6.02, hexSize2: 2.56, largestDiameter2: 3.15 },
      { partNo: "KVS-12SF", thread: "G1 1/2", overallLength: 172, hexSize: 75,  largestDiameter: 98,  partNo2: "KVS-N12SF", thread2: "NPT1 1/2", overallLength2: 6.77, hexSize2: 2.95, largestDiameter2: 3.86 },
      { partNo: "KVS-16SF", thread: "G2",     overallLength: 207, hexSize: 100, largestDiameter: 129, partNo2: "KVS-N16SF", thread2: "NPT2",     overallLength2: 8.15, hexSize2: 3.94, largestDiameter2: 5.08 },
    ],
    nippelDiagramImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FrwIjHkmVr8b4MdadGrfw6YZKJawAh.png",
    nippelTable: [
      { partNo: "KVS-02PF", thread: "G1/4",   overallLength: 43,  hexSize: 25,  largestDiameter: 14.1, partNo2: "KVS-N02PF", thread2: "NPT1/4",   overallLength2: 1.69, hexSize2: 0.98, largestDiameter2: 0.56 },
      { partNo: "KVS-03PF", thread: "G3/8",   overallLength: 48,  hexSize: 32,  largestDiameter: 18.9, partNo2: "KVS-N03PF", thread2: "NPT3/8",   overallLength2: 1.89, hexSize2: 1.26, largestDiameter2: 0.74 },
      { partNo: "KVS-04PF", thread: "G1/2",   overallLength: 53,  hexSize: 34,  largestDiameter: 20.5, partNo2: "KVS-N04PF", thread2: "NPT1/2",   overallLength2: 2.09, hexSize2: 1.34, largestDiameter2: 0.81 },
      { partNo: "KVS-06PF", thread: "G3/4",   overallLength: 63,  hexSize: 46,  largestDiameter: 27.9, partNo2: "KVS-N06PF", thread2: "NPT3/4",   overallLength2: 2.40, hexSize2: 1.81, largestDiameter2: 1.10 },
      { partNo: "KVS-08PF", thread: "G1",     overallLength: 72,  hexSize: 50,  largestDiameter: 31.3, partNo2: "KVS-N08PF", thread2: "NPT1",     overallLength2: 2.83, hexSize2: 1.97, largestDiameter2: 1.23 },
      { partNo: "KVS-10PF", thread: "G1 1/4", overallLength: 86,  hexSize: 65,  largestDiameter: 43.9, partNo2: "KVS-N10PF", thread2: "NPT1 1/4", overallLength2: 3.39, hexSize2: 2.56, largestDiameter2: 1.73 },
      { partNo: "KVS-12PF", thread: "G1 1/2", overallLength: 95,  hexSize: 80,  largestDiameter: 53.4, partNo2: "KVS-N12PF", thread2: "NPT1 1/2", overallLength2: 3.74, hexSize2: 3.15, largestDiameter2: 2.10 },
      { partNo: "KVS-16PF", thread: "G2",     overallLength: 118, hexSize: 110, largestDiameter: 81.9, partNo2: "KVS-N16PF", thread2: "NPT2",     overallLength2: 4.65, hexSize2: 4.33, largestDiameter2: 3.22 },
    ],
    dustProtectionTable: [
      { size: "6.3",  inch: "1/4",   partNoPVC: "CVS-1/4",   colorPVC: "",       partNoAluminum: "CVS-1/4S",   colorAluminum: "", partNoPVC2: "PVS-1/4",   colorPVC2: "",       partNoAluminum2: "PVS-1/4S"   },
      { size: "10",   inch: "3/8",   partNoPVC: "CVS-3/8",   colorPVC: "Orange", partNoAluminum: "CVS-3/8S",   colorAluminum: "", partNoPVC2: "PVS-3/8",   colorPVC2: "Orange", partNoAluminum2: "PVS-3/8S"   },
      { size: "12.5", inch: "1/2",   partNoPVC: "CVS-1/2",   colorPVC: "Orange", partNoAluminum: "CVS-1/2S",   colorAluminum: "", partNoPVC2: "PVS-1/2",   colorPVC2: "Orange", partNoAluminum2: "PVS-1/2S"   },
      { size: "20",   inch: "3/4",   partNoPVC: "CVS-3/4",   colorPVC: "",       partNoAluminum: "CVS-3/4S",   colorAluminum: "", partNoPVC2: "PVS-3/4",   colorPVC2: "",       partNoAluminum2: "PVS-3/4S"   },
      { size: "25",   inch: "1",     partNoPVC: "CVS-1",     colorPVC: "",       partNoAluminum: "CVS-1S",     colorAluminum: "", partNoPVC2: "PVS-1",     colorPVC2: "",       partNoAluminum2: "PVS-1S"     },
      { size: "32",   inch: "1 1/4", partNoPVC: "CVS-1 1/4", colorPVC: "",       partNoAluminum: "CVS-1 1/4S", colorAluminum: "", partNoPVC2: "PVS-1 1/4", colorPVC2: "",       partNoAluminum2: "PVS-1 1/4S" },
      { size: "40",   inch: "1 1/2", partNoPVC: "CVS-1 1/2", colorPVC: "",       partNoAluminum: "CVS-1 1/2S", colorAluminum: "", partNoPVC2: "PVS-1 1/2", colorPVC2: "",       partNoAluminum2: "PVS-1 1/2S" },
      { size: "50",   inch: "2",     partNoPVC: "CVS-2",     colorPVC: "",       partNoAluminum: "CVS-2S",     colorAluminum: "", partNoPVC2: "PVS-2",     colorPVC2: "",       partNoAluminum2: "PVS-2S"     },
    ],
    kvvDetailTable: [
      { size: '1/4"',   pressure: 800, flowRate: 8,    material: "Carbon Steel", sealMaterial: "NBR (other materials available on request)", tempRange: "-20°C to +125°C" },
      { size: '3/8"',   pressure: 800, flowRate: 18,   material: "Carbon Steel", sealMaterial: "NBR (other materials available on request)", tempRange: "-20°C to +125°C" },
      { size: '1/2"',   pressure: 730, flowRate: 40,   material: "Carbon Steel", sealMaterial: "NBR (other materials available on request)", tempRange: "-20°C to +125°C" },
      { size: '3/4"',   pressure: 730, flowRate: 55,   material: "Carbon Steel", sealMaterial: "NBR (other materials available on request)", tempRange: "-20°C to +125°C" },
      { size: '1"',     pressure: 630, flowRate: 100,  material: "Carbon Steel", sealMaterial: "NBR (other materials available on request)", tempRange: "-20°C to +125°C" },
      { size: '1-1/4"', pressure: 600, flowRate: 140,  material: "Carbon Steel", sealMaterial: "NBR (other materials available on request)", tempRange: "-20°C to +125°C" },
      { size: '1-1/2"', pressure: 400, flowRate: 300,  material: "Carbon Steel", sealMaterial: "NBR (other materials available on request)", tempRange: "-20°C to +125°C" },
      { size: '2"',     pressure: 350, flowRate: 1000, material: "Carbon Steel", sealMaterial: "NBR (other materials available on request)", tempRange: "-20°C to +125°C" },
    ],
    performanceTable: [
      { size: "6.3",  inch: '1/4"',    pressure: "80 (11600)", flowRate: "8 (2.1)",     burstP1: "240 (34800)", burstP2: "240 (34800)", burstP3: "250 (36300)" },
      { size: "10",   inch: '3/8"',    pressure: "80 (11600)", flowRate: "18 (4.7)",    burstP1: "350 (50000)", burstP2: "340 (49300)", burstP3: "240 (34800)" },
      { size: "12.5", inch: '1/2"',    pressure: "73 (10600)", flowRate: "40 (10.6)",   burstP1: "220 (31900)", burstP2: "220 (31900)", burstP3: "220 (31900)" },
      { size: "20",   inch: '3/4"',    pressure: "73 (10600)", flowRate: "55 (14.7)",   burstP1: "220 (31900)", burstP2: "230 (33400)", burstP3: "230 (33400)" },
      { size: "25",   inch: '1"',      pressure: "63 (9150)",  flowRate: "100 (26)",    burstP1: "240 (34800)", burstP2: "190 (27600)", burstP3: "190 (27600)" },
      { size: "32",   inch: '1 1/4"',  pressure: "60 (8700)",  flowRate: "140 (37)",    burstP1: "180 (26100)", burstP2: "180 (26100)", burstP3: "200 (29000)" },
      { size: "40",   inch: '1 1/2"',  pressure: "40 (5800)",  flowRate: "300 (79)",    burstP1: "150 (21800)", burstP2: "120 (17100)", burstP3: "150 (21800)" },
      { size: "50",   inch: '2"',      pressure: "35 (5000)",  flowRate: "1000 (264)",  burstP1: "130 (18600)", burstP2: "130 (18600)", burstP3: "105 (15250)" },
    ],
  },
  {
    id: 4,
    code: "KCV-001",
    name: "Thread Locked Type Hydraulic Couplings(Steel) Kcv Series",
    shortName: "KCV Series",
    slug: "thread-locked-type-hydraulic-couplings-steel-kcv-series",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Thread%20Locked%20Type%20Hydraulic%20Couplings%28Steel%29%20Kcv%20Series-q6bY83Keqey9h2kfufaQQyoXwsGufz.png",
    description:
      "The KCV Series Thread Locked Type Hydraulic Couplings offer a compact, reliable solution for standard industrial hydraulic connections. Constructed from high-grade carbon steel with precision machining, these couplings provide consistent thread-locked performance across a broad range of pressures and flow rates.",
    material: "Carbon Steel",
    surfaceTreat: "Zinc Plated",
    application: "General industrial hydraulics, OEM equipment, maintenance applications",
    features: [
      "Connexion by screwing together the two parts",
      "Disconnexion by unscrewing the two parts",
      "Shut off by poppet valve",
      "Connectable under residual pressure",
      "Disconnexion under residual pressure",
      "Interchangeability German Market",
    ],
    techSpecs: [
      "High-grade carbon steel with heat treated wear parts",
      "NBR",
      "Backup ring in PTFE",
      "-25°C to +125°C (-13°F to +257°F)",
      "According to ISO 7241-2",
    ],
    specs: [
      { label: "Standard", value: "ISO 7241-2" },
      { label: "Body Material", value: "Carbon Steel" },
      { label: "Seal Material", value: "NBR" },
      { label: "Surface Treatment", value: "Zinc Plated" },
    ],
    applications: [
      "OEM hydraulic equipment",
      "Industrial maintenance",
      "Agricultural and forestry machinery",
      "Construction and mining equipment",
    ],
    couplerDiagramImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zomZtpTJNc5AoI86GAU9JZqMpbSQ2e.png",
    partTable: [
      { partNo: "KCV-02SF", thread: "G1/4",    overallLength: 58,  hexSize: 19, largestDiameter: 13.1, partNo2: "KCMN028E",   thread2: "NPT",      overallLength2: 2.28, hexSize2: 0.75, largestDiameter2: 0.52 },
      { partNo: "KCV-03SF", thread: "G3/8",    overallLength: 65,  hexSize: 24, largestDiameter: 17.6, partNo2: "KCN038E",    thread2: "NPT3/8",   overallLength2: 2.55, hexSize2: 0.94, largestDiameter2: 0.69 },
      { partNo: "KCV-04SE", thread: "G1/2",    overallLength: 67,  hexSize: 27, largestDiameter: 22,   partNo2: "KCV-N04SF",  thread2: "NPT1/2",   overallLength2: 2.63, hexSize2: 1.06, largestDiameter2: 0.87 },
      { partNo: "KCV-06SF", thread: "G3/4",    overallLength: 83,  hexSize: 38, largestDiameter: 28.1, partNo2: "KCV-N06SF",  thread2: "NPT3/4",   overallLength2: 3.27, hexSize2: 1.50, largestDiameter2: 1.11 },
      { partNo: "KCV-08SF", thread: "G1",      overallLength: 95,  hexSize: 42, largestDiameter: 35,   partNo2: "KCV-N08SF",  thread2: "NPT1",     overallLength2: 3.74, hexSize2: 1.65, largestDiameter2: 1.38 },
      { partNo: "KCV-10SF", thread: "G1 1/4",  overallLength: 110, hexSize: 50, largestDiameter: 54,   partNo2: "KCV-N10SF",  thread2: "NPT1 1/4", overallLength2: 4.33, hexSize2: 1.97, largestDiameter2: 2.13 },
      { partNo: "KCV-12SF", thread: "G1 1/2",  overallLength: 121, hexSize: 55, largestDiameter: 54,   partNo2: "KCV-N12SF",  thread2: "NPT1 1/2", overallLength2: 4.76, hexSize2: 2.17, largestDiameter2: 2.13 },
    ],
    kcvFemaleDiagram2Image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n0r1RqxZr73PgVRYtQshsqS5B8hMyl.png",
    kcvFemaleMetricTable: [
      { partNo: "KCV-14SF",  thread: "MM14X1.5", overallLength: 2.52, hexSize: 0.75, largestDiameter: 0.52 },
      { partNo: "KCV-16SF",  thread: "MM16X1.5", overallLength: 2.68, hexSize: 0.94, largestDiameter: 0.69 },
      { partNo: "KCV-18SF",  thread: "MM18X1.5", overallLength: 2.68, hexSize: 1.06, largestDiameter: 0.87 },
      { partNo: "KCV-22SF",  thread: "MM22X1.5", overallLength: 3.35, hexSize: 1.50, largestDiameter: 1.89 },
      { partNo: "KCV-30SF",  thread: "MM30X1.5", overallLength: 3.74, hexSize: 1.65, largestDiameter: 2.20 },
      { partNo: "KCV-36SF",  thread: "MM36X1.5", overallLength: 5.16, hexSize: 1.97, largestDiameter: 3.15 },
      { partNo: "KCV-42SF",  thread: "MM42X1.5", overallLength: 5.16, hexSize: 2.17, largestDiameter: 3.15 },
    ],
    nippelDiagramImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aoFaAgfnSh3pUfx4qBsgfUBMjwAZsv.png",
    nippelTable: [
      { partNo: "KCV-02PF", thread: "G1/4",   overallLength: 64,  hexSize: 19, largestDiameter: 30, partNo2: "KCV-N02PF",  thread2: "NPT1/4",   overallLength2: 2.52, hexSize2: 0.75, largestDiameter2: 1.18 },
      { partNo: "KCV-03PF", thread: "G3/8",   overallLength: 68,  hexSize: 24, largestDiameter: 34, partNo2: "KCV-N03PF",  thread2: "NPT3/8",   overallLength2: 2.68, hexSize2: 0.94, largestDiameter2: 1.34 },
      { partNo: "KCV-04PF", thread: "G1/2",   overallLength: 68,  hexSize: 27, largestDiameter: 42, partNo2: "KCVM04PE",   thread2: "NPT1/2",   overallLength2: 2.68, hexSize2: 1.06, largestDiameter2: 1.65 },
      { partNo: "KCV-06PF", thread: "G3/4",   overallLength: 85,  hexSize: 38, largestDiameter: 48, partNo2: "KCV-N06PF",  thread2: "NPT3/4",   overallLength2: 3.34, hexSize2: 1.50, largestDiameter2: 1.89 },
      { partNo: "KCV-08PF", thread: "G1",     overallLength: 95,  hexSize: 42, largestDiameter: 56, partNo2: "KCV-N08PF",  thread2: "NPT1",     overallLength2: 3.74, hexSize2: 1.65, largestDiameter2: 2.20 },
      { partNo: "KCV-10PF", thread: "G1 1/4", overallLength: 131, hexSize: 50, largestDiameter: 80, partNo2: "KCV-N10PF",  thread2: "NPT1 1/4", overallLength2: 5.16, hexSize2: 1.97, largestDiameter2: 3.15 },
      { partNo: "KCW12PE",  thread: "G1 1/2", overallLength: 131, hexSize: 55, largestDiameter: 80, partNo2: "KCV-N12PF",  thread2: "NPT1 1/2", overallLength2: 5.16, hexSize2: 2.17, largestDiameter2: 3.15 },
    ],
    kcvMaleDiagram2Image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-M9siaFNlFOMcx4fVcvQO2OdKqQpadd.png",
    kcvMaleMetricTable: [
      { partNo: "KCV-14PF",  thread: "MM14X1.5", overallLength: 64,  hexSize: 19, largestDiameter: 30 },
      { partNo: "KCV-16PF",  thread: "MM16X1.5", overallLength: 68,  hexSize: 24, largestDiameter: 34 },
      { partNo: "KCV-18PF",  thread: "MM18X1.5", overallLength: 68,  hexSize: 27, largestDiameter: 42 },
      { partNo: "KCV-22PF",  thread: "MM22X1.5", overallLength: 85,  hexSize: 38, largestDiameter: 48 },
      { partNo: "KCV-30PF",  thread: "MM30X1.5", overallLength: 95,  hexSize: 42, largestDiameter: 56 },
      { partNo: "KCV-36PF",  thread: "MM36X1.5", overallLength: 131, hexSize: 50, largestDiameter: 80 },
      { partNo: "KCV-42PF",  thread: "MM42X1.5", overallLength: 131, hexSize: 55, largestDiameter: 80 },
    ],
    kvvDetailTable: [
      { size: '1/4"',   pressure: 500, flowRate: 13,  material: "Carbon Steel", sealMaterial: "NBR", tempRange: "-20 to +125" },
      { size: '3/8"',   pressure: 400, flowRate: 25,  material: "Carbon Steel", sealMaterial: "NBR", tempRange: "-20 to +125" },
      { size: '1/2"',   pressure: 400, flowRate: 75,  material: "Carbon Steel", sealMaterial: "NBR", tempRange: "-20 to +125" },
      { size: '3/4"',   pressure: 350, flowRate: 135, material: "Carbon Steel", sealMaterial: "NBR", tempRange: "-20 to +125" },
      { size: '1"',     pressure: 350, flowRate: 250, material: "Carbon Steel", sealMaterial: "NBR", tempRange: "-20 to +125" },
      { size: '1-1/2"', pressure: 350, flowRate: 450, material: "Carbon Steel", sealMaterial: "NBR", tempRange: "-20 to +125" },
    ],
    dustProtectionTable: [
      { size: "6.3",  inch: "1/4",   partNoPVC: "CCV-1/4",   colorPVC: "Orange", partNoAluminum: "CCV-1/4S",   colorAluminum: "", partNoPVC2: "PCV-1/4",   colorPVC2: "Orange", partNoAluminum2: "PCV-1/4S"   },
      { size: "10",   inch: "3/8",   partNoPVC: "CCV-3/8",   colorPVC: "Orange", partNoAluminum: "CCV-3/8S",   colorAluminum: "", partNoPVC2: "PCV-3/8",   colorPVC2: "Orange", partNoAluminum2: "PCV-3/8S"   },
      { size: "12.5", inch: "1/2",   partNoPVC: "CCV-1/2",   colorPVC: "Orange", partNoAluminum: "CCV-1/2S",   colorAluminum: "", partNoPVC2: "PCV-1/2",   colorPVC2: "Orange", partNoAluminum2: "PCV-1/2S"   },
      { size: "20",   inch: "3/4",   partNoPVC: "CCV-3/4",   colorPVC: "Orange", partNoAluminum: "CCV-3/4S",   colorAluminum: "", partNoPVC2: "PCV-3/4",   colorPVC2: "Orange", partNoAluminum2: "PCV-3/4S"   },
      { size: "25",   inch: "1",     partNoPVC: "CCV-1",     colorPVC: "Orange", partNoAluminum: "CCV-1S",     colorAluminum: "", partNoPVC2: "PCV-1",     colorPVC2: "Orange", partNoAluminum2: "PCV-1S"     },
      { size: "40",   inch: "1 1/2", partNoPVC: "CCV-1 1/2", colorPVC: "Orange", partNoAluminum: "CCV-1 1/2S", colorAluminum: "", partNoPVC2: "PCV-1 1/2", colorPVC2: "Orange", partNoAluminum2: "PCV-1 1/2S" },
    ],
    performanceTable: [
      { size: "6.3",  inch: '1/4"',   pressure: "50 (7500)", flowRate: "13 (3.3)",   burstP1: "150 (22500)", burstP2: "160 (24000)", burstP3: "170 (24200)" },
      { size: "10",   inch: '3/8"',   pressure: "40 (5700)", flowRate: "25 (6.5)",   burstP1: "120 (17100)", burstP2: "130 (18600)", burstP3: "170 (24200)" },
      { size: "12.5", inch: '1/2"',   pressure: "40 (5700)", flowRate: "75 (19.8)",  burstP1: "120 (17100)", burstP2: "140 (20000)", burstP3: "140 (20000)" },
      { size: "20",   inch: '3/4"',   pressure: "35 (5000)", flowRate: "135 (35.2)", burstP1: "110 (15700)", burstP2: "120 (17100)", burstP3: "140 (20000)" },
      { size: "25",   inch: '1"',     pressure: "35 (5000)", flowRate: "250 (66.1)", burstP1: "110 (15700)", burstP2: "130 (18600)", burstP3: "140 (20000)" },
      { size: "40",   inch: '1 1/2"', pressure: "35 (5000)", flowRate: "450 (119)",  burstP1: "110 (15700)", burstP2: "110 (15700)", burstP3: "110 (15700)" },
    ],
  },
  {
    id: 5,
    code: "KGW-001",
    name: "Thread Locked Type Hydraulic Couplings(Steel) Kgw Series",
    shortName: "KGW Series",
    slug: "thread-locked-type-hydraulic-couplings-steel-kgw-series",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Thread%20Locked%20Type%20Hydraulic%20Couplings%28Steel%29%20Kgw%20Series-VtiGKlQkU6VHEPaDVH3on15kL063Fm.png",
    description:
      "The KGW Series Thread Locked Type Hydraulic Couplings are stainless steel couplings designed for applications requiring an elongated coupler body for deep-panel or manifold mounting. The precision-machined stainless steel construction delivers superior corrosion resistance and long service life.",
    material: "Stainless Steel (SS316)",
    surfaceTreat: "Passivated / Electropolished",
    application: "Panel mounting, manifold systems, corrosive environments",
    features: [
      "Connexion by screwing together the two parts",
      "Disconnexion by unscrewing the two parts",
      "Shut off by poppet valve",
      "Connectable under residual pressure",
      "Disconnexion under residual pressure",
      "Interchangeability German Market",
    ],
    techSpecs: [
      "High grade carbon steel with heat treated wear parts",
      "NBR",
      "Backup ring in PTFE",
      "-25°C to +125°C (-13°F to +257°F)",
      "According to ISO 7241-2",
    ],
    specs: [
      { label: "Standard", value: "ISO 7241-2" },
      { label: "Body Material", value: "Carbon Steel" },
      { label: "Seal Material", value: "NBR (other available)" },
      { label: "Surface Treatment", value: "Zinc Plated" },
    ],
    applications: [
      "Panel and manifold mounting systems",
      "Chemical and petrochemical plants",
      "High-purity hydraulic systems",
      "Offshore and marine applications",
    ],
    couplerDiagramImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0fFEk1PmzJFCL0U04CKyIm5AmATm5e.png",
    partTable: [
      { partNo: "KGW-02SF", thread: "G1/4",  overallLength: 58.9, hexSize: 19, largestDiameter: 32, partNo2: "KGW-N02SF", thread2: "NPT1/4",  overallLength2: 2.31, hexSize2: 0.74, largestDiameter2: 1.25 },
      { partNo: "KGW-03SF", thread: "G3/8",  overallLength: 66.5, hexSize: 22, largestDiameter: 36, partNo2: "KGW-N03SF", thread2: "NPT3/8",  overallLength2: 2.61, hexSize2: 0.86, largestDiameter2: 1.41 },
      { partNo: "KGW-04SF", thread: "G1/2",  overallLength: 76.5, hexSize: 27, largestDiameter: 41, partNo2: "KGW-N04SF", thread2: "NPT1/2",  overallLength2: 3.00, hexSize2: 1.06, largestDiameter2: 1.61 },
      { partNo: "KGW-06SF", thread: "G3/4",  overallLength: 89.5, hexSize: 35, largestDiameter: 50, partNo2: "KGW-N06SF", thread2: "NPT3/4",  overallLength2: 3.52, hexSize2: 1.37, largestDiameter2: 1.96 },
      { partNo: "KGW-08SF", thread: "G1",    overallLength: 105.5,hexSize: 41, largestDiameter: 65, partNo2: "KGW-N08SF", thread2: "NPT1",    overallLength2: 4.15, hexSize2: 1.61, largestDiameter2: 2.55 },
    ],
    nippelDiagramImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Zfjdjkn3ytxF91FaDXtMbOyZWq5xKY.png",
    nippelTable: [
      { partNo: "KGW-02PF", thread: "G1/4",  overallLength: 36,   hexSize: 19, largestDiameter: 12.5, partNo2: "KGW-N02PF", thread2: "NPT1/4",  overallLength2: 1.41, hexSize2: 0.74, largestDiameter2: 0.49 },
      { partNo: "KGW-03PF", thread: "G3/8",  overallLength: 40.5, hexSize: 22, largestDiameter: 16,   partNo2: "KGW-N03PF", thread2: "NPT3/8",  overallLength2: 1.59, hexSize2: 0.86, largestDiameter2: 0.62 },
      { partNo: "KGW-04PF", thread: "G1/2",  overallLength: 49,   hexSize: 27, largestDiameter: 17,   partNo2: "KGW-N04PF", thread2: "NPT1/2",  overallLength2: 1.92, hexSize2: 1.06, largestDiameter2: 0.66 },
      { partNo: "KGW-06PF", thread: "G3/4",  overallLength: 56,   hexSize: 35, largestDiameter: 19,   partNo2: "KGW-N06PF", thread2: "NPT3/4",  overallLength2: 2.20, hexSize2: 1.37, largestDiameter2: 0.74 },
      { partNo: "KGW-08PF", thread: "G1",    overallLength: 66,   hexSize: 41, largestDiameter: 22,   partNo2: "KGW-N08PF", thread2: "NPT1",    overallLength2: 2.59, hexSize2: 1.61, largestDiameter2: 0.86 },
    ],
    kvvDetailTable: [
      { size: '1/4"',   pressure: 500, flowRate: 13,  material: "Carbon Steel", sealMaterial: "NBR (other available)", tempRange: "-20 to +125" },
      { size: '3/8"',   pressure: 400, flowRate: 25,  material: "Carbon Steel", sealMaterial: "NBR (other available)", tempRange: "-20 to +125" },
      { size: '1/2"',   pressure: 400, flowRate: 75,  material: "Carbon Steel", sealMaterial: "NBR (other available)", tempRange: "-20 to +125" },
      { size: '3/4"',   pressure: 350, flowRate: 135, material: "Carbon Steel", sealMaterial: "NBR (other available)", tempRange: "-20 to +125" },
      { size: '1"',     pressure: 350, flowRate: 250, material: "Carbon Steel", sealMaterial: "NBR (other available)", tempRange: "-20 to +125" },
      { size: '1-1/2"', pressure: 350, flowRate: 450, material: "Carbon Steel", sealMaterial: "NBR (other available)", tempRange: "-20 to +125" },
    ],
    dustProtectionTable: [
      { size: "6.3",  inch: "1/4", partNoPVC: "", colorPVC: "", partNoAluminum: "CGW-1/4", colorAluminum: "Orange", partNoPVC2: "", colorPVC2: "Orange", partNoAluminum2: "PGW-1/4" },
      { size: "10",   inch: "3/8", partNoPVC: "", colorPVC: "", partNoAluminum: "CGW-3/8", colorAluminum: "Orange", partNoPVC2: "", colorPVC2: "Orange", partNoAluminum2: "PGW-3/8" },
      { size: "12.5", inch: "1/2", partNoPVC: "", colorPVC: "", partNoAluminum: "CGW-1/2", colorAluminum: "Orange", partNoPVC2: "", colorPVC2: "Orange", partNoAluminum2: "PGW-1/2" },
      { size: "20",   inch: "3/4", partNoPVC: "", colorPVC: "", partNoAluminum: "CGW-3/4", colorAluminum: "Orange", partNoPVC2: "", colorPVC2: "Orange", partNoAluminum2: "PGW-3/4" },
      { size: "25",   inch: "1",   partNoPVC: "", colorPVC: "", partNoAluminum: "CGW-1",   colorAluminum: "Orange", partNoPVC2: "", colorPVC2: "Orange", partNoAluminum2: "PGW-1"   },
    ],
    performanceTable: [
      { size: "6.3",  inch: '1/4"',   pressure: "50 (7500)", flowRate: "13 (3.3)",   burstP1: "150 (22500)", burstP2: "160 (24000)", burstP3: "170 (24200)" },
      { size: "10",   inch: '3/8"',   pressure: "40 (5700)", flowRate: "25 (6.5)",   burstP1: "120 (17100)", burstP2: "130 (18600)", burstP3: "170 (24200)" },
      { size: "12.5", inch: '1/2"',   pressure: "40 (5700)", flowRate: "75 (19.8)",  burstP1: "120 (17100)", burstP2: "140 (20000)", burstP3: "140 (20000)" },
      { size: "20",   inch: '3/4"',   pressure: "35 (5000)", flowRate: "135 (35.2)", burstP1: "110 (15700)", burstP2: "120 (17100)", burstP3: "140 (20000)" },
      { size: "25",   inch: '1"',     pressure: "35 (5000)", flowRate: "250 (66.1)", burstP1: "110 (15700)", burstP2: "130 (18600)", burstP3: "140 (20000)" },
      { size: "40",   inch: '1 1/2"', pressure: "35 (5000)", flowRate: "450 (119)",  burstP1: "110 (15700)", burstP2: "110 (15700)", burstP3: "110 (15700)" },
    ],
  },
  {
    id: 6,
    code: "QKTL-001",
    name: "Thread Locked Type Hydraulic Couplings(Steel) Qktl Series",
    shortName: "QKTL Series",
    slug: "thread-locked-type-hydraulic-couplings-steel-qktl-series",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Thread%20Locked%20Type%20Hydraulic%20Couplings%28Steel%29%20Qktl%20Series-GbHywDKxfuG4TZmsVQAaxSFgBcR3Di.png",
    description:
      "The QKTL Series Thread Locked Type Hydraulic Couplings feature a tall, knurled barrel coupler body for maximum grip surface area combined with a compact hex-body nipple. These couplings are designed for high-cycle applications where ease of connection and disconnection is critical.",
    material: "Carbon Steel",
    surfaceTreat: "Zinc Plated / Nickel Plated",
    application: "High-cycle industrial systems, maintenance equipment, test rigs",
    features: [
      "Tall knurled barrel for superior hand grip",
      "High-cycle rated for frequent connect/disconnect operations",
      "Thread-locked safety retention mechanism",
      "Carbon steel with zinc/nickel plating for corrosion protection",
      "Compact nipple body for restricted space installations",
      "Compatible with hydraulic oil and water-based fluids",
    ],
    specs: [
      { label: "Standard", value: "ISO 7241" },
      { label: "Body Material", value: "Carbon Steel" },
      { label: "Seal Material", value: "NBR" },
      { label: "Surface Treatment", value: "Zinc / Nickel Plated" },
    ],
    applications: [
      "Test bench and rig connections",
      "High-cycle maintenance equipment",
      "Hydraulic tool connections",
      "Industrial automation systems",
    ],
    techSpecs: [
      "High grade carbon steel with heat treated wear parts",
      "NBR",
      "Backup ring in PTFE",
      "-25°C to +125°C (-13°F to +257°F)",
      "According to ISO 7241-2",
    ],
    ratedPressureFlowTable: [
      { size: '1/4"', pressure: 750, flowRate: 3,  tempRange: "-20°C to +125°C" },
      { size: '3/8"', pressure: 750, flowRate: 6,  tempRange: "-20°C to +125°C" },
      { size: '1/2"', pressure: 600, flowRate: 8,  tempRange: "-20°C to +125°C" },
      { size: '3/4"', pressure: 600, flowRate: 10, tempRange: "-20°C to +125°C" },
    ],
    nippelDiagramImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hLuBFx438wcgUSFHhCiQvfAyjtrCu7.png",
    nippelTable: [
      { partNo: "QKTL-02PF",  thread: "G1/4",  bspp: '1/4"', overallLength: 33, exposedLength: 12, hexSize: 19, largestDiameter: 29, partNo2: "QKTL-N02PF",  thread2: "NPT1/4",  bspp2: '1/4"', overallLength2: 1.29, exposedLength2: 0.48, hexSize2: 0.75, largestDiameter2: 1.13 },
      { partNo: "QKTL-03PF",  thread: "G3/8",  bspp: '3/8"', overallLength: 40, exposedLength: 13, hexSize: 24, largestDiameter: 32, partNo2: "QKTL-N03PF",  thread2: "NPT3/8",  bspp2: '3/8"', overallLength2: 1.58, exposedLength2: 0.50, hexSize2: 0.94, largestDiameter2: 1.25 },
      { partNo: "QKTL-04PF",  thread: "G1/2",  bspp: '1/2"', overallLength: 49, exposedLength: 22, hexSize: 27, largestDiameter: 38, partNo2: "QKTL-N04PF",  thread2: "NPT1/2",  bspp2: '1/2"', overallLength2: 1.92, exposedLength2: 0.86, hexSize2: 1.06, largestDiameter2: 1.49 },
      { partNo: "QKTL-06PF",  thread: "G3/4",  bspp: '3/4"', overallLength: 70, exposedLength: 40, hexSize: 50, largestDiameter: 56, partNo2: "QKTL-N06PF",  thread2: "NPT3/4",  bspp2: '3/4"', overallLength2: 2.75, exposedLength2: 1.57, hexSize2: 1.96, largestDiameter2: 2.20 },
    ],
    couplerDiagramImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IPaYfsAH2RKf8iR9Bg0I4YIZnZX1j6.png",
    partTable: [
      { partNo: "QKTL-02SFM", thread: "G1/4",  bspp: '1/4"', overallLength: 60, hexSize: 21, largestDiameter: 29, partNo2: "QKTL-N02SFM", thread2: "NPT1/4", overallLength2: 2.38, hexSize2: 0.81, largestDiameter2: 1.13 },
      { partNo: "QKTL-03SFM", thread: "G3/8",  bspp: '3/8"', overallLength: 73, hexSize: 25, largestDiameter: 35, partNo2: "QKTL-N03SFM", thread2: "NPT3/8", overallLength2: 2.88, hexSize2: 1.00, largestDiameter2: 1.38 },
      { partNo: "QKTL-04SFM", thread: "G1/2",  bspp: '1/2"', overallLength: 63, hexSize: 27, largestDiameter: 45, partNo2: "QKTL-N04SFM", thread2: "NPT1/2", overallLength2: 2.48, hexSize2: 1.06, largestDiameter2: 1.77 },
      { partNo: "QKTL-06SFM", thread: "G3/4",  bspp: '3/4"', overallLength: 82, hexSize: 38, largestDiameter: 42, partNo2: "QKTL-N06SFM", thread2: "NPT3/4", overallLength2: 3.22, hexSize2: 1.49, largestDiameter2: 1.65 },
    ],
    couplerSFFDiagramImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JjRS87Ig7X0tBPbLEKuTcTdM22e79V.png",
    qktlCouplerSFFTable: [
      { partNo: "QKTL-02SFF", thread: "G1/4",  bspp: '1/4"', overallLength: 60, hexSize: 21, largestDiameter: 29, partNo2: "QKTL-N02SF", thread2: "NPT1/4", overallLength2: 2.38, hexSize2: 0.81, largestDiameter2: 1.13 },
      { partNo: "QKTL-03SFF", thread: "G3/8",  bspp: '3/8"', overallLength: 73, hexSize: 25, largestDiameter: 35, partNo2: "QKTL-N03SF", thread2: "NPT3/8", overallLength2: 2.88, hexSize2: 1.00, largestDiameter2: 1.38 },
      { partNo: "QKTL-04SFF", thread: "G1/2",  bspp: '1/2"', overallLength: 63, hexSize: 27, largestDiameter: 45, partNo2: "QKTL-N04SF", thread2: "NPT1/2", overallLength2: 2.48, hexSize2: 1.06, largestDiameter2: 1.77 },
      { partNo: "QKTL-06SFF", thread: "G3/4",  bspp: '3/4"', overallLength: 82, hexSize: 38, largestDiameter: 42, partNo2: "QKTL-N06SF", thread2: "NPT3/4", overallLength2: 3.22, hexSize2: 1.49, largestDiameter2: 1.65 },
    ],
    dustProtectionTable: [
      { size: "6.3", inch: "1/4", partNoPVC: "CTL-1/4",  colorPVC: "",       partNoAluminum: "", colorAluminum: "", partNoPVC2: "PTL-1/4",  partNoAluminum2: "" },
      { size: "10",  inch: "3/8", partNoPVC: "CTL-3/8",  colorPVC: "",       partNoAluminum: "", colorAluminum: "", partNoPVC2: "PTL-3/8",  partNoAluminum2: "" },
    ],
    performanceTable: [
      { size: "6.3", inch: '1/4"', pressure: "103 (14935)", flowRate: "15 (3.96)", burstP1: "350 (50750)", burstP2: "310 (44950)", burstP3: "330 (47850)" },
      { size: "10",  inch: '3/8"', pressure: "100 (14500)", flowRate: "20 (5.28)", burstP1: "350 (50750)", burstP2: "310 (47850)", burstP3: "300 (43500)" },
    ],
  },
  {
    id: 7,
    code: "KSG-001",
    name: "Thread Locked Type Hydraulic Couplings(Steel) Ksg Series",
    shortName: "KSG Series",
    slug: "thread-locked-type-hydraulic-couplings-steel-ksg-series",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Thread%20Locked%20Type%20Hydraulic%20Couplings%28Steel%29%20Ksg%20Series-uuKA54BkUeKNiyRddREV5l84lw0o4E.png",
    description:
      "The KSG Series Thread Locked Type Hydraulic Couplings feature a unique panel-mount flange coupler body designed for bulkhead and panel installation. Combined with a standard threaded nipple, the KSG series provides a secure, permanent-body connection point for hydraulic systems requiring fixed mounting.",
    material: "Carbon Steel",
    surfaceTreat: "Zinc Plated",
    application: "Panel mounting, bulkhead installation, fixed-point hydraulic systems",
    features: [
      "Connexion by screwing together the two parts",
      "Disconnexion by unscrewing the two parts",
      "Shut off by poppet valve",
      "Connectable under residual pressure",
      "Disconnexion under residual pressure",
      "Interchangeability according to Faster internal Standards",
    ],
    techSpecs: [
      "High grade carbon steel with heat treated wear parts",
      "NBR",
      "Backup ring in PTFE",
      "-25°C to +125°C (-13°F to +257°F)",
      "According to ISO 7241-2",
    ],
    specs: [
      { label: "Standard", value: "ISO 7241-2" },
      { label: "Body Material", value: "Carbon Steel" },
      { label: "Seal Material", value: "NBR" },
      { label: "Surface Treatment", value: "Zinc Plated" },
    ],
    applications: [
      "Bulkhead and panel mounting",
      "Mobile hydraulic equipment",
      "Fixed hydraulic power units",
      "Industrial machine tools",
    ],
    ksgMaleDiagramImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CgjzT6evWyJbBhMpxebKobsRWrltZ5.png",
    ksgMaleTable: [
      { partNo: "KSG-06PF", thread: "G3/4", overallLength: 78, hexSize: 33, largestDiameter: 114 },
      { partNo: "KSG-08PF", thread: "G1",   overallLength: 82, hexSize: 40, largestDiameter: 114 },
    ],
    ksgFemaleDiagramImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-N3eK2dHMDn2dWb2cXxS79ILUIKuVvp.png",
    ksgFemaleTable: [
      { partNo: "KSG-06SF", thread: "G3/4", overallLength: 78, hexSize: 46, largestDiameter: 52 },
      { partNo: "KSG-08SF", thread: "G1",   overallLength: 83, hexSize: 55, largestDiameter: 63 },
    ],
    kvvDetailTable: [
      { size: '3/4"', pressure: 350, flowRate: 32, material: "Carbon Steel", sealMaterial: "NBR", tempRange: "-20°C to +125°C" },
      { size: '1"',   pressure: 300, flowRate: 42, material: "Carbon Steel", sealMaterial: "NBR", tempRange: "-20°C to +125°C" },
    ],
    performanceTable: [
      { size: "20", inch: '3/4"', pressure: "35 (5000)", flowRate: "32 (120)",  burstP1: "130 (18850)", burstP2: "110 (15950)", burstP3: "130 (18850)" },
      { size: "25", inch: '1"',   pressure: "30 (4350)", flowRate: "42 (160)",  burstP1: "90 (13050)",  burstP2: "120 (17400)", burstP3: "130 (18850)" },
    ],
  },
  {
    id: 8,
    code: "KVV-001",
    name: "Thread Locked Type Hydraulic Couplings(Steel) Kvv Series",
    shortName: "KVV Series",
    slug: "thread-locked-type-hydraulic-couplings-steel-kvv-series",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Thread%20Locked%20Type%20Hydraulic%20Couplings%28Steel%29%20Kvv%20Series-L0eq23roUryHSXfWinmPfuQRzSzvvI.png",
    description:
      "The KVV Series Thread Locked Type Hydraulic Couplings feature a large-diameter knurled barrel coupler paired with a slim precision nipple. Designed for maximum flow capacity, the KVV series is ideal for high-flow hydraulic applications where pressure drop minimization is essential.",
    material: "Carbon Steel",
    surfaceTreat: "Zinc Plated / Phosphated",
    application: "High-flow hydraulic systems, large-bore applications, industrial equipment",
    features: [
      "Large-bore design for maximum flow capacity",
      "Heavy-duty knurled coupler barrel",
      "Thread-locked mechanism for secure retention",
      "Precision-machined slim nipple body",
      "Minimized pressure drop at high flow rates",
      "Available in sizes up to 1\" and larger",
    ],
    specs: [
      { label: "Standard", value: "ISO 7241" },
      { label: "Body Material", value: "Carbon Steel" },
      { label: "Seal Material", value: "NBR" },
      { label: "Surface Treatment", value: "Zinc Plated" },
    ],
    applications: [
      "High-flow industrial hydraulics",
      "Large-bore system connections",
      "Heavy construction equipment",
      "Mining and quarrying machinery",
    ],
    features: [
      "Connexion by screwing together the two parts",
      "Disconnexion by unscrewing the two parts",
      "Shut off by poppet valve",
      "Connectable under residual pressure",
      "Disconnexion under residual pressure",
      "Interchangeability according to Fasterinternal Standards",
    ],
    techSpecs: [
      "High grade carbon steel with heat treated wear parts",
      "NBR",
      "Backup ring in PTFE",
      "-25°C to +125°C (-13°F to +257°F)",
      "According to IsO 7241-2",
    ],
    couplerDiagramImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wBNZ3dIdQPfLK8Al1uDL1U8g4aDLqz.png",
    partTable: [
      { partNo: "KVV-02SF", thread: "G1/4",  overallLength: 59.7, hexSize: 27, largestDiameter: 30, partNo2: "KVV-N02SF", thread2: "NPT1/4", overallLength2: 2.35, hexSize2: 1.06, largestDiameter2: 1.18 },
      { partNo: "KVV-03SF", thread: "G3/8",  overallLength: 71.9, hexSize: 34, largestDiameter: 38, partNo2: "KVV-N03SF", thread2: "NPT3/8", overallLength2: 2.83, hexSize2: 1.34, largestDiameter2: 1.50 },
      { partNo: "KVV-04SF", thread: "G1/2",  overallLength: 78.7, hexSize: 38, largestDiameter: 42, partNo2: "KVV-N04SF", thread2: "NPT1/2", overallLength2: 3.10, hexSize2: 1.50, largestDiameter2: 1.65 },
      { partNo: "KVV-06SF", thread: "G3/4",  overallLength: 105.6, hexSize: 50, largestDiameter: 55, partNo2: "KVV-N06SF", thread2: "NPT3/4", overallLength2: 4.16, hexSize2: 1.97, largestDiameter2: 2.17 },
      { partNo: "KVV-08SF", thread: "G1",    overallLength: 124,  hexSize: 55, largestDiameter: 61, partNo2: "KVV-N08SF", thread2: "NPT1",   overallLength2: 4.88, hexSize2: 2.17, largestDiameter2: 2.42 },
    ],
    nippelDiagramImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BCDOONUOJzl4wJnhrvVMGbdrv1XpYE.png",
    nippelTable: [
      { partNo: "KVV-02PF", thread: "G1/4",  overallLength: 33, hexSize: 19, largestDiameter: 14.1, partNo2: "KVV-N02PF", thread2: "NPT1/4", overallLength2: 1.30, hexSize2: 0.75, largestDiameter2: 0.56 },
      { partNo: "KVV-03PF", thread: "G3/8",  overallLength: 41, hexSize: 24, largestDiameter: 18.9, partNo2: "KVV-N03PF", thread2: "NPT3/8", overallLength2: 1.61, hexSize2: 0.94, largestDiameter2: 0.74 },
      { partNo: "KVV-04PF", thread: "G1/2",  overallLength: 49, hexSize: 27, largestDiameter: 20.5, partNo2: "KVV-N04PF", thread2: "NPT1/2", overallLength2: 1.93, hexSize2: 1.06, largestDiameter2: 0.81 },
      { partNo: "KVV-06PF", thread: "G3/4",  overallLength: 62, hexSize: 34, largestDiameter: 27.9, partNo2: "KVV-N06PF", thread2: "NPT3/4", overallLength2: 2.44, hexSize2: 0.34, largestDiameter2: 1.10 },
      { partNo: "KVV-08PF", thread: "G1",    overallLength: 70, hexSize: 41, largestDiameter: 31.3, partNo2: "KVV-N08PF", thread2: "NPT1",   overallLength2: 2.75, hexSize2: 0.61, largestDiameter2: 1.23 },
    ],
    kvvDetailTable: [
      { size: '1/4"', pressure: 350, flowRate: 18,  material: "Carbon Steel", sealMaterial: "NBR", tempRange: "-20 to +125" },
      { size: '3/8"', pressure: 300, flowRate: 30,  material: "Carbon Steel", sealMaterial: "NBR", tempRange: "-20 to +125" },
      { size: '1/2"', pressure: 300, flowRate: 45,  material: "Carbon Steel", sealMaterial: "NBR", tempRange: "-20 to +125" },
      { size: '3/4"', pressure: 250, flowRate: 90,  material: "Carbon Steel", sealMaterial: "NBR", tempRange: "-20 to +125" },
      { size: '1"',   pressure: 230, flowRate: 140, material: "Carbon Steel", sealMaterial: "NBR", tempRange: "-20 to +125" },
    ],
    dustProtectionTable: [
      { size: "6.3",  inch: "1/4", partNoPVC: "CVV-1/4",  colorPVC: "",    partNoAluminum: "CVVS-1/4", colorAluminum: "",    partNoPVC2: "PVV-1/4",  partNoAluminum2: "PVVS-1/4" },
      { size: "10",   inch: "3/8", partNoPVC: "CVV-3/8",  colorPVC: "Red", partNoAluminum: "CVVS-3/8", colorAluminum: "Red", partNoPVC2: "PVV-3/8",  partNoAluminum2: "PVVS-3/8" },
      { size: "12.5", inch: "1/2", partNoPVC: "CVV-1/2",  colorPVC: "Red", partNoAluminum: "CVVS-1/2", colorAluminum: "",    partNoPVC2: "PVV-1/2",  partNoAluminum2: "PVVS-1/2" },
      { size: "20",   inch: "3/4", partNoPVC: "CVV-3/4",  colorPVC: "",    partNoAluminum: "CVVS-3/4", colorAluminum: "",    partNoPVC2: "PVV-3/4",  partNoAluminum2: "PVVS-3/4" },
      { size: "25",   inch: "1",   partNoPVC: "CVV-1",    colorPVC: "",    partNoAluminum: "CVVS-1",   colorAluminum: "",    partNoPVC2: "PVV-1",    partNoAluminum2: "PVVS-1"   },
    ],
    performanceTable: [
      { size: "6.3",  inch: '1/4"', pressure: "35 (5000)",  flowRate: "18 (4.8)",  burstP1: "170 (24700)", burstP2: "140 (20000)", burstP3: "150 (21800)" },
      { size: "10",   inch: '3/8"', pressure: "30 (4350)",  flowRate: "30 (7.9)",  burstP1: "120 (17400)", burstP2: "120 (17400)", burstP3: "150 (21800)" },
      { size: "12.5", inch: '1/2"', pressure: "30 (4350)",  flowRate: "45 (12)",   burstP1: "130 (18900)", burstP2: "120 (17100)", burstP3: "160 (23000)" },
      { size: "20",   inch: '3/4"', pressure: "25 (3600)",  flowRate: "90 (24)",   burstP1: "100 (14500)", burstP2: "100 (14500)", burstP3: "120 (17400)" },
      { size: "25",   inch: '1"',   pressure: "23 (3300)",  flowRate: "140 (37)",  burstP1: "100 (14500)", burstP2: "90 (13000)",  burstP3: "100 (14500)" },
    ],
  },
]
