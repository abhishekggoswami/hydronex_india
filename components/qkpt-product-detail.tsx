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

interface QKPTCouplerRow {
  partNo: string
  thread: string
  bodySize: string
  overallLengthMm: number
  hexSizeMm: number
  largestDiameterMm: number
  partNo2: string
  thread2: string
  bodySize2: string
  overallLengthIn: number
  hexSizeIn: number
  largestDiameterIn: number
}

interface QKPTNippleRow {
  partNo: string
  thread: string
  bodySize: string
  overallLengthMm: number
  exposedLengthMm: number
  hexSizeMm: number
  largestDiameterMm: number
  partNo2: string
  thread2: string
  bodySize2: string
  overallLengthIn: number
  exposedLengthIn: number
  hexSizeIn: number
}

interface QKPTPerformanceRow {
  sizeMm: string
  sizeInch: string
  pressure: string
  flowRate: string
  burstP1: string
  burstP2: string
  burstP3: string
  forceToConnect: string
}

interface QKPTProductDetailProps {
  product: {
    name: string
    basicSpecTable?: BasicSpecRow[]
    qkptCouplerTable?: QKPTCouplerRow[]
    qkptNippleTable?: QKPTNippleRow[]
    qkptPerformanceTable?: QKPTPerformanceRow[]
    qkptCouplerDiagramImage?: string
    qkptNippleDiagramImage?: string
  }
  otherProductsSection?: React.ReactNode
}

export function QKPTProductDetail({ product, otherProductsSection }: QKPTProductDetailProps) {
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
                      <th className="px-6 py-4 text-left text-sm font-semibold">Material</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Standard Seal Material</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Temperature Range (Std Seals)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.basicSpecTable.map((row, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-white hover:bg-blue-50 transition-colors" : "bg-slate-50 hover:bg-blue-50 transition-colors"}
                      >
                        <td className="px-6 py-4 text-sm text-slate-900 font-medium">{row.bodySize}</td>
                        <td className="px-6 py-4 text-sm text-slate-700">{row.ratedPressure}</td>
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

      {/* Female / Couplers Section */}
      {product.qkptCouplerDiagramImage && (
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
                    src={product.qkptCouplerDiagramImage}
                    alt="Couplers Female Thread Diagram"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              {product.qkptCouplerTable && product.qkptCouplerTable.length > 0 && (
                <div className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-blue-700 text-white">
                        <th colSpan={6} className="px-3 sm:px-6 py-4 text-left text-sm font-semibold border-r border-blue-500">Metric</th>
                        <th colSpan={6} className="px-3 sm:px-6 py-4 text-left text-sm font-semibold">Imperial</th>
                      </tr>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold">Part No.</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold">Thread Size</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold">Body Size</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold">Overall Length (mm)</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold">Hex Size (mm)</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold border-r border-blue-400">Largest Diameter (mm)</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold">Part No.</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold">Thread Size</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold">Body Size</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold">Overall Length (inch)</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold">Hex Size (inch)</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold">Largest Diameter (inch)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.qkptCouplerTable.map((row, idx) => (
                        <tr
                          key={idx}
                          className={idx % 2 === 0 ? "bg-white hover:bg-blue-50 transition-colors" : "bg-slate-50 hover:bg-blue-50 transition-colors"}
                        >
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-900 font-medium">{row.partNo}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.thread}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.bodySize}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.overallLengthMm}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.hexSizeMm}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700 border-r border-slate-200">{row.largestDiameterMm}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-900 font-medium">{row.partNo2}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.thread2}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.bodySize2}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.overallLengthIn}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.hexSizeIn}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.largestDiameterIn}</td>
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

      {/* Male / Nipples Section */}
      {product.qkptNippleDiagramImage && (
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
                    src={product.qkptNippleDiagramImage}
                    alt="Nipple Female Thread Diagram"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              {product.qkptNippleTable && product.qkptNippleTable.length > 0 && (
                <div className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-blue-700 text-white">
                        <th colSpan={7} className="px-3 sm:px-6 py-4 text-left text-sm font-semibold border-r border-blue-500">Metric</th>
                        <th colSpan={6} className="px-3 sm:px-6 py-4 text-left text-sm font-semibold">Imperial</th>
                      </tr>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold">Part No.</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold">Thread Size</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold">Body Size</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold">Overall Length (mm)</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold">Exposed Length (mm)</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold">Hex Size (mm)</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold border-r border-blue-400">Largest Diameter (mm)</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold">Part No.</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold">Thread Size</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold">Body Size</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold">Overall Length (in)</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold">Exposed Length (in)</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold">Hex Size (in)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.qkptNippleTable.map((row, idx) => (
                        <tr
                          key={idx}
                          className={idx % 2 === 0 ? "bg-white hover:bg-blue-50 transition-colors" : "bg-slate-50 hover:bg-blue-50 transition-colors"}
                        >
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-900 font-medium">{row.partNo}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.thread}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.bodySize}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.overallLengthMm}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.exposedLengthMm}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.hexSizeMm}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700 border-r border-slate-200">{row.largestDiameterMm}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-900 font-medium">{row.partNo2}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.thread2}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.bodySize2}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.overallLengthIn}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.exposedLengthIn}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.hexSizeIn}</td>
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

      {/* Performance Table */}
      {product.qkptPerformanceTable && product.qkptPerformanceTable.length > 0 && (
        <section className="py-16 sm:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Performance Specifications</h3>
              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-cyan-600 text-white">
                      <th colSpan={2} className="px-3 sm:px-6 py-3 text-center text-xs font-semibold border-r border-cyan-400">Size</th>
                      <th className="px-3 sm:px-6 py-3 text-center text-xs font-semibold border-r border-cyan-400">
                        <span className="block">Working Pressure</span>
                        <span className="block text-cyan-200 font-normal text-xs">@ 0.2 MPa pressure drop</span>
                      </th>
                      <th className="px-3 sm:px-6 py-3 text-center text-xs font-semibold border-r border-cyan-400">
                        <span className="block">Flow Rate</span>
                      </th>
                      <th colSpan={3} className="px-3 sm:px-6 py-3 text-center text-xs font-semibold border-r border-cyan-400">Burst Pressures</th>
                      <th className="px-3 sm:px-6 py-3 text-center text-xs font-semibold">Force to Connect</th>
                    </tr>
                    <tr className="bg-cyan-500 text-white">
                      <th className="px-3 sm:px-4 py-2 text-center text-xs font-semibold">mm</th>
                      <th className="px-3 sm:px-4 py-2 text-center text-xs font-semibold border-r border-cyan-400">inch.</th>
                      <th className="px-3 sm:px-4 py-2 text-center text-xs font-semibold border-r border-cyan-400">MPa (PSI)</th>
                      <th className="px-3 sm:px-4 py-2 text-center text-xs font-semibold border-r border-cyan-400">l/min (GPM)</th>
                      <th className="px-3 sm:px-4 py-2 text-center text-xs font-semibold">MPa (PSI)</th>
                      <th className="px-3 sm:px-4 py-2 text-center text-xs font-semibold">MPa (PSI)</th>
                      <th className="px-3 sm:px-4 py-2 text-center text-xs font-semibold border-r border-cyan-400">MPa (PSI)</th>
                      <th className="px-3 sm:px-4 py-2 text-center text-xs font-semibold">N</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.qkptPerformanceTable.map((row, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-white hover:bg-cyan-50 transition-colors" : "bg-slate-50 hover:bg-cyan-50 transition-colors"}
                      >
                        <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-900 font-medium text-center">{row.sizeMm}</td>
                        <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700 text-center border-r border-slate-200">{row.sizeInch}</td>
                        <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700 text-center border-r border-slate-200">{row.pressure}</td>
                        <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700 text-center border-r border-slate-200">{row.flowRate}</td>
                        <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700 text-center">{row.burstP1}</td>
                        <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700 text-center">{row.burstP2}</td>
                        <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700 text-center border-r border-slate-200">{row.burstP3}</td>
                        <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700 text-center">{row.forceToConnect}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Other Products */}
      {otherProductsSection && (
        <div>{otherProductsSection}</div>
      )}
    </>
  )
}
