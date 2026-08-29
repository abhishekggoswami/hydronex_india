"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

const slides = [
  {
    label: "Hydraulic Solutions",
    title: "The Leading Hydraulic Hose & Fittings Manufacturer",
    sub: "Free delivery on orders over $1,500 · ISO 9001 Certified",
    highlight: "$1,500",
    bg: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&q=80",
  },
  {
    label: "Industrial Hoses",
    title: "One-Stop Solution for All Industrial Hose Needs",
    sub: "Air · Steam · Chemical · Food Grade · Suction & Delivery hoses",
    highlight: "",
    bg: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80",
  },
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const slide = slides[active]

  return (
    <section className="relative w-full overflow-hidden bg-[#f0f0f0]" style={{ height: 'min(600px, 80vh)' }}>
      {/* BG image */}
      <div className="absolute inset-0">
        <img
          src={slide.bg}
          alt=""
          className="w-full h-full object-cover opacity-20 transition-all duration-700"
        />
      </div>

      {/* Slide numbers left */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`text-xs font-bold transition-colors ${i === active ? 'text-[#141414]' : 'text-gray-400'}`}
          >
            {String(i + 1).padStart(2, '0')}
          </button>
        ))}
        <div className="w-px h-12 bg-gray-300 mx-auto" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-lg">
          <p className="text-[#e05a2e] text-sm font-semibold mb-3 tracking-wide">
            . {slide.label}
          </p>
          <h1
            className="text-4xl md:text-5xl font-extrabold text-[#141414] leading-tight mb-4 text-balance"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {slide.title}
          </h1>
          <p className="text-gray-600 text-base mb-8 leading-relaxed">
            {slide.sub.split(slide.highlight).map((part, i) => (
              <span key={i}>
                {part}
                {i === 0 && slide.highlight && (
                  <span className="text-[#e05a2e] font-semibold">{slide.highlight}</span>
                )}
              </span>
            ))}
          </p>
          <div className="flex items-center gap-0">
            <a
              href="#products"
              className="bg-transparent border border-[#141414] text-[#141414] font-semibold px-7 py-3.5 text-sm hover:bg-[#141414] hover:text-white transition-colors"
            >
              Shop Now
            </a>
            <a
              href="#contact"
              className="bg-[#e05a2e] text-white p-3.5 hover:bg-[#c94d24] transition-colors"
              aria-label="Get a quote"
            >
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Dot nav */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2.5 h-2.5 rounded-full border transition-colors ${i === active ? 'bg-[#e05a2e] border-[#e05a2e]' : 'bg-transparent border-gray-400'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
