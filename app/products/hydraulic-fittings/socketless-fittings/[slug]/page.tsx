import { Metadata } from "next"
import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { BSPOtherProducts } from "@/components/bsp-other-products"
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
            title="Other Socketless Fittings"
            basePath="/products/hydraulic-fittings/socketless-fittings"
            categoryLabel="Socketless Fittings"
          />
          <BSPCtaSection title="Need Help Selecting the Right Socketless Fitting?" description="Our expert team is ready to help you find the perfect socketless fitting for your hydraulic application. Contact us for technical assistance and custom solutions." buttonLabel="Contact Sales" ctaHref="/contact" />
        </>
      }
    />
  )
}
