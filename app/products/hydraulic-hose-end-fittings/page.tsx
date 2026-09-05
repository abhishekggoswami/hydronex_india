import Link from "next/link"
import { Check } from "lucide-react"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductGrid } from "@/components/bsp-product-grid"
import { HydraulicHoseEndFittingsHeroSection } from "@/components/hydraulic-hose-end-fittings-hero-section"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import Topography from "@/components/topography"
import { hydraulicHoseEndFittings } from "@/lib/hydraulic-hose-end-fittings"

export const metadata = { title: "Hydraulic Hose End Fittings â€“ Hydronex", description: "Premium hydraulic hose end fittings for reliable hose connections. Precision-engineered with leak-free design." }

const category = "Hydraulic Hose End Fittings"
const heroDescription = "Precision-engineered hydraulic hose end fittings for reliable, leak-free connections across diverse industrial applications."

export default function HydraulicHoseEndFittingsPage() {
  const products = hydraulicHoseEndFittings.map((product, index) => ({ id: index + 16000, name: product.shortName, code: product.slug, image: product.image, slug: product.slug }))
  const benefits = [
    ["Precision Engineering", "Precisely engineered for exact fit and optimal performance in hydraulic systems."],
    ["Leak-Free Design", "Advanced seal technology ensures reliable, leak-free connections under all pressures."],
    ["Wide Compatibility", "Compatible with a wide range of hose sizes and types for maximum flexibility."],
  ]

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#f7f8f6] via-[#fbfcfa] to-white">
      <Topography className="pointer-events-none !fixed inset-0 z-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={3.4} thickness={0.018} glow={0.22} opacity={0.075} mouseRadius={0.24} mouseStrength={0.34} />
      <div className="relative z-10">
        <nav className="border-b" style={{ background: "#f8fafc", borderColor: "rgba(210,225,240,.7)" }} aria-label="Breadcrumb"><div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8"><ol className="flex items-center gap-0"><li><Link href="/" className="text-[11.5px] font-semibold uppercase tracking-[0.06em] text-[#0f2040] transition-colors duration-150 hover:text-[#e05a2e]">Home</Link></li><li className="mx-2.5 text-[#94aabf]">/</li><li><Link href="/products" className="text-[11.5px] font-medium uppercase tracking-[0.05em] text-[#2a4a70] transition-colors duration-150 hover:text-[#e05a2e]">Products</Link></li><li className="mx-2.5 text-[#94aabf]">/</li><li className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#e05a2e]"/><span className="text-[11.5px] font-bold uppercase tracking-[0.06em] text-[#e05a2e]">{category}</span></li></ol></div></nav>
        <div className="relative overflow-hidden bg-transparent">
          <HydraulicHoseEndFittingsHeroSection category={category} title={category} description={heroDescription} featuredProduct={hydraulicHoseEndFittings[0]} />
          <section id="products" className="relative z-10 border-b border-[#d0e4f5]/40 bg-transparent"><div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><div className="mb-8"><p className="mb-2 font-sans text-[11px] font-bold uppercase tracking-[.18em] text-[#e05a2e]">{category}</p><h2 className="max-w-[15ch] text-balance font-heading text-[#143126]" style={{ fontSize: "clamp(2.55rem, 4.7vw, 5.5rem)", fontWeight: 800, letterSpacing: "-0.07em", lineHeight: 0.9 }}>{category}</h2><div className="mb-5 flex gap-3"><span className="h-[3px] w-10 rounded-full bg-[#e05a2e]"/><span className="h-[3px] w-4 rounded-full bg-[#1a5fa8]/40"/></div></div><BSPProductGrid products={products} basePath="/products/hydraulic-hose-end-fittings" categoryLabel={category} searchScope={category}/></div></section>
          <section className="relative overflow-hidden border-b border-[#d0e4f5]/40 bg-transparent py-14"><div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-8 flex items-center gap-3"><span className="h-7 w-1 rounded-full bg-[#e05a2e]"/><h2 className="font-heading text-2xl font-extrabold tracking-[-0.04em] text-[#143126]">Why Choose Our Hydraulic Hose End Fittings</h2></div><div className="grid grid-cols-1 gap-5 md:grid-cols-3">{benefits.map(([title, text]) => <div key={title} className="rounded-[1.4rem] border border-[#143126]/10 bg-white/70 p-6 shadow-[0_14px_30px_rgba(20,49,38,0.08)] backdrop-blur"><Check className="mb-4 text-[#e05a2e]"/><h3 className="mb-2 font-heading font-extrabold text-[#143126]">{title}</h3><p className="text-sm leading-relaxed text-[#2a4a70]/80">{text}</p></div>)}</div></div></section>
        </div>
        <BSPCtaSection title="Ready to Connect?" description="Get premium hydraulic hose end fittings engineered for reliability and performance. Contact us for custom solutions." buttonLabel="Contact Us Today" />
        <LikedProductsDrawer />
        <LikedProductsFAB />
      </div>
    </div>
  )
}
