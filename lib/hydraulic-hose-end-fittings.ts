export interface HoseEndFittingProduct {
  slug: string
  name: string
  shortName: string
  tagline: string
  image: string
  description: string
  features: string[]
  specs: { label: string; value: string }[]
  applications: string[]
  quickStats?: { label: string; value: string }[]
  specifications?: Array<{
    hoseIdInch: string
    hoseIdMm: string
    bspFemale: string[]
    metricFemale: string[]
    ferruleType: string[]
    standPipe: string[]
    unfFemale: string[]
    psi3000: string
    psi6000: string
  }>
}

export const hydraulicHoseEndFittings: HoseEndFittingProduct[] = [
  {
    slug: "hose-fittings",
    name: "Hose Fittings",
    shortName: "Hose Fittings",
    tagline: "Precision-Engineered Hydraulic Hose End Fittings",
    image: "/images/hydraulic-hose-end-fittings/hose-fittings.png",
    description:
      "Hydronex Hose Fittings provide precision-engineered connections for hydraulic hose systems with superior quality construction. Available in multiple configurations including straight connectors, 90-degree elbows, 45-degree angles, and adapters. These fittings ensure secure, leak-free connections across a wide range of hydraulic applications and pressure ratings. Our comprehensive range includes BSP, Metric, and UNF connections with SAE flange options for both 3000 PSI and 6000 PSI applications.",
    features: [
      "Precision-engineered design",
      "Leak-free connections",
      "Quality construction",
      "Multiple fitting types (straight, 90°, 45°)",
      "Wide size range (1/4\" to 3\")",
      "Multiple connection standards (BSP, Metric, UNF)",
      "SAE flange options (3000 & 6000 PSI)",
      "High-pressure rated",
    ],
    specs: [
      { label: "Type", value: "Hydraulic Hose End Fittings" },
      { label: "Fitting Styles", value: "Straight, 90° Elbow, 45° Angle, Adapters" },
      { label: "Connection Types", value: "BSP Female/Male, Metric Female/Male, UNF Female/Male" },
      { label: "Size Range", value: "1/4\" to 3\" (6mm to 76.2mm)" },
      { label: "Ferrule Types", value: "4-5 OR 6-L, 6-3 OR 8-L, 8-OR 10-L, 10-S OR 12-L, 12-S" },
      { label: "SAE Flange Ratings", value: "3000 PSI and 6000 PSI" },
      { label: "Standards", value: "BSP, Metric, UNF, SAE" },
    ],
    applications: [
      "Hydraulic hose connections",
      "Pressure line systems",
      "Return line systems",
      "Pilot line connections",
      "Industrial hydraulic equipment",
      "Mobile hydraulic systems",
      "Tight space installations",
      "High-pressure applications",
    ],
    quickStats: [
      { label: "Type", value: "Hose End Fittings" },
      { label: "Styles", value: "Straight, 90°, 45° & Adapters" },
      { label: "Size Range", value: "1/4\" - 3\"" },
    ],
    specifications: [
      {
        hoseIdInch: "1/4\"",
        hoseIdMm: "6",
        bspFemale: ["1/4\" BSP"],
        metricFemale: ["M 12 x 1.5"],
        ferruleType: ["4-5 OR 6-L"],
        standPipe: ["6mm OD"],
        unfFemale: ["7/16\" UNF"],
        psi3000: "C",
        psi6000: "C",
      },
      {
        hoseIdInch: "5/16\"",
        hoseIdMm: "8",
        bspFemale: ["3/8\" BSP"],
        metricFemale: ["M 14 x 1.5", "M 16 x 1.5"],
        ferruleType: ["6-3 OR 8-L", "8-5 OR 10-L"],
        standPipe: ["8mm OD", "10mm OD"],
        unfFemale: ["1/2\" UNF", "9/16\" UNF"],
        psi3000: "D",
        psi6000: "D",
      },
      {
        hoseIdInch: "3/8\"",
        hoseIdMm: "10",
        bspFemale: ["3/8\" BSP", "1/2\" BSP"],
        metricFemale: ["M 16 x 1.5", "M 18 x 1.5"],
        ferruleType: ["8-4 OR 10-L", "10-S OR 12-L"],
        standPipe: ["10mm OD", "12mm OD"],
        unfFemale: ["9/16\" UNF", "5/8\" UNF"],
        psi3000: "E",
        psi6000: "E",
      },
      {
        hoseIdInch: "1/2\"",
        hoseIdMm: "12",
        bspFemale: ["1/2\" BSP", "5/8\" BSP", "3/4\" BSP"],
        metricFemale: ["M 20 x 1.5", "M 20 x 1.5", "M 24 x 1.5"],
        ferruleType: ["12-S", "12-S", "14-S OR 15-L"],
        standPipe: ["14mm OD", "12mm OD", "15mm OD"],
        unfFemale: ["3/4\" UNF", "3/4\" UNF", "7/8\" UNF"],
        psi3000: "2",
        psi6000: "2",
      },
      {
        hoseIdInch: "5/8\"",
        hoseIdMm: "16",
        bspFemale: ["5/8\" BSP", "3/4\" BSP"],
        metricFemale: ["M 24 x 1.5", "M 26 x 1.5"],
        ferruleType: ["16-S", "18-L"],
        standPipe: ["16mm OD", "18mm OD"],
        unfFemale: ["1 1/16\" UNF"],
        psi3000: "30.15mm",
        psi6000: "41.27mm",
      },
      {
        hoseIdInch: "3/4\"",
        hoseIdMm: "19/20",
        bspFemale: ["1\" BSP", "3/4\" BSP", "1\" BSP"],
        metricFemale: ["M 30 x 2.0", "M 26 x 1.5", "M 30 x 2.0"],
        ferruleType: ["20-S OR 22-L", "18-L", "20-S OR 22-L"],
        standPipe: ["20mm OD", "20mm OD", "22mm OD"],
        unfFemale: ["1 1/16\" UNF", "1 1/16\" UNF", "1 5/16\" UNF"],
        psi3000: "38.10mm",
        psi6000: "44.45mm",
      },
      {
        hoseIdInch: "1\"",
        hoseIdMm: "25",
        bspFemale: ["1\" BSP", "1 1/4\" BSP"],
        metricFemale: ["M 36 x 2.0", "M 42 x 2.0"],
        ferruleType: ["25-S OR 28-L", "30-S"],
        standPipe: ["25mm OD", "28mm OD"],
        unfFemale: ["1 5/16\" UNF", "1 5/8\" UNF"],
        psi3000: "44.45mm",
        psi6000: "47.62mm",
      },
      {
        hoseIdInch: "1 1/4\"",
        hoseIdMm: "32",
        bspFemale: ["1 1/4\" BSP", "1 1/2\" BSP"],
        metricFemale: ["M 42 x 2.0", "M 45 x 2.0"],
        ferruleType: ["30-S", "35-L"],
        standPipe: ["30mm OD", "35mm OD"],
        unfFemale: ["1 5/8\" UNF", "1 7/8\" UNF"],
        psi3000: "50.80mm",
        psi6000: "53.97mm",
      },
      {
        hoseIdInch: "1 1/2\"",
        hoseIdMm: "38/40",
        bspFemale: ["1 1/2\" BSP", "2\" BSP"],
        metricFemale: ["M 52 x 2.0", "M 65 x 2.0"],
        ferruleType: ["38-S", "42-L"],
        standPipe: ["38mm OD", "42mm OD"],
        unfFemale: ["1 7/8\" UNF", "2 1/2\" UNF"],
        psi3000: "60.32mm",
        psi6000: "63.50mm",
      },
      {
        hoseIdInch: "2\"",
        hoseIdMm: "50/51",
        bspFemale: ["2\" BSP", "2 1/2\" BSP"],
        metricFemale: ["M 65 x 2.0"],
        ferruleType: [],
        standPipe: ["45mm OD", "48mm OD"],
        unfFemale: ["2 1/2\" UNF"],
        psi3000: "71.42mm",
        psi6000: "79.37mm",
      },
      {
        hoseIdInch: "2 1/2\"",
        hoseIdMm: "63.5",
        bspFemale: ["2 1/2\" BSP"],
        metricFemale: [],
        ferruleType: [],
        standPipe: ["50mm OD"],
        unfFemale: ["2 1/2\" UNF"],
        psi3000: "",
        psi6000: "",
      },
      {
        hoseIdInch: "3\"",
        hoseIdMm: "76.2",
        bspFemale: ["3\" BSP", "3\" BSP", "4\" BSP"],
        metricFemale: [],
        ferruleType: [],
        standPipe: [],
        unfFemale: [],
        psi3000: "",
        psi6000: "",
      },
    ],
  },
]
