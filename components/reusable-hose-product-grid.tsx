"use client"

import React, { useState, useMemo, useRef, useEffect } from "react"
import Image from "next/image"
import { Search, X } from "lucide-react"
import { ReusableHoseProductCard } from "@/components/reusable-hose-product-card"

interface ReusableHoseProduct {
  id: number
  name: string
  code: string
  image?: string
  slug?: string
}

interface ReusableHoseProductGridProps {
  products: ReusableHoseProduct[]
  categorySlug?: string
}

export function ReusableHoseProductGrid({ products, categorySlug = "reusable-hose-fittings" }: ReusableHoseProductGridProps) {
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  /* Suggestions — match name or code, max 8 entries */
  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.code.toLowerCase().includes(q)
      )
      .slice(0, 8)
  }, [query, products])

  /* Filtered product grid */
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return products
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.code.toLowerCase().includes(q)
    )
  }, [query, products])

  /* Close dropdown on outside click */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  function handleSelect(name: string) {
    setQuery(name)
    setOpen(false)
    inputRef.current?.blur()
  }

  function handleClear() {
    setQuery("")
    setOpen(false)
    inputRef.current?.focus()
  }

  /* Highlight the matched portion of the suggestion */
  function highlight(text: string, q: string) {
    const idx = text.toLowerCase().indexOf(q.toLowerCase())
    if (idx === -1) return text
    const before = text.substring(0, idx)
    const match = text.substring(idx, idx + q.length)
    const after = text.substring(idx + q.length)
    return (
      <>
        {before}
        <strong style={{ color: "#e05a2e" }}>{match}</strong>
        {after}
      </>
    )
  }

  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* ── Header ────────────────────────────────────────────────────── */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0e1c35] mb-4">
            Browse Our Products
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our complete range of reusable hose fittings with advanced search and filtering
          </p>
        </div>

        {/* ── Search Bar ────────────────────────────────────────────────── */}
        <div className="mb-12 max-w-md mx-auto relative">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400 pointer-events-none" size={18} />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search by name or code..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setOpen(true)
              }}
              onFocus={() => setOpen(true)}
              className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e05a2e] focus:border-transparent"
            />
            {query && (
              <button
                onClick={handleClear}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Dropdown — suggestions only when open */}
          {open && suggestions.length > 0 && (
            <div
              ref={dropdownRef}
              className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto"
            >
              {suggestions.map((product, idx) => (
                <button
                  key={`${product.id}-${idx}`}
                  onClick={() => {
                    handleSelect(product.name)
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 border-b border-gray-200 last:border-b-0"
                >
                  <div className="font-semibold text-sm">{highlight(product.name, query)}</div>
                  <div className="text-xs text-gray-500 font-mono">{product.code}</div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Products Grid ─────────────────────────────────────────────── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, idx) => (
              <ReusableHoseProductCard
                key={product.id}
                product={product}
                index={idx}
                categorySlug={categorySlug}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No products found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}
