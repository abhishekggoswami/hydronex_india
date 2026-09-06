"use client"

import Image from "next/image"

interface BSPProductHeroImageProps {
  image?: string
  name: string
  slug: string
}

/* Three very-close navy shades — same palette as the card */
const BG_SHADES = ["#0e1c35", "#121f3a", "#0f1b32"]

export function BSPProductHeroImage({ image, name, slug }: BSPProductHeroImageProps) {
  /* Pick shade deterministically from the slug */
  const shade = BG_SHADES[slug.length % 3]
  /* Show the last segment of the slug as the series code */
  const seriesCode = slug.split("-").pop()?.toUpperCase() ?? ""

  return (
    <div
      className="group relative w-full h-96 bg-anim-blueprint overflow-hidden"
      style={{
        background: shade,
        borderRadius: "6px",
      }}
    >
      {/* Top label row */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-30 pointer-events-none">
        <span
          className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest leading-none"
          style={{ color: "#e05a2e" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#e05a2e] flex-shrink-0" />
          British BSP Fittings
        </span>
        <span className="text-[9px] font-mono font-semibold text-white/35 leading-none">
          {seriesCode}
        </span>
      </div>

      {/* Product image — subtle lift on hover */}
      {image && (
        <div className="absolute inset-0 z-10 transition-transform duration-500 ease-out group-hover:scale-[1.05] group-hover:-translate-y-[6px]">
          <Image
            src={image}
            alt={name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="technical-diagram-image object-contain p-8"
          />
        </div>
      )}

      {/* HYDRONEX logo — base opacity, glows on hover */}
      <div className="absolute bottom-3 right-4 z-40 transition-all duration-300 group-hover:scale-110">
        <Image
          src="/images/hydronex-logo-white.png"
          alt="Hydronex"
          width={96}
          height={38}
          className="object-contain transition-all duration-300"
          style={{ opacity: 0.38 }}
        />
        {/* Glow overlay — fades in on hover */}
        <Image
          src="/images/hydronex-logo-white.png"
          alt=""
          aria-hidden
          width={96}
          height={38}
          className="object-contain absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            filter:
              "drop-shadow(0 0 7px rgba(160,210,255,0.80)) drop-shadow(0 0 2px rgba(255,255,255,0.45))",
          }}
        />
      </div>
    </div>
  )
}
