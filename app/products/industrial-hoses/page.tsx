import Link from "next/link"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductGrid } from "@/components/bsp-product-grid"
import { IndustrialHosesHeroSection } from "@/components/industrial-hoses-hero-section"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import Topography from "@/components/topography"
import { industrialHoses } from "@/lib/industrial-hoses"

export const metadata = {
  title: "Industrial Hoses – Hydronex",
  description:
    "Browse Hydronex industrial hose products: Rock Drill, Sand Blast, Carbon Free Furnace, Air/Water, and Pneumatic Tool hoses for demanding industrial applications.",
}

const heroDescription = "Durable hose systems for air, water, abrasion, chemical transfer, and demanding plant operations."
const productsDescription = "Hydronex industrial hoses are engineered for specialized applications including rock drilling, sand blasting, furnace cooling, and pneumatic systems. Built to withstand harsh industrial environments with precision and reliability."

export default function IndustrialHosesPage() {
  const products = industrialHoses.map((hose, index) => ({
    id: index + 1100,
    name: hose.shortName,
    code: hose.standard,
    image: hose.image,
    slug: hose.slug,
  }))

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#f7f8f6] via-[#fbfcfa] to-white">
      <Topography className="pointer-events-none !fixed inset-0 z-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={3.4} thickness={0.018} glow={0.22} opacity={0.075} mouseRadius={0.24} mouseStrength={0.34} />
      <div className="relative z-10">
        <nav className="border-b" style={{ background: "#f8fafc", borderColor: "rgba(210,225,240,0.7)" }} aria-label="Breadcrumb">
          <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8">
            <ol className="flex flex-wrap items-center gap-0">
              <li className="flex items-center"><Link href="/" className="text-[11.5px] font-semibold uppercase tracking-[0.06em] text-[#0f2040] transition-colors duration-150 hover:text-[#e05a2e]">Home</Link></li>
              <li className="mx-2.5 flex items-center text-[10px] text-[#94aabf]" aria-hidden>⁄</li>
              <li className="flex items-center"><Link href="/products" className="text-[11.5px] font-medium uppercase tracking-[0.05em] text-[#2a4a70] transition-colors duration-150 hover:text-[#e05a2e]">Products</Link></li>
              <li className="mx-2.5 flex items-center text-[10px] text-[#94aabf]" aria-hidden>⁄</li>
              <li className="flex items-center gap-1.5" aria-current="page"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#e05a2e]" /><span className="text-[11.5px] font-bold uppercase tracking-[0.06em] text-[#e05a2e]">Industrial Hoses</span></li>
            </ol>
          </div>
        </nav>

        <div className="relative overflow-hidden bg-transparent">
          <IndustrialHosesHeroSection description={heroDescription} />

          <section id="products" className="relative z-10 border-b border-[#d0e4f5]/40 bg-transparent">
            <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="mb-8">
                <p className="mb-2 font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#e05a2e]">Industrial Hoses</p>
                <h2 className="max-w-[15ch] text-balance font-heading text-[#143126]" style={{ fontSize: "clamp(2.55rem, 4.7vw, 5.5rem)", fontWeight: 800, letterSpacing: "-0.07em", lineHeight: 0.9 }}>Industrial Hoses</h2>
                <div className="mb-5 flex items-center gap-3"><span className="h-[3px] w-10 rounded-full bg-[#e05a2e]" /><span className="h-[3px] w-4 rounded-full bg-[#1a5fa8]/40" /></div>
              </div>
              <p className="mb-10 max-w-3xl text-sm leading-relaxed text-[#2a4a70]/80 sm:text-base">{productsDescription}</p>
              <BSPProductGrid products={products} basePath="/products/industrial-hoses" categoryLabel="Industrial Hoses" searchScope="Industrial Hoses" />
            </div>
          </section>
        </div>

        <BSPCtaSection title="Need a Custom Industrial Hose?" description="Our engineers can design specialized hoses for your specific industrial application." buttonLabel="Get a Quick Quote" />
        <LikedProductsDrawer />
        <LikedProductsFAB />
      </div>
    </div>
  )
}
