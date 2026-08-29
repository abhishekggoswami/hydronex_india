"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const BTN_TEXT = "Get A Quote"

interface BSPCtaSectionProps {
  title?: string
  description?: string
  buttonLabel?: string
  ctaHref?: string
  supplementaryContent?: ReactNode
}

export function BSPCtaSection({
  title = "Need BSP Fitting Solutions?",
  description = "Contact our experts for tailored solutions, bulk orders and technical support.",
  buttonLabel = "Get A Quote",
  ctaHref = "/#contact",
  supplementaryContent,
}: BSPCtaSectionProps) {
  /* ── Typewriter state ─────────────────────────────────────────── */
  const [displayed, setDisplayed] = useState("")
  const [phase, setPhase] = useState<"typing" | "hold" | "erasing" | "pause">("pause")
  const indexRef = useRef(0)
  const ctaText = buttonLabel

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    const tick = () => {
      if (phase === "pause") {
        // initial delay before first type
        timer = setTimeout(() => setPhase("typing"), 800)
      } else if (phase === "typing") {
        if (indexRef.current < ctaText.length) {
          indexRef.current += 1
          setDisplayed(ctaText.slice(0, indexRef.current))
          timer = setTimeout(tick, 72)
        } else {
          setPhase("hold")
        }
      } else if (phase === "hold") {
        timer = setTimeout(() => setPhase("erasing"), 2200)
      } else if (phase === "erasing") {
        if (indexRef.current > 0) {
          indexRef.current -= 1
          setDisplayed(BTN_TEXT.slice(0, indexRef.current))
          timer = setTimeout(tick, 42)
        } else {
          setPhase("typing")
        }
      }
    }

    timer = setTimeout(tick, 0)
    return () => clearTimeout(timer)
  }, [phase])

  return (
    <section className="bg-anim-cta-gradient relative overflow-hidden">
      {/* Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
          opacity: 0.18,
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">

        {/* Logo — same CSS-crop as navbar, but white version */}
        <div
          className="overflow-hidden mx-auto mb-7"
          style={{ width: "131px", height: "38px" }}
          aria-label="Hydronex"
        >
          <img
            src="/hydronex-logo-light.png"
            alt="Hydronex"
            style={{
              width: "146px",
              height: "146px",
              marginTop: "-54px",
              marginLeft: "-7px",
              display: "block",
              /* Brighten the outline strokes so they pop on the orange background */
              filter: "brightness(0) invert(1)",
            }}
          />
        </div>

        {/* Main heading */}
        <h2
          className="cta-heading-animate font-extrabold text-white text-balance mb-5 leading-tight"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 4vw, 3.25rem)",
            letterSpacing: "-0.025em",
            textShadow: "0 2px 24px rgba(120,40,0,0.35)",
          }}
        >
          {title}
        </h2>

        {/* Subtitle */}
        <p
          className="cta-sub-animate text-white/80 mb-10 max-w-xl mx-auto leading-relaxed"
          style={{ fontSize: "clamp(0.875rem, 1.5vw, 1rem)", fontFamily: "var(--font-sans)" }}
        >
          {description}
        </p>

        {supplementaryContent && <div className="cta-sub-animate mb-10">{supplementaryContent}</div>}

        {/* Button with typewriter text */}
        <div className="cta-btn-animate">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center bg-white font-bold py-4 text-sm uppercase
              transition-all duration-200 hover:bg-[#fff8f5] hover:shadow-[0_8px_32px_rgba(100,30,0,0.30)]
              active:scale-[0.98]"
            style={{
              color: "#b83a00",
              fontFamily: "var(--font-heading)",
              letterSpacing: "0.12em",
              borderRadius: "3px",
              /* Fixed width — never changes regardless of how many chars are typed */
              width: "220px",
            }}
          >
            {/* Fixed-width text area so cursor movement doesn't shift layout */}
            <span
              className="inline-flex items-center"
              style={{ width: "140px", justifyContent: "flex-start" }}
            >
              <span>{displayed}</span>
              <span
                aria-hidden
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "1em",
                  background: "#b83a00",
                  marginLeft: "1px",
                  verticalAlign: "middle",
                  animation: "cta-cursor-blink 0.7s step-end infinite",
                  opacity: phase === "hold" ? 1 : 0.85,
                  flexShrink: 0,
                }}
              />
            </span>
            <ChevronRight size={15} strokeWidth={2.5} style={{ flexShrink: 0 }} />
          </Link>
        </div>
      </div>
    </section>
  )
}
