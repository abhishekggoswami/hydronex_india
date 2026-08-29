"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, ChevronRight, Check } from "lucide-react"

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

// ─── Moving border on blueprint image ────────────────────────────────────────
function MovingBorderFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="npt-moving-border-wrap relative">
      <div className="npt-moving-border-track" aria-hidden />
      <div className="npt-moving-border-inner relative z-10">{children}</div>
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
          className="npt-word-in inline-block mr-[0.25em]"
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
    partNo: string
    threadE: string
    dn: number
    dash: string
    a?: number
    c: number
    s?: number
    s1?: number
    s2?: number
    h?: number
  }

  interface PartRowAlt {
    sinoPulsePartNo: string
    parkerPartNo?: string
    thread?: string
    threadE?: string
    flangeSize?: string
    hoseID?: string
    dn?: number
    dash?: number
    a?: number
    c?: number
    h?: string | number
    e?: number
    w?: string
    s?: number
    s1?: number
    s2?: number
    b?: number
  }

  interface ORFSProductDetailProps {
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
      partTableAlt?: PartRowAlt[]
      tableNote?: string
      image?: string
    }
    otherProductsSection: React.ReactNode
  }

export function ORFSProductDetail({ product, otherProductsSection }: ORFSProductDetailProps) {
  const { displayed, phase } = useTypewriter("REQUEST QUOTE")

  // Table helpers
  const pt = product.partTable
  const ptAlt = product.partTableAlt
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
              { href: "/products/hydraulic-fittings/orfs", label: "ORFS Hydraulic Fittings" },
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
        {/* Primary overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(8,18,40,0.88)" }}
          aria-hidden
        />
        {/* Secondary gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, rgba(8,18,40,0.30) 0%, rgba(8,18,40,0.10) 50%, rgba(8,18,40,0.20) 100%)",
          }}
          aria-hidden
        />
        {/* Orange warmth accent */}
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
              <div className="group relative w-full h-80 overflow-hidden" style={{ background: "#0e1c35", borderRadius: "6px" }}>
                <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-30 pointer-events-none">
                  <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest" style={{ color: "#e05a2e" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e05a2e]" />
                    ORFS Hydraulic Fittings
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
                      style={{ filter: "invert(1) opacity(0.88)" }}
                    />
                  </div>
                )}
                <div className="absolute bottom-3 right-4 z-40 transition-all duration-500 group-hover:scale-110"
                  style={{ filter: "drop-shadow(0 0 0px rgba(224,90,46,0))", transition: "filter 0.5s ease, transform 0.3s ease, opacity 0.4s ease" }}
                >
                  <div className="group-hover:npt-logo-glow transition-all duration-500">
                    <Image
                      src="/images/hydronex-logo-white.png"
                      alt="Hydronex"
                      width={88}
                      height={34}
                      className="object-contain npt-hydronex-logo"
                      style={{ opacity: 0.38 }}
                    />
                  </div>
                </div>
              </div>
            </MovingBorderFrame>

            {/* Right: product info */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center gap-2 text-[#e05a2e] npt-fade-up" style={{ animationDelay: "0s" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#e05a2e] flex-shrink-0" />
                ORFS Hydraulic Fittings
              </p>

              <AnimatedHeading text={product.name} />

              <p className="leading-relaxed mb-6 text-sm npt-fade-up" style={{ color: "rgba(203,220,248,0.85)", animationDelay: "0.2s" }}>
                {product.description}
              </p>

              {(product.material || product.surfaceTreat || product.application) && (
                <div
                  className="rounded-xl p-5 mb-7 space-y-3 npt-fade-up"
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

              <div className="flex flex-col sm:flex-row gap-4 npt-fade-up" style={{ animationDelay: "0.4s" }}>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center font-bold py-3 transition-all duration-200 hover:shadow-[0_6px_24px_rgba(224,90,46,0.45)] active:scale-[0.98]"
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
                        marginLeft: "6px",
                        background: "#fff",
                        animation: phase === "typing" ? "blink 0.65s infinite" : "none",
                      }}
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Section ──────────────────────────────────────────────────── */}
      {product.features.length > 0 && (
        <section className="py-16 border-b border-[#e8eef5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-10 text-[#0f2040]" style={{ letterSpacing: "-0.01em" }}>
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.features.map((feature, idx) => (
                <AnimatedFeatureItem key={idx} feature={feature} idx={idx} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Specifications Section ────────────────────────────────────────────── */}
      {product.specs.length > 0 && (
        <section className="py-16 border-b border-[#e8eef5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-10 text-[#0f2040]" style={{ letterSpacing: "-0.01em" }}>
              Specifications
            </h2>
            <AnimatedSpecTable>
              <div className="bg-white rounded-lg border border-[#e8eef5] overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {product.specs.map((spec, idx) => (
                      <tr
                        key={idx}
                        style={{
                          background: idx % 2 === 0 ? "#f8fafc" : "#fff",
                          borderBottom: idx < product.specs.length - 1 ? "1px solid #e8eef5" : "none",
                        }}
                      >
                        <td
                          className="px-6 py-4 text-sm font-semibold text-[#0f2040] w-1/3"
                          style={{ color: "#0f2040" }}
                        >
                          {spec.label}
                        </td>
                        <td className="px-6 py-4 text-sm text-[#4a6a90]">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSpecTable>
          </div>
        </section>
      )}

      {/* ── Part Table Section ────────────────────────────────────────────────── */}
      {pt && pt.length > 0 && (
        <section className="py-16 border-b border-[#e8eef5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-10 text-[#0f2040]" style={{ letterSpacing: "-0.01em" }}>
              Products Specification
            </h2>
            <AnimatedSpecTable>
              <div className="bg-white rounded-lg border border-[#e8eef5] overflow-x-auto">
                <table className="w-full" style={{ borderCollapse: "collapse" }}>
                  <thead style={{ background: "#f8fafc" }}>
                    {pt[0]?.partNo ? (
                      <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                        <TH>PART NO.</TH>
                        <TH>{pt[0]?.dn !== undefined ? "FLANGE SIZE" : "THREAD"}</TH>
                        {pt[0]?.dn !== undefined && <TH>DN</TH>}
                        <TH>DASH</TH>
                        {pt[0]?.a !== undefined && <TH>A</TH>}
                        {pt[0]?.c !== undefined && <TH>C</TH>}
                        {pt[0]?.s1 !== undefined && <TH>S1</TH>}
                        {pt[0]?.h !== undefined && <TH>H</TH>}
                        <TH last>{pt[0]?.s2 !== undefined ? "S2" : "S"}</TH>
                      </tr>
                    ) : (
                      <>
                        <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                          <THC>E</THC>
                          <THC colSpan={2}>HOSE BORE</THC>
                          <THC colSpan={pt[0]?.a !== undefined ? 5 : pt[0]?.h !== undefined ? 4 : pt[0]?.s1 !== undefined ? 3 : 2}>DIMENSIONS</THC>
                        </tr>
                        <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                          <TH>PART NO.</TH>
                          <TH>THREAD (INCH)</TH>
                          <TH>DN</TH>
                          <TH>DASH</TH>
                          {pt[0]?.a !== undefined && <TH>A</TH>}
                          <TH>C</TH>
                          {pt[0]?.s1 !== undefined && <TH>S1</TH>}
                          {pt[0]?.s2 !== undefined && <TH last={pt[0]?.h === undefined}>S2</TH>}
                          {pt[0]?.h !== undefined && <TH last>H</TH>}
                        </tr>
                      </>
                    )}
                  </thead>
                  <tbody>
                    {pt.map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: idx < pt.length - 1 ? "1px solid #e2e8f0" : "none" }}>
                        <TD highlight>{row.partNo}</TD>
                        <TD>{row.threadE}</TD>
                        {row.dn !== undefined && <TD center>{row.dn}</TD>}
                        <TD center>{row.dash}</TD>
                        {row.a !== undefined && <TD center>{row.a}</TD>}
                        {row.c !== undefined && <TD center>{row.c}</TD>}
                        {row.s1 !== undefined && <TD center>{row.s1}</TD>}
                        {row.h !== undefined && <TD center>{row.h}</TD>}
                        <TD center last>{row.s2 !== undefined ? row.s2 : row.s}</TD>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSpecTable>
            {product.tableNote && (
              <p className="text-xs text-[#6b7280] mt-4 italic">{product.tableNote}</p>
            )}
          </div>
        </section>
      )}

      {/* ── Part Table Section (Alternative) ───────────────────────��───���────────────────────── */}
      {ptAlt && ptAlt.length > 0 && (
        <section className="py-16 border-b border-[#e8eef5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-10 text-[#0f2040]" style={{ letterSpacing: "-0.01em" }}>
              Products Specification
            </h2>
            <AnimatedSpecTable>
              <div className="bg-white rounded-lg border border-[#e8eef5] overflow-x-auto">
                <table className="w-full" style={{ borderCollapse: "collapse" }}>
                  <thead style={{ background: "#f8fafc" }}>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <THC colSpan={2}>PART NUMBERS</THC>
                      <THC colSpan={2}>THREAD & HOSE</THC>
                      <THC colSpan={ptAlt[0]?.h ? 4 : 3}>DIMENSIONS</THC>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <TH>SINOPULSE PART NO.</TH>
                      <TH>PARKER PART NO.</TH>
                      <TH>THREAD (inch)</TH>
                      <TH>HOSE I.D. (inch)</TH>
                      <TH>A(mm)</TH>
                      {ptAlt[0]?.c !== undefined && <TH>C(mm)</TH>}
                      {ptAlt[0]?.e && <TH>E(mm)</TH>}
                      {ptAlt[0]?.h && <TH>H(inch)</TH>}
                      {ptAlt[0]?.w && <TH>W(inch)</TH>}
                      <TH last>B(mm)</TH>
                    </tr>
                  </thead>
                  <tbody>
                    {ptAlt.map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: idx < ptAlt.length - 1 ? "1px solid #e2e8f0" : "none" }}>
                        <TD highlight>{row.sinoPulsePartNo}</TD>
                        <TD highlight>{row.parkerPartNo}</TD>
                        <TD center>{row.thread}</TD>
                        <TD center>{row.hoseID}</TD>
                        <TD center>{row.a}</TD>
                        {row.c !== undefined && <TD center>{row.c}</TD>}
                        {row.e && <TD center>{row.e}</TD>}
                        {row.h && <TD center>{row.h}</TD>}
                        {row.w && <TD center>{row.w}</TD>}
                        <TD center last>{row.b}</TD>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSpecTable>
            {product.tableNote && (
              <p className="text-xs text-[#6b7280] mt-4 italic">{product.tableNote}</p>
            )}
          </div>
        </section>
      )}

      {/* ── Applications Section ──────────────────────────────────────────────── */}
      {product.applications.length > 0 && (
        <section className="py-16 border-b border-[#e8eef5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-10 text-[#0f2040]" style={{ letterSpacing: "-0.01em" }}>
              Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.applications.map((app, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[#e8eef5] hover:border-[#e05a2e]/30 transition-colors"
                >
                  <ChevronRight size={20} className="text-[#e05a2e] flex-shrink-0" />
                  <span className="text-[#4a6a90]">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Other Products ────────────────────────────────────────────────────── */}
      {otherProductsSection && (
        <section className="py-16">
          {otherProductsSection}
        </section>
      )}

      {/* ── Contact CTA ───────────────────────────────────────────────────────── */}
      <section style={{ background: "#e05a2e" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Order?</h2>
          <p className="text-lg text-orange-50 mb-8 max-w-2xl mx-auto">
            Contact our sales team for pricing and availability information
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-white text-[#e05a2e] font-bold px-8 py-3 rounded hover:shadow-lg transition-shadow"
          >
            Contact Sales
          </Link>
        </div>
      </section>
    </div>
  )
}
