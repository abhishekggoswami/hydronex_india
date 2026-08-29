"use client"

import { ISOAProductCard } from "@/components/iso-a-product-card"

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
  basePath?: string
  categoryLabel?: string
}

export function ISOAOtherProducts({ products, basePath, categoryLabel }: BSPOtherProductsProps) {
  if (!products.length) return null

  return (
    <section
      className="bg-anim-section-dots border-b border-[#d0e4f5]/40"
      style={{
        background:
          "linear-gradient(180deg, #deeefa 0%, #eaf4fc 18%, #f4faff 45%, #fafcff 72%, #ffffff 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-[#0e1c35] mb-10">Other Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {products.map((prod, i) => (
            <div
              key={prod.slug ?? i}
              style={{ "--shimmer-delay": `${(i % 5) * 0.9}s` } as React.CSSProperties}
            >
              <ISOAProductCard
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
