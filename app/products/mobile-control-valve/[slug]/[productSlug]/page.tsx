import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { BSPOtherProducts } from "@/components/bsp-other-products"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import { monoblockValveProducts, sectionalValveProducts } from "@/lib/mobile-control-valves"

const pneumaticValveDescription =
  "Torque Monoblock control valves are single body directional valves used to control flow in hydraulic circuit. They are compact type valves, having inbuilt check and relief valves. Used in agriculture machineries and special hydraulic machines."

const pneumaticValveFeatures = [
  "P40 , P80 and P120 series valves with Monoblock construction is developed based on European technology.",
  "Compact construction and high service life.",
  "It has inbuilt check valve to not allow return flow and pressure relief valve to adjust system pressure.",
  "Type of circuits: Parallel circuit, Carry-over (power beyond) option (HPCO)",
  "Types of control: Manual control, pneumatic control, hydraulic and electric control for optional.",
  "Working sections: 1 to 7 levers.",
  "Option: Hydraulic lock is available on A and B port.",
]

const pneumaticValveSpecifications = [
  { label: "Series", value: "P40, P80 and P120" },
  { label: "Nominal pressure", value: "20 MPa" },
  { label: "Maximum pressure", value: "31.5 MPa" },
  { label: "Nominal flow rate", value: "40, 80 and 120 L/min" },
  { label: "Working sections", value: "1 to 7 levers" },
]

const monoblockValveTableRows = [
  ["P40", "1-7S", "20", "31.5", "40", "≤100", "-20 ~ +80", "10 ~ 400", "≤10"],
  ["P80", "1-6S", "20", "31.5", "80", "≤100", "-20 ~ +80", "10 ~ 400", "≤10"],
  ["P120", "1-3S", "20", "31.5", "120", "≤1", "-20 ~ +80", "10 ~ 400", "≤10"],
]

const pilotOperatedSectionalDescription =
  "A Torque hydraulic pilot operated sectional control valve is a control valve type that regulates a larger main valve using a more compact pilot valve. Typically, an electric or pressure signal opens the pilot valve."

const pilotOperatedSectionalFeatures = [
  "Increased acceptable working pressures",
  "low-level reduction in pressure",
  "large variety of flow",
  "Insensitive to impurities",
  "economical for controlling high flow systems",
  "Low energy usage",
  "More economical management",
  "extended service life",
]

const pilotOperatedSectionalSpecifications = [
  { label: "Valve type", value: "hydraulic pilot operated sectional control valve" },
  { label: "Main valve", value: "regulates a larger main valve" },
  { label: "Pilot valve", value: "using a more compact pilot valve" },
  { label: "Actuation", value: "an electric or pressure signal opens the pilot valve" },
  { label: "Pressure relief", value: "regulate the entry and output ports of the main valve" },
  { label: "Flow systems", value: "economical for controlling high flow systems" },
]

const pneumaticOperatedSectionalDescription =
  "While pneumatic systems use pressured air or gases, hydraulic systems use pressurized liquids to provide fluid power. You can weigh aspects like cost-effectiveness, the materials that need to be moved, and the accessibility of supplies and room when choosing between the two."

const pneumaticOperatedSectionalFeatures = [
  "While pneumatic systems use pressured air or gases, hydraulic systems use pressurized liquids to provide fluid power.",
  "You can weigh aspects like cost-effectiveness, the materials that need to be moved, and the accessibility of supplies and room when choosing between the two.",
  "Directional control valves, a substitute for pneumatic valves, are frequently used to maintain constant pressure and differ the direction of airflow.",
]

const pneumaticOperatedSectionalSpecifications = [
  { label: "Pneumatic systems", value: "pressured air or gases" },
  { label: "Hydraulic systems", value: "pressurized liquids to provide fluid power" },
  { label: "Selection", value: "cost-effectiveness" },
  { label: "Materials", value: "the materials that need to be moved" },
  { label: "Accessibility", value: "accessibility of supplies and room" },
  { label: "Directional control", value: "maintain constant pressure and differ the direction of airflow" },
]

const electricOperatedSectionalDescription =
  "An electronically driven valve that regulates the flow of hydraulic fluid to a motors is known as an electrohydraulic servo valve (EHSV). Strong hydraulic cylinders are often controlled by servo valves using a tiny electrical signal."

const electricOperatedSectionalFeatures = [
  "The three most common types of hydraulic valves are:",
  "Directional control valves by Torque",
  "Pressure control valves By Torque",
  "Flow control valves By Torque",
]

const electricOperatedSectionalSpecifications = [
  { label: "Valve", value: "an electrohydraulic servo valve (EHSV)" },
  { label: "Hydraulic fluid", value: "regulates the flow of hydraulic fluid to a motors" },
  { label: "Servo control", value: "Strong hydraulic cylinders are often controlled by servo valves" },
  { label: "Signal", value: "a tiny electrical signal" },
  { label: "Medium", value: "a liquid medium—typically oil" },
  { label: "Spool", value: "affects the direction of the fuel flow" },
  { label: "Flow rate", value: "adjusting the energy transfer rate" },
]

const hydraulicControlSectionalDescription =
  "A valve that directs oil flow to hydraulic motors and cylinders is known as a sectional directional control valve. They're called switching valves a lot."

const hydraulicControlSectionalFeatures = [
  "Some characteristics of sectional directional control valves are as follows:",
  "They are able to hold ten spools.",
  "They can choose to mount primary relief valves, secondary relief valves,",
  "check valves, and anti-capitation check valves",
  "They have a compact construction design",
  "They have low pressure drop",
  "They are highly efficient",
]

const hydraulicControlSectionalSpecifications = [
  { label: "Model code", value: "SD8, SDS18, SD25 and SD400" },
  { label: "Number of sections", value: "1-14s, 1-12S, 1-12S and 1-10S" },
  { label: "Nom. Pressure", value: "16 MPa" },
  { label: "Max. Pressure", value: "31.5 MPa" },
  { label: "Nom. Flow rate", value: "80, 160, 240 and 400 L/min" },
  { label: "Back Pressure", value: "≤100 Bar" },
  { label: "Hydraulic Oil", value: "-20 ~ +80 °C, 10 ~ 400 mm2/S, ≤10 μm" },
]

const hydraulicControlSectionalTableRows = [
  ["SD8", "1-14s", "16", "31.5", "80", "≤100", "-20 ~ +80", "10 ~ 400", "≤10"],
  ["SDS18", "1-12S", "16", "31.5", "160", "≤100", "-20 ~ +80", "10 ~ 400", "≤10"],
  ["SD25", "1-12S", "16", "31.5", "240", "≤100", "-20 ~ +80", "10 ~ 400", "≤10"],
  ["SD400", "1-10S", "16", "31.5", "400", "≤100", "-20 ~ +80", "10 ~ 400", "≤10"],
]

const sectionalDirectionalControlDescription =
  "A mechanical component that regulates the direction of fluid flow in hydraulic systems is called a Torque sectional directional control valve. Another name for them is switching valves. It has unique design of working, inlet and outlet sections, which can be replaced as per requirement."

const sectionalDirectionalControlFeatures = [
  "Sectional valves are used for high flow and serviceability.",
  "Working sections 1 to 12",
  "Additional pilot relief and check option.",
  "Types of control: Manual control, Pneumatic control, Hydraulic (pilot) and electric control for optional.",
  "Among the characteristics of sectional directional control valves are the following:",
  "compact design",
  "low-level reduction in pressure",
  "better efficiency",
  "Directional control valves come in three main categories:",
  "Hydraulic check valves",
  "Directional spool valves",
  "Poppet valves",
]

const sectionalDirectionalControlSpecifications = [
  { label: "Model code", value: "SD8, SDS18, SD25 and SD400" },
  { label: "Working sections", value: "1 to 12" },
  { label: "Nom. Pressure", value: "16 MPa" },
  { label: "Max. Pressure", value: "31.5 MPa" },
  { label: "Nom. Flow rate", value: "80, 160, 240 and 400 L/min" },
  { label: "Back Pressure", value: "≤100 Bar" },
  { label: "Hydraulic Oil", value: "-20 ~ +80 °C, 10 ~ 400 mm2/S, ≤10 μm" },
]

function PilotOperatedSectionalApplicationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] px-5 py-16 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#111_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.45fr_1fr]">
        <div className="border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">How it works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Pilot-operated pressure relief</h2>
          <p className="mt-6 text-base leading-8 text-[#454545] sm:text-lg">Pressure relief valves known as pilot-operated valves regulate the entry and output ports of the main valve.</p>
          <p className="mt-4 text-base leading-8 text-[#454545] sm:text-lg">Though they are the best substitute for loaded with springs valves in terms of achieving the highest pressure and its limit, they are identical to them.</p>
          <p className="mt-4 text-base leading-8 text-[#454545] sm:text-lg">The following are some advantages and characteristics of hydraulic valves:</p>
        </div>
        <div className="border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Where it performs</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Applications</h2>
          <p className="mt-6 text-base leading-8 text-[#454545] sm:text-lg">economical for controlling high flow systems</p>
        </div>
      </div>
    </section>
  )
}

function PneumaticOperatedSectionalApplicationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] px-5 py-16 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#111_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.45fr_1fr]">
        <div className="border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Directional control</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Constant-pressure control</h2>
          <p className="mt-6 text-base leading-8 text-[#454545] sm:text-lg">Directional control valves, a substitute for pneumatic valves, are frequently used to maintain constant pressure and differ the direction of airflow. Many uses call for their usage, such as:</p>
        </div>
        <div className="border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Where it performs</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Applications</h2>
          <p className="mt-6 text-base leading-8 text-[#454545] sm:text-lg"><strong>Oil and gas sector:</strong> Regulating petroleum and gas flow via pipes, processing procedures, and storage infrastructure</p>
          <p className="mt-4 text-base leading-8 text-[#454545] sm:text-lg"><strong>Safety systems:</strong> supplying a rapid cutoff in the event of anomalous conditions</p>
        </div>
      </div>
    </section>
  )
}

function ElectricOperatedSectionalApplicationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] px-5 py-16 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#111_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.45fr_1fr]">
        <div className="border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Hydraulic flow control</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Fluid direction and flow rate</h2>
          <p className="mt-6 text-base leading-8 text-[#454545] sm:text-lg">A hydraulic valve controls how a liquid medium—typically oil—flows through a hydraulic system. The location of a spool affects the direction of the fuel flow.</p>
          <p className="mt-4 text-base leading-8 text-[#454545] sm:text-lg">Hydraulic control valves manage the flow of fluid to allow for a variety of hydraulic system operations. The valve's design allows it to modify flow rate by adjusting the energy transfer rate.</p>
        </div>
        <div className="border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Where it performs</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Applications</h2>
          <p className="mt-6 text-base leading-8 text-[#454545] sm:text-lg">a variety of hydraulic system operations</p>
        </div>
      </div>
    </section>
  )
}

function HydraulicControlSectionalApplicationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] px-5 py-16 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#111_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.45fr_1fr]">
        <div className="border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Directional control</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Fluid power routing</h2>
          <p className="mt-6 text-base leading-8 text-[#454545] sm:text-lg">An essential part of every fluid power system are directional control valves. They are employed to regulate the hydraulic fluid's passage through a system. They are able to reroute the flow in various directions, for example, from the return line to the actuator or from the source to the actuator.</p>
          <p className="mt-4 text-base leading-8 text-[#454545] sm:text-lg">There are two primary factors to take into account when selecting a directional control valve: the quantity of fluid ports and the amount of directional states or positions the valve can accomplish.</p>
        </div>
        <div className="border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Where it performs</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Applications</h2>
          <p className="mt-6 text-base leading-8 text-[#454545] sm:text-lg">hydraulic motors and cylinders</p>
        </div>
      </div>
    </section>
  )
}

function SectionalDirectionalControlApplicationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] px-5 py-16 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#111_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Where it performs</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Applications</h2>
          <p className="mt-6 text-base leading-8 text-[#454545] sm:text-lg">Sectional valves are used for high flow and serviceability.</p>
        </div>
      </div>
    </section>
  )
}

function ValveSpecificationsTable({ title, rows }: { title: string; rows: string[][] }) {
  return (
    <section
      className="relative overflow-hidden px-5 py-16 sm:px-8 lg:px-12"
      style={{ background: "linear-gradient(135deg, #fdf6f0 0%, #f9f4ef 40%, #f5f8ff 100%)" }}
    >
      <div className="relative mx-auto max-w-7xl space-y-12">
        <div className="max-w-3xl border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Where it performs</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Applications</h2>
          <p className="mt-6 text-base leading-8 text-[#454545] sm:text-lg">Used in agriculture machineries and special hydraulic machines.</p>
        </div>

        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-7 w-1 shrink-0 rounded-full bg-[#e05a2e]" aria-hidden />
            <h2 className="text-2xl font-extrabold tracking-tight text-[#0e1c35]">{title}</h2>
          </div>
          <div
            className="overflow-x-auto rounded-xl bg-white"
            style={{
              border: "1px solid #e2e8f0",
              borderTop: "3px solid #e05a2e",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06), 0 4px 24px rgba(224,90,46,0.06)",
            }}
          >
            <table className="pneumatic-specification-table min-w-[1050px] w-full border-collapse text-center text-sm">
              <thead>
                <tr style={{ background: "linear-gradient(90deg, #fff0eb 0%, #fff7f3 100%)", borderBottom: "1px solid #f4c4aa" }}>
                  <th rowSpan={3} className="border-r border-[#e2e8f0] px-2.5 py-2 text-center text-[9px] font-bold uppercase tracking-[0.12em] text-[#0e1c35]">Model Code</th>
                  <th rowSpan={3} className="border-r border-[#e2e8f0] px-2.5 py-2 text-center text-[9px] font-bold uppercase tracking-[0.12em] text-[#0e1c35]">Number of sections</th>
                  <th className="border-r border-[#e2e8f0] px-2.5 py-2 text-center text-[9px] font-bold uppercase tracking-[0.12em] text-[#0e1c35]">Nom. Pressure</th>
                  <th className="border-r border-[#e2e8f0] px-2.5 py-2 text-center text-[9px] font-bold uppercase tracking-[0.12em] text-[#0e1c35]">Max.Pressure</th>
                  <th className="border-r border-[#e2e8f0] px-2.5 py-2 text-center text-[9px] font-bold uppercase tracking-[0.12em] text-[#0e1c35]">Nom.Flow rate</th>
                  <th className="border-r border-[#e2e8f0] px-2.5 py-2 text-center text-[9px] font-bold uppercase tracking-[0.12em] text-[#0e1c35]">Back Pressure</th>
                  <th colSpan={3} className="px-2.5 py-2 text-center text-[9px] font-bold uppercase tracking-[0.12em] text-[#0e1c35]">Hydraulic Oil</th>
                </tr>
                <tr style={{ background: "linear-gradient(90deg, #fff0eb 0%, #fff7f3 100%)", borderBottom: "1px solid #f4c4aa" }}>
                  <th rowSpan={2} className="border-r border-[#e2e8f0] px-2.5 py-2 text-center text-[9px] font-bold uppercase tracking-[0.12em] text-[#0e1c35]">(MPa)</th>
                  <th rowSpan={2} className="border-r border-[#e2e8f0] px-2.5 py-2 text-center text-[9px] font-bold uppercase tracking-[0.12em] text-[#0e1c35]">(MPa)</th>
                  <th rowSpan={2} className="border-r border-[#e2e8f0] px-2.5 py-2 text-center text-[9px] font-bold uppercase tracking-[0.12em] text-[#0e1c35]">(L/min)</th>
                  <th rowSpan={2} className="border-r border-[#e2e8f0] px-2.5 py-2 text-center text-[9px] font-bold uppercase tracking-[0.12em] text-[#0e1c35]">(Bar)</th>
                  <th className="border-r border-[#e2e8f0] px-2.5 py-2 text-center text-[9px] font-bold uppercase tracking-[0.12em] text-[#0e1c35]">Tem. Range</th>
                  <th className="border-r border-[#e2e8f0] px-2.5 py-2 text-center text-[9px] font-bold uppercase tracking-[0.12em] text-[#0e1c35]">Visc. Range</th>
                  <th className="px-2.5 py-2 text-center text-[9px] font-bold uppercase tracking-[0.12em] text-[#0e1c35]">Filtrating Accuracy</th>
                </tr>
                <tr style={{ background: "linear-gradient(90deg, #fef8f5 0%, #fffaf8 100%)", borderBottom: "2px solid #e05a2e" }}>
                  <th className="border border-[#d9dcde] px-3 py-3 font-normal">(°C)</th>
                  <th className="border border-[#d9dcde] px-3 py-3 font-normal">(mm2/S)</th>
                  <th className="border border-[#d9dcde] px-3 py-3 font-normal">(μm)</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr key={row[0]} className="bsp-table-row" style={{ background: rowIndex % 2 === 0 ? "#ffffff" : "#fafbfc" }}>
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cell}
                        className={`border-b border-[#e2e8f0] px-2.5 py-2.5 text-center text-[11px] ${cellIndex < row.length - 1 ? "border-r" : ""} ${cellIndex === 0 ? "font-mono font-bold tracking-[0.04em] text-[#c0420a]" : "text-[#374151]"}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

function getProductsForCategory(slug: string) {
  if (slug === "monoblock-valves") return monoblockValveProducts
  if (slug === "sectional-valves") return sectionalValveProducts
  return []
}

export function generateStaticParams() {
  return [
    ...monoblockValveProducts.map(({ slug }) => ({ slug: "monoblock-valves", productSlug: slug })),
    ...sectionalValveProducts.map(({ slug }) => ({ slug: "sectional-valves", productSlug: slug })),
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; productSlug: string }> }): Promise<Metadata> {
  const { slug, productSlug } = await params
  const product = getProductsForCategory(slug).find((item) => item.slug === productSlug)
  return product ? { title: `${product.name} | Hydronex`, description: product.name } : {}
}

export default async function MobileControlValveProductPage({ params }: { params: Promise<{ slug: string; productSlug: string }> }) {
  const { slug, productSlug } = await params
  const products = getProductsForCategory(slug)
  const product = products.find((item) => item.slug === productSlug)
  if (!product) notFound()

  const otherProducts = products
    .filter((item) => item.slug !== product.slug)
    .map((item) => ({ ...item, shortName: item.name }))

  const isSectional = slug === "sectional-valves"
  const categoryName = isSectional ? "SECTIONAL VALVES" : "MONOBLOCK VALVES"
  const categoryHref = isSectional
    ? "/products/mobile-control-valve/sectional-valves"
    : "/products/mobile-control-valve/monoblock-valves"
  const isPneumaticMonoblockValve = product.slug === "torque-pneumatic-hydraulic-directional-control-valve"
  const isElectricAndManualMonoblockValve = product.slug === "torque-electric-and-manual-directional-control-valve"
  const isMonoblockDirectionalControlValve = product.slug === "torque-monoblock-directional-control-valve"
  const isPilotOperatedSectionalValve = product.slug === "torque-hydraulic-pilot-operated-sectional-control-valve"
  const isPneumaticOperatedSectionalValve = product.slug === "torque-hydraulic-sectional-type-pneumatic-operated-valve"
  const isElectricOperatedSectionalValve = product.slug === "torque-hydraulic-sectional-type-electric-operated-valve"
  const isHydraulicControlSectionalValve = product.slug === "torque-hydraulic-control-sectional-directional-control-valve"
  const isSectionalDirectionalControlValve = product.slug === "torque-sectional-directional-control-valve"
  const hasMonoblockTechnicalContent = isPneumaticMonoblockValve || isElectricAndManualMonoblockValve || isMonoblockDirectionalControlValve
  const specificationTitle = isMonoblockDirectionalControlValve
    ? "Torque Monoblock Valves Specifications"
    : isElectricAndManualMonoblockValve
    ? "Torque Electric and pneumatic Directional Control Valve"
    : "Torque Pneumatic Hydraulic Directional Control Valve"

  return (
    <>
      <BSPProductDetail
        editorialHero
        categoryName={categoryName}
        categoryHref={categoryHref}
        parentCategoryName="Mobile Control Valve"
        parentCategoryHref="/products/mobile-control-valve"
        product={{
          name: product.name,
          shortName: product.name,
          slug: product.slug,
          image: product.image,
          description: hasMonoblockTechnicalContent
            ? pneumaticValveDescription
            : isPilotOperatedSectionalValve
            ? pilotOperatedSectionalDescription
            : isPneumaticOperatedSectionalValve
            ? pneumaticOperatedSectionalDescription
            : isElectricOperatedSectionalValve
            ? electricOperatedSectionalDescription
            : isHydraulicControlSectionalValve
            ? hydraulicControlSectionalDescription
            : isSectionalDirectionalControlValve
            ? sectionalDirectionalControlDescription
            : product.name,
          features: hasMonoblockTechnicalContent
            ? pneumaticValveFeatures
            : isPilotOperatedSectionalValve
            ? pilotOperatedSectionalFeatures
            : isPneumaticOperatedSectionalValve
            ? pneumaticOperatedSectionalFeatures
            : isElectricOperatedSectionalValve
            ? electricOperatedSectionalFeatures
            : isHydraulicControlSectionalValve
            ? hydraulicControlSectionalFeatures
            : isSectionalDirectionalControlValve
            ? sectionalDirectionalControlFeatures
            : [],
          specs: hasMonoblockTechnicalContent
            ? pneumaticValveSpecifications
            : isPilotOperatedSectionalValve
            ? pilotOperatedSectionalSpecifications
            : isPneumaticOperatedSectionalValve
            ? pneumaticOperatedSectionalSpecifications
            : isElectricOperatedSectionalValve
            ? electricOperatedSectionalSpecifications
            : isHydraulicControlSectionalValve
            ? hydraulicControlSectionalSpecifications
            : isSectionalDirectionalControlValve
            ? sectionalDirectionalControlSpecifications
            : [],
          applications: [],
        }}
        additionalSpecificationSection={
          hasMonoblockTechnicalContent
            ? <ValveSpecificationsTable title={specificationTitle} rows={monoblockValveTableRows} />
            : isPilotOperatedSectionalValve
            ? <PilotOperatedSectionalApplicationsSection />
            : isPneumaticOperatedSectionalValve
            ? <PneumaticOperatedSectionalApplicationsSection />
            : isElectricOperatedSectionalValve
            ? <ElectricOperatedSectionalApplicationsSection />
            : isHydraulicControlSectionalValve
            ? <>
                <HydraulicControlSectionalApplicationsSection />
                <ValveSpecificationsTable title="Torque Sectional Valves Specifications" rows={hydraulicControlSectionalTableRows} />
              </>
            : isSectionalDirectionalControlValve
            ? <>
                <SectionalDirectionalControlApplicationsSection />
                <ValveSpecificationsTable title="Torque Sectional Valves Specifications" rows={hydraulicControlSectionalTableRows} />
              </>
            : null
        }
        otherProductsSection={
          <>
            <BSPOtherProducts
              products={otherProducts}
              basePath={categoryHref}
              categoryLabel={categoryName}
            />
            <BSPCtaSection
              title={`Let’s specify the right ${isSectional ? "sectional" : "monoblock"} valve.`}
              description={product.name}
              buttonLabel="Talk to our team"
              ctaHref="/contact"
            />
          </>
        }
      />
      <LikedProductsDrawer />
      <LikedProductsFAB />
    </>
  )
}
