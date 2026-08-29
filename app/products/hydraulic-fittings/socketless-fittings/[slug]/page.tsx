import { Metadata } from "next"
import { notFound } from "next/navigation"
import { BSPProductCard } from "@/components/bsp-product-card"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { getAllSocketlessFittingSlugs, getSocketlessFittingBySlug, socketlessFittings } from "@/lib/socketless-fittings"

export const dynamicParams = true

export async function generateStaticParams() {
  return getAllSocketlessFittingSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const fitting = getSocketlessFittingBySlug(slug)

  if (!fitting) return {}

  return {
    title: `${fitting.name} - Hydronex Socketless Fittings`,
    description: fitting.description,
  }
}

const normaliseRows = (rows: Array<Record<string, string | number | undefined>> | undefined) =>
  rows?.map((row) => ({
    partNo: String(row["Part No."] ?? row.partNo ?? ""),
    threadE: row["Thread E"]?.toString() ?? row.Thread?.toString() ?? row.threadE?.toString(),
    dn: row.DN?.toString() ?? row.dn?.toString(),
    dash: row.DASH?.toString() ?? row.dash?.toString(),
    a: row.A?.toString() ?? row.a?.toString(),
    c: row.C?.toString() ?? row.c?.toString(),
    h: row.H?.toString() ?? row.h?.toString(),
    s: row.S?.toString() ?? row.s?.toString(),
    s1: row.S1?.toString() ?? row.s1?.toString(),
    s2: row.S2?.toString() ?? row.s2?.toString(),
    d: row.D?.toString() ?? row.d?.toString(),
    l: row.L?.toString() ?? row.l?.toString(),
  }))

export default async function SocketlessProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const fitting = getSocketlessFittingBySlug(slug)

  if (!fitting) notFound()

  const otherProducts = socketlessFittings.filter((product) => product.slug !== slug).slice(0, 6)
  const applications = Array.isArray(fitting.applications) ? fitting.applications : []
  const application = typeof fitting.applications === "string" ? fitting.applications : undefined

  return (
    <BSPProductDetail
      categoryName="Socketless Fittings"
      categoryHref="/products/hydraulic-fittings/socketless-fittings"
      product={{
        name: fitting.name,
        shortName: fitting.code,
        slug: fitting.slug,
        description: fitting.description,
        material: fitting.material,
        surfaceTreat: fitting.surfaceTreat,
        application,
        features: fitting.features ?? [],
        specs: [],
        applications,
        partTable: normaliseRows(fitting.partTable),
        image: fitting.image,
      }}
      otherProductsSection={
        <section className="bg-anim-section-dots border-b border-[#d0e4f5]/40 bg-[linear-gradient(135deg,#f8fcff_0%,#e7f4fd_100%)] py-20">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ed5629]">Related</p>
              <h2 className="font-heading text-3xl font-bold text-[#0d2949]">Other Socketless Fittings</h2>
            </div>
            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {otherProducts.map((product, index) => (
                <BSPProductCard
                  key={product.slug}
                  product={{
                    id: 110000 + product.id,
                    name: product.name,
                    code: product.code,
                    image: product.image,
                    slug: product.slug,
                  }}
                  index={index}
                  basePath="/products/hydraulic-fittings/socketless-fittings"
                  categoryLabel="Socketless Fittings"
                />
              ))}
            </div>
          </div>
        </section>
      }
    />
  )
}
