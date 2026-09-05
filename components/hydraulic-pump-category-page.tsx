import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductGrid } from "@/components/bsp-product-grid"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import Topography from "@/components/topography"
import type { HydraulicPumpProduct } from "@/lib/hydraulic-pumps"

interface HydraulicPumpCategoryPageProps {
  categoryName: string
  products: HydraulicPumpProduct[]
  basePath: string
  parentCategoryName?: string
  parentCategoryHref?: string
  showParentBreadcrumb?: boolean
  productNoun?: string
  introductionTitle?: string
  introduction?: string[]
}

export function HydraulicPumpCategoryPage({
  categoryName,
  products,
  basePath,
  parentCategoryName = "Hydraulic Pumps",
  parentCategoryHref = "/products/hydraulic-pumps",
  showParentBreadcrumb = true,
  productNoun = "Pump",
  introductionTitle,
  introduction = [],
}: HydraulicPumpCategoryPageProps) {
  const featuredPump = products[0]
  const highlights = [
    [String(products.length).padStart(2, "0"), "products"],
    ["Flow", "systems"],
    ["HP", "power"],
  ]

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8f6] text-[#143126]">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#f7f8f6] via-[#fbfcfa] to-white">
        <Topography className="pointer-events-none !fixed inset-0 z-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={3.4} thickness={0.018} glow={0.22} opacity={0.075} mouseRadius={0.24} mouseStrength={0.34} />
        <div className="relative z-10">
          <nav className="border-b border-[#d6e3ef] bg-white/90 px-6 py-3 backdrop-blur-md" aria-label="Breadcrumb">
            <ol className="mx-auto flex max-w-7xl flex-wrap items-center text-[11.5px] font-medium uppercase tracking-wide">
              <li><Link href="/" className="text-[#0f2040] transition hover:text-[#e05a2e]">Home</Link></li>
              <li className="mx-2.5 text-[#94aabf]">/</li>
              <li><Link href="/products" className="text-[#2a4a70] transition hover:text-[#e05a2e]">Products</Link></li>
              {showParentBreadcrumb ? (
                <>
                  <li className="mx-2.5 text-[#94aabf]">/</li>
                  <li><Link href={parentCategoryHref} className="text-[#4a6a90] transition hover:text-[#e05a2e]">{parentCategoryName}</Link></li>
                </>
              ) : null}
              <li className="mx-2.5 text-[#94aabf]">/</li>
              <li className="flex items-center gap-1.5 font-bold text-[#e05a2e]"><span className="h-1.5 w-1.5 rounded-full bg-[#e05a2e]" />{categoryName}</li>
            </ol>
          </nav>

          <section className="relative flex min-h-[calc(100svh-88px)] flex-col overflow-hidden bg-transparent px-3 pb-3 pt-10 sm:px-5 sm:pt-14 lg:px-8">
            <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-none flex-1 flex-col">
              <h1 className="whitespace-nowrap text-center font-heading text-[#143126]" style={{ fontSize: "clamp(1.55rem, 4.7vw, 5.2rem)", fontWeight: 800, letterSpacing: "-0.07em", lineHeight: 0.9 }}>
                {categoryName.toUpperCase()}
              </h1>

              <div className="relative mt-8 flex min-h-[430px] flex-1 sm:mt-10">
                <div className="relative h-full min-h-[430px] flex-1 overflow-hidden rounded-[1.8rem] bg-[#7fb1b4] sm:min-h-[540px] sm:rounded-[2.25rem] lg:min-h-[max(620px,calc(100svh-300px))]">
                  <video autoPlay muted loop playsInline preload="auto" className="pointer-events-none absolute inset-0 h-full w-full object-cover" aria-hidden="true">
                    <source src="/videos/hydronex-hero.mp4" type="video/mp4" />
                  </video>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b2722]/55 via-transparent to-[#0b2722]/10" />

                  <div className="absolute right-5 top-6 z-20 flex w-[min(21.5rem,calc(100%-2.5rem))] sm:right-8 sm:top-8 lg:left-1/2 lg:right-auto lg:top-[clamp(2rem,8vh,5.5rem)] lg:w-auto lg:-translate-x-1/2 lg:gap-5">
                    <aside className="relative hidden h-[360px] w-[min(30rem,calc((100vw-6rem)/2))] overflow-hidden rounded-[1.8rem] border border-white/35 bg-[#0b3539]/45 p-7 shadow-[0_22px_60px_rgba(2,16,27,0.36)] backdrop-blur-xl lg:block">
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(132deg,rgba(255,255,255,0.2),transparent_40%,rgba(85,222,222,0.1))]" />
                      <div className="pointer-events-none absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-[#f1854a]/15 blur-3xl" />
                      <div className="relative">
                        <p className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/70"><span className="h-1.5 w-1.5 rounded-full bg-[#f1854a] shadow-[0_0_10px_rgba(241,133,74,0.9)]" />{parentCategoryName} / {categoryName}</p>
                        <h2 className="mt-5 max-w-[17ch] text-[1.75rem] font-semibold leading-[0.98] tracking-[-0.045em] text-white">Power for every hydraulic system.</h2>
                        <p className="mt-5 max-w-[38ch] text-[15px] leading-[1.5] text-white/75">Explore the {categoryName} range.</p>
                        <div className="mt-6 grid grid-cols-3 border-y border-white/20 py-4 text-center">
                          {highlights.map(([value, label]) => (
                            <div key={value} className="border-l border-white/15 px-2 first:border-l-0">
                              <p className="text-base font-extrabold tracking-[-0.04em] text-[#8ae6dc]">{value}</p>
                              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/55">{label}</p>
                            </div>
                          ))}
                        </div>
                        <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.15em] text-white/60">{categoryName}</p>
                      </div>
                    </aside>

                    <Link href={`${basePath}/${featuredPump.slug}`} className="group relative w-full overflow-hidden rounded-[1.8rem] border border-white/35 bg-[#0b3539]/45 p-3.5 shadow-[0_22px_60px_rgba(2,16,27,0.36)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1 sm:p-4 lg:h-[360px] lg:w-[min(30rem,calc((100vw-6rem)/2))] lg:p-6">
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(112deg,rgba(255,255,255,0.22),transparent_30%,transparent_70%,rgba(85,222,222,0.12))]" />
                      <div className="pointer-events-none absolute -right-14 -top-20 h-44 w-44 rounded-full bg-cyan-200/20 blur-3xl" />
                      <div className="relative flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.18em] text-white/70">
                        <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#f1854a] shadow-[0_0_10px_rgba(241,133,74,0.9)]" />Featured {productNoun}</span>
                        <span className="rounded-full border border-white/20 bg-white/10 px-2 py-1 text-white/80">{featuredPump.code}</span>
                      </div>
                      <div className="relative mt-4 h-[142px] overflow-hidden rounded-[1.1rem] border border-white/15 bg-[#08282d]/35 lg:h-[188px]">
                        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(169,237,238,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(169,237,238,0.28)_1px,transparent_1px)] [background-size:24px_24px]" />
                        <div className="pointer-events-none absolute inset-x-8 bottom-2 h-8 rounded-full bg-cyan-300/25 blur-2xl" />
                        <Image src={featuredPump.image} alt={featuredPump.name} fill sizes="(max-width: 1024px) 100vw, 30rem" className="object-contain p-3 drop-shadow-[0_8px_14px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:scale-[1.15]" />
                      </div>
                      <div className="relative mt-4 flex items-end justify-between gap-4">
                        <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8ae6dc]">{featuredPump.code}</p><p className="mt-1 text-[1.2rem] font-semibold leading-tight tracking-[-0.025em] text-white">{featuredPump.name}</p></div>
                        <ArrowRight size={17} className="shrink-0 text-white transition-transform duration-500 group-hover:-rotate-45" />
                      </div>
                    </Link>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 z-10 h-[220px] sm:h-[184px] lg:h-[170px]">
                    <div className="absolute inset-x-0 bottom-0 h-[162px] bg-[#f7f8f6] sm:h-[136px] lg:h-[122px]" />
                    <svg className="absolute inset-0 hidden h-full w-full sm:block" viewBox="0 0 1440 170" preserveAspectRatio="none" aria-hidden="true"><path fill="white" d="M0 160V12Q0 0 12 0H155C164 0 172 4 179 11L209 38C215 44 222 48 231 48H1430Q1440 48 1440 58V160Q1440 170 1430 170H10Q0 170 0 160Z" /></svg>
                    <svg className="absolute inset-0 h-full w-full sm:hidden" viewBox="0 0 1000 220" preserveAspectRatio="none" aria-hidden="true"><path fill="white" d="M0 202V18Q0 0 30 0H270C288 0 301 8 315 22L342 43C350 51 360 58 375 58H970Q1000 58 1000 76V202Q1000 220 970 220H30Q0 220 0 202Z" /></svg>
                    <p className="absolute left-8 top-3 z-10 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5f756c] sm:left-10 sm:top-3">Hydronex quality</p>
                    <div className="relative z-10 grid h-full grid-cols-3 items-end gap-x-3 gap-y-4 px-6 pb-6 pt-[66px] sm:px-10 sm:pb-5 sm:pt-[63px] lg:grid-cols-[1.45fr_repeat(3,minmax(0,1fr))] lg:items-center lg:gap-0 lg:px-12 lg:pb-4 lg:pt-[52px]">
                      <p className="col-span-3 max-w-[355px] text-xl font-semibold leading-[1.04] tracking-[-0.04em] text-[#17372c] sm:text-2xl lg:col-span-1">{categoryName}.</p>
                      {highlights.map(([value, label]) => (
                        <div key={value} className="border-l border-[#17372c]/10 px-2 text-center sm:px-5"><p className="font-heading text-2xl font-extrabold tracking-[-0.05em] text-[#17372c] sm:text-4xl">{value}</p><p className="mt-1 text-[9px] font-semibold leading-tight text-[#61786e] sm:text-[11px]">{label}</p></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative z-10 border-b border-[#d0e4f5]/40 bg-transparent">
            <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="mb-8">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#e05a2e]">{parentCategoryName} / {categoryName}</p>
                <h2 className="max-w-[15ch] font-heading text-[#143126]" style={{ fontSize: "clamp(2.55rem, 4.7vw, 5.5rem)", fontWeight: 800, letterSpacing: "-0.07em", lineHeight: 0.9 }}>{categoryName}</h2>
                <div className="mb-5 flex items-center gap-3"><span className="h-[3px] w-10 rounded-full bg-[#e05a2e]" /><span className="h-[3px] w-4 rounded-full bg-[#1a5fa8]/40" /></div>
              </div>
              {introduction.length > 0 ? (
                <div className="mb-10 max-w-5xl space-y-4 rounded-xl border border-[#143126]/10 border-l-[3px] border-l-[#f26522] bg-white/70 px-5 py-5 text-sm leading-relaxed text-[#143126]/80 shadow-[0_10px_24px_rgba(20,49,38,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_28px_rgba(20,49,38,0.12)] sm:px-6 sm:text-base">
                  {introductionTitle ? <h3 className="text-xl font-semibold leading-tight tracking-[-0.025em] text-[#143126] sm:text-2xl">{introductionTitle}</h3> : null}
                  {introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              ) : null}
              <BSPProductGrid products={products} basePath={basePath} categoryLabel={categoryName} productType={`Hydraulic ${productNoun}`} productTypeLabel="Product type" searchScope={categoryName} />
            </div>
          </section>

          <BSPCtaSection title={`Let's specify the right ${categoryName.toLowerCase()}.`} description={`Explore the ${categoryName} range with Hydronex.`} buttonLabel="Talk to our team" ctaHref="/contact" />
          <LikedProductsDrawer />
          <LikedProductsFAB />
        </div>
      </div>
    </main>
  )
}
