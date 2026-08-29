"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ISOAProductDetail } from "@/components/iso-a-product-detail"

interface SpecificationTableRow {
  bodySize: string
  ratedPressure: string
  flowRate: string
  material: string
  sealMaterial: string
  temperatureRange: string
}

interface DetailedSpecificationTableRow {
  partNumberMetric: string
  threadMetric: string
  overallLengthMm: string
  hexSizeMm: string
  largestDiameterMm: string
  partNumberImperial: string
  threadImperial: string
  overallLengthInch: string
  hexSizeInch: string
  largestDiameterInch: string
}

interface FlatFaceProductDetailProps {
  product: {
    name: string
    shortName: string
    slug: string
    description: string
    material: string
    surfaceTreat: string
    application: string
    features: string[]
    specs: Array<{ label: string; value: string }>
    applications: string[]
    image: string
    diagram?: string
    specificationTable?: SpecificationTableRow[]
    detailedSpecificationTable?: DetailedSpecificationTableRow[]
  }
  otherProductsSection?: React.ReactNode
}

export function FlatFaceProductDetail({
  product,
  otherProductsSection,
}: FlatFaceProductDetailProps) {
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
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <>
      {/* Main Product Detail - WITHOUT other products section */}
      <ISOAProductDetail
        product={product}
        otherProductsSection={undefined}
        category="flat-face"
        categoryLabel="Flat Face Couplers"
      />

      {/* Diagram and Specification Tables Section */}
      {(product.diagram || product.specificationTable) && (
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Diagram Section */}
              {product.diagram && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  className="mb-16">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-900">
                    Technical Diagram
                  </h2>
                  <div className="flex justify-center bg-slate-50 rounded-lg p-8 border border-slate-200">
                    <div className="relative w-full max-w-2xl h-64 sm:h-80">
                      <Image
                        src={product.diagram}
                        alt="Product Diagram"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Specification Table */}
              {product.specificationTable && product.specificationTable.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  className="mb-16">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-900">
                    Specification Details
                  </h2>
                  <div className="overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-blue-600 text-white">
                          <th className="px-6 py-4 text-left text-sm font-semibold">
                            Body Size (in)
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold">
                            Rated Pressure (Bar)
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold">
                            Flow Rate (L)
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold">
                            Material
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold">
                            Standard Seal Material
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold">
                            Temperature Range (°C)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.specificationTable.map((row, idx) => (
                          <tr
                            key={idx}
                            className={
                              idx % 2 === 0
                                ? "bg-white hover:bg-blue-50 transition-colors"
                                : "bg-slate-50 hover:bg-blue-50 transition-colors"
                            }
                          >
                            <td className="px-6 py-4 text-sm text-slate-900 font-medium">
                              {row.bodySize}
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-700">
                              {row.ratedPressure}
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-700">
                              {row.flowRate}
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-700">
                              {row.material}
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-700">
                              {row.sealMaterial}
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-700">
                              {row.temperatureRange}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {/* Detailed Specification Table */}
              {product.detailedSpecificationTable && product.detailedSpecificationTable.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                  className="mb-16">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Detailed Specifications</h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-blue-600 text-white">
                          <th colSpan={5} className="px-3 sm:px-6 py-4 text-left text-sm font-semibold bg-blue-700">
                            Metric
                          </th>
                          <th colSpan={5} className="px-3 sm:px-6 py-4 text-left text-sm font-semibold">
                            Imperial
                          </th>
                        </tr>
                        <tr className="bg-blue-600 text-white">
                          <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">
                            Part No.
                          </th>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">
                            Thread
                          </th>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">
                            Overall Length (mm)
                          </th>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">
                            Hex Size (mm)
                          </th>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">
                            Largest Diameter (mm)
                          </th>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">
                            Part No.
                          </th>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">
                            Thread
                          </th>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">
                            Overall Length (in)
                          </th>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">
                            Hex Size (in)
                          </th>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">
                            Largest Diameter (in)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.detailedSpecificationTable.map((row, idx) => (
                          <tr
                            key={idx}
                            className={
                              idx % 2 === 0
                                ? "bg-white hover:bg-blue-50 transition-colors"
                                : "bg-slate-50 hover:bg-blue-50 transition-colors"
                            }
                          >
                            <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-900 font-medium">
                              {row.partNumberMetric}
                            </td>
                            <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">
                              {row.threadMetric}
                            </td>
                            <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">
                              {row.overallLengthMm}
                            </td>
                            <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">
                              {row.hexSizeMm}
                            </td>
                            <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">
                              {row.largestDiameterMm}
                            </td>
                            <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-900 font-medium">
                              {row.partNumberImperial}
                            </td>
                            <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">
                              {row.threadImperial}
                            </td>
                            <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">
                              {row.overallLengthInch}
                            </td>
                            <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">
                              {row.hexSizeInch}
                            </td>
                            <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">
                              {row.largestDiameterInch}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Other Products Section */}
      {otherProductsSection}
    </>
  )
}
