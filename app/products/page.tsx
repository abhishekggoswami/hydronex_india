import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { LandingProductFooter, LandingProductNavbar } from "@/components/landing-product-chrome"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import Topography from "@/components/topography"
import StrokeText from "@/components/StrokeText"

export const metadata: Metadata = {
  title: "Hydraulic Products & Categories | Hydronex",
  description: "Explore Hydronex hydraulic hoses, fittings, adapters, couplings and fluid-power products, supported by clear technical guidance.",
}

const categories = [
  { name: "Hydraulic Hoses", href: "/products/hydraulic-hoses", image: "/images/hydraulic-hoses/sae-100-r1.png", label: "Pressure systems", color: "#123556" },
  { name: "Spiral Hoses", href: "/products/spiral-hoses", image: "/images/spiral-hoses/sae-100-r15-performance.png", label: "High pressure", color: "#30414b" },
  { name: "Industrial Hoses", href: "/products/industrial-hoses", image: "/images/industrial-hoses/airwater-hose-is-446-type-1.png", label: "Industrial flow", color: "#4a372e" },
  { name: "High Temperature Hoses", href: "/products/high-temperature-hoses", image: "/images/high-temperature-hoses/exceed-sae-100-r1-at-type-s.png", label: "Thermal performance", color: "#563534" },
  { name: "S.S. Corrugated & Teflon Hoses", href: "/products/ss-corrugated-teflon-hoses", image: "/images/ss-corrugated-teflon-hoses/ss-corrugated-flexible-hoses.png", label: "Specialty materials", color: "#33414a", imageClass: "bottom-[24%] left-0 h-[78%] w-full translate-x-0 translate-y-0 object-left-bottom" },
  { name: "Low Pressure Hoses", href: "/products/low-pressure-hoses", image: "/images/low-pressure-hoses/pvc-braided-hose.png", label: "Flexible transfer", color: "#304a40", imageClass: "bottom-[24%] left-0 h-[78%] w-full translate-x-0 translate-y-0 object-left-bottom" },
  { name: "Special Application Hoses", href: "/products/special-application-hoses", image: "/images/special-application-hoses/steam-hose-type-3-double-wire-braided.png", label: "Application specific", color: "#493c55", imageClass: "bottom-[21%] left-0 h-[86%] w-[110%] translate-x-0 translate-y-0 object-left-bottom" },
  { name: "Hydraulic Accessories", href: "/products/hydraulic-accessories", image: "/images/hydraulic-accessories/hydraulic-gear-pump.png", label: "System support", color: "#493f31" },
  { name: "Hydraulic Hose End Fittings", href: "/products/hydraulic-hose-end-fittings", image: "/images/hydraulic-hose-end-fittings/hose-fittings.png", label: "Hose connections", color: "#3b4551", imageClass: "left-0 top-[12%] h-[54%] w-full translate-x-0 translate-y-0 object-left-center" },
  { name: "Hydraulic Fittings", href: "/products/hydraulic-fittings/british-bsp", image: "/images/hydraulic-fittings/bsp-male-60-cone-seat-seal-12611.png", label: "Precision fittings", color: "#293e57" },
  { name: "Hydraulic Adapters", href: "/products/hydraulic-adapters", image: "/images/hydraulic-fittings/npt-fitting.png", label: "System adapters", color: "#4e3a2f" },
  { name: "Hydraulic Quick Couplings", href: "/products/hydraulic-quick-couplings", image: "/images/hydraulic-quick-couplings/kzeb-steel-ball-coupler.png", label: "Fast connection", color: "#263f43" },
]

function ProductCategoryCard({ category, index }: { category: (typeof categories)[number]; index: number }) {
  return (
    <Link href={category.href} className="group relative block min-h-[350px] overflow-hidden rounded-[1.5rem]" style={{ backgroundColor: category.color }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_25%,rgba(255,255,255,0.23),transparent_34%)]" />
      <div className="absolute inset-x-0 top-0 h-[61%] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent)]" />
      <span className="absolute left-5 top-5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/65">{String(index + 1).padStart(2, "0")} / {category.label}</span>
      <img src={category.image} alt="" className={`absolute object-contain drop-shadow-[0_24px_22px_rgba(0,0,0,0.36)] transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-3 ${category.imageClass ?? "left-1/2 top-[47%] h-[56%] w-[76%] -translate-x-1/2 -translate-y-1/2"}`} />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent px-5 pb-5 pt-16 text-white"><div className="flex items-end justify-between gap-4"><h2 className="max-w-[15rem] text-2xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-3xl">{category.name}</h2><span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white text-[#171717] transition-[width,background-color,color] duration-500 group-hover:w-28 group-hover:bg-[#f26522] group-hover:text-white"><ArrowRight size={16} className="shrink-0 transition-transform duration-500 group-hover:-rotate-45" /><span className="w-0 overflow-hidden whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.1em] opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:w-14 group-hover:opacity-100">Explore</span></span></div></div>
    </Link>
  )
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#efefef] text-[#171717]" style={{ fontFamily: "Arial, Helvetica, system-ui, sans-serif" }}>
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#f7f8f6] via-[#fbfcfa] to-white">
        <div className="pointer-events-none absolute inset-0 z-0" style={{ maskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.78) 42%, rgba(0,0,0,0.28) 78%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.78) 42%, rgba(0,0,0,0.28) 78%, transparent 100%)" }}><Topography className="h-full w-full" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={2.65} thickness={0.018} glow={0.22} opacity={0.1} mouseRadius={0.24} mouseStrength={0.34} /></div>
        <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-transparent pb-2 sm:pb-3">
          <LandingProductNavbar />
          <div className="relative z-10 mx-auto flex w-full max-w-none min-h-0 flex-1 flex-col px-2 pt-12 sm:px-3 sm:pt-16 lg:px-4">
            <div className="mx-auto w-full max-w-[1700px] px-2 sm:px-4" aria-label="Hydronex product range"><StrokeText text="PRODUCTS BUILT TO PERFORM" strokeColor="#f26522" fillColor="#143126" strokeWidth={1.4} drawDuration={1.6} fillDelay={0.2} stagger={0.05} ease="power2.out" trigger="mount" fillMode="wipe" fontSize={112} fontWeight={800} letterSpacing={-7} className="font-heading" style={{ fontFamily: "var(--font-heading)", lineHeight: 0.9 }} /></div>
            <div className="relative mt-8 flex min-h-[430px] flex-1 sm:mt-10"><div className="relative h-full min-h-[430px] flex-1 overflow-hidden rounded-[1.75rem] bg-[#7da9a9] sm:min-h-[540px] sm:rounded-[2.25rem] lg:min-h-[max(620px,calc(100svh-300px))]">
              <video autoPlay muted loop playsInline preload="auto" className="pointer-events-none absolute inset-0 h-full w-full object-cover" aria-label="Hydronex product range in production"><source src="/videos/hydronex-products.mp4" type="video/mp4" /></video><div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b2722]/55 via-transparent to-[#0b2722]/10" />
              <div className="absolute inset-x-0 bottom-0 z-10 h-[220px] sm:h-[184px] lg:h-[170px]"><div className="absolute inset-x-0 bottom-0 h-[162px] bg-[#f7f8f6] sm:h-[136px] lg:h-[122px]" aria-hidden="true" /><svg className="absolute inset-0 hidden h-full w-full sm:block" viewBox="0 0 1440 170" preserveAspectRatio="none" aria-hidden="true"><path fill="white" d="M0 160V12Q0 0 12 0H155C164 0 172 4 179 11L209 38C215 44 222 48 231 48H1430Q1440 48 1440 58V160Q1440 170 1430 170H10Q0 170 0 160Z" /></svg><svg className="absolute inset-0 h-full w-full sm:hidden" viewBox="0 0 1000 220" preserveAspectRatio="none" aria-hidden="true"><path fill="white" d="M0 202V18Q0 0 30 0H270C288 0 301 8 315 22L342 43C350 51 360 58 375 58H970Q1000 58 1000 76V202Q1000 220 970 220H30Q0 220 0 202Z" /></svg><p className="absolute left-8 top-3 z-10 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5f756c] sm:left-10 sm:top-3">Hydronex product range</p><div className="relative z-10 grid h-full grid-cols-3 items-end gap-x-3 gap-y-4 px-6 pb-6 pt-[66px] sm:px-10 sm:pb-5 sm:pt-[63px] lg:grid-cols-[1.45fr_repeat(3,minmax(0,1fr))] lg:items-center lg:gap-0 lg:px-12 lg:pb-4 lg:pt-[52px]"><p className="col-span-3 max-w-[360px] text-xl font-semibold leading-[1.04] tracking-[-0.04em] text-[#17372c] sm:text-2xl lg:col-span-1">A complete fluid-power range for every connection.</p>{[["50+", "product categories"], ["Vast", "SKU range"], ["24/7", "technical support"]].map(([value, label]) => <div key={value} className="border-l border-[#17372c]/10 px-2 text-center first:border-l-0 sm:px-5"><p className="font-heading text-2xl font-extrabold tracking-[-0.05em] text-[#17372c] sm:text-4xl">{value}</p><p className="mt-1 text-[9px] font-semibold leading-tight text-[#61786e] sm:text-[11px]">{label}</p></div>)}</div></div>
              </div>
            </div></div>
        </section>
      </div>

      <section className="relative isolate overflow-hidden bg-white px-5 py-20 sm:px-9 sm:py-28 lg:px-14"><Topography className="pointer-events-none absolute inset-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={2.65} thickness={0.018} glow={0.22} opacity={0.055} mouseRadius={0.24} mouseStrength={0.34} /><div className="relative z-10 mx-auto max-w-[1280px]"><div className="mb-12 flex flex-col gap-5 border-b border-[#143126]/10 pb-8 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#d7521c]">01 / product categories</p><h1 className="mt-3 max-w-3xl text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-[#143126]">Depth where your system needs it.</h1></div><p className="max-w-sm text-sm leading-6 text-[#143126]/60">From critical hose assemblies to specialist fittings, adapters and quick couplings, explore a range designed to make selection clearer.</p></div><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{categories.map((category, index) => <ProductCategoryCard key={category.href} category={category} index={index} />)}</div></div></section>

      <BSPCtaSection title="Let’s specify the right connection for your system." description="Tell us what you are building, replacing or improving. Our team will help you move from requirement to the right hydraulic product." buttonLabel="Talk to our team" ctaHref="/contact" />
      <LandingProductFooter />
    </main>
  )
}
