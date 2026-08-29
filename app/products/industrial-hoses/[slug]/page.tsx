import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { IndustrialHoseOtherProducts } from "@/components/industrial-hose-other-products"
import { IndustrialHoseSpecificationTable } from "@/components/industrial-hose-specification-table"
import { getIndustrialHoseBySlug, industrialHoses } from "@/lib/industrial-hoses"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return industrialHoses.map((hose) => ({ slug: hose.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const hose = getIndustrialHoseBySlug(slug)
  if (!hose) return {}
  return { title: `${hose.shortName} â€“ Hydronex Industrial Hoses`, description: hose.description.slice(0, 160) }
}

export default async function IndustrialHoseProductPage({ params }: Props) {
  const { slug } = await params
  const hose = getIndustrialHoseBySlug(slug)
  if (!hose) notFound()

  const otherProducts = industrialHoses.filter((item) => item.slug !== hose.slug).slice(0, 6)
  const allSpecs = [...hose.specs, ...(hose.quickStats ?? [])]

  return (
    <BSPProductDetail
      categoryName="Industrial Hoses"
      categoryHref="/products/industrial-hoses"
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
      additionalSpecificationSection={<IndustrialHoseSpecificationTable hose={hose} />}
      otherProductsSection={
        <>
          <IndustrialHoseOtherProducts products={otherProducts} />
          <BSPCtaSection
            title="Ready to Order?"
            description="Contact our sales team for pricing, technical support, and to discuss your specific requirements."
            buttonLabel="Contact Sales"
          />
        </>
      }
      editorialHero
    />
  )
}
