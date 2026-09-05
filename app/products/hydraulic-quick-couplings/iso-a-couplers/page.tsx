import { Metadata } from "next"
import Link from "next/link"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductGrid } from "@/components/bsp-product-grid"
import { HydraulicAdaptersHeroSection } from "@/components/hydraulic-adapters-hero-section"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import Topography from "@/components/topography"

export const metadata: Metadata = {
  title: "ISO-A Couplers – Hydraulic Quick Couplings | Hydronex",
  description:
    "Hydronex ISO-A quick couplers with KZE series design. ISO 7241-A standard compliance for reliable hydraulic connections with superior pressure and temperature resistance.",
}

const isoAProducts = [
  {
    id: 1,
    name: "KZE -ISO 7241 A (Steel Ball - Kzeb Series)",
    code: "KZE-KZEB-001",
    image: "/images/hydraulic-quick-couplings/kzeb-steel-ball-coupler.png",
    slug: "kze-iso-7241-a-steel-ball-kzeb-series",
  },
  {
    id: 2,
    name: "KZE -ISO 7241 A (Steel - Kze Series)",
    code: "KZE-KZE-001",
    image: "/images/hydraulic-quick-couplings/kze-steel-coupler.png",
    slug: "kze-iso-7241-a-steel-kze-series",
  },
  {
    id: 3,
    name: "KZE -ISO 7241 A (Stainless Steel - Kzess Series)",
    code: "KZE-KZESS-001",
    image: "/images/hydraulic-quick-couplings/kzess-stainless-steel-coupler.png",
    slug: "kze-iso-7241-a-stainless-steel-kzess-series",
  },
]

export default function IsoACouplerPage() {
  const products = isoAProducts.map((product) => ({ ...product, id: 150000 + product.id }))
  const features = [
    "The new design can resist the impact of high-speed fluid and pulse pressure, providing higher performance",
    "When the connector is disconnected, the valve core automatically closes to prevent leakage",
    "After the connector is connected, it automatically opens to keep the fluid flowing within the rated working range",
    "Key components are induction hardened for good durability",
    "Reliable ball lock mechanism combines the matching halves",
    "Female socket and male plug are precision-made from solid bar stock",
    "This connector complies with ISO7241-A standard",
    "KZE is interchangeable with the following products: PARKER 6600 series, FASTER ANV series, AEROQUIP 5600 series, HANSEN series HA15000 Series",
  ]

  const applicationText = "KZE connectors are widely used in various industrial connections, mainly for construction equipment, forest equipment, agricultural machinery, hydraulic machinery, petroleum equipment, steel equipment, chemicals, and other hydraulic applications."

  const usageText = "The connectors are used in a wide range of hydraulic applications. This type of double-stop connector can be used in the following situations: the fluid delivery pipeline needs to be connected and disconnected due to equipment operation or maintenance, and it is hoped that no fluid loss will occur. KZE SS connectors are mainly used for hydraulic fluid pipelines, but are also used for chemical water, steam and some gas pipelines."

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
      {/* ── Breadcrumb Navigation ────────────────────────────────────── */}
      <nav
        className="bg-white border-b border-[#e0e8f0]"
        style={{
          background: "linear-gradient(90deg, #fafbfc 0%, #f5f8fb 50%, #fafbfc 100%)",
        }}
        aria-label="Breadcrumb"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ol
            className="flex flex-wrap gap-1 text-xs sm:text-sm"
            role="presentation"
          >
            {/* Level 1 — Home */}
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
            {/* Level 2 — Products */}
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
            {/* Level 3 — Hydraulic Quick Couplings */}
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
            {/* Level 4 — active, still readable */}
            <li className="flex items-center gap-1.5" aria-current="page">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "#e05a2e" }}
              />
              <span
                className="text-[11.5px] font-bold tracking-wide uppercase"
                style={{ color: "#e05a2e", letterSpacing: "0.06em" }}
              >
                ISO-A Couplers
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* ── Hero Section ──────────────────────────────────────────────── */}
      <HydraulicAdaptersHeroSection
        category="Hydraulic Quick Couplings / ISO-A"
        title="ISO-A Couplers - KZE Series Quick Connectors"
        description="ISO 7241-A standard specifies the interface dimensions and basic performance requirements of hydraulic quick connectors, which are widely used in fields such as agricultural and forestry machinery."
        featuredProduct={products[0]}
        productCount={products.length}
        summary="ISO 7241-A standard specifies the interface dimensions and basic performance requirements of hydraulic quick connectors."
        standardLabel="ISO-A"
        standardsDescription="ISO 7241-A Standard"
      />

      <section
        id="products"
        className="relative border-b border-[#d0e4f5]/40 bg-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          {/* Section heading */}
          <div className="mb-12">
            {/* Eyebrow label */}
            <p
              className="text-[#e05a2e] text-[11px] font-bold uppercase tracking-[0.18em] mb-2 font-sans"
            >
              Hydraulic Quick Couplings &nbsp;/&nbsp; ISO-A
            </p>
            <h1
              className="text-4xl sm:text-5xl font-extrabold text-[#0f2040] leading-tight mb-4 text-balance"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                letterSpacing: "-0.02em",
              }}
            >
              ISO-A Couplers
              <span
                className="block text-[#1a5fa8] text-2xl sm:text-3xl font-semibold mt-0.5"
                style={{ letterSpacing: "-0.01em" }}
              >
                KZE Series Quick Connectors
              </span>
            </h1>
            {/* Accent rule */}
            <div className="flex items-center gap-3 mb-8">
              <span className="h-[3px] w-10 bg-[#e05a2e] rounded-full" />
              <span className="h-[3px] w-4 bg-[#1a5fa8]/40 rounded-full" />
            </div>
          </div>

          {/* Introduction Section */}
          <div className="mb-12">
            <p className="text-[#2a4a70]/80 leading-relaxed max-w-4xl mb-8 text-sm sm:text-base">
              ISO 7241-A standard specifies the interface dimensions and basic performance requirements of hydraulic quick connectors, which are widely used in fields such as agricultural and forestry machinery. A series hydraulic quick connectors are mainly used in Europe and are the first choice for agricultural and forestry machinery worldwide. Features: pressure resistance, temperature resistance, corrosion resistance, ensuring the reliability and safety of the connector in various working environments.
            </p>

            <p className="text-[#2a4a70]/80 leading-relaxed max-w-4xl mb-8 text-sm sm:text-base">
              ISO 7241 A From the perspective of sealing, there are spherical seals and cone seals. KZE KZEB are the models of Sinopulse.
            </p>

            <p className="text-[#2a4a70]/80 leading-relaxed max-w-4xl mb-8 text-sm sm:text-base">
              ISO 7241 A series are available in different materials, including carbon steel, stainless steel (SS304, SS316 optional) and copper.
            </p>

            <p className="text-[#2a4a70]/80 leading-relaxed max-w-4xl text-sm sm:text-base">
              ISO 7241 A KZE is available in male and female versions, which can be purchased together or separately.
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
                <div key={index} className="flex gap-3 p-4 rounded-lg bg-[#f0f7ff] border border-[#d0e4f5]/50">
                  <div
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "#e05a2e" }}
                  >
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <p className="text-[#2a4a70] text-sm leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Application Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold text-[#0f2040] mb-3">
                Material Options
              </h3>
              <p className="text-[#2a4a70]/80 text-sm leading-relaxed">
                KZE SS -ISO 7241 A Series (Stainless Steel 304)
              </p>
              <p className="text-[#2a4a70]/80 text-sm leading-relaxed mt-3">
                {applicationText}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0f2040] mb-3">
                Application
              </h3>
              <p className="text-[#2a4a70]/80 text-sm leading-relaxed">
                {usageText}
              </p>
            </div>
          </div>

          {/* Product Grid */}
          <div className="mt-16">
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#0f2040] mb-8"
              style={{ letterSpacing: "-0.01em" }}
            >
              Our ISO-A Coupler Range
            </h2>
            <BSPProductGrid
              products={products}
              basePath="/products/hydraulic-quick-couplings/iso-a-couplers"
              categoryLabel="ISO-A Couplers"
              searchScope="ISO-A Couplers"
            />
          </div>
        </div>
      </section>

      {/* ── CTA Section ───────────────────────────────────────────────── */}
      <BSPCtaSection />
      <LikedProductsDrawer />
      <LikedProductsFAB />

      {/* ── Liked Products Drawer + FAB ───────────────────────────────── */}
      </div>
    </div>
  )
}
