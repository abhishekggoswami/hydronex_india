"use client"

import { ShoppingCart } from "lucide-react"
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
      className="fixed bottom-5 right-5 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-[#e05a2e] p-0 text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#c44e25] hover:shadow-xl active:scale-95 sm:bottom-6 sm:right-6 sm:h-auto sm:w-auto sm:justify-start sm:gap-2.5 sm:px-4 sm:py-3"
    >
      <div className="relative">
        <ShoppingCart size={19} strokeWidth={2.2} />
        {likedProducts.length > 0 && (
          <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-white text-[#e05a2e] text-[9px] font-bold flex items-center justify-center leading-none">
            {likedProducts.length > 99 ? "99" : likedProducts.length}
          </span>
        )}
      </div>
      <span className="hidden text-sm font-semibold sm:block">
        {likedProducts.length === 0
          ? "Liked Products"
          : likedProducts.length === 1
          ? "1 Liked Product"
          : `${likedProducts.length} Liked Products`}
      </span>
    </button>
  )
}
