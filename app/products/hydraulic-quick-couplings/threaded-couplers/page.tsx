import { Metadata } from "next"
import Link from "next/link"
import { threadedCouplers } from "@/lib/threaded-couplers"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import { ISOAProductGrid } from "@/components/iso-a-product-grid"
import { BSPCtaSection } from "@/components/bsp-cta-section"

export const metadata: Metadata = {
  title: "Threaded Couplers – Hydraulic Quick Couplings | Hydronex",
  description:
    "Hydronex threaded hydraulic quick couplers including QKTF, KSN, KVS, KCV, KGW, QKTL, KSG and KVV series. Thread-locked and thread-to-connect designs in carbon steel and stainless steel for industrial hydraulic applications.",
}

const threadedProducts = threadedCouplers.map((product) => ({
  id: product.id,
  name: product.name,
  code: product.code,
  image: product.image,
  slug: product.slug,
}))

export default function ThreadedCouplerPage() {
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

  const applicationText =
    "Threaded couplers provide secure, vibration-resistant hydraulic connections for applications where accidental disconnection must be prevented. They serve industries including construction, mining, agriculture, marine, chemical processing, and heavy manufacturing where connection security and reliability are paramount."

  const usageText =
    "Threaded couplers use a thread-locking mechanism to maintain a secure connection under pressure and vibration. The male nipple threads into the female coupler body, creating a positive mechanical lock that eliminates the risk of pull-out under high-pressure surges. Available in both thread-to-connect and thread-locked configurations for maximum application flexibility."

  return (
    <div className="min-h-screen bg-white">
      {/* ── Breadcrumb Navigation ────────────────────────────────────── */}
      <nav
        className="bg-white border-b border-[#e0e8f0]"
        style={{
          background: "linear-gradient(90deg, #fafbfc 0%, #f5f8fb 50%, #fafbfc 100%)",
        }}
        aria-label="Breadcrumb"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ol className="flex flex-wrap gap-1 text-xs sm:text-sm" role="presentation">
            <li className="flex items-center gap-1.5">
              <Link
                href="/"
                className="text-[11.5px] font-medium tracking-wide uppercase transition-colors duration-150 hover:text-[#e05a2e]"
                style={{ color: "#6a8aaa", letterSpacing: "0.05em" }}
              >
                Home
              </Link>
            </li>
            <li className="flex items-center mx-2.5" aria-hidden>
              <span style={{ color: "#94aabf", fontSize: "10px" }}>&#x2044;</span>
            </li>
            <li className="flex items-center gap-1.5">
              <Link
                href="/products"
                className="text-[11.5px] font-medium tracking-wide uppercase transition-colors duration-150 hover:text-[#e05a2e]"
                style={{ color: "#6a8aaa", letterSpacing: "0.05em" }}
              >
                Products
              </Link>
            </li>
            <li className="flex items-center mx-2.5" aria-hidden>
              <span style={{ color: "#94aabf", fontSize: "10px" }}>&#x2044;</span>
            </li>
            <li className="flex items-center gap-1.5">
              <Link
                href="/products/hydraulic-quick-couplings"
                className="text-[11.5px] font-medium tracking-wide uppercase transition-colors duration-150 hover:text-[#e05a2e]"
                style={{ color: "#6a8aaa", letterSpacing: "0.05em" }}
              >
                Hydraulic Quick Couplings
              </Link>
            </li>
            <li className="flex items-center mx-2.5" aria-hidden>
              <span style={{ color: "#94aabf", fontSize: "10px" }}>&#x2044;</span>
            </li>
            <li className="flex items-center gap-1.5" aria-current="page">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "#e05a2e" }}
              />
              <span
                className="text-[11.5px] font-bold tracking-wide uppercase"
                style={{ color: "#e05a2e", letterSpacing: "0.06em" }}
              >
                Threaded Couplers
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* ── Hero Section ──────────────────────────────────────────────── */}
      <section
        className="bg-anim-section-dots border-b border-[#d0e4f5]/40"
        style={{
          background:
            "linear-gradient(180deg, #deeefa 0%, #eaf4fc 18%, #f4faff 45%, #fafcff 72%, #ffffff 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          {/* Section heading */}
          <div className="mb-12">
            <p className="text-[#e05a2e] text-[11px] font-bold uppercase tracking-[0.18em] mb-2 font-sans">
              Hydraulic Quick Couplings &nbsp;/&nbsp; Threaded
            </p>
            <h1
              className="text-4xl sm:text-5xl font-extrabold text-[#0f2040] leading-tight mb-4 text-balance"
              style={{ letterSpacing: "-0.02em" }}
            >
              Threaded Couplers
              <span
                className="block text-[#1a5fa8] text-2xl sm:text-3xl font-semibold mt-0.5"
                style={{ letterSpacing: "-0.01em" }}
              >
                Thread-Locked &amp; Thread-To-Connect Series
              </span>
            </h1>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-[3px] w-10 bg-[#e05a2e] rounded-full" />
              <span className="h-[3px] w-4 bg-[#1a5fa8]/40 rounded-full" />
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-[#2a4a70]/80 leading-relaxed max-w-4xl mb-6 text-sm sm:text-base">
              {applicationText}
            </p>
            <p className="text-[#2a4a70]/80 leading-relaxed max-w-4xl text-sm sm:text-base">
              {usageText}
            </p>
          </div>

          {/* Features Section */}
          <div className="mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#0f2040] mb-6"
              style={{ letterSpacing: "-0.01em" }}
            >
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-3 p-4 rounded-lg bg-[#f0f7ff] border border-[#d0e4f5]/50"
                >
                  <div
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "#e05a2e" }}
                  >
                    <span className="text-white text-xs font-bold">&#x2713;</span>
                  </div>
                  <p className="text-[#2a4a70] text-sm leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Application Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-lg font-bold text-[#0f2040] mb-3">Material Options</h3>
              <p className="text-[#2a4a70]/80 text-sm leading-relaxed">
                Available in carbon steel (zinc plated / phosphated) and stainless steel (SS304 / SS316) to suit a wide range of operating environments from standard industrial to highly corrosive or sanitary applications.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0f2040] mb-3">Thread Standards</h3>
              <p className="text-[#2a4a70]/80 text-sm leading-relaxed">
                Threaded couplers are available with BSP (G), NPT, UNF, and metric thread forms. Both male and female versions are available, allowing flexible system design. Custom thread configurations are available on request.
              </p>
            </div>
          </div>

          {/* Product Grid */}
          <div>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#0f2040] mb-8"
              style={{ letterSpacing: "-0.01em" }}
            >
              Our Threaded Coupler Range
            </h2>
            <ISOAProductGrid
              products={threadedProducts}
              basePath="/products/hydraulic-quick-couplings/threaded-couplers"
            />
          </div>
        </div>
      </section>

      {/* ── CTA Section ───────────────────────────────────────────────── */}
      <BSPCtaSection />

      {/* ── Liked Products Drawer + FAB ───────────────────────────────── */}
      <LikedProductsDrawer />
      <LikedProductsFAB />
    </div>
  )
}
