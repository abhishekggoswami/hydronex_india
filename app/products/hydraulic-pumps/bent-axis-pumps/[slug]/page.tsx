import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { BSPOtherProducts } from "@/components/bsp-other-products"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import { bentAxisPumpProducts } from "@/lib/hydraulic-pumps"

const thpp012130Content = {
  description:
    "Torque THPP-4 012-130 ISO is a fixed displacement piston pump series for mobile and stationary hydraulics. At a maximum pressure of 400 bar, Torque THPP-4 012-130 ISO covers the complete displacement range of 12-130 cm rev. The pump's two tapered roller bearings are well dimensioned, enabling for high shaft loads and excellent speed characteristics. Externally, the pump is drained. It is designed for speed and is therefore available in either left (L) or right (R) rotation direction.",
  features: [
    "High maximum speed while maintaining low noise levels",
    "Smooth operation over the entire speed range",
    "Long life due to high demands on material selection, such as bearings, seals, etc.",
  ],
  specs: [
    { label: "Maximum pressure", value: "400 bar" },
    { label: "Displacement range", value: "12-130 cm rev" },
    { label: "Rotation direction", value: "left (L) or right (R)" },
  ],
}

const thpp012108Content = {
  description:
    "Torque THPP-4 012-108 DIN is a series of light weight casing piston pumps with fixed displacement meant for high-demand mobile hydraulics. Torque THPP-4 012-108 DIN has a displacement range of 12-108 cm/rev and a maximum pressure of 400 bar. It is a contemporary, compact pump that satisfies the market's demanding standards for flow performance, pressure, efficiency, and tiny installation dimensions. The pump is either directly installed on the power take-off or through an intermediary shaft on a frame bracket.",
  features: [
    "Lightweight metal casing design",
    "Smooth operation over the entire speed range",
    "Long life due to high demands on material selection, such as bearings, seals, etc.",
    "Corrosion free light metal-housing",
    "Less heat generation due to better ability to dissipate heat through housing",
  ],
  specs: [
    { label: "Maximum pressure", value: "400 bar" },
    { label: "Displacement range", value: "12-108 cm/rev" },
    { label: "Installation", value: "Directly installed on the power take-off or through an intermediary shaft on a frame bracket" },
  ],
}

const ta2fContent = {
  description:
    "With and exceptional functionality and durability, we offer extensive line of hydraulic pumps deliver ideal performance in even the most demanding industrial and mobile applications. Suitable for high operating pressures, low noise level, high speeds, high starting torque, and high volumetric and mechanical efficiencies along with Optimized power-to-weight ratio thus used in Machines for forestry and agricultural purposes, Cranes and lifting equipment, Truck-mounted concrete pumps, Municipal trucks and many more.",
  features: [
    "Displacement :12 to 500 cc",
    "High Pressure and efficiency",
    "Low noise , longer life",
  ],
  specs: [
    { label: "Displacement", value: "12 to 500 cc" },
    { label: "Performance", value: "High Pressure and efficiency" },
    { label: "Service life", value: "Low noise , longer life" },
  ],
}

const ta2fColumns = ["10", "12", "23", "28", "45", "55", "63", "80", "107", "125", "160", "200", "250"]

type Ta2fRow = {
  group?: string
  groupSpan?: number
  condition: string
  symbol: string
  unit: string
  values: string[]
}

const ta2fRows: Ta2fRow[] = [
  { group: "Displacement", groupSpan: 1, condition: "", symbol: "Vg", unit: "ml/r", values: ["9.4", "11.6", "22.7", "28.1", "44.3", "54.8", "63", "80", "107", "125", "160", "200", "250"] },
  { group: "Max. speed", groupSpan: 4, condition: "close circuit", symbol: "nmax", unit: "r/min", values: ["7500", "6000", "5600", "4750", "3750", "3750", "4000", "3350", "3000", "3150", "2650", "2500", "2500"] },
  { condition: "0.09MPa", symbol: "n0.09", unit: "r/min", values: ["4700", "3750", "3750", "2800", "2360", "2360", "2550", "2120", "1900", "2120", "1650", "1700", "1400"] },
  { condition: "open circuit 0.1MPa", symbol: "n0.1", unit: "r/min", values: ["5000", "4000", "4000", "3000", "2500", "2500", "2600", "2240", "2000", "2250", "2100", "2100", "1800"] },
  { condition: "0.15MPa", symbol: "n0.15", unit: "r/min", values: ["6000", "4900", "4900", "3600", "3000", "3000", "3300", "2750", "2450", "2750", "2100", "2180", "1850"] },
  { group: "Max. flow", groupSpan: 4, condition: "close circuit", symbol: "Qmax", unit: "L/min", values: ["71", "70", "127", "133", "166", "206", "252", "268", "321", "394", "424", "500", "625"] },
  { condition: "n0.09", symbol: "Q0.09", unit: "L/min", values: ["43", "42", "83", "76", "122", "125", "156", "164", "197", "257", "256", "330", "340"] },
  { condition: "open circuit n0.1", symbol: "Q0.1", unit: "L/min", values: ["46", "45", "88", "82", "129", "133", "165", "174", "208", "272", "272", "349", "364"] },
  { condition: "n0.15", symbol: "Q0.15", unit: "L/min", values: ["55", "55", "108", "98", "157", "160", "202", "213", "254", "334", "326", "423", "449"] },
  { group: "Max. Power p=35MPa", groupSpan: 4, condition: "close circuit", symbol: "Pmax", unit: "KW", values: ["41", "41", "74", "78", "97", "120", "147", "156", "187", "230", "247", "292", "365"] },
  { condition: "Q0.09", symbol: "P0.09", unit: "KW", values: ["26", "26", "50", "46", "71", "75", "93", "99", "119", "154", "154", "198", "204"] },
  { condition: "open circuit Q0.1", symbol: "P0.1", unit: "KW", values: ["27", "27", "53", "49", "75", "80", "99", "105", "125", "163", "163", "210", "218"] },
  { condition: "Q0.15", symbol: "P0.15", unit: "KW", values: ["33", "33", "65", "59", "92", "96", "121", "128", "153", "200", "156", "254", "270"] },
  { group: "Electric motor speed n=1450rpm", groupSpan: 3, condition: "close", symbol: "Q", unit: "L/min", values: ["13.6", "16.8", "32.9", "40.7", "64.2", "79.5", "91.3", "116", "155", "181.2", "232", "", ""] },
  { condition: "2)open", symbol: "Qo", unit: "L/min", values: ["13.2", "16.3", "31.9", "39.5", "62.3", "77.1", "88.6", "112.5", "150.5", "175.8", "225", "", ""] },
  { condition: "power (Δp=35Mpa)", symbol: "P", unit: "KW", values: ["8", "10", "19", "24", "38", "46", "53", "68", "91", "106", "135", "", ""] },
  { group: "Torque", groupSpan: 2, condition: "Δp=10Mpa", symbol: "M", unit: "Nm", values: ["15", "18.5", "36", "44.6", "70.4", "87", "100", "127.5", "169.7", "198", "254", "318.5", "397.9"] },
  { condition: "Δp=35Mpa", symbol: "Mmax", unit: "Nm", values: ["52.5", "64.5", "126", "156", "247", "305", "350", "446", "594", "693", "889", "1141", "1393"] },
  { group: "approx weight", groupSpan: 1, condition: "", symbol: "", unit: "kg", values: ["5", "5", "12", "12", "23", "23", "33", "33", "44", "63", "63", "88", "88"] },
]

function TA2FSpecificationTable() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fdf6f0_0%,#f9f4ef_40%,#f5f8ff_100%)] py-14">
      <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-4"><span className="h-7 w-1 rounded-full bg-[#e05a2e]" /><h2 className="text-2xl font-extrabold tracking-tight text-[#0e1c35]">Torque TA2F Bent Axis Piston Pump Specifications</h2></div>
        <div className="overflow-x-auto rounded-xl border border-[#e2e8f0] border-t-[3px] border-t-[#e05a2e] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_24px_rgba(224,90,46,0.06)]">
          <table className="min-w-[1360px] w-full border-collapse text-[11px]">
            <thead><tr className="bg-[linear-gradient(90deg,#fff0eb_0%,#fff7f3_100%)] text-[#0e1c35]"><th colSpan={4} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-left font-bold uppercase tracking-[0.12em]">Size</th>{ta2fColumns.map((column) => <th key={column} className="border-b border-r border-[#f4c4aa] px-2 py-3 text-center font-bold last:border-r-0">{column}</th>)}</tr><tr className="bg-[linear-gradient(90deg,#fef8f5_0%,#fffaf8_100%)] text-[#0e1c35]"><th className="border-b-2 border-r border-[#e05a2e] px-3 py-2 text-left font-bold uppercase tracking-[0.1em]">Parameter</th><th className="border-b-2 border-r border-[#e05a2e] px-3 py-2 text-left font-bold uppercase tracking-[0.1em]">Condition</th><th className="border-b-2 border-r border-[#e05a2e] px-3 py-2 text-left font-bold uppercase tracking-[0.1em]">Symbol</th><th className="border-b-2 border-r border-[#e05a2e] px-3 py-2 text-left font-bold uppercase tracking-[0.1em]">Unit</th>{ta2fColumns.map((column) => <th key={column} className="border-b-2 border-r border-[#e05a2e] px-2 py-2 last:border-r-0" />)}</tr></thead>
            <tbody>{ta2fRows.map((row, rowIndex) => <tr key={`${row.group}-${row.condition}-${row.symbol}`} className="transition-colors hover:bg-[#fff7f3]" style={{ background: rowIndex % 2 === 0 ? "#ffffff" : "#fafbfc" }}>{row.group ? <td rowSpan={row.groupSpan} className="border-b border-r border-[#e2e8f0] px-3 py-2 font-semibold text-[#143126]">{row.group}</td> : null}<td className="border-b border-r border-[#e2e8f0] px-3 py-2 text-[#374151]">{row.condition}</td><td className="border-b border-r border-[#e2e8f0] px-3 py-2 text-[#374151]">{row.symbol}</td><td className="border-b border-r border-[#e2e8f0] px-3 py-2 text-[#374151]">{row.unit}</td>{row.values.map((value, valueIndex) => <td key={valueIndex} className="border-b border-r border-[#e2e8f0] px-2 py-2 text-center text-[#374151] last:border-r-0">{value}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

const ta2foContent = {
  description:
    "Torque THPP Piston pump are A2FO interchangeability With and exceptional functionality and durability, we offer extensive line of hydraulic pumps deliver ideal performance in even the most demanding industrial and mobile applications. Suitable for high operating pressures, low noise level, high speeds, high starting torque, and high volumetric and mechanical efficiencies along with Optimized power-to-weight ratio thus used in Machines for forestry and agricultural purposes, Cranes and lifting equipment, Truck-mounted concrete pumps, Municipal trucks and many more.",
  features: [
    "Displacement: 12 to 130 cc",
    "Peak Pressure: 400 bar",
    "Low noise, longer life",
    "DIN, ISO, SAE mountings",
  ],
  specs: [
    { label: "Displacement", value: "12 to 130 cc" },
    { label: "Peak Pressure", value: "400 bar" },
    { label: "Mountings", value: "DIN, ISO, SAE mountings" },
  ],
}

const ta2foColumns = ["012", "017", "025", "034", "040", "047", "056", "064", "084", "090", "108", "130"]
type Ta2foRow = { label?: string; labelSpan?: number; condition: string; unit: string; values: string[] }
const ta2foRows: Ta2foRow[] = [
  { label: "nominal oil flow at pump speed", labelSpan: 3, condition: "rpm 500", unit: "", values: ["6.3", "8.5", "12.7", "17.1", "20.6", "23.5", "28.0", "31.8", "41.5", "45.5", "54.0", "65.0"] },
  { condition: "rpm 1000", unit: "", values: ["12.6", "17.0", "25.4", "34.2", "41.2", "47.1", "56.0", "63.6", "83.6", "90.7", "108.0", "130.0"] },
  { condition: "rpm 1500", unit: "", values: ["18.9", "25.5", "38.1", "51.3", "61.8", "70.6", "84.0", "95.4", "125.4", "136.1", "162.0", "195.0"] },
  { label: "Displacement", condition: "", unit: "cm3/rev", values: ["12.6", "17.0", "25.4", "34.2", "41.2", "47.1", "56.0", "63.6", "83.6", "90.7", "108.0", "130.0"] },
  { label: "Max. Operating pressure continuous intermittent", condition: "", unit: "bar", values: ["350", "350", "350", "350", "350", "350", "350", "350", "350", "350", "350", "350"] },
  { label: "Max. Operating pressure continuous intermittent", condition: "", unit: "bar", values: ["400", "400", "400", "400", "400", "400", "400", "400", "400", "400", "400", "400"] },
  { label: "Max. Pump Speed", condition: "", unit: "rpm", values: ["3300", "3200", "2550", "2250", "2200", "2200", "2100", "2050", "1700", "1700", "1700", "1600"] },
  { label: "Max. Pump Speed", condition: "", unit: "rpm", values: ["6000", "5700", "4700", "4550", "4300", "4300", "3750", "3700", "3350", "3000", "3000", "2900"] },
  { label: "Max. Power", condition: "", unit: "kW", values: ["25", "35", "40", "50", "55", "65", "75", "85", "90", "95", "120", "120"] },
  { label: "Weight", condition: "", unit: "kg", values: ["7.5", "7.5", "8.5", "8.5", "15.5", "15.5", "15.5", "15.5", "27.0", "27.0", "29.5", "29.5"] },
  { label: "Mass Moment of inertia (x10-3)", condition: "", unit: "kg m2", values: ["0.9", "0.9", "1.1", "1.1", "2.6", "2.6", "2.6", "2.6", "7.4", "7.4", "7.4", "7.4"] },
]

function TA2FOSpecificationTable() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fdf6f0_0%,#f9f4ef_40%,#f5f8ff_100%)] py-14">
      <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-4"><span className="h-7 w-1 rounded-full bg-[#e05a2e]" /><h2 className="text-2xl font-extrabold tracking-tight text-[#0e1c35]">Torque TA2FO Bent Axis Piston Pump Specifications</h2></div>
        <div className="overflow-x-auto rounded-xl border border-[#e2e8f0] border-t-[3px] border-t-[#e05a2e] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_24px_rgba(224,90,46,0.06)]">
          <table className="min-w-[1220px] w-full border-collapse text-[12px]">
            <thead><tr className="bg-[linear-gradient(90deg,#fff0eb_0%,#fff7f3_100%)] text-[#0e1c35]"><th colSpan={2} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-left font-bold uppercase tracking-[0.12em]">Model</th>{ta2foColumns.map((column) => <th key={column} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold last:border-r-0">{column}</th>)}</tr></thead>
            <tbody>{ta2foRows.map((row, rowIndex) => <tr key={`${row.label}-${row.condition}-${row.unit}-${rowIndex}`} className="transition-colors hover:bg-[#fff7f3]" style={{ background: rowIndex % 2 === 0 ? "#ffffff" : "#fafbfc" }}>{row.label ? <td rowSpan={row.labelSpan} className="border-b border-r border-[#e2e8f0] px-3 py-2.5 font-medium text-[#143126]">{row.label}</td> : null}<td className="border-b border-r border-[#e2e8f0] px-3 py-2.5 text-[#374151]">{row.condition || row.unit}</td>{row.values.map((value, valueIndex) => <td key={valueIndex} className="border-b border-r border-[#e2e8f0] px-2 py-2.5 text-center text-[#374151] last:border-r-0">{value}</td>)}</tr>)}<tr style={{ background: "#ffffff" }}><td colSpan={2} className="border-b border-r border-[#e2e8f0] px-3 py-2.5 font-medium text-[#143126]">Direction of rotation</td><td colSpan={12} className="border-b border-[#e2e8f0] px-3 py-2.5 text-center text-[#374151]">Left (L) Right (R)</td></tr></tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export function generateStaticParams() {
  return bentAxisPumpProducts.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = bentAxisPumpProducts.find((item) => item.slug === slug)
  return product ? { title: `${product.name} | Hydronex`, description: product.name } : {}
}

export default async function BentAxisPumpProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = bentAxisPumpProducts.find((item) => item.slug === slug)

  if (!product) notFound()

  const productContent = product.slug === "torque-thpp-4-012-130-iso"
    ? thpp012130Content
    : product.slug === "torque-thpp-4-012-108-din"
      ? thpp012108Content
      : product.slug === "torque-ta2f-bent-axis-piston-pump"
        ? ta2fContent
        : product.slug === "torque-ta2fo-bent-axis-piston-pump"
          ? ta2foContent
        : { description: product.name, features: [], specs: [] }
  const otherProducts = bentAxisPumpProducts
    .filter((item) => item.slug !== product.slug)
    .map((item) => ({ ...item, shortName: item.name }))

  return (
    <>
      <BSPProductDetail
        editorialHero
        categoryName="Bent Axis Pumps"
        categoryHref="/products/hydraulic-pumps/bent-axis-pumps"
        parentCategoryName="Hydraulic Pumps"
        parentCategoryHref="/products/hydraulic-pumps"
        product={{
          name: product.name,
          shortName: product.name,
          slug: product.slug,
          image: product.image,
          description: productContent.description,
          features: productContent.features,
          specs: productContent.specs,
          applications: [],
        }}
        additionalSpecificationSection={product.slug === "torque-ta2f-bent-axis-piston-pump" ? <TA2FSpecificationTable /> : product.slug === "torque-ta2fo-bent-axis-piston-pump" ? <TA2FOSpecificationTable /> : undefined}
        otherProductsSection={<><BSPOtherProducts products={otherProducts} basePath="/products/hydraulic-pumps/bent-axis-pumps" categoryLabel="Bent Axis Pumps" /><BSPCtaSection title="Let's specify the right bent axis pump." description={product.name} buttonLabel="Talk to our team" ctaHref="/contact" /></>}
      />
      <LikedProductsDrawer />
      <LikedProductsFAB />
    </>
  )
}
