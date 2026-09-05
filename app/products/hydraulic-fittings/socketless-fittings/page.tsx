import { Metadata } from "next"
import Link from "next/link"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductGrid } from "@/components/bsp-product-grid"
import { HydraulicAdaptersHeroSection } from "@/components/hydraulic-adapters-hero-section"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import Topography from "@/components/topography"
import { socketlessFittings } from "@/lib/socketless-fittings"

export const metadata: Metadata = {
  title: "Socketless Fittings - Hydraulic Connections | Hydronex",
  description:
    "Hydronex offers high-quality socketless fittings for hydraulic systems. Reliable connections with 60° and 74° cone seats. BSP, JIC, and SAE standards.",
}

const features = [
  "Multiple thread standards (BSP, JIC, NPT, SAE)",
  "60° and 74° cone seat options",
  "High-pressure rated connections",
  "Excellent sealing characteristics",
]

export default function SocketlessFittingsPage() {
  const products = socketlessFittings.map((product) => ({
    id: 110000 + product.id,
    name: product.name,
    code: product.code,
    image: product.image,
    slug: product.slug,
  }))

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#f7f8f6] via-[#fbfcfa] to-white">
      <Topography className="pointer-events-none !fixed inset-0 z-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={3.4} thickness={0.018} glow={0.22} opacity={0.075} mouseRadius={0.24} mouseStrength={0.34} />
      <div className="relative z-10">
      <nav className="border-b" style={{ background: "#f8fafc", borderColor: "rgba(210,225,240,0.7)" }} aria-label="Breadcrumb">
        <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-0">
            <li><Link href="/" className="text-[11.5px] font-semibold uppercase tracking-wide text-[#0f2040] transition-colors hover:text-[#e05a2e]">Home</Link></li>
            <li className="mx-2.5 text-[#94aabf]" aria-hidden>/</li>
            <li><Link href="/products" className="text-[11.5px] font-medium uppercase tracking-wide text-[#2a4a70] transition-colors hover:text-[#e05a2e]">Products</Link></li>
            <li className="mx-2.5 text-[#94aabf]" aria-hidden>/</li>
            <li><Link href="/products/hydraulic-fittings" className="text-[11.5px] font-medium uppercase tracking-wide text-[#4a6a90] transition-colors hover:text-[#e05a2e]">Hydraulic Fittings</Link></li>
            <li className="mx-2.5 text-[#94aabf]" aria-hidden>/</li>
            <li className="flex items-center gap-1.5" aria-current="page"><span className="h-1.5 w-1.5 rounded-full bg-[#e05a2e]"/><span className="text-[11.5px] font-bold uppercase tracking-wide text-[#e05a2e]">Socketless Fittings</span></li>
          </ol>
        </div>
      </nav>

      <HydraulicAdaptersHeroSection
        category="Hydraulic Fittings / Socketless"
        title="Socketless Fittings - Reliable Hydraulic Connections"
        description="Hydronex offers a comprehensive range of socketless fittings designed for reliable hydraulic connections. Our socketless fittings feature 60° and 74° cone seats and are available in BSP, JIC, NPT, and SAE standards for maximum compatibility and performance."
        featuredProduct={products[0]}
        productCount={products.length}
        summary="Hydronex offers a comprehensive range of socketless fittings designed for reliable hydraulic connections."
        standardLabel="SOCKETLESS"
        standardsDescription="BSP, JIC, NPT & SAE"
      />

      <section id="products" className="relative border-b border-[#d0e4f5]/40 bg-transparent">
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[.18em] text-[#e05a2e]">Complete Product Range</p>
            <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-[-.02em] text-[#0f2040] sm:text-4xl">Our Socketless Fittings Collection</h2>
            <div className="mb-6 flex items-center gap-3"><span className="h-[3px] w-10 rounded-full bg-[#e05a2e]"/><span className="h-[3px] w-4 rounded-full bg-[#1a5fa8]/40"/></div>
            <p className="mb-7 text-sm leading-relaxed text-[#2a4a70]/80 sm:text-base">Browse our complete range of socketless fittings and find the right solution for your hydraulic system. All our fittings are manufactured to the highest standards and available in multiple configurations.</p>
            <ul className="grid gap-3 text-sm text-[#2a4a70] sm:grid-cols-2">
              {features.map((feature) => <li key={feature} className="flex items-start gap-3"><span className="mt-0.5 font-bold text-[#e05a2e]">✓</span>{feature}</li>)}
            </ul>
          </div>
          <BSPProductGrid products={products} basePath="/products/hydraulic-fittings/socketless-fittings" categoryLabel="Socketless Fittings" searchScope="Socketless Fittings" />
        </div>
      </section>

      <BSPCtaSection
        title="Need Help Selecting the Right Socketless Fitting?"
        description="Our expert team is ready to help you find the perfect socketless fitting for your hydraulic application. Contact us for technical assistance and custom solutions."
        buttonLabel="Contact Sales"
        ctaHref="/contact"
        supplementaryContent={<Link href="/products/hydraulic-fittings" className="inline-flex items-center justify-center rounded-sm border-2 border-white px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#b83a00]">Back to Hydraulic Fittings</Link>}
      />
      <LikedProductsDrawer />
      <LikedProductsFAB />
      </div>
    </div>
  )
}
