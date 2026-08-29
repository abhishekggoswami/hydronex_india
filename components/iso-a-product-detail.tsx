"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, ChevronRight, Check } from "lucide-react"

// ─── Application image map ───────────────────────────────────────────────────
const APP_IMAGE_MAP: Record<string, string> = {
  "hydraulic":      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=640&q=80",
  "machinery":      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=640&q=80",
  "oilfield":       "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=640&q=80",
  "mining":         "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=640&q=80",
  "construction":   "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=640&q=80",
  "transportation": "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=640&q=80",
  "food":           "https://images.unsplash.com/photo-1440186347098-386b7459ad6b?w=640&q=80",
  "industrial":     "https://images.unsplash.com/photo-1518770660439-4636190af475?w=640&q=80",
  "agriculture":    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=640&q=80",
  "marine":         "https://images.unsplash.com/photo-1520116468816-95b69f847357?w=640&q=80",
  "chemical":       "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=640&q=80",
  "steel":          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=640&q=80",
  "default":        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=640&q=80",
}

function normalizeAppKey(app: string): string {
  const lower = app.toLowerCase()
  for (const key of Object.keys(APP_IMAGE_MAP)) {
    if (lower.includes(key)) return key
  }
  return "default"
}

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
    features: string[]
    specs: Spec[]
    applications: string[]
    partTable?: PartRow[]
    maleTable?: PartRow[]
    kzbSeriesFemaleTable?: Array<{
      partNo: string
      thread: string
      e: number
      f: number
      g: number
      partNo2: string
      thread2: string
      e2: number
      f2: number
      g2: number
    }>
    accessoriesTable?: Array<{
      size: string
      inch: string
      partNoPVC: string
      colorPVC: string
      partNoAluminum?: string
      partNoPVC2?: string
      colorPVC2?: string
      partNoAluminum2?: string
    }>
    tableNote?: string
    image?: string
    techSpecs?: string[]
    nippelTable?: Array<{
      partNo: string
      thread: string
      bspp?: string
      overallLength: number
      exposedLength?: number
      hexSize: number
      largestDiameter: number
      partNo2: string
      thread2: string
      bspp2?: string
      overallLength2: number
      exposedLength2?: number
      hexSize2: number
      largestDiameter2: number
    }>
    nippelDiagramImage?: string
    couplerDiagramImage?: string
    couplerSFFDiagramImage?: string
    kvvDetailTable?: Array<{
      size: string
      pressure: number
      flowRate: number
      material?: string
      sealMaterial?: string
      tempRange?: string
    }>
    kvvDetailTableNote?: string
    qktfWingNutTable?: Array<{
      partNo: string
      thread: string
      bodySize: string
      overallLength: number
      exposedLength: number
      hexSize: number
    }>
    qktfWingNutDiagramImage?: string
    qktfMaleTable?: Array<{
      partNo: string
      thread: string
      bodySize: string
      overallLength: number
      exposedLength: number
      hexSize: number
    }>
    qktfMaleDiagramImage?: string
    qktfHexNutTable?: Array<{
      partNo: string
      thread: string
      bodySize: string
      overallLength: number
      exposedLength: number
      hexSize: number
    }>
    qktfHexNutDiagramImage?: string
    qktfDetailTable?: Array<{
      size: string
      pressure: number
      material: string
      sealMaterial: string
      tempRange: string
    }>
    kcvFemaleMetricTable?: Array<{
      partNo: string
      thread: string
      overallLength: number
      hexSize: number
      largestDiameter: number
    }>
    kcvFemaleDiagram2Image?: string
    kcvMaleMetricTable?: Array<{
      partNo: string
      thread: string
      overallLength: number
      hexSize: number
      largestDiameter: number
    }>
    kcvMaleDiagram2Image?: string
    ksgMaleTable?: Array<{
      partNo: string
      thread: string
      overallLength: number
      hexSize: number
      largestDiameter: number
    }>
    ksgMaleDiagramImage?: string
    ksgFemaleTable?: Array<{
      partNo: string
      thread: string
      overallLength: number
      hexSize: number
      largestDiameter: number
    }>
    ksgFemaleDiagramImage?: string
    ksgTableOrder?: 'male-first' | 'female-first'
    ksgTableUnit?: 'mm' | 'inch'
    qktlCouplerSFFTable?: Array<{
      partNo: string
      thread: string
      bspp?: string
      overallLength: number
      hexSize: number
      largestDiameter: number
      partNo2: string
      thread2: string
      overallLength2: number
      hexSize2: number
      largestDiameter2: number
    }>
    dustProtectionTable?: Array<{
      size: string
      inch: string
      partNoPVC: string
      colorPVC: string
      partNoAluminum: string
      colorAluminum: string
      partNoPVC2?: string
      partNoAluminum2?: string
    }>
    ratedPressureFlowTable?: Array<{ size: string; pressure: number; flowRate: number; tempRange: string }>
    ratedPressureTable?: Array<{ size: string; pressure: number }>
    performanceTable?: Array<{
      size: string
      inch: string
      pressure: string
      flowRate: string
      burstP1: string
      burstP2: string
      burstP3: string
    }>
  }
  otherProductsSection: React.ReactNode
  supplementalContent?: React.ReactNode
  category?: "iso-a" | "iso-b" | "push-and-pull" | "flat-face" | "threaded"
  categoryLabel?: string
  categoryPath?: string
}

export function ISOAProductDetail({ product, otherProductsSection, supplementalContent, category = "iso-a", categoryLabel, categoryPath }: BSPProductDetailProps) {
  const { displayed, phase } = useTypewriter("REQUEST QUOTE")

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
    <div className="iso-bsp-product-detail min-h-screen bg-[#f8fafc]">

      {/* ── Breadcrumb ─────────────────────────────────────����─────────── */}
      <nav
        className="bg-white border-b border-[#e8eef5] shadow-sm"
        aria-label="Breadcrumb"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <ol className="flex items-center gap-0 flex-wrap">
            {[
              { href: "/", label: "Home" },
              { href: "/products", label: "Products" },
              { href: "/products/hydraulic-quick-couplings", label: "Hydraulic Quick Couplings" },
              {
                href: categoryPath
                  ? categoryPath
                  : category === "iso-b"
                    ? "/products/hydraulic-quick-couplings/iso-b-couplers"
                    : category === "push-and-pull"
                      ? "/products/hydraulic-quick-couplings/push-and-pull-coupler"
                      : category === "flat-face"
                        ? "/products/hydraulic-quick-couplings/flat-face-couplers"
                        : category === "threaded"
                          ? "/products/hydraulic-quick-couplings/threaded-couplers"
                          : "/products/hydraulic-quick-couplings/iso-a-couplers",
                label: categoryLabel
                  ? categoryLabel
                  : category === "iso-b"
                    ? "ISO-B Couplers"
                    : category === "push-and-pull"
                      ? "Push-and-Pull Couplers"
                      : category === "flat-face"
                        ? "Flat Face Couplers"
                        : category === "threaded"
                          ? "Threaded Couplers"
                          : "ISO-A Couplers"
              },
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

      {/* ── Product Header ──────��────────────────────────────────────── */}
      <section className="relative overflow-hidden">
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

            {/* Left: product visual with the same animated blueprint frame as BSP details */}
            <MovingBorderFrame>
              <div className="group relative w-full h-80 overflow-hidden" style={{ background: "#0e1c35", borderRadius: "6px" }}>
                <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-30 pointer-events-none">
                  <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest" style={{ color: "#e05a2e" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e05a2e]" />
                    {categoryLabel || (category === "iso-b" ? "ISO-B Quick Couplers" : category === "push-and-pull" ? "Push-and-Pull Couplers" : category === "flat-face" ? "Flat Face Quick Couplers" : "ISO-A Quick Couplers")}
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
                      className="object-contain p-8"
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
                {categoryLabel || (category === "iso-b" ? "ISO-B Quick Couplers" : category === "push-and-pull" ? "Push-and-Pull Couplers" : category === "flat-face" ? "Flat Face Quick Couplers" : "ISO-A Quick Couplers")}
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
      </section>

      {/* ── Technical Data ──────────────────────────────────────────────── */}
      <section className="relative py-14 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-lg border border-gray-200 overflow-hidden">
            {/* Row 1: Body Size */}
            <div className="grid grid-cols-2 divide-x divide-gray-300">
              <div className="px-8 py-6 bg-gray-100">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Technical Data</p>
                <h3 className="text-base font-semibold text-gray-900">Body Size (in)</h3>
              </div>
              <div className="px-8 py-6 bg-white">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Specifications</p>
                <p className="text-base text-gray-900">1/4", 3/8", 1/2", 3/4", 1"</p>
              </div>
            </div>
            
            {/* Row 2: Rated Pressure */}
            <div className="grid grid-cols-2 divide-x divide-gray-300 border-t border-gray-300">
              <div className="px-8 py-6 bg-white">
                <h3 className="text-base font-semibold text-gray-900">Rated Pressure (Bar)</h3>
              </div>
              <div className="px-8 py-6 bg-gray-100">
                <p className="text-base text-gray-900">350, 300, 300, 250, 250</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Features ─────────────────────────────────────────────── */}
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
              <h2 className="text-2xl font-bold text-white">Key Features</h2>
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
          className="relative overflow-hidden py-14"
          style={{
            background: "linear-gradient(130deg,#c84000,#e05a2e,#f07d1a,#f5a020,#e86b10,#e05a2e,#c84000)",
            backgroundSize: "300% 300%",
            animation: "cta-gradient-shift 6s ease infinite",
          }}
        >
          {/* Noise texture overlay — same as CTA section */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
              backgroundSize: "200px 200px",
              opacity: 0.15,
            }}
            aria-hidden
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-7 rounded-full bg-white flex-shrink-0" aria-hidden />
              <h2 className="text-2xl font-bold text-white">Specifications</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {product.specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col gap-1.5 rounded-xl px-5 py-4 transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(0,0,0,0.28)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderLeft: "3px solid rgba(255,255,255,0.70)",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.18)",
                  }}
                >
                  {/* Label row */}
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "rgba(255,255,255,0.7)" }}
                      aria-hidden
                    />
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest"
                      style={{ color: "rgba(255,255,255,0.65)" }}
                    >
                      {spec.label}
                    </span>
                  </div>
                  {/* Value */}
                  <p
                    className="text-sm font-semibold leading-snug pl-3.5 text-white"
                  >
                    {spec.value}
                  </p>
                  {/* Hover shimmer bottom line */}
                  <span
                    className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-full"
                    style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.9), rgba(255,255,255,0.3))" }}
                    aria-hidden
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Technical Specifications ─────────────────────────────────── */}
      {product.techSpecs && product.techSpecs.length > 0 && (
        <section className="relative py-14 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" aria-hidden />
              <h2 className="text-2xl font-bold text-gray-900">Technical Specifications</h2>
            </div>
            <ul className="space-y-3">
              {product.techSpecs.map((spec, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-white rounded-lg border border-gray-200 px-5 py-4">
                  <span className="mt-1 w-2 h-2 rounded-full bg-[#e05a2e] flex-shrink-0" aria-hidden />
                  <span className="text-sm text-gray-700">{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── Rated Pressure Table ──────────────────────────────────────── */}
      {product.ratedPressureTable && product.ratedPressureTable.length > 0 && (
        <section className="relative py-14 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" aria-hidden />
              <h2 className="text-2xl font-bold text-gray-900">Rated Pressure</h2>
            </div>
            
            {/* Rated Pressure Table */}
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Body Size (in)</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Rated Pressure (Bar)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.ratedPressureTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-700 border-b border-gray-100">{row.size}</td>
                      <td className="px-6 py-4 text-gray-900 font-medium border-b border-gray-100">{row.pressure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── Applications ─────────────────────────────────────────────── */}
      {product.applications.length > 0 && (
        <section
          className="relative overflow-hidden border-y border-[rgba(224,90,46,0.25)] bsp-apps-gradient"
          style={{
            background: "linear-gradient(130deg,#090603,#1a0d05,#3a1a08,#6b2d10,#8c3a12,#6b2d10,#3a1a08,#1a0d05,#090603)",
            backgroundSize: "400% 400%",
            animation: "bsp-apps-move 8s ease infinite",
          }}
        >
          {/* Header — constrained width */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
            <div className="flex items-center gap-3">
              <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" aria-hidden />
              <h2 className="text-2xl font-bold text-white">Applications</h2>
            </div>
          </div>
          {/* Full-bleed infinite image marquee */}
          <div className="bsp-carousel-outer overflow-hidden pb-10">
            <div className="bsp-carousel-track flex gap-0" style={{ width: "max-content" }}>
              {[...product.applications, ...product.applications].map((app, i) => {
                const imgSrc = APP_IMAGE_MAP[normalizeAppKey(app)] ?? APP_IMAGE_MAP["default"]
                return (
                  <div
                    key={i}
                    className="relative flex-shrink-0 overflow-hidden"
                    style={{ width: "320px", height: "200px" }}
                  >
                    <Image
                      src={imgSrc}
                      alt={app}
                      fill
                      className="object-cover"
                      sizes="320px"
                      crossOrigin="anonymous"
                    />
                    {/* Dark gradient overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(to top, rgba(8,18,40,0.80) 0%, rgba(8,18,40,0.20) 60%, transparent 100%)",
                      }}
                      aria-hidden
                    />
                    {/* Label */}
                    <div className="absolute bottom-0 inset-x-0 px-4 py-3 flex items-end gap-2">
                      <span
                        className="w-1 h-4 rounded-full flex-shrink-0"
                        style={{ background: "#e05a2e" }}
                        aria-hidden
                      />
                      <p className="text-white text-[13px] font-semibold leading-tight">{app}</p>
                    </div>
                    {/* Right separator line */}
                    <div
                      className="absolute top-0 right-0 bottom-0 w-px"
                      style={{ background: "rgba(255,255,255,0.10)" }}
                      aria-hidden
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Nipple Female Thread / Male ───────────────────────────��───── */}
      {product.nippelTable && product.nippelTable.length > 0 && (
        <section className="relative py-14 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" aria-hidden />
              <h2 className="text-2xl font-bold text-gray-900">Nipple Female Thread / Male</h2>
            </div>
            
            {/* Diagram Image */}
            {product.nippelDiagramImage && (
              <div className="mb-8 flex justify-center">
                <div className="w-full max-w-2xl bg-white rounded-lg border border-gray-200 p-8 flex items-center justify-center">
                  <img
                    src={product.nippelDiagramImage}
                    alt="Nipple Female Thread / Male Diagram"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
            )}

            {/* Technical Table */}
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                    {product.nippelTable && product.nippelTable[0]?.a !== undefined ? (
                      <>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Thread</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">A (mm)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">C (mm)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">D (mm)</th>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Thread</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">A (in.)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">C (in.)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">D (in.)</th>
                      </>
                    ) : product.nippelTable && product.nippelTable[0]?.bspp !== undefined ? (
                      <>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Thread Size</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">BSPP</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Overall Length (mm)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Exposed Length (mm)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Hex Size (mm)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Largest Diameter (mm)</th>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Thread Size</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">BSPP</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Overall Length (in.)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Exposed Length (in.)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Hex Size (in.)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Largest Diameter (in.)</th>
                      </>
                    ) : product.nippelTable && product.nippelTable[0]?.exposedLength === undefined ? (
                      <>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Thread Size</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Overall Length (mm)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Hex Size (mm)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Largest Diameter (mm)</th>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Thread Size</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Overall Length (inch)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Hex Size (inch)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Largest Diameter (inch)</th>
                      </>
                    ) : (
                      <>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Thread</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Overall Length (mm)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Exposed Length (mm)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Hex Size (mm)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Largest Diameter (mm)</th>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Thread</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Overall Length (in.)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Exposed Length (in.)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Hex Size (in.)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Largest Diameter (in.)</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {product.nippelTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      {row.a !== undefined ? (
                        <>
                          <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNo}</td>
                          <td className="px-3 py-3 text-gray-700 text-sm">{row.thread}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.a}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.c}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.d}</td>
                          <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNo2}</td>
                          <td className="px-3 py-3 text-gray-700 text-sm">{row.thread2}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.a2}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.c2}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.d2}</td>
                        </>
                      ) : row.bspp !== undefined ? (
                        <>
                          <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNo}</td>
                          <td className="px-3 py-3 text-gray-700 text-sm">{row.thread}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.bspp}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.overallLength}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.exposedLength}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.hexSize}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.largestDiameter}</td>
                          <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNo2}</td>
                          <td className="px-3 py-3 text-gray-700 text-sm">{row.thread2}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.bspp2}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.overallLength2}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.exposedLength2}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.hexSize2}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.largestDiameter2}</td>
                        </>
                      ) : row.exposedLength === undefined ? (
                        <>
                          <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNo}</td>
                          <td className="px-3 py-3 text-gray-700 text-sm">{row.thread}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.overallLength}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.hexSize}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.largestDiameter}</td>
                          <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNo2}</td>
                          <td className="px-3 py-3 text-gray-700 text-sm">{row.thread2}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.overallLength2}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.hexSize2}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.largestDiameter2}</td>
                        </>
                      ) : (
                        <>
                          <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNo}</td>
                          <td className="px-3 py-3 text-gray-700 text-sm">{row.thread}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.overallLength}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.exposedLength}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.hexSize}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.largestDiameter}</td>
                          <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNo2}</td>
                          <td className="px-3 py-3 text-gray-700 text-sm">{row.thread2}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.overallLength2}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.exposedLength2}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.hexSize2}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.largestDiameter2}</td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── KCV Male Metric Table ────────────────────────────────────────── */}
      {product.kcvMaleMetricTable && product.kcvMaleMetricTable.length > 0 && (
        <section className="relative py-14 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" aria-hidden />
              <h2 className="text-2xl font-bold text-gray-900">Male – Metric Thread</h2>
            </div>
            {product.kcvMaleDiagram2Image && (
              <div className="mb-8 flex justify-center">
                <div className="w-full max-w-2xl bg-white rounded-lg border border-gray-200 p-8 flex items-center justify-center">
                  <img
                    src={product.kcvMaleDiagram2Image}
                    alt="Male Metric Thread dimensional diagram"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
            )}
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                    <th className="px-4 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                    <th className="px-4 py-3 text-left text-white font-semibold text-xs">Thread Size</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-xs">Overall Length (mm)</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-xs">Hex Size (mm)</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-xs">Largest Diameter (mm)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.kcvMaleMetricTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 text-gray-900 font-medium text-sm border-b border-gray-100">{row.partNo}</td>
                      <td className="px-4 py-3 text-gray-700 text-sm border-b border-gray-100">{row.thread}</td>
                      <td className="px-4 py-3 text-center text-gray-700 text-sm border-b border-gray-100">{row.overallLength}</td>
                      <td className="px-4 py-3 text-center text-gray-700 text-sm border-b border-gray-100">{row.hexSize}</td>
                      <td className="px-4 py-3 text-center text-gray-700 text-sm border-b border-gray-100">{row.largestDiameter}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── Couplers Female Thread / Female ──────────────────────────── */}
      {product.partTable && product.partTable.length > 0 && (
        <section className="relative py-14 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" aria-hidden />
              <h2 className="text-2xl font-bold text-gray-900">Couplers Female Thread / Female</h2>
            </div>

            {product.couplerDiagramImage && (
              <div className="mb-8 flex justify-center">
                <div className="w-full max-w-2xl bg-white rounded-lg border border-gray-200 p-8 flex items-center justify-center">
                  <img
                    src={product.couplerDiagramImage}
                    alt="Couplers Female Thread / Female Diagram"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
            )}

            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                    {product.partTable[0]?.e !== undefined ? (
                      <>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Thread</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">E (mm)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">F (mm)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">G (mm)</th>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Thread</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">E (in.)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">F (in.)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">G (in.)</th>
                      </>
                    ) : (
                      <>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Thread</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Overall Length (mm)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Hex Size (mm)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Largest Diameter (mm)</th>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                        <th className="px-3 py-3 text-left text-white font-semibold text-xs">Thread</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Overall Length (in.)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Hex Size (in.)</th>
                        <th className="px-3 py-3 text-center text-white font-semibold text-xs">Largest Diameter (in.)</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {product.partTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      {row.e !== undefined ? (
                        <>
                          <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNo}</td>
                          <td className="px-3 py-3 text-gray-700 text-sm">{row.thread}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.e}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.f}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.g}</td>
                          <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNo2}</td>
                          <td className="px-3 py-3 text-gray-700 text-sm">{row.thread2}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.e2}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.f2}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.g2}</td>
                        </>
                      ) : (
                        <>
                          <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNo}</td>
                          <td className="px-3 py-3 text-gray-700 text-sm">{row.thread}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.overallLength}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.hexSize}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.largestDiameter}</td>
                          <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNo2}</td>
                          <td className="px-3 py-3 text-gray-700 text-sm">{row.thread2}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.overallLength2}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.hexSize2}</td>
                          <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.largestDiameter2}</td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── KCV Female Metric Table ──────────────────────────────────────── */}
      {product.kcvFemaleMetricTable && product.kcvFemaleMetricTable.length > 0 && (
        <section className="relative py-14 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" aria-hidden />
              <h2 className="text-2xl font-bold text-gray-900">Female – Metric Thread</h2>
            </div>
            {product.kcvFemaleDiagram2Image && (
              <div className="mb-8 flex justify-center">
                <div className="w-full max-w-2xl bg-white rounded-lg border border-gray-200 p-8 flex items-center justify-center">
                  <img
                    src={product.kcvFemaleDiagram2Image}
                    alt="Female Metric Thread dimensional diagram"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
            )}
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                    <th className="px-4 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                    <th className="px-4 py-3 text-left text-white font-semibold text-xs">Thread Size</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-xs">Overall Length (inch)</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-xs">Hex Size (inch)</th>
                    <th className="px-4 py-3 text-center text-white font-semibold text-xs">Largest Diameter (inch)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.kcvFemaleMetricTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 text-gray-900 font-medium text-sm border-b border-gray-100">{row.partNo}</td>
                      <td className="px-4 py-3 text-gray-700 text-sm border-b border-gray-100">{row.thread}</td>
                      <td className="px-4 py-3 text-center text-gray-700 text-sm border-b border-gray-100">{row.overallLength}</td>
                      <td className="px-4 py-3 text-center text-gray-700 text-sm border-b border-gray-100">{row.hexSize}</td>
                      <td className="px-4 py-3 text-center text-gray-700 text-sm border-b border-gray-100">{row.largestDiameter}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── Coupler Female Thread (SFF) ──────────────────────────────────── */}
      {product.qktlCouplerSFFTable && product.qktlCouplerSFFTable.length > 0 && (
        <section className="relative py-14 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" aria-hidden />
              <h2 className="text-2xl font-bold text-gray-900">Coupler Female Thread</h2>
            </div>
            {product.couplerSFFDiagramImage && (
              <div className="mb-8 flex justify-center">
                <div className="w-full max-w-2xl bg-white rounded-lg border border-gray-200 p-8 flex items-center justify-center">
                  <img src={product.couplerSFFDiagramImage} alt="Coupler Female Thread Diagram" style={{ maxWidth: "100%", height: "auto" }} />
                </div>
              </div>
            )}
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                    <th className="px-3 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                    <th className="px-3 py-3 text-left text-white font-semibold text-xs">Thread Size</th>
                    {product.qktlCouplerSFFTable[0]?.bspp !== undefined && (
                      <th className="px-3 py-3 text-center text-white font-semibold text-xs">BSPP</th>
                    )}
                    <th className="px-3 py-3 text-center text-white font-semibold text-xs">Overall Length (mm)</th>
                    <th className="px-3 py-3 text-center text-white font-semibold text-xs">Hex Size (mm)</th>
                    <th className="px-3 py-3 text-center text-white font-semibold text-xs">Largest Diameter (mm)</th>
                    <th className="px-3 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                    <th className="px-3 py-3 text-left text-white font-semibold text-xs">Thread Size</th>
                    <th className="px-3 py-3 text-center text-white font-semibold text-xs">Overall Length (in.)</th>
                    <th className="px-3 py-3 text-center text-white font-semibold text-xs">Hex Size (in.)</th>
                    <th className="px-3 py-3 text-center text-white font-semibold text-xs">Largest Diameter (in.)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.qktlCouplerSFFTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNo}</td>
                      <td className="px-3 py-3 text-gray-700 text-sm">{row.thread}</td>
                      {row.bspp !== undefined && <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.bspp}</td>}
                      <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.overallLength}</td>
                      <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.hexSize}</td>
                      <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.largestDiameter}</td>
                      <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNo2}</td>
                      <td className="px-3 py-3 text-gray-700 text-sm">{row.thread2}</td>
                      <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.overallLength2}</td>
                      <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.hexSize2}</td>
                      <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.largestDiameter2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── Rated Pressure / Flow Table ──────────────────────────────────── */}
      {product.ratedPressureFlowTable && product.ratedPressureFlowTable.length > 0 && (
        <section className="relative py-14 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" aria-hidden />
              <h2 className="text-2xl font-bold text-gray-900">Specification Details</h2>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                    <th className="px-6 py-3 text-left text-white font-semibold">Body Size (in)</th>
                    <th className="px-6 py-3 text-center text-white font-semibold">Rated Pressure (Bar)</th>
                    <th className="px-6 py-3 text-center text-white font-semibold">Rated Flow (GPM)</th>
                    <th className="px-6 py-3 text-center text-white font-semibold">Temperature Range (Std seals)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.ratedPressureFlowTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 text-gray-700 border-b border-gray-100">{row.size}</td>
                      <td className="px-6 py-4 text-center text-gray-900 font-medium border-b border-gray-100">{row.pressure}</td>
                      <td className="px-6 py-4 text-center text-gray-700 border-b border-gray-100">{row.flowRate}</td>
                      <td className="px-6 py-4 text-center text-gray-700 border-b border-gray-100">{row.tempRange}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── QKTF Wing Nut Coupler Table ─────────────────────────────────── */}
      {product.qktfWingNutTable && product.qktfWingNutTable.length > 0 && (
        <section className="relative py-14 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" aria-hidden />
              <h2 className="text-2xl font-bold text-gray-900">Coupler – Wing Nut</h2>
            </div>
            {product.qktfWingNutDiagramImage && (
              <div className="mb-8 flex justify-center">
                <img
                  src={product.qktfWingNutDiagramImage}
                  alt="Wing Nut Coupler dimensional diagram"
                  className="max-h-64 object-contain bg-white rounded-lg border border-gray-200 p-4"
                />
              </div>
            )}
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                    <th className="px-4 py-3 text-left text-white font-semibold">Part No.</th>
                    <th className="px-4 py-3 text-left text-white font-semibold">Thread Size BSPP</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Body Size</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Overall Length (mm)</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Exposed Length (mm)</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Hex Size (mm)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.qktfWingNutTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 text-gray-900 font-medium border-b border-gray-100">{row.partNo}</td>
                      <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.thread}</td>
                      <td className="px-4 py-3 text-center text-gray-700 border-b border-gray-100">{row.bodySize}</td>
                      <td className="px-4 py-3 text-center text-gray-700 border-b border-gray-100">{row.overallLength}</td>
                      <td className="px-4 py-3 text-center text-gray-700 border-b border-gray-100">{row.exposedLength}</td>
                      <td className="px-4 py-3 text-center text-gray-700 border-b border-gray-100">{row.hexSize}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── QKTF Male Nipple Table ───────────────────────────────────────── */}
      {product.qktfMaleTable && product.qktfMaleTable.length > 0 && (
        <section className="relative py-14 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" aria-hidden />
              <h2 className="text-2xl font-bold text-gray-900">Nipple – Male</h2>
            </div>
            {product.qktfMaleDiagramImage && (
              <div className="mb-8 flex justify-center">
                <img
                  src={product.qktfMaleDiagramImage}
                  alt="Male nipple dimensional diagram"
                  className="max-h-64 object-contain bg-white rounded-lg border border-gray-200 p-4"
                />
              </div>
            )}
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                    <th className="px-4 py-3 text-left text-white font-semibold">Part No.</th>
                    <th className="px-4 py-3 text-left text-white font-semibold">Thread Size BSPP</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Body Size</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Overall Length (inch)</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Exposed Length (inch)</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Hex Size (inch)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.qktfMaleTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 text-gray-900 font-medium border-b border-gray-100">{row.partNo}</td>
                      <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.thread}</td>
                      <td className="px-4 py-3 text-center text-gray-700 border-b border-gray-100">{row.bodySize}</td>
                      <td className="px-4 py-3 text-center text-gray-700 border-b border-gray-100">{row.overallLength}</td>
                      <td className="px-4 py-3 text-center text-gray-700 border-b border-gray-100">{row.exposedLength}</td>
                      <td className="px-4 py-3 text-center text-gray-700 border-b border-gray-100">{row.hexSize}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── QKTF Hex Nut Nipple Table ────────────────────────────────────── */}
      {product.qktfHexNutTable && product.qktfHexNutTable.length > 0 && (
        <section className="relative py-14 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" aria-hidden />
              <h2 className="text-2xl font-bold text-gray-900">Nipple – Hex Nut</h2>
            </div>
            {product.qktfHexNutDiagramImage && (
              <div className="mb-8 flex justify-center">
                <img
                  src={product.qktfHexNutDiagramImage}
                  alt="Hex Nut nipple dimensional diagram"
                  className="max-h-64 object-contain bg-white rounded-lg border border-gray-200 p-4"
                />
              </div>
            )}
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                    <th className="px-4 py-3 text-left text-white font-semibold">Part No.</th>
                    <th className="px-4 py-3 text-left text-white font-semibold">Thread Size BSPP</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Body Size</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Overall Length (inch)</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Exposed Length (inch)</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Hex Size (inch)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.qktfHexNutTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 text-gray-900 font-medium border-b border-gray-100">{row.partNo}</td>
                      <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.thread}</td>
                      <td className="px-4 py-3 text-center text-gray-700 border-b border-gray-100">{row.bodySize}</td>
                      <td className="px-4 py-3 text-center text-gray-700 border-b border-gray-100">{row.overallLength}</td>
                      <td className="px-4 py-3 text-center text-gray-700 border-b border-gray-100">{row.exposedLength}</td>
                      <td className="px-4 py-3 text-center text-gray-700 border-b border-gray-100">{row.hexSize}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── QKTF Detail Spec Table (5-col) ───────────────────────────────── */}
      {product.qktfDetailTable && product.qktfDetailTable.length > 0 && (
        <section className="relative py-14 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" aria-hidden />
              <h2 className="text-2xl font-bold text-gray-900">Specification Details</h2>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                    <th className="px-5 py-3 text-left text-white font-semibold">Body Size (in)</th>
                    <th className="px-5 py-3 text-center text-white font-semibold">Rated Pressure (Bar)</th>
                    <th className="px-5 py-3 text-center text-white font-semibold">Material</th>
                    <th className="px-5 py-3 text-center text-white font-semibold">Standard Seal Material</th>
                    <th className="px-5 py-3 text-center text-white font-semibold">Temperature Range (Std seals)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.qktfDetailTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-5 py-4 text-gray-700 border-b border-gray-100">{row.size}</td>
                      <td className="px-5 py-4 text-center text-gray-900 font-medium border-b border-gray-100">{row.pressure}</td>
                      <td className="px-5 py-4 text-center text-gray-700 border-b border-gray-100">{row.material}</td>
                      <td className="px-5 py-4 text-center text-gray-700 border-b border-gray-100">{row.sealMaterial}</td>
                      <td className="px-5 py-4 text-center text-gray-700 border-b border-gray-100">{row.tempRange}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── KSG/KSN Male + Female Tables (5-col, order + unit aware) ──── */}
      {(product.ksgMaleTable || product.ksgFemaleTable) && (() => {
        const unit = product.ksgTableUnit === 'inch' ? 'inch' : 'mm'
        const femaleFirst = product.ksgTableOrder === 'female-first'

        const renderTable = (
          rows: Array<{ partNo: string; thread: string; overallLength: number; hexSize: number; largestDiameter: number }>,
          label: string,
          diagramImage: string | undefined,
          bg: string
        ) => (
          <section className={`relative py-14 ${bg} overflow-hidden`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" aria-hidden />
                <h2 className="text-2xl font-bold text-gray-900">{label}</h2>
              </div>
              {diagramImage && (
                <div className="mb-8 flex justify-center">
                  <div className="w-full max-w-xl bg-white rounded-lg border border-gray-200 p-8 flex items-center justify-center">
                    <img
                      src={diagramImage}
                      alt={`${label} dimensional diagram`}
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              )}
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                      <th className="px-4 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                      <th className="px-4 py-3 text-left text-white font-semibold text-xs">Thread Size</th>
                      <th className="px-4 py-3 text-center text-white font-semibold text-xs">Overall Length ({unit})</th>
                      <th className="px-4 py-3 text-center text-white font-semibold text-xs">Hex Size ({unit})</th>
                      <th className="px-4 py-3 text-center text-white font-semibold text-xs">Largest Diameter ({unit})</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 text-gray-900 font-medium text-sm border-b border-gray-100">{row.partNo}</td>
                        <td className="px-4 py-3 text-gray-700 text-sm border-b border-gray-100">{row.thread}</td>
                        <td className="px-4 py-3 text-center text-gray-700 text-sm border-b border-gray-100">{row.overallLength}</td>
                        <td className="px-4 py-3 text-center text-gray-700 text-sm border-b border-gray-100">{row.hexSize}</td>
                        <td className="px-4 py-3 text-center text-gray-700 text-sm border-b border-gray-100">{row.largestDiameter}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )

        const femaleSection = product.ksgFemaleTable && product.ksgFemaleTable.length > 0
          ? renderTable(product.ksgFemaleTable, 'Female', product.ksgFemaleDiagramImage, 'bg-gray-50')
          : null
        const maleSection = product.ksgMaleTable && product.ksgMaleTable.length > 0
          ? renderTable(product.ksgMaleTable, 'Male', product.ksgMaleDiagramImage, 'bg-white')
          : null

        return femaleFirst
          ? <>{femaleSection}{maleSection}</>
          : <>{maleSection}{femaleSection}</>
      })()}

      {/* ── KVV Detail Spec Table (6-col) ───────────────────────────────── */}
      {product.kvvDetailTable && product.kvvDetailTable.length > 0 && (() => {
        const hasExtraCols = product.kvvDetailTable!.some(r => r.material)
        const firstRow = product.kvvDetailTable![0]
        return (
          <section className="relative py-14 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" aria-hidden />
                <h2 className="text-2xl font-bold text-gray-900">Specification Details</h2>
              </div>
              {!hasExtraCols && (
                <div className="mb-4 space-y-1 text-sm text-gray-700">
                  <p><span className="font-medium">Material:</span> Carbon steel</p>
                  <p><span className="font-medium">Standard Seal Material:</span> NBR (other materials available on request)</p>
                  <p><span className="font-medium">Temperature Range (Std seals):</span> -20°C to +125°C</p>
                </div>
              )}
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                      <th className="px-5 py-3 text-left text-white font-semibold">Body Size (in)</th>
                      <th className="px-5 py-3 text-center text-white font-semibold">Rated Pressure (Bar)</th>
                      <th className="px-5 py-3 text-center text-white font-semibold">Flow Rate (L)</th>
                      {hasExtraCols && <>
                        <th className="px-5 py-3 text-center text-white font-semibold">Material</th>
                        <th className="px-5 py-3 text-center text-white font-semibold">Standard Seal Material</th>
                        <th className="px-5 py-3 text-center text-white font-semibold">Temperature Range {firstRow.tempRange?.includes("°C") ? "(°C)" : ""}</th>
                      </>}
                    </tr>
                  </thead>
                  <tbody>
                    {product.kvvDetailTable!.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="px-5 py-4 text-gray-700 border-b border-gray-100">{row.size}</td>
                        <td className="px-5 py-4 text-center text-gray-900 font-medium border-b border-gray-100">{row.pressure}</td>
                        <td className="px-5 py-4 text-center text-gray-700 border-b border-gray-100">{row.flowRate}</td>
                        {hasExtraCols && <>
                          <td className="px-5 py-4 text-center text-gray-700 border-b border-gray-100">{row.material}</td>
                          <td className="px-5 py-4 text-center text-gray-700 border-b border-gray-100">{row.sealMaterial}</td>
                          <td className="px-5 py-4 text-center text-gray-700 border-b border-gray-100">{row.tempRange}</td>
                        </>}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )
      })()}

      {/* ── Dust Protection ─────────────────────────────────────────────── */}
      {product.dustProtectionTable && product.dustProtectionTable.length > 0 && (
        <section className="relative py-14 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" aria-hidden />
              <h2 className="text-2xl font-bold text-gray-900">Dust Protection</h2>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                    <th colSpan={4} className="px-3 py-3 text-center text-white font-semibold text-xs border-r border-white/20">Dust protections - 防尘帽</th>
                    <th colSpan={4} className="px-3 py-3 text-center text-white font-semibold text-xs">Dust protections - 防尘帽</th>
                  </tr>
                  <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                    <th colSpan={2} className="px-3 py-2 text-center text-white/90 font-medium text-xs">PVC</th>
                    <th colSpan={2} className="px-3 py-2 text-center text-white/90 font-medium text-xs border-r border-white/20">Aluminum</th>
                    <th colSpan={2} className="px-3 py-2 text-center text-white/90 font-medium text-xs">PVC</th>
                    <th colSpan={2} className="px-3 py-2 text-center text-white/90 font-medium text-xs">Aluminum</th>
                  </tr>
                  <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                    <th className="px-3 py-2 text-left text-white font-semibold text-xs">mm</th>
                    <th className="px-3 py-2 text-left text-white font-semibold text-xs">inch</th>
                    <th className="px-3 py-2 text-left text-white font-semibold text-xs">Part Number</th>
                    <th className="px-3 py-2 text-center text-white font-semibold text-xs border-r border-white/20">Colour</th>
                    <th className="px-3 py-2 text-left text-white font-semibold text-xs">Part Number</th>
                    <th className="px-3 py-2 text-left text-white font-semibold text-xs">Part Number</th>
                    <th className="px-3 py-2 text-center text-white font-semibold text-xs">Colour</th>
                    <th className="px-3 py-2 text-left text-white font-semibold text-xs">Part Number</th>
                  </tr>
                </thead>
                <tbody>
                  {product.dustProtectionTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-3 py-3 text-gray-700 text-sm">{row.size}</td>
                      <td className="px-3 py-3 text-gray-700 text-sm">{row.inch}</td>
                      <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNoPVC}</td>
                      <td className="px-3 py-3 text-center border-r border-gray-200">
                        {(() => {
                          const c = row.colorPVC || row.colorAluminum || ""
                          return <span className="w-5 h-5 rounded-full inline-block" style={{ backgroundColor: c === "Green" ? "#22c55e" : c === "Orange" ? "#f97316" : c === "Red" ? "#ef4444" : c === "Yellow" ? "#eab308" : c ? "#d1d5db" : "transparent" }} />
                        })()}
                      </td>
                      <td className="px-3 py-3 text-gray-700 text-sm border-r border-gray-200">{row.partNoAluminum || ""}</td>
                      <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNoPVC2 || ""}</td>
                      <td className="px-3 py-3 text-center">
                        <span className="w-5 h-5 rounded-full inline-block" style={{ backgroundColor: row.colorPVC2 === "Green" ? "#22c55e" : row.colorPVC2 === "Orange" ? "#f97316" : row.colorPVC2 === "Red" ? "#ef4444" : row.colorPVC2 === "Yellow" ? "#eab308" : "#d1d5db" }} />
                      </td>
                      <td className="px-3 py-3 text-gray-700 text-sm">{row.partNoAluminum2 || ""}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── Performance Specifications ───────────────────────────────────── */}
      {product.performanceTable && product.performanceTable.length > 0 && (
        <section className="relative py-14 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" aria-hidden />
              <h2 className="text-2xl font-bold text-gray-900">Performance Specifications</h2>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                    <th className="px-4 py-3 text-left text-white font-semibold">Size (mm)</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Size (in.)</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Working Pressure (MPa/PSI)</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Flow Rate (l/min / GPM)</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Burst Pressure 1 (MPa/PSI)</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Burst Pressure 2 (MPa/PSI)</th>
                    <th className="px-4 py-3 text-center text-white font-semibold">Burst Pressure 3 (MPa/PSI)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.performanceTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 text-gray-900 font-medium">{row.size}</td>
                      <td className="px-4 py-3 text-center text-gray-700">{row.inch}</td>
                      <td className="px-4 py-3 text-center text-gray-700">{row.pressure}</td>
                      <td className="px-4 py-3 text-center text-gray-700">{row.flowRate}</td>
                      <td className="px-4 py-3 text-center text-gray-700">{row.burstP1}</td>
                      <td className="px-4 py-3 text-center text-gray-700">{row.burstP2}</td>
                      <td className="px-4 py-3 text-center text-gray-700">{row.burstP3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── KZB Series Male ──────────────────────────────────────────────── */}
      {product.maleTable && product.maleTable.length > 0 && (
        <section className="relative py-14 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" aria-hidden />
              <h2 className="text-2xl font-bold text-gray-900">{product.shortName.split(" ")[0]} Series Male</h2>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                    <th className="px-3 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                    <th className="px-3 py-3 text-left text-white font-semibold text-xs">Thread</th>
                    <th className="px-3 py-3 text-center text-white font-semibold text-xs">A (mm)</th>
                    <th className="px-3 py-3 text-center text-white font-semibold text-xs">C (mm)</th>
                    <th className="px-3 py-3 text-center text-white font-semibold text-xs">D (mm)</th>
                    <th className="px-3 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                    <th className="px-3 py-3 text-left text-white font-semibold text-xs">Thread</th>
                    <th className="px-3 py-3 text-center text-white font-semibold text-xs">A (in.)</th>
                    <th className="px-3 py-3 text-center text-white font-semibold text-xs">C (in.)</th>
                    <th className="px-3 py-3 text-center text-white font-semibold text-xs">D (in.)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.maleTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNo}</td>
                      <td className="px-3 py-3 text-gray-700 text-sm">{row.thread}</td>
                      <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.a !== null ? row.a : "-"}</td>
                      <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.c !== null ? row.c : "-"}</td>
                      <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.d !== null ? row.d : "-"}</td>
                      <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNo2}</td>
                      <td className="px-3 py-3 text-gray-700 text-sm">{row.thread2}</td>
                      <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.a2 !== null ? row.a2 : "-"}</td>
                      <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.c2 !== null ? row.c2 : "-"}</td>
                      <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.d2 !== null ? row.d2 : "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── KZBSS Series Female (large bore) ─────────────────────────────── */}
      {product.kzbSeriesFemaleTable && product.kzbSeriesFemaleTable.length > 0 && (
        <section className="relative py-14 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" aria-hidden />
              <h2 className="text-2xl font-bold text-gray-900">{product.shortName.split(" ")[0]} Series Female</h2>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                    <th className="px-3 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                    <th className="px-3 py-3 text-left text-white font-semibold text-xs">Thread</th>
                    <th className="px-3 py-3 text-center text-white font-semibold text-xs">E (mm)</th>
                    <th className="px-3 py-3 text-center text-white font-semibold text-xs">F (mm)</th>
                    <th className="px-3 py-3 text-center text-white font-semibold text-xs">G (mm)</th>
                    <th className="px-3 py-3 text-left text-white font-semibold text-xs">Part No.</th>
                    <th className="px-3 py-3 text-left text-white font-semibold text-xs">Thread</th>
                    <th className="px-3 py-3 text-center text-white font-semibold text-xs">E (in.)</th>
                    <th className="px-3 py-3 text-center text-white font-semibold text-xs">F (in.)</th>
                    <th className="px-3 py-3 text-center text-white font-semibold text-xs">G (in.)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.kzbSeriesFemaleTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNo}</td>
                      <td className="px-3 py-3 text-gray-700 text-sm">{row.thread}</td>
                      <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.e}</td>
                      <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.f}</td>
                      <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.g}</td>
                      <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNo2}</td>
                      <td className="px-3 py-3 text-gray-700 text-sm">{row.thread2}</td>
                      <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.e2}</td>
                      <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.f2}</td>
                      <td className="px-3 py-3 text-center text-gray-700 text-sm">{row.g2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── Accessories - 附件 ──────────────────────────────────────────── */}
      {product.accessoriesTable && product.accessoriesTable.length > 0 && (
        <section className="relative py-14 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-7 rounded-full bg-[#e05a2e] flex-shrink-0" aria-hidden />
              <h2 className="text-2xl font-bold text-gray-900">Accessories - 附件</h2>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                    <th colSpan={4} className="px-3 py-3 text-center text-white font-semibold text-xs border-r border-white/20">Dust protections - 防尘帽</th>
                    <th colSpan={4} className="px-3 py-3 text-center text-white font-semibold text-xs">Dust protections - 防尘帽</th>
                  </tr>
                  <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                    <th colSpan={2} className="px-3 py-2 text-center text-white/90 font-medium text-xs">PVC</th>
                    <th colSpan={2} className="px-3 py-2 text-center text-white/90 font-medium text-xs border-r border-white/20">Aluminum</th>
                    <th colSpan={2} className="px-3 py-2 text-center text-white/90 font-medium text-xs">PVC</th>
                    <th colSpan={2} className="px-3 py-2 text-center text-white/90 font-medium text-xs">Aluminum</th>
                  </tr>
                  <tr style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)" }}>
                    <th className="px-3 py-2 text-left text-white font-semibold text-xs">mm</th>
                    <th className="px-3 py-2 text-left text-white font-semibold text-xs">inch</th>
                    <th className="px-3 py-2 text-left text-white font-semibold text-xs">Part Number</th>
                    <th className="px-3 py-2 text-center text-white font-semibold text-xs border-r border-white/20">Colour</th>
                    <th className="px-3 py-2 text-left text-white font-semibold text-xs">Part Number</th>
                    <th className="px-3 py-2 text-left text-white font-semibold text-xs">Part Number</th>
                    <th className="px-3 py-2 text-center text-white font-semibold text-xs">Colour</th>
                    <th className="px-3 py-2 text-left text-white font-semibold text-xs">Part Number</th>
                  </tr>
                </thead>
                <tbody>
                  {product.accessoriesTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-3 py-3 text-gray-700 text-sm">{row.size}</td>
                      <td className="px-3 py-3 text-gray-700 text-sm">{row.inch}</td>
                      <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNoPVC}</td>
                      <td className="px-3 py-3 text-center border-r border-gray-200">
                        <span className="w-5 h-5 rounded-full inline-block" style={{ backgroundColor: row.colorPVC === "Green" ? "#22c55e" : row.colorPVC === "Orange" ? "#f97316" : row.colorPVC === "Red" ? "#ef4444" : row.colorPVC === "Yellow" ? "#eab308" : "#d1d5db" }} />
                      </td>
                      <td className="px-3 py-3 text-gray-700 text-sm">{row.partNoAluminum || ""}</td>
                      <td className="px-3 py-3 text-gray-900 font-medium text-sm">{row.partNoPVC2 || ""}</td>
                      <td className="px-3 py-3 text-center">
                        <span className="w-5 h-5 rounded-full inline-block" style={{ backgroundColor: row.colorPVC2 === "Green" ? "#22c55e" : row.colorPVC2 === "Orange" ? "#f97316" : row.colorPVC2 === "Red" ? "#ef4444" : row.colorPVC2 === "Yellow" ? "#eab308" : "#d1d5db" }} />
                      </td>
                      <td className="px-3 py-3 text-gray-700 text-sm">{row.partNoAluminum2 || ""}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── Other Products ───────────────────────────────────────────── */}
      {supplementalContent}
      {otherProductsSection}

    </div>
  )
}
