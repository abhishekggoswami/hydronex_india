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
          className="banjo-word-in inline-block mr-[0.25em]"
          style={{
            animationDelay: `${0.06 + i * 0.06}s`,
            background: "linear-gradient(90deg, #ffffff 0%, #e8f0ff 40%, #ffffff 60%, #1a5fa8 100%)",
            backgroundSize: "250% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: `banjo-word-in 0.5s cubic-bezier(0.22,1,0.36,1) forwards, banjo-heading-shimmer 4s ease-in-out ${0.7 + i * 0.06}s infinite`,
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
      <p className="leading-relaxed text-sm" style={{ color: "rgba(42,74,112,0.85)" }}>{feature}</p>
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
interface PartRow {
  partNo: string
  threadE?: string
  dn?: number
  dash?: string
  d?: number
  sfD?: number
  h?: number
}

interface BanjoProductDetailProps {
  product: {
    name: string
    code: string
    slug: string
    description: string
    material?: string
    surfaceTreat?: string
    features: string[]
    partTable?: PartRow[]
    image?: string
  }
  otherProductsSection: React.ReactNode
}

export function BanjoProductDetail({ product, otherProductsSection }: BanjoProductDetailProps) {
  const { displayed, phase } = useTypewriter("REQUEST QUOTE")

  // Table helpers
  const pt = product.partTable
  const hasThreadE = pt?.some((r) => r.threadE !== undefined) ?? false
  const hasBoltThread = pt?.some((r) => r.boltThread !== undefined) ?? false
  const hasDN = pt?.some((r) => r.dn !== undefined) ?? false
  const hasDash = pt?.some((r) => r.dash !== undefined) ?? false
  const hasD = pt?.some((r) => r.d !== undefined) ?? false
  const hasSfD = pt?.some((r) => r.sfD !== undefined) ?? false
  const hasH = pt?.some((r) => r.h !== undefined) ?? false
  const hasA = pt?.some((r) => r.a !== undefined) ?? false
  const hasB = pt?.some((r) => r.b !== undefined) ?? false
  const hasC = pt?.some((r) => r.c !== undefined) ?? false
  const hasS = pt?.some((r) => r.s !== undefined) ?? false
  const hasThread = pt?.some((r) => r.thread !== undefined) ?? false
  const hasS1 = pt?.some((r) => r.s1 !== undefined) ?? false
  const hasSinoPulsePartNo = pt?.some((r) => r.sinoPulsePartNo !== undefined) ?? false
  const hasParkerPartNo = pt?.some((r) => r.parkerPartNo !== undefined) ?? false
  const hasR = pt?.some((r) => r.r !== undefined) ?? false
  const hasHoseID = pt?.some((r) => r.hoseID !== undefined) ?? false

  // TH + TD helpers
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

  // Breadcrumb with opacity cascade
  const breadcrumbs = [
    { label: "Home", href: "/", level: 0 },
    { label: "Products", href: "/products", level: 1 },
    { label: "Hydraulic Fittings", href: "/products", level: 2 },
    { label: "Banjo Fittings", href: "/products/hydraulic-fittings/banjo-fittings", level: 3 },
    { label: product.name, href: "#", level: 4, active: true },
  ]

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #eef5fb 50%, #ffffff 100%)" }}>
      {/* ── Breadcrumb with opacity cascade ────────────────────────────────────── */}
      <nav
        className="border-b"
        style={{ background: "#f8fafc", borderColor: "rgba(210,225,240,0.7)" }}
        aria-label="Breadcrumb"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <ol className="flex items-center gap-0 flex-wrap">
            {breadcrumbs.map((item, i) => (
              <li key={i} className="flex items-center">
                {i > 0 && (
                  <span
                    className="mx-2.5"
                    style={{ color: "#94aabf", fontSize: "10px" }}
                    aria-hidden
                  >
                    &#x2044;
                  </span>
                )}
                {item.active ? (
                  <span
                    className="text-[11.5px] font-bold tracking-wide uppercase flex items-center gap-1.5"
                    style={{ color: "#e05a2e", letterSpacing: "0.06em" }}
                    aria-current="page"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#e05a2e" }}
                    />
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-[11.5px] font-medium tracking-wide uppercase transition-colors duration-150 hover:text-[#e05a2e]"
                    style={{
                      color: item.level === 0 ? "#0f2040" : item.level === 1 ? "#2a4a70" : "#4a6a90",
                      letterSpacing: item.level === 0 ? "0.06em" : "0.05em",
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* ── Hero Section ──────────────────────────────────────────────────────────── */}
      <section className="border-b border-[#d0e4f5]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text + image */}
          <div>
            <p
              className="text-[11px] font-bold uppercase tracking-[0.18em] mb-3 inline-block px-3 py-1.5 rounded-full"
              style={{
                color: "#e05a2e",
                background: "rgba(224,90,46,0.08)",
                letterSpacing: "0.18em",
              }}
            >
              {product.code}
            </p>

            <AnimatedHeading text={product.name} />

            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "rgba(42,74,112,0.85)", maxWidth: "600px" }}
            >
              {product.description}
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {product.features.map((feature, idx) => (
                <AnimatedFeatureItem key={idx} feature={feature} idx={idx} />
              ))}
            </div>

            {/* CTA Button with typewriter effect */}
            <div className="mt-10">
              <button
                className="relative px-8 py-3 rounded-md font-bold text-white text-sm overflow-hidden transition-all hover:shadow-lg"
                style={{
                  background: "#e05a2e",
                  minWidth: "160px",
                  letterSpacing: "0.04em",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    minWidth: "120px",
                    textAlign: "left",
                  }}
                >
                  {displayed}
                </span>
                <span
                  style={{
                    display: "inline-block",
                    animation: phase === "idle" || phase === "hold" ? "blink 0.8s infinite" : "none",
                    marginLeft: "2px",
                  }}
                >
                  |
                </span>
              </button>
            </div>
          </div>

          {/* Right: Image with animated border */}
          <div className="flex items-center justify-center">
            <div
              className="relative rounded-xl overflow-hidden shadow-2xl"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(210,225,240,0.6)",
              }}
            >
              <Image
                src={product.image || ""}
                alt={product.name}
                width={500}
                height={450}
                className="w-full h-auto object-contain p-8"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Information ───────────────────────────────────────────────────── */}
      <section className="border-b border-[#d0e4f5]/40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-[#0f2040] mb-8">Product Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.material && (
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#4a6a90] mb-2">
                  Material
                </p>
                <p className="text-sm leading-relaxed text-[#2a4a70]">{product.material}</p>
              </div>
            )}
            {product.surfaceTreat && (
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#4a6a90] mb-2">
                  Surface Treatment
                </p>
                <p className="text-sm leading-relaxed text-[#2a4a70]">{product.surfaceTreat}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Specifications Table ──────────────────────────────────────────────────── */}
      {pt && pt.length > 0 && (
        <section className="border-b border-[#d0e4f5]/40 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl font-bold text-[#0f2040] mb-8">Products Specification</h2>

            <AnimatedSpecTable>
              <div className="overflow-x-auto rounded-lg border border-[#e2e8f0] shadow-sm">
                <table className="w-full border-collapse bg-white">
                  {/* Header group row */}
                  <thead>
                    <tr style={{ background: "#f1f5f9", borderBottom: "2px solid #e2e8f0" }}>
                      {/* 72011 style: E, HOSE BORE, DIMENSIONS */}
                      {(hasThreadE && (hasDN || hasDash) && !hasA && !hasSinoPulsePartNo) && (
                        <>
                          <THC colSpan={1}>E</THC>
                          <THC colSpan={3}>HOSE BORE</THC>
                          <THC colSpan={3} last>DIMENSIONS</THC>
                        </>
                      )}
                      {/* 70011 style: BOLT THREAD, HOSE BORE, DIMENSIONS */}
                      {(hasBoltThread && (hasDN || hasDash)) && (
                        <>
                          <THC colSpan={1}>BOLT THREAD</THC>
                          <THC colSpan={2}>HOSE BORE</THC>
                          <THC colSpan={4} last>DIMENSIONS</THC>
                        </>
                      )}
                      {/* 700M style: E, DIMENSIONS (with threadE and A,B,C,S) */}
                      {(hasThreadE && (hasA || hasB || hasC || hasS) && !hasDN && !hasDash) && (
                        <>
                          <THC colSpan={1}>E</THC>
                          <THC colSpan={5} last>DIMENSIONS</THC>
                        </>
                      )}
                      {/* 720B style: E, DIMENSIONS (no threadE) */}
                      {(hasA || hasB || hasC || hasS) && !hasDN && !hasDash && !hasThreadE && (
                        <>
                          <THC colSpan={1}>E</THC>
                          <THC colSpan={5} last>DIMENSIONS</THC>
                        </>
                      )}
                      {/* 70011F style: No header groups for cross-reference table */}
                      {(hasSinoPulsePartNo || hasParkerPartNo) && !hasDN && !hasDash && (
                        <></>
                      )}
                    </tr>
                    {/* Column headers */}
                    <tr style={{ background: "#ffffff", borderBottom: "1px solid #e2e8f0" }}>
                      {hasSinoPulsePartNo ? (
                        <>
                          <TH>SINOPULSE Part No.</TH>
                          {hasParkerPartNo && <TH>PARKER Part No.</TH>}
                          {hasR && <TH>R(mm)</TH>}
                          {hasHoseID && <TH>Hose I.D. (inch)</TH>}
                          {hasA && <TH>A(mm)</TH>}
                          {hasB && <TH last>B(mm)</TH>}
                        </>
                      ) : (
                        <>
                          <TH>PART NO.</TH>
                          {hasThreadE && <TH>THREAD E</TH>}
                          {hasBoltThread && <TH>BOLT THREAD</TH>}
                          {hasDN && <TH>DN</TH>}
                          {hasDash && <TH>DASH</TH>}
                          {hasD && <TH>d</TH>}
                          {hasSfD && <TH>SfD</TH>}
                          {hasH && <TH last>H</TH>}
                          {hasThread && <TH>THREAD</TH>}
                          {hasA && <TH>A</TH>}
                          {hasB && <TH>B</TH>}
                          {hasC && <TH>C</TH>}
                          {hasS && <TH>S</TH>}
                          {hasS1 && <TH last>S1</TH>}
                        </>
                      )}
                    </tr>
                  </thead>
                  {/* Table body */}
                  <tbody>
                    {pt.map((row, idx) => (
                      <tr
                        key={idx}
                        style={{
                          background: idx % 2 === 0 ? "#ffffff" : "#f8fafc",
                          borderBottom: "1px solid #e2e8f0",
                        }}
                      >
                        {hasSinoPulsePartNo ? (
                          <>
                            <TD highlight>{row.sinoPulsePartNo}</TD>
                            {hasParkerPartNo && <TD center>{row.parkerPartNo}</TD>}
                            {hasR && <TD center>{row.r}</TD>}
                            {hasHoseID && <TD center>{row.hoseID}</TD>}
                            {hasA && <TD center>{row.a}</TD>}
                            {hasB && <TD center last>{row.b}</TD>}
                          </>
                        ) : (
                          <>
                            <TD highlight>{row.partNo}</TD>
                            {hasThreadE && <TD center>{row.threadE}</TD>}
                            {hasBoltThread && <TD center>{row.boltThread}</TD>}
                            {hasThread && <TD center>{row.thread}</TD>}
                            {hasDN && <TD center>{row.dn}</TD>}
                            {hasDash && <TD center>{row.dash}</TD>}
                            {hasD && <TD center>{row.d}</TD>}
                            {hasSfD && <TD center>{row.sfD}</TD>}
                            {hasH && <TD center last>{row.h}</TD>}
                            {hasA && <TD center>{row.a}</TD>}
                            {hasB && <TD center>{row.b}</TD>}
                            {hasC && <TD center>{row.c}</TD>}
                            {hasS && <TD center>{row.s}</TD>}
                            {hasS1 && <TD center last>{row.s1}</TD>}
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSpecTable>
          </div>
        </section>
      )}

      {/* ── Other Products Section ───────────────────────────────────────────────── */}
      <section className="border-b border-[#d0e4f5]/40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {otherProductsSection}
        </div>
      </section>

      {/* Animations */}
      <style>{`
        @keyframes banjo-word-in {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes banjo-heading-shimmer {
          0%, 100% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
        }

        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
