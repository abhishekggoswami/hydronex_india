import Link from "next/link"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductGrid } from "@/components/bsp-product-grid"
import { HighTemperatureHosesHeroSection } from "@/components/high-temperature-hoses-hero-section"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import Topography from "@/components/topography"
import { highTemperatureHoses } from "@/lib/high-temperature-hoses"

export const metadata = {
  title: "High Temperature Hoses – Hydronex",
  description:
    "Browse Hydronex high temperature hose products: AirWater Type -1 and EXCEED SAE 100 R1 AT for extreme temperature hydraulic and pneumatic applications.",
}

const heroDescription = "Purpose-built hose systems that stay dependable in elevated-temperature hydraulic, pneumatic, and process applications."
const productsDescription = "Hydronex high-temperature hoses are engineered to perform in extreme thermal conditions, from elevated temperature pneumatic systems to extreme pressure hydraulic applications in steel mills and foundries."

export default function HighTemperatureHosesPage() {
  const products = highTemperatureHoses.map((hose, index) => ({
    id: index + 6000,
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
              <li className="flex items-center gap-1.5" aria-current="page"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#e05a2e]" /><span className="text-[11.5px] font-bold uppercase tracking-[0.06em] text-[#e05a2e]">High Temperature Hoses</span></li>
            </ol>
          </div>
        </nav>

        <div className="relative overflow-hidden bg-transparent">
          <HighTemperatureHosesHeroSection description={heroDescription} />

          <section id="products" className="relative z-10 border-b border-[#d0e4f5]/40 bg-transparent">
            <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="mb-8">
                <p className="mb-2 font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#e05a2e]">High Temperature Hoses</p>
                <h2 className="max-w-[15ch] text-balance font-heading text-[#143126]" style={{ fontSize: "clamp(2.55rem, 4.7vw, 5.5rem)", fontWeight: 800, letterSpacing: "-0.07em", lineHeight: 0.9 }}>High Temperature Hoses</h2>
                <div className="mb-5 flex items-center gap-3"><span className="h-[3px] w-10 rounded-full bg-[#e05a2e]" /><span className="h-[3px] w-4 rounded-full bg-[#1a5fa8]/40" /></div>
              </div>
              <p className="mb-10 max-w-3xl text-sm leading-relaxed text-[#2a4a70]/80 sm:text-base">{productsDescription}</p>
              <BSPProductGrid products={products} basePath="/products/high-temperature-hoses" categoryLabel="High Temperature Hoses" searchScope="High Temperature Hoses" />
            </div>
          </section>
        </div>

        <BSPCtaSection title="Need High Temperature Performance?" description="Our engineers specialize in extreme temperature applications for demanding industrial environments." buttonLabel="Get a Quick Quote" />
        <LikedProductsDrawer />
        <LikedProductsFAB />
      </div>
    </div>
  )
}
