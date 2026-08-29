"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

/* ── Typewriter hook ─────────────────────────────────────────────────────── */
function useTypewriter(text: string, speed = 55, startDelay = 0) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)
  useEffect(() => {
    setDisplayed("")
    setDone(false)
    let i = 0
    const delay = setTimeout(() => {
      const tick = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) { clearInterval(tick); setDone(true) }
      }, speed)
      return () => clearInterval(tick)
    }, startDelay)
    return () => clearTimeout(delay)
  }, [text, speed, startDelay])
  return { displayed, done }
}

/* ── Blinking cursor ─────────────────────────────────────────────────────── */
function Cursor({ visible }: { visible: boolean }) {
  const [on, setOn] = useState(true)
  useEffect(() => {
    if (!visible) return
    const id = setInterval(() => setOn(v => !v), 530)
    return () => clearInterval(id)
  }, [visible])
  return (
    <span
      aria-hidden
      style={{
        display: "inline-block", width: "2px", height: "0.85em",
        background: "currentColor", marginLeft: "2px", verticalAlign: "middle",
        opacity: on ? 1 : 0, transition: "opacity 0.1s",
      }}
    />
  )
}

/* ── Word-by-word heading reveal ─────────────────────────────────────────── */
function AnimatedHeading() {
  const words = ["Hydraulic", "Adapters", "—"]
  const accent = ["Quality", "&", "Precision"]
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    let current = 0
    const total = words.length + accent.length
    const id = setInterval(() => {
      current++
      setPhase(current)
      if (current >= total) clearInterval(id)
    }, 120)
    return () => clearInterval(id)
  }, [])

  return (
    <h1
      className="font-extrabold text-white text-balance mb-4 leading-tight"
      style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)", letterSpacing: "-0.025em", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
    >
      {words.map((w, i) => (
        <span
          key={w + i}
          style={{
            display: "inline-block", marginRight: w === "—" ? "0.35em" : "0.22em",
            opacity: phase > i ? 1 : 0,
            transform: phase > i ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
          }}
        >
          {w}
        </span>
      ))}{" "}
      <br className="hidden sm:block" />
      {accent.map((w, i) => (
        <span
          key={w + i}
          style={{
            display: "inline-block", color: "#f0a060", marginRight: "0.22em",
            opacity: phase > words.length + i ? 1 : 0,
            transform: phase > words.length + i ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
          }}
        >
          {w}
        </span>
      ))}
    </h1>
  )
}

/* ── Floating stat pill ──────────────────────────────────────────────────── */
function StatPill({ value, label, delay }: { value: string; label: string; delay: number }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.14)",
        borderRadius: "8px",
        padding: "10px 18px",
        textAlign: "center",
        minWidth: "90px",
      }}
    >
      <div className="text-[#f0a060] font-extrabold text-lg leading-none mb-1">{value}</div>
      <div className="text-white/60 text-[10px] font-semibold uppercase tracking-widest">{label}</div>
    </div>
  )
}

/* ── Main component ─────────────────────────────────────────────────────── */
export function HydraulicAdaptersHero() {
  const eyebrow = useTypewriter("HYDRAULIC ADAPTERS", 48, 200)
  const btnText = useTypewriter("GET A QUOTE", 70, 1400)

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "52vh" }}>
      {/* Dark gradient background — no image needed */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #040a16 0%, #081226 35%, #0d1f3c 65%, #0a1628 100%)",
        }}
        aria-hidden
      />

      {/* Animated radial accent blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%", right: "5%", width: "520px", height: "520px",
          background: "radial-gradient(ellipse, rgba(224,90,46,0.14) 0%, transparent 65%)",
          filter: "blur(40px)",
          animation: "bsp-hero-glow-pulse 7s ease-in-out infinite",
        }}
        aria-hidden
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "0", left: "15%", width: "400px", height: "300px",
          background: "radial-gradient(ellipse, rgba(26,95,168,0.18) 0%, transparent 65%)",
          filter: "blur(50px)",
          animation: "bsp-hero-glow-pulse 9s 1.5s ease-in-out infinite",
        }}
        aria-hidden
      />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.6,
        }}
        aria-hidden
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(4,10,22,0.55))" }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: text ─────────────────────────────────────────────── */}
          <div>
            {/* Typewriter eyebrow */}
            <p
              className="text-[11px] font-bold uppercase tracking-[0.22em] mb-4 font-mono"
              style={{ color: "#e05a2e", minHeight: "1.4em" }}
            >
              {eyebrow.displayed}
              <Cursor visible={!eyebrow.done} />
            </p>

            <AnimatedHeading />

            <h2
              className="font-semibold mb-4"
              style={{ color: "#f0a060", fontSize: "1.05rem", letterSpacing: "0.01em" }}
            >
              All Standard Configurations
            </h2>

            <p
              className="leading-relaxed mb-8 max-w-md"
              style={{ color: "rgba(220,232,248,0.85)", fontSize: "0.94rem" }}
            >
              Hydronex supplies a comprehensive range of hydraulic adapters across all standard
              configurations. Our adapters are precision-engineered to connect hydraulic
              components of differing thread types, sizes, and standards — ensuring leak-free,
              high-pressure performance across every application.
            </p>

            <div className="flex items-center gap-5 flex-wrap mb-10">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 font-bold px-7 py-3 text-sm
                  transition-all duration-200 hover:shadow-[0_6px_24px_rgba(224,90,46,0.55)]
                  active:scale-[0.98]"
                style={{
                  background: "#e05a2e", color: "#fff", borderRadius: "3px",
                  letterSpacing: "0.1em", minWidth: "160px",
                  fontFamily: "var(--font-heading)",
                }}
              >
                <span className="font-mono text-sm">
                  {btnText.displayed}
                  <Cursor visible={!btnText.done} />
                </span>
                {btnText.done && <ChevronRight size={14} strokeWidth={2.5} />}
              </Link>

              <Link
                href="/products"
                className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-150 hover:text-white"
                style={{ color: "rgba(200,218,240,0.75)" }}
              >
                All Products <ChevronRight size={14} />
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-3 flex-wrap">
              <StatPill value="411+" label="Products" delay={1600} />
              <StatPill value="ISO" label="Certified" delay={1800} />
              <StatPill value="SAE" label="Compliant" delay={2000} />
              <StatPill value="NPT/BSP" label="Threads" delay={2200} />
            </div>
          </div>

          {/* ── Right: decorative tech diagram ─────────────────────────── */}
          <div className="hidden lg:flex items-center justify-end">
            <div
              className="relative"
              style={{ width: "420px", height: "320px" }}
            >
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(224,90,46,0.12) 0%, rgba(26,95,168,0.10) 45%, transparent 72%)",
                  filter: "blur(20px)",
                  animation: "bsp-hero-glow-pulse 5s ease-in-out infinite",
                }}
                aria-hidden
              />

              {/* Central feature label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                {/* Top label */}
                <div
                  style={{
                    border: "1px solid rgba(224,90,46,0.4)",
                    borderRadius: "4px",
                    padding: "6px 16px",
                    color: "#e05a2e",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    background: "rgba(224,90,46,0.07)",
                  }}
                >
                  Hydraulic Adapters
                </div>

                {/* Large identifier */}
                <div
                  style={{
                    color: "rgba(255,255,255,0.06)",
                    fontSize: "8rem",
                    fontWeight: 900,
                    lineHeight: 1,
                    letterSpacing: "-0.05em",
                    userSelect: "none",
                    fontFamily: "var(--font-heading)",
                  }}
                  aria-hidden
                >
                  HA
                </div>

                {/* Thread type pills */}
                <div className="flex items-center gap-2 flex-wrap justify-center">
                  {["NPT", "BSP", "JIC", "ORFS", "Metric", "SAE"].map((t, i) => (
                    <span
                      key={t}
                      style={{
                        padding: "3px 10px",
                        borderRadius: "20px",
                        fontSize: "9px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: i % 2 === 0 ? "#f0a060" : "rgba(200,220,248,0.7)",
                        border: `1px solid ${i % 2 === 0 ? "rgba(240,160,96,0.3)" : "rgba(200,220,248,0.15)"}`,
                        background: "rgba(255,255,255,0.04)",
                        animation: `bsp-hero-glow-pulse ${3.5 + i * 0.4}s ${i * 0.2}s ease-in-out infinite`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner accent lines */}
              {[
                { top: 0, left: 0, borderTop: "2px solid rgba(224,90,46,0.5)", borderLeft: "2px solid rgba(224,90,46,0.5)", width: 30, height: 30 },
                { top: 0, right: 0, borderTop: "2px solid rgba(224,90,46,0.5)", borderRight: "2px solid rgba(224,90,46,0.5)", width: 30, height: 30 },
                { bottom: 0, left: 0, borderBottom: "2px solid rgba(224,90,46,0.5)", borderLeft: "2px solid rgba(224,90,46,0.5)", width: 30, height: 30 },
                { bottom: 0, right: 0, borderBottom: "2px solid rgba(224,90,46,0.5)", borderRight: "2px solid rgba(224,90,46,0.5)", width: 30, height: 30 },
              ].map((s, i) => (
                <div key={i} className="absolute pointer-events-none" style={s as React.CSSProperties} aria-hidden />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
