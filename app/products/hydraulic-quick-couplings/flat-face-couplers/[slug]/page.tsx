import { notFound } from "next/navigation"
import { Metadata } from "next"
import { flatFaceCouplers } from "@/lib/flat-face-couplers"
import { FlatFaceProductDetail } from "@/components/flat-face-product-detail"
import { QKEPProductDetail } from "@/components/qkep-product-detail"
import { QKPTProductDetail } from "@/components/qkpt-product-detail"
import { QKPSProductDetail } from "@/components/qkps-product-detail"
import { KDFProductDetail } from "@/components/kdf-product-detail"
import { ISOAProductDetail } from "@/components/iso-a-product-detail"
import { ISOAOtherProducts } from "@/components/iso-a-other-products"

export const dynamicParams = true

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = flatFaceCouplers.find((p) => p.slug === slug)
  if (!product) return {}

  return {
    title: `${product.shortName} – Hydronex Flat Face Couplers`,
    description: product.description,
  }
}

export async function generateStaticParams() {
  return flatFaceCouplers.map(product => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = flatFaceCouplers.find(p => p.slug === slug)

  if (!product) {
    notFound()
  }

  const otherProducts = flatFaceCouplers.filter((p) => p.slug !== slug)

  // QKPT series uses extended product detail component
  if (product.slug === "flat-face-qkpt-series-carbon-steel") {
    return (
      <>
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
            image: product.image,
          }}
          otherProductsSection={undefined}
          category="flat-face"
          categoryLabel="Flat Face Couplers"
        />
        <QKPTProductDetail
          product={{
            name: product.name,
            basicSpecTable: product.basicSpecTable,
            qkptCouplerTable: product.qkptCouplerTable,
            qkptNippleTable: product.qkptNippleTable,
            qkptPerformanceTable: product.qkptPerformanceTable,
            qkptCouplerDiagramImage: product.qkptCouplerDiagramImage,
            qkptNippleDiagramImage: product.qkptNippleDiagramImage,
          }}
          otherProductsSection={<ISOAOtherProducts products={otherProducts} basePath="/products/hydraulic-quick-couplings/flat-face-couplers" />}
        />
      </>
    )
  }

  // QKPS series uses extended product detail component
  if (product.slug === "flat-face-qkps-series-stainless-steel") {
    return (
      <>
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
            image: product.image,
          }}
          otherProductsSection={undefined}
          category="flat-face"
          categoryLabel="Flat Face Couplers"
        />
        <QKPSProductDetail
          product={{
            name: product.name,
            basicSpecTable: product.basicSpecTable,
            qkpsNippleTable: product.qkpsNippleTable,
            qkpsCouplerTable: product.qkpsCouplerTable,
            qkpsDustProtectionTable: product.qkpsDustProtectionTable,
            qkpsNippleDiagramImage: product.qkpsNippleDiagramImage,
            qkpsCouplerDiagramImage: product.qkpsCouplerDiagramImage,
          }}
          otherProductsSection={<ISOAOtherProducts products={otherProducts} basePath="/products/hydraulic-quick-couplings/flat-face-couplers" />}
        />
      </>
    )
  }

  // KDF series uses extended product detail component
  if (product.slug === "flat-face-kdf-series-steel") {
    return (
      <>
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
            image: product.image,
          }}
          otherProductsSection={undefined}
          category="flat-face"
          categoryLabel="Flat Face Couplers"
        />
        <KDFProductDetail
          product={{
            name: product.name,
            basicSpecTable: product.basicSpecTable,
            kdfFemaleTable: product.kdfFemaleTable,
            kdfMaleTable: product.kdfMaleTable,
            kdfPerformanceTable: product.kdfPerformanceTable,
            kdfDustProtectionTable: product.kdfDustProtectionTable,
            kdfFemaleDiagramImage: product.kdfFemaleDiagramImage,
            kdfMaleDiagramImage: product.kdfMaleDiagramImage,
          }}
          otherProductsSection={<ISOAOtherProducts products={otherProducts} basePath="/products/hydraulic-quick-couplings/flat-face-couplers" />}
        />
      </>
    )
  }

  // QKEP series uses extended product detail component
  if (product.slug === "flat-face-qkep-series-carbon-steel") {
    return (
      <>
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
            image: product.image,
          }}
          otherProductsSection={undefined}
          category="flat-face"
          categoryLabel="Flat Face Couplers"
        />
        <QKEPProductDetail
          product={{
            name: product.name,
            basicSpecTable: product.basicSpecTable,
            couplerFemaleTable: product.couplerFemaleTable,
            nippleTable: product.nippleTable,
            performanceTable: product.performanceTable,
            dustProtectionTable: product.dustProtectionTable,
            couplerDiagramImage: product.couplerDiagramImage,
            nippelDiagramImage: product.nippelDiagramImage,
          }}
          otherProductsSection={<ISOAOtherProducts products={otherProducts} basePath="/products/hydraulic-quick-couplings/flat-face-couplers" />}
        />
      </>
    )
  }

  return (
    <FlatFaceProductDetail
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
        diagram: product.diagram,
        specificationTable: product.specificationTable,
        detailedSpecificationTable: product.detailedSpecificationTable,
      }}
      otherProductsSection={<ISOAOtherProducts products={otherProducts} basePath="/products/hydraulic-quick-couplings/flat-face-couplers" />}
    />
  )
}
