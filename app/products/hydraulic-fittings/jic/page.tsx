import { Metadata } from "next"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductGrid } from "@/components/bsp-product-grid"
import { CategoryLandingHero } from "@/components/category-landing-hero"
import { jicHydraulicFittings } from "@/lib/jic-hydraulic-fittings"

export const metadata: Metadata = {
  title: "JIC Hydraulic Fittings - Joint Industry Council Hydraulic Fittings | Hydronex",
  description: "Hydronex supplies a comprehensive range of JIC hydraulic fittings. High-performance 37-degree flare design with metal-to-metal sealing for demanding hydraulic applications.",
}

const advantages = [
  ["High-Pressure Resistance:", "JIC fittings are designed to withstand high pressure, making them ideal for demanding hydraulic applications."],
  ["Reusability:", "One of their standout features is their reusability, offering long-term value."],
  ["Leak-Proof:", "The 37-degree flare design minimizes the risk of leaks, ensuring a secure connection."],
]

const disadvantages = [
  ["Cost Considerations:", "While JIC fittings offer many advantages, they may be more expensive than other types of fittings."],
  ["Limited Compatibility:", "These fittings are not universally compatible with other thread types, which may limit their application in certain systems."],
]

export default function JICFittingsPage() {
  const jicProducts = jicHydraulicFittings.map((product) => ({ id: 70000 + product.id, name: product.name, code: product.code, image: product.image, slug: product.slug }))

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b" style={{ background: "#f8fafc", borderColor: "rgba(210,225,240,0.7)" }} aria-label="Breadcrumb">
        <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8"><ol className="flex flex-wrap items-center gap-0"><li><Link href="/" className="text-[11.5px] font-semibold uppercase tracking-wide text-[#0f2040] transition-colors hover:text-[#e05a2e]">Home</Link></li><li className="mx-2.5 text-[#94aabf]" aria-hidden>/</li><li><Link href="/products" className="text-[11.5px] font-medium uppercase tracking-wide text-[#2a4a70] transition-colors hover:text-[#e05a2e]">Products</Link></li><li className="mx-2.5 text-[#94aabf]" aria-hidden>/</li><li><Link href="/products" className="text-[11.5px] font-medium uppercase tracking-wide text-[#4a6a90] transition-colors hover:text-[#e05a2e]">Hydraulic Fittings</Link></li><li className="mx-2.5 text-[#94aabf]" aria-hidden>/</li><li className="flex items-center gap-1.5" aria-current="page"><span className="h-1.5 w-1.5 rounded-full bg-[#e05a2e]" /><span className="text-[11.5px] font-bold uppercase tracking-wide text-[#e05a2e]">JIC Hydraulic Fittings</span></li></ol></div>
      </nav>

      <CategoryLandingHero category="JIC Standard" title="JIC Hydraulic Fittings" description="High-performance 37-degree flare design with metal-to-metal sealing for demanding hydraulic applications." ctaHref="/products" />

      <section className="bg-anim-section-dots border-b border-[#d0e4f5]/40" style={{ background: "linear-gradient(180deg, #deeefa 0%, #eaf4fc 18%, #f4faff 45%, #fafcff 72%, #ffffff 100%)" }}>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#e05a2e]">Hydraulic Fittings / JIC Standard</p>
            <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-[-0.02em] text-[#0f2040] sm:text-4xl">JIC Hydraulic Fittings<span className="mt-0.5 block text-2xl font-semibold tracking-[-0.01em] text-[#1a5fa8] sm:text-3xl">37-Degree Flare Design with Metal-to-Metal Sealing</span></h2>
            <div className="mb-6 flex items-center gap-3"><span className="h-[3px] w-10 rounded-full bg-[#e05a2e]" /><span className="h-[3px] w-4 rounded-full bg-[#1a5fa8]/40" /></div>
            <h3 className="mb-4 text-xl font-bold text-[#0f2040]">What are JIC Fittings?</h3>
            <p className="mb-4 text-sm leading-relaxed text-[#2a4a70]/80 sm:text-base">JIC (Joint Industry Council) fittings originated from the AN (Army-Navy) fittings developed for aviation applications during World War II. The JIC standard was subsequently developed to simplify manufacturing processes and reduce costs. These fittings conform to SAE J518 and ISO 6149-2 standards, are a reliable choice for various industries.</p>
            <p className="mb-4 text-sm leading-relaxed text-[#2a4a70]/80 sm:text-base">JIC fittings feature a 37-degree flare and utilize a metal-to-metal sealing mechanism, providing a secure mechanical connection. JIC fittings do not require additional sealants to achieve a leak-proof seal. JIC fittings are available in a variety of sizes and conform to 2A/2B thread fit standards.</p>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div><h4 className="mb-3 text-sm font-bold text-[#0f2040]">Advantages</h4><ul className="space-y-2 text-sm text-[#2a4a70]/80">{advantages.map(([heading, text]) => <li key={heading} className="flex gap-2"><span className="font-bold text-[#e05a2e]">•</span><span><strong>{heading}</strong> {text}</span></li>)}</ul></div>
              <div><h4 className="mb-3 text-sm font-bold text-[#0f2040]">Disadvantages</h4><ul className="space-y-2 text-sm text-[#2a4a70]/80">{disadvantages.map(([heading, text]) => <li key={heading} className="flex gap-2"><span className="font-bold text-[#e05a2e]">•</span><span><strong>{heading}</strong> {text}</span></li>)}</ul></div>
            </div>
          </div>
          <BSPProductGrid products={jicProducts} basePath="/products/hydraulic-fittings/jic" categoryLabel="JIC Hydraulic Fittings" searchScope="JIC Hydraulic Fittings" />
        </div>
      </section>

      <BSPCtaSection
        title="Connect with Our JIC Experts"
        description="Hydronex specializes in high-quality JIC hydraulic fittings for North American applications. Contact us today for quotes, technical support, or bulk orders."
        buttonLabel="Get Your Quote Today"
        supplementaryContent={<div className="grid grid-cols-1 gap-5 sm:grid-cols-3"><Link href="tel:+1-555-0123" className="group rounded-sm border border-white/20 bg-white/10 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/45 hover:bg-white/18"><span className="mb-3 inline-flex rounded-full bg-white/15 p-3 text-white transition-transform duration-300 group-hover:scale-110"><Phone size={21} /></span><span className="mb-1 block font-bold text-white">Call Us</span><span className="block text-sm text-white/75">+1 (555) 012-3456</span></Link><Link href="mailto:sales@hydronex.com" className="group rounded-sm border border-white/20 bg-white/10 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/45 hover:bg-white/18"><span className="mb-3 inline-flex rounded-full bg-white/15 p-3 text-white transition-transform duration-300 group-hover:scale-110"><Mail size={21} /></span><span className="mb-1 block font-bold text-white">Email</span><span className="block text-sm text-white/75">sales@hydronex.com</span></Link><Link href="#" className="group rounded-sm border border-white/20 bg-white/10 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/45 hover:bg-white/18"><span className="mb-3 inline-flex rounded-full bg-white/15 p-3 text-white transition-transform duration-300 group-hover:scale-110"><MapPin size={21} /></span><span className="mb-1 block font-bold text-white">Visit Us</span><span className="block text-sm text-white/75">1234 Industrial Ave, City, ST</span></Link></div>}
      />
    </div>
  )
}
