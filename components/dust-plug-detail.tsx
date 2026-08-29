"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import type { DustPlugProduct } from "@/lib/dust-plug"

interface DustPlugDetailProps {
  product: DustPlugProduct
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

export function DustPlugDetail({ product }: DustPlugDetailProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {product.sections.map((section, sectionIdx) => (
        <section
          key={sectionIdx}
          className={`py-14 ${sectionIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={itemVariants}>
              <SectionHeading>{section.title}</SectionHeading>

              {/* Product image */}
              <motion.div
                className="w-full max-w-xl mx-auto bg-white rounded-lg border border-gray-200 p-8 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow mb-8"
                whileHover={{ scale: 1.01 }}
              >
                <Image
                  src={section.image}
                  alt={section.imageAlt}
                  width={480}
                  height={320}
                  className="object-contain"
                />
              </motion.div>

              {/* Table */}
              <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className={tableHeaderStyle}>
                      <th className="px-6 py-3 text-left font-semibold">Size</th>
                      <th className="px-6 py-3 text-left font-semibold">
                        Dust Plug Part No. (Rubber) — Coupler / Female Half
                      </th>
                      <th className="px-6 py-3 text-left font-semibold">
                        Dust Cap Part No. (Rubber) — Nipple / Male Half
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((row, idx) => (
                      <motion.tr
                        key={idx}
                        className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`}
                        variants={itemVariants}
                      >
                        <td className="px-6 py-3 border-b border-gray-100 font-semibold text-gray-900">
                          {row.size}
                        </td>
                        <td className="px-6 py-3 border-b border-gray-100 font-medium text-gray-800">
                          {row.dustPlugPartNo}
                        </td>
                        <td className="px-6 py-3 border-b border-gray-100 font-medium text-gray-800">
                          {row.dustCapPartNo}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </motion.div>
  )
}
