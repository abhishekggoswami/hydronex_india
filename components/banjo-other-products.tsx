"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

interface Product {
  slug: string
  name: string
  code: string
  image: string
  description: string
  features: string[]
}

export function BanjoOtherProducts({ products }: { products: Product[] }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#0f2040] mb-8">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/hydraulic-fittings/banjo-fittings/${product.slug}`}
            className="group"
          >
            <div
              className="relative h-full rounded-lg overflow-hidden border transition-all duration-300 hover:shadow-lg hover:border-[#e05a2e] flex flex-col"
              style={{
                background: "#ffffff",
                borderColor: "rgba(210,225,240,0.6)",
              }}
            >
              {/* Image */}
              <div className="relative h-56 bg-gradient-to-br from-[#f8fafc] to-[#eef5fb] overflow-hidden flex items-center justify-center border-b" style={{ borderColor: "rgba(210,225,240,0.4)" }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="object-contain h-full w-full p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <p className="text-xs font-bold uppercase tracking-wider text-[#e05a2e] mb-2">
                  {product.code}
                </p>
                <h3 className="text-base font-bold text-[#0f2040] mb-2 group-hover:text-[#e05a2e] transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs leading-relaxed text-[#4a6a90] mb-4 flex-grow">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-4 text-xs text-[#2a4a70]">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#e05a2e] font-bold mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-3 border-t" style={{ borderColor: "rgba(210,225,240,0.4)" }}>
                  <span className="inline-flex items-center gap-2 text-[#1a5fa8] font-semibold text-xs group-hover:gap-3 transition-all">
                    View Details
                    <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
