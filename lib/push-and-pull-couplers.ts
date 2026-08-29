export interface PushPullCouplerProduct {
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
  techSpecs?: string[]
  applications: string[]
  ratedPressureTable?: Array<{
    size: string
    pressure: number
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
  tableNote?: string
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
  nippelMaleTable1?: Array<{
    partNo: string
    threadSize: string
    flowRate: string
    overallLengthA: number
    hexSizeC: number
    largestDiameterD: number
  }>
  couplerMaleTable2?: Array<{
    partNo: string
    threadSize: string
    flowRate: string
    overallLength: number
    hexSize: number
    largestDiameter: number
  }>
  nippelMaleTable2?: Array<{
    partNo: string
    threadSize: string
    flowRate: string
    overallLength: number
    hexSize: number
    largestDiameter: number
  }>
  nippelMaleTable3?: Array<{
    partNo: string
    threadSize: string
    overallLength: number
    hexSize: number
    largestDiameter: number
  }>
  couplerMaleTable3?: Array<{
    partNo: string
    threadSize: string
    overallLength: number
    hexSize: number
    largestDiameter: number
  }>
  performanceSpecsTable?: Array<{
    sizeMm: number
    sizeInch: string
    workingPressureMpa: number
    workingPressurePsi: number
    flowRateLmin: number
    flowRateGpm: number
    burstPressure1Mpa: number
    burstPressure1Psi: number
    burstPressure2Mpa: number
    burstPressure2Psi: number
    burstPressure3Mpa: number
    burstPressure3Psi: number
  }>
  couplerFemaleImage?: string
  nippelMaleImage1?: string
  couplerMaleImage1?: string
  couplerMaleImage2?: string
  nippelMaleImage2?: string
  nippelMaleImage3?: string
  couplerMaleImage3?: string
}

export const pushPullCouplers: PushPullCouplerProduct[] = [
  {
    id: 1,
    code: "KZAF-001",
    name: "KZAF Series (Steel)",
    shortName: "KZAF Steel",
    slug: "kzaf-series-steel",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Push%20And%20Pull%20Type%20Hydraulic%20Quick%20Couplings%28Steel%29%20KZA%20series-nSX1mYwZkE2RRMdYEyImtXj3PwJWLr.png",
    description:
      "High-performance carbon steel push-and-pull quick couplers with heat-treated wear parts. Rated for 250 Bar with NBR seals and PTFE backup rings. Features reliable poppet valve closure and breakaway function according to ISO 5675. Enhanced valve response and seal integrity for demanding applications. Disconnection under pressure is not allowed.",
    material: "Carbon Steel with heat treated wear parts",
    surfaceTreat: "Standard",
    application:
      "Heavy-duty hydraulic systems, industrial machinery, specialized hydraulic equipment, push-pull applications requiring 250 Bar rated pressure",
    features: [
      "Connexion by pushing the male coupling",
      "Disconnection by pulling the malepart",
      "Shut off by poppet valve",
      "Connectable with male part (ISO A) under pressure",
      "Disconnection under pressure is not allowed",
      "Breakaway function according to ISO 5675",
      "Interchangeability according to ISO7241-1 part A",
    ],
    specs: [
      { label: "Body Size", value: "1/2\"" },
      { label: "Rated Pressure", value: "250 Bar" },
      { label: "Material", value: "Carbon Steel" },
      { label: "Standard Seal Material", value: "NBR (other materials available on request)" },
      { label: "Temperature Range", value: "-20°C to +125°C" },
    ],
    techSpecs: [
      "High grade carbon steel with heat treated wear parts",
      "NBR",
      "Backup ring in PTFE",
      "-25°C to +125°C (-13°F to +257°F)",
      "According to ISO 7241-2",
    ],
    applications: [
      "Heavy-duty industrial hydraulics",
      "Specialized machinery applications",
      "High-demand hydraulic systems",
      "Equipment with frequent coupling cycles",
      "250 Bar rated pressure applications",
    ],
    couplerFemaleTable: [
      {
        partNo: "KZAF-G04SF",
        thread: "G1/2",
        overallLength: 107.3,
        hexSize: 27,
        largestDiameter: 38,
        partNo2: "",
        thread2: "",
        overallLength2: 0,
        hexSize2: 0,
        largestDiameter2: 0,
      },
      {
        partNo: "KZAF-N04SF",
        thread: "NPT1/2",
        overallLength: 107.3,
        hexSize: 27,
        largestDiameter: 38,
        partNo2: "",
        thread2: "",
        overallLength2: 0,
        hexSize2: 0,
        largestDiameter2: 0,
      },
      {
        partNo: "KZAF-U04SF",
        thread: "3/4UNF",
        overallLength: 107.3,
        hexSize: 27,
        largestDiameter: 38,
        partNo2: "",
        thread2: "",
        overallLength2: 0,
        hexSize2: 0,
        largestDiameter2: 0,
      },
      {
        partNo: "KZAF-M22SF",
        thread: "M22X1.5",
        overallLength: 107.3,
        hexSize: 32,
        largestDiameter: 38,
        partNo2: "",
        thread2: "",
        overallLength2: 0,
        hexSize2: 0,
        largestDiameter2: 0,
      },
      {
        partNo: "KZAF-U1-7/8S",
        thread: "7/8UN",
        overallLength: 110.8,
        hexSize: 32,
        largestDiameter: 38,
        partNo2: "",
        thread2: "",
        overallLength2: 0,
        hexSize2: 0,
        largestDiameter2: 0,
      },
      {
        partNo: "KZAF-G04SF",
        thread: "G1/2",
        overallLength: 4.22,
        hexSize: 1.06,
        largestDiameter: 1.5,
        partNo2: "",
        thread2: "",
        overallLength2: 0,
        hexSize2: 0,
        largestDiameter2: 0,
      },
      {
        partNo: "KZAF-N04SF",
        thread: "NPT1/2",
        overallLength: 4.22,
        hexSize: 1.06,
        largestDiameter: 1.5,
        partNo2: "",
        thread2: "",
        overallLength2: 0,
        hexSize2: 0,
        largestDiameter2: 0,
      },
      {
        partNo: "KZAF-U04SF",
        thread: "3/4UNF",
        overallLength: 4.22,
        hexSize: 1.06,
        largestDiameter: 1.5,
        partNo2: "",
        thread2: "",
        overallLength2: 0,
        hexSize2: 0,
        largestDiameter2: 0,
      },
      {
        partNo: "KZAF-M22SF",
        thread: "M22X1.5",
        overallLength: 4.48,
        hexSize: 1.26,
        largestDiameter: 1.5,
        partNo2: "",
        thread2: "",
        overallLength2: 0,
        hexSize2: 0,
        largestDiameter2: 0,
      },
      {
        partNo: "KZAF-U1-7/8SF",
        thread: "7/8UN",
        overallLength: 4.48,
        hexSize: 1.26,
        largestDiameter: 1.5,
        partNo2: "",
        thread2: "",
        overallLength2: 0,
        hexSize2: 0,
        largestDiameter2: 0,
      },
    ],
    performanceSpecsTable: [
      {
        sizeMm: 12.5,
        sizeInch: "1/2\"",
        workingPressureMpa: 25,
        workingPressurePsi: 3625,
        flowRateLmin: 68,
        flowRateGpm: 18,
        burstPressure1Mpa: 120,
        burstPressure1Psi: 17100,
        burstPressure2Mpa: 100,
        burstPressure2Psi: 14500,
        burstPressure3Mpa: 105,
        burstPressure3Psi: 15250,
      },
    ],
    couplerFemaleImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Couplers%20Female%20Thread%20PUSH%20AND%20PULL%20TYPE%20HYDRAULIC%20QUICK%20COUPLINGS%28STEEL%29%20%282%29-lHIcnJihqsAaL9tgBKCFNDkPdhVEfs.png",
  },
  {
    id: 2,
    code: "KZAV-001",
    name: "KZAV Series (Steel)",
    shortName: "KZAV Steel",
    slug: "kzav-series-steel",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Push%20And%20Pull%20Type%20Hydraulic%20Quick%20Couplings%28Steel%29%20KZA%20series-nSX1mYwZkE2RRMdYEyImtXj3PwJWLr.png",
    description:
      "High-performance carbon steel push-and-pull quick couplers with heat-treated wear parts. Rated for 250 Bar with NBR seals and PTFE backup rings. Features reliable poppet valve closure and breakaway function according to ISO 5675. Enhanced valve response and seal integrity for demanding applications.",
    material: "Carbon Steel with heat treated wear parts",
    surfaceTreat: "Standard",
    application:
      "Heavy-duty hydraulic systems, industrial machinery, specialized hydraulic equipment, push-pull applications requiring 250 Bar rated pressure",
    features: [
      "Connexion by pushing the male coupling",
      "Disconnection by pulling the male part",
      "Shut off by poppet valve",
      "Connectable with male part (ISO A) under pressure",
      "Breakaway function according to ISO 5675 specifications",
      "Interchangeability according to ISO7241-1 part A",
    ],
    specs: [
      { label: "Body Size", value: "1/2\"" },
      { label: "Rated Pressure", value: "250 Bar" },
      { label: "Material", value: "Carbon Steel" },
      { label: "Standard Seal Material", value: "NBR (other materials available on request)" },
      { label: "Temperature Range", value: "-20°C to +125°C" },
    ],
    techSpecs: [
      "High grade carbon steel with heat treated wear parts",
      "NBR",
      "Backup ring in PTFE",
      "-25°C to +125°C (-13°F to +257°F)",
      "According to ISO 7241-2",
    ],
    applications: [
      "Heavy-duty industrial hydraulics",
      "Specialized machinery applications",
      "High-demand hydraulic systems",
      "Equipment with frequent coupling cycles",
      "250 Bar rated pressure applications",
    ],
    couplerFemaleTable: [
      {
        partNo: "KZAV-GO4SF",
        thread: "G1/2",
        overallLength: 107.3,
        hexSize: 27,
        largestDiameter: 38,
        partNo2: "",
        thread2: "",
        overallLength2: 0,
        hexSize2: 0,
        largestDiameter2: 0,
      },
      {
        partNo: "KZAV-NO4SF",
        thread: "NPT1/2",
        overallLength: 107.3,
        hexSize: 27,
        largestDiameter: 38,
        partNo2: "",
        thread2: "",
        overallLength2: 0,
        hexSize2: 0,
        largestDiameter2: 0,
      },
      {
        partNo: "KZAV-UO4SF",
        thread: "3/4UNF",
        overallLength: 107.3,
        hexSize: 27,
        largestDiameter: 38,
        partNo2: "",
        thread2: "",
        overallLength2: 0,
        hexSize2: 0,
        largestDiameter2: 0,
      },
      {
        partNo: "KZAV-M22SF",
        thread: "M22X1.5",
        overallLength: 107.3,
        hexSize: 32,
        largestDiameter: 38,
        partNo2: "",
        thread2: "",
        overallLength2: 0,
        hexSize2: 0,
        largestDiameter2: 0,
      },
      {
        partNo: "KZAV-U178S",
        thread: "7/8UNF",
        overallLength: 110,
        hexSize: 32,
        largestDiameter: 38,
        partNo2: "",
        thread2: "",
        overallLength2: 0,
        hexSize2: 0,
        largestDiameter2: 0,
      },
      {
        partNo: "KZAV-GO4SF",
        thread: "G1/2",
        overallLength: 4.22,
        hexSize: 1.06,
        largestDiameter: 1.5,
        partNo2: "",
        thread2: "",
        overallLength2: 0,
        hexSize2: 0,
        largestDiameter2: 0,
      },
      {
        partNo: "KZAV-NO4SF",
        thread: "NPT1/2",
        overallLength: 4.22,
        hexSize: 1.06,
        largestDiameter: 0.5,
        partNo2: "",
        thread2: "",
        overallLength2: 0,
        hexSize2: 0,
        largestDiameter2: 0,
      },
      {
        partNo: "KZAV-UO4SF",
        thread: "3/4UNF",
        overallLength: 4.22,
        hexSize: 1.06,
        largestDiameter: 1.5,
        partNo2: "",
        thread2: "",
        overallLength2: 0,
        hexSize2: 0,
        largestDiameter2: 0,
      },
      {
        partNo: "KZAV-M22SF",
        thread: "M22X1.5",
        overallLength: 4.48,
        hexSize: 1.26,
        largestDiameter: 1.5,
        partNo2: "",
        thread2: "",
        overallLength2: 0,
        hexSize2: 0,
        largestDiameter2: 0,
      },
      {
        partNo: "KZAV-U178SF",
        thread: "7/8UNF",
        overallLength: 4.48,
        hexSize: 1.26,
        largestDiameter: 1.5,
        partNo2: "",
        thread2: "",
        overallLength2: 0,
        hexSize2: 0,
        largestDiameter2: 0,
      },
    ],
    performanceSpecsTable: [
      {
        sizeMm: 12.5,
        sizeInch: "1/2\"",
        workingPressureMpa: 25,
        workingPressurePsi: 3625,
        flowRateLmin: 68,
        flowRateGpm: 18,
        burstPressure1Mpa: 120,
        burstPressure1Psi: 17100,
        burstPressure2Mpa: 100,
        burstPressure2Psi: 14500,
        burstPressure3Mpa: 105,
        burstPressure3Psi: 15250,
      },
    ],
    couplerFemaleImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kzav%20PUSH%20AND%20PULL%20TYPE%20HYDRAULIC%20QUICK%20COUPLINGS%28STEEL%29-YTLj0vONQL9d1763ZvJntP0o4bDzDQ.png",
  },
  {
    id: 3,
    code: "KZA-001",
    name: "KZA Series (Steel)",
    shortName: "KZA Steel",
    slug: "kza-series-steel",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Push%20And%20Pull%20Type%20Hydraulic%20Quick%20Couplings%28Steel%29%20KZA%20series-nSX1mYwZkE2RRMdYEyImtXj3PwJWLr.png",
    description:
      "Durable high-grade carbon steel push-and-pull quick couplers with heat-treated wear parts. Features reliable poppet valve closure and breakaway function according to ISO 5675. Connectable under pressure with superior sealing capability using NBR seals and PTFE backup rings.",
    material: "High-grade carbon steel with heat treated wear parts",
    surfaceTreat: "Standard",
    application:
      "General industrial hydraulics, agricultural equipment, machinery, push-pull hydraulic systems, heavy-duty applications",
    features: [
      "Connexion by pushing the male coupling",
      "Disconnection by pulling the male part",
      "Shut off by poppet valve",
      "Connectable with male part (ISO A) under pressure",
      "Disconnection under pressure is not allowed",
      "Breakaway function according to ISO 5675",
      "Interchangeability according to ISO7241-1 part A",
    ],
    specs: [
      { label: "Material", value: "High-grade carbon steel with heat treated wear parts" },
      { label: "Standard Seal Material", value: "NBR" },
      { label: "Backup Ring", value: "PTFE" },
      { label: "Temperature Range", value: "-25°C to +125°C (-13°F to +257°F)" },
      { label: "Standard", value: "According to ISO 7241-2" },
    ],
    techSpecs: [
      "High-grade carbon steel with heat treated wear parts",
      "NBR",
      "Backup ring in PTFE",
      "-25°C to +125°C (-13°F to +257°F)",
      "According to ISO 7241-2",
    ],
    applications: [
      "General industrial hydraulics",
      "Agricultural equipment",
      "Machinery hydraulics",
      "Heavy-duty industrial applications",
      "Cost-effective reliable solutions",
    ],
    couplerFemaleTable: [
      {
        partNo: "KZA-03SF",
        thread: "G3/8\"",
        overallLength: 59,
        hexSize: 21,
        largestDiameter: 33,
        partNo2: "KZA-N03SF",
        thread2: "NPT3/8\"",
        overallLength2: 2.31,
        hexSize2: 0.81,
        largestDiameter2: 1.31,
      },
      {
        partNo: "KZA-04SF",
        thread: "G1/2\"",
        overallLength: 68,
        hexSize: 24,
        largestDiameter: 38,
        partNo2: "KZA-N04SF",
        thread2: "NPT1/2\"",
        overallLength2: 2.68,
        hexSize2: 0.94,
        largestDiameter2: 1.50,
      },
    ],
    nippelMaleTable1: [
      {
        partNo: "KZA-14PF-MM",
        threadSize: "14x1.5",
        flowRate: "0.85",
        overallLengthA: 62,
        hexSizeC: 27,
        largestDiameterD: 31,
      },
      {
        partNo: "KZA-16PF-MM",
        threadSize: "16x1.5",
        flowRate: "10",
        overallLengthA: 62,
        hexSizeC: 27,
        largestDiameterD: 31,
      },
      {
        partNo: "KZA-18PF-MM",
        threadSize: "18x1.5",
        flowRate: "12",
        overallLengthA: 62,
        hexSizeC: 27,
        largestDiameterD: 31,
      },
      {
        partNo: "KZA-22PF-MM",
        threadSize: "22x1.5",
        flowRate: "15",
        overallLengthA: 58,
        hexSizeC: 27,
        largestDiameterD: 31,
      },
      {
        partNo: "KZA-24PF-MM",
        threadSize: "24x1.5",
        flowRate: "16",
        overallLengthA: 60,
        hexSizeC: 27,
        largestDiameterD: 34,
      },
      {
        partNo: "KZA-26PF-MM",
        threadSize: "26x1.5",
        flowRate: "18",
        overallLengthA: 62,
        hexSizeC: 30,
        largestDiameterD: 34,
      },
      {
        partNo: "KZA-30PF-MM",
        threadSize: "30x2",
        flowRate: "20",
        overallLengthA: 62,
        hexSizeC: 30,
        largestDiameterD: 34,
      },
    ],
    couplerMaleTable2: [
      {
        partNo: "KZA-14SF-MLM",
        threadSize: "14x1.5",
        flowRate: "0.8L",
        overallLength: 85,
        hexSize: 27,
        largestDiameter: 38,
      },
      {
        partNo: "KZA-16SF-MLM",
        threadSize: "16x1.5",
        flowRate: "10L",
        overallLength: 85,
        hexSize: 27,
        largestDiameter: 38,
      },
      {
        partNo: "KZA-18SF-MLM",
        threadSize: "18x1.5",
        flowRate: "12L",
        overallLength: 85,
        hexSize: 27,
        largestDiameter: 38,
      },
      {
        partNo: "KZA-22SF-MLM",
        threadSize: "22x1.5",
        flowRate: "15L",
        overallLength: 86,
        hexSize: 27,
        largestDiameter: 38,
      },
      {
        partNo: "KZA-24SF-MLM",
        threadSize: "24x1.5",
        flowRate: "16L",
        overallLength: 86,
        hexSize: 27,
        largestDiameter: 38,
      },
      {
        partNo: "KZA-26SF-MLM",
        threadSize: "26x1.5",
        flowRate: "18L",
        overallLength: 88,
        hexSize: 30,
        largestDiameter: 38,
      },
      {
        partNo: "KZA-30SF-MLM",
        threadSize: "30x2",
        flowRate: "20L",
        overallLength: 88,
        hexSize: 30,
        largestDiameter: 38,
      },
    ],
    nippelMaleTable2: [
      {
        partNo: "KZA-14PF-MLM",
        threadSize: "14x1.5",
        flowRate: "0.8L",
        overallLength: 72,
        hexSize: 27,
        largestDiameter: 31,
      },
      {
        partNo: "KZA-16PF-MLM",
        threadSize: "16x1.5",
        flowRate: "10L",
        overallLength: 72,
        hexSize: 27,
        largestDiameter: 31,
      },
      {
        partNo: "KZA-18PF-MLM",
        threadSize: "18x1.5",
        flowRate: "12L",
        overallLength: 72,
        hexSize: 27,
        largestDiameter: 31,
      },
      {
        partNo: "KZA-22PF-MLM",
        threadSize: "22x1.5",
        flowRate: "15L",
        overallLength: 73,
        hexSize: 27,
        largestDiameter: 31,
      },
      {
        partNo: "KZA-24PF-MLM",
        threadSize: "24x1.5",
        flowRate: "16L",
        overallLength: 75,
        hexSize: 27,
        largestDiameter: 31,
      },
      {
        partNo: "KZA-26PF-MLM",
        threadSize: "26x1.5",
        flowRate: "18L",
        overallLength: 75,
        hexSize: 30,
        largestDiameter: 34,
      },
      {
        partNo: "KZA-30PF-MLM",
        threadSize: "30x2",
        flowRate: "20L",
        overallLength: 75,
        hexSize: 30,
        largestDiameter: 34,
      },
    ],
    nippelMaleTable3: [
      {
        partNo: "KZA-14SF-MWG",
        threadSize: "3/8",
        overallLength: 73,
        hexSize: 27,
        largestDiameter: 38,
      },
      {
        partNo: "KZA-16SF-MWG",
        threadSize: "1/2",
        overallLength: 76,
        hexSize: 27,
        largestDiameter: 38,
      },
      {
        partNo: "KZA-18SF-MWM",
        threadSize: "16x1.5",
        overallLength: 70,
        hexSize: 27,
        largestDiameter: 38,
      },
      {
        partNo: "KZA-22SF-MW",
        threadSize: "20x1.5",
        overallLength: 75,
        hexSize: 27,
        largestDiameter: 38,
      },
      {
        partNo: "KZA-24SF-MW",
        threadSize: "22x1.5",
        overallLength: 73,
        hexSize: 27,
        largestDiameter: 38,
      },
    ],
    couplerMaleTable3: [
      {
        partNo: "KZA-03PF-MWG",
        threadSize: "3/8",
        overallLength: 60,
        hexSize: 27,
        largestDiameter: 31,
      },
      {
        partNo: "KZA-04PF-MWG",
        threadSize: "1/2",
        overallLength: 63,
        hexSize: 27,
        largestDiameter: 31,
      },
      {
        partNo: "KZA-16PF-MWM",
        threadSize: "16x1.5",
        overallLength: 57,
        hexSize: 27,
        largestDiameter: 31,
      },
      {
        partNo: "KZA-20PF-MW",
        threadSize: "20x1.5",
        overallLength: 72,
        hexSize: 27,
        largestDiameter: 31,
      },
      {
        partNo: "KZA-22PF-MW",
        threadSize: "22x1.5",
        overallLength: 60,
        hexSize: 27,
        largestDiameter: 31,
      },
    ],
    couplerFemaleImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Couplers%20Female%20Thread%20PUSH%20AND%20PULL%20TYPE%20HYDRAULIC%20QUICK%20COUPLINGS%28STEEL%29-FocIKTWPLUnjS6a0yeABoPXsmjMjhL.png",
    nippelMaleImage1: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nipple%20Female%20Thread%201PUSH%20AND%20PULL%20TYPE%20HYDRAULIC%20QUICK%20COUPLINGS%28STEEL%29-DxZfdyovjt9bmZljqgA3PwNp5cu45k.png",
    couplerMaleImage1: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Couplers%20Male%20Thread-1PUSH%20AND%20PULL%20TYPE%20HYDRAULIC%20QUICK%20COUPLINGS%28STEEL%29-VPZuEeuPqjtRLadkOAGdeeod52CluE.png",
    couplerMaleImage2: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Coupler%20Male%20Thread-2%20PUSH%20AND%20PULL%20TYPE%20HYDRAULIC%20QUICK%20COUPLINGS%28STEEL%29-zjinqG6IVFAuDOxHPnRm6boPDIHwiW.png",
    nippelMaleImage2: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nipple%20Male%20Thread-2%20PUSH%20AND%20PULL%20TYPE%20HYDRAULIC%20QUICK%20COUPLINGS%28STEEL%29-aN3xjO11nEHdGmLnopsRt66z9PGmqa.png",
    nippelMaleImage3: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nipple%20Male%20Thread-3PUSH%20AND%20PULL%20TYPE%20HYDRAULIC%20QUICK%20COUPLINGS%28STEEL%29-sYgUQ6EVOY5MB9jj1P826NTR06upr3.png",
    couplerMaleImage3: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Coupler%20Male%20Thread-3%20PUSH%20AND%20PULL%20TYPE%20HYDRAULIC%20QUICK%20COUPLINGS%28STEEL%29-Yoy5btrvAElmWwwby0IsxSAnaQeG8Y.png",
    performanceSpecsTable: [
      {
        sizeMm: 10,
        sizeInch: "3/8\"",
        workingPressureMpa: 27,
        workingPressurePsi: 3800,
        flowRateLmin: 24,
        flowRateGpm: 6.2,
        burstPressure1Mpa: 115,
        burstPressure1Psi: 16400,
        burstPressure2Mpa: 130,
        burstPressure2Psi: 18600,
        burstPressure3Mpa: 110,
        burstPressure3Psi: 15700,
      },
      {
        sizeMm: 12.5,
        sizeInch: "1/2\"",
        workingPressureMpa: 30,
        workingPressurePsi: 4300,
        flowRateLmin: 75,
        flowRateGpm: 19.8,
        burstPressure1Mpa: 120,
        burstPressure1Psi: 17100,
        burstPressure2Mpa: 120,
        burstPressure2Psi: 17100,
        burstPressure3Mpa: 120,
        burstPressure3Psi: 17100,
      },
      {
        sizeMm: 25,
        sizeInch: "1\"",
        workingPressureMpa: 22,
        workingPressurePsi: 3150,
        flowRateLmin: 270,
        flowRateGpm: 71.4,
        burstPressure1Mpa: 110,
        burstPressure1Psi: 15700,
        burstPressure2Mpa: 110,
        burstPressure2Psi: 15700,
        burstPressure3Mpa: 90,
        burstPressure3Psi: 12900,
      },
    ],
  },
]
