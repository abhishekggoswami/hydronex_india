import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { BSPOtherProducts } from "@/components/bsp-other-products"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import { gearPumpProducts } from "@/lib/hydraulic-pumps"

const castIronGearPumpContent = {
  description:
    "Every part of the D-Series is created to be as effective, dependable, durable, and reliable as possible in heavy-duty applications. It can operate continuously under demanding duty cycles and temperature conditions while yet maintaining an industry-leading package size and power density. Thanks to its wide selection of shaft drives, integrated valves, and options for side or rear ports, the D-Series offers excellent flexibility in system design. It can be used for a wide range of applications because to its adaptability and simplicity. Our Torque cast iron gear pumps offer exceptional power density in a tiny package & are 20% smaller than typical gear products.",
  features: [
    "Design of thrust plates for high efficiency over a broad temperature range",
    "Bushings with Teflon® coating for increased durability in extreme temperatures and high-pressure environments",
    "Torque Cast iron construction with high strength for effective functioning in sustained use",
    "The compact, power-dense form provides for simple installation in optimized equipment.",
    "Viton® seals are required for enhanced temperature and fluid capabilities.",
    "Multiple options for connected valves",
  ],
  specs: [
    { label: "Series", value: "D-Series" },
    { label: "Application", value: "Heavy-duty applications" },
    { label: "Operation", value: "Continuous operation under demanding duty cycles and temperature conditions" },
    { label: "Package", value: "Industry-leading package size and power density" },
    { label: "Design options", value: "Shaft drives, integrated valves, and side or rear ports" },
    { label: "Size", value: "20% smaller than typical gear products" },
  ],
}

const ciphPumpContent = {
  description: "Torque CIPH-40 63 | 80 | 100CC Pump",
  features: [
    "High Strength Cast Iron Body",
    "High Performance Sealing Parts, suitable for environment -20°C–+120°C ☆ A variety of input shaft styles and spline styles are available",
    "Various types of oil ports, customizable oil inlet and outlet methods",
    "Customizable Oil port connection types.",
  ],
  specs: [
    { label: "Body", value: "High Strength Cast Iron Body" },
    { label: "Sealing parts", value: "High Performance Sealing Parts" },
    { label: "Environment", value: "-20°C–+120°C" },
    { label: "Shaft styles", value: "A variety of input shaft styles and spline styles are available" },
    { label: "Oil ports", value: "Customizable oil inlet and outlet methods" },
    { label: "Connection", value: "Customizable Oil port connection types." },
  ],
}

const ciphRows = [
  ["CIPH -063", "63cc/rpm", "136mm", "204mm", "45mm", "G 1", "45mm", "G1"],
  ["CIPH -080", "80cc/rpm", "141mm", "213mm", "55mm", "G11 / 4", "55mm", "G11 / 4"],
  ["CIPH -090", "90cc/rpm", "149mm", "219mm", "55mm", "G11 / 4", "55mm", "G11 / 4"],
  ["CIPH -100", "100cc/rpm", "149mm", "219mm", "55mm", "G11 / 4", "55mm", "G11 / 4"],
  ["CIPH -110", "110cc/rpm", "149mm", "219mm", "55mm", "G11 / 4", "55mm", "G11 / 4"],
  ["CIPH -120", "120cc/rpm", "147mm", "223mm", "55mm", "G11 / 4", "55mm", "G11 / 4"],
]

const onePSeriesContent = {
  description: "Torque Hydraulic Gear pumps 1P series are aluminum body gear pumps with high efficiency and long use life. They are designed with special aluminum alloys and covers are made of high grade cast iron to avoid deformation at high pressure.",
  features: [
    "Maximum working pressure: 200 bar",
    "Speed: 1440 rpm",
    "Temperature: 250 degree Celsius",
    "Shaft diameter: 3/4 inch",
    "Motor power: 2 HP",
    "Here are some 1P hydraulic gear pumps:",
    "Boss Hydraulic Gear Pump 1P BHP 28: 13.1 Lpm",
    "Plain Shaft 1P Series Dowty Gear Pump: 200 Bar",
    "Dowty 1P 3028 CPSTB Hydraulic Gear Pump: 207 Bar, 12.7 Lpm",
    "Dowty Gear Pump 1P 4017: AC Powered, 207",
    "Hydrostar Hydraulic Gear Pump 1P Series: AC Powered, Electric",
  ],
  specs: [
    { label: "Maximum working pressure", value: "200 bar" },
    { label: "Speed", value: "1440 rpm" },
    { label: "Temperature", value: "250 degree Celsius" },
    { label: "Shaft diameter", value: "3/4 inch" },
    { label: "Motor power", value: "2 HP" },
  ],
}

const onePSeriesRows = [
  ["1017", "0.31", "5.14", "1.7", "7.7", "200", "250", "3000"],
  ["1020", "0.43", "7.03", "2", "9.1", "200", "250", "3000"],
  ["1028", "0.58", "9.46", "2.8", "12.7", "200", "250", "3000"],
  ["1036", "0.73", "11.9", "3.6", "16.4", "200", "250", "3000"],
  ["1044", "0.88", "14.33", "4.4", "20", "200", "250", "3000"],
  ["1052", "1.02", "16.77", "5.2", "23.6", "200", "250", "3000"],
  ["1060", "1.17", "19.22", "6", "27.3", "200", "250", "3000"],
  ["1072", "1.4", "22.84", "7.2", "32.7", "160", "250", "2500"],
  ["1090", "1.72", "28.12", "9", "40.9", "160", "250", "2000"],
]

function OnePSeriesSpecificationSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-[#f7f8f6] py-14 sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(242,101,34,0.1),transparent_25%),radial-gradient(circle_at_90%_78%,rgba(63,108,140,0.14),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-7 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden />
          <h2 className="text-2xl font-bold text-[#143126]">Torque Hydraulic Gear Pump - 1P Series Specifications</h2>
        </div>
        <div className="overflow-x-auto rounded-xl border border-[#e2e8f0] border-t-[3px] border-t-[#e05a2e] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_24px_rgba(224,90,46,0.06)]">
          <table className="min-w-[900px] w-full border-collapse text-sm">
            <thead className="bg-[linear-gradient(90deg,#fff0eb_0%,#fff7f3_100%)] text-[#0e1c35]">
              <tr>
                <th rowSpan={2} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold">Model No.</th>
                <th colSpan={2} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold">Theoretical Displacement</th>
                <th colSpan={2} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold">Nominal Delivery at 1450 rev / min</th>
                <th colSpan={2} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold">rated pressure (bar)</th>
                <th rowSpan={2} className="border-b border-[#f4c4aa] px-3 py-3 text-center font-bold">Max speed at max Pressure rev/ min</th>
              </tr>
              <tr>
                {["in3/rev", "cm3/rev", "Imp gal/ min", "l / min", "rated", "max"].map((heading) => (
                  <th key={heading} className="border-b border-r border-[#f4c4aa] px-3 py-2 text-center font-bold">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {onePSeriesRows.map((row, index) => (
                <tr key={row[0]} className="transition-colors hover:bg-[#fff7f3]" style={{ background: index % 2 === 0 ? "#ffffff" : "#fafbfc" }}>
                  {row.map((value, valueIndex) => (
                    <td key={`${value}-${valueIndex}`} className="border-b border-r border-[#e2e8f0] px-3 py-2.5 text-center last:border-r-0">{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-14 -mx-4 border-y border-[#d8e5ee] bg-[#f4f9fd] px-4 py-10 sm:-mx-6 sm:px-6 sm:py-12 lg:-mx-8 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="h-9 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden />
            <h2 className="text-[clamp(1.65rem,3vw,2.15rem)] font-bold tracking-[-0.035em] text-[#143126]">Dimensional Data</h2>
          </div>
          <div className="group mt-10 overflow-hidden border border-[#d4e2ec] bg-white p-5 transition-shadow duration-300 hover:shadow-[0_18px_38px_rgba(20,49,38,0.1)] sm:p-8 lg:p-12">
            <Image
              src="/images/hydraulic-pumps/gear-pumps/torque-hydraulic-gear-pump-1p-series-dimensional-data.png"
              alt="Torque Hydraulic Gear Pump - 1P Series dimensional data"
              width={658}
              height={550}
              className="mx-auto h-auto w-auto max-w-full transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const internalGearPumpContent = {
  description: "One of the two interlinked, varying-sized gears in an Torque internal gear pump turns inside the other. Oil, paints, resins, and meals are among the high-viscosity fluids that are frequently pumped using gear pumps. They are also helpful in uses that call for precise amount or high pressure results.",
  features: [
    "Low pulsation of oil flow",
    "Fixed displacement",
    "low operating noise",
    "due to sealing gap compensation high efficiency at low speed and viscosity",
    "Wide speed ranges, can operate up to 3000 r/min",
    "peak pressure up to 350 bar",
    "Options for double pumps",
  ],
  specs: [],
}

const twoPSeriesContent = {
  description: "Torque Hydraulic Gear pumps 2P series are aluminum body gear pumps with high efficiency and long use life. They are designed with special aluminum alloys and covers are made of high grade cast iron to avoid deformation at high pressure.",
  features: [
    "High efficiency",
    "Low noise",
    "Value proposition quality/price ratio",
    "Technical specifications and long service life",
  ],
  specs: [
    { label: "Body", value: "aluminum body gear pumps" },
    { label: "Efficiency", value: "High efficiency" },
    { label: "Service life", value: "Long use life" },
    { label: "Alloys", value: "Special aluminum alloys" },
    { label: "Covers", value: "High grade cast iron" },
    { label: "Protection", value: "Avoid deformation at high pressure" },
  ],
}

const twoPSeriesRows = [
  ["1050", "1.02", "16.67", "5", "22.7", "200", "250", "3000"],
  ["1070", "1.39", "22.73", "8.45", "32", "200", "250", "3000"],
  ["1090", "1.76", "28.79", "10.83", "41", "200", "250", "3000"],
  ["1105", "2.03", "33.74", "12.6", "47.7", "200", "250", "3000"],
  ["1120", "2.31", "37.88", "14.39", "54.5", "200", "250", "3000"],
  ["1146", "2.78", "45.68", "17.56", "66.5", "200", "250", "3000"],
  ["1158", "3.01", "49.4", "18.96", "71.8", "200", "250", "3000"],
  ["1190", "3.62", "59.14", "22.49", "85.16", "200", "250", "3000"],
  ["1220", "4.07", "66.67", "26.41", "100", "200", "250", "3000"],
]

function TwoPSeriesSpecificationSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-[#f7f8f6] py-14 sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(242,101,34,0.1),transparent_25%),radial-gradient(circle_at_90%_78%,rgba(63,108,140,0.14),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-7 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden />
          <h2 className="text-2xl font-bold text-[#143126]">TORQUE HYDRAULIC GEAR PUMP - 2P SERIES SPECIFICATIONS</h2>
        </div>
        <div className="overflow-x-auto rounded-xl border border-[#e2e8f0] border-t-[3px] border-t-[#e05a2e] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_24px_rgba(224,90,46,0.06)]">
          <table className="min-w-[900px] w-full border-collapse text-sm">
            <thead className="bg-[linear-gradient(90deg,#fff0eb_0%,#fff7f3_100%)] text-[#e05a2e]">
              <tr>
                <th rowSpan={2} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold">Model No.</th>
                <th colSpan={2} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold">Theoretical Displacement</th>
                <th colSpan={2} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold">Nominal Delivery at 1450 rev / min</th>
                <th colSpan={2} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold">rated pressure (bar)</th>
                <th rowSpan={2} className="border-b border-[#f4c4aa] px-3 py-3 text-center font-bold">Max speed at max Pressure rev / min</th>
              </tr>
              <tr>
                {["in3/rev", "cm3/rev", "gal / min", "l / min", "rated", "max"].map((heading) => (
                  <th key={heading} className="border-b border-r border-[#f4c4aa] px-3 py-2 text-center font-bold">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {twoPSeriesRows.map((row, index) => (
                <tr key={row[0]} className="transition-colors hover:bg-[#fff7f3]" style={{ background: index % 2 === 0 ? "#ffffff" : "#fafbfc" }}>
                  {row.map((value, valueIndex) => (
                    <td key={`${value}-${valueIndex}`} className="border-b border-r border-[#e2e8f0] px-3 py-2.5 text-center last:border-r-0">{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-14 -mx-4 border-y border-[#d8e5ee] bg-[#f4f9fd] px-4 py-10 sm:-mx-6 sm:px-6 sm:py-12 lg:-mx-8 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="h-9 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden />
            <h2 className="text-[clamp(1.65rem,3vw,2.15rem)] font-bold tracking-[-0.035em] text-[#143126]">Dimensional Data</h2>
          </div>
          <div className="group mt-10 overflow-hidden border border-[#d4e2ec] bg-white p-5 transition-shadow duration-300 hover:shadow-[0_18px_38px_rgba(20,49,38,0.1)] sm:p-8 lg:p-12">
            <Image
              src="/images/hydraulic-pumps/gear-pumps/torque-hydraulic-gear-pump-2p-series-dimensional-data.png"
              alt="Torque Hydraulic Gear Pump - 2P Series dimensional data"
              width={658}
              height={550}
              className="mx-auto h-auto w-auto max-w-full transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const zeroPSeriesContent = {
  description: "Torque Hydraulic Gear pumps 0P series are aluminum body gear pumps with high efficiency and long use life. They are designed with special aluminum alloys and covers are made of high grade cast iron to avoid deformation at high pressure.",
  features: [
    "High efficiency",
    "Low noise",
    "Value proposition quality/price ratio",
    "Technical specifications and long service life",
  ],
  specs: [
    { label: "Series use", value: "The 0P series of hydraulic gear pumps are designed for industrial use." },
    { label: "Motor horsepower", value: "3 HP" },
    { label: "Maximum continuous pressure", value: "207 bar" },
    { label: "Phase", value: "Single phase" },
    { label: "Maximum flow rate", value: "500 LPM" },
    { label: "Nominal displacement", value: "6.8 Liter" },
    { label: "Material", value: "aluminum body" },
  ],
}

const zeroPSeriesRows = [
  ["1003", "0.08", "1.23", "0.26", "1.2", "3000", "207", "4000", "500"],
  ["1004", "0.1", "1.64", "0.39", "1.8", "3000", "207", "4000", "500"],
  ["1006", "0.13", "2.18", "0.56", "2.5", "3000", "207", "4000", "500"],
  ["1008", "0.18", "2.85", "0.75", "3.4", "3000", "207", "4000", "500"],
  ["1011", "0.23", "3.81", "1.06", "4.8", "3000", "207", "4000", "500"],
  ["1013", "0.27", "4.46", "1.28", "5.8", "3000", "207", "4000", "500"],
  ["1015", "0.31", "5.14", "1.5", "6.8", "3000", "207", "4000", "600"],
]

function ZeroPSeriesSpecificationSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-[#f7f8f6] py-14 sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(242,101,34,0.1),transparent_25%),radial-gradient(circle_at_90%_78%,rgba(63,108,140,0.14),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-7 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden />
          <h2 className="text-2xl font-bold text-[#143126]">Torque Hydraulic Gear Pump - 0P Series Specifications</h2>
        </div>
        <div className="overflow-x-auto rounded-xl border border-[#e2e8f0] border-t-[3px] border-t-[#e05a2e] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_24px_rgba(224,90,46,0.06)]">
          <table className="min-w-[940px] w-full border-collapse text-sm">
            <thead className="bg-[linear-gradient(90deg,#fff0eb_0%,#fff7f3_100%)] text-[#e05a2e]">
              <tr>
                <th rowSpan={2} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold">Pump type</th>
                <th colSpan={2} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold">Theoretical Displacement</th>
                <th colSpan={2} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold">Nominal Delivery at 1450 rev / min</th>
                <th colSpan={2} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold">Maximum Pressure</th>
                <th rowSpan={2} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold">Max speed at max Pressure rev/ min.</th>
                <th rowSpan={2} className="border-b border-[#f4c4aa] px-3 py-3 text-center font-bold">Min. Speed at max Continuous Pressure rev / min.</th>
              </tr>
              <tr>
                {["in3 / rev", "cm3 / rev", "Imp gal/ min", "l / min", "psi", "bar"].map((heading) => (
                  <th key={heading} className="border-b border-r border-[#f4c4aa] px-3 py-2 text-center font-bold">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {zeroPSeriesRows.map((row, index) => (
                <tr key={row[0]} className="transition-colors hover:bg-[#fff7f3]" style={{ background: index % 2 === 0 ? "#ffffff" : "#fafbfc" }}>
                  {row.map((value, valueIndex) => (
                    <td key={`${value}-${valueIndex}`} className="border-b border-r border-[#e2e8f0] px-3 py-2.5 text-center last:border-r-0">{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-14 -mx-4 border-y border-[#d8e5ee] bg-[#f4f9fd] px-4 py-10 sm:-mx-6 sm:px-6 sm:py-12 lg:-mx-8 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="h-9 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden />
            <h2 className="text-[clamp(1.65rem,3vw,2.15rem)] font-bold tracking-[-0.035em] text-[#143126]">Dimensional Data</h2>
          </div>
          <div className="group mt-10 overflow-hidden border border-[#d4e2ec] bg-white p-5 transition-shadow duration-300 hover:shadow-[0_18px_38px_rgba(20,49,38,0.1)] sm:p-8 lg:p-12">
            <Image
              src="/images/hydraulic-pumps/gear-pumps/torque-hydraulic-gear-pump-0p-series-dimensional-data.png"
              alt="Torque Hydraulic Gear Pump - 0P Series dimensional data"
              width={658}
              height={550}
              className="mx-auto h-auto w-auto max-w-full transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function CiphSpecificationSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-[#f7f8f6] py-14 sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(242,101,34,0.1),transparent_25%),radial-gradient(circle_at_90%_78%,rgba(63,108,140,0.14),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <div>
          <div className="mb-8 flex items-center gap-3">
            <span className="h-7 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden />
            <h2 className="text-2xl font-bold text-[#143126]">TORQUE CIPH-40 63 | 80 | 100CC PUMP</h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-[#e2e8f0] border-t-[3px] border-t-[#e05a2e] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_24px_rgba(224,90,46,0.06)]">
            <table className="min-w-[1050px] w-full border-collapse text-sm">
              <thead className="bg-[linear-gradient(90deg,#fff0eb_0%,#fff7f3_100%)] text-[#0e1c35]">
                <tr>
                  <th rowSpan={2} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold">Model</th>
                  <th rowSpan={2} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold">Displacement</th>
                  <th colSpan={2} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold">Pressure</th>
                  <th colSpan={2} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold">Speed</th>
                  <th rowSpan={2} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold">Volumatic Efficiency</th>
                  <th rowSpan={2} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold">L</th>
                  <th rowSpan={2} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold">L 1</th>
                  <th colSpan={2} className="border-b border-r border-[#f4c4aa] px-3 py-3 text-center font-bold">Inlet Port</th>
                  <th colSpan={2} className="border-b border-[#f4c4aa] px-3 py-3 text-center font-bold">Outlet Port</th>
                </tr>
                <tr>
                  {["Rated", "Max.", "Rated", "Max.", "D", "T", "D", "T"].map((heading) => (
                    <th key={heading} className="border-b border-r border-[#f4c4aa] px-3 py-2 text-center font-bold last:border-r-0">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ciphRows.map((row, index) => (
                  <tr key={row[0]} className="transition-colors hover:bg-[#fff7f3]" style={{ background: index % 2 === 0 ? "#ffffff" : "#fafbfc" }}>
                    <td className="border-b border-r border-[#e2e8f0] px-3 py-3 text-center">{row[0]}</td>
                    <td className="border-b border-r border-[#e2e8f0] px-3 py-3 text-center">{row[1]}</td>
                    <td className="border-b border-r border-[#e2e8f0] px-3 py-3 text-center">230 bar</td>
                    <td className="border-b border-r border-[#e2e8f0] px-3 py-3 text-center">250 bar</td>
                    <td className="border-b border-r border-[#e2e8f0] px-3 py-3 text-center">2000 r/min</td>
                    <td className="border-b border-r border-[#e2e8f0] px-3 py-3 text-center">2500 r/min</td>
                    <td className="border-b border-r border-[#e2e8f0] px-3 py-3 text-center" />
                    {row.slice(2).map((value, valueIndex) => (
                      <td key={`${value}-${valueIndex}`} className="border-b border-r border-[#e2e8f0] px-3 py-3 text-center last:border-r-0">{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <article className="group rounded-2xl border border-[#dbe8ea] bg-white/80 p-6 shadow-[0_12px_30px_rgba(20,49,38,0.08)] backdrop-blur transition-transform duration-300 hover:-translate-y-1">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#e05a2e]">Description</p>
            <h3 className="mt-3 text-2xl font-bold text-[#143126]">Ordering Code</h3>
            <ol className="mt-5 space-y-3 text-sm leading-relaxed text-[#143126]/80">
              <li>① Model Code</li>
              <li>② Nominal Displacement</li>
              <li>③ Mounting Flange Type: B-Square flange</li>
              <li>④ Port Connection Style: L-Screw Connecting</li>
              <li>⑤ Shaft End: Rectangle Spline ( H1: Φ30, H2: Φ36 )</li>
              <li>⑥ Rotation: L-Left ( Counter clockwise); R: Right (Clockwise); SC: Bi-directional;</li>
            </ol>
          </article>

          <article className="group rounded-2xl border border-[#dbe8ea] bg-white/80 p-6 shadow-[0_12px_30px_rgba(20,49,38,0.08)] backdrop-blur transition-transform duration-300 hover:-translate-y-1">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#e05a2e]">Model Code Breakdown</p>
            <p className="mt-4 font-mono text-lg font-semibold tracking-[0.12em] text-[#e05a2e]">CIPH - ***- B L * * *</p>
            <p className="mt-3 font-mono text-sm tracking-[0.45em] text-[#61786e]">① ② ③ ④ ⑤ ⑥ ⑦</p>
            <h3 className="mt-6 text-xl font-bold text-[#143126]">⑦ Port Position</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#143126]/80">
              <li>1: Side in, Side out;</li>
              <li>2: Side in, Bottom out;</li>
              <li>3: Bottom in, Bottom out;</li>
              <li>4: Bottom in, Side out</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export function generateStaticParams() {
  return gearPumpProducts.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = gearPumpProducts.find((item) => item.slug === slug)
  return product ? { title: `${product.name} | Hydronex`, description: product.name } : {}
}

export default async function GearPumpPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = gearPumpProducts.find((item) => item.slug === slug)
  if (!product) notFound()

  const isCastIronGearPump = product.slug === "torque-cast-iron-gear-pump"
  const isCiphPump = product.slug === "torque-ciph-40-63-80-100cc-pump"
  const isZeroPSeries = product.slug === "torque-hydraulic-gear-pump-0p-series"
  const isOnePSeries = product.slug === "torque-hydraulic-gear-pump-1p-series"
  const isTwoPSeries = product.slug === "torque-hydraulic-gear-pump-2p-series"
  const isInternalGearPump = product.slug === "torque-hydraulic-internal-gear-pump"
  const productContent = isCastIronGearPump
    ? castIronGearPumpContent
    : isCiphPump
      ? ciphPumpContent
      : isZeroPSeries
        ? zeroPSeriesContent
        : isOnePSeries
          ? onePSeriesContent
          : isTwoPSeries
            ? twoPSeriesContent
            : isInternalGearPump
              ? internalGearPumpContent
              : { description: product.name, features: [], specs: [] }
  const otherProducts = gearPumpProducts
    .filter((item) => item.slug !== product.slug)
    .map((item) => ({ ...item, shortName: item.name }))

  return (
    <>
      <BSPProductDetail
        editorialHero
        categoryName="Gear Pumps"
        categoryHref="/products/hydraulic-pumps/gear-pumps"
        parentCategoryName="Hydraulic Pumps"
        parentCategoryHref="/products/hydraulic-pumps"
        featureHeading={isCastIronGearPump ? "Benefits and features:" : isInternalGearPump ? "Features:" : undefined}
        additionalSpecificationSection={
          isCiphPump
            ? <CiphSpecificationSection />
            : isZeroPSeries
              ? <ZeroPSeriesSpecificationSection />
              : isOnePSeries
                ? <OnePSeriesSpecificationSection />
                : isTwoPSeries
                  ? <TwoPSeriesSpecificationSection />
                  : undefined
        }
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
        otherProductsSection={
          <>
            <BSPOtherProducts
              products={otherProducts}
              basePath="/products/hydraulic-pumps/gear-pumps"
              categoryLabel="Gear Pumps"
            />
            <BSPCtaSection
              title="Let's specify the right gear pump."
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
