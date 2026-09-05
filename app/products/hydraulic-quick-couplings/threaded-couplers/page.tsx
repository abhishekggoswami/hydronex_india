import { Metadata } from "next"
import Link from "next/link"
import { threadedCouplers } from "@/lib/threaded-couplers"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import { BSPProductGrid } from "@/components/bsp-product-grid"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { HydraulicAdaptersHeroSection } from "@/components/hydraulic-adapters-hero-section"
import Topography from "@/components/topography"

export const metadata: Metadata = {
  title: "Threaded Couplers â€“ Hydraulic Quick Couplings | Hydronex",
  description:
    "Hydronex threaded hydraulic quick couplers including QKTF, KSN, KVS, KCV, KGW, QKTL, KSG and KVV series. Thread-locked and thread-to-connect designs in carbon steel and stainless steel for industrial hydraulic applications.",
}

const threadedProducts = threadedCouplers.map((product) => ({ id: product.id, name: product.name, code: product.code, image: product.image, slug: product.slug }))
const features = [
  "Thread-locked mechanism prevents accidental disconnection",
  "Thread-to-connect design for live-line connections",
  "Available in carbon steel and stainless steel",
  "Wide range of sizes from 1/4\" to 1\" and beyond",
  "Compatible with BSP, NPT, and metric thread standards",
  "NBR and FKM seal options for fluid compatibility",
  "Panel-mount and bulkhead installation options",
  "High-cycle durability for demanding industrial use",
]
const applicationText = "Threaded couplers provide secure, vibration-resistant hydraulic connections for applications where accidental disconnection must be prevented. They serve industries including construction, mining, agriculture, marine, chemical processing, and heavy manufacturing where connection security and reliability are paramount."
const usageText = "Threaded couplers use a thread-locking mechanism to maintain a secure connection under pressure and vibration. The male nipple threads into the female coupler body, creating a positive mechanical lock that eliminates the risk of pull-out under high-pressure surges. Available in both thread-to-connect and thread-locked configurations for maximum application flexibility."

export default function ThreadedCouplerPage() {
  const featuredProduct = threadedCouplers[0]

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#f7f8f6] via-[#fbfcfa] to-white">
      <Topography className="pointer-events-none !fixed inset-0 z-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={3.4} thickness={0.018} glow={0.22} opacity={0.075} mouseRadius={0.24} mouseStrength={0.34} />

      <div className="relative z-10">
        <nav className="border-b border-[rgba(210,225,240,.7)] bg-[#f8fafc]" aria-label="Breadcrumb">
          <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8">
            <ol className="flex flex-wrap items-center gap-0">
              <li><Link href="/" className="text-[11.5px] font-semibold uppercase tracking-[.06em] text-[#0f2040] transition-colors hover:text-[#e05a2e]">Home</Link></li>
              <li className="mx-2.5 text-[10px] text-[#94aabf]" aria-hidden>⁄</li>
              <li><Link href="/products" className="text-[11.5px] font-medium uppercase tracking-[.05em] text-[#2a4a70] transition-colors hover:text-[#e05a2e]">Products</Link></li>
              <li className="mx-2.5 text-[10px] text-[#94aabf]" aria-hidden>⁄</li>
              <li><Link href="/products/hydraulic-quick-couplings" className="text-[11.5px] font-medium uppercase tracking-[.05em] text-[#4a6a90] transition-colors hover:text-[#e05a2e]">Hydraulic Quick Couplings</Link></li>
              <li className="mx-2.5 text-[10px] text-[#94aabf]" aria-hidden>⁄</li>
              <li className="flex items-center gap-1.5" aria-current="page"><span className="h-1.5 w-1.5 rounded-full bg-[#e05a2e]" /><span className="text-[11.5px] font-bold uppercase tracking-[.06em] text-[#e05a2e]">Threaded Couplers</span></li>
            </ol>
          </div>
        </nav>

        <HydraulicAdaptersHeroSection
          category="Hydraulic Quick Couplings / Threaded"
          title="Threaded Couplers"
          description={applicationText}
          featuredProduct={{ name: featuredProduct.name, code: featuredProduct.code, image: featuredProduct.image }}
          productCount={threadedProducts.length}
          summary={applicationText}
          standardLabel="BSP / NPT"
          standardsDescription="Threaded connection"
          primaryActionHref="/#contact"
          secondaryActionHref="#products"
        />

        <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20">
          <Topography className="pointer-events-none absolute inset-0 z-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={3.4} thickness={0.018} glow={0.22} opacity={0.07} mouseRadius={0.24} mouseStrength={0.3} />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[.18em] text-[#e05a2e]">Hydraulic Quick Couplings / Threaded</p>
              <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-[-.02em] text-[#0f2040] sm:text-4xl">Thread-Locked &amp; Thread-To-Connect Series</h2>
              <div className="mb-6 flex items-center gap-3"><span className="h-[3px] w-10 rounded-full bg-[#e05a2e]" /><span className="h-[3px] w-4 rounded-full bg-[#1a5fa8]/40" /></div>
              <p className="text-base leading-relaxed text-[#2a4a70]/80 sm:text-lg">{usageText}</p>
            </div>
          </div>
        </section>

        <section className="bsp-features-gradient relative overflow-hidden py-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:28px_28px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-center gap-3"><span className="h-7 w-1 rounded-full bg-[#e05a2e]" /><h2 className="text-3xl font-bold text-white">Key Features</h2></div>
            <div className="grid gap-x-12 gap-y-6 md:grid-cols-2">
              {features.map((feature, index) => (
                <div key={feature} className="group flex items-center gap-4 text-white/85 transition-transform duration-300 hover:translate-x-1.5">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#f26522] text-sm font-bold text-white shadow-[0_0_16px_rgba(242,101,34,.42)]">{index + 1}</span>
                  <p className="font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20">
          <Topography className="pointer-events-none absolute inset-0 z-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={3.4} thickness={0.018} glow={0.22} opacity={0.07} mouseRadius={0.24} mouseStrength={0.3} />
          <div className="relative z-10 mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
            <article className="rounded-2xl border border-[#d9e6f2] bg-white/80 p-7 shadow-[0_12px_32px_rgba(15,32,64,.08)] transition-transform duration-300 hover:-translate-y-1">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[.18em] text-[#e05a2e]">Material Options</p>
              <p className="leading-relaxed text-[#2a4a70]/80">Available in carbon steel (zinc plated / phosphated) and stainless steel (SS304 / SS316) to suit a wide range of operating environments from standard industrial to highly corrosive or sanitary applications.</p>
            </article>
            <article className="rounded-2xl border border-[#d9e6f2] bg-white/80 p-7 shadow-[0_12px_32px_rgba(15,32,64,.08)] transition-transform duration-300 hover:-translate-y-1">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[.18em] text-[#e05a2e]">Thread Standards</p>
              <p className="leading-relaxed text-[#2a4a70]/80">Threaded couplers are available with BSP (G), NPT, UNF, and metric thread forms. Both male and female versions are available, allowing flexible system design. Custom thread configurations are available on request.</p>
            </article>
          </div>
        </section>

        <section id="products" className="relative isolate overflow-hidden border-b border-[#d0e4f5]/40 bg-white py-16 sm:py-20">
          <Topography className="pointer-events-none absolute inset-0 z-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={3.4} thickness={0.018} glow={0.22} opacity={0.075} mouseRadius={0.24} mouseStrength={0.34} />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[.18em] text-[#e05a2e]">Threaded Couplers / Product Range</p>
              <h2 className="mb-4 text-3xl font-extrabold tracking-[-.02em] text-[#0f2040] sm:text-4xl">Our Threaded Coupler Range</h2>
              <div className="flex items-center gap-3"><span className="h-[3px] w-10 rounded-full bg-[#e05a2e]" /><span className="h-[3px] w-4 rounded-full bg-[#1a5fa8]/40" /></div>
            </div>
            <BSPProductGrid products={threadedProducts} basePath="/products/hydraulic-quick-couplings/threaded-couplers" categoryLabel="Threaded Couplers" searchScope="Threaded Couplers" />
          </div>
        </section>

        <BSPCtaSection />
        <LikedProductsDrawer />
        <LikedProductsFAB />
      </div>
    </div>
  )
}
