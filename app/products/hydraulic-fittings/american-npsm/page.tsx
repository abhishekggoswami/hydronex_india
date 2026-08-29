import { Metadata } from "next"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductGrid } from "@/components/bsp-product-grid"
import { CategoryLandingHero } from "@/components/category-landing-hero"
import { americanNPSMFittings } from "@/lib/american-npsm-fittings"

export const metadata: Metadata = {
  title: "American NPSM Fittings - NPSM Hydraulic Fittings | Hydronex",
  description:
    "Hydronex supplies a wide range of American NPSM hydraulic fittings. High-quality stainless steel construction with 60° cone seat design for reliable sealing.",
}

export default function AmericanNPSMFittingsPage() {
  const npsmProducts = americanNPSMFittings.map((product) => ({
    id: 60000 + product.id,
    name: product.name,
    code: product.code,
    image: product.image,
    slug: product.slug,
  }))

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b" style={{ background: "#f8fafc", borderColor: "rgba(210,225,240,0.7)" }} aria-label="Breadcrumb">
        <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-0">
            <li><Link href="/" className="text-[11.5px] font-semibold uppercase tracking-wide text-[#0f2040] transition-colors hover:text-[#e05a2e]">Home</Link></li>
            <li className="mx-2.5 text-[#94aabf]" aria-hidden>/</li>
            <li><Link href="/products" className="text-[11.5px] font-medium uppercase tracking-wide text-[#2a4a70] transition-colors hover:text-[#e05a2e]">Products</Link></li>
            <li className="mx-2.5 text-[#94aabf]" aria-hidden>/</li>
            <li><Link href="/products" className="text-[11.5px] font-medium uppercase tracking-wide text-[#4a6a90] transition-colors hover:text-[#e05a2e]">Hydraulic Fittings</Link></li>
            <li className="mx-2.5 text-[#94aabf]" aria-hidden>/</li>
            <li className="flex items-center gap-1.5" aria-current="page"><span className="h-1.5 w-1.5 rounded-full bg-[#e05a2e]" /><span className="text-[11.5px] font-bold uppercase tracking-wide text-[#e05a2e]">American NPSM Fittings</span></li>
          </ol>
        </div>
      </nav>

      <CategoryLandingHero
        category="American Standard Mechanical"
        title="American NPSM Fittings"
        description="Precision hydraulic fittings with 60° cone seat design for reliable sealing and superior performance"
        ctaHref="/products"
      />

      <section className="bg-anim-section-dots border-b border-[#d0e4f5]/40" style={{ background: "linear-gradient(180deg, #deeefa 0%, #eaf4fc 18%, #f4faff 45%, #fafcff 72%, #ffffff 100%)" }}>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#e05a2e]">Hydraulic Fittings / American NPSM Standard</p>
            <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-[-0.02em] text-[#0f2040] sm:text-4xl">
              American NPSM Hydraulic Fittings
              <span className="mt-0.5 block text-2xl font-semibold tracking-[-0.01em] text-[#1a5fa8] sm:text-3xl">National Pipe Straight Mechanical Standard</span>
            </h2>
            <div className="mb-6 flex items-center gap-3"><span className="h-[3px] w-10 rounded-full bg-[#e05a2e]" /><span className="h-[3px] w-4 rounded-full bg-[#1a5fa8]/40" /></div>
            <h3 className="mb-4 text-xl font-bold text-[#0f2040]">NPSM (National Pipe Straight Mechanical)</h3>
            <p className="mb-4 text-sm leading-relaxed text-[#2a4a70]/80 sm:text-base">NPSM (National Pipe Straight Mechanical) is an American standard for straight-thread hydraulic and pneumatic fittings. Unlike the tapered NPT standard, NPSM fittings use straight threads combined with a 60° cone seat design to create reliable leak-free connections.</p>
            <p className="mb-4 text-sm leading-relaxed text-[#2a4a70]/80 sm:text-base">The cone seat design is where the sealing action occurs, providing superior performance in high-pressure hydraulic systems. NPSM fittings are widely used in industrial applications where consistent, reliable connections are critical. They are compatible with standard American pipe dimensions and are available in multiple materials and surface treatments.</p>
            <p className="text-sm leading-relaxed text-[#2a4a70]/80 sm:text-base">Our American NPSM fittings are manufactured to strict specifications, featuring precision-machined 60° cone seats and durable construction in carbon steel and stainless steel variants.</p>
          </div>
          <BSPProductGrid products={npsmProducts} basePath="/products/hydraulic-fittings/american-npsm" categoryLabel="American NPSM Fittings" searchScope="American NPSM Fittings" />
        </div>
      </section>

      <BSPCtaSection
        title="Connect with Our NPT Experts"
        description="Hydronex specializes in high-quality NPT hydraulic fittings for North American applications. Contact us today for quotes, technical support, or bulk orders."
        buttonLabel="Get Your Quote Today"
        supplementaryContent={
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <Link href="tel:+1-555-0123" className="group rounded-sm border border-white/20 bg-white/10 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/45 hover:bg-white/18"><span className="mb-3 inline-flex rounded-full bg-white/15 p-3 text-white transition-transform duration-300 group-hover:scale-110"><Phone size={21} /></span><span className="mb-1 block font-bold text-white">Call Us</span><span className="block text-sm text-white/75">+1 (555) 012-3456</span></Link>
            <Link href="mailto:sales@hydronex.com" className="group rounded-sm border border-white/20 bg-white/10 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/45 hover:bg-white/18"><span className="mb-3 inline-flex rounded-full bg-white/15 p-3 text-white transition-transform duration-300 group-hover:scale-110"><Mail size={21} /></span><span className="mb-1 block font-bold text-white">Email</span><span className="block text-sm text-white/75">sales@hydronex.com</span></Link>
            <Link href="#" className="group rounded-sm border border-white/20 bg-white/10 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/45 hover:bg-white/18"><span className="mb-3 inline-flex rounded-full bg-white/15 p-3 text-white transition-transform duration-300 group-hover:scale-110"><MapPin size={21} /></span><span className="mb-1 block font-bold text-white">Visit Us</span><span className="block text-sm text-white/75">1234 Industrial Ave, City, ST</span></Link>
          </div>
        }
      />
    </div>
  )
}
