import { Metadata } from "next"
import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { BSPOtherProducts } from "@/components/bsp-other-products"
import { orfsHydraulicFittings } from "@/lib/orfs-hydraulic-fittings"

export const dynamicParams = true

export async function generateStaticParams() {
  return orfsHydraulicFittings.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = orfsHydraulicFittings.find((item) => item.slug === slug)

  if (!product) return {}

  return {
    title: `${product.shortName || product.name} - Hydronex ORFS Hydraulic Fittings`,
    description: product.description || product.name,
  }
}

const normaliseRows = (rows: unknown[] | undefined) =>
  rows?.map((source) => {
    const row = source as Record<string, string | number | undefined>

    return {
      partNo: String(row.partNo ?? row.sinopulsePartNo ?? row.sinoPulsePartNo ?? ""),
      parkerPartNo: row.parkerPartNo?.toString(),
      threadE: row.threadE?.toString() ?? row.thread?.toString() ?? row.flangeSize?.toString(),
      hoseId: row.hoseId?.toString() ?? row.hoseID?.toString(),
      dn: row.dn?.toString(),
      dash: row.dash?.toString(),
      a: row.a?.toString(),
      b: row.b?.toString(),
      c: row.c?.toString(),
      e: row.e?.toString(),
      h: row.h?.toString(),
      w: row.w?.toString(),
      s: row.s?.toString(),
      s1: row.s1?.toString(),
      s2: row.s2?.toString(),
    }
  })

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = orfsHydraulicFittings.find((item) => item.slug === slug)

  if (!product) notFound()

  const otherProducts = orfsHydraulicFittings.filter((item) => item.slug !== slug).slice(0, 6)

  return (
    <BSPProductDetail
      categoryName="ORFS Hydraulic Fittings"
      categoryHref="/products/hydraulic-fittings/orfs"
      product={{
        name: product.name,
        shortName: product.shortName || product.name,
        slug: product.slug,
        description: product.description ?? "",
        material: product.material,
        surfaceTreat: product.surfaceTreat,
        application: product.application,
        features: product.features ?? [],
        specs: product.specs ?? [],
        applications: product.applications ?? [],
        partTable: normaliseRows(product.partTable) ?? normaliseRows(product.partTableAlt),
        tableNote: product.tableNote,
        image: product.image,
      }}
      editorialHero
      otherProductsSection={
        <>
          <BSPOtherProducts
            products={otherProducts.map((item) => ({
              slug: item.slug,
              name: item.name,
              shortName: item.shortName || item.name,
              code: item.shortName || item.name,
              image: item.image,
            }))}
            title="Other ORFS Hydraulic Fittings"
            basePath="/products/hydraulic-fittings/orfs"
            categoryLabel="ORFS Hydraulic Fittings"
          />
          <BSPCtaSection
            title="Connect with Our ORFS Experts"
            description="Hydronex specializes in high-quality ORFS (O-Ring Face Seal) hydraulic fittings for high-pressure, high-vibration applications. Contact us today for quotes, technical support, or bulk orders."
            buttonLabel="Get Your Quote Today"
          />
        </>
      }
    />
  )
}
