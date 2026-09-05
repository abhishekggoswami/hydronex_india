import { Metadata } from "next"
import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { BSPOtherProducts } from "@/components/bsp-other-products"
import { banjoFittings, getAllBanjoFittingSlugs, getBanjoFittingBySlug } from "@/lib/banjo-fittings"

export const dynamicParams = true

export async function generateStaticParams() {
  return getAllBanjoFittingSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const fitting = getBanjoFittingBySlug(slug)

  if (!fitting) return {}

  return {
    title: `${fitting.name} - Hydronex Banjo Fittings`,
    description: fitting.description,
  }
}

const normaliseRows = (rows: Array<Record<string, string | number | undefined>> | undefined) =>
  rows?.map((row) => ({
    partNo: String(row.partNo ?? row.sinoPulsePartNo ?? row.sinopulsePartNo ?? ""),
    parkerPartNo: row.parkerPartNo?.toString(),
    threadE: row.threadE?.toString(),
    hoseId: row.hoseId?.toString() ?? row.hoseID?.toString(),
    r: row.r?.toString(),
    boltThread: row.boltThread?.toString(),
    thread: row.thread?.toString(),
    dn: row.dn?.toString(),
    dash: row.dash?.toString(),
    d: row.d?.toString(),
    sfD: row.sfD?.toString(),
    a: row.a?.toString(),
    b: row.b?.toString(),
    c: row.c?.toString(),
    h: row.h?.toString(),
    s: row.s?.toString(),
    s1: row.s1?.toString(),
  }))

export default async function BanjoProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const fitting = getBanjoFittingBySlug(slug)

  if (!fitting) notFound()

  const otherProducts = banjoFittings.filter((product) => product.slug !== slug).slice(0, 6)

  return (
    <BSPProductDetail
      categoryName="Banjo Fittings"
      categoryHref="/products/hydraulic-fittings/banjo-fittings"
      product={{
        name: fitting.name,
        shortName: fitting.code,
        slug: fitting.slug,
        description: fitting.description,
        material: fitting.material,
        surfaceTreat: fitting.surfaceTreat,
        features: fitting.features,
        specs: [],
        applications: [],
        partTable: normaliseRows(fitting.partTable),
        image: fitting.image,
      }}
      editorialHero
      otherProductsSection={
        <>
          <BSPOtherProducts
            products={otherProducts.map((product) => ({
              slug: product.slug,
              name: product.name,
              shortName: product.code,
              code: product.code,
              image: product.image,
            }))}
            title="Other Banjo Fittings"
            basePath="/products/hydraulic-fittings/banjo-fittings"
            categoryLabel="Banjo Fittings"
          />
          <BSPCtaSection title="Need Banjo Fitting Solutions?" description="Contact our experts for tailored solutions, bulk orders and technical support." buttonLabel="Get A Quote" />
        </>
      }
    />
  )
}
