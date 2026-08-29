"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, ArrowRight, Wrench } from "lucide-react"
import { useLikedProducts, LikedProduct } from "@/context/liked-products-context"
import { memo, useMemo } from "react"

interface FerruleProductCardProps {
  product: LikedProduct
  index?: number
  categorySlug?: string
}

function getFerrulesLabel(name: string): string {
  const n = name.toLowerCase()
  if (n.includes("sae 100")) {
    if (n.includes("r5")) return "SAE 100 R5"
    if (n.includes("r7")) return "SAE 100 R7"
    if (n.includes("r8")) return "SAE 100 R8"
    if (n.includes("r9")) return "SAE 100 R9"
    if (n.includes("r12")) return "SAE 100 R12"
    if (n.includes("r13")) return "SAE 100 R13"
  }
  if (n.includes("jic")) return "JIC Ferrule"
  if (n.includes("bsp")) return "BSP Ferrule"
  if (n.includes("npt")) return "NPT Ferrule"
  if (n.includes("orfs")) return "ORFS Ferrule"
  if (n.includes("iso")) return "Metric Ferrule"
  if (n.includes("banjo")) return "Banjo Ferrule"
  if (n.includes("push lock")) return "Push Lock"
  if (n.includes("reusable")) return "Reusable Crimp"
  if (n.includes("bite")) return "Bite Ferrule"
  return "Ferrule"
}

function getSeriesCode(code: string): string {
  const parts = code.split("-")
  return parts[parts.length - 1]
}

const BG_SHADES = ["#2a3748", "#394b5c", "#485f6d"]
const IMAGE_H = 230
const FOOTER_H = 160

function FerruleProductCardInner({ product, index = 0, categorySlug = "ferrules" }: FerruleProductCardProps) {
  const { isLiked, toggleLike } = useLikedProducts()
  const liked = isLiked(product.id)
  const label = useMemo(() => getFerrulesLabel(product.name), [product.name])
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
      {/* ── Image zone ── */}
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
        {/* Top label row */}
        <div className="absolute top-2.5 left-3.5 right-3.5 flex items-center justify-between z-30 pointer-events-none">
          <span className="flex items-center gap-1 text-[8.5px] font-bold uppercase tracking-widest leading-none" style={{ color: "#e05a2e" }}>
            <span className="w-1 h-1 rounded-full bg-[#e05a2e] flex-shrink-0" />
            Ferrules
          </span>
          <span className="text-[8.5px] font-mono font-semibold text-white/35 leading-none">{series}</span>
        </div>

        {/* Glassmorphism shimmer */}
        <div className="card-glass-shimmer absolute inset-0 z-20 pointer-events-none" style={{ overflow: "hidden" }} />

        {/* Product image */}
        {product.image ? (
          <div className="absolute inset-0 z-10 transition-transform duration-500 ease-out group-hover:scale-[1.05] group-hover:-translate-y-[5px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
              className="object-contain p-4"
              style={{ filter: "invert(1) opacity(0.88)" }}
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <Wrench className="w-16 h-16 text-white/20" />
          </div>
        )}
      </div>

      {/* ── Footer zone ── */}
      <div
        className="flex flex-col flex-grow overflow-hidden bg-white"
        style={{ height: `${FOOTER_H}px` }}
      >
        {/* Top border line */}
        <div
          className="h-0.5 flex-shrink-0"
          style={{ background: "linear-gradient(90deg, #e05a2e 0%, transparent 100%)" }}
        />

        {/* Title + subtitle section */}
        <div className="flex-shrink-0 px-4 pt-3 pb-2">
          <p className="text-[11px] font-bold uppercase tracking-wide text-[#0e1c35]/60 leading-none mb-1.5">
            {label}
          </p>
          <h3 className="text-sm font-bold text-[#0e1c35] line-clamp-2 leading-snug">
            {product.name}
          </h3>
        </div>

        {/* Description + action row — flexbox layout */}
        <div className="flex flex-grow px-4 pb-3 flex-col justify-between">
          <p className="text-[11px] text-[#0e1c35]/70 line-clamp-2 leading-relaxed">
            {product.description || "Premium ferrule for hydraulic connections"}
          </p>

          {/* Like + arrow row */}
          <div className="flex items-center justify-between mt-3 -mx-2 -mb-2 px-2 py-2">
            <button
              onClick={() => toggleLike(product)}
              className="group/btn p-2 rounded-md transition-all duration-300"
              style={{ color: liked ? "#e05a2e" : "#0e1c35/60" }}
              aria-label={liked ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart
                className="w-4.5 h-4.5 transition-all"
                fill={liked ? "#e05a2e" : "none"}
                strokeWidth={1.5}
              />
            </button>
            <Link
              href={`/products/hydraulic-fittings/${categorySlug}/${product.slug}`}
              className="group/link p-2 rounded-md flex items-center text-[#0e1c35] transition-all duration-300 hover:text-[#e05a2e]"
              aria-label={`View ${product.name}`}
            >
              <ArrowRight className="w-4.5 h-4.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )

  return cardInner
}

export const FerruleProductCard = memo(FerruleProductCardInner)
