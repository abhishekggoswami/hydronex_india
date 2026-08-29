export interface HighPressureCoupler {
  id: number
  code: string
  name: string
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
  femaleDiagram: string
  femaleSpecsTable: Array<{
    partNo: string
    thread: string
    overallLengthMm: number
    hexSizeMm: number
    largestDiameterMm: number
  }>
  maleDiagram: string
  maleSpecsTable: Array<{
    partNo: string
    thread: string
    overallLengthMm: number
    hexSizeMm: number
    largestDiameterMm: number
  }>
}

export const highPressureCouplers: HighPressureCoupler[] = [
  {
    id: 1,
    code: "KTC-001",
    name: "Super High Pressure Hydraulic Quick Coupling (Steel) KTC Series",
    slug: "ktc-series-steel",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Super%20High%20Pressure%20Hydraulic%20Quick%20Coupling%28Steel%29%20Ktc%20Series-uK6ibmMClqP7dkKGGit3Jd8eeIe7sN.png",
    description:
      "Super high-pressure hydraulic quick couplers engineered for extreme pressure applications up to 10,000 PSI. KTC Series provides reliable performance in the most demanding industrial environments with advanced sealing technology and heavy-duty construction.",
    material: "Steel",
    surfaceTreat: "Chrome Plated",
    application: "High-pressure industrial hydraulic systems, extreme pressure applications, specialized equipment requiring reliable connections",
    features: [
      "Connexion by screwing together the two parts",
      "Disconnexion by unscrewing the two parts",
      "Shut off by poppet valve",
      "Connectable under residual pressure",
      "Disconnexion under residual pressure",
      "Interchangeability according to Par key internal Standards",
    ],
    specs: [
      { label: "Type", value: "Super High Pressure" },
      { label: "Material", value: "Steel" },
      { label: "Rated Pressure", value: "700 Bar (10,000 PSI)" },
      { label: "Design", value: "Screw-Connect Poppet Valve" },
    ],
    techSpecs: [
      "High grade carbon steel with heat treated wear parts",
      "NBR",
      "Backup ring in PTFE",
      "-25°C to +125°C (-13°F to +257°F)",
      "According to ISO 7241-2",
    ],
    applications: [
      "Ultra-high-pressure industrial systems",
      "Specialized pressure applications",
      "Heavy-duty equipment requiring extreme reliability",
      "Advanced industrial machinery",
      "Extreme pressure environments",
    ],
    femaleDiagram:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUPER%20HIGH%20PRESSURE%20Female%20HYDRAULIC%20QUICK%20COUPLING%28STEEL%29-FtV3zcr28zz13Cn4MWfyJdmVUv4lEJ.png",
    femaleSpecsTable: [
      {
        partNo: "KTC-03SF",
        thread: "NPT3/8",
        overallLengthMm: 62.5,
        hexSizeMm: 24,
        largestDiameterMm: 32,
      },
    ],
    maleDiagram:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUPER%20HIGH%20PRESSURE%20Male%20HYDRAULIC%20QUICK%20COUPLING%28STEEL%29-xdrleDyERkSdT9h88DmNfCBW6i0SrF.png",
    maleSpecsTable: [
      {
        partNo: "KTC-03PF",
        thread: "NPT3/8",
        overallLengthMm: 44.3,
        hexSizeMm: 24,
        largestDiameterMm: 28,
      },
    ],
  },
]
