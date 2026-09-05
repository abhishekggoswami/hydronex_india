"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Topography from "@/components/topography"

interface SpecsTableRow {
  partNo: string
  thread: string
  overallLengthMm: number
  hexSizeMm: number
  largestDiameterMm: number
}

interface ProductData {
  name: string
  shortName: string
  slug: string
  description: string
  material: string
  surfaceTreat: string
  application: string
  features: string[]
  specs: Array<{ label: string; value: string }>
  techSpecs?: string[]
  applications: string[]
  femaleSpecsTable: SpecsTableRow[]
  femaleDiagram: string
  maleSpecsTable: SpecsTableRow[]
  maleDiagram: string
}

interface KTCProductDetailProps {
  product: ProductData
}

export function KTCProductDetail({ product }: KTCProductDetailProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.section
      className="high-pressure-detail relative isolate overflow-hidden bg-[#f8fafc] py-16 sm:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <Topography className="pointer-events-none absolute inset-0 z-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={3.4} thickness={0.018} glow={0.22} opacity={0.07} mouseRadius={0.24} mouseStrength={0.3} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features & Technical Specs */}
        <motion.div
          className="mb-16 grid gap-10 overflow-hidden rounded-[1.5rem] bg-[linear-gradient(130deg,#061428,#0a2a52,#0d4080)] p-7 shadow-[0_22px_52px_rgba(11,31,55,.18)] md:grid-cols-2 md:p-10"
          variants={itemVariants}
        >
          <div>
            <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold text-white before:h-7 before:w-1 before:rounded-full before:bg-[#f26522] before:content-['']">Features</h2>
            <ul className="space-y-4">
              {product.features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  variants={itemVariants}
                >
                  <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#f26522] text-white shadow-[0_0_14px_rgba(242,101,34,.45)] mt-0.5">
                    ✓
                  </span>
                  <span className="text-white/85">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold text-white before:h-7 before:w-1 before:rounded-full before:bg-[#f26522] before:content-['']">
              Technical Specifications
            </h2>
            <ul className="space-y-4">
              {product.techSpecs?.map((spec, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-white/85"
                  variants={itemVariants}
                >
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>{spec}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Female Coupler */}
        <motion.div className="mb-20" variants={itemVariants}>
          <h2 className="mb-10 flex items-center gap-3 text-3xl font-bold text-[#0e1c35] before:h-7 before:w-1 before:rounded-full before:bg-[#f26522] before:content-['']">
            Female Coupler
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
            <motion.div
              className="relative flex h-96 w-full items-center justify-center overflow-hidden rounded-[1.5rem] border border-[#d0e4f5] bg-white p-8 shadow-[0_18px_38px_rgba(11,31,55,.14)] transition-shadow hover:shadow-[0_24px_52px_rgba(11,31,55,.24)]"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={product.femaleDiagram}
                alt="Female Coupler Diagram"
                width={300}
                height={300}
                className="object-contain"
              />
            </motion.div>
            <div>
              <p className="text-slate-600 mb-4">
                Precision-engineered female coupler designed for high-pressure
                applications with advanced sealing technology and reliable
                connection mechanisms.
              </p>
            </div>
          </div>

          {/* Female Specs Table */}
          <motion.div className="overflow-x-auto rounded-[1.1rem] border border-[#dce5e4] bg-white shadow-[0_12px_30px_rgba(11,31,55,.12)]" variants={itemVariants}>
            <table className="w-full">
              <thead>
                <tr className="bg-[linear-gradient(100deg,#c84000,#e05a2e,#f07d1a)] text-white">
                  <th className="px-6 py-4 text-left font-semibold">Part No.</th>
                  <th className="px-6 py-4 text-left font-semibold">Thread</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Overall Length (mm)
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Hex Size (mm)
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Largest Diameter (mm)
                  </th>
                </tr>
              </thead>
              <tbody>
                {product.femaleSpecsTable.map((row, index) => (
                  <motion.tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-white hover:bg-blue-50 transition-colors"
                        : "bg-slate-50 hover:bg-blue-50 transition-colors"
                    }
                    whileHover={{ backgroundColor: "rgb(240, 249, 255)" }}
                  >
                    <td className="px-6 py-4 border-b border-slate-200 font-medium text-slate-900">
                      {row.partNo}
                    </td>
                    <td className="px-6 py-4 border-b border-slate-200 text-slate-700">
                      {row.thread}
                    </td>
                    <td className="px-6 py-4 border-b border-slate-200 text-slate-700">
                      {row.overallLengthMm}
                    </td>
                    <td className="px-6 py-4 border-b border-slate-200 text-slate-700">
                      {row.hexSizeMm}
                    </td>
                    <td className="px-6 py-4 border-b border-slate-200 text-slate-700">
                      {row.largestDiameterMm}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>

        {/* Male Coupler */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="mb-10 flex items-center gap-3 text-3xl font-bold text-[#0e1c35] before:h-7 before:w-1 before:rounded-full before:bg-[#f26522] before:content-['']">Male Coupler</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
            <motion.div
              className="relative flex h-96 w-full items-center justify-center overflow-hidden rounded-[1.5rem] border border-[#d0e4f5] bg-white p-8 shadow-[0_18px_38px_rgba(11,31,55,.14)] transition-shadow hover:shadow-[0_24px_52px_rgba(11,31,55,.24)]"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={product.maleDiagram}
                alt="Male Coupler Diagram"
                width={300}
                height={300}
                className="object-contain"
              />
            </motion.div>
            <div>
              <p className="text-slate-600 mb-4">
                Heavy-duty male coupler built to handle extreme pressure
                environments with precision-engineered components ensuring
                reliable performance in demanding applications.
              </p>
            </div>
          </div>

          {/* Male Specs Table */}
          <motion.div className="overflow-x-auto rounded-[1.1rem] border border-[#dce5e4] bg-white shadow-[0_12px_30px_rgba(11,31,55,.12)]" variants={itemVariants}>
            <table className="w-full">
              <thead>
                <tr className="bg-[linear-gradient(100deg,#c84000,#e05a2e,#f07d1a)] text-white">
                  <th className="px-6 py-4 text-left font-semibold">Part No.</th>
                  <th className="px-6 py-4 text-left font-semibold">Thread</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Overall Length (mm)
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Hex Size (mm)
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Largest Diameter (mm)
                  </th>
                </tr>
              </thead>
              <tbody>
                {product.maleSpecsTable.map((row, index) => (
                  <motion.tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-white hover:bg-slate-50 transition-colors"
                        : "bg-slate-50 hover:bg-slate-100 transition-colors"
                    }
                    whileHover={{ backgroundColor: "rgb(248, 250, 252)" }}
                  >
                    <td className="px-6 py-4 border-b border-slate-200 font-medium text-slate-900">
                      {row.partNo}
                    </td>
                    <td className="px-6 py-4 border-b border-slate-200 text-slate-700">
                      {row.thread}
                    </td>
                    <td className="px-6 py-4 border-b border-slate-200 text-slate-700">
                      {row.overallLengthMm}
                    </td>
                    <td className="px-6 py-4 border-b border-slate-200 text-slate-700">
                      {row.hexSizeMm}
                    </td>
                    <td className="px-6 py-4 border-b border-slate-200 text-slate-700">
                      {row.largestDiameterMm}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
