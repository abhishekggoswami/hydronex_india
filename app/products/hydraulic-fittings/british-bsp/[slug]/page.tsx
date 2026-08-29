import { Metadata } from "next"
import { britishBSPFittings } from "@/lib/hydraulic-fittings"
import { notFound } from "next/navigation"
import { BSPOtherProducts } from "@/components/bsp-other-products"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductDetail } from "@/components/bsp-product-detail"

// Keep every published product URL available while product data is updated.
export const dynamicParams = true

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = britishBSPFittings.find((p) => p.slug === slug)
  if (!product) return {}

  return {
    title: `${product.shortName} – Hydronex British BSP Fittings`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = britishBSPFittings.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  const otherProducts = britishBSPFittings.filter((p) => p.slug !== slug).slice(0, 6)

  return (
    <BSPProductDetail
      product={{
        name: product.name,
        shortName: product.shortName,
        slug: product.slug,
        description: product.description ?? "",
        material: product.material,
        surfaceTreat: product.surfaceTreat,
        application: product.application,
        features: product.features ?? [],
        specs: product.specs ?? [],
        applications: product.applications ?? [],
        partTable: product.partTable,
        tableNote: product.tableNote,
        image: product.image,
      }}
      otherProductsSection={<><BSPOtherProducts products={otherProducts} /><BSPCtaSection /></>}
      editorialHero
    />
  )
}
