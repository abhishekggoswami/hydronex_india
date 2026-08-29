'use client'

interface KZAVProductDetailProps {
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
      partNo2?: string
      thread2?: string
      overallLength2?: number
      hexSize2?: number
      largestDiameter2?: number
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
  }
  otherProductsSection: React.ReactNode
}

export function KZAVProductDetail({
  product,
  otherProductsSection,
}: KZAVProductDetailProps) {
  return (
    <>
      {/* Female Coupler Section */}
      {product.couplerFemaleTable && product.couplerFemaleTable.length > 0 && (
        <section className="relative py-14 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 md:w-1/3">
                {product.couplerFemaleImage && (
                  <img src={product.couplerFemaleImage} alt="KZAV Female Coupler Diagram" className="w-full h-auto" crossOrigin="anonymous" />
                )}
              </div>

              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="inline-block w-1 h-8 bg-[#e05a2e] rounded"></span>
                  Female
                </h2>

                <div className="overflow-x-auto bg-gray-50 rounded-lg">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-cyan-400 text-gray-800">
                        <th className="px-4 py-3 text-left font-semibold text-sm">Part No.</th>
                        <th className="px-4 py-3 text-center font-semibold text-sm">Thread</th>
                        <th className="px-4 py-3 text-center font-semibold text-sm">Overall Length (mm)</th>
                        <th className="px-4 py-3 text-center font-semibold text-sm">Hex Size (mm)</th>
                        <th className="px-4 py-3 text-center font-semibold text-sm">Largest Diameter (mm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.couplerFemaleTable.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                          <td className="px-4 py-3 text-gray-900 font-medium text-sm border-b border-gray-200">{row.partNo}</td>
                          <td className="px-4 py-3 text-center text-gray-700 text-sm border-b border-gray-200">{row.thread}</td>
                          <td className="px-4 py-3 text-center text-gray-700 text-sm border-b border-gray-200">{row.overallLength}</td>
                          <td className="px-4 py-3 text-center text-gray-700 text-sm border-b border-gray-200">{row.hexSize}</td>
                          <td className="px-4 py-3 text-center text-gray-700 text-sm border-b border-gray-200">{row.largestDiameter}</td>
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
                    <th colSpan={2} className="px-4 py-3 text-center font-semibold text-xs border-r border-gray-200">
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
