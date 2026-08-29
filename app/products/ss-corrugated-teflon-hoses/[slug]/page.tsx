import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { SSCorrugatedTeflonOtherProducts } from "@/components/ss-corrugated-teflon-other-products"
import { SSCorrugatedTeflonSpecificationTable } from "@/components/ss-corrugated-teflon-specification-table"
import { getSSCorrugatedTeflon, ssCorrugatedTeflon } from "@/lib/ss-corrugated-teflon-hoses"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return ssCorrugatedTeflon.map((hose) => ({ slug: hose.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const hose = getSSCorrugatedTeflon(slug)
  if (!hose) return {}
  return { title: `${hose.shortName} â€“ Hydronex S.S. Corrugated & Teflon Hoses`, description: hose.description.slice(0, 160) }
}

export default async function SSCorrugatedTefalonProductPage({ params }: Props) {
  const { slug } = await params
  const hose = getSSCorrugatedTeflon(slug)
  if (!hose) notFound()

  const otherProducts = ssCorrugatedTeflon.filter((item) => item.slug !== hose.slug).slice(0, 6)
  const allSpecs = [...hose.specs, ...hose.quickStats]

  return (
    <BSPProductDetail
      categoryName="S.S. Corrugated & Teflon Hoses"
      categoryHref="/products/ss-corrugated-teflon-hoses"
      showParentCategory={false}
      product={{
        name: hose.name,
        shortName: hose.shortName,
        slug: hose.slug,
        description: hose.description,
        material: hose.specs.find((spec) => /material|tube/i.test(spec.label))?.value,
        surfaceTreat: hose.specs.find((spec) => /construction|cover/i.test(spec.label))?.value,
        application: hose.applications.join(", "),
        features: hose.features,
        specs: allSpecs,
        applications: hose.applications,
        image: hose.image,
      }}
      additionalSpecificationSection={<SSCorrugatedTeflonSpecificationTable hose={hose} />}
      otherProductsSection={
        <>
          <SSCorrugatedTeflonOtherProducts products={otherProducts} />
          <BSPCtaSection
            title={`Ready to Get Your ${hose.shortName}?`}
            description="Contact our team for pricing, bulk orders, or technical specifications. We're here to help find the perfect hose solution for your application."
            buttonLabel="Request a Quote Today"
          />
        </>
      }
      editorialHero
    />
  )
}
