import { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Check } from "lucide-react"
import { pushPullCouplers } from "@/lib/push-and-pull-couplers"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import { BSPProductGrid } from "@/components/bsp-product-grid"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { CategoryLandingHero } from "@/components/category-landing-hero"

export const metadata: Metadata = {
  title: "Push-and-Pull Couplers – Hydraulic Quick Couplings | Hydronex",
  description:
    "Hydronex push-and-pull type quick couplers with KZAF, KZAV, and KZA series designs. Easy connection and disconnection with reliable poppet valve closure mechanism.",
}

const pushPullProducts = pushPullCouplers.map((product) => ({
  id: product.id,
  name: product.name,
  code: product.code,
  image: product.image,
  slug: product.slug,
}))

const features = [
  "Easy push-and-pull connection and disconnection mechanism",
  "Poppet valve prevents fluid spillage during disconnection",
  "Ridged or knurled grip sleeve for secure handling",
  "Stainless steel and zinc-coated steel options available",
  "Reliable ball lock mechanism for secure connection",
  "Precision-engineered components from solid bar stock",
  "ISO 7241 standard compliance for interchangeability",
  "Suitable for frequent coupling and decoupling operations",
]

export default function PushPullCouplerPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <nav className="border-b border-[#e8eef5] bg-white shadow-sm" aria-label="Breadcrumb">
        <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-0">
            {[
              { href: "/", label: "Home" },
              { href: "/products", label: "Products" },
              { href: "/products/hydraulic-quick-couplings", label: "Hydraulic Quick Couplings" },
            ].map((crumb) => (
              <li key={crumb.href} className="flex items-center">
                <Link href={crumb.href} className="text-[11px] font-medium uppercase tracking-widest text-[#6b7280] transition-colors hover:text-[#e05a2e]">{crumb.label}</Link>
                <ChevronRight size={12} className="mx-2 text-[#d1d5db]" />
              </li>
            ))}
            <li className="flex items-center gap-1.5" aria-current="page">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e05a2e]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#e05a2e]">Push-and-Pull Couplers</span>
            </li>
          </ol>
        </div>
      </nav>

      <CategoryLandingHero
        category="Hydraulic Quick Couplings / Push-and-Pull"
        title="Push-and-Pull Couplers"
        description="Push-and-pull type quick couplers are designed for applications requiring frequent and simple connection and disconnection. These couplers feature an intuitive mechanism that minimizes operator training while maintaining reliability and safety."
        ctaHref="#products"
        palette="#15324d"
      />

      <section id="products" className="bg-anim-section-dots relative overflow-hidden border-b border-[#d0e4f5]/40" style={{ background: "linear-gradient(180deg, #deeefa 0%, #eaf4fc 18%, #f4faff 45%, #fafcff 72%, #ffffff 100%)" }}>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-4xl">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#e05a2e]">Push-and-Pull Couplers</p>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-[#0e1c35] sm:text-4xl">Easy-Connect Hydraulic Solutions</h2>
            <div className="mb-7 flex items-center gap-3"><span className="h-[3px] w-10 rounded-full bg-[#e05a2e]" /><span className="h-[3px] w-4 rounded-full bg-[#1a5fa8]/40" /></div>
            <p className="mb-6 text-sm leading-relaxed text-[#2a4a70]/80 sm:text-base"><strong>Features:</strong> Push-and-pull couplers offer easy connection and disconnection by simply pushing or pulling the coupling sleeve. The integrated poppet valve ensures that fluid is retained when disconnected, preventing spillage and environmental contamination. Available in stainless steel (KZAF, KZAV series) and zinc-coated steel (KZA series) for various application requirements. Ridged or knurled grip sleeves provide secure handling even in wet or difficult environments.</p>
            <p className="mb-6 text-sm leading-relaxed text-[#2a4a70]/80 sm:text-base"><strong>Application:</strong></p>
            <p className="text-sm leading-relaxed text-[#2a4a70]/80 sm:text-base">Push-and-pull couplers are widely used in construction equipment, agricultural machinery, industrial equipment, maintenance operations, and any application where frequent coupling and decoupling is required. They are ideal for situations where quick equipment changes are necessary or where ease of operation is critical. Their simple mechanism makes them suitable for both skilled technicians and general operators.</p>
          </div>

          <section className="bsp-features-gradient relative -mx-4 mb-14 overflow-hidden px-4 py-12 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
            <div className="relative z-10 mx-auto max-w-7xl">
              <div className="mb-8 flex items-center gap-3"><span className="h-7 w-1 rounded-full bg-[#e05a2e]" /><h2 className="text-2xl font-bold text-white">Key Features</h2></div>
              <div className="grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2">
                {features.map((feature, index) => (
                  <div key={feature} className="flex gap-4 transition-transform duration-300 hover:translate-x-1" style={{ transitionDelay: `${index * 35}ms` }}>
                    <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#e05a2e] shadow-[0_2px_8px_rgba(224,90,46,.4)]"><Check size={12} strokeWidth={3} className="text-white" /></div>
                    <p className="text-sm leading-relaxed text-[#cbdcf8]/90">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#e05a2e]">Product Range</p>
              <h2 className="text-3xl font-bold tracking-tight text-[#0e1c35]">Our Push-and-Pull Coupler Range</h2>
            </div>
          </div>
          <BSPProductGrid products={pushPullProducts} basePath="/products/hydraulic-quick-couplings/push-and-pull-coupler" categoryLabel="Push-and-Pull Couplers" searchScope="Push-and-Pull Couplers" />
        </div>
      </section>

      <BSPCtaSection title="Need Push-and-Pull Coupler Solutions?" description="Push-and-pull couplers offer a simple and intuitive connection mechanism that requires minimal operator training. The poppet valve design ensures minimal fluid loss during disconnection, making them ideal for maintenance operations and equipment transfers." />
      <LikedProductsDrawer />
      <LikedProductsFAB />
    </div>
  )
}
