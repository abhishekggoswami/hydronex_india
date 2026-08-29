"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Wrench } from "lucide-react"
import { memo, useMemo } from "react"
import { useLikedProducts, LikedProduct } from "@/context/liked-products-context"

interface BSPProductCardProps {
  product: LikedProduct
  index?: number
  basePath?: string
  categoryLabel?: string
}

function getFittingLabel(name: string): string {
  const n = name.toLowerCase()
  if (n.includes("multiseal") || n.includes("multi seal")) return "Multi Seal"
  if (n.includes("o-ring") || n.includes("o ring")) return "O-Ring Seal"
  if (n.includes("flat seat") || n.includes("flat seal")) return "Flat Seat"
  if (n.includes("socketless")) return "Socketless"
  if (n.includes("reusable")) return "Reusable"
  if (n.includes("stainless")) return "Stainless Steel"
  if (n.includes("parallel") || n.includes("bspp")) return "Parallel Thread"
  if (n.includes("bspt")) return "Tapered Thread"
  return "BSP Fitting"
}

function getSeriesCode(code: string) {
  return code.split("-").at(-1) ?? code
}

function BSPProductCardInner({ product, index = 0, basePath = "/products/hydraulic-fittings/british-bsp", categoryLabel = "British BSP Fittings" }: BSPProductCardProps) {
  const { isLiked, toggleLike } = useLikedProducts()
  const liked = isLiked(product.id)
  const label = useMemo(() => getFittingLabel(product.name), [product.name])
  const series = useMemo(() => getSeriesCode(product.code), [product.code])
  const productHref = product.slug ? `${basePath}/${product.slug}` : undefined

  const toggleSaved = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()
    toggleLike({ ...product, href: productHref })
  }

  return (
    <article
      className="group relative w-full overflow-hidden rounded-[20px] border border-white/60 bg-[#0b1f37]/90 p-[5px] shadow-[0_12px_28px_rgba(11,31,55,0.2)] backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-[1.025] hover:shadow-[0_20px_38px_rgba(11,31,55,0.3)]"
      style={{ isolation: "isolate" }}
    >
      <div className="relative h-[222px] overflow-hidden rounded-[15px] bg-[linear-gradient(135deg,#dbeaf3,#9eb8c3)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,rgba(255,255,255,0.62),transparent_35%),linear-gradient(145deg,rgba(255,255,255,0.22),rgba(11,31,55,0.2))]" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(11,31,55,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(11,31,55,0.16)_1px,transparent_1px)] [background-size:18px_18px]" />

        {/* Connected dark brand tab, modelled after the supplied card silhouette. */}
        <div className="absolute left-0 top-0 z-20 h-10 w-36 rounded-br-[1rem] bg-[#0b1f37]" />
        <div className="absolute left-[8.1rem] top-0 z-20 h-10 w-10 bg-[#0b1f37] [clip-path:polygon(0_0,100%_0,42%_100%,0_100%)]" />
        <div className="absolute left-3 top-2 z-30 flex h-6 items-center">
          <Image src="/images/hydronex-logo-white.png" alt="Hydronex" width={88} height={26} className="h-auto w-[88px] object-contain" />
        </div>

        <div className="absolute right-2.5 top-2.5 z-30 flex items-center gap-2">
          <span className="font-mono text-[9px] font-semibold text-[#0b1f37]/60">{series}</span>
          <button
            onClick={toggleSaved}
            aria-label={liked ? "Remove from saved products" : "Save product"}
            className={`inline-flex h-7 items-center gap-1.5 rounded-full border px-2.5 text-[10px] font-bold backdrop-blur-md transition-all ${liked ? "border-[#f26522] bg-[#f26522] text-white" : "border-[#0b1f37]/15 bg-white/65 text-[#0b1f37] hover:bg-[#0b1f37] hover:text-white"}`}
          >
            <Heart size={11} fill={liked ? "currentColor" : "none"} strokeWidth={2} />
            {liked ? "Saved" : "Save"}
          </button>
        </div>

        <p className="absolute bottom-3 left-3 z-20 flex items-center gap-1 text-[8.5px] font-bold uppercase tracking-[0.15em] text-[#0b1f37]/75">
          <span className="h-1.5 w-1.5 rounded-full bg-[#f26522]" /> {categoryLabel}
        </p>

        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-7 pt-12 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1"
            style={{ filter: "drop-shadow(0 16px 18px rgba(7,20,38,0.28))" }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-[#0b1f37]/45"><Wrench size={42} /></div>
        )}
      </div>

      <div className="relative mt-[5px] overflow-hidden rounded-b-[15px] bg-[linear-gradient(145deg,rgba(11,31,55,0.99),rgba(7,20,38,0.96))] px-5 pb-4 pt-3 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.13),transparent_36%)]" />
        <div className="relative">
          <span className="block text-center text-[14px] font-extrabold uppercase tracking-[0.11em] text-white line-clamp-2">{product.name}</span>
          <div className="mt-4 grid grid-cols-3 divide-x divide-white/15 text-center">
            <div className="px-2">
              <span className="block text-[10px] font-bold text-[#dbeaf3]">{label}</span>
              <span className="mt-1 block text-[9px] text-white/55">Fitting style</span>
            </div>
            <div className="px-2">
              <span className="block text-[10px] font-bold text-[#dbeaf3]">{product.code}</span>
              <span className="mt-1 block text-[9px] text-white/55">Part number</span>
            </div>
            <div className="px-2">
              {productHref ? (
                <Link href={productHref} className="inline-flex items-center gap-1 text-[10px] font-bold text-[#ff9b6d] transition-colors hover:text-white">
                  Details <ArrowRight size={11} />
                </Link>
              ) : (
                <span className="block text-[10px] font-bold text-[#ff9b6d]">On request</span>
              )}
              <span className="mt-1 block text-[9px] text-white/55">Availability</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export const BSPProductCard = memo(BSPProductCardInner)
