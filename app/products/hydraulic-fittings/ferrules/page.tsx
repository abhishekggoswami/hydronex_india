import { Metadata } from "next"
import Link from "next/link"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductGrid } from "@/components/bsp-product-grid"
import { CategoryLandingHero } from "@/components/category-landing-hero"
import { ferrules } from "@/lib/ferrules"

export const metadata: Metadata = {
  title: "Ferrules | Hydraulic Fittings | Hydronex",
  description:
    "Premium ferrules for hydraulic hose assembly including SAE 100 R5, JIC, BSP, NPT, and specialized crimping solutions.",
}

export default function FerrulePage() {
  const products = ferrules.map((ferrule) => ({
    id: 130000 + ferrule.id,
    name: ferrule.name,
    code: ferrule.code,
    slug: ferrule.slug,
    image: ferrule.image,
  }))

  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b" style={{ background: "#f8fafc", borderColor: "rgba(210,225,240,0.7)" }} aria-label="Breadcrumb">
        <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-0">
            <li><Link href="/" className="text-[11.5px] font-semibold uppercase tracking-wide text-[#0f2040] transition-colors hover:text-[#e05a2e]">Home</Link></li>
            <li className="mx-2.5 text-[#94aabf]" aria-hidden>/</li>
            <li><Link href="/products" className="text-[11.5px] font-medium uppercase tracking-wide text-[#2a4a70] transition-colors hover:text-[#e05a2e]">Products</Link></li>
            <li className="mx-2.5 text-[#94aabf]" aria-hidden>/</li>
            <li><Link href="/products" className="text-[11.5px] font-medium uppercase tracking-wide text-[#4a6a90] transition-colors hover:text-[#e05a2e]">Hydraulic Fittings</Link></li>
            <li className="mx-2.5 text-[#94aabf]" aria-hidden>/</li>
            <li className="flex items-center gap-1.5" aria-current="page"><span className="h-1.5 w-1.5 rounded-full bg-[#e05a2e]"/><span className="text-[11.5px] font-bold uppercase tracking-wide text-[#e05a2e]">Ferrules</span></li>
          </ol>
        </div>
      </nav>

      <CategoryLandingHero
        category="Ferrules and Crimping Solutions"
        title="Ferrules - Premium Hose Crimping Solutions"
        description="Premium ferrules for reliable and secure hose crimping connections."
        ctaHref="/products"
      />

      <section className="bg-anim-section-dots border-b border-[#d0e4f5]/40" style={{ background: "linear-gradient(180deg, #deeefa 0%, #eaf4fc 18%, #f4faff 45%, #fafcff 72%, #ffffff 100%)" }}>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-4xl space-y-6 text-[#2a4a70]/85">
            <p className="text-lg leading-relaxed">Hydronex offers a comprehensive range of ferrules for hydraulic hose assembly, crimping, and connection solutions. Our ferrules are engineered for reliability, precision, and durability across all major standards including SAE 100 R5, R7, R8, R9, R12, R13, JIC, BSP, NPT, ORFS, and ISO 6149.</p>
            <p className="text-lg leading-relaxed">Whether you need standard SAE ferrules for high-pressure applications, specialized JIC designs for precision connections, or custom solutions for unique requirements, our extensive product range ensures you find the perfect ferrule for your hydraulic system.</p>
          </div>
          <div className="mb-10"><p className="mb-2 text-[11px] font-bold uppercase tracking-[.18em] text-[#e05a2e]">Complete Product Range</p><h2 className="text-3xl font-bold text-[#0d2949] sm:text-4xl">Ferrule Solutions</h2></div>
          <BSPProductGrid products={products} basePath="/products/hydraulic-fittings/ferrules" categoryLabel="Ferrules" searchScope="Ferrules" />
        </div>
      </section>

      <BSPCtaSection />
    </main>
  )
}
