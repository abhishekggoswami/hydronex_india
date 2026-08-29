import { Metadata } from "next"
import Link from "next/link"
import { metricHoseFittings, britishBSPFittings } from "@/lib/hydraulic-fittings"
import { ChevronRight, Phone, Mail } from "lucide-react"

export const dynamicParams = true

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = metricHoseFittings.find((p) => p.slug === slug)
  if (!product) return {}

  return {
    title: `${product.shortName} – Hydronex Metric Hose Fittings`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = metricHoseFittings.find((p) => p.slug === slug)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/products/hydraulic-fittings/metric" className="text-[#e05a2e] hover:underline">
            Back to Metric Hose Fittings
          </Link>
        </div>
      </div>
    )
  }

  const otherProducts = metricHoseFittings.filter((p) => p.slug !== slug)

  return (
    <div className="min-h-screen bg-white">
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
            <Link href="/products/hydraulic-fittings/metric" className="hover:text-[#e05a2e] transition-colors">
              Metric Hose Fittings
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-gray-900 font-medium">{product.shortName}</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="flex items-center justify-center">
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            )}
          </div>

          {/* Product Info */}
          <div>
            <p className="text-sm font-semibold text-[#e05a2e] uppercase tracking-wider mb-2">
              {product.name}
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.shortName}</h1>
            <p className="text-lg text-gray-600 mb-6">{product.tagline}</p>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-8">{product.description}</p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/#contact"
                className="inline-block bg-[#e05a2e] text-white font-bold px-8 py-3 rounded hover:shadow-lg transition-shadow text-center"
              >
                Request Quote
              </Link>
              <Link
                href="/products"
                className="inline-block border-2 border-[#e05a2e] text-[#e05a2e] font-bold px-8 py-3 rounded hover:bg-orange-50 transition-colors text-center"
              >
                View All Products
              </Link>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-sm font-semibold text-gray-900 mb-4">Questions? Contact our team</p>
              <div className="flex flex-col gap-2">
                <a href="tel:+91" className="flex items-center gap-2 text-gray-600 hover:text-[#e05a2e] transition-colors">
                  <Phone size={16} />
                  <span>+91 XXXX-XXXX-XXXX</span>
                </a>
                <a href="mailto:info@hydronex.com" className="flex items-center gap-2 text-gray-600 hover:text-[#e05a2e] transition-colors">
                  <Mail size={16} />
                  <span>info@hydronex.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        {product.features.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-2xl text-[#e05a2e] font-bold flex-shrink-0">✓</div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Specifications Section */}
        {product.specs.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Specifications</h2>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  {product.specs.map((spec, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200 w-1/3">
                        {spec.label}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Applications Section */}
        {product.applications.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.applications.map((application, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded">
                  <ChevronRight size={16} className="text-[#e05a2e] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{application}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Other Products Section */}
        {otherProducts.length > 0 && (
          <section className="border-t border-gray-200 pt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Other Metric Hose Fittings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProducts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/hydraulic-fittings/metric/${p.slug}`}
                  className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-[#e05a2e] transition-all duration-300"
                >
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    {p.image && (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#e05a2e] transition-colors">
                      {p.shortName}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{p.tagline}</p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#e05a2e]">
                      Learn More
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
