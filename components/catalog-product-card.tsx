"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Wrench } from "lucide-react"
import { useLikedProducts } from "@/context/liked-products-context"

export type CatalogueProduct = {
  id: number
  name: string
  code: string
  image?: string
  slug?: string
}

export type CataloguePalette = readonly [string, string, string]

type CatalogueProductCardProps = {
  product: CatalogueProduct
  index?: number
  category: string
  label: string
  basePath: string
  palette?: CataloguePalette
}

const DEFAULT_PALETTE: CataloguePalette = ["#10263f", "#173957", "#254d68"]

function seriesFrom(code: string) {
  const parts = code.split("-")
  return parts[parts.length - 1] || code
}

/** A shared, restrained product-card treatment for the entire catalogue. */
export function CatalogueProductCard({
  product,
  index = 0,
  category,
  label,
  basePath,
  palette = DEFAULT_PALETTE,
}: CatalogueProductCardProps) {
  const { isLiked, toggleLike } = useLikedProducts()
  const liked = isLiked(product.id)
  const href = product.slug ? `${basePath}/${product.slug}` : undefined
  const surface = palette[index % palette.length]

  const card = (
    <article className="group relative flex h-[390px] w-full flex-col overflow-hidden rounded-md border border-[#e05a2e] bg-white shadow-[0_3px_18px_rgba(13,35,60,0.11)] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_0_2px_#e05a2e,0_20px_48px_rgba(0,0,0,0.22)]">
      <div className="bg-anim-blueprint relative h-[230px] shrink-0 overflow-hidden" style={{ background: surface }}>
        <div className="pointer-events-none absolute left-3.5 right-3.5 top-3 z-30 flex items-center justify-between gap-2">
          <span className="flex min-w-0 items-center gap-1 text-[8.5px] font-bold uppercase leading-none tracking-[0.14em] text-[#f06a3b]">
            <span className="h-1 w-1 shrink-0 rounded-full bg-[#f06a3b]" />
            <span className="truncate">{category}</span>
          </span>
          <span className="shrink-0 font-mono text-[8.5px] font-semibold text-white/45">{seriesFrom(product.code)}</span>
        </div>
        <div className="card-glass-shimmer absolute inset-0 z-20 pointer-events-none" />
        {product.image ? (
          <div className="absolute inset-0 z-10 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-105">
            <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" style={{ filter: "invert(1) opacity(0.88)" }} />
          </div>
        ) : (
          <div className="absolute inset-0 z-10 flex items-center justify-center"><Wrench size={40} className="text-white/25" /></div>
        )}
        <button
          type="button"
          onClick={(event) => { event.preventDefault(); event.stopPropagation(); toggleLike({ ...product, href }) }}
          aria-label={liked ? "Remove from saved products" : "Save product"}
          className={`absolute bottom-3 left-3 z-30 grid h-8 w-8 place-items-center rounded-full border transition-all ${liked ? "border-[#e05a2e] bg-[#e05a2e] text-white" : "border-white/20 bg-white/10 text-white/75 backdrop-blur hover:bg-[#e05a2e] hover:text-white"}`}
        >
          <Heart size={13} fill={liked ? "currentColor" : "none"} />
        </button>
        <Image src="/images/hydronex-logo-white.png" alt="" aria-hidden width={82} height={32} className="absolute bottom-2.5 right-3 z-30 object-contain opacity-40 transition-opacity duration-300 group-hover:opacity-70" />
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-4 pb-4 pt-3.5">
        <span className="mb-2.5 inline-flex w-fit items-center gap-1.5 rounded-[3px] border border-[#274a6c] px-2 py-[3px] text-[9px] font-bold uppercase tracking-[0.1em] text-[#274a6c]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#274a6c]" />{label}
        </span>
        <h3 className="min-h-[2.6rem] text-[13px] font-bold leading-snug text-[#10263f] transition-colors group-hover:text-[#1a5fa8] line-clamp-2">{product.name}</h3>
        <p className="mt-1.5 font-mono text-[10.5px] tracking-wide text-slate-400">{product.code}</p>
        <div className="flex-1" />
        <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
          <span className={`inline-flex items-center gap-1.5 text-[12px] font-semibold ${href ? "text-[#1a4a8a] group-hover:text-[#e05a2e]" : "text-slate-400"}`}>
            {href ? "View Details" : "Details on Request"}{href && <ArrowRight size={13} />}
          </span>
          <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold transition-colors ${liked ? "bg-[#e05a2e] text-white" : "bg-[#10263f] text-white group-hover:bg-[#e05a2e]"}`}>
            <Heart size={11} fill={liked ? "currentColor" : "none"} />{liked ? "Saved" : "Save"}
          </span>
        </div>
      </div>
    </article>
  )

  return href ? <Link href={href} className="block h-full">{card}</Link> : <div className="h-full">{card}</div>
}
