import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface SpiralHosesHeroSectionProps {
  description: string
}

const standards = [
  ["ISO 9001", "certified"],
  ["SAE", "standards"],
  ["EN", "specifications"],
]

export function SpiralHosesHeroSection({ description }: SpiralHosesHeroSectionProps) {
  return (
    <section className="relative flex min-h-[calc(100svh-88px)] flex-col overflow-hidden bg-transparent px-3 pb-3 pt-10 sm:px-5 sm:pt-14 lg:px-8">
      <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-none flex-1 flex-col">
        <h1 className="whitespace-nowrap text-center font-heading text-[#143126]" style={{ fontSize: "clamp(1.55rem, 4.7vw, 5.2rem)", fontWeight: 800, letterSpacing: "-0.07em", lineHeight: 0.9 }}>
          HIGH-PRESSURE SPIRAL HOSES
        </h1>

        <div className="relative mt-8 flex min-h-[620px] flex-1 sm:mt-10 lg:min-h-[430px]">
          <div className="relative h-full min-h-[620px] flex-1 overflow-hidden rounded-[1.8rem] bg-[#7fb1b4] sm:min-h-[690px] sm:rounded-[2.25rem] lg:min-h-[max(620px,calc(100svh-300px))]">
            <video autoPlay muted loop playsInline preload="auto" className="pointer-events-none absolute inset-0 h-full w-full object-cover" aria-hidden="true">
              <source src="/videos/hydronex-hero.mp4" type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b2722]/55 via-transparent to-[#0b2722]/10" />

            <div className="absolute left-5 right-5 top-6 z-20 flex flex-col gap-5 sm:left-auto sm:right-8 sm:top-8 sm:w-[min(30rem,calc(100%-4rem))] lg:left-1/2 lg:right-auto lg:top-[clamp(2rem,8vh,5.5rem)] lg:w-auto lg:-translate-x-1/2 lg:flex-row">
              <aside className="relative h-auto min-h-[360px] w-full overflow-hidden rounded-[1.8rem] border border-white/35 bg-[#0b3539]/45 p-6 shadow-[0_22px_60px_rgba(2,16,27,0.36)] backdrop-blur-xl sm:p-7 lg:h-[360px] lg:w-[min(30rem,calc((100vw-6rem)/2))]" aria-label="Spiral hoses overview">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(132deg,rgba(255,255,255,0.2),transparent_40%,rgba(85,222,222,0.1))]" aria-hidden="true" />
                <div className="pointer-events-none absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-[#f1854a]/15 blur-3xl" aria-hidden="true" />

                <div className="relative">
                  <p className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/70"><span className="h-1.5 w-1.5 rounded-full bg-[#f1854a] shadow-[0_0_10px_rgba(241,133,74,0.9)]" />Spiral Hoses</p>
                  <h2 className="mt-5 max-w-[17ch] text-[1.75rem] font-semibold leading-[0.98] tracking-[-0.045em] text-white">High-Pressure Spiral Hoses</h2>
                  <p className="mt-5 max-w-[44ch] text-[14px] leading-[1.5] text-white/75">{description}</p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Link href="/#contact" className="inline-flex items-center gap-2 rounded-full bg-[#f26522] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff7a38] hover:shadow-[0_10px_25px_rgba(242,101,34,0.35)] active:translate-y-0">Get A Quote <ArrowRight size={13} /></Link>
                    <Link href="#products" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/20 hover:text-white active:translate-y-0">View products <ArrowRight size={13} /></Link>
                  </div>
                </div>
              </aside>

              <Link href="/products/spiral-hoses/en-856-4sp" className="group relative hidden h-[360px] w-[min(30rem,calc((100vw-6rem)/2))] overflow-hidden rounded-[1.8rem] border border-white/35 bg-[#0b3539]/45 p-6 shadow-[0_22px_60px_rgba(2,16,27,0.36)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1 lg:block" aria-label="View MEET EXCEED EN 856 4SP spiral hose">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(112deg,rgba(255,255,255,0.22),transparent_30%,transparent_70%,rgba(85,222,222,0.12))]" aria-hidden="true" />
                <div className="pointer-events-none absolute -right-14 -top-20 h-44 w-44 rounded-full bg-cyan-200/20 blur-3xl" aria-hidden="true" />

                <div className="relative flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.18em] text-white/70">
                  <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#f1854a] shadow-[0_0_10px_rgba(241,133,74,0.9)]" />Featured product</span>
                  <span className="rounded-full border border-white/20 bg-white/10 px-2 py-1 text-white/80">EN 856</span>
                </div>

                <div className="relative mt-4 h-[188px] overflow-hidden rounded-[1.1rem] border border-white/15 bg-[#08282d]/35">
                  <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(169,237,238,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(169,237,238,0.28)_1px,transparent_1px)] [background-size:24px_24px]" aria-hidden="true" />
                  <div className="pointer-events-none absolute inset-x-8 bottom-2 h-8 rounded-full bg-cyan-300/25 blur-2xl" aria-hidden="true" />
                  <Image src="/images/spiral-hoses/meet-exceed-en-856-4sp.png" alt="MEET EXCEED EN 856 4SP spiral hose" width={668} height={373} priority className="relative z-10 h-full w-full scale-[1.08] object-contain p-5 transition-transform duration-500 group-hover:scale-[1.15]" style={{ filter: "drop-shadow(0 12px 16px rgba(0,0,0,.45))" }} />
                </div>

                <div className="relative mt-4 flex items-end justify-between gap-4">
                  <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8ae6dc]">MEET EXCEED EN 856 4SP</p><p className="mt-1 text-[1.2rem] font-semibold leading-tight tracking-[-0.025em] text-white">Four Braid Spiral Hydraulic Hose</p></div>
                  <div className="shrink-0 border-l border-white/20 pl-4 text-right text-[9px] font-medium uppercase leading-relaxed tracking-[0.1em] text-white/65">Hydraulic<br />Hose</div>
                </div>
              </Link>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10 h-[220px] sm:h-[184px] lg:h-[170px]">
              <div className="absolute inset-x-0 bottom-0 h-[162px] bg-[#f7f8f6] sm:h-[136px] lg:h-[122px]" aria-hidden="true" />
              <svg className="absolute inset-0 hidden h-full w-full sm:block" viewBox="0 0 1440 170" preserveAspectRatio="none" aria-hidden="true"><path fill="white" stroke="none" d="M0 160V12Q0 0 12 0H155C164 0 172 4 179 11L209 38C215 44 222 48 231 48H1430Q1440 48 1440 58V160Q1440 170 1430 170H10Q0 170 0 160Z" /></svg>
              <svg className="absolute inset-0 h-full w-full sm:hidden" viewBox="0 0 1000 220" preserveAspectRatio="none" aria-hidden="true"><path fill="white" stroke="none" d="M0 202V18Q0 0 30 0H270C288 0 301 8 315 22L342 43C350 51 360 58 375 58H970Q1000 58 1000 76V202Q1000 220 970 220H30Q0 220 0 202Z" /></svg>

              <p className="absolute left-8 top-3 z-10 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5f756c] sm:left-10 sm:top-3">Spiral Hoses</p>
              <div className="relative z-10 grid h-full grid-cols-3 items-end gap-x-3 gap-y-4 px-6 pb-6 pt-[66px] sm:px-10 sm:pb-5 sm:pt-[63px] lg:grid-cols-[1.45fr_repeat(3,minmax(0,1fr))] lg:items-center lg:gap-0 lg:px-12 lg:pb-4 lg:pt-[52px]">
                <p className="col-span-3 max-w-[355px] text-xl font-semibold leading-[1.04] tracking-[-0.04em] text-[#17372c] sm:text-2xl lg:col-span-1">Multi-spiral reinforced hydraulic hoses engineered for severe impulse, high pressure, and demanding mobile equipment.</p>
                {standards.map(([value, label]) => (
                  <div key={value} className="border-l border-[#17372c]/10 px-2 text-center sm:px-5">
                    <p className="font-heading text-2xl font-extrabold tracking-[-0.05em] text-[#17372c] sm:text-4xl">{value}</p>
                    <p className="mt-1 text-[9px] font-semibold leading-tight text-[#61786e] sm:text-[11px]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
