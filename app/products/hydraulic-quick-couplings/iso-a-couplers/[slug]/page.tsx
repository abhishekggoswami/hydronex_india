import { Metadata } from "next"
import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { BSPOtherProducts } from "@/components/bsp-other-products"
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
      editorialHero
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
          <BSPOtherProducts
            products={otherProducts.map((item) => ({
              slug: item.slug,
              name: item.name,
              shortName: item.shortName,
              code: item.code,
              image: item.image,
            }))}
            title="Other ISO-A Couplers"
            basePath="/products/hydraulic-quick-couplings/iso-a-couplers"
            categoryLabel="ISO-A Couplers"
          />
          <BSPCtaSection
            title="Need Help Selecting the Right ISO-A Coupler?"
            description="Our expert team is ready to help with product selection, technical support and bulk orders."
            buttonLabel="Contact Sales"
            ctaHref="/contact"
          />
        </>
      }
    />
  )
}
