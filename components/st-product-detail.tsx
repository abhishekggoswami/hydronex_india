"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import type { StraightThroughCoupling } from "@/lib/straight-through-couplings"

interface STProductDetailProps {
  product: StraightThroughCoupling
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

const tableHeaderStyle = "bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] text-white"

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" aria-hidden />
      <h2 className="text-2xl font-bold text-gray-900">{children}</h2>
    </div>
  )
}

function DiagramBox({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      className="w-full max-w-xl mx-auto bg-white rounded-lg border border-gray-200 p-8 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow mb-8"
      whileHover={{ scale: 1.01 }}
    >
      <Image src={src} alt={alt} width={400} height={280} className="object-contain" />
    </motion.div>
  )
}

export function STProductDetail({ product }: STProductDetailProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* ── Features & Tech Specs ──────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid md:grid-cols-2 gap-12" variants={itemVariants}>
            <div>
              <h2 className="text-3xl font-bold mb-8 text-slate-900">Features</h2>
              <ul className="space-y-4">
                {product.features.map((f, i) => (
                  <motion.li key={i} className="flex items-start gap-3" variants={itemVariants}>
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex-shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </span>
                    <span className="text-slate-700">{f}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8 text-slate-900">Technical Specifications</h2>
              <ul className="space-y-4">
                {product.techSpecs.map((s, i) => (
                  <motion.li key={i} className="flex items-start gap-3 text-slate-700" variants={itemVariants}>
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>{s}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Coupler Female Thread ──────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants}>
            <SectionHeading>Coupler Female Thread</SectionHeading>
            <DiagramBox src={product.couplerFemaleDiagram} alt="Coupler Female Thread dimensional diagram" />
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className={tableHeaderStyle}>
                    <th className="px-4 py-3 text-left font-semibold">Part No. (Brass)</th>
                    <th className="px-4 py-3 text-left font-semibold">Part No. (Stainless)</th>
                    <th className="px-4 py-3 text-left font-semibold">Thread Size (NPT)</th>
                    <th className="px-4 py-3 text-center font-semibold">A Overall Length (in.)</th>
                    <th className="px-4 py-3 text-center font-semibold">B Wrench Flat (in.)</th>
                    <th className="px-4 py-3 text-center font-semibold">G Largest Dia. (in.)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.couplerFemaleTable.map((row, idx) => (
                    <motion.tr
                      key={idx}
                      className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`}
                      variants={itemVariants}
                    >
                      <td className="px-4 py-3 border-b border-gray-100 font-medium text-gray-900">{row.partNoBrass}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{row.partNoStainless || "–"}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{row.threadNPT}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.overallLengthIn}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.wrenchFlatIn}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.largestDiaIn}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Coupler Male Thread ───────────────────────────────────────── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants}>
            <SectionHeading>Coupler Male Thread</SectionHeading>
            <DiagramBox src={product.couplerMaleDiagram} alt="Coupler Male Thread dimensional diagram" />
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className={tableHeaderStyle}>
                    <th className="px-4 py-3 text-left font-semibold">Part No. (Brass)</th>
                    <th className="px-4 py-3 text-left font-semibold">Part No. (Stainless)</th>
                    <th className="px-4 py-3 text-left font-semibold">Thread Size (NPT)</th>
                    <th className="px-4 py-3 text-center font-semibold">A Overall Length (in.)</th>
                    <th className="px-4 py-3 text-center font-semibold">B Wrench Flat (in.)</th>
                    <th className="px-4 py-3 text-center font-semibold">G Largest Dia. (in.)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.couplerMaleTable.map((row, idx) => (
                    <motion.tr
                      key={idx}
                      className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`}
                      variants={itemVariants}
                    >
                      <td className="px-4 py-3 border-b border-gray-100 font-medium text-gray-900">{row.partNoBrass}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{row.partNoStainless || "–"}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{row.threadNPT}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.overallLengthIn}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.wrenchFlatIn}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.largestDiaIn}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Nipple Female Thread ──────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants}>
            <SectionHeading>Nipple Female Thread</SectionHeading>
            <DiagramBox src={product.nippleFemaleDiagram} alt="Nipple Female Thread dimensional diagram" />
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className={tableHeaderStyle}>
                    <th className="px-4 py-3 text-left font-semibold">Part No. (Brass)</th>
                    <th className="px-4 py-3 text-left font-semibold">Part No. (Stainless)</th>
                    <th className="px-4 py-3 text-left font-semibold">Part No. (Steel)</th>
                    <th className="px-4 py-3 text-left font-semibold">Thread Size (NPT)</th>
                    <th className="px-4 py-3 text-center font-semibold">D Overall Length (inch)</th>
                    <th className="px-4 py-3 text-center font-semibold">E Overall Length (inch)</th>
                    <th className="px-4 py-3 text-center font-semibold">F Hex Size (inch)</th>
                    <th className="px-4 py-3 text-center font-semibold">G Largest Dia. (inch)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.nippleFemaleTable.map((row, idx) => (
                    <motion.tr
                      key={idx}
                      className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`}
                      variants={itemVariants}
                    >
                      <td className="px-4 py-3 border-b border-gray-100 font-medium text-gray-900">{row.partNoBrass}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{row.partNoStainless || "–"}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{row.partNoSteel}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{row.threadNPT}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.dOverallIn}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.eOverallIn}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.fHexIn}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.gLargestDiaIn}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Nipple Male Thread ────────────────────────────────────────── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants}>
            <SectionHeading>Nipple Male Thread</SectionHeading>
            <DiagramBox src={product.nippleMaleDiagram} alt="Nipple Male Thread dimensional diagram" />
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className={tableHeaderStyle}>
                    <th className="px-4 py-3 text-left font-semibold">Part No. (Brass)</th>
                    <th className="px-4 py-3 text-left font-semibold">Part No. (Stainless)</th>
                    <th className="px-4 py-3 text-left font-semibold">Part No. (Steel)</th>
                    <th className="px-4 py-3 text-left font-semibold">Thread Size (NPT)</th>
                    <th className="px-4 py-3 text-center font-semibold">D Overall Length (inch)</th>
                    <th className="px-4 py-3 text-center font-semibold">E Overall Length (inch)</th>
                    <th className="px-4 py-3 text-center font-semibold">F Hex Size (inch)</th>
                    <th className="px-4 py-3 text-center font-semibold">G Largest Dia. (inch)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.nippleMaleTable.map((row, idx) => (
                    <motion.tr
                      key={idx}
                      className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`}
                      variants={itemVariants}
                    >
                      <td className="px-4 py-3 border-b border-gray-100 font-medium text-gray-900">{row.partNoBrass}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{row.partNoStainless || "–"}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{row.partNoSteel}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{row.threadNPT}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.dOverallIn}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.eOverallIn}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.fHexIn}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.gLargestDiaIn}</td>
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
                  <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                    <th className="px-4 py-3 text-center text-white font-semibold" colSpan={2}>Size</th>
                    <th className="px-4 py-3 text-center text-white font-semibold" rowSpan={2}>
                      Flow Rate<br />
                      <span className="text-xs font-normal opacity-90">l/min (GPM) @ 0.2 MPa pressure drop</span>
                    </th>
                    <th className="px-4 py-3 text-center text-white font-semibold" colSpan={3}>Rated Pressure — MPa (PSI)</th>
                  </tr>
                  <tr style={{ background: "linear-gradient(90deg, #0284c7 0%, #0891b2 100%)" }}>
                    <th className="px-4 py-3 text-center text-white font-medium text-xs">mm</th>
                    <th className="px-4 py-3 text-center text-white font-medium text-xs">inch</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-xs">BRASS</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-xs">STEEL</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-xs">STAINLESS STEEL</th>
                  </tr>
                </thead>
                <tbody>
                  {product.performanceTable.map((row, idx) => (
                    <motion.tr
                      key={idx}
                      className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`}
                      variants={itemVariants}
                    >
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.sizeMm}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.sizeInch}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.flowRate}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.pressureBrass}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.pressureSteel}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.pressureStainless}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Detail Spec Table (7-col) ─────────────────────────────────── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants}>
            <SectionHeading>Specification Details</SectionHeading>
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                    <th className="px-4 py-3 text-left text-white font-semibold">Body Size (in)</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Rated Pressure (PSI) — Brass</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Rated Pressure (PSI) — Steel</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Rated Pressure (PSI) — Other</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Rated Flow (L)</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Temperature Range (°C)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.detailTable.map((row, idx) => (
                    <motion.tr
                      key={idx}
                      className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`}
                      variants={itemVariants}
                    >
                      <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{row.bodySize}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-900 font-medium">{row.pressureBrass}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.pressureSteel}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.pressureOther}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.flowRateL}</td>
                      <td className="px-4 py-3 border-b border-gray-100 text-center text-gray-700">{row.tempRange}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
