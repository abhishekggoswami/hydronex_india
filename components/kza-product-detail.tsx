'use client'

import React from 'react'

interface KZAProductDetailProps {
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
    techSpecs?: string[]
    applications: string[]
    image: string
    couplerFemaleTable?: Array<{
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
    }>
    nippelMaleTable1?: Array<{
      partNo: string
      threadSize: string
      flowRate: string
      overallLengthA: number
      hexSizeC: number
      largestDiameterD: number
    }>
    couplerMaleTable2?: Array<{
      partNo: string
      threadSize: string
      flowRate: string
      overallLength: number
      hexSize: number
      largestDiameter: number
    }>
    nippelMaleTable2?: Array<{
      partNo: string
      threadSize: string
      flowRate: string
      overallLength: number
      hexSize: number
      largestDiameter: number
    }>
    nippelMaleTable3?: Array<{
      partNo: string
      threadSize: string
      overallLength: number
      hexSize: number
      largestDiameter: number
    }>
    couplerMaleTable3?: Array<{
      partNo: string
      threadSize: string
      overallLength: number
      hexSize: number
      largestDiameter: number
    }>
    performanceSpecsTable?: Array<{
      sizeMm: number
      sizeInch: string
      workingPressureMpa: number
      workingPressurePsi: number
      flowRateLmin: number
      flowRateGpm: number
      burstPressure1Mpa: number
      burstPressure1Psi: number
      burstPressure2Mpa: number
      burstPressure2Psi: number
      burstPressure3Mpa: number
      burstPressure3Psi: number
    }>
    couplerFemaleImage?: string
    nippelMaleImage1?: string
    couplerMaleImage1?: string
    couplerMaleImage2?: string
    nippelMaleImage2?: string
    nippelMaleImage3?: string
    couplerMaleImage3?: string
  }
  otherProductsSection: React.ReactNode
}

export function KZAProductDetail({ product, otherProductsSection }: KZAProductDetailProps) {
  return (
    <>
      {/* Couplers Female Thread / Male */}
      {product.couplerFemaleTable && product.couplerFemaleTable.length > 0 && (
        <section className="relative py-14 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 md:w-1/3">
                {product.couplerFemaleImage && (
                  <img src={product.couplerFemaleImage} alt="Couplers Female Thread Diagram" className="w-full h-auto" crossOrigin="anonymous" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" />
                  <h2 className="text-2xl font-bold text-gray-900">Couplers Female Thread / Male</h2>
                </div>
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Thread Size BSP</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Overall Length (mm)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Hex Size (mm)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Largest Diameter (mm)</th>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Part No. NPT</th>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Thread Size NPT</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Overall Length (in.)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Hex Size (in.)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Largest Diameter (in.)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.couplerFemaleTable.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNo}</td>
                          <td className="px-3 py-3 text-gray-700 text-sm">{row.thread}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.overallLength}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.hexSize}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.largestDiameter}</td>
                          <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNo2}</td>
                          <td className="px-3 py-3 text-gray-700 text-sm">{row.thread2}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.overallLength2}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.hexSize2}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.largestDiameter2}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Couplers Male Thread-1 */}
      {product.couplerMaleImage1 && (
        <section className="relative py-14 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900">Couplers Male Thread-1</h2>
            </div>
            <div className="mb-8">
              <img src={product.couplerMaleImage1} alt="Couplers Male Thread-1 Diagram" className="w-1/2 h-auto mx-auto" />
            </div>
          </div>
        </section>
      )}

      {/* Nipple Male Thread-1 */}
      {product.nippelMaleTable1 && product.nippelMaleTable1.length > 0 && (
        <section className="relative py-14 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 md:w-1/3">
                {product.nippelMaleImage1 && (
                  <img src={product.nippelMaleImage1} alt="Nipple Male Thread-1 Diagram" className="w-full h-auto" crossOrigin="anonymous" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" />
                  <h2 className="text-2xl font-bold text-gray-900">Nipple Male Thread-1</h2>
                </div>
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Thread Size</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Flow Rate (L)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Overall Length A (mm)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Hex Size C (mm)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Largest Diameter D (mm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.nippelMaleTable1.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNo}</td>
                          <td className="px-3 py-3 text-gray-700 text-sm">{row.threadSize}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.flowRate}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.overallLengthA}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.hexSizeC}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.largestDiameterD}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Coupler Male Thread-2 */}
      {product.couplerMaleTable2 && product.couplerMaleTable2.length > 0 && (
        <section className="relative py-14 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 md:w-1/3">
                {product.couplerMaleImage2 && (
                  <img src={product.couplerMaleImage2} alt="Coupler Male Thread-2 Diagram" className="w-full h-auto" crossOrigin="anonymous" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" />
                  <h2 className="text-2xl font-bold text-gray-900">Coupler Male Thread-2</h2>
                </div>
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Thread Size</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Flow Rate (L)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Overall Length (mm)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Hex Size (mm)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Largest Diameter (mm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.couplerMaleTable2.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNo}</td>
                          <td className="px-3 py-3 text-gray-700 text-sm">{row.threadSize}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.flowRate}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.overallLength}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.hexSize}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.largestDiameter}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Nipple Male Thread-2 */}
      {product.nippelMaleTable2 && product.nippelMaleTable2.length > 0 && (
        <section className="relative py-14 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 md:w-1/3">
                {product.nippelMaleImage2 && (
                  <img src={product.nippelMaleImage2} alt="Nipple Male Thread-2 Diagram" className="w-full h-auto" crossOrigin="anonymous" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" />
                  <h2 className="text-2xl font-bold text-gray-900">Nipple Male Thread-2</h2>
                </div>
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Thread Size</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Flow Rate (L)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Overall Length (mm)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Hex Size (mm)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Largest Diameter (mm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.nippelMaleTable2.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNo}</td>
                          <td className="px-3 py-3 text-gray-700 text-sm">{row.threadSize}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.flowRate}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.overallLength}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.hexSize}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.largestDiameter}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Nipple Male Thread-3 */}
      {product.nippelMaleTable3 && product.nippelMaleTable3.length > 0 && (
        <section className="relative py-14 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 md:w-1/3">
                {product.nippelMaleImage3 && (
                  <img src={product.nippelMaleImage3} alt="Nipple Male Thread-3 Diagram" className="w-full h-auto" crossOrigin="anonymous" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" />
                  <h2 className="text-2xl font-bold text-gray-900">Nipple Male Thread-3</h2>
                </div>
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Thread Size</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Overall Length (mm)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Hex Size (mm)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Largest Diameter (mm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.nippelMaleTable3.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNo}</td>
                          <td className="px-3 py-3 text-gray-700 text-sm">{row.threadSize}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.overallLength}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.hexSize}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.largestDiameter}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Coupler Male Thread-3 */}
      {product.couplerMaleTable3 && product.couplerMaleTable3.length > 0 && (
        <section className="relative py-14 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 md:w-1/3">
                {product.couplerMaleImage2 && (
                  <img src={product.couplerMaleImage2} alt="Coupler Male Thread-2 Diagram" className="w-full h-auto" crossOrigin="anonymous" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" />
                  <h2 className="text-2xl font-bold text-gray-900">Coupler Male Thread-3</h2>
                </div>
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Thread Size</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Overall Length (mm)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Hex Size (mm)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Largest Diameter (mm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.couplerMaleTable3.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNo}</td>
                          <td className="px-3 py-3 text-gray-700 text-sm">{row.threadSize}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.overallLength}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.hexSize}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.largestDiameter}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Performance Specifications Table */}
      {product.performanceSpecsTable && product.performanceSpecsTable.length > 0 && (
        <section className="relative py-14 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                <span className="inline-block w-1 h-8 bg-[#e05a2e] rounded"></span>
                Performance Specifications
              </h2>
              <p className="text-gray-600 text-sm">@ 0.2 MPa pressure drop</p>
            </div>

            <div className="overflow-x-auto bg-white rounded-lg shadow">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0891b2] text-white">
                    <th colSpan={2} className="px-4 py-3 text-left font-semibold text-xs border-r border-gray-200">
                      Size
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-xs border-r border-gray-200">Working Pressure</th>
                    <th className="px-4 py-3 text-center font-semibold text-xs border-r border-gray-200">Flow Rate</th>
                    <th colSpan={3} className="px-4 py-3 text-center font-semibold text-xs">Burst Pressures</th>
                  </tr>
                  <tr className="bg-cyan-200 text-gray-700 text-xs">
                    <th className="px-4 py-2 text-center font-semibold border-r border-gray-200">mm</th>
                    <th className="px-4 py-2 text-center font-semibold border-r border-gray-200">inch</th>
                    <th className="px-4 py-2 text-center font-semibold border-r border-gray-200">MPa (PSI)</th>
                    <th className="px-4 py-2 text-center font-semibold border-r border-gray-200">L/min (GPM)</th>
                    <th className="px-4 py-2 text-center font-semibold border-r border-gray-200">MPa (PSI)</th>
                    <th className="px-4 py-2 text-center font-semibold border-r border-gray-200">MPa (PSI)</th>
                    <th className="px-4 py-2 text-center font-semibold">MPa (PSI)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.performanceSpecsTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50 border-t border-gray-200"}>
                      <td className="px-4 py-3 text-center text-gray-900 font-semibold text-sm border-r border-gray-200">{row.sizeMm}</td>
                      <td className="px-4 py-3 text-center text-gray-700 text-sm border-r border-gray-200">{row.sizeInch}</td>
                      <td className="px-4 py-3 text-center text-gray-700 text-sm border-r border-gray-200">
                        {row.workingPressureMpa} ({row.workingPressurePsi})
                      </td>
                      <td className="px-4 py-3 text-center text-gray-700 text-sm border-r border-gray-200">
                        {row.flowRateLmin} ({row.flowRateGpm})
                      </td>
                      <td className="px-4 py-3 text-center text-gray-700 text-sm border-r border-gray-200">
                        {row.burstPressure1Mpa} ({row.burstPressure1Psi})
                      </td>
                      <td className="px-4 py-3 text-center text-gray-700 text-sm border-r border-gray-200">
                        {row.burstPressure2Mpa} ({row.burstPressure2Psi})
                      </td>
                      <td className="px-4 py-3 text-center text-gray-700 text-sm">
                        {row.burstPressure3Mpa} ({row.burstPressure3Psi})
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Other Products */}
      <section className="relative py-14 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {otherProductsSection}
        </div>
      </section>
    </>
  )
}
