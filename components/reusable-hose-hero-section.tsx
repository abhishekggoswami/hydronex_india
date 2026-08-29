"use client"

import { useState, useEffect } from "react"
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
  const words = ["Reusable", "Hose", "Fittings"]
  const accent = ["SAE 100 R5", "&", "BSP"]
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
            marginRight: "0.22em",
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
export function ReusableHoseHeroSection() {
  const eyebrow = useTypewriter("REUSABLE HOSE FITTINGS", 48, 200)
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

      {/* Directional overlay */}
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
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow with typewriter + cursor */}
          <div className="mb-6 sm:mb-8">
            <p
              className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-[#e05a2e]"
              style={{ letterSpacing: "0.15em" }}
            >
              {eyebrow.displayed}
              <Cursor visible={!eyebrow.done} />
            </p>
          </div>

          {/* Animated heading */}
          <AnimatedHeading />

          {/* Description paragraph */}
          <p className="text-sm sm:text-base text-gray-200 mb-8 leading-relaxed max-w-2xl">
            Reusable Hose Fittings
          </p>

          {/* CTA buttons row */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-bold uppercase text-white transition-all duration-300 hover:shadow-lg"
              style={{
                background: "#e05a2e",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#d04a1e")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#e05a2e")}
            >
              {btnText.displayed}
              <Cursor visible={!btnText.done} />
              {btnText.done && <ChevronRight className="ml-2 w-4 h-4" />}
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-bold uppercase text-[#0e1c35] transition-all duration-300 hover:shadow-lg"
              style={{
                background: "rgba(255, 255, 255, 0.12)",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                color: "rgba(255, 255, 255, 0.9)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)")}
            >
              All Hydraulic Fittings
              <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
