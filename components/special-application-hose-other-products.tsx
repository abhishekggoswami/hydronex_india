"use client"
import { BSPProductCard } from "@/components/bsp-product-card"
import Topography from "@/components/topography"
type Preview = { slug: string; shortName: string; standard: string; image: string }
export function SpecialApplicationHoseOtherProducts({ products }: { products: Preview[] }) {
  if (!products.length) return null
  return <section className="relative isolate overflow-hidden border-b border-[#d0e4f5]/40 bg-white"><Topography className="pointer-events-none absolute inset-0 z-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={3.4} thickness={0.018} glow={0.22} opacity={0.075} mouseRadius={0.24} mouseStrength={0.34} /><div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><h2 className="mb-10 text-3xl font-bold text-[#0e1c35]">Related Hoses</h2><div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">{products.map((hose, index) => <div key={hose.slug} style={{ "--shimmer-delay": `${(index % 5) * 0.9}s` } as React.CSSProperties}><BSPProductCard index={index} basePath="/products/special-application-hoses" categoryLabel="Special Application Hoses" product={{ id: index + 13000, name: hose.shortName, code: hose.standard, image: hose.image, slug: hose.slug }} /></div>)}</div></div></section>
}
