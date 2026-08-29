"use client"

import Image from "next/image"
import { motion } from "framer-motion"

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
      className="py-20 bg-gradient-to-b from-background to-slate-50/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features & Technical Specs */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-16"
          variants={itemVariants}
        >
          <div>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Features</h2>
            <ul className="space-y-4">
              {product.features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  variants={itemVariants}
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-slate-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">
              Technical Specifications
            </h2>
            <ul className="space-y-4">
              {product.techSpecs?.map((spec, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-slate-700"
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
          <h2 className="text-3xl font-bold mb-12 text-slate-900">
            Female Coupler
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
            <motion.div
              className="relative w-full h-96 bg-white rounded-lg p-8 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
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
          <motion.div className="overflow-x-auto rounded-lg shadow-lg" variants={itemVariants}>
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
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
          <h2 className="text-3xl font-bold mb-12 text-slate-900">Male Coupler</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
            <motion.div
              className="relative w-full h-96 bg-white rounded-lg p-8 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
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
          <motion.div className="overflow-x-auto rounded-lg shadow-lg" variants={itemVariants}>
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
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
