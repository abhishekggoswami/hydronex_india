import { Metadata } from "next"
import Link from "next/link"
import { quickReleaseCouplers } from "@/lib/quick-release-couplers"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductGrid } from "@/components/bsp-product-grid"
import { HydraulicAdaptersHeroSection } from "@/components/hydraulic-adapters-hero-section"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import Topography from "@/components/topography"

export const metadata: Metadata = {
  title: "Quick Release Couplers – Hydraulic Quick Couplings | Hydronex",
  description: "Hydronex quick release couplers with KTM and KNV series designs. Flat-face quick disconnect couplers with zero fluid loss for industrial hydraulic applications.",
}

const quickReleaseProducts = quickReleaseCouplers.map((product) => ({ id: product.id, name: product.name, code: product.code, image: product.image, slug: product.slug }))
const features = ["Flat-face design for zero fluid loss", "Quick release mechanism for easy operation", "Chrome plated steel construction", "Durable poppet valve system", "Minimal spillage during disconnection", "Suitable for high-frequency coupling operations", "Precision-engineered for tight tolerances", "Wide range of thread options available"]
const applicationText = "Quick release couplers are designed for applications where frequent and reliable connection and disconnection is essential. They are widely used in industrial machinery, mobile equipment, construction equipment, and general hydraulic systems where operational efficiency and minimal fluid loss are paramount."
const usageText = "Quick release couplers offer a rapid and intuitive connection mechanism with flat-face design that ensures zero fluid loss during disconnection. This makes them ideal for maintenance operations, equipment transfers, and applications where environmental and safety concerns require minimal spillage."

export default function QuickReleaseCouplerPage() {
  return <div className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#f7f8f6] via-[#fbfcfa] to-white">
    <Topography className="pointer-events-none !fixed inset-0 z-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={3.4} thickness={0.018} glow={0.22} opacity={0.075} mouseRadius={0.24} mouseStrength={0.34} />
    <div className="relative z-10">
    <nav className="border-b" style={{ background: "#f8fafc", borderColor: "rgba(210,225,240,0.7)" }} aria-label="Breadcrumb">
      <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8"><ol className="flex flex-wrap items-center gap-0">
        <li><Link href="/" className="text-[11.5px] font-semibold uppercase tracking-wide text-[#0f2040] transition-colors hover:text-[#e05a2e]">Home</Link></li><li className="mx-2.5 text-[#94aabf]" aria-hidden>/</li>
        <li><Link href="/products" className="text-[11.5px] font-medium uppercase tracking-wide text-[#2a4a70] transition-colors hover:text-[#e05a2e]">Products</Link></li><li className="mx-2.5 text-[#94aabf]" aria-hidden>/</li>
        <li><Link href="/products/hydraulic-quick-couplings" className="text-[11.5px] font-medium uppercase tracking-wide text-[#4a6a90] transition-colors hover:text-[#e05a2e]">Hydraulic Quick Couplings</Link></li><li className="mx-2.5 text-[#94aabf]" aria-hidden>/</li>
        <li className="flex items-center gap-1.5" aria-current="page"><span className="h-1.5 w-1.5 rounded-full bg-[#e05a2e]" /><span className="text-[11.5px] font-bold uppercase tracking-wide text-[#e05a2e]">Quick Release Couplers</span></li>
      </ol></div>
    </nav>

    <HydraulicAdaptersHeroSection category="Hydraulic Quick Couplings / Quick Release" title="Quick Release Couplers" description="Flat-face quick disconnect couplers designed for zero fluid loss and maximum reliability. Perfect for applications requiring frequent connections and disconnections with minimal environmental impact." featuredProduct={quickReleaseProducts[0]} productCount={quickReleaseProducts.length} summary="Flat-face quick disconnect couplers designed for zero fluid loss and maximum reliability." standardLabel="QUICK RELEASE" standardsDescription="Flat Face & Zero Fluid Loss" />

    <section id="products" className="relative border-b border-[#d0e4f5]/40 bg-transparent">
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-10 max-w-4xl"><p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#e05a2e]">Hydraulic Quick Couplings / Quick Release</p><h2 className="mb-4 text-3xl font-extrabold leading-tight text-[#0f2040] sm:text-4xl">Quick Release Couplers<span className="mt-0.5 block text-2xl font-semibold text-[#1a5fa8] sm:text-3xl">Zero fluid loss, maximum reliability</span></h2><div className="flex items-center gap-3"><span className="h-[3px] w-10 rounded-full bg-[#e05a2e]" /><span className="h-[3px] w-4 rounded-full bg-[#1a5fa8]/40" /></div></header>
        <div className="mb-14 grid gap-8 text-sm leading-relaxed text-[#2a4a70]/80 md:grid-cols-2 sm:text-base">
          <article className="rounded-xl border border-white/70 bg-white/60 p-6 shadow-[0_8px_28px_rgba(15,32,64,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(15,32,64,0.12)]"><h3 className="mb-3 text-xl font-bold text-[#0f2040]">Applications</h3><p>{applicationText}</p></article>
          <article className="rounded-xl border border-white/70 bg-white/60 p-6 shadow-[0_8px_28px_rgba(15,32,64,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(15,32,64,0.12)]"><h3 className="mb-3 text-xl font-bold text-[#0f2040]">Usage &amp; Benefits</h3><p>{usageText}</p></article>
        </div>
        <div className="mb-16"><h3 className="mb-6 text-2xl font-bold text-[#0f2040] sm:text-3xl">Key Features</h3><div className="grid grid-cols-1 gap-4 md:grid-cols-2">{features.map((feature) => <div key={feature} className="group flex gap-3 rounded-lg border border-[#d0e4f5]/70 bg-white/70 p-4 shadow-[0_4px_18px_rgba(15,32,64,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#e05a2e]/55 hover:shadow-[0_12px_28px_rgba(15,32,64,0.14)]"><span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#e05a2e] text-xs font-bold text-white shadow-[0_4px_12px_rgba(224,90,46,0.35)]">✓</span><p className="text-sm leading-relaxed text-[#2a4a70]">{feature}</p></div>)}</div></div>
        <div><h3 className="mb-8 text-2xl font-bold text-[#0f2040] sm:text-3xl">Our Quick Release Series</h3><BSPProductGrid products={quickReleaseProducts} basePath="/products/hydraulic-quick-couplings/quick-release-couplers" categoryLabel="Quick Release Couplers" searchScope="Quick Release Couplers" /></div>
      </div>
    </section>
    <BSPCtaSection />
    <LikedProductsDrawer />
    <LikedProductsFAB />
    </div>
  </div>
}
