import Link from "next/link"
import { Check } from "lucide-react"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductGrid } from "@/components/bsp-product-grid"
import { CategoryLandingHero } from "@/components/category-landing-hero"
import { hydraulicHoseEndFittings } from "@/lib/hydraulic-hose-end-fittings"

export const metadata = { title: "Hydraulic Hose End Fittings â€“ Hydronex", description: "Premium hydraulic hose end fittings for reliable hose connections. Precision-engineered with leak-free design." }

export default function HydraulicHoseEndFittingsPage() {
  const products = hydraulicHoseEndFittings.map((product, index) => ({ id: index + 16000, name: product.shortName, code: product.slug, image: product.image, slug: product.slug }))
  const benefits = [
    ["Precision Engineering", "Precisely engineered for exact fit and optimal performance in hydraulic systems."],
    ["Leak-Free Design", "Advanced seal technology ensures reliable, leak-free connections under all pressures."],
    ["Wide Compatibility", "Compatible with a wide range of hose sizes and types for maximum flexibility."],
  ]

  return <div className="min-h-screen bg-white">
    <nav className="border-b" style={{ background: "#f8fafc", borderColor: "rgba(210,225,240,.7)" }} aria-label="Breadcrumb"><div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8"><ol className="flex items-center gap-0"><li><Link href="/" className="text-[11.5px] font-semibold uppercase tracking-wide text-[#0f2040] hover:text-[#e05a2e]">Home</Link></li><li className="mx-2.5 text-[#94aabf]">/</li><li><Link href="/products" className="text-[11.5px] font-medium uppercase tracking-wide text-[#2a4a70] hover:text-[#e05a2e]">Products</Link></li><li className="mx-2.5 text-[#94aabf]">/</li><li className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#e05a2e]"/><span className="text-[11.5px] font-bold uppercase tracking-wide text-[#e05a2e]">Hydraulic Hose End Fittings</span></li></ol></div></nav>
    <CategoryLandingHero category="Hydraulic Hose End Fittings" title="Hydraulic Hose End Fittings" description="Precision-engineered hydraulic hose end fittings for reliable, leak-free connections across diverse industrial applications." ctaHref="#products" palette="#30475f" />
    <section id="products" className="bg-anim-section-dots border-b border-[#d0e4f5]/40" style={{ background: "linear-gradient(180deg,#deeefa,#eaf4fc 18%,#f4faff 45%,#fafcff 72%,#fff)" }}><div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><div className="mb-10"><p className="bsp-fade-up mb-2 text-[11px] font-bold uppercase tracking-[.18em] text-[#e05a2e]">Hydraulic Hose End Fittings</p><h2 className="bsp-fade-up mb-4 text-3xl font-extrabold text-[#0f2040] sm:text-4xl">Hydraulic Hose End Fittings</h2><div className="mb-5 flex gap-3"><span className="h-[3px] w-10 rounded-full bg-[#e05a2e]"/><span className="h-[3px] w-4 rounded-full bg-[#1a5fa8]/40"/></div></div><BSPProductGrid products={products} basePath="/products/hydraulic-hose-end-fittings" categoryLabel="Hydraulic Hose End Fittings" searchScope="Hydraulic Hose End Fittings"/></div></section>
    <section className="bsp-features-gradient relative overflow-hidden py-14"><div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-8 flex items-center gap-3"><span className="h-7 w-1 rounded-full bg-[#e05a2e]"/><h2 className="text-2xl font-bold text-white">Why Choose Our Hydraulic Hose End Fittings</h2></div><div className="grid grid-cols-1 gap-5 md:grid-cols-3">{benefits.map(([title, text]) => <div key={title} className="rounded-xl border border-white/15 bg-white/10 p-6 backdrop-blur"><Check className="mb-4 text-[#e05a2e]"/><h3 className="mb-2 font-bold text-white">{title}</h3><p className="text-sm leading-relaxed text-white/75">{text}</p></div>)}</div></div></section>
    <BSPCtaSection title="Ready to Connect?" description="Get premium hydraulic hose end fittings engineered for reliability and performance. Contact us for custom solutions." buttonLabel="Contact Us Today" />
  </div>
}
