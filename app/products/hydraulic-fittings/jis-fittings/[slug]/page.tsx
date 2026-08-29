import { Metadata } from "next"
import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductCard } from "@/components/bsp-product-card"
import { BSPProductDetail } from "@/components/bsp-product-detail"
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
    otherProductsSection={<><section className="bg-anim-section-dots border-b border-[#d0e4f5]/40" style={{ background: "linear-gradient(180deg, #deeefa, #eaf4fc 18%, #f4faff 45%, #fafcff 72%, #fff)" }}><div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><h2 className="mb-10 text-3xl font-bold text-[#0e1c35]">Other JIS Fittings</h2><div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">{otherProducts.map((item, index) => <BSPProductCard key={item.slug} index={index} basePath="/products/hydraulic-fittings/jis-fittings" categoryLabel="JIS Fittings" product={{ id: 80000 + item.id, name: item.name, code: item.code, image: item.image, slug: item.slug }} />)}</div></div></section><BSPCtaSection title="Need JIS Fitting Solutions?" description="Contact our experts for tailored JIS fitting solutions, bulk orders and technical support." buttonLabel="Get A Quote" /></>}
  />
}
