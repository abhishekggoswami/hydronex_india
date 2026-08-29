import Link from "next/link"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductGrid } from "@/components/bsp-product-grid"
import { CategoryLandingHero } from "@/components/category-landing-hero"
import { ssCorrugatedTeflon } from "@/lib/ss-corrugated-teflon-hoses"

export const metadata = {
  title: "S.S. Corrugated & Teflon Hoses â€“ Hydronex",
  description:
    "Browse Hydronex S.S. Corrugated & Teflon Hoses: Stainless Steel Corrugated and PTFE Teflon hoses for chemical, pharmaceutical, and high-temperature applications.",
}

export default function SSCorrugatedTefalonPage() {
  const products = ssCorrugatedTeflon.map((hose, index) => ({
    id: index + 8000,
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
            <li className="flex items-center gap-1.5" aria-current="page"><span className="h-1.5 w-1.5 rounded-full bg-[#e05a2e]" /><span className="text-[11.5px] font-bold uppercase tracking-wide text-[#e05a2e]">S.S. Corrugated &amp; Teflon Hoses</span></li>
          </ol>
        </div>
      </nav>

      <CategoryLandingHero
        category="S.S. Corrugated & Teflon Hoses"
        title="Stainless Steel & PTFE Hoses"
        description="High-performance flexible hose solutions for aggressive media, high temperatures, and critical transfer applications."
        ctaHref="#products"
        palette="#364854"
      />

      <section id="products" className="bg-anim-section-dots border-b border-[#d0e4f5]/40" style={{ background: "linear-gradient(180deg, #deeefa 0%, #eaf4fc 18%, #f4faff 45%, #fafcff 72%, #ffffff 100%)" }}>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="bsp-fade-up mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#e05a2e]" style={{ animationDelay: "0s" }}>S.S. Corrugated &amp; Teflon Hoses</p>
            <h2 className="bsp-fade-up mb-4 text-3xl font-extrabold leading-tight text-[#0f2040] sm:text-4xl" style={{ animationDelay: ".08s" }}>S.S. Corrugated &amp; Teflon Hoses</h2>
            <div className="bsp-fade-up mb-5 flex items-center gap-3" style={{ animationDelay: ".16s" }}><span className="h-[3px] w-10 rounded-full bg-[#e05a2e]" /><span className="h-[3px] w-4 rounded-full bg-[#1a5fa8]/40" /></div>
            <p className="bsp-fade-up max-w-3xl text-sm leading-relaxed text-[#2a4a70]/80 sm:text-base" style={{ animationDelay: ".24s" }}>Hydronex S.S. Corrugated &amp; Teflon hoses offer superior chemical resistance and purity for the most demanding pharmaceutical, chemical, and food processing applications.</p>
          </div>

          <BSPProductGrid products={products} basePath="/products/ss-corrugated-teflon-hoses" categoryLabel="S.S. Corrugated & Teflon Hoses" searchScope="S.S. Corrugated & Teflon Hoses" />
        </div>
      </section>

      <BSPCtaSection title="Need Chemical & Purity Excellence?" description="Our S.S. and PTFE hoses are engineered for pharmaceutical, chemical, and food-grade applications." buttonLabel="Get a Quick Quote" />
    </div>
  )
}
