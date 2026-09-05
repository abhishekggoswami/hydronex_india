import { Metadata } from "next"
import { flatFaceCouplers } from "@/lib/flat-face-couplers"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import { BSPProductGrid } from "@/components/bsp-product-grid"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { HydraulicAdaptersHeroSection } from "@/components/hydraulic-adapters-hero-section"
import Topography from "@/components/topography"

export const metadata: Metadata = {
  title: "Flat Face Couplers â€“ Hydraulic Quick Couplings | Hydronex",
  description: "Hydronex flat-face hydraulic quick couplers with ISO 16028 compliance. Carbon steel, stainless steel, and specialty couplers with zero fluid loss technology for industrial applications.",
}

const flatFaceProducts = flatFaceCouplers.map((product) => ({ id: product.id, name: product.name, code: product.code, image: product.image, slug: product.slug }))
const features = ["Flat-face design for zero fluid loss", "ISO 16028 international compatibility", "Multiple material options available", "Reliable poppet valve technology", "Chrome plated and corrosion resistant", "Quick release mechanism for efficiency", "Precision-manufactured components", "Suitable for diverse industrial environments"]
const applicationText = "Flat-face couplers are engineered for applications demanding zero spillage and environmental protection. They serve industries including food processing, pharmaceuticals, marine environments, heavy manufacturing, and general industrial hydraulics where reliability and minimal fluid loss are critical requirements."
const usageText = "Flat-face couplers utilize advanced poppet valve technology to eliminate fluid loss during disconnection. This innovative design makes them ideal for maintenance operations, equipment transfers, sanitary applications, and environmentally sensitive operations where spillage prevention is paramount."

export default function FlatFaceCouplerPage() {
  const featuredProduct = flatFaceCouplers[0]

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <HydraulicAdaptersHeroSection category="Flat Face Couplers" title="Flat Face Couplers" description={applicationText} featuredProduct={{ name: featuredProduct.name, code: featuredProduct.code, image: featuredProduct.image }} productCount={flatFaceProducts.length} summary={applicationText} standardLabel="ISO 16028" standardsDescription="Flat-face sealing" primaryActionHref="/#contact" secondaryActionHref="#products" />

      <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20">
        <Topography className="pointer-events-none absolute inset-0 z-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={3.4} thickness={0.018} glow={0.22} opacity={0.07} mouseRadius={0.24} mouseStrength={0.3} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl"><p className="mb-2 text-[11px] font-bold uppercase tracking-[.18em] text-[#e05a2e]">Hydraulic Quick Couplings / Flat Face</p><h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-[-.02em] text-[#0f2040] sm:text-4xl">Flat Face Couplers</h2><div className="mb-6 flex items-center gap-3"><span className="h-[3px] w-10 rounded-full bg-[#e05a2e]" /><span className="h-[3px] w-4 rounded-full bg-[#1a5fa8]/40" /></div><p className="text-base leading-relaxed text-[#2a4a70]/80 sm:text-lg">{usageText}</p></div>
        </div>
      </section>

      <section className="bsp-features-gradient relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-10 flex items-center gap-3"><span className="h-7 w-1 rounded-full bg-[#e05a2e]" /><h2 className="text-3xl font-bold text-white">Key Features</h2></div><div className="grid gap-x-12 gap-y-6 md:grid-cols-2">{features.map((feature, index) => <div key={feature} className="group flex items-center gap-4 text-white/85 transition-transform duration-300 hover:translate-x-1.5"><span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#f26522] text-sm font-bold text-white shadow-[0_0_16px_rgba(242,101,34,.42)]">{index + 1}</span><p className="font-medium">{feature}</p></div>)}</div></div>
      </section>

      <section id="products" className="relative isolate overflow-hidden border-b border-[#d0e4f5]/40 bg-white py-16 sm:py-20">
        <Topography className="pointer-events-none absolute inset-0 z-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={3.4} thickness={0.018} glow={0.22} opacity={0.075} mouseRadius={0.24} mouseStrength={0.34} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 max-w-3xl"><p className="mb-2 text-[11px] font-bold uppercase tracking-[.18em] text-[#e05a2e]">Flat Face Couplers / Product Range</p><h2 className="mb-4 text-3xl font-extrabold tracking-[-.02em] text-[#0f2040] sm:text-4xl">Our Flat Face Coupler Series</h2><div className="flex items-center gap-3"><span className="h-[3px] w-10 rounded-full bg-[#e05a2e]" /><span className="h-[3px] w-4 rounded-full bg-[#1a5fa8]/40" /></div></div><BSPProductGrid products={flatFaceProducts} basePath="/products/hydraulic-quick-couplings/flat-face-couplers" categoryLabel="Flat Face Couplers" searchScope="Flat Face Couplers" /></div>
      </section>

      <BSPCtaSection />
      <LikedProductsDrawer />
      <LikedProductsFAB />
    </div>
  )
}
