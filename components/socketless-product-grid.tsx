'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SocketlessFitting } from '@/lib/socketless-fittings'

interface SocketlessProductGridProps {
  products: SocketlessFitting[]
}

export function SocketlessProductGrid({ products }: SocketlessProductGridProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.code.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      {/* Search bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by product name or code..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 border border-[#d0e4f5] rounded-lg bg-white text-[#0f2040] placeholder-[#94aabf] focus:outline-none focus:border-[#e05a2e] focus:ring-1 focus:ring-[#e05a2e] transition-colors"
        />
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/hydraulic-fittings/socketless-fittings/${product.slug}`}
            className="group h-full"
          >
            <div className="h-full flex flex-col bg-white rounded-lg border border-[#d0e4f5] overflow-hidden hover:shadow-xl hover:border-[#e05a2e] transition-all duration-300 hover:-translate-y-1">
              {/* Image container */}
              <div className="relative h-56 bg-gradient-to-br from-[#f4faff] to-[#eaf4fc] overflow-hidden flex items-center justify-center border-b border-[#d0e4f5]/50">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={250}
                    height={200}
                    className="object-contain w-auto h-auto max-h-full max-w-full group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-[#94aabf] text-sm">No image</div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 p-5 flex flex-col">
                {/* Code badge */}
                <p className="text-[10px] font-bold text-[#e05a2e] uppercase tracking-[0.15em] mb-2">
                  {product.code}
                </p>

                {/* Name */}
                <h3 className="text-base font-bold text-[#0f2040] mb-3 leading-snug line-clamp-2 group-hover:text-[#e05a2e] transition-colors">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#2a4a70] mb-4 flex-1 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                {product.features && product.features.length > 0 && (
                  <div className="space-y-1 mb-4">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <p key={idx} className="text-xs text-[#2a4a70] flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#e05a2e] rounded-full" />
                        {feature}
                      </p>
                    ))}
                  </div>
                )}

                {/* CTA button */}
                <div className="mt-auto pt-4 border-t border-[#d0e4f5]/30">
                  <button className="w-full text-[#e05a2e] font-semibold text-xs group-hover:text-white group-hover:bg-[#e05a2e] px-3 py-2 rounded transition-all duration-300">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* No results message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[#2a4a70] font-medium">No products found matching your search.</p>
        </div>
      )}
    </div>
  )
}
