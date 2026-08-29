"use client"

import { CatalogueProductCard, type CatalogueProduct } from "@/components/catalog-product-card"

interface ORFSProductCardProps { product: CatalogueProduct; index: number }

export function ORFSProductCard({ product, index }: ORFSProductCardProps) {
  return <CatalogueProductCard product={product} index={index} category="ORFS Hydraulic Fittings" label="O-Ring Face Seal" basePath="/products/hydraulic-fittings/orfs" palette={["#253548", "#31475a", "#3b586b"]} />
}
