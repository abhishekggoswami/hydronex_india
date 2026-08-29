"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { FerruleProductCard } from "@/components/ferrules-product-card"
import { LikedProduct } from "@/context/liked-products-context"
import { Search, X } from "lucide-react"

interface FerruleProductGridProps {
  products: LikedProduct[]
  categorySlug?: string
}

export function FerruleProductGrid({ products, categorySlug = "ferrules" }: FerruleProductGridProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return products

    const term = searchTerm.toLowerCase()
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.code.toLowerCase().includes(term) ||
        p.description?.toLowerCase().includes(term)
    )
  }, [searchTerm, products])

  const noResults = filteredProducts.length === 0

  return (
    <div className="w-full">
      {/* ── Search Input ───────────────────────────────────────────────── */}
      <div className="mb-8 relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <Input
            type="search"
            placeholder="Search ferrules by name, code, or features..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e05a2e] focus:ring-1 focus:ring-[#e05a2e]/30 transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          )}
        </div>
      </div>

      {/* ── Results counter ────────────────────────────────────────────── */}
      {searchTerm && (
        <div className="mb-6 text-sm text-gray-600">
          Found {filteredProducts.length} {filteredProducts.length === 1 ? "ferrule" : "ferrules"}
        </div>
      )}

      {/* ── Product Grid ───────────────────────────────────────────────── */}
      {!noResults ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <FerruleProductCard
              key={product.id}
              product={product}
              index={index}
              categorySlug={categorySlug}
            />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center">
          <p className="text-gray-600 mb-2">No ferrules found matching "{searchTerm}"</p>
          <button
            onClick={() => setSearchTerm("")}
            className="text-[#e05a2e] hover:text-[#d04a1e] font-medium text-sm transition-colors"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  )
}
