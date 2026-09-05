import { Metadata } from "next"
import { threadedCouplers } from "@/lib/threaded-couplers"
import { notFound } from "next/navigation"
import { ISOAProductDetail } from "@/components/iso-a-product-detail"
import { BSPOtherProducts } from "@/components/bsp-other-products"
import { BSPCtaSection } from "@/components/bsp-cta-section"

export const dynamicParams = true

export async function generateStaticParams() {
  return threadedCouplers.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = threadedCouplers.find((p) => p.slug === slug)
  if (!product) return {}

  return {
    title: `${product.shortName} – Hydronex Threaded Couplers`,
    description: product.description,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = threadedCouplers.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  const otherProducts = threadedCouplers
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      slug: p.slug,
      name: p.name,
      shortName: p.shortName,
      code: p.code,
      description: p.description,
      image: p.image,
    }))

  return (
    <div className="threaded-bsp-detail">
      <ISOAProductDetail
      product={{
        name: product.name,
        shortName: product.shortName,
        slug: product.slug,
        description: product.description,
        material: product.material,
        surfaceTreat: product.surfaceTreat,
        application: product.application,
        features: product.features,
        specs: product.specs,
        applications: product.applications,
        image: product.image,
        techSpecs: product.techSpecs,
        partTable: product.partTable as any,
        tableNote: undefined,
        performanceTable: product.performanceTable,
        nippelTable: product.nippelTable as any,
        nippelDiagramImage: product.nippelDiagramImage,
        couplerDiagramImage: product.couplerDiagramImage,
        couplerSFFDiagramImage: product.couplerSFFDiagramImage,
        qktlCouplerSFFTable: product.qktlCouplerSFFTable as any,
        ratedPressureFlowTable: product.ratedPressureFlowTable,
        kvvDetailTable: product.kvvDetailTable,
        qktfWingNutTable: product.qktfWingNutTable,
        qktfWingNutDiagramImage: product.qktfWingNutDiagramImage,
        qktfMaleTable: product.qktfMaleTable,
        qktfMaleDiagramImage: product.qktfMaleDiagramImage,
        qktfHexNutTable: product.qktfHexNutTable,
        qktfHexNutDiagramImage: product.qktfHexNutDiagramImage,
        qktfDetailTable: product.qktfDetailTable,
        kcvFemaleMetricTable: product.kcvFemaleMetricTable,
        kcvFemaleDiagram2Image: product.kcvFemaleDiagram2Image,
        kcvMaleMetricTable: product.kcvMaleMetricTable,
        kcvMaleDiagram2Image: product.kcvMaleDiagram2Image,
        ksgMaleTable: product.ksgMaleTable,
        ksgMaleDiagramImage: product.ksgMaleDiagramImage,
        ksgFemaleTable: product.ksgFemaleTable,
        ksgFemaleDiagramImage: product.ksgFemaleDiagramImage,
        ksgTableOrder: product.ksgTableOrder,
        ksgTableUnit: product.ksgTableUnit,
        dustProtectionTable: product.dustProtectionTable as any,
      }}
      otherProductsSection={
        <>
          <BSPOtherProducts
            products={otherProducts}
            title="Other Threaded Couplers"
            basePath="/products/hydraulic-quick-couplings/threaded-couplers"
            categoryLabel="Threaded Couplers"
          />
          <BSPCtaSection
            title="Need Help Selecting a Threaded Coupler?"
            description="Our expert team is ready to help with product selection, technical support and bulk orders."
            buttonLabel="Get A Quote"
            ctaHref="/#contact"
          />
        </>
      }
      category="threaded"
      categoryLabel="Threaded Couplers"
      categoryPath="/products/hydraulic-quick-couplings/threaded-couplers"
      />
    </div>
  )
}
