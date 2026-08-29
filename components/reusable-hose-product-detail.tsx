"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, ChevronRight, Check, ChevronLeft } from "lucide-react"
import { ReusableHoseFitting } from "@/lib/reusable-hose-fittings"

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

interface ReusableHoseProductDetailProps {
  product: ReusableHoseFitting
  allProducts: ReusableHoseFitting[]
  currentIndex: number
}

export function ReusableHoseProductDetail({
  product,
  allProducts,
  currentIndex,
}: ReusableHoseProductDetailProps) {
  const { displayed, phase } = useTypewriter("REQUEST QUOTE")
  const previousProduct = currentIndex > 0 ? allProducts[currentIndex - 1] : null
  const nextProduct = currentIndex < allProducts.length - 1 ? allProducts[currentIndex + 1] : null

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
              { href: "/products/hydraulic-fittings/reusable-hose-fittings", label: "Reusable Hose Fittings" },
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
                {product.name}
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
            background: "linear-gradient(105deg, rgba(8,18,40,0.30) 0%, rgba(8,18,40,0.10) 50%, rgba(8,18,40,0.20) 100%)",
          }}
          aria-hidden
        />
        {/* Orange warmth accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 45% 60% at 92% 50%, rgba(224,90,46,0.10) 0%, transparent 60%)",
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
                    Reusable Hose Fittings
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
                Reusable Hose Fittings
              </p>

              {/* Animated heading */}
              <AnimatedHeading text={product.name} />

              {/* Description */}
              <p className="leading-relaxed mb-6 text-sm bsp-fade-up" style={{ color: "rgba(203,220,248,0.85)", animationDelay: "0.2s" }}>
                {product.description}
              </p>

              {/* Glassmorphism specs card */}
              {(product.material || product.surfaceTreat || product.applications) && (
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
                  {product.applications && (
                    <p className="text-sm" style={{ color: "rgba(200,218,248,0.82)" }}>
                      <span className="font-bold text-white">Application:</span>{" "}
                      {typeof product.applications === "string" ? product.applications : product.applications.join(", ")}
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
            <AnimatedSpecTable>
              {/* Table wrapper */}
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
                        {(() => {
                          const keys = Object.keys(product.partTable[0]);
                          const dashIdx = keys.findIndex(k => k.toUpperCase() === 'DASH');
                          
                          // Find where "Hose Bore" section starts (at DN)
                          const boreStartIdx = keys.findIndex(k => k.toUpperCase() === 'DN');
                          
                          if (boreStartIdx !== -1 && dashIdx !== -1) {
                            // Columns before Hose Bore (P/N., Thread, etc.)
                            const preboreCols = boreStartIdx;
                            // Columns in Hose Bore section (DN, DASH)
                            const boreCols = dashIdx - boreStartIdx + 1;
                            // Remaining columns are Dimensions
                            const dimCols = keys.length - (boreStartIdx + boreCols);
                            
                            return (
                              <>
                                {preboreCols > 0 && <th colSpan={preboreCols} className="px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-[#0e1c35] border-b border-[#f4c4aa]"></th>}
                                {boreCols > 0 && <th colSpan={boreCols} className="px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-[#0e1c35] border-b border-[#f4c4aa]">Hose Bore</th>}
                                {dimCols > 0 && <th colSpan={dimCols} className="px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-[#0e1c35] border-b border-[#f4c4aa]">Dimensions</th>}
                              </>
                            );
                          }
                          return null;
                        })()}
                      </tr>
                    )}
                    {/* Sub-header row */}
                    <tr style={{
                      background: "linear-gradient(90deg, #fef8f5 0%, #fffaf8 100%)",
                      borderBottom: "2px solid #e05a2e"
                    }}>
                      {product.partTable.length > 0 && Object.keys(product.partTable[0]).map((key) => (
                        <th key={key} className={`px-4 py-3 text-xs font-bold uppercase tracking-widest text-[#0e1c35] ${key === "P/N." || key === "Part No." || key === "Thread" ? "text-left" : "text-center"}`}>{key}</th>
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
                          <td key={key} className={`px-4 py-3 text-sm text-[#0e1c35] ${key === "P/N." || key === "Part No." || key === "Thread" ? "text-left" : "text-center"} ${key === "P/N." || key === "Part No." ? "font-semibold" : ""}`}>
                            {String(value)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSpecTable>
            {/* Table Note */}
            {product.tableNote && (
              <div className="mt-4 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-700">Note:</span> {product.tableNote}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── Navigation ─────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Previous */}
            {previousProduct ? (
              <Link href={`/products/hydraulic-fittings/reusable-hose-fittings/${previousProduct.slug}`}>
                <div className="group cursor-pointer p-4 rounded-lg border border-gray-200 hover:border-[#e05a2e] hover:shadow-md transition-all">
                  <div className="flex items-center gap-2 text-[#e05a2e] mb-2">
                    <ChevronLeft size={16} />
                    <span className="text-xs font-semibold uppercase">Previous</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-[#e05a2e] transition-colors line-clamp-2">
                    {previousProduct.name}
                  </p>
                </div>
              </Link>
            ) : (
              <div className="p-4 rounded-lg border border-gray-100 bg-gray-50"></div>
            )}

            {/* Back to Category */}
            <Link href="/products/hydraulic-fittings/reusable-hose-fittings">
              <div className="group cursor-pointer p-4 rounded-lg border border-gray-200 hover:border-[#e05a2e] hover:shadow-md transition-all text-center">
                <p className="text-xs font-semibold uppercase text-gray-600 group-hover:text-[#e05a2e] transition-colors">
                  All Products
                </p>
                <p className="text-sm font-semibold text-gray-900 mt-1">Reusable Hose Fittings</p>
              </div>
            </Link>

            {/* Next */}
            {nextProduct ? (
              <Link href={`/products/hydraulic-fittings/reusable-hose-fittings/${nextProduct.slug}`}>
                <div className="group cursor-pointer p-4 rounded-lg border border-gray-200 hover:border-[#e05a2e] hover:shadow-md transition-all text-right">
                  <div className="flex items-center justify-end gap-2 text-[#e05a2e] mb-2">
                    <span className="text-xs font-semibold uppercase">Next</span>
                    <ChevronLeft size={16} className="rotate-180" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-[#e05a2e] transition-colors line-clamp-2">
                    {nextProduct.name}
                  </p>
                </div>
              </Link>
            ) : (
              <div className="p-4 rounded-lg border border-gray-100 bg-gray-50"></div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
