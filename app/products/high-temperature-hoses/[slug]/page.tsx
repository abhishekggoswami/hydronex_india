import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { HighTemperatureHoseOtherProducts } from "@/components/high-temperature-hose-other-products"
import { HighTemperatureHoseSpecificationTable } from "@/components/high-temperature-hose-specification-table"
import { getHighTemperatureHoseBySlug, highTemperatureHoses } from "@/lib/high-temperature-hoses"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return highTemperatureHoses.map((hose) => ({ slug: hose.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const hose = getHighTemperatureHoseBySlug(slug)
  if (!hose) return {}
  return { title: `${hose.shortName} â€“ Hydronex High Temperature Hoses`, description: hose.description.slice(0, 160) }
}

export default async function HighTemperatureHoseProductPage({ params }: Props) {
  const { slug } = await params
  const hose = getHighTemperatureHoseBySlug(slug)
  if (!hose) notFound()

  const otherProducts = highTemperatureHoses.filter((item) => item.slug !== hose.slug).slice(0, 6)
  const allSpecs = [...hose.specs, ...(hose.quickStats ?? [])]

  return (
    <BSPProductDetail
      categoryName="High Temperature Hoses"
      categoryHref="/products/high-temperature-hoses"
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
      additionalSpecificationSection={<HighTemperatureHoseSpecificationTable hose={hose} />}
      otherProductsSection={
        <>
          <HighTemperatureHoseOtherProducts products={otherProducts} />
          <BSPCtaSection
            title="Ready to Get Started?"
            description="Contact our sales team for pricing, technical support, and bulk orders."
            buttonLabel="Get in Touch"
          />
        </>
      }
      editorialHero
    />
  )
}
