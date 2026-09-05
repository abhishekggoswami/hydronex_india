import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { BSPOtherProducts } from "@/components/bsp-other-products"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import { orbitalMotorProducts } from "@/lib/hydraulic-motors"

const breakMotorsDescription =
  "ZTMR are Torque TMR orbit Hydraulic Motor with Multi-disc brake. There are Shuttle valve and inner hydraulic control system. it has small Volume, short radial dimension, low weight and axial to install. its widely applied in construction machinery, shipping machinery, cranes, mining, port, metallurgical industry, etc."

const breakMotorsFeatures = [
  "Multi-disc brake",
  "Shuttle valve and inner hydraulic control system.",
  "Small Volume, short radial dimension, low weight and axial to install.",
]

const breakMotorsDetails = [
  { label: "Motor series", value: "ZTMR / Torque TMR orbit Hydraulic Motor" },
  { label: "Brake", value: "Multi-disc brake" },
  { label: "Control system", value: "Shuttle valve and inner hydraulic control system" },
  { label: "Installation", value: "Axial" },
]

const breakMotorsApplications =
  "Construction machinery, shipping machinery, cranes, mining, port and metallurgical industry."

const breakMotorSpecificationRows = [
  ["ZTMR-80", "80.5", "14", "152", "20-500", "1.2", "265", "12.3", "240.5"],
  ["ZTMR-100", "100.5", "14", "194", "20-450", "1.2", "265", "12.5", "244.5"],
  ["ZTMR-125", "126.3", "14", "237", "20-400", "2.0", "265", "12", "248.5"],
  ["ZTMR-160", "160.8", "14", "310", "20-300", "2.0", "400", "13", "254.5"],
  ["ZTMR-200", "200.9", "14", "369", "20-250", "2.0", "100", "13.5", "261.5"],
  ["ZTMR-250", "252.6", "11", "380", "15-200", "2.0", "100", "14", "270.5"],
  ["ZTMR-315", "321.5", "9", "350", "15-160", "2.0", "400", "14.5", "296.5"],
]

function BreakMotorsSpecificationSection() {
  const headers = [
    "Type",
    "Displacement ml/r",
    "Max. pressure Mpa",
    "Ma. torque N.m",
    "Speed range r/min",
    "Releasing pressure Mpa",
    "Brake torque N.m",
    "Weight Kg",
    "Length mm",
  ]

  return (
    <section
      className="relative overflow-hidden border-y border-[#dbe8ea] bg-white py-14"
      style={{
        backgroundImage:
          "radial-gradient(circle at 8% 15%, rgba(143,213,208,0.16), transparent 24%), radial-gradient(circle at 88% 82%, rgba(242,101,34,0.08), transparent 24%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(rgba(20,49,38,0.11) 0.7px, transparent 0.7px)",
          backgroundSize: "18px 18px",
        }}
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-7 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden />
          <h2 className="text-2xl font-bold text-[#143126]">Specifications</h2>
        </div>
        <div className="overflow-x-auto rounded-xl border border-[#dce5e3] bg-white shadow-[0_10px_24px_rgba(20,49,38,0.08)]">
          <table className="min-w-[960px] w-full border-collapse text-left font-sans text-sm">
            <caption className="border-b border-[#dce5e3] bg-[#f7fafb] px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-[#143126]">
              TORQUE BREAK MOTORS
            </caption>
            <thead>
              <tr className="border-b-2 border-[#f26522] bg-[#fff7f3]">
                {headers.map((header) => (
                  <th
                    key={header}
                    scope="col"
                    className="border-r border-[#eaded8] px-3 py-3 text-center text-[10px] font-bold uppercase tracking-[0.04em] text-[#a24421] last:border-r-0"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {breakMotorSpecificationRows.map((row, rowIndex) => (
                <tr
                  key={row[0]}
                  className="group border-b border-[#e5ecea] transition-colors duration-200 hover:bg-[#fff7f3] last:border-b-0"
                  style={{ background: rowIndex % 2 === 0 ? "#ffffff" : "#fafcfb" }}
                >
                  {row.map((value, columnIndex) => (
                    <td
                      key={`${row[0]}-${headers[columnIndex]}`}
                      className={`border-r border-[#e5ecea] px-3 py-3 text-center text-xs text-[#34534a] last:border-r-0 ${columnIndex === 0 ? "font-bold text-[#143126]" : ""}`}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

const tmhDescription =
  "Torque motors TMH Series orbital motors with spool valve technology are available in 5 different displacement sizes with different mounting flanges, shaft size and port size and configurations. TMH series of motor are gear set design of Disc distribution flow and high pressure. Replacement for various brand Parker®, White®, Eaton®/Char-Lynn®, Danfoss®, M+S®. Displacement: 315 cm3/rev. For further details contact us by email or phone if you have any questions or want equivalent to your current motor with a Torque® motor."

const tmhFeatures = [
  "Spool valve technology",
  "Available in 5 different displacement sizes",
  "Different mounting flanges, shaft size and port size and configurations",
  "Gear set design of Disc distribution flow and high pressure.",
  "Replacement for various brand Parker®, White®, Eaton®/Char-Lynn®, Danfoss®, M+S®.",
]

const tmhDetails = [
  { label: "Displacement", value: "315 cm3/rev" },
  { label: "Technology", value: "Spool valve" },
  { label: "Motor design", value: "Gear set design of Disc distribution flow" },
  { label: "Pressure", value: "High pressure" },
]

const tmhSpecificationRows = [
  ["TMH 200", "203", "155", "370", "75"],
  ["TMH 250", "253.7", "155", "295", "75"],
  ["TMH 315", "318.9", "135", "235", "75"],
  ["TMH 400", "405.9", "105", "185", "75"],
  ["TMH 500", "471.1", "85", "155", "75"],
]

const tmhModelCodeGroups = [
  {
    title: "Displacement in3/r (cm3/r)",
    values: [
      "01 = 3.1 (50)", "02 = 3.8 (63)", "03 = 4.9 (80)", "04 = 6.1 (100)",
      "05 = 7.6 (125)", "06 = 9.8 (160)", "07 = 12.2 (200)", "08 = 15.3 (250)",
      "09 = 18.6 (305)", "10 = 22.6 (370)", "11 = 24.1 (395)",
    ],
  },
  {
    title: "Flange & Pilot",
    values: [
      'A = 2-Bolt SAE "A", pilot Ø3.25” (82.5) x .31” (8) Staggered',
      'B = 4-Bolt SAE "A", pilot Ø3.25” (82.5) x .31” (8) Staggered',
      'C = 2-Bolt SAE "A", pilot Ø3.25” (82.5) x .11” (2.8) Inline',
      'D = 4-Bolt SAE "A", pilot Ø3.25” (82.5) x .11” (2.8) Inline',
      'E = 4-3/8-16 Flange-flange, pilot Ø1.75” (44.4) x .11” (2.8) Inline',
      'F = 4-M10x1.5 Square-flange, pilot Ø1.75” (44.4) x .11” (2.8) Inline',
    ],
  },
  {
    title: "Shafts",
    values: [
      "01 = .984” (25mm) Straight, Flat key 8 x 7 x 32",
      "02 = 1” (25.4mm) Straight, Flat key 6.35 x 6.35 x 32",
      "03 = 1” (25.4mm) SAE 6B Splined - M8 Tap (European)",
      "04 = 1.26” (32mm) Straight, Flat key 10 x 8 x 45",
      "05 = 1.25” (31.75mm) Straight, Flat key 7.96 x 7.96 x 32",
      "06 = 1.25” (31.75mm) Tapered Shaft, Flat key 7.96 x 7.96 x 32",
      "07 = 1.26” (35mm) Tapered Shaft, Flat key 6 x 6 x 20",
      "08 = 1.25” (31.75mm) M14 Splined",
      "09 = 1” (25.4mm) Straight, Woodruff key",
      "10 = 1” (25.4mm) SAE 6B Splined - 1/4” -20 Tap",
      "11 = 1” (25.4mm) Straight, with 0.315” dia. crosshole",
      "12 = 1” (25.4mm) Straight, with 0.406” dia. crosshole",
      "13 = .875” (22.23mm) Straight",
      "14 = .875” (22.23mm) SAE 6B Shaft 13t Splined",
      "15 = .984” (25mm) Straight, 8mm keyway",
      "16 = 1” (25.4mm) Tapered Shaft, with Woodruff Key and Nut",
      "17 = 1” (25.4mm) Straight, with 0.406” dia. crosshole & 6.35 x 6.35 x 32 Flat key",
    ],
  },
  {
    title: "Rotation",
    values: ["A = Standard (Clock-wise)", "B = Opposite (Counter Clock-wise)"],
  },
  {
    title: "Paint",
    values: ["A = No Paint", "B = Blue (Standard)", "C = Black", "Options A & C (or any other color) necessary will only be considered for large Quantity Orders"],
  },
  {
    title: "Drain Port",
    values: ["1 = G 1/4 BSP", "2 = 7/16-20UNF", "3 = M14x1.5", '4 = PT(RC) 1/4”', "5 = M10x1", "All motors come with a Steel Hex Socket Plugged Drain Port"],
  },
  {
    title: "Ports",
    values: ["A = G 1/2, BSP", 'B = 1/2”-14NPTF', "C = M18x1.5", 'D = 7/8”-14UNF, O-ring', "E = G 1/2, O-ring", "F = M22x1.5", 'G = 4-5/16”-18UNC (Manifold)', "H = 4-M8x1.5 (Manifold)", 'I = PT(RC) 1/2”', "J = M20x1.5"],
  },
]

function TMHSpecificationSection() {
  const headers = ["Model code", "Displacement", "Pressure", "Max Rpm", "Max Flow"]

  return (
    <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-white py-14" style={{ backgroundImage: "radial-gradient(circle at 8% 15%, rgba(143,213,208,0.16), transparent 24%), radial-gradient(circle at 88% 82%, rgba(242,101,34,0.08), transparent 24%)" }}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]" style={{ backgroundImage: "radial-gradient(rgba(20,49,38,0.11) 0.7px, transparent 0.7px)", backgroundSize: "18px 18px" }} aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-7 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden />
          <h2 className="text-2xl font-bold text-[#143126]">Specifications</h2>
        </div>
        <div className="overflow-x-auto rounded-xl border border-[#dce5e3] bg-white shadow-[0_10px_24px_rgba(20,49,38,0.08)]">
          <table className="min-w-[680px] w-full border-collapse font-sans text-sm">
            <caption className="border-b border-[#dce5e3] bg-[#f7fafb] px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-[#143126]">TMH SPECIFICATIONS</caption>
            <thead><tr className="border-b-2 border-[#f26522] bg-[#fff7f3]">{headers.map((header) => <th key={header} scope="col" className="border-r border-[#eaded8] px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.04em] text-[#a24421] last:border-r-0">{header}</th>)}</tr></thead>
            <tbody>{tmhSpecificationRows.map((row, rowIndex) => <tr key={row[0]} className="border-b border-[#e5ecea] transition-colors duration-200 hover:bg-[#fff7f3] last:border-b-0" style={{ background: rowIndex % 2 === 0 ? "#ffffff" : "#fafcfb" }}>{row.map((value, columnIndex) => <td key={`${row[0]}-${headers[columnIndex]}`} className={`border-r border-[#e5ecea] px-4 py-3 text-center text-xs text-[#34534a] last:border-r-0 ${columnIndex === 0 ? "font-bold text-[#143126]" : ""}`}>{value}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function TMHModelCodeBreakdownSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7fafb] py-14">
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(rgba(20,49,38,0.12) 0.7px, transparent 0.7px)", backgroundSize: "18px 18px" }} aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3"><span className="h-7 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden /><h2 className="text-2xl font-bold text-[#143126]">Model Code Breakdown</h2></div>
        <div className="rounded-xl border border-[#dce5e3] bg-white p-5 shadow-[0_10px_24px_rgba(20,49,38,0.08)] sm:p-8">
          <div className="mb-8 overflow-x-auto"><div className="min-w-[680px] border-b-2 border-[#f26522] pb-5"><p className="font-mono text-xl font-extrabold tracking-[0.16em] text-[#143126] sm:text-2xl">MMPS - 01 - A - 01 - D - 2 - B - A</p><div className="mt-4 grid grid-cols-8 gap-1 text-center text-[9px] font-bold uppercase tracking-wide text-[#61786e]"><span>Series</span><span>Displacement</span><span>Flange &amp; Pilot</span><span>Shafts</span><span>Drain Port</span><span>Ports</span><span>Paint</span><span>Rotation</span></div></div></div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">{tmhModelCodeGroups.map((group) => <article key={group.title} className="group rounded-xl border border-[#dce5e3] border-l-[3px] border-l-[#f26522] bg-white p-5 shadow-[0_4px_14px_rgba(20,49,38,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(20,49,38,0.1)]"><h3 className="mb-3 text-sm font-bold text-[#143126]">{group.title}</h3><ul className="space-y-1.5 text-xs leading-relaxed text-[#486259]">{group.values.map((value) => <li key={value}>{value}</li>)}</ul></article>)}</div>
        </div>
      </div>
    </section>
  )
}

function TMHApplicationSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-white py-14">
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]" style={{ backgroundImage: "radial-gradient(rgba(20,49,38,0.11) 0.7px, transparent 0.7px)", backgroundSize: "18px 18px" }} aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-8 flex items-center gap-3"><span className="h-7 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden /><h2 className="text-2xl font-bold text-[#143126]">Applications</h2></div><div className="rounded-xl border border-[#dce5e3] border-l-[3px] border-l-[#f26522] bg-white px-6 py-5 text-sm leading-relaxed text-[#486259] shadow-[0_10px_24px_rgba(20,49,38,0.08)]">For further details contact us by email or phone if you have any questions or want equivalent to your current motor with a Torque® motor.</div></div>
    </section>
  )
}

const tmvDescription =
  "Torque motors TMV Series orbital motors with disk valve technology are available in 9 different displacement sizes with different mounting flanges, shaft size and port size and configurations. TMV series of motor are gear set design of Disc distribution flow and high pressure. Replacement for various brand Parker®, White®, Eaton®/Char-Lynn®, Danfoss®, M+S®. Displacement: 315 cm3/rev to 985 cm3/rev. For further details contact us by email or phone if you have any questions or want equivalent to your current motor with a Torque® motor."

const tmvFeatures = [
  "Displacement available to fit your need",
  "Max Pressure 200 bar",
  "Seals & shaft bearings of premium quality",
  "Mount flange, port size as per International standards",
  "Used in various applications",
  "Alternatives for Eaton®/Char-Lynn®, Danfoss®, Parker®, M+S®, White® and more",
]

const tmvDetails = [
  { label: "Displacement", value: "315 cm3/rev to 985 cm3/rev" },
  { label: "Technology", value: "Disk valve" },
  { label: "Max pressure", value: "200 bar" },
  { label: "Quality", value: "Seals & shaft bearings of premium quality" },
  { label: "Standards", value: "Mount flange, port size as per International standards" },
]

const tmvSpecificationRows = [
  ["TMV 315", "314.9", "200", "475", "150"],
  ["TMV 400", "399.7", "200", "375", "150"],
  ["TMV 500", "496.6", "200", "300", "150"],
  ["TMV 630", "617.8", "180", "238", "150"],
  ["TMV 800", "787.4", "160", "187", "150"],
  ["TMV 985", "969.1", "140", "154", "150"],
]

function TMVSpecificationSection() {
  const headers = ["Model code", "Displacement", "Pressure", "Max Rpm", "Max Flow"]

  return (
    <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-white py-14" style={{ backgroundImage: "radial-gradient(circle at 8% 15%, rgba(143,213,208,0.16), transparent 24%), radial-gradient(circle at 88% 82%, rgba(242,101,34,0.08), transparent 24%)" }}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]" style={{ backgroundImage: "radial-gradient(rgba(20,49,38,0.11) 0.7px, transparent 0.7px)", backgroundSize: "18px 18px" }} aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3"><span className="h-7 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden /><h2 className="text-2xl font-bold text-[#143126]">Specifications</h2></div>
        <div className="overflow-x-auto rounded-xl border border-[#dce5e3] bg-white shadow-[0_10px_24px_rgba(20,49,38,0.08)]">
          <table className="min-w-[680px] w-full border-collapse font-sans text-sm">
            <caption className="border-b border-[#dce5e3] bg-[#f7fafb] px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-[#143126]">TMV SPECIFICATIONS</caption>
            <thead><tr className="border-b-2 border-[#f26522] bg-[#fff7f3]">{headers.map((header) => <th key={header} scope="col" className="border-r border-[#eaded8] px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.04em] text-[#a24421] last:border-r-0">{header}</th>)}</tr></thead>
            <tbody>{tmvSpecificationRows.map((row, rowIndex) => <tr key={row[0]} className="border-b border-[#e5ecea] transition-colors duration-200 hover:bg-[#fff7f3] last:border-b-0" style={{ background: rowIndex % 2 === 0 ? "#ffffff" : "#fafcfb" }}>{row.map((value, columnIndex) => <td key={`${row[0]}-${headers[columnIndex]}`} className={`border-r border-[#e5ecea] px-4 py-3 text-center text-xs text-[#34534a] last:border-r-0 ${columnIndex === 0 ? "font-bold text-[#143126]" : ""}`}>{value}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function TMVApplicationSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-white py-14">
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]" style={{ backgroundImage: "radial-gradient(rgba(20,49,38,0.11) 0.7px, transparent 0.7px)", backgroundSize: "18px 18px" }} aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-8 flex items-center gap-3"><span className="h-7 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden /><h2 className="text-2xl font-bold text-[#143126]">Applications</h2></div><div className="rounded-xl border border-[#dce5e3] border-l-[3px] border-l-[#f26522] bg-white px-6 py-5 text-sm leading-relaxed text-[#486259] shadow-[0_10px_24px_rgba(20,49,38,0.08)]">Used in various applications. For further details contact us by email or phone if you have any questions or want equivalent to your current motor with a Torque® motor.</div></div>
    </section>
  )
}

const tmtDescription =
  "Torque motors TMT series orbital motors with disk valve technology are available in 9 different displacement sizes with different mounting flanges, shaft size and port size and configurations. TMT series of motor are gear set design of Disc distribution flow and high pressure. Replacement for various brand Parker®, White®, Eaton®/Char-Lynn®, Danfoss®, M+S®."

const tmtFeatures = [
  "Displacement: 160 cm3/rev to 500 cm3/rev.",
  "Max Pressure 200 bar.",
  "Seals & shaft bearing of premium quality.",
  "Mount flange, port size as per International standards.",
  "Used in various applications.",
  "Alternatives for Eaton®/Char-Lynn®, Danfoss®, Parker®, M+S®, White® and more",
]

const tmtDetails = [
  { label: "Displacement", value: "160 cm3/rev to 500 cm3/rev" },
  { label: "Technology", value: "Disk valve" },
  { label: "Max pressure", value: "200 bar" },
  { label: "Quality", value: "Seals & shaft bearing of premium quality" },
  { label: "Standards", value: "Mount flange, port size as per International standards" },
]

const tmtSpecificationRows = [
  ["TMT 160", "158.8", "200", "625", "100"],
  ["TMT 200", "200.8", "200", "500", "100"],
  ["TMT 250", "252.2", "200", "400", "100"],
  ["TMT320", "317.5", "200", "312", "100"],
  ["TMT 400", "401.6", "180", "250", "100"],
  ["TMT 500", "535.3", "160", "175", "100"],
]

function TMTSpecificationSection() {
  const headers = ["Model code", "Displacement", "Pressure", "Max Rpm", "Max Flow"]

  return (
    <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-white py-14" style={{ backgroundImage: "radial-gradient(circle at 8% 15%, rgba(143,213,208,0.16), transparent 24%), radial-gradient(circle at 88% 82%, rgba(242,101,34,0.08), transparent 24%)" }}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]" style={{ backgroundImage: "radial-gradient(rgba(20,49,38,0.11) 0.7px, transparent 0.7px)", backgroundSize: "18px 18px" }} aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3"><span className="h-7 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden /><h2 className="text-2xl font-bold text-[#143126]">Specifications</h2></div>
        <div className="overflow-x-auto rounded-xl border border-[#dce5e3] bg-white shadow-[0_10px_24px_rgba(20,49,38,0.08)]">
          <table className="min-w-[680px] w-full border-collapse font-sans text-sm">
            <caption className="border-b border-[#dce5e3] bg-[#f7fafb] px-5 py-4 text-center text-xl font-bold text-[#143126]">TMT Specifications</caption>
            <thead><tr className="border-b-2 border-[#f26522] bg-[#fff7f3]">{headers.map((header) => <th key={header} scope="col" className="border-r border-[#eaded8] px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.04em] text-[#a24421] last:border-r-0">{header}</th>)}</tr></thead>
            <tbody>{tmtSpecificationRows.map((row, rowIndex) => <tr key={row[0]} className="border-b border-[#e5ecea] transition-colors duration-200 hover:bg-[#fff7f3] last:border-b-0" style={{ background: rowIndex % 2 === 0 ? "#ffffff" : "#fafcfb" }}>{row.map((value, columnIndex) => <td key={`${row[0]}-${headers[columnIndex]}`} className={`border-r border-[#e5ecea] px-4 py-3 text-center text-xs text-[#34534a] last:border-r-0 ${columnIndex === 0 ? "font-bold text-[#143126]" : ""}`}>{value}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function TMTApplicationSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-white py-14">
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]" style={{ backgroundImage: "radial-gradient(rgba(20,49,38,0.11) 0.7px, transparent 0.7px)", backgroundSize: "18px 18px" }} aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-8 flex items-center gap-3"><span className="h-7 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden /><h2 className="text-2xl font-bold text-[#143126]">Applications</h2></div><div className="rounded-xl border border-[#dce5e3] border-l-[3px] border-l-[#f26522] bg-white px-6 py-5 text-sm leading-relaxed text-[#486259] shadow-[0_10px_24px_rgba(20,49,38,0.08)]">Used in various applications. For further details contact us by email or phone if you have any questions or want equivalent to your current motor with a Torque® motor.</div></div>
    </section>
  )
}

const tmsDescription =
  "Torque motors TMS series orbital motors with disk valve technology are available in 9 different displacement sizes with different mounting flanges, shaft size and port size and configurations. TMS series of motor are gear set design of Disc distribution flow and high pressure. Replacement for various brand Parker®, White®, Eaton®/Char-Lynn®, Danfoss®, M+S®. Displacement: 80 cm3/rev to 400 cm3/rev"

const tmsFeatures = [
  "Displacement available to fit your need",
  "Max Pressure 175 bar",
  "Seals & shaft bearing of premium quality",
  "Mount flange, port size as per International standards",
  "Used in various applications",
  "Alternatives for Eaton®/Char-Lynn®, Danfoss®, Parker®, M+S®, White® and more",
]

const tmsDetails = [
  { label: "Displacement", value: "80 cm3/rev to 400 cm3/rev" },
  { label: "Technology", value: "Disk valve" },
  { label: "Max pressure", value: "175 bar" },
  { label: "Quality", value: "Seals & shaft bearing of premium quality" },
  { label: "Standards", value: "Mount flange, port size as per International standards" },
]

const tmsSpecificationRows = [
  ["TMS 80", "80.5", "175", "810", "65"],
  ["TMS 100", "100.5", "175", "750", "75"],
  ["TMS 125", "126.3", "175", "600", "75"],
  ["TMS 160", "160.8", "160", "470", "75"],
  ["TMS 200", "200.9", "160", "375", "75"],
  ["TMS 250", "252.6", "125", "300", "75"],
  ["TMS 315", "321.5", "125", "240", "75"],
  ["TMS 400", "401.9", "100", "180", "75"],
  ["TMS 500", "471.1", "100", "155", "75"],
]

function TMSSpecificationSection() {
  const headers = ["Model code", "Displacement", "Pressure", "Max Rpm", "Max Flow"]

  return (
    <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-white py-14" style={{ backgroundImage: "radial-gradient(circle at 8% 15%, rgba(143,213,208,0.16), transparent 24%), radial-gradient(circle at 88% 82%, rgba(242,101,34,0.08), transparent 24%)" }}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]" style={{ backgroundImage: "radial-gradient(rgba(20,49,38,0.11) 0.7px, transparent 0.7px)", backgroundSize: "18px 18px" }} aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3"><span className="h-7 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden /><h2 className="text-2xl font-bold text-[#143126]">Specifications</h2></div>
        <div className="overflow-x-auto rounded-xl border border-[#dce5e3] bg-white shadow-[0_10px_24px_rgba(20,49,38,0.08)]">
          <table className="min-w-[680px] w-full border-collapse font-sans text-sm">
            <caption className="border-b border-[#dce5e3] bg-[#f7fafb] px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-[#143126]">TMS SPECIFICATIONS</caption>
            <thead><tr className="border-b-2 border-[#f26522] bg-[#fff7f3]">{headers.map((header) => <th key={header} scope="col" className="border-r border-[#eaded8] px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.04em] text-[#a24421] last:border-r-0">{header}</th>)}</tr></thead>
            <tbody>{tmsSpecificationRows.map((row, rowIndex) => <tr key={row[0]} className="border-b border-[#e5ecea] transition-colors duration-200 hover:bg-[#fff7f3] last:border-b-0" style={{ background: rowIndex % 2 === 0 ? "#ffffff" : "#fafcfb" }}>{row.map((value, columnIndex) => <td key={`${row[0]}-${headers[columnIndex]}`} className={`border-r border-[#e5ecea] px-4 py-3 text-center text-xs text-[#34534a] last:border-r-0 ${columnIndex === 0 ? "font-bold text-[#143126]" : ""}`}>{value}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function TMSApplicationSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-white py-14">
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]" style={{ backgroundImage: "radial-gradient(rgba(20,49,38,0.11) 0.7px, transparent 0.7px)", backgroundSize: "18px 18px" }} aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-8 flex items-center gap-3"><span className="h-7 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden /><h2 className="text-2xl font-bold text-[#143126]">Applications</h2></div><div className="rounded-xl border border-[#dce5e3] border-l-[3px] border-l-[#f26522] bg-white px-6 py-5 text-sm leading-relaxed text-[#486259] shadow-[0_10px_24px_rgba(20,49,38,0.08)]">Used in various applications.</div></div>
    </section>
  )
}

const tmrDescription =
  "The Torque TMR Series orbital Motor is a hydraulic motor. It includes a spool valve and a distribution valve into the output shaft. The rotor spins due to the difference in pressure caused by fluid flow. Torque motors TMR series orbital motors are available in 10 different displacement sizes with different mounting flanges, shaft size and port size and configurations Replacement for various brand Parker®, White®, Eaton®/Char-Lynn®, Danfoss®, M+S®. Displacement: 50 cm3/rev to 400 cm3/rev. We offer equivalent orbitals compared to other brands: Model codes: BMR-40, BMR-125, BMR-160, BMR-200, BMR-250, BMR-315, BMR-32, BMR-36, BMR-400, BMR-50, BMR-80"

const tmrFeatures = [
  "It includes a spool valve and a distribution valve into the output shaft.",
  "The rotor spins due to the difference in pressure caused by fluid flow.",
  "Displacement available to fit your need",
  "Seals & shaft bearing of premium quality",
  "Mount flange, port size as per International standards",
  "Used in various applications",
  "Alternatives for Eaton®/Char-Lynn®, Danfoss®, Parker®, M+S®, White® and more",
]

const tmrDetails = [
  { label: "Displacement", value: "50 cm3/rev to 400 cm3/rev" },
  { label: "Valve system", value: "Spool valve and a distribution valve into the output shaft" },
  { label: "Operation", value: "The rotor spins due to the difference in pressure caused by fluid flow" },
  { label: "Quality", value: "Seals & shaft bearing of premium quality" },
  { label: "Standards", value: "Mount flange, port size as per International standards" },
]

const tmrSpecificationRows = [
  ["TMR 50", "51.7", "175", "775", "40"],
  ["TMR 80", "80.5", "175", "750", "60"],
  ["TMR 100", "100.5", "175", "600", "60"],
  ["TMR 125", "126.3", "175", "475", "60"],
  ["TMR 160", "160.8", "175", "375", "60"],
  ["TMR 200", "200.9", "175", "300", "60"],
  ["TMR 250", "252.6", "140", "240", "60"],
  ["TMR 315", "321.5", "110", "190", "60"],
  ["TMR 400", "401.9", "90", "160", "60"],
]

function TMRSpecificationSection() {
  const headers = ["Model code", "Displacement", "Pressure", "Max Rpm", "Max Flow"]

  return (
    <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-white py-14" style={{ backgroundImage: "radial-gradient(circle at 8% 15%, rgba(143,213,208,0.16), transparent 24%), radial-gradient(circle at 88% 82%, rgba(242,101,34,0.08), transparent 24%)" }}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]" style={{ backgroundImage: "radial-gradient(rgba(20,49,38,0.11) 0.7px, transparent 0.7px)", backgroundSize: "18px 18px" }} aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3"><span className="h-7 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden /><h2 className="text-2xl font-bold text-[#143126]">Specifications</h2></div>
        <div className="overflow-x-auto rounded-xl border border-[#dce5e3] bg-white shadow-[0_10px_24px_rgba(20,49,38,0.08)]">
          <table className="min-w-[680px] w-full border-collapse font-sans text-sm">
            <caption className="border-b border-[#dce5e3] bg-[#f7fafb] px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-[#143126]">TMR SPECIFICATIONS</caption>
            <thead><tr className="border-b-2 border-[#f26522] bg-[#fff7f3]">{headers.map((header) => <th key={header} scope="col" className="border-r border-[#eaded8] px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.04em] text-[#a24421] last:border-r-0">{header}</th>)}</tr></thead>
            <tbody>{tmrSpecificationRows.map((row, rowIndex) => <tr key={row[0]} className="border-b border-[#e5ecea] transition-colors duration-200 hover:bg-[#fff7f3] last:border-b-0" style={{ background: rowIndex % 2 === 0 ? "#ffffff" : "#fafcfb" }}>{row.map((value, columnIndex) => <td key={`${row[0]}-${headers[columnIndex]}`} className={`border-r border-[#e5ecea] px-4 py-3 text-center text-xs text-[#34534a] last:border-r-0 ${columnIndex === 0 ? "font-bold text-[#143126]" : ""}`}>{value}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function TMRApplicationSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-white py-14">
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]" style={{ backgroundImage: "radial-gradient(rgba(20,49,38,0.11) 0.7px, transparent 0.7px)", backgroundSize: "18px 18px" }} aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-8 flex items-center gap-3"><span className="h-7 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden /><h2 className="text-2xl font-bold text-[#143126]">Applications</h2></div><div className="rounded-xl border border-[#dce5e3] border-l-[3px] border-l-[#f26522] bg-white px-6 py-5 text-sm leading-relaxed text-[#486259] shadow-[0_10px_24px_rgba(20,49,38,0.08)]"><p>Used in various applications.</p><p className="mt-3">We offer equivalent orbitals compared to other brands:</p><p className="mt-2 font-semibold text-[#143126]">Model codes: BMR-40, BMR-125, BMR-160, BMR-200, BMR-250, BMR-315, BMR-32, BMR-36, BMR-400, BMR-50, BMR-80</p></div></div>
    </section>
  )
}

const tmpDescription =
  "Torque motors TMP series orbital motors are available in 10 different displacement sizes with different mounting flanges, shaft size and port size and configurations Replacement for various brand Parker®, White®, Eaton®/ Char-Lynn®, Danfoss® OMPX, M+S®. Displacement: 32 cm3/rev to 400 cm3/rev"

const tmpFeatures = [
  "TMP motors are compact, durable, and high-performing.",
  "TMP motors are dependable, long-lasting, and simple to maintain.",
  "TMP motors meet the requirement for continuous speed fluctuation.",
  "TMP motors use power and torque to their best advantage.",
  "TMP motors are available in a variety of sizes, including shaft variations, motor sizes, and torques.",
]

const tmpDetails = [
  { label: "Displacement", value: "32 cm3/rev to 400 cm3/rev" },
  { label: "Performance", value: "Compact, durable, and high-performing" },
  { label: "Maintenance", value: "Dependable, long-lasting, and simple to maintain" },
  { label: "Speed", value: "Meets the requirement for continuous speed fluctuation" },
  { label: "Options", value: "Shaft variations, motor sizes, and torques" },
]

const tmpSpecificationRows = [
  ["32", "31.8", "125", "900"],
  ["50", "52.9", "125", "800"],
  ["80", "79.3", "125", "770"],
  ["100", "98.2", "125", "615"],
  ["125", "120.9", "125", "480"],
  ["160", "158.7", "115", "385"],
  ["200", "196.4", "110", "310"],
  ["250", "241.8", "100", "250"],
  ["315", "317.3", "90", "195"],
  ["400", "392.2", "70", "155"],
]

function TMPSpecificationSection() {
  const headers = ["Model code", "Displacement", "Pressure", "Max Rpm"]

  return (
    <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-white py-14" style={{ backgroundImage: "radial-gradient(circle at 8% 15%, rgba(143,213,208,0.16), transparent 24%), radial-gradient(circle at 88% 82%, rgba(242,101,34,0.08), transparent 24%)" }}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]" style={{ backgroundImage: "radial-gradient(rgba(20,49,38,0.11) 0.7px, transparent 0.7px)", backgroundSize: "18px 18px" }} aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3"><span className="h-7 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden /><h2 className="text-2xl font-bold text-[#143126]">Specifications</h2></div>
        <div className="overflow-x-auto rounded-xl border border-[#dce5e3] bg-white shadow-[0_10px_24px_rgba(20,49,38,0.08)]">
          <table className="min-w-[580px] w-full border-collapse font-sans text-sm">
            <caption className="border-b border-[#dce5e3] bg-[#f7fafb] px-5 py-4 text-left text-xl font-bold text-[#f26522]">TMP Specifications</caption>
            <thead><tr className="border-b-2 border-[#f26522] bg-[#fff7f3]">{headers.map((header) => <th key={header} scope="col" className="border-r border-[#eaded8] px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.04em] text-[#a24421] last:border-r-0">{header}</th>)}</tr></thead>
            <tbody>{tmpSpecificationRows.map((row, rowIndex) => <tr key={row[0]} className="border-b border-[#e5ecea] transition-colors duration-200 hover:bg-[#fff7f3] last:border-b-0" style={{ background: rowIndex % 2 === 0 ? "#ffffff" : "#fafcfb" }}>{row.map((value, columnIndex) => <td key={`${row[0]}-${headers[columnIndex]}`} className={`border-r border-[#e5ecea] px-4 py-3 text-center text-xs text-[#34534a] last:border-r-0 ${columnIndex === 0 ? "font-bold text-[#143126]" : ""}`}>{value}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function TMPApplicationSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-white py-14">
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]" style={{ backgroundImage: "radial-gradient(rgba(20,49,38,0.11) 0.7px, transparent 0.7px)", backgroundSize: "18px 18px" }} aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-8 flex items-center gap-3"><span className="h-7 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden /><h2 className="text-2xl font-bold text-[#143126]">Applications</h2></div><div className="rounded-xl border border-[#dce5e3] border-l-[3px] border-l-[#f26522] bg-white px-6 py-5 text-sm leading-relaxed text-[#486259] shadow-[0_10px_24px_rgba(20,49,38,0.08)]">TMP motors are available in a variety of sizes, including shaft variations, motor sizes, and torques.</div></div>
    </section>
  )
}

const tmmDescription =
  "Torque motors TMM Series orbital motors with spool valve technology are available in 9 different displacement sizes with different mounting flanges, shaft size and port size and configurations. TMM series of motor are gear set design of Disc distribution flow and high pressure. Replacement for various brand Parker®, White®, Eaton®/Char-Lynn®, Danfoss®, M+S®. Displacement: 8 cm3/rev to 50 cm3/rev"

const tmmFeatures = [
  "TMM motors are compact, durable, and high-performing.",
  "TMM motors are dependable, long-lasting, and simple to maintain.",
  "TMM motors meet the requirement for continuous speed fluctuation.",
  "TMM motors use power and torque to their best advantage.",
  "TMM motors are available in a variety of sizes, including shaft variations, motor sizes, and torques.",
]

const tmmDetails = [
  { label: "Displacement", value: "8 cm3/rev to 50 cm3/rev" },
  { label: "Technology", value: "Spool valve" },
  { label: "Performance", value: "Compact, durable, and high-performing" },
  { label: "Maintenance", value: "Dependable, long-lasting, and simple to maintain" },
  { label: "Speed", value: "Meets the requirement for continuous speed fluctuation" },
]

const tmmSpecificationRows = [
  ["TMM 8", "8.2", "200", "1950", "16"],
  ["TMM 12.5", "12.9", "200", "1550", "20"],
  ["TMM 20", "19.9", "200", "1000", "20"],
  ["TMM 32", "31.6", "140", "630", "20"],
  ["TMM 40", "39.8", "140", "500", "20"],
  ["TMM 50", "50.3", "140", "400", "20"],
]

function TMMSpecificationSection() {
  const headers = ["Model code", "Displacement", "Pressure", "Max Rpm", "Max Flow"]

  return (
    <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-white py-14" style={{ backgroundImage: "radial-gradient(circle at 8% 15%, rgba(143,213,208,0.16), transparent 24%), radial-gradient(circle at 88% 82%, rgba(242,101,34,0.08), transparent 24%)" }}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]" style={{ backgroundImage: "radial-gradient(rgba(20,49,38,0.11) 0.7px, transparent 0.7px)", backgroundSize: "18px 18px" }} aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3"><span className="h-7 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden /><h2 className="text-2xl font-bold text-[#143126]">Specifications</h2></div>
        <div className="overflow-x-auto rounded-xl border border-[#dce5e3] bg-white shadow-[0_10px_24px_rgba(20,49,38,0.08)]">
          <table className="min-w-[680px] w-full border-collapse font-sans text-sm">
            <caption className="border-b border-[#dce5e3] bg-[#f7fafb] px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-[#143126]">TMM SPECIFICATIONS</caption>
            <thead><tr className="border-b-2 border-[#f26522] bg-[#fff7f3]">{headers.map((header) => <th key={header} scope="col" className="border-r border-[#eaded8] px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.04em] text-[#a24421] last:border-r-0">{header}</th>)}</tr></thead>
            <tbody>{tmmSpecificationRows.map((row, rowIndex) => <tr key={row[0]} className="border-b border-[#e5ecea] transition-colors duration-200 hover:bg-[#fff7f3] last:border-b-0" style={{ background: rowIndex % 2 === 0 ? "#ffffff" : "#fafcfb" }}>{row.map((value, columnIndex) => <td key={`${row[0]}-${headers[columnIndex]}`} className={`border-r border-[#e5ecea] px-4 py-3 text-center text-xs text-[#34534a] last:border-r-0 ${columnIndex === 0 ? "font-bold text-[#143126]" : ""}`}>{value}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function TMMApplicationSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-white py-14">
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]" style={{ backgroundImage: "radial-gradient(rgba(20,49,38,0.11) 0.7px, transparent 0.7px)", backgroundSize: "18px 18px" }} aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-8 flex items-center gap-3"><span className="h-7 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden /><h2 className="text-2xl font-bold text-[#143126]">Applications</h2></div><div className="rounded-xl border border-[#dce5e3] border-l-[3px] border-l-[#f26522] bg-white px-6 py-5 text-sm leading-relaxed text-[#486259] shadow-[0_10px_24px_rgba(20,49,38,0.08)]">For further details contact us by email or phone if you have any questions or want equivalent to your current motor with a Torque® motor.</div></div>
    </section>
  )
}

export function generateStaticParams() {
  return orbitalMotorProducts.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = orbitalMotorProducts.find((item) => item.slug === slug)
  return product ? { title: `${product.name} | Hydronex`, description: product.name } : {}
}

export default async function OrbitalMotorProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = orbitalMotorProducts.find((item) => item.slug === slug)
  if (!product) notFound()
  const isBreakMotor = product.slug === "torque-break-motors"
  const isTMHMotor = product.slug === "torque-tmh-series-orbital-motor"
  const isTMVMotor = product.slug === "torque-tmv-series-orbital-motor"
  const isTMTMotor = product.slug === "torque-tmt-series-orbital-motor"
  const isTMSMotor = product.slug === "torque-tms-series-orbital-motors"
  const isTMRMotor = product.slug === "torque-tmr-series-orbital-motor"
  const isTMPMotor = product.slug === "torque-tmp-series-orbital-motor"
  const isTMMMotor = product.slug === "torque-tmm-series-orbital-motor"
  const otherProducts = orbitalMotorProducts.filter((item) => item.slug !== product.slug).map((item) => ({ ...item, shortName: item.name }))

  return (
    <>
      <BSPProductDetail
        editorialHero
        categoryName="Orbital Motors"
        categoryHref="/products/hydraulic-motors/orbital-motors"
        parentCategoryName="Hydraulic Motors"
        parentCategoryHref="/products/hydraulic-motors"
        product={{
          name: product.name,
          shortName: product.name,
          slug: product.slug,
          image: product.image,
          description: isBreakMotor ? breakMotorsDescription : isTMHMotor ? tmhDescription : isTMVMotor ? tmvDescription : isTMTMotor ? tmtDescription : isTMSMotor ? tmsDescription : isTMRMotor ? tmrDescription : isTMPMotor ? tmpDescription : isTMMMotor ? tmmDescription : product.name,
          features: isBreakMotor ? breakMotorsFeatures : isTMHMotor ? tmhFeatures : isTMVMotor ? tmvFeatures : isTMTMotor ? tmtFeatures : isTMSMotor ? tmsFeatures : isTMRMotor ? tmrFeatures : isTMPMotor ? tmpFeatures : isTMMMotor ? tmmFeatures : [],
          specs: isBreakMotor ? breakMotorsDetails : isTMHMotor ? tmhDetails : isTMVMotor ? tmvDetails : isTMTMotor ? tmtDetails : isTMSMotor ? tmsDetails : isTMRMotor ? tmrDetails : isTMPMotor ? tmpDetails : isTMMMotor ? tmmDetails : [],
          applications: [],
          application: isBreakMotor ? breakMotorsApplications : undefined,
          applicationHeading: isBreakMotor ? "Applications" : undefined,
        }}
        additionalSpecificationSection={isBreakMotor ? <BreakMotorsSpecificationSection /> : isTMHMotor ? <><TMHSpecificationSection /><TMHModelCodeBreakdownSection /><TMHApplicationSection /></> : isTMVMotor ? <><TMVSpecificationSection /><TMHModelCodeBreakdownSection /><TMVApplicationSection /></> : isTMTMotor ? <><TMTSpecificationSection /><TMHModelCodeBreakdownSection /><TMTApplicationSection /></> : isTMSMotor ? <><TMSSpecificationSection /><TMSApplicationSection /></> : isTMRMotor ? <><TMRSpecificationSection /><TMHModelCodeBreakdownSection /><TMRApplicationSection /></> : isTMPMotor ? <><TMPSpecificationSection /><TMHModelCodeBreakdownSection /><TMPApplicationSection /></> : isTMMMotor ? <><TMMSpecificationSection /><TMMApplicationSection /></> : null}
        otherProductsSection={<><BSPOtherProducts products={otherProducts} basePath="/products/hydraulic-motors/orbital-motors" categoryLabel="Orbital Motors" /><BSPCtaSection title="Let’s specify the right orbital motor." description={product.name} buttonLabel="Talk to our team" ctaHref="/contact" /></>}
      />
      <LikedProductsDrawer />
      <LikedProductsFAB />
    </>
  )
}
