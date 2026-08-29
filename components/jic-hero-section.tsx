"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function JICHeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "52vh" }}>

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #f0f8ff 0%, #e8f4fc 25%, #e0f0f9 50%, #f0f8ff 100%)",
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: text ─────────────────────────────────────────────── */}
          <div>
            <p
              className="text-[11px] font-bold uppercase tracking-[0.22em] mb-4"
              style={{ color: "#e05a2e" }}
            >
              JIC Standard FLARE
            </p>

            <h1
              className="font-extrabold text-[#0f2040] mb-4 leading-tight text-balance"
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
                letterSpacing: "-0.025em",
              }}
            >
              JIC Hydraulic
              <span className="block text-[#1a5fa8] text-2xl sm:text-3xl font-semibold mt-0.5">
                Fittings
              </span>
            </h1>

            {/* Accent rule */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[3px] w-10 bg-[#e05a2e] rounded-full" />
              <span className="h-[3px] w-4 bg-[#1a5fa8]/40 rounded-full" />
            </div>

            <p
              className="leading-relaxed mb-8 max-w-md"
              style={{ color: "#2a4a70", fontSize: "0.94rem" }}
            >
              Hydronex supplies a comprehensive range of precision-engineered JIC (Joint Industry Council) hydraulic fittings. Our JIC fittings feature 37-degree flare design with metal-to-metal sealing, providing reliable and leak-free connections for demanding high-pressure hydraulic applications.
            </p>

            <div className="flex items-center gap-5 flex-wrap">
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
                }}
              >
                GET A QUOTE
                <ChevronRight size={14} strokeWidth={2.5} />
              </Link>

              <Link
                href="/products"
                className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-150 hover:text-[#e05a2e]"
                style={{ color: "#4a6a90" }}
              >
                All Hydraulic Fittings <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          {/* ── Right: product fitting showcase ───────────────────────── */}
          <div className="flex items-center justify-center lg:justify-end">
            <div
              className="jic-hero-product relative"
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
                }}
                aria-hidden
              />

              {/* Product image - using the provided JIC fitting image */}
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JIC%20Hydraulic%20Fitting-x6lpWXA5NMM1P2t8ilBnxo0wmgnC5o.png"
                alt="Hydronex JIC hydraulic fittings with 37-degree flare design"
                fill
                className="object-contain"
                priority
                style={{
                  filter:
                    "drop-shadow(0 0 28px rgba(255,220,150,0.55)) drop-shadow(0 0 8px rgba(255,255,255,0.35)) drop-shadow(0 6px 18px rgba(0,0,0,0.30))",
                  transform: "scale(1.06)",
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
