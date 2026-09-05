import { Metadata } from "next"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductGrid } from "@/components/bsp-product-grid"
import { HydraulicAdaptersHeroSection } from "@/components/hydraulic-adapters-hero-section"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import Topography from "@/components/topography"
import { nptHydraulicFittings } from "@/lib/npt-hydraulic-fittings"

export const metadata: Metadata = {
  title: "NPT Hydraulic Fittings - North American Hydraulic Fittings | Hydronex",
  description:
    "Hydronex supplies a wide range of NPT hydraulic fittings. High-quality stainless steel construction that can stand strong working conditions.",
}

export default function NPTFittingsPage() {
  const nptProducts = nptHydraulicFittings.map((product) => ({
    // Liked products share one global store. Namespace NPT IDs so they never
    // collide with similarly numbered products from another category.
    id: 50000 + product.id,
    name: product.name,
    code: product.code,
    image: product.image,
    slug: product.slug,
  }))

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#f7f8f6] via-[#fbfcfa] to-white">
      <Topography className="pointer-events-none !fixed inset-0 z-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={3.4} thickness={0.018} glow={0.22} opacity={0.075} mouseRadius={0.24} mouseStrength={0.34} />
      <div className="relative z-10">
      <nav
        className="border-b"
        style={{ background: "#f8fafc", borderColor: "rgba(210,225,240,0.7)" }}
        aria-label="Breadcrumb"
      >
        <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-0">
            <li className="flex items-center">
              <Link href="/" className="text-[11.5px] font-semibold uppercase tracking-wide text-[#0f2040] transition-colors duration-150 hover:text-[#e05a2e]">
                Home
              </Link>
            </li>
            <li className="mx-2.5 flex items-center text-[#94aabf]" aria-hidden>/</li>
            <li className="flex items-center">
              <Link href="/products" className="text-[11.5px] font-medium uppercase tracking-wide text-[#2a4a70] transition-colors duration-150 hover:text-[#e05a2e]">
                Products
              </Link>
            </li>
            <li className="mx-2.5 flex items-center text-[#94aabf]" aria-hidden>/</li>
            <li className="flex items-center">
              <Link href="/products/hydraulic-fittings" className="text-[11.5px] font-medium uppercase tracking-wide text-[#4a6a90] transition-colors duration-150 hover:text-[#e05a2e]">
                Hydraulic Fittings
              </Link>
            </li>
            <li className="mx-2.5 flex items-center text-[#94aabf]" aria-hidden>/</li>
            <li className="flex items-center gap-1.5" aria-current="page">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e05a2e]" />
              <span className="text-[11.5px] font-bold uppercase tracking-wide text-[#e05a2e]">NPT Hydraulic Fittings</span>
            </li>
          </ol>
        </div>
      </nav>

      <div className="relative overflow-hidden bg-transparent">
      <HydraulicAdaptersHeroSection category="NPT Standard Pipe" title="NPT Hydraulic Fittings" description="Hydronex supplies a wide range of precision-engineered NPT (National Pipe Thread) hydraulic fittings. Our NPT fittings feature high-quality stainless steel construction that can stand strong working conditions, providing reliable and leak-free connections across North American hydraulic applications." featuredProduct={nptProducts[0]} productCount={nptProducts.length} />

      <section
        className="relative z-10 border-b border-[#d0e4f5]/40 bg-transparent"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#e05a2e]">
              Hydraulic Fittings / NPT Standard
            </p>
            <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-[-0.02em] text-[#0f2040] sm:text-4xl">
              NPT Hydraulic Fittings
              <span className="mt-0.5 block text-2xl font-semibold tracking-[-0.01em] text-[#1a5fa8] sm:text-3xl">
                National Pipe Tapered Standard
              </span>
            </h2>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[3px] w-10 rounded-full bg-[#e05a2e]" />
              <span className="h-[3px] w-4 rounded-full bg-[#1a5fa8]/40" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-[#0f2040]">NPT (National Standard Pipe Diameter)</h3>
            <p className="mb-4 text-sm leading-relaxed text-[#2a4a70]/80 sm:text-base">
              NPT (National Standard Pipe Diameter), or Notional Pipe Tapered, is an American standard defined under AMSE B1.20.1. This NPT Fittings standard specifies the dimensions and tolerances of tapered threads on pipes and fittings.
            </p>
            <p className="text-sm leading-relaxed text-[#2a4a70]/80 sm:text-base">
              Unlike straight threads, tapered threads provide a more reliable seal, especially when used with sealant materials such as Teflon tape. This standard is over a hundred years old and was originally developed for plumbing applications; however, it has also been effectively applied to hydraulic and gas conveyance applications.
            </p>
          </div>

          <BSPProductGrid
            products={nptProducts}
            basePath="/products/hydraulic-fittings/npt"
            categoryLabel="NPT Hydraulic Fittings"
            searchScope="NPT Hydraulic Fittings"
          />
        </div>
      </section>
      </div>

      <BSPCtaSection
        title="Connect with Our NPT Experts"
        description="Hydronex specializes in high-quality NPT hydraulic fittings for North American applications. Contact us today for quotes, technical support, or bulk orders."
        buttonLabel="Get Your Quote Today"
        supplementaryContent={
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <Link
              href="tel:+1-555-0123"
              className="group rounded-sm border border-white/20 bg-white/10 p-5 text-center transition-all duration-300 hover:border-white/45 hover:bg-white/18 hover:-translate-y-1"
            >
              <span className="mb-3 inline-flex rounded-full bg-white/15 p-3 text-white transition-transform duration-300 group-hover:scale-110">
                <Phone size={21} />
              </span>
              <span className="mb-1 block font-bold text-white">Call Us</span>
              <span className="block text-sm text-white/75">+1 (555) 012-3456</span>
            </Link>
            <Link
              href="mailto:sales@hydronex.com"
              className="group rounded-sm border border-white/20 bg-white/10 p-5 text-center transition-all duration-300 hover:border-white/45 hover:bg-white/18 hover:-translate-y-1"
            >
              <span className="mb-3 inline-flex rounded-full bg-white/15 p-3 text-white transition-transform duration-300 group-hover:scale-110">
                <Mail size={21} />
              </span>
              <span className="mb-1 block font-bold text-white">Email</span>
              <span className="block text-sm text-white/75">sales@hydronex.com</span>
            </Link>
            <Link
              href="#"
              className="group rounded-sm border border-white/20 bg-white/10 p-5 text-center transition-all duration-300 hover:border-white/45 hover:bg-white/18 hover:-translate-y-1"
            >
              <span className="mb-3 inline-flex rounded-full bg-white/15 p-3 text-white transition-transform duration-300 group-hover:scale-110">
                <MapPin size={21} />
              </span>
              <span className="mb-1 block font-bold text-white">Visit Us</span>
              <span className="block text-sm text-white/75">1234 Industrial Ave, City, ST</span>
            </Link>
          </div>
        }
      />
      <LikedProductsDrawer />
      <LikedProductsFAB />
      </div>
    </div>
  )
}
