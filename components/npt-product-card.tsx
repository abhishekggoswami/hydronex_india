"use client"

import { CatalogueProductCard, type CatalogueProduct } from "@/components/catalog-product-card"

interface NPTProductCardProps {
  product: CatalogueProduct
  index: number
  categoryBase?: string
}

export function NPTProductCard({ product, index, categoryBase = "npt" }: NPTProductCardProps) {
  return (
    <CatalogueProductCard
      product={product}
      index={index}
      category="NPT Hydraulic Fittings"
      label="NPT Thread"
      basePath={`/products/hydraulic-fittings/${categoryBase}`}
      palette={["#102b46", "#183b59", "#28556c"]}
    />
  )
}
