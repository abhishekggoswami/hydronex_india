import { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { straightThroughCouplings } from "@/lib/straight-through-couplings"
import { STProductDetail } from "@/components/st-product-detail"

export const metadata: Metadata = {
  title: "Straight Through Couplings / Industrial Interchange | Hydronex",
  description:
    "Industrial interchange straight-through hydraulic quick couplings available in Brass, Steel, and Stainless Steel. ISO 7241-2 compliant, US market interchange, sleeve-pull connection.",
}

export default function StraightThroughCouplingsPage() {
  const product = straightThroughCouplings[0]

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm flex-wrap">
              <li>
                <Link href="/" className="text-blue-600 hover:text-blue-700 transition-colors">
                  Home
                </Link>
              </li>
              <li><ChevronRight className="w-4 h-4 text-slate-400" /></li>
              <li>
                <Link href="/products" className="text-blue-600 hover:text-blue-700 transition-colors">
                  Products
                </Link>
              </li>
              <li><ChevronRight className="w-4 h-4 text-slate-400" /></li>
              <li>
                <Link href="/products/hydraulic-quick-couplings" className="text-blue-600 hover:text-blue-700 transition-colors">
                  Hydraulic Quick Couplings
                </Link>
              </li>
              <li><ChevronRight className="w-4 h-4 text-slate-400" /></li>
              <li className="text-slate-700 font-medium">Straight Through Couplings</li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-8">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Industrial Interchange
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6 text-balance">
                {product.name}
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Specs grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                {product.specs.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <p className="text-sm text-slate-500 mb-1">{spec.label}</p>
                    <p className="text-base font-semibold text-slate-900">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-4 pt-4 flex-wrap">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get More Information
              </button>
              <button className="px-8 py-3 border-2 border-slate-300 text-slate-900 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
                Download Specs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Detail Sections ───────────────────────────────────── */}
      <STProductDetail product={product} />
    </>
  )
}
