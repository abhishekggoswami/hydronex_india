import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { LandingProductFooter, LandingProductNavbar } from "@/components/landing-product-chrome"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import Topography from "@/components/topography"
import StrokeText from "@/components/StrokeText"

export const metadata: Metadata = {
  title: "About Hydronex | Built to Move Power",
  description: "Discover Hydronex, established in 2026 to supply dependable hydraulic hoses, fittings, couplings and fluid-power support.",
}

const productAreas = [
  ["Hydraulic hoses", "Pressure-ready hose solutions for mobile equipment, industrial systems and demanding fluid-transfer applications."],
  ["Fittings & adapters", "A practical range of BSP, JIC, NPT, metric and specialised fitting solutions for secure, compatible connections."],
  ["Couplings & accessories", "Quick-release couplings, adaptors and supporting components that complete fluid-power systems with confidence."],
]

const commitments = [
  "A considered product range that makes selection clearer.",
  "Technical support grounded in real application requirements.",
  "Responsive service for one-off needs, replacement parts and bulk orders.",
]

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#efefef] text-[#171717]" style={{ fontFamily: "Arial, Helvetica, system-ui, sans-serif" }}>
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#f7f8f6] via-[#fbfcfa] to-white">
        <div className="pointer-events-none absolute inset-0 z-0" style={{ maskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.78) 42%, rgba(0,0,0,0.28) 78%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.78) 42%, rgba(0,0,0,0.28) 78%, transparent 100%)" }}>
          <Topography className="h-full w-full" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={2.65} thickness={0.018} glow={0.22} opacity={0.1} mouseRadius={0.24} mouseStrength={0.34} />
        </div>

        <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-transparent pb-2 sm:pb-3">
          <LandingProductNavbar />
          <div className="relative z-10 mx-auto flex w-full max-w-none min-h-0 flex-1 flex-col px-2 pt-12 sm:px-3 sm:pt-16 lg:px-4">
            <div className="mx-auto w-full max-w-[1700px] px-2 sm:px-4" aria-label="About Hydronex">
              <StrokeText text="BUILT TO MOVE POWER" strokeColor="#f26522" fillColor="#143126" strokeWidth={1.4} drawDuration={1.6} fillDelay={0.2} stagger={0.05} ease="power2.out" trigger="mount" fillMode="wipe" fontSize={112} fontWeight={800} letterSpacing={-7} className="font-heading" style={{ fontFamily: "var(--font-heading)", lineHeight: 0.9 }} />
            </div>

            <div className="relative mt-8 flex min-h-[430px] flex-1 sm:mt-10">
              <div className="relative h-full min-h-[430px] flex-1 overflow-hidden rounded-[1.75rem] bg-[#7da9a9] sm:min-h-[540px] sm:rounded-[2.25rem] lg:min-h-[max(620px,calc(100svh-300px))]">
                <video autoPlay muted loop playsInline preload="auto" className="pointer-events-none absolute inset-0 h-full w-full object-cover" aria-label="Hydronex at work"><source src="/videos/hydronex-about.mp4" type="video/mp4" /></video>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b2722]/55 via-transparent to-[#0b2722]/10" />
                <div className="absolute inset-x-0 bottom-0 z-10 h-[220px] sm:h-[184px] lg:h-[170px]">
                  <div className="absolute inset-x-0 bottom-0 h-[162px] bg-[#f7f8f6] sm:h-[136px] lg:h-[122px]" aria-hidden="true" />
                  <svg className="absolute inset-0 hidden h-full w-full sm:block" viewBox="0 0 1440 170" preserveAspectRatio="none" aria-hidden="true"><path fill="white" stroke="none" d="M0 160V12Q0 0 12 0H155C164 0 172 4 179 11L209 38C215 44 222 48 231 48H1430Q1440 48 1440 58V160Q1440 170 1430 170H10Q0 170 0 160Z" /></svg>
                  <svg className="absolute inset-0 h-full w-full sm:hidden" viewBox="0 0 1000 220" preserveAspectRatio="none" aria-hidden="true"><path fill="white" stroke="none" d="M0 202V18Q0 0 30 0H270C288 0 301 8 315 22L342 43C350 51 360 58 375 58H970Q1000 58 1000 76V202Q1000 220 970 220H30Q0 220 0 202Z" /></svg>
                  <p className="absolute left-8 top-3 z-10 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5f756c] sm:left-10 sm:top-3">Hydronex / established 2026</p>
                  <div className="relative z-10 grid h-full grid-cols-3 items-end gap-x-3 gap-y-4 px-6 pb-6 pt-[66px] sm:px-10 sm:pb-5 sm:pt-[63px] lg:grid-cols-[1.45fr_repeat(3,minmax(0,1fr))] lg:items-center lg:gap-0 lg:px-12 lg:pb-4 lg:pt-[52px]">
                    <p className="col-span-3 max-w-[350px] text-xl font-semibold leading-[1.04] tracking-[-0.04em] text-[#17372c] sm:text-2xl lg:col-span-1">Dependable fluid-power products for every connection.</p>
                    {[['2026', 'established'], ['50+', 'product categories'], ['24/7', 'technical support']].map(([value, label]) => <div key={value} className="border-l border-[#17372c]/10 px-2 text-center first:border-l-0 sm:px-5"><p className="font-heading text-2xl font-extrabold tracking-[-0.05em] text-[#17372c] sm:text-4xl">{value}</p><p className="mt-1 text-[9px] font-semibold leading-tight text-[#61786e] sm:text-[11px]">{label}</p></div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="relative isolate overflow-hidden bg-white px-5 py-24 sm:px-9 sm:py-32 lg:px-14">
        <Topography className="pointer-events-none absolute inset-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={2.65} thickness={0.018} glow={0.22} opacity={0.065} mouseRadius={0.24} mouseStrength={0.34} />
        <div className="relative z-10 mx-auto max-w-[1180px]">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#d7521c]">Our story</p><h1 className="mt-5 max-w-[10ch] text-[clamp(3rem,5.7vw,6rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-[#143126]">A clearer way to source hydraulic power.</h1></div>
            <div className="max-w-2xl pt-2 text-base leading-8 text-[#143126]/70 sm:text-lg"><p>Established in 2026, Hydronex was created around a simple idea: the right hydraulic connection should be easier to specify, source and trust. We bring together the hoses, fittings, couplings and accessories that keep industrial, mobile and fluid-transfer systems moving.</p><p className="mt-6">Our range is shaped for the realities of day-to-day engineering work. Whether you are replacing a critical hose assembly, planning a new installation or keeping a fleet productive, we help turn an application requirement into a practical, compatible product choice.</p><p className="mt-6">From our base in Uran, Raigad, we pair responsive service with a growing catalogue of dependable products—so teams can spend less time navigating parts and more time getting work done.</p><Link href="/contact" className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#0b1f37] py-2.5 pl-5 pr-2 text-sm font-bold text-white transition-colors hover:bg-[#f26522]"><span>Talk to Hydronex</span><span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0b1f37]"><ArrowRight size={14} className="transition-transform group-hover:-rotate-45" /></span></Link></div>
          </div>

          <div className="mt-20 grid gap-4 md:grid-cols-3">
            {productAreas.map(([title, text], index) => <article key={title} className="rounded-[1.35rem] border border-[#143126]/10 bg-white/65 p-6 shadow-[0_14px_35px_rgba(20,49,38,0.06)] backdrop-blur-xl"><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#f26522]">0{index + 1}</p><h2 className="mt-5 text-2xl font-semibold tracking-[-0.05em] text-[#143126]">{title}</h2><p className="mt-4 text-sm leading-6 text-[#143126]/65">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0b1f37] px-5 py-24 text-white sm:px-9 sm:py-32 lg:px-14">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:24px_24px]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24"><div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#ff9b6d]">How we work</p><h2 className="mt-5 max-w-[10ch] text-[clamp(3rem,5.7vw,6rem)] font-semibold leading-[0.9] tracking-[-0.075em]">Support that stays practical.</h2></div><div className="pt-2"><p className="max-w-2xl text-base leading-8 text-white/70 sm:text-lg">Hydronex is built to be a reliable point of contact when system requirements are specific, timelines are tight and compatibility matters. We listen first, then recommend with clarity.</p><div className="mt-8 grid gap-4">{commitments.map((commitment) => <div key={commitment} className="flex gap-4 rounded-xl border border-white/15 bg-white/[0.07] p-4 text-sm font-semibold leading-6 text-white/85"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#ff9b6d]" />{commitment}</div>)}</div></div></div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#f7f8f6] px-5 py-24 sm:px-9 sm:py-32 lg:px-14">
        <Topography className="pointer-events-none absolute inset-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={2.65} thickness={0.018} glow={0.22} opacity={0.055} mouseRadius={0.24} mouseStrength={0.34} />
        <div className="relative z-10 mx-auto max-w-[1180px]">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#d7521c]">Built around the job</p><h2 className="mt-5 max-w-[11ch] text-[clamp(3rem,5.7vw,6rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-[#143126]">From first question to the right connection.</h2></div>
            <div className="max-w-2xl pt-2 text-base leading-8 text-[#143126]/70 sm:text-lg"><p>Every hydraulic system has its own operating conditions, pressure demands and space constraints. That is why our work begins with the application—not simply a part number.</p><p className="mt-6">We help customers translate their requirement into a sensible product path, whether that means identifying a compatible thread type, sourcing a replacement coupling or building a wider fluid-power bill of materials. Clear advice, transparent communication and a dependable range are the foundations of that process.</p><p className="mt-6">As Hydronex grows, our aim remains straightforward: make reliable connections easier to put to work.</p></div>
          </div>
          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {[['01', 'Start with the application', 'Share the system, connection or performance requirement so we can focus the conversation on what matters.'], ['02', 'Select with clarity', 'We help narrow the range through thread standards, hose compatibility, sealing requirements and working conditions.'], ['03', 'Keep moving with support', 'From technical questions to repeat orders, our team remains available when you need the next answer.']].map(([number, title, text]) => <div key={number} className="rounded-[1.35rem] border border-[#143126]/10 bg-white/65 p-6 shadow-[0_14px_35px_rgba(20,49,38,0.06)] backdrop-blur-xl"><p className="text-[10px] font-bold tracking-[0.16em] text-[#f26522]">{number}</p><h3 className="mt-5 text-2xl font-semibold tracking-[-0.05em] text-[#143126]">{title}</h3><p className="mt-4 text-sm leading-6 text-[#143126]/65">{text}</p></div>)}
          </div>
        </div>
      </section>

      <BSPCtaSection />

      <LandingProductFooter />
    </main>
  )
}
