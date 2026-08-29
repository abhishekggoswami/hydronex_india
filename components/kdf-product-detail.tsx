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

interface KDFSimpleRow {
  partNo: string
  thread: string
  overallLengthIn: number
  hexSizeIn: number
  largestDiameterIn: number
}

interface KDFPerformanceRow {
  sizeMm: string
  sizeInch: string
  pressure: string
  flowRate: string
  burstP1: string
  burstP2: string
  burstP3: string
}

interface KDFDustRow {
  sizeMm: string
  sizeInch: string
  pvcPartNo: string
}

interface KDFProductDetailProps {
  product: {
    name: string
    basicSpecTable?: BasicSpecRow[]
    kdfFemaleTable?: KDFSimpleRow[]
    kdfMaleTable?: KDFSimpleRow[]
    kdfPerformanceTable?: KDFPerformanceRow[]
    kdfDustProtectionTable?: KDFDustRow[]
    kdfFemaleDiagramImage?: string
    kdfMaleDiagramImage?: string
  }
  otherProductsSection?: React.ReactNode
}

export function KDFProductDetail({ product, otherProductsSection }: KDFProductDetailProps) {
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
                        <td className="px-6 py-4 text-sm text-slate-700 text-right">{row.ratedPressure}</td>
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

      {/* Female (Coupler) Section */}
      {product.kdfFemaleDiagramImage && (
        <section className="py-16 sm:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Female</h3>
              <div className="mb-12 flex justify-center">
                <div className="relative w-full max-w-2xl h-64 sm:h-80">
                  <Image
                    src={product.kdfFemaleDiagramImage}
                    alt="KDF Female Coupler Diagram"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              {product.kdfFemaleTable && product.kdfFemaleTable.length > 0 && (
                <div className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold">Part No.</th>
                        <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold">Thread Size</th>
                        <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold">Overall Length (inch)</th>
                        <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold">Hex Size (inch)</th>
                        <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold">Largest Diameter (inch)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.kdfFemaleTable.map((row, idx) => (
                        <tr
                          key={idx}
                          className={idx % 2 === 0 ? "bg-white hover:bg-blue-50 transition-colors" : "bg-slate-50 hover:bg-blue-50 transition-colors"}
                        >
                          <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-slate-900 font-medium whitespace-nowrap">{row.partNo}</td>
                          <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-slate-700">{row.thread}</td>
                          <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-slate-700 text-right">{row.overallLengthIn}</td>
                          <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-slate-700 text-right">{row.hexSizeIn}</td>
                          <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-slate-700 text-right">{row.largestDiameterIn}</td>
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

      {/* Couplers Female Thread / Male Section */}
      {product.kdfMaleDiagramImage && (
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Couplers Female Thread / Male</h3>
              <div className="mb-12 flex justify-center">
                <div className="relative w-full max-w-2xl h-64 sm:h-80">
                  <Image
                    src={product.kdfMaleDiagramImage}
                    alt="KDF Male Nipple Diagram"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              {product.kdfMaleTable && product.kdfMaleTable.length > 0 && (
                <div className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold">Part No.</th>
                        <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold">Thread Size</th>
                        <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold">Overall Length (inch)</th>
                        <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold">Hex Size (inch)</th>
                        <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold">Largest Diameter (inch)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.kdfMaleTable.map((row, idx) => (
                        <tr
                          key={idx}
                          className={idx % 2 === 0 ? "bg-white hover:bg-blue-50 transition-colors" : "bg-slate-50 hover:bg-blue-50 transition-colors"}
                        >
                          <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-slate-900 font-medium whitespace-nowrap">{row.partNo}</td>
                          <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-slate-700">{row.thread}</td>
                          <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-slate-700 text-right">{row.overallLengthIn}</td>
                          <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-slate-700 text-right">{row.hexSizeIn}</td>
                          <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-slate-700 text-right">{row.largestDiameterIn}</td>
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
      {product.kdfDustProtectionTable && product.kdfDustProtectionTable.length > 0 && (
        <section className="py-16 sm:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-1">Accessories</h3>
              <p className="text-sm text-slate-500 mb-6 font-medium">附件</p>
              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-yellow-400 text-slate-900">
                      <th colSpan={2} className="px-6 py-4 text-center text-xs font-semibold border-r border-yellow-300">
                        <span className="block font-bold">Size</span>
                        <span className="block text-slate-600 font-normal">规格</span>
                      </th>
                      <th colSpan={2} className="px-6 py-4 text-center text-xs font-semibold">
                        <span className="block font-bold">Dust protections</span>
                        <span className="block text-slate-600 font-normal">防尘帽</span>
                      </th>
                    </tr>
                    <tr className="bg-blue-100 text-slate-700">
                      <th colSpan={2} className="px-6 py-2 text-center text-xs font-medium border-r border-slate-200" />
                      <th colSpan={2} className="px-6 py-2 text-center text-xs font-medium">PVC</th>
                    </tr>
                    <tr className="bg-blue-200 text-slate-800">
                      <th className="px-6 py-3 text-center text-xs font-semibold border-r border-slate-200">mm</th>
                      <th className="px-6 py-3 text-center text-xs font-semibold border-r border-slate-200">inch.</th>
                      <th className="px-6 py-3 text-center text-xs font-semibold border-r border-slate-200">
                        <span className="block font-bold">Part Number</span>
                        <span className="block text-slate-500 font-normal">订货号</span>
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-semibold">
                        <span className="block font-bold">Colour</span>
                        <span className="block text-slate-500 font-normal">颜色</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.kdfDustProtectionTable.map((row, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-white hover:bg-yellow-50 transition-colors" : "bg-slate-50 hover:bg-yellow-50 transition-colors"}
                      >
                        <td className="px-6 py-4 text-xs sm:text-sm text-slate-700 text-center border-r border-slate-200">{row.sizeMm}</td>
                        <td className="px-6 py-4 text-xs sm:text-sm text-slate-700 text-center border-r border-slate-200">{row.sizeInch}</td>
                        <td className="px-6 py-4 text-xs sm:text-sm text-slate-700 text-center border-r border-slate-200">{row.pvcPartNo}</td>
                        <td className="px-6 py-4 text-xs sm:text-sm text-center">
                          <span className="inline-block w-5 h-5 rounded-full bg-yellow-400 border border-yellow-500" aria-label="Yellow" />
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
      {product.kdfPerformanceTable && product.kdfPerformanceTable.length > 0 && (
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
                    <tr className="bg-blue-600 text-white">
                      <th colSpan={2} className="px-4 py-4 text-center text-xs font-bold border-r border-blue-400">
                        <span className="block font-bold">Size</span>
                        <span className="block font-normal opacity-80">规格</span>
                      </th>
                      <th className="px-4 py-4 text-center text-xs font-bold border-r border-blue-400">
                        <span className="block font-bold">Working pressure</span>
                        <span className="block font-normal opacity-80">工作压力</span>
                      </th>
                      <th className="px-4 py-4 text-center text-xs font-bold border-r border-blue-400">
                        <span className="block font-bold">Flow Rate</span>
                        <span className="block font-normal opacity-80">额定流量</span>
                      </th>
                      <th colSpan={3} className="px-4 py-4 text-center text-xs font-bold">
                        <span className="block font-bold">Burst Pressures</span>
                        <span className="block font-normal opacity-80">爆破压力</span>
                      </th>
                    </tr>
                    <tr className="bg-blue-500 text-white">
                      <th className="px-4 py-3 text-center text-xs font-semibold border-r border-blue-400">mm</th>
                      <th className="px-4 py-3 text-center text-xs font-semibold border-r border-blue-400">inch.</th>
                      <th className="px-4 py-3 text-center text-xs font-semibold italic border-r border-blue-400">MPa <span className="not-italic opacity-80">(PSI)</span></th>
                      <th className="px-4 py-3 text-center text-xs font-semibold italic border-r border-blue-400">
                        <span className="block not-italic text-xs mb-0.5">@ 0.2 MPa pressure drop</span>
                        l/min <span className="not-italic opacity-80">(GPM)</span>
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-semibold italic border-r border-blue-400">MPa <span className="not-italic opacity-80">(PSI)</span></th>
                      <th className="px-4 py-3 text-center text-xs font-semibold italic border-r border-blue-400">MPa <span className="not-italic opacity-80">(PSI)</span></th>
                      <th className="px-4 py-3 text-center text-xs font-semibold italic">MPa <span className="not-italic opacity-80">(PSI)</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.kdfPerformanceTable.map((row, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-white hover:bg-blue-50 transition-colors" : "bg-slate-50 hover:bg-blue-50 transition-colors"}
                      >
                        <td className="px-4 py-4 text-xs sm:text-sm text-slate-700 text-center border-r border-slate-200">{row.sizeMm}</td>
                        <td className="px-4 py-4 text-xs sm:text-sm text-slate-700 text-center border-r border-slate-200">{row.sizeInch}</td>
                        <td className="px-4 py-4 text-xs sm:text-sm text-slate-700 text-center border-r border-slate-200">{row.pressure}</td>
                        <td className="px-4 py-4 text-xs sm:text-sm text-slate-700 text-center italic border-r border-slate-200">{row.flowRate}</td>
                        <td className="px-4 py-4 text-xs sm:text-sm text-slate-700 text-center italic border-r border-slate-200">{row.burstP1}</td>
                        <td className="px-4 py-4 text-xs sm:text-sm text-slate-700 text-center italic border-r border-slate-200">{row.burstP2}</td>
                        <td className="px-4 py-4 text-xs sm:text-sm text-slate-700 text-center italic">{row.burstP3}</td>
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
        <section className="py-16 sm:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Other Products</h3>
              {otherProductsSection}
            </motion.div>
          </div>
        </section>
      )}
    </>
  )
}
