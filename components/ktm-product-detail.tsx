"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface KTMProductDetailProps {
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
    femaleSpecsTable?: Array<{
      bodySize: string
      ratedPressure: number
      flowRate: number
      material: string
      sealMaterial: string
      tempRange: string
    }>
    femaleDiagram?: string
    maleSpecsTable?: Array<{
      partNo: string
      thread: string
      overallLength: number
      hexSize: number
      largestDiameter: number
    }>
    maleDiagram?: string
    dustProtectionTable?: Array<{
      size: string
      sizeInch: string
      ctmPartNumber: string
      ptmPartNumber: string
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
  }
  otherProductsSection: React.ReactNode
}

export function KTMProductDetail({ product, otherProductsSection }: KTMProductDetailProps) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="quick-release-special-detail min-h-screen bg-background">
      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-12">
        {/* Specifications Section */}
        {product.specs && product.specs.length > 0 && (
          <section className="mb-16">
            <div className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {product.specs.map((spec, index) => (
                  <div
                    key={index}
                    className={`border-b border-border p-6 ${
                      index % 2 === 1 ? "border-l md:border-l" : ""
                    } ${index < product.specs.length - 2 ? "border-b" : ""}`}
                  >
                    <dt className="text-sm font-semibold text-muted-foreground">{spec.label}</dt>
                    <dd className="mt-1 text-lg font-medium text-foreground">{spec.value}</dd>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Features & Technical Specifications */}
        {(product.features || product.techSpecs) && (
          <section className="mb-16 grid gap-8 md:grid-cols-2">
            {product.features && product.features.length > 0 && (
              <div>
                <h2 className="mb-6 text-2xl font-bold text-foreground">Features</h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.techSpecs && product.techSpecs.length > 0 && (
              <div>
                <h2 className="mb-6 text-2xl font-bold text-foreground">Technical Specifications</h2>
                <ul className="space-y-3">
                  {product.techSpecs.map((spec, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* Female Section */}
        {product.femaleDiagram && product.femaleSpecsTable && (
          <section className="mb-16">
            <h2 className="mb-8 text-3xl font-bold text-foreground">Female</h2>
            
            {/* Female Diagram */}
            <div className="mb-8 flex justify-center rounded-lg border border-border bg-card p-8">
              <img
                src={product.femaleDiagram}
                alt="Female Coupler Diagram"
                crossOrigin="anonymous"
                className="max-h-64 w-auto object-contain"
              />
            </div>

            {/* Female Specifications Table */}
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full">
                <thead className="bg-sky-500 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Body Size (in)</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Rated Pressure (Bar)</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Flow Rate (L)</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Material</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Standard Seal Material</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Temperature Range (Std seals)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.femaleSpecsTable.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : "bg-background"}>
                      <td className="px-4 py-3 text-sm text-foreground">{row.bodySize}</td>
                      <td className="px-4 py-3 text-sm text-foreground">{row.ratedPressure}</td>
                      <td className="px-4 py-3 text-sm text-foreground">{row.flowRate}</td>
                      <td className="px-4 py-3 text-sm text-foreground">{row.material}</td>
                      <td className="px-4 py-3 text-sm text-foreground">{row.sealMaterial}</td>
                      <td className="px-4 py-3 text-sm text-foreground">{row.tempRange}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Male Section */}
        {product.maleDiagram && product.maleSpecsTable && (
          <section className="mb-16">
            <h2 className="mb-8 text-3xl font-bold text-foreground">Male</h2>
            
            {/* Male Diagram */}
            <div className="mb-8 flex justify-center rounded-lg border border-border bg-card p-8">
              <img
                src={product.maleDiagram}
                alt="Male Coupler Diagram"
                crossOrigin="anonymous"
                className="max-h-64 w-auto object-contain"
              />
            </div>

            {/* Male Specifications Table */}
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full">
                <thead className="bg-sky-500 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Part No.</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Thread</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Overall Length (mm)</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Hex Size (mm)</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Largest Diameter (mm)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.maleSpecsTable.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : "bg-background"}>
                      <td className="px-4 py-3 text-sm font-medium text-sky-600">{row.partNo}</td>
                      <td className="px-4 py-3 text-sm text-foreground">{row.thread}</td>
                      <td className="px-4 py-3 text-sm text-foreground">{row.overallLength}</td>
                      <td className="px-4 py-3 text-sm text-foreground">{row.hexSize}</td>
                      <td className="px-4 py-3 text-sm text-foreground">{row.largestDiameter}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Dust Protection Section */}
        {product.dustProtectionTable && (
          <section className="mb-16">
            <h2 className="mb-8 text-3xl font-bold text-foreground">Accessories - Dust Protection (Yellow)</h2>
            
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full">
                <thead className="bg-sky-500 text-white">
                  <tr>
                    <th colSpan={2} className="px-4 py-3 text-left text-sm font-semibold">Size</th>
                    <th colSpan={3} className="border-l border-white/30 px-4 py-3 text-center text-sm font-semibold">Dust protections (PVC)</th>
                    <th colSpan={3} className="border-l border-white/30 px-4 py-3 text-center text-sm font-semibold">Dust protections (Aluminum)</th>
                  </tr>
                  <tr className="border-t border-white/30 bg-sky-400">
                    <th className="px-4 py-3 text-left text-xs font-semibold">mm</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold">inch</th>
                    <th className="border-l border-white/30 px-4 py-3 text-center text-xs font-semibold">Part Number</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold">Color</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold">Part Number</th>
                    <th className="border-l border-white/30 px-4 py-3 text-center text-xs font-semibold">Part Number</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold">Color</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold">Part Number</th>
                  </tr>
                </thead>
                <tbody>
                  {product.dustProtectionTable.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : "bg-background"}>
                      <td className="px-4 py-3 text-sm text-foreground">{row.size}</td>
                      <td className="px-4 py-3 text-sm text-foreground">{row.sizeInch}</td>
                      <td className="border-l border-border px-4 py-3 text-center text-sm text-foreground">{row.ctmPartNumber}</td>
                      <td className="px-4 py-3 text-center">
                        <span className="inline-block h-4 w-4 rounded-full bg-yellow-400 border border-yellow-500" />
                      </td>
                      <td className="px-4 py-3 text-sm text-foreground"></td>
                      <td className="border-l border-border px-4 py-3 text-center text-sm text-foreground">{row.ptmPartNumber}</td>
                      <td className="px-4 py-3 text-center">
                        <span className="inline-block h-4 w-4 rounded-full bg-yellow-400 border border-yellow-500" />
                      </td>
                      <td className="px-4 py-3 text-sm text-foreground"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Performance Specifications Table */}
        {product.performanceSpecsTable && (
          <section className="quick-release-performance-section mb-0">
            <h2 className="mb-8 text-3xl font-bold text-foreground">Performance Specifications</h2>
            
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full">
                <thead className="bg-sky-500 text-white">
                  <tr>
                    <th colSpan={2} className="px-4 py-3 text-center text-sm font-semibold">Size</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">Working pressure</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">Flow Rate</th>
                    <th colSpan={3} className="border-l border-white/30 px-4 py-3 text-center text-sm font-semibold">Burst Pressures</th>
                  </tr>
                  <tr className="border-t border-white/30 bg-sky-400">
                    <th className="px-4 py-3 text-center text-xs font-semibold">mm</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold">inch</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold">MPa (PSI)</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold">L/min (GPM)</th>
                    <th className="border-l border-white/30 px-4 py-3 text-center text-xs font-semibold">MPa (PSI)</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold">MPa (PSI)</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold">MPa (PSI)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.performanceSpecsTable.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : "bg-background"}>
                      <td className="px-4 py-3 text-center text-sm font-medium text-foreground">{row.sizeMm}</td>
                      <td className="px-4 py-3 text-center text-sm text-foreground">{row.sizeInch}</td>
                      <td className="px-4 py-3 text-center text-sm text-foreground">
                        {row.workingPressureMpa} ({row.workingPressurePsi})
                      </td>
                      <td className="px-4 py-3 text-center text-sm text-foreground">
                        {row.flowRateLmin} ({row.flowRateGpm})
                      </td>
                      <td className="border-l border-border px-4 py-3 text-center text-sm text-foreground">
                        {row.burstPressure1Mpa} ({row.burstPressure1Psi})
                      </td>
                      <td className="px-4 py-3 text-center text-sm text-foreground">
                        {row.burstPressure2Mpa} ({row.burstPressure2Psi})
                      </td>
                      <td className="px-4 py-3 text-center text-sm text-foreground">
                        {row.burstPressure3Mpa} ({row.burstPressure3Psi})
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Other Products Section */}
        <div className="quick-release-related-products">{otherProductsSection}</div>
      </main>
    </div>
  )
}
