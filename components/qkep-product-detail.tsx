'use client'

import Image from "next/image"
import { motion } from "framer-motion"

interface BasicSpecRow {
  bodySize: string
  ratedPressure: string
  flowRate: string
  material: string
  sealMaterial: string
  temperatureRange: string
}

interface CouplerRow {
  partNo: string
  thread: string
  overallLength: number
  hexSize: number
  largestDiameter: number
  partNo2: string
  thread2: string
  overallLength2: number
  hexSize2: number
  largestDiameter2: number
}

interface NippleRow {
  partNo: string
  thread: string
  overallLength: number
  hexSize: number
  largestDiameter: number | string
  partNo2: string
  thread2: string
  overallLength2: number
  hexSize2: number
  largestDiameter2: string
}

interface PerformanceRow {
  size: string
  inch: string
  pressure: string
  flowRate: string
  burstP1: string
  burstP2: string
  burstP3: string
}

interface DustProtectionRow {
  size: string
  inch: string
  partNoAluminum: string
  colorAluminum: string
  partNoPVC: string
  colorPVC: string
}

interface QKEPProductDetailProps {
  product: {
    name: string
    basicSpecTable?: BasicSpecRow[]
    couplerFemaleTable?: CouplerRow[]
    nippleTable?: NippleRow[]
    performanceTable?: PerformanceRow[]
    dustProtectionTable?: DustProtectionRow[]
    couplerDiagramImage?: string
    nippelDiagramImage?: string
  }
  otherProductsSection?: React.ReactNode
}

export function QKEPProductDetail({
  product,
  otherProductsSection,
}: QKEPProductDetailProps) {
  return (
    <>
      {/* Basic Specification Table */}
      {product.basicSpecTable && product.basicSpecTable.length > 0 && (
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Specification Details</h3>
              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="px-6 py-4 text-left text-sm font-semibold">Body Size (in)</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Rated Pressure (Bar)</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Flow Rate (L)</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Material</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Standard Seal Material</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Temperature Range (°C)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.basicSpecTable.map((row, idx) => (
                      <tr
                        key={idx}
                        className={
                          idx % 2 === 0
                            ? "bg-white hover:bg-blue-50 transition-colors"
                            : "bg-slate-50 hover:bg-blue-50 transition-colors"
                        }
                      >
                        <td className="px-6 py-4 text-sm text-slate-900 font-medium">{row.bodySize}</td>
                        <td className="px-6 py-4 text-sm text-slate-700">{row.ratedPressure}</td>
                        <td className="px-6 py-4 text-sm text-slate-700">{row.flowRate}</td>
                        <td className="px-6 py-4 text-sm text-slate-700">{row.material}</td>
                        <td className="px-6 py-4 text-sm text-slate-700">{row.sealMaterial}</td>
                        <td className="px-6 py-4 text-sm text-slate-700">{row.temperatureRange}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Couplers Female Thread Section */}
      {product.couplerDiagramImage && (
        <section className="py-16 sm:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Couplers Female Thread / Female</h3>
              <div className="mb-12 flex justify-center">
                <div className="relative w-full max-w-2xl h-64 sm:h-80">
                  <Image
                    src={product.couplerDiagramImage}
                    alt="Couplers Female Thread Diagram"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              {product.couplerFemaleTable && product.couplerFemaleTable.length > 0 && (
                <div className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-blue-700 text-white">
                        <th colSpan={5} className="px-3 sm:px-6 py-4 text-left text-sm font-semibold bg-blue-700">
                          Metric
                        </th>
                        <th colSpan={5} className="px-3 sm:px-6 py-4 text-left text-sm font-semibold">
                          Imperial
                        </th>
                      </tr>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Part No.</th>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Thread</th>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Overall Length (mm)</th>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Hex Size (mm)</th>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Largest Diameter (mm)</th>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Part No.</th>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Thread</th>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Overall Length (in)</th>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Hex Size (in)</th>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Largest Diameter (in)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.couplerFemaleTable.map((row, idx) => (
                        <tr
                          key={idx}
                          className={
                            idx % 2 === 0
                              ? "bg-white hover:bg-blue-50 transition-colors"
                              : "bg-slate-50 hover:bg-blue-50 transition-colors"
                          }
                        >
                          <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-900 font-medium">{row.partNo}</td>
                          <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">{row.thread}</td>
                          <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">{row.overallLength}</td>
                          <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">{row.hexSize}</td>
                          <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">{row.largestDiameter}</td>
                          <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-900 font-medium">{row.partNo2}</td>
                          <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">{row.thread2}</td>
                          <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">{row.overallLength2}</td>
                          <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">{row.hexSize2}</td>
                          <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">{row.largestDiameter2}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Nipple Female Thread / Male Section */}
      {product.nippelDiagramImage && (
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Nipple Female Thread / Male</h3>
              <div className="mb-12 flex justify-center">
                <div className="relative w-full max-w-2xl h-64 sm:h-80">
                  <Image
                    src={product.nippelDiagramImage}
                    alt="Nipple Female Thread Diagram"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              {product.nippleTable && product.nippleTable.length > 0 && (
                <div className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-blue-700 text-white">
                        <th colSpan={5} className="px-3 sm:px-6 py-4 text-left text-sm font-semibold bg-blue-700">
                          Metric
                        </th>
                        <th colSpan={5} className="px-3 sm:px-6 py-4 text-left text-sm font-semibold">
                          Imperial
                        </th>
                      </tr>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Part No.</th>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Thread</th>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Overall Length (mm)</th>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Hex Size (mm)</th>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Largest Diameter (mm)</th>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Part No.</th>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Thread</th>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Overall Length (mm)</th>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Hex Size (mm)</th>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Largest Diameter (mm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.nippleTable.map((row, idx) => (
                        <tr
                          key={idx}
                          className={
                            idx % 2 === 0
                              ? "bg-white hover:bg-blue-50 transition-colors"
                              : "bg-slate-50 hover:bg-blue-50 transition-colors"
                          }
                        >
                          <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-900 font-medium">{row.partNo}</td>
                          <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">{row.thread}</td>
                          <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">{row.overallLength}</td>
                          <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">{row.hexSize}</td>
                          <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">{row.largestDiameter}</td>
                          <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-900 font-medium">{row.partNo2}</td>
                          <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">{row.thread2}</td>
                          <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">{row.overallLength2}</td>
                          <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">{row.hexSize2}</td>
                          <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">{row.largestDiameter2}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Dust Protection / Accessories Table */}
      {product.dustProtectionTable && product.dustProtectionTable.length > 0 && (
        <section className="py-16 sm:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Accessories - Dust Protections</h3>
              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-red-600 text-white">
                      <th className="px-3 sm:px-6 py-4 text-left text-sm font-semibold">Size (mm)</th>
                      <th className="px-3 sm:px-6 py-4 text-left text-sm font-semibold">Size (inch)</th>
                      <th className="px-3 sm:px-6 py-4 text-left text-sm font-semibold">Aluminum Part Number</th>
                      <th className="px-3 sm:px-6 py-4 text-left text-sm font-semibold">Aluminum Color</th>
                      <th className="px-3 sm:px-6 py-4 text-left text-sm font-semibold">PVC Part Number</th>
                      <th className="px-3 sm:px-6 py-4 text-left text-sm font-semibold">PVC Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.dustProtectionTable.map((row, idx) => (
                      <tr
                        key={idx}
                        className={
                          idx % 2 === 0
                            ? "bg-white hover:red-50 transition-colors"
                            : "bg-slate-50 hover:red-50 transition-colors"
                        }
                      >
                        <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-900 font-medium">{row.size}</td>
                        <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">{row.inch}</td>
                        <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">{row.partNoAluminum}</td>
                        <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm">
                          <span
                            className="inline-block w-5 h-5 rounded-full border border-slate-300"
                            style={{
                              backgroundColor:
                                row.colorAluminum.toLowerCase() === "red"
                                  ? "#ef4444"
                                  : row.colorAluminum.toLowerCase() === "green"
                                    ? "#22c55e"
                                    : "#94a3b8",
                            }}
                          />
                        </td>
                        <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">{row.partNoPVC}</td>
                        <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm">
                          <span
                            className="inline-block w-5 h-5 rounded-full border border-slate-300"
                            style={{
                              backgroundColor:
                                row.colorPVC.toLowerCase() === "red"
                                  ? "#ef4444"
                                  : row.colorPVC.toLowerCase() === "green"
                                    ? "#22c55e"
                                    : "#94a3b8",
                            }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Performance Table */}
      {product.performanceTable && product.performanceTable.length > 0 && (
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Performance Specifications</h3>
              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-cyan-500 text-white">
                      <th colSpan={2} className="px-3 sm:px-6 py-4 text-left text-sm font-semibold">
                        Size
                      </th>
                      <th className="px-3 sm:px-6 py-4 text-left text-sm font-semibold">
                        Working Pressure @ 0.2 MPa pressure drop
                      </th>
                      <th className="px-3 sm:px-6 py-4 text-left text-sm font-semibold">
                        Flow Rate
                      </th>
                      <th colSpan={3} className="px-3 sm:px-6 py-4 text-left text-sm font-semibold">
                        Burst Pressures
                      </th>
                    </tr>
                    <tr className="bg-cyan-400 text-white">
                      <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">mm</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">inch</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">MPa (PSI)</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">l/min (GPM)</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">MPa (PSI)</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">MPa (PSI)</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">MPa (PSI)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.performanceTable.map((row, idx) => (
                      <tr
                        key={idx}
                        className={
                          idx % 2 === 0
                            ? "bg-white hover:bg-cyan-50 transition-colors"
                            : "bg-slate-50 hover:bg-cyan-50 transition-colors"
                        }
                      >
                        <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-900 font-medium">{row.size}</td>
                        <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">{row.inch}</td>
                        <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">{row.pressure}</td>
                        <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">{row.flowRate}</td>
                        <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">{row.burstP1}</td>
                        <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">{row.burstP2}</td>
                        <td className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-slate-700">{row.burstP3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Other Products Section */}
      {otherProductsSection}
    </>
  )
}
