import { Metadata } from "next"
import Link from "next/link"
import { metricHoseFittings } from "@/lib/hydraulic-fittings"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Metric Hose Fittings - Hydronex",
  description:
    "ISO metric standard hydraulic hose fittings with precision engineering for reliable, leak-free connections.",
}

export default function MetricHoseFittingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#e05a2e] transition-colors">
              Home
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <Link href="/products" className="hover:text-[#e05a2e] transition-colors">
              Products
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <Link href="/products" className="hover:text-[#e05a2e] transition-colors">
              Hydraulic Fittings
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-gray-900 font-medium">Metric Hose Fittings</span>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Metric Hose Fittings</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            ISO metric standard hydraulic fittings with precision engineering for industrial and mobile applications.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {metricHoseFittings.map((product) => (
            <Link
              key={product.slug}
              href={`/products/hydraulic-fittings/metric/${product.slug}`}
              className="group"
            >
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-[#e05a2e] transition-all duration-300">
                {/* Product Image */}
                <div className="relative h-64 bg-gray-100 overflow-hidden">
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <p className="text-xs font-semibold text-[#e05a2e] uppercase tracking-wide mb-2">
                    {product.name}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#e05a2e] transition-colors">
                    {product.shortName}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{product.tagline}</p>

                  {/* Quick Stats */}
                  {product.quickStats && (
                    <div className="space-y-2 mb-6 pt-4 border-t border-gray-100">
                      {product.quickStats.map((stat, idx) => (
                        <div key={idx} className="flex justify-between text-sm">
                          <span className="text-gray-600">{stat.label}:</span>
                          <span className="font-semibold text-gray-900">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#e05a2e] group-hover:gap-3 transition-all">
                    View Details
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#e05a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Order?</h2>
          <p className="text-lg text-orange-50 mb-8">
            Contact our sales team for specifications and pricing
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-white text-[#e05a2e] font-bold px-8 py-3 rounded hover:shadow-lg transition-shadow"
          >
            Get A Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
