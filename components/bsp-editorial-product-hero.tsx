import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Silk from "@/components/ui/silk"

interface BspEditorialProductHeroProps {
  categoryName: string
  product: {
    name: string
    shortName: string
    slug: string
    description: string
    material?: string
    surfaceTreat?: string
    application?: string
    image?: string
  }
}

export function BspEditorialProductHero({ categoryName, product }: BspEditorialProductHeroProps) {
  const isTechnicalDiagram = Boolean(product.image && (/\/images\/hydraulic-fittings\//.test(product.image) || /(?:diagram|drawing|schematic)/i.test(product.image)))

  return (
    <section className="bsp-editorial-product-hero relative px-4 pb-16 pt-7 sm:px-6 sm:pb-20 lg:px-8 lg:pt-10">
      <div className="mx-auto grid max-w-[1500px] items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.75fr)] lg:gap-14">
        <div className="relative min-h-[390px] sm:min-h-[520px] lg:min-h-[min(66vh,650px)]">
          <svg className="absolute h-0 w-0" aria-hidden>
            <defs>
              <clipPath id="iso-bsp-product-clip" clipPathUnits="objectBoundingBox"><path d="M.064 0H.934C.97 0 1 .03 1 .066V.65C1 .706.96 .75.91 .75H.87C.82 .75.79 .8.79 .85C.79 .932.73 1 .65 1H.064C.029 1 0 .971 0 .936V.064C0 .029.029 0 .064 0Z" /></clipPath>
            </defs>
          </svg>

          <div className="absolute inset-0 z-0 overflow-hidden shadow-[0_28px_72px_rgba(11,31,55,0.18)]" style={{ clipPath: "url(#iso-bsp-product-clip)" }}>
            <Silk speed={5} scale={1} color="#0d4080" noiseIntensity={1.5} rotation={0} className="absolute inset-0 h-full w-full" />
            <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-20" viewBox="0 0 1000 720" preserveAspectRatio="none" aria-hidden>
              <path d="M0 0H1000V112L646 354H0Z" fill="#6f9fbe" fillOpacity="0.55" />
              <path d="M1000 64V720H628L1000 368Z" fill="#f8fafc" fillOpacity="0.88" />
              <path d="M1000 402V720H466L822 402Z" fill="#dbeaf3" fillOpacity="0.68" />
            </svg>
          </div>

          <div className="absolute inset-0 z-[1]" style={{ clipPath: "url(#iso-bsp-product-clip)" }}>
            <div className="absolute left-6 top-5 z-10 flex items-center gap-2 font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-white sm:left-8 sm:top-7">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f26522]" />
              Hydronex / {categoryName}
            </div>
            <div className="absolute right-6 top-5 z-10 font-mono text-[10px] font-semibold text-white/65 sm:right-8 sm:top-7">{product.slug.split("-").pop()?.toUpperCase()}</div>
            {product.image ? (
              <div className="absolute inset-0 z-[2] flex items-center justify-center px-9 py-14 transition-transform duration-500 hover:scale-[1.03] sm:px-16 sm:py-20">
                <Image src={product.image} alt={product.name} fill priority sizes="(max-width: 1024px) 100vw, 58vw" className={`object-contain p-10 sm:p-16${isTechnicalDiagram ? " technical-diagram-image" : ""}`} />
              </div>
            ) : null}
          </div>

          <span className="absolute bottom-[9%] right-[8%] z-20 flex h-14 w-14 items-center justify-center rounded-full border border-[#0b1f37]/20 bg-[#f8fafc] text-[#0b1f37] shadow-[0_10px_22px_rgba(11,31,55,0.2)] transition-transform hover:-translate-y-1 sm:h-[72px] sm:w-[72px]" aria-hidden><ArrowUpRight size={30} strokeWidth={2.2} className="sm:h-9 sm:w-9" /></span>
        </div>

        <div className="relative py-2 lg:py-8">
          <p className="mb-5 flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#f26522]"><span className="h-1.5 w-1.5 rounded-full bg-[#f26522]" />{categoryName}</p>
          <h1 className="max-w-[11ch] font-heading text-[clamp(3.2rem,6vw,6.3rem)] font-extrabold leading-[0.9] tracking-[-0.07em] text-[#143126]">{product.name}</h1>
          <p className="mt-8 max-w-[41rem] font-sans text-base leading-relaxed text-[#0b1f37]/70 sm:text-lg">{product.description}</p>
          {(product.material || product.surfaceTreat || product.application) ? (
            <div className="mt-9 grid max-w-[44rem] grid-cols-1 border-y border-[#0b1f37]/15 py-4 font-sans text-sm text-[#0b1f37]/75 sm:grid-cols-3">
              {product.material ? <p className="border-b border-[#0b1f37]/10 py-2 pr-4 sm:border-b-0 sm:border-r"><span className="font-bold text-[#0b1f37]">Material</span><br />{product.material}</p> : null}
              {product.surfaceTreat ? <p className="border-b border-[#0b1f37]/10 py-2 sm:border-b-0 sm:border-r sm:px-5"><span className="font-bold text-[#0b1f37]">Surface finish</span><br />{product.surfaceTreat}</p> : null}
              {product.application ? <p className="py-2 sm:pl-5"><span className="font-bold text-[#0b1f37]">Application</span><br />{product.application}</p> : null}
            </div>
          ) : null}
          <Link href="/#contact" className="group mt-9 inline-flex items-center gap-4 rounded-full bg-[#f26522] py-3 pl-6 pr-3 font-sans text-sm font-bold text-white shadow-[0_12px_25px_rgba(242,101,34,0.22)] transition-transform hover:-translate-y-0.5">
            Request a quote
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#f26522] transition-transform group-hover:-rotate-45"><ArrowUpRight size={16} /></span>
          </Link>
        </div>
      </div>
    </section>
  )
}
