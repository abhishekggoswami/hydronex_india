"use client"

import Image from "next/image"
import { ISOAOtherProducts } from "@/components/iso-a-other-products"

interface SpecRow {
  label: string
  value: string
}

interface PerformanceSpec {
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
}

interface FemaleSpec {
  partNo: string
  thread: string
  overallLengthMm: number
  hexSizeMm: number
  largestDiameterMm: number
  partNoImperial: string
  threadImperial: string
  overallLengthIn: string
  hexSizeIn: string
  largestDiameterIn: string
}

interface MaleSpec {
  partNo: string
  thread: string
  overallLengthMm: number
  hexSizeMm: number
  largestDiameterMm: number
  partNoImperial: string
  threadImperial: string
  overallLengthInMm: string
  hexSizeInMm: string
  largestDiameterInMm: string
}

export interface KNVProductProps {
  product: {
    name: string
    shortName: string
    slug: string
    description: string
    material: string
    surfaceTreat: string
    application: string
    features: string[]
    specs: SpecRow[]
    techSpecs?: string[]
    applications: string[]
    femaleSpecsTable?: FemaleSpec[]
    femaleDiagram?: string
    maleSpecsTable?: MaleSpec[]
    maleDiagram?: string
    performanceSpecsTable?: PerformanceSpec[]
  }
  otherProductsSection: React.ReactNode
}

export function KNVProductDetail({ product, otherProductsSection }: KNVProductProps) {
  return (
    <div className="quick-release-special-detail w-full bg-background">
      {/* Features Section */}
      <section className="border-t border-border py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex gap-3 text-foreground/80">
                <span className="text-primary mt-1">•</span>
                <span className="text-sm leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      {product.techSpecs && product.techSpecs.length > 0 && (
        <section className="border-t border-border py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground mb-8">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.techSpecs.map((spec, idx) => (
                <div key={idx} className="flex gap-3 text-foreground/80">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-sm leading-relaxed">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Female Coupler Section */}
      {product.femaleDiagram && product.femaleSpecsTable && (
        <section className="border-t border-border py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground mb-12">Female</h2>

            {/* Female Diagram */}
            <div className="mb-12 flex justify-center bg-background/50 rounded-lg p-8">
              <div className="relative w-full max-w-md h-64">
                <Image
                  src={product.femaleDiagram}
                  alt="Female Coupler Diagram"
                  fill
                  className="object-contain"
                  crossOrigin="anonymous"
                />
              </div>
            </div>

            {/* Female Specs Table */}
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="px-4 py-3 text-left font-medium text-foreground">Part No.</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Thread</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Overall Length (mm)</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Hex Size (mm)</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Largest Diameter (mm)</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Part No.</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Thread</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Overall Length (in)</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Hex Size (in)</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Largest Diameter (in)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.femaleSpecsTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-background" : "bg-muted/40"}>
                      <td className="px-4 py-3 text-foreground font-medium">{row.partNo}</td>
                      <td className="px-4 py-3 text-foreground">{row.thread}</td>
                      <td className="px-4 py-3 text-foreground">{row.overallLengthMm}</td>
                      <td className="px-4 py-3 text-foreground">{row.hexSizeMm}</td>
                      <td className="px-4 py-3 text-foreground">{row.largestDiameterMm}</td>
                      <td className="px-4 py-3 text-foreground font-medium">{row.partNoImperial}</td>
                      <td className="px-4 py-3 text-foreground">{row.threadImperial}</td>
                      <td className="px-4 py-3 text-foreground">{row.overallLengthIn}</td>
                      <td className="px-4 py-3 text-foreground">{row.hexSizeIn}</td>
                      <td className="px-4 py-3 text-foreground">{row.largestDiameterIn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Male Coupler Section */}
      {product.maleDiagram && product.maleSpecsTable && (
        <section className="border-t border-border py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground mb-12">Male</h2>

            {/* Male Diagram */}
            <div className="mb-12 flex justify-center bg-background/50 rounded-lg p-8">
              <div className="relative w-full max-w-md h-64">
                <Image
                  src={product.maleDiagram}
                  alt="Male Coupler Diagram"
                  fill
                  className="object-contain"
                  crossOrigin="anonymous"
                />
              </div>
            </div>

            {/* Male Specs Table */}
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="px-4 py-3 text-left font-medium text-foreground">Part No.</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Thread</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Overall Length (mm)</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Hex Size (mm)</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Largest Diameter (mm)</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Part No.</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Thread</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Overall Length (in)</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Hex Size (in)</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Largest Diameter (in)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.maleSpecsTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-background" : "bg-muted/40"}>
                      <td className="px-4 py-3 text-foreground font-medium">{row.partNo}</td>
                      <td className="px-4 py-3 text-foreground">{row.thread}</td>
                      <td className="px-4 py-3 text-foreground">{row.overallLengthMm}</td>
                      <td className="px-4 py-3 text-foreground">{row.hexSizeMm}</td>
                      <td className="px-4 py-3 text-foreground">{row.largestDiameterMm}</td>
                      <td className="px-4 py-3 text-foreground font-medium">{row.partNoImperial}</td>
                      <td className="px-4 py-3 text-foreground">{row.threadImperial}</td>
                      <td className="px-4 py-3 text-foreground">{row.overallLengthInMm}</td>
                      <td className="px-4 py-3 text-foreground">{row.hexSizeInMm}</td>
                      <td className="px-4 py-3 text-foreground">{row.largestDiameterInMm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Performance Specifications Table */}
      {product.performanceSpecsTable && product.performanceSpecsTable.length > 0 && (
        <section className="border-t border-border py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground mb-12">Performance Specifications</h2>

            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-xs sm:text-sm">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th colSpan={2} className="px-3 sm:px-4 py-3 text-left font-medium">Size</th>
                    <th colSpan={2} className="px-3 sm:px-4 py-3 text-left font-medium">Working pressure</th>
                    <th colSpan={2} className="px-3 sm:px-4 py-3 text-left font-medium">Flow Rate</th>
                    <th colSpan={3} className="px-3 sm:px-4 py-3 text-left font-medium">Burst Pressures</th>
                  </tr>
                  <tr className="bg-blue-400 text-white">
                    <th className="px-3 sm:px-4 py-2 text-left font-medium text-xs">mm</th>
                    <th className="px-3 sm:px-4 py-2 text-left font-medium text-xs">inch</th>
                    <th className="px-3 sm:px-4 py-2 text-left font-medium text-xs">MPa (PSI)</th>
                    <th className="px-3 sm:px-4 py-2 text-left font-medium text-xs">@0.2 MPa drop</th>
                    <th className="px-3 sm:px-4 py-2 text-left font-medium text-xs">l/min (GPM)</th>
                    <th className="px-3 sm:px-4 py-2 text-left font-medium text-xs">@ 0.2 MPa drop</th>
                    <th className="px-3 sm:px-4 py-2 text-left font-medium text-xs">MPa (PSI)</th>
                    <th className="px-3 sm:px-4 py-2 text-left font-medium text-xs">MPa (PSI)</th>
                    <th className="px-3 sm:px-4 py-2 text-left font-medium text-xs">MPa (PSI)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.performanceSpecsTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                      <td className="px-3 sm:px-4 py-2 text-foreground font-medium">{row.sizeMm}</td>
                      <td className="px-3 sm:px-4 py-2 text-foreground">{row.sizeInch}</td>
                      <td className="px-3 sm:px-4 py-2 text-foreground">{row.workingPressureMpa} ({row.workingPressurePsi})</td>
                      <td className="px-3 sm:px-4 py-2 text-foreground text-center">—</td>
                      <td className="px-3 sm:px-4 py-2 text-foreground">{row.flowRateLmin} ({row.flowRateGpm})</td>
                      <td className="px-3 sm:px-4 py-2 text-foreground text-center">—</td>
                      <td className="px-3 sm:px-4 py-2 text-foreground">{row.burstPressure1Mpa} ({row.burstPressure1Psi})</td>
                      <td className="px-3 sm:px-4 py-2 text-foreground">{row.burstPressure2Mpa} ({row.burstPressure2Psi})</td>
                      <td className="px-3 sm:px-4 py-2 text-foreground">{row.burstPressure3Mpa} ({row.burstPressure3Psi})</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Other Products Section */}
      <section className="border-t border-border py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {otherProductsSection}
        </div>
      </section>
    </div>
  )
}
