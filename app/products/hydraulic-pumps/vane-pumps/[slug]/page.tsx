import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { BSPOtherProducts } from "@/components/bsp-other-products"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import { vanePumpProducts } from "@/lib/hydraulic-pumps"

const pv2rDoubleFixedVanePumpContent = {
  description:
    "Torque PV2R double vane pumps are used for various Industrial and mobile hydraulic application. They have low noise and high volumetric efficiencies. Interchangeability of pump cartridges allow easy maintenance and reduce machine down time.",
  features: [
    "Displacement from 6 to 237 cc",
    "Low noise and high volumetric efficiency",
    "Compact Size",
    "Interchangeability of cartridge kits",
    "Can be converted to Clock or Anti-clockwise rotation",
  ],
  specs: [
    { label: "Displacement", value: "6 to 237 cc" },
    { label: "Noise & efficiency", value: "Low noise and high volumetric efficiency" },
    { label: "Size", value: "Compact Size" },
    { label: "Cartridge kits", value: "Interchangeability of cartridge kits" },
    { label: "Rotation", value: "Can be converted to Clock or Anti-clockwise rotation" },
  ],
}

const pv2rSingleFixedVanePumpContent = {
  description:
    "The hydraulic PV2R series single fixed vane pump gets used in mobile and industrial applications. It is a low-noise, high-pressure pump that may be used for a number of items, including.",
  features: [
    "displacement between 6 and 237 cc",
    "a low noise level and great volumetric efficiency Changeable cartridge kits in a small size Adaptable to either a counterclockwise or clockwise rotation.",
    "capacity ranging from 6 to 237 cc",
    "Low noise and excellent volumetric effectiveness small size.",
    "The ability to swap out cartridge kits",
    "Adaptable to clockwise or counterclockwise rotation.",
  ],
  specs: [],
}

const tvpDoubleVariableVanePumpContent = {
  description:
    "Torque makes the TVP Series Double Variable Vane Pump, a hydraulic pump. A dual displacement pump, permits flow to run multiple circuits. The top flow rate for the TVP Series is 40 lpm.",
  features: [
    "Power saving and Low noise pumps.",
    "High volumetric efficiency.",
    "Provide smooth running and stable operation particular suitable for machine tools.",
    "These pumps are popularly used in automobile and CNC machinery.",
  ],
  specs: [],
}

const tvpDoubleVariableModelCodes = [
  "TVP-8-8",
  "TVP-12-12",
  "TVP-20-20",
  "TVP-25-25",
  "TVP-30-30",
  "TVP-40-40",
  "TVP-45-45",
]

const tvpDoubleVariableTableRows = [
  { code: "TVP-8-8", shaftSidePump: "8", coverSidePump: "8" },
  { code: "TVP-12-12", shaftSidePump: "12", coverSidePump: "12" },
  { code: "TVP-20-20", shaftSidePump: "20", coverSidePump: "20" },
  { code: "TVP-25-25", shaftSidePump: "25", coverSidePump: "25" },
  { code: "TVP-30-30", shaftSidePump: "30", coverSidePump: "30" },
  { code: "TVP-40-40", shaftSidePump: "40", coverSidePump: "40" },
]

function TVPDoubleVariableVanePumpSpecificationSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-white py-14" style={{ backgroundImage: "radial-gradient(circle at 8% 15%, rgba(143,213,208,0.16), transparent 24%), radial-gradient(circle at 88% 82%, rgba(242,101,34,0.08), transparent 24%)" }}>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="h-7 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden />
          <h2 className="text-2xl font-bold text-[#143126]">Specifications</h2>
        </div>
        <p className="mt-3 text-lg font-medium leading-relaxed text-[#143126]">The TVP Series Double Variable Vane Pump has the following specifications:</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {tvpDoubleVariableModelCodes.map((code) => <span key={code} className="rounded-full border border-[#f26522]/25 bg-white px-3 py-1.5 text-xs font-bold text-[#143126] transition-transform hover:-translate-y-0.5">{code}</span>)}
        </div>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.12em] text-[#61786e]">TVP Series Double Variable Vane Pump Specifications</p>
        <div className="mt-4 overflow-x-auto border border-[#d5e1e8] bg-white shadow-[0_12px_28px_rgba(20,49,38,0.08)]">
          <table className="min-w-[760px] w-full border-collapse text-sm text-[#143126]">
            <thead className="bg-[#f7fafb] text-[10px] font-bold uppercase tracking-wide text-[#143126]">
              <tr className="border-b border-[#d5e1e8]">
                <th rowSpan={2} className="border-r border-[#d5e1e8] px-4 py-4 text-center">Model Code</th>
                <th colSpan={2} className="border-r border-[#d5e1e8] px-4 py-3 text-center">No-Load Delivery<br />l/min (1800 r.p.m)</th>
                <th colSpan={2} className="border-r border-[#d5e1e8] px-4 py-3 text-center">Speed<br />r.p.m</th>
                <th rowSpan={2} className="px-4 py-4 text-center">Weight kg</th>
              </tr>
              <tr className="border-b border-[#d5e1e8]">
                <th className="border-r border-[#d5e1e8] px-4 py-3 text-center">Shaft side pump</th>
                <th className="border-r border-[#d5e1e8] px-4 py-3 text-center">Cover side pump</th>
                <th className="border-r border-[#d5e1e8] px-4 py-3 text-center">Max.</th>
                <th className="border-r border-[#d5e1e8] px-4 py-3 text-center">Min.</th>
              </tr>
            </thead>
            <tbody>
              {tvpDoubleVariableTableRows.map((row, index) => (
                <tr key={row.code} className="border-b border-[#e2e8f0] last:border-b-0 transition-colors hover:bg-[#fff7f3]">
                  <td className="border-r border-[#e2e8f0] px-4 py-2.5 text-center font-medium">{row.code}</td>
                  <td className="border-r border-[#e2e8f0] px-4 py-2.5 text-center">{row.shaftSidePump}</td>
                  <td className="border-r border-[#e2e8f0] px-4 py-2.5 text-center">{row.coverSidePump}</td>
                  {index === 0 ? <td rowSpan={6} className="border-r border-[#e2e8f0] px-4 py-2.5 text-center align-middle">1800</td> : null}
                  {index === 0 ? <td rowSpan={6} className="border-r border-[#e2e8f0] px-4 py-2.5 text-center align-middle">800</td> : null}
                  {index === 0 ? <td rowSpan={4} className="px-4 py-2.5 text-center align-middle">9.5</td> : null}
                  {index === 4 ? <td rowSpan={2} className="px-4 py-2.5 text-center align-middle">16.5</td> : null}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-xl border border-[#143126]/10 border-l-[3px] border-l-[#f26522] bg-white/70 px-5 py-5 shadow-[0_10px_24px_rgba(20,49,38,0.08)] sm:px-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#f26522]">Description</p>
          <div className="mt-3 space-y-2 text-sm leading-relaxed text-[#143126]/80">
            <p>High Efficiency and Low Noise Variable Vane Pumps Displacement: 8- 40 cc/rev</p>
            <p><strong className="text-[#143126]">Type:</strong> Single / Double</p>
            <p><strong className="text-[#143126]">Max Pressure:</strong> 70 bars</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TVPDoubleVariableVanePumpWorkingSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl border-l-[3px] border-[#f26522] pl-5">
          <h2 className="text-2xl font-bold text-[#143126]">Working of double variable vane pump:</h2>
          <p className="mt-5 text-sm leading-relaxed text-[#143126]/80">The rotating motion of several sliding vanes is how vane pumps operate to move fluid. The housing for the vanes has a cam-like form. Centrifugal force, hydraulic pressure, and fluid rods all work together to expand each vane to the casing wall as the rotor revolves. As a result, the inlet side of the pump develops a wider opening, which increases to generate a vacuum that draws liquid within the pump.</p>
        </div>
      </div>
    </section>
  )
}

const tvpSingleVariableVanePumpContent = {
  description:
    "A line of variable pumps with AC power is called the TVP series. The TVP series consists of the TVP1-08, TVP1-12, TVP1-15, .... So on till TVP1-45 models. A vane pump is a positive displacement, self-priming pump that delivers continuous flow with various pressures. The longest and the lowest distances the vanes may be extended, in addition to their length, impact how much fluid a vane pump can pump.",
  features: [],
  specs: [],
}

const tvpSingleVariableTableRows = [
  { code: "TVP-12", delivery: "8" },
  { code: "TVP-15", delivery: "12" },
  { code: "TVP-20", delivery: "20" },
  { code: "TVP-25", delivery: "25" },
  { code: "TVP-30", delivery: "30" },
  { code: "TVP-40", delivery: "40" },
]

function TVPSingleVariableVanePumpSpecificationSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-white py-14" style={{ backgroundImage: "radial-gradient(circle at 8% 15%, rgba(143,213,208,0.16), transparent 24%), radial-gradient(circle at 88% 82%, rgba(242,101,34,0.08), transparent 24%)" }}>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="h-7 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden />
          <h2 className="text-2xl font-bold text-[#143126]">Specifications</h2>
        </div>
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#61786e]">TVP Series Single Variable Vane Pump Specifications</p>
        <div className="mt-5 overflow-x-auto border border-[#d5e1e8] bg-white shadow-[0_12px_28px_rgba(20,49,38,0.08)]">
          <table className="min-w-[760px] w-full border-collapse text-sm text-[#143126]">
            <thead className="bg-[#f7fafb] text-[10px] font-bold uppercase tracking-wide text-[#143126]">
              <tr className="border-b border-[#d5e1e8]">
                <th rowSpan={2} className="border-r border-[#d5e1e8] px-4 py-4 text-center">Model Code</th>
                <th rowSpan={2} className="border-r border-[#d5e1e8] px-4 py-4 text-center">No-Load Delivery<br />l/min<br />(1800 r.p.m)</th>
                <th rowSpan={2} className="border-r border-[#d5e1e8] px-4 py-4 text-center">Pressure Adj. Range<br />kgf/cm2</th>
                <th colSpan={2} className="border-r border-[#d5e1e8] px-4 py-3 text-center">Speed r.p.m</th>
                <th rowSpan={2} className="px-4 py-4 text-center">Weight kg</th>
              </tr>
              <tr className="border-b border-[#d5e1e8]">
                <th className="border-r border-[#d5e1e8] px-4 py-3 text-center">Max.</th>
                <th className="border-r border-[#d5e1e8] px-4 py-3 text-center">Min.</th>
              </tr>
            </thead>
            <tbody>
              {tvpSingleVariableTableRows.map((row, index) => (
                <tr key={row.code} className="border-b border-[#e2e8f0] last:border-b-0 transition-colors hover:bg-[#fff7f3]">
                  <td className="border-r border-[#e2e8f0] px-4 py-2.5 text-center font-medium">{row.code}</td>
                  <td className="border-r border-[#e2e8f0] px-4 py-2.5 text-center">{row.delivery}</td>
                  {index === 0 ? <td rowSpan={6} className="border-r border-[#e2e8f0] px-4 py-2.5 text-center align-middle leading-relaxed">A:8-18<br />B:15-35<br />C:30-55<br />D:50-70</td> : null}
                  {index === 0 ? <td rowSpan={6} className="border-r border-[#e2e8f0] px-4 py-2.5 text-center align-middle">1800</td> : null}
                  {index === 0 ? <td rowSpan={6} className="border-r border-[#e2e8f0] px-4 py-2.5 text-center align-middle">800</td> : null}
                  {index === 0 ? <td rowSpan={3} className="px-4 py-2.5 text-center align-middle">5.6</td> : null}
                  {index === 3 ? <td rowSpan={3} className="px-4 py-2.5 text-center align-middle">9.5</td> : null}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-xl border border-[#143126]/10 border-l-[3px] border-l-[#f26522] bg-white/70 px-5 py-5 shadow-[0_10px_24px_rgba(20,49,38,0.08)] sm:px-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#f26522]">Description</p>
          <div className="mt-3 space-y-2 text-sm leading-relaxed text-[#143126]/80">
            <p>High Efficiency and Low Noise Variable Vane Pumps <strong className="text-[#143126]">Displacement:</strong> 8- 40 cc/rev</p>
            <p><strong className="text-[#143126]">Type:</strong> Single / Double</p>
            <p><strong className="text-[#143126]">Max Pr:</strong> 140 bar</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TVPSingleVariableVanePumpConsiderationsSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl border-l-[3px] border-[#f26522] pl-5">
          <h2 className="text-2xl font-bold leading-snug text-[#143126]">What things do I need to consider before buying a TVP Series Single Variables Vane Pump?</h2>
          <p className="mt-6 text-lg font-semibold text-[#143126]">• &nbsp; TVP Series Single Variables Vane Pump</p>
          <p className="mt-4 text-sm leading-relaxed text-[#143126]/80">Vane pumps usually operate at pressures between 70 and 140 bar. But the working pressure of specially designed vane pumps can go above 200 bar and even approach 300 bar.</p>
          <p className="mt-10 text-lg font-medium leading-relaxed text-[#143126]">We supply all industrial sizes Equivalent to Yuken RV20-SF | Rexroth PV7-2X/20-25 RA01MA0-05 VARIABLE PUMP | Nachi Variable Vane Pump -VDC-2B-2A3-20 | Anson Hydraulic Variable Vane Pump PVF 20 and many more.</p>
        </div>
      </div>
    </section>
  )
}

type PV2RSpecRow = { model: string; displacement: string }
type PV2RPressureBand = { start: number; span: number; value: string }

const pv2rSpecificationGroups: Array<{
  rows: PV2RSpecRow[]
  lowSpeed: string
  flangeWeight: string
  footWeight: string
  pressureBands: PV2RPressureBand[]
}> = [
  {
    rows: [
      { model: "PV2R1-6", displacement: "5.8" },
      { model: "PV2R1-8", displacement: "8" },
      { model: "PV2R1-10", displacement: "9.4" },
      { model: "PV2R1-12", displacement: "12.2" },
      { model: "PV2R1-14", displacement: "13.7" },
      { model: "PV2R1-17", displacement: "16.6" },
      { model: "PV2R1-19", displacement: "18.6" },
      { model: "PV2R1-23", displacement: "22.7" },
      { model: "PV2R1-25", displacement: "25.3" },
      { model: "PV2R1-31", displacement: "31" },
    ],
    lowSpeed: "750",
    flangeWeight: "9",
    footWeight: "11.2",
    pressureBands: [
      { start: 0, span: 5, value: "175" },
      { start: 5, span: 4, value: "210" },
      { start: 9, span: 1, value: "175" },
    ],
  },
  {
    rows: [
      { model: "PV2R2-22", displacement: "22" },
      { model: "PV2R2-26", displacement: "26.6" },
      { model: "PV2R2-33", displacement: "33.3" },
      { model: "PV2R2-38", displacement: "37.9" },
      { model: "PV2R2-41", displacement: "41" },
      { model: "PV2R2-47", displacement: "46.9" },
      { model: "PV2R2-53", displacement: "52.3" },
      { model: "PV2R2-59", displacement: "60" },
      { model: "PV2R2-65", displacement: "65" },
      { model: "PV2R2-75", displacement: "74.8" },
    ],
    lowSpeed: "600",
    flangeWeight: "19",
    footWeight: "23.3",
    pressureBands: [
      { start: 0, span: 8, value: "210" },
      { start: 8, span: 1, value: "175" },
      { start: 9, span: 1, value: "140" },
    ],
  },
  {
    rows: [
      { model: "PV2R3-66", displacement: "66.3" },
      { model: "PV2R3-76", displacement: "76.4" },
      { model: "PV2R3-94", displacement: "93.6" },
      { model: "PV2R3-116", displacement: "115.6" },
      { model: "PV2R3-125", displacement: "125" },
    ],
    lowSpeed: "600",
    flangeWeight: "36.7",
    footWeight: "46.7",
    pressureBands: [
      { start: 0, span: 3, value: "210" },
      { start: 3, span: 1, value: "175" },
      { start: 4, span: 1, value: "140" },
    ],
  },
  {
    rows: [
      { model: "PV2R4-136", displacement: "136" },
      { model: "PV2R4-153", displacement: "153" },
      { model: "PV2R4-184", displacement: "184" },
      { model: "PV2R4-200", displacement: "201" },
      { model: "PV2R4-237", displacement: "237" },
    ],
    lowSpeed: "600",
    flangeWeight: "68.5",
    footWeight: "93.5",
    pressureBands: [{ start: 0, span: 5, value: "175" }],
  },
]

function PV2RSpecificationTable({
  rows,
  lowSpeed,
  flangeWeight,
  footWeight,
  pressureBands,
}: (typeof pv2rSpecificationGroups)[number]) {
  return (
    <div className="overflow-x-auto border border-[#d5e1e8] bg-white shadow-[0_12px_28px_rgba(20,49,38,0.08)]">
      <table className="min-w-[740px] w-full border-collapse text-sm text-[#143126]">
        <thead className="bg-[#f7fafb] text-[10px] font-bold uppercase tracking-wide text-[#143126]">
          <tr className="border-b border-[#d5e1e8]">
            <th rowSpan={2} className="border-r border-[#d5e1e8] px-4 py-4 text-center">Model Number</th>
            <th rowSpan={2} className="border-r border-[#d5e1e8] px-4 py-4 text-center">Displacement</th>
            <th colSpan={2} className="border-r border-[#d5e1e8] px-4 py-3 text-center">Speed RPM</th>
            <th rowSpan={2} className="border-r border-[#d5e1e8] px-4 py-4 text-center">Maxi. Pressure</th>
            <th colSpan={2} className="px-4 py-3 text-center">Weight</th>
          </tr>
          <tr className="border-b border-[#d5e1e8]">
            <th className="border-r border-[#d5e1e8] px-4 py-3 text-center">Maximum</th>
            <th className="border-r border-[#d5e1e8] px-4 py-3 text-center">Low</th>
            <th className="border-r border-[#d5e1e8] px-4 py-3 text-center">Flange Type</th>
            <th className="px-4 py-3 text-center">Foot Type</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const pressureBand = pressureBands.find((band) => band.start === index)
            return (
              <tr key={row.model} className="border-b border-[#e2e8f0] last:border-b-0 transition-colors hover:bg-[#fff7f3]">
                <td className="border-r border-[#e2e8f0] px-4 py-2.5 text-center font-medium">{row.model}</td>
                <td className="border-r border-[#e2e8f0] px-4 py-2.5 text-center">{row.displacement}</td>
                {index === 0 ? <td rowSpan={rows.length} className="border-r border-[#e2e8f0] px-4 py-2.5 text-center align-middle">1800</td> : null}
                {index === 0 ? <td rowSpan={rows.length} className="border-r border-[#e2e8f0] px-4 py-2.5 text-center align-middle">{lowSpeed}</td> : null}
                {pressureBand ? <td rowSpan={pressureBand.span} className="border-r border-[#e2e8f0] px-4 py-2.5 text-center align-middle">{pressureBand.value}</td> : null}
                {index === 0 ? <td rowSpan={rows.length} className="border-r border-[#e2e8f0] px-4 py-2.5 text-center align-middle">{flangeWeight}</td> : null}
                {index === 0 ? <td rowSpan={rows.length} className="px-4 py-2.5 text-center align-middle">{footWeight}</td> : null}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function PV2RSingleFixedVanePumpSpecificationSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-white py-14" style={{ backgroundImage: "radial-gradient(circle at 8% 15%, rgba(143,213,208,0.16), transparent 24%), radial-gradient(circle at 88% 82%, rgba(242,101,34,0.08), transparent 24%)" }}>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="h-7 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden />
          <h2 className="text-2xl font-bold text-[#143126]">Specifications</h2>
        </div>
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#61786e]">PV2R Series Single Fixed Vane Pump Specifications</p>
        <div className="mt-8 space-y-6">
          {pv2rSpecificationGroups.map((group, index) => <PV2RSpecificationTable key={index} {...group} />)}
        </div>
        <p className="mt-4 text-sm font-medium text-[#f26522]">Note: When working pressure is over 160, please keep its RPM at over 1450.</p>
        <div className="mt-12 border-l-[3px] border-[#f26522] pl-5">
          <h2 className="text-2xl font-bold text-[#143126]">Fixed vane pumps operate by:</h2>
          <div className="mt-5 grid gap-3 text-sm leading-relaxed text-[#143126]/80 sm:grid-cols-2">
            {[
              "positioning a rotor close to the cam's wall.",
              "On the other wall, create a crescent-shaped cavity.",
              "Each vane in the rotor slot should be extended to the casing wall.",
              "Creating an expanding cavity on the inlet side, resulting in a vacuum that draws liquid into the pump.",
            ].map((step) => <p key={step} className="rounded-lg border border-[#143126]/10 bg-white/70 px-4 py-3 shadow-sm">{step}</p>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export function generateStaticParams() {
  return vanePumpProducts.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = vanePumpProducts.find((item) => item.slug === slug)
  return product ? { title: `${product.name} | Hydronex`, description: product.name } : {}
}

export default async function VanePumpProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = vanePumpProducts.find((item) => item.slug === slug)
  if (!product) notFound()

  const otherProducts = vanePumpProducts
    .filter((item) => item.slug !== product.slug)
    .map((item) => ({ ...item, shortName: item.name }))
  const isPV2RDoubleFixedVanePump = product.slug === "torque-pv2r-series-double-fixed-vane-pump"
  const isPV2RSingleFixedVanePump = product.slug === "torque-pv2r-series-single-fixed-vane-pump"
  const isTVPDoubleVariableVanePump = product.slug === "torque-tvp-series-double-variable-vane-pump"
  const isTVPSingleVariableVanePump = product.slug === "torque-tvp-series-single-variables-vane-pump"
  const productContent = isPV2RDoubleFixedVanePump
    ? pv2rDoubleFixedVanePumpContent
    : isPV2RSingleFixedVanePump
      ? pv2rSingleFixedVanePumpContent
      : isTVPDoubleVariableVanePump
        ? tvpDoubleVariableVanePumpContent
        : isTVPSingleVariableVanePump
          ? tvpSingleVariableVanePumpContent
          : { description: product.name, features: [], specs: [] }

  return (
    <>
      <BSPProductDetail
        editorialHero
        categoryName="Vane Pumps"
        categoryHref="/products/hydraulic-pumps/vane-pumps"
        parentCategoryName="Hydraulic Pumps"
        parentCategoryHref="/products/hydraulic-pumps"
        featureHeading={isPV2RSingleFixedVanePump ? "Features:" : isTVPDoubleVariableVanePump ? "TVP single Variable Vane pump features:" : undefined}
        additionalSpecificationSection={isPV2RSingleFixedVanePump ? <PV2RSingleFixedVanePumpSpecificationSection /> : isTVPDoubleVariableVanePump ? <TVPDoubleVariableVanePumpSpecificationSection /> : isTVPSingleVariableVanePump ? <TVPSingleVariableVanePumpSpecificationSection /> : null}
        product={{
          name: product.name,
          shortName: product.name,
          slug: product.slug,
          image: product.image,
          description: productContent.description,
          features: productContent.features,
          specs: productContent.specs,
          applications: [],
          application: isPV2RDoubleFixedVanePump
            ? "Machinery Repair Shops, Garment Shops, Building Material Shops, Manufacturing Plant, Farms, Retail, Food Shop, Construction works, Energy & Mining, Food & Beverage Factory."
            : undefined,
          applicationHeading: isPV2RDoubleFixedVanePump
            ? "Application of Torque PV2R series double fixed vane pump:"
            : undefined,
        }}
        otherProductsSection={
          <>
            {isTVPDoubleVariableVanePump ? <TVPDoubleVariableVanePumpWorkingSection /> : null}
            {isTVPSingleVariableVanePump ? <TVPSingleVariableVanePumpConsiderationsSection /> : null}
            <BSPOtherProducts
              products={otherProducts}
              basePath="/products/hydraulic-pumps/vane-pumps"
              categoryLabel="Vane Pumps"
            />
            <BSPCtaSection
              title="Let's specify the right vane pump."
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
