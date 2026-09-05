import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface HydraulicAdaptersHeroSectionProps {
  category: string
  title: string
  description: string
  featuredProduct: { name: string; code: string; image?: string }
  productCount: number
  summary?: string
  standardLabel?: string
  standardsDescription?: string
  primaryActionLabel?: string
  primaryActionHref?: string
  secondaryActionLabel?: string
  secondaryActionHref?: string
}

export function HydraulicAdaptersHeroSection({
  category,
  title,
  description,
  featuredProduct,
  productCount,
  summary = category === "NPT Standard Pipe" ? "Precision-engineered fittings for dependable North American hydraulic connections." : description,
  standardLabel = "NPT",
  standardsDescription = "BSP, JIC, ORFS, Metric & SAE",
  primaryActionLabel = "Get A Quote",
  primaryActionHref = "/#contact",
  secondaryActionLabel = "View products",
  secondaryActionHref = "#products",
}: HydraulicAdaptersHeroSectionProps) {
  return (
    <section className="relative flex min-h-[calc(100svh-88px)] flex-col overflow-hidden bg-transparent px-3 pb-3 pt-10 sm:px-5 sm:pt-14 lg:px-8">
      <div className="relative z-10 mx-auto flex w-full flex-1 flex-col">
        <h1 className="text-center font-heading text-[#143126]" style={{ fontSize: "clamp(1.2rem, 3.65vw, 4.65rem)", fontWeight: 800, letterSpacing: "-0.07em", lineHeight: 0.9 }}>
          {title.toUpperCase()}
        </h1>

        <div className="relative mt-8 flex flex-1">
          <div className="relative min-h-[620px] flex-1 overflow-hidden rounded-[1.8rem] bg-[#7fb1b4] lg:min-h-[max(620px,calc(100svh-300px))]">
            <video autoPlay muted loop playsInline className="pointer-events-none absolute inset-0 h-full w-full object-cover" aria-hidden="true">
              <source src="/videos/hydronex-hero.mp4" type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b2722]/55 via-transparent to-[#0b2722]/10" />

            <div className="absolute left-5 right-5 top-6 z-20 flex gap-5 lg:left-1/2 lg:right-auto lg:w-auto lg:-translate-x-1/2">
              <aside className="relative min-h-[360px] w-[min(30rem,calc((100vw-6rem)/2))] overflow-hidden rounded-[1.8rem] border border-white/35 bg-[#0b3539]/45 p-7 shadow-[0_22px_60px_rgba(2,16,27,0.36)] backdrop-blur-xl">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(132deg,rgba(255,255,255,0.2),transparent_40%,rgba(85,222,222,0.1))]" aria-hidden />
                <div className="relative">
                  <p className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/70"><span className="h-1.5 w-1.5 rounded-full bg-[#f1854a] shadow-[0_0_10px_rgba(241,133,74,0.9)]" />{category}</p>
                  <h2 className="mt-5 text-[1.75rem] font-semibold leading-[0.98] tracking-[-0.045em] text-white">{title}</h2>
                  <p className="mt-5 text-[14px] leading-[1.5] text-white/75">{description}</p>
                  <div className="mt-6 flex gap-3">
                    <Link href={primaryActionHref} className="inline-flex items-center gap-2 rounded-full bg-[#f26522] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-transform hover:-translate-y-0.5">{primaryActionLabel} <ArrowRight size={13} /></Link>
                    <Link href={secondaryActionHref} className="rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/20">{secondaryActionLabel}</Link>
                  </div>
                </div>
              </aside>

              <aside className="group relative hidden h-[360px] w-[min(30rem,calc((100vw-6rem)/2))] overflow-hidden rounded-[1.8rem] border border-white/35 bg-[#0b3539]/45 p-6 shadow-[0_22px_60px_rgba(2,16,27,0.36)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1 lg:block">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(112deg,rgba(255,255,255,0.22),transparent_30%,transparent_70%,rgba(85,222,222,0.12))]" aria-hidden />
                <div className="relative">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/70">Featured product · {featuredProduct.code}</p>
                  {featuredProduct.image && <Image src={featuredProduct.image} alt={featuredProduct.name} width={668} height={373} className="mt-4 h-[188px] w-full rounded-[1.1rem] bg-[#08282d]/35 object-contain p-5 transition-transform duration-500 group-hover:scale-[1.05]" />}
                  <p className="mt-4 text-[1.05rem] font-semibold text-white">{featuredProduct.name}</p>
                </div>
              </aside>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10 bg-white px-8 pb-6 pt-4">
              <div className="grid grid-cols-[minmax(0,1.5fr)_repeat(2,minmax(0,1fr))] items-center gap-4">
                <p className="max-w-[355px] text-base font-semibold leading-[1.15] tracking-[-0.025em] text-[#17372c]">{summary}</p>
                <div className="border-l border-[#17372c]/10 px-5 text-center"><p className="font-heading text-3xl font-extrabold text-[#17372c]">{productCount}</p><p className="text-[11px] font-semibold text-[#61786e]">Products</p></div>
                <div className="border-l border-[#17372c]/10 px-5 text-center"><p className="font-heading text-3xl font-extrabold text-[#17372c]">{standardLabel}</p><p className="text-[11px] font-semibold text-[#61786e]">{standardsDescription}</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
