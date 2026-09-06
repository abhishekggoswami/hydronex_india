"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, ChevronRight, Check, ArrowUpRight } from "lucide-react"
import Topography from "@/components/topography"
import Silk from "@/components/ui/silk"

// ─── Typewriter hook ──────────────────────────────────────────────────────────
function useTypewriter(text: string, startDelay = 600) {
  const [displayed, setDisplayed] = useState("")
  const [phase, setPhase] = useState<"idle" | "typing" | "hold" | "erasing">("idle")

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    const CHAR_MS = 65
    const HOLD_MS = 2800
    const ERASE_MS = 38

    function startCycle() {
      setPhase("typing")
      let i = 0
      function typeNext() {
        i++
        setDisplayed(text.slice(0, i))
        if (i < text.length) {
          timeout = setTimeout(typeNext, CHAR_MS)
        } else {
          setPhase("hold")
          timeout = setTimeout(eraseStart, HOLD_MS)
        }
      }
      timeout = setTimeout(typeNext, CHAR_MS)
    }

    function eraseStart() {
      setPhase("erasing")
      let i = text.length
      function eraseNext() {
        i--
        setDisplayed(text.slice(0, i))
        if (i > 0) {
          timeout = setTimeout(eraseNext, ERASE_MS)
        } else {
          timeout = setTimeout(startCycle, 500)
        }
      }
      timeout = setTimeout(eraseNext, ERASE_MS)
    }

    timeout = setTimeout(startCycle, startDelay)
    return () => clearTimeout(timeout)
  }, [text, startDelay])

  return { displayed, phase }
}

// ─── Ringing Phone icon ───────────────────────────────────────────────────────
function RingingPhone() {
  return (
    <span className="bsp-ring-phone inline-flex" aria-hidden>
      <Phone size={16} />
    </span>
  )
}

// ─── Moving border on blueprint image ────────────────────────────────────────
function MovingBorderFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="bsp-moving-border-wrap relative">
      {/* The animated gradient border */}
      <div className="bsp-moving-border-track" aria-hidden />
      {/* Inner content */}
      <div className="bsp-moving-border-inner relative z-10">{children}</div>
    </div>
  )
}

// ─── Animated heading ─────────────────────────────────────────────────────────
function AnimatedHeading({ text }: { text: string }) {
  const words = text.split(" ")
  return (
    <h1
      className="font-extrabold text-balance leading-tight mb-4"
      style={{
        fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
        letterSpacing: "-0.02em",
      }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="bsp-word-in inline-block mr-[0.25em]"
          style={{
            animationDelay: `${0.06 + i * 0.06}s`,
            background: "linear-gradient(90deg, #ffffff 0%, #e8f0ff 40%, #ffffff 60%, #fb923c 100%)",
            backgroundSize: "250% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: `bsp-word-in 0.5s cubic-bezier(0.22,1,0.36,1) forwards, bsp-heading-shimmer 4s ease-in-out ${0.7 + i * 0.06}s infinite`,
          }}
        >
          {word}
        </span>
      ))}
    </h1>
  )
}

// ─── Animated feature list item ───────────────────────────────────────────────
function AnimatedFeatureItem({
  feature,
  idx,
}: {
  feature: string
  idx: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="flex gap-4 transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-20px)",
        transitionDelay: visible ? `${idx * 90}ms` : "0ms",
      }}
    >
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e05a2e] flex items-center justify-center shadow-[0_2px_8px_rgba(224,90,46,0.4)]">
        <Check size={12} strokeWidth={3} className="text-white" />
      </div>
      <p className="leading-relaxed text-sm" style={{ color: "rgba(203,220,248,0.88)" }}>{feature}</p>
    </div>
  )
}


// ─── Spec table wrapper with scroll-in animation ──────────────────────────────
function AnimatedSpecTable({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
      },
      { threshold: 0.05 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
      }}
    >
      {children}
    </div>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────
interface Spec { label: string; value: string }
interface PartRow {
  partNo: string; parkerPartNo?: string; threadE?: string; hoseId?: string
  a?: string; b?: string; c?: string; e?: string; h?: string; w?: string
  dash?: string; dn?: string; s?: string; s1?: string; s2?: string
  oRing?: string; tubeOd?: string
  boltThread?: string; thread?: string; d?: string; l?: string; sfD?: string; r?: string
}

interface BSPProductDetailProps {
  product: {
    name: string
    shortName: string
    slug: string
    description: string
    material?: string
    surfaceTreat?: string
    application?: string
    applicationHeading?: string
    note?: string
    features: string[]
    specs: Spec[]
    applications: string[]
    partTable?: PartRow[]
    tableNote?: string
    image?: string
  }
  otherProductsSection: React.ReactNode
  categoryName?: string
  categoryHref?: string
  parentCategoryName?: string
  parentCategoryHref?: string
  showParentCategory?: boolean
  additionalSpecificationSection?: React.ReactNode
  featureHeading?: string
  editorialHero?: boolean
}

function EditorialBspHero({
  product,
  categoryName,
  isTechnicalDiagram,
}: {
  product: BSPProductDetailProps["product"]
  categoryName: string
  isTechnicalDiagram: boolean
}) {
  return (
    <section className="relative px-4 pb-16 pt-7 sm:px-6 sm:pb-20 lg:px-8 lg:pt-10">
      <div className="mx-auto grid max-w-[1500px] items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.75fr)] lg:gap-14">
        <div className="relative min-h-[390px] sm:min-h-[520px] lg:min-h-[min(66vh,650px)]">
          {/* The reference card is a single SVG-defined silhouette: its lower-right edge sweeps into a soft concave scoop for the arrow control. */}
          <svg className="absolute h-0 w-0" aria-hidden>
            <defs>
              <clipPath id="bsp-product-card-clip" clipPathUnits="objectBoundingBox">
                <path d="M.064 0H.934C.97 0 1 .03 1 .066V.65C1 .706.96 .75.91 .75H.87C.82 .75.79 .8.79 .85C.79 .932.73 1 .65 1H.064C.029 1 0 .971 0 .936V.064C0 .029.029 0 .064 0Z" />
              </clipPath>
              <linearGradient id="bsp-product-card-base" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#dbeaf3" />
                <stop offset="54%" stopColor="#9eb8c3" />
                <stop offset="100%" stopColor="#bdd4e0" />
              </linearGradient>
              <radialGradient id="bsp-product-card-glow" cx="31%" cy="27%" r="62%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.92" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>

          <div className="absolute inset-0 z-0 overflow-hidden shadow-[0_28px_72px_rgba(11,31,55,0.18)]" style={{ clipPath: "url(#bsp-product-card-clip)" }}>
            <Silk speed={5} scale={1} color="#0d4080" noiseIntensity={1.5} rotation={0} className="absolute inset-0 h-full w-full" />
            <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-20" viewBox="0 0 1000 720" preserveAspectRatio="none" aria-hidden>
              <rect width="1000" height="720" fill="url(#bsp-product-card-base)" />
              <rect width="1000" height="720" fill="url(#bsp-product-card-glow)" />
              <path d="M0 0H1000V112L646 354H0Z" fill="#6f9fbe" fillOpacity="0.55" />
              <path d="M1000 64V720H628L1000 368Z" fill="#f8fafc" fillOpacity="0.88" />
              <path d="M1000 402V720H466L822 402Z" fill="#dbeaf3" fillOpacity="0.68" />
            </svg>
          </div>

          <div className="absolute inset-0 z-[1]" style={{ clipPath: "url(#bsp-product-card-clip)" }}>
            <div className="absolute left-6 top-5 z-10 flex items-center gap-2 font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-white sm:left-8 sm:top-7">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f26522]" />
              Hydronex / {categoryName}
            </div>
            <div className="absolute right-6 top-5 z-10 font-mono text-[10px] font-semibold text-white/65 sm:right-8 sm:top-7">{product.slug.split("-").pop()?.toUpperCase()}</div>

            <div className="absolute inset-0 z-[2] flex items-center justify-center px-9 py-14 sm:px-16 sm:py-20">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className={`object-contain p-10 sm:p-16${isTechnicalDiagram ? " technical-diagram-image" : ""}`}
                />
              ) : null}
            </div>
          </div>

          <button aria-label="Explore product details" className="absolute bottom-[9%] right-[8%] z-20 flex h-14 w-14 items-center justify-center rounded-full border border-[#0b1f37]/20 bg-[#f8fafc] text-[#0b1f37] shadow-[0_10px_22px_rgba(11,31,55,0.2)] transition-transform hover:-translate-y-1 sm:h-[72px] sm:w-[72px]" type="button">
            <ArrowUpRight size={30} strokeWidth={2.2} className="sm:h-9 sm:w-9" />
          </button>
        </div>

        <div className="relative py-2 lg:py-8">
          <p className="mb-5 flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#f26522]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f26522]" />
            {categoryName}
          </p>
          <h1 className="max-w-[11ch] font-heading text-[clamp(3.2rem,6vw,6.3rem)] font-extrabold leading-[0.9] tracking-[-0.07em] text-[#143126]">
            {product.shortName}
          </h1>
          <p className="mt-8 max-w-[41rem] font-sans text-base leading-relaxed text-[#0b1f37]/70 sm:text-lg">{product.description}</p>

          {(product.application || product.note) ? (
            <div className="mt-6 max-w-[41rem] border-l-2 border-[#f26522] pl-4 font-sans">
              {product.application ? (
                <>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#f26522]">
                    {product.applicationHeading ?? "Application"}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#0b1f37]/70">{product.application}</p>
                </>
              ) : null}
              {product.note ? <p className="mt-3 text-sm font-semibold leading-relaxed text-[#143126]">{product.note}</p> : null}
            </div>
          ) : null}

          <div className="mt-9 grid max-w-[38rem] grid-cols-1 border-y border-[#0b1f37]/15 py-4 font-sans text-sm text-[#0b1f37]/75 sm:grid-cols-2">
            {product.material ? <p className="border-b border-[#0b1f37]/10 py-2 pr-4 sm:border-b-0 sm:border-r"><span className="font-sans font-bold text-[#0b1f37]">Material</span><br />{product.material}</p> : null}
            {product.surfaceTreat ? <p className="py-2 sm:pl-5"><span className="font-sans font-bold text-[#0b1f37]">Surface finish</span><br />{product.surfaceTreat}</p> : null}
          </div>

          <Link href="/#contact" className="group mt-9 inline-flex items-center gap-4 rounded-full bg-[#f26522] py-3 pl-6 pr-3 font-sans text-sm font-bold text-white shadow-[0_12px_25px_rgba(242,101,34,0.22)] transition-transform hover:-translate-y-0.5">
            Request a quote
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#f26522] transition-transform group-hover:-rotate-45"><ArrowUpRight size={16} /></span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export function BSPProductDetail({
  product,
  otherProductsSection,
  categoryName = "British BSP Fittings",
  categoryHref = "/products/hydraulic-fittings/british-bsp",
  parentCategoryName = "Hydraulic Fittings",
  parentCategoryHref = "/products",
  showParentCategory = true,
  additionalSpecificationSection,
  featureHeading = "Key Features",
  editorialHero = false,
}: BSPProductDetailProps) {
  const { displayed, phase } = useTypewriter("REQUEST QUOTE")
  const isTechnicalDiagram = /^(British BSP Fittings|NPT Hydraulic Fittings|American NPSM Fittings|JIC Hydraulic Fittings|JIS Fittings|ORFS Hydraulic Fittings|Banjo Fittings|Socketless Fittings|Reusable Hose Fittings|Ferrules)$/.test(categoryName)
    || Boolean(product.image && (/\/images\/hydraulic-fittings\//.test(product.image) || /(?:diagram|drawing|schematic)/i.test(product.image)))

  // Table helpers — same logic as the server page
  const pt = product.partTable
  const hasParkerEWB = pt?.some((r) => r.parkerPartNo !== undefined) ?? false
  const hasDoubleS = pt?.some((r) => r.s1 !== undefined) ?? false
  const hasH = pt?.some((r) => r.h !== undefined) ?? false
  const hasA = pt?.some((r) => r.a !== undefined) ?? false
  const hasS2 = pt?.some((r) => r.s2 !== undefined && r.s1 === undefined) ?? false
  const hasBothS1S2 = pt?.some((r) => r.s1 !== undefined && r.s2 !== undefined) ?? false
  const hasORing = pt?.some((r) => r.oRing !== undefined) ?? false
  const hasORingS2 = hasORing && (pt?.some((r) => r.s2 !== undefined && r.s1 === undefined) ?? false)
  const hasTubeOd = pt?.some((r) => r.tubeOd !== undefined) ?? false
  const hasParkerH = pt?.some((r) => r.parkerPartNo !== undefined && r.h !== undefined) ?? false
  const hasParkerR = pt?.some((r) => r.parkerPartNo !== undefined && r.r !== undefined) ?? false
  const hasParkerC = pt?.some((r) => r.parkerPartNo !== undefined && r.c !== undefined && r.e === undefined) ?? false
  const hasParkerW = pt?.some((r) => r.parkerPartNo !== undefined && r.w !== undefined) ?? false
  const hasParkerEOrC = pt?.some((r) => r.parkerPartNo !== undefined && (r.e !== undefined || r.c !== undefined)) ?? false
  const hasACS1 = hasA && hasDoubleS && !hasORing && !hasBothS1S2 && !hasH && !hasTubeOd
  const hasACHS2 = hasA && hasH && hasS2 && !hasDoubleS
  const hasACS2 = hasA && hasS2 && !hasH && !hasDoubleS
  const hasACS1S2 = hasA && hasBothS1S2 && !hasH
  const hasACHS1S2 = hasA && hasH && hasBothS1S2
  const hasTubeOdAS1 = hasTubeOd && hasA && hasDoubleS && !hasH
  const hasC = pt?.some((r) => r.c !== undefined) ?? false
  const hasDN = pt?.some((r) => r.dn !== undefined) ?? false
  const hasDNDashS1Only = hasDoubleS && !hasA && !hasH && !hasC
  const dimColSpan = hasORing ? 4 : hasACHS1S2 ? 5 : hasACS1S2 ? 4 : hasTubeOdAS1 ? 3 : hasACS1 ? 3 : hasACHS2 ? 4 : hasACS2 ? 3 : hasA ? 4 : hasH ? 3 : hasDNDashS1Only ? 1 : hasDoubleS ? 3 : 2
  const hasBanjoColumns = pt?.some((row) => row.boltThread !== undefined || row.thread !== undefined || row.d !== undefined || row.l !== undefined || row.sfD !== undefined || (row.b !== undefined && row.threadE !== undefined)) ?? false
  const banjoColumns = [
    { key: "threadE", label: "Thread E" },
    { key: "boltThread", label: "Bolt Thread" },
    { key: "thread", label: "Thread" },
    { key: "dn", label: "DN" },
    { key: "dash", label: "Dash" },
    { key: "d", label: "d" },
    { key: "l", label: "L" },
    { key: "sfD", label: "SfD" },
    { key: "h", label: "H" },
    { key: "a", label: "A" },
    { key: "b", label: "B" },
    { key: "c", label: "C" },
    { key: "s", label: "S" },
    { key: "s1", label: "S1" },
  ] as const
  const visibleBanjoColumns = banjoColumns.filter(({ key }) => pt?.some((row) => row[key] !== undefined))

  // TH + TD helpers
  // ─── Dark-theme table cell helpers ─────────────────────────────────────────
  const TH = ({ children, last = false }: { children?: React.ReactNode; last?: boolean }) => (
    <th
      className={`px-2.5 py-2 text-left text-[9px] font-bold uppercase tracking-[0.12em] whitespace-nowrap${last ? "" : " border-r"}`}
      style={{ color: "#0e1c35", borderColor: "#e2e8f0" }}
    >
      {children}
    </th>
  )
  const THC = ({ children, last = false, colSpan }: { children?: React.ReactNode; last?: boolean; colSpan?: number }) => (
    <th
      colSpan={colSpan}
      className={`px-2.5 py-2 text-center text-[9px] font-bold uppercase tracking-[0.12em] whitespace-nowrap${last ? "" : " border-r"}`}
      style={{ color: "#0e1c35", borderColor: "#e2e8f0" }}
    >
      {children}
    </th>
  )
  const TD = ({ children, highlight = false, center = false, last = false }: { children?: React.ReactNode; highlight?: boolean; center?: boolean; last?: boolean }) => (
    <td
      className={`px-2.5 py-1.5 text-[11px] border-b${last ? "" : " border-r"}${center ? " text-center" : ""}`}
      style={{
        color: highlight ? "#c0420a" : "#374151",
        borderColor: "#e2e8f0",
        fontWeight: highlight ? 700 : 400,
        fontFamily: highlight ? "var(--font-mono, monospace)" : "inherit",
        letterSpacing: highlight ? "0.04em" : "inherit",
      }}
    >
      {children}
    </td>
  )

  return (
    <div className={`relative min-h-screen overflow-hidden ${editorialHero ? "bg-[#f8fafc]" : "bg-[#f8fafc]"}`}>
      {editorialHero ? <Topography className="pointer-events-none fixed inset-0 z-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={3.4} thickness={0.018} glow={0.22} opacity={0.07} mouseRadius={0.24} mouseStrength={0.3} /> : null}
      <div className="relative z-10">

      {/* ── Breadcrumb ───────────────────────────────────────────────── */}
      <nav
        className="bg-white border-b border-[#e8eef5] shadow-sm"
        aria-label="Breadcrumb"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <ol className="flex items-center gap-0 flex-wrap">
            {[
              { href: "/", label: "Home" },
              { href: "/products", label: "Products" },
              ...(showParentCategory ? [{ href: parentCategoryHref, label: parentCategoryName }] : []),
              { href: categoryHref, label: categoryName },
            ].map((crumb, i) => (
              <li key={i} className="flex items-center">
                <Link
                  href={crumb.href}
                  className="text-[11px] font-medium tracking-widest uppercase text-[#6b7280] hover:text-[#e05a2e] transition-colors"
                >
                  {crumb.label}
                </Link>
                <ChevronRight size={12} className="mx-2 text-[#d1d5db]" />
              </li>
            ))}
            <li className="flex items-center gap-1.5" aria-current="page">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e05a2e] flex-shrink-0" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#e05a2e]">
                {product.shortName}
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* ── Product Header ───────────────────────────────────────────── */}
      {editorialHero ? <EditorialBspHero product={product} categoryName={categoryName} isTechnicalDiagram={isTechnicalDiagram} /> : <section className="relative overflow-hidden">
        {/* Factory background image */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/images/factory-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
          aria-hidden
        />
        {/* Primary overlay — strong dark navy across full width */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(8,18,40,0.88)" }}
          aria-hidden
        />
        {/* Secondary gradient — left heavier, right still very dark */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, rgba(8,18,40,0.30) 0%, rgba(8,18,40,0.10) 50%, rgba(8,18,40,0.20) 100%)",
          }}
          aria-hidden
        />
        {/* Orange warmth accent — right side only, very subtle */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 45% 60% at 92% 50%, rgba(224,90,46,0.10) 0%, transparent 60%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left: blueprint image with moving border */}
            <MovingBorderFrame>
              {/* Blueprint image content */}
              <div className="group relative w-full h-80 overflow-hidden" style={{ background: "#0e1c35", borderRadius: "6px" }}>
                <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-30 pointer-events-none">
                  <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest" style={{ color: "#e05a2e" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e05a2e]" />
                    {categoryName}
                  </span>
                  <span className="text-[9px] font-mono font-semibold text-white/35">
                    {product.slug.split("-").pop()?.toUpperCase()}
                  </span>
                </div>
                {product.image && (
                  <div className="absolute inset-0 z-10 transition-transform duration-500 ease-out group-hover:scale-[1.06] group-hover:-translate-y-1.5">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={`object-contain p-8${isTechnicalDiagram ? " technical-diagram-image" : ""}`}
                    />
                  </div>
                )}
                <div className="absolute bottom-3 right-4 z-40 transition-all duration-500 group-hover:scale-110"
                  style={{ filter: "drop-shadow(0 0 0px rgba(224,90,46,0))", transition: "filter 0.5s ease, transform 0.3s ease, opacity 0.4s ease" }}
                >
                  <div className="group-hover:bsp-logo-glow transition-all duration-500">
                    <Image
                      src="/images/hydronex-logo-white.png"
                      alt="Hydronex"
                      width={88}
                      height={34}
                      className="object-contain bsp-hydronex-logo"
                      style={{ opacity: 0.38 }}
                    />
                  </div>
                </div>
              </div>
            </MovingBorderFrame>

            {/* Right: product info */}
            <div>
              {/* Eyebrow */}
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center gap-2 text-[#e05a2e] bsp-fade-up" style={{ animationDelay: "0s" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#e05a2e] flex-shrink-0" />
                {categoryName}
              </p>

              {/* Animated heading */}
              <AnimatedHeading text={product.name} />

              {/* Description */}
              <p className="leading-relaxed mb-6 text-sm bsp-fade-up" style={{ color: "rgba(203,220,248,0.85)", animationDelay: "0.2s" }}>
                {product.description}
              </p>

              {/* Glassmorphism specs card — dark variant for bg image */}
              {(product.material || product.surfaceTreat || product.application) && (
                <div
                  className="rounded-xl p-5 mb-7 space-y-3 bsp-fade-up"
                  style={{
                    animationDelay: "0.3s",
                    background: "rgba(10,22,48,0.55)",
                    backdropFilter: "blur(16px) saturate(1.4)",
                    WebkitBackdropFilter: "blur(16px) saturate(1.4)",
                    border: "1px solid rgba(224,90,46,0.28)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)",
                  }}
                >
                  {product.material && (
                    <p className="text-sm" style={{ color: "rgba(200,218,248,0.82)" }}>
                      <span className="font-bold text-white">Material:</span>{" "}
                      {product.material};
                    </p>
                  )}
                  {product.surfaceTreat && (
                    <p className="text-sm" style={{ color: "rgba(200,218,248,0.82)" }}>
                      <span className="font-bold text-white">Surface Treat:</span>{" "}
                      {product.surfaceTreat};
                    </p>
                  )}
                  {product.application && (
                    <p className="text-sm" style={{ color: "rgba(200,218,248,0.82)" }}>
                      <span className="font-bold text-white">Application:</span>{" "}
                      {product.application}
                    </p>
                  )}
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 bsp-fade-up" style={{ animationDelay: "0.4s" }}>
                {/* Typewriter request quote button */}
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center font-bold py-3
                    transition-all duration-200 hover:shadow-[0_6px_24px_rgba(224,90,46,0.45)] active:scale-[0.98]"
                  style={{
                    background: "#e05a2e",
                    color: "#fff",
                    borderRadius: "4px",
                    letterSpacing: "0.08em",
                    fontSize: "0.82rem",
                    width: "196px",
                  }}
                >
                  <span className="inline-flex items-center" style={{ width: "140px", justifyContent: "flex-start" }}>
                    <span>{displayed}</span>
                    <span
                      aria-hidden
                      style={{
                        display: "inline-block",
                        width: "2px",
                        height: "1em",
                        background: "#fff",
                        marginLeft: "2px",
                        verticalAlign: "middle",
                        animation: "cta-cursor-blink 0.7s step-end infinite",
                        opacity: phase === "hold" ? 1 : 0.85,
                        flexShrink: 0,
                      }}
                    />
                  </span>
                  <ChevronRight size={14} style={{ flexShrink: 0 }} />
                </Link>

                {/* Ringing phone call now button */}
                <a
                  href="tel:+1234567890"
                  className="bsp-call-btn inline-flex items-center justify-center gap-2.5 font-bold px-7 py-3
                    transition-all duration-200 active:scale-[0.98]"
                  style={{
                    borderRadius: "4px",
                    letterSpacing: "0.05em",
                    fontSize: "0.82rem",
                  }}
                >
                  <RingingPhone />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>}

      {/* ── Products Specification Table ─────────────────────────────── */}
      {pt && pt.length > 0 && (
        <section
          className="py-14 relative"
          style={{ background: "linear-gradient(135deg, #fdf6f0 0%, #f9f4ef 40%, #f5f8ff 100%)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section heading */}
            <div className="flex items-center gap-4 mb-8">
              <span className="w-1 h-7 rounded-full flex-shrink-0" style={{ background: "#e05a2e" }} aria-hidden />
              <h2 className="text-2xl font-extrabold tracking-tight text-[#0e1c35]">Products Specification</h2>
              <span
                className="ml-auto text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ background: "#fff0eb", color: "#c0420a", border: "1px solid #f4c4aa" }}
              >
                {pt.length} variants
              </span>
            </div>
            <AnimatedSpecTable>
              {/* Table wrapper — white card with orange top accent bar */}
              <div
                className="overflow-x-auto rounded-xl"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06), 0 4px 24px rgba(224,90,46,0.06)",
                  borderTop: "3px solid #e05a2e",
                }}
              >
              {hasParkerEWB ? (
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{
                      background: "linear-gradient(90deg, #fff0eb 0%, #fff7f3 100%)",
                      borderBottom: "1px solid #f4c4aa"
                    }}>
                      <TH>Sinopulse Part No.</TH>
                      <TH>Parker Part No.</TH>
                      <THC>{hasParkerR ? "R (mm)" : "Thread (Inch)"}</THC>
                      <THC>Hose I.D. (Inch)</THC>
                      <THC>A (mm)</THC>
                      {hasParkerEOrC && <THC>{hasParkerC ? "C (mm)" : "E (mm)"}</THC>}
                      {hasParkerH && <THC>H (mm)</THC>}
                      {hasParkerW && <THC>W (mm)</THC>}
                      <THC last>B (mm)</THC>
                    </tr>
                  </thead>
                  <tbody>
                    {pt.map((row, i) => (
                      <tr
                        key={i}
                        className="bsp-table-row"
                        style={{ background: i % 2 === 0 ? "#ffffff" : "#fafbfc" }}
                      >
                        <TD highlight>{row.partNo}</TD>
                        <TD>{row.parkerPartNo}</TD>
                        <TD center>{hasParkerR ? row.r : row.threadE}</TD>
                        <TD center>{row.hoseId}</TD>
                        <TD center>{row.a}</TD>
                        {hasParkerEOrC && <TD center>{hasParkerC ? row.c : row.e}</TD>}
                        {hasParkerH && <TD center>{row.h ?? "—"}</TD>}
                        {hasParkerW && <TD center>{row.w}</TD>}
                        <TD center last>{row.b}</TD>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : hasBanjoColumns ? (
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{
                      background: "linear-gradient(90deg, #fff0eb 0%, #fff7f3 100%)",
                      borderBottom: "2px solid #e05a2e"
                    }}>
                      <TH>Part No.</TH>
                      {visibleBanjoColumns.map(({ key, label }, index) => (
                        <THC key={key} last={index === visibleBanjoColumns.length - 1}>{label}</THC>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {pt.map((row, index) => (
                      <tr key={index} className="bsp-table-row" style={{ background: index % 2 === 0 ? "#ffffff" : "#fafbfc" }}>
                        <TD highlight>{row.partNo}</TD>
                        {visibleBanjoColumns.map(({ key }, columnIndex) => (
                          <TD key={key} center last={columnIndex === visibleBanjoColumns.length - 1}>{row[key]}</TD>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="w-full text-sm border-collapse">
                  <thead>
                    {/* Group header row */}
                    <tr style={{
                      background: "linear-gradient(90deg, #fff0eb 0%, #fff7f3 100%)",
                      borderBottom: "1px solid #f4c4aa"
                    }}>
                      <THC colSpan={2} />
                      <THC colSpan={hasDN ? 2 : 1}>Hose Bore</THC>
                      <THC colSpan={dimColSpan} last>Dimensions</THC>
                    </tr>
                    {/* Sub-header row */}
                    <tr style={{
                      background: "linear-gradient(90deg, #fef8f5 0%, #fffaf8 100%)",
                      borderBottom: "2px solid #e05a2e"
                    }}>
                      <TH>Part No.</TH>
                      <TH>Thread</TH>
                      {hasDN && <THC>DN</THC>}
                      <THC>Dash</THC>
                      {hasORing ? (<><THC>O-Ring</THC><THC>A</THC><THC>C</THC><THC last>{hasORingS2 ? "S2" : "S1"}</THC></>) :
                        hasACS1 ? (<><THC>A</THC><THC>C</THC><THC last>S1</THC></>) :
                        hasACS1S2 ? (<><THC>A</THC><THC>C</THC><THC>S1</THC><THC last>S2</THC></>) :
                        hasACHS2 ? (<><THC>A</THC><THC>C</THC><THC>H</THC><THC last>S2</THC></>) :
                        hasACS2 ? (<><THC>A</THC><THC>C</THC><THC last>S2</THC></>) :
                        hasA ? (<><THC>A</THC><THC>C</THC><THC>H</THC><THC last>S</THC></>) :
                        hasDNDashS1Only ? (<THC last>S1</THC>) : (
                          <><THC>C</THC>
                            {hasDoubleS ? (<><THC>S1</THC><THC last>S2</THC></>) :
                              hasH ? (<><THC>S</THC><THC last>H</THC></>) :
                              (<THC last>S</THC>)}
                          </>
                        )}
                    </tr>
                  </thead>
                  <tbody>
                    {pt.map((row, idx) => (
                      <tr
                        key={idx}
                        className="bsp-table-row"
                        style={{ background: idx % 2 === 0 ? "#ffffff" : "#fafbfc" }}
                      >
                        <TD highlight>{row.partNo}</TD>
                        <TD>{row.threadE}</TD>
                        {hasDN && <TD center>{row.dn}</TD>}
                        <TD center>{row.dash}</TD>
                        {hasORing ? (
                          <><TD center>{row.oRing}</TD><TD center>{row.a}</TD><TD center>{row.c}</TD><TD center last>{hasORingS2 ? row.s2 : row.s1}</TD></>
                        ) : hasTubeOdAS1 ? (
                          <><TD center>{row.tubeOd}</TD><TD center>{row.a}</TD><TD center last>{row.s1}</TD></>
                        ) : hasACS1 ? (
                          <><TD center>{row.a}</TD><TD center>{row.c}</TD><TD center last>{row.s1}</TD></>
                        ) : hasACS1S2 ? (
                          <><TD center>{row.a}</TD><TD center>{row.c}</TD><TD center>{row.s1}</TD><TD center last>{row.s2 ?? "—"}</TD></>
                        ) : hasACHS1S2 ? (
                          <><TD center>{row.a}</TD><TD center>{row.c}</TD><TD center>{row.h}</TD><TD center>{row.s1}</TD><TD center last>{row.s2 ?? "—"}</TD></>
                        ) : hasACHS2 ? (
                          <><TD center>{row.a}</TD><TD center>{row.c}</TD><TD center>{row.h}</TD><TD center last>{row.s2}</TD></>
                        ) : hasACS2 ? (
                          <><TD center>{row.a}</TD><TD center>{row.c}</TD><TD center last>{row.s2}</TD></>
                        ) : hasA ? (
                          <><TD center>{row.a}</TD><TD center>{row.c}</TD><TD center>{row.h}</TD><TD center last>{row.s}</TD></>
                        ) : hasDNDashS1Only ? (
                          <TD center last>{row.s1}</TD>
                        ) : (
                          <><TD center>{row.c}</TD>
                            {hasDoubleS ? (<><TD center>{row.s1}</TD><TD center last>{row.s2}</TD></>) :
                              hasH ? (<><TD center>{row.s}</TD><TD center last>{row.h}</TD></>) :
                              (<TD center last>{row.s}</TD>)}
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              </div>
              {product.tableNote && (
                <p className="mt-4 text-xs italic" style={{ color: "#64748b" }}>{product.tableNote}</p>
              )}
            </AnimatedSpecTable>
          </div>
        </section>
      )}

      {/* ── Key Features ─────────────────────────────────────────────── */}
      {additionalSpecificationSection}

      {product.features.length > 0 && (
        <section className="bsp-features-gradient relative overflow-hidden py-14">
          {/* Dot-grid texture overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" aria-hidden />
              <h2 className="text-2xl font-bold text-white">{featureHeading}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {product.features.map((feature, idx) => (
                <AnimatedFeatureItem key={idx} feature={feature} idx={idx} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Specifications ───────────────────────────────────────────── */}
      {product.specs.length > 0 && (
        <section
          className="relative overflow-hidden border-y border-[#dbe8ea] bg-white py-14"
          style={{
            backgroundImage: "radial-gradient(circle at 8% 15%, rgba(143,213,208,0.16), transparent 24%), radial-gradient(circle at 88% 82%, rgba(242,101,34,0.08), transparent 24%)",
          }}
        >
          {/* Fine texture keeps the white surface feeling dimensional. */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgba(20,49,38,0.11) 0.7px, transparent 0.7px)",
              backgroundSize: "18px 18px",
              opacity: 0.18,
            }}
            aria-hidden
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-7 rounded-full bg-[#f26522] flex-shrink-0" aria-hidden />
              <h2 className="text-2xl font-bold text-[#143126]">Specifications</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {product.specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col gap-1.5 rounded-xl px-5 py-4 transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.68)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(20,49,38,0.12)",
                    borderLeft: "3px solid #f26522",
                    boxShadow: "0 10px 24px rgba(20,49,38,0.08)",
                  }}
                >
                  {/* Label row */}
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#f26522" }}
                      aria-hidden
                    />
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest"
                      style={{ color: "#61786e" }}
                    >
                      {spec.label}
                    </span>
                  </div>
                  {/* Value */}
                  <p
                    className="pl-3.5 text-sm font-semibold leading-snug text-[#143126]"
                  >
                    {spec.value}
                  </p>
                  {/* Hover shimmer bottom line */}
                  <span
                    className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-full"
                    style={{ background: "linear-gradient(90deg, #f26522, rgba(242,101,34,0.2))" }}
                    aria-hidden
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Other Products ───────────────────────────────────────────── */}
      {otherProductsSection}

      </div>
    </div>
  )
}
