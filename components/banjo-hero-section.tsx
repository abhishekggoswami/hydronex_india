"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
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
        if (i >= text.length) {
          clearInterval(tick)
          setDone(true)
        }
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
    const id = setInterval(() => setOn((v) => !v), 530)
    return () => clearInterval(id)
  }, [visible])
  return (
    <span
      aria-hidden
      style={{
        display: "inline-block",
        width: "2px",
        height: "0.85em",
        background: "currentColor",
        marginLeft: "2px",
        verticalAlign: "middle",
        opacity: on ? 1 : 0,
        transition: "opacity 0.1s",
      }}
    />
  )
}

/* ── Word-by-word heading reveal ────────────────────────────────────────── */
function AnimatedHeading() {
  const words = ["Banjo", "Fittings", "—"]
  const accent = ["Compact", "&", "Efficient"]
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
      style={{
        fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
        letterSpacing: "-0.025em",
        textShadow: "0 2px 20px rgba(0,0,0,0.5)",
      }}
    >
      {words.map((w, i) => (
        <span
          key={w + i}
          style={{
            display: "inline-block",
            marginRight: w === "—" ? "0.35em" : "0.22em",
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
            display: "inline-block",
            color: "#f0a060",
            marginRight: "0.22em",
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

/* ── Main component ─────────────────────────────────────────────────────── */
export function BanjoHeroSection() {
  const eyebrow = useTypewriter("COMPACT HYDRAULIC SOLUTIONS", 48, 200)
  const btnText = useTypewriter("GET A QUOTE", 70, 1400)

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "52vh" }}>

      {/* Background */}
      <Image
        src="/images/bsp-hero-bg.jpg"
        alt=""
        aria-hidden
        fill
        className="object-cover object-center"
        priority
      />

      {/* Directional overlay — heavy left for text, open right for fittings */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(4,10,22,0.92) 0%, rgba(8,18,38,0.82) 35%, rgba(8,18,38,0.50) 58%, rgba(4,10,22,0.25) 100%)",
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

            {/* Animated word-by-word heading */}
            <AnimatedHeading />

            <h2
              className="font-semibold mb-4"
              style={{ color: "#f0a060", fontSize: "1.05rem", letterSpacing: "0.01em" }}
            >
              Banjo Fittings
            </h2>

            <p
              className="leading-relaxed mb-8 max-w-md"
              style={{ color: "rgba(220,232,248,0.85)", fontSize: "0.94rem" }}
            >
              Hydronex supplies a comprehensive range of banjo fittings featuring compact design
              and reliable performance. Our banjo fittings are engineered with precision for
              efficient hydraulic connections in both BSP and metric standards, delivering
              leak-free performance across demanding industrial and hydraulic applications.
            </p>

            <div className="flex items-center gap-5 flex-wrap">
              {/* Typewriter CTA button */}
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 font-bold px-7 py-3 text-sm
                  transition-all duration-200 hover:shadow-[0_6px_24px_rgba(224,90,46,0.55)]
                  active:scale-[0.98]"
                style={{
                  background: "#e05a2e",
                  color: "#fff",
                  borderRadius: "3px",
                  letterSpacing: "0.1em",
                  minWidth: "160px",
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
                All Hydraulic Fittings <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          {/* ── Right: product fitting spotlight ───────────────────────── */}
          <div className="flex items-center justify-center lg:justify-end">
            <div
              className="banjo-hero-product relative"
              style={{ width: "min(460px, 90vw)", aspectRatio: "1 / 0.78" }}
            >
              {/* Outer broad ambient glow */}
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: "-30px",
                  background:
                    "radial-gradient(ellipse 72% 60% at 50% 52%, rgba(255,220,160,0.22) 0%, rgba(200,180,255,0.10) 45%, transparent 72%)",
                  filter: "blur(22px)",
                  animation: "bsp-hero-glow-pulse 5s 1.1s ease-in-out infinite",
                }}
                aria-hidden
              />

              {/* Sharp inner spotlight — mimics a studio key light */}
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: "5%",
                  background:
                    "radial-gradient(ellipse 55% 45% at 50% 48%, rgba(255,255,255,0.18) 0%, rgba(255,240,200,0.08) 40%, transparent 70%)",
                  borderRadius: "50%",
                  filter: "blur(6px)",
                  animation: "bsp-hero-glow-pulse 5s 1.4s ease-in-out infinite",
                }}
                aria-hidden
              />

              {/* Product image — hover lifts and brightens */}
              <Image
                src="/images/hydraulic-fittings/banjo-fittings-intro.png"
                alt="Hydronex banjo fittings compact hydraulic connectors"
                fill
                className="object-contain banjo-hero-img banjo-hero-img-hover"
                priority
                style={{
                  filter:
                    "drop-shadow(0 0 28px rgba(255,220,150,0.55)) drop-shadow(0 0 8px rgba(255,255,255,0.35)) drop-shadow(0 6px 18px rgba(0,0,0,0.70))",
                  transform: "scale(1.06)",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
