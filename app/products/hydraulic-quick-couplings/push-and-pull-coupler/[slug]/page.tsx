import { notFound } from "next/navigation"
import { Metadata } from "next"
import { pushPullCouplers } from "@/lib/push-and-pull-couplers"
import { ISOAProductDetail } from "@/components/iso-a-product-detail"
import { ISOAOtherProducts } from "@/components/iso-a-other-products"
import { KZAProductDetail } from "@/components/kza-product-detail"
import { KZAVProductDetail } from "@/components/kzav-product-detail"

export const dynamicParams = true

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = pushPullCouplers.find(p => p.slug === slug)

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: `${product.name} – Push-and-Pull Couplers | Hydronex`,
    description: product.description,
  }
}

export async function generateStaticParams() {
  return pushPullCouplers.map(product => ({
    slug: product.slug,
  }))
}

export default async function PushPullProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = pushPullCouplers.find(p => p.slug === slug)

  if (!product) {
    notFound()
  }

  const otherProducts = pushPullCouplers.filter(p => p.id !== product.id)
  const otherProductsSection = <ISOAOtherProducts products={otherProducts} basePath="/products/hydraulic-quick-couplings/push-and-pull-coupler" />

  // Use KZAV component for KZAV Series
  if (product.slug === "kzav-series-steel") {
    return (
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
            techSpecs: product.techSpecs,
            applications: product.applications,
            performanceTable: product.performanceTable,
            ratedPressureTable: product.ratedPressureTable,
            image: product.image,
          }}
          otherProductsSection={null}
          supplementalContent={
            <KZAVProductDetail
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
            image: product.image,
            couplerFemaleTable: product.couplerFemaleTable,
            performanceSpecsTable: product.performanceSpecsTable,
            couplerFemaleImage: product.couplerFemaleImage,
          }}
              otherProductsSection={otherProductsSection}
            />
          }
          category="push-and-pull"
          categoryLabel="Push-and-Pull Couplers"
          categoryPath="/products/hydraulic-quick-couplings/push-and-pull-coupler"
        />
    )
  }

  // Use KZAV component for KZAF Series (same structure as KZAV)
  if (product.slug === "kzaf-series-steel") {
    return (
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
            techSpecs: product.techSpecs,
            applications: product.applications,
            performanceTable: product.performanceTable,
            ratedPressureTable: product.ratedPressureTable,
            image: product.image,
          }}
          otherProductsSection={null}
          supplementalContent={
            <KZAVProductDetail
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
            image: product.image,
            couplerFemaleTable: product.couplerFemaleTable,
            performanceSpecsTable: product.performanceSpecsTable,
            couplerFemaleImage: product.couplerFemaleImage,
          }}
              otherProductsSection={otherProductsSection}
            />
          }
          category="push-and-pull"
          categoryLabel="Push-and-Pull Couplers"
          categoryPath="/products/hydraulic-quick-couplings/push-and-pull-coupler"
        />
    )
  }

  // Use KZA component for KZA Series, ISO-A component for others
  if (product.slug === "kza-series-steel") {
    return (
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
            techSpecs: product.techSpecs,
            applications: product.applications,
            performanceTable: product.performanceTable,
            ratedPressureTable: product.ratedPressureTable,
            image: product.image,
          }}
          otherProductsSection={null}
          supplementalContent={
            <KZAProductDetail
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
            image: product.image,
            couplerFemaleTable: product.couplerFemaleTable,
            nippelMaleTable1: product.nippelMaleTable1,
            couplerMaleTable2: product.couplerMaleTable2,
            nippelMaleTable2: product.nippelMaleTable2,
            nippelMaleTable3: product.nippelMaleTable3,
            couplerMaleTable3: product.couplerMaleTable3,
            couplerFemaleImage: product.couplerFemaleImage,
            nippelMaleImage1: product.nippelMaleImage1,
            couplerMaleImage1: product.couplerMaleImage1,
            couplerMaleImage2: product.couplerMaleImage2,
            nippelMaleImage2: product.nippelMaleImage2,
            nippelMaleImage3: product.nippelMaleImage3,
            couplerMaleImage3: product.couplerMaleImage3,
            performanceSpecsTable: product.performanceSpecsTable,
          }}
              otherProductsSection={otherProductsSection}
            />
          }
          category="push-and-pull"
          categoryLabel="Push-and-Pull Couplers"
          categoryPath="/products/hydraulic-quick-couplings/push-and-pull-coupler"
        />
    )
  }

  return (
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
        techSpecs: product.techSpecs,
        applications: product.applications,
        performanceTable: product.performanceTable,
        ratedPressureTable: product.ratedPressureTable,
        image: product.image,
      }}
      otherProductsSection={otherProductsSection}
      category="push-and-pull"
    />
  )
}
