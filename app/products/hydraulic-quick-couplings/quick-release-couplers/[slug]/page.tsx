import { notFound } from "next/navigation"
import { Metadata } from "next"
import { quickReleaseCouplers } from "@/lib/quick-release-couplers"
import { ISOAProductDetail } from "@/components/iso-a-product-detail"
import { ISOAOtherProducts } from "@/components/iso-a-other-products"
import { KTMProductDetail } from "@/components/ktm-product-detail"
import { KNVProductDetail } from "@/components/knv-product-detail"

export const dynamicParams = true

// Keep the published product-detail URLs available when the data changes.

export async function generateStaticParams() {
  return quickReleaseCouplers.map(product => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = quickReleaseCouplers.find(p => p.slug === slug)

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: `${product.name} – Quick Release Couplers | Hydronex`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = quickReleaseCouplers.find(p => p.slug === slug)

  if (!product) {
    notFound()
  }

  const otherProducts = quickReleaseCouplers.filter(p => p.id !== product.id)
  const otherProductsSection = <ISOAOtherProducts products={otherProducts} basePath="/products/hydraulic-quick-couplings/quick-release-couplers" />

  // Use KTM component for KTM Series
  if (product.slug === "ktm-series-steel") {
    return (
      <>
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
          }}
          otherProductsSection={<div />}
          category="quick-release"
        />
        <KTMProductDetail
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
            techSpecs: product.techSpecs,
            applications: product.applications,
            femaleSpecsTable: product.femaleSpecsTable,
            femaleDiagram: product.femaleDiagram,
            maleSpecsTable: product.maleSpecsTable,
            maleDiagram: product.maleDiagram,
            dustProtectionTable: product.dustProtectionTable,
            performanceSpecsTable: product.performanceSpecsTable,
          }}
          otherProductsSection={otherProductsSection}
        />
      </>
    )
  }

  // Use KNV component for KNV Series
  if (product.slug === "knv-series-steel") {
    return (
      <>
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
          }}
          otherProductsSection={<div />}
          category="quick-release"
        />
        <KNVProductDetail
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
            techSpecs: product.techSpecs,
            applications: product.applications,
            femaleSpecsTable: product.femaleSpecsTable,
            femaleDiagram: product.femaleDiagram,
            maleSpecsTable: product.maleSpecsTable,
            maleDiagram: product.maleDiagram,
            performanceSpecsTable: product.performanceSpecsTable,
          }}
          otherProductsSection={otherProductsSection}
        />
      </>
    )
  }

  return (
    <>
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
        }}
        otherProductsSection={otherProductsSection}
        category="quick-release"
      />
    </>
  )
}
