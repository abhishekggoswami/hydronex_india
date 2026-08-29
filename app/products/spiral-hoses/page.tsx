import Link from "next/link"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductGrid } from "@/components/bsp-product-grid"
import { CategoryLandingHero } from "@/components/category-landing-hero"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import { spiralHoses } from "@/lib/spiral-hoses"

export const metadata = {
  title: "Spiral Hoses â€“ Hydronex",
  description:
    "Browse Hydronex spiral hose products: EN 856 4SP, EN 856 4SH, SAE 100 R12, R13, R15 and more. High-pressure hydraulic hoses ISO 9001 certified.",
}

export default function SpiralHosesPage() {
  const products = spiralHoses.map((hose, index) => ({
    id: index + 3000,
    name: hose.shortName,
    code: hose.standard,
    image: hose.image,
    slug: hose.slug,
  }))

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b" style={{ background: "#f8fafc", borderColor: "rgba(210,225,240,0.7)" }} aria-label="Breadcrumb">
        <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-0">
            <li><Link href="/" className="text-[11.5px] font-semibold uppercase tracking-wide text-[#0f2040] transition-colors hover:text-[#e05a2e]">Home</Link></li>
            <li className="mx-2.5 text-[#94aabf]">/</li>
            <li><Link href="/products" className="text-[11.5px] font-medium uppercase tracking-wide text-[#2a4a70] transition-colors hover:text-[#e05a2e]">Products</Link></li>
            <li className="mx-2.5 text-[#94aabf]">/</li>
            <li className="flex items-center gap-1.5" aria-current="page"><span className="h-1.5 w-1.5 rounded-full bg-[#e05a2e]" /><span className="text-[11.5px] font-bold uppercase tracking-wide text-[#e05a2e]">Spiral Hoses</span></li>
          </ol>
        </div>
      </nav>

      <CategoryLandingHero
        category="Spiral Hoses"
        title="High-Pressure Spiral Hoses"
        description="Multi-spiral reinforced hydraulic hoses engineered for severe impulse, high pressure, and demanding mobile equipment."
        ctaHref="#products"
        palette="#24455f"
      />

      <section id="products" className="bg-anim-section-dots border-b border-[#d0e4f5]/40" style={{ background: "linear-gradient(180deg, #deeefa 0%, #eaf4fc 18%, #f4faff 45%, #fafcff 72%, #ffffff 100%)" }}>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="bsp-fade-up mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#e05a2e]" style={{ animationDelay: "0s" }}>Spiral Hoses</p>
            <h2 className="bsp-fade-up mb-4 text-3xl font-extrabold leading-tight text-[#0f2040] sm:text-4xl" style={{ animationDelay: ".08s" }}>Spiral Hoses</h2>
            <div className="bsp-fade-up mb-5 flex items-center gap-3" style={{ animationDelay: ".16s" }}><span className="h-[3px] w-10 rounded-full bg-[#e05a2e]" /><span className="h-[3px] w-4 rounded-full bg-[#1a5fa8]/40" /></div>
            <p className="bsp-fade-up max-w-3xl text-sm leading-relaxed text-[#2a4a70]/80 sm:text-base" style={{ animationDelay: ".24s" }}>Hydronex spiral hoses are engineered for ultra-high-pressure applications with multiple wire spiral reinforcement. All products meet ISO 9001, SAE, and EN standard specifications for demanding industrial and construction environments.</p>
          </div>

          <BSPProductGrid products={products} basePath="/products/spiral-hoses" categoryLabel="Spiral Hoses" searchScope="Spiral Hoses" />
        </div>
      </section>

      <BSPCtaSection title="Need a Custom Hose Solution?" description="Our engineers can tailor specifications to your OEM or industrial requirements." buttonLabel="Get a Quick Quote" />
      <LikedProductsDrawer />
      <LikedProductsFAB />
    </div>
  )
}
