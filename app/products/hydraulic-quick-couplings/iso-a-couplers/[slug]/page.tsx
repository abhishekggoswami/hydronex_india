import { Metadata } from "next"
import { notFound } from "next/navigation"
import { BSPProductCard } from "@/components/bsp-product-card"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { ISOATechnicalSections } from "@/components/iso-a-technical-sections"
import { isoACouplers } from "@/lib/iso-a-couplers"

export const dynamicParams = true

export async function generateStaticParams() {
  return isoACouplers.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = isoACouplers.find((item) => item.slug === slug)

  if (!product) return {}

  return {
    title: `${product.shortName} - Hydronex ISO-A Quick Couplers`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = isoACouplers.find((item) => item.slug === slug)

  if (!product) notFound()

  const otherProducts = isoACouplers.filter((item) => item.slug !== slug)

  return (
    <BSPProductDetail
      categoryName="ISO-A Couplers"
      categoryHref="/products/hydraulic-quick-couplings/iso-a-couplers"
      parentCategoryName="Hydraulic Quick Couplings"
      parentCategoryHref="/products/hydraulic-quick-couplings"
      product={{
        name: product.name,
        shortName: product.shortName,
        slug: product.slug,
        description: product.description ?? "",
        material: product.material,
        surfaceTreat: product.surfaceTreat,
        application: product.application,
        features: product.features ?? [],
        specs: product.specs ?? [],
        applications: product.applications ?? [],
        image: product.image,
      }}
      otherProductsSection={
        <>
          <ISOATechnicalSections
            nippelTable={product.nippelTable}
            partTable={product.partTable}
            performanceTable={product.performanceTable}
            dustProtectionTable={product.dustProtectionTable}
            nippelDiagramImage={product.nippelDiagramImage}
            couplerDiagramImage={product.couplerDiagramImage}
            tableNote={product.tableNote}
          />
          <section className="bg-anim-section-dots border-b border-[#d0e4f5]/40 bg-[linear-gradient(135deg,#f8fcff_0%,#e7f4fd_100%)] py-20">
            <div className="container mx-auto px-4">
              <div className="mb-10">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ed5629]">Related</p>
                <h2 className="font-heading text-3xl font-bold text-[#0d2949]">Other ISO-A Couplers</h2>
              </div>
              <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                {otherProducts.map((item, index) => (
                  <BSPProductCard
                    key={item.slug}
                    product={{
                      id: 150000 + item.id,
                      name: item.name,
                      code: item.code,
                      image: item.image,
                      slug: item.slug,
                    }}
                    index={index}
                    basePath="/products/hydraulic-quick-couplings/iso-a-couplers"
                    categoryLabel="ISO-A Couplers"
                  />
                ))}
              </div>
            </div>
          </section>
        </>
      }
    />
  )
}
