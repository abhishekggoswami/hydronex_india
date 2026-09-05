import { Metadata } from "next"
import Link from "next/link"
import { isoBCouplers } from "@/lib/iso-b-couplers"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductGrid } from "@/components/bsp-product-grid"
import { HydraulicAdaptersHeroSection } from "@/components/hydraulic-adapters-hero-section"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import Topography from "@/components/topography"

export const metadata: Metadata = {
  title: "ISO-B Couplers – Hydraulic Quick Couplings | Hydronex",
  description:
    "Hydronex ISO-B quick couplers with KZB series design. ISO 7241-B standard compliance for reliable hydraulic connections in North American and chemical industry applications.",
}

const isoBProducts = isoBCouplers.map((product) => ({
  id: product.id,
  name: product.name,
  code: product.code,
  image: product.image,
  slug: product.slug,
}))

export default function IsoBCouplerPage() {
  const features = [
    "When the connector is disconnected, the valve core automatically closes to prevent leakage",
    "After the connector is connected, it automatically opens and keeps the fluid flowing within the rated working range",
    "Key components are induction hardened for good durability",
    "Reliable ball lock mechanism combines the matching halves",
    "Female socket and male plug are precision-made from solid bar stock",
    "This connector complies with ISO7241-B standard",
    "KZB is interchangeable with the following products: PARKER 60 series, FASTER HNV series, AEROQUIP FD45 series, HANSEN HK series",
  ]

  const overview = "ISO 7241-B series is mainly used in North America and chemical industry. The purpose of this standard is to ensure that hydraulic connectors from different manufacturers can be used interchangeably, thereby improving the compatibility and safety of equipment."

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#f7f8f6] via-[#fbfcfa] to-white">
      <Topography
        className="pointer-events-none !fixed inset-0 z-0"
        lowColor="#9eb8c3"
        midColor="#f26522"
        highColor="#ffffff"
        speed={0.18}
        morphAmount={1.7}
        bands={3.4}
        thickness={0.018}
        glow={0.22}
        opacity={0.075}
        mouseRadius={0.24}
        mouseStrength={0.34}
      />

      <div className="relative z-10">
      <nav
        className="border-b"
        style={{ background: "#f8fafc", borderColor: "rgba(210,225,240,0.7)" }}
        aria-label="Breadcrumb"
      >
        <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-0">
            <li className="flex items-center">
              <Link href="/" className="text-[11.5px] font-semibold uppercase tracking-wide transition-colors duration-150 hover:text-[#e05a2e]" style={{ color: "#0f2040", letterSpacing: "0.06em" }}>Home</Link>
            </li>
            <li className="mx-2.5 flex items-center" aria-hidden><span style={{ color: "#94aabf", fontSize: "10px" }}>&#x2044;</span></li>
            <li className="flex items-center">
              <Link href="/products" className="text-[11.5px] font-medium uppercase tracking-wide transition-colors duration-150 hover:text-[#e05a2e]" style={{ color: "#2a4a70", letterSpacing: "0.05em" }}>Products</Link>
            </li>
            <li className="mx-2.5 flex items-center" aria-hidden><span style={{ color: "#94aabf", fontSize: "10px" }}>&#x2044;</span></li>
            <li className="flex items-center">
              <Link href="/products/hydraulic-quick-couplings" className="text-[11.5px] font-medium uppercase tracking-wide transition-colors duration-150 hover:text-[#e05a2e]" style={{ color: "#4a6a90", letterSpacing: "0.05em" }}>Hydraulic Quick Couplings</Link>
            </li>
            <li className="mx-2.5 flex items-center" aria-hidden><span style={{ color: "#94aabf", fontSize: "10px" }}>&#x2044;</span></li>
            <li className="flex items-center gap-1.5" aria-current="page">
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#e05a2e]" />
              <span className="text-[11.5px] font-bold uppercase tracking-wide text-[#e05a2e]" style={{ letterSpacing: "0.06em" }}>ISO-B Couplers</span>
            </li>
          </ol>
        </div>
      </nav>

      <HydraulicAdaptersHeroSection
        category="Hydraulic Quick Couplings / ISO-B"
        title="ISO-B Couplers Quick Connectors for North America"
        description={overview}
        featuredProduct={isoBProducts[0]}
        productCount={isoBProducts.length}
        summary={overview}
        standardLabel="ISO-B"
        standardsDescription="ISO 7241-B Standard"
      />

      <section
        id="products"
        className="relative border-b border-[#d0e4f5]/40 bg-transparent"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#e05a2e]">Hydraulic Quick Couplings / ISO-B</p>
            <h2 className="mb-4 text-3xl font-extrabold leading-tight text-[#0f2040] sm:text-4xl" style={{ fontFamily: "var(--font-heading, sans-serif)", letterSpacing: "-0.02em" }}>
              ISO-B Couplers
              <span className="mt-0.5 block text-2xl font-semibold text-[#1a5fa8] sm:text-3xl" style={{ letterSpacing: "-0.01em" }}>Quick Connectors for North America</span>
            </h2>
            <div className="mb-5 flex items-center gap-3"><span className="h-[3px] w-10 rounded-full bg-[#e05a2e]" /><span className="h-[3px] w-4 rounded-full bg-[#1a5fa8]/40" /></div>
          </div>

          <div className="mb-12 max-w-4xl space-y-8 text-sm leading-relaxed text-[#2a4a70]/80 sm:text-base">
            <p><strong>KZB -ISO 7241 B</strong></p>
            <p><strong>Features:</strong> When the connector is disconnected, the valve core automatically closes to prevent leakage. After the connector is connected, it automatically opens and keeps the fluid flowing within the rated working range. Key components are induction hardened, so they are durable. Reliable ball lock mechanism combines the matching halves. Female socket and male plug are precision manufactured from solid bar stock. This connector complies with ISO7241-B standard. KZB is interchangeable with the following products: PARKER 60 series, FASTER HNV series, AEROQUIP FD45 series, HANSEN HK series.</p>
            <p><strong>Application:</strong></p>
            <p>KZB connectors are used in a wide range of hydraulic applications. This type of double shut-off connector can be used in the following situations: fluid delivery pipelines need to be connected and disconnected due to equipment operation or maintenance, and it is hoped that no fluid loss will occur. KZB connectors are widely used in various industrial connections, mainly in construction equipment, forest equipment, agricultural machinery, hydraulic machinery, petroleum equipment, steel equipment, chemicals, and other hydraulic applications.</p>
          </div>

          <div className="mb-16">
            <h3 className="mb-6 text-2xl font-bold text-[#0f2040] sm:text-3xl" style={{ letterSpacing: "-0.01em" }}>Key Features</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="group flex gap-3 rounded-lg border border-[#d0e4f5]/70 bg-white/70 p-4 shadow-[0_4px_18px_rgba(15,32,64,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#e05a2e]/55 hover:shadow-[0_12px_28px_rgba(15,32,64,0.14)]">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#e05a2e] text-xs font-bold text-white shadow-[0_4px_12px_rgba(224,90,46,0.35)]">✓</span>
                  <p className="text-sm leading-relaxed text-[#2a4a70]">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-8 text-2xl font-bold text-[#0f2040] sm:text-3xl" style={{ letterSpacing: "-0.01em" }}>Our ISO-B Coupler Range</h3>
            <BSPProductGrid
              products={isoBProducts}
              basePath="/products/hydraulic-quick-couplings/iso-b-couplers"
              categoryLabel="ISO-B Quick Couplers"
              searchScope="ISO-B Couplers"
            />
          </div>
        </div>
      </section>

      <BSPCtaSection />
      <LikedProductsDrawer />
      <LikedProductsFAB />
      </div>
    </div>
  )
}
