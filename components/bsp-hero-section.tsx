import Image from "next/image"

const highlights = [
  ["ISO", "quality standards"],
  ["60°", "cone seat options"],
  ["24/7", "technical support"],
]

export function BSPHeroSection() {
  return (
    <section className="relative flex min-h-[calc(100svh-88px)] flex-col overflow-hidden bg-transparent px-3 pb-3 pt-10 sm:px-5 sm:pt-14 lg:px-8">
      <div className="relative z-10 mx-auto flex w-full max-w-none min-h-0 flex-1 flex-col">
        <h1 className="whitespace-nowrap text-center font-heading text-[#143126]" style={{ fontSize: "clamp(1.55rem, 4.7vw, 5.2rem)", fontWeight: 800, letterSpacing: "-0.07em", lineHeight: 0.9 }}>
          PRECISION THAT KEEPS YOU MOVING
        </h1>

        <div className="relative mt-8 flex min-h-[430px] flex-1 sm:mt-10">
          <div className="relative h-full min-h-[430px] flex-1 overflow-hidden rounded-[1.8rem] bg-[#7fb1b4] sm:min-h-[540px] sm:rounded-[2.25rem] lg:min-h-[max(620px,calc(100svh-300px))]">
            <video autoPlay muted loop playsInline preload="auto" className="pointer-events-none absolute inset-0 h-full w-full object-cover" aria-hidden="true">
              <source src="/videos/hydronex-hero.mp4" type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b2722]/55 via-transparent to-[#0b2722]/10" />

            {/* A paired product overview, centered over the hero on larger screens. */}
            <div className="absolute right-5 top-6 z-20 flex w-[min(21.5rem,calc(100%-2.5rem))] sm:right-8 sm:top-8 lg:left-1/2 lg:right-auto lg:top-[clamp(2rem,8vh,5.5rem)] lg:w-auto lg:-translate-x-1/2 lg:gap-5">
              <aside className="relative hidden h-[360px] w-[min(30rem,calc((100vw-6rem)/2))] overflow-hidden rounded-[1.8rem] border border-white/35 bg-[#0b3539]/45 p-7 shadow-[0_22px_60px_rgba(2,16,27,0.36)] backdrop-blur-xl lg:block" aria-label="British BSP fitting range overview">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(132deg,rgba(255,255,255,0.2),transparent_40%,rgba(85,222,222,0.1))]" aria-hidden="true" />
                <div className="pointer-events-none absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-[#f1854a]/15 blur-3xl" aria-hidden="true" />

                <div className="relative">
                  <p className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/70"><span className="h-1.5 w-1.5 rounded-full bg-[#f1854a] shadow-[0_0_10px_rgba(241,133,74,0.9)]" />British BSP range</p>
                  <h2 className="mt-5 max-w-[17ch] text-[1.75rem] font-semibold leading-[0.98] tracking-[-0.045em] text-white">Connections for every hydraulic layout.</h2>
                  <p className="mt-5 max-w-[38ch] text-[15px] leading-[1.5] text-white/75">Explore thread forms, sealing options and configurations made to build compatible, reliable systems.</p>

                  <div className="mt-6 grid grid-cols-3 border-y border-white/20 py-4 text-center">
                    {[['BSPP', 'parallel'], ['BSPT', 'tapered'], ['60°', 'cone seat']].map(([value, label]) => (
                      <div key={value} className="border-l border-white/15 px-2 first:border-l-0">
                        <p className="text-base font-extrabold tracking-[-0.04em] text-[#8ae6dc]">{value}</p>
                        <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/55">{label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.15em] text-white/60">Straight, 45° &amp; 90° fitting options</p>
                </div>
              </aside>

              {/* Featured fitting card */}
              <aside className="group relative w-full overflow-hidden rounded-[1.8rem] border border-white/35 bg-[#0b3539]/45 p-3.5 shadow-[0_22px_60px_rgba(2,16,27,0.36)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1 sm:p-4 lg:h-[360px] lg:w-[min(30rem,calc((100vw-6rem)/2))] lg:p-6" aria-label="Featured BSP fitting">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(112deg,rgba(255,255,255,0.22),transparent_30%,transparent_70%,rgba(85,222,222,0.12))]" aria-hidden="true" />
                <div className="pointer-events-none absolute -right-14 -top-20 h-44 w-44 rounded-full bg-cyan-200/20 blur-3xl" aria-hidden="true" />

                <div className="relative flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.18em] text-white/70">
                  <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#f1854a] shadow-[0_0_10px_rgba(241,133,74,0.9)]" />Featured fitting</span>
                  <span className="rounded-full border border-white/20 bg-white/10 px-2 py-1 text-white/80">BSP</span>
                </div>

                <div className="relative mt-4 h-[142px] overflow-hidden rounded-[1.1rem] border border-white/15 bg-[#08282d]/35 lg:h-[188px]">
                  <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(169,237,238,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(169,237,238,0.28)_1px,transparent_1px)] [background-size:24px_24px]" aria-hidden="true" />
                  <div className="pointer-events-none absolute inset-x-8 bottom-2 h-8 rounded-full bg-cyan-300/25 blur-2xl" aria-hidden="true" />
                  <Image src="/images/hydraulic-fittings/90-bsp-female-60-cone-seal-22691.png" alt="90 degree BSP female 60 degree cone seal fitting" width={668} height={373} priority className="relative z-10 h-full w-full scale-[1.08] object-contain p-3 transition-transform duration-500 group-hover:scale-[1.15]" style={{ filter: "invert(1) sepia(.22) saturate(.75) hue-rotate(132deg) brightness(1.8) drop-shadow(0 8px 14px rgba(0,0,0,.45))" }} />
                </div>

                <div className="relative mt-4 flex items-end justify-between gap-4">
                  <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8ae6dc]">22691 series</p><p className="mt-1 text-[1.2rem] font-semibold leading-tight tracking-[-0.025em] text-white">90° BSP Female<br />60° Cone Seal</p></div>
                  <div className="shrink-0 border-l border-white/20 pl-4 text-right text-[9px] font-medium uppercase leading-relaxed tracking-[0.1em] text-white/65">ISO 8434-6<br />BS 5200</div>
                </div>
              </aside>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10 h-[220px] sm:h-[184px] lg:h-[170px]">
              <div className="absolute inset-x-0 bottom-0 h-[162px] bg-[#f7f8f6] sm:h-[136px] lg:h-[122px]" aria-hidden="true" />
              <svg className="absolute inset-0 hidden h-full w-full sm:block" viewBox="0 0 1440 170" preserveAspectRatio="none" aria-hidden="true">
                <path fill="white" stroke="none" d="M0 160V12Q0 0 12 0H155C164 0 172 4 179 11L209 38C215 44 222 48 231 48H1430Q1440 48 1440 58V160Q1440 170 1430 170H10Q0 170 0 160Z" />
              </svg>
              <svg className="absolute inset-0 h-full w-full sm:hidden" viewBox="0 0 1000 220" preserveAspectRatio="none" aria-hidden="true">
                <path fill="white" stroke="none" d="M0 202V18Q0 0 30 0H270C288 0 301 8 315 22L342 43C350 51 360 58 375 58H970Q1000 58 1000 76V202Q1000 220 970 220H30Q0 220 0 202Z" />
              </svg>

              <p className="absolute left-8 top-3 z-10 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5f756c] sm:left-10 sm:top-3">Hydronex quality</p>
              <div className="relative z-10 grid h-full grid-cols-3 items-end gap-x-3 gap-y-4 px-6 pb-6 pt-[66px] sm:px-10 sm:pb-5 sm:pt-[63px] lg:grid-cols-[1.45fr_repeat(3,minmax(0,1fr))] lg:items-center lg:gap-0 lg:px-12 lg:pb-4 lg:pt-[52px]">
                <p className="col-span-3 max-w-[355px] text-xl font-semibold leading-[1.04] tracking-[-0.04em] text-[#17372c] sm:text-2xl lg:col-span-1">Reliable BSP fittings for every connection.</p>
                {highlights.map(([value, label]) => (
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
