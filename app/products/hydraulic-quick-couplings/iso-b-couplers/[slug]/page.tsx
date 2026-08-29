import { Metadata } from "next"
import { isoBCouplers } from "@/lib/iso-b-couplers"
import { notFound } from "next/navigation"
import { ISOAOtherProducts } from "@/components/iso-a-other-products"
import { ISOAProductDetail } from "@/components/iso-a-product-detail"

export const dynamicParams = true

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = isoBCouplers.find((p) => p.slug === slug)
  if (!product) return {}

  return {
    title: `${product.shortName} – Hydronex ISO-B Quick Couplers`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = isoBCouplers.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  const otherProducts = isoBCouplers.filter((p) => p.slug !== slug)

  return (
    <ISOAProductDetail
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
        partTable: product.partTable,
        maleTable: product.maleTable,
        kzbSeriesFemaleTable: product.kzbSeriesFemaleTable,
        tableNote: product.tableNote,
        performanceTable: product.performanceTable,
        nippelTable: product.nippelTable,
        nippelDiagramImage: product.nippelDiagramImage,
        couplerDiagramImage: product.couplerDiagramImage,
        dustProtectionTable: product.dustProtectionTable,
        accessoriesTable: product.accessoriesTable,
        ratedPressureTable: product.ratedPressureTable,
        techSpecs: product.techSpecs,
        image: product.image,
      }}
      otherProductsSection={<ISOAOtherProducts products={otherProducts} basePath="/products/hydraulic-quick-couplings/iso-b-couplers" categoryLabel="ISO-B Quick Couplers" />}
      category="iso-b"
      categoryLabel="ISO-B Quick Couplers"
      categoryPath="/products/hydraulic-quick-couplings/iso-b-couplers"
    />
  )
}
