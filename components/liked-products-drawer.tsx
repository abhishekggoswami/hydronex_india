"use client"

import Image from "next/image"
import Link from "next/link"
import { X, Heart, ArrowRight, PackageOpen } from "lucide-react"
import { useLikedProducts } from "@/context/liked-products-context"

/**
 * Legacy page-level usages stay inert; the layout owns the single global drawer.
 */
export function LikedProductsDrawer({ global = false }: { global?: boolean }) {
  const { likedProducts, drawerOpen, setDrawerOpen, toggleLike } = useLikedProducts()

  if (!global) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Liked Products"
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#e05a2e]/10 flex items-center justify-center">
              <Heart size={16} className="text-[#e05a2e]" fill="currentColor" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-gray-900">Liked Products</h2>
              <p className="text-[11px] text-gray-400">
                {likedProducts.length} {likedProducts.length === 1 ? "item" : "items"} saved
              </p>
            </div>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Close liked products"
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {likedProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                <PackageOpen size={28} className="text-gray-300" />
              </div>
              <p className="text-sm font-semibold text-gray-600 mb-1">No liked products yet</p>
              <p className="text-xs text-gray-400 max-w-[200px]">
                Tap the heart icon on any product card to save it here.
              </p>
            </div>
          ) : (
            likedProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3 hover:border-[#e05a2e]/30 hover:bg-[#fef8f5] transition-colors duration-200 group"
              >
                {/* Thumbnail — navy blueprint style matching the card image zone */}
                <div
                  className="relative w-16 h-16 rounded-md flex-shrink-0 overflow-hidden bg-anim-blueprint"
                  style={{ background: "#0e1c35" }}
                >
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-1.5"
                      style={{ filter: "invert(1) opacity(0.88)" }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Heart size={18} className="text-[#4a90d9]/40" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-gray-800 leading-snug line-clamp-2 group-hover:text-[#e05a2e] transition-colors">
                    {product.name}
                  </p>
                  <p className="text-[10px] text-gray-400 mt-0.5 font-mono">{product.code}</p>

                  {(product.href || product.slug) && (
                    <Link
                      href={product.href ?? `/products/hydraulic-fittings/british-bsp/${product.slug}`}
                      onClick={() => setDrawerOpen(false)}
                      className="inline-flex items-center gap-1 mt-1.5 text-[10px] font-semibold text-[#e05a2e] hover:underline"
                    >
                      View Details <ArrowRight size={10} />
                    </Link>
                  )}
                </div>

                {/* Remove heart */}
                <button
                  onClick={() => toggleLike(product)}
                  aria-label="Remove from liked products"
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[#e05a2e] hover:bg-[#e05a2e]/10 transition-colors"
                >
                  <Heart size={14} fill="currentColor" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer CTA */}
        {likedProducts.length > 0 && (
          <div className="px-4 py-4 border-t border-gray-100 bg-white">
            <p className="text-xs text-gray-400 mb-3 text-center">
              Interested in these products? Get in touch with our team.
            </p>
            <Link
              href="/#contact"
              onClick={() => setDrawerOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#e05a2e] text-white text-sm font-semibold py-3 rounded-xl hover:bg-[#c44e25] transition-colors"
            >
              Enquire About Liked Products
              <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </aside>
    </>
  )
}
