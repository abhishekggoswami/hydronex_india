"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import type { DustPlugProduct } from "@/lib/dust-plug"
import Topography from "@/components/topography"

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

const tableHeaderStyle = "bg-[linear-gradient(100deg,#c84000,#e05a2e,#f07d1a)] text-white"

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <span className="h-7 w-1 flex-shrink-0 rounded-full bg-[#e05a2e]" aria-hidden />
      <h2 className="text-3xl font-bold text-[#0e1c35]">{children}</h2>
    </div>
  )
}

export function DustPlugDetail({ product }: DustPlugDetailProps) {
  return (
    <motion.div
      className="dust-plug-detail relative isolate overflow-hidden bg-[#f8fafc] py-16 sm:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <Topography
        className="pointer-events-none absolute inset-0 z-0"
        lowColor="#9eb8c3"
        midColor="#f26522"
        highColor="#ffffff"
        speed={0.18}
        morphAmount={1.7}
        bands={3.4}
        thickness={0.018}
        glow={0.22}
        opacity={0.07}
        mouseRadius={0.24}
        mouseStrength={0.3}
      />

      <div className="relative z-10">
        <section className="bg-transparent py-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div className="mb-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" variants={itemVariants}>
              {product.specs.map((spec, index) => (
                <motion.div
                  key={index}
                  className="group rounded-xl border border-[#dce5e4] border-l-[3px] border-l-[#f26522] bg-white/90 px-5 py-4 shadow-[0_8px_24px_rgba(11,31,55,.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(11,31,55,.12)]"
                  variants={itemVariants}
                >
                  <p className="mb-1 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#5d746e]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#f26522]" />
                    {spec.label}
                  </p>
                  <p className="pl-3.5 text-sm font-semibold leading-snug text-[#143126]">{spec.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {product.sections.map((section, sectionIdx) => (
          <section key={sectionIdx} className="bg-transparent py-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div variants={itemVariants}>
                <SectionHeading>{section.title}</SectionHeading>

                <motion.div
                  className="mb-8 flex min-h-80 w-full max-w-xl items-center justify-center rounded-[1.5rem] border border-[#d0e4f5] bg-white p-8 shadow-[0_18px_38px_rgba(11,31,55,.14)] transition-shadow hover:shadow-[0_24px_52px_rgba(11,31,55,.24)]"
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    width={480}
                    height={320}
                    className="object-contain"
                  />
                </motion.div>

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
                      {section.rows.map((row, index) => (
                        <motion.tr
                          key={index}
                          className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} transition-colors hover:bg-blue-50`}
                          variants={itemVariants}
                        >
                          <td className="border-b border-gray-100 px-6 py-3 font-semibold text-gray-900">{row.size}</td>
                          <td className="border-b border-gray-100 px-6 py-3 font-medium text-gray-800">{row.dustPlugPartNo}</td>
                          <td className="border-b border-gray-100 px-6 py-3 font-medium text-gray-800">{row.dustCapPartNo}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </motion.div>
  )
}
