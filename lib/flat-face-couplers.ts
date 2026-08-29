export interface FlatFaceCoupler {
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
  diagram?: string
  specificationTable?: Array<{
    bodySize: string
    ratedPressure: string
    flowRate: string
    material: string
    sealMaterial: string
    temperatureRange: string
  }>
  basicSpecTable?: Array<{
    bodySize: string
    ratedPressure: string
    flowRate: string
    material: string
    sealMaterial: string
    temperatureRange: string
  }>
  detailedSpecificationTable?: Array<{
    partNumberMetric: string
    threadMetric: string
    overallLengthMm: string
    hexSizeMm: string
    largestDiameterMm: string
    partNumberImperial: string
    threadImperial: string
    overallLengthInch: string
    hexSizeInch: string
    largestDiameterInch: string
  }>
  couplerFemaleTable?: Array<{
    partNo: string
    thread: string
    overallLength: number
    hexSize: number
    largestDiameter: number
    partNo2: string
    thread2: string
    overallLength2: number
    hexSize2: number
    largestDiameter2: number
  }>
  nippleTable?: Array<{
    partNo: string
    thread: string
    overallLength: number
    hexSize: number
    largestDiameter: number | string
    partNo2: string
    thread2: string
    overallLength2: number
    hexSize2: number
    largestDiameter2: number | string
  }>
  nippelDiagramImage?: string
  couplerDiagramImage?: string
  performanceTable?: Array<{
    size: string
    inch: string
    pressure: string
    flowRate: string
    burstP1: string
    burstP2: string
    burstP3: string
  }>
  dustProtectionTable?: Array<{
    size: string
    inch: string
    partNoAluminum: string
    colorAluminum: string
    partNoPVC: string
    colorPVC: string
  }>
  // QKPT-specific tables
  qkptCouplerTable?: Array<{
    partNo: string
    thread: string
    bodySize: string
    overallLengthMm: number
    hexSizeMm: number
    largestDiameterMm: number
    partNo2: string
    thread2: string
    bodySize2: string
    overallLengthIn: number
    hexSizeIn: number
    largestDiameterIn: number
  }>
  qkptNippleTable?: Array<{
    partNo: string
    thread: string
    bodySize: string
    overallLengthMm: number
    exposedLengthMm: number
    hexSizeMm: number
    largestDiameterMm: number
    partNo2: string
    thread2: string
    bodySize2: string
    overallLengthIn: number
    exposedLengthIn: number
    hexSizeIn: number
  }>
  qkptPerformanceTable?: Array<{
    sizeMm: string
    sizeInch: string
    pressure: string
    flowRate: string
    burstP1: string
    burstP2: string
    burstP3: string
    forceToConnect: string
  }>
  qkptCouplerDiagramImage?: string
  qkptNippleDiagramImage?: string
  // QKPS-specific tables
  qkpsNippleTable?: Array<{
    partNo: string
    thread: string
    bsppBodySize: string
    overallLengthMm: number
    exposedLengthMm: number
    hexSizeMm: number
    largestDiameterMm: number
    partNo2: string
    thread2: string
    bsppBodySize2: string
    overallLengthIn: number
    exposedLengthIn: number
    hexSizeIn: number
    largestDiameterIn: number
  }>
  qkpsCouplerTable?: Array<{
    partNo: string
    thread: string
    bsppBodySize: string
    overallLengthMm: number
    hexSizeMm: number
    largestDiameterMm: number
    partNo2: string
    thread2: string
    bsppBodySize2: string
    overallLengthIn: number
    hexSizeIn: number
    largestDiameterIn: number
  }>
  qkpsDustProtectionTable?: Array<{
    sizeMm: string
    sizeInch: string
    nipplePvcPartNo: string
    nippleAluminumPartNo: string
    couplerPvcPartNo: string
    couplerAluminumPartNo: string
  }>
  qkpsNippleDiagramImage?: string
  qkpsCouplerDiagramImage?: string
  // KDF-specific tables
  kdfFemaleTable?: Array<{
    partNo: string
    thread: string
    overallLengthIn: number
    hexSizeIn: number
    largestDiameterIn: number
  }>
  kdfMaleTable?: Array<{
    partNo: string
    thread: string
    overallLengthIn: number
    hexSizeIn: number
    largestDiameterIn: number
  }>
  kdfPerformanceTable?: Array<{
    sizeMm: string
    sizeInch: string
    pressure: string
    flowRate: string
    burstP1: string
    burstP2: string
    burstP3: string
  }>
  kdfDustProtectionTable?: Array<{
    sizeMm: string
    sizeInch: string
    pvcPartNo: string
  }>
  kdfFemaleDiagramImage?: string
  kdfMaleDiagramImage?: string
}

export const flatFaceCouplers: FlatFaceCoupler[] = [
  {
    id: 1,
    code: "FF-001",
    name: "Flat Face Hydraulic Quick Couplings(Carbon Steel) International Interchange ISO 16028",
    shortName: "FF Carbon Steel ISO 16028",
    slug: "flat-face-iso-16028-carbon-steel",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flat%20Face%20Hydraulic%20Quick%20Couplings%28Carbon%20Steel%29%20International%20Interchange%20ISO%2016028-4LElzQ1cI3B3j7LTtCdtCY0sgjDM2u.png",
    description:
      "Professional flat-face hydraulic quick couplers with international interchange standards ISO 16028. Carbon steel construction with premium surface treatment for reliable performance in diverse industrial applications.",
    material: "Carbon Steel",
    surfaceTreat: "Chrome Plated",
    application: "Industrial hydraulic systems, mobile equipment, construction machinery, general hydraulic applications requiring international compatibility",
    features: [
      "Flat-face design for zero fluid loss",
      "ISO 16028 international interchange compatibility",
      "Carbon steel construction with durability",
      "Quick release mechanism",
      "Reliable poppet valve system",
      "Chrome plated for corrosion resistance",
      "Precision-engineered components",
      "Wide thread compatibility",
    ],
    specs: [
      { label: "Design Type", value: "Flat-Face" },
      { label: "Material", value: "Carbon Steel" },
      { label: "Standard", value: "ISO 16028" },
      { label: "Surface Treatment", value: "Chrome Plated" },
    ],
    applications: [
      "Industrial hydraulic systems",
      "Mobile equipment",
      "Construction machinery",
      "General industrial applications",
      "International equipment compatibility",
    ],
    diagram: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FLAT%20FACE%20HYDRAULIC%20QUICK%20COUPLINGS%28CARBON%20STEEL%29-ZGspURkMn1PGXB4SeHVvEIzkOvs2Zt.png",
    specificationTable: [
      {
        bodySize: '3/8"',
        ratedPressure: "350",
        flowRate: "35",
        material: "Carbon Steel",
        sealMaterial: "NBR",
        temperatureRange: "-20°C to +125°C",
      },
      {
        bodySize: '1/2"',
        ratedPressure: "350",
        flowRate: "65",
        material: "Carbon Steel",
        sealMaterial: "NBR",
        temperatureRange: "-20°C to +125°C",
      },
      {
        bodySize: '3/4"',
        ratedPressure: "350",
        flowRate: "115",
        material: "Carbon Steel",
        sealMaterial: "NBR",
        temperatureRange: "-20°C to +125°C",
      },
      {
        bodySize: '1"',
        ratedPressure: "350",
        flowRate: "115",
        material: "Carbon Steel",
        sealMaterial: "NBR",
        temperatureRange: "-20°C to +125°C",
      },
      {
        bodySize: '1-1/4"',
        ratedPressure: "350",
        flowRate: "115",
        material: "Carbon Steel",
        sealMaterial: "NBR",
        temperatureRange: "-20°C to +125°C",
      },
      {
        bodySize: '1-1/2"',
        ratedPressure: "350",
        flowRate: "115",
        material: "Carbon Steel",
        sealMaterial: "NBR",
        temperatureRange: "-20°C to +125°C",
      },
    ],
    detailedSpecificationTable: [
      {
        partNumberMetric: "QKFH 03-03PF",
        threadMetric: "G3/8",
        overallLengthMm: "80",
        hexSizeMm: "27",
        largestDiameterMm: "29",
        partNumberImperial: "QKFH 03-N03PF",
        threadImperial: "NPT3/8",
        overallLengthInch: "3.15",
        hexSizeInch: "1.06",
        largestDiameterInch: "1.14",
      },
      {
        partNumberMetric: "QKFH 03-04PF",
        threadMetric: "G1/2",
        overallLengthMm: "82.5",
        hexSizeMm: "27",
        largestDiameterMm: "29",
        partNumberImperial: "QKFH 03-N04PF",
        threadImperial: "NPT1/2",
        overallLengthInch: "3.25",
        hexSizeInch: "1.06",
        largestDiameterInch: "1.14",
      },
      {
        partNumberMetric: "QKFH 04-04PF",
        threadMetric: "G1/2",
        overallLengthMm: "91",
        hexSizeMm: "36",
        largestDiameterMm: "38.5",
        partNumberImperial: "QKFH 04-N04PF",
        threadImperial: "NPT1/2",
        overallLengthInch: "3.58",
        hexSizeInch: "1.41",
        largestDiameterInch: "1.52",
      },
      {
        partNumberMetric: "QKFH 04-06PF",
        threadMetric: "G3/4",
        overallLengthMm: "93.5",
        hexSizeMm: "36",
        largestDiameterMm: "38.5",
        partNumberImperial: "QKFH 04-N06PF",
        threadImperial: "NPT3/4",
        overallLengthInch: "3.68",
        hexSizeInch: "1.41",
        largestDiameterInch: "1.52",
      },
      {
        partNumberMetric: "QKFH 06-06PF",
        threadMetric: "G3/4",
        overallLengthMm: "95",
        hexSizeMm: "36",
        largestDiameterMm: "38.5",
        partNumberImperial: "QKFH 06-N06PF",
        threadImperial: "NPT3/4",
        overallLengthInch: "3.7",
        hexSizeInch: "1.41",
        largestDiameterInch: "1.52",
      },
      {
        partNumberMetric: "QKFH 06-08PF",
        threadMetric: "G1",
        overallLengthMm: "108.5",
        hexSizeMm: "46",
        largestDiameterMm: "49.8",
        partNumberImperial: "QKFH 06-N08PF",
        threadImperial: "NPT1",
        overallLengthInch: "4.27",
        hexSizeInch: "1.81",
        largestDiameterInch: "1.96",
      },
      {
        partNumberMetric: "QKFH 08-08PF",
        threadMetric: "G1",
        overallLengthMm: "110",
        hexSizeMm: "46",
        largestDiameterMm: "49.8",
        partNumberImperial: "QKFH 08-N08PF",
        threadImperial: "NPT1",
        overallLengthInch: "4.3",
        hexSizeInch: "1.81",
        largestDiameterInch: "1.96",
      },
      {
        partNumberMetric: "QKFH 10-10PF",
        threadMetric: "G11/4",
        overallLengthMm: "123.5",
        hexSizeMm: "55",
        largestDiameterMm: "59.8",
        partNumberImperial: "QKFH 10-N10PF",
        threadImperial: "NPT11/4",
        overallLengthInch: "4.86",
        hexSizeInch: "2.17",
        largestDiameterInch: "2.35",
      },
      {
        partNumberMetric: "QKFH 12-12PF",
        threadMetric: "G11/2",
        overallLengthMm: "141.9",
        hexSizeMm: "70",
        largestDiameterMm: "75.8",
        partNumberImperial: "QKFH 12-N12PF",
        threadImperial: "NPT11/2",
        overallLengthInch: "5.78",
        hexSizeInch: "2.76",
        largestDiameterInch: "2.98",
      },
    ],
  },
  {
    id: 2,
    code: "QKPT-001",
    name: "Flat Face Hydraulic Quick Couplings(Carbon Steel) International Interchange ISO 16028 Qkpt Series",
    shortName: "QKPT Series Carbon Steel",
    slug: "flat-face-qkpt-series-carbon-steel",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flat%20Face%20Hydraulic%20Quick%20Couplings%28Carbon%20Steel%29%20International%20Interchange%20ISO%2016028%20Qkpt%20Series-AtxQbLtd3e4PimaMrTNojBzIl4bvUB.png",
    description:
      "QKPT Series flat-face couplers combining superior design with knurled grip rings for enhanced handling. Carbon steel construction meets ISO 16028 standards with reliable flat-face technology for zero spillage.",
    material: "Carbon Steel",
    surfaceTreat: "Chrome Plated",
    application: "Industrial machinery, hydraulic systems, equipment requiring frequent disconnections with superior grip design",
    features: [
      "Flat-face design with zero fluid loss",
      "Knurled grip rings for superior handling",
      "ISO 16028 international compatibility",
      "Carbon steel robust construction",
      "Quick release mechanism",
      "Reliable poppet valve",
      "Chrome plated corrosion protection",
      "Enhanced ergonomic design",
    ],
    specs: [
      { label: "Series", value: "QKPT" },
      { label: "Design", value: "Flat-Face with Knurled Rings" },
      { label: "Material", value: "Carbon Steel" },
      { label: "Standard", value: "ISO 16028" },
    ],
    applications: [
      "Machinery requiring frequent disconnections",
      "Industrial hydraulic applications",
      "Equipment with high usability demands",
      "Professional industrial settings",
    ],
    basicSpecTable: [
      { bodySize: '1/4"', ratedPressure: "300", flowRate: "", material: "Carbon Steel", sealMaterial: "NBR", temperatureRange: "-20°C to +125°C" },
      { bodySize: '3/8"', ratedPressure: "250", flowRate: "", material: "Carbon Steel", sealMaterial: "NBR", temperatureRange: "-20°C to +125°C" },
      { bodySize: '1/2"', ratedPressure: "200", flowRate: "", material: "Carbon Steel", sealMaterial: "NBR", temperatureRange: "-20°C to +125°C" },
      { bodySize: '3/4"', ratedPressure: "200", flowRate: "", material: "Carbon Steel", sealMaterial: "NBR", temperatureRange: "-20°C to +125°C" },
      { bodySize: '1"',   ratedPressure: "200", flowRate: "", material: "Carbon Steel", sealMaterial: "NBR", temperatureRange: "-20°C to +125°C" },
    ],
    qkptCouplerDiagramImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Couplers%20Female%20Thread%20FLAT%20FACE%20HYDRAULIC%20QUICK%20COUPLINGS%28CARBON%20STEEL%29%20%282%29-6fwArBdHS7eDT18ISHjGNRxaX4kDH7.png",
    qkptCouplerTable: [
      { partNo: "QKPT 02-02SF", thread: "G1/4",  bodySize: '1/4"', overallLengthMm: 48,  hexSizeMm: 24, largestDiameterMm: 28, partNo2: "QKPT 02-N02SF", thread2: "NPT1/4", bodySize2: '1/4"', overallLengthIn: 1.88, hexSizeIn: 0.94, largestDiameterIn: 1.1  },
      { partNo: "QKPT 03-03SF", thread: "G3/8",  bodySize: '3/8"', overallLengthMm: 65,  hexSizeMm: 27, largestDiameterMm: 32, partNo2: "QKPT 03-N03SF", thread2: "NPT3/8", bodySize2: '3/8"', overallLengthIn: 2.55, hexSizeIn: 1.06, largestDiameterIn: 1.25 },
      { partNo: "QKPT 03-04SF", thread: "G1/2",  bodySize: '3/8"', overallLengthMm: 70,  hexSizeMm: 27, largestDiameterMm: 32, partNo2: "QKPT 03-N04SF", thread2: "NPT1/2", bodySize2: '3/8"', overallLengthIn: 2.75, hexSizeIn: 1.06, largestDiameterIn: 1.25 },
      { partNo: "QKPT 04-04SF", thread: "G1/2",  bodySize: '1/2"', overallLengthMm: 79,  hexSizeMm: 36, largestDiameterMm: 40, partNo2: "QKPT 04-N04SF", thread2: "NPT1/2", bodySize2: '1/2"', overallLengthIn: 3.11, hexSizeIn: 1.41, largestDiameterIn: 1.57 },
      { partNo: "QKPT 04-06SF", thread: "G3/4",  bodySize: '1/2"', overallLengthMm: 79,  hexSizeMm: 36, largestDiameterMm: 40, partNo2: "QKPT 04-N06SF", thread2: "NPT3/4", bodySize2: '1/2"', overallLengthIn: 3.11, hexSizeIn: 1.41, largestDiameterIn: 1.57 },
      { partNo: "QKPT 06-06SF", thread: "G3/4",  bodySize: '3/4"', overallLengthMm: 79,  hexSizeMm: 36, largestDiameterMm: 41, partNo2: "QKPT 06-N06SF", thread2: "NPT3/4", bodySize2: '3/4"', overallLengthIn: 3.11, hexSizeIn: 1.41, largestDiameterIn: 1.63 },
      { partNo: "QKPT 08-08SF", thread: "G1",    bodySize: '1"',   overallLengthMm: 93,  hexSizeMm: 45, largestDiameterMm: 48, partNo2: "QKPT 08-N08SF", thread2: "NPT1",   bodySize2: '1"',   overallLengthIn: 3.66, hexSizeIn: 1.77, largestDiameterIn: 1.88 },
    ],
    qkptNippleDiagramImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nipple%20Female%20Thread%20%20Male-gyTaXaV0GiCk6m504GO2t0DHOfqFFo.png",
    qkptNippleTable: [
      { partNo: "QKPT 02-02PF", thread: "G1/4",  bodySize: '1/4"', overallLengthMm: 48, exposedLengthMm: 35, hexSizeMm: 22, largestDiameterMm: 24, partNo2: "QKPT 02-N02PF", thread2: "NPT1/4", bodySize2: '1/4"', overallLengthIn: 1.88, exposedLengthIn: 1.37, hexSizeIn: 0.86 },
      { partNo: "QKPT 03-03PF", thread: "G3/8",  bodySize: '3/8"', overallLengthMm: 60, exposedLengthMm: 43, hexSizeMm: 24, largestDiameterMm: 26, partNo2: "QKPT 03-N03PF", thread2: "NPT3/8", bodySize2: '3/8"', overallLengthIn: 2.36, exposedLengthIn: 1.69, hexSizeIn: 0.94 },
      { partNo: "QKPT 03-04PF", thread: "G1/2",  bodySize: '3/8"', overallLengthMm: 63, exposedLengthMm: 46, hexSizeMm: 27, largestDiameterMm: 29, partNo2: "QKPT 03-N04PF", thread2: "NPT1/2", bodySize2: '3/8"', overallLengthIn: 2.48, exposedLengthIn: 1.81, hexSizeIn: 1.06 },
      { partNo: "QKPT 04-04PF", thread: "G1/2",  bodySize: '1/2"', overallLengthMm: 70, exposedLengthMm: 53, hexSizeMm: 32, largestDiameterMm: 35, partNo2: "QKPT 04-N04PF", thread2: "NPT1/2", bodySize2: '1/2"', overallLengthIn: 2.77, exposedLengthIn: 2.08, hexSizeIn: 1.25 },
      { partNo: "QKPT 04-06PF", thread: "G3/4",  bodySize: '1/2"', overallLengthMm: 70, exposedLengthMm: 53, hexSizeMm: 32, largestDiameterMm: 35, partNo2: "QKPT 04-N06PF", thread2: "NPT3/4", bodySize2: '1/2"', overallLengthIn: 2.77, exposedLengthIn: 2.08, hexSizeIn: 1.25 },
      { partNo: "QKPT 06-06PF", thread: "G3/4",  bodySize: '3/4"', overallLengthMm: 70, exposedLengthMm: 53, hexSizeMm: 36, largestDiameterMm: 38, partNo2: "QKPT 06-N06PF", thread2: "NPT3/4", bodySize2: '3/4"', overallLengthIn: 2.77, exposedLengthIn: 2.08, hexSizeIn: 1.41 },
      { partNo: "QKPT 08-08PF", thread: "G1",    bodySize: '1"',   overallLengthMm: 83, exposedLengthMm: 59, hexSizeMm: 45, largestDiameterMm: 48, partNo2: "QKPT 08-N08PF", thread2: "NPT1",   bodySize2: '1"',   overallLengthIn: 3.27, exposedLengthIn: 2.32, hexSizeIn: 1.77 },
    ],
    qkptPerformanceTable: [
      { sizeMm: "3.2",  sizeInch: '1/8"',  pressure: "35 (5000)", flowRate: "12 (3.2)",   burstP1: "170 (24200)", burstP2: "140 (20000)", burstP3: "180 (25700)", forceToConnect: "105" },
      { sizeMm: "6.3",  sizeInch: '1/4"',  pressure: "35 (5000)", flowRate: "25 (6.6)",   burstP1: "170 (24200)", burstP2: "140 (20000)", burstP3: "180 (25700)", forceToConnect: "110" },
      { sizeMm: "10",   sizeInch: '3/8"',  pressure: "35 (5000)", flowRate: "50 (13.2)",  burstP1: "170 (24200)", burstP2: "140 (20000)", burstP3: "170 (24200)", forceToConnect: "150" },
      { sizeMm: "12.5", sizeInch: '1/2"',  pressure: "35 (5000)", flowRate: "110 (29)",   burstP1: "140 (20000)", burstP2: "140 (20000)", burstP3: "170 (24200)", forceToConnect: "210" },
      { sizeMm: "16",   sizeInch: '5/8"',  pressure: "35 (5000)", flowRate: "125 (33)",   burstP1: "140 (20000)", burstP2: "140 (20000)", burstP3: "140 (20000)", forceToConnect: "205" },
      { sizeMm: "19",   sizeInch: '3/4"',  pressure: "35 (5000)", flowRate: "160 (42.4)", burstP1: "140 (20000)", burstP2: "140 (20000)", burstP3: "140 (20000)", forceToConnect: "215" },
      { sizeMm: "25",   sizeInch: '1"',    pressure: "35 (5000)", flowRate: "230 (60.7)", burstP1: "140 (20000)", burstP2: "140 (20000)", burstP3: "170 (24200)", forceToConnect: "280" },
    ],
  },
  {
    id: 3,
    code: "QKEP",
    name: "Flat Face Hydraulic Quick Couplings (Carbon Steel) QKEP Series",
    shortName: "QKEP Series Carbon Steel",
    slug: "flat-face-qkep-series-carbon-steel",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flat%20Face%20Hydraulic%20Quick%20Couplings%28Carbon%20Steel%29%20International%20Interchange%20ISO%2016028%20Qkep%20Series-FprNBM1yieOlX0HU5pYmlJW8RoyeV5.png",
    description: "Professional flat-face hydraulic quick couplers QKEP series with carbon steel construction and high-performance specifications for industrial applications.",
    material: "Carbon Steel",
    surfaceTreat: "Chrome Plated",
    application: "Industrial hydraulic systems, mobile equipment, construction machinery",
    features: [
      "Flat-face design for zero fluid loss",
      "ISO 16028 international interchange compatibility",
      "Carbon steel construction with durability",
      "Quick release mechanism",
      "Reliable poppet valve system",
      "Chrome plated for corrosion resistance",
      "Precision-engineered components",
      "Wide thread compatibility",
    ],
    specs: [
      { label: "Design Type", value: "Flat-Face" },
      { label: "Material", value: "Carbon Steel" },
      { label: "Series", value: "QKEP" },
      { label: "Surface Treatment", value: "Chrome Plated" },
    ],
    applications: [
      "Industrial hydraulic systems",
      "Mobile equipment",
      "Construction machinery",
      "General industrial applications",
    ],
    basicSpecTable: [
      { bodySize: '1/4"', ratedPressure: "600", flowRate: "12", material: "Carbon Steel", sealMaterial: "NBR (other material available on request)", temperatureRange: "-20°C to +125°C" },
      { bodySize: '3/8"', ratedPressure: "550", flowRate: "23", material: "Carbon Steel", sealMaterial: "NBR (other material available on request)", temperatureRange: "-20°C to +125°C" },
      { bodySize: '1/2"', ratedPressure: "550", flowRate: "45", material: "Carbon Steel", sealMaterial: "NBR (other material available on request)", temperatureRange: "-20°C to +125°C" },
      { bodySize: '3/4"', ratedPressure: "550", flowRate: "74", material: "Carbon Steel", sealMaterial: "NBR (other material available on request)", temperatureRange: "-20°C to +125°C" },
      { bodySize: '1"', ratedPressure: "500", flowRate: "100", material: "Carbon Steel", sealMaterial: "NBR (other material available on request)", temperatureRange: "-20°C to +125°C" },
      { bodySize: '1-1/4"', ratedPressure: "470", flowRate: "189", material: "Carbon Steel", sealMaterial: "NBR (other material available on request)", temperatureRange: "-20°C to +125°C" },
      { bodySize: '1-1/2"', ratedPressure: "400", flowRate: "288", material: "Carbon Steel", sealMaterial: "NBR (other material available on request)", temperatureRange: "-20°C to +125°C" },
      { bodySize: '2"', ratedPressure: "350", flowRate: "379", material: "Carbon Steel", sealMaterial: "NBR (other material available on request)", temperatureRange: "-20°C to +125°C" },
    ],
    couplerFemaleTable: [
      { partNo: "QKEP03-03SF", thread: "G3/8", overallLength: 65.8, hexSize: 30, largestDiameter: 41.8, partNo2: "QKEP03-N03SF", thread2: "NPT3/8", overallLength2: 2.59, hexSize2: 1.18, largestDiameter2: 1.65 },
      { partNo: "QKEP03-04SF", thread: "G1/2", overallLength: 70.8, hexSize: 30, largestDiameter: 41.8, partNo2: "QKEP03-N04SF", thread2: "NPT1/2", overallLength2: 2.79, hexSize2: 1.18, largestDiameter2: 1.65 },
      { partNo: "QKEP04-04SF", thread: "G1/2", overallLength: 77.8, hexSize: 36, largestDiameter: 49.8, partNo2: "QKEP04-N04SF", thread2: "NPT1/2", overallLength2: 3.06, hexSize2: 1.42, largestDiameter2: 1.96 },
      { partNo: "QKEP04-06SF", thread: "G3/4", overallLength: 84.8, hexSize: 36, largestDiameter: 49.8, partNo2: "QKEP04-N06SF", thread2: "NPT3/4", overallLength2: 3.34, hexSize2: 1.42, largestDiameter2: 1.96 },
      { partNo: "QKEP06-06SF", thread: "G3/4", overallLength: 84.8, hexSize: 41, largestDiameter: 53.8, partNo2: "QKEP06-N06SF", thread2: "NPT3/4", overallLength2: 3.34, hexSize2: 1.61, largestDiameter2: 2.12 },
      { partNo: "QKEP06-08SF", thread: "G1", overallLength: 97.7, hexSize: 46, largestDiameter: 58.8, partNo2: "QKEP06-N08SF", thread2: "NPT1", overallLength2: 3.85, hexSize2: 1.81, largestDiameter2: 2.31 },
      { partNo: "QKEP08-08SF", thread: "G1", overallLength: 99.7, hexSize: 46, largestDiameter: 58.8, partNo2: "QKEP08-N08SF", thread2: "NPT1", overallLength2: 3.93, hexSize2: 1.81, largestDiameter2: 2.31 },
      { partNo: "QKEP08-10SF", thread: "G1-1/4", overallLength: 105.8, hexSize: 55, largestDiameter: 69.8, partNo2: "QKEP08-N10SF", thread2: "NPT1-1/4", overallLength2: 4.17, hexSize2: 2.17, largestDiameter2: 2.75 },
      { partNo: "QKEP10-10SF", thread: "G1-1/4", overallLength: 106.8, hexSize: 55, largestDiameter: 69.8, partNo2: "QKEP10-N10SF", thread2: "NPT1-1/4", overallLength2: 4.2, hexSize2: 2.17, largestDiameter2: 2.75 },
      { partNo: "QKEP12-10SF", thread: "G1-1/4", overallLength: 133.5, hexSize: 65, largestDiameter: 92, partNo2: "QKEP12-N10SF", thread2: "NPT1-1/4", overallLength2: 5.26, hexSize2: 2.56, largestDiameter2: 3.62 },
      { partNo: "QKEP12-12SF", thread: "G1-1/2", overallLength: 133.5, hexSize: 65, largestDiameter: 92, partNo2: "QKEP12-N12SF", thread2: "NPT1-1/2", overallLength2: 5.26, hexSize2: 2.56, largestDiameter2: 3.62 },
      { partNo: "QKEP16-16SF", thread: "G2", overallLength: 224.8, hexSize: 90, largestDiameter: 200, partNo2: "QKEP16-N16SF", thread2: "NPT2", overallLength2: 8.85, hexSize2: 3.54, largestDiameter2: 7.87 },
    ],
    nippleTable: [
      { partNo: "QKEP03-03PF", thread: "G3/8", overallLength: 82.5, hexSize: 27, largestDiameter: 33, partNo2: "QKEP03-N03PF", thread2: "NPT3/8", overallLength2: 3.25, hexSize2: 1.06, largestDiameter2: "M33x2" },
      { partNo: "QKEP03-04PF", thread: "G1/2", overallLength: 85, hexSize: 27, largestDiameter: 33, partNo2: "QKEP03-N04PF", thread2: "NPT1/2", overallLength2: 3.35, hexSize2: 1.06, largestDiameter2: "M33x2" },
      { partNo: "QKEP04-04PF", thread: "G1/2", overallLength: 95, hexSize: 36, largestDiameter: 40, partNo2: "QKEP04-N04PF", thread2: "NPT1/2", overallLength2: 3.74, hexSize2: 1.42, largestDiameter2: "M40x3" },
      { partNo: "QKEP04-06PF", thread: "G3/4", overallLength: 97.4, hexSize: 36, largestDiameter: 40, partNo2: "QKEP04-N06PF", thread2: "NPT3/4", overallLength2: 3.83, hexSize2: 1.42, largestDiameter2: "M40x3" },
      { partNo: "QKEP06-06PF", thread: "G3/4", overallLength: 99, hexSize: 36, largestDiameter: 45, partNo2: "QKEP06-N06PF", thread2: "NPT3/4", overallLength2: 3.9, hexSize2: 1.42, largestDiameter2: "M45x3" },
      { partNo: "QKEP06-08PF", thread: "G1", overallLength: 113.6, hexSize: 46, largestDiameter: 50, partNo2: "QKEP06-N08PF", thread2: "NPT1", overallLength2: 4.47, hexSize2: 1.81, largestDiameter2: "M50x3" },
      { partNo: "QKEP08-08PF", thread: "G1", overallLength: 113.6, hexSize: 46, largestDiameter: 50, partNo2: "QKEP08-N08PF", thread2: "NPT1", overallLength2: 4.47, hexSize2: 1.81, largestDiameter2: "M50x3" },
      { partNo: "QKEP08-10PF", thread: "G1-1/4", overallLength: 123.4, hexSize: 55, largestDiameter: 58, partNo2: "QKEP08-N10PF", thread2: "NPT1-1/4", overallLength2: 4.86, hexSize2: 2.17, largestDiameter2: "M58x3" },
      { partNo: "QKEP10-10PF", thread: "G1-1/4", overallLength: 123.4, hexSize: 55, largestDiameter: 58, partNo2: "QKEP10-N10PF", thread2: "NPT1-1/4", overallLength2: 4.86, hexSize2: 2.17, largestDiameter2: "M58x3" },
      { partNo: "QKEP12-10PF", thread: "G1-1/4", overallLength: 150, hexSize: 65, largestDiameter: 80, partNo2: "QKEP12-N10PF", thread2: "NPT1-1/4", overallLength2: 5.91, hexSize2: 2.56, largestDiameter2: "M80x4" },
      { partNo: "QKEP12-12PF", thread: "G1-1/2", overallLength: 150, hexSize: 65, largestDiameter: 80, partNo2: "QKEP12-N12PF", thread2: "NPT1-1/2", overallLength2: 5.91, hexSize2: 2.56, largestDiameter2: "M80x4" },
      { partNo: "QKEP16-16PF", thread: "G2", overallLength: 218.8, hexSize: 90, largestDiameter: 130, partNo2: "QKEP16-N16PF", thread2: "NPT2", overallLength2: 8.6, hexSize2: 3.54, largestDiameter2: "M130x6" },
    ],
    nippelDiagramImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nipple%20Female%20Thread%20FLAT%20FACE%20HYDRAULIC%20QUICK%20COUPLINGS%28CARBON%20STEEL%29-fIZTCEvVh6n487wzDwne98vBlBuevV.png",
    couplerDiagramImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Couplers%20Female%20Thread%20FLAT%20FACE%20HYDRAULIC%20QUICK%20COUPLINGS%28CARBON%20STEEL%29-CRGPq9PWGw0YyTyHcR3LKYH1GOrWwt.png",
    performanceTable: [
      { size: "6.3", inch: '1/4"', pressure: "60 (8700)", flowRate: "12 (3.18)", burstP1: "60 (8700)", burstP2: "60 (8700)", burstP3: "150 (21750)" },
      { size: "10", inch: '3/8"', pressure: "55 (7975)", flowRate: "23 (6.10)", burstP1: "55 (7975)", burstP2: "55 (7975)", burstP3: "140 (20300)" },
      { size: "12.5", inch: '1/2"', pressure: "55 (7975)", flowRate: "45 (11.93)", burstP1: "55 (7975)", burstP2: "55 (7975)", burstP3: "140 (20300)" },
      { size: "20", inch: '3/4"', pressure: "55 (7975)", flowRate: "74 (19.61)", burstP1: "55 (7975)", burstP2: "55 (7975)", burstP3: "140 (20300)" },
      { size: "25", inch: '1"', pressure: "50 (7250)", flowRate: "100 (26.50)", burstP1: "50 (7250)", burstP2: "50 (7250)", burstP3: "125 (18125)" },
      { size: "31.5", inch: '1 1/4"', pressure: "47 (6815)", flowRate: "189 (50.19)", burstP1: "47 (6815)", burstP2: "47 (6815)", burstP3: "120 (17400)" },
      { size: "40", inch: '1 1/2"', pressure: "40 (5800)", flowRate: "288 (76.32)", burstP1: "40 (5800)", burstP2: "40 (5800)", burstP3: "110 (15950)" },
      { size: "50", inch: '2"', pressure: "35 (5075)", flowRate: "379 (100.44)", burstP1: "35 (5075)", burstP2: "35 (5075)", burstP3: "110 (15950)" },
    ],
    dustProtectionTable: [
      { size: "10", inch: "3/8", partNoAluminum: "CEF-3/8", colorAluminum: "Red", partNoPVC: "PEP-3/8", colorPVC: "Red" },
      { size: "12.5", inch: "1/2", partNoAluminum: "CEF-1/2", colorAluminum: "Red", partNoPVC: "PEP-1/2", colorPVC: "Red" },
      { size: "20", inch: "3/4", partNoAluminum: "CEF-3/4", colorAluminum: "Red", partNoPVC: "PEP-3/4", colorPVC: "Red" },
      { size: "25", inch: "1", partNoAluminum: "CEF-1", colorAluminum: "Red", partNoPVC: "PEP-1", colorPVC: "Red" },
      { size: "32", inch: "1 1/4", partNoAluminum: "CEF-1 1/4", colorAluminum: "Red", partNoPVC: "PEP-1 1/4", colorPVC: "Red" },
      { size: "40", inch: "1 1/2", partNoAluminum: "CEF-1 1/2", colorAluminum: "Red", partNoPVC: "PEP-1 1/2", colorPVC: "Red" },
      { size: "50", inch: "2", partNoAluminum: "CEF-2", colorAluminum: "Red", partNoPVC: "PEP-2", colorPVC: "Red" },
    ],
  },
  {
    id: 4,
    code: "KDF-001",
    name: "Flat Face Hydraulic Quick Couplings(Steel) Kdf Series",
    shortName: "KDF Series Steel",
    slug: "flat-face-kdf-series-steel",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flat%20Face%20Hydraulic%20Quick%20Couplings%28Steel%29%20Kdf%20Series-rx2SariRej8QBWTfTRHneeC6qH6qLi.png",
    description:
      "KDF Series flat-face couplers engineered with premium steel construction for maximum durability. Advanced flat-face technology ensures zero fluid loss in demanding industrial environments with reliable performance.",
    material: "Steel",
    surfaceTreat: "Premium Plating",
    application: "Heavy-duty industrial hydraulic systems, demanding equipment, applications requiring maximum durability and reliability",
    features: [
      "Flat-face design with zero fluid loss",
      "Premium steel construction",
      "Heavy-duty performance rated",
      "Advanced poppet valve system",
      "Reliable quick release mechanism",
      "Enhanced wear resistance",
      "Premium surface treatment",
      "Suitable for extreme conditions",
    ],
    specs: [
      { label: "Series", value: "KDF" },
      { label: "Design", value: "Flat-Face Heavy-Duty" },
      { label: "Material", value: "Steel" },
      { label: "Application", value: "Heavy-Duty Industrial" },
    ],
    applications: [
      "Heavy-duty industrial systems",
      "Demanding equipment",
      "Extreme condition applications",
      "High-reliability requirements",
    ],
    basicSpecTable: [
      { bodySize: '1/4"', ratedPressure: "470", flowRate: "", material: "Carbon Steel", sealMaterial: "NBR (other material available on request)", temperatureRange: "-20°C to +125°C" },
    ],
    kdfFemaleDiagramImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Couplers%20Female%20Thread%20FLAT%20FACE%20HYDRAULIC%20QUICK%20COUPLINGS%28CARBON%20STEEL%29%20%282%29-9dTcw9sOTUHHajtUYq0Quzyx8NRZM9.png",
    kdfFemaleTable: [
      { partNo: "KDF -N01SF",        thread: "NPT1/8",  overallLengthIn: 1.65, hexSizeIn: 0.83, largestDiameterIn: 24 },
      { partNo: "KDF -N02SF",        thread: "NPT1/4",  overallLengthIn: 1.97, hexSizeIn: 0.83, largestDiameterIn: 24 },
      { partNo: "KDF -7/16UNFSF",    thread: "UNF7/16", overallLengthIn: 2.13, hexSizeIn: 0.83, largestDiameterIn: 24 },
      { partNo: "KSN -KDF -9/16UNFSF", thread: "UNF9/16", overallLengthIn: 2.13, hexSizeIn: 0.83, largestDiameterIn: 24 },
      { partNo: "KSN -KDF -M14SF",   thread: "M14X1.5", overallLengthIn: 2.03, hexSizeIn: 0.83, largestDiameterIn: 24 },
    ],
    kdfMaleDiagramImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-comoGHUqyJbMwXWa6QUISJEQuG1VeP.png",
    kdfMaleTable: [
      { partNo: "KDF -N01PF",        thread: "NPT1/8",  overallLengthIn: 1.42, hexSizeIn: 0.75, largestDiameterIn: 0.5 },
      { partNo: "KDF -N02PF",        thread: "NPT1/4",  overallLengthIn: 1.57, hexSizeIn: 0.75, largestDiameterIn: 0.5 },
      { partNo: "KDF -7/16UNFPF",    thread: "UNF7/16", overallLengthIn: 1.61, hexSizeIn: 0.75, largestDiameterIn: 0.5 },
      { partNo: "KSN -KDF -9/16UNFPF", thread: "UNF9/16", overallLengthIn: 1.61, hexSizeIn: 0.75, largestDiameterIn: 0.5 },
      { partNo: "KSN -KDF -M14PF",   thread: "M14X1.5", overallLengthIn: 1.61, hexSizeIn: 0.75, largestDiameterIn: 0.5 },
    ],
    kdfDustProtectionTable: [
      { sizeMm: "6.3", sizeInch: '1/4"', pvcPartNo: "PDF" },
    ],
    kdfPerformanceTable: [
      { sizeMm: "6.3", sizeInch: '1/4"', pressure: "47 (6815)", flowRate: "2 (0.53)", burstP1: "150 (21750)", burstP2: "190 (27550)", burstP3: "180 (26100)" },
    ],
  },
  {
    id: 5,
    code: "QKPS-001",
    name: "Flat Face Hydraulic Quick Couplings(Stainless Steel) International Interchange ISO 16028 Qkps Series",
    shortName: "QKPS Series Stainless Steel",
    slug: "flat-face-qkps-series-stainless-steel",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flat%20Face%20Hydraulic%20Quick%20Couplings%28Stainless%20Steel%29%20International%20Interchange%20ISO%2016028%20Qkps%20Series-yqFJtd4nL0tQikd88AVToc6StjNt1N.png",
    description:
      "QKPS Series stainless steel flat-face couplers offering superior corrosion resistance and durability. Perfect for food processing, pharmaceutical, marine, and other corrosive environments requiring ISO 16028 compatibility.",
    material: "Stainless Steel",
    surfaceTreat: "Passivated",
    application: "Food processing, pharmaceutical industry, marine environments, sanitary applications, corrosive environment hydraulic systems",
    features: [
      "Flat-face design with zero spillage",
      "Stainless steel corrosion resistant",
      "ISO 16028 international standard",
      "Sanitary design suitable",
      "Advanced sealing technology",
      "Quick release mechanism",
      "Passivated for hygiene",
      "Marine-grade durability",
    ],
    specs: [
      { label: "Series", value: "QKPS" },
      { label: "Design", value: "Flat-Face Sanitary" },
      { label: "Material", value: "Stainless Steel" },
      { label: "Standard", value: "ISO 16028" },
    ],
    applications: [
      "Food processing",
      "Pharmaceutical applications",
      "Marine environments",
      "Sanitary hydraulic systems",
      "Corrosive environment protection",
    ],
    basicSpecTable: [
      { bodySize: '1/4"', ratedPressure: "250", flowRate: "", material: "Stainless Steel", sealMaterial: "NBR (other material available on request)", temperatureRange: "-20 to +125" },
      { bodySize: '3/8"', ratedPressure: "200", flowRate: "", material: "Stainless Steel", sealMaterial: "NBR (other material available on request)", temperatureRange: "-20 to +125" },
      { bodySize: '1/2"', ratedPressure: "200", flowRate: "", material: "Stainless Steel", sealMaterial: "NBR (other material available on request)", temperatureRange: "-20 to +125" },
      { bodySize: '3/4"', ratedPressure: "200", flowRate: "", material: "Stainless Steel", sealMaterial: "NBR (other material available on request)", temperatureRange: "-20 to +125" },
      { bodySize: '1"',   ratedPressure: "200", flowRate: "", material: "Stainless Steel", sealMaterial: "NBR (other material available on request)", temperatureRange: "-20 to +125" },
    ],
    qkpsNippleDiagramImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nipple%20Female%20Thread%20%20Male-HrQg8px3Tt6tB4L9DpCzwSEbUJlD2q.png",
    qkpsNippleTable: [
      { partNo: "QKPS 02-02PF", thread: "G1/4",  bsppBodySize: '1/4"', overallLengthMm: 48, exposedLengthMm: 35, hexSizeMm: 22, largestDiameterMm: 24, partNo2: "QKPS 02-N02PF", thread2: "NPT1/4", bsppBodySize2: '1/4"', overallLengthIn: 1.88, exposedLengthIn: 1.37, hexSizeIn: 0.86, largestDiameterIn: 0.94 },
      { partNo: "QKPS 03-03PF", thread: "G3/8",  bsppBodySize: '3/8"', overallLengthMm: 60, exposedLengthMm: 43, hexSizeMm: 24, largestDiameterMm: 26, partNo2: "QKPS 03-N03PF", thread2: "NPT3/8", bsppBodySize2: '3/8"', overallLengthIn: 2.36, exposedLengthIn: 1.69, hexSizeIn: 0.94, largestDiameterIn: 1.02 },
      { partNo: "QKPS 03-04PF", thread: "G1/2",  bsppBodySize: '3/8"', overallLengthMm: 63, exposedLengthMm: 46, hexSizeMm: 27, largestDiameterMm: 29, partNo2: "QKPS 03-N04PF", thread2: "NPT1/2", bsppBodySize2: '3/8"', overallLengthIn: 2.48, exposedLengthIn: 1.81, hexSizeIn: 1.06, largestDiameterIn: 1.14 },
      { partNo: "QKPS 04-04PF", thread: "G1/2",  bsppBodySize: '1/2"', overallLengthMm: 70, exposedLengthMm: 53, hexSizeMm: 32, largestDiameterMm: 35, partNo2: "QKPS 04-N04PF", thread2: "NPT1/2", bsppBodySize2: '1/2"', overallLengthIn: 2.77, exposedLengthIn: 2.08, hexSizeIn: 1.25, largestDiameterIn: 1.37 },
      { partNo: "QKPS 04-06PF", thread: "G3/4",  bsppBodySize: '1/2"', overallLengthMm: 70, exposedLengthMm: 53, hexSizeMm: 32, largestDiameterMm: 35, partNo2: "QKPS 04-N06PF", thread2: "NPT3/4", bsppBodySize2: '1/2"', overallLengthIn: 2.77, exposedLengthIn: 2.08, hexSizeIn: 1.25, largestDiameterIn: 1.37 },
      { partNo: "QKPS 06-06PF", thread: "G3/4",  bsppBodySize: '3/4"', overallLengthMm: 70, exposedLengthMm: 53, hexSizeMm: 36, largestDiameterMm: 38, partNo2: "QKPS 06-N06PF", thread2: "NPT3/4", bsppBodySize2: '3/4"', overallLengthIn: 2.77, exposedLengthIn: 2.08, hexSizeIn: 1.41, largestDiameterIn: 1.51 },
      { partNo: "QKPS 08-08PF", thread: "G1",    bsppBodySize: '1"',   overallLengthMm: 83, exposedLengthMm: 59, hexSizeMm: 45, largestDiameterMm: 48, partNo2: "QKPS 08-N08PF", thread2: "NPT1",   bsppBodySize2: '1"',   overallLengthIn: 3.26, exposedLengthIn: 2.32, hexSizeIn: 1.77, largestDiameterIn: 1.88 },
    ],
    qkpsCouplerDiagramImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Couplers%20Female%20Thread%20FLAT%20FACE%20HYDRAULIC%20QUICK%20COUPLINGS%28CARBON%20STEEL%29%20%282%29-JPLBIbdbTSvxKWoix0L5bhgbD3pbhj.png",
    qkpsCouplerTable: [
      { partNo: "QKPS 02-02SF", thread: "G1/4",  bsppBodySize: '1/4"', overallLengthMm: 48,  hexSizeMm: 24, largestDiameterMm: 28, partNo2: "QKPS 02-N02SF", thread2: "NPT1/4", bsppBodySize2: '1/4"', overallLengthIn: 1.88, hexSizeIn: 0.94, largestDiameterIn: 1.1  },
      { partNo: "QKPS 03-03SF", thread: "G3/8",  bsppBodySize: '3/8"', overallLengthMm: 65,  hexSizeMm: 27, largestDiameterMm: 32, partNo2: "QKPS 03-N03SF", thread2: "NPT3/8", bsppBodySize2: '3/8"', overallLengthIn: 2.55, hexSizeIn: 1.06, largestDiameterIn: 1.25 },
      { partNo: "QKPS 03-04SF", thread: "G1/2",  bsppBodySize: '3/8"', overallLengthMm: 70,  hexSizeMm: 27, largestDiameterMm: 32, partNo2: "QKPS 03-N04SF", thread2: "NPT1/2", bsppBodySize2: '3/8"', overallLengthIn: 2.75, hexSizeIn: 1.06, largestDiameterIn: 1.25 },
      { partNo: "QKPS 04-04SF", thread: "G1/2",  bsppBodySize: '1/2"', overallLengthMm: 79,  hexSizeMm: 36, largestDiameterMm: 40, partNo2: "QKPS 04-N04SF", thread2: "NPT1/2", bsppBodySize2: '1/2"', overallLengthIn: 3.11, hexSizeIn: 1.41, largestDiameterIn: 1.57 },
      { partNo: "QKPS 04-06SF", thread: "G3/4",  bsppBodySize: '1/2"', overallLengthMm: 79,  hexSizeMm: 36, largestDiameterMm: 40, partNo2: "QKPS 04-N06SF", thread2: "NPT3/4", bsppBodySize2: '1/2"', overallLengthIn: 3.11, hexSizeIn: 1.41, largestDiameterIn: 1.57 },
      { partNo: "QKPS 06-06SF", thread: "G3/4",  bsppBodySize: '3/4"', overallLengthMm: 79,  hexSizeMm: 36, largestDiameterMm: 41, partNo2: "QKPS 06-N06SF", thread2: "NPT3/4", bsppBodySize2: '3/4"', overallLengthIn: 3.11, hexSizeIn: 1.41, largestDiameterIn: 1.63 },
      { partNo: "QKPS 08-08SF", thread: "G1",    bsppBodySize: '1"',   overallLengthMm: 93,  hexSizeMm: 45, largestDiameterMm: 48, partNo2: "QKPS 08-N08SF", thread2: "NPT1",   bsppBodySize2: '1"',   overallLengthIn: 3.66, hexSizeIn: 1.77, largestDiameterIn: 1.88 },
    ],
    qkpsDustProtectionTable: [
      { sizeMm: "6.3",  sizeInch: "1/4",  nipplePvcPartNo: "CZT-1/4",  nippleAluminumPartNo: "",        couplerPvcPartNo: "PZT-1/4",  couplerAluminumPartNo: "" },
      { sizeMm: "10",   sizeInch: "3/8",  nipplePvcPartNo: "CZT-3/8",  nippleAluminumPartNo: "",        couplerPvcPartNo: "PZT-3/8",  couplerAluminumPartNo: "" },
      { sizeMm: "12.5", sizeInch: "1/2",  nipplePvcPartNo: "CZT-1/2",  nippleAluminumPartNo: "",        couplerPvcPartNo: "PZT-1/2",  couplerAluminumPartNo: "" },
      { sizeMm: "16",   sizeInch: "5/8",  nipplePvcPartNo: "",          nippleAluminumPartNo: "",        couplerPvcPartNo: "",          couplerAluminumPartNo: "" },
      { sizeMm: "20",   sizeInch: "3/4",  nipplePvcPartNo: "CZT-3/4",  nippleAluminumPartNo: "",        couplerPvcPartNo: "PZT-3/4",  couplerAluminumPartNo: "" },
      { sizeMm: "25",   sizeInch: "1",    nipplePvcPartNo: "CZT-1",     nippleAluminumPartNo: "",        couplerPvcPartNo: "PZT-1",    couplerAluminumPartNo: "" },
    ],
  },
]
