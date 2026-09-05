import { Metadata } from "next"
import Link from "next/link"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductGrid } from "@/components/bsp-product-grid"
import { HydraulicAdaptersHeroSection } from "@/components/hydraulic-adapters-hero-section"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import Topography from "@/components/topography"
import { jisFittings } from "@/lib/jis-fittings"

export const metadata: Metadata = {
  title: "JIS Fittings - Japanese Industrial Standard Hydraulic Fittings | Hydronex",
  description: "Hydronex supplies a comprehensive range of JIS hydraulic fittings. High-quality fittings for industrial machinery, hydraulic systems, and mobile equipment applications.",
}

export default function JISFittingsPage() {
  const jisProducts = jisFittings.map((fitting) => ({ id: 80000 + fitting.id, name: fitting.name, code: fitting.code, image: fitting.image, slug: fitting.slug }))

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#f7f8f6] via-[#fbfcfa] to-white">
      <Topography className="pointer-events-none !fixed inset-0 z-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={3.4} thickness={0.018} glow={0.22} opacity={0.075} mouseRadius={0.24} mouseStrength={0.34} />
      <div className="relative z-10">
      <nav className="border-b" style={{ background: "#f8fafc", borderColor: "rgba(210,225,240,0.7)" }} aria-label="Breadcrumb">
        <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8"><ol className="flex flex-wrap items-center gap-0"><li><Link href="/" className="text-[11.5px] font-semibold uppercase tracking-wide text-[#0f2040] transition-colors hover:text-[#e05a2e]">Home</Link></li><li className="mx-2.5 text-[#94aabf]" aria-hidden>/</li><li><Link href="/products" className="text-[11.5px] font-medium uppercase tracking-wide text-[#2a4a70] transition-colors hover:text-[#e05a2e]">Products</Link></li><li className="mx-2.5 text-[#94aabf]" aria-hidden>/</li><li><Link href="/products/hydraulic-fittings" className="text-[11.5px] font-medium uppercase tracking-wide text-[#4a6a90] transition-colors hover:text-[#e05a2e]">Hydraulic Fittings</Link></li><li className="mx-2.5 text-[#94aabf]" aria-hidden>/</li><li className="flex items-center gap-1.5" aria-current="page"><span className="h-1.5 w-1.5 rounded-full bg-[#e05a2e]" /><span className="text-[11.5px] font-bold uppercase tracking-wide text-[#e05a2e]">JIS Fittings</span></li></ol></div>
      </nav>

      <HydraulicAdaptersHeroSection
        category="JIS Standard FITTINGS"
        title="JIS Hydraulic Fittings"
        description="Hydronex supplies a comprehensive range of precision-engineered JIS (Japanese Industrial Standard) hydraulic fittings. Our JIS fittings feature 30-degree cone seat design with metal-to-metal sealing, providing reliable and leak-free connections for demanding industrial hydraulic applications."
        featuredProduct={jisProducts[0]}
        productCount={jisProducts.length}
        summary="Hydronex supplies a comprehensive range of precision-engineered JIS (Japanese Industrial Standard) hydraulic fittings."
        standardLabel="JIS"
        standardsDescription="30° cone seat · Metal-to-metal seal"
      />

      <section id="products" className="relative border-b border-[#d0e4f5]/40 bg-transparent">
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl"><p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#e05a2e]">Hydraulic Fittings / JIS</p><h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-[-0.02em] text-[#0f2040] sm:text-4xl">Japanese Industrial Standard<span className="mt-0.5 block text-2xl font-semibold tracking-[-0.01em] text-[#1a5fa8] sm:text-3xl">(JIS) Fittings</span></h2><div className="mb-5 flex items-center gap-3"><span className="h-[3px] w-10 rounded-full bg-[#e05a2e]" /><span className="h-[3px] w-4 rounded-full bg-[#1a5fa8]/40" /></div><p className="text-sm leading-relaxed text-[#2a4a70]/80 sm:text-base">We offer a comprehensive range of JIS (Japanese Industrial Standard) hydraulic fittings designed for demanding industrial applications. These precision-engineered fittings deliver reliable, leak-free connections across a wide variety of sizes and configurations. JIS fittings feature robust construction and high-quality materials suitable for harsh working conditions, machine tools, and mobile equipment.</p></div>
          <BSPProductGrid products={jisProducts} basePath="/products/hydraulic-fittings/jis-fittings" categoryLabel="JIS Fittings" searchScope="JIS Hydraulic Fittings" />
        </div>
      </section>
      <BSPCtaSection title="Need JIS Fitting Solutions?" description="Contact our experts for tailored JIS fitting solutions, bulk orders and technical support." buttonLabel="Get A Quote" />
      <LikedProductsDrawer />
      <LikedProductsFAB />
      </div>
    </div>
  )
}
