"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Search, Menu, X, ChevronDown, ChevronRight, ChevronLeft, Phone, Mail, Zap } from "lucide-react"

// ─── Category tree ────────────────────────────────────────────────────────────
type NavItem = {
  name: string
  href: string
  children?: NavItem[]
}

const productTree: NavItem[] = [
  { name: "Hydraulic Hoses",                href: "/products/hydraulic-hoses" },
  { name: "Spiral Hoses",                   href: "/products/spiral-hoses" },
  { name: "Industrial Hoses",               href: "/products/industrial-hoses" },
  { name: "High Temperature Hoses",         href: "/products/high-temperature-hoses" },
  { name: "S.S. Corrugated & Teflon Hoses", href: "/products/ss-corrugated-teflon-hoses" },
  { name: "Low Pressure Hoses",             href: "/products/low-pressure-hoses" },
  { name: "Special Application Hoses",      href: "/products/special-application-hoses" },
  { name: "Hydraulic Accessories",          href: "/products/hydraulic-accessories" },
  {
    name: "Hydraulic Pumps",
    href: "/products/hydraulic-pumps",
    children: [
      { name: "Hand Pumps", href: "/products/hydraulic-pumps/hand-pumps" },
      { name: "Bent Axis Pumps", href: "/products/hydraulic-pumps/bent-axis-pumps" },
      { name: "Variable Displacement Pumps", href: "/products/hydraulic-pumps/variable-displacement-pumps" },
      { name: "Gear Pumps", href: "/products/hydraulic-pumps/gear-pumps" },
      { name: "Vane Pumps", href: "/products/hydraulic-pumps/vane-pumps" },
    ],
  },
  {
    name: "Hydraulic Motors",
    href: "/products/hydraulic-motors",
    children: [
      { name: "Orbital Motors", href: "/products/hydraulic-motors/orbital-motors" },
      { name: "Bent Axis Piston Motors", href: "/products/hydraulic-motors/bent-axis-piston-motors" },
      { name: "Radial Piston Motors", href: "/products/hydraulic-motors/radial-piston-motors" },
    ],
  },
  {
    name: "Hydraulic Cylinders",
    href: "/products/hydraulic-cylinders",
    children: [
      { name: "Single Acting Cylinders", href: "/products/hydraulic-cylinders/single-acting-cylinders" },
      { name: "Double Acting Cylinders", href: "/products/hydraulic-cylinders/double-acting-cylinders" },
    ],
  },
  {
    name: "Mobile Control Valve",
    href: "/products/mobile-control-valve",
    children: [
      { name: "Sectional Valves", href: "/products/mobile-control-valve/sectional-valves" },
      { name: "Monoblock Valves", href: "/products/mobile-control-valve/monoblock-valves" },
    ],
  },
  { name: "Hydraulic Hose End Fittings",    href: "/products/hydraulic-hose-end-fittings" },
  {
    name: "Hydraulic Fittings",
    href: "/products/hydraulic-fittings",
    children: [
      {
        name: "Metric Hose Fittings",
        href: "/products/hydraulic-fittings/metric",
        children: [
          { name: "British BSP Fittings", href: "/products/hydraulic-fittings/british-bsp" },
        ],
      },
      { name: "NPT Hydraulic Fittings", href: "/products/hydraulic-fittings/npt" },
      { name: "American NPSM Fittings", href: "/products/hydraulic-fittings/american-npsm" },
      { name: "JIC Hydraulic Fittings", href: "/products/hydraulic-fittings/jic" },
      { name: "JIS Fittings", href: "/products/hydraulic-fittings/jis-fittings" },
      { name: "ORFS Hydraulic Fittings", href: "/products/hydraulic-fittings/orfs" },
      { name: "Banjo Fittings", href: "/products/hydraulic-fittings/banjo-fittings" },
      { name: "Socketless Fittings", href: "/products/hydraulic-fittings/socketless-fittings" },
      { name: "Reusable Hose Fittings", href: "/products/hydraulic-fittings/reusable-hose-fittings" },
      { name: "Ferrules", href: "/products/hydraulic-fittings/ferrules" },
    ],
  },
  { name: "Hydraulic Adapters", href: "/products/hydraulic-adapters" },
  {
    name: "Hydraulic Quick Couplings",
    href: "/products/hydraulic-quick-couplings",
    children: [
      { name: "ISO-A Couplers", href: "/products/hydraulic-quick-couplings/iso-a-couplers" },
      { name: "ISO-B Couplers", href: "/products/hydraulic-quick-couplings/iso-b-couplers" },
      { name: "Push And Pull Coupler", href: "/products/hydraulic-quick-couplings/push-and-pull-coupler" },
      { name: "Quick-Release Couplers", href: "/products/hydraulic-quick-couplings/quick-release-couplers" },
      { name: "High-Pressure Couplers", href: "/products/hydraulic-quick-couplings/high-pressure-couplers" },
      { name: "Flat-Face Couplers", href: "/products/hydraulic-quick-couplings/flat-face-couplers" },
      { name: "Threaded Couplers", href: "/products/hydraulic-quick-couplings/threaded-couplers" },
      { name: "Straight Through Couplings", href: "/products/hydraulic-quick-couplings/straight-through-couplings" },
      { name: "Brass Mold Coolant-Line Quick Couplers", href: "/products/hydraulic-quick-couplings/brass-mold-coolant-line" },
      { name: "Dust Plug", href: "/products/hydraulic-quick-couplings/dust-plug" },
    ],
  },
]

const navLinks = [
  { name: "About",    href: "/#about" },
  { name: "Blog",     href: "/#blog" },
  { name: "Contacts", href: "/#contact" },
]

// ─── Component ────────────────────────────────────────────────────────────────
export default function Navbar() {
  const pathname = usePathname()
  const router   = useRouter()
  const headerRef = useRef<HTMLElement>(null)

  const [desktopOpen, setDesktopOpen] = useState(false)
  const [activeL2,    setActiveL2]    = useState<NavItem | null>(null)
  const [activeL3,    setActiveL3]    = useState<NavItem | null>(null)

  function openDesktop() {
    setDesktopOpen(true)
    setActiveL2(null)
    setActiveL3(null)
  }
  function closeAll() {
    setDesktopOpen(false)
    setActiveL2(null)
    setActiveL3(null)
  }
  function handleL1Click(item: NavItem) {
    if (item.children?.length) {
      setActiveL2(item)
      setActiveL3(null)
    } else {
      router.push(item.href)
      closeAll()
    }
  }
  function handleL2Click(item: NavItem) {
    if (item.children?.length) {
      setActiveL3(item)
    } else {
      router.push(item.href)
      closeAll()
    }
  }
  function handleL3Click(item: NavItem) {
    router.push(item.href)
    closeAll()
  }

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        closeAll()
      }
    }
    if (desktopOpen) document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [desktopOpen])

  // Mobile
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileL2,   setMobileL2]   = useState<string | null>(null)
  const [mobileL3,   setMobileL3]   = useState<string | null>(null)

  function closeMobile() { setMobileOpen(false); setMobileL2(null); setMobileL3(null) }

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full">

      {/* ── Top bar ───────────────────────────────────────────────────── */}
      <div
        style={{
          background: "linear-gradient(90deg, #0a0f1a 0%, #111827 50%, #0a0f1a 100%)",
          borderBottom: "1px solid rgba(224,90,46,0.18)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-10">
          {/* Left: quick-category pills */}
          <div className="hidden md:flex items-center gap-5">
            {["Hydraulic Hoses", "Industrial Hoses", "Fittings & Accessories"].map((label, i) => (
              <span key={label} className="flex items-center gap-4">
                {i > 0 && <span style={{ color: "rgba(224,90,46,0.35)", fontSize: "10px" }}>◆</span>}
                <span
                  className="text-[11px] font-medium tracking-wide cursor-pointer transition-colors duration-200"
                  style={{ color: "rgba(200,210,230,0.65)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#e05a2e")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(200,210,230,0.65)")}
                >
                  {label}
                </span>
              </span>
            ))}
          </div>

          {/* Right: contact info */}
          <div className="hidden md:flex items-center gap-5 ml-auto">
            <a
              href="tel:+18009874569"
              className="flex items-center gap-1.5 text-[11px] font-medium transition-colors duration-200"
              style={{ color: "rgba(200,210,230,0.65)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#e05a2e")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(200,210,230,0.65)")}
            >
              <Phone size={11} className="shrink-0" />
              +1 (800) 987 456 98
            </a>
            <span style={{ width: "1px", height: "14px", background: "rgba(255,255,255,0.12)", display: "inline-block" }} />
            <a
              href="mailto:info@hydronex.com"
              className="flex items-center gap-1.5 text-[11px] font-medium transition-colors duration-200"
              style={{ color: "rgba(200,210,230,0.65)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#e05a2e")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(200,210,230,0.65)")}
            >
              <Mail size={11} className="shrink-0" />
              info@hydronex.com
            </a>
          </div>
        </div>
      </div>

      {/* ── Main nav ────────────────��─────────────────────────────────── */}
      <nav
        className="relative bg-white"
        style={{
          boxShadow: desktopOpen
            ? "0 2px 0 0 #e05a2e"
            : "0 1px 0 0 #e8eef5, 0 2px 12px rgba(0,0,0,0.06)",
          transition: "box-shadow 0.2s ease",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mr-10 shrink-0" onClick={closeAll}>
            <div className="overflow-hidden flex-shrink-0" style={{ width: "131px", height: "38px" }}>
              <img
                src="/hydronex-logo-dark.png"
                alt="Hydronex Logo"
                style={{
                  width: "146px", height: "146px",
                  marginTop: "-54px", marginLeft: "-7px",
                  display: "block", flexShrink: 0,
                }}
              />
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7 flex-1">
            <Link
              href="/"
              onClick={closeAll}
              className="relative text-sm font-medium py-5 group transition-colors"
              style={{ color: pathname === "/" ? "#e05a2e" : "#1f2937" }}
              onMouseEnter={e => { if (pathname !== "/") (e.currentTarget as HTMLElement).style.color = "#e05a2e" }}
              onMouseLeave={e => { if (pathname !== "/") (e.currentTarget as HTMLElement).style.color = "#1f2937" }}
            >
              Home
              <span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-[#e05a2e] transition-transform origin-left"
                style={{ transform: pathname === "/" ? "scaleX(1)" : "scaleX(0)" }}
              />
            </Link>

            {/* Products trigger */}
            <div className="relative">
              <button
                onClick={() => desktopOpen ? closeAll() : openDesktop()}
                className="flex items-center gap-1.5 text-sm font-medium py-5 transition-colors"
                style={{ color: pathname?.startsWith("/products") || desktopOpen ? "#e05a2e" : "#1f2937" }}
              >
                Products
                <ChevronDown
                  size={13}
                  style={{
                    transition: "transform 0.2s ease",
                    transform: desktopOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              <span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-[#e05a2e] transition-transform origin-left"
                style={{ transform: pathname?.startsWith("/products") || desktopOpen ? "scaleX(1)" : "scaleX(0)" }}
              />
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeAll}
                className="relative text-sm font-medium py-5 group transition-colors"
                style={{ color: "#1f2937" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#e05a2e")}
                onMouseLeave={e => (e.currentTarget.style.color = "#1f2937")}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#e05a2e] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="ml-auto flex items-center gap-3">
            <button
              aria-label="Search"
              className="hidden lg:flex items-center justify-center w-9 h-9 rounded-full transition-colors"
              style={{ color: "#6b7280" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = "#e05a2e"
                ;(e.currentTarget as HTMLElement).style.background = "#fff4f0"
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = "#6b7280"
                ;(e.currentTarget as HTMLElement).style.background = "transparent"
              }}
            >
              <Search size={18} />
            </button>

            <a
              href="/#contact"
              onClick={closeAll}
              className="hidden lg:flex items-center gap-2 text-white text-sm font-bold px-6 h-16 transition-colors tracking-wide"
              style={{ background: "#e05a2e", letterSpacing: "0.02em" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#c94d24")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#e05a2e")}
            >
              <Zap size={14} className="shrink-0" />
              Get A Quote
            </a>

            <button
              className="lg:hidden text-gray-700 p-1"
              onClick={() => { setMobileOpen(!mobileOpen); setMobileL2(null); setMobileL3(null) }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── Desktop dropdown — ABSOLUTE inside sticky header ────────── */}
        {desktopOpen && (
          <div
            className="absolute left-0 right-0 top-full z-50"
            style={{
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              borderTop: "2px solid #e05a2e",
            }}
          >
            {/* L1 panel */}
            <div
              className="bg-white w-full transition-all duration-200"
              style={{
                opacity: activeL2 ? 0.25 : 1,
                pointerEvents: activeL2 ? "none" : "auto",
                filter: activeL2 ? "blur(1px)" : "none",
              }}
            >
              <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between"
                style={{ borderBottom: "1px solid #f1f5f9" }}>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  All Product Categories
                </span>
                <Link
                  href="/products"
                  onClick={closeAll}
                  className="text-[11px] font-semibold text-[#e05a2e] hover:underline flex items-center gap-0.5"
                >
                  Browse All <ChevronRight size={11} />
                </Link>
              </div>
              <div className="max-w-7xl mx-auto px-6 py-3">
                <div className="grid grid-cols-5 gap-x-3 gap-y-1">
                  {productTree.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleL1Click(item)}
                      className="flex items-center justify-between gap-1 px-3 py-2.5 text-[13px] rounded-lg text-left transition-all duration-150"
                      style={{
                        color: activeL2?.href === item.href || pathname?.startsWith(item.href) ? "#e05a2e" : "#374151",
                        fontWeight: activeL2?.href === item.href || pathname?.startsWith(item.href) ? 600 : 400,
                        background: activeL2?.href === item.href || pathname?.startsWith(item.href) ? "#fff4f0" : "transparent",
                      }}
                      onMouseEnter={e => {
                        if (activeL2?.href !== item.href && !pathname?.startsWith(item.href)) {
                          (e.currentTarget as HTMLElement).style.background = "#f9fafb"
                          ;(e.currentTarget as HTMLElement).style.color = "#e05a2e"
                        }
                      }}
                      onMouseLeave={e => {
                        if (activeL2?.href !== item.href && !pathname?.startsWith(item.href)) {
                          (e.currentTarget as HTMLElement).style.background = "transparent"
                          ;(e.currentTarget as HTMLElement).style.color = "#374151"
                        }
                      }}
                    >
                      <span>{item.name}</span>
                      {item.children?.length ? (
                        <ChevronRight size={12} style={{ color: "#d1d5db", flexShrink: 0 }} />
                      ) : null}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* L2 panel */}
            {activeL2 && (
              <div
                className="bg-white w-full transition-all duration-200"
                style={{
                  borderTop: "1px solid #f1f5f9",
                  opacity: activeL3 ? 0.25 : 1,
                  pointerEvents: activeL3 ? "none" : "auto",
                  filter: activeL3 ? "blur(1px)" : "none",
                }}
              >
                <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center gap-3"
                  style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <button
                    onClick={() => { setActiveL2(null); setActiveL3(null) }}
                    className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-[#e05a2e] transition-colors"
                  >
                    <ChevronLeft size={13} /> Back
                  </button>
                  <span style={{ color: "#e2e8f0" }}>|</span>
                  <button
                    onClick={() => { router.push(activeL2.href); closeAll() }}
                    className="text-[11px] font-bold uppercase tracking-widest hover:text-[#e05a2e] transition-colors"
                    style={{ color: "#0f172a" }}
                  >
                    {activeL2.name}
                  </button>
                </div>
                <div className="max-w-7xl mx-auto px-6 py-3">
                  <div className="grid grid-cols-5 gap-x-3 gap-y-1">
                    {activeL2.children?.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => handleL2Click(item)}
                        className="flex items-center justify-between gap-1 px-3 py-2.5 text-[13px] rounded-lg text-left transition-all duration-150"
                        style={{
                          color: activeL3?.href === item.href || pathname?.startsWith(item.href) ? "#e05a2e" : "#374151",
                          fontWeight: activeL3?.href === item.href || pathname?.startsWith(item.href) ? 600 : 400,
                          background: activeL3?.href === item.href || pathname?.startsWith(item.href) ? "#fff4f0" : "transparent",
                        }}
                        onMouseEnter={e => {
                          if (activeL3?.href !== item.href && !pathname?.startsWith(item.href)) {
                            (e.currentTarget as HTMLElement).style.background = "#f9fafb"
                            ;(e.currentTarget as HTMLElement).style.color = "#e05a2e"
                          }
                        }}
                        onMouseLeave={e => {
                          if (activeL3?.href !== item.href && !pathname?.startsWith(item.href)) {
                            (e.currentTarget as HTMLElement).style.background = "transparent"
                            ;(e.currentTarget as HTMLElement).style.color = "#374151"
                          }
                        }}
                      >
                        <span>{item.name}</span>
                        {item.children?.length ? (
                          <ChevronRight size={12} style={{ color: "#d1d5db", flexShrink: 0 }} />
                        ) : null}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* L3 panel */}
            {activeL3 && (
              <div
                className="bg-white w-full"
                style={{ borderTop: "1px solid #f1f5f9" }}
              >
                <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center gap-3"
                  style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <button
                    onClick={() => setActiveL3(null)}
                    className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-[#e05a2e] transition-colors"
                  >
                    <ChevronLeft size={13} /> Back
                  </button>
                  <span style={{ color: "#e2e8f0" }}>|</span>
                  <button
                    onClick={() => { router.push(activeL3.href); closeAll() }}
                    className="text-[11px] font-bold uppercase tracking-widest hover:text-[#e05a2e] transition-colors"
                    style={{ color: "#0f172a" }}
                  >
                    {activeL3.name}
                  </button>
                </div>
                <div className="max-w-7xl mx-auto px-6 py-3">
                  <div className="grid grid-cols-5 gap-x-3 gap-y-1">
                    {activeL3.children?.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => handleL3Click(item)}
                        className="px-3 py-2.5 text-[13px] rounded-lg text-left transition-all duration-150"
                        style={{
                          color: pathname?.startsWith(item.href) ? "#e05a2e" : "#374151",
                          fontWeight: pathname?.startsWith(item.href) ? 600 : 400,
                          background: pathname?.startsWith(item.href) ? "#fff4f0" : "transparent",
                        }}
                        onMouseEnter={e => {
                          if (!pathname?.startsWith(item.href)) {
                            (e.currentTarget as HTMLElement).style.background = "#f9fafb"
                            ;(e.currentTarget as HTMLElement).style.color = "#e05a2e"
                          }
                        }}
                        onMouseLeave={e => {
                          if (!pathname?.startsWith(item.href)) {
                            (e.currentTarget as HTMLElement).style.background = "transparent"
                            ;(e.currentTarget as HTMLElement).style.color = "#374151"
                          }
                        }}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── Mobile menu ──────────────────────────────────────────────── */}
        {mobileOpen && (
          <div
            className="lg:hidden bg-white border-t px-4 py-4 flex flex-col gap-0.5 max-h-[80vh] overflow-y-auto"
            style={{ borderColor: "#f1f5f9" }}
          >
            <Link
              href="/"
              className="block py-3 text-sm font-medium text-gray-700 hover:text-[#e05a2e] border-b"
              style={{ borderColor: "#f1f5f9" }}
              onClick={closeMobile}
            >
              Home
            </Link>

            <div className="border-b" style={{ borderColor: "#f1f5f9" }}>
              <button
                onClick={() => { setMobileL3(null); setMobileL2(mobileL2 === "__products__" ? null : "__products__") }}
                className="w-full flex items-center justify-between py-3 text-sm font-medium text-gray-700"
              >
                Products
                <ChevronDown size={14} className={`transition-transform ${mobileL2 === "__products__" ? "rotate-180" : ""}`} />
              </button>

              {mobileL2 === "__products__" && (
                <div className="pl-3 pb-2 flex flex-col">
                  <Link href="/products" className="block py-2 text-xs font-bold text-[#e05a2e]" onClick={closeMobile}>
                    Browse All Products →
                  </Link>
                  {productTree.map((item) => (
                    <div key={item.href} className="border-t" style={{ borderColor: "#f1f5f9" }}>
                      {item.children?.length ? (
                        <>
                          <button
                            onClick={() => setMobileL3(mobileL3 === item.href ? null : item.href)}
                            className="w-full flex items-center justify-between py-2.5 text-sm text-gray-600 font-medium"
                          >
                            <span
                              className="hover:text-[#e05a2e] text-left"
                              onClick={(e) => { e.stopPropagation(); router.push(item.href); closeMobile() }}
                            >
                              {item.name}
                            </span>
                            <ChevronRight size={13} className={`transition-transform shrink-0 ${mobileL3 === item.href ? "rotate-90" : ""}`} />
                          </button>
                          {mobileL3 === item.href && (
                            <div className="pl-4 flex flex-col pb-1">
                              {item.children.map((sub) => (
                                <div key={sub.href}>
                                  {sub.children?.length ? (
                                    <>
                                      <button
                                        className="w-full flex items-center justify-between py-2 text-sm text-gray-500"
                                        onClick={() => { router.push(sub.href); closeMobile() }}
                                      >
                                        <span className="hover:text-[#e05a2e] text-left">{sub.name}</span>
                                        <ChevronRight size={11} style={{ color: "#d1d5db", flexShrink: 0 }} />
                                      </button>
                                      <div className="pl-4 flex flex-col pb-1">
                                        {sub.children.map((deep) => (
                                          <button
                                            key={deep.href}
                                            onClick={() => { router.push(deep.href); closeMobile() }}
                                            className="flex items-center gap-2 py-1.5 text-sm text-gray-400 hover:text-[#e05a2e] text-left"
                                          >
                                            <span className="w-1 h-1 rounded-full bg-gray-300 shrink-0" />
                                            {deep.name}
                                          </button>
                                        ))}
                                      </div>
                                    </>
                                  ) : (
                                    <button
                                      onClick={() => { router.push(sub.href); closeMobile() }}
                                      className="flex items-center gap-2 py-2 text-sm text-gray-500 hover:text-[#e05a2e] w-full text-left"
                                    >
                                      <span className="w-1 h-1 rounded-full bg-[#e05a2e] shrink-0" />
                                      {sub.name}
                                    </button>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <button
                          onClick={() => { router.push(item.href); closeMobile() }}
                          className="w-full flex items-center py-2.5 text-sm text-gray-600 hover:text-[#e05a2e] font-medium text-left"
                        >
                          {item.name}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMobile}
                className="block py-3 text-sm font-medium text-gray-700 hover:text-[#e05a2e] border-b"
                style={{ borderColor: "#f1f5f9" }}
              >
                {link.name}
              </a>
            ))}

            <a
              href="/#contact"
              onClick={closeMobile}
              className="mt-3 block text-center text-white text-sm font-semibold py-3 rounded"
              style={{ background: "#e05a2e" }}
            >
              Get A Quote
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
