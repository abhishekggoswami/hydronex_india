import { notFound } from "next/navigation"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { HydraulicHoseOtherProducts } from "@/components/hydraulic-hose-other-products"
import { HydraulicHoseSpecificationTable } from "@/components/hydraulic-hose-specification-table"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { getHoseBySlug, hydraulicHoses } from "@/lib/hydraulic-hoses"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return hydraulicHoses.map((hose) => ({ slug: hose.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const hose = getHoseBySlug(slug)
  if (!hose) return {}
  return { title: `${hose.shortName} – Hydronex Hydraulic Hoses`, description: hose.description.slice(0, 160) }
}

export default async function HydraulicHoseProductPage({ params }: Props) {
  const { slug } = await params
  const hose = getHoseBySlug(slug)
  if (!hose) notFound()

  const otherProducts = hydraulicHoses.filter((item) => item.slug !== hose.slug).slice(0, 6)
  const primarySpecs = hose.specs.slice(0, 6)

  return (
    <BSPProductDetail
      categoryName="Hydraulic Hoses"
      categoryHref="/products/hydraulic-hoses"
      showParentCategory={false}
      product={{
        name: hose.shortName,
        shortName: hose.shortName,
        slug: hose.slug,
        description: hose.description,
        material: hose.specs.find((spec) => /tube|material/i.test(spec.label))?.value,
        surfaceTreat: hose.specs.find((spec) => /cover|reinforcement/i.test(spec.label))?.value,
        application: hose.applications.join(", "),
        features: hose.features,
        specs: primarySpecs,
        applications: hose.applications,
        image: hose.image,
      }}
      additionalSpecificationSection={<HydraulicHoseSpecificationTable hose={hose} />}
      otherProductsSection={<><HydraulicHoseOtherProducts products={otherProducts} /><BSPCtaSection title="Need a Custom Hose Solution?" description="Our engineers can tailor specifications to your OEM or industrial requirements." buttonLabel="Get a Quick Quote" ctaHref="/contact" /></>}
      editorialHero
    />
  )
}
