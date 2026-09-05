import { Metadata } from "next"
import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { BSPOtherProducts } from "@/components/bsp-other-products"
import { americanNPSMFittings } from "@/lib/american-npsm-fittings"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return americanNPSMFittings.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = americanNPSMFittings.find((item) => item.slug === slug)

  if (!product) return {}

  return {
    title: `${product.shortName || product.name} - Hydronex American NPSM Hydraulic Fittings`,
    description: product.description || product.name,
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = americanNPSMFittings.find((item) => item.slug === slug)

  if (!product) notFound()

  const otherProducts = americanNPSMFittings.filter((item) => item.slug !== slug).slice(0, 6)
  const standardPartTable = product.partTable?.map((row) => {
    const completeRow = row as typeof row & { b?: number }
    return {
      ...completeRow,
      a: completeRow.a?.toString(),
      b: completeRow.b?.toString(),
      c: completeRow.c?.toString(),
      h: completeRow.h?.toString(),
      s: completeRow.s?.toString(),
      s1: completeRow.s1?.toString(),
      s2: completeRow.s2?.toString(),
    }
  })
  const alternatePartTable = product.partTableAlt?.map((row: Record<string, string | number | undefined>) => ({
    partNo: String(row.sinoPulsePartNo ?? ""),
    parkerPartNo: row.parkerPartNo ? String(row.parkerPartNo) : undefined,
    threadE: row.thread ? String(row.thread) : undefined,
    hoseId: row.hoseID ? String(row.hoseID) : undefined,
    a: row.a?.toString(),
    b: row.b?.toString(),
    h: row.h?.toString(),
    w: row.w?.toString(),
  }))

  return (
    <BSPProductDetail
      categoryName="American NPSM Fittings"
      categoryHref="/products/hydraulic-fittings/american-npsm"
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
            title="Other American NPSM Fittings"
            basePath="/products/hydraulic-fittings/american-npsm"
            categoryLabel="American NPSM Fittings"
          />
          <BSPCtaSection
            title="Need American NPSM Fitting Solutions?"
            description="Contact our experts for tailored American NPSM fitting solutions, bulk orders and technical support."
            buttonLabel="Get Your Quote Today"
          />
        </>
      }
    />
  )
}
