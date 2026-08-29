import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { LowPressureHoseOtherProducts } from "@/components/low-pressure-hose-other-products"
import { LowPressureHoseSpecificationTable } from "@/components/low-pressure-hose-specification-table"
import { getLowPressureHoseBySlug, lowPressureHoses } from "@/lib/low-pressure-hoses"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return lowPressureHoses.map((hose) => ({ slug: hose.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const hose = getLowPressureHoseBySlug(slug)
  if (!hose) return {}
  return { title: `${hose.shortName} â€“ Hydronex Low Pressure Hoses`, description: hose.description.slice(0, 160) }
}

export default async function LowPressureHoseProductPage({ params }: Props) {
  const { slug } = await params
  const hose = getLowPressureHoseBySlug(slug)
  if (!hose) notFound()

  const otherProducts = lowPressureHoses.filter((item) => item.slug !== hose.slug).slice(0, 6)
  const allSpecs = [...hose.specs, ...hose.quickStats]

  return (
    <BSPProductDetail
      categoryName="Low Pressure Hoses"
      categoryHref="/products/low-pressure-hoses"
      showParentCategory={false}
      product={{
        name: hose.name,
        shortName: hose.shortName,
        slug: hose.slug,
        description: hose.description,
        material: hose.specs.find((spec) => /tube|material/i.test(spec.label))?.value,
        surfaceTreat: hose.specs.find((spec) => /cover|reinforcement/i.test(spec.label))?.value,
        application: hose.applications.join(", "),
        features: hose.features,
        specs: allSpecs,
        applications: hose.applications,
        image: hose.image,
      }}
      additionalSpecificationSection={<LowPressureHoseSpecificationTable hose={hose} />}
      otherProductsSection={
        <>
          <LowPressureHoseOtherProducts products={otherProducts} />
          <BSPCtaSection
            title="Ready to Find Your Perfect Low Pressure Hose?"
            description="Contact our hose specialists today for recommendations, bulk pricing, and technical support."
            buttonLabel="Get a Quote Now"
          />
        </>
      }
      editorialHero
    />
  )
}
