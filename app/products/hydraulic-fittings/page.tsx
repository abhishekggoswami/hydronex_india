import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { LandingProductFooter } from "@/components/landing-product-chrome"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import Topography from "@/components/topography"
import { nptHydraulicFittings } from "@/lib/npt-hydraulic-fittings"
import { americanNPSMFittings } from "@/lib/american-npsm-fittings"
import { jicHydraulicFittings } from "@/lib/jic-hydraulic-fittings"
import { jisFittings } from "@/lib/jis-fittings"
import { orfsHydraulicFittings } from "@/lib/orfs-hydraulic-fittings"
import { banjoFittings } from "@/lib/banjo-fittings"
import { socketlessFittings } from "@/lib/socketless-fittings"
import { reusableHoseFittings } from "@/lib/reusable-hose-fittings"
import { ferrules } from "@/lib/ferrules"

export const metadata: Metadata = {
  title: "Hydraulic Fittings | Hydronex",
  description:
    "Explore Hydronex hydraulic fittings, including British BSP, NPT, NPSM, JIC, JIS, ORFS, banjo, socketless, reusable hose fittings, and ferrules.",
}

const fittingFamilies = [
  { name: "British BSP Fittings", href: "/products/hydraulic-fittings/british-bsp", image: "/images/hydraulic-fittings/bsp-male-60-cone-seat-seal-12611.png", label: "BSPP / BSPT", color: "#293e57", description: "British Standard Pipe fittings with parallel and tapered thread options." },
  { name: "NPT Hydraulic Fittings", href: "/products/hydraulic-fittings/npt", image: nptHydraulicFittings[0].image, label: "NPT", color: "#30414b", description: "National Pipe Thread fittings for reliable North American hydraulic connections." },
  { name: "American NPSM Fittings", href: "/products/hydraulic-fittings/american-npsm", image: americanNPSMFittings[0].image, label: "NPSM", color: "#39475c", description: "Straight-thread fittings with a precision 60° cone seat seal." },
  { name: "JIC Hydraulic Fittings", href: "/products/hydraulic-fittings/jic", image: jicHydraulicFittings[0].image, label: "JIC 37°", color: "#453c52", description: "37-degree flare fittings for high-performance hydraulic systems." },
  { name: "JIS Fittings", href: "/products/hydraulic-fittings/jis-fittings", image: jisFittings[0].image, label: "JIS", color: "#304a40", description: "Japanese Industrial Standard fittings for compatible hydraulic assemblies." },
  { name: "ORFS Hydraulic Fittings", href: "/products/hydraulic-fittings/orfs", image: orfsHydraulicFittings[0].image, label: "ORFS", color: "#263f43", description: "O-ring face seal fittings designed for secure, leak-resistant connections." },
  { name: "Banjo Fittings", href: "/products/hydraulic-fittings/banjo-fittings", image: banjoFittings[0].image, label: "Banjo", color: "#4a372e", description: "Compact banjo fittings for constrained hydraulic routing applications." },
  { name: "Socketless Fittings", href: "/products/hydraulic-fittings/socketless-fittings", image: socketlessFittings[0].image, label: "Socketless", color: "#493f31", description: "Quick, dependable fitting options for compatible low-pressure hose assemblies." },
  { name: "Reusable Hose Fittings", href: "/products/hydraulic-fittings/reusable-hose-fittings", image: reusableHoseFittings[0].image, label: "Reusable", color: "#3b4551", description: "Serviceable fittings that allow hydraulic hose assemblies to be rebuilt in the field." },
  { name: "Ferrules", href: "/products/hydraulic-fittings/ferrules", image: ferrules[0].image, label: "Ferrules", color: "#4e3a2f", description: "Precision ferrules for secure hydraulic hose-end fitting assemblies." },
]

function FittingFamilyCard({ family, index }: { family: (typeof fittingFamilies)[number]; index: number }) {
  return (
    <Link href={family.href} className="group relative block min-h-[350px] overflow-hidden rounded-[1.5rem] transition-transform duration-500 hover:-translate-y-1" style={{ backgroundColor: family.color }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_25%,rgba(255,255,255,0.23),transparent_34%)]" />
      <div className="absolute inset-x-0 top-0 h-[61%] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent)]" />
      <span className="absolute left-5 top-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/75"><span className="h-1.5 w-1.5 rounded-full bg-[#f26522] shadow-[0_0_10px_rgba(242,101,34,0.9)]" />{String(index + 1).padStart(2, "0")} / {family.label}</span>
      <div className="pointer-events-none absolute left-1/2 top-[43%] h-[55%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-[40%] bg-white/10 blur-3xl transition-opacity duration-500 group-hover:bg-white/20" aria-hidden="true" />
      <img src={family.image} alt="" className="absolute left-1/2 top-[43%] h-[55%] w-[76%] -translate-x-1/2 -translate-y-1/2 object-contain brightness-0 invert drop-shadow-[0_24px_22px_rgba(0,0,0,0.56)] transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-3" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/72 to-transparent px-5 pb-5 pt-20 text-white">
        <div className="flex items-end justify-between gap-4">
          <div><h2 className="max-w-[15rem] font-heading text-2xl font-extrabold uppercase leading-[0.92] tracking-[-0.045em] text-white sm:text-3xl">{family.name}</h2><p className="mt-3 max-w-[18rem] border-l-2 border-[#f26522] pl-3 text-[12px] font-medium leading-[1.55] tracking-[0.01em] text-white/80">{family.description}</p></div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white text-[#171717] transition-[width,background-color,color] duration-500 group-hover:w-28 group-hover:bg-[#f26522] group-hover:text-white"><ArrowRight size={16} className="shrink-0 transition-transform duration-500 group-hover:-rotate-45" /><span className="w-0 overflow-hidden whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.1em] opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:w-14 group-hover:opacity-100">Explore</span></span>
        </div>
      </div>
    </Link>
  )
}

export default function HydraulicFittingsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#efefef] text-[#171717]" style={{ fontFamily: "Arial, Helvetica, system-ui, sans-serif" }}>
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#f7f8f6] via-[#fbfcfa] to-white">
        <div className="pointer-events-none absolute inset-0 z-0" style={{ maskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.78) 42%, rgba(0,0,0,0.28) 78%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.78) 42%, rgba(0,0,0,0.28) 78%, transparent 100%)" }}>
          <Topography className="h-full w-full" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={2.65} thickness={0.018} glow={0.22} opacity={0.1} mouseRadius={0.24} mouseStrength={0.34} />
        </div>

        <section className="relative flex min-h-[calc(100svh-88px)] flex-col overflow-hidden bg-transparent px-3 pb-3 pt-10 sm:px-5 sm:pt-14 lg:px-8">
          <div className="relative z-10 mx-auto flex w-full max-w-none min-h-0 flex-1 flex-col">
            <h1 className="whitespace-nowrap text-center font-heading text-[#143126]" style={{ fontSize: "clamp(1.55rem, 4.7vw, 5.2rem)", fontWeight: 800, letterSpacing: "-0.07em", lineHeight: 0.9 }}>
              HYDRAULIC FITTINGS
            </h1>

            <div className="relative mt-8 flex min-h-[430px] flex-1 sm:mt-10">
              <div className="relative h-full min-h-[430px] flex-1 overflow-hidden rounded-[1.8rem] bg-[#0b3539] shadow-[0_22px_60px_rgba(2,16,27,0.22)] sm:min-h-[540px] sm:rounded-[2.25rem] lg:min-h-[max(620px,calc(100svh-300px))]">
                <video autoPlay muted loop playsInline preload="auto" className="pointer-events-none absolute inset-0 h-full w-full object-cover" aria-label="Hydronex hydraulic fittings in production">
                  <source src="/videos/hydraulic-fittings-hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute right-5 top-6 z-20 flex w-[min(21.5rem,calc(100%-2.5rem))] sm:right-8 sm:top-8 lg:left-1/2 lg:right-auto lg:top-[clamp(2rem,8vh,5.5rem)] lg:w-auto lg:-translate-x-1/2 lg:gap-5">
                  <aside className="relative hidden h-[360px] w-[min(30rem,calc((100vw-6rem)/2))] overflow-hidden rounded-[1.8rem] border border-white/35 bg-black/25 p-7 shadow-[0_22px_60px_rgba(2,16,27,0.36)] backdrop-blur-md lg:block" aria-label="Hydraulic fittings range overview">
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(132deg,rgba(255,255,255,0.2),transparent_40%,rgba(255,255,255,0.05))]" aria-hidden="true" />
                    <div className="pointer-events-none absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-[#f1854a]/15 blur-3xl" aria-hidden="true" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/75 via-black/25 to-transparent" aria-hidden="true" />
                    <div className="relative z-10">
                      <p className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/70"><span className="h-1.5 w-1.5 rounded-full bg-[#f1854a] shadow-[0_0_10px_rgba(241,133,74,0.9)]" />Hydraulic fittings</p>
                      <h2 className="mt-4 max-w-[17ch] text-[1.75rem] font-semibold leading-[0.98] tracking-[-0.045em] text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)]">Connections for every hydraulic layout.</h2>
                      <p className="mt-3 max-w-[38ch] text-[14px] leading-[1.45] text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)]">Browse fitting standards, sealing styles, and hose-end components for reliable hydraulic assemblies.</p>
                      <div className="mt-4 grid grid-cols-3 border-y border-white/25 py-3 text-center">
                        {[['10', 'families'], ['BSP', 'threads'], ['Wide', 'sealing']].map(([value, label]) => (
                          <div key={value} className="border-l border-white/15 px-2 first:border-l-0">
                            <p className="text-base font-extrabold tracking-[-0.04em] text-[#8ae6dc]">{value}</p>
                            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/55">{label}</p>
                          </div>
                        ))}
                      </div>
                      <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)]">Threaded, flare &amp; hose-end fitting options</p>
                    </div>
                  </aside>

                  <aside className="group relative w-full overflow-hidden rounded-[1.8rem] border border-white/35 bg-black/25 p-3.5 shadow-[0_22px_60px_rgba(2,16,27,0.36)] backdrop-blur-md transition-transform duration-500 hover:-translate-y-1 sm:p-4 lg:h-[360px] lg:w-[min(30rem,calc((100vw-6rem)/2))] lg:p-6" aria-label="Featured hydraulic fitting">
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(112deg,rgba(255,255,255,0.22),transparent_30%,transparent_70%,rgba(255,255,255,0.05))]" aria-hidden="true" />
                    <div className="pointer-events-none absolute -right-14 -top-20 h-44 w-44 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/25 to-transparent" aria-hidden="true" />
                    <div className="relative flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.18em] text-white/70">
                      <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#f1854a] shadow-[0_0_10px_rgba(241,133,74,0.9)]" />Featured fitting</span>
                      <span className="rounded-full border border-white/20 bg-white/10 px-2 py-1 text-white/80">BSP</span>
                    </div>
                    <div className="relative mt-4 h-[142px] overflow-hidden rounded-[1.1rem] border border-white/20 bg-black/15 lg:h-[188px]">
                      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:24px_24px]" aria-hidden="true" />
                      <img src="/images/hydraulic-fittings/bsp-male-60-cone-seat-seal-12611.png" alt="BSP hydraulic fitting diagram" className="relative z-10 h-full w-full scale-[1.08] object-contain p-3 brightness-0 invert drop-shadow-[0_8px_14px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:scale-[1.15]" />
                    </div>
                    <div className="relative z-10 mt-4 flex items-end justify-between gap-4 drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)]">
                      <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8ae6dc]">British BSP</p><p className="mt-1 text-[1.2rem] font-semibold leading-tight tracking-[-0.025em] text-white">BSP Male 60Â°<br />Cone Seat Seal</p></div>
                      <div className="shrink-0 border-l border-white/30 pl-4 text-right text-[9px] font-medium uppercase leading-relaxed tracking-[0.1em] text-white/85">BSPP / BSPT<br />ISO 8434-6</div>
                    </div>
                  </aside>
                </div>

                <div className="absolute inset-x-0 bottom-0 z-10 h-[220px] sm:h-[184px] lg:h-[170px]">
                  <div className="absolute inset-x-0 bottom-0 h-[162px] bg-[#f7f8f6] sm:h-[136px] lg:h-[122px]" aria-hidden="true" />
                  <svg className="absolute inset-0 hidden h-full w-full sm:block" viewBox="0 0 1440 170" preserveAspectRatio="none" aria-hidden="true"><path fill="white" d="M0 160V12Q0 0 12 0H155C164 0 172 4 179 11L209 38C215 44 222 48 231 48H1430Q1440 48 1440 58V160Q1440 170 1430 170H10Q0 170 0 160Z" /></svg>
                  <svg className="absolute inset-0 h-full w-full sm:hidden" viewBox="0 0 1000 220" preserveAspectRatio="none" aria-hidden="true"><path fill="white" d="M0 202V18Q0 0 30 0H270C288 0 301 8 315 22L342 43C350 51 360 58 375 58H970Q1000 58 1000 76V202Q1000 220 970 220H30Q0 220 0 202Z" /></svg>
                  <p className="absolute left-8 top-3 z-10 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5f756c] sm:left-10 sm:top-3">Hydronex hydraulic fittings</p>
                  <div className="relative z-10 grid h-full grid-cols-3 items-end gap-x-3 gap-y-4 px-6 pb-6 pt-[66px] sm:px-10 sm:pb-5 sm:pt-[63px] lg:grid-cols-[1.45fr_repeat(3,minmax(0,1fr))] lg:items-center lg:gap-0 lg:px-12 lg:pb-4 lg:pt-[52px]">
                    <p className="col-span-3 max-w-[360px] text-xl font-semibold leading-[1.04] tracking-[-0.04em] text-[#17372c] sm:text-2xl lg:col-span-1">Hydraulic fittings for every connection.</p>
                    {[ ["10", "fitting families"], ["BSP", "thread standards"], ["Wide", "sealing options"] ].map(([value, label]) => <div key={value} className="border-l border-[#17372c]/10 px-2 text-center first:border-l-0 sm:px-5"><p className="font-heading text-2xl font-extrabold tracking-[-0.05em] text-[#17372c] sm:text-4xl">{value}</p><p className="mt-1 text-[9px] font-semibold leading-tight text-[#61786e] sm:text-[11px]">{label}</p></div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="relative isolate overflow-hidden bg-white px-5 py-20 sm:px-9 sm:py-28 lg:px-14">
        <Topography className="pointer-events-none absolute inset-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={2.65} thickness={0.018} glow={0.22} opacity={0.055} mouseRadius={0.24} mouseStrength={0.34} />
        <div className="relative z-10 mx-auto max-w-[1280px]">
          <div className="mb-12 flex flex-col gap-5 border-b border-[#143126]/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#d7521c]">01 / hydraulic fitting families</p><h1 className="mt-3 max-w-3xl text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-[#143126]">Hydraulic fittings for every connection.</h1></div>
            <p className="max-w-sm text-sm leading-6 text-[#143126]/60">Browse precision-engineered hydraulic fitting standards, sealing styles, and hose-end components for dependable industrial and mobile hydraulic systems.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{fittingFamilies.map((family, index) => <FittingFamilyCard key={family.href} family={family} index={index} />)}</div>
        </div>
      </section>

      <BSPCtaSection title="Let’s specify the right fitting for your system." description="Tell us what you are building, replacing or improving. Our team will help you move from requirement to the right hydraulic fitting." buttonLabel="Talk to our team" ctaHref="/contact" />
      <LandingProductFooter />
    </main>
  )
}
