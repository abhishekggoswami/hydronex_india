"use client"

import { BSPProductCard } from "@/components/bsp-product-card"
import Topography from "@/components/topography"

interface Product {
  slug?: string
  name: string
  shortName: string
  code: string
  tagline?: string
  description?: string
  image?: string
}

interface BSPOtherProductsProps {
  products: Product[]
  title?: string
  basePath?: string
  categoryLabel?: string
}

export function BSPOtherProducts({
  products,
  title = "Other Products",
  basePath = "/products/hydraulic-fittings/british-bsp",
  categoryLabel = "British BSP Fittings",
}: BSPOtherProductsProps) {
  if (!products.length) return null

  return (
    <section
      className="relative isolate overflow-hidden border-b border-[#d0e4f5]/40 bg-white"
    >
      <Topography
        className="pointer-events-none absolute inset-0 z-0"
        lowColor="#9eb8c3"
        midColor="#f26522"
        highColor="#ffffff"
        speed={0.18}
        morphAmount={1.7}
        bands={3.4}
        thickness={0.018}
        glow={0.22}
        opacity={0.075}
        mouseRadius={0.24}
        mouseStrength={0.34}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-[#0e1c35] mb-10">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {products.map((prod, i) => (
            <div
              key={prod.slug ?? i}
              style={{ "--shimmer-delay": `${(i % 5) * 0.9}s` } as React.CSSProperties}
            >
              <BSPProductCard
                product={{
                  /* LikedProduct.id must be a number; use stable hash from slug */
                  id: prod.slug
                    ? prod.slug.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0)
                    : i,
                  name: prod.name,
                  code: prod.slug ?? String(i),
                  image: prod.image,
                  slug: prod.slug,
                }}
                index={i}
                basePath={basePath}
                categoryLabel={categoryLabel}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
