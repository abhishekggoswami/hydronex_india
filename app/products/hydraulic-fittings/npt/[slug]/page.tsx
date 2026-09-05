import { Metadata } from "next"
import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { BSPOtherProducts } from "@/components/bsp-other-products"
import { nptHydraulicFittings } from "@/lib/npt-hydraulic-fittings"

export const dynamicParams = true

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return nptHydraulicFittings.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = nptHydraulicFittings.find((item) => item.slug === slug)

  if (!product) return {}

  return {
    title: `${product.shortName || product.name} - Hydronex NPT Hydraulic Fittings`,
    description: product.description || product.name,
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = nptHydraulicFittings.find((item) => item.slug === slug)

  if (!product) notFound()

  const otherProducts = nptHydraulicFittings.filter((item) => item.slug !== slug).slice(0, 6)
  const standardPartTable = product.partTable?.map((row) => ({
    ...row,
    dn: row.dn?.toString(),
    a: row.a?.toString(),
    b: row.b?.toString(),
    c: row.c?.toString(),
    s: row.s?.toString(),
    s1: row.s1?.toString(),
    s2: row.s2?.toString(),
  }))
  const alternatePartTable = product.partTableAlt?.map((row) => ({
    partNo: row.sinoPulsePartNo,
    parkerPartNo: row.parkerPartNo,
    threadE: row.thread,
    hoseId: row.hoseID,
    a: row.a?.toString(),
    b: row.b?.toString(),
    h: row.h,
    w: row.w,
  }))

  return (
    <BSPProductDetail
      categoryName="NPT Hydraulic Fittings"
      categoryHref="/products/hydraulic-fittings/npt"
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
        partTable: standardPartTable ?? alternatePartTable,
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
              code: item.code,
              image: item.image,
            }))}
            title="Other NPT Hydraulic Fittings"
            basePath="/products/hydraulic-fittings/npt"
            categoryLabel="NPT Hydraulic Fittings"
          />
          <BSPCtaSection
            title="Connect with Our NPT Experts"
            description="Hydronex specializes in high-quality NPT hydraulic fittings for North American applications. Contact us today for quotes, technical support, or bulk orders."
            buttonLabel="Get Your Quote Today"
          />
        </>
      }
    />
  )
}
