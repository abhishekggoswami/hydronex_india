"use client"

import { Heart } from "lucide-react"
import { useLikedProducts } from "@/context/liked-products-context"

/**
 * Legacy page-level usages stay inert; the layout owns the single global FAB.
 */
export function LikedProductsFAB({ global = false }: { global?: boolean }) {
  const { likedProducts, setDrawerOpen } = useLikedProducts()

  if (!global) return null

  return (
    <button
      onClick={() => setDrawerOpen(true)}
      aria-label={`View liked products (${likedProducts.length})`}
      className="fixed bottom-6 right-6 z-30 flex items-center gap-2.5 bg-[#e05a2e] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#c44e25] hover:scale-105 active:scale-95 transition-all duration-200 pl-4 pr-5 py-3"
    >
      <div className="relative">
        <Heart size={18} fill={likedProducts.length > 0 ? "currentColor" : "none"} strokeWidth={2} />
        {likedProducts.length > 0 && (
          <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-white text-[#e05a2e] text-[9px] font-bold flex items-center justify-center leading-none">
            {likedProducts.length > 99 ? "99" : likedProducts.length}
          </span>
        )}
      </div>
      <span className="text-sm font-semibold">
        {likedProducts.length === 0
          ? "Liked Products"
          : likedProducts.length === 1
          ? "1 Liked Product"
          : `${likedProducts.length} Liked Products`}
      </span>
    </button>
  )
}
