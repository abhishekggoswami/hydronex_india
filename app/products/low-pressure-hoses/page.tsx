import Link from "next/link"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductGrid } from "@/components/bsp-product-grid"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import { LowPressureHosesHeroSection } from "@/components/low-pressure-hoses-hero-section"
import Topography from "@/components/topography"
import { lowPressureHoses } from "@/lib/low-pressure-hoses"

export const metadata = {
  title: "Low Pressure Hoses â€“ Hydronex",
  description:
    "Browse Hydronex Low Pressure Hoses: PVC Braided and LP hoses for general-purpose, agricultural, and light industrial applications.",
}

const category = "Low Pressure Hoses"
const heroTitle = "Low Pressure Hose Solutions"
const heroDescription = "Flexible, dependable hose options for general industrial, agricultural, water, and return-line applications."
const productsDescription = "Hydronex Low Pressure Hoses are ideal for general-purpose applications, agricultural use, and light industrial fluid transfer requiring cost-effective, flexible solutions."

export default function LowPressureHosesPage() {
  const products = lowPressureHoses.map((hose, index) => ({ id: index + 10000, name: hose.shortName, code: hose.standard, image: hose.image, slug: hose.slug }))

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#f7f8f6] via-[#fbfcfa] to-white">
      <Topography className="pointer-events-none !fixed inset-0 z-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={3.4} thickness={0.018} glow={0.22} opacity={0.075} mouseRadius={0.24} mouseStrength={0.34} />
      <div className="relative z-10">
      <nav className="border-b" style={{ background: "#f8fafc", borderColor: "rgba(210,225,240,0.7)" }} aria-label="Breadcrumb">
        <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-0">
            <li><Link href="/" className="text-[11.5px] font-semibold uppercase tracking-wide text-[#0f2040] transition-colors hover:text-[#e05a2e]">Home</Link></li>
            <li className="mx-2.5 text-[#94aabf]">/</li>
            <li><Link href="/products" className="text-[11.5px] font-medium uppercase tracking-wide text-[#2a4a70] transition-colors hover:text-[#e05a2e]">Products</Link></li>
            <li className="mx-2.5 text-[#94aabf]">/</li>
            <li className="flex items-center gap-1.5" aria-current="page"><span className="h-1.5 w-1.5 rounded-full bg-[#e05a2e]" /><span className="text-[11.5px] font-bold uppercase tracking-wide text-[#e05a2e]">{category}</span></li>
          </ol>
        </div>
      </nav>

      <div className="relative overflow-hidden bg-transparent">
      <LowPressureHosesHeroSection category={category} title={heroTitle} description={heroDescription} featuredProduct={lowPressureHoses[0]} />

      <section id="products" className="relative z-10 border-b border-[#d0e4f5]/40 bg-transparent">
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="mb-2 font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#e05a2e]">{category}</p>
            <h2 className="max-w-[15ch] text-balance font-heading text-[#143126]" style={{ fontSize: "clamp(2.55rem, 4.7vw, 5.5rem)", fontWeight: 800, letterSpacing: "-0.07em", lineHeight: 0.9 }}>{category}</h2>
            <div className="mb-5 flex items-center gap-3"><span className="h-[3px] w-10 rounded-full bg-[#e05a2e]" /><span className="h-[3px] w-4 rounded-full bg-[#1a5fa8]/40" /></div>
          </div>
          <p className="mb-10 max-w-3xl text-sm leading-relaxed text-[#2a4a70]/80 sm:text-base">{productsDescription}</p>

          <BSPProductGrid products={products} basePath="/products/low-pressure-hoses" categoryLabel={category} searchScope={category} />
        </div>
      </section>
      </div>

      <BSPCtaSection title="Need Affordable Low Pressure Solutions?" description="Our low pressure hoses are perfect for gardening, agriculture, and general industrial applications." buttonLabel="Get a Quick Quote" />
      <LikedProductsDrawer />
      <LikedProductsFAB />
      </div>
    </div>
  )
}
