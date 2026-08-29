import { Metadata } from "next"
import Link from "next/link"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductGrid } from "@/components/bsp-product-grid"
import { CategoryLandingHero } from "@/components/category-landing-hero"
import { banjoFittings } from "@/lib/banjo-fittings"

export const metadata: Metadata = {
  title: "Banjo Fittings - Compact Hydraulic Connections | Hydronex",
  description:
    "Hydronex supplies a wide range of banjo fittings with compact design and reliable performance. High-quality construction available in BSP and metric standards for demanding hydraulic applications.",
}

export default function BanjoFittingsPage() {
  const products = banjoFittings.map((product) => ({
    id: 100000 + product.id,
    name: product.name,
    code: product.code,
    image: product.image,
    slug: product.slug,
  }))

  return (
    <div className="min-h-screen bg-white">
      <nav
        className="border-b"
        style={{ background: "#f8fafc", borderColor: "rgba(210,225,240,0.7)" }}
        aria-label="Breadcrumb"
      >
        <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-0">
            <li><Link href="/" className="text-[11.5px] font-semibold uppercase tracking-wide text-[#0f2040] transition-colors hover:text-[#e05a2e]">Home</Link></li>
            <li className="mx-2.5 text-[#94aabf]" aria-hidden>/</li>
            <li><Link href="/products" className="text-[11.5px] font-medium uppercase tracking-wide text-[#2a4a70] transition-colors hover:text-[#e05a2e]">Products</Link></li>
            <li className="mx-2.5 text-[#94aabf]" aria-hidden>/</li>
            <li><Link href="/products" className="text-[11.5px] font-medium uppercase tracking-wide text-[#4a6a90] transition-colors hover:text-[#e05a2e]">Hydraulic Fittings</Link></li>
            <li className="mx-2.5 text-[#94aabf]" aria-hidden>/</li>
            <li className="flex items-center gap-1.5" aria-current="page"><span className="h-1.5 w-1.5 rounded-full bg-[#e05a2e]"/><span className="text-[11.5px] font-bold uppercase tracking-wide text-[#e05a2e]">Banjo Fittings</span></li>
          </ol>
        </div>
      </nav>

      <CategoryLandingHero
        category="Compact Hydraulic Solutions"
        title="Banjo Fittings - Compact & Efficient"
        description="Hydronex supplies a comprehensive range of banjo fittings featuring compact design and reliable performance. Our banjo fittings are engineered with precision for efficient hydraulic connections in both BSP and metric standards, delivering leak-free performance across demanding industrial and hydraulic applications."
        ctaHref="/products"
      />

      <section
        className="bg-anim-section-dots border-b border-[#d0e4f5]/40"
        style={{ background: "linear-gradient(180deg, #deeefa 0%, #eaf4fc 18%, #f4faff 45%, #fafcff 72%, #ffffff 100%)" }}
      >
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[.18em] text-[#e05a2e]">Hydraulic Fittings / Banjo</p>
            <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-[-.02em] text-[#0f2040] sm:text-4xl">Compact Hydraulic<span className="mt-0.5 block text-2xl font-semibold text-[#1a5fa8] sm:text-3xl">Banjo Fittings</span></h2>
            <div className="mb-6 flex items-center gap-3"><span className="h-[3px] w-10 rounded-full bg-[#e05a2e]"/><span className="h-[3px] w-4 rounded-full bg-[#1a5fa8]/40"/></div>
            <p className="text-sm leading-relaxed text-[#2a4a70]/80 sm:text-base">Hydronex supplies a comprehensive range of banjo fittings engineered for compact, efficient hydraulic connections. These specialized fittings combine precision manufacturing with reliable performance, available in both BSP and metric standards to meet diverse industrial application requirements.</p>
          </div>
          <BSPProductGrid products={products} basePath="/products/hydraulic-fittings/banjo-fittings" categoryLabel="Banjo Fittings" searchScope="Banjo Fittings" />
        </div>
      </section>

      <section className="border-b border-[#d0e4f5]/40 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-[#1a5fa8] sm:text-3xl">What is banjo fitting</h2>
          <div className="space-y-4 leading-relaxed text-[#2a4a70]/85">
            <p>Banjo fittings, characterized by their unique circular shape and hollow bolt, are indispensable components in hydraulic and pneumatic systems. Their ability to rotate 360 degrees makes them ideal for applications where space is limited and flexible connections are required. Banjo fittings are commonly used in hydraulic and pneumatic systems, finding applications in areas such as automotive brake lines, fuel systems, industrial machinery, and medical equipment.</p>
            <p>Banjo fittings derive their name from their unique shape, resembling a banjo, with a round body and a bolt passing through its center. These fittings are particularly crucial in situations where space constraints and flexibility are important, enabling secure and flexible connections.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d0e4f5]/40 bg-[#f8fafc]/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-[#1a5fa8] sm:text-3xl">Banjo Fitting Design</h2>
          <p className="mb-8 leading-relaxed text-[#2a4a70]/85">The banjo fitting design is clever yet simple, and highly efficient, consisting of several key components that work together to ensure optimal performance:</p>
          <div className="space-y-6 text-[#2a4a70]/85">
            <div><h3 className="mb-2 font-bold text-[#0f2040]">Body:</h3><p className="leading-relaxed">The body of the banjo fitting is typically round with a hollow cylindrical shape. It features inlet and outlet ports for fluid flow, usually connecting to hoses or pipes. The body is designed to house the bolt, allowing fluid to pass through while maintaining a secure connection.</p></div>
            <div><h3 className="mb-2 font-bold text-[#0f2040]">Bolt:</h3><p className="leading-relaxed">The bolt is a crucial component that passes through the center of the fitting body. It is usually hollow, allowing fluid to flow through its center. The bolt has a threaded end that allows it to be secured and tightened to the fitting. Holes in the bolt shaft allow fluid to enter and exit the fitting body, ensuring continuous flow.</p></div>
            <div><h3 className="mb-2 font-bold text-[#0f2040]">Eyelet:</h3><p className="leading-relaxed">The eyelet, or the angular part of the fitting body, surrounds the bolt. It allows the bolt to be secured within the fitting while providing an opening for fluid flow. The eyelet&apos;s design ensures that the fitting can be tightened without restricting fluid flow.</p></div>
            <div><h3 className="mb-2 font-bold text-[#0f2040]">Seals (O-rings):</h3><p className="leading-relaxed">To prevent leaks and ensure a secure connection, banjo fittings are equipped with seals, typically made of rubber or synthetic materials. These O-rings fit snugly against the bolt and the inside of the fitting body, creating a tight seal that prevents fluid leakage and contaminants from entering the system.</p></div>
          </div>
        </div>
      </section>

      <BSPCtaSection
        title="Need Banjo Fitting Solutions?"
        description="Contact our experts for tailored solutions, bulk orders and technical support."
        buttonLabel="Get A Quote"
      />
    </div>
  )
}
