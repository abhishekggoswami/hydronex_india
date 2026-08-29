import { Metadata } from "next"
import { notFound } from "next/navigation"
import { BSPProductCard } from "@/components/bsp-product-card"
import { BSPProductDetail } from "@/components/bsp-product-detail"
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
      otherProductsSection={
        <section className="bg-anim-section-dots border-b border-[#d0e4f5]/40 bg-[linear-gradient(135deg,#f8fcff_0%,#e7f4fd_100%)] py-20">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ed5629]">Related</p>
              <h2 className="font-heading text-3xl font-bold text-[#0d2949]">Other Banjo Fittings</h2>
            </div>
            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {otherProducts.map((product, index) => (
                <BSPProductCard
                  key={product.slug}
                  product={{
                    id: 100000 + product.id,
                    name: product.name,
                    code: product.code,
                    image: product.image,
                    slug: product.slug,
                  }}
                  index={index}
                  basePath="/products/hydraulic-fittings/banjo-fittings"
                  categoryLabel="Banjo Fittings"
                />
              ))}
            </div>
          </div>
        </section>
      }
    />
  )
}
