import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { LandingProductFooter } from "@/components/landing-product-chrome"
import Topography from "@/components/topography"
import { hydraulicCylinderCategories } from "@/lib/hydraulic-cylinders"

export const metadata: Metadata = {
  title: "Hydraulic Cylinders | Hydronex",
  description: "Explore Hydronex single acting and double acting hydraulic cylinders.",
}

function CylinderFamilyCard({ category, index }: { category: (typeof hydraulicCylinderCategories)[number]; index: number }) {
  return (
    <Link href={`/products/hydraulic-cylinders/${category.slug}`} className="group relative block min-h-[350px] overflow-hidden rounded-[1.5rem] bg-[#293e57] transition-transform duration-500 hover:-translate-y-1">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_25%,rgba(255,255,255,0.23),transparent_34%)]" />
      <div className="absolute inset-x-0 top-0 h-[61%] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent)]" />
      <span className="absolute left-5 top-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/75"><span className="h-1.5 w-1.5 rounded-full bg-[#f26522] shadow-[0_0_10px_rgba(242,101,34,0.9)]" />{String(index + 1).padStart(2, "0")} / {category.code}</span>
      <div className="pointer-events-none absolute left-1/2 top-[43%] h-[55%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-[40%] bg-white/10 blur-3xl transition-opacity duration-500 group-hover:bg-white/20" />
      <img src={category.image} alt="" className="absolute left-1/2 top-[43%] h-[55%] w-[76%] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_24px_22px_rgba(0,0,0,0.56)] transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-3" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/72 to-transparent px-5 pb-5 pt-20 text-white"><div className="flex items-end justify-between gap-4"><h2 className="max-w-[15rem] font-heading text-2xl font-extrabold uppercase leading-[0.92] tracking-[-0.045em] text-white sm:text-3xl">{category.name}</h2><span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white text-[#171717] transition-[width,background-color,color] duration-500 group-hover:w-28 group-hover:bg-[#f26522] group-hover:text-white"><ArrowRight size={16} className="shrink-0 transition-transform duration-500 group-hover:-rotate-45" /><span className="w-0 overflow-hidden whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.1em] opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:w-14 group-hover:opacity-100">Explore</span></span></div></div>
    </Link>
  )
}

export default function HydraulicCylindersPage() {
  const featuredCategory = hydraulicCylinderCategories[0]
  const highlights = [["02", "cylinder types"], ["Single", "acting"], ["Double", "acting"]]

  return (
    <main className="min-h-screen overflow-hidden bg-[#efefef] text-[#171717]" style={{ fontFamily: "Arial, Helvetica, system-ui, sans-serif" }}>
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#f7f8f6] via-[#fbfcfa] to-white">
        <div className="pointer-events-none absolute inset-0 z-0" style={{ maskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.78) 42%, rgba(0,0,0,0.28) 78%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.78) 42%, rgba(0,0,0,0.28) 78%, transparent 100%)" }}><Topography className="h-full w-full" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={2.65} thickness={0.018} glow={0.22} opacity={0.1} mouseRadius={0.24} mouseStrength={0.34} /></div>
        <section className="relative flex min-h-[calc(100svh-88px)] flex-col overflow-hidden bg-transparent px-3 pb-3 pt-10 sm:px-5 sm:pt-14 lg:px-8">
          <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-none flex-1 flex-col">
            <h1 className="whitespace-nowrap text-center font-heading text-[#143126]" style={{ fontSize: "clamp(1.55rem, 4.7vw, 5.2rem)", fontWeight: 800, letterSpacing: "-0.07em", lineHeight: 0.9 }}>HYDRAULIC CYLINDERS</h1>
            <div className="relative mt-8 flex min-h-[430px] flex-1 sm:mt-10"><div className="relative h-full min-h-[430px] flex-1 overflow-hidden rounded-[1.8rem] bg-[#0b3539] shadow-[0_22px_60px_rgba(2,16,27,0.22)] sm:min-h-[540px] sm:rounded-[2.25rem] lg:min-h-[max(620px,calc(100svh-300px))]"><video autoPlay muted loop playsInline preload="auto" className="pointer-events-none absolute inset-0 h-full w-full object-cover" aria-label="Hydronex hydraulic cylinders"><source src="/videos/hydraulic-fittings-hero.mp4" type="video/mp4" /></video><div className="absolute inset-0 bg-[#0b3539]/35" />
              <div className="absolute right-5 top-6 z-20 flex w-[min(21.5rem,calc(100%-2.5rem))] sm:right-8 sm:top-8 lg:left-1/2 lg:right-auto lg:top-[clamp(2rem,8vh,5.5rem)] lg:w-auto lg:-translate-x-1/2 lg:gap-5">
                <aside className="relative hidden h-[360px] w-[min(30rem,calc((100vw-6rem)/2))] overflow-hidden rounded-[1.8rem] border border-white/35 bg-black/25 p-7 shadow-[0_22px_60px_rgba(2,16,27,0.36)] backdrop-blur-md lg:block"><div className="pointer-events-none absolute inset-0 bg-[linear-gradient(132deg,rgba(255,255,255,0.2),transparent_40%,rgba(255,255,255,0.05))]" /><div className="relative z-10"><p className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/70"><span className="h-1.5 w-1.5 rounded-full bg-[#f1854a] shadow-[0_0_10px_rgba(241,133,74,0.9)]" />Hydraulic cylinders</p><h2 className="mt-4 max-w-[17ch] text-[1.75rem] font-semibold leading-[0.98] tracking-[-0.045em] text-white">Linear force for every hydraulic movement.</h2><div className="mt-7 grid grid-cols-3 border-y border-white/25 py-3 text-center">{highlights.map(([value, label]) => <div key={value} className="border-l border-white/15 px-2 first:border-l-0"><p className="text-base font-extrabold tracking-[-0.04em] text-[#8ae6dc]">{value}</p><p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/55">{label}</p></div>)}</div></div></aside>
                <Link href={`/products/hydraulic-cylinders/${featuredCategory.slug}`} className="group relative w-full overflow-hidden rounded-[1.8rem] border border-white/35 bg-black/25 p-3.5 shadow-[0_22px_60px_rgba(2,16,27,0.36)] backdrop-blur-md transition-transform duration-500 hover:-translate-y-1 sm:p-4 lg:h-[360px] lg:w-[min(30rem,calc((100vw-6rem)/2))] lg:p-6"><div className="pointer-events-none absolute inset-0 bg-[linear-gradient(112deg,rgba(255,255,255,0.22),transparent_30%,transparent_70%,rgba(255,255,255,0.05))]" /><div className="relative flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.18em] text-white/70"><span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#f1854a] shadow-[0_0_10px_rgba(241,133,74,0.9)]" />Featured category</span><span className="rounded-full border border-white/20 bg-white/10 px-2 py-1 text-white/80">{featuredCategory.code}</span></div><div className="relative mt-4 h-[142px] overflow-hidden rounded-[1.1rem] border border-white/20 bg-black/15 lg:h-[188px]"><div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:24px_24px]" /><img src={featuredCategory.image} alt={featuredCategory.name} className="relative z-10 h-full w-full object-contain p-3 drop-shadow-[0_8px_14px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:scale-[1.15]" /></div><div className="relative z-10 mt-4 flex items-end justify-between gap-4"><p className="text-[1.2rem] font-semibold leading-tight tracking-[-0.025em] text-white">{featuredCategory.name}</p><ArrowRight size={17} className="shrink-0 text-white transition-transform duration-500 group-hover:-rotate-45" /></div></Link>
              </div>
              <div className="absolute inset-x-0 bottom-0 z-10 h-[220px] sm:h-[184px] lg:h-[170px]"><div className="absolute inset-x-0 bottom-0 h-[162px] bg-[#f7f8f6] sm:h-[136px] lg:h-[122px]" /><svg className="absolute inset-0 hidden h-full w-full sm:block" viewBox="0 0 1440 170" preserveAspectRatio="none"><path fill="white" d="M0 160V12Q0 0 12 0H155C164 0 172 4 179 11L209 38C215 44 222 48 231 48H1430Q1440 48 1440 58V160Q1440 170 1430 170H10Q0 170 0 160Z" /></svg><div className="relative z-10 grid h-full grid-cols-3 items-end gap-x-3 gap-y-4 px-6 pb-6 pt-[66px] sm:px-10 sm:pb-5 sm:pt-[63px] lg:grid-cols-[1.45fr_repeat(3,minmax(0,1fr))] lg:items-center lg:gap-0 lg:px-12 lg:pb-4 lg:pt-[52px]"><p className="col-span-3 max-w-[360px] text-xl font-semibold leading-[1.04] tracking-[-0.04em] text-[#17372c] sm:text-2xl lg:col-span-1">Hydraulic cylinders for linear power.</p>{highlights.map(([value, label]) => <div key={value} className="border-l border-[#17372c]/10 px-2 text-center first:border-l-0 sm:px-5"><p className="font-heading text-2xl font-extrabold tracking-[-0.05em] text-[#17372c] sm:text-4xl">{value}</p><p className="mt-1 text-[9px] font-semibold leading-tight text-[#61786e] sm:text-[11px]">{label}</p></div>)}</div></div>
            </div></div>
          </div>
        </section>
      </div>
      <section className="relative isolate overflow-hidden bg-white px-5 py-20 sm:px-9 sm:py-28 lg:px-14"><Topography className="pointer-events-none absolute inset-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={2.65} thickness={0.018} glow={0.22} opacity={0.055} mouseRadius={0.24} mouseStrength={0.34} /><div className="relative z-10 mx-auto max-w-[1280px]"><div className="mb-12 flex flex-col gap-5 border-b border-[#143126]/10 pb-8 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#d7521c]">01 / hydraulic cylinder categories</p><h2 className="mt-3 max-w-3xl text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-[#143126]">Hydraulic cylinders for linear power.</h2></div></div><div className="grid gap-4 sm:grid-cols-2">{hydraulicCylinderCategories.map((category, index) => <CylinderFamilyCard key={category.slug} category={category} index={index} />)}</div></div></section>
      <section className="relative overflow-hidden bg-[#f7f7f5] px-5 py-16 sm:px-9 lg:px-14">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#111_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="relative mx-auto max-w-[1280px] rounded-2xl border border-[#143126]/10 border-l-4 border-l-[#f26522] bg-white/80 p-6 shadow-[0_12px_30px_rgba(20,49,38,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(20,49,38,0.12)] sm:p-8">
          <p className="max-w-6xl text-base leading-8 text-[#143126]/80">We produce every kind of hydraulic cylinder on request from our customers. Mumbai, Goa, Kolkata, Bengaluru, Pune, Punjab, Haryana, Delhi, Ahmedabad, Gujarat, Telangana, Chennai, Kerala, Lucknow, and numerous other Indian cities and states have always been major consumers of our brand Torque.</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-lg font-bold text-[#143126]">Type of Hydraulic cylinders that we offer:</h2>
              <ul className="mt-5 space-y-2 text-base leading-7 text-[#143126]/80">
                <li>Single Acting</li>
                <li>Double Acting</li>
                <li>Welded type</li>
                <li>Telescopic Cylinders</li>
                <li>Heavy Duty Cylinders</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#143126]">Applications:</h2>
              <p className="mt-5 text-base leading-8 text-[#143126]/80">Construction devices, engineering vehicles, road construction, mining, Car lift, scissor lift, tele gate etc.</p>
            </div>
          </div>
        </div>
      </section>
      <BSPCtaSection title="Let’s specify the right hydraulic cylinder." description="Explore the Hydronex hydraulic cylinder range with our team." buttonLabel="Talk to our team" ctaHref="/contact" />
      <LandingProductFooter />
    </main>
  )
}
