import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { SpecialApplicationHoseOtherProducts } from "@/components/special-application-hose-other-products"
import { SpecialApplicationHoseSpecificationTable } from "@/components/special-application-hose-specification-table"
import { getSpecialApplicationHoseBySlug, specialApplicationHoses } from "@/lib/special-application-hoses"

type Props = { params: Promise<{ slug: string }> }
export function generateStaticParams() { return specialApplicationHoses.map((hose) => ({ slug: hose.slug })) }
export async function generateMetadata({ params }: Props) { const { slug } = await params; const hose = getSpecialApplicationHoseBySlug(slug); if (!hose) return {}; return { title: `${hose.shortName} â€“ Hydronex Special Application Hoses`, description: hose.description.slice(0, 160) } }

export default async function SpecialApplicationHoseProductPage({ params }: Props) {
  const { slug } = await params
  const hose = getSpecialApplicationHoseBySlug(slug)
  if (!hose) notFound()
  const otherProducts = specialApplicationHoses.filter((item) => item.slug !== hose.slug).slice(0, 6)
  return <BSPProductDetail categoryName="Special Application Hoses" categoryHref="/products/special-application-hoses" showParentCategory={false}
    product={{ name: hose.name, shortName: hose.shortName, slug: hose.slug, description: hose.description, material: hose.specs.find((spec) => /tube|material/i.test(spec.label))?.value, surfaceTreat: hose.specs.find((spec) => /cover|reinforcement/i.test(spec.label))?.value, application: hose.applications.join(", "), features: hose.features, specs: [...hose.specs, ...hose.quickStats], applications: hose.applications, image: hose.image }}
    additionalSpecificationSection={<SpecialApplicationHoseSpecificationTable hose={hose} />}
    otherProductsSection={<><SpecialApplicationHoseOtherProducts products={otherProducts} /><BSPCtaSection title="Ready to Order?" description="Contact our team for bulk quotes, custom specifications, or technical support. We're here to help you find the perfect hose solution." buttonLabel="Get a Quote Now" /></>}
    editorialHero
  />
}
