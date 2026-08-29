export interface IndustrialRubberHoseFitting {
  slug: string
  name: string
  shortName: string
  tagline: string
  image: string
  standard?: string
  description: string
  features: string[]
  specs: Array<{ label: string; value: string }>
  applications: string[]
  quickStats: Array<{ label: string; value: string }>
}

export const industrialRubberHoseFittings: IndustrialRubberHoseFitting[] = [
  {
    slug: "bell-housing-ci-aluminum-casting",
    name: "Bell Housing (C.I. & Aluminum Casting)",
    shortName: "Bell Housing (C.I. & Aluminum Casting)",
    tagline: "Durable Cast Iron and Aluminum Housing Component",
    image: "/images/industrial-rubber-hose-fittings/bell-housing.png",
    standard: "ISO 4401",
    description:
      "The Hydronex Bell Housing (C.I. & Aluminum Casting) is engineered for precision hydraulic and mechanical applications. Available in both Cast Iron and Aluminum variants, these housings provide exceptional durability and structural integrity. Designed to meet industrial standards, they offer excellent heat dissipation and corrosion resistance, making them ideal for demanding hydraulic systems.",
    features: ["Cast Iron and Aluminum variants", "High strength construction", "Excellent heat dissipation", "Corrosion resistant", "Precision engineered", "ISO 4401 compliant"],
    specs: [
      { label: "Material", value: "C.I. or Aluminum" },
      { label: "Application", value: "Hydraulic Systems" },
      { label: "Standard", value: "ISO 4401" },
      { label: "Finish", value: "Machined" },
    ],
    applications: ["Hydraulic pumps", "Motor housings", "Valve manifolds", "Industrial machinery"],
    quickStats: [
      { label: "Material Options", value: "C.I. & Aluminum" },
      { label: "Standard", value: "ISO 4401" },
      { label: "Application", value: "Hydraulic Systems" },
    ],
  },
  {
    slug: "copper-washer-bonded-dowty-seal",
    name: "Copper Washer & Bonded (Dowty) Seal",
    shortName: "Copper Washer & Bonded (Dowty) Seal",
    tagline: "High-Performance Sealing Component",
    image: "/images/industrial-rubber-hose-fittings/copper-washer-dowty-seal.png",
    standard: "SAE J518",
    description:
      "The Hydronex Copper Washer & Bonded (Dowty) Seal provides reliable sealing for hydraulic connections. These composite seals combine copper washers with bonded elastomer material to create effective pressure barriers. Ideal for high-pressure applications, they offer excellent reusability and cost-effectiveness while maintaining superior sealing performance across various fluid media.",
    features: ["Copper washer construction", "Bonded elastomer seal", "High-pressure rated", "Reusable design", "Excellent fluid compatibility", "Cost-effective solution"],
    specs: [
      { label: "Type", value: "Copper Washer & Elastomer" },
      { label: "Standard", value: "SAE J518" },
      { label: "Application", value: "High-Pressure Hydraulics" },
      { label: "Reusable", value: "Yes" },
    ],
    applications: ["Hydraulic hose connections", "JIC fittings", "High-pressure systems", "Fluid transfer"],
    quickStats: [
      { label: "Type", value: "Seal Assembly" },
      { label: "Standard", value: "SAE J518" },
      { label: "Reusable", value: "Yes" },
    ],
  },
  {
    slug: "direction-control-valve-lever-operated",
    name: "Direction Control Valve (Lever Operated)",
    shortName: "Direction Control Valve (Lever Operated)",
    tagline: "Manual Direction Control Valve System",
    image: "/images/industrial-rubber-hose-fittings/direction-control-valve.png",
    standard: "ISO 4401",
    description:
      "The Hydronex Direction Control Valve (Lever Operated) enables manual control of hydraulic fluid flow direction in actuators and motors. Featuring robust lever actuation, this valve provides intuitive control for hydraulic circuits. Designed for reliability in industrial applications, it offers excellent flow capacity and switching performance.",
    features: ["Lever-operated actuation", "Manual control", "Reliable switching", "High flow capacity", "ISO 4401 compliant", "Industrial-grade construction"],
    specs: [
      { label: "Type", value: "Directional Control" },
      { label: "Actuation", value: "Lever Operated" },
      { label: "Standard", value: "ISO 4401" },
      { label: "Flow Control", value: "Manual" },
    ],
    applications: ["Hydraulic actuators", "Motor control", "Hydraulic circuits", "Industrial machinery"],
    quickStats: [
      { label: "Control Type", value: "Lever Operated" },
      { label: "Standard", value: "ISO 4401" },
      { label: "Application", value: "Directional Flow" },
    ],
  },
  {
    slug: "flow-control-valve-drv",
    name: "Flow Control Valve (DRV)",
    shortName: "Flow Control Valve (DRV)",
    tagline: "Differential Relief Valve Flow Control",
    image: "/images/industrial-rubber-hose-fittings/flow-control-valve-drv.png",
    standard: "ISO 4401",
    description:
      "The Hydronex Flow Control Valve (DRV) regulates hydraulic fluid flow rate in precision applications. This differential relief valve design maintains consistent flow despite pressure variations, ensuring reliable performance in motion control systems. Ideal for applications requiring accurate speed control and energy efficiency.",
    features: ["Differential relief design", "Precise flow regulation", "Pressure-compensated", "Energy efficient", "Adjustable settings", "Compact design"],
    specs: [
      { label: "Type", value: "Flow Control - DRV" },
      { label: "Control Method", value: "Differential Relief" },
      { label: "Standard", value: "ISO 4401" },
      { label: "Compensation", value: "Pressure-Compensated" },
    ],
    applications: ["Speed control", "Motion control systems", "Precision hydraulics", "Energy conservation"],
    quickStats: [
      { label: "Type", value: "Flow Control (DRV)" },
      { label: "Standard", value: "ISO 4401" },
      { label: "Compensation", value: "Pressure-Compensated" },
    ],
  },
  {
    slug: "filler-breather-assembly",
    name: "Filler Brether Assembly",
    shortName: "Filler Brether Assembly",
    tagline: "Filtration and Breather System Component",
    image: "/images/industrial-rubber-hose-fittings/filler-breather.png",
    standard: "ISO 4572",
    description:
      "The Hydronex Filler Brether Assembly combines filling and breathing functions in hydraulic tank systems. This integrated component prevents contamination while allowing pressure equalization. Featuring efficient filtration, it protects hydraulic fluid from external contaminants and moisture ingress.",
    features: ["Integrated filler-breather design", "Contamination protection", "Moisture prevention", "Efficient filtration", "Pressure equalization", "Easy maintenance"],
    specs: [
      { label: "Type", value: "Filler Breather Assembly" },
      { label: "Standard", value: "ISO 4572" },
      { label: "Function", value: "Filling & Breathing" },
      { label: "Filtration", value: "Integrated" },
    ],
    applications: ["Hydraulic tanks", "Reservoir breathers", "System filtration", "Contamination control"],
    quickStats: [
      { label: "Type", value: "Filler Breather" },
      { label: "Standard", value: "ISO 4572" },
      { label: "Protection", value: "Contamination & Moisture" },
    ],
  },
  {
    slug: "glycerin-filled-pressure-gauges",
    name: "Glycerin Filled Pressure Gauges",
    shortName: "Glycerin Filled Pressure Gauges",
    tagline: "Accurate Pressure Measurement Instruments",
    image: "/images/industrial-rubber-hose-fittings/glycerin-pressure-gauge.png",
    standard: "EN 837-1",
    description:
      "The Hydronex Glycerin Filled Pressure Gauges deliver precise pressure readings with damping fluid for stable measurements. The glycerin filling minimizes needle vibration and extends gauge life. Perfect for monitoring hydraulic system pressures in demanding industrial environments.",
    features: ["Glycerin damping fluid", "Vibration resistance", "Accurate readings", "Extended lifespan", "Stainless steel construction", "Multiple pressure ranges"],
    specs: [
      { label: "Type", value: "Glycerin-Filled Gauge" },
      { label: "Standard", value: "EN 837-1" },
      { label: "Damping", value: "Glycerin Filled" },
      { label: "Materials", value: "Stainless Steel" },
    ],
    applications: ["Pressure monitoring", "Hydraulic systems", "Industrial equipment", "System diagnostics"],
    quickStats: [
      { label: "Type", value: "Pressure Gauge" },
      { label: "Standard", value: "EN 837-1" },
      { label: "Damping", value: "Glycerin Filled" },
    ],
  },
  {
    slug: "high-pressure-ball-valves",
    name: "High Pressure Ball Valves",
    shortName: "High Pressure Ball Valves",
    tagline: "Industrial-Grade High-Pressure Shut-Off Valve",
    image: "/images/industrial-rubber-hose-fittings/high-pressure-ball-valve.png",
    standard: "ISO 1784",
    description:
      "The Hydronex High Pressure Ball Valves provide reliable shut-off capability for demanding high-pressure hydraulic systems. Featuring forged steel construction and precision ball design, these valves deliver long service life and minimal leakage. Ideal for critical applications requiring dependable on-off control.",
    features: ["Forged steel construction", "High-pressure rated", "Minimal leakage", "Reliable shut-off", "Durable ball design", "Wide temperature range"],
    specs: [
      { label: "Type", value: "Ball Valve" },
      { label: "Standard", value: "ISO 1784" },
      { label: "Pressure Rating", value: "High-Pressure" },
      { label: "Body Material", value: "Forged Steel" },
    ],
    applications: ["Shut-off service", "High-pressure systems", "System isolation", "Emergency relief"],
    quickStats: [
      { label: "Type", value: "Ball Valve" },
      { label: "Standard", value: "ISO 1784" },
      { label: "Rating", value: "High-Pressure" },
    ],
  },
  {
    slug: "hydraulic-gear-pump",
    name: "Hydraulic Gear Pump",
    shortName: "Hydraulic Gear Pump",
    tagline: "Positive Displacement Gear Pump System",
    image: "/images/industrial-rubber-hose-fittings/hydraulic-gear-pump.png",
    standard: "ISO 4401",
    description:
      "The Hydronex Hydraulic Gear Pump delivers reliable fluid displacement for industrial hydraulic systems. Using external gear design, it provides consistent performance across varying loads. Built for durability and efficiency, this pump is ideal for general-purpose hydraulic power generation.",
    features: ["External gear design", "Positive displacement", "High efficiency", "Reliable performance", "Wide pressure range", "Compact design"],
    specs: [
      { label: "Type", value: "External Gear Pump" },
      { label: "Standard", value: "ISO 4401" },
      { label: "Displacement Method", value: "Positive Displacement" },
      { label: "Design", value: "External Gear" },
    ],
    applications: ["Power generation", "General-purpose hydraulics", "Industrial machinery", "Fluid circulation"],
    quickStats: [
      { label: "Type", value: "Gear Pump" },
      { label: "Standard", value: "ISO 4401" },
      { label: "Design", value: "External Gear" },
    ],
  },
  {
    slug: "hydraulic-suction-strainer-sc3",
    name: "Hydraulic Suction Strainer (SC3)",
    shortName: "Hydraulic Suction Strainer (SC3)",
    tagline: "Tank Inlet Suction Filtration Component",
    image: "/images/industrial-rubber-hose-fittings/hydraulic-suction-strainer.png",
    standard: "ISO 4413",
    description:
      "The Hydronex Hydraulic Suction Strainer (SC3) protects pump inlets from contamination. This suction strainer features SC3 element design with large filtering area and low pressure drop. Essential for maintaining system cleanliness and extending component life.",
    features: ["SC3 element design", "Large filtering area", "Low pressure drop", "Contamination protection", "Easy maintenance", "High dirt capacity"],
    specs: [
      { label: "Type", value: "Suction Strainer" },
      { label: "Element Type", value: "SC3" },
      { label: "Standard", value: "ISO 4413" },
      { label: "Application", value: "Tank Inlet" },
    ],
    applications: ["Pump protection", "Contamination control", "Tank inlet filtration", "System maintenance"],
    quickStats: [
      { label: "Type", value: "Suction Strainer" },
      { label: "Element", value: "SC3" },
      { label: "Standard", value: "ISO 4413" },
    ],
  },
  {
    slug: "manifold-block",
    name: "Manifold Block",
    shortName: "Manifold Block",
    tagline: "Integrated Hydraulic Valve Manifold System",
    image: "/images/industrial-rubber-hose-fittings/manifold-block.png",
    standard: "ISO 4401",
    description:
      "The Hydronex Manifold Block consolidates multiple hydraulic functions into a single integrated component. Precision-ported for optimal flow and pressure distribution, this manifold reduces complexity while improving system reliability. Ideal for custom hydraulic circuit configurations.",
    features: ["Integrated valve cavity", "Precision porting", "Custom configurations", "Space-saving design", "Reduced plumbing", "High flow capacity"],
    specs: [
      { label: "Type", value: "Manifold Block" },
      { label: "Standard", value: "ISO 4401" },
      { label: "Design", value: "Modular" },
      { label: "Material", value: "Ductile Iron" },
    ],
    applications: ["Valve integration", "Custom circuits", "Space constraints", "System consolidation"],
    quickStats: [
      { label: "Type", value: "Manifold Block" },
      { label: "Standard", value: "ISO 4401" },
      { label: "Design", value: "Modular" },
    ],
  },
  {
    slug: "non-return-valve-nrv",
    name: "Non Return Valve (NRV)",
    shortName: "Non Return Valve (NRV)",
    tagline: "Unidirectional Flow Check Valve",
    image: "/images/industrial-rubber-hose-fittings/non-return-valve.png",
    standard: "ISO 1219",
    description:
      "The Hydronex Non Return Valve (NRV) ensures unidirectional fluid flow in hydraulic systems. Using spring-loaded poppet design, it prevents backflow while maintaining low pressure drop. Essential for protecting pump lines and enabling circuit isolation.",
    features: ["Spring-loaded poppet design", "Low pressure drop", "Backflow prevention", "Pilot override option", "High flow capacity", "Reliable sealing"],
    specs: [
      { label: "Type", value: "Check Valve" },
      { label: "Standard", value: "ISO 1219" },
      { label: "Function", value: "Unidirectional Flow" },
      { label: "Design", value: "Poppet Type" },
    ],
    applications: ["Pump protection", "Circuit isolation", "Backflow prevention", "Load holding"],
    quickStats: [
      { label: "Type", value: "Check Valve (NRV)" },
      { label: "Standard", value: "ISO 1219" },
      { label: "Function", value: "Backflow Prevention" },
    ],
  },
  {
    slug: "nylon-gear-coupling",
    name: "Nylon Gear Coupling",
    shortName: "Nylon Gear Coupling",
    tagline: "Flexible Mechanical Power Transmission Component",
    image: "/images/industrial-rubber-hose-fittings/nylon-gear-coupling.png",
    standard: "ISO 14691",
    description:
      "The Hydronex Nylon Gear Coupling transmits mechanical power while accommodating angular and radial misalignment. Featuring nylon jaw elements, it provides damping and wear resistance. Ideal for connecting pumps to motors with flexibility and low maintenance.",
    features: ["Nylon jaw elements", "Misalignment compensation", "Vibration damping", "Wear resistant", "Low maintenance", "High torque capacity"],
    specs: [
      { label: "Type", value: "Gear Coupling" },
      { label: "Standard", value: "ISO 14691" },
      { label: "Jaw Material", value: "Nylon" },
      { label: "Function", value: "Power Transmission" },
    ],
    applications: ["Pump-motor connection", "Power transmission", "Misalignment compensation", "Industrial machinery"],
    quickStats: [
      { label: "Type", value: "Gear Coupling" },
      { label: "Standard", value: "ISO 14691" },
      { label: "Jaw Material", value: "Nylon" },
    ],
  },
  {
    slug: "oil-level-indicator",
    name: "Oil Level Indicator",
    shortName: "Oil Level Indicator",
    tagline: "Reservoir Fluid Level Monitoring Device",
    image: "/images/industrial-rubber-hose-fittings/oil-level-indicator.png",
    standard: "ISO 4414",
    description:
      "The Hydronex Oil Level Indicator provides visual confirmation of reservoir fluid levels. Featuring clear sight glass and durable construction, it enables quick system checks without opening the tank. Essential for routine maintenance and preventing overfill or underfill conditions.",
    features: ["Clear sight glass", "Visual indication", "Easy reading", "Durable construction", "Threaded connection", "Wide range variants"],
    specs: [
      { label: "Type", value: "Level Indicator" },
      { label: "Standard", value: "ISO 4414" },
      { label: "Display", value: "Sight Glass" },
      { label: "Connection", value: "Threaded" },
    ],
    applications: ["Fluid level monitoring", "Reservoir inspection", "Maintenance checks", "System diagnostics"],
    quickStats: [
      { label: "Type", value: "Level Indicator" },
      { label: "Standard", value: "ISO 4414" },
      { label: "Display Type", value: "Sight Glass" },
    ],
  },
  {
    slug: "oil-level-indicator-knob-type",
    name: "Oil Level Indicator (Knob Type)",
    shortName: "Oil Level Indicator (Knob Type)",
    tagline: "Knob-Actuated Fluid Level Display",
    image: "/images/industrial-rubber-hose-fittings/oil-level-indicator-knob.png",
    standard: "ISO 4414",
    description:
      "The Hydronex Oil Level Indicator (Knob Type) features knob-actuated display for convenient fluid level reading. The rotating knob action provides tactile feedback during level checking. Ideal for applications requiring frequent monitoring without tank access.",
    features: ["Knob actuation", "Tactile feedback", "Convenient operation", "Durable construction", "Clear indication", "Wide temperature range"],
    specs: [
      { label: "Type", value: "Level Indicator - Knob Type" },
      { label: "Standard", value: "ISO 4414" },
      { label: "Actuation", value: "Knob Operated" },
      { label: "Display", value: "Indicator" },
    ],
    applications: ["Fluid level monitoring", "Frequent checks", "Easy operation", "Maintenance monitoring"],
    quickStats: [
      { label: "Type", value: "Level Indicator (Knob)" },
      { label: "Standard", value: "ISO 4414" },
      { label: "Actuation", value: "Knob Operated" },
    ],
  },
  {
    slug: "pilot-operated-check-valve",
    name: "Pilot Operated Check Valve",
    shortName: "Pilot Operated Check Valve",
    tagline: "Remotely Controlled Backflow Prevention Valve",
    image: "/images/industrial-rubber-hose-fittings/pilot-operated-check-valve.png",
    standard: "ISO 1219",
    description:
      "The Hydronex Pilot Operated Check Valve combines check function with pilot-operated control capability. This advanced valve enables remote load holding and circuit flexibility. Perfect for systems requiring both backflow prevention and pilot-controlled release.",
    features: ["Pilot-operated design", "Remote control capability", "Load holding", "Low pilot pressure", "High flow capacity", "Reliable sealing"],
    specs: [
      { label: "Type", value: "Check Valve - Pilot Operated" },
      { label: "Standard", value: "ISO 1219" },
      { label: "Control", value: "Pilot Operated" },
      { label: "Function", value: "Check & Control" },
    ],
    applications: ["Load holding", "Remote release", "Advanced circuits", "Actuator control"],
    quickStats: [
      { label: "Type", value: "Pilot-Operated Check" },
      { label: "Standard", value: "ISO 1219" },
      { label: "Control", value: "Remote Pilot" },
    ],
  },
  {
    slug: "pressure-relief-valve",
    name: "Pressure Relief Valve",
    shortName: "Pressure Relief Valve",
    tagline: "System Overpressure Protection Device",
    image: "/images/industrial-rubber-hose-fittings/pressure-relief-valve.png",
    standard: "ISO 4401",
    description:
      "The Hydronex Pressure Relief Valve protects hydraulic systems from dangerous overpressure conditions. Featuring spring-loaded poppet design and adjustable pressure settings, it maintains safe operating limits. Essential safety component for all hydraulic systems.",
    features: ["Spring-loaded design", "Adjustable settings", "Direct-acting or pilot-operated", "Fast response", "Wide pressure range", "Compact design"],
    specs: [
      { label: "Type", value: "Relief Valve" },
      { label: "Standard", value: "ISO 4401" },
      { label: "Control Method", value: "Spring-Loaded" },
      { label: "Purpose", value: "Overpressure Protection" },
    ],
    applications: ["System protection", "Pressure limiting", "Safety function", "Pump unloading"],
    quickStats: [
      { label: "Type", value: "Relief Valve" },
      { label: "Standard", value: "ISO 4401" },
      { label: "Purpose", value: "Overpressure Protection" },
    ],
  },
  {
    slug: "pressure-switch",
    name: "Pressure Switch",
    shortName: "Pressure Switch",
    tagline: "Electrical Pressure Monitoring and Control",
    image: "/images/industrial-rubber-hose-fittings/pressure-switch.png",
    standard: "ISO 4401",
    description:
      "The Hydronex Pressure Switch provides electrical signal output based on system pressure levels. Featuring adjustable setpoints and reliable switching action, it enables automated system control and monitoring. Perfect for alarm systems and pump motor control.",
    features: ["Adjustable setpoints", "Reliable switching", "Electrical output", "Multiple switching options", "Compact design", "Wide pressure range"],
    specs: [
      { label: "Type", value: "Pressure Switch" },
      { label: "Standard", value: "ISO 4401" },
      { label: "Function", value: "Electrical Control" },
      { label: "Output", value: "SPDT Contact" },
    ],
    applications: ["Pump motor control", "Alarm systems", "Automated control", "System monitoring"],
    quickStats: [
      { label: "Type", value: "Pressure Switch" },
      { label: "Standard", value: "ISO 4401" },
      { label: "Output", value: "Electrical" },
    ],
  },
  {
    slug: "pvc-pipe-clamp",
    name: "PVC Pipe Clamp",
    shortName: "PVC Pipe Clamp",
    tagline: "Non-Corrosive Pipe and Hose Support",
    image: "/images/industrial-rubber-hose-fittings/pvc-pipe-clamp.png",
    standard: "ISO 6149",
    description:
      "The Hydronex PVC Pipe Clamp provides secure mounting for hydraulic hoses and tubes while preventing vibration damage. Featuring PVC coating, it resists corrosion and protects hose surfaces. Ideal for chemical-resistant applications and marine environments.",
    features: ["PVC coating", "Corrosion resistant", "Vibration damping", "Easy installation", "Multiple sizes", "Non-marring design"],
    specs: [
      { label: "Type", value: "Hose Clamp" },
      { label: "Standard", value: "ISO 6149" },
      { label: "Material", value: "PVC Coated Steel" },
      { label: "Function", value: "Mounting & Support" },
    ],
    applications: ["Hose routing", "Vibration isolation", "Chemical resistance", "Corrosion protection"],
    quickStats: [
      { label: "Type", value: "Pipe Clamp" },
      { label: "Standard", value: "ISO 6149" },
      { label: "Material", value: "PVC Coated" },
    ],
  },
  {
    slug: "quick-release-coupling-qrc",
    name: "Quick Release Coupling (QRC)",
    shortName: "Quick Release Coupling (QRC)",
    tagline: "Flat-Face Quick-Connect Hydraulic Coupling",
    image: "/images/industrial-rubber-hose-fittings/quick-release-coupling.png",
    standard: "ISO 16030",
    description:
      "The Hydronex Quick Release Coupling (QRC) enables fast hydraulic circuit connection and disconnection without fluid spillage. Featuring flat-face design, it minimizes environmental contamination. Perfect for mobile equipment and changeable hydraulic tool applications.",
    features: ["Flat-face design", "Zero-spillage connection", "Quick connection", "Lightweight", "High flow capacity", "Reliable sealing"],
    specs: [
      { label: "Type", value: "Quick Coupling" },
      { label: "Standard", value: "ISO 16030" },
      { label: "Design", value: "Flat-Face" },
      { label: "Spillage", value: "Zero/Minimal" },
    ],
    applications: ["Mobile equipment", "Quick connection", "Tool changers", "Circuit flexibility"],
    quickStats: [
      { label: "Type", value: "Quick Coupling" },
      { label: "Standard", value: "ISO 16030" },
      { label: "Design", value: "Flat-Face" },
    ],
  },
  {
    slug: "sae-split-flanges",
    name: "Sae Split Flanges",
    shortName: "Sae Split Flanges",
    tagline: "Segmented Hydraulic Connection Flange",
    image: "/images/industrial-rubber-hose-fittings/sae-split-flanges.png",
    standard: "SAE J518",
    description:
      "The Hydronex SAE Split Flanges provide modular flange connections for hydraulic systems. Featuring split design for easy assembly and disassembly, these flanges ensure secure connections while maintaining SAE standards compliance. Ideal for custom hydraulic manifold construction.",
    features: ["Split flange design", "Easy assembly", "SAE compliant", "Secure connections", "Reusable", "Precision machined"],
    specs: [
      { label: "Type", value: "Split Flange" },
      { label: "Standard", value: "SAE J518" },
      { label: "Design", value: "Segmented" },
      { label: "Connection", value: "Modular" },
    ],
    applications: ["Manifold construction", "Custom circuits", "Easy maintenance", "Modular systems"],
    quickStats: [
      { label: "Type", value: "Split Flange" },
      { label: "Standard", value: "SAE J518" },
      { label: "Design", value: "Segmented" },
    ],
  },
  {
    slug: "solenoid-valve-ac-dc",
    name: "Solenoid Valve (AC & DC)",
    shortName: "Solenoid Valve (AC & DC)",
    tagline: "Electrically Controlled Directional Valve",
    image: "/images/industrial-rubber-hose-fittings/solenoid-valve.png",
    standard: "ISO 4401",
    description:
      "The Hydronex Solenoid Valve (AC & DC) provides automated directional control for hydraulic circuits. Available in both AC and DC coil variants, it enables remote and automatic system operation. Perfect for industrial automation, mobile machinery, and integrated control systems.",
    features: ["AC and DC coil options", "Remote operation", "Automatic control", "Fast response", "Reliable switching", "Compact design"],
    specs: [
      { label: "Type", value: "Solenoid Valve" },
      { label: "Standard", value: "ISO 4401" },
      { label: "Coil", value: "AC or DC" },
      { label: "Control", value: "Electrical/Remote" },
    ],
    applications: ["Industrial automation", "Mobile machinery", "Automated circuits", "Remote control"],
    quickStats: [
      { label: "Type", value: "Solenoid Valve" },
      { label: "Standard", value: "ISO 4401" },
      { label: "Coil", value: "AC & DC" },
    ],
  },
]

export function getIndustrialRubberHoseFitting(slug: string): IndustrialRubberHoseFitting | undefined {
  return industrialRubberHoseFittings.find((fitting) => fitting.slug === slug)
}
