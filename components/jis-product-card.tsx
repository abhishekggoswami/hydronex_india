"use client"

import { CatalogueProductCard, type CatalogueProduct } from "@/components/catalog-product-card"

interface JISProductCardProps { product: CatalogueProduct; index: number }

export function JISProductCard({ product, index }: JISProductCardProps) {
  return <CatalogueProductCard product={product} index={index} category="JIS Hydraulic Fittings" label="JIS Standard" basePath="/products/hydraulic-fittings/jis-fittings" palette={["#1a394c", "#275469", "#356878"]} />
}
