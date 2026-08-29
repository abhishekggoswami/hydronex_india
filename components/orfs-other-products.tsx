"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import type { ORFSFittingProduct } from "@/lib/orfs-hydraulic-fittings"

interface ORFSOtherProductsProps {
  products: ORFSFittingProduct[]
}

export function ORFSOtherProducts({ products }: ORFSOtherProductsProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-[#0f2040] mb-12" style={{ letterSpacing: "-0.01em" }}>
        Other ORFS Hydraulic Fittings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/hydraulic-fittings/orfs/${product.slug}`}
            className="group"
          >
            <div className="bg-white rounded-lg border border-[#e8eef5] overflow-hidden hover:shadow-lg hover:border-[#e05a2e]/50 transition-all duration-300">
              {/* Product Image */}
              <div className="relative h-48 bg-[#f8fafc] overflow-hidden flex items-center justify-center">
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <p className="text-xs font-semibold text-[#e05a2e] uppercase tracking-widest mb-2">
                  {product.code}
                </p>
                <h3 className="text-lg font-bold text-[#0f2040] mb-2 group-hover:text-[#e05a2e] transition-colors line-clamp-2">
                  {product.name}
                </h3>
                {product.description && (
                  <p className="text-sm text-[#6b7280] mb-4 line-clamp-2">{product.description}</p>
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
    </div>
  )
}
