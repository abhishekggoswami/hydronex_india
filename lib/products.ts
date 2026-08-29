export type Product = {
  slug: string
  name: string
  category: string
  categorySlug: string
  description: string
  specs: { label: string; value: string }[]
  features: string[]
  image: string
}

export type Category = {
  slug: string
  name: string
  description: string
  products: Product[]
}

export const categories: Category[] = [
  {
    slug: "hydraulic-hose-and-fittings",
    name: "Hydraulic Hose and Fittings",
    description:
      "High-pressure hydraulic hoses and precision fittings engineered for demanding fluid-power applications across industrial, mobile, and OEM markets.",
    products: [
      {
        slug: "steel-wire-braided-hydraulic-hose",
        name: "Steel Wire Braided Hydraulic Hose",
        category: "Hydraulic Hose and Fittings",
        categorySlug: "hydraulic-hose-and-fittings",
        description:
          "Single and double wire braid reinforced hydraulic hoses designed for medium to high-pressure applications. Compliant with SAE 100R1, R2, and EN853 standards, these hoses deliver exceptional flexibility and durability in hydraulic systems.",
        specs: [
          { label: "Pressure Rating", value: "Up to 6,000 PSI" },
          { label: "Temperature Range", value: "-40°C to +100°C" },
          { label: "Standards", value: "SAE 100R1/R2, EN853 1SN/2SN" },
          { label: "Inner Diameter", value: "3mm – 51mm" },
          { label: "Reinforcement", value: "1 or 2 layers steel wire braid" },
          { label: "Certification", value: "ISO 9001, SAE, EN" },
        ],
        features: [
          "High-pressure resistance with excellent flexibility",
          "Abrasion-resistant outer cover",
          "Available in custom lengths and end fittings",
          "Oil, fuel, and water resistant",
          "Low volumetric expansion under pressure",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "steel-wire-spiral-hydraulic-hose",
        name: "Steel Wire Spiral Hydraulic Hose",
        category: "Hydraulic Hose and Fittings",
        categorySlug: "hydraulic-hose-and-fittings",
        description:
          "Four and six spiral wire reinforced hydraulic hoses for extreme high-pressure and impulse applications. Ideal for heavy construction equipment, mining, and offshore drilling.",
        specs: [
          { label: "Pressure Rating", value: "Up to 10,000 PSI" },
          { label: "Temperature Range", value: "-40°C to +120°C" },
          { label: "Standards", value: "SAE 100R9, R12, EN856 4SP/4SH/6SP" },
          { label: "Inner Diameter", value: "6mm – 51mm" },
          { label: "Reinforcement", value: "4 or 6 layers steel wire spiral" },
          { label: "Certification", value: "ISO 9001, SAE, EN, GOST" },
        ],
        features: [
          "Handles extreme pressure and impulse cycles",
          "High fatigue resistance",
          "Suitable for heavy-duty mobile equipment",
          "Superior kink resistance",
          "Long service life in demanding environments",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "textile-reinforced-hydraulic-hose",
        name: "Textile Reinforced Hydraulic Hose",
        category: "Hydraulic Hose and Fittings",
        categorySlug: "hydraulic-hose-and-fittings",
        description:
          "Lightweight, flexible hydraulic hoses reinforced with high-tenacity synthetic textile for low to medium-pressure hydraulic and pneumatic systems.",
        specs: [
          { label: "Pressure Rating", value: "Up to 2,000 PSI" },
          { label: "Temperature Range", value: "-40°C to +100°C" },
          { label: "Standards", value: "SAE 100R3, R6, EN854" },
          { label: "Inner Diameter", value: "6mm – 38mm" },
          { label: "Reinforcement", value: "1 or 2 textile braids" },
          { label: "Certification", value: "ISO 9001, SAE, EN" },
        ],
        features: [
          "Lightweight and highly flexible",
          "Suitable for return and suction lines",
          "Excellent resistance to ozone and weathering",
          "Low minimum bend radius",
          "Cost-effective solution for low-pressure systems",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "thermoplastic-hydraulic-hose",
        name: "Thermoplastic Hydraulic Hose",
        category: "Hydraulic Hose and Fittings",
        categorySlug: "hydraulic-hose-and-fittings",
        description:
          "High-performance thermoplastic hydraulic hoses designed for use in compact, confined spaces. Features a non-conductive polyester braid ideal for aerial and utility equipment.",
        specs: [
          { label: "Pressure Rating", value: "Up to 5,000 PSI" },
          { label: "Temperature Range", value: "-54°C to +135°C" },
          { label: "Standards", value: "SAE 100R7, R8, EN855" },
          { label: "Inner Diameter", value: "3mm – 25mm" },
          { label: "Reinforcement", value: "Polyester braid or nylon spiral" },
          { label: "Certification", value: "ISO 9001, SAE, EN" },
        ],
        features: [
          "Non-conductive — safe for aerial equipment",
          "Lighter and smaller OD than rubber hoses",
          "Excellent chemical resistance",
          "Wide temperature range",
          "Low swell under high pressure",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "stainless-steel-ptfe-hose",
        name: "Stainless Steel PTFE Hose",
        category: "Hydraulic Hose and Fittings",
        categorySlug: "hydraulic-hose-and-fittings",
        description:
          "PTFE core hoses with stainless steel wire braid reinforcement for extreme chemical, temperature, and pressure resistance. Ideal for pharmaceutical, food processing, and chemical transfer.",
        specs: [
          { label: "Pressure Rating", value: "Up to 5,000 PSI" },
          { label: "Temperature Range", value: "-65°C to +260°C" },
          { label: "Standards", value: "SAE 100R14, FDA 21 CFR" },
          { label: "Inner Diameter", value: "3mm – 50mm" },
          { label: "Reinforcement", value: "SS304/SS316 wire braid" },
          { label: "Certification", value: "ISO 9001, FDA, SAE" },
        ],
        features: [
          "Virtually universal chemical compatibility",
          "Zero permeability — no contamination",
          "Ultra-smooth bore for easy cleaning",
          "Handles extreme temperatures",
          "FDA compliant for food and pharma use",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "specialty-hose",
        name: "Specialty Hose",
        category: "Hydraulic Hose and Fittings",
        categorySlug: "hydraulic-hose-and-fittings",
        description:
          "Custom-engineered specialty hoses designed for unique applications including ultra-high pressure, cryogenic, steam, and high-temperature environments.",
        specs: [
          { label: "Pressure Rating", value: "Application-specific" },
          { label: "Temperature Range", value: "Application-specific" },
          { label: "Standards", value: "Custom to client requirements" },
          { label: "Inner Diameter", value: "Custom" },
          { label: "Reinforcement", value: "Custom" },
          { label: "Certification", value: "ISO 9001, SAE, EN, GOST" },
        ],
        features: [
          "Fully custom-engineered to specification",
          "Available in non-standard configurations",
          "Designed for extreme or unique environments",
          "In-house testing to verify performance",
          "Rapid prototyping capability",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "hydraulic-hose-assembly",
        name: "Hydraulic Hose Assembly",
        category: "Hydraulic Hose and Fittings",
        categorySlug: "hydraulic-hose-and-fittings",
        description:
          "Complete ready-to-install hydraulic hose assemblies crimped and tested to your specifications. Available in standard and custom configurations with a wide range of end fitting options.",
        specs: [
          { label: "Pressure Rating", value: "Per hose specification" },
          { label: "Testing", value: "100% pressure tested" },
          { label: "Fitting Types", value: "BSP, JIC, SAE, NPT, ORFS, DIN" },
          { label: "Length Range", value: "150mm – 12,000mm+" },
          { label: "Lead Time", value: "24–72 hours standard" },
          { label: "Certification", value: "ISO 9001, SAE, EN" },
        ],
        features: [
          "100% pressure-tested before delivery",
          "Wide range of fitting configurations",
          "Custom lengths and orientations",
          "Laser-marked for traceability",
          "Rapid turnaround available",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "hydraulic-fittings-and-ends",
        name: "Hydraulic Fittings and Ends",
        category: "Hydraulic Hose and Fittings",
        categorySlug: "hydraulic-hose-and-fittings",
        description:
          "Comprehensive range of hydraulic hose fittings including BSP, JIC, NPT, SAE, ORFS, and DIN metric styles in carbon steel and stainless steel.",
        specs: [
          { label: "Materials", value: "Carbon steel, stainless steel, brass" },
          { label: "Standards", value: "SAE J514, BSP, DIN 2353, JIS" },
          { label: "Sizes", value: "1/8\" – 2\" and metric equivalents" },
          { label: "Finish", value: "Zinc plated, nickel plated, plain" },
          { label: "Seat Types", value: "37° flare, 45° flare, O-ring face" },
          { label: "Certification", value: "ISO 9001, SAE" },
        ],
        features: [
          "Extensive catalogue of styles and sizes",
          "High-pressure rated to system requirements",
          "Corrosion-resistant plating options",
          "Compatible with all major hose brands",
          "OEM and bulk supply available",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "hydraulic-adapters",
        name: "Hydraulic Adapters",
        category: "Hydraulic Hose and Fittings",
        categorySlug: "hydraulic-hose-and-fittings",
        description:
          "Thread-conversion and port adapters allowing connection between different thread forms and port types in hydraulic circuits.",
        specs: [
          { label: "Materials", value: "Carbon steel, stainless steel" },
          { label: "Thread Forms", value: "BSP, NPT, SAE, ORB, JIC, ORFS, DIN" },
          { label: "Sizes", value: "1/8\" – 2\"" },
          { label: "Finish", value: "Zinc plated" },
          { label: "Max Pressure", value: "6,000 PSI" },
          { label: "Certification", value: "ISO 9001" },
        ],
        features: [
          "Cross-thread conversion between all major standards",
          "Hex bar stock for consistent quality",
          "Suitable for high-pressure hydraulic circuits",
          "Catalogue of 2,000+ adapter configurations",
          "Custom machining available",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "hydraulic-quick-couplings",
        name: "Hydraulic Quick Couplings",
        category: "Hydraulic Hose and Fittings",
        categorySlug: "hydraulic-hose-and-fittings",
        description:
          "Push-to-connect and screw-to-connect hydraulic quick couplings for fast, leak-free connection and disconnection of hydraulic lines under pressure.",
        specs: [
          { label: "Materials", value: "Carbon steel, stainless steel" },
          { label: "Types", value: "Push-to-connect, screw-to-connect, flat-face" },
          { label: "Pressure Rating", value: "Up to 7,000 PSI" },
          { label: "Sizes", value: "1/4\" – 1-1/2\"" },
          { label: "Fluid Compatibility", value: "Hydraulic oil, water, diesel" },
          { label: "Certification", value: "ISO 7241, ISO 16028, ISO 9001" },
        ],
        features: [
          "Non-spill and low-spill designs available",
          "Connects and disconnects under residual pressure",
          "Wide range of interchange standards",
          "Heavy-duty dustcaps included",
          "Long service life in mobile equipment",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "hose-clamps",
        name: "Hose Clamps",
        category: "Hydraulic Hose and Fittings",
        categorySlug: "hydraulic-hose-and-fittings",
        description:
          "Worm-drive, T-bolt, spring, and constant-tension hose clamps for securing hoses in a variety of low and high-pressure applications.",
        specs: [
          { label: "Materials", value: "Carbon steel, stainless steel SS304/SS316" },
          { label: "Types", value: "Worm drive, T-bolt, spring, ear clamp" },
          { label: "Size Range", value: "8mm – 300mm diameter" },
          { label: "Finish", value: "Zinc plated, passivated" },
          { label: "Temperature", value: "-50°C to +300°C" },
          { label: "Certification", value: "ISO 9001, DIN 3017" },
        ],
        features: [
          "Full 304/316 stainless options for corrosive environments",
          "High torque designs for T-bolt clamps",
          "Constant-tension clamps for thermal cycling",
          "Wide size range from micro to large diameter",
          "OEM bulk packaging available",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "hose-machine-and-equipment",
        name: "Hose Machine and Equipment",
        category: "Hydraulic Hose and Fittings",
        categorySlug: "hydraulic-hose-and-fittings",
        description:
          "Professional hose fabrication machinery including crimping machines, cutting machines, and skiving tools for on-site and shop hose assembly.",
        specs: [
          { label: "Machine Types", value: "Crimping, cutting, skiving" },
          { label: "Hose Size Range", value: "1/4\" – 2\" (varies by model)" },
          { label: "Power", value: "Electric, hydraulic, manual" },
          { label: "Crimp Force", value: "Up to 120 tons" },
          { label: "Applications", value: "Workshop and mobile service van" },
          { label: "Certification", value: "CE, ISO 9001" },
        ],
        features: [
          "Heavy-duty construction for long service life",
          "Portable models available for field service",
          "Electronic die positioning for accuracy",
          "Compatible with major fitting brands",
          "Full training and support available",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "hydraulic-hose-crimping-machine",
        name: "Hydraulic Hose Crimping Machine",
        category: "Hydraulic Hose and Fittings",
        categorySlug: "hydraulic-hose-and-fittings",
        description:
          "Dedicated hydraulic hose crimping machines for precise and repeatable crimping of hydraulic hose assemblies in workshop and mobile environments.",
        specs: [
          { label: "Crimp Force", value: "40 – 120 tons" },
          { label: "Hose Range", value: "1/4\" – 2\" ID" },
          { label: "Crimp Diameter", value: "15mm – 90mm" },
          { label: "Power Supply", value: "220V / 380V / 12V DC portable" },
          { label: "Die Capacity", value: "8 or 12 die sets" },
          { label: "Certification", value: "CE, ISO 9001" },
        ],
        features: [
          "Digital crimp measurement display",
          "Rapid die change system",
          "Auto-stop at target crimp diameter",
          "Compact footprint for workshop or van",
          "Supports wire braid, spiral, and thermoplastic hoses",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "hose-protections",
        name: "Hose Protections",
        category: "Hydraulic Hose and Fittings",
        categorySlug: "hydraulic-hose-and-fittings",
        description:
          "Hose protection sleeves, spring guards, coil guards, and wraps that extend hose life by protecting against abrasion, UV, heat, and impact damage.",
        specs: [
          { label: "Types", value: "Nylon sleeve, spiral wrap, spring guard, fire sleeve" },
          { label: "Materials", value: "Nylon, polyethylene, silicone, fiberglass" },
          { label: "Size Range", value: "6mm – 150mm ID" },
          { label: "Temperature", value: "Up to 500°C (fire sleeve)" },
          { label: "Color Options", value: "Black, red, orange (custom)" },
          { label: "Certification", value: "ISO 9001" },
        ],
        features: [
          "Significantly extends hose service life",
          "Reduces downtime from abrasion damage",
          "Fire-resistant options for high-risk environments",
          "Easy to install on existing assemblies",
          "UV and weather resistant materials",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "hydraulics-hose-and-fittings-solution",
        name: "Hydraulics Hose and Fittings Solution",
        category: "Hydraulic Hose and Fittings",
        categorySlug: "hydraulic-hose-and-fittings",
        description:
          "Complete turnkey hydraulic hose and fittings supply solutions for OEM manufacturers and distributors, including design, manufacture, testing, and logistics support.",
        specs: [
          { label: "Service Type", value: "OEM, MRO, distribution" },
          { label: "MOQ", value: "Custom — no minimum for OEM" },
          { label: "Lead Time", value: "Standard and expedited options" },
          { label: "Testing", value: "Full in-house dynamic test lab" },
          { label: "Standards", value: "SAE, EN, ISO, GOST" },
          { label: "Certification", value: "ISO 9001:2015" },
        ],
        features: [
          "Single-source supplier for all hose needs",
          "Custom engineering and design support",
          "In-house testing to SAE and EN spec",
          "Private label and OEM branding available",
          "Global logistics and warehousing partnerships",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
  },
  {
    slug: "industrial-rubber-hose-and-fittings",
    name: "Industrial Rubber Hose and Fittings",
    description:
      "A comprehensive range of industrial rubber hoses for general purpose, chemical, food, steam, and specialty fluid transfer applications.",
    products: [
      {
        slug: "rubber-multipurpose-hose",
        name: "Rubber Multipurpose Hose",
        category: "Industrial Rubber Hose and Fittings",
        categorySlug: "industrial-rubber-hose-and-fittings",
        description:
          "Versatile EPDM and SBR rubber hoses suitable for air, water, and light oil service across industrial, agricultural, and construction applications.",
        specs: [
          { label: "Pressure Rating", value: "Up to 300 PSI" },
          { label: "Temperature Range", value: "-30°C to +80°C" },
          { label: "Standards", value: "SAE J517, BS EN ISO 4643" },
          { label: "Inner Diameter", value: "6mm – 51mm" },
          { label: "Reinforcement", value: "Textile braid" },
          { label: "Certification", value: "ISO 9001" },
        ],
        features: [
          "Handles air, water, and light petroleum products",
          "Good flexibility in cold temperatures",
          "Crush-resistant construction",
          "Available in bulk reels or cut lengths",
          "Cost-effective general service solution",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "rubber-air-hose",
        name: "Rubber Air Hose",
        category: "Industrial Rubber Hose and Fittings",
        categorySlug: "industrial-rubber-hose-and-fittings",
        description:
          "Heavy-duty compressed air hoses for pneumatic tools, air compressors, and industrial air supply systems. Designed to handle repeated flexing and abrasion.",
        specs: [
          { label: "Pressure Rating", value: "Up to 300 PSI working" },
          { label: "Temperature Range", value: "-40°C to +70°C" },
          { label: "Standards", value: "SAE J517 100R3" },
          { label: "Inner Diameter", value: "6mm – 38mm" },
          { label: "Reinforcement", value: "Single/double textile braid" },
          { label: "Certification", value: "ISO 9001" },
        ],
        features: [
          "Ozone and weather resistant outer cover",
          "Maintains flexibility in cold conditions",
          "Oil-mist resistant inner tube",
          "Lightweight for ease of use",
          "Available in red, blue, yellow, black",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "rubber-water-hose",
        name: "Rubber Water Hose",
        category: "Industrial Rubber Hose and Fittings",
        categorySlug: "industrial-rubber-hose-and-fittings",
        description:
          "Industrial water delivery hoses for washdown, cooling, drainage, and general water transfer. Available in lay-flat and reinforced tubular construction.",
        specs: [
          { label: "Pressure Rating", value: "Up to 200 PSI" },
          { label: "Temperature Range", value: "-20°C to +85°C" },
          { label: "Standards", value: "EN ISO 1403" },
          { label: "Inner Diameter", value: "13mm – 100mm" },
          { label: "Reinforcement", value: "Textile braid or spiral" },
          { label: "Certification", value: "ISO 9001, WRAS" },
        ],
        features: [
          "Potable water grade compound available",
          "Excellent pressure retention",
          "UV resistant outer cover",
          "Lightweight lay-flat option for large diameter",
          "WRAS certified for drinking water applications",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "rubber-fuel-oil-hose",
        name: "Rubber Fuel Oil Hose",
        category: "Industrial Rubber Hose and Fittings",
        categorySlug: "industrial-rubber-hose-and-fittings",
        description:
          "Fuel and oil transfer hoses with nitrile or NBR inner tubes for compatibility with petroleum products, biodiesels, and lubricating oils.",
        specs: [
          { label: "Pressure Rating", value: "Up to 150 PSI" },
          { label: "Temperature Range", value: "-40°C to +100°C" },
          { label: "Standards", value: "SAE J30, EN 1761" },
          { label: "Inner Diameter", value: "6mm – 51mm" },
          { label: "Reinforcement", value: "Textile braid" },
          { label: "Certification", value: "ISO 9001, SAE" },
        ],
        features: [
          "NBR inner tube — high oil and fuel resistance",
          "Static-dissipating option for flammable fluids",
          "UV-stable outer cover",
          "Compatible with B100 biodiesel",
          "Low permeation for environmental compliance",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "rubber-material-handling-hose",
        name: "Rubber Material Handling Hose",
        category: "Industrial Rubber Hose and Fittings",
        categorySlug: "industrial-rubber-hose-and-fittings",
        description:
          "Abrasion-resistant hoses for the transfer of dry bulk materials, sand, gravel, cement, and other abrasive media in industrial and construction environments.",
        specs: [
          { label: "Pressure Rating", value: "Up to 150 PSI" },
          { label: "Temperature Range", value: "-30°C to +80°C" },
          { label: "Standards", value: "EN 12115" },
          { label: "Inner Diameter", value: "25mm – 150mm" },
          { label: "Reinforcement", value: "Textile braid + helix wire" },
          { label: "Certification", value: "ISO 9001" },
        ],
        features: [
          "Ultra-thick abrasion-resistant inner bore",
          "Internal steel helix for suction capability",
          "Handles sand, gravel, cement, and slurries",
          "Maintains round profile under vacuum",
          "Long service life in high-wear environments",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "rubber-chemical-hose",
        name: "Rubber Chemical Hose",
        category: "Industrial Rubber Hose and Fittings",
        categorySlug: "industrial-rubber-hose-and-fittings",
        description:
          "Acid, alkali, and solvent-resistant hoses for the safe transfer of aggressive chemicals in industrial processing, agriculture, and laboratory environments.",
        specs: [
          { label: "Pressure Rating", value: "Up to 232 PSI" },
          { label: "Temperature Range", value: "-30°C to +100°C" },
          { label: "Standards", value: "EN 12115" },
          { label: "Inner Diameter", value: "13mm – 100mm" },
          { label: "Inner Tube", value: "EPDM, UHMWPE, PTFE lined" },
          { label: "Certification", value: "ISO 9001, EN 12115" },
        ],
        features: [
          "Broad chemical compatibility chart available",
          "Electrically conductive and static dissipative grades",
          "PTFE-lined option for highest chemical resistance",
          "Suitable for acids, alkalis, and polar solvents",
          "Color-coded for easy fluid identification",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "rubber-food-bev-hose",
        name: "Rubber Food & Bev Hose",
        category: "Industrial Rubber Hose and Fittings",
        categorySlug: "industrial-rubber-hose-and-fittings",
        description:
          "FDA and EC1935/2004 compliant food-grade hoses for the transfer of foodstuffs, beverages, dairy products, and potable water in food processing plants.",
        specs: [
          { label: "Pressure Rating", value: "Up to 232 PSI" },
          { label: "Temperature Range", value: "-30°C to +120°C" },
          { label: "Standards", value: "FDA 21 CFR, EC 1935/2004, 3A Sanitary" },
          { label: "Inner Diameter", value: "13mm – 76mm" },
          { label: "Inner Tube", value: "White EPDM or PTFE" },
          { label: "Certification", value: "ISO 9001, FDA, EC 1935" },
        ],
        features: [
          "Non-toxic, odourless, taste-neutral inner tube",
          "Steam-cleanable and CIP compatible",
          "Suitable for dairy, beverage, and grain transfer",
          "Smooth bore for easy cleaning",
          "3A Sanitary Standard compliant grade available",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "rubber-steam-hose",
        name: "Rubber Steam Hose",
        category: "Industrial Rubber Hose and Fittings",
        categorySlug: "industrial-rubber-hose-and-fittings",
        description:
          "EPDM inner tube steam hoses rated for saturated steam service in cleaning, heating, and processing applications across food, chemical, and industrial markets.",
        specs: [
          { label: "Pressure Rating", value: "Up to 250 PSI @ 180°C" },
          { label: "Temperature Range", value: "Up to +210°C" },
          { label: "Standards", value: "EN ISO 6945" },
          { label: "Inner Diameter", value: "13mm – 51mm" },
          { label: "Reinforcement", value: "Multiple textile braids" },
          { label: "Certification", value: "ISO 9001, EN ISO 6945" },
        ],
        features: [
          "EPDM inner tube — superior steam resistance",
          "Heat-resistant outer cover",
          "High-tensile reinforcement for pressure retention",
          "Orange outer cover for easy identification",
          "Compatible with steam cleaning systems",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "ducting-vacuum-hose",
        name: "Ducting & Vacuum Hose",
        category: "Industrial Rubber Hose and Fittings",
        categorySlug: "industrial-rubber-hose-and-fittings",
        description:
          "Flexible ducting and vacuum hoses for air, dust, fume extraction, and material handling. Available in PVC, polyurethane, and rubber in smooth and corrugated profiles.",
        specs: [
          { label: "Pressure/Vacuum", value: "Full vacuum to +5 PSI" },
          { label: "Temperature Range", value: "-40°C to +130°C" },
          { label: "Standards", value: "EN 13463" },
          { label: "Inner Diameter", value: "32mm – 600mm" },
          { label: "Materials", value: "PVC, PU, EPDM rubber, silicone" },
          { label: "Certification", value: "ISO 9001" },
        ],
        features: [
          "Crush and kink resistant helix reinforcement",
          "Anti-static grades for explosive atmospheres",
          "Lightweight and easy to handle",
          "Wide size range for dust and fume extraction",
          "Available in flexible and semi-rigid construction",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "special-rubber-hose",
        name: "Special Rubber Hose",
        category: "Industrial Rubber Hose and Fittings",
        categorySlug: "industrial-rubber-hose-and-fittings",
        description:
          "Specialty rubber hoses engineered for unique or demanding applications including paint spray, sandblasting, concrete pumping, and high-abrasion service.",
        specs: [
          { label: "Types", value: "Paint, sandblast, concrete pump, slurry" },
          { label: "Pressure Rating", value: "Application-specific" },
          { label: "Temperature Range", value: "Application-specific" },
          { label: "Inner Diameter", value: "Custom" },
          { label: "Inner Tube", value: "NR, SBR, UHMWPE, EPDM" },
          { label: "Certification", value: "ISO 9001" },
        ],
        features: [
          "Engineered for niche, high-wear applications",
          "Sandblast hoses with natural rubber bore",
          "Concrete pump hoses — abrasion-resistant wire reinforced",
          "Custom compound formulation available",
          "Tested and validated in target applications",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "rubber-resin-hose",
        name: "Rubber Resin Hose",
        category: "Industrial Rubber Hose and Fittings",
        categorySlug: "industrial-rubber-hose-and-fittings",
        description:
          "Hoses designed for the transfer of resins, adhesives, and epoxy compounds in manufacturing and composites processing environments.",
        specs: [
          { label: "Pressure Rating", value: "Up to 150 PSI" },
          { label: "Temperature Range", value: "-20°C to +80°C" },
          { label: "Inner Tube", value: "PTFE or UHMWPE lined" },
          { label: "Inner Diameter", value: "6mm – 51mm" },
          { label: "Reinforcement", value: "Textile braid" },
          { label: "Certification", value: "ISO 9001" },
        ],
        features: [
          "Non-stick PTFE lining prevents resin buildup",
          "Smooth bore for consistent flow rate",
          "Compatible with polyester, epoxy, and vinyl ester resins",
          "Easy to clean and maintain",
          "Available in heated hose version for viscous resins",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "fiber-reinforcement-rubber-hoses",
        name: "Fiber Reinforcement Rubber Hoses",
        category: "Industrial Rubber Hose and Fittings",
        categorySlug: "industrial-rubber-hose-and-fittings",
        description:
          "Rubber hoses reinforced with aramid, Kevlar, or high-tenacity synthetic fiber for lightweight, high-strength performance in demanding applications.",
        specs: [
          { label: "Pressure Rating", value: "Up to 2,000 PSI" },
          { label: "Temperature Range", value: "-40°C to +120°C" },
          { label: "Reinforcement", value: "Aramid, Kevlar, polyester fiber" },
          { label: "Inner Diameter", value: "6mm – 38mm" },
          { label: "Wall Type", value: "Thin-wall lightweight" },
          { label: "Certification", value: "ISO 9001" },
        ],
        features: [
          "High strength-to-weight ratio",
          "Non-conductive reinforcement",
          "Excellent fatigue and flex resistance",
          "Ideal for portable and lightweight equipment",
          "Good chemical and abrasion resistance",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "metal-hose",
        name: "Metal Hose",
        category: "Industrial Rubber Hose and Fittings",
        categorySlug: "industrial-rubber-hose-and-fittings",
        description:
          "Corrugated stainless steel and interlocked metal hoses for extreme temperature, high-pressure, and corrosive fluid applications where rubber hoses are not suitable.",
        specs: [
          { label: "Pressure Rating", value: "Up to 3,000 PSI" },
          { label: "Temperature Range", value: "-270°C to +650°C" },
          { label: "Materials", value: "SS304, SS316, SS316L" },
          { label: "Inner Diameter", value: "6mm – 300mm" },
          { label: "Types", value: "Corrugated, interlocked, strip wound" },
          { label: "Certification", value: "ISO 9001, PED 2014/68/EU" },
        ],
        features: [
          "Handles cryogenic to extreme high temperatures",
          "Fully metallic — zero permeability",
          "Suitable for steam, gases, and corrosive fluids",
          "Braid and spiral-wound armour options",
          "PED compliant for pressure equipment directive",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "industrial-hose-fitting",
        name: "Industrial Hose Fitting",
        category: "Industrial Rubber Hose and Fittings",
        categorySlug: "industrial-rubber-hose-and-fittings",
        description:
          "Shank, ferrule, and banded couplings for industrial rubber hoses in steam, water, air, chemical, and material-handling service.",
        specs: [
          { label: "Materials", value: "Brass, carbon steel, stainless steel, nylon" },
          { label: "Connection Types", value: "BSP, NPT, BSPP, camlock, flange" },
          { label: "Sizes", value: "1/4\" – 4\"" },
          { label: "Max Pressure", value: "Per fitting rating" },
          { label: "Max Temperature", value: "Up to +230°C" },
          { label: "Certification", value: "ISO 9001" },
        ],
        features: [
          "Reusable and permanent crimp options",
          "Broad range of materials for chemical compatibility",
          "Large stock for immediate delivery",
          "Full assembly and crimping service available",
          "Compatible with all major hose brands",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "industrial-couplings-and-camlocks",
        name: "Industrial Couplings and Camlocks",
        category: "Industrial Rubber Hose and Fittings",
        categorySlug: "industrial-rubber-hose-and-fittings",
        description:
          "Cam and groove (camlock) couplings for fast, tool-free connection of hoses and pipes in industrial, chemical, and agriculture applications.",
        specs: [
          { label: "Materials", value: "Aluminum, brass, stainless steel, polypropylene" },
          { label: "Types", value: "Type A, B, C, D, E, F, DC" },
          { label: "Sizes", value: "1/2\" – 6\"" },
          { label: "Standards", value: "MIL-C-27487, EN14420-7" },
          { label: "Pressure Rating", value: "Up to 250 PSI" },
          { label: "Certification", value: "ISO 9001" },
        ],
        features: [
          "Tool-free connection and disconnection",
          "All seven standard camlock types stocked",
          "Available in all common materials",
          "Interchangeable with major brands",
          "Dust caps and plugs available",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "camlock",
        name: "Camlock",
        category: "Industrial Rubber Hose and Fittings",
        categorySlug: "industrial-rubber-hose-and-fittings",
        description:
          "Individual camlock couplings and complete camlock sets for hose-to-hose and hose-to-pipe connections across a wide range of industries.",
        specs: [
          { label: "Materials", value: "Aluminum, stainless steel, brass, polypropylene" },
          { label: "Sizes", value: "1/2\" – 6\"" },
          { label: "Max Pressure", value: "250 PSI" },
          { label: "Standards", value: "MIL-C-27487" },
          { label: "Gasket Materials", value: "NBR, EPDM, PTFE, silicone" },
          { label: "Certification", value: "ISO 9001" },
        ],
        features: [
          "Quick-connect lever cam arms",
          "Positive locking for leak-free service",
          "Wide gasket material selection",
          "Suitable for liquids, gases, and bulk solids",
          "Full sets (coupler + adapter) available",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
  },
  {
    slug: "hose-application",
    name: "Hose Application",
    description:
      "Industry-specific hose solutions engineered for the unique demands of mining, agriculture, construction, oil & gas, marine, and more.",
    products: [
      {
        slug: "mining-hose",
        name: "Mining Hose",
        category: "Hose Application",
        categorySlug: "hose-application",
        description:
          "Heavy-duty hoses for underground and surface mining operations including water blasting, slurry transfer, pneumatic drilling, and mine ventilation.",
        specs: [
          { label: "Pressure Rating", value: "Up to 5,000 PSI" },
          { label: "Temperature Range", value: "-40°C to +100°C" },
          { label: "Standards", value: "AS/NZS 1180, SAE 100R" },
          { label: "Inner Diameter", value: "13mm – 150mm" },
          { label: "Construction", value: "Wire spiral, wire braid, composite" },
          { label: "Certification", value: "ISO 9001, MSHA" },
        ],
        features: [
          "MSHA certified for underground mining",
          "Flame-resistant outer cover",
          "Anti-static compound available",
          "Resists rock abrasion and UV exposure",
          "Heavy wall for maximum durability",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "agriculture-hose",
        name: "Agriculture Hose",
        category: "Hose Application",
        categorySlug: "hose-application",
        description:
          "Agricultural hoses for irrigation, pesticide/herbicide spraying, hydraulic lines on farm equipment, and slurry tanker applications.",
        specs: [
          { label: "Pressure Rating", value: "Up to 4,000 PSI (hydraulic)" },
          { label: "Temperature Range", value: "-40°C to +100°C" },
          { label: "Standards", value: "SAE 100R, EN853" },
          { label: "Inner Diameter", value: "6mm – 100mm" },
          { label: "Fluid Compatibility", value: "Water, agri-chemicals, slurry, hydraulic oil" },
          { label: "Certification", value: "ISO 9001" },
        ],
        features: [
          "UV and weathering resistant outer cover",
          "Compatible with crop protection chemicals",
          "High-visibility color options for field identification",
          "Wide temperature range for seasonal use",
          "Hydraulic grades compliant with tractor OEM specs",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "construction-hose",
        name: "Construction Hose",
        category: "Hose Application",
        categorySlug: "hose-application",
        description:
          "Hoses for construction machinery and site operations including concrete pumping, hydraulic breakers, compactors, and material transfer.",
        specs: [
          { label: "Pressure Rating", value: "Up to 10,000 PSI (hydraulic)" },
          { label: "Temperature Range", value: "-40°C to +120°C" },
          { label: "Standards", value: "SAE 100R, EN856" },
          { label: "Inner Diameter", value: "6mm – 150mm" },
          { label: "Construction", value: "Wire spiral, wire braid" },
          { label: "Certification", value: "ISO 9001" },
        ],
        features: [
          "Heavy-duty abrasion-resistant covers",
          "Designed for high impulse cycles",
          "Handles concrete, slurry, and hydraulic fluids",
          "Suitable for excavators, cranes, and pavers",
          "Custom assemblies available with short lead times",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "oil-gas-hose",
        name: "Oil & Gas Hose",
        category: "Hose Application",
        categorySlug: "hose-application",
        description:
          "API and ATEX certified hoses for oil and gas exploration, production, refining, and petrochemical plant applications.",
        specs: [
          { label: "Pressure Rating", value: "Application-specific" },
          { label: "Temperature Range", value: "-60°C to +260°C" },
          { label: "Standards", value: "API 7K, API 16C, ATEX" },
          { label: "Inner Diameter", value: "25mm – 200mm" },
          { label: "Construction", value: "PTFE, UHMWPE, steel wire reinforced" },
          { label: "Certification", value: "ISO 9001, API 7K, API 16C, ATEX" },
        ],
        features: [
          "API 7K and 16C certified for drilling service",
          "ATEX-rated for hazardous areas",
          "Static dissipative compounds",
          "Resistant to H2S and sour gas service",
          "Full traceability and batch records",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "food-hose",
        name: "Food Hose",
        category: "Hose Application",
        categorySlug: "hose-application",
        description:
          "Food-safe hoses for transferring liquid and dry foodstuffs in breweries, dairies, bakeries, confectionery, and food processing plants.",
        specs: [
          { label: "Pressure Rating", value: "Up to 232 PSI" },
          { label: "Temperature Range", value: "-30°C to +135°C" },
          { label: "Standards", value: "FDA 21 CFR, EC 1935/2004, 3A Dairy" },
          { label: "Inner Diameter", value: "13mm – 100mm" },
          { label: "Inner Tube", value: "White EPDM, PTFE, or silicone" },
          { label: "Certification", value: "ISO 9001, FDA, EC 1935" },
        ],
        features: [
          "Non-toxic and tasteless inner tube",
          "CIP and SIP steam-cleanable",
          "Suitable for beer, wine, dairy, and grain",
          "Smooth bore for hygienic flow",
          "3A Sanitary Standard grades available",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "automotive-hose",
        name: "Automotive Hose",
        category: "Hose Application",
        categorySlug: "hose-application",
        description:
          "OEM and aftermarket automotive hoses including power steering, brake, cooling, turbo-charge, and fuel system hoses for passenger and commercial vehicles.",
        specs: [
          { label: "Types", value: "Power steering, turbo, coolant, brake" },
          { label: "Temperature Range", value: "-40°C to +200°C" },
          { label: "Standards", value: "SAE J188, SAE J517, SAE J1401" },
          { label: "Pressure Rating", value: "Up to 3,000 PSI (brake)" },
          { label: "Materials", value: "EPDM, silicone, NBR, PTFE" },
          { label: "Certification", value: "ISO 9001, TS 16949, SAE" },
        ],
        features: [
          "TS 16949 quality system certified",
          "Engineered to OEM vehicle specifications",
          "Heat-resistant silicone options for turbo applications",
          "Compatible with modern coolant and brake fluids",
          "Full vehicle line coverage available",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "excavator-hydraulic-hoses",
        name: "Excavator Hydraulic Hoses",
        category: "Hose Application",
        categorySlug: "hose-application",
        description:
          "Heavy-duty spiral wire hydraulic hoses purpose-built for excavator swing motors, boom cylinders, bucket circuits, and attachment lines.",
        specs: [
          { label: "Pressure Rating", value: "Up to 7,500 PSI" },
          { label: "Temperature Range", value: "-40°C to +120°C" },
          { label: "Standards", value: "EN856 4SP/4SH, SAE 100R12" },
          { label: "Inner Diameter", value: "6mm – 38mm" },
          { label: "Reinforcement", value: "4 or 6 wire spiral" },
          { label: "Certification", value: "ISO 9001, SAE, EN" },
        ],
        features: [
          "Engineered for high-impulse excavator circuits",
          "Direct OEM cross-reference available",
          "Abrasion-resistant outer cover",
          "High-fatigue cycle rating",
          "Fits Caterpillar, Komatsu, Hitachi, Doosan, Volvo",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "tractor-hydraulic-hoses",
        name: "Tractor Hydraulic Hoses",
        category: "Hose Application",
        categorySlug: "hose-application",
        description:
          "Wire braid hydraulic hoses for tractor three-point linkage, power steering, remote valve circuits, and front loader hydraulics.",
        specs: [
          { label: "Pressure Rating", value: "Up to 5,000 PSI" },
          { label: "Temperature Range", value: "-40°C to +100°C" },
          { label: "Standards", value: "SAE 100R1/R2, EN853 1SN/2SN" },
          { label: "Inner Diameter", value: "6mm – 25mm" },
          { label: "Reinforcement", value: "1 or 2 wire braid" },
          { label: "Certification", value: "ISO 9001" },
        ],
        features: [
          "Direct replacement for major tractor brands",
          "UV and abrasion resistant cover",
          "Color-coded by pressure rating",
          "Pre-assembled kits available",
          "Suitable for all common tractor hydraulic fluids",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "forklift-hydraulic-hose",
        name: "Forklift Hydraulic Hose",
        category: "Hose Application",
        categorySlug: "hose-application",
        description:
          "Hydraulic hoses for forklift mast lift, tilt, and steering circuits, engineered for the repeated cycling and tight routing of warehouse fork trucks.",
        specs: [
          { label: "Pressure Rating", value: "Up to 3,500 PSI" },
          { label: "Temperature Range", value: "-30°C to +100°C" },
          { label: "Standards", value: "SAE 100R2, EN853 2SN" },
          { label: "Inner Diameter", value: "6mm – 19mm" },
          { label: "Reinforcement", value: "Double wire braid" },
          { label: "Certification", value: "ISO 9001" },
        ],
        features: [
          "Small minimum bend radius for tight routing",
          "High flex-cycle rating for lift applications",
          "Fire-resistant outer cover option",
          "Cross-reference to Toyota, Linde, Hyster, Crown",
          "Pre-assembled kits for major models",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "marine-hose",
        name: "Marine Hose",
        category: "Hose Application",
        categorySlug: "hose-application",
        description:
          "Saltwater-resistant hoses for marine propulsion, bilge, exhaust cooling, fuel, and offshore fluid transfer applications.",
        specs: [
          { label: "Types", value: "Exhaust, fuel, bilge, steering, offshore" },
          { label: "Pressure Rating", value: "Application-specific" },
          { label: "Temperature Range", value: "-40°C to +150°C" },
          { label: "Standards", value: "SAE J2006, ABYC H-33, ISO 7840" },
          { label: "Materials", value: "EPDM, silicone, NBR, PTFE" },
          { label: "Certification", value: "ISO 9001, USCG A1 fire-rated" },
        ],
        features: [
          "USCG A1 fire-rated fuel hose grade available",
          "Saltwater and UV resistant construction",
          "ISO 7840 compliant fire-resistant fuel hose",
          "ABYC H-33 compliance for potable water",
          "Offshore grades with stainless steel reinforcement",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "pneumatic-tubing",
        name: "Pneumatic Tubing",
        category: "Hose Application",
        categorySlug: "hose-application",
        description:
          "Polyurethane, nylon, and polyethylene pneumatic tubing for compressed air, instrument air, and vacuum circuits in automation and pneumatics.",
        specs: [
          { label: "Pressure Rating", value: "Up to 250 PSI" },
          { label: "Temperature Range", value: "-40°C to +80°C" },
          { label: "Materials", value: "PU, PA, PE, PP" },
          { label: "OD Range", value: "4mm – 16mm" },
          { label: "Colors", value: "Blue, red, black, yellow, clear (25+ colors)" },
          { label: "Certification", value: "ISO 9001, RoHS" },
        ],
        features: [
          "Meets ISO 6945 and DIN 73378 standards",
          "Excellent kink resistance",
          "Easy push-in fitting compatibility",
          "Consistent wall thickness for reliable connections",
          "25+ standard colors for circuit identification",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "pneumatic-fitting",
        name: "Pneumatic Fitting",
        category: "Hose Application",
        categorySlug: "hose-application",
        description:
          "Push-in, compression, and threaded pneumatic fittings in brass, stainless, and polymer for use in compressed air, vacuum, and instrumentation systems.",
        specs: [
          { label: "Types", value: "Push-in, compression, NPT, BSP" },
          { label: "Materials", value: "Nickel-plated brass, SS316, PP, PA" },
          { label: "Tube OD Range", value: "4mm – 16mm" },
          { label: "Pressure Rating", value: "Up to 250 PSI" },
          { label: "Standards", value: "ISO 6149, BSPP, NPT" },
          { label: "Certification", value: "ISO 9001, RoHS" },
        ],
        features: [
          "Tool-free push-in connection",
          "Stainless steel option for food and pharma",
          "Wide range of elbow, tee, and straight configurations",
          "Compatible with all major pneumatic systems",
          "RoHS compliant polymer grades",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
  },
]

// Flat list of all products for easy lookup
export const allProducts: Product[] = categories.flatMap((c) => c.products)

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export function getRelatedProducts(product: Product, count = 4): Product[] {
  return allProducts
    .filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug)
    .slice(0, count)
}
