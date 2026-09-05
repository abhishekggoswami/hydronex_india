import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { HydraulicPumpCategoryPage } from "@/components/hydraulic-pump-category-page"
import Topography from "@/components/topography"
import { doubleActingCylinderProducts, hydraulicCylinderCategories, singleActingCylinderProducts } from "@/lib/hydraulic-cylinders"

export function generateStaticParams() {
  return hydraulicCylinderCategories.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const category = hydraulicCylinderCategories.find((item) => item.slug === slug)
  return category ? { title: `${category.name} | Hydronex`, description: category.name } : {}
}

export default async function HydraulicCylinderSubcategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = hydraulicCylinderCategories.find((item) => item.slug === slug)
  if (!category) notFound()

  if (slug === "single-acting-cylinders") {
    return (
      <HydraulicPumpCategoryPage
        categoryName="SINGLE ACTING CYLINDERS"
        products={singleActingCylinderProducts}
        basePath="/products/hydraulic-cylinders/single-acting-cylinders"
        parentCategoryName="Hydraulic Cylinders"
        parentCategoryHref="/products/hydraulic-cylinders"
        productNoun="Cylinder"
      />
    )
  }

  if (slug === "double-acting-cylinders") {
    return (
      <HydraulicPumpCategoryPage
        categoryName="DOUBLE ACTING CYLINDERS"
        products={doubleActingCylinderProducts}
        basePath="/products/hydraulic-cylinders/double-acting-cylinders"
        parentCategoryName="Hydraulic Cylinders"
        parentCategoryHref="/products/hydraulic-cylinders"
        productNoun="Cylinder"
      />
    )
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f8f6] px-5 py-20 text-[#143126] sm:px-9 lg:px-14">
      <Topography className="pointer-events-none absolute inset-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={2.65} thickness={0.018} glow={0.22} opacity={0.08} mouseRadius={0.24} mouseStrength={0.34} />
      <div className="relative z-10 mx-auto max-w-7xl">
        <nav className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#61786e]"><Link href="/products" className="transition hover:text-[#f26522]">Products</Link><span className="mx-3">/</span><Link href="/products/hydraulic-cylinders" className="transition hover:text-[#f26522]">Hydraulic Cylinders</Link><span className="mx-3">/</span><span className="text-[#f26522]">{category.name}</span></nav>
        <section className="mt-12 overflow-hidden rounded-[2.25rem] bg-[#0b3539] p-8 shadow-[0_22px_60px_rgba(2,16,27,0.22)] sm:p-14">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8ae6dc]">Hydraulic cylinders</p>
          <h1 className="mt-5 max-w-[12ch] font-heading text-[clamp(3rem,7vw,6.5rem)] font-extrabold leading-[0.9] tracking-[-0.07em] text-white">{category.name}</h1>
        </section>
      </div>
      <div className="relative z-10 mt-16"><BSPCtaSection title="Let’s specify the right hydraulic cylinder." description={category.name} buttonLabel="Talk to our team" ctaHref="/contact" /></div>
    </main>
  )
}
