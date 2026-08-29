"use client"

import { CatalogueProductCard, type CatalogueProduct } from "@/components/catalog-product-card"

interface JICProductCardProps { product: CatalogueProduct; index: number }

export function JICProductCard({ product, index }: JICProductCardProps) {
  return <CatalogueProductCard product={product} index={index} category="JIC Hydraulic Fittings" label="JIC 37° Flare" basePath="/products/hydraulic-fittings/jic" palette={["#18324d", "#234664", "#315d78"]} />
}
