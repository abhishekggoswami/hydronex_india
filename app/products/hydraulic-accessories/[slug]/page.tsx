import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductCard } from "@/components/bsp-product-card"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import Topography from "@/components/topography"
import { getHydraulicAccessoryBySlug, hydraulicAccessories } from "@/lib/hydraulic-accessories"

type Props = { params: Promise<{ slug: string }> }
export function generateStaticParams() { return hydraulicAccessories.map((accessory) => ({ slug: accessory.slug })) }
export async function generateMetadata({ params }: Props) { const { slug } = await params; const accessory = getHydraulicAccessoryBySlug(slug); if (!accessory) return {}; return { title: `${accessory.shortName} â€“ Hydronex Hydraulic Accessories`, description: accessory.description.slice(0, 160) } }

export default async function HydraulicAccessoryPage({ params }: Props) {
  const { slug } = await params
  const accessory = getHydraulicAccessoryBySlug(slug)
  if (!accessory) notFound()
  const related = hydraulicAccessories.filter((item) => item.slug !== accessory.slug).slice(0, 6)
  return <BSPProductDetail categoryName="Hydraulic Accessories" categoryHref="/products/hydraulic-accessories" showParentCategory={false}
    product={{ name: accessory.name, shortName: accessory.shortName, slug: accessory.slug, description: accessory.description, material: accessory.specs.find((spec) => /material/i.test(spec.label))?.value, surfaceTreat: accessory.specs.find((spec) => /type|construction/i.test(spec.label))?.value, application: accessory.applications.join(", "), features: accessory.features, specs: [...accessory.specs, ...accessory.quickStats], applications: accessory.applications, image: accessory.image }}
    otherProductsSection={<><section className="relative isolate overflow-hidden border-b border-[#d0e4f5]/40 bg-white"><Topography className="pointer-events-none absolute inset-0 z-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={3.4} thickness={0.018} glow={0.22} opacity={0.075} mouseRadius={0.24} mouseStrength={0.34} /><div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><h2 className="mb-10 text-3xl font-bold text-[#0e1c35]">Related Hydraulic Accessories</h2><div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">{related.map((item,index)=><div key={item.slug} style={{ "--shimmer-delay": `${(index % 5) * 0.9}s` } as React.CSSProperties}><BSPProductCard index={index} basePath="/products/hydraulic-accessories" categoryLabel="Hydraulic Accessories" product={{ id:index+15000,name:item.shortName,code:item.standard ?? item.slug,image:item.image,slug:item.slug }}/></div>)}</div></div></section><BSPCtaSection title="Ready to Optimize Your System?" description="Contact Hydronex today for expert recommendations on the right hydraulic accessories for your application." buttonLabel="Get Expert Advice" /></>}
    editorialHero
  />
}
