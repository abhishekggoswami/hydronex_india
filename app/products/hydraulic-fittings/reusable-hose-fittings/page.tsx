import { Metadata } from "next"
import Link from "next/link"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductGrid } from "@/components/bsp-product-grid"
import { HydraulicAdaptersHeroSection } from "@/components/hydraulic-adapters-hero-section"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import Topography from "@/components/topography"
import { reusableHoseFittings } from "@/lib/reusable-hose-fittings"

export const metadata: Metadata = {
  title: "Reusable Hose Fittings - SAE 100 R5 and BSP Reusable Connectors | Hydronex",
  description:
    "Hydronex supplies premium reusable hose fittings for SAE 100 R5 hose assemblies. High-quality stainless steel fittings with 60° and 74° cone seats for reliable hydraulic connections.",
}

export default function ReusableHoseFittingsPage() {
  const products = reusableHoseFittings.map((fitting) => ({
    id: 120000 + fitting.id,
    name: fitting.name,
    code: fitting.code,
    image: fitting.image,
    slug: fitting.slug,
  }))

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#f7f8f6] via-[#fbfcfa] to-white">
      <Topography
        className="pointer-events-none !fixed inset-0 z-0"
        lowColor="#9eb8c3"
        midColor="#f26522"
        highColor="#ffffff"
        speed={0.18}
        morphAmount={1.7}
        bands={3.4}
        thickness={0.018}
        glow={0.22}
        opacity={0.075}
        mouseRadius={0.24}
        mouseStrength={0.34}
      />

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
            <li className="flex items-center gap-1.5" aria-current="page"><span className="h-1.5 w-1.5 rounded-full bg-[#e05a2e]"/><span className="text-[11.5px] font-bold uppercase tracking-wide text-[#e05a2e]">Reusable Hose Fittings</span></li>
          </ol>
        </div>
      </nav>

      <HydraulicAdaptersHeroSection
        category="Reusable Hose Fittings"
        title="Reusable Hose Fittings - SAE 100 R5 & BSP"
        description="We offer a comprehensive range of reusable hose fittings designed for SAE 100 R5 hose assemblies and British Standard Pipe connections. These fittings provide reliable, leak-free connections with the flexibility to be reused across multiple hose configurations. Available with 60° and 74° cone seat designs for optimal sealing performance in high-pressure hydraulic systems."
        featuredProduct={products[0]}
        productCount={products.length}
        summary="We offer a comprehensive range of reusable hose fittings designed for SAE 100 R5 hose assemblies and British Standard Pipe connections."
        standardLabel="REUSABLE"
        standardsDescription="SAE 100 R5, BSP & Cone Seat"
      />

      <section id="products" className="relative border-b border-[#d0e4f5]/40 bg-transparent">
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-[#0e1c35] sm:text-4xl">Reusable Hose Fittings</h2>
            <div className="mb-5 flex items-center gap-3"><span className="h-[3px] w-10 rounded-full bg-[#e05a2e]"/><span className="h-[3px] w-4 rounded-full bg-[#1a5fa8]/40"/></div>
            <p className="text-sm leading-relaxed text-[#2a4a70]/80 sm:text-base">We offer a comprehensive range of reusable hose fittings designed for SAE 100 R5 hose assemblies and British Standard Pipe connections. These fittings provide reliable, leak-free connections with the flexibility to be reused across multiple hose configurations. Available with 60° and 74° cone seat designs for optimal sealing performance in high-pressure hydraulic systems.</p>
          </div>
          <BSPProductGrid products={products} basePath="/products/hydraulic-fittings/reusable-hose-fittings" categoryLabel="Reusable Hose Fittings" searchScope="Reusable Hose Fittings" />
        </div>
      </section>

      <BSPCtaSection />
      <LikedProductsDrawer />
      <LikedProductsFAB />
      </div>
    </div>
  )
}
