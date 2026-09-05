"use client"

import React, { useState, useMemo, useRef, useEffect } from "react"
import Image from "next/image"
import { Search, X } from "lucide-react"
import { BSPProductCard } from "@/components/bsp-product-card"

interface BSPProduct {
  id: number
  name: string
  code: string
  image?: string
  slug?: string
}

interface BSPProductGridProps {
  products: BSPProduct[]
  basePath?: string
  categoryLabel?: string
  productType?: string
  productTypeLabel?: string
  searchScope?: string
  disableProductLinks?: boolean
}

export function BSPProductGrid({ products, basePath, categoryLabel, productType, productTypeLabel, searchScope = "British BSP", disableProductLinks = false }: BSPProductGridProps) {
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
    if (idx === -1 || !q) return <span>{text}</span>
    return (
      <>
        <span>{text.slice(0, idx)}</span>
        <span className="font-bold text-[#0f2b52]">{text.slice(idx, idx + q.length)}</span>
        <span>{text.slice(idx + q.length)}</span>
      </>
    )
  }

  return (
    <>
      {/* ── Search bar ──────────────────────────────────────────────────── */}
      <div className="relative mb-10 max-w-2xl" role="search">
        <div
          className="flex items-center bg-white border border-[#c5d8ef]
            shadow-[0_4px_20px_rgba(15,32,64,0.10)]
            focus-within:border-[#1a5fa8] focus-within:shadow-[0_0_0_3px_rgba(26,95,168,0.13),0_4px_20px_rgba(15,32,64,0.12)]
            transition-all duration-200 rounded-full"
        >
          {/* Orange accent dot left */}
          <span
            className="ml-4 mr-0 w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: "#e05a2e" }}
            aria-hidden
          />

          {/* Search icon */}
          <span className="pl-2.5 pr-2 flex-shrink-0 text-[#1a5fa8]">
            <Search size={17} strokeWidth={2} />
          </span>

          <input
            ref={inputRef}
            type="search"
            role="combobox"
            aria-autocomplete="list"
            aria-expanded={open && suggestions.length > 0}
            aria-controls="bsp-search-suggestions"
            value={query}
            placeholder="Search fittings by name or part code…"
            className="flex-1 py-3.5 pr-2 text-sm text-[#0f1e36] placeholder-[#9ab4cc]
              bg-transparent outline-none font-medium tracking-wide"
            onChange={(e) => {
              setQuery(e.target.value)
              setOpen(true)
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setOpen(false)
                inputRef.current?.blur()
              }
            }}
          />

          {/* Clear button */}
          {query && (
            <button
              onClick={handleClear}
              aria-label="Clear search"
              className="pr-4 pl-1 flex-shrink-0 text-[#9ab4cc] hover:text-[#e05a2e] transition-colors"
            >
              <X size={15} strokeWidth={2.5} />
            </button>
          )}
        </div>

        {/* ── Suggestions dropdown ──────────────────────────────────────── */}
        {open && suggestions.length > 0 && (
          <div
            ref={dropdownRef}
            id="bsp-search-suggestions"
            role="listbox"
            className="absolute left-0 right-0 top-full mt-1 bg-white border border-[#c5d8ef]
              rounded-sm shadow-[0_8px_32px_rgba(15,30,60,0.12)] z-50 overflow-hidden"
          >
            {suggestions.map((p) => (
              <button
                key={p.id}
                role="option"
                aria-selected={false}
                onMouseDown={(e) => {
                  e.preventDefault()
                  handleSelect(p.name)
                }}
                className="w-full flex items-start gap-3 px-4 py-2.5 text-left
                  hover:bg-[#eaf4fc] transition-colors group"
              >
                {/* Product image thumbnail — navy blueprint style */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-sm overflow-hidden"
                  style={{ background: "#0e1c35" }}
                >
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt=""
                      aria-hidden
                      width={40}
                      height={40}
                      className="w-full h-full object-contain p-1"
                      style={{ filter: "invert(1) opacity(0.85)" }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-[9px] font-bold text-[#4a9ad4] uppercase">{p.name.charAt(0)}</span>
                    </div>
                  )}
                </div>

                <span className="flex-1 min-w-0">
                  <span className="block text-sm text-[#1e3a60] leading-snug">
                    {highlight(p.name, query.trim())}
                  </span>
                  <span className="block text-[10px] text-[#7a9cbf] font-mono mt-0.5">
                    {p.code}
                  </span>
                </span>
              </button>
            ))}

            {/* Footer count */}
            <div className="px-4 py-2 border-t border-[#e8f2fc] bg-[#f4f9ff]">
              <span className="text-[10px] text-[#7a9cbf] font-medium">
                {suggestions.length} suggestion{suggestions.length !== 1 ? "s" : ""} — scoped to {searchScope}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* ── Result count when filtering ──────────────────────────────────── */}
      {query.trim() && (
        <p className="text-sm text-[#2a4a70]/70 mb-6 -mt-4">
          {filtered.length === 0
            ? "No products matched your search."
            : `Showing ${filtered.length} of ${products.length} products`}
        </p>
      )}

      {/* ── Product grid ─────────────────────────────────────────────────── */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              style={{ "--shimmer-delay": `${(i % 5) * 0.9}s` } as React.CSSProperties}
            >
              <BSPProductCard product={product} index={i} basePath={basePath} categoryLabel={categoryLabel} productType={productType} productTypeLabel={productTypeLabel} disableDetails={disableProductLinks} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Search size={36} className="text-[#b0cce4] mb-4" />
          <p className="text-[#2a4a70] font-semibold text-base">No results for &ldquo;{query}&rdquo;</p>
          <p className="text-[#7a9cbf] text-sm mt-1">Try a different name or product code.</p>
          <button
            onClick={handleClear}
            className="mt-4 text-sm text-[#1a5fa8] hover:text-[#e05a2e] transition-colors font-medium underline underline-offset-2"
          >
            Clear search
          </button>
        </div>
      )}
    </>
  )
}
