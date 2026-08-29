"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, ArrowRight, Wrench } from "lucide-react"
import { useLikedProducts, LikedProduct } from "@/context/liked-products-context"
import { memo, useMemo } from "react"

interface BSPProductCardProps {
  product: LikedProduct
  index?: number
  basePath?: string
  categoryLabel?: string
}

function getFittingLabel(name: string): string {
  const n = name.toLowerCase()
  if (n.includes("stainless")) return "Stainless Steel"
  if (n.includes("steel ball") || n.includes("kzeb")) return "Steel Ball"
  if (n.includes("steel") && !n.includes("stainless")) return "Carbon Steel"
  return "ISO-A Coupler"
}

function getSeriesCode(code: string): string {
  const parts = code.split("-")
  return parts[parts.length - 1]
}

/* Three very-close navy shades so cards feel cohesive but not identical */
const BG_SHADES = ["#17334d", "#214963", "#2d6078"]

/* Total card height = IMAGE_H + FOOTER_H. Both are fixed so every card is identical. */
const IMAGE_H = 230
const FOOTER_H = 160

function BSPProductCardInner({ product, index = 0, basePath = "/products/hydraulic-quick-couplings/iso-a-couplers", categoryLabel = "ISO-A Quick Couplers" }: BSPProductCardProps) {
  const { isLiked, toggleLike } = useLikedProducts()
  const liked = isLiked(product.id)
  const label = useMemo(() => getFittingLabel(product.name), [product.name])
  const series = useMemo(() => getSeriesCode(product.code), [product.code])
  const bgColor = BG_SHADES[index % 3]

  const cardInner = (
    <div
      className="
        group relative flex flex-col w-full
        bg-white
        shadow-[0_3px_18px_rgba(0,0,0,0.11)]
        transition-all duration-300 ease-out
        hover:scale-[1.02]
        hover:shadow-[0_0_0_2px_#e05a2e,0_20px_48px_rgba(0,0,0,0.22)]
      "
      style={{
        height: `${IMAGE_H + FOOTER_H}px`,
        isolation: "isolate",
        border: "1px solid rgba(200,220,245,0.6)",
        overflow: "hidden",
        borderRadius: "6px",
      }}
    >
      {/* ── Image zone — fixed height, sharp top corners matching card ── */}
      <div
        className="bg-anim-blueprint relative flex-shrink-0"
        style={{
          height: `${IMAGE_H}px`,
          background: bgColor,
          overflow: "hidden",
          zIndex: 2,
          borderRadius: "6px 6px 0 0",
        }}
      >
        {/* Top label row — orange text to match the dot */}
        <div className="absolute top-2.5 left-3.5 right-3.5 flex items-center justify-between z-30 pointer-events-none">
          <span className="flex items-center gap-1 text-[8.5px] font-bold uppercase tracking-widest leading-none" style={{ color: "#e05a2e" }}>
            <span className="w-1 h-1 rounded-full bg-[#e05a2e] flex-shrink-0" />
            {categoryLabel}
          </span>
          <span className="text-[8.5px] font-mono font-semibold text-white/35 leading-none">{series}</span>
        </div>

          {/* Glassmorphism shimmer */}
          <div
            className="card-glass-shimmer absolute inset-0 z-20 pointer-events-none"
            style={{ overflow: "hidden" }}
          />

          {/* Product image — subtle upward pop on hover */}
          {product.image ? (
            <div className="absolute inset-0 z-10 transition-transform duration-500 ease-out group-hover:scale-[1.05] group-hover:-translate-y-[5px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                className="object-contain p-4"
              />
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <Wrench size={40} style={{ color: "#4a90d9", opacity: 0.22 }} />
            </div>
          )}

          {/* Heart button — bottom-left, above image */}
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleLike(product) }}
            aria-label={liked ? "Remove from liked products" : "Add to liked products"}
            className={`
              absolute bottom-2.5 left-2.5 z-30 w-8 h-8 rounded-full
              flex items-center justify-center
              transition-all duration-200
              ${liked
                ? "bg-[#e05a2e] text-white scale-110 shadow-lg"
                : "bg-white/10 text-white/60 hover:bg-[#e05a2e] hover:text-white hover:scale-110 backdrop-blur-md"
              }
            `}
            style={{ border: "1px solid rgba(255,255,255,0.15)" }}
          >
            <Heart size={13} fill={liked ? "currentColor" : "none"} strokeWidth={2} />
          </button>

          {/* HYDRONEX logo — bottom-right, highest z so it always shows above image */}
          <div className="absolute bottom-2.5 right-3 z-40 transition-all duration-300 group-hover:scale-110">
            <Image
              src="/images/hydronex-logo-white.png"
              alt="Hydronex"
              width={84}
              height={33}
              className="object-contain transition-all duration-300"
              style={{
                opacity: 0.38,
                filter: "none",
              }}
            />
            {/* Glow layer — only visible on hover, layered via absolute overlay */}
            <Image
              src="/images/hydronex-logo-white.png"
              alt=""
              aria-hidden
              width={84}
              height={33}
              className="object-contain absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                filter: "drop-shadow(0 0 6px rgba(160,210,255,0.75)) drop-shadow(0 0 2px rgba(255,255,255,0.4))",
              }}
            />
          </div>
      </div>

      {/* ── Footer — fixed height, flex col to pin CTA at bottom ─────── */}
      <div
        className="flex flex-col px-4 pt-3.5 pb-5 bg-white flex-shrink-0"
        style={{ height: `${FOOTER_H}px`, borderRadius: "0 0 6px 6px" }}
      >
        {/* Outlined badge — transparent fill, navy border and text */}
        <div className="mb-2.5 flex-shrink-0">
          <span
            className="inline-flex items-center gap-1.5 px-2 py-[3px] text-[9px] font-bold uppercase tracking-[0.09em]"
            style={{
              background: "transparent",
              color: "#1e3a60",
              border: "1px solid #1e3a60",
              borderRadius: "3px",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a60] flex-shrink-0" />
            {label}
          </span>
        </div>

        {/* Product name — strictly 2 lines via fixed line-clamp + min-h */}
        <p
          className="text-[13px] font-bold text-[#0e1c35] leading-snug line-clamp-2 group-hover:text-[#1a4a8a] transition-colors duration-200 flex-shrink-0"
          style={{ minHeight: "2.6rem" }}
        >
          {product.name}
        </p>

        {/* Part code */}
        <p className="text-[10.5px] text-gray-400 mt-1.5 font-mono tracking-wide flex-shrink-0">{product.code}</p>

        {/* Spacer pushes CTA row to bottom */}
        <div className="flex-1" />

        {/* Divider + CTA */}
        <div className="flex-shrink-0">
          <div className="h-px bg-gray-100 mb-3" />
          <div className="flex items-center justify-between gap-2">
            {product.slug ? (
              <Link
                href={`${basePath}/${product.slug}`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-[12px] font-semibold text-[#1a4a8a] hover:text-[#e05a2e] transition-colors duration-200"
              >
                View Details
                <ArrowRight size={13} />
              </Link>
            ) : (
              <span className="text-[12px] font-semibold text-gray-400">Details on Request</span>
            )}

            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleLike(product) }}
              aria-label={liked ? "Remove from liked products" : "Save to liked products"}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold transition-all duration-200 flex-shrink-0
                ${liked
                  ? "bg-[#e05a2e] text-white shadow-sm"
                  : "bg-[#0e1c35] text-white hover:bg-[#e05a2e]"
                }`}
            >
              <Heart size={11} fill={liked ? "currentColor" : "none"} strokeWidth={2} />
              {liked ? "Saved" : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  // The card contains its own accessible product link and save controls.  Keep
  // the shell non-interactive so those controls remain valid, hydratable HTML.
  return <div className="block">{cardInner}</div>
}

export const ISOAProductCard = memo(BSPProductCardInner)
