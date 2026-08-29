import { notFound } from "next/navigation"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { SpiralHoseOtherProducts } from "@/components/spiral-hose-other-products"
import { SpiralHoseSpecificationTable } from "@/components/spiral-hose-specification-table"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { getSpiralHoseBySlug, spiralHoses } from "@/lib/spiral-hoses"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return spiralHoses.map((hose) => ({ slug: hose.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const hose = getSpiralHoseBySlug(slug)
  if (!hose) return {}
  return { title: `${hose.shortName} â€“ Hydronex Spiral Hoses`, description: hose.description.slice(0, 160) }
}

export default async function SpiralHoseProductPage({ params }: Props) {
  const { slug } = await params
  const hose = getSpiralHoseBySlug(slug)
  if (!hose) notFound()

  const otherProducts = spiralHoses.filter((item) => item.slug !== hose.slug).slice(0, 6)

  return (
    <BSPProductDetail
      categoryName="Spiral Hoses"
      categoryHref="/products/spiral-hoses"
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
        specs: hose.specs,
        applications: hose.applications,
        image: hose.image,
      }}
      additionalSpecificationSection={<SpiralHoseSpecificationTable hose={hose} />}
      otherProductsSection={<><SpiralHoseOtherProducts products={otherProducts} /><BSPCtaSection title="Need a Custom Hose Solution?" description="Our engineers can tailor specifications to your OEM or industrial requirements." buttonLabel="Get a Quick Quote" ctaHref="/contact" /></>}
      editorialHero
    />
  )
}
