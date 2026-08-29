import { Metadata } from "next"
import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductCard } from "@/components/bsp-product-card"
import { BSPProductDetail } from "@/components/bsp-product-detail"
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
      otherProductsSection={
        <>
          <section
            className="bg-anim-section-dots border-b border-[#d0e4f5]/40"
            style={{ background: "linear-gradient(180deg, #deeefa, #eaf4fc 18%, #f4faff 45%, #fafcff 72%, #fff)" }}
          >
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
              <h2 className="mb-10 text-3xl font-bold text-[#0e1c35]">Other NPT Hydraulic Fittings</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
                {otherProducts.map((item, index) => (
                  <BSPProductCard
                    key={item.slug}
                    index={index}
                    basePath="/products/hydraulic-fittings/npt"
                    categoryLabel="NPT Hydraulic Fittings"
                    product={{
                      id: 50000 + item.id,
                      name: item.name,
                      code: item.code,
                      image: item.image,
                      slug: item.slug,
                    }}
                  />
                ))}
              </div>
            </div>
          </section>
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
