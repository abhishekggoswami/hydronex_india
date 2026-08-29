import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { highPressureCouplers } from "@/lib/high-pressure-couplers"
import { KTCProductDetail } from "@/components/ktc-product-detail"

export const metadata: Metadata = {
  title: "Super High-Pressure Hydraulic Quick Couplers | Hydronex",
  description:
    "Ultra-high-pressure hydraulic quick couplers rated up to 10,000 PSI. KTC Series engineered for extreme pressure applications and demanding industrial environments.",
}

export default function HighPressureCoupler() {
  const product = highPressureCouplers[0]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-blue-600 hover:text-blue-700 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </li>
              <li>
                <Link href="/products" className="text-blue-600 hover:text-blue-700 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </li>
              <li>
                <Link href="/products/hydraulic-quick-couplings" className="text-blue-600 hover:text-blue-700 transition-colors">
                  Hydraulic Quick Couplings
                </Link>
              </li>
              <li>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </li>
              <li className="text-slate-700 font-medium">High-Pressure Couplers</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                  High-Pressure Category
                </span>
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                  {product.name}
                </h1>
                <p className="text-xl text-slate-600 mb-8 max-w-lg">
                  {product.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                      <p className="text-sm text-slate-600 mb-2">{spec.label}</p>
                      <p className="text-lg font-semibold text-slate-900">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get More Information
                </button>
                <button className="px-8 py-3 border-2 border-slate-300 text-slate-900 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
                  Download Specs
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 lg:h-full min-h-96">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <KTCProductDetail
        product={{
          name: product.name,
          shortName: product.name,
          slug: product.slug,
          description: product.description,
          material: product.material,
          surfaceTreat: product.surfaceTreat,
          application: product.application,
          features: product.features,
          specs: product.specs,
          techSpecs: product.techSpecs,
          applications: product.applications,
          femaleSpecsTable: product.femaleSpecsTable,
          femaleDiagram: product.femaleDiagram,
          maleSpecsTable: product.maleSpecsTable,
          maleDiagram: product.maleDiagram,
        }}
      />
    </>
  )
}
