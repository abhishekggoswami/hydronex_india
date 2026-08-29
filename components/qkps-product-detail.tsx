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

interface QKPSNippleRow {
  partNo: string
  thread: string
  bsppBodySize: string
  overallLengthMm: number
  exposedLengthMm: number
  hexSizeMm: number
  largestDiameterMm: number
  partNo2: string
  thread2: string
  bsppBodySize2: string
  overallLengthIn: number
  exposedLengthIn: number
  hexSizeIn: number
  largestDiameterIn: number
}

interface QKPSCouplerRow {
  partNo: string
  thread: string
  bsppBodySize: string
  overallLengthMm: number
  hexSizeMm: number
  largestDiameterMm: number
  partNo2: string
  thread2: string
  bsppBodySize2: string
  overallLengthIn: number
  hexSizeIn: number
  largestDiameterIn: number
}

interface QKPSDustRow {
  sizeMm: string
  sizeInch: string
  nipplePvcPartNo: string
  nippleAluminumPartNo: string
  couplerPvcPartNo: string
  couplerAluminumPartNo: string
}

interface QKPSProductDetailProps {
  product: {
    name: string
    basicSpecTable?: BasicSpecRow[]
    qkpsNippleTable?: QKPSNippleRow[]
    qkpsCouplerTable?: QKPSCouplerRow[]
    qkpsDustProtectionTable?: QKPSDustRow[]
    qkpsNippleDiagramImage?: string
    qkpsCouplerDiagramImage?: string
  }
  otherProductsSection?: React.ReactNode
}

export function QKPSProductDetail({ product, otherProductsSection }: QKPSProductDetailProps) {
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
                      <th className="px-6 py-4 text-left text-sm font-semibold">Temperature Range (°C)</th>
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

      {/* Nipple Female Thread / Male Section */}
      {product.qkpsNippleDiagramImage && (
        <section className="py-16 sm:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Nipple Female Thread / Male</h3>
              <div className="mb-12 flex justify-center">
                <div className="relative w-full max-w-2xl h-64 sm:h-80">
                  <Image
                    src={product.qkpsNippleDiagramImage}
                    alt="Nipple Female Thread Male Diagram"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              {product.qkpsNippleTable && product.qkpsNippleTable.length > 0 && (
                <div className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-blue-700 text-white">
                        <th colSpan={7} className="px-3 sm:px-6 py-4 text-left text-sm font-semibold border-r border-blue-500">Metric</th>
                        <th colSpan={7} className="px-3 sm:px-6 py-4 text-left text-sm font-semibold">Imperial</th>
                      </tr>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold whitespace-nowrap">Part No.</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold whitespace-nowrap">Thread Size</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold whitespace-nowrap">BSPP Body Size</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold whitespace-nowrap">A Overall Length (mm)</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold whitespace-nowrap">B Exposed Length (mm)</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold whitespace-nowrap">C Hex Size (mm)</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold whitespace-nowrap border-r border-blue-400">D Largest Diameter (mm)</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold whitespace-nowrap">Part No.</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold whitespace-nowrap">Thread Size</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold whitespace-nowrap">BSPP Body Size</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold whitespace-nowrap">A Overall Length (inch)</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold whitespace-nowrap">B Exposed Length (inch)</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold whitespace-nowrap">C Hex Size (inch)</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold whitespace-nowrap">D Largest Diameter (inch)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.qkpsNippleTable.map((row, idx) => (
                        <tr
                          key={idx}
                          className={idx % 2 === 0 ? "bg-white hover:bg-blue-50 transition-colors" : "bg-slate-50 hover:bg-blue-50 transition-colors"}
                        >
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-900 font-medium whitespace-nowrap">{row.partNo}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.thread}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.bsppBodySize}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700 text-center">{row.overallLengthMm}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700 text-center">{row.exposedLengthMm}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700 text-center">{row.hexSizeMm}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700 text-center border-r border-slate-200">{row.largestDiameterMm}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-900 font-medium whitespace-nowrap">{row.partNo2}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.thread2}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.bsppBodySize2}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700 text-center">{row.overallLengthIn}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700 text-center">{row.exposedLengthIn}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700 text-center">{row.hexSizeIn}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700 text-center">{row.largestDiameterIn}</td>
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

      {/* Couplers Female Thread / Female Section */}
      {product.qkpsCouplerDiagramImage && (
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Couplers Female Thread / Female</h3>
              <div className="mb-12 flex justify-center">
                <div className="relative w-full max-w-2xl h-64 sm:h-80">
                  <Image
                    src={product.qkpsCouplerDiagramImage}
                    alt="Couplers Female Thread Female Diagram"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              {product.qkpsCouplerTable && product.qkpsCouplerTable.length > 0 && (
                <div className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-blue-700 text-white">
                        <th colSpan={6} className="px-3 sm:px-6 py-4 text-left text-sm font-semibold border-r border-blue-500">Metric</th>
                        <th colSpan={6} className="px-3 sm:px-6 py-4 text-left text-sm font-semibold">Imperial</th>
                      </tr>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold whitespace-nowrap">Part No.</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold whitespace-nowrap">Thread Size</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold whitespace-nowrap">BSPP Body Size</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold whitespace-nowrap">E Overall Length (mm)</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold whitespace-nowrap">F Hex Size (mm)</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold whitespace-nowrap border-r border-blue-400">G Largest Diameter (mm)</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold whitespace-nowrap">Part No.</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold whitespace-nowrap">Thread Size</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold whitespace-nowrap">BSPP Body Size</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold whitespace-nowrap">E Overall Length (inch)</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold whitespace-nowrap">F Hex Size (inch)</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold whitespace-nowrap">G Largest Diameter (inch)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.qkpsCouplerTable.map((row, idx) => (
                        <tr
                          key={idx}
                          className={idx % 2 === 0 ? "bg-white hover:bg-blue-50 transition-colors" : "bg-slate-50 hover:bg-blue-50 transition-colors"}
                        >
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-900 font-medium whitespace-nowrap">{row.partNo}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.thread}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.bsppBodySize}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700 text-center">{row.overallLengthMm}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700 text-center">{row.hexSizeMm}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700 text-center border-r border-slate-200">{row.largestDiameterMm}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-900 font-medium whitespace-nowrap">{row.partNo2}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.thread2}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700">{row.bsppBodySize2}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700 text-center">{row.overallLengthIn}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700 text-center">{row.hexSizeIn}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-700 text-center">{row.largestDiameterIn}</td>
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
      {product.qkpsDustProtectionTable && product.qkpsDustProtectionTable.length > 0 && (
        <section className="py-16 sm:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Accessories</h3>
              <p className="text-sm text-slate-500 mb-6">Dust Protections</p>
              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-orange-500 text-white">
                      <th rowSpan={2} className="px-4 py-4 text-center text-xs font-semibold border-r border-orange-400 align-middle">
                        <span className="block">Size</span>
                      </th>
                      <th colSpan={2} className="px-4 py-3 text-center text-xs font-semibold border-r border-orange-400">
                        Nipple Dust Protections
                      </th>
                      <th colSpan={2} className="px-4 py-3 text-center text-xs font-semibold">
                        Coupler Dust Protections
                      </th>
                    </tr>
                    <tr className="bg-orange-400 text-white">
                      <th className="px-4 py-3 text-center text-xs font-semibold">PVC Part No.</th>
                      <th className="px-4 py-3 text-center text-xs font-semibold border-r border-orange-300">Aluminum Part No.</th>
                      <th className="px-4 py-3 text-center text-xs font-semibold">PVC Part No.</th>
                      <th className="px-4 py-3 text-center text-xs font-semibold">Aluminum Part No.</th>
                    </tr>
                    <tr className="bg-orange-300 text-white">
                      <th className="px-4 py-2 text-center text-xs font-medium border-r border-orange-200">mm / inch</th>
                      <th className="px-4 py-2 text-center text-xs font-medium">Part Number</th>
                      <th className="px-4 py-2 text-center text-xs font-medium border-r border-orange-200">Part Number</th>
                      <th className="px-4 py-2 text-center text-xs font-medium">Part Number</th>
                      <th className="px-4 py-2 text-center text-xs font-medium">Part Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.qkpsDustProtectionTable.map((row, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-white hover:bg-orange-50 transition-colors" : "bg-slate-50 hover:bg-orange-50 transition-colors"}
                      >
                        <td className="px-4 py-3 text-xs sm:text-sm text-slate-900 font-medium text-center border-r border-slate-200">
                          {row.sizeMm} / {row.sizeInch}
                        </td>
                        <td className="px-4 py-3 text-xs sm:text-sm text-slate-700 text-center">
                          <span className="flex items-center justify-center gap-2">
                            {row.nipplePvcPartNo || "—"}
                            {row.nipplePvcPartNo && (
                              <span className="inline-block w-4 h-4 rounded-full bg-orange-500" aria-label="Orange" />
                            )}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-xs sm:text-sm text-slate-700 text-center border-r border-slate-200">
                          {row.nippleAluminumPartNo || "—"}
                        </td>
                        <td className="px-4 py-3 text-xs sm:text-sm text-slate-700 text-center">
                          <span className="flex items-center justify-center gap-2">
                            {row.couplerPvcPartNo || "—"}
                            {row.couplerPvcPartNo && (
                              <span className="inline-block w-4 h-4 rounded-full bg-orange-500" aria-label="Orange" />
                            )}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-xs sm:text-sm text-slate-700 text-center">
                          {row.couplerAluminumPartNo || "—"}
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

      {/* Other Products */}
      {otherProductsSection && (
        <div>{otherProductsSection}</div>
      )}
    </>
  )
}
