"use client"

import { ShoppingCart, ArrowUpRight, Star } from "lucide-react"
import { useState } from "react"

const featured = {
  title: "High-Pressure Spiral Hydraulic Hose Assembly",
  href: "#hydraulic",
  img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80",
}

const arrivals = [
  {
    id: 10,
    name: "SAE 100R1AT Single Wire Braid Hose",
    price: 22.0,
    original: 26.0,
    rating: 5,
    img: "https://images.unsplash.com/photo-1609205807107-a8b9f7463e2b?w=200&q=80",
  },
  {
    id: 11,
    name: "NPT Hydraulic Hex Nipple Adapter",
    price: 8.5,
    original: null,
    rating: 5,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=80",
  },
  {
    id: 12,
    name: "Steam Delivery Industrial Rubber Hose",
    price: 31.0,
    original: null,
    rating: 5,
    img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=200&q=80",
  },
  {
    id: 13,
    name: "Food Grade Silicone Suction Hose",
    price: 42.0,
    original: 50.0,
    rating: 4,
    img: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=200&q=80",
  },
  {
    id: 14,
    name: "JIC 37° Swivel Female Fitting",
    price: 14.0,
    original: null,
    rating: 4,
    img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=200&q=80",
  },
  {
    id: 15,
    name: "ORFS Hydraulic Straight Adapter",
    price: 11.5,
    original: 14.0,
    rating: 5,
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=200&q=80",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          className={i < rating ? "fill-[#e05a2e] text-[#e05a2e]" : "fill-gray-200 text-gray-200"}
        />
      ))}
    </div>
  )
}

export default function NewArrivals() {
  const [cart, setCart] = useState<number[]>([])

  return (
    <section className="bg-white py-16" id="industrial">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#e05a2e] text-sm font-semibold mb-2">. New Arrivals</p>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#141414] text-balance"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Meet New Arrivals
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
          {/* Featured card */}
          <a href={featured.href} className="relative group overflow-hidden block">
            <img
              src={featured.img}
              alt={featured.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-xl font-bold mb-5 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                {featured.title}
              </h3>
              <div className="flex items-center gap-0">
                <span className="border border-white text-white text-sm font-semibold px-5 py-2.5 hover:bg-white hover:text-[#141414] transition-colors">
                  View Now
                </span>
                <span className="bg-[#e05a2e] text-white p-2.5">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </div>
          </a>

          {/* Arrivals list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {arrivals.map((p) => (
              <div key={p.id} className="flex items-center gap-4 p-4 border-b border-r border-gray-100 group hover:bg-gray-50 transition-colors">
                <div className="shrink-0 w-16 h-16 bg-gray-100 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-[#141414] leading-snug line-clamp-2 mb-1">
                    {p.name}
                  </h4>
                  <StarRating rating={p.rating} />
                  <div className="flex items-center justify-between mt-1.5">
                    <div className="flex items-center gap-2">
                      {p.original && (
                        <span className="text-gray-400 line-through text-xs">${p.original.toFixed(2)}</span>
                      )}
                      <span className="text-[#e05a2e] font-bold text-sm">${p.price.toFixed(2)}</span>
                    </div>
                    <button
                      onClick={() => setCart((prev) => [...prev, p.id])}
                      aria-label="Add to cart"
                      className={`p-1 border transition-colors ${
                        cart.includes(p.id)
                          ? "border-[#e05a2e] text-[#e05a2e]"
                          : "border-gray-300 text-gray-500 hover:border-[#e05a2e] hover:text-[#e05a2e]"
                      }`}
                    >
                      <ShoppingCart size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
