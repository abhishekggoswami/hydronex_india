import { Metadata } from "next"
import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { BSPOtherProducts } from "@/components/bsp-other-products"
import { jisFittings } from "@/lib/jis-fittings"

export const dynamicParams = true

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() { return jisFittings.map((product) => ({ slug: product.slug })) }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = jisFittings.find((item) => item.slug === slug)
  if (!product) return {}
  return { title: `${product.name} - Hydronex JIS Fittings`, description: product.description || product.name }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = jisFittings.find((item) => item.slug === slug)
  if (!product) notFound()

  const otherProducts = jisFittings.filter((item) => item.slug !== slug).slice(0, 6)
  const normaliseRows = (rows: unknown[] | undefined) => rows?.map((source) => {
    const row = source as Record<string, string | number | undefined>
    return {
      partNo: String(row.partNo ?? row.sinopulsePartNo ?? row.sinoPulsePartNo ?? ""),
      parkerPartNo: row.parkerPartNo?.toString(),
      threadE: row.threadE?.toString() ?? row.thread?.toString() ?? row.flangeSize?.toString(),
      hoseId: row.hoseId?.toString() ?? row.hoseID?.toString(),
      dn: row.dn?.toString(), dash: row.dash?.toString(), a: row.a?.toString(), b: row.b?.toString(), c: row.c?.toString(), e: row.e?.toString(), h: row.h?.toString(), w: row.w?.toString(), s: row.s?.toString(), s1: row.s1?.toString(), s2: row.s2?.toString(),
    }
  })

  return <BSPProductDetail
    categoryName="JIS Fittings"
    categoryHref="/products/hydraulic-fittings/jis-fittings"
    product={{ name: product.name, shortName: product.name, slug: product.slug, description: product.description ?? "", material: product.material, surfaceTreat: product.surfaceTreat, application: product.application, features: product.features ?? [], specs: product.specs ?? [], applications: product.applications ?? [], partTable: normaliseRows(product.partTable) ?? normaliseRows(product.partTableAlt), tableNote: product.tableNote, image: product.image }}
    editorialHero
    otherProductsSection={<><BSPOtherProducts products={otherProducts.map((item) => ({ slug: item.slug, name: item.name, shortName: item.name, code: item.code, image: item.image }))} title="Other JIS Fittings" basePath="/products/hydraulic-fittings/jis-fittings" categoryLabel="JIS Fittings" /><BSPCtaSection title="Need JIS Fitting Solutions?" description="Contact our experts for tailored JIS fitting solutions, bulk orders and technical support." buttonLabel="Get A Quote" /></>}
  />
}
