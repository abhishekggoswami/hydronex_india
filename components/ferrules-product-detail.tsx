"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Phone, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useLikedProducts, LikedProduct } from "@/context/liked-products-context"
import { ferrules } from "@/lib/ferrules"

interface FerruleProductDetailProps {
  product: LikedProduct
  categorySlug: string
}

const ANIMATION_DURATION = 600

function AnimatedSpecTable({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0.7,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity ${ANIMATION_DURATION}ms ease, transform ${ANIMATION_DURATION}ms ease`,
      }}
    >
      {children}
    </div>
  )
}

function MovingBorderFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "linear-gradient(90deg, transparent 0%, rgba(224, 90, 46, 0.2) 50%, transparent 100%)",
        animation: "slideGradient 8s infinite ease-in-out",
        borderRadius: "6px"
      }} />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export function FerruleProductDetail({ product, categorySlug }: FerruleProductDetailProps) {
  const { isLiked, toggleLike } = useLikedProducts()
  const liked = isLiked(product.id)

  const currentIndex = ferrules.findIndex((p) => p.id === product.id)
  const prevProduct = currentIndex > 0 ? ferrules[currentIndex - 1] : ferrules[ferrules.length - 1]
  const nextProduct = currentIndex < ferrules.length - 1 ? ferrules[currentIndex + 1] : ferrules[0]

  const [typedText, setTypedText] = useState("")
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < product.name.length) {
        setTypedText(product.name.slice(0, ++i))
      } else {
        clearInterval(interval)
      }
    }, 35)
    return () => clearInterval(interval)
  }, [product.name])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#040a16] via-[#0a1220] to-[#040a16]">
      <Image
        src="/images/bsp-hero-bg.jpg"
        alt=""
        fill
        className="absolute inset-0 object-cover opacity-[0.15]"
        priority
      />
      <div className="relative z-10">
        {/* ── Breadcrumb ────────────────────────────────────────────────── */}
        <nav className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
              Hydraulic Fittings
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <Link href={`/products/hydraulic-fittings/${categorySlug}`} className="text-gray-400 hover:text-white transition-colors capitalize">
              {categorySlug.replace(/-/g, " ")}
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <span className="text-gray-300">{product.code}</span>
          </div>
        </nav>

        {/* ── Main Content ────────────────────────────────────────────── */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            {/* ── Two Column Layout ──────────────────────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {/* ── LEFT: Product Image ────────────────────────────────── */}
              {product.image && (
                <div className="relative">
                  {/* Left Orange Border */}
                  <div className="absolute -left-8 top-0 bottom-0 w-1 bg-[#e05a2e]" />
                  
                  <div className="relative group h-96 overflow-hidden rounded-lg" style={{ background: "#0e1c35" }}>
                    <div className="absolute top-4 left-4 z-30 pointer-events-none">
                      <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest" style={{ color: "#e05a2e" }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e05a2e]" />
                        Ferrules
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 z-30 pointer-events-none">
                      <span className="text-xs font-mono font-semibold text-white/40">
                        {product.code}
                      </span>
                    </div>
                    <div className="absolute inset-0 z-10 transition-transform duration-500 ease-out group-hover:scale-[1.05]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="technical-diagram-image object-contain p-12"
                      />
                    </div>
                    <div className="absolute bottom-4 right-4 z-40 opacity-30 hover:opacity-50 transition-opacity">
                      <Image
                        src="/images/hydronex-logo-white.png"
                        alt="Hydronex"
                        width={100}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* ── RIGHT: Product Content ────────────────────────────── */}
              <div className="flex flex-col justify-start">
                {/* Title */}
                <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight" style={{ minHeight: "auto" }}>
                  {typedText}
                  {typedText.length < product.name.length && (
                    <span className="animate-pulse">|</span>
                  )}
                </h1>

                {/* Description */}
                <p className="text-gray-300 text-base lg:text-lg mb-8 leading-relaxed">{product.description}</p>

                {/* Specs Box */}
                <div className="mb-8 p-6 rounded-lg border" style={{ background: "rgba(14, 28, 53, 0.6)", borderColor: "rgba(224, 90, 46, 0.3)" }}>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1.5">Material</p>
                      <p className="text-gray-200 font-medium">{product.material}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1.5">Surface Treat</p>
                      <p className="text-gray-200 font-medium">{product.surfaceTreat}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1.5">Application</p>
                      <p className="text-gray-200 font-medium">{product.applications}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-4">
                  <button
                    onClick={() => toggleLike(product)}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-bold uppercase text-white transition-all duration-300 border"
                    style={{
                      background: liked ? "#e05a2e" : "transparent",
                      borderColor: "#e05a2e",
                      color: liked ? "white" : "#e05a2e",
                      fontSize: "0.75rem",
                      letterSpacing: "0.08em",
                    }}
                  >
                    <Heart className="w-4 h-4" fill={liked ? "currentColor" : "none"} />
                    {liked ? "Saved" : "Save"}
                  </button>

                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-bold uppercase text-white transition-all duration-300"
                    style={{
                      background: "#e05a2e",
                      fontSize: "0.75rem",
                      letterSpacing: "0.08em",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#d04a1e")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#e05a2e")}
                  >
                    REQUEST QUOTE
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* ── Specifications Table ────────────────────────────────── */}
            {product.partTable && product.partTable.length > 0 && (
              <section className="mt-16 pt-12 border-t border-gray-700 mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Specifications</h2>
                <AnimatedSpecTable>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      {/* Group header row */}
                      {product.partTable.length > 0 && (
                        <thead>
                          <tr style={{
                            background: "linear-gradient(90deg, #fff0eb 0%, #fff7f3 100%)",
                            borderBottom: "1px solid #f4c4aa"
                          }}>
                            {(() => {
                              const keys = Object.keys(product.partTable[0]);
                              const dnIdx = keys.findIndex(k => k.toUpperCase() === 'DN');
                              const dashIdx = keys.findIndex(k => k.toUpperCase() === 'DASH');
                              
                              // If we have DN and DASH, determine the sections
                              if (dnIdx !== -1 && dashIdx !== -1) {
                                // Columns before DN (Part No., 代号, etc.)
                                const preboreCols = dnIdx;
                                // Columns in Hose Bore section (DN through DASH)
                                const boreCols = dashIdx - dnIdx + 1;
                                // Remaining columns are Dimensions
                                const dimCols = keys.length - (dnIdx + boreCols);
                                
                                return (
                                  <>
                                    {preboreCols > 0 && <th colSpan={preboreCols} className="px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-[#0e1c35] border-b border-[#f4c4aa]"></th>}
                                    {boreCols > 0 && <th colSpan={boreCols} className="px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-[#0e1c35] border-b border-[#f4c4aa]">HOSE</th>}
                                    {dimCols > 0 && <th colSpan={dimCols} className="px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-[#0e1c35] border-b border-[#f4c4aa]">DIMENSIONS</th>}
                                  </>
                                );
                              }
                              return null;
                            })()}
                          </tr>
                          <tr style={{
                            background: "linear-gradient(90deg, #fff0eb 0%, #fff7f3 100%)",
                            borderBottom: "2px solid #f4c4aa"
                          }}>
                            {Object.keys(product.partTable[0]).map((key) => (
                              <th key={key} className="px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-[#0e1c35]">
                                {key}
                              </th>
                            ))}
                          </tr>
                        </thead>
                      )}
                      <tbody>
                        {product.partTable.map((row, idx) => (
                          <tr
                            key={idx}
                            style={{
                              background: idx % 2 === 0 ? "rgba(255, 255, 255, 0.02)" : "rgba(240, 160, 96, 0.04)",
                              borderBottom: "1px solid rgba(240, 160, 96, 0.15)",
                            }}
                          >
                            {Object.values(row).map((val, cellIdx) => (
                              <td key={cellIdx} className="px-4 py-3 text-center text-sm text-gray-300 border-b border-[#f4c4aa]/30">
                                {val}
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
              </section>
            )}

            {/* ── Navigation ────────────────────────────────────────────── */}
            <div className="flex items-center justify-between gap-4 mt-12 pt-8 border-t border-gray-700">
              <Link
                href={`/products/hydraulic-fittings/${categorySlug}/${prevProduct.slug}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="text-sm font-medium hidden sm:inline">{prevProduct.name}</span>
                <span className="text-sm font-medium sm:hidden">Previous</span>
              </Link>

              <Link
                href={`/products/hydraulic-fittings/${categorySlug}`}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                View All Ferrules
              </Link>

              <Link
                href={`/products/hydraulic-fittings/${categorySlug}/${nextProduct.slug}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                <span className="text-sm font-medium hidden sm:inline">{nextProduct.name}</span>
                <span className="text-sm font-medium sm:hidden">Next</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
