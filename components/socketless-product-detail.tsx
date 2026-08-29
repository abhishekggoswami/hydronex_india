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

interface SocketlessProductDetailProps {
  product: {
    name: string
    code: string
    slug: string
    image?: string
    description: string
    material?: string
    surfaceTreat?: string
    features?: string[]
    applications?: string[]
    partTable?: Array<Record<string, any>>
  }
  otherProductsSection?: React.ReactNode
}

export function SocketlessProductDetail({ product, otherProductsSection }: SocketlessProductDetailProps) {
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
    <div className="min-h-screen bg-[#f8fafc]">

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
              { href: "/products", label: "Hydraulic Fittings" },
              { href: "/products/hydraulic-fittings/socketless-fittings", label: "Socketless Fittings" },
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

            {/* Left: blueprint image with moving border */}
            <MovingBorderFrame>
              {/* Blueprint image content */}
              <div className="group relative w-full h-80 overflow-hidden" style={{ background: "#0e1c35", borderRadius: "6px" }}>
                <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-30 pointer-events-none">
                  <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest" style={{ color: "#e05a2e" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e05a2e]" />
                    Socketless Fittings
                  </span>
                  <span className="text-[9px] font-mono font-semibold text-white/35">
                    {product.slug.split("-").pop()?.toUpperCase()}
                  </span>
                </div>
                {product.image && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center p-8 group-hover:scale-[1.06] group-hover:-translate-y-1.5 transition-transform duration-500 ease-out">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-contain max-w-full max-h-full w-auto h-auto"
                      style={{ filter: "invert(1) brightness(1.05) contrast(1.1)", opacity: 1 }}
                      crossOrigin="anonymous"
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
                      crossOrigin="anonymous"
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
                Socketless Fittings
              </p>

              {/* Animated heading */}
              <AnimatedHeading text={product.name} />

              {/* Description */}
              <p className="leading-relaxed mb-6 text-sm bsp-fade-up" style={{ color: "rgba(203,220,248,0.85)", animationDelay: "0.2s" }}>
                {product.description}
              </p>

              {/* Glassmorphism specs card — dark variant for bg image */}
              {(product.material || product.surfaceTreat) && (
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

      {/* ── Products Specification Table ─────────────────────────────── */}
      {product.partTable && product.partTable.length > 0 && (
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
                {product.partTable.length} variants
              </span>
            </div>
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
              <table className="w-full text-sm border-collapse">
                <thead>
                  {/* Group header row */}
                  {product.partTable.length > 0 && (
                    <tr style={{
                      background: "linear-gradient(90deg, #fff0eb 0%, #fff7f3 100%)",
                      borderBottom: "1px solid #f4c4aa"
                    }}>
                      <th colSpan={2} className="px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-[#0e1c35] border-b border-[#f4c4aa]"></th>
                      {(() => {
                        const keys = Object.keys(product.partTable[0]);
                        const threadIdx = keys.findIndex(k => k.toLowerCase().includes('thread'));
                        const dashIdx = keys.findIndex(k => k.toUpperCase() === 'DASH');
                        const boreCols = dashIdx - threadIdx;
                        const dimCols = keys.length - (threadIdx + boreCols + 1);
                        return (
                          <>
                            {boreCols > 0 && <th colSpan={boreCols} className="px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-[#0e1c35] border-b border-[#f4c4aa]">Hose Bore</th>}
                            {dimCols > 0 && <th colSpan={dimCols} className="px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-[#0e1c35] border-b border-[#f4c4aa]">Dimensions</th>}
                          </>
                        );
                      })()}
                    </tr>
                  )}
                  {/* Sub-header row */}
                  <tr style={{
                    background: "linear-gradient(90deg, #fef8f5 0%, #fffaf8 100%)",
                    borderBottom: "2px solid #e05a2e"
                  }}>
                    {product.partTable.length > 0 && Object.keys(product.partTable[0]).map((key) => (
                      <th key={key} className={`px-4 py-3 text-xs font-bold uppercase tracking-widest text-[#0e1c35] ${key === "Part No." || key === "Thread" ? "text-left" : "text-center"}`}>{key}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {product.partTable.map((row, idx) => (
                    <tr
                      key={idx}
                      style={{ background: idx % 2 === 0 ? "#ffffff" : "#fafbfc", borderBottom: "1px solid #e2e8f0" }}
                    >
                      {Object.entries(row).map(([key, value]) => (
                        <td key={key} className={`px-4 py-3 text-sm text-[#0e1c35] ${key === "Part No." || key === "Thread" ? "text-left" : "text-center"} ${key === "Part No." ? "font-semibold" : ""}`}>
                          {String(value)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── Applications ─────────────────────────────────────────────── */}
      {product.applications && product.applications.length > 0 && (
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

      {/* ── Other Products ───────────────────────────────────────────── */}
      {otherProductsSection}

    </div>
  )
}
