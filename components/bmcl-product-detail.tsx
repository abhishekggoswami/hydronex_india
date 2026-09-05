"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import type { BrassMoldCoolantProduct } from "@/lib/brass-mold-coolant"
import Topography from "@/components/topography"

interface BMCLProductDetailProps {
  product: BrassMoldCoolantProduct
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const tableHeaderStyle = "bg-[linear-gradient(100deg,#c84000,#e05a2e,#f07d1a)] text-white"

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" aria-hidden />
      <h2 className="text-3xl font-bold text-[#0e1c35]">{children}</h2>
    </div>
  )
}

function DiagramBox({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      className="w-full max-w-xl mx-auto min-h-80 bg-white rounded-[1.5rem] border border-[#d0e4f5] p-8 flex items-center justify-center shadow-[0_18px_38px_rgba(11,31,55,.14)] hover:shadow-[0_24px_52px_rgba(11,31,55,.24)] transition-shadow mb-8"
      whileHover={{ scale: 1.02 }}
    >
      <Image src={src} alt={alt} width={400} height={280} className="object-contain" />
    </motion.div>
  )
}

type CouplerRow = {
  partNo: string
  threadBSPP: string
  overallLengthMm: number | string
  exposedLengthMm: number | string
  hexSizeMm: number | string
}

function CouplerTable({ rows }: { rows: CouplerRow[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className={tableHeaderStyle}>
            <th className="px-4 py-3 text-left font-semibold">Part No.</th>
            <th className="px-4 py-3 text-left font-semibold">Thread Size (BSPP)</th>
            <th className="px-4 py-3 text-center font-semibold">Overall Length (mm)</th>
            <th className="px-4 py-3 text-center font-semibold">Exposed Length (mm)</th>
            <th className="px-4 py-3 text-center font-semibold">Hex Size (mm)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <motion.tr
              key={idx}
              className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`}
              variants={itemVariants}
            >
              <td className="px-4 py-3 border-b border-gray-100 font-medium text-gray-900">{row.partNo}</td>
              <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{row.threadBSPP}</td>
              <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.overallLengthMm}</td>
              <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.exposedLengthMm}</td>
              <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.hexSizeMm}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function BMCLProductDetail({ product }: BMCLProductDetailProps) {
  return (
    <motion.div
      className="bmcl-high-pressure-detail relative isolate overflow-hidden bg-[#f8fafc] py-16 sm:py-20"
      initial="visible"
      animate="visible"
      variants={containerVariants}
    >
      <Topography className="pointer-events-none absolute inset-0 z-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={3.4} thickness={0.018} glow={0.22} opacity={0.07} mouseRadius={0.24} mouseStrength={0.3} />
      <div className="relative z-10">
      {/* ── Features & Tech Specs ──────────────────────────────────────── */}
      <section className="py-0 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-16 grid gap-10 overflow-hidden rounded-[1.5rem] bg-[linear-gradient(130deg,#061428,#0a2a52,#0d4080)] p-7 shadow-[0_22px_52px_rgba(11,31,55,.18)] md:grid-cols-2 md:p-10" variants={itemVariants}>
            <div>
              <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold text-white before:h-7 before:w-1 before:rounded-full before:bg-[#f26522] before:content-['']">Features</h2>
              <ul className="space-y-4">
                {product.features.map((f, i) => (
                  <motion.li key={i} className="flex items-start gap-3" variants={itemVariants}>
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#f26522] text-white shadow-[0_0_14px_rgba(242,101,34,.45)] flex-shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </span>
                    <span className="text-white/85">{f}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold text-white before:h-7 before:w-1 before:rounded-full before:bg-[#f26522] before:content-['']">Technical Specifications</h2>
              <ul className="space-y-4">
                {product.techSpecs.map((s, i) => (
                  <motion.li key={i} className="flex items-start gap-3 text-white/85" variants={itemVariants}>
                    <span className="mt-0.5 font-bold text-[#f26522]">•</span>
                    <span>{s}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div className="mb-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" variants={itemVariants}>
            {product.specs.map((spec, index) => (
              <motion.div key={index} className="group rounded-xl border border-[#dce5e4] border-l-[3px] border-l-[#f26522] bg-white/90 px-5 py-4 shadow-[0_8px_24px_rgba(11,31,55,.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(11,31,55,.12)]" variants={itemVariants}>
                <p className="mb-1 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#5d746e]"><span className="h-1.5 w-1.5 rounded-full bg-[#f26522]" />{spec.label}</p>
                <p className="pl-3.5 text-sm font-semibold leading-snug text-[#143126]">{spec.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Coupler - Straight ─────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants}>
            <SectionHeading>Coupler - Straight</SectionHeading>
            <DiagramBox src={product.couplerStraightDiagram} alt="Coupler Straight dimensional diagram" />
            <CouplerTable rows={product.couplerStraightTable} />
          </motion.div>
        </div>
      </section>

      {/* ── Coupler - 45 Degree ───────────────────────────────────────── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants}>
            <SectionHeading>Coupler - 45 Degree</SectionHeading>
            <DiagramBox src={product.coupler45Diagram} alt="Coupler 45 Degree dimensional diagram" />
            <CouplerTable rows={product.coupler45Table} />
          </motion.div>
        </div>
      </section>

      {/* ── Coupler - 90 Degree ───────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants}>
            <SectionHeading>Coupler - 90 Degree</SectionHeading>
            <DiagramBox src={product.coupler90Diagram} alt="Coupler 90 Degree dimensional diagram" />
            <CouplerTable rows={product.coupler90Table} />
          </motion.div>
        </div>
      </section>

      {/* ── Sub Assemblies ────────────────────────────────────────────── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants}>
            <SectionHeading>Sub Assemblies</SectionHeading>
            <DiagramBox src={product.subAssemblyDiagram} alt="Sub Assembly dimensional diagram" />
            <CouplerTable rows={product.subAssemblyTable} />
          </motion.div>
        </div>
      </section>

      {/* ── Nipples - Female Pipe Thread (6-col) ─────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants}>
            <SectionHeading>Nipples - Female Pipe Thread</SectionHeading>
            <DiagramBox src={product.nippleFemDiagram} alt="Nipple Female Pipe Thread dimensional diagram" />
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className={tableHeaderStyle}>
                    <th className="px-4 py-3 text-left font-semibold">Part No.</th>
                    <th className="px-4 py-3 text-left font-semibold">Thread Size</th>
                    <th className="px-4 py-3 text-center font-semibold">Overall Length D (inch)</th>
                    <th className="px-4 py-3 text-center font-semibold">Overall Length E (inch)</th>
                    <th className="px-4 py-3 text-center font-semibold">Hex Size (inch)</th>
                    <th className="px-4 py-3 text-center font-semibold">Largest Diameter (inch)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.nippleFemTable.map((row, idx) => (
                    <motion.tr key={idx} className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`} variants={itemVariants}>
                      <td className="px-4 py-3 border-b border-gray-100 font-medium text-gray-900">{row.partNo}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{row.threadSize}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.overallLengthD}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.overallLengthE}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.hexSize}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.largestDia}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Male Pipe Thread (8-col) ──────────────────────────────────── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants}>
            <SectionHeading>Male Pipe Thread</SectionHeading>
            <DiagramBox src={product.nippleMaleDiagram} alt="Male Pipe Thread nipple dimensional diagram" />
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className={tableHeaderStyle}>
                    <th className="px-4 py-3 text-left font-semibold">Part No.</th>
                    <th className="px-4 py-3 text-left font-semibold">Thread Size</th>
                    <th className="px-4 py-3 text-center font-semibold">Overall Length D (inch)</th>
                    <th className="px-4 py-3 text-center font-semibold">Overall Length E (inch)</th>
                    <th className="px-4 py-3 text-center font-semibold">Hex Size F (inch)</th>
                    <th className="px-4 py-3 text-center font-semibold">Largest Dia. G (inch)</th>
                    <th className="px-4 py-3 text-center font-semibold">Largest Dia. A (inch)</th>
                    <th className="px-4 py-3 text-center font-semibold">Recess B (inch)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.nippleMaleTable.map((row, idx) => (
                    <motion.tr key={idx} className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`} variants={itemVariants}>
                      <td className="px-4 py-3 border-b border-gray-100 font-medium text-gray-900">{row.partNo}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{row.threadSize}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.overallLengthD}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.overallLengthE}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.hexSizeF}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.largestDiaG}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.largestDiaA}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.recessB}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Sub Assemblies V-series (5-col A/B/C) ────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants}>
            <SectionHeading>Sub Assemblies</SectionHeading>
            <DiagramBox src={product.subAssemblyVDiagram} alt="Sub Assemblies V-series dimensional diagram" />
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className={tableHeaderStyle}>
                    <th className="px-4 py-3 text-left font-semibold">Part No.</th>
                    <th className="px-4 py-3 text-left font-semibold">Thread Size</th>
                    <th className="px-4 py-3 text-center font-semibold">Largest Dia. A (inch)</th>
                    <th className="px-4 py-3 text-center font-semibold">Recess B (inch)</th>
                    <th className="px-4 py-3 text-center font-semibold">Hex Size C (inch)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.subAssemblyVTable.map((row, idx) => (
                    <motion.tr key={idx} className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`} variants={itemVariants}>
                      <td className="px-4 py-3 border-b border-gray-100 font-medium text-gray-900">{row.partNo}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{row.threadSize}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.largestDiaA}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.recessB}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.hexSizeC}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Male Pipe Thread V-variant (6-col) ───────────────────────── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants}>
            <SectionHeading>Male Pipe Thread</SectionHeading>
            <DiagramBox src={product.malePipeVDiagram} alt="Male Pipe Thread V-variant dimensional diagram" />
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className={tableHeaderStyle}>
                    <th className="px-4 py-3 text-left font-semibold">Part No.</th>
                    <th className="px-4 py-3 text-left font-semibold">Thread Size</th>
                    <th className="px-4 py-3 text-center font-semibold">Overall Length D (inch)</th>
                    <th className="px-4 py-3 text-center font-semibold">Overall Length E (inch)</th>
                    <th className="px-4 py-3 text-center font-semibold">Hex Size F (inch)</th>
                    <th className="px-4 py-3 text-center font-semibold">Largest Diameter G (inch)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.malePipeVTable.map((row, idx) => (
                    <motion.tr key={idx} className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`} variants={itemVariants}>
                      <td className="px-4 py-3 border-b border-gray-100 font-medium text-gray-900">{row.partNo}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{row.threadSize}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.overallLengthD}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.overallLengthE}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.hexSizeF}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.largestDiaG}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Performance Table (7-col) ─────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants}>
            <SectionHeading>Performance Data</SectionHeading>
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className={tableHeaderStyle}>
                    <th className="px-4 py-3 text-center font-semibold" colSpan={2}>Size 规格</th>
                    <th className="px-4 py-3 text-center font-semibold">Working Pressure 工作压力</th>
                    <th className="px-4 py-3 text-center font-semibold">Flow Rate 额定流量<br /><span className="text-xs font-normal opacity-80">@ 0.2 MPa pressure drop</span></th>
                    <th className="px-4 py-3 text-center font-semibold" colSpan={3}>Burst Pressures 爆破压力</th>
                  </tr>
                  <tr style={{ background: "#0284c7" }}>
                    <th className="px-4 py-2 text-center text-white text-xs font-semibold">mm</th>
                    <th className="px-4 py-2 text-center text-white text-xs font-semibold">inch.</th>
                    <th className="px-4 py-2 text-center text-white text-xs font-semibold">MPa <em>(PSI)</em></th>
                    <th className="px-4 py-2 text-center text-white text-xs font-semibold">l/min <em>(GPM)</em></th>
                    <th className="px-4 py-2 text-center text-white text-xs font-semibold">MPa <em>(PSI)</em></th>
                    <th className="px-4 py-2 text-center text-white text-xs font-semibold">MPa <em>(PSI)</em></th>
                    <th className="px-4 py-2 text-center text-white text-xs font-semibold">MPa <em>(PSI)</em></th>
                  </tr>
                </thead>
                <tbody>
                  {product.performanceTable.map((row, idx) => (
                    <motion.tr key={idx} className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`} variants={itemVariants}>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.sizeMm}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.sizeInch}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.workingPressure}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.flowRate}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.burstP1}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.burstP2}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.burstP3}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Detail Spec Table (4-col) ─────────────────────────────────── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants}>
            <SectionHeading>Specification Details</SectionHeading>
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                    <th className="px-4 py-3 text-left text-white font-semibold">Body Size (in)</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Rated Pressure (Bar)</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Material</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Temperature Range (Std Seals)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.detailTable.map((row, idx) => (
                    <motion.tr
                      key={idx}
                      className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`}
                      variants={itemVariants}
                    >
                      <td className="px-4 py-3 border-b border-gray-100 text-gray-700 font-medium">{row.bodySize}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-900 font-medium">{row.ratedPressureBar}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.material}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.tempRange}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </motion.div>
  )
}
