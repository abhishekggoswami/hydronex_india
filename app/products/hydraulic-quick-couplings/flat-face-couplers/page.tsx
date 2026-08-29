import { Metadata } from "next"
import Link from "next/link"
import { flatFaceCouplers } from "@/lib/flat-face-couplers"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import { ISOAProductGrid } from "@/components/iso-a-product-grid"
import { BSPCtaSection } from "@/components/bsp-cta-section"

export const metadata: Metadata = {
  title: "Flat Face Couplers – Hydraulic Quick Couplings | Hydronex",
  description:
    "Hydronex flat-face hydraulic quick couplers with ISO 16028 compliance. Carbon steel, stainless steel, and specialty couplers with zero fluid loss technology for industrial applications.",
}

const flatFaceProducts = flatFaceCouplers.map(product => ({
  id: product.id,
  name: product.name,
  code: product.code,
  image: product.image,
  slug: product.slug,
}))

export default function FlatFaceCouplerPage() {
  const features = [
    "Flat-face design for zero fluid loss",
    "ISO 16028 international compatibility",
    "Multiple material options available",
    "Reliable poppet valve technology",
    "Chrome plated and corrosion resistant",
    "Quick release mechanism for efficiency",
    "Precision-manufactured components",
    "Suitable for diverse industrial environments",
  ]

  const applicationText = "Flat-face couplers are engineered for applications demanding zero spillage and environmental protection. They serve industries including food processing, pharmaceuticals, marine environments, heavy manufacturing, and general industrial hydraulics where reliability and minimal fluid loss are critical requirements."

  const usageText = "Flat-face couplers utilize advanced poppet valve technology to eliminate fluid loss during disconnection. This innovative design makes them ideal for maintenance operations, equipment transfers, sanitary applications, and environmentally sensitive operations where spillage prevention is paramount."

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
            {/* Level 4 — Current Page */}
            <li className="flex items-center gap-1.5">
              <span
                className="text-[11.5px] font-medium tracking-wide uppercase"
                style={{ color: "#e05a2e", letterSpacing: "0.05em" }}
              >
                Flat Face Couplers
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* ── Header Section ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
        {/* Background gradient */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "linear-gradient(135deg, #f8fafb 0%, #f0f4f8 50%, #f8fafb 100%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1
              className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
              style={{ color: "#1a2332" }}
            >
              Flat Face Couplers
            </h1>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "#4a5f7f" }}
            >
              {applicationText}
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#5a6f8f" }}
            >
              {usageText}
            </p>
          </div>
        </div>
      </section>

      {/* ── Features Section ───────────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold mb-12"
            style={{ color: "#1a2332" }}
          >
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border transition-all duration-300 hover:shadow-lg hover:border-orange-200"
                style={{
                  borderColor: "#e0e8f0",
                  backgroundColor: "#fafbfc",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 font-bold text-white"
                  style={{ backgroundColor: "#e05a2e" }}
                >
                  {index + 1}
                </div>
                <p style={{ color: "#3a4f6f" }} className="font-medium">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products Grid ──────────────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold mb-12"
            style={{ color: "#1a2332" }}
          >
            Our Flat Face Coupler Series
          </h2>
          <ISOAProductGrid products={flatFaceProducts} basePath="/products/hydraulic-quick-couplings/flat-face-couplers" />
        </div>
      </section>

      {/* ── CTA Section ────────────────────────────────────────────── */}
      <BSPCtaSection />

      {/* ── Liked Products ─────────────────────────────────────────── */}
      <LikedProductsDrawer />
      <LikedProductsFAB />
    </div>
  )
}
