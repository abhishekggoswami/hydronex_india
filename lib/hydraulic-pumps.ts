export interface HydraulicPumpProduct {
  id: number
  name: string
  slug: string
  code: string
  image: string
}

export const bentAxisPumpProducts: HydraulicPumpProduct[] = [
  {
    id: 1,
    name: "Torque THPP-4 012-130 ISO",
    slug: "torque-thpp-4-012-130-iso",
    code: "THPP-4 012-130 ISO",
    image: "/images/hydraulic-pumps/bent-axis-pumps/torque-thpp-4-012-130-iso.png",
  },
  {
    id: 2,
    name: "Torque THPP-4 012-108 DIN",
    slug: "torque-thpp-4-012-108-din",
    code: "THPP-4 012-108 DIN",
    image: "/images/hydraulic-pumps/bent-axis-pumps/torque-thpp-4-012-108-din.png",
  },
  {
    id: 3,
    name: "Torque TA2F Bent Axis Piston Pump",
    slug: "torque-ta2f-bent-axis-piston-pump",
    code: "TA2F",
    image: "/images/hydraulic-pumps/bent-axis-pumps/torque-ta2f-bent-axis-piston-pump.png",
  },
  {
    id: 4,
    name: "Torque TA2FO Bent Axis Piston Pump",
    slug: "torque-ta2fo-bent-axis-piston-pump",
    code: "TA2FO",
    image: "/images/hydraulic-pumps/bent-axis-pumps/torque-ta2fo-bent-axis-piston-pump.png",
  },
]

export const variableDisplacementPumpProducts: HydraulicPumpProduct[] = [
  { id: 1, name: "Torque PVB Series Pumps", slug: "torque-pvb-series-pumps", code: "PVB", image: "/images/hydraulic-pumps/variable-displacement-pumps/torque-pvb-series-pumps.png" },
  { id: 2, name: "Torque HY Series Piston Pumps", slug: "torque-hy-series-piston-pumps", code: "HY", image: "/images/hydraulic-pumps/variable-displacement-pumps/torque-hy-series-piston-pumps.png" },
  { id: 3, name: "Torque CY Series Pumps", slug: "torque-cy-series-pumps", code: "CY", image: "/images/hydraulic-pumps/variable-displacement-pumps/torque-cy-series-pumps.png" },
  { id: 4, name: "Torque V series Pump", slug: "torque-v-series-pump", code: "V", image: "/images/hydraulic-pumps/variable-displacement-pumps/torque-v-series-pump.png" },
  { id: 5, name: "Torque TA10V Hydraulic Piston Pump", slug: "torque-ta10v-hydraulic-piston-pump", code: "TA10V", image: "/images/hydraulic-pumps/variable-displacement-pumps/torque-ta10v-hydraulic-piston-pump.png" },
  { id: 6, name: "Torque TA Hydraulic Piston Pump", slug: "torque-ta-hydraulic-piston-pump", code: "TA", image: "/images/hydraulic-pumps/variable-displacement-pumps/torque-ta-hydraulic-piston-pump.png" },
  { id: 7, name: "Torque TAR Hydraulic Piston Pump", slug: "torque-tar-hydraulic-piston-pump", code: "TAR", image: "/images/hydraulic-pumps/variable-displacement-pumps/torque-tar-hydraulic-piston-pump.png" },
]

export const gearPumpProducts: HydraulicPumpProduct[] = [
  { id: 1, name: "Torque Cast Iron Gear Pump", slug: "torque-cast-iron-gear-pump", code: "Cast Iron", image: "/images/hydraulic-pumps/gear-pumps/torque-cast-iron-gear-pump.png" },
  { id: 2, name: "Torque CIPH-40 63  80  100CC Pump", slug: "torque-ciph-40-63-80-100cc-pump", code: "CIPH", image: "/images/hydraulic-pumps/gear-pumps/torque-ciph-40-63-80-100cc-pump.png" },
  { id: 3, name: "Torque Hydraulic Gear Pump - 0P Series", slug: "torque-hydraulic-gear-pump-0p-series", code: "0P", image: "/images/hydraulic-pumps/gear-pumps/torque-hydraulic-gear-pump-0p-series.png" },
  { id: 4, name: "Torque Hydraulic Gear Pump - 1P Series", slug: "torque-hydraulic-gear-pump-1p-series", code: "1P", image: "/images/hydraulic-pumps/gear-pumps/torque-hydraulic-gear-pump-1p-series.png" },
  { id: 5, name: "Torque Hydraulic Gear Pump-2P Series", slug: "torque-hydraulic-gear-pump-2p-series", code: "2P", image: "/images/hydraulic-pumps/gear-pumps/torque-hydraulic-gear-pump-2p-series.png" },
  { id: 6, name: "Torque Hydraulic Internal Gear Pump", slug: "torque-hydraulic-internal-gear-pump", code: "Internal", image: "/images/hydraulic-pumps/gear-pumps/torque-hydraulic-internal-gear-pump.png" },
]

export const vanePumpProducts: HydraulicPumpProduct[] = [
  { id: 1, name: "Torque PV2R Series Double Fixed Vane Pump", slug: "torque-pv2r-series-double-fixed-vane-pump", code: "PV2R Double", image: "/images/hydraulic-pumps/vane-pumps/torque-pv2r-series-double-fixed-vane-pump.png" },
  { id: 2, name: "Torque PV2R Series Single Fixed Vane pump", slug: "torque-pv2r-series-single-fixed-vane-pump", code: "PV2R Single", image: "/images/hydraulic-pumps/vane-pumps/torque-pv2r-series-single-fixed-vane-pump.png" },
  { id: 3, name: "Torque TVP Series Double Variable Vane Pump", slug: "torque-tvp-series-double-variable-vane-pump", code: "TVP Double", image: "/images/hydraulic-pumps/vane-pumps/torque-tvp-series-double-variable-vane-pump.png" },
  { id: 4, name: "Torque TVP Series Single Variables Vane Pump", slug: "torque-tvp-series-single-variables-vane-pump", code: "TVP Single", image: "/images/hydraulic-pumps/vane-pumps/torque-tvp-series-single-variables-vane-pump.png" },
]
