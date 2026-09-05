import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { BSPOtherProducts } from "@/components/bsp-other-products"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import { variableDisplacementPumpProducts } from "@/lib/hydraulic-pumps"

const pvbContent = {
  description: "Torque PVB series variable displacement pump has been developed with the aim of even further quietness in operation, smaller size and light mass. The Torque PVB series pump has a reputation for its quiet operation and high efficiency. A compact design and an aluminum body ensures a high power to mass ratio.",
  features: [
    "Low Noise.",
    "When installing the pump the filling port should be positioned upwards.",
    "Before first starting, fill pump case with clean operating oil via the filling port. In order to avoid air blockage when first starting, adjust the control valves so that the discharged oil from the pump is returned direct to the reservoir or the actuator moves in a free load.",
    "Turning the adjustment screw clockwise, increases pressure Use petroleum base oils such as anti-wear type hydraulic oils equivalent to ISO VG-32 or 46. The recommended viscosity range is from 20 to 400 mm2/s and temperature range is from 0 to 60 °C, both of which have to be satisfied for the use of the above hydraulic oils.",
  ],
  specs: [
    { label: "Pump type", value: "Torque PVB series variable displacement pump" },
    { label: "Operation", value: "Low Noise" },
    { label: "Design", value: "Compact design and aluminum body" },
    { label: "Oil", value: "Petroleum base anti-wear hydraulic oils equivalent to ISO VG-32 or 46" },
    { label: "Recommended viscosity", value: "20 to 400 mm2/s" },
    { label: "Temperature range", value: "0 to 60 °C" },
  ],
}

const hyContent = {
  description: "Some things to think about when selecting a piston pump are as follows: The kind of fluid that the pump will utilize. Whether stainless steel is needed for the application.",
  features: [
    "The Torque HY series Hydraulic Pump is an axial piston pump with hydrostatic film bearing lubrication.",
    "It has the advantage of being compact. light weight, high efficiency.",
    "longer life, simple construction, and easy maintenance.",
    "This Hydraulic Pump has a nominal displacement of (10, 25, 63, 160, 250) ml/r, a rating pressure of 315 Bar, a maximum pressure of 400 Bar, and a speed of 1500 rpm.",
  ],
  specs: [
    { label: "Pump type", value: "Axial piston pump with hydrostatic film bearing lubrication" },
    { label: "Nominal displacement", value: "(10, 25, 63, 160, 250) ml/r" },
    { label: "Rating pressure", value: "315 Bar" },
    { label: "Maximum pressure", value: "400 Bar" },
    { label: "Speed", value: "1500 rpm" },
    { label: "Selection", value: "The kind of fluid that the pump will utilize; whether stainless steel is needed for the application" },
  ],
}

const cyRows = [
  ["2.5", "2.5", "2.5", "3.75", "1.43"],
  ["10", "10", "10", "15", "5.7"],
  ["25", "25", "25", "37.5", "14.1"],
  ["40", "40", "40", "60", "22.6"],
  ["63", "63", "63", "94.5", "35.6"],
  ["80", "80", "80", "120", "46.6"],
  ["160", "160", "160", "240", "92.2"],
  ["250", "250", "250", "375", "133.2"],
  ["400", "400", "400", "600", "199.5"],
]

const cyContent = {
  description: "The Torque CY14-1B Hydraulic Pump is of axial piston type with hydrostatic film lubrication of bearing. It makes a feature of compact size ,light weight, high efficiency, longer life, simple construction and easy maintenance. This Hydraulic Pump nominal displacement up to (10, 25, 63, 160, 250) ml/r and carries its rating pressure up to 315 Bar and a maximum pressure up to 400 Bar, and can run with a speed up to (1000, 1500).",
  features: [
    "Application: The Torque CY14-1B Axial Piston Pumps of this series are designed to supply the hydraulic presses and actuators with fluid pressure up to 315 Bar for producing power as required.",
    "These pumps also serve as oil motors. In such case ,it is advisable to mention this purpose when ordering.",
    "Pumps with various displacement control types are available to meet different purpose.",
    "Today they have found wide application in hydraulic requirements of hoisting, transportation, marine, mining, metallurgy, construction, molding, forging, machine tool industry and etc.",
  ],
  specs: [
    { label: "Pump type", value: "Axial piston type with hydrostatic film lubrication of bearing" },
    { label: "Rated pressure", value: "315 Bar" },
    { label: "Maximum pressure", value: "400 Bar" },
    { label: "Speed", value: "1000 / 1500 rpm" },
  ],
}

const vSeriesContent = {
  description: "High performance Intervene Pumps for plastic injection machinery, Shoe machinery, tool machinery, Die casting machinery and Metallurgic equipment.",
  features: [
    "Intrvane pumps with hydraulic balancing Structure provide more stable performance and longer life since less pressure from vane on stator.",
    "twelve vane system provide low amplitude flow pulsation resulting in low system noise characteristics.",
    "various displacement and shafts with 4 different outlet opposite position make operation more flexible.",
    "The cartridge is is independent of the drive shaft, allowing for easy servicing without remove the pump from its mounting.",
  ],
  specs: [
    { label: "Application", value: "Plastic injection machinery, Shoe machinery, tool machinery, Die casting machinery and Metallurgic equipment" },
    { label: "Balancing structure", value: "Hydraulic balancing Structure" },
    { label: "Vane system", value: "twelve vane system" },
    { label: "Outlet positions", value: "4 different outlet opposite position" },
    { label: "Service", value: "The cartridge is is independent of the drive shaft" },
  ],
}

const ta10vRows = [
  ["TA10VSO -18", "1.10 / 18", "3000", "8.5 / 32", "4000"],
  ["TA10VSO -28", "1.71 / 28", "3000", "13 / 50", "4000"],
  ["TA10VSO -45", "2.75 / 45", "2600", "21 / 81", "4000"],
  ["TA10VSO -71", "4.33 / 71", "2200", "33.5 / 127", "4000"],
  ["TA10VSO -100", "6.10 / 100", "2000", "47.5 / 179", "4000"],
  ["TA10VSO -140", "8.54 / 140", "1800", "66.5 / 251", "4000"],
]

const ta10vContent = {
  description: "TORQUE TA10V series pumps are designed for both industrial and mobile hydraulics with selection of pressure, flow and load controller it has high repeatability and provides rugged performance in field. Pressure range upto 280 bar and displacements up to 140 cc provides wide range in terms of selection. Interchangeable to Rexroth ® A10VSO, A10VG series.",
  features: ["Displacement range 18 to 140 cc/rev", "High Repeatability, low noise", "Single, multi displacement units", "Controller options: DR, DFLR, DFR, DFR1 & DRG", "Interchangeable for Rexroth® A10VO series"],
  specs: [{ label: "Pressure range", value: "upto 280 bar" }, { label: "Displacement range", value: "18 to 140 cc/rev" }, { label: "Controller options", value: "DR, DFLR, DFR, DFR1 & DRG" }, { label: "Interchangeability", value: "Rexroth ® A10VSO, A10VG series" }],
}

const taRows = [["TA10","10.0","2","16","21","8.5"],["TA16","15.8","4","16","21","16.5"],["TA22","22.2","6","16","16","16.5"],["TA37","36.9","10","16","21","28.0"],["TA56","56.2","12","16","21","35.0"],["TA70","70.0","30","25","28","58.5"],["TA90","91.0","56","25","28","72.5"],["TA100","100","62","21","21","72.5"],["TA145","145","83","25","28","92.5T"]]
const taContent = { description: "TORQUE TA series pumps are designed for both industrial and mobile hydraulics with selection of pressure, flow , load and PQ Controller it has high repeatability and provides rugged performance in field. Pressure range upto 280 bar and displacements up to 140 cc provides wide range in terms of selection. Interchangeable to Yuken ® A series FR 04, FR 01", features: ["Displacement range 37 to 145 cc/rev","Single, multi displacement units","Controller options: Pressure Compensator (FR01), Proportional Electro-Hydraulic Load Sensing type (FR04)","Interchangeable for Yuken ® A series"], specs: [{label:"Displacement range",value:"37 to 145 cc/rev"},{label:"Controller options",value:"Pressure Compensator (FR01), Proportional Electro-Hydraulic Load Sensing type (FR04)"},{label:"Interchangeability",value:"Yuken ® A series"}] }
const tarContent = { description: "TORQUE TAR series pumps are designed for industrial hydraulics with pressure compensator type it is used in CNC and special purpose machinery with high efficiency. Pressure range upto 210 bar and displacements up to 22cc provides wide range in terms of selection. Interchangeable to Yuken ® AR series FR 01.", features: ["Light Weight and low noise","Displacement range 16,22 cc/rev","Single, multi displacement units","Controller options: Pressure Compensator (FR01)","Interchangeable for Yuken ® AR series"], specs: [{label:"Pressure range",value:"upto 210 bar"},{label:"Displacement range",value:"16,22 cc/rev"},{label:"Controller options",value:"Pressure Compensator (FR01)"},{label:"Interchangeability",value:"Yuken ® AR series"}] }
function TASpecificationTable() { return <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-[#f7f8f6] py-14"><div className="mx-auto max-w-7xl px-4"><h2 className="mb-8 text-2xl font-bold text-[#143126]">Torque TA Hydraulic Piston Pump Specifications</h2><div className="overflow-x-auto rounded-xl border border-t-[3px] border-t-[#e05a2e] bg-white"><table className="min-w-[900px] w-full border-collapse text-sm"><thead><tr className="bg-[#fff0eb]"><th>Model</th><th>Flow cm3 / rev</th><th>Minimum Adjustment Flow cm3 / rev</th><th>Rated MPa</th><th>Intermittent MPa</th><th>Max r/min</th><th>Min r/min</th><th>Mass kg</th></tr></thead><tbody>{taRows.map((r,i)=><tr key={r[0]} className="hover:bg-[#fff7f3]" style={{background:i%2?"#fafbfc":"#fff"}}>{r.slice(0,5).map((v,j)=><td key={j} className="border border-[#e2e8f0] px-3 py-2 text-center">{v}</td>)}<td className="border border-[#e2e8f0] px-3 py-2 text-center">1800</td><td className="border border-[#e2e8f0] px-3 py-2 text-center">600</td><td className="border border-[#e2e8f0] px-3 py-2 text-center">{r[5]}</td></tr>)}</tbody></table></div></div></section> }

function TA10VSpecificationTable() {
  return <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-[#f7f8f6] py-14 sm:py-16"><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(242,101,34,0.1),transparent_25%),radial-gradient(circle_at_90%_78%,rgba(63,108,140,0.14),transparent_28%)]" /><div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-8 flex items-center gap-3"><span className="h-7 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden /><h2 className="text-2xl font-bold text-[#143126]">Torque TA10V Hydraulic Piston Pump Specifications</h2></div><div className="overflow-x-auto rounded-xl border border-[#e2e8f0] border-t-[3px] border-t-[#e05a2e] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_24px_rgba(224,90,46,0.06)]"><table className="min-w-[850px] w-full border-collapse text-sm"><thead><tr className="bg-[linear-gradient(90deg,#fff0eb_0%,#fff7f3_100%)] text-[#0e1c35]">{["Pump Series", "Displacement (in³ / cm³)", "Max RPM", "Flow at 1800 RPM (gpm / lpm)", "Operating Pressure (psi)"].map((heading) => <th key={heading} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold last:border-r-0">{heading}</th>)}</tr></thead><tbody>{ta10vRows.map((row, index) => <tr key={row[0]} className="transition-colors hover:bg-[#fff7f3]" style={{ background: index % 2 === 0 ? "#ffffff" : "#fafbfc" }}>{row.map((value, valueIndex) => <td key={value} className="border-b border-r border-[#e2e8f0] px-3 py-2.5 text-center last:border-r-0">{value}</td>)}</tr>)}</tbody></table></div></div></section>
}

function CYSpecificationTable() {
  return <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-[#f7f8f6] py-14 sm:py-16"><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(242,101,34,0.1),transparent_25%),radial-gradient(circle_at_90%_78%,rgba(63,108,140,0.14),transparent_28%)]" /><div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-8 flex items-center gap-3"><span className="h-7 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden /><h2 className="text-2xl font-bold text-[#143126]">Torque CY Series Pumps Specifications</h2></div><div className="overflow-x-auto rounded-xl border border-[#e2e8f0] border-t-[3px] border-t-[#e05a2e] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_24px_rgba(224,90,46,0.06)]"><table className="min-w-[820px] w-full border-collapse text-sm"><thead><tr className="bg-[linear-gradient(90deg,#fff0eb_0%,#fff7f3_100%)] text-[#0e1c35]"><th rowSpan={2} colSpan={2} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold">Model</th><th rowSpan={2} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold">Rated Pressure (Bar)</th><th rowSpan={2} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold">Nominal Displacement (ml/r)</th><th colSpan={2} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold">Rated flow</th><th className="border-b border-[#f4c4aa] px-3 py-3 text-center font-bold">Power-output (KW)</th></tr><tr className="bg-[#fef8f5] text-[#0e1c35]"><th className="border-b border-r border-[#f4c4aa] px-3 py-2 text-center font-bold">1000rpm</th><th className="border-b border-r border-[#f4c4aa] px-3 py-2 text-center font-bold">1500rpm</th><th className="border-b border-[#f4c4aa] px-3 py-2 text-center font-bold">1000rpm</th></tr></thead><tbody>{cyRows.map((row, index) => <tr key={row[0]} className="transition-colors hover:bg-[#fff7f3]" style={{ background: index % 2 === 0 ? "#ffffff" : "#fafbfc" }}><td className="border-b border-r border-[#e2e8f0] px-3 py-2 text-center">{row[0]}</td>{index === 0 && <td rowSpan={cyRows.length} className="border-b border-r border-[#e2e8f0] px-3 py-2 text-center font-semibold text-[#143126]">CY14-1B</td>}<td className="border-b border-r border-[#e2e8f0] px-3 py-2 text-center">315</td>{row.slice(1, 4).map((value) => <td key={value} className="border-b border-r border-[#e2e8f0] px-3 py-2 text-center">{value}</td>)}<td className="border-b border-[#e2e8f0] px-3 py-2 text-center">{row[4]}</td></tr>)}</tbody></table></div></div></section>
}

export function generateStaticParams() {
  return variableDisplacementPumpProducts.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = variableDisplacementPumpProducts.find((item) => item.slug === slug)
  return product ? { title: `${product.name} | Hydronex`, description: product.name } : {}
}

export default async function VariableDisplacementPumpProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = variableDisplacementPumpProducts.find((item) => item.slug === slug)
  if (!product) notFound()

  const otherProducts = variableDisplacementPumpProducts.filter((item) => item.slug !== product.slug).map((item) => ({ ...item, shortName: item.name }))
  const isPvbSeries = product.slug === "torque-pvb-series-pumps"
  const isHySeries = product.slug === "torque-hy-series-piston-pumps"
  const isCySeries = product.slug === "torque-cy-series-pumps"
  const isVSeries = product.slug === "torque-v-series-pump"
  const isTa10v = product.slug === "torque-ta10v-hydraulic-piston-pump"
  const isTa = product.slug === "torque-ta-hydraulic-piston-pump"
  const isTar = product.slug === "torque-tar-hydraulic-piston-pump"
  const productContent = isPvbSeries ? pvbContent : isHySeries ? hyContent : isCySeries ? cyContent : isVSeries ? vSeriesContent : isTa10v ? ta10vContent : isTa ? taContent : isTar ? tarContent : { description: product.name, features: [], specs: [] }

  return <><BSPProductDetail editorialHero categoryName="Variable Displacement Pumps" categoryHref="/products/hydraulic-pumps/variable-displacement-pumps" parentCategoryName="Hydraulic Pumps" parentCategoryHref="/products/hydraulic-pumps" product={{ name: product.name, shortName: product.name, slug: product.slug, image: product.image, description: productContent.description, features: productContent.features, specs: productContent.specs, applications: [] }} additionalSpecificationSection={isCySeries ? <CYSpecificationTable /> : isTa10v ? <TA10VSpecificationTable /> : isTa || isTar ? <TASpecificationTable /> : undefined} otherProductsSection={<><BSPOtherProducts products={otherProducts} basePath="/products/hydraulic-pumps/variable-displacement-pumps" categoryLabel="Variable Displacement Pumps" /><BSPCtaSection title="Let’s specify the right variable displacement pump." description={product.name} buttonLabel="Talk to our team" ctaHref="/contact" /></>} /><LikedProductsDrawer /><LikedProductsFAB /></>
}
