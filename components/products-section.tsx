"use client"

import { ShoppingCart, Star } from "lucide-react"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "High-Pressure Hydraulic Hose SAE 100R2",
    price: 28.0,
    original: 34.0,
    rating: 5,
    sale: "-18%",
    img: "https://images.unsplash.com/photo-1609205807107-a8b9f7463e2b?w=400&q=80",
  },
  {
    id: 2,
    name: "Spiral Wire Hydraulic Hose SAE 100R9",
    price: 45.0,
    original: null,
    rating: 5,
    sale: null,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  },
  {
    id: 3,
    name: "Industrial Air & Water Rubber Hose",
    price: 18.5,
    original: 22.0,
    rating: 4,
    sale: "-16%",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80",
  },
  {
    id: 4,
    name: "BSP Hydraulic Swaged Fitting Adapter",
    price: 12.0,
    original: null,
    rating: 5,
    sale: null,
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
  },
  {
    id: 5,
    name: "Clear Braided PVC Garden Hose",
    price: 9.5,
    original: 11.0,
    rating: 4,
    sale: "-14%",
    img: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=400&q=80",
  },
  {
    id: 6,
    name: "Silicone Coolant Hose Kit",
    price: 32.0,
    original: null,
    rating: 5,
    sale: null,
    img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=400&q=80",
  },
  {
    id: 7,
    name: "Chemical Resistant PTFE Hose",
    price: 55.0,
    original: 62.0,
    rating: 5,
    sale: "-11%",
    img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&q=80",
  },
  {
    id: 8,
    name: "Quick-Connect Hydraulic Coupling Set",
    price: 24.0,
    original: null,
    rating: 4,
    sale: null,
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&q=80",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < rating ? "fill-[#e05a2e] text-[#e05a2e]" : "fill-gray-200 text-gray-200"}
        />
      ))}
    </div>
  )
}

export default function ProductsSection() {
  const [cart, setCart] = useState<number[]>([])

  const addToCart = (id: number) => {
    setCart((prev) => [...prev, id])
  }

  return (
    <section className="bg-[#f7f7f7] py-16" id="hydraulic">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#e05a2e] text-sm font-semibold mb-2">. Products</p>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#141414] text-balance"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            The best products<br />we supply
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <div key={p.id} className="bg-white group relative">
              {/* Sale badge */}
              {p.sale && (
                <span className="absolute top-3 left-3 z-10 bg-[#e05a2e] text-white text-xs font-bold px-2 py-1">
                  Sale {p.sale}
                </span>
              )}

              {/* Image */}
              <div className="overflow-hidden bg-gray-50 aspect-square">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="px-4 py-4">
                <h3 className="text-sm font-semibold text-[#141414] mb-2 leading-snug line-clamp-2 min-h-[2.5rem]">
                  {p.name}
                </h3>
                <StarRating rating={p.rating} />
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    {p.original && (
                      <span className="text-gray-400 line-through text-sm">
                        ${p.original.toFixed(2)}
                      </span>
                    )}
                    <span className="text-[#e05a2e] font-bold text-sm">${p.price.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => addToCart(p.id)}
                    aria-label="Add to cart"
                    className={`p-1.5 border transition-colors ${
                      cart.includes(p.id)
                        ? "border-[#e05a2e] text-[#e05a2e]"
                        : "border-gray-300 text-gray-500 hover:border-[#e05a2e] hover:text-[#e05a2e]"
                    }`}
                  >
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
