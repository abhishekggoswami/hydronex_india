"use client"

import Link from "next/link"
import { ArrowRight, ChevronRight, Clock, Menu, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"

type NavItem = {
  name: string
  href: string
  children?: NavItem[]
}

const productTree: NavItem[] = [
  { name: "Hydraulic Hoses", href: "/products/hydraulic-hoses" },
  { name: "Spiral Hoses", href: "/products/spiral-hoses" },
  { name: "Industrial Hoses", href: "/products/industrial-hoses" },
  { name: "High Temperature Hoses", href: "/products/high-temperature-hoses" },
  { name: "S.S. Corrugated & Teflon Hoses", href: "/products/ss-corrugated-teflon-hoses" },
  { name: "Low Pressure Hoses", href: "/products/low-pressure-hoses" },
  { name: "Special Application Hoses", href: "/products/special-application-hoses" },
  { name: "Hydraulic Accessories", href: "/products/hydraulic-accessories" },
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
  { name: "Hydraulic Hose End Fittings", href: "/products/hydraulic-hose-end-fittings" },
  {
    name: "Hydraulic Fittings",
    href: "/products/hydraulic-fittings",
    children: [
      {
        name: "Metric Hose Fittings",
        href: "/products/hydraulic-fittings/metric",
        children: [{ name: "British BSP Fittings", href: "/products/hydraulic-fittings/british-bsp" }],
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

export function LandingBrandLogo({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <div className={compact ? "h-[48px] w-[176px] shrink-0 overflow-hidden sm:h-[50px] sm:w-[182px]" : "h-[48px] w-[168px] shrink-0 overflow-hidden sm:h-[54px] sm:w-[188px]"}>
      <img
        src={light ? "/hydronex-logo-light.png" : "/hydronex-logo-dark.png"}
        alt="Hydronex"
        className="block max-w-none"
        style={compact ? { width: "188px", height: "188px", marginTop: "-70px", marginLeft: "-9px" } : { width: "207px", height: "207px", marginTop: "-77px", marginLeft: "-10px" }}
      />
    </div>
  )
}

function QuoteButton({ label = "Request a quote", onClick, lime = false }: { label?: string; onClick?: () => void; lime?: boolean }) {
  return (
    <Link href="/contact" onClick={onClick} className={`group inline-flex items-center gap-3 rounded-full py-2 pl-5 pr-2 text-[13px] font-bold transition-colors ${lime ? "bg-[#e7ea45] text-[#112c25] hover:bg-[#d9dd36]" : "bg-[#f26522] text-white hover:bg-[#dc591d]"}`}>
      <span>{label}</span>
      <span className={`flex h-7 w-7 items-center justify-center rounded-full bg-white ${lime ? "text-[#112c25]" : "text-[#f26522]"}`}>
        <ArrowRight size={14} className="transition-transform duration-300 group-hover:-rotate-45" />
      </span>
    </Link>
  )
}

function MobileProductTree({ close }: { close: () => void }) {
  return (
    <div className="mt-2 max-h-[58vh] overflow-y-auto border-t border-black/10 pt-2">
      {productTree.map((item) => (
        <details key={item.href} className="border-b border-black/10 py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-2.5 text-sm font-semibold">
            <Link href={item.href} onClick={close} className="flex-1">{item.name}</Link>
            {item.children ? <ChevronRight size={15} className="shrink-0" /> : null}
          </summary>
          {item.children && (
            <div className="mb-2 ml-3 border-l border-black/10 pl-3">
              {item.children.map((child) => (
                <div key={child.href} className="py-1.5">
                  <Link href={child.href} onClick={close} className="text-sm text-black/65 hover:text-[#f26522]">{child.name}</Link>
                  {child.children?.map((grandchild) => (
                    <Link key={grandchild.href} href={grandchild.href} onClick={close} className="mt-1 block text-xs font-semibold text-[#f26522]">↳ {grandchild.name}</Link>
                  ))}
                </div>
              ))}
            </div>
          )}
        </details>
      ))}
    </div>
  )
}

export function LandingProductNavbar() {
  const pathname = usePathname()
  const isReferenceLanding = pathname === "/" || pathname === "/about" || pathname === "/contact" || pathname === "/products" || pathname.startsWith("/products/hydraulic-fittings/british-bsp")
  const menuRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<NavItem>(
    productTree.find((item) => item.name === "Hydraulic Fittings") ?? productTree[0],
  )

  useEffect(() => {
    const closeOnOutsideInteraction = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setOpen(false)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", closeOnOutsideInteraction)
    document.addEventListener("keydown", closeOnEscape)
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideInteraction)
      document.removeEventListener("keydown", closeOnEscape)
    }
  }, [])

  const closeAll = () => {
    setOpen(false)
    setMobileOpen(false)
  }

  return (
    <header ref={menuRef} className={`relative z-40 mx-auto w-full ${isReferenceLanding ? "max-w-none bg-transparent px-0 pt-0 lg:px-5 lg:pt-3" : "max-w-[1560px] bg-transparent px-0 pt-0 lg:px-3 lg:pt-5"}`} style={{ fontFamily: "Arial, Helvetica, system-ui, sans-serif" }}>
      <nav className={`flex items-center justify-between gap-3 px-3 py-2 backdrop-blur-xl sm:px-4 sm:py-2.5 ${isReferenceLanding ? "rounded-none border-y border-white/70 bg-white/55 shadow-[0_12px_42px_rgba(13,36,59,0.12)] backdrop-blur-2xl lg:rounded-[1.35rem] lg:border" : "rounded-none border-y border-black/[0.07] bg-white/95 shadow-[0_12px_45px_rgba(20,20,20,0.1)] lg:rounded-full lg:border"}`}>
        <Link href="/" aria-label="Hydronex home" className="flex min-w-0 items-center" onClick={closeAll}>
          <LandingBrandLogo compact />
        </Link>
        <div className="hidden items-center gap-6 text-[13px] font-semibold min-[1180px]:flex">
          <Link href="/" className={`transition-colors hover:text-[#f26522] ${pathname === "/" ? "text-[#f26522]" : ""}`}>Home</Link>
          <button type="button" onClick={() => setOpen((current) => !current)} className={`transition-colors hover:text-[#f26522] ${pathname?.startsWith("/products") ? "text-[#f26522]" : ""}`} aria-expanded={open}>
            Products
          </button>
          <Link href="/#industries" className="transition-colors hover:text-[#f26522]">Industries</Link>
          <Link href="/about" className="transition-colors hover:text-[#f26522]">Company</Link>
          <Link href="/contact" className="transition-colors hover:text-[#f26522]">Contact</Link>
        </div>
        <div className="hidden items-center gap-3 min-[1180px]:flex">
          <span className="hidden items-center gap-2 border-r border-black/10 pr-4 text-[11px] font-semibold lg:flex"><span className="h-2 w-2 rounded-full bg-[#f26522]" /> Ready to support your next project</span>
          <span className="hidden items-center gap-1.5 text-[11px] text-black/55 xl:flex"><Clock size={13} /> IST</span>
          <QuoteButton label={isReferenceLanding ? "Get in touch" : "Request a quote"} lime={isReferenceLanding} />
        </div>
        <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#171717] text-white min-[1180px]:hidden" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((current) => !current)}>
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="absolute left-3 right-3 top-[calc(100%+0.7rem)] mx-auto max-w-[1160px] overflow-hidden rounded-[1.6rem] border border-white/70 bg-white/70 shadow-[0_28px_80px_rgba(8,24,45,0.24)] backdrop-blur-2xl sm:left-5 sm:right-5">
          <div className="pointer-events-none absolute -left-20 top-12 h-64 w-64 rounded-full bg-[#74a5c2]/25 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-[#f26522]/20 blur-3xl" />
          <div className="relative z-10 grid min-h-[430px] grid-cols-[minmax(220px,0.31fr)_minmax(0,0.69fr)]">
            <aside className="border-r border-white/65 bg-white/35 p-4 backdrop-blur-xl">
              <p className="mb-3 px-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0b2744]/55">Product categories</p>
              <div className="grid gap-0.5">
                {productTree.map((item) => {
                  const isActive = activeCategory.href === item.href
                  return (
                    <Link key={item.href} href={item.href} onMouseEnter={() => setActiveCategory(item)} onFocus={() => setActiveCategory(item)} onClick={(event) => {
                      if (item.children?.length) {
                        event.preventDefault()
                        setActiveCategory(item)
                      } else {
                        setOpen(false)
                      }
                    }} className={`flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-[12px] font-semibold transition-all duration-300 ${isActive ? "border border-white/80 bg-white/80 text-[#e95518] shadow-[0_8px_20px_rgba(13,36,59,0.1)]" : "border border-transparent text-[#12263d]/75 hover:border-white/70 hover:bg-white/55 hover:text-[#0b1f37]"}`}>
                      <span>{item.name}</span>
                      {item.children ? <ChevronRight size={14} className="shrink-0" /> : null}
                    </Link>
                  )
                })}
              </div>
            </aside>
            <section className="bg-white/20 p-7">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#e95518]">Explore product line</p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-[-0.06em] text-[#0b1f37]">{activeCategory.name}</h2>
                </div>
                <Link href={activeCategory.href} onClick={() => setOpen(false)} className="group mt-1 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/75 bg-white/55 px-3 py-2 text-sm font-bold text-[#0b1f37]/75 shadow-[0_6px_18px_rgba(13,36,59,0.07)] transition-all hover:bg-white hover:text-[#f26522]">View category <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></Link>
              </div>
              {activeCategory.children ? (
                <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-3">
                  {activeCategory.children.map((item) => (
                    <div key={item.href} className="group rounded-2xl border border-white/75 bg-white/50 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_24px_rgba(13,36,59,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f26522]/45 hover:bg-white/85 hover:shadow-[0_16px_30px_rgba(13,36,59,0.12)]">
                      <Link href={item.href} onClick={() => setOpen(false)} className="flex items-start justify-between gap-3 text-sm font-bold leading-5 text-[#202020]"><span>{item.name}</span><ArrowRight size={15} className="mt-0.5 shrink-0 text-[#f26522] transition-transform group-hover:-rotate-45" /></Link>
                      {item.children?.map((grandchild) => (
                        <Link key={grandchild.href} href={grandchild.href} onClick={() => setOpen(false)} className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-[#f26522] hover:underline"><span className="h-1.5 w-1.5 rounded-full bg-[#f26522]" /> {grandchild.name}</Link>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-7 flex min-h-[230px] items-end rounded-[1.25rem] border border-white/20 bg-[linear-gradient(135deg,rgba(11,31,55,.95),rgba(39,85,116,.82))] p-7 text-white shadow-[0_16px_36px_rgba(10,34,62,0.18)] backdrop-blur-md">
                  <div><p className="max-w-md text-lg leading-7 text-white/75">Explore the complete {activeCategory.name.toLowerCase()} range, with product specifications and application guidance.</p><Link href={activeCategory.href} onClick={() => setOpen(false)} className="mt-6 inline-flex items-center gap-2 text-sm font-bold">Browse products <ArrowRight size={16} /></Link></div>
                </div>
              )}
            </section>
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="absolute left-3 right-3 top-[calc(100%+0.7rem)] rounded-[1.5rem] bg-white p-5 shadow-2xl min-[1180px]:hidden">
          <div className="mb-3 flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/45">Navigation</span><button type="button" onClick={closeAll} aria-label="Close menu" className="rounded-full bg-black p-1.5 text-white"><X size={14} /></button></div>
          <MobileProductTree close={closeAll} />
          <div className="mt-3 grid grid-cols-4 gap-2 border-t border-black/10 pt-4 text-xs font-bold"><Link href="/" onClick={closeAll}>Home</Link><Link href="/#industries" onClick={closeAll}>Industries</Link><Link href="/about" onClick={closeAll}>Company</Link><Link href="/contact" onClick={closeAll}>Contact</Link></div>
          <div className="mt-5"><QuoteButton onClick={closeAll} /></div>
        </div>
      )}
    </header>
  )
}

export function LandingProductFooter() {
  return (
    <footer id="contact" className="relative z-20 isolate bg-[#151515] px-5 pb-7 pt-16 text-white sm:px-9 lg:px-14" style={{ backgroundColor: "#151515", fontFamily: "Arial, Helvetica, system-ui, sans-serif" }}>
      <div className="mx-auto grid max-w-[1280px] gap-12 border-b border-white/15 pb-14 md:grid-cols-[1.15fr_0.7fr_0.7fr_1fr]">
        <div>
          <LandingBrandLogo light />
          <p className="mt-6 max-w-sm text-sm leading-6 text-white/60">Hydraulic hoses, fittings and accessories for dependable fluid-power systems.</p>
          <div className="mt-7"><QuoteButton /></div>
        </div>
        <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#f26522]">Products</p><div className="mt-5 flex flex-col gap-3 text-sm text-white/70"><Link href="/products/hydraulic-hoses" className="hover:text-white">Hydraulic Hoses</Link><Link href="/products/hydraulic-fittings" className="hover:text-white">Hydraulic Fittings</Link><Link href="/products/hydraulic-quick-couplings" className="hover:text-white">Quick Couplings</Link></div></div>
        <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#f26522]">Company</p><div className="mt-5 flex flex-col gap-3 text-sm text-white/70"><Link href="/about" className="hover:text-white">About Hydronex</Link><Link href="/blog" className="hover:text-white">Insights</Link><Link href="/contact" className="hover:text-white">Contact us</Link></div></div>
        <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#f26522]">Get in touch</p><div className="mt-5 flex flex-col gap-4 text-sm text-white/70"><a href="tel:+180098745698" className="flex items-center gap-2 hover:text-white">+1 (800) 987 456 98</a><a href="mailto:info@hydronex.com" className="flex items-center gap-2 hover:text-white">info@hydronex.com</a></div></div>
      </div>
      <div className="mx-auto flex max-w-[1280px] flex-col gap-3 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Hydronex. All rights reserved.</span><span>Engineered for dependable connections.</span></div>
    </footer>
  )
}
